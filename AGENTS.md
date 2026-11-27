Single-page Astro app — "Find My Ideal Country": an interactive D3 world map, lifestyle quiz, and per-country relocation dossiers, rendered entirely client-side. No backend, no test suite; the substance of the repo is the country dataset in `src/data/` (~9k lines). `README.md` is still the stock Astro template — it does not describe this project.

## Commands

- `npx astro dev --background` — start the dev server as a background process (port 4321). Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`. Prefer this over a foreground dev server.
- `npm run build` — production build to `dist/`. This is the main "does it compile" gate: no linter or typechecker is configured (Vite strips types without checking; `astro check` would require installing `@astrojs/check`).
- `node scripts/qc-profile-sections.mjs` — content QC for `src/data/content/{locale}/*.ts`, exits 1 on errors (`--json` for machine output). Run it after any profile-copy change and keep it passing. It checks all 200 countries, including the 22 Tier-1 entries in `curated.ts`. `--locale en` (the default) validates the English tree; `--locale vi` validates the Vietnamese mirror tree with scaled length ranges and Vietnamese token bans.
- `node scripts/qc-i18n.mjs` — UI-dictionary key-parity checker for `src/i18n/{en,vi}.ts`, exits 1 on any missing/extra key, key-order drift, or `{var}` mismatch. Run it after any UI-dictionary change and keep it passing (Vite strips types, so the `vi: UIStrings` annotation alone does not enforce parity).
- `node scripts/qc-climate-profiles.mjs` — content QC for `src/data/climateProfiles.ts`, exits 1 on errors (`--json` for machine output). Run it after any climate-entry change and keep it passing.
- `node scripts/qc-social-warmth.mjs` — content QC for `src/data/socialWarmth.ts`, exits 1 on errors (`--json` for machine output). Run it after any social-warmth change and keep it passing.

Node >= 22.23.4 required (`engines` in package.json).

## Architecture

Two locales (`en`, `vi`) under Astro's built-in i18n routing (`astro.config.mjs`): `src/pages/[locale]/index.astro` renders the app shell at `/en/` and `/vi/`, and `src/pages/index.astro` is a static meta-refresh redirect to `/en/` (the file is required by Astro i18n; `redirectToDefaultLocale` is deliberately off because its redirect route would PrerenderRouteConflict with the required index page). The components in `src/components/` are static markup shells only — their strings come from the i18n dictionary (`tFor(Astro.currentLocale)`). All behavior is client-side TypeScript in `src/scripts/`, bundled from `Layout.astro`'s `<script src="../scripts/app.ts">`; `app.ts` orchestrates the map, quiz, search, dossier, toast, and author modules. The whole country catalog ships in that client bundle.

i18n plumbing (Phase 0 of `docs/i18n-plan.md`, zero Vietnamese translation yet): `src/i18n/` holds the isomorphic UI dictionary (`en.ts` is the key source of truth; `vi.ts` still carries English placeholder copy; `countryNames.ts` scaffolds exonyms). `app.ts` calls `await initLocale(localeFromDocument())` and `await loadContentLocale(locale)` once on boot before any UI renders, so every later `t()` / `getCompleteCountryProfile()` call stays synchronous; only the active locale's dictionary and prose chunk are ever downloaded (English users never fetch the `vi` chunks). Canonical English country names remain the internal keys and search selection identifiers everywhere.

Data flow:

- `src/data/countries.ts` — types (`CountryDossierProse`, `FlagshipCountryMetadata`, etc.), `COUNTRY_DATABASE` (tier-1 flagship metadata), `REGIONAL_TEMPLATES`, `QUIZ_QUESTIONS`.
- `src/data/globalCountries.ts` — `GLOBAL_COUNTRY_METADATA` (tier-2 catalog metadata) and `getCompleteCountryProfile()`, the single assembler that merges metadata + climate + practical factors + unified content (`CONTENT_EN`), falling back to regional templates (`estimateClimateProfile` infers climate where no explicit profile exists).
- Region content files live in `src/data/content/en/{region}.ts` covering the seven regions (europe-a, asia-a, asia-b-oceania, africa-a, africa-b, americas-a, caribbean) plus `curated.ts` (tier-1 flagship prose). Adding a region means updating the `index.ts` barrel and the `FILES` array in `scripts/qc-profile-sections.mjs`.
- `curated.ts` holds the tier-1 flagship country prose in the same `CountryDossierProse` schema and is gated by the same checks as the region files.
- Map geometry is fetched at runtime from `world-atlas@2` (countries-110m) on a CDN, so map shapes need network access in dev. Countries absent from that coarse atlas (microstates, small islands) get dot markers via `MAP_POINT_CENTROIDS` in `src/scripts/map.ts`.

## Content rules (enforced by the QC script)

The script is the source of truth. The checks most likely to bite:

- `downsides[0]` must equal the country's `realityCheck` verbatim (both live in the same `content/{locale}/` object).
- Exactly 3 upsides and 3 downsides; per-locale length ranges: EN — culture 250–450 chars, people and costOfLiving 200–400, bullets 30–260; VI — culture 280–550, people and costOfLiving 230–500, bullets 30–320; every string ends with a period.
- No double-quote characters; EN prose uses straight quotes only (curly singles banned); VI prose may use typographic apostrophes.
- Copy must not open with the country name and must not repeat any 6-word run from the tagline, workday, or evening.
- Banned tokens are per-locale (e.g. EN "hidden gem", VI "viên ngọc ẩn"; placeholder markers in both); "vibrant" ≤ 1 and "bustling" ≤ 2 per file.

## Styling

- Tailwind is compiled at build time: `tailwind.config.js` (theme colors/fonts/shadows, migrated from the old inline `tailwind.config` in `Layout.astro`) plus `postcss.config.cjs` run through Astro's PostCSS pipeline; the `@tailwind` directives sit at the top of `src/styles/global.css`. The content globs must keep scanning `src/**/*.{astro,ts,js,html}` — the quiz, dossier, search, and toast modules render markup from template literals in `src/scripts/*.ts`, so classes appearing only in TS still need compiling. The former Play CDN setup was removed for two verified failures: it emitted utilities alphabetically (so a `max-h-[90vh]` fallback beat `max-h-[90svh]`), and it never generated classes for JS-injected markup on WebKit, which silently dropped quiz-option `gap-3.5`, `border-dashed`, hover states, and friends on iOS.
- Tailwind's JIT sorts utilities alphabetically, so a fallback class paired with a "smarter" sibling can never win (`h-dvh` sorts before `h-screen`). Viewport-unit overrides therefore live in the `@supports` blocks at the bottom of `src/styles/global.css`, winning by ID/element specificity instead; the markup keeps plain `h-screen` / `max-h-[90vh]` as the pre-2022 fallbacks.
- D3 and topojson are `is:inline` CDN globals (declared `any` in TS), not npm dependencies.

## Documentation

Framework docs: https://docs.astro.build — see the [routing](https://docs.astro.build/en/guides/routing/) and [Astro components](https://docs.astro.build/en/basics/astro-components/) guides before changing pages or components.

## Practical-factors research (`src/data/practicalFactors.ts`)

`PRACTICAL_FACTORS` holds per-country practical-relocation data. Every field must be source-backed: absence or the `'unknown'` enum with the honest "not confirmed in this pass" wording is a valid outcome, guessing is not. Model entries: Portugal (fully sourced), Mexico (mixed sourcing), Comoros / Eritrea / Nauru (honest-unknown wording).

Per-field anchors:

- `englishEase` — EF EPI 2026 PDF (`https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/reports/2026/ef-epi-2026-english.pdf`); bands map very low→1 … very high→5. Ranked note template: `EF EPI 2026 places the country in the <band> adult English-proficiency band. Everyday service access still varies by location, age, and occupation.` Not ranked: open with `EF EPI 2026 does not rank <Country>.` then derive from official-language facts. Always cite the PDF.
- `airQuality` — IQAir 2025 population-weighted annual PM2.5 (`https://www.iqair.com/qa/world-most-polluted-countries`) vs the WHO 5 µg/m³ guideline: within → `good`, moderately above (below ~18) → `seasonal-issues`, heavily above (~18+) → `frequent-issues`; not covered → `unknown` with `A comparable 2025 national PM2.5 value was not confirmed in this pass; conditions vary by location and season.`
- `hazardLevel` / `hazardTypes` / `hazardNote` — the country's real ThinkHazard report (find the URL via the site's search or sitemap; never invent report IDs). Include every hazard rated medium or above. Standard note: `ThinkHazard reports these national maximum classifications; exposure varies by location, so check local maps for a specific home or route.`
- `tapWater` — CDC destination page (`https://wwwnc.cdc.gov/travel/destinations/traveler/none/<slug>`); a national water authority beats CDC when readable. Use `regional` when the capital's supply is treated but rural areas are not.
- `healthcare` — system shape (public / private-required / affordable-private / mixed / unknown), one hedged sentence; CDC and official ministry pages anchor it.
- `taxProfile` — broad shape from the national revenue authority, OECD, or PwC tax summaries; the note is one hedged sentence ending `Not personal advice.` Never estimate an individual's tax.
- `visaFit` / `visaRoutes` — official immigration guidance only. `available` = a route exists in official guidance; `limited` = exists with real restrictions or instability; `unknown` = could not verify. Never guess available; visa law churns, so prefer limited/unknown with pattern-level notes.

Format: entry keys unquoted for single-word names, single-quoted for multi-word — except `"Côte d'Ivoire"`, which stays double-quoted exactly as in `globalCountries.ts`. Notes are single-quoted strings using the typographic apostrophe (’) — never a straight `'` inside a note. `sources` is a single-line array of URLs actually consulted: cite the EPI PDF, the IQAir page (when a value is used), the per-country ThinkHazard report, and CDC destinations — no generic homepages. Every entry carries `verifiedAt` (YYYY-MM-DD). Suggested field order: englishEase, englishEaseNote, airQuality, airQualityNote, visaRoutes, taxProfile, taxProfileNote, hazardLevel, hazardTypes, hazardNote, tapWater, tapWaterNote, visaFit, healthcare, healthcareNote, sources, verifiedAt.

Workflow that scales (used for the 2026-11 65-country pass): the orchestrator pre-extracts shared anchors (EF EPI bands from the PDF via `pdftotext`, IQAir values from the rankings page) into a cheat sheet so parallel batch agents cite identical data; each agent researches its countries against the per-field anchors, writes entry snippets plus a per-country unknowns/second-checks report outside the repo, and self-validates by eval'ing its snippet (asserting exact keys, no straight apostrophes in notes, non-empty sources). The orchestrator merges with assertions, then runs the gates: eval the whole record (each assigned key exactly once, no failures) and `npx astro build`. Conflict-affected states (Libya, Somalia, Syria, Yemen, Sudan, South Sudan, Myanmar, …) get hedged, pattern-level notes and should end up with several `'unknown'` fields rather than invented certainty.

## Climate-profile research (`src/data/climateProfiles.ts`)

`COUNTRY_CLIMATE_PROFILES` holds per-country climate summaries consumed by `getCompleteCountryProfile()` via `COUNTRY_CLIMATE_PROFILES[name] ?? estimateClimateProfile(...)` — new entries need zero wiring. The 22 tier-1 entries and the first tier-2 entries are curated; the 2026-11 pass added explicit entries for every remaining `GLOBAL_COUNTRY_METADATA` country so the coarse latitude-band estimator (`estimateClimateProfile`, kept only as the dead-last fallback) no longer answers for any live dossier. Model entries: Nepal (highland subtropical read against a four-seasons band), Kuwait (Gulf heat above the estimator's 35 °C ceiling), Kiribati (near-constant atoll range).

Schema semantics (`CountryClimateProfile` in `countries.ts`): `temperatureRangeCelsius` is [cooler-season, warmer-season] typical daytime highs for the populated band — not means, not extremes; integers only. `temperature` / `humidity` / `rainfall` / `snowfall` are the categorical enums. The dossier renders this via `describeClimateProfile` ("Approx. daytime highs X–Y°C" plus humidity/rain/snow lines). There is no per-entry `sources` field — provenance lives in this section and in the pass report, so the report must name anchors, normals periods, and every low-confidence entry.

Per-country anchor hierarchy, in order:

1. National meteorological service / WMO station normals for the capital or largest city.
2. Wikipedia climate charts for that city — transcriptions of NOAA/WMO/met-service station normals. One-hop rule: the table must be a station normals table with a cited source, not a forecast-site mashup.
3. Climate-Data.org (ERA5 reanalysis) where no readable station table exists.
4. Köppen classification (Peel et al. 2007, or the Wikipedia Köppen-by-country tables) as the categorical sanity check on temperature/humidity/rainfall/snowfall.

Population-weighted: one range per country, picked for the climate where people actually live — Bolivia → the Altiplano cities, not the Amazon lowlands; Nepal → the Kathmandu valley; Saudi Arabia → the Riyadh interior, not Jeddah's coast. Big in-country spreads (Eritrea highlands vs Red Sea coast, PNG coast vs highlands) go in the report; the schema has no room for them.

Refine, don't contradict, `dimensions.climate`: highland tropics (Rwanda, Burundi, Ethiopia) may legitimately read `temperate`/`warm` against a `tropical` band, but tropical + `very-cold`/`cool`, tropical + snowfall above `rare`, or cold-winter + `hot` is almost certainly an error. If research genuinely contradicts the band, keep the researched entry, whitelist it in `scripts/qc-climate-profiles.mjs` with the report's reason, and flag the metadata for a separate fix — never edit `GLOBAL_COUNTRY_METADATA` during a climate pass.

Honesty over precision: integer degrees; a wide-but-real range anchored to Köppen plus the nearest reliable station is the correct outcome for data-poor states (Somalia, Chad, North Korea, atoll microstates) — flag every such entry low-confidence in the report. Prefer 1991–2020 normals where both periods exist; never mix periods within one entry; note old-period reliance. Gulf-heat summer highs above 40 °C are realistic and wanted — do not cap at the estimator's 35. Narrow near-constant ranges (Singapore [30, 32], Kiribati) are correct, not a bug.

Format: one line per country, appended grouped by region under a short `// <Region>` comment; single-word keys unquoted, multi-word single-quoted — except `"Côte d'Ivoire"`, double-quoted exactly as in `globalCountries.ts`; values single-quoted. Never reformat, reorder, or "fix" the existing entries — flag suspected errors in the report instead.

Workflow that scales (used for the 2026-11 150-country pass): the orchestrator derives the uncovered list programmatically from `climateProfiles.ts` + `globalCountries.ts` (never from chat or docs), pre-extracts a cheat sheet (country → metadata region, `dimensions.climate` band, representative city, latitude, Köppen zone) into regional batch files, and runs parallel batch agents. Each agent researches its slice against the anchors, writes entry lines plus a per-country confidence/unknowns report outside the repo, and self-validates by eval'ing its snippet (exact key set, valid enums, integer ranges, categorical agreement). The orchestrator merges with assertions (exact coverage, no collisions with curated entries), then runs the gates: `node scripts/qc-climate-profiles.mjs`, `node scripts/qc-profile-sections.mjs`, `npx astro build`, then greps `dist/_astro/*.js` for new keys to confirm the bundle. Conflict-affected and data-poor states get wide-but-real ranges and low-confidence flags rather than invented precision.

## Social-warmth research (`src/data/socialWarmth.ts`)

`COUNTRY_SOCIAL_WARMTH` holds per-country default social-fabric assessments consumed by `getCompleteCountryProfile()` via `COUNTRY_SOCIAL_WARMTH[name]?.warmth ?? estimateSocialWarmth(...)` — all 200 countries (22 tier-1 curated, 178 tier-2 catalog) are explicitly mapped so no live dossier falls back to continental estimates.

Schema semantics (`CountrySocialWarmth` in `countries.ts`):
- `warmth` integer 1..5:
  - 1: `privacy-first` (closed doors are the norm, personal questions at work are avoided, friendships chosen, slow, durable; Germany, Nordics, Switzerland, Austria).
  - 2: `reserved-courteous` (boundaries respected, prying rare, in-groups dense but newcomer entry slow and context-gated; Japan, South Korea, Czechia, Poland).
  - 3: `balanced` (courtesy first, situational warmth, friendships form through repeated shared contexts; France, UK, Canada, Australia, Singapore).
  - 4: `friendly-open` (quick surface warmth, casual invitations, accessible street and neighborhood sociability; Ireland, Spain, Greece, Thailand, Mexico urban).
  - 5: `community-woven` (street is the living room, neighbors are default social safety net, spontaneous invitations; Vietnam, Philippines, Indonesia, Colombia, Ghana, West Africa).
- `newcomerNote`: single-line string (80–240 chars) naming both sides of the tradeoff — warmth comes bundled with curiosity, gossip, and social obligations; privacy comes bundled with effort, slow pacing, and loneliness risk.

Model entries:
- Fully sourced / balanced: Portugal (warmth 4, café rhythms vs family pacing), Germany (warmth 1, quiet hours vs club requirement).
- Mixed / divergence: Australia (openness 5 vs warmth 3, casual banter vs suburban friend-circle barriers).
- Honest hedged / conflict: Chad, Libya, North Korea (pattern-level value, hedged note acknowledging clan solidarity vs surveillance or instability).

Format rules:
One line per country, grouped by region under `// <Region>` comments; single-word keys unquoted, multi-word single-quoted — except `"Côte d'Ivoire"`, double-quoted exactly as in `globalCountries.ts`; notes single-quoted using typographic apostrophes (’) only; ends with a period. Enforced by `node scripts/qc-social-warmth.mjs`.

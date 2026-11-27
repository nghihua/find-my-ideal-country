# Find My Ideal Country

A single-page Astro app for comparing 200 countries as relocation destinations: an interactive D3 world map, a lifestyle quiz that scores every country against your answers, and a per-country relocation dossier. Entirely client-side — no backend, no database; the substance of the site is a ~10k-line country dataset that ships in the bundle.

Live at `/en/` and `/vi/` (the root `/` redirects to `/en/`). Fully localized in Vietnamese: UI, quiz, all 200 country dossiers, and the hedged relocation-notes layer.

## Commands

```sh
npm install
npx astro dev --background   # dev server on :4321 (background; manage with `astro dev stop|status|logs`)
npm run build                # production build to dist/ — the "does it compile" gate
npm run preview              # preview the production build
```

Node >= 22.23.4 (see `engines` in `package.json`). No linter or typechecker is configured — Vite strips types without checking them, so the QC scripts below are the correctness gate.

## Content QC

The dataset is guarded by six exit-1 QC scripts — run the relevant one after touching its file, and keep them all passing:

| Script | Validates |
| :--- | :--- |
| `node scripts/qc-profile-sections.mjs` | Dossier prose in `src/data/content/{en,vi}/*.ts` — key coverage, `downsides[0] === realityCheck`, per-locale length ranges, banned tokens. `--locale en` (default) / `--locale vi`; `--json` for machine output |
| `node scripts/qc-i18n.mjs` | UI dictionary key parity/order/`{var}` consistency between `src/i18n/en.ts` and `vi.ts` |
| `node scripts/qc-climate-profiles.mjs` | `src/data/climateProfiles.ts` (200 entries) |
| `node scripts/qc-social-warmth.mjs` | `src/data/socialWarmth.ts` (200 entries) |
| `node scripts/qc-notes-vi.mjs` | Vietnamese relocation notes (`content/vi/practicalNotes.ts`, `socialNotes.ts`) incl. the locked honesty-phrase glossary |

The English files are the source of truth; every Vietnamese mirror must keep the same keys in the same order. Data rules (sourcing requirements, note templates, honesty wording) are documented in `AGENTS.md`.

## Architecture

- **Routing** — Astro built-in i18n: `src/pages/[locale]/index.astro` renders the app shell at `/en/` and `/vi/`; `src/pages/index.astro` is a static meta-refresh redirect to `/en/`.
- **Shell & behavior** — components in `src/components/` are static markup; all strings come from the i18n dictionary via `tFor(Astro.currentLocale)`. All behavior is client-side TypeScript in `src/scripts/`, bundled from `Layout.astro`; `app.ts` bootstraps map, quiz, search, dossier, toast, and author modules.
- **i18n plumbing** — `src/i18n/` holds the isomorphic typed dictionary (`t()` / `tFor()` / `initLocale`), and `countryNames.ts` maps canonical English country names to Vietnamese exonyms for search and display. The boot locale is resolved from `<html lang>`; only the active locale's dictionary and prose chunks are ever downloaded (English users never fetch the `vi` chunks).
- **Data flow** — `src/data/countries.ts` (types, tier-1 metadata, regional templates), `globalCountries.ts` (`getCompleteCountryProfile()`, the single assembler that merges metadata + climate + practical factors + prose with per-field English fallback), plus `climateProfiles.ts`, `practicalFactors.ts`, `socialWarmth.ts`, and the mirrored prose tree `src/data/content/{en,vi}/{region}.ts` (+ `curated.ts` for the 22 flagship countries).
- **Map** — geometry is fetched at runtime from `world-atlas@2` (countries-110m) on a CDN, so map shapes need network access in dev. Microstates missing from the coarse atlas get dot markers via `MAP_POINT_CENTROIDS` in `src/scripts/map.ts`. Search is accent-insensitive for Vietnamese input (`foldDiacritics` in `src/scripts/search.ts`).
- **Styling** — Tailwind compiled at build time (`tailwind.config.js` + `postcss.config.cjs`; directives at the top of `src/styles/global.css`). Content globs must keep scanning `src/**/*.{astro,ts,js,html}` because the quiz/dossier/search/toast modules render markup from TS template literals. Viewport-unit fallback overrides live in the `@supports` blocks at the bottom of `global.css` (Tailwind's JIT sorts utilities alphabetically, so a fallback class can never beat its smarter sibling by source order).
- **D3 and topojson** are `is:inline` CDN globals (declared `any` in TS), not npm dependencies.

The i18n implementation plan — routing, dictionaries, the data refactor, and the phased Vietnamese rollout — lives in `docs/i18n-plan.md`. Detailed content rules and per-field sourcing anchors are in `AGENTS.md`.

## Author

Built by [Hua Nghi](https://nghihua.io.vn) ([huanhatgianghi@gmail.com](mailto:huanhatgianghi@gmail.com)).

Single-page Astro app — "Find My Ideal Country": an interactive D3 world map, lifestyle quiz, and per-country relocation dossiers, rendered entirely client-side. No backend, no test suite; the substance of the repo is the country dataset in `src/data/` (~9k lines). `README.md` is still the stock Astro template — it does not describe this project.

## Commands

- `npx astro dev --background` — start the dev server as a background process (port 4321). Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`. Prefer this over a foreground dev server.
- `npm run build` — production build to `dist/`. This is the main "does it compile" gate: no linter or typechecker is configured (Vite strips types without checking; `astro check` would require installing `@astrojs/check`).
- `node scripts/qc-profile-sections.mjs` — content QC for `src/data/profileSections/*.ts`, exits 1 on errors (`--json` for machine output). Run it after any profile-copy change and keep it passing.

Node >= 22.23.4 required (`engines` in package.json).

## Architecture

One route: `src/pages/index.astro` composes the components in `src/components/` — static markup shells only. All behavior is client-side TypeScript in `src/scripts/`, bundled from `Layout.astro`'s `<script src="../scripts/app.ts">`; `app.ts` orchestrates the map, quiz, search, dossier, toast, and author modules. The whole country catalog ships in that client bundle.

Data flow:

- `src/data/countries.ts` — types, `COUNTRY_DATABASE` (tier-1 countries with full hand-written copy), `REGIONAL_TEMPLATES`, `QUIZ_QUESTIONS`.
- `src/data/globalCountries.ts` — `GLOBAL_COUNTRY_METADATA` (tier-2 catalog) and `getCompleteCountryProfile()`, the single assembler that merges metadata + climate + practical factors + daily rhythm + profile sections, falling back to regional templates (`estimateClimateProfile` infers climate where no explicit profile exists).
- Region content files must stay key-aligned: `src/data/dailyRhythm/{region}.ts` and `src/data/profileSections/{region}.ts` cover the same seven regions (europe-a, asia-a, asia-b-oceania, africa-a, africa-b, americas-a, caribbean) with the same country keys in the same order. Adding a region means updating both `index.ts` barrels and the `FILES` array in `scripts/qc-profile-sections.mjs`.
- `curated.ts` (in both directories) derives tier-1 entries from `COUNTRY_DATABASE`. Never hand-edit it — change `COUNTRY_DATABASE` instead.
- Map geometry is fetched at runtime from `world-atlas@2` (countries-110m) on a CDN, so map shapes need network access in dev. Countries absent from that coarse atlas (microstates, small islands) get dot markers via `MAP_POINT_CENTROIDS` in `src/scripts/map.ts`.

## Content rules (enforced by the QC script)

The script is the source of truth. The checks most likely to bite:

- `downsides[0]` must equal the country's `realityCheck` from `GLOBAL_COUNTRY_METADATA`, verbatim.
- Exactly 3 upsides and 3 downsides; culture 250–450 chars, people and costOfLiving 200–400, each bullet 30–260; every string ends with a period.
- No double-quote characters; straight quotes only, no curly quotes.
- Copy must not open with the country name and must not repeat any 6-word run from the tagline, workday, or evening.
- Banned tokens (e.g. "hidden gem", "something for everyone", placeholder markers); "vibrant" ≤ 1 and "bustling" ≤ 2 per file.

## Styling

- Tailwind runs from the Play CDN (`cdn.tailwindcss.com`), not a build step — there is no `tailwind.config` file. Theme colors/fonts live in the inline `tailwind.config` inside `src/layouts/Layout.astro`; custom CSS variables in `src/styles/global.css`.
- D3 and topojson are `is:inline` CDN globals (declared `any` in TS), not npm dependencies.

## Documentation

Framework docs: https://docs.astro.build — see the [routing](https://docs.astro.build/en/guides/routing/) and [Astro components](https://docs.astro.build/en/basics/astro-components/) guides before changing pages or components.

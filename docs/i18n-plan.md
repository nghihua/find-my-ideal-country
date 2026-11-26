# i18n Plan (Tentative)

**Status:** draft / tentative — not started
**Scope:** English + Vietnamese first; other languages later
**Date:** 2026-11-26

This is a planning document only. Nothing here has been implemented yet.

---

## 1. Summary

Adding Vietnamese means translating two very different things:

1. **UI + quiz strings** (~250 strings) — small, mechanical, mostly a code refactor.
2. **The country dataset prose** (~4,000 strings) — the app's actual substance, and the real work.

The recommended shape: Astro's built-in i18n routing for `/en/` and `/vi/` shells, a
tiny typed dictionary for UI strings, `getCompleteCountryProfile()` as the single
translation seam for country data, mirrored per-language data trees (so the QC
scripts keep working), dynamic imports so the bundle doesn't double, and a
generated flat "handoff sheet" workflow for translators / machine translation.

Rollout is phased so `/vi/` works from day one with English fallback and lights up
 progressively.

---

## 2. What text exists, and where

Three layers, treated separately throughout this plan.

### Layer 1 — UI chrome (~150 strings)

- Static markup in `.astro` shells: `src/components/{Header,CountryPanel,QuizModal,AuthorModal,MapContainer,Toast}.astro`
  (search placeholder, panel/modal titles, aria labels, author modal copy — ~32 strings).
- Inline strings inside script template literals:
  - `src/scripts/quiz.ts` — result card ("You Should Live in …", "Compare top two",
    "Download persona card", …)
  - `src/scripts/dossier.ts` — section headings ("Practical relocation factors",
    "Learn more about …"), climate badge labels
  - `src/scripts/search.ts`, `src/scripts/map.ts`, `src/scripts/toast.ts`
- `src/layouts/Layout.astro` — `<title>`, meta description, `lang`.

This is the only layer that requires *code* changes (extracting strings from
template literals into lookups).

### Layer 2 — Quiz content (~90 strings)

`QUIZ_QUESTIONS` in `src/data/countries.ts`: 9 questions × (question, subtitle,
stageName, ~5 options × label/desc).

Translates for free: scoring matches on `value` enums (`'public'`, `'remote'`, …),
never on labels, so translated quiz labels need zero logic changes.

### Layer 3 — Country prose (~4,000 strings — the elephant)

| Source | Entries | Strings each | ≈ Total |
| --- | --- | --- | --- |
| `COUNTRY_DATABASE` (tier-1) in `src/data/countries.ts` | 44 | ~12 (tagline, culture, people, costOfLiving, workday, evening, 3 upsides, 3 downsides, realityCheck) | 550 |
| `GLOBAL_COUNTRY_METADATA` (tier-2) in `src/data/globalCountries.ts` | 178 | ~3 (tagline, realityCheck, region) | 600 |
| `src/data/dailyRhythm/*` | 178 | 2 (workday, evening) | 356 |
| `src/data/profileSections/*` | 178 | 9 (culture, people, costOfLiving, 3 upsides, 3 downsides) | 1,600 |
| `src/data/practicalFactors.ts` notes | ~200 | up to 6 hedged notes | 1,000 |
| `REGIONAL_TEMPLATES` fallbacks | 7 regions | template copy | — |
| Country display names | ~200 | 1 (short) | 200 |

**Total: roughly 4,000–4,500 prose strings.**

### What translates for free (no data changes needed)

- `climateProfiles.ts` (200 entries) is enums + integer ranges — zero translation.
  Only the `describeClimateProfilePoints()` / `describeClimateProfile()` composers
  in `src/data/climateProfiles.ts` need Vietnamese label dictionaries.
- All `dimensions` / `value` enums are machine values.
- `"9.2 / 10"` scores work as-is.

---

## 3. Architecture decisions (recommended)

### 3.1 Routing — Astro built-in i18n, not a client toggle

```js
// astro.config.mjs
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'vi'],
  routing: { prefixDefaultLocale: true },
}
```

- Prerendered `/en/` and `/vi/` HTML shells — translated `<html lang>`, `<title>`,
  meta description, hreflang alternates, essentially for free (site is fully static,
  one page).
- `src/pages/index.astro` becomes a thin shared component taking the locale;
  `Layout.astro` already takes `title` as a prop, so per-locale meta is trivial.
- A client-side-only toggle would avoid restructuring the page, but leaves English
  as the source HTML and buys none of the above.

### 3.2 UI strings — typed dictionary, no framework

```
src/i18n/en.ts   // { 'search.placeholder': 'Search destinations...', ... }
src/i18n/vi.ts   // same keys, Vietnamese values
```

- A tiny `t(key, vars)` helper. No astro-i18next or runtime i18n framework —
  ~150 strings doesn't justify it, and the repo is deliberately zero-runtime-dep
  (D3 via CDN, Tailwind via CDN).
- The fiddly part is mechanical: pulling ~50 strings out of the `quiz.ts` /
  `dossier.ts` template literals into `t()` calls.
- **Caveat:** there is no typechecker in the build (Vite strips types without
  checking), so `Record<keyof typeof en, string>` will NOT fail CI on a missing
  key. Key parity must be enforced by the QC script (eval-based), not the type
  system.

### 3.3 Country data — mirrored trees, single translation seam

- `getCompleteCountryProfile()` in `src/data/globalCountries.ts` already merges
  every layer. It becomes the single seam for per-string fallback:

  ```
  vi[name]?.tagline ?? en[name].tagline
  ```

- Fallback is per-string, so `/vi/` works on day one with English content and each
  translated batch lights up as it lands. No big-bang cutover.
- Storage mirrors the existing layout: `src/data/vi/{dailyRhythm,profileSections}/<region>.ts`
  — same seven regions, same keys, same order — so the QC-script discipline
  (`scripts/qc-profile-sections.mjs`, region-file alignment) transfers intact.

### 3.4 Bundle — dynamic-import the vi data

- The entire catalog currently ships as one ~1.0 MB client chunk
  (`dist/_astro/*.js`). Full Vietnamese copy imported statically would double it
  **for everyone**.
- `import()` the vi data modules only on `/vi/` (Vite splits per-locale chunks
  automatically). UI dictionaries are small enough to ship both.

### 3.5 Search and IDs

- Keep English `name` as the canonical key / DOM value everywhere
  (`data-country="${entry.name}"` in `search.ts`); translate only at render.
- Nice touch: match search input against both names ("Áo" *and* "Austria").

### 3.6 Fonts

- Verify Google Sans / Roboto actually serve the Vietnamese subset. Roboto does;
  the diacritic-heavy glyphs (ậ, ữ, ờ) in Google Sans need a visual check.
- Google Fonts' unicode-range handles subsetting automatically once confirmed.

### 3.7 Numbers and currency

- Cost strings (`"$2,200 – $3,200/mo"`) are hand-formatted static copy, not
  generated. Decision needed (see §7): keep USD notation initially, or localize to
  "2.200–3.200 USD/tháng" style during Phase 2.

---

## 4. Translation storage & workflow

Prior experience elsewhere: translations stored as one `.ts` file per language,
handed to translators or Google Translate to translate each word/sentence.
Verdict for this repo: **that pattern is the handoff format for every layer, and
the storage format for UI/quiz — but not the storage format for the country
prose.**

### 4.1 UI + quiz: flat file per language, as-is

- Handoff-friendly (translator or MT processes it top to bottom, no codebase
  knowledge needed), parity-checkable by script, MT-safe (short, self-contained,
  no markup, no length budgets — needs a human skim, nothing structural).

### 4.2 Country prose: structured storage, generated handoff sheets

A flat file of ~4,000 context-free sentences breaks down:

1. QC rules operate on **fields**, not sentences — `downsides[0]` must equal
   `realityCheck` verbatim; culture 250–450 chars; must not open with the country
   name. Flat sheets can't express "downsides[0] of Portugal" without key
   structure, and once keys carry that structure you've reinvented the tree,
   flatter and harder to lint.
2. Sentences lose context in a flat pile (translator can't see that a string is
   Austria's reality check, or that it must not repeat Austria's tagline).
3. Fixed wording must stay fixed — `practicalFactors` notes carry mandated phrases
   ("not confirmed in this pass", "Not personal advice."). Ad-hoc MT re-translates
   that sentence ~200 different ways.

So:

- **Repo-side storage stays structured** — `src/data/vi/...` trees as in §3.3.
- **The handoff file is generated, not the source of truth.** A small script
  exports flat sheets (`key | English | target`) per region or batch. Translators
  or MT fill the target column. A merge script validates (key parity, char
  budgets, quote rules, locked glossary terms) and writes the structured `.ts`
  trees, then runs the gates.

This reuses the repo's proven 2026-11 batch workflow: snippets written outside the
tree → self-validated by eval → merged with assertions → gates
(`qc` scripts + `astro build` + `dist/_astro` grep).

### 4.3 Machine translation policy

MT (Google Translate or LLM-assisted) is fine as a **first draft**, with limits:

- **Tier-1 country copy (44 flagship dossiers):** MT draft + human review —
  this is the showpiece prose.
- **practicalFactors notes:** glossary-locked phrases only, reviewed; the
  "honesty over precision" layer is the worst place for translation drift.
- **Everything MT'd:** skim for banned-token rules and quote rules — MT output
  happily introduces curly quotes (banned here) and blows char budgets
  (Vietnamese runs ~10–20% longer than English).

---

## 5. QC implications

`scripts/qc-profile-sections.mjs` (and the climate script) need a locale
parameter. Most rules survive:

- Period endings — Vietnamese uses them too. ✓
- Double-quote ban, straight quotes only. ✓
- "Must not open with the country name." ✓
- Exactly 3 upsides / 3 downsides. ✓

Rules that need per-locale treatment:

- **Char budgets need per-locale ranges** — Vietnamese runs ~10–20% longer than
  English, so 250–450 chars would reject valid copy.
- **Banned-token lists are language-specific** — "hidden gem" needs Vietnamese
  equivalents; "vibrant ≤ 1" needs re-scoping.
- **The 6-word-overlap check is meaningless across languages** — skip for vi.
- **Fixed honesty wording** needs locked Vietnamese equivalents
  ("not confirmed in this pass", "Not personal advice.") enforced by the merge
  script.

---

## 6. Rollout phases

1. **Phase 0 — infrastructure, zero translation.**
   i18n config, `/en/` + `/vi/` routes, `t()` + locale plumbing through
   `app.ts`, locale-aware assembler with per-string fallback, dynamic imports,
   QC scripts parameterized by locale. `/vi/` renders translated chrome only.
   Self-contained PR; touches no copy; forces all plumbing decisions early.

2. **Phase 1 (~1,000 strings).**
   UI + quiz + country display names + region names + climate composers + the
   44 tier-1 countries. The site *feels* Vietnamese; flagship dossiers fully
   translated.

3. **Phase 2 (~2,500 strings).**
   All 178 tier-2 metadata + dailyRhythm + profileSections; regional templates
   last.

4. **Phase 3 (~1,000 strings).**
   practicalFactors notes — the least visible, most honesty-sensitive layer.

Each phase gates the same way as the content passes: per-locale QC scripts +
`npm run build` + bundle grep for new keys.

---

## 7. Open decisions

- **Mixed-content policy:** when a tier-2 dossier is still English under `/vi/`,
  fall back silently or show a "translation in progress" marker?
  (Tentative: silent fallback — standard for phased i18n.)
- **Cost strings:** keep `"$2,200 – $3,200/mo"` or localize number notation in
  Phase 2? (Tentative: keep initially; localize later.)
- **Country names:** standard Vietnamese exonyms where they exist (Áo, Bỉ,
  Hà Lan), keep English where Vietnamese usage does (several African states).
  A ~200-entry display dictionary either way.
- **MT vs. hand for prose:** given the repo's "guessing is not [valid]" ethos,
  machine-drafted-then-reviewed fits the batch workflow better than raw MT.
- **Phase-2 ordering:** translate tier-2 by popularity or by region?
- **Later languages:** both current locales are LTR; Arabic/Hebrew later would
  need a look at logical CSS properties. Otherwise the design extends to more
  languages unchanged (add a locale + data tree + QC locale entry).

---

## 8. File-touch summary (Phase 0)

- `astro.config.mjs` — i18n config
- `src/pages/index.astro` → shared locale-aware component + `/en/`, `/vi/` routes
- `src/layouts/Layout.astro` — `lang`, per-locale title/meta
- `src/i18n/{en,vi}.ts` + `t()` helper (new)
- `src/scripts/{app,quiz,dossier,search,map}.ts` — extract inline strings, accept locale
- `src/data/globalCountries.ts` — localized assembler with per-string fallback
- `src/data/vi/` — new mirror trees (empty at Phase 0)
- `scripts/qc-profile-sections.mjs` — locale parameter + key-parity checks

# Social-Warmth Research Pass

**Status:** implemented — 2026-11-27 (200/200 countries covered in `src/data/socialWarmth.ts`, quiz question and priority boost wired, QC script passing, compiled and verified)
**Scope:** one new quiz-scored lifestyle axis — social-fabric warmth — covering all 200 countries (22 tier-1 curated, 178 tier-2 researched)
**Date:** 2026-11-27

This is a planning document only. No schema, data, quiz, or script changes have been made.
All five open design decisions were settled on 2026-11-27 and are recorded in §10.
It follows the shape of the two completed research passes (practical factors, climate profiles)
and is intended to graduate into an AGENTS.md section the same way they did.

---

## 1. Summary

The quiz never asks a question the dossiers already answer: *how does the social world around you work?*

Vietnam's dossier says locals "invite newcomers to share food and iced tea (trà đá)". Norway's
downside says its "reserved social culture can feel lonely initially for extroverted expats".
Japan's culture copy names "mutual non-interference" and its downsides name social isolation.
Germany's downsides name neighbors enforcing Ruhezeit. The prose knows this axis; the quiz has
no knob for it.

The closest existing question (`openness`, stage 3) is backed by `foreignerOpenness: // 1-5
expat ease / English / friendliness` — one knob conflating English proficiency, multicultural
integration, and social warmth. Those are genuinely different axes:

| | High integration ease | Low integration ease |
|---|---|---|
| **Woven social fabric** | e.g. Mexico-ish profiles | Vietnam (warmth 5/5, language barrier real) |
| **Privacy-first fabric** | Australia, Germany | (rare — e.g. rural Japan) |

This pass adds the missing axis: **how much the default social fabric wraps around a person**
— from community-woven (neighbors are your social system, spontaneous invitations, personal
questions read as friendliness, gossip is a real social force) to privacy-first (closed doors
respected, personal questions at work are a no-no, friendships chosen and slow, drama rare).

It is a tradeoff, not a quality ranking. Every quiz option and every dossier line must name
both sides, exactly as the user framing did: warmth comes bundled with curiosity and gossip;
privacy comes bundled with effort and loneliness risk.

Deliverables:

1. `src/data/socialWarmth.ts` — `COUNTRY_SOCIAL_WARMTH`, one explicit entry per country in both
   tiers (200/200), so no live dossier ever falls back.
2. A stage-3 quiz question (`socialFabric`) scored against it, with the existing `openness`
   question re-scoped to stop double-counting.
3. `scripts/qc-social-warmth.mjs` — the gate, mirroring `qc-climate-profiles.mjs`.

---

## 2. What exists today (verified)

- Stage-3 question `openness` (`src/data/countries.ts:1402`): poles "Cosmopolitan, Diverse &
  High English Ease" vs "Quiet, Polite & Respectful Distance".
- Scoring (`src/scripts/quiz.ts:441-458`): cosmopolitan → `foreignerOpenness >= 5` (10 pts),
  `== 4` (8), `== 3` (4); reserved → `foreignerOpenness <= 3 || tags.includes('reserved')` (10),
  else 6. Baseline `foreignerOpenness * 0.8` in the denominator (`quiz.ts:538-540`).
- All 200 countries flow through `getCompleteCountryProfile()` (`src/data/globalCountries.ts:899`),
  which returns `dimensions: meta.dimensions` for tier-2 and the curated record for tier-1.
- `foreignerOpenness` is hand-assigned editorially (22 tier-1 entries, 178 metadata entries,
  5 continental templates at `src/data/countries.ts:1041`) — the precedent for *editorial*
  dimensions. This pass adds a *researched* dimension instead, with anchors and confidence
  flags, because "social warmth" claims are exactly the kind of thing that turns into
  stereotype if left unsourced.

---

## 3. The construct and its bands

**What we score:** the country's *default social-fabric orientation* — how much everyday social
life assumes community embeddedness versus assumes privacy. It describes norms, never national
character. "Personal questions are a normal part of friendly conversation" is a norm; "X people
are nosy" is essentialism and is banned (§7).

**What we do not score:** friendliness (a judgment), quality of social life (personal), or the
expat bubble (InterNations measures newcomer experience — an input, not the target).

Band rubric (the quiz scores the number; the label is the dossier's canned descriptor):

| warmth | band | description (both sides named) | anchor examples |
|---|---|---|---|
| 5 | `community-woven` | The street is the living room; neighbors are the default social system; invitations are spontaneous; personal questions read as friendliness; gossip and social monitoring are real forces. | Vietnam, Philippines, Indonesia, much of Latin America, West-African hospitality belt |
| 4 | `friendly-open` | Quick surface warmth and casual invitations; in-group fabric looser; privacy norms moderate; gossip moderate. | Ireland, Brazil, Mexico, much of Latin America's urban cores |
| 3 | `balanced` | Courtesy first, situational warmth; friendships form through repeated shared contexts (work, hobbies, neighborhood). | France, UK pub culture, parts of Southern Europe |
| 2 | `reserved-courteous` | Boundaries respected, prying rare; in-group ties may still be dense and warm — newcomer entry is slow and context-gated. | Japan (warm in-group, famously slow entry), Korea, Czechia |
| 1 | `privacy-first` | Closed doors are the norm; personal questions at work are a no-no; friendships chosen, slow, durable; drama rare; loneliness risk for extroverts. | Germany, Nordics, Switzerland, Austria |

Band boundaries are calibrated against relational-mobility research (§5, anchor 2), so `warmth`
also tracks *how easily a newcomer can enter the network*, not just how sociable locals are
among themselves — the distinction that separates Japan (2) from Vietnam (5) despite both being
collectivist in-group cultures.

---

## 4. Data architecture

Follow the climate-profiles pattern exactly (separate record file, assembler lookup with a
dead-last fallback, zero wiring for new entries):

```ts
// src/data/socialWarmth.ts (proposed)
export type SocialWarmthLevel = 1 | 2 | 3 | 4 | 5;
export interface CountrySocialWarmth {
  warmth: SocialWarmthLevel;
  newcomerNote: string; // one hedged sentence for the dossier, naming the tradeoff
}
export const COUNTRY_SOCIAL_WARMTH: Record<string, CountrySocialWarmth> = { /* ... */ };
export const SOCIAL_WARMTH_BANDS: Record<1|2|3|4|5, string> = { /* canned descriptors from §3 */ };
// Dead-last fallback for future catalog additions; QC errors if any live country hits it.
export function estimateSocialWarmth(region: string): SocialWarmthLevel { /* continental default */ }
```

Wiring (all in existing seams, no edits to the 205 `dimensions` objects):

- `CountryData` gains optional `socialWarmth?: SocialWarmthLevel` and `socialWarmthNote?: string`.
- `getCompleteCountryProfile()` attaches both for tier-1 and tier-2 from
  `COUNTRY_SOCIAL_WARMTH[name]`, falling back to `estimateSocialWarmth(region)`.
- Quiz scoring reads `country.socialWarmth`; dossier renders the canned band descriptor plus
  the note in the People section.

Quiz question (stage 3, "Society, Religion & People", placed after `openness`; settled
2026-11-27 — standalone, multi-select, three real options):

```
id: 'socialFabric' (multiSelect: true)
question: 'How should the social world around you work?'
subtitle: 'Warmth and privacy trade off: woven communities come with curiosity and gossip;
           privacy-first cultures come with slower friendships. Select any that fit.'
- 'Open-door community' — 'Neighbors are friends, invitations come fast, and street life is
  social; expect curiosity about your life and local gossip.' (value: 'woven')
- 'Somewhere in between' — 'Courtesy first; friendships grow through repeated shared contexts
  like work, hobbies, or the neighborhood.' (value: 'balanced')
- 'Privacy-first courtesy' — 'Closed doors are respected and personal questions are rare;
  expect friendship to take deliberate effort.' (value: 'private')
- 'No preference' (isNoPreference)
```

Scoring sketch (best-match across selected answers, the religion/career pattern:
`maxPossible += 10` once regardless of how many are selected):

- `woven` → warmth 5: 10 pts / 4: 8 / 3: 5 / ≤2: 0
- `balanced` → warmth 3: 10 / 2 or 4: 7 / 1 or 5: 4
- `private` → warmth 1: 10 / 2: 8 / 3: 5 / ≥4: 0

Selecting `woven` + `private` means "either pole, never the middle" (warmth 3 scores 5);
selecting all three collapses to near-no-preference, the same graceful way religion already
behaves. Exact numbers finalized in the code phase.

**Reconciliation with `openness` (required, not optional):** the existing question's subtitle
drops "Ease of making friends" and keeps English/multicultural/integration. Two axes, two
questions, no double-counting. `socialFabric` answers "how does the fabric behave";
`openness` answers "how easily do *foreigners* integrate into it".

No per-entry `sources` field — same rationale as climate profiles: this is a derived
characterization, not a verifiable fact-claim like a PM2.5 value or a visa route. Provenance
lives in this document and in the pass report, which names the deciding anchor per country.

Format rules for the file (identical to the two completed passes): single-word keys unquoted,
multi-word single-quoted, `"Côte d'Ivoire"` double-quoted exactly as in `globalCountries.ts`;
notes single-quoted with the typographic apostrophe (’) only; one line per country, appended
grouped by region under a short `// <Region>` comment; never reformat existing entries.

---

## 5. Anchor hierarchy (per country, in order)

1. **InterNations Expat Insider** (current year; ~53 destinations) — *Finding Friends* and
   *Local Friendliness* subindexes under Ease of Settling In. The only direct measure of the
   newcomer experience. Caveats: expat-skewed (Western, affluent, urban) sample; yearly churn
   → cite the year and prefer a multi-year pattern over a single-year rank. It anchors the
   *newcomer-entry* component of the band, not the whole value.
2. **Relational mobility** (Thomson et al. 2018; 39 societies) — conceptually the closest
   construct: how freely people can form and leave relationships. Too sparse for coverage;
   used to calibrate band boundaries and the pole sanity-checks. Low RM = stable, assigned,
   hard-to-break-into networks — also where gossip does norm enforcement.
3. **Hofstede/Minkov individualism (IDV)** — the broad numeric backbone (~110 countries).
   Higher IDV pushes toward lower warmth, calibrated per region. The cheat sheet must carry a
   provenance column: original Hofstede sample vs Minkov/WVS *extended estimate* — extended
   estimates alone cap confidence at B.
4. **GLOBE in-group collectivism** (62 societies) — second calibration point; note where
   *practices* diverge from *values* (societies that aspire to collectivism they no longer
   practice).
5. **WVS/EVS items** for countries missing from the above — autonomy/choice items (the classic
   WVS-derived individualism proxy), generalized trust, "friends important in life".
   Pattern-level derivation.
6. **Regional pattern + qualitative nuance** (dead-last, low-confidence) — for data-poor,
   conflict-affected, and microstate entries: regional default plus one documented local nuance
   (a strong communal tradition, nomadic heritage, war-driven social atomization). The climate
   pass's Chad/DPRK treatment is the model: honest, hedged, flagged.

**Coverage reality (pinned exactly when the cheat sheet is built):**

| coverage tier | countries (of 200) | anchors |
|---|---|---|
| A — direct newcomer data | ~53 | InterNations + IDV + GLOBE/RM where present |
| B — culture-score anchors | ~+60 | IDV (+ provenance) / WVS-derived, no direct expat data |
| C — pattern-level | remaining ~85–90 | regional default + documented nuance, low-confidence |

A solo anchor of contested pedigree (IDV extended estimate, one WVS item) is never enough for a
confident 1 or 5 — those extremes require either InterNations corroboration or two independent
anchors agreeing.

---

## 6. Cross-checks ("refine, don't contradict")

- **vs `foreignerOpenness`: informative, not binding.** That's the point of the new axis
  (Australia: openness 5 / warmth ~2–3). But divergence is where errors concentrate, so any
  country with warmth ≥ 4 & openness ≤ 2, or warmth ≤ 2 & openness ≥ 4, gets a written
  one-line justification in the pass report (Japan's profile is a *valid* divergence; it just
  has to be argued, not assumed).
- **vs tier-1 hand-written copy:** warmth must not contradict the prose. Japan's
  "mutual non-interference" ↔ warmth ≤ 2; Norway's "reserved social culture" downside ↔ ≤ 2;
  Vietnam's iced-tea copy ↔ 5. Semi-automated: the merge step flags tier-1 entries whose
  people/culture copy contains reserved/warmth-bearing tokens in tension with the assigned
  band; humans resolve each flag.
- **vs regional cluster:** any entry ≥ 2 bands from its region's derived prior (cheat-sheet
  prior band) is flagged for justification in the report — warn-only, like the climate QC's
  one-class warning, because real outliers exist (e.g. a woven highland community inside a
  reserved region).
- **vs `religionRole` / `weekendRhythm`: soft priors only.** Communal in-group + strict
  formality toward outsiders is a real profile (some Gulf states), so no automatic rule.

Suspected errors in the *existing* data discovered during the pass get flagged in the report —
never fixed in-pass (same rule as the climate pass: don't touch
`GLOBAL_COUNTRY_METADATA`/`foreignerOpenness` mid-pass).

---

## 7. Honesty rules (the section that keeps this from becoming a stereotype generator)

1. **Norms, not traits.** Notes describe default behavior and expectations, never national
   character. Banned shape: "X people are warm/cold/nosy". Required shape: "personal
   questions are a normal part of friendly conversation", "small talk with neighbors is not
   expected".
2. **Name the cost.** Every note carries the tradeoff side, house-style: warmth notes mention
   curiosity/gossip/social obligations; privacy notes mention effort/loneliness risk. A note
   that only sells the upside fails QC.
3. **One hedge where real.** Urban/rural and generational splits are often the biggest real
   split (Tokyo ≠ rural regions; capital-city professionals ≠ village life). One clause per
   note where it materially changes the answer; bigger splits go in the report (schema has no
   room, same as climate).
4. **Conflict-affected states** (Libya, Somalia, Syria, Yemen, Sudan, South Sudan, Myanmar, …):
   surveys are stale or absent, and war reshapes social fabric in ways no table captures →
   pattern-level value, hedged note, low-confidence flag. Several such entries landing at
   confidence C is the correct outcome, not a failure.
5. **Expatriate-bubble separation.** InterNations describes how *expats experience* entering a
   society — an anchor for newcomer entry, never a description of the society itself. Notes
   describe the local fabric; the report records where the two diverge (e.g. Gulf states:
   dense local family fabric, hard newcomer entry, large expat bubble in between).
6. **No "friendliest countries" energy.** The number scores fabric orientation; the quiz
   converts it to *personal fit*. Any copy implying a universal ranking ("best countries to
   make friends") is out of scope by design.

---

## 8. Workflow that scales

**Phase 0 — scaffold + tier-1 curation (one session, implementable independently):**

1. Schema, `socialWarmth.ts` with 22 tier-1 entries, assembler wiring, quiz question + scoring
   block + `openness` subtitle re-scope, dossier band line, QC script v1.
2. Tier-1 entries are *curated against existing hand-written copy + anchors* (these countries
   already have rich people/culture prose; this is judgment-with-anchors, not cold research).
3. Gates: `qc-social-warmth.mjs`, both existing QC scripts untouched, `npx astro build`,
   grep `dist/_astro/*.js` for the new keys.

**Phase 1 — orchestrated tier-2 sourced pass (178 countries):**

1. Orchestrator derives the uncovered list *programmatically* from `socialWarmth.ts` +
   `globalCountries.ts` (never from chat or docs), and pre-extracts a cheat sheet into batch
   files: per country → metadata region, existing `foreignerOpenness`, IDV + provenance
   (original vs extended), GLOBE in-group collectivism where present, relational mobility
   where present, InterNations subindex rank + year where covered, derived prior band,
   confidence tier (A/B/C).
2. Parallel batch agents (12–18 countries per batch, sliced by metadata region — "West
   Africa", "West Asia", …). Each agent: walk the anchor hierarchy per country, record the
   deciding anchor, write entry lines + a per-country confidence/unknowns report *outside the
   repo*, and self-validate by eval'ing its snippet (exact key set, warmth integer 1–5, note
   single-line 80–240 chars ending with a period, typographic apostrophes only, no double
   quotes, no banned tokens).
3. Orchestrator merges with assertions: exact coverage (178/178), zero collisions, every
   value within ±1 of the prior band or carrying a written justification, banned-token scan,
   eval of the whole record (each key exactly once).
4. Gates: `qc-social-warmth.mjs`, `qc-profile-sections.mjs`, `qc-climate-profiles.mjs`,
   `npx astro build`, grep the dist bundle for new keys.

**Phase 2 — absorption:**

- Fold flag-raised tier-1 findings back into people copy where genuinely contradicted
  (curated `COUNTRY_DATABASE` copy wins; the data file adjusts to match unless research is
  decisive, in which case both change with a note in the report).
- Add `socialFabric` to the 2.5× priority question (settled decision 5). Draft option:
  'A Community That Wraps Around Me' — neighbors as friends, spontaneous invitations,
  instant belonging; boost on warmth ≥ 4 (25 pts, matching the existing arcs; warmth 3 → 18
  partial). Ships only after Phase 1, so the boost never runs on an `estimateSocialWarmth`
  fallback.
- Write the AGENTS.md section post-hoc, exactly like the practical-factors and climate
  sections: model entries (a fully sourced one, a mixed one, an honest-unknown one), format
  rules, anchor hierarchy, the workflow. Add the QC command to the commands list.

---

## 9. QC script spec (`scripts/qc-social-warmth.mjs`)

Mirrors `qc-climate-profiles.mjs` structurally — eval-based record load (never regex-parsed
values), textual key extraction to catch duplicates eval would fold, `--json` flag, exit 1 on
errors:

1. Key universe = 22 tier-1 names + 178 metadata keys; **full explicit coverage of both**
   (warmth + `newcomerNote` on every entry, per settled decision 3) — error on any miss,
   since a live country falling to `estimateSocialWarmth` is exactly the
   state the climate pass eliminated for `estimateClimateProfile`.
2. `warmth` integer in 1..5.
3. Note format: single line, 80–240 chars, ends with a period, no double quotes, no straight
   apostrophes inside notes, no banned tokens. Banned-token list finalized at script-writing
   time; must include the existing list (e.g. "hidden gem", "something for everyone",
   placeholder markers) plus essentialism patterns (/\b(nosy|nosey)\b/, nationality-adjective
   character claims) and a per-file "warm"/"friendly" density cap so the file can't degrade
   into a friendliness ranking.
4. Cross-checks (warn + report, not error): warmth/openness divergence combos (§6);
   tier-1 people-copy keyword tension; region-cluster outliers ≥ 2 bands from prior.
5. Reviewed-divergence whitelist mechanism, same as the climate script's — so a justified
   outlier doesn't have to lie to pass.

---

## 10. Design decisions (settled 2026-11-27)

All five open decisions were settled on 2026-11-27. One deviates from this document's
earlier lean (select mode); the rationale is recorded here so a future pass doesn't
relitigate it blind.

1. **Question placement — standalone.** A new stage-3 question after `openness`, which keeps
   its own scoring on integration/English and drops "ease of making friends" from its
   subtitle. A third pole inside `openness` was rejected: the axes aren't mutually exclusive
   (Mexico City is both cosmopolitan and woven) and a single question would double-score.
2. **Select mode — multi-select, religion-style best-match.** `multiSelect: true`, three real
   options (`woven` / `balanced` / `private`) plus no-preference; best score across selected
   answers wins, `maxPossible += 10` once. Chosen over single-select for expressiveness:
   "woven or balanced, just never privacy-first" is a real preference, the middle band earns
   full credit instead of hiding inside no-preference, and selecting everything collapses to
   near-no-preference exactly the way religion already behaves. This is the one deviation
   from the earlier draft, which leaned single-select.
3. **Tier-1 notes — required everywhere.** All 200 entries carry a `newcomerNote`. Tier-1
   notes are written as the cost-side complement to their people prose (the prose already
   sells the texture — the iced-tea line — so the note names what it costs you: the gossip,
   the effort, the loneliness risk). The polished tier must never render the blander canned
   descriptor.
4. **Field location — `CountryData`.** Optional `socialWarmth` + `socialWarmthNote` attached
   by `getCompleteCountryProfile()`, the climateProfile/practical seam. Keeps the warmth/note
   pair in one place and touches zero existing `dimensions` objects. The in-`dimensions`
   injection was rejected because the note is not a quiz knob and the pair would split
   across two homes.
5. **Priority boost — joins the 2.5× question at Phase 2.** Ships only after Phase 1's
   sourced 200/200 lands, so the boost never amplifies a fallback value. (Precedent note:
   `nature`, an existing boost axis, runs on an editorial `natureScore` — a sourced warmth
   axis is more defensible still.)

---

## 11. Risks and mitigations

| risk | mitigation |
|---|---|
| Essentialism / stereotype output | §7 rules + banned-token QC + report review of all 1/5 values |
| Expat-survey skew (InterNations is Western, affluent, urban) | anchor hierarchy ordering, §7.5 bubble separation, multi-year pattern preference |
| Double-counting with `openness` | mandatory subtitle re-scope; scoring blocks stay independent |
| Anchor churn (yearly InterNations rankings) | cite year in cheat sheet; value anchored to multi-year pattern |
| IDV's contested academic standing | never sole-source for extreme values (§5); provenance flags; GLOBE/RM/WVS as independent corroborators |
| 1–5 flattening of real complexity (Japan's warm-in-group/cool-to-strangers profile) | the note is load-bearing, not decorative; rubric explicitly distinguishes in-group density from newcomer entry; QC warns on flag-shaped divergences |

#!/usr/bin/env node
/**
 * QC for the Vietnamese relocation-note layer (Phase 3, docs/i18n-plan.md).
 * Usage: node scripts/qc-notes-vi.mjs [--json]
 * Validates src/data/content/vi/practicalNotes.ts (6 note fields × 200
 * countries) and src/data/content/vi/socialNotes.ts (newcomerNote × 200)
 * against the English sources in src/data/practicalFactors.ts and
 * src/data/socialWarmth.ts.
 * Checks: full key/field coverage, VI length ranges, period endings, quote and
 * apostrophe rules, per-locale token bans, untranslated-leak detection,
 * country-name openings, and the locked honesty-phrase glossary (§6 Phase 3):
 *   'not confirmed in this pass' -> 'chưa được xác nhận trong đợt đối soát này'
 *   'Not personal advice.'       -> 'Không phải tư vấn cá nhân.'
 * plus the standard EF EPI / IQAir / ThinkHazard note templates.
 */
import { readFileSync } from 'node:fs';

const ROOT = new URL('..', import.meta.url).pathname;
const asJson = process.argv.includes('--json');

const errors = [];
const warnings = [];
function err(where, msg) { errors.push(`[ERROR] ${where}: ${msg}`); }
function warn(where, msg) { warnings.push(`[WARN] ${where}: ${msg}`); }

// ---------- Load English sources ----------
function evalBlock(src, startMarker) {
  const startIdx = src.indexOf(startMarker);
  const block = src.slice(startIdx);
  const eq = block.indexOf('= {');
  const body = block.slice(eq + 2, block.lastIndexOf('};') + 1);
  return eval('(' + body + ')');
}

const PRACTICAL_NOTE_FIELDS = ['englishEaseNote', 'airQualityNote', 'hazardNote', 'tapWaterNote', 'healthcareNote', 'taxProfileNote'];

const pf = evalBlock(readFileSync(`${ROOT}src/data/practicalFactors.ts`, 'utf8'), 'export const PRACTICAL_FACTORS');
const sw = evalBlock(readFileSync(`${ROOT}src/data/socialWarmth.ts`, 'utf8'), 'export const COUNTRY_SOCIAL_WARMTH');

// ---------- Load Vietnamese note chunks ----------
function loadVi(path, startMarker) {
  let src = readFileSync(`${ROOT}${path}`, 'utf8').replace(/^import type .*$/m, '');
  return evalBlock(src, startMarker);
}

let PVI, SVI;
try {
  PVI = loadVi('src/data/content/vi/practicalNotes.ts', 'export const PRACTICAL_NOTES_VI');
} catch (e) {
  err('practicalNotes.ts', `does not evaluate (${e.message})`);
}
try {
  SVI = loadVi('src/data/content/vi/socialNotes.ts', 'export const SOCIAL_NOTES_VI');
} catch (e) {
  err('socialNotes.ts', `does not evaluate (${e.message})`);
}

// ---------- Locked glossary (docs/i18n-plan.md §6 Phase 3) ----------
const GLOSSARY = [
  { en: 'not confirmed in this pass', vi: 'chưa được xác nhận trong đợt đối soát này' },
  { en: 'Not personal advice.', vi: 'Không phải tư vấn cá nhân.' },
  { en: 'EF EPI 2026 places the country in the', vi: 'EF EPI 2026 xếp quốc gia này vào nhóm' },
  { en: 'EF EPI 2026 does not rank', vi: 'EF EPI 2026 không xếp hạng' },
  { en: 'IQAir', vi: 'IQAir' },
];
// ThinkHazard's EN note has faithful variants ('flags…', 'classifies…',
// 'across a vast territory', 'records no cyclone rating'), so the rule is:
// standard-template EN notes must keep the locked tail rendering; any other
// ThinkHazard note must keep the source name.
const THINKHAZARD_TEMPLATE_TAIL = 'kiểm tra bản đồ địa phương';
const BANNED = ['viên ngọc ẩn', 'có gì đó cho tất cả mọi người', 'kết hợp giữa cũ và mới', 'TBD', 'TODO', 'XXX', 'lorem', 'placeholder'];
const RANGE = { practical: [60, 320], social: [90, 300] };

// ---------- Practical notes ----------
if (PVI) {
  const enKeys = Object.keys(pf);
  const viKeys = Object.keys(PVI);
  for (const k of enKeys.filter((k) => !viKeys.includes(k))) err('practicalNotes.ts', `missing country: ${k}`);
  for (const k of viKeys.filter((k) => !enKeys.includes(k))) err('practicalNotes.ts', `unknown country: ${k}`);
  const dupes = viKeys.filter((k, i) => viKeys.indexOf(k) !== i);
  if (dupes.length) err('practicalNotes.ts', `duplicate keys: ${dupes.join(', ')}`);

  for (const k of enKeys.filter((k) => viKeys.includes(k))) {
    for (const f of PRACTICAL_NOTE_FIELDS) {
      const where = `${k}.${f}`;
      const en = pf[k]?.[f] ?? '';
      const vi = PVI[k]?.[f];
      if (typeof vi !== 'string' || !vi) { err(where, 'missing/not a string'); continue; }
      const len = vi.length;
      if (len < RANGE.practical[0]) err(where, `too short (${len} < ${RANGE.practical[0]})`);
      if (len > RANGE.practical[1]) err(where, `too long (${len} > ${RANGE.practical[1]})`);
      if (!/\.\s*$/.test(vi)) err(where, 'does not end with a period');
      if (vi.includes('"') || /[“”]/.test(vi)) err(where, 'contains a double-quote character');
      if (vi.includes("'")) err(where, "contains a straight apostrophe (house style is typographic ’ or none)");
      if (vi === en) err(where, 'untranslated (identical to English)');
      const esc = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (en && new RegExp('^' + esc + '\\b').test(vi) && !new RegExp('^' + esc + '\\b').test(en)) {
        warn(where, 'opens with the country name while the English note does not');
      }
      for (const b of BANNED) {
        if (vi.toLowerCase().includes(b.toLowerCase())) err(where, `contains banned token: ${b}`);
      }
      for (const g of GLOSSARY) {
        if (en.toLowerCase().includes(g.en.toLowerCase()) && !vi.toLowerCase().includes(g.vi.toLowerCase())) err(where, `locked glossary phrase missing: EN '${g.en}' must render as '${g.vi}'`);
      }
      if (en.toLowerCase().includes('thinkhazard')) {
        if (!vi.toLowerCase().includes('thinkhazard')) {
          err(where, "locked glossary: EN ThinkHazard note must keep the source name 'ThinkHazard'");
        } else if (en.includes('check local maps for a specific home or route') && !vi.includes(THINKHAZARD_TEMPLATE_TAIL)) {
          err(where, `locked glossary: standard ThinkHazard template must render the closing as '${THINKHAZARD_TEMPLATE_TAIL}…'`);
        }
      }
    }
  }
}

// ---------- Social warmth notes ----------
if (SVI) {
  const enKeys = Object.keys(sw);
  const viKeys = Object.keys(SVI);
  for (const k of enKeys.filter((k) => !viKeys.includes(k))) err('socialNotes.ts', `missing country: ${k}`);
  for (const k of viKeys.filter((k) => !enKeys.includes(k))) err('socialNotes.ts', `unknown country: ${k}`);
  const dupes = viKeys.filter((k, i) => viKeys.indexOf(k) !== i);
  if (dupes.length) err('socialNotes.ts', `duplicate keys: ${dupes.join(', ')}`);

  for (const k of enKeys.filter((k) => viKeys.includes(k))) {
    const where = `${k}.newcomerNote`;
    const en = sw[k]?.newcomerNote ?? '';
    const vi = SVI[k]?.newcomerNote;
    if (typeof vi !== 'string' || !vi) { err(where, 'missing/not a string'); continue; }
    const len = vi.length;
    if (len < RANGE.social[0]) err(where, `too short (${len} < ${RANGE.social[0]})`);
    if (len > RANGE.social[1]) err(where, `too long (${len} > ${RANGE.social[1]})`);
    if (!/\.\s*$/.test(vi)) err(where, 'does not end with a period');
    if (vi.includes('"') || /[“”]/.test(vi)) err(where, 'contains a double-quote character');
    if (vi.includes("'")) err(where, "contains a straight apostrophe (house style is typographic ’ or none)");
    if (vi === en) err(where, 'untranslated (identical to English)');
    for (const b of BANNED) {
      if (vi.toLowerCase().includes(b.toLowerCase())) err(where, `contains banned token: ${b}`);
    }
  }
}

// ---------- Report ----------
const pass = errors.length === 0;
if (asJson) {
  console.log(JSON.stringify({ locale: 'vi', file: 'notes', pass, countries: PVI ? Object.keys(PVI).length : 0, errors, warnings }, null, 2));
} else {
  console.log(`Checked relocation notes (locale: vi): ${PVI ? Object.keys(PVI).length : 0} practical countries, ${SVI ? Object.keys(SVI).length : 0} social countries.`);
  for (const w of warnings) console.log(w);
  for (const e of errors) console.log(e);
  console.log(pass ? 'All checks passed.' : `${errors.length} error(s)`);
}
process.exit(pass ? 0 : 1);

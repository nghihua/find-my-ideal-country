#!/usr/bin/env node
/**
 * QC for src/data/content/{locale}/*.ts region files.
 * Usage: node scripts/qc-profile-sections.mjs [--json] [--locale en|vi]
 * Checks: key coverage/duplicates, literal sanity, length ranges (scaled per
 * locale, see docs/i18n-plan.md §5), bullet counts/sentence shape, verbatim
 * realityCheck as downsides[0], banned and placeholder tokens (per-locale
 * lists), vibrant/bustling budgets, opening-word variety, country-name
 * openings, and n-gram overlap with existing profile copy.
 *
 * curated.ts holds the 22 Tier-1 flagship dossiers and is gated by the same
 * checks as the region files. --locale en is the default and behaves exactly
 * as before Phase 0.
 */
import { readFileSync, existsSync } from 'node:fs';

const ROOT = new URL('..', import.meta.url).pathname;
const FILES = [
  'curated', 'europe-a', 'africa-a', 'africa-b', 'americas-a',
  'caribbean', 'asia-a', 'asia-b-oceania',
];

const errors = [];
const warnings = [];
const args = process.argv.slice(2);
const asJson = args.includes('--json');

// Locale selection (docs/i18n-plan.md §5): `--locale vi` validates the
// Vietnamese mirror tree with scaled length ranges and Vietnamese token bans.
// `--locale en` (the default) reproduces the pre-i18n behaviour exactly.
let locale = 'en';
{
  const flag = args.findIndex((a) => a === '--locale' || a.startsWith('--locale='));
  if (flag !== -1) {
    locale = args[flag].includes('=') ? args[flag].split('=')[1] : (args[flag + 1] ?? 'en');
  }
}
if (!['en', 'vi'].includes(locale)) {
  console.error(`Unknown locale '${locale}' (supported: en, vi)`);
  process.exit(2);
}

function err(where, msg) { errors.push(`[ERROR] ${where}: ${msg}`); }
function warn(where, msg) { warnings.push(`[WARN] ${where}: ${msg}`); }

// ---------- Reference metadata ----------
const metaSrc = readFileSync(`${ROOT}src/data/globalCountries.ts`, 'utf8');
const metaBlock = metaSrc.slice(
  metaSrc.indexOf('export const GLOBAL_COUNTRY_METADATA'),
  metaSrc.indexOf('export function getCompleteCountryProfile')
);
const metadata = eval('(' + metaBlock.slice(metaBlock.indexOf('= {') + 2, metaBlock.lastIndexOf('};') + 1) + ')');

// Tier-1 flagship keys live in COUNTRY_DATABASE (src/data/countries.ts).
const countriesSrc = readFileSync(`${ROOT}src/data/countries.ts`, 'utf8');
const dbBlock = countriesSrc.slice(
  countriesSrc.indexOf('export const COUNTRY_DATABASE'),
  countriesSrc.indexOf('export const REGIONAL_TEMPLATES')
);
const flagship = eval('(' + dbBlock.slice(dbBlock.indexOf('= {') + 2, dbBlock.lastIndexOf('};') + 1) + ')');

// ---------- Parse content region files ----------
const parsed = {};
const keyOrder = [];
for (const f of FILES) {
  const path = `${ROOT}src/data/content/${locale}/${f}.ts`;
  if (!existsSync(path)) { err(f, 'file missing'); continue; }
  const src = readFileSync(path, 'utf8');
  if (!/^import type \{ CountryDossierProse \} from '\.\.\/\.\.\/countries';/m.test(src)) {
    err(f, 'missing type-only import of CountryDossierProse');
  }
  const eq = src.indexOf('= {');
  if (eq === -1) { err(f, 'cannot find export record'); continue; }
  let body = src.slice(eq + 2, src.lastIndexOf('};') + 1);
  let obj;
  try {
    obj = eval('(' + body + ')');
  } catch (e) {
    err(f, `object literal does not evaluate (${e.message})`);
    continue;
  }
  // Key order + duplicates within the literal source
  const srcKeys = [...src.matchAll(/^  "((?:[^"\\]|\\.)*)": \{/gm)].map((m) => m[1]);
  const dup = srcKeys.filter((k, i) => srcKeys.indexOf(k) !== i);
  if (dup.length) err(f, `duplicate keys in file: ${dup.join(', ')}`);

  // Ensure all keys exist in metadata
  for (const k of srcKeys) {
    if (!metadata[k] && !flagship[k]) err(f, `country "${k}" not found in GLOBAL_COUNTRY_METADATA or COUNTRY_DATABASE`);
  }

  parsed[f] = obj;
  for (const k of srcKeys) keyOrder.push([f, k]);
}

// ---------- Per-country checks ----------
// Per-locale token bans (docs/i18n-plan.md §5): English bans apply to EN;
// Vietnamese equivalents apply to VI. Placeholder markers are banned in both.
const BANNED = locale === 'vi'
  ? [
      'viên ngọc ẩn', 'có gì đó cho tất cả mọi người', 'kết hợp giữa cũ và mới',
      'TBD', 'TODO', 'XXX', 'lorem', 'placeholder',
    ]
  : [
      'hidden gem', 'something for everyone', 'blend of old and new', 'nestled',
      'TBD', 'TODO', 'XXX', 'lorem', 'placeholder',
    ];
const SOFT = ['world-class']; // not banned outright; flag for manual review
const startsWithCountry = (name, v) => {
  const esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp('^' + esc + '\\b').test(v);
};
// EN keeps the pre-i18n ASCII tokenizer; VI needs Unicode-aware word runs
// (the ASCII class would shred every Vietnamese word into letter fragments).
const words = locale === 'vi'
  ? (s) => [...String(s).toLowerCase().matchAll(/[\p{L}\p{N}']+/gu)].map((m) => m[0])
  : (s) => s.toLowerCase().replace(/[^a-z0-9\s']/g, ' ').split(/\s+/).filter(Boolean);
// Per-locale prose length ranges: Vietnamese runs ~15–25% longer than English.
const LENGTH_RANGES = locale === 'vi'
  ? { culture: [280, 550], people: [230, 500], costOfLiving: [230, 500] }
  : { culture: [250, 450], people: [200, 400], costOfLiving: [200, 400] };
const BULLET_RANGE = locale === 'vi' ? [30, 320] : [30, 260];
function ngrams(s, n) {
  const w = words(s);
  const out = new Set();
  for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(' '));
  return out;
}

const vibrantCount = {};
const bustlingCount = {};
const firstWords = { culture: [], people: [], costOfLiving: [] };

for (const [f, name] of keyOrder) {
  const obj = parsed[f]?.[name];
  if (!obj) continue;
  const where = `${f}/${name}`;

  const tagline = obj.tagline;
  const realityCheck = obj.realityCheck;
  const workday = obj.workday;
  const evening = obj.evening;

  const fields = ['culture', 'people', 'costOfLiving'];
  const ranges = LENGTH_RANGES;
  for (const fld of fields) {
    const v = obj[fld];
    if (typeof v !== 'string' || !v) { err(where, `${fld} missing/not a string`); continue; }
    if (v.includes('"')) err(where, `${fld} contains a double-quote character`);
    if (/[“”]/.test(v)) err(where, `${fld} contains curly double quotes`);
    // House style bans curly single quotes in EN; VI permits typographic
    // apostrophes (docs/i18n-plan.md §4 quote rules).
    if (locale === 'en' && /[‘’]/.test(v)) err(where, `${fld} contains curly single quotes (house style is straight)`);
    const len = v.length;
    if (len < ranges[fld][0]) err(where, `${fld} too short (${len} < ${ranges[fld][0]})`);
    if (len > ranges[fld][1]) err(where, `${fld} too long (${len} > ${ranges[fld][1]})`);
    if (startsWithCountry(name, v)) err(where, `${fld} opens with the country name`);
    if (/\.\s*$/.test(v) === false) warn(where, `${fld} does not end with a period`);
    const fw = v.split(/\s+/)[0].replace(locale === 'vi' ? /[^\p{L}]/gu : /[^A-Za-z]/g, '');
    firstWords[fld].push([f, name, fw.toLowerCase()]);
    for (const b of BANNED) {
      if (v.toLowerCase().includes(b.toLowerCase())) err(where, `${fld} contains banned token: ${b}`);
    }
    for (const t of SOFT) {
      if (v.toLowerCase().includes(t)) warn(where, `${fld} contains soft-flagged token: ${t}`);
    }
    // n-gram overlap with tagline/workday/evening (skip realityCheck: downsides[0] is verbatim by design)
    const mine = ngrams(v, 6);
    for (const [label, existing] of [['tagline', tagline], ['workday', workday], ['evening', evening]]) {
      if (!existing) continue;
      for (const g of ngrams(existing, 6)) {
        if (mine.has(g)) err(where, `${fld} duplicates 6-word run from ${label}: "${g}"`);
      }
    }
  }

  for (const [fld, arr, label] of [['upsides', obj.upsides, 'upside'], ['downsides', obj.downsides, 'downside']]) {
    if (!Array.isArray(arr)) { err(where, `${fld} is not an array`); continue; }
    if (arr.length !== 3) err(where, `${fld} has ${arr.length} items (must be exactly 3)`);
    arr.forEach((b, i) => {
      if (typeof b !== 'string' || !b) { err(where, `${label} ${i + 1} empty`); return; }
      if (b.includes('"')) err(where, `${label} ${i + 1} contains a double-quote character`);
      if (/[“”]/.test(b)) err(where, `${label} ${i + 1} contains curly double quotes`);
      if (locale === 'en' && /[‘’]/.test(b)) err(where, `${label} ${i + 1} contains curly single quotes (house style is straight)`);
      const len = b.length;
      if (len < BULLET_RANGE[0]) err(where, `${label} ${i + 1} too short (${len})`);
      if (len > BULLET_RANGE[1]) err(where, `${label} ${i + 1} too long (${len})`);
      if (!/^[\p{Lu}\p{N}]/u.test(b.replace(/^[.'"]/, ''))) err(where, `${label} ${i + 1} does not start with a capital letter`);
      if (!/\.\s*$/.test(b)) err(where, `${label} ${i + 1} does not end with a period`);
      for (const t of BANNED) {
        if (b.toLowerCase().includes(t.toLowerCase())) err(where, `${label} ${i + 1} banned token: ${t}`);
      }
      for (const t of SOFT) {
        if (b.toLowerCase().includes(t)) warn(where, `${label} ${i + 1} soft-flagged token: ${t}`);
      }
    });
    if (fld === 'upsides') {
      arr.forEach((b, i) => {
        if (startsWithCountry(name, b)) err(where, `upside ${i + 1} opens with the country name`);
      });
    }
  }

  // downsides[0] must be the realityCheck, verbatim
  if (obj.downsides && obj.downsides[0] !== realityCheck) {
    err(where, 'downsides[0] is not realityCheck verbatim');
  }
  // downsides[1..2] must not duplicate workday/evening/tagline either
  for (const b of (obj.downsides || []).slice(1)) {
    const mine = ngrams(b, 6);
    for (const [label, existing] of [['tagline', tagline], ['workday', workday], ['evening', evening]]) {
      if (!existing) continue;
      for (const g of ngrams(existing, 6)) {
        if (mine.has(g)) err(where, `downside duplicates 6-word run from ${label}: "${g}"`);
      }
    }
  }

  const proseText = JSON.stringify([obj.culture, obj.people, obj.costOfLiving, obj.upsides, obj.downsides]);
  vibrantCount[f] = (vibrantCount[f] || 0) +
    [...proseText.matchAll(/vibrant/gi)].length;
  bustlingCount[f] = (bustlingCount[f] || 0) +
    [...proseText.matchAll(/bustling/gi)].length;
}

// ---------- File-level budgets ----------
for (const f of FILES) {
  if ((vibrantCount[f] || 0) > 1) err(f, `"vibrant" appears ${vibrantCount[f]}x (budget 1)`);
  if ((bustlingCount[f] || 0) > 2) err(f, `"bustling" appears ${bustlingCount[f]}x (budget 2)`);
}

// ---------- Opening-word variety across neighbors ----------
for (const fld of Object.keys(firstWords)) {
  const list = firstWords[fld];
  for (let i = 1; i < list.length; i++) {
    const [pf, pn, pw] = list[i];
    const [f, n, w] = list[i - 1];
    if (pf === f && pw === w) {
      warn(`${pf}/${pn}`, `${fld} opens with same word as previous entry (${n}): "${pw}"`);
    }
  }
}

// ---------- Report ----------
if (asJson) {
  console.log(JSON.stringify({ summary: { checked: keyOrder.length, files: FILES.length, locale }, warnings, errors }, null, 2));
} else {
  console.log(`Checked ${keyOrder.length} countries across ${FILES.length} files (locale: ${locale}).`);
  if (warnings.length) console.log(`\nWarnings (${warnings.length}):\n` + warnings.join('\n'));
  if (errors.length) {
    console.log(`\nErrors (${errors.length}):\n` + errors.join('\n'));
  } else {
    console.log('\nAll checks passed.');
  }
}
process.exit(errors.length ? 1 : 0);

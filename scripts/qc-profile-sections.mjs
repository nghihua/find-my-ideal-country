#!/usr/bin/env node
/**
 * QC for src/data/profileSections/*.ts region files.
 * Usage: node scripts/qc-profile-sections.mjs [--json]
 * Checks: key coverage/duplicates, literal sanity, length ranges, bullet
 * counts/sentence shape, verbatim realityCheck as downsides[0], banned and
 * placeholder tokens, vibrant/bustling budgets, opening-word variety,
 * country-name openings, and n-gram overlap with existing profile copy.
 */
import { readFileSync, existsSync } from 'node:fs';

const ROOT = new URL('..', import.meta.url).pathname;
const FILES = [
  'europe-a', 'africa-a', 'africa-b', 'americas-a',
  'caribbean', 'asia-a', 'asia-b-oceania',
];
const TMP = '/private/var/folders/pq/2shw16kx03s86mytmrr1dmk40000gn/T/opencode';

const errors = [];
const warnings = [];

function err(where, msg) { errors.push(`[ERROR] ${where}: ${msg}`); }
function warn(where, msg) { warnings.push(`[WARN] ${where}: ${msg}`); }

// ---------- Reference data ----------
const metaSrc = readFileSync(`${ROOT}src/data/globalCountries.ts`, 'utf8');
const metaBlock = metaSrc.slice(
  metaSrc.indexOf('export const GLOBAL_COUNTRY_METADATA'),
  metaSrc.indexOf('/**\n * Returns a complete CountryData object')
);
function entryBlock(key) {
  const start = metaBlock.indexOf(`\n  "${key}": {`);
  if (start === -1) return null;
  let i = start + 1, depth = 0;
  for (; i < metaBlock.length; i++) {
    if (metaBlock[i] === '{') depth++;
    else if (metaBlock[i] === '}') { depth--; if (depth === 0) { i++; break; } }
  }
  return metaBlock.slice(start + 1, i);
}
function field(entry, name) {
  const m = entry.match(new RegExp(name + ': "((?:[^"\\\\]|\\\\.)*)"'));
  return m ? m[1] : null;
}
function qdim(entry, name) {
  const m = entry.match(new RegExp(name + ": '([^']*)'"));
  return m ? m[1] : null;
}

const rhythm = {}; // name -> {workday, evening}
for (const f of FILES) {
  const src = readFileSync(`${ROOT}src/data/dailyRhythm/${f}.ts`, 'utf8');
  const body = src.slice(src.indexOf('= {') + 2, src.lastIndexOf('};') + 1);
  const obj = eval('(' + body + ')');
  for (const [k, v] of Object.entries(obj)) rhythm[k] = v;
}

// ---------- Parse profile-section files ----------
const parsed = {};
const keyOrder = [];
for (const f of FILES) {
  const path = `${ROOT}src/data/profileSections/${f}.ts`;
  if (!existsSync(path)) { err(f, 'file missing'); continue; }
  const src = readFileSync(path, 'utf8');
  if (!/^import type \{ ProfileSections \} from '\.\/index';/m.test(src)) {
    err(f, 'missing type-only import of ProfileSections');
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
  // Reference key list from the corresponding dailyRhythm file
  const drSrc = readFileSync(`${ROOT}src/data/dailyRhythm/${f}.ts`, 'utf8');
  const refKeys = [...drSrc.matchAll(/^  "((?:[^"\\]|\\.)*)": \{/gm)].map((m) => m[1]);
  const missing = refKeys.filter((k) => !(k in obj));
  const extra = Object.keys(obj).filter((k) => !refKeys.includes(k));
  if (missing.length) err(f, `missing countries: ${missing.join(', ')}`);
  if (extra.length) err(f, `unexpected countries: ${extra.join(', ')}`);
  const wrongOrder = refKeys.some((k, i) => srcKeys[i] !== k);
  if (wrongOrder) warn(f, 'entry order does not match dailyRhythm file order');

  parsed[f] = obj;
  for (const k of refKeys) keyOrder.push([f, k]);
}

// ---------- Per-country checks ----------
const BANNED = [
  'hidden gem', 'something for everyone', 'blend of old and new', 'nestled',
  'TBD', 'TODO', 'XXX', 'lorem', 'placeholder',
];
const SOFT = ['world-class']; // not banned outright; flag for manual review
const startsWithCountry = (name, v) => {
  const esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp('^' + esc + '\\b').test(v);
};
const words = (s) => s.toLowerCase().replace(/[^a-z0-9\s']/g, ' ').split(/\s+/).filter(Boolean);
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
  const meta = entryBlock(name);
  if (!meta) { err(where, 'not found in GLOBAL_COUNTRY_METADATA'); continue; }
  const tagline = field(meta, 'tagline');
  const realityCheck = field(meta, 'realityCheck');
  const rhythmEntry = rhythm[name] || { workday: '', evening: '' };

  const fields = ['culture', 'people', 'costOfLiving'];
  const ranges = { culture: [250, 450], people: [200, 400], costOfLiving: [200, 400] };
  for (const fld of fields) {
    const v = obj[fld];
    if (typeof v !== 'string' || !v) { err(where, `${fld} missing/not a string`); continue; }
    if (v.includes('"')) err(where, `${fld} contains a double-quote character`);
    if (/[“”]/.test(v)) err(where, `${fld} contains curly double quotes`);
    if (/[‘’]/.test(v)) err(where, `${fld} contains curly single quotes (house style is straight)`);
    const len = v.length;
    if (len < ranges[fld][0]) err(where, `${fld} too short (${len} < ${ranges[fld][0]})`);
    if (len > ranges[fld][1]) err(where, `${fld} too long (${len} > ${ranges[fld][1]})`);
    if (startsWithCountry(name, v)) err(where, `${fld} opens with the country name`);
    if (/\.\s*$/.test(v) === false) warn(where, `${fld} does not end with a period`);
    const fw = v.split(/\s+/)[0].replace(/[^A-Za-z]/g, '');
    firstWords[fld].push([f, name, fw.toLowerCase()]);
    for (const b of BANNED) {
      if (v.toLowerCase().includes(b.toLowerCase())) err(where, `${fld} contains banned token: ${b}`);
    }
    for (const t of SOFT) {
      if (v.toLowerCase().includes(t)) warn(where, `${fld} contains soft-flagged token: ${t}`);
    }
    // n-gram overlap with tagline/workday/evening (skip realityCheck: downsides[0] is verbatim by design)
    const mine = ngrams(v, 6);
    for (const [label, existing] of [['tagline', tagline], ['workday', rhythmEntry.workday], ['evening', rhythmEntry.evening]]) {
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
      if (/[‘’]/.test(b)) err(where, `${label} ${i + 1} contains curly single quotes (house style is straight)`);
      const len = b.length;
      if (len < 30) err(where, `${label} ${i + 1} too short (${len})`);
      if (len > 260) err(where, `${label} ${i + 1} too long (${len})`);
      if (!/^[\p{Lu}]/u.test(b.replace(/^[.'"]/, ''))) err(where, `${label} ${i + 1} does not start with a capital letter`);
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
    err(where, 'downsides[0] is not the metadata realityCheck verbatim');
  }
  // downsides[1..2] must not duplicate workday/evening/tagline either
  for (const b of (obj.downsides || []).slice(1)) {
    const mine = ngrams(b, 6);
    for (const [label, existing] of [['tagline', tagline], ['workday', rhythmEntry.workday], ['evening', rhythmEntry.evening]]) {
      for (const g of ngrams(existing, 6)) {
        if (mine.has(g)) err(where, `downside duplicates 6-word run from ${label}: "${g}"`);
      }
    }
  }

  vibrantCount[f] = (vibrantCount[f] || 0) +
    [...JSON.stringify(obj).matchAll(/vibrant/gi)].length;
  bustlingCount[f] = (bustlingCount[f] || 0) +
    [...JSON.stringify(obj).matchAll(/bustling/gi)].length;
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
console.log(`Checked ${keyOrder.length} countries across ${FILES.length} files.`);
if (warnings.length) console.log(`\nWarnings (${warnings.length}):\n` + warnings.join('\n'));
if (errors.length) {
  console.log(`\nErrors (${errors.length}):\n` + errors.join('\n'));
  process.exit(1);
} else {
  console.log('\nAll checks passed.');
}

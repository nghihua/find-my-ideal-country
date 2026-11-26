#!/usr/bin/env node
/**
 * QC for src/data/climateProfiles.ts (COUNTRY_CLIMATE_PROFILES).
 * Usage: node scripts/qc-climate-profiles.mjs [--json]
 * Checks: duplicate/unknown keys, full tier-1 + metadata coverage, valid
 * enums, sane integer ranges, categorical-vs-range agreement (warn one
 * class, error on outright contradiction), and cross-checks against each
 * country's dimensions.climate band (with a reviewed-contradiction
 * whitelist). The record is eval'ed, never regex-parsed for values.
 */
import { readFileSync } from 'node:fs';

const ROOT = new URL('..', import.meta.url).pathname;
const asJson = process.argv.includes('--json');

const errors = [];
const warnings = [];
function err(where, msg) { errors.push(`[ERROR] ${where}: ${msg}`); }
function warn(where, msg) { warnings.push(`[WARN] ${where}: ${msg}`); }

// ---------- Load reference data ----------
function evalBlock(src, startMarker, endMarker) {
  const block = src.slice(src.indexOf(startMarker), src.indexOf(endMarker));
  const eq = block.indexOf('= {');
  const body = block.slice(eq + 2, block.lastIndexOf('};') + 1);
  return eval('(' + body + ')');
}

const climateSrc = readFileSync(`${ROOT}src/data/climateProfiles.ts`, 'utf8');
const profiles = evalBlock(climateSrc, 'export const COUNTRY_CLIMATE_PROFILES', '/** Broad fallback');

const metaSrc = readFileSync(`${ROOT}src/data/globalCountries.ts`, 'utf8');
const metadata = evalBlock(metaSrc, 'export const GLOBAL_COUNTRY_METADATA', '/**\n * Returns a complete CountryData object');

const countriesSrc = readFileSync(`${ROOT}src/data/countries.ts`, 'utf8');
const dbBlock = countriesSrc.slice(
  countriesSrc.indexOf('export const COUNTRY_DATABASE'),
  countriesSrc.indexOf('export const REGIONAL_TEMPLATES'),
);
const tier1 = [...dbBlock.matchAll(/^\s*name: "([^"]+)",/gm)].map((m) => m[1]);

// ---------- Textual key extraction (catches duplicates that eval would silently fold) ----------
const srcKeys = [...climateSrc.matchAll(/^  (.+?): \{ temperature: /gm)]
  .map((m) => m[1])
  .map((k) => {
    if (k.startsWith("'") && k.endsWith("'")) return k.slice(1, -1);
    if (k.startsWith('"') && k.endsWith('"')) return k.slice(1, -1);
    return k;
  });
const dupes = srcKeys.filter((k, i) => srcKeys.indexOf(k) !== i);
if (dupes.length) err('record', `duplicate keys: ${dupes.join(', ')}`);
const evalKeys = Object.keys(profiles);
if (evalKeys.length !== srcKeys.length) {
  err('record', `eval found ${evalKeys.length} keys but source has ${srcKeys.length} lines (duplicates or malformed entries)`);
}

// ---------- Key universe ----------
const known = new Set([...tier1, ...Object.keys(metadata)]);
for (const k of evalKeys) {
  if (!known.has(k)) err(k, 'not a known country (neither tier-1 nor in GLOBAL_COUNTRY_METADATA)');
}

// ---------- Coverage ----------
const missingTier1 = tier1.filter((k) => !(k in profiles));
const missingMeta = Object.keys(metadata).filter((k) => !(k in profiles));
if (missingTier1.length) err('coverage', `tier-1 countries without entries: ${missingTier1.join(', ')}`);
if (missingMeta.length) err('coverage', `metadata countries without entries (would fall to estimateClimateProfile): ${missingMeta.join(', ')}`);

// ---------- Per-entry checks ----------
const TEMPS = ['very-cold', 'cool', 'temperate', 'warm', 'hot'];
const HUMIDITIES = ['dry', 'moderate', 'humid'];
const RAINS = ['low', 'seasonal', 'frequent'];
const SNOWS = ['rare', 'seasonal', 'frequent'];

// Categorical-vs-range agreement. One class off the estimator band shapes
// (very-cold [-15,18] cool [-5,23] temperate [5,27] warm [13,33] hot [22,35])
// warns; two classes errors. Curated precedents calibrate the shared edges:
// US temperate [-2,34], Kenya temperate [20,30], Mauritius warm [22,30],
// South Korea cool [-2,30], Syria warm [13,38].
const RANGE_CHECK = {
  'very-cold': {
    lowErr: (v) => v > 5, lowWarn: (v) => v > 0,
    highErr: (v) => v > 26, highWarn: (v) => v > 21,
  },
  'cool': {
    lowErr: (v) => v > 13, lowWarn: (v) => v > 8,
    highErr: (v) => v > 31, highWarn: (v) => v > 26,
  },
  'temperate': {
    lowErr: (v) => v < -9 || v > 22, lowWarn: (v) => v < 0 || v > 12,
    highErr: (v) => v < 14 || v > 37, highWarn: (v) => v < 18 || v > 29,
  },
  'warm': {
    lowErr: (v) => v < 2 || v > 27, lowWarn: (v) => v < 8 || v > 22,
    highErr: (v) => v < 21 || v > 38, highWarn: (v) => v < 24 || v > 33,
  },
  'hot': {
    lowErr: (v) => v < 10, lowWarn: (v) => v < 15,
    highErr: (v) => v < 24, highWarn: (v) => v < 27,
  },
};

// Band cross-checks vs dimensions.climate. Errors here are research-backed
// contradictions: keep the researched entry, whitelist it with the report
// reason, and fix the metadata separately.
const BAND_RULES = {
  tropical: { temps: ['very-cold', 'cool'], snow: true }, // tropical must not be cool/very-cold or snowy
  'warm-sun': { temps: ['very-cold'], snow: false },
  'four-seasons': { temps: [], snow: false },
  'mild-coastal': { temps: ['very-cold', 'hot'], snow: true },
  'cold-winter': { temps: ['hot'], snow: false },
};
const WHITELIST = {
  // Existing curated entries kept as-is per the no-fix rule; their 'seasonal'
  // snow is country-level (mountain snow) rather than populated-band, so the
  // 2026-11 climate pass flags them for review instead of failing the gate.
  'New Zealand': 'seasonal snow is real in the South Island; winter high 10 is plains-weighted; flagged for review',
  'India': 'seasonal snow reflects the Himalayan states; range is plains-weighted; flagged for review',
  'Morocco': 'seasonal snow is real in the High Atlas; range is lowland-weighted; flagged for review',
  'Argentina': 'seasonal snow is real in Patagonia and the Andes; range is pampas-weighted; flagged for review',
  'Croatia': 'snow is real in the interior; band label is coastal-weighted; flagged for review',
  'Turkey': 'snow is real across the Anatolian interior; band label is coastal-weighted; flagged for review',
  'Chile': 'snow is real in the south and Andes; band label is central-valley-weighted; flagged for review',
};

for (const [name, p] of Object.entries(profiles)) {
  if (!TEMPS.includes(p.temperature)) err(name, `invalid temperature: ${JSON.stringify(p.temperature)}`);
  if (!HUMIDITIES.includes(p.humidity)) err(name, `invalid humidity: ${JSON.stringify(p.humidity)}`);
  if (!RAINS.includes(p.rainfall)) err(name, `invalid rainfall: ${JSON.stringify(p.rainfall)}`);
  if (!SNOWS.includes(p.snowfall)) err(name, `invalid snowfall: ${JSON.stringify(p.snowfall)}`);

  const [lo, hi] = p.temperatureRangeCelsius;
  if (!Array.isArray(p.temperatureRangeCelsius) || p.temperatureRangeCelsius.length !== 2) {
    err(name, `temperatureRangeCelsius must be exactly two values`);
  } else {
    if (!Number.isInteger(lo) || !Number.isInteger(hi)) err(name, `non-integer range: [${lo}, ${hi}]`);
    if (lo >= hi) err(name, `range low >= high: [${lo}, ${hi}]`);
    if (lo < -40 || hi > 55) err(name, `range outside -40..55: [${lo}, ${hi}]`);
  }

  if (RANGE_CHECK[p.temperature]) {
    const rc = RANGE_CHECK[p.temperature];
    if (rc.lowErr(lo)) err(name, `categorical ${p.temperature} contradicts winter high ${lo}`);
    else if (rc.lowWarn(lo)) warn(name, `categorical ${p.temperature} strays one class on winter high ${lo}`);
    if (rc.highErr(hi)) err(name, `categorical ${p.temperature} contradicts summer high ${hi}`);
    else if (rc.highWarn(hi)) warn(name, `categorical ${p.temperature} strays one class on summer high ${hi}`);
  }

  if (p.snowfall !== 'rare' && lo > 12 && !WHITELIST[name]) {
    err(name, `snowfall '${p.snowfall}' but no real winter cold in the populated band (winter high ${lo})`);
  } else if (p.snowfall !== 'rare' && lo > 8) {
    warn(name, `snowfall '${p.snowfall}' with a mild winter high (${lo}) — plausible only via mountain snow`);
  }

  const band = tier1.includes(name) ? null : metadata[name]?.dimensions.climate;
  if (band && BAND_RULES[band]) {
    const rule = BAND_RULES[band];
    const wl = WHITELIST[name];
    if (rule.temps.includes(p.temperature)) {
      if (wl) warn(name, `band '${band}' + temperature '${p.temperature}' (whitelisted: ${wl})`);
      else err(name, `band '${band}' + temperature '${p.temperature}' is a contradiction (whitelist only if the research report justifies it)`);
    }
    if (rule.snow && p.snowfall !== 'rare') {
      if (wl) warn(name, `band '${band}' + snowfall '${p.snowfall}' (whitelisted: ${wl})`);
      else err(name, `band '${band}' + snowfall '${p.snowfall}' is a contradiction (whitelist only if the research report justifies it)`);
    }
  }
}

// ---------- Report ----------
const summary = {
  entries: evalKeys.length,
  tier1: tier1.length,
  metadata: Object.keys(metadata).length,
  warnings: warnings.length,
  errors: errors.length,
};
if (asJson) {
  console.log(JSON.stringify({ summary, warnings, errors }, null, 2));
} else {
  console.log(`Checked ${summary.entries} climate entries (${summary.tier1} tier-1, ${summary.metadata} metadata countries).`);
  if (warnings.length) console.log(`\nWarnings (${warnings.length}):\n` + warnings.join('\n'));
  if (errors.length) {
    console.log(`\nErrors (${errors.length}):\n` + errors.join('\n'));
    process.exit(1);
  } else {
    console.log('\nAll checks passed.');
  }
}

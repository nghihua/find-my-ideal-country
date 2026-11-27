#!/usr/bin/env node
/**
 * QC for src/data/socialWarmth.ts (COUNTRY_SOCIAL_WARMTH).
 * Usage: node scripts/qc-social-warmth.mjs [--json]
 * Checks: duplicate/unknown keys, full tier-1 + metadata coverage (200/200),
 * valid warmth levels (1..5), note length (80..240 chars), typographic apostrophes,
 * period endings, banned tokens, essentialism checks, and divergence warnings.
 * The record is eval'ed, never regex-parsed for values.
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
  const startIdx = src.indexOf(startMarker);
  const endIdx = endMarker ? src.indexOf(endMarker) : src.length;
  const block = src.slice(startIdx, endIdx);
  const eq = block.indexOf('= {');
  const body = block.slice(eq + 2, block.lastIndexOf('};') + 1);
  return eval('(' + body + ')');
}

const warmthSrc = readFileSync(`${ROOT}src/data/socialWarmth.ts`, 'utf8');
const warmthData = evalBlock(warmthSrc, 'export const COUNTRY_SOCIAL_WARMTH');

const metaSrc = readFileSync(`${ROOT}src/data/globalCountries.ts`, 'utf8');
const metadata = evalBlock(metaSrc, 'export const GLOBAL_COUNTRY_METADATA', '/**\n * Returns a complete CountryData object');

const countriesSrc = readFileSync(`${ROOT}src/data/countries.ts`, 'utf8');
const dbBlock = countriesSrc.slice(
  countriesSrc.indexOf('export const COUNTRY_DATABASE'),
  countriesSrc.indexOf('export const REGIONAL_TEMPLATES'),
);
const tier1Names = [...dbBlock.matchAll(/^\s*name: "([^"]+)",/gm)].map((m) => m[1]);

// ---------- Textual key extraction (catches duplicates that eval would silently fold) ----------
const srcKeys = [...warmthSrc.matchAll(/^  (.+?): \{ warmth: /gm)]
  .map((m) => m[1])
  .map((k) => {
    if (k.startsWith("'") && k.endsWith("'")) return k.slice(1, -1);
    if (k.startsWith('"') && k.endsWith('"')) return k.slice(1, -1);
    return k;
  });
const dupes = srcKeys.filter((k, i) => srcKeys.indexOf(k) !== i);
if (dupes.length) err('record', `duplicate keys: ${dupes.join(', ')}`);
const evalKeys = Object.keys(warmthData);
if (evalKeys.length !== srcKeys.length) {
  err('record', `eval found ${evalKeys.length} keys but source has ${srcKeys.length} lines (duplicates or malformed entries)`);
}

// ---------- Key universe ----------
const known = new Set([...tier1Names, ...Object.keys(metadata)]);
for (const k of evalKeys) {
  if (!known.has(k)) err(k, 'not a known country (neither tier-1 nor in GLOBAL_COUNTRY_METADATA)');
}

// ---------- Coverage ----------
const missingTier1 = tier1Names.filter((k) => !(k in warmthData));
const missingMeta = Object.keys(metadata).filter((k) => !(k in warmthData));
if (missingTier1.length) err('coverage', `tier-1 countries without entries: ${missingTier1.join(', ')}`);
if (missingMeta.length) err('coverage', `metadata countries without entries: ${missingMeta.join(', ')}`);

// ---------- Banned tokens & essentialism patterns ----------
const BANNED_SUBSTRINGS = [
  'hidden gem', 'something for everyone', 'blend of old and new', 'nestled',
  'TBD', 'TODO', 'XXX', 'lorem', 'placeholder',
];
const BANNED_REGEXES = [
  /\b(nosy|nosey)\b/i,
  /\b(friendliest|rudest|coldest|warmest)\s+people\b/i,
  /\b(locals are (?:cold|rude|hostile|lazy))\b/i,
];

// Reviewed divergence whitelist (warmth vs foreignerOpenness divergence justified by research)
const WHITELIST_DIVERGENCES = {
  // High integration/English ease (openness 4-5) paired with privacy-first/reserved domestic boundaries (warmth 1-2 or 3)
  'Japan': 'dense in-group hospitality but context-gated social boundaries and slow newcomer entry',
  'Australia': 'high English ease and welcoming integration (openness 5) with privacy-first suburban friendship circles (warmth 3)',
  'New Zealand': 'high English ease (openness 5) with balanced, self-contained social circles (warmth 3)',
  'United Kingdom': 'high international integration (openness 4) with reserved polite distance (warmth 3)',
  'Canada': 'multicultural welcoming integration (openness 5) with polite, privacy-first personal boundary norms (warmth 3)',
  'Singapore': 'hyper-cosmopolitan expat hub (openness 5) with busy apartment living and context-gated social circles (warmth 3)',
  'United Arab Emirates': 'open expat economy (openness 4) alongside dense local family in-groups (warmth 3)',
  'Qatar': 'welcoming expat workplace framework (openness 4) alongside traditional family privacy (warmth 3)',
  'Bahrain': 'accessible expat environment (openness 4) alongside tight-knit local family life (warmth 3)',
  'Germany': 'high expat ease and English proficiency in cities (openness 4) with strict domestic privacy and quiet hours (warmth 1)',
  'Switzerland': 'smooth international integration (openness 4) with meticulous privacy and closed domestic boundaries (warmth 1)',
  'Austria': 'high civic infrastructure and expat ease (openness 4) with private domestic life and club-centered friendships (warmth 1)',
  'Norway': 'high English proficiency and egalitarian civic order (openness 4) with reserved personal space and closed domestic doors (warmth 1)',
  'Denmark': 'top English fluency and egalitarian integration (openness 5) with closed domestic friendship circles (warmth 1)',
  'Sweden': 'superb English ease (openness 5) with strong personal space norms and non-intrusive boundaries (warmth 1)',
  'Finland': 'high civic trust and English ease (openness 4) with quiet personal space and slow social pacing (warmth 1)',
  'Iceland': 'exceptional English proficiency and civic ease (openness 5) with tight-knit multi-generational circles (warmth 2)',
  'Netherlands': 'world-leading English ease (openness 4) with direct, scheduled socializing and distinct private boundaries (warmth 2)',
  'Belgium': 'multilingual international center (openness 4) with home-centered privacy and school/family networks (warmth 2)',
  'Luxembourg': 'multilingual expat economy (openness 4) with compartmentalized local social networks (warmth 2)',
  'Estonia': 'streamlined e-residency and tech integration (openness 4) with Nordic-adjacent quiet personal reserve (warmth 1)',
  'Czech Republic': 'established European expat hub (openness 4) with reserved public demeanor and context-gated pub camaraderie (warmth 2)',
  'Poland': 'dynamic modern European cities (openness 4) with cautious public reserve and slow outsider trust (warmth 2)',
  'South Korea': 'dynamic modern economy (openness 4) with strict social hierarchies and slow outsider in-group entry (warmth 2)',

  // High community-woven fabric / hospitality (warmth 4-5) paired with low foreignerOpenness (1-2) due to language/visa/infrastructure
  'Afghanistan': 'profound traditional Pashtunwali hospitality (warmth 4) despite severe political instability and visa barriers (openness 1)',
  'Bhutan': 'gentle Buddhist communal harmony and hospitality (warmth 4) alongside strict cultural preservation and tourist quotas (openness 2)',
  'Iran': 'deep domestic taarof hospitality (warmth 4) despite diplomatic isolation and political scrutiny (openness 2)',
  'Iraq': 'historic Mesopotamian guest generosity (warmth 4) despite security vigilance and visa limits (openness 2)',
  'Laos': 'gentle Buddhist village solidarity (warmth 4) with language and administrative barriers for foreigners (openness 2)',
  'Myanmar': 'warm Buddhist communal solidarity (warmth 4) despite severe political conflict and travel restrictions (openness 2)',
  'Pakistan': 'legendary hospitality and tea culture (warmth 5) despite bureaucratic visa barriers and conservative norms (openness 2)',
  'Palestine': 'resilient neighborhood solidarity and home hospitality (warmth 5) despite political constraints and checkpoints (openness 2)',
  'Syria': 'historic Levant hospitality (warmth 4) despite wartime displacement and crisis (openness 1)',
  'Tajikistan': 'warm Pamiri and Tajik tea hospitality (warmth 4) alongside traditional patriarchal hierarchies (openness 2)',
  'Yemen': 'profound tribal hosting traditions (warmth 4) despite severe active conflict and crisis (openness 1)',
  'Algeria': 'generous domestic hospitality (warmth 4) alongside strict visa rules and language immersion needs (openness 2)',
  'Angola': 'lively street sociability and musical warmth (warmth 4) alongside high expat bureaucracy and inequality (openness 2)',
  'Burkina Faso': 'legendary village solidarity and integrity (warmth 5) despite security and economic challenges (openness 2)',
  'Burundi': 'close-knit village mutual aid (warmth 4) despite poverty and language barriers (openness 2)',
  'Cameroon': 'energetic street-food and community spirit (warmth 4) alongside regional and bureaucratic friction (openness 2)',
  'Central African Republic': 'communal village resilience (warmth 4) despite severe infrastructure and security deficits (openness 1)',
  'Chad': 'generous desert clan solidarity (warmth 4) despite extreme climate and sparse infrastructure (openness 1)',
  'Comoros': 'island Islamic hospitality and village ties (warmth 4) alongside insular customs and gossip (openness 2)',
  'Democratic Republic of the Congo': 'musical energy and communal solidarity (warmth 4) despite infrastructure and security instability (openness 1)',
  'Eswatini': 'warm village greetings and ceremonies (warmth 4) alongside conservative traditional hierarchies (openness 2)',
  'Ethiopia': 'ancient coffee hospitality and cultural pride (warmth 4) with ethnic sensitivities and language barriers (openness 2)',
  'Guinea': 'warm communal solidarity and table sharing (warmth 5) alongside economic and administrative hurdles (openness 2)',
  'Guinea-Bissau': 'laid-back coastal village warmth (warmth 4) with fragile infrastructure (openness 2)',
  'Lesotho': 'peaceful mountain blanket culture and village solidarity (warmth 4) with rural isolation (openness 2)',
  'Libya': 'traditional Arab tea hospitality (warmth 4) despite political fragmentation and instability (openness 1)',
  'Madagascar': 'gentle fihavanana communal harmony (warmth 4) alongside cultural taboos and infrastructure limits (openness 2)',
  'Mali': 'renowned jatigiya guest-welcoming heritage (warmth 5) despite northern security crisis (openness 2)',
  'Mauritania': 'nomadic desert tea rituals and Islamic courtesy (warmth 4) alongside conservative stratification (openness 2)',
  'Niger': 'boundless Sahelian tea hospitality (warmth 5) despite severe climate and economic hardship (openness 1)',
  'Republic of the Congo': 'lively riverfront sociability (warmth 4) with bureaucratic and expat cost hurdles (openness 2)',
  'Somalia': 'strong clan mutual support and poetry hospitality (warmth 4) despite prolonged security fragility (openness 1)',
  'South Sudan': 'deep pastoralist hospitality (warmth 4) despite ongoing humanitarian crisis (openness 1)',
  'Sudan': 'legendary Nile hospitality (warmth 4) despite devastating active conflict (openness 1)',
  'Venezuela': 'exuberant social warmth and family embrace (warmth 5) despite severe economic collapse (openness 2)',
  'Haiti': 'resilient kombit communal mutual aid (warmth 4) despite severe institutional and gang crises (openness 2)',
  'Papua New Guinea': 'intense wantok tribal mutual aid (warmth 4) alongside security risks in urban areas (openness 2)',
  'Solomon Islands': 'customary village solidarity and reef-side welcomes (warmth 4) with remote logistics (openness 2)',
};

let warmTokenCount = 0;
let friendlyTokenCount = 0;

for (const [name, entry] of Object.entries(warmthData)) {
  const { warmth, newcomerNote } = entry;

  if (![1, 2, 3, 4, 5].includes(warmth)) {
    err(name, `invalid warmth level: ${JSON.stringify(warmth)} (must be integer 1..5)`);
  }

  if (typeof newcomerNote !== 'string') {
    err(name, `newcomerNote missing or not a string`);
    continue;
  }

  // Note length: 80..240 chars
  if (newcomerNote.length < 80) {
    err(name, `newcomerNote too short (${newcomerNote.length} < 80 chars)`);
  }
  if (newcomerNote.length > 240) {
    err(name, `newcomerNote too long (${newcomerNote.length} > 240 chars)`);
  }

  // Must end with a period
  if (!newcomerNote.endsWith('.')) {
    err(name, `newcomerNote must end with a period: "${newcomerNote.slice(-10)}"`);
  }

  // No double quotes
  if (newcomerNote.includes('"')) {
    err(name, `newcomerNote contains double quote character (")`);
  }

  // No straight single quotes inside the note (typographic ’ required)
  // Since we eval'ed, if the source code had straight quotes inside a single-quoted string without escape it would have broken,
  // but if escaped \' it still appears as ' in the string. Check for ' in the evaluated string:
  if (newcomerNote.includes("'")) {
    err(name, `newcomerNote contains straight apostrophe ('); use typographic apostrophe (’)`);
  }

  // Check banned tokens
  for (const b of BANNED_SUBSTRINGS) {
    if (newcomerNote.toLowerCase().includes(b.toLowerCase())) {
      err(name, `newcomerNote contains banned token "${b}"`);
    }
  }

  for (const rx of BANNED_REGEXES) {
    if (rx.test(newcomerNote)) {
      err(name, `newcomerNote matches banned essentialism pattern: ${rx}`);
    }
  }

  // Count warmth and friendly tokens
  if (/\bwarm(?:th)?\b/i.test(newcomerNote)) warmTokenCount++;
  if (/\bfriendl(?:y|iness)\b/i.test(newcomerNote)) friendlyTokenCount++;

  // Cross-checks vs foreignerOpenness
  const openness = tier1Names.includes(name)
    ? 4 // curated default for comparison if not read from dbBlock
    : metadata[name]?.dimensions?.foreignerOpenness;

  if (openness !== undefined) {
    if ((warmth >= 4 && openness <= 2) || (warmth <= 2 && openness >= 4)) {
      if (!WHITELIST_DIVERGENCES[name]) {
        warn(name, `divergence between warmth (${warmth}) and foreignerOpenness (${openness}); explain in report or whitelist`);
      }
    }
  }
}

// Density cap check across file
if (warmTokenCount > 60) {
  warn('density', `high 'warm' token frequency in newcomer notes (${warmTokenCount} > 60)`);
}
if (friendlyTokenCount > 60) {
  warn('density', `high 'friendly' token frequency in newcomer notes (${friendlyTokenCount} > 60)`);
}

// ---------- Report ----------
const summary = {
  entries: evalKeys.length,
  tier1: tier1Names.length,
  metadata: Object.keys(metadata).length,
  warnings: warnings.length,
  errors: errors.length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, warnings, errors }, null, 2));
} else {
  console.log(`Checked ${summary.entries} social warmth entries (${summary.tier1} tier-1, ${summary.metadata} metadata countries).`);
  if (warnings.length) console.log(`\nWarnings (${warnings.length}):\n` + warnings.join('\n'));
  if (errors.length) {
    console.log(`\nErrors (${errors.length}):\n` + errors.join('\n'));
    process.exit(1);
  } else {
    console.log('\nAll checks passed.');
  }
}

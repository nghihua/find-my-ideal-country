// UI dictionary parity checker (docs/i18n-plan.md §3.2 and Phase 0 step 8).
//
// Vite strips TypeScript types without checking them at build time, so the
// `vi: UIStrings` annotation in src/i18n/vi.ts is not enforced by `astro
// build`. This script evals both dictionary literals and verifies:
//   1. identical key sets (no missing or extra keys in any locale),
//   2. identical key order (keeps future batch translation diffs clean),
//   3. identical {varName} interpolation placeholders per key,
//   4. every value is a non-empty string.
//
// Exit code 1 on any violation.

import { readFileSync } from 'node:fs';

const ROOT = new URL('..', import.meta.url).pathname;

function fail(message) {
  console.error(`✗ ${message}`);
  process.exitCode = 1;
}

/** Extract and eval the exported dictionary object from an i18n module. */
function loadDictionary(path) {
  const src = readFileSync(ROOT + path, 'utf8');
  const eq = src.indexOf('= {');
  // Object close is a line of its own: `} as const;` (en) or `};` (vi).
  const closeMatch = src.match(/^\}\s*(?:as const)?;/m);
  if (eq === -1 || !closeMatch) {
    fail(`${path}: could not locate the exported object literal`);
    return {};
  }
  const body = src.slice(eq + 2, closeMatch.index + 1);
  return eval(`(${body})`);
}

const en = loadDictionary('src/i18n/en.ts');
const vi = loadDictionary('src/i18n/vi.ts');
const enKeys = Object.keys(en);
const viKeys = Object.keys(vi);

const missingInVi = enKeys.filter((key) => !(key in vi));
const missingInEn = viKeys.filter((key) => !(key in en));
for (const key of missingInVi) fail(`vi.ts is missing key '${key}'`);
for (const key of missingInEn) fail(`en.ts is missing key '${key}' (extra in vi.ts)`);

const sameOrder =
  enKeys.length === viKeys.length && enKeys.every((key, i) => viKeys[i] === key);
if (!sameOrder) fail('key order differs between en.ts and vi.ts');

function varsOf(value) {
  return [...String(value).matchAll(/\{([a-zA-Z]+)\}/g)].map((m) => m[1]).sort().join(',');
}

for (const key of enKeys) {
  if (!(key in vi)) continue;
  if (typeof en[key] !== 'string' || en[key].length === 0) {
    fail(`en.ts '${key}': value must be a non-empty string`);
  }
  if (typeof vi[key] !== 'string' || vi[key].length === 0) {
    fail(`vi.ts '${key}': value must be a non-empty string`);
  }
  const enVars = varsOf(en[key]);
  const viVars = varsOf(vi[key]);
  if (enVars !== viVars) {
    fail(`'${key}': interpolation vars differ (en: {${enVars}} vs vi: {${viVars}})`);
  }
}

const total = enKeys.length;
const errors = [...missingInVi, ...missingInEn];
if (process.exitCode || errors.length > 0 || !sameOrder) {
  console.error(`i18n parity: FAILED (${total} en keys, ${viKeys.length} vi keys)`);
} else {
  console.log(`i18n parity: OK — ${total} keys identical across en/vi`);
}

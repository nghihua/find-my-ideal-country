// Locale registry for country dossier prose (see docs/i18n-plan.md §3.3).
//
// Only English ships statically; other locales load as separate chunks so
// English users never download Vietnamese prose. The registry object is stable
// across loads, so a registry reference grabbed before a chunk import still
// sees the locale appear afterwards.
//
// Per-field fallback ("Mixed Content Fallback", §7): a vi entry may translate
// only some countries/fields yet; callers always merge localized ?? english.

import type { CountryDossierProse } from '../countries';
import { CONTENT_EN } from './en';

const REGISTRY: Record<string, Record<string, CountryDossierProse>> = { en: CONTENT_EN };

export function getContentRegistry(): Record<string, Record<string, CountryDossierProse>> {
  return REGISTRY;
}

export async function loadContentLocale(locale: string): Promise<void> {
  if (locale === 'en' || REGISTRY[locale]) return;
  // Runtime-selected locale chunk (docs/i18n-plan.md §3.4): a static import
  // would bundle Vietnamese prose into the bundle every English user downloads.
  if (locale === 'vi') {
    const { CONTENT_VI } = await import('./vi');
    REGISTRY.vi = CONTENT_VI;
  }
}

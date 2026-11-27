// Locale registry for country dossier prose (see docs/i18n-plan.md §3.3).
//
// Only English ships statically; other locales load as separate chunks so
// English users never download Vietnamese prose. The registry object is stable
// across loads, so a registry reference grabbed before a chunk import still
// sees the locale appear afterwards.
//
// Per-field fallback ("Mixed Content Fallback", §7): a vi entry may translate
// only some countries/fields yet; callers always merge localized ?? english.

import type { CountryDossierProse, RegionalTemplate } from '../countries';
import { REGIONAL_TEMPLATES } from '../countries';
import { CONTENT_EN } from './en';

const REGISTRY: Record<string, Record<string, CountryDossierProse>> = { en: CONTENT_EN };

export function getContentRegistry(): Record<string, Record<string, CountryDossierProse>> {
  return REGISTRY;
}

// Regional-template registry (Phase 2): English templates ship statically with
// the assembler; localized templates register when their locale chunk loads.
type TemplateRegistry = Record<string, Record<string, RegionalTemplate>>;
const TEMPLATE_REGISTRY: TemplateRegistry = { en: REGIONAL_TEMPLATES };

export function getRegionalTemplateRegistry(): TemplateRegistry {
  return TEMPLATE_REGISTRY;
}

/** Interpolated fallback scaffolds for map-only territories; undefined for en
 *  (the English scaffolds stay inline in globalCountries.ts). */
const FALLBACK_SENTENCES: Record<string, typeof import('./vi/templates').FALLBACK_SENTENCES_VI> = {};

export function getRegionalFallbackSentences(locale: string) {
  return FALLBACK_SENTENCES[locale];
}

// Relocation-note registries (Phase 3): localized practical-factor notes and
// social-warmth newcomer notes register when their locale chunk loads; the
// assembler overlays them per field over the English sources.
type NotePick = Partial<Pick<import('../countries').PracticalFactors, 'englishEaseNote' | 'airQualityNote' | 'hazardNote' | 'tapWaterNote' | 'healthcareNote' | 'taxProfileNote'>>;
const PRACTICAL_NOTES: Record<string, Record<string, NotePick>> = {};
const SOCIAL_NOTES: Record<string, Record<string, { newcomerNote: string }>> = {};

export function getLocalizedPracticalNotes(locale: string): Record<string, NotePick> | undefined {
  return PRACTICAL_NOTES[locale];
}

export function getLocalizedSocialWarmthNotes(locale: string): Record<string, { newcomerNote: string }> | undefined {
  return SOCIAL_NOTES[locale];
}

export async function loadContentLocale(locale: string): Promise<void> {
  if (locale === 'en' || REGISTRY[locale]) return;
  // Runtime-selected locale chunk (docs/i18n-plan.md §3.4): a static import
  // would bundle Vietnamese prose into the bundle every English user downloads.
  if (locale === 'vi') {
    const [{ CONTENT_VI }, { REGIONAL_TEMPLATES_VI, FALLBACK_SENTENCES_VI }, { PRACTICAL_NOTES_VI }, { SOCIAL_NOTES_VI }] = await Promise.all([
      import('./vi'),
      import('./vi/templates'),
      import('./vi/practicalNotes'),
      import('./vi/socialNotes'),
    ]);
    REGISTRY.vi = CONTENT_VI;
    TEMPLATE_REGISTRY.vi = REGIONAL_TEMPLATES_VI;
    FALLBACK_SENTENCES.vi = FALLBACK_SENTENCES_VI;
    PRACTICAL_NOTES.vi = PRACTICAL_NOTES_VI as Record<string, NotePick>;
    SOCIAL_NOTES.vi = SOCIAL_NOTES_VI as Record<string, { newcomerNote: string }>;
  }
}

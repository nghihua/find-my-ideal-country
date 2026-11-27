// Country display-name localization (exonyms).
//
// Canonical English names (the catalog keys used for map linkage, search
// selection, and the quiz) stay untranslated everywhere; this table only maps
// localized display names. Phase 1D populates the ~45 established Vietnamese
// exonyms (Pháp, Đức, Ý, Nhật Bản, Hàn Quốc, Úc, Mỹ, ...) — countries without a
// standard exonym keep their international name, so a missing key here is
// normal, not an error.

import type { Locale } from './index';

export const COUNTRY_NAMES: Record<Locale, Record<string, string>> = {
  en: {},
  vi: {},
};

/** Localized display name for a canonical catalog key, when one exists. */
export function getLocalizedName(canonicalName: string, locale: Locale): string {
  return COUNTRY_NAMES[locale]?.[canonicalName] ?? canonicalName;
}

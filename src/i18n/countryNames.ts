// Country display-name localization (exonyms).
//
// Canonical English names (the catalog keys used for map linkage, search
// selection, and the quiz) stay untranslated everywhere; this table only maps
// localized display names. Phase 1D populates the established Vietnamese
// exonyms (Pháp, Đức, Ý, Nhật Bản, Hàn Quốc, Úc, Mỹ, ...) — countries without a
// standard exonym keep their international name, so a missing key here is
// normal, not an error. Policy (user, 2026-11-27): only names with an
// established Vietnamese identity belong here — NOT hyphenated syllable
// transliterations (phiên âm like 'Bra-xin', 'I-ran'); modern Vietnamese keeps
// the international name for those.

import type { Locale } from './index';

export const COUNTRY_NAMES: Record<Locale, Record<string, string>> = {
  en: {},
  vi: {
    'Antigua and Barbuda': 'Antigua và Barbuda',
    Australia: 'Úc',
    Austria: 'Áo',
    Belgium: 'Bỉ',
    'Bosnia and Herzegovina': 'Bosnia và Hercegovina',
    Cambodia: 'Campuchia',
    'Central African Republic': 'Cộng hoà Trung Phi',
    China: 'Trung Quốc',
    'Czech Republic': 'Séc',
    Denmark: 'Đan Mạch',
    'Democratic Republic of the Congo': 'Cộng hoà Dân chủ Congo',
    Egypt: 'Ai Cập',
    Finland: 'Phần Lan',
    France: 'Pháp',
    Germany: 'Đức',
    Greece: 'Hy Lạp',
    India: 'Ấn Độ',
    Italy: 'Ý',
    Japan: 'Nhật Bản',
    Laos: 'Lào',
    Mongolia: 'Mông Cổ',
    Morocco: 'Maroc',
    Myanmar: 'Miến Điện',
    Netherlands: 'Hà Lan',
    'North Korea': 'Triều Tiên',
    Norway: 'Na Uy',
    Poland: 'Ba Lan',
    Portugal: 'Bồ Đào Nha',
    'Republic of the Congo': 'Cộng hoà Congo',
    Romania: 'Rumani',
    Russia: 'Nga',
    'Saint Kitts and Nevis': 'Saint Kitts và Nevis',
    'Saint Vincent and the Grenadines': 'Saint Vincent và Grenadines',
    'Saudi Arabia': 'Ả Rập Xê Út',
    'South Africa': 'Nam Phi',
    'South Korea': 'Hàn Quốc',
    Spain: 'Tây Ban Nha',
    Sweden: 'Thụy Điển',
    Switzerland: 'Thụy Sĩ',
    Taiwan: 'Đài Loan',
    Thailand: 'Thái Lan',
    'Trinidad and Tobago': 'Trinidad và Tobago',
    Turkey: 'Thổ Nhĩ Kỳ',
    'United Arab Emirates': 'Các Tiểu vương quốc Ả Rập Thống nhất',
    'United Kingdom': 'Vương quốc Anh',
    'United States': 'Mỹ',
    Vietnam: 'Việt Nam',
  },
};

/** Localized display name for a canonical catalog key, when one exists. */
export function getLocalizedName(canonicalName: string, locale: Locale): string {
  return COUNTRY_NAMES[locale]?.[canonicalName] ?? canonicalName;
}

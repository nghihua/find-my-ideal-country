// Isomorphic i18n helper (no runtime framework).
//
// - SSR (Astro components): tFor(Astro.currentLocale) returns a locale-bound
//   lookup — always deterministic, immune to module-state races between
//   concurrently prerendered pages.
// - Client scripts: app.ts calls await initLocale(localeFromDocument()) once on
//   boot, before any UI renders; subsequent t() calls read the active locale.
//   Non-default dictionaries are dynamically imported, so English users never
//   download the Vietnamese chunk.

import { en } from './en';
import type { UIStrings, UIKey } from './en';

export type { UIStrings, UIKey };
export type Locale = 'en' | 'vi';

/** Locales with a /{locale}/ route — keep in sync with astro.config.mjs. */
export const UI_LOCALES: Locale[] = ['en', 'vi'];
export const DEFAULT_LOCALE: Locale = 'en';

/** Native display name per locale (each language names itself); used by the
 *  language switcher. Add the name when adding a locale. */
export const LOCALE_DISPLAY_NAMES: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
};

type Dictionary = Partial<UIStrings>;

const REGISTRY: Record<string, Dictionary> = { en };

let activeLocale: Locale = DEFAULT_LOCALE;

function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'vi';
}

export function getLocale(): Locale {
  return activeLocale;
}

/** Read the boot locale from the prerendered <html lang> attribute. */
export function localeFromDocument(): Locale {
  const lang = typeof document !== 'undefined' ? document.documentElement.lang || '' : '';
  const base = lang.toLowerCase().split('-')[0];
  return isLocale(base) ? base : DEFAULT_LOCALE;
}

/**
 * Boot-time locale preload: resolves the active locale and dynamically imports
 * its dictionary once, before app setup. Returns the resolved locale so callers
 * can thread it into data-layer calls without re-reading the DOM.
 */
export async function initLocale(locale: string): Promise<Locale> {
  const resolved: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  if (resolved !== DEFAULT_LOCALE && !REGISTRY[resolved]) {
    // Dynamic import is runtime locale selection (see docs/i18n-plan.md §3.4):
    // a static import would bundle the Vietnamese dictionary into the chunk
    // every English user downloads.
    const { vi } = await import('./vi');
    REGISTRY[resolved] = vi;
  }
  activeLocale = resolved;
  return resolved;
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  let out = template;
  for (const [key, value] of Object.entries(vars)) {
    out = out.replaceAll(`{${key}}`, String(value));
  }
  return out;
}

/**
 * Look up a UI string. `locale` overrides the active locale (used by SSR
 * components); unknown keys fall back to English, then to the key itself so a
 * missing translation can never blank a UI surface.
 */
export function t(key: UIKey, vars?: Record<string, string | number>, locale?: string): string {
  const dict = REGISTRY[locale ?? activeLocale] ?? en;
  return interpolate(dict[key] ?? en[key] ?? key, vars);
}

/** SSR helper: bind t() to a specific locale (typically Astro.currentLocale). */
export function tFor(locale?: string): (key: UIKey, vars?: Record<string, string | number>) => string {
  return (key, vars) => t(key, vars, locale ?? DEFAULT_LOCALE);
}

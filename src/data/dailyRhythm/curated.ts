import { COUNTRY_DATABASE } from '../countries';
import type { DailyRhythm } from './index';

/**
 * Tier-1 curated countries already carry hand-written daily-rhythm copy in
 * COUNTRY_DATABASE. Derive their entries from there instead of duplicating
 * strings, so DAILY_RHYTHM stays the single lookup for every country.
 */
export const CURATED: Record<string, DailyRhythm> = Object.fromEntries(
  Object.entries(COUNTRY_DATABASE).map(([name, country]) => [
    name,
    { workday: country.workday, evening: country.evening },
  ])
);

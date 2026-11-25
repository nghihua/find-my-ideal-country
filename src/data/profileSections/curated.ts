import { COUNTRY_DATABASE } from '../countries';
import type { ProfileSections } from './index';

/**
 * Tier-1 curated countries already carry hand-written copy in
 * COUNTRY_DATABASE. Derive their entries from there instead of duplicating
 * strings, so PROFILE_SECTIONS stays the single lookup for every country.
 */
export const CURATED: Record<string, ProfileSections> = Object.fromEntries(
  Object.entries(COUNTRY_DATABASE).map(([name, country]) => [
    name,
    {
      culture: country.culture,
      people: country.people,
      costOfLiving: country.costOfLiving,
      upsides: country.upsides,
      downsides: country.downsides,
    },
  ])
);

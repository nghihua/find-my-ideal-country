import { AFRICA_A } from './africa-a';
import { AFRICA_B } from './africa-b';
import { AMERICAS_A } from './americas-a';
import { ASIA_A } from './asia-a';
import { ASIA_B_OCEANIA } from './asia-b-oceania';
import { CARIBBEAN } from './caribbean';
import { CURATED } from './curated';
import { EUROPE_A } from './europe-a';

export interface ProfileSections {
  culture: string;
  people: string;
  costOfLiving: string;
  upsides: string[];
  downsides: string[];
}

/**
 * Country-specific copy for the culture, people, cost-of-living, upsides, and
 * downsides profile sections. This is the source of truth for those strings;
 * profiles without an entry fall back to their regional template.
 */
export const PROFILE_SECTIONS: Record<string, ProfileSections> = {
  ...EUROPE_A,
  ...ASIA_A,
  ...ASIA_B_OCEANIA,
  ...AFRICA_A,
  ...AFRICA_B,
  ...AMERICAS_A,
  ...CARIBBEAN,
  ...CURATED,
};

import { AFRICA_A } from './africa-a';
import { AFRICA_B } from './africa-b';
import { AMERICAS_A } from './americas-a';
import { ASIA_A } from './asia-a';
import { ASIA_B_OCEANIA } from './asia-b-oceania';
import { CARIBBEAN } from './caribbean';
import { CURATED } from './curated';
import { EUROPE_A } from './europe-a';

export interface DailyRhythm {
  workday: string;
  evening: string;
}

/**
 * Country-specific daily-rhythm copy. This is the source of truth for the
 * "What a Typical Workday is Like" and "What a Typical Evening is Like"
 * sections; profiles without an entry fall back to their regional template.
 */
export const DAILY_RHYTHM: Record<string, DailyRhythm> = {
  ...EUROPE_A,
  ...ASIA_A,
  ...ASIA_B_OCEANIA,
  ...AFRICA_A,
  ...AFRICA_B,
  ...AMERICAS_A,
  ...CARIBBEAN,
  ...CURATED,
};

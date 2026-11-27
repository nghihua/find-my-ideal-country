import type { CountryDossierProse } from '../../countries';
import { AFRICA_A } from './africa-a';
import { AFRICA_B } from './africa-b';
import { AMERICAS_A } from './americas-a';
import { ASIA_A } from './asia-a';
import { ASIA_B_OCEANIA } from './asia-b-oceania';
import { CARIBBEAN } from './caribbean';
import { CURATED } from './curated';
import { EUROPE_A } from './europe-a';

export const CONTENT_EN: Record<string, CountryDossierProse> = {
  ...EUROPE_A,
  ...ASIA_A,
  ...ASIA_B_OCEANIA,
  ...AFRICA_A,
  ...AFRICA_B,
  ...AMERICAS_A,
  ...CARIBBEAN,
  ...CURATED,
};

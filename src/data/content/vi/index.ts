import type { CountryDossierProse } from '../../countries';
import { VI_AFRICA_A } from './africa-a';
import { VI_AFRICA_B } from './africa-b';
import { VI_AMERICAS_A } from './americas-a';
import { VI_ASIA_A } from './asia-a';
import { VI_ASIA_B_OCEANIA } from './asia-b-oceania';
import { VI_CARIBBEAN } from './caribbean';
import { VI_CURATED } from './curated';
import { VI_EUROPE_A } from './europe-a';

// Vietnamese prose barrel (Phase 2 complete: all 200 country records).
export const CONTENT_VI: Record<string, CountryDossierProse> = {
  ...VI_EUROPE_A,
  ...VI_ASIA_A,
  ...VI_ASIA_B_OCEANIA,
  ...VI_AFRICA_A,
  ...VI_AFRICA_B,
  ...VI_AMERICAS_A,
  ...VI_CARIBBEAN,
  ...VI_CURATED,
};

import type { PracticalFactors } from './countries';

/**
 * Small, source-backed starter set for visa route existence. “Available” means a
 * route exists in current official guidance; it does not mean a particular user
 * qualifies. Unverified practical fields intentionally remain absent.
 */
export const PRACTICAL_FACTORS: Record<string, PracticalFactors> = {
  Portugal: {
    visaRoutes: { remote: 'available' },
    sources: ['https://aima.gov.pt/en/trabalhar/autorizacao-de-residencia-para-o-exercicio-de-atividade-profissional-prestada-de-forma-remota-com-visto-de-residencia-para-o-exe'],
    verifiedAt: '2026-11-24',
  },
  Spain: {
    visaRoutes: { remote: 'available' },
    healthcare: 'public',
    healthcareNote: 'Spain has a public national health system with decentralized regional administration; access depends on eligibility.',
    sources: ['https://exteriores.gob.es/Consulados/washington/en/ServiciosConsulares/Paginas/Consular/Telework-visa.aspx', 'https://www.sanidad.gob.es/organizacion/sns/home.htm'],
    verifiedAt: '2026-11-24',
  },
  Thailand: {
    visaRoutes: { remote: 'available' },
    sources: ['https://thaiconsulatela.thaiembassy.org/en/publicservice/dtv-visa'],
    verifiedAt: '2026-11-24',
  },
  Colombia: {
    visaRoutes: { remote: 'available' },
    sources: ['https://www.cancilleria.gov.co/atencion-y-servicio-al-ciudadano/tramites-y-servicios/visa/necesito-un-visa'],
    verifiedAt: '2026-11-24',
  },
  Australia: {
    visaRoutes: { mobility: 'limited' },
    sources: ['https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417'],
    verifiedAt: '2026-11-24',
  },
  'New Zealand': {
    visaRoutes: { mobility: 'limited' },
    sources: ['https://www.immigration.govt.nz/work/working-holiday-visas/who-can-apply-for-a-working-holiday-visa/'],
    verifiedAt: '2026-11-24',
  },
  Canada: {
    visaRoutes: { mobility: 'limited' },
    healthcare: 'public',
    healthcareNote: 'Public coverage is provincial or territorial; eligibility and waiting periods depend on the province and status.',
    sources: ['https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html', 'https://www.canada.ca/en/health-canada/services/canada-health-care-system.html'],
    verifiedAt: '2026-11-24',
  },
  'United Kingdom': {
    visaRoutes: { mobility: 'limited' },
    healthcare: 'public',
    healthcareNote: 'NHS access depends on residence and immigration status; many long-stay visa applicants pay an immigration health surcharge.',
    sources: ['https://www.gov.uk/youth-mobility/eligibility', 'https://www.gov.uk/healthcare-immigration-application/who-needs-pay'],
    verifiedAt: '2026-11-24',
  },
  Switzerland: {
    healthcare: 'private-required',
    healthcareNote: 'Residents generally must obtain compulsory basic insurance; exemptions and cross-border cases apply.',
    sources: ['https://www.bag.admin.ch/en/health-insurance-requirement-to-obtain-insurance-for-persons-resident-in-switzerland'],
    verifiedAt: '2026-11-24',
  },
  Japan: {
    healthcare: 'public',
    hazardLevel: 'higher',
    hazardTypes: { earthquake: 'high', 'tropical-cyclone': 'high' },
    hazardNote: 'ThinkHazard country-level earthquake and cyclone classifications; local exposure varies. Treat as a prompt to check the destination city, not an overall safety score.',
    healthcareNote: 'Eligible residents enroll in public health insurance and pay premiums and cost shares; foreign-resident eligibility has conditions.',
    sources: ['https://www.mhlw.go.jp/content/001764098.pdf', 'https://int.thinkhazard.org/en/report/JPN-japan/EQ', 'https://thinkhazard.org/en/report/126-japan/CY'],
    verifiedAt: '2026-11-24',
  },
  'United States': {
    healthcare: 'mixed',
    healthcareNote: 'Coverage combines private insurance with public programs; eligibility and costs depend on state and personal circumstances.',
    sources: ['https://www.cms.gov/files/document/nsa-health-insurance-basics.pdf'],
    verifiedAt: '2026-11-24',
  },
  Mexico: {
    tapWater: 'generally-not-potable',
    tapWaterNote: 'CDC travel guidance advises against drinking tap water in Mexico. Conditions and treatment can vary locally; use sealed or appropriately treated water.',
    sources: ['https://www.cdc.gov/yellow-book/hcp/americas-caribbean/mexico.html'],
    verifiedAt: '2026-11-24',
  },
  Taiwan: {
    hazardLevel: 'higher',
    hazardTypes: { earthquake: 'high', 'tropical-cyclone': 'high', 'coastal-flood': 'high' },
    hazardNote: 'ThinkHazard country-level classifications; local exposure varies. Check the destination city and district.',
    sources: ['https://int.thinkhazard.org/en/report/TWN-taiwan'],
    verifiedAt: '2026-11-24',
  },
  Indonesia: {
    hazardLevel: 'higher',
    hazardTypes: { earthquake: 'high', tsunami: 'high', volcano: 'high', flood: 'high' },
    hazardNote: 'ThinkHazard reports high levels for several hazards nationally, while local levels vary substantially by island and district.',
    sources: ['https://int.thinkhazard.org/en/report/IDN-indonesia'],
    verifiedAt: '2026-11-24',
  },
};

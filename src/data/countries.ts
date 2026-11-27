export type ClimateCategory = 'tropical' | 'warm-sun' | 'four-seasons' | 'mild-coastal' | 'cold-winter';
export type ClimateTemperature = 'very-cold' | 'cool' | 'temperate' | 'warm' | 'hot';
export type ClimateHumidity = 'dry' | 'moderate' | 'humid';
export type ClimateRainfall = 'low' | 'seasonal' | 'frequent';
export type ClimateSnowfall = 'rare' | 'seasonal' | 'frequent';
export interface CountryClimateProfile {
  temperature: ClimateTemperature;
  /** Approximate cool-season to warm-season typical daytime highs, in Celsius. */
  temperatureRangeCelsius: [number, number];
  humidity: ClimateHumidity;
  rainfall: ClimateRainfall;
  snowfall: ClimateSnowfall;
}
export type SocialWarmthLevel = 1 | 2 | 3 | 4 | 5;
export interface CountrySocialWarmth {
  warmth: SocialWarmthLevel;
  newcomerNote: string;
}
export type TransitArchetype = 'walkable-rail' | 'motorbike-active' | 'car-dependent' | 'mixed-transit';
export type WeekendRhythm = 'vibrant-24-7' | 'standard' | 'quiet-sunday';
export type ReligionRole = 'secular' | 'cultural-tradition' | 'moderate' | 'prominent';

export interface LifestyleDimensions {
  costIndex: number; // 1 (<$1.2k), 2 ($1.2k-1.8k), 3 ($1.8k-2.8k), 4 ($2.8k-4k), 5 ($4k+)
  climate: ClimateCategory;
  transit: TransitArchetype;
  convenienceScore: number; // 1 (strict DIY, expensive labor) to 5 (24/7 delivery, ultra-convenient)
  weekendRhythm: WeekendRhythm; // vibrant-24-7, standard, quiet-sunday
  natureScore: number; // 1-5 outdoor & nature accessibility
  lgbtqTier: number; // 1 (criminalized/hostile), 2 (restricted), 3 (moderate/tolerated), 4 (protected/welcoming), 5 (world leader)
  religionRole: ReligionRole;
  foreignerOpenness: number; // 1-5 expat ease / English / friendliness
  paceScore: number; // 1 (slow/rural/aging) to 5 (energetic/youthful/hustle)
}

/** Practical relocation indicators. Missing values remain unknown instead of being regionally inferred. */
export interface PracticalFactors {
  visaFit?: 'easy' | 'moderate' | 'difficult' | 'unknown';
  visaRoutes?: Partial<Record<'remote' | 'mobility' | 'sponsored', 'available' | 'limited' | 'unknown'>>;
  healthcare?: 'public' | 'private-required' | 'affordable-private' | 'mixed' | 'unknown';
  healthcareNote?: string;
  englishEase?: 1 | 2 | 3 | 4 | 5;
  englishEaseNote?: string;
  tapWater?: 'generally-potable' | 'regional' | 'generally-not-potable' | 'unknown';
  tapWaterNote?: string;
  airQuality?: 'good' | 'seasonal-issues' | 'frequent-issues' | 'unknown';
  airQualityNote?: string;
  hazardLevel?: 'lower' | 'moderate' | 'higher' | 'unknown';
  hazardTypes?: Partial<Record<'earthquake' | 'tropical-cyclone' | 'flood' | 'coastal-flood' | 'landslide' | 'tsunami' | 'volcano' | 'extreme-heat' | 'water-scarcity' | 'wildfire', 'high' | 'medium' | 'low' | 'very-low' | 'no-hazard'>>;
  hazardNote?: string;
  taxProfile?: 'higher-services' | 'lower-territorial' | 'mixed' | 'unknown';
  taxProfileNote?: string;
  continent?: 'Africa' | 'Asia' | 'Europe' | 'North America' | 'South America' | 'Oceania';
  timezoneRegion?: 'Americas' | 'Europe/Africa' | 'Asia/Oceania';
  sources?: string[];
  verifiedAt?: string;
}

export interface CountryData {
  id: string;
  name: string;
  icon: string;
  region: string;
  tagline: string;
  cost: string;
  wlb: string;
  safety: string;
  culture: string;
  people: string;
  costOfLiving: string;
  workday: string;
  evening: string;
  upsides: string[];
  downsides: string[];
  tags: string[];
  dimensions: LifestyleDimensions;
  climateProfile?: CountryClimateProfile;
  socialWarmth?: SocialWarmthLevel;
  socialWarmthNote?: string;
  practical?: PracticalFactors;
  realityCheck: string;
  highlights?: string[];
}

export interface CountryDossierProse {
  tagline: string;
  realityCheck: string;
  culture: string;
  people: string;
  costOfLiving: string;
  workday: string;
  evening: string;
  upsides: [string, string, string];
  downsides: [string, string, string];
}

export interface RegionalTemplate {
  cost: string;
  wlb: string;
  safety: string;
  culture: string;
  people: string;
  costOfLiving: string;
  workday: string;
  evening: string;
  upsides: string[];
  downsides: string[];
  dimensions: LifestyleDimensions;
  realityCheck: string;
}

export interface FlagshipCountryMetadata {
  id: string;
  name: string;
  icon: string;
  region: string;
  cost: string;
  wlb: string;
  safety: string;
  tags: string[];
  dimensions: LifestyleDimensions;
}

export const COUNTRY_DATABASE: Record<string, FlagshipCountryMetadata> = {
  "Japan": {
    id: "392",
    name: "Japan",
    icon: "fa-solid fa-torii-gate",
    region: "East Asia",
    cost: "$1,600 – $2,400/mo",
    wlb: "6.5 / 10",
    safety: "9.8 / 10",
    tags: ["urban", "safe", "transit", "moderate-cost", "introvert-friendly", "four-seasons", "foodie", "reserved"],
    dimensions: {
      costIndex: 3,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 4,
      lgbtqTier: 3,
      religionRole: 'secular',
      foreignerOpenness: 3,
      paceScore: 4,
    },
  },
  "Vietnam": {
    id: "704",
    name: "Vietnam",
    icon: "fa-solid fa-mug-hot",
    region: "Southeast Asia",
    cost: "$850 – $1,400/mo",
    wlb: "7.8 / 10",
    safety: "8.5 / 10",
    tags: ["affordable", "warm", "energetic", "foodie", "social", "entrepreneurial"],
    dimensions: {
      costIndex: 1,
      climate: 'tropical',
      transit: 'motorbike-active',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 4,
      lgbtqTier: 3,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 5,
    },
  },
  "Portugal": {
    id: "620",
    name: "Portugal",
    icon: "fa-solid fa-umbrella-beach",
    region: "Southern Europe",
    cost: "$1,600 – $2,300/mo",
    wlb: "8.8 / 10",
    safety: "9.3 / 10",
    tags: ["warm", "relaxed", "safe", "coastal", "moderate-cost", "europe", "foodie"],
    dimensions: {
      costIndex: 2,
      climate: 'mild-coastal',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 2,
    },
  },
  "Netherlands": {
    id: "528",
    name: "Netherlands",
    icon: "fa-solid fa-bicycle",
    region: "Western Europe",
    cost: "$2,400 – $3,600/mo",
    wlb: "9.4 / 10",
    safety: "9.1 / 10",
    tags: ["urban", "transit", "wlb", "safe", "high-cost", "europe", "corporate-hub"],
    dimensions: {
      costIndex: 4,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 3,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 3,
    },
  },
  "Mexico": {
    id: "484",
    name: "Mexico",
    icon: "fa-solid fa-pepper-hot",
    region: "North America",
    cost: "$1,100 – $1,900/mo",
    wlb: "8.0 / 10",
    safety: "6.8 / 10",
    tags: ["warm", "affordable", "foodie", "social", "energetic"],
    dimensions: {
      costIndex: 2,
      climate: 'warm-sun',
      transit: 'mixed-transit',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 4,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 4,
    },
  },
  "Norway": {
    id: "578",
    name: "Norway",
    icon: "fa-solid fa-mountain",
    region: "Northern Europe",
    cost: "$2,800 – $4,200/mo",
    wlb: "9.6 / 10",
    safety: "9.7 / 10",
    tags: ["nature", "safe", "wlb", "high-cost", "introvert-friendly", "four-seasons", "reserved"],
    dimensions: {
      costIndex: 5,
      climate: 'cold-winter',
      transit: 'walkable-rail',
      convenienceScore: 1,
      weekendRhythm: 'quiet-sunday',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 2,
    },
  },
  "Spain": {
    id: "724",
    name: "Spain",
    icon: "fa-solid fa-sun",
    region: "Southern Europe",
    cost: "$1,700 – $2,500/mo",
    wlb: "9.0 / 10",
    safety: "9.0 / 10",
    tags: ["warm", "social", "wlb", "foodie", "moderate-cost", "europe", "coastal"],
    dimensions: {
      costIndex: 2,
      climate: 'warm-sun',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 4,
      paceScore: 3,
    },
  },
  "South Korea": {
    id: "410",
    name: "South Korea",
    icon: "fa-solid fa-bolt",
    region: "East Asia",
    cost: "$1,700 – $2,600/mo",
    wlb: "6.2 / 10",
    safety: "9.5 / 10",
    tags: ["urban", "safe", "transit", "energetic", "foodie", "four-seasons"],
    dimensions: {
      costIndex: 3,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 4,
      lgbtqTier: 2,
      religionRole: 'moderate',
      foreignerOpenness: 3,
      paceScore: 5,
    },
  },
  "Canada": {
    id: "124",
    name: "Canada",
    icon: "fa-solid fa-leaf",
    region: "North America",
    cost: "$2,500 – $3,800/mo",
    wlb: "8.5 / 10",
    safety: "9.2 / 10",
    tags: ["nature", "safe", "wlb", "high-cost", "four-seasons", "corporate-hub"],
    dimensions: {
      costIndex: 4,
      climate: 'cold-winter',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 3,
    },
  },
  "Thailand": {
    id: "764",
    name: "Thailand",
    icon: "fa-solid fa-water",
    region: "Southeast Asia",
    cost: "$900 – $1,600/mo",
    wlb: "8.2 / 10",
    safety: "8.3 / 10",
    tags: ["affordable", "warm", "relaxed", "foodie", "social"],
    dimensions: {
      costIndex: 1,
      climate: 'tropical',
      transit: 'motorbike-active',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 4,
    },
  },
  "New Zealand": {
    id: "554",
    name: "New Zealand",
    icon: "fa-solid fa-kiwi-bird",
    region: "Oceania",
    cost: "$2,600 – $3,900/mo",
    wlb: "9.5 / 10",
    safety: "9.6 / 10",
    tags: ["nature", "relaxed", "safe", "wlb", "coastal", "high-cost"],
    dimensions: {
      costIndex: 4,
      climate: 'mild-coastal',
      transit: 'car-dependent',
      convenienceScore: 2,
      weekendRhythm: 'quiet-sunday',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 2,
    },
  },
  "Germany": {
    id: "276",
    name: "Germany",
    icon: "fa-solid fa-beer-mug-empty",
    region: "Central Europe",
    cost: "$2,000 – $2,900/mo",
    wlb: "9.3 / 10",
    safety: "9.1 / 10",
    tags: ["transit", "wlb", "safe", "moderate-cost", "europe", "four-seasons", "corporate-hub", "reserved"],
    dimensions: {
      costIndex: 3,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 2,
      weekendRhythm: 'quiet-sunday',
      natureScore: 4,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 3,
    },
  },
  "Italy": {
    id: "380",
    name: "Italy",
    icon: "fa-solid fa-pizza-slice",
    region: "Southern Europe",
    cost: "$1,800 – $2,700/mo",
    wlb: "8.7 / 10",
    safety: "8.9 / 10",
    tags: ["warm", "foodie", "social", "moderate-cost", "europe", "coastal"],
    dimensions: {
      costIndex: 3,
      climate: 'warm-sun',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 4,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 4,
      paceScore: 3,
    },
  },
  "France": {
    id: "250",
    name: "France",
    icon: "fa-solid fa-wine-glass",
    region: "Western Europe",
    cost: "$2,200 – $3,400/mo",
    wlb: "9.2 / 10",
    safety: "8.7 / 10",
    tags: ["foodie", "wlb", "transit", "europe", "four-seasons"],
    dimensions: {
      costIndex: 3,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 4,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 3,
    },
  },
  "United Kingdom": {
    id: "826",
    name: "United Kingdom",
    icon: "fa-solid fa-landmark",
    region: "Western Europe",
    cost: "$2,500 – $3,800/mo",
    wlb: "8.4 / 10",
    safety: "8.8 / 10",
    tags: ["urban", "transit", "europe", "four-seasons", "social", "corporate-hub"],
    dimensions: {
      costIndex: 4,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 4,
      weekendRhythm: 'standard',
      natureScore: 4,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 4,
    },
  },
  "Australia": {
    id: "036",
    name: "Australia",
    icon: "fa-solid fa-kangaroo",
    region: "Oceania",
    cost: "$2,700 – $4,000/mo",
    wlb: "9.1 / 10",
    safety: "9.3 / 10",
    tags: ["nature", "coastal", "wlb", "safe", "warm", "high-cost", "corporate-hub", "foodie"],
    dimensions: {
      costIndex: 4,
      climate: 'warm-sun',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 3,
    },
  },
  "Switzerland": {
    id: "756",
    name: "Switzerland",
    icon: "fa-solid fa-mountain-sun",
    region: "Central Europe",
    cost: "$3,500 – $5,200/mo",
    wlb: "9.0 / 10",
    safety: "9.9 / 10",
    tags: ["nature", "safe", "transit", "high-cost", "four-seasons", "corporate-hub", "reserved"],
    dimensions: {
      costIndex: 5,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 2,
      weekendRhythm: 'quiet-sunday',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 2,
    },
  },
  "Costa Rica": {
    id: "188",
    name: "Costa Rica",
    icon: "fa-solid fa-seedling",
    region: "Central America",
    cost: "$1,400 – $2,200/mo",
    wlb: "9.2 / 10",
    safety: "8.2 / 10",
    tags: ["nature", "relaxed", "warm", "coastal", "moderate-cost"],
    dimensions: {
      costIndex: 2,
      climate: 'tropical',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 2,
    },
  },
  "Greece": {
    id: "300",
    name: "Greece",
    icon: "fa-solid fa-landmark-dome",
    region: "Southern Europe",
    cost: "$1,300 – $2,000/mo",
    wlb: "8.6 / 10",
    safety: "8.8 / 10",
    tags: ["warm", "coastal", "foodie", "relaxed", "moderate-cost", "europe"],
    dimensions: {
      costIndex: 2,
      climate: 'mild-coastal',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 2,
    },
  },
  "Taiwan": {
    id: "158",
    name: "Taiwan",
    icon: "fa-solid fa-mug-saucer",
    region: "East Asia",
    cost: "$1,400 – $2,200/mo",
    wlb: "7.8 / 10",
    safety: "9.7 / 10",
    tags: ["foodie", "safe", "transit", "warm", "energetic"],
    dimensions: {
      costIndex: 2,
      climate: 'tropical',
      transit: 'walkable-rail',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 4,
    },
  },
  "Colombia": {
    id: "170",
    name: "Colombia",
    icon: "fa-solid fa-mountain",
    region: "South America",
    cost: "$1,000 – $1,700/mo",
    wlb: "8.1 / 10",
    safety: "6.9 / 10",
    tags: ["affordable", "warm", "social", "nature", "energetic", "foodie"],
    dimensions: {
      costIndex: 1,
      climate: 'warm-sun',
      transit: 'mixed-transit',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 4,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 4,
    },
  },
  "Indonesia": {
    id: "360",
    name: "Indonesia",
    icon: "fa-solid fa-volcano",
    region: "Southeast Asia",
    cost: "$900 – $1,600/mo",
    wlb: "8.4 / 10",
    safety: "8.1 / 10",
    tags: ["affordable", "warm", "nature", "coastal", "relaxed"],
    dimensions: {
      costIndex: 1,
      climate: 'tropical',
      transit: 'motorbike-active',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 2,
      religionRole: 'prominent',
      foreignerOpenness: 5,
      paceScore: 3,
    },
  }
};

export const REGIONAL_TEMPLATES: Record<string, RegionalTemplate> = {
  "Europe": {
    cost: "$1,900 – $2,900/mo",
    wlb: "8.5 / 10",
    safety: "8.7 / 10",
    culture: "Deeply rooted in local history, walkable town squares, café culture, and strong social safety nets. Traditions vary wildly from region to region, with immense pride in local food and heritage.",
    people: "Value work-life boundaries, public etiquette, and genuine conversation over rushed small talk. Multilingualism is common among younger generations.",
    costOfLiving: "Moderate to high depending on proximity to major capitals. Public healthcare and rail networks reduce car dependency, though housing in historic centers commands a premium.",
    workday: "Structured around a balanced 37–40 hour week, generous annual leave (25–30 days), and proper sit-down lunch breaks away from desks.",
    evening: "Unfolds in pedestrianized old towns, neighborhood bistros, parks, and cultural venues well into the evening.",
    upsides: ["Walkable cities and rich historical architecture.", "Strong labor rights, healthcare, and public transit.", "Easy weekend travel to neighboring countries."],
    downsides: ["Slower administrative and banking bureaucracy.", "Higher income and VAT taxes.", "Seasonal winter gloom in northern latitudes."],
    dimensions: {
      costIndex: 3,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 4,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Administrative bureaucracy can move slowly, older properties often lack modern air-conditioning, and winter daylight hours shorten dramatically."
  },
  "Asia": {
    cost: "$1,100 – $2,000/mo",
    wlb: "7.4 / 10",
    safety: "8.6 / 10",
    culture: "Fast-evolving societies where ancient temples and deep family traditions sit beside futuristic skylines. Food is the universal love language.",
    people: "Warm, hospitable, and community-minded, with strong respect for elders and an energetic entrepreneurial spirit.",
    costOfLiving: "Generally high value for money—fresh street food, domestic services, and local transit are very affordable, while imported luxury goods cost more.",
    workday: "Energetic and fast-paced, often starting early with communal lunches and strong digital connectivity.",
    evening: "Bustling night markets, late-night cafes, family park strolls, and lively street food scenes.",
    upsides: ["Incredible culinary diversity and affordability.", "Rapidly modernizing infrastructure and warm hospitality.", "Safe, vibrant evening street life."],
    downsides: ["Tropical heat, monsoon seasons, or urban air quality.", "Language barriers outside major commercial hubs.", "Dense traffic in megacities."],
    dimensions: {
      costIndex: 2,
      climate: 'tropical',
      transit: 'mixed-transit',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 4,
      lgbtqTier: 3,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 4,
      paceScore: 4,
    },
    realityCheck: "Tropical humidity or monsoon seasons require adjustment, and local language proficiency is often needed outside tourist corridors."
  },
  "Americas": {
    cost: "$1,400 – $2,600/mo",
    wlb: "7.8 / 10",
    safety: "7.2 / 10",
    culture: "Expressive, diverse, and shaped by rich indigenous, European, and immigrant influences. Music, outdoor barbecues, and family gatherings anchor community life.",
    people: "Open, conversational, and welcoming—making new acquaintances comes naturally.",
    costOfLiving: "Ranges from very affordable in Latin American hubs to high in North American metro centers. Car ownership is common outside major downtown cores.",
    workday: "Standard 9-to-5 or 9-to-6 schedules with growing adoption of remote/hybrid work and lively midday lunch spots.",
    evening: "Socializing over local food, live music, neighborhood parks, and weekend road trips into dramatic landscapes.",
    upsides: ["Warm, approachable social culture.", "Vast geographic diversity from mountains to coastlines.", "Shared time zones for remote work across the continent."],
    downsides: ["Public transit is often limited outside major cities.", "Safety and infrastructure vary significantly by neighborhood.", "Higher reliance on private healthcare or cars in many areas."],
    dimensions: {
      costIndex: 2,
      climate: 'warm-sun',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 4,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Public transit is limited outside central metro areas requiring driving, and safety varies notably across neighborhoods."
  },
  "Africa": {
    cost: "$950 – $1,800/mo",
    wlb: "8.0 / 10",
    safety: "6.8 / 10",
    culture: "Deeply communal, resilient, and rich in storytelling, music, and hospitality. Ubuntu ('I am because we are') reflects the spirit of mutual support.",
    people: "Warm, expressive, and remarkably welcoming to respectful visitors, with vibrant multilingual communities.",
    costOfLiving: "Affordable daily living, fresh produce, and domestic help, though imported electronics and international flights can be pricey.",
    workday: "Starts early, fueled by local tea or coffee, with strong interpersonal relationship-building before business.",
    evening: "Community gatherings, outdoor dining, live music, and early sunsets near the equator.",
    upsides: ["Extraordinary wildlife, landscapes, and warm human connection.", "Affordable cost of living and growing tech hubs.", "Rich musical and artistic traditions."],
    downsides: ["Infrastructure reliability (power/transit) varies by city.", "Safety requires local awareness and neighborhood selection.", "Bureaucracy can move at an unhurried pace."],
    dimensions: {
      costIndex: 1,
      climate: 'warm-sun',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 2,
      religionRole: 'prominent',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Public infrastructure (transport and electricity grids) can face periodic disruptions, and local community guidance is essential for navigation."
  },
  "Oceania": {
    cost: "$2,300 – $3,400/mo",
    wlb: "9.0 / 10",
    safety: "9.0 / 10",
    culture: "Outdoors-obsessed, egalitarian, and relaxed. Beach life, sports, and café culture define everyday routines.",
    people: "Friendly, straightforward, and easygoing with a great sense of humor.",
    costOfLiving: "High housing and grocery costs offset by strong wages and an active outdoor lifestyle.",
    workday: "Starts with specialty coffee and wraps up promptly so people can enjoy beaches, parks, and sports.",
    evening: "Coastal sunsets, backyard barbecues, and relaxed neighborhood dining.",
    upsides: ["World-class beaches, nature, and clean air.", "High standard of living and laid-back culture.", "Strong work-life balance."],
    downsides: ["Long flight distances to Europe, Asia, or the Americas.", "High urban housing costs.", "Strong UV sun exposure."],
    dimensions: {
      costIndex: 4,
      climate: 'mild-coastal',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 2,
    },
    realityCheck: "High flight costs to visit other continents, expensive consumer goods, and strong solar UV index requiring sun awareness."
  }
};

export interface QuizOption {
  label: string;
  desc: string;
  value: string;
  icon: string;
  isNoPreference?: boolean;
}

export interface QuizQuestion {
  id: string;
  stage: number;
  stageName: string;
  question: string;
  subtitle: string;
  category: 'budget' | 'lgbtq' | 'transit' | 'convenience' | 'weekend' | 'climate' | 'temperature' | 'humidity' | 'rainfall' | 'snowfall' | 'religion' | 'openness' | 'density' | 'career' | 'priority';
  /** Multi-select questions toggle options, require Continue, and use best-match scoring. */
  multiSelect?: boolean;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'continent', stage: 1, multiSelect: true, stageName: 'Location & Practical Fit', question: 'Which continent is open to you?',
    subtitle: 'Select any continents you would consider. Leave everything unselected to include all regions.', category: 'openness',
    options: [
      { label: 'Anywhere', desc: 'Keep every region in the results.', value: 'all', icon: 'fa-solid fa-earth-americas', isNoPreference: true },
      ...['Europe','Asia','Africa','North America','South America','Oceania'].map((region, i) => ({ label: region, desc: `Include ${region} destinations.`, value: region, icon: ['fa-solid fa-landmark','fa-solid fa-torii-gate','fa-solid fa-mountain-sun','fa-solid fa-city','fa-solid fa-leaf','fa-solid fa-water'][i] }))
    ]
  },
  {
    id: 'timezoneOverlap', stage: 1, multiSelect: true, stageName: 'Location & Practical Fit', question: 'Where are your clients or collaborators?',
    subtitle: 'A broad timezone-region filter; countries can span multiple time zones.', category: 'openness',
    options: [
      { label: 'No timezone constraint', desc: 'Keep all destinations.', value: 'all', icon: 'fa-solid fa-clock', isNoPreference: true },
      { label: 'Americas', desc: 'Prefer overlap with the Americas.', value: 'Americas', icon: 'fa-solid fa-clock' },
      { label: 'Europe or Africa', desc: 'Prefer overlap with Europe or Africa.', value: 'Europe/Africa', icon: 'fa-solid fa-clock' },
      { label: 'Asia or Oceania', desc: 'Prefer overlap with Asia or Oceania.', value: 'Asia/Oceania', icon: 'fa-solid fa-clock' }
    ]
  },
  {
    id: 'healthcarePreference', stage: 1, multiSelect: true, stageName: 'Location & Practical Fit', question: 'What healthcare setup suits you?',
    subtitle: 'Country-level model only; coverage and costs depend on eligibility and location.', category: 'openness',
    options: [
      { label: 'Public or universal coverage', desc: 'Prefer broad public coverage.', value: 'public', icon: 'fa-solid fa-hospital' },
      { label: 'Affordable private clinics', desc: 'I’m comfortable paying directly for care.', value: 'affordable-private', icon: 'fa-solid fa-stethoscope' },
      { label: 'I can budget for private insurance', desc: 'Private coverage is acceptable.', value: 'private-required', icon: 'fa-solid fa-shield-heart' },
      { label: 'No preference', desc: 'Don’t score healthcare fit.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'taxPreference', stage: 1, multiSelect: true, stageName: 'Location & Practical Fit', question: 'How do you weigh taxes and public services?',
    subtitle: 'Tax depends on residency, income source, and personal circumstances.', category: 'openness',
    options: [
      { label: 'Higher taxes with broad public services', desc: 'I value the service package.', value: 'higher-services', icon: 'fa-solid fa-building-columns' },
      { label: 'Lower-tax or territorial systems', desc: 'I prioritize financial flexibility.', value: 'lower-territorial', icon: 'fa-solid fa-coins' },
      { label: 'No preference', desc: 'Don’t score tax fit.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'environmentPreference', stage: 1, multiSelect: true, stageName: 'Location & Practical Fit', question: 'How much environmental variability can you accept?',
    subtitle: 'Water, air quality, and hazards vary within countries and by season.', category: 'openness',
    options: [
      { label: 'Prefer lower exposure', desc: 'I favor places with fewer common environmental disruptions.', value: 'lower', icon: 'fa-solid fa-leaf' },
      { label: 'I can adapt to regional or seasonal issues', desc: 'I’m comfortable checking local conditions.', value: 'flexible', icon: 'fa-solid fa-cloud-sun' },
      { label: 'No preference', desc: 'Don’t score environmental fit.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: "visaPath", stage: 1, multiSelect: true, stageName: "Essentials & Dealbreakers",
    question: "What relocation route could you realistically use?",
    subtitle: "This is a broad fit estimate; eligibility depends on your passport, age, income, and work situation.", category: "career",
    options: [
      { label: "Remote-work / digital-nomad route", desc: "I expect to keep working remotely.", value: "remote", icon: "fa-solid fa-laptop" },
      { label: "Working holiday, study, or youth mobility", desc: "I may qualify for a temporary work or study route.", value: "mobility", icon: "fa-solid fa-plane" },
      { label: "Local job with employer sponsorship", desc: "I plan to find eligible local employment.", value: "sponsored", icon: "fa-solid fa-briefcase" },
      { label: "Citizenship / permanent residence", desc: "I already have a right to live there; this is not scored.", value: "residency", icon: "fa-solid fa-id-card" },
      { label: "Not sure / no preference", desc: "Keep this as information, not a filter.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "languageComfort", stage: 1, stageName: "Essentials & Dealbreakers",
    question: "How comfortable are you living with a language barrier?",
    subtitle: "Think about appointments, banking, housing, and everyday errands.", category: "openness",
    options: [
      { label: "I need day-one independence in English", desc: "English should work for most daily tasks.", value: "english", icon: "fa-solid fa-language" },
      { label: "I’m excited to learn the local language", desc: "I can manage with translation help while learning.", value: "learn", icon: "fa-solid fa-book-open" },
      { label: "No preference", desc: "Language should not change my match.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "budget",
    multiSelect: true,
    stage: 1,
    stageName: "Essentials & Dealbreakers",
    question: "What is your monthly budget ceiling?",
    subtitle: "Includes rent for a comfortable 1-bedroom flat, daily meals out, and transit.",
    category: "budget",
    options: [
      { label: "Lean & High-Value (<$1,500/mo)", desc: "Dine out daily, live in a modern flat, stretch every dollar.", value: "lean", icon: "fa-solid fa-wallet" },
      { label: "Comfortable Mid-Range ($1,500 – $2,800/mo)", desc: "Solid European or Asian living standard, quality healthcare, dining freedom.", value: "moderate", icon: "fa-solid fa-scale-balanced" },
      { label: "Premium & High-Income ($2,800+/mo)", desc: "Spotless infrastructure, world-class public services, top salaries.", value: "premium", icon: "fa-solid fa-landmark" },
      { label: "Flexible / No Preference", desc: "Open to anywhere that fits the lifestyle, regardless of price tier.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "lgbtq",
    multiSelect: true,
    stage: 1,
    stageName: "Essentials & Dealbreakers",
    question: "What level of LGBTQ+ rights and social safety is required?",
    subtitle: "Legal protections and public acceptance vary drastically across borders.",
    category: "lgbtq",
    options: [
      { label: "Must be Legally Protected & Celebrated", desc: "Full marriage equality, anti-discrimination laws, vibrant open community.", value: "protected", icon: "fa-solid fa-rainbow" },
      { label: "Moderate Acceptance / Safe", desc: "General social tolerance and safety, even if conservative customs linger.", value: "tolerant", icon: "fa-solid fa-shield-heart" },
      { label: "No Preference / Not a Personal Priority", desc: "Do not filter out countries based on LGBTQ+ policies or social norms.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "transit",
    multiSelect: true,
    stage: 1,
    stageName: "Essentials & Dealbreakers",
    question: "How do you want to get around every day?",
    subtitle: "Commute style dictates daily fitness, freedom, and stress levels.",
    category: "transit",
    options: [
      { label: "Walkable Towns & Punctual Rail", desc: "Hate driving. I want trains, trams, and pedestrian cobblestone avenues.", value: "walkable-rail", icon: "fa-solid fa-train-subway" },
      { label: "Bustling Street Movement & Cheap Taxis", desc: "Scooters, motorbikes, ride-hailing apps, and dynamic street energy.", value: "motorbike-active", icon: "fa-solid fa-motorcycle" },
      { label: "Wide Open Roads & Car Freedom", desc: "Scenic road trips, spacious parking, and freedom behind the wheel.", value: "car-dependent", icon: "fa-solid fa-car" },
      { label: "Flexible / No Preference", desc: "Willing to adapt to whatever transit style the country offers.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "convenience",
    stage: 2,
    stageName: "Daily Lifestyle & Rhythms",
    question: "What is your expectation for daily services and convenience?",
    subtitle: "Labor costs and cultural norms shape whether you can outsource chores or DIY.",
    category: "convenience",
    options: [
      { label: "Ultra-High Convenience & 24/7 Delivery", desc: "Inexpensive laundry, 24/7 convenience stores, instant delivery apps.", value: "high-convenience", icon: "fa-solid fa-basket-shopping" },
      { label: "Quiet Self-Reliance & High-Wage DIY Culture", desc: "I enjoy cooking, fixing things myself, and respecting service workers' rest.", value: "diy", icon: "fa-solid fa-screwdriver-wrench" },
      { label: "No Preference / Comfortable with Both", desc: "Can DIY happily, but also appreciate convenience when available.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "weekend",
    multiSelect: true,
    stage: 2,
    stageName: "Daily Lifestyle & Rhythms",
    question: "What should a typical weekend and evening feel like?",
    subtitle: "From 24/7 neon night markets to sacred Sunday shutdowns.",
    category: "weekend",
    options: [
      { label: "Buzzing Street Life & Open Sundays", desc: "Night markets, vibrant plazas, late cafe culture, active 7-day commerce.", value: "vibrant-24-7", icon: "fa-solid fa-martini-glass-citrus" },
      { label: "Sacred Sunday Rest & Peaceful Evenings", desc: "Stores shut on Sundays, quiet residential evenings, peaceful silence.", value: "quiet-sunday", icon: "fa-solid fa-bed" },
      { label: "No Preference / Happy with Either Vibe", desc: "Enjoy lively nights out as well as calm weekends at home.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "climate",
    multiSelect: true,
    stage: 2,
    stageName: "Daily Lifestyle & Rhythms",
    question: "What climate makes you feel most alive?",
    subtitle: "Weather shapes wardrobe, seasonal stamina, and outdoor activities.",
    category: "climate",
    options: [
      { label: "Tropical Warmth & Sunshine", desc: "No winter coats, lush tropical breezes, and year-round outdoor dining.", value: "tropical", icon: "fa-solid fa-sun" },
      { label: "Crisp Four Seasons & Snowy Winters", desc: "Cherry blossoms, golden autumn foliage, and cozy fireplace winters.", value: "four-seasons", icon: "fa-solid fa-snowflake" },
      { label: "Mild Coastal Air & Low Humidity", desc: "Temperate ocean breeze, low mugginess, and comfortable year-round days.", value: "mild-coastal", icon: "fa-solid fa-water" },
      { label: "No Preference / Weather Doesn't Bother Me", desc: "Comfortable in cold, heat, humidity, or seasonal rain.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: 'temperature', stage: 2, multiSelect: true, stageName: 'Weather Preferences', question: 'Which daytime temperature range feels best?',
    subtitle: 'Choose the typical daytime temperature you would be most comfortable in.', category: 'temperature',
    options: [
      { label: 'Really cold · below 10°C (50°F)', desc: 'I feel at home in long, cold winters.', value: 'very-cold', icon: 'fa-solid fa-temperature-low' },
      { label: 'Cool · 10–17°C (50–63°F)', desc: 'I prefer crisp air and mild summers.', value: 'cool', icon: 'fa-solid fa-cloud' },
      { label: 'Temperate · 18–24°C (64–75°F)', desc: 'Mostly mild weather suits me best.', value: 'temperate', icon: 'fa-solid fa-cloud-sun' },
      { label: 'Warm · 25–30°C (77–86°F)', desc: 'I like warm days and gentle winters.', value: 'warm', icon: 'fa-solid fa-sun' },
      { label: 'Hot · 31°C+ (88°F+)', desc: 'Give me heat and very mild winters.', value: 'hot', icon: 'fa-solid fa-temperature-high' },
      { label: 'No preference', desc: 'Temperature should not affect my matches.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'humidity', stage: 2, multiSelect: true, stageName: 'Weather Preferences', question: 'How much humidity feels comfortable?',
    subtitle: 'Country-level patterns are broad; coasts, mountains, and seasons can feel very different.', category: 'humidity',
    options: [
      { label: 'Dry air', desc: 'I prefer little muggy or sticky weather.', value: 'dry', icon: 'fa-solid fa-wind' },
      { label: 'Balanced', desc: 'Some humidity is fine, as long as it is not constant.', value: 'moderate', icon: 'fa-solid fa-cloud-sun' },
      { label: 'Humid air', desc: 'I am comfortable with warm, moisture-rich air.', value: 'humid', icon: 'fa-solid fa-droplet' },
      { label: 'No preference', desc: 'Humidity should not affect my matches.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'rainfall', stage: 2, multiSelect: true, stageName: 'Weather Preferences', question: 'How much rain do you like?',
    subtitle: 'Think about the overall pattern, including wet seasons.', category: 'rainfall',
    options: [
      { label: 'Mostly dry', desc: 'I prefer places with little rain through the year.', value: 'low', icon: 'fa-solid fa-sun' },
      { label: 'Seasonal rain', desc: 'Wet seasons are fine if there are drier parts of the year.', value: 'seasonal', icon: 'fa-solid fa-cloud-sun-rain' },
      { label: 'Frequent rain', desc: 'Regular showers and lush, rainy weather suit me.', value: 'frequent', icon: 'fa-solid fa-cloud-showers-heavy' },
      { label: 'No preference', desc: 'Rainfall should not affect my matches.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'snowfall', stage: 2, multiSelect: true, stageName: 'Weather Preferences', question: 'How do you feel about snow?',
    subtitle: 'This describes a typical national pattern; local elevation and region matter a lot.', category: 'snowfall',
    options: [
      { label: 'I would rather avoid it', desc: 'I prefer places where snow is rare.', value: 'rare', icon: 'fa-solid fa-sun' },
      { label: 'Some snow is nice', desc: 'A little seasonal snow is welcome.', value: 'seasonal', icon: 'fa-solid fa-cloud-snow' },
      { label: 'Bring on snowy winters', desc: 'I enjoy places with regular, snowy winters.', value: 'frequent', icon: 'fa-solid fa-snowflake' },
      { label: 'No preference', desc: 'Snow should not affect my matches.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: "religion",
    multiSelect: true,
    stage: 3,
    stageName: "Society, Religion & People",
    question: "How should religion fit into society and everyday life?",
    subtitle: "Tolerance for atheists, public prayer facilities, and religious presence vary widely.",
    category: "religion",
    options: [
      { label: "Secular Society & Freedom from Religion", desc: "Religion is strictly private/separated from laws; fully welcoming to atheists and diverse beliefs.", value: "secular", icon: "fa-solid fa-scale-balanced" },
      { label: "Cultural Heritage & Folk Traditions", desc: "Historic temples, pagodas, or cathedrals celebrated culturally, but low daily religious pressure.", value: "cultural-tradition", icon: "fa-solid fa-torii-gate" },
      { label: "Active Spiritual Community & Facilities", desc: "Faith is vibrant, with accessible prayer facilities, mosques/churches, and deep spiritual community.", value: "prominent", icon: "fa-solid fa-hands-praying" },
      { label: "Flexible / No Preference", desc: "Comfortable in secular, traditional, or actively religious societies.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "openness",
    stage: 3,
    stageName: "Society, Religion & People",
    question: "How international or locally immersive should your environment be?",
    subtitle: "English accessibility, multicultural diversity, and expat infrastructure vs. deep local immersion.",
    category: "openness",
    options: [
      { label: "Cosmopolitan & Expat-Accessible", desc: "Multicultural hubs where English is widely spoken and foreign residents integrate smoothly into daily services.", value: "cosmopolitan", icon: "fa-solid fa-globe" },
      { label: "Locally Immersive & Culturally Distinct", desc: "Traditional domestic culture with fewer expat bubbles; everyday life requires adapting to local language and customs.", value: "reserved", icon: "fa-solid fa-house-chimney" },
      { label: "Flexible / No Preference", desc: "Comfortable in either global expat crossroads or deep local immersion.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "socialFabric",
    multiSelect: true,
    stage: 3,
    stageName: "Society, Religion & People",
    question: "How should the social world around you work?",
    subtitle: "Warmth and privacy trade off: woven communities come with curiosity and gossip; privacy-first cultures come with slower friendships. Select any that fit.",
    category: "openness",
    options: [
      { label: "Open-Door Community", desc: "Neighbors are friends, invitations come fast, and street life is social; expect curiosity about your life and local gossip.", value: "woven", icon: "fa-solid fa-door-open" },
      { label: "Somewhere in Between", desc: "Courtesy first; friendships grow through repeated shared contexts like work, hobbies, or the neighborhood.", value: "balanced", icon: "fa-solid fa-scale-balanced" },
      { label: "Privacy-First Courtesy", desc: "Closed doors are respected and personal questions are rare; expect friendship to take deliberate effort.", value: "private", icon: "fa-solid fa-shield-halved" },
      { label: "Flexible / No Preference", desc: "Comfortable with either close-knit community life or privacy-first boundaries.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "density",
    stage: 3,
    stageName: "Society, Religion & People",
    question: "What population density and demographic energy suits you?",
    subtitle: "From dense bustling skylines to tranquil, spacious countryside.",
    category: "density",
    options: [
      { label: "Bustling, Dense & Youthful Dynamism", desc: "High energy, crowded street life, young population, and fast-paced city vibes.", value: "bustling", icon: "fa-solid fa-city" },
      { label: "Spacious, Uncrowded & Low Density", desc: "Wide open nature, peaceful residential neighborhoods, zero crowd anxiety.", value: "spacious", icon: "fa-solid fa-mountain-sun" },
      { label: "Flexible / No Preference", desc: "Comfortable in bustling capitals or quiet open valleys.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "career",
    multiSelect: true,
    stage: 4,
    stageName: "Work & Core Priority",
    question: "What is your primary career or work arrangement?",
    subtitle: "Visa rules, local industry strength, and expat job realism.",
    category: "career",
    options: [
      { label: "Remote Worker / Digital Nomad", desc: "Friendly nomad visas, abundant cafes/coworking, reliable fast Wi-Fi, low local tax.", value: "nomad", icon: "fa-solid fa-laptop-code" },
      { label: "High-Wage Corporate & Tech Hub", desc: "Major multinationals, high salaries, English-speaking white-collar job market.", value: "corporate", icon: "fa-solid fa-briefcase" },
      { label: "Local Immersion / Flexible", desc: "Willing to learn the local language for local businesses, teaching, or entrepreneurship.", value: "local", icon: "fa-solid fa-language" },
      { label: "Flexible / No Preference", desc: "Not seeking local employment or work-dependent relocation.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "priority",
    stage: 4,
    stageName: "Work & Core Priority",
    question: "What is your #1 non-negotiable priority? (Boosted 2.5×)",
    subtitle: "The single dealbreaker that turns a foreign country into home.",
    category: "priority",
    options: [
      { label: "World-Class Public Safety (Safe at 3 AM)", desc: "Zero fear walking alone at night, pristine civic order and high trust.", value: "safety", icon: "fa-solid fa-shield-halved" },
      { label: "Culinary Mastery & Fresh Street Markets", desc: "Passionate food culture, fresh markets, and incredible dining at all prices.", value: "foodie", icon: "fa-solid fa-utensils" },
      { label: "Strict Work-Life Balance & Generous Time Off", desc: "Hard stop at 5 PM, 30 days holiday, and zero hustle-culture guilt.", value: "wlb", icon: "fa-solid fa-spa" },
      { label: "Immediate Access to Mountains & Nature", desc: "Living near dramatic trails, surf breaks, or alpine wilderness.", value: "nature", icon: "fa-solid fa-tree" },
      { label: "A Community That Wraps Around Me", desc: "Neighbors as friends, spontaneous invitations, and instant belonging.", value: "warmth", icon: "fa-solid fa-people-roof" },
      { label: "Balanced Life / No Single Obsession", desc: "Value an overall healthy balance across all areas equally.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  }
];

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

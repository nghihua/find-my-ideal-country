import type { CountryData, LifestyleDimensions, RegionalTemplate } from './countries';
import { COUNTRY_DATABASE, REGIONAL_TEMPLATES } from './countries';
import { PRACTICAL_FACTORS } from './practicalFactors';

export interface CountryMetadata {
  name: string;
  region: string;
  icon: string;
  tagline: string;
  cost: string;
  wlb: string;
  safety: string;
  dimensions: LifestyleDimensions;
  realityCheck: string;
  tags: string[];
}

export const GLOBAL_COUNTRY_METADATA: Record<string, CountryMetadata> = {
  // EUROPE
  "Austria": {
    name: "Austria",
    region: "Central Europe",
    icon: "fa-solid fa-mountain",
    tagline: "Imperial classical elegance, immaculate alpine valleys, and pristine quality of life.",
    cost: "$2,200 – $3,200/mo",
    wlb: "9.2 / 10",
    safety: "9.6 / 10",
    dimensions: {
      costIndex: 3,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 2,
      weekendRhythm: 'quiet-sunday',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Strict Sunday store closures, conservative quiet hours (Ruhezeit), and high dining and service prices.",
    tags: ["nature", "safe", "transit", "europe", "four-seasons"]
  },
  "Belgium": {
    name: "Belgium",
    region: "Western Europe",
    icon: "fa-solid fa-beer-mug-empty",
    tagline: "Medieval town squares, world-class artisanal beer, chocolate mastery, and the heart of Europe.",
    cost: "$2,100 – $3,100/mo",
    wlb: "8.8 / 10",
    safety: "8.7 / 10",
    dimensions: {
      costIndex: 3,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 3,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "High personal income tax rates and frequent grey, rainy weather throughout the autumn and winter.",
    tags: ["foodie", "transit", "europe", "four-seasons"]
  },
  "Denmark": {
    name: "Denmark",
    region: "Northern Europe",
    icon: "fa-solid fa-bicycle",
    tagline: "Hygge warmth, world-leading cycling highways, Danish design, and supreme social trust.",
    cost: "$2,700 – $4,100/mo",
    wlb: "9.7 / 10",
    safety: "9.5 / 10",
    dimensions: {
      costIndex: 4,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 2,
      weekendRhythm: 'standard',
      natureScore: 4,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 3,
    },
    realityCheck: "Dark and windy winters, acute housing competition in Copenhagen, and expensive everyday dining out.",
    tags: ["wlb", "transit", "safe", "europe", "high-cost"]
  },
  "Sweden": {
    name: "Sweden",
    region: "Northern Europe",
    icon: "fa-solid fa-snowflake",
    tagline: "Lagom moderation, pristine archipelago nature, fika coffee breaks, and egalitarian innovation.",
    cost: "$2,300 – $3,500/mo",
    wlb: "9.5 / 10",
    safety: "8.9 / 10",
    dimensions: {
      costIndex: 4,
      climate: 'cold-winter',
      transit: 'walkable-rail',
      convenienceScore: 2,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 3,
    },
    realityCheck: "Sub-zero freezing temperatures and short daylight hours in winter, combined with long waiting queues for rental apartments.",
    tags: ["nature", "wlb", "safe", "europe", "four-seasons"]
  },
  "Finland": {
    name: "Finland",
    region: "Northern Europe",
    icon: "fa-solid fa-hot-tub-person",
    tagline: "World's happiest nation, sauna sanctuaries, pristine boreal forests, and peaceful quietude.",
    cost: "$2,200 – $3,400/mo",
    wlb: "9.6 / 10",
    safety: "9.7 / 10",
    dimensions: {
      costIndex: 4,
      climate: 'cold-winter',
      transit: 'walkable-rail',
      convenienceScore: 2,
      weekendRhythm: 'quiet-sunday',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 2,
    },
    realityCheck: "Long and freezing Nordic winters, introverted social communication where small talk is rare, and high alcohol taxes.",
    tags: ["nature", "safe", "wlb", "europe", "cold-winter"]
  },
  "Ireland": {
    name: "Ireland",
    region: "Western Europe",
    icon: "fa-solid fa-clover",
    tagline: "Legendary craic, poetic hospitality, dramatic green cliffs, and thriving tech economy.",
    cost: "$2,600 – $3,900/mo",
    wlb: "8.6 / 10",
    safety: "9.1 / 10",
    dimensions: {
      costIndex: 4,
      climate: 'mild-coastal',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 3,
    },
    realityCheck: "Severe housing crisis in Dublin and Cork with very expensive rent, along with persistent drizzle and overcast skies.",
    tags: ["social", "nature", "europe", "high-cost"]
  },
  "Czech Republic": {
    name: "Czech Republic",
    region: "Central Europe",
    icon: "fa-solid fa-castle",
    tagline: "Fairytale Gothic spires, unmatched pilsner tradition, walkable historic streets, and central location.",
    cost: "$1,500 – $2,300/mo",
    wlb: "8.3 / 10",
    safety: "9.2 / 10",
    dimensions: {
      costIndex: 2,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 4,
      lgbtqTier: 4,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Czech language is notoriously difficult for foreigners, and administrative paperwork is often slow.",
    tags: ["transit", "safe", "moderate-cost", "europe", "four-seasons"]
  },
  "Poland": {
    name: "Poland",
    region: "Central Europe",
    icon: "fa-solid fa-landmark",
    tagline: "Dynamic economic rebirth, rich resilient heritage, cozy milk bars, and affordable comfort.",
    cost: "$1,300 – $2,000/mo",
    wlb: "8.0 / 10",
    safety: "9.0 / 10",
    dimensions: {
      costIndex: 2,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 4,
      weekendRhythm: 'standard',
      natureScore: 4,
      lgbtqTier: 3,
      religionRole: 'moderate',
      foreignerOpenness: 4,
      paceScore: 4,
    },
    realityCheck: "Winter air quality can suffer from coal heating in smaller towns, and social policies remain more conservative than Western Europe.",
    tags: ["affordable", "safe", "transit", "europe", "four-seasons"]
  },
  "Croatia": {
    name: "Croatia",
    region: "Southern Europe",
    icon: "fa-solid fa-ship",
    tagline: "Crystal Adriatic waters, Venetian seaside palaces, relaxed café culture, and thousand islands.",
    cost: "$1,400 – $2,200/mo",
    wlb: "8.7 / 10",
    safety: "9.3 / 10",
    dimensions: {
      costIndex: 2,
      climate: 'mild-coastal',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 4,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 4,
      paceScore: 2,
    },
    realityCheck: "Coastal towns turn quiet and shutter services during off-season winter months, and domestic wages remain low.",
    tags: ["coastal", "warm", "nature", "europe", "relaxed"]
  },
  "Iceland": {
    name: "Iceland",
    region: "Northern Europe",
    icon: "fa-solid fa-volcano",
    tagline: "Geothermal springs, midnight sun, black sand beaches, and otherworldly volcanic drama.",
    cost: "$3,200 – $4,800/mo",
    wlb: "9.4 / 10",
    safety: "9.9 / 10",
    dimensions: {
      costIndex: 5,
      climate: 'cold-winter',
      transit: 'car-dependent',
      convenienceScore: 2,
      weekendRhythm: 'quiet-sunday',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 2,
    },
    realityCheck: "Extremely high costs for food, groceries, and dining out, unpredictable gale-force weather, and car dependency.",
    tags: ["nature", "safe", "cold-winter", "high-cost"]
  },

  // ASIA & PACIFIC
  "Singapore": {
    name: "Singapore",
    icon: "fa-solid fa-building-columns",
    region: "Southeast Asia",
    tagline: "Futuristic garden city, world-class street hawkers, spotless efficiency, and financial powerhouse.",
    cost: "$3,200 – $5,000/mo",
    wlb: "7.0 / 10",
    safety: "9.9 / 10",
    dimensions: {
      costIndex: 5,
      climate: 'tropical',
      transit: 'walkable-rail',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 3,
      lgbtqTier: 3,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 5,
    },
    realityCheck: "Exorbitant private housing rents and car ownership costs, intense tropical humidity year-round, and competitive work pace.",
    tags: ["urban", "safe", "transit", "foodie", "high-cost"]
  },
  "Malaysia": {
    name: "Malaysia",
    icon: "fa-solid fa-utensils",
    region: "Southeast Asia",
    tagline: "Legendary hawker food harmony, lush rainforests, modern high-rises, and warm multicultural ease.",
    cost: "$1,100 – $1,800/mo",
    wlb: "8.0 / 10",
    safety: "8.2 / 10",
    dimensions: {
      costIndex: 1,
      climate: 'tropical',
      transit: 'mixed-transit',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 4,
      lgbtqTier: 2,
      religionRole: 'prominent',
      foreignerOpenness: 5,
      paceScore: 3,
    },
    realityCheck: "Heavy car dependency outside central Kuala Lumpur rail lines, and conservative federal laws regarding LGBTQ+ issues.",
    tags: ["affordable", "foodie", "warm", "social"]
  },
  "Philippines": {
    name: "Philippines",
    icon: "fa-solid fa-umbrella-beach",
    region: "Southeast Asia",
    tagline: "7,000 tropical islands, English fluency, infectious karaoke joy, and boundless hospitality.",
    cost: "$900 – $1,500/mo",
    wlb: "8.2 / 10",
    safety: "7.2 / 10",
    dimensions: {
      costIndex: 1,
      climate: 'tropical',
      transit: 'mixed-transit',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 3,
      religionRole: 'moderate',
      foreignerOpenness: 5,
      paceScore: 3,
    },
    realityCheck: "Notorious traffic congestion in Metro Manila, typhoon season downpours, and variable domestic internet infrastructure.",
    tags: ["affordable", "warm", "coastal", "nature", "social"]
  },
  "India": {
    name: "India",
    icon: "fa-solid fa-om",
    region: "South Asia",
    tagline: "Sensory feast of spices, ancient spiritual philosophies, tech innovation, and unstoppable dynamism.",
    cost: "$700 – $1,300/mo",
    wlb: "7.0 / 10",
    safety: "7.0 / 10",
    dimensions: {
      costIndex: 1,
      climate: 'tropical',
      transit: 'mixed-transit',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 4,
      lgbtqTier: 3,
      religionRole: 'prominent',
      foreignerOpenness: 4,
      paceScore: 5,
    },
    realityCheck: "Intense urban sensory overload, noise, and seasonal air quality challenges in northern metropolitan centers.",
    tags: ["affordable", "foodie", "warm", "energetic"]
  },
  "United Arab Emirates": {
    name: "United Arab Emirates",
    icon: "fa-solid fa-gem",
    region: "Middle East",
    tagline: "Zero income tax, futuristic desert architecture, safe cosmopolitan luxury, and global crossroads.",
    cost: "$3,000 – $4,800/mo",
    wlb: "7.5 / 10",
    safety: "9.8 / 10",
    dimensions: {
      costIndex: 4,
      climate: 'tropical',
      transit: 'car-dependent',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 2,
      lgbtqTier: 1,
      religionRole: 'prominent',
      foreignerOpenness: 5,
      paceScore: 4,
    },
    realityCheck: "Extreme summer desert heat (often exceeding 45°C/113°F), strict legal conservative code, and high air conditioning costs.",
    tags: ["urban", "safe", "high-cost", "energetic"]
  },
  "Turkey": {
    name: "Turkey",
    region: "Eurasia",
    icon: "fa-solid fa-mosque",
    tagline: "Bosphorus straits connecting worlds, rich Ottoman tea culture, bazaar buzz, and turquoise coast.",
    cost: "$1,000 – $1,700/mo",
    wlb: "7.9 / 10",
    safety: "8.0 / 10",
    dimensions: {
      costIndex: 1,
      climate: 'mild-coastal',
      transit: 'walkable-rail',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 2,
      religionRole: 'moderate',
      foreignerOpenness: 4,
      paceScore: 4,
    },
    realityCheck: "High domestic currency inflation affecting daily pricing unpredictably, and intense traffic in Istanbul.",
    tags: ["affordable", "foodie", "coastal", "social"]
  },
  "Georgia": {
    name: "Georgia",
    icon: "fa-solid fa-wine-bottle",
    region: "Caucasus",
    tagline: "Birthplace of wine, ancient mountain watchtowers, legendary feasts (Supra), and 365-day visa ease.",
    cost: "$1,100 – $1,800/mo",
    wlb: "8.4 / 10",
    safety: "8.9 / 10",
    dimensions: {
      costIndex: 1,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 2,
      religionRole: 'moderate',
      foreignerOpenness: 5,
      paceScore: 3,
    },
    realityCheck: "Erratic driving styles on regional mountain highways, and conservative social attitudes outside liberal Tbilisi circles.",
    tags: ["affordable", "foodie", "nature", "wine"]
  },

  // AMERICAS
  "United States": {
    name: "United States",
    icon: "fa-solid fa-flag-usa",
    region: "North America",
    tagline: "Vast economic opportunity, cinematic landscapes, entrepreneurial drive, and cultural diversity.",
    cost: "$2,900 – $4,800/mo",
    wlb: "7.2 / 10",
    safety: "7.8 / 10",
    dimensions: {
      costIndex: 4,
      climate: 'four-seasons',
      transit: 'car-dependent',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 5,
    },
    realityCheck: "Heavy car dependency outside NYC/SF, high cost of private healthcare, and aggressive tipping culture.",
    tags: ["urban", "nature", "high-cost", "energetic"]
  },
  "Brazil": {
    name: "Brazil",
    icon: "fa-solid fa-drum",
    region: "South America",
    tagline: "Samba rhythm, Amazonian majesty, passionate football worship, and warm infectious joy.",
    cost: "$1,200 – $1,900/mo",
    wlb: "8.2 / 10",
    safety: "6.7 / 10",
    dimensions: {
      costIndex: 2,
      climate: 'tropical',
      transit: 'mixed-transit',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 4,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 4,
    },
    realityCheck: "Safety requires strict local awareness in major metropolitan areas, and Portuguese fluency is essential.",
    tags: ["warm", "social", "nature", "coastal", "energetic"]
  },
  "Argentina": {
    name: "Argentina",
    icon: "fa-solid fa-fire-burner",
    region: "South America",
    tagline: "Sultry tango, legendary asado barbecues, Parisian architecture in BA, and Patagonian glaciers.",
    cost: "$1,100 – $1,800/mo",
    wlb: "8.5 / 10",
    safety: "7.5 / 10",
    dimensions: {
      costIndex: 1,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 3,
    },
    realityCheck: "Economic volatility and currency shifts require managing cash and parallel exchange rates (dólar blue).",
    tags: ["foodie", "social", "nature", "walkable", "four-seasons"]
  },
  "Chile": {
    name: "Chile",
    icon: "fa-solid fa-mountain",
    region: "South America",
    tagline: "Andes mountain backdrop, Pacific coastlines, modern stability, and Patagonian wilderness.",
    cost: "$1,600 – $2,400/mo",
    wlb: "8.1 / 10",
    safety: "8.4 / 10",
    dimensions: {
      costIndex: 2,
      climate: 'mild-coastal',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Rapid Chilean Spanish dialect takes time to understand, and winter smog in Santiago valley can linger.",
    tags: ["nature", "safe", "coastal", "moderate-cost"]
  },
  "Panama": {
    name: "Panama",
    icon: "fa-solid fa-anchor",
    region: "Central America",
    tagline: "Canal crossroads, gleaming waterfront skyline, USD economy, and lush tropical islands.",
    cost: "$1,600 – $2,500/mo",
    wlb: "8.0 / 10",
    safety: "8.1 / 10",
    dimensions: {
      costIndex: 2,
      climate: 'tropical',
      transit: 'mixed-transit',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 3,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Heavy tropical humidity and afternoon storms, with sharp contrast between modern capital and rural areas.",
    tags: ["warm", "coastal", "nature", "moderate-cost"]
  },
  "Uruguay": {
    name: "Uruguay",
    icon: "fa-solid fa-mug-hot",
    region: "South America",
    tagline: "Calm Atlantic beaches, mate tea rituals, progressive civil liberties, and stable democracy.",
    cost: "$1,800 – $2,700/mo",
    wlb: "8.8 / 10",
    safety: "8.8 / 10",
    dimensions: {
      costIndex: 3,
      climate: 'mild-coastal',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 4,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 2,
    },
    realityCheck: "Prices for groceries, tech, and electronics are quite high due to import tariffs, and the winter coastal wind is damp.",
    tags: ["relaxed", "safe", "coastal", "social"]
  },

  // AFRICA
  "South Africa": {
    name: "South Africa",
    icon: "fa-solid fa-paw",
    region: "Southern Africa",
    tagline: "Table Mountain grandeur, world-renowned wine valleys, vibrant rainbow nation, and rich wildlife.",
    cost: "$1,300 – $2,100/mo",
    wlb: "8.3 / 10",
    safety: "6.2 / 10",
    dimensions: {
      costIndex: 2,
      climate: 'mild-coastal',
      transit: 'car-dependent',
      convenienceScore: 4,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'moderate',
      foreignerOpenness: 5,
      paceScore: 3,
    },
    realityCheck: "Load-shedding (scheduled rolling power outages) and security mindfulness in urban centers require adaptation.",
    tags: ["nature", "coastal", "wine", "foodie", "affordable"]
  },
  "Morocco": {
    name: "Morocco",
    icon: "fa-solid fa-door-open",
    region: "North Africa",
    tagline: "Intricate mosaic riads, Atlas mountain trails, aromatic spice souks, and mint tea warmth.",
    cost: "$950 – $1,600/mo",
    wlb: "8.2 / 10",
    safety: "8.1 / 10",
    dimensions: {
      costIndex: 1,
      climate: 'warm-sun',
      transit: 'walkable-rail',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 1,
      religionRole: 'prominent',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Persistent haggling culture in tourist souks, conservative legal norms, and modest summer heat in inland cities.",
    tags: ["affordable", "foodie", "warm", "nature"]
  },
  "Egypt": {
    name: "Egypt",
    icon: "fa-solid fa-pyramid",
    region: "North Africa",
    tagline: "Pyramids of antiquity, legendary Nile sunsets, vibrant Red Sea diving, and non-stop street energy.",
    cost: "$750 – $1,300/mo",
    wlb: "7.5 / 10",
    safety: "7.4 / 10",
    dimensions: {
      costIndex: 1,
      climate: 'warm-sun',
      transit: 'mixed-transit',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 4,
      lgbtqTier: 1,
      religionRole: 'prominent',
      foreignerOpenness: 4,
      paceScore: 4,
    },
    realityCheck: "Cairo traffic noise and air quality can be overwhelming, and legal and social rules are socially conservative.",
    tags: ["affordable", "warm", "history", "energetic"]
  },
  "Kenya": {
    name: "Kenya",
    icon: "fa-solid fa-binoculars",
    region: "East Africa",
    tagline: "Maasai Mara wildlife spectacles, Silicon Savannah tech innovation, and coastal Swahili charm.",
    cost: "$1,100 – $1,800/mo",
    wlb: "8.0 / 10",
    safety: "7.1 / 10",
    dimensions: {
      costIndex: 1,
      climate: 'warm-sun',
      transit: 'mixed-transit',
      convenienceScore: 4,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 1,
      religionRole: 'prominent',
      foreignerOpenness: 5,
      paceScore: 4,
    },
    realityCheck: "Heavy traffic jams in Nairobi and conservative laws regarding LGBTQ+ relationships.",
    tags: ["nature", "wildlife", "affordable", "warm"]
  },
  "Mauritius": {
    name: "Mauritius",
    icon: "fa-solid fa-umbrella-beach",
    region: "East Africa",
    tagline: "Turquoise lagoons, lush sugarcane hills, harmonious multicultural society, and tax-friendly ease.",
    cost: "$1,600 – $2,500/mo",
    wlb: "8.9 / 10",
    safety: "9.1 / 10",
    dimensions: {
      costIndex: 2,
      climate: 'tropical',
      transit: 'car-dependent',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 4,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 5,
      paceScore: 2,
    },
    realityCheck: "Island isolation makes importing goods expensive, and a car or scooter is necessary to explore outside resorts.",
    tags: ["coastal", "safe", "warm", "nature", "relaxed"]
  }
};

/**
 * Returns a complete CountryData object for any country on Earth.
 */
export function getCompleteCountryProfile(
  name: string,
  fallbackRegion: string = "Europe",
  centroid: [number, number] = [0, 0]
): CountryData {
  // 1. If curated in Tier 1 database, return directly
  if (COUNTRY_DATABASE[name]) {
    const country = COUNTRY_DATABASE[name];
    return {
      ...country,
      practical: {
        continent: continentFromRegion(country.region),
        timezoneRegion: timezoneFromRegion(country.region),
        ...PRACTICAL_FACTORS[name],
      },
    };
  }

  // 2. If structured metadata exists in GLOBAL_COUNTRY_METADATA, construct rich profile
  if (GLOBAL_COUNTRY_METADATA[name]) {
    const meta = GLOBAL_COUNTRY_METADATA[name];
    return {
      id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name: meta.name,
      icon: meta.icon,
      region: meta.region,
      tagline: meta.tagline,
      cost: meta.cost,
      wlb: meta.wlb,
      safety: meta.safety,
      culture: `Living in ${meta.name} offers immersion into ${meta.region}'s rich social traditions. ${meta.tagline}`,
      people: `Residents of ${meta.name} value community, local hospitality, and pride in their cultural heritage.`,
      costOfLiving: `In ${meta.name}, everyday living averages ${meta.cost}, with local dining, transport, and amenities offering good lifestyle balance.`,
      workday: `A typical workday in ${meta.name} reflects regional commercial rhythms, balanced by family and social priorities.`,
      evening: `Evenings in ${meta.name} bring people together at local gathering spots, markets, and neighborhood eateries.`,
      upsides: [
        `Authentic cultural immersion in ${meta.region}.`,
        `Balanced quality of life with accessible daily amenities.`,
        `Direct access to regional nature and distinctive landscapes.`
      ],
      downsides: [
        meta.realityCheck,
        `Language immersion is beneficial for deeper integration.`
      ],
      videos: [
        {
          title: `What Living in ${meta.name} is Actually Like`,
          channel: "YouTube",
          duration: "Search",
          url: `https://www.youtube.com/results?search_query=what+living+in+${encodeURIComponent(meta.name)}+is+actually+like`
        }
      ],
      tags: meta.tags,
      dimensions: meta.dimensions,
      practical: { continent: continentFromRegion(meta.region), timezoneRegion: timezoneFromRegion(meta.region), ...PRACTICAL_FACTORS[name] },
      realityCheck: meta.realityCheck
    };
  }

  // 3. Fallback: Algorithmic derivation based on region and latitude
  const tpl = REGIONAL_TEMPLATES[fallbackRegion] || REGIONAL_TEMPLATES["Europe"];
  const [lon, lat] = centroid;
  
  // Estimate climate from latitude
  let estClimate = tpl.dimensions.climate;
  if (Math.abs(lat) <= 23.5) estClimate = 'tropical';
  else if (Math.abs(lat) > 50) estClimate = 'cold-winter';
  else if (Math.abs(lat) > 23.5 && Math.abs(lat) <= 38) estClimate = 'warm-sun';

  return {
    id: name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    name,
    icon: "fa-solid fa-location-dot",
    region: fallbackRegion,
    tagline: `Everyday rhythms, local traditions, and real-world living insights in ${name}.`,
    cost: tpl.cost,
    wlb: tpl.wlb,
    safety: tpl.safety,
    culture: `Living in ${name} offers an authentic immersion into ${fallbackRegion}'s cultural fabric. ${tpl.culture}`,
    people: `Residents of ${name} take strong pride in their heritage and local hospitality. ${tpl.people}`,
    costOfLiving: `In ${name}, day-to-day affordability averages ${tpl.cost}. ${tpl.costOfLiving}`,
    workday: `A typical weekday in ${name} blends local business customs with modern routines. ${tpl.workday}`,
    evening: `When the workday winds down in ${name}, locals head out to neighborhood gathering spots. ${tpl.evening}`,
    upsides: tpl.upsides,
    downsides: tpl.downsides,
    videos: [
      {
        title: `What Living in ${name} is Actually Like (Local & Expat Stories)`,
        channel: "YouTube",
        duration: "Search",
        url: `https://www.youtube.com/results?search_query=what+living+in+${encodeURIComponent(name)}+is+actually+like`,
      }
    ],
    tags: [fallbackRegion.toLowerCase(), estClimate],
    dimensions: {
      ...tpl.dimensions,
      climate: estClimate
    },
    practical: { continent: continentFromRegion(fallbackRegion), timezoneRegion: timezoneFromRegion(fallbackRegion) },
    realityCheck: tpl.realityCheck
  };
}

function continentFromRegion(region: string): NonNullable<CountryData['practical']>['continent'] | undefined {
  if (/europe/i.test(region)) return 'Europe';
  if (/asia|middle east|caucasus|eurasia/i.test(region)) return 'Asia';
  if (/africa/i.test(region)) return 'Africa';
  if (/north america|central america|caribbean/i.test(region)) return 'North America';
  if (/south america/i.test(region)) return 'South America';
  if (/oceania/i.test(region)) return 'Oceania';
  return undefined;
}

function timezoneFromRegion(region: string): 'Americas' | 'Europe/Africa' | 'Asia/Oceania' | undefined {
  const continent = continentFromRegion(region);
  if (continent === 'North America' || continent === 'South America') return 'Americas';
  if (continent === 'Europe' || continent === 'Africa') return 'Europe/Africa';
  if (continent === 'Asia' || continent === 'Oceania') return 'Asia/Oceania';
  return undefined;
}

/**
 * Returns all registered countries (Tier 1 + Tier 2).
 */
export function getAllGlobalCountries(): CountryData[] {
  const map = new Map<string, CountryData>();
  
  // Insert Tier 1
  for (const name of Object.keys(COUNTRY_DATABASE)) {
    map.set(name, getCompleteCountryProfile(name));
  }

  // Insert Tier 2
  for (const [name, meta] of Object.entries(GLOBAL_COUNTRY_METADATA)) {
    if (!map.has(name)) {
      map.set(name, getCompleteCountryProfile(name, meta.region));
    }
  }

  return Array.from(map.values());
}

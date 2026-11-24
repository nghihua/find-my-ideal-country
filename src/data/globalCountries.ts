import type { CountryData, LifestyleDimensions, RegionalTemplate } from './countries';
import { COUNTRY_DATABASE, REGIONAL_TEMPLATES } from './countries';
import { COUNTRY_CLIMATE_PROFILES, estimateClimateProfile } from './climateProfiles';
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
  },
  "China": {
    name: "China", region: "East Asia", icon: "fa-solid fa-yen-sign",
    tagline: "Vast, fast-changing cities, deep regional cultures, and extraordinary landscapes.",
    cost: "$900 – $2,000/mo", wlb: "6.0 / 10", safety: "8.0 / 10",
    dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'walkable-rail', convenienceScore: 5, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 5 },
    realityCheck: "Daily life varies greatly by city; Mandarin ability, internet restrictions, and local regulations can strongly shape the experience.",
    tags: ["urban", "food", "transit", "culture", "nature"]
  },
  "Afghanistan": {
    name: "Afghanistan", region: "South Asia", icon: "fa-solid fa-mountain-sun",
    tagline: "A land of dramatic mountain landscapes and longstanding cultural traditions.",
    cost: "$500 – $1,200/mo", wlb: "3.0 / 10", safety: "1.0 / 10",
    dimensions: { costIndex: 1, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 },
    realityCheck: "Security conditions, restrictions on daily life, and access to services can change quickly; consult current official travel guidance before considering a visit or move.",
    tags: ["mountains", "culture", "history", "nature"]
  },
  "Pakistan": {
    name: "Pakistan", region: "South Asia", icon: "fa-solid fa-globe-asia",
    tagline: "Pakistan blends energetic megacities, deep regional traditions, and dramatic mountain landscapes.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10",
    dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 },
    realityCheck: "Air quality and security vary sharply by region; check current local and official guidance.", tags: ["culture", "food", "nature", "urban"]
  },
  "Bangladesh": {
    name: "Bangladesh", region: "South Asia", icon: "fa-solid fa-globe-asia",
    tagline: "Dense, vibrant cities and riverine landscapes shaped by Bengali culture.", cost: "$600 – $1,300/mo", wlb: "6.0 / 10", safety: "5.0 / 10",
    dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 },
    realityCheck: "Seasonal flooding, heat, and air quality vary by location; check local conditions.", tags: ["culture", "food", "nature", "urban"]
  },
  "Nigeria": {
    name: "Nigeria", region: "West Africa", icon: "fa-solid fa-globe-asia",
    tagline: "A diverse, youthful country with influential arts, music, food, and business hubs.", cost: "$800 – $1,800/mo", wlb: "6.0 / 10", safety: "5.0 / 10",
    dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 },
    realityCheck: "Conditions differ substantially by state and city; review current local security and infrastructure information.", tags: ["culture", "food", "nature", "urban"]
  },
  "Russia": {
    name: "Russia", region: "Eastern Europe", icon: "fa-solid fa-globe-asia",
    tagline: "Vast landscapes, major cultural cities, and strongly regional climates and lifestyles.", cost: "$900 – $2,000/mo", wlb: "6.0 / 10", safety: "5.0 / 10",
    dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 },
    realityCheck: "Climate, services, and travel conditions vary greatly across the country; consult current official guidance.", tags: ["culture", "food", "nature", "urban"]
  },
  "Saudi Arabia": {
    name: "Saudi Arabia", region: "West Asia", icon: "fa-solid fa-globe-asia",
    tagline: "Rapidly changing cities, desert landscapes, and deeply rooted local traditions.", cost: "$1,000 – $2,200/mo", wlb: "6.0 / 10", safety: "5.0 / 10",
    dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 },
    realityCheck: "Extreme heat and local laws affect daily life; check current entry and residency requirements.", tags: ["culture", "food", "nature", "urban"]
  },
  "Nepal": { name: "Nepal", region: "South Asia", icon: "fa-solid fa-globe-asia", tagline: "Mountain communities, lively cities, and access to the Himalayas.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Air pollution and seasonal hazards differ by valley and elevation.", tags: ["culture", "nature", "food", "city"] },
  "Iran": { name: "Iran", region: "West Asia", icon: "fa-solid fa-globe-asia", tagline: "Historic cities, varied landscapes, and strong regional traditions.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Entry, payment access, and local rules can be complex; check current official guidance.", tags: ["culture", "nature", "food", "city"] },
  "Ukraine": { name: "Ukraine", region: "Eastern Europe", icon: "fa-solid fa-globe-asia", tagline: "Historic cities, strong community life, and diverse landscapes.", cost: "$700 – $1,600/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Security conditions are affected by the ongoing war; consult current official travel guidance.", tags: ["culture", "nature", "food", "city"] },
  "Ghana": { name: "Ghana", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "Welcoming cultural traditions, a vibrant arts scene, and coastal life.", cost: "$800 – $1,700/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Heat, rainy seasons, and infrastructure vary by region.", tags: ["culture", "nature", "food", "city"] },
  "Ethiopia": { name: "Ethiopia", region: "East Africa", icon: "fa-solid fa-globe-asia", tagline: "Highland landscapes, ancient history, and distinctive food traditions.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Conditions vary by region; check current security and health guidance before travel.", tags: ["culture", "nature", "food", "city"] },
  "Qatar": { name: "Qatar", region: "West Asia", icon: "fa-solid fa-globe-asia", tagline: "A compact Gulf country with a fast-growing capital, desert coast, and international communities.", cost: "$1,400 – $2,600/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 4, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Extreme summer heat and local rules shape daily life.", tags: ["culture", "food", "nature", "urban"] },
  "Kuwait": { name: "Kuwait", region: "West Asia", icon: "fa-solid fa-globe-asia", tagline: "A Gulf society balancing contemporary city life with longstanding traditions.", cost: "$1,200 – $2,300/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Summer heat is intense; check current residency and employment requirements.", tags: ["culture", "food", "nature", "urban"] },
  "Iraq": { name: "Iraq", region: "West Asia", icon: "fa-solid fa-globe-asia", tagline: "Ancient cities and diverse regional cultures across a historically significant landscape.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Security and services vary substantially by region; check current official guidance.", tags: ["culture", "food", "nature", "urban"] },
  "Uzbekistan": { name: "Uzbekistan", region: "Central Asia", icon: "fa-solid fa-globe-asia", tagline: "Historic Silk Road cities, mountain escapes, and a rapidly changing urban scene.", cost: "$600 – $1,300/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Hot summers and cold winters; local language skills improve daily access.", tags: ["culture", "food", "nature", "urban"] },
  "Tanzania": { name: "Tanzania", region: "East Africa", icon: "fa-solid fa-globe-asia", tagline: "Coastal life, lively cities, and access to iconic wildlife and mountain landscapes.", cost: "$800 – $1,700/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Healthcare and transport access vary beyond major urban centers.", tags: ["culture", "food", "nature", "urban"] },
  "Chad": { name: "Chad", region: "Central Africa", icon: "fa-solid fa-globe-asia", tagline: "A landlocked Sahelian country of desert expanses and diverse local cultures.", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 1, paceScore: 3 }, realityCheck: "Heat, infrastructure, and security conditions vary; consult current official guidance.", tags: ["culture", "nature", "regional", "adventure"] },
  "Democratic Republic of the Congo": { name: "Democratic Republic of the Congo", region: "Central Africa", icon: "fa-solid fa-globe-asia", tagline: "A vast, culturally diverse country with extraordinary rainforest and river systems.", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, realityCheck: "Security, health services, and transport vary sharply by province; check official guidance.", tags: ["culture", "nature", "regional", "adventure"] },
  "Uganda": { name: "Uganda", region: "East Africa", icon: "fa-solid fa-globe-asia", tagline: "Green highlands, lake communities, and lively urban centers.", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Rainy seasons and access to healthcare vary by region.", tags: ["culture", "nature", "regional", "adventure"] },
  "Tajikistan": { name: "Tajikistan", region: "Central Asia", icon: "fa-solid fa-globe-asia", tagline: "Mountain landscapes, close-knit communities, and a strong regional identity.", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "High-altitude weather and remote transport can affect access and travel.", tags: ["culture", "nature", "regional", "adventure"] },
  "Kyrgyzstan": { name: "Kyrgyzstan", region: "Central Asia", icon: "fa-solid fa-globe-asia", tagline: "A mountain-centered lifestyle with strong nomadic and community traditions.", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Mountain weather, infrastructure, and services vary outside major cities.", tags: ["culture", "nature", "regional", "adventure"] },
  "The Gambia": { name: "The Gambia", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "A small coastal country with lively markets, music, and river landscapes.", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Heat, rainy seasons, and healthcare access differ by location.", tags: ["culture", "nature", "food", "regional"] },
  "Armenia": { name: "Armenia", region: "Caucasus", icon: "fa-solid fa-globe-asia", tagline: "Mountain scenery, historic towns, and a close-knit cultural life.", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Winters can be cold, and services are concentrated in major cities.", tags: ["culture", "nature", "food", "regional"] },
  "Libya": { name: "Libya", region: "North Africa", icon: "fa-solid fa-globe-asia", tagline: "Mediterranean coastline, desert landscapes, and ancient sites.", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, realityCheck: "Security and public services vary; consult current official travel guidance.", tags: ["culture", "nature", "food", "regional"] },
  "Myanmar": { name: "Myanmar", region: "Southeast Asia", icon: "fa-solid fa-globe-asia", tagline: "Distinctive Buddhist heritage, river plains, and varied regional cultures.", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Security conditions and access to services are volatile; check current official guidance.", tags: ["culture", "nature", "food", "regional"] },
  "Kazakhstan": { name: "Kazakhstan", region: "Central Asia", icon: "fa-solid fa-globe-asia", tagline: "Modern cities, wide open steppe, and dramatic mountain regions.", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Large distances and sharply seasonal temperatures affect travel and daily life.", tags: ["culture", "nature", "food", "regional"] },
  "Azerbaijan": { name: "Azerbaijan", region: "Caucasus", icon: "fa-solid fa-globe-asia", tagline: "Caspian coastline, historic towns, and a fast-changing capital.", cost: "$800 – $1,700/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Climate and daily life differ between Baku and rural regions.", tags: ["culture", "nature", "food", "regional"] },
  "Bosnia and Herzegovina": { name: "Bosnia and Herzegovina", region: "Southeast Europe", icon: "fa-solid fa-globe-asia", tagline: "Mountain valleys, historic towns, and a strong café and community culture.", cost: "$900 – $1,700/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Winter air quality can worsen in some urban valleys.", tags: ["culture", "nature", "food", "regional"] },
  "Cambodia": { name: "Cambodia", region: "Southeast Asia", icon: "fa-solid fa-globe-asia", tagline: "Temple heritage, Mekong life, and a warm, social urban rhythm.", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Heat, rainy seasons, and healthcare access vary by place.", tags: ["culture", "nature", "food", "regional"] },
  "Laos": { name: "Laos", region: "Southeast Asia", icon: "fa-solid fa-globe-asia", tagline: "A slower-paced land of river towns, mountains, and Buddhist heritage.", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Rural transport and healthcare access are limited compared with the capital.", tags: ["culture", "nature", "food", "regional"] },
  "Senegal": { name: "Senegal", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "Atlantic coast, lively music, and a strong tradition of hospitality.", cost: "$800 – $1,700/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "French is important for services; heat and rainy-season conditions vary.", tags: ["culture", "nature", "food", "regional"] },
  "Angola": { name: "Angola", region: "Southern Africa", icon: "fa-solid fa-globe-asia", tagline: "Atlantic coastline, energetic cities, and a diverse mix of landscapes.", cost: "$800 – $1,700/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Portuguese is essential for most everyday services; infrastructure varies by region.", tags: ["culture", "nature", "regional", "adventure"] },
  "Mozambique": { name: "Mozambique", region: "Southeast Africa", icon: "fa-solid fa-globe-asia", tagline: "Indian Ocean coastline, island communities, and rich musical traditions.", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Portuguese is the official language; transport and healthcare access vary.", tags: ["culture", "nature", "regional", "adventure"] },
  "Zimbabwe": { name: "Zimbabwe", region: "Southern Africa", icon: "fa-solid fa-globe-asia", tagline: "Highland scenery, welcoming communities, and access to major natural landmarks.", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Economic conditions and public services can be uneven.", tags: ["culture", "nature", "regional", "adventure"] },
  "Malawi": { name: "Malawi", region: "Southeast Africa", icon: "fa-solid fa-globe-asia", tagline: "Lake Malawi, green highlands, and a relaxed community-centered pace.", cost: "$700 – $1,400/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Healthcare and transport options are more limited outside urban centers.", tags: ["culture", "nature", "regional", "adventure"] },
  "Madagascar": { name: "Madagascar", region: "East Africa", icon: "fa-solid fa-globe-asia", tagline: "Unusual wildlife, distinctive landscapes, and a strong island identity.", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Infrastructure and healthcare access are limited in many areas; cyclone season affects travel.", tags: ["culture", "nature", "regional", "adventure"] },
  "Cameroon": { name: "Cameroon", region: "Central Africa", icon: "fa-solid fa-globe-asia", tagline: "Bilingual cities, diverse landscapes, and a rich mix of regional cultures.", cost: "$800 – $1,700/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "French and English are official languages, but local access varies by region.", tags: ["culture", "nature", "regional", "food"] },
  "Guinea": { name: "Guinea", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "Atlantic coast, highland scenery, and strong music and community traditions.", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "French is important for services; infrastructure varies considerably.", tags: ["culture", "nature", "regional", "food"] },
  "North Macedonia": { name: "North Macedonia", region: "Southeast Europe", icon: "fa-solid fa-globe-asia", tagline: "Lake and mountain escapes alongside a lively, affordable capital.", cost: "$900 – $1,700/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Local language skills help with administration and work outside central areas.", tags: ["culture", "nature", "regional", "food"] },
  "Syria": { name: "Syria", region: "West Asia", icon: "fa-solid fa-globe-asia", tagline: "Historic cities and deep cultural heritage across varied landscapes.", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, realityCheck: "Security, infrastructure, and access to services remain highly uncertain; consult official guidance.", tags: ["culture", "nature", "regional", "food"] },
  "Togo": { name: "Togo", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "Coastal city life, markets, and varied landscapes from south to north.", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "French is the main language for public services; heat and rainy seasons vary.", tags: ["culture", "nature", "regional", "food"] },
  "Peru": { name: "Peru", region: "South America", icon: "fa-solid fa-globe-asia", tagline: "Pacific coast, Andean highlands, and a rich regional food culture.", cost: "$900 – $1,800/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Altitude, climate, and infrastructure vary substantially by region.", tags: ["culture", "nature", "food", "regional"] },
  "Honduras": { name: "Honduras", region: "Central America", icon: "fa-solid fa-globe-asia", tagline: "Caribbean and Pacific coastlines with mountain towns and a lively local culture.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Safety and public services vary by city and region; check current local guidance.", tags: ["culture", "nature", "food", "regional"] },
  "Nicaragua": { name: "Nicaragua", region: "Central America", icon: "fa-solid fa-globe-asia", tagline: "Lakes, volcanoes, and a relaxed rhythm across historic cities and coastal towns.", cost: "$700 – $1,400/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Heat, seasonal storms, and local conditions vary by region.", tags: ["culture", "nature", "food", "regional"] },
  "Guatemala": { name: "Guatemala", region: "Central America", icon: "fa-solid fa-globe-asia", tagline: "Highland communities, Mayan heritage, and colorful historic cities.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Altitude, rainy seasons, and safety conditions vary by destination.", tags: ["culture", "nature", "food", "regional"] },
  "El Salvador": { name: "El Salvador", region: "Central America", icon: "fa-solid fa-globe-asia", tagline: "Pacific beaches, volcanic scenery, and a compact, energetic urban life.", cost: "$800 – $1,600/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Check current local safety guidance and seasonal weather before choosing a location.", tags: ["culture", "nature", "food", "regional"] },
  "Dominican Republic": { name: "Dominican Republic", region: "Caribbean", icon: "fa-solid fa-globe-asia", tagline: "Warm coastal living, lively music, and a strong social culture.", cost: "$1,000 – $2,000/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Heat, hurricane season, and service access vary by region.", tags: ["culture", "nature", "food", "coastal"] },
  "Haiti": { name: "Haiti", region: "Caribbean", icon: "fa-solid fa-globe-asia", tagline: "A proud artistic and cultural heritage shaped by a resilient community life.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Security, infrastructure, and healthcare access are highly variable; review current official guidance.", tags: ["culture", "nature", "food", "coastal"] },
  "Cuba": { name: "Cuba", region: "Caribbean", icon: "fa-solid fa-globe-asia", tagline: "Historic streets, music, and a distinctive community-centered daily rhythm.", cost: "$800 – $1,700/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Supply availability and access to payments and services can be constrained.", tags: ["culture", "nature", "food", "coastal"] },
  "Ecuador": { name: "Ecuador", region: "South America", icon: "fa-solid fa-globe-asia", tagline: "Andes, Pacific coast, and Amazon landscapes within a compact country.", cost: "$900 – $1,800/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Altitude, climate, and safety conditions change significantly across regions.", tags: ["culture", "nature", "food", "coastal"] },
  "Bolivia": { name: "Bolivia", region: "South America", icon: "fa-solid fa-globe-asia", tagline: "High-altitude cities, dramatic salt flats, and strong Indigenous traditions.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Altitude and transport access can affect daily routines and health.", tags: ["culture", "nature", "food", "coastal"] },
  "Paraguay": { name: "Paraguay", region: "South America", icon: "fa-solid fa-globe-asia", tagline: "A relaxed inland pace with riverside cities and a strong local culture.", cost: "$700 – $1,400/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Spanish and Guarani are important for everyday integration.", tags: ["culture", "nature", "food", "coastal"] },
  "Venezuela": { name: "Venezuela", region: "South America", icon: "fa-solid fa-globe-asia", tagline: "Caribbean coastline, mountain landscapes, and rich cultural traditions.", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Economic conditions, security, and services vary; check current official advice.", tags: ["culture", "nature", "food", "coastal"] },
  "Guyana": { name: "Guyana", region: "South America", icon: "fa-solid fa-globe-asia", tagline: "Atlantic coast, rainforest, and a multicultural English-speaking society.", cost: "$1,000 – $2,000/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Infrastructure and healthcare access are limited outside major centers.", tags: ["culture", "nature", "food", "coastal"] },
  "Suriname": { name: "Suriname", region: "South America", icon: "fa-solid fa-globe-asia", tagline: "A small, multicultural society with rainforest and river landscapes.", cost: "$1,000 – $2,000/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Dutch is the official language; services are concentrated in Paramaribo.", tags: ["culture", "nature", "food", "coastal"] },
  "Trinidad and Tobago": { name: "Trinidad and Tobago", region: "Caribbean", icon: "fa-solid fa-globe-asia", tagline: "Caribbean island life, lively festivals, and a diverse food culture.", cost: "$1,200 – $2,300/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Costs and safety vary by island and neighborhood; check local guidance.", tags: ["culture", "nature", "food", "coastal"] },
  "Burkina Faso": { name: "Burkina Faso", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "Sahel landscapes, strong artistic traditions, and close-knit communities.", cost: "$600 – $1,300/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "French is important for services; heat and security conditions vary.", tags: ["culture", "regional", "history", "nature"] },
  "Benin": { name: "Benin", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "Coastal cities, historic kingdoms, and a vibrant cultural life.", cost: "$700 – $1,400/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "French is the main public-service language; infrastructure varies.", tags: ["culture", "regional", "history", "nature"] },
  "Rwanda": { name: "Rwanda", region: "East Africa", icon: "fa-solid fa-globe-asia", tagline: "Green hills, clean urban spaces, and a fast-developing capital.", cost: "$900 – $1,800/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Services are concentrated in Kigali; local language skills help outside the city.", tags: ["culture", "regional", "history", "nature"] },
  "Somalia": { name: "Somalia", region: "East Africa", icon: "fa-solid fa-globe-asia", tagline: "Indian Ocean coastline and deep Somali cultural traditions.", cost: "$700 – $1,500/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, realityCheck: "Security and service access are highly variable; consult official travel guidance.", tags: ["culture", "regional", "history", "nature"] },
  "Sudan": { name: "Sudan", region: "Northeast Africa", icon: "fa-solid fa-globe-asia", tagline: "Nile communities and historic cultural traditions across a vast landscape.", cost: "$600 – $1,300/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, realityCheck: "Conflict and humanitarian conditions create major risks; consult current official guidance.", tags: ["culture", "regional", "history", "nature"] },
  "South Sudan": { name: "South Sudan", region: "East Africa", icon: "fa-solid fa-globe-asia", tagline: "River and savanna landscapes with many distinct local communities.", cost: "$700 – $1,500/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, realityCheck: "Security, health services, and infrastructure are severely constrained in many areas.", tags: ["culture", "regional", "history", "nature"] },
  "Côte d'Ivoire": { name: "Côte d'Ivoire", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "Abidjan’s energetic urban scene, Atlantic beaches, and rich food culture.", cost: "$900 – $1,800/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "French is essential for most services; conditions vary outside major centers.", tags: ["culture", "regional", "history", "nature"] },
  "Algeria": { name: "Algeria", region: "North Africa", icon: "fa-solid fa-globe-asia", tagline: "Mediterranean cities and vast Saharan landscapes with deep history.", cost: "$800 – $1,700/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "French and Arabic are widely useful; travel distances and heat can be substantial.", tags: ["culture", "regional", "history", "nature"] },
  "Tunisia": { name: "Tunisia", region: "North Africa", icon: "fa-solid fa-globe-asia", tagline: "Mediterranean coast, historic towns, and a lively café culture.", cost: "$900 – $1,800/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Arabic and French are useful in daily life; heat and water stress vary seasonally.", tags: ["culture", "regional", "history", "nature"] },
  "Yemen": { name: "Yemen", region: "West Asia", icon: "fa-solid fa-globe-asia", tagline: "Mountain architecture, historic ports, and distinctive regional traditions.", cost: "$600 – $1,300/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, realityCheck: "Conflict and humanitarian conditions make travel and services highly uncertain; check official guidance.", tags: ["culture", "regional", "history", "nature"] },

  // EUROPE — REMAINING
  "Albania": { name: "Albania", region: "Southern Europe", icon: "fa-solid fa-mountain", tagline: "Riviera beaches, Ottoman-era stone towns, and famously warm Balkan hospitality.", cost: "$700 – $1,400/mo", wlb: "6.0 / 10", safety: "5.5 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Cash-based daily life outside cities, power and road quality vary, and winter rains slow travel.", tags: ["coastal", "mountains", "affordable", "food"] },
  "Andorra": { name: "Andorra", region: "Southern Europe", icon: "fa-solid fa-skiing", tagline: "A duty-free Pyrenean microstate built around ski slopes, hiking trails, and quiet mountain order.", cost: "$1,600 – $2,400/mo", wlb: "7.5 / 10", safety: "9.0 / 10", dimensions: { costIndex: 3, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Residency permits require deposits or income proof, and everything funnels through two valley towns.", tags: ["mountains", "safe", "adventure", "high-cost"] },
  "Belarus": { name: "Belarus", region: "Eastern Europe", icon: "fa-solid fa-city", tagline: "Soviet-scale boulevards, primeval forests, and a highly ordered, low-friction public sphere.", cost: "$700 – $1,300/mo", wlb: "5.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 1, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Political repression and sanctions isolate daily life; entry rules change often and require current official guidance.", tags: ["urban", "cold", "affordable", "nature"] },
  "Bulgaria": { name: "Bulgaria", region: "Southeast Europe", icon: "fa-solid fa-mountain", tagline: "Black Sea beaches, rose and wine valleys, and some of Europe's lowest big-city costs.", cost: "$900 – $1,600/mo", wlb: "6.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 3, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Slow administration, grey lowland winters, and an aging population outside Sofia and Plovdiv.", tags: ["affordable", "mountains", "food", "nature"] },
  "Cyprus": { name: "Cyprus", region: "Southern Europe", icon: "fa-solid fa-sun", tagline: "Sun-heavy island life mixing Greek and Turkish Cypriot cultures with low-tax business appeal.", cost: "$1,300 – $2,200/mo", wlb: "7.0 / 10", safety: "7.5 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 3, religionRole: 'moderate', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "A divided island: services, property, and travel differ between the south and the north; summers are intense.", tags: ["coastal", "warm", "safe", "english-friendly"] },
  "Estonia": { name: "Estonia", region: "Northern Europe", icon: "fa-solid fa-wifi", tagline: "Digital-first government, medieval Tallinn, and deep pine forests on the Baltic edge.", cost: "$1,300 – $2,100/mo", wlb: "8.0 / 10", safety: "8.5 / 10", dimensions: { costIndex: 3, climate: 'cold-winter', transit: 'walkable-rail', convenienceScore: 4, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 4, religionRole: 'secular', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Long dark winters, a small market centered on Tallinn, and Estonian or Russian needed for some administration.", tags: ["safe", "digital", "nature", "cold"] },
  "Hungary": { name: "Hungary", region: "Central Europe", icon: "fa-solid fa-landmark", tagline: "Grand Budapest café life, thermal baths, and river-valley wine regions at EU-low prices.", cost: "$1,100 – $1,900/mo", wlb: "6.5 / 10", safety: "7.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'walkable-rail', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 4 }, realityCheck: "Government policy has chilled some civil liberties and press freedom; Hungarian is essential for paperwork.", tags: ["culture", "food", "transit", "affordable"] },
  "Kosovo": { name: "Kosovo", region: "Southeast Europe", icon: "fa-solid fa-flag", tagline: "Europe's newest country: young Pristina café energy, Ottoman mountain towns, and rugged canyons.", cost: "$700 – $1,300/mo", wlb: "5.0 / 10", safety: "5.5 / 10", dimensions: { costIndex: 1, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Partial recognition complicates some passports, visas, and flights; power reliability and administration vary.", tags: ["culture", "food", "mountains", "affordable"] },
  "Latvia": { name: "Latvia", region: "Northern Europe", icon: "fa-solid fa-tree", tagline: "Amber Baltic beaches, Art Nouveau Riga, and pine-scented quiet at a gentle pace.", cost: "$1,100 – $1,800/mo", wlb: "7.5 / 10", safety: "7.5 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Winters are long and dark, and the job market is concentrated in Riga; Latvian or Russian helps with services.", tags: ["coastal", "safe", "affordable", "nature"] },
  "Liechtenstein": { name: "Liechtenstein", region: "Central Europe", icon: "fa-solid fa-crown", tagline: "A wealthy Alpine principality of castles, banks, and hiking trails between Switzerland and Austria.", cost: "$2,400 – $3,600/mo", wlb: "8.0 / 10", safety: "9.3 / 10", dimensions: { costIndex: 4, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Housing and residence permits are scarce, and many practical needs spill over into Austria or Switzerland.", tags: ["mountains", "safe", "high-cost", "quiet"] },
  "Lithuania": { name: "Lithuania", region: "Northern Europe", icon: "fa-solid fa-landmark-dome", tagline: "Baroque Vilnius, a fast-growing fintech scene, and lakeland forests that swallow whole weekends.", cost: "$1,200 – $1,900/mo", wlb: "7.5 / 10", safety: "7.5 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Cold, dark winters and a shrinking countryside; services and jobs cluster in Vilnius and Kaunas.", tags: ["culture", "safe", "affordable", "nature"] },
  "Luxembourg": { name: "Luxembourg", region: "Western Europe", icon: "fa-solid fa-building-columns", tagline: "A multilingual banking capital wrapped in green valleys, castles, and free nationwide transit.", cost: "$2,800 – $4,000/mo", wlb: "8.5 / 10", safety: "9.0 / 10", dimensions: { costIndex: 4, climate: 'four-seasons', transit: 'walkable-rail', convenienceScore: 4, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 5, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Housing is scarce and pricey, and most workers commute across the French, Belgian, or German border.", tags: ["safe", "transit", "high-cost", "wlb"] },
  "Malta": { name: "Malta", region: "Southern Europe", icon: "fa-solid fa-sailboat", tagline: "English-speaking Mediterranean islands with festa season, dive sites, and a dense expat social scene.", cost: "$1,400 – $2,300/mo", wlb: "7.5 / 10", safety: "8.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 2, lgbtqTier: 4, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "One of Europe's densest islands: summer crowds, scarce housing, and building-season noise.", tags: ["coastal", "warm", "english-friendly", "safe"] },
  "Moldova": { name: "Moldova", region: "Eastern Europe", icon: "fa-solid fa-wine-glass", tagline: "Europe's least-visited corner: monastery villages, vast wine cellars, and unhurried rural life.", cost: "$600 – $1,100/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 1, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "It remains Europe's poorest economy; energy costs, emigration, and Romanian or Russian shape daily life.", tags: ["affordable", "food", "rural", "quiet"] },
  "Monaco": { name: "Monaco", region: "Western Europe", icon: "fa-solid fa-ship", tagline: "Mediterranean glamour: harbor-front luxury, Formula 1 streets, and a famously secure microstate.", cost: "$6,000 – $12,000/mo", wlb: "7.0 / 10", safety: "9.5 / 10", dimensions: { costIndex: 5, climate: 'mild-coastal', transit: 'walkable-rail', convenienceScore: 4, weekendRhythm: 'vibrant-24-7', natureScore: 2, lgbtqTier: 5, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 4 }, realityCheck: "Residency requires proving substantial wealth or a Monaco employer, and most workers commute from France.", tags: ["coastal", "high-cost", "safe", "warm"] },
  "Montenegro": { name: "Montenegro", region: "Southeast Europe", icon: "fa-solid fa-water", tagline: "The fjord-like Bay of Kotor, Adriatic beaches, and rugged Durmitor plateaus in one small country.", cost: "$900 – $1,600/mo", wlb: "6.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Coastal life runs on tourist seasons; administration is slow and winter infrastructure is limited.", tags: ["coastal", "mountains", "adventure", "affordable"] },
  "Romania": { name: "Romania", region: "Eastern Europe", icon: "fa-solid fa-chess-rook", tagline: "Medieval Transylvanian towns, Carpathian wilderness, and one of Europe's fastest-growing tech scenes.", cost: "$900 – $1,600/mo", wlb: "7.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 3, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Rural roads and healthcare lag Western Europe; earthquakes are a documented risk in Bucharest.", tags: ["culture", "affordable", "nature", "urban"] },
  "San Marino": { name: "San Marino", region: "Southern Europe", icon: "fa-solid fa-tower-observation", tagline: "A medieval mountaintop republic with cliff-edge towers over the Emilia-Romagna hills.", cost: "$1,600 – $2,400/mo", wlb: "7.5 / 10", safety: "9.0 / 10", dimensions: { costIndex: 3, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 5, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Residence permits are quota-limited and nearly all practical life happens through nearby Italian towns.", tags: ["history", "safe", "quiet", "mountains"] },
  "Serbia": { name: "Serbia", region: "Southeast Europe", icon: "fa-solid fa-music", tagline: "Belgrade's round-the-clock river-raft nightlife, hearty food, and affordable big-city living.", cost: "$900 – $1,600/mo", wlb: "6.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'vibrant-24-7', natureScore: 3, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 4 }, realityCheck: "Winter smog can settle over Belgrade, and EU-integration politics complicate some long-term plans.", tags: ["culture", "food", "urban", "affordable"] },
  "Slovakia": { name: "Slovakia", region: "Central Europe", icon: "fa-solid fa-hiking", tagline: "High Tatras alpine trails, spa towns, and compact historic cities at Austrian-doorstep prices.", cost: "$1,100 – $1,800/mo", wlb: "7.5 / 10", safety: "8.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "The international job market is small; the rural east lags the Bratislava region in pay and services.", tags: ["mountains", "safe", "affordable", "nature"] },
  "Slovenia": { name: "Slovenia", region: "Southern Europe", icon: "fa-solid fa-mountain", tagline: "Lake Bled and the Julian Alps within an hour of Ljubljana's compact, café-slow capital.", cost: "$1,300 – $2,100/mo", wlb: "8.0 / 10", safety: "8.5 / 10", dimensions: { costIndex: 3, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Ljubljana housing is tight, and Slovenian is needed for most administrative and professional life.", tags: ["nature", "safe", "wlb", "mountains"] },
  "Vatican City": { name: "Vatican City", region: "Southern Europe", icon: "fa-solid fa-church", tagline: "The world's smallest state: the global center of the Catholic Church, wrapped inside Rome.", cost: "$2,500 – $3,500/mo", wlb: "6.0 / 10", safety: "9.0 / 10", dimensions: { costIndex: 4, climate: 'warm-sun', transit: 'walkable-rail', convenienceScore: 4, weekendRhythm: 'standard', natureScore: 1, lgbtqTier: 4, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Citizenship is functional, not residential: only clergy, guards, and certain workers live inside its walls.", tags: ["history", "safe", "urban", "religion"] },

  // ASIA — REMAINING
  "Bahrain": { name: "Bahrain", region: "West Asia", icon: "fa-solid fa-city", tagline: "A compact, socially relaxed Gulf island known for motorsport weekends and a strong expat scene.", cost: "$1,300 – $2,300/mo", wlb: "6.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 2, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "High summer humidity, weekend-Friday rhythms, and rules that differ sharply for locals and expatriates.", tags: ["urban", "warm", "island", "food"] },
  "Bhutan": { name: "Bhutan", region: "South Asia", icon: "fa-solid fa-mountain-sun", tagline: "A carbon-negative Himalayan kingdom of cliffside monasteries and deliberately slow development.", cost: "$1,200 – $2,000/mo", wlb: "6.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 3, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Daily-fee tourism rules, controlled residency, and mountain geography keep change slow and access limited.", tags: ["mountains", "nature", "quiet", "adventure"] },
  "Brunei": { name: "Brunei", region: "Southeast Asia", icon: "fa-solid fa-mosque", tagline: "A tranquil oil-rich sultanate of gilded mosques and rainforest along Borneo's north coast.", cost: "$900 – $1,600/mo", wlb: "6.5 / 10", safety: "7.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Sharia law shapes social life, alcohol is banned, and evening entertainment is famously quiet.", tags: ["quiet", "safe", "tropical", "nature"] },
  "Israel": { name: "Israel", region: "West Asia", icon: "fa-solid fa-star-of-david", tagline: "Startup-dense Mediterranean cities, sacred historic sites, and famously direct social energy.", cost: "$1,800 – $3,000/mo", wlb: "6.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'mixed-transit', convenienceScore: 4, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 4, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 5 }, realityCheck: "Security developments can change daily routines quickly, and housing costs are among the world's highest.", tags: ["food", "coastal", "history", "urban"] },
  "Jordan": { name: "Jordan", region: "West Asia", icon: "fa-solid fa-archway", tagline: "Petra's carved canyons, Wadi Rum dunes, and famously warm Levantine hospitality.", cost: "$900 – $1,600/mo", wlb: "6.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Water scarcity, regional spillover risk, and a small job market outside Amman shape long-term plans.", tags: ["history", "nature", "adventure", "food"] },
  "Lebanon": { name: "Lebanon", region: "West Asia", icon: "fa-solid fa-tree", tagline: "Beirut's resilient café culture, ski-to-sea geography, and one of the world's great food traditions.", cost: "$800 – $1,600/mo", wlb: "5.0 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'vibrant-24-7', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 4 }, realityCheck: "Economic and currency instability, power cuts, and periodic security tensions require contingency planning.", tags: ["food", "culture", "mountains", "nature"] },
  "Maldives": { name: "Maldives", region: "South Asia", icon: "fa-solid fa-umbrella-beach", tagline: "Atoll life over turquoise lagoons, split between resort islands and local-island rhythms.", cost: "$1,000 – $1,900/mo", wlb: "6.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Almost everything is imported, local laws differ by island type, and rising sea levels are a long-term threat.", tags: ["coastal", "tropical", "island", "warm"] },
  "Mongolia": { name: "Mongolia", region: "East Asia", icon: "fa-solid fa-horse", tagline: "Wide-open steppe, nomadic herding culture, and a fast-changing capital of contrasts.", cost: "$700 – $1,300/mo", wlb: "6.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 1, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Ulaanbaatar's winter air is among the world's most polluted, and distances between services are enormous.", tags: ["nature", "adventure", "cold", "nomad"] },
  "North Korea": { name: "North Korea", region: "East Asia", icon: "fa-solid fa-landmark", tagline: "One of the world's most closed states, defined by monumental Pyongyang and total state control.", cost: "$500 – $1,000/mo", wlb: "3.0 / 10", safety: "4.0 / 10", dimensions: { costIndex: 1, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, realityCheck: "Independent relocation is not possible; presence is limited to approved tours or postings under strict supervision.", tags: ["history", "cold", "regional", "urban"] },
  "Oman": { name: "Oman", region: "West Asia", icon: "fa-solid fa-ship", tagline: "Wadis, fort towns, and unhurried Gulf politeness between fjord-like coast and desert dunes.", cost: "$1,100 – $2,000/mo", wlb: "6.5 / 10", safety: "8.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Long distances, fierce summer heat, and a quieter job market than flashier Gulf neighbors.", tags: ["nature", "adventure", "safe", "warm"] },
  "Palestine": { name: "Palestine", region: "West Asia", icon: "fa-solid fa-landmark-dome", tagline: "Ancient West Bank cities, olive terraces, and resilient community life under difficult conditions.", cost: "$700 – $1,400/mo", wlb: "4.5 / 10", safety: "3.5 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Movement restrictions, political volatility, and service access all depend heavily on current conditions.", tags: ["history", "culture", "food", "family"] },
  "Sri Lanka": { name: "Sri Lanka", region: "South Asia", icon: "fa-solid fa-train", tagline: "Tea-estate hill country, ancient cities, surf coasts, and warm island sociability.", cost: "$600 – $1,200/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Post-crisis economic recovery is uneven, and fuel, power, or import shortages can recur.", tags: ["nature", "food", "coastal", "affordable"] },
  "Timor-Leste": { name: "Timor-Leste", region: "Southeast Asia", icon: "fa-solid fa-mug-saucer", tagline: "Southeast Asia's youngest nation: reef-rich coasts, mountain coffee country, and quiet resilience.", cost: "$600 – $1,100/mo", wlb: "5.0 / 10", safety: "5.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Infrastructure and healthcare are limited outside Dili, and Tetum or Portuguese is essential for services.", tags: ["coastal", "nature", "quiet", "adventure"] },
  "Turkmenistan": { name: "Turkmenistan", region: "Central Asia", icon: "fa-solid fa-landmark", tagline: "White-marble Ashgabat, Silk Road ruins, and one of the world's most closed societies.", cost: "$600 – $1,200/mo", wlb: "4.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 }, realityCheck: "Entry is heavily restricted, internal movement is monitored, and much of the country requires guides.", tags: ["history", "desert", "adventure", "regional"] },

  // AFRICA — REMAINING
  "Botswana": { name: "Botswana", region: "Southern Africa", icon: "fa-solid fa-gem", tagline: "Diamond-funded stability, the Okavango Delta, and vast Kalahari silence.", cost: "$800 – $1,500/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Long distances between towns, water constraints, and services centered on Gaborone and Maun.", tags: ["nature", "wildlife", "safe", "adventure"] },
  "Burundi": { name: "Burundi", region: "East Africa", icon: "fa-solid fa-drum", tagline: "Hillside villages, royal drumming traditions, and lakeside life along Tanganyika.", cost: "$500 – $1,000/mo", wlb: "4.5 / 10", safety: "3.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Political tensions, scarce infrastructure, and one of the world's lowest income levels.", tags: ["culture", "nature", "regional", "adventure"] },
  "Cabo Verde": { name: "Cabo Verde", region: "West Africa", icon: "fa-solid fa-music", tagline: "An Atlantic Creole archipelago of morna music, volcanic hikes, and steady trade winds.", cost: "$800 – $1,500/mo", wlb: "6.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 2 }, realityCheck: "Imported goods are expensive, water is scarce, and island-hopping depends on flight and ferry schedules.", tags: ["island", "coastal", "warm", "music"] },
  "Central African Republic": { name: "Central African Republic", region: "Central Africa", icon: "fa-solid fa-globe-asia", tagline: "Rainforest and savanna wilderness with deep local traditions in a fragile state.", cost: "$500 – $1,000/mo", wlb: "3.5 / 10", safety: "2.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 }, realityCheck: "Armed conflict, curfews, and minimal services outside Bangui; consult current official guidance.", tags: ["nature", "regional", "adventure", "wildlife"] },
  "Comoros": { name: "Comoros", region: "East Africa", icon: "fa-solid fa-umbrella-beach", tagline: "Volcanic Indian Ocean islands scented with ylang-ylang, vanilla, and clove.", cost: "$600 – $1,100/mo", wlb: "4.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Frequent political turnover, limited inter-island transport, and basic services only in Moroni.", tags: ["island", "tropical", "quiet", "nature"] },
  "Republic of the Congo": { name: "Republic of the Congo", region: "Central Africa", icon: "fa-solid fa-globe-asia", tagline: "Rainforest corridors along the Congo River, from Brazzaville's riverfront to northern wilderness.", cost: "$700 – $1,300/mo", wlb: "5.0 / 10", safety: "4.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Infrastructure is thin outside Brazzaville and Pointe-Noire, and French is essential for services.", tags: ["nature", "culture", "regional", "wildlife"] },
  "Djibouti": { name: "Djibouti", region: "East Africa", icon: "fa-solid fa-anchor", tagline: "A desert port state of salt lakes, whale-shark waters, and international military presence.", cost: "$1,000 – $1,800/mo", wlb: "5.0 / 10", safety: "5.5 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Extreme heat, high import prices, and little entertainment beyond weekend diving and beach camps.", tags: ["desert", "coastal", "adventure", "warm"] },
  "Equatorial Guinea": { name: "Equatorial Guinea", region: "Central Africa", icon: "fa-solid fa-globe-asia", tagline: "Oil-funded cities, Spanish-speaking administration, and Bioko island rainforests.", cost: "$1,000 – $1,900/mo", wlb: "5.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, realityCheck: "Wealth is unevenly distributed, permits are bureaucratic, and Spanish and French mix in daily administration.", tags: ["island", "tropical", "regional", "nature"] },
  "Eritrea": { name: "Eritrea", region: "East Africa", icon: "fa-solid fa-archway", tagline: "Asmara's preserved Art Deco streets, a Red Sea coast, and nine-language highland cultures.", cost: "$500 – $1,000/mo", wlb: "4.0 / 10", safety: "4.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 }, realityCheck: "Indefinite national service, exit-visa requirements, and restricted movement affect residents and visitors alike.", tags: ["history", "coastal", "culture", "regional"] },
  "Eswatini": { name: "Eswatini", region: "Southern Africa", icon: "fa-solid fa-crown", tagline: "A mountainous kingdom of Swazi ceremonies, nature reserves, and easy South Africa access.", cost: "$600 – $1,200/mo", wlb: "5.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "A small economy with limited jobs, and healthcare is basic outside Mbabane and Manzini.", tags: ["culture", "mountains", "nature", "regional"] },
  "Gabon": { name: "Gabon", region: "Central Africa", icon: "fa-solid fa-tree", tagline: "Equatorial rainforest, Atlantic surf beaches, and oil-funded calm.", cost: "$900 – $1,600/mo", wlb: "5.5 / 10", safety: "5.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Costs are high for the region, French is essential, and political transitions have caused disruption.", tags: ["nature", "wildlife", "coastal", "tropical"] },
  "Guinea-Bissau": { name: "Guinea-Bissau", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "The Bijagós archipelago, cashew economies, and a relaxed, music-filled West African pace.", cost: "$500 – $1,000/mo", wlb: "4.0 / 10", safety: "4.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Political instability and minimal infrastructure; Portuguese and Crioulo dominate daily life.", tags: ["island", "culture", "nature", "regional"] },
  "Lesotho": { name: "Lesotho", region: "Southern Africa", icon: "fa-solid fa-mountain", tagline: "The 'Kingdom in the Sky': an entirely high-altitude land of basalt cliffs and pony-trekking culture.", cost: "$600 – $1,100/mo", wlb: "5.0 / 10", safety: "4.5 / 10", dimensions: { costIndex: 1, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Harsh winters, mountain-road access, and deep dependence on South Africa for goods and jobs.", tags: ["mountains", "adventure", "cold", "nature"] },
  "Liberia": { name: "Liberia", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "A founding story of resettlement, surf-friendly Atlantic coast, and rainforest regrowth.", cost: "$600 – $1,200/mo", wlb: "4.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Heavy wet seasons, fragile utilities, and dollarized city costs; check current conditions before planning.", tags: ["coastal", "culture", "nature", "regional"] },
  "Mali": { name: "Mali", region: "West Africa", icon: "fa-solid fa-mosque", tagline: "Niger River cultures, legendary trade cities like Timbuktu, and world-famous music traditions.", cost: "$500 – $1,000/mo", wlb: "4.0 / 10", safety: "2.5 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Security risks are severe across northern and central regions; official guidance advises against most travel.", tags: ["history", "music", "desert", "culture"] },
  "Mauritania": { name: "Mauritania", region: "West Africa", icon: "fa-solid fa-train", tagline: "Saharan expanse, Atlantic fishing ports, and ancient caravan towns like Chinguetti.", cost: "$500 – $1,000/mo", wlb: "4.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Extreme heat, vast distances, and documented human-rights concerns make current guidance essential.", tags: ["desert", "history", "adventure", "culture"] },
  "Namibia": { name: "Namibia", region: "Southern Africa", icon: "fa-solid fa-sun", tagline: "The world's oldest desert, Etosha's wildlife, and vast, well-organized empty roads.", cost: "$900 – $1,600/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Enormous distances, water scarcity, and services clustered in Windhoek and coastal towns.", tags: ["desert", "nature", "wildlife", "adventure"] },
  "Niger": { name: "Niger", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "Saharan dunes, Aïr mountain oases, and Niger River farming communities.", cost: "$500 – $900/mo", wlb: "3.5 / 10", safety: "2.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 }, realityCheck: "Post-coup instability and active conflict zones; most official guidance advises against travel.", tags: ["desert", "history", "regional", "adventure"] },
  "Sao Tome and Principe": { name: "São Tomé and Principe", region: "Central Africa", icon: "fa-solid fa-cookie-bite", tagline: "A cocoa-scented equatorial two-island state of jungle peaks and quiet black-sand bays.", cost: "$700 – $1,300/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 1 }, realityCheck: "Limited flights, imported goods, and slow services; Portuguese is the working language.", tags: ["island", "tropical", "nature", "quiet"] },
  "Seychelles": { name: "Seychelles", region: "East Africa", icon: "fa-solid fa-seedling", tagline: "Granite-island paradise with giant tortoises, creole cuisine, and strict environmental care.", cost: "$1,400 – $2,400/mo", wlb: "6.5 / 10", safety: "7.5 / 10", dimensions: { costIndex: 4, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 3, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Remote and costly: nearly everything is imported, and island time applies to administration.", tags: ["island", "coastal", "tropical", "nature"] },
  "Sierra Leone": { name: "Sierra Leone", region: "West Africa", icon: "fa-solid fa-globe-asia", tagline: "Freetown's creole heritage, palm-fringed peninsula beaches, and a rebounding arts scene.", cost: "$600 – $1,100/mo", wlb: "4.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Rainy-season disruption, power reliability, and Krio or English needed for smooth daily life.", tags: ["coastal", "culture", "nature", "regional"] },
  "Zambia": { name: "Zambia", region: "Southern Africa", icon: "fa-solid fa-binoculars", tagline: "Victoria Falls, walking safaris in South Luangwa, and Copperbelt city energy.", cost: "$600 – $1,200/mo", wlb: "5.5 / 10", safety: "5.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Long distances, seasonal power cuts, and rainy-season road conditions outside main corridors.", tags: ["nature", "wildlife", "adventure", "affordable"] },

  // AMERICAS & CARIBBEAN — REMAINING
  "Antigua and Barbuda": { name: "Antigua and Barbuda", region: "Caribbean", icon: "fa-solid fa-sailboat", tagline: "A sailing-nation twin-island state famous for 365 beaches and English Harbour history.", cost: "$1,100 – $2,000/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Hurricane exposure, imported costs, and dry-season water restrictions on small islands.", tags: ["island", "coastal", "warm", "safe"] },
  "Bahamas": { name: "Bahamas", region: "Caribbean", icon: "fa-solid fa-fish", tagline: "Hundreds of island cays, pink-sand beaches, and offshore-finance life with American convenience.", cost: "$1,300 – $2,300/mo", wlb: "6.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Hurricane season, high import prices, and inter-island logistics between Family Islands.", tags: ["island", "coastal", "warm", "english-friendly"] },
  "Barbados": { name: "Barbados", region: "Caribbean", icon: "fa-solid fa-plate-wheat", tagline: "Rum-shop afternoons, cricket culture, and polished Caribbean infrastructure.", cost: "$1,300 – $2,200/mo", wlb: "6.5 / 10", safety: "7.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 3 }, realityCheck: "Import costs, hurricane exposure, and seasonal tourism swings shape prices and crowds.", tags: ["island", "coastal", "warm", "english-friendly"] },
  "Belize": { name: "Belize", region: "Central America", icon: "fa-solid fa-compass", tagline: "Caribbean coast, the hemisphere's barrier reef, and a laid-back English-speaking cultural mix.", cost: "$900 – $1,700/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 2 }, realityCheck: "Hurricane exposure, rainy-season roads, and limited specialized healthcare outside Belize City.", tags: ["coastal", "nature", "island", "warm"] },
  "Dominica": { name: "Dominica", region: "Caribbean", icon: "fa-solid fa-tree", tagline: "The 'Nature Island': boiling lakes, rainforest trails, and a small, creative community.", cost: "$900 – $1,600/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Hurricane reconstruction continues, medical care is basic, and ferry schedules depend on weather.", tags: ["island", "nature", "hiking", "tropical"] },
  "Grenada": { name: "Grenada", region: "Caribbean", icon: "fa-solid fa-mortar-pestle", tagline: "The Spice Isle: nutmeg-scented hills, underwater sculpture parks, and calm town life.", cost: "$1,000 – $1,800/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Isolation, import costs, and hurricane-season logistics; university-term rhythms shape St George's.", tags: ["island", "coastal", "warm", "nature"] },
  "Jamaica": { name: "Jamaica", region: "Caribbean", icon: "fa-solid fa-music", tagline: "Reggae's homeland: Blue Mountain coffee, street-food culture, and unmistakable creative energy.", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, realityCheck: "Crime varies sharply by neighborhood; housing security and current local guidance matter.", tags: ["music", "culture", "food", "coastal"] },
  "Saint Kitts and Nevis": { name: "Saint Kitts and Nevis", region: "Caribbean", icon: "fa-solid fa-globe-asia", tagline: "A compact two-island federation of fortress history, peak hikes, and a small expat scene.", cost: "$1,000 – $1,900/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Small-island logistics, hurricane season, and limited specialized healthcare.", tags: ["island", "coastal", "warm", "quiet"] },
  "Saint Lucia": { name: "Saint Lucia", region: "Caribbean", icon: "fa-solid fa-mountain", tagline: "The twin Piton peaks, drive-in volcano valleys, and a strong tourism-anchored rhythm.", cost: "$1,100 – $2,000/mo", wlb: "6.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Import prices, hurricane exposure, and winding island roads slow daily logistics.", tags: ["island", "nature", "coastal", "warm"] },
  "Saint Vincent and the Grenadines": { name: "Saint Vincent and the Grenadines", region: "Caribbean", icon: "fa-solid fa-ferry", tagline: "A volcanic main island scattered across thirty-two sailing islets.", cost: "$1,000 – $1,800/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Volcanic eruptions have displaced northern island communities, and ferry logistics shape everything.", tags: ["island", "coastal", "warm", "sailing"] },

  // OCEANIA — REMAINING
  "Fiji": { name: "Fiji", region: "Oceania", icon: "fa-solid fa-umbrella-beach", tagline: "Three hundred and thirty islands of coral lagoons and famously warm 'bula' welcome.", cost: "$800 – $1,600/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 2 }, realityCheck: "Cyclone season (Nov–Apr), inter-island logistics, and communal land-lease rules for outsiders.", tags: ["island", "coastal", "tropical", "nature"] },
  "Kiribati": { name: "Kiribati", region: "Oceania", icon: "fa-solid fa-water", tagline: "Equatorial atolls spread across the central Pacific, on the frontline of climate change.", cost: "$700 – $1,300/mo", wlb: "5.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 1 }, realityCheck: "Fresh water and supply shipments are fragile, and king tides increasingly flood parts of Tarawa.", tags: ["island", "tropical", "remote", "quiet"] },
  "Marshall Islands": { name: "Marshall Islands", region: "Oceania", icon: "fa-solid fa-anchor", tagline: "An atoll nation of master navigators and divers, closely tied to the United States.", cost: "$1,000 – $1,700/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Compact-of-Free-Association residence rules, typhoon exposure, and thin freshwater lenses.", tags: ["island", "tropical", "remote", "diving"] },
  "Micronesia": { name: "Micronesia", region: "Oceania", icon: "fa-solid fa-globe-asia", tagline: "Four states spread across a vast ocean: lagoon wreck diving, village life, and US ties.", cost: "$900 – $1,600/mo", wlb: "5.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Inter-island flights are scarce and pricey; the four states differ as much as separate countries.", tags: ["island", "tropical", "remote", "diving"] },
  "Nauru": { name: "Nauru", region: "Oceania", icon: "fa-solid fa-gem", tagline: "A single raised-coral island of tight-knit community life and complicated phosphate history.", cost: "$900 – $1,500/mo", wlb: "5.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 2, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Tiny land area, imported water and power, and strict visa caps on visitor numbers.", tags: ["island", "remote", "tropical", "quiet"] },
  "Palau": { name: "Palau", region: "Oceania", icon: "fa-solid fa-fish", tagline: "Rock Island lagoons, Jellyfish Lake, and one of the world's most committed marine sanctuaries.", cost: "$1,100 – $1,900/mo", wlb: "5.5 / 10", safety: "7.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Limited flights, high import costs, and strict environmental rules that also shape daily routines.", tags: ["island", "nature", "diving", "remote"] },
  "Papua New Guinea": { name: "Papua New Guinea", region: "Oceania", icon: "fa-solid fa-feather", tagline: "Eight hundred languages, highland cultures, and wild river and reef wilderness.", cost: "$900 – $1,700/mo", wlb: "4.5 / 10", safety: "3.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Personal security requires planning, customary land rules shape housing, and services differ by province.", tags: ["nature", "adventure", "culture", "remote"] },
  "Samoa": { name: "Samoa", region: "Oceania", icon: "fa-solid fa-leaf", tagline: "Fa'a Sāmoa village life, volcanic swimming holes, and an unhurried pace under the palms.", cost: "$800 – $1,400/mo", wlb: "5.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Sundays are fully reserved for church and family, and cyclone season runs Nov–Apr.", tags: ["island", "tropical", "quiet", "culture"] },
  "Solomon Islands": { name: "Solomon Islands", region: "Oceania", icon: "fa-solid fa-globe-asia", tagline: "WWII wreck lagoons, custom land, and village-island life across nine provinces.", cost: "$800 – $1,500/mo", wlb: "5.0 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, realityCheck: "Inter-island travel and services are basic, and Honiara security requires neighborhood awareness.", tags: ["island", "nature", "tropical", "remote"] },
  "Tonga": { name: "Tonga", region: "Oceania", icon: "fa-solid fa-crown", tagline: "The Pacific's last kingdom: coral atolls, Sunday-quiet traditions, and royal ceremony.", cost: "$800 – $1,500/mo", wlb: "5.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Cyclone exposure, limited inter-island ferries, and constitution-protected Sunday closures.", tags: ["island", "tropical", "quiet", "culture"] },
  "Tuvalu": { name: "Tuvalu", region: "Oceania", icon: "fa-solid fa-globe-asia", tagline: "One of the world's smallest and remotest nations, low-lying and tightly community-knit.", cost: "$800 – $1,400/mo", wlb: "5.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 1 }, realityCheck: "Supply ships are infrequent, internet is limited, and king tides increasingly affect Funafuti.", tags: ["island", "remote", "tropical", "quiet"] },
  "Vanuatu": { name: "Vanuatu", region: "Oceania", icon: "fa-solid fa-volcano", tagline: "Eighty islands of active volcanoes, kastom villages, and world-famous wreck diving.", cost: "$900 – $1,700/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, realityCheck: "Cyclone season is severe, volcanic activity is real, and inter-island transport depends on weather.", tags: ["island", "nature", "diving", "adventure"] },
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
      climateProfile: COUNTRY_CLIMATE_PROFILES[name] ?? estimateClimateProfile(country.dimensions.climate),
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
          url: `https://en.wikipedia.org/wiki/${encodeURIComponent(meta.name.replace(/ /g, '_'))}`
        }
      ],
      tags: meta.tags,
      dimensions: meta.dimensions,
      climateProfile: COUNTRY_CLIMATE_PROFILES[name] ?? estimateClimateProfile(meta.dimensions.climate),
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
  const estimatedWeather = estimateClimateProfile(estClimate, lon !== 0 || lat !== 0 ? lat : undefined);

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
    workday: name === "Sweden"
      ? "Many office days begin around 8 or 9, with focused work, relatively flat team discussions, and an unhurried lunch. Fika—coffee and something small to eat with colleagues—is a familiar pause, often shared rather than taken at a desk. Flexible hours and hybrid work are common in some sectors, and people generally try to finish in time for life outside work, though routines vary by job and region."
      : `A typical weekday in ${name} blends local business customs with modern routines. ${tpl.workday}`,
    evening: name === "Sweden"
      ? "After work, the evening often shifts toward home: cooking dinner, meeting a friend for a walk or coffee, or spending time with family. In warmer, brighter months, parks, waterfront paths, and outdoor cafés stay lively; in winter, evenings tend to be cozier and more home-centered. A weeknight may include a gym visit or a casual meal out, while fika and social plans are usually arranged ahead rather than spontaneous."
      : `When the workday winds down in ${name}, locals head out to neighborhood gathering spots. ${tpl.evening}`,
    upsides: tpl.upsides,
    downsides: tpl.downsides,
    videos: [
      {
        title: `What Living in ${name} is Actually Like (Local & Expat Stories)`,
        channel: "YouTube",
        duration: "Search",
        url: `https://en.wikipedia.org/wiki/${encodeURIComponent(name.replace(/ /g, '_'))}`,
      }
    ],
    tags: [fallbackRegion.toLowerCase(), estClimate],
    dimensions: {
      ...tpl.dimensions,
      climate: estClimate
    },
    climateProfile: estimatedWeather,
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

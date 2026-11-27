import type { CountryData, CountryDossierProse, LifestyleDimensions, RegionalTemplate } from './countries';
import { COUNTRY_DATABASE, REGIONAL_TEMPLATES } from './countries';
import { COUNTRY_CLIMATE_PROFILES, estimateClimateProfile } from './climateProfiles';
import { COUNTRY_SOCIAL_WARMTH, estimateSocialWarmth } from './socialWarmth';
import { PRACTICAL_FACTORS } from './practicalFactors';
import { getContentRegistry, getRegionalTemplateRegistry, getRegionalFallbackSentences, getLocalizedPracticalNotes, getLocalizedSocialWarmthNotes } from './content';

export interface CountryMetadata {
  name: string;
  region: string;
  icon: string;
  cost: string;
  wlb: string;
  safety: string;
  dimensions: LifestyleDimensions;
  tags: string[];
}

export const GLOBAL_COUNTRY_METADATA: Record<string, CountryMetadata> = {
  // EUROPE
  "Austria": {
    name: "Austria",
    region: "Central Europe",
    icon: "fa-solid fa-mountain",
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
    tags: ["nature", "safe", "transit", "europe", "four-seasons", "foodie"]
  },
  "Belgium": {
    name: "Belgium",
    region: "Western Europe",
    icon: "fa-solid fa-beer-mug-empty",
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
    tags: ["foodie", "transit", "europe", "four-seasons"]
  },
  "Denmark": {
    name: "Denmark",
    region: "Northern Europe",
    icon: "fa-solid fa-bicycle",
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
    tags: ["wlb", "transit", "safe", "europe", "high-cost"]
  },
  "Sweden": {
    name: "Sweden",
    region: "Northern Europe",
    icon: "fa-solid fa-snowflake",
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
    tags: ["nature", "wlb", "safe", "europe", "four-seasons"]
  },
  "Finland": {
    name: "Finland",
    region: "Northern Europe",
    icon: "fa-solid fa-hot-tub-person",
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
    tags: ["nature", "safe", "wlb", "europe", "cold-winter", "reserved"]
  },
  "Ireland": {
    name: "Ireland",
    region: "Western Europe",
    icon: "fa-solid fa-clover",
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
    tags: ["social", "nature", "europe", "high-cost"]
  },
  "Czech Republic": {
    name: "Czech Republic",
    region: "Central Europe",
    icon: "fa-solid fa-castle",
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
    tags: ["transit", "safe", "moderate-cost", "europe", "four-seasons", "foodie"]
  },
  "Poland": {
    name: "Poland",
    region: "Central Europe",
    icon: "fa-solid fa-landmark",
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
    tags: ["affordable", "safe", "transit", "europe", "four-seasons"]
  },
  "Croatia": {
    name: "Croatia",
    region: "Southern Europe",
    icon: "fa-solid fa-ship",
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
    tags: ["coastal", "warm", "nature", "europe", "relaxed", "foodie"]
  },
  "Greenland": {
    name: "Greenland",
    region: "Northern Europe",
    icon: "fa-solid fa-igloo",
    cost: "$2,600 – $3,900/mo",
    wlb: "8.0 / 10",
    safety: "8.6 / 10",
    dimensions: {
      costIndex: 4,
      climate: 'cold-winter',
      transit: 'car-dependent',
      convenienceScore: 2,
      weekendRhythm: 'quiet-sunday',
      natureScore: 5,
      lgbtqTier: 4,
      religionRole: 'secular',
      foreignerOpenness: 3,
      paceScore: 2,
    },
    tags: ["nature", "adventure", "cold-winter", "high-cost", "europe"]
  },
  "Iceland": {
    name: "Iceland",
    region: "Northern Europe",
    icon: "fa-solid fa-volcano",
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
    tags: ["nature", "safe", "cold-winter", "high-cost"]
  },

  // ASIA & PACIFIC
  "Singapore": {
    name: "Singapore",
    icon: "fa-solid fa-building-columns",
    region: "Southeast Asia",
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
    tags: ["urban", "safe", "transit", "foodie", "high-cost", "corporate-hub"]
  },
  "Malaysia": {
    name: "Malaysia",
    icon: "fa-solid fa-utensils",
    region: "Southeast Asia",
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
    tags: ["affordable", "foodie", "warm", "social"]
  },
  "Philippines": {
    name: "Philippines",
    icon: "fa-solid fa-umbrella-beach",
    region: "Southeast Asia",
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
    tags: ["affordable", "warm", "coastal", "nature", "social"]
  },
  "India": {
    name: "India",
    icon: "fa-solid fa-om",
    region: "South Asia",
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
    tags: ["affordable", "foodie", "warm", "energetic"]
  },
  "United Arab Emirates": {
    name: "United Arab Emirates",
    icon: "fa-solid fa-gem",
    region: "Middle East",
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
    tags: ["urban", "safe", "high-cost", "energetic"]
  },
  "Turkey": {
    name: "Turkey",
    region: "Eurasia",
    icon: "fa-solid fa-mosque",
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
    tags: ["affordable", "foodie", "coastal", "social"]
  },
  "Georgia": {
    name: "Georgia",
    icon: "fa-solid fa-wine-bottle",
    region: "Caucasus",
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
    tags: ["affordable", "foodie", "nature", "wine"]
  },

  // AMERICAS
  "United States": {
    name: "United States",
    icon: "fa-solid fa-flag-usa",
    region: "North America",
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
    tags: ["urban", "nature", "high-cost", "energetic", "corporate-hub"]
  },
  "Brazil": {
    name: "Brazil",
    icon: "fa-solid fa-drum",
    region: "South America",
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
    tags: ["warm", "social", "nature", "coastal", "energetic"]
  },
  "Argentina": {
    name: "Argentina",
    icon: "fa-solid fa-fire-burner",
    region: "South America",
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
    tags: ["foodie", "social", "nature", "walkable", "four-seasons"]
  },
  "Chile": {
    name: "Chile",
    icon: "fa-solid fa-mountain",
    region: "South America",
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
    tags: ["nature", "safe", "coastal", "moderate-cost"]
  },
  "Panama": {
    name: "Panama",
    icon: "fa-solid fa-anchor",
    region: "Central America",
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
    tags: ["warm", "coastal", "nature", "moderate-cost"]
  },
  "Uruguay": {
    name: "Uruguay",
    icon: "fa-solid fa-mug-hot",
    region: "South America",
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
    tags: ["relaxed", "safe", "coastal", "social", "foodie"]
  },

  // AFRICA
  "South Africa": {
    name: "South Africa",
    icon: "fa-solid fa-paw",
    region: "Southern Africa",
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
    tags: ["nature", "coastal", "wine", "foodie", "affordable"]
  },
  "Morocco": {
    name: "Morocco",
    icon: "fa-solid fa-door-open",
    region: "North Africa",
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
    tags: ["affordable", "foodie", "warm", "nature"]
  },
  "Egypt": {
    name: "Egypt",
    icon: "fa-solid fa-pyramid",
    region: "North Africa",
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
    tags: ["affordable", "warm", "history", "energetic"]
  },
  "Kenya": {
    name: "Kenya",
    icon: "fa-solid fa-binoculars",
    region: "East Africa",
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
    tags: ["nature", "wildlife", "affordable", "warm"]
  },
  "Mauritius": {
    name: "Mauritius",
    icon: "fa-solid fa-umbrella-beach",
    region: "East Africa",
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
    tags: ["coastal", "safe", "warm", "nature", "relaxed"]
  },
  "China": {
    name: "China", region: "East Asia", icon: "fa-solid fa-yen-sign",
    cost: "$900 – $2,000/mo", wlb: "6.0 / 10", safety: "8.0 / 10",
    dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'walkable-rail', convenienceScore: 5, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 5 },
    tags: ["urban", "food", "transit", "culture", "nature", "foodie"]
  },
  "Afghanistan": {
    name: "Afghanistan", region: "South Asia", icon: "fa-solid fa-mountain-sun",
    cost: "$500 – $1,200/mo", wlb: "3.0 / 10", safety: "1.0 / 10",
    dimensions: { costIndex: 1, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 },
    tags: ["mountains", "culture", "history", "nature"]
  },
  "Pakistan": {
    name: "Pakistan", region: "South Asia", icon: "fa-solid fa-globe-asia",
    dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 },
    tags: ["culture", "food", "nature", "urban", "foodie"]
  },
  "Bangladesh": {
    name: "Bangladesh", region: "South Asia", icon: "fa-solid fa-globe-asia",
    dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 },
    tags: ["culture", "food", "nature", "urban"]
  },
  "Nigeria": {
    name: "Nigeria", region: "West Africa", icon: "fa-solid fa-globe-asia",
    dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 },
    tags: ["culture", "food", "nature", "urban", "foodie"]
  },
  "Russia": {
    name: "Russia", region: "Eastern Europe", icon: "fa-solid fa-globe-asia",
    dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 },
    tags: ["culture", "food", "nature", "urban"]
  },
  "Saudi Arabia": {
    name: "Saudi Arabia", region: "West Asia", icon: "fa-solid fa-globe-asia",
    dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 },
    tags: ["culture", "food", "nature", "urban"]
  },
  "Nepal": { name: "Nepal", region: "South Asia", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "city"] },
  "Iran": { name: "Iran", region: "West Asia", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "food", "city"] },
  "Ukraine": { name: "Ukraine", region: "Eastern Europe", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,600/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "city"] },
  "Ghana": { name: "Ghana", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,700/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, tags: ["culture", "nature", "food", "city"] },
  "Ethiopia": { name: "Ethiopia", region: "East Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "food", "city", "foodie"] },
  "Qatar": { name: "Qatar", region: "West Asia", icon: "fa-solid fa-globe-asia", cost: "$1,400 – $2,600/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 4, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "food", "nature", "urban"] },
  "Kuwait": { name: "Kuwait", region: "West Asia", icon: "fa-solid fa-globe-asia", cost: "$1,200 – $2,300/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "food", "nature", "urban"] },
  "Iraq": { name: "Iraq", region: "West Asia", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "food", "nature", "urban"] },
  "Uzbekistan": { name: "Uzbekistan", region: "Central Asia", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,300/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "food", "nature", "urban"] },
  "Tanzania": { name: "Tanzania", region: "East Africa", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,700/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "food", "nature", "urban"] },
  "Chad": { name: "Chad", region: "Central Africa", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 1, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Democratic Republic of the Congo": { name: "Democratic Republic of the Congo", region: "Central Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Uganda": { name: "Uganda", region: "East Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Tajikistan": { name: "Tajikistan", region: "Central Asia", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Kyrgyzstan": { name: "Kyrgyzstan", region: "Central Asia", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "The Gambia": { name: "The Gambia", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Armenia": { name: "Armenia", region: "Caucasus", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Libya": { name: "Libya", region: "North Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Myanmar": { name: "Myanmar", region: "Southeast Asia", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "food", "regional", "foodie"] },
  "Kazakhstan": { name: "Kazakhstan", region: "Central Asia", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional", "foodie"] },
  "Azerbaijan": { name: "Azerbaijan", region: "Caucasus", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,700/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Bosnia and Herzegovina": { name: "Bosnia and Herzegovina", region: "Southeast Europe", icon: "fa-solid fa-globe-asia", cost: "$900 – $1,700/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Cambodia": { name: "Cambodia", region: "Southeast Asia", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Laos": { name: "Laos", region: "Southeast Asia", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,300/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'motorbike-active', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Senegal": { name: "Senegal", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,700/mo", wlb: "5.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Angola": { name: "Angola", region: "Southern Africa", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,700/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Mozambique": { name: "Mozambique", region: "Southeast Africa", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Zimbabwe": { name: "Zimbabwe", region: "Southern Africa", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Malawi": { name: "Malawi", region: "Southeast Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,400/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Madagascar": { name: "Madagascar", region: "East Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Cameroon": { name: "Cameroon", region: "Central Africa", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,700/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "regional", "food"] },
  "Guinea": { name: "Guinea", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "regional", "food"] },
  "North Macedonia": { name: "North Macedonia", region: "Southeast Europe", icon: "fa-solid fa-globe-asia", cost: "$900 – $1,700/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "regional", "food"] },
  "Syria": { name: "Syria", region: "West Asia", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, tags: ["culture", "nature", "regional", "food"] },
  "Togo": { name: "Togo", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.5 / 10", safety: "4.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "regional", "food"] },
  "Peru": { name: "Peru", region: "South America", icon: "fa-solid fa-globe-asia", cost: "$900 – $1,800/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional", "foodie"] },
  "Honduras": { name: "Honduras", region: "Central America", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Nicaragua": { name: "Nicaragua", region: "Central America", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,400/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Guatemala": { name: "Guatemala", region: "Central America", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "El Salvador": { name: "El Salvador", region: "Central America", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,600/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "regional"] },
  "Dominican Republic": { name: "Dominican Republic", region: "Caribbean", icon: "fa-solid fa-globe-asia", cost: "$1,000 – $2,000/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal"] },
  "Haiti": { name: "Haiti", region: "Caribbean", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal"] },
  "Cuba": { name: "Cuba", region: "Caribbean", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,700/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal"] },
  "Puerto Rico": { name: "Puerto Rico", region: "Caribbean", icon: "fa-solid fa-castle", cost: "$1,700 – $2,900/mo", wlb: "7.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 4, weekendRhythm: 'vibrant-24-7', natureScore: 4, lgbtqTier: 4, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 3 }, tags: ["island", "coastal", "tropical", "us-territory", "food"] },
  "Ecuador": { name: "Ecuador", region: "South America", icon: "fa-solid fa-globe-asia", cost: "$900 – $1,800/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal"] },
  "Bolivia": { name: "Bolivia", region: "South America", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal"] },
  "Paraguay": { name: "Paraguay", region: "South America", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,400/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal"] },
  "Venezuela": { name: "Venezuela", region: "South America", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal"] },
  "Guyana": { name: "Guyana", region: "South America", icon: "fa-solid fa-globe-asia", cost: "$1,000 – $2,000/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal"] },
  "Suriname": { name: "Suriname", region: "South America", icon: "fa-solid fa-globe-asia", cost: "$1,000 – $2,000/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal"] },
  "Trinidad and Tobago": { name: "Trinidad and Tobago", region: "Caribbean", icon: "fa-solid fa-globe-asia", cost: "$1,200 – $2,300/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, tags: ["culture", "nature", "food", "coastal", "foodie"] },
  "Burkina Faso": { name: "Burkina Faso", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,300/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "regional", "history", "nature"] },
  "Benin": { name: "Benin", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,400/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "regional", "history", "nature"] },
  "Rwanda": { name: "Rwanda", region: "East Africa", icon: "fa-solid fa-globe-asia", cost: "$900 – $1,800/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "regional", "history", "nature"] },
  "Somalia": { name: "Somalia", region: "East Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, tags: ["culture", "regional", "history", "nature"] },
  "Sudan": { name: "Sudan", region: "Northeast Africa", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,300/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, tags: ["culture", "regional", "history", "nature"] },
  "South Sudan": { name: "South Sudan", region: "East Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,500/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, tags: ["culture", "regional", "history", "nature"] },
  "Côte d'Ivoire": { name: "Côte d'Ivoire", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$900 – $1,800/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "regional", "history", "nature", "foodie"] },
  "Algeria": { name: "Algeria", region: "North Africa", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,700/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["culture", "regional", "history", "nature"] },
  "Tunisia": { name: "Tunisia", region: "North Africa", icon: "fa-solid fa-globe-asia", cost: "$900 – $1,800/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "regional", "history", "nature"] },
  "Yemen": { name: "Yemen", region: "West Asia", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,300/mo", wlb: "5.0 / 10", safety: "3.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, tags: ["culture", "regional", "history", "nature"] },

  // EUROPE — REMAINING
  "Albania": { name: "Albania", region: "Southern Europe", icon: "fa-solid fa-mountain", cost: "$700 – $1,400/mo", wlb: "6.0 / 10", safety: "5.5 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["coastal", "mountains", "affordable", "food"] },
  "Andorra": { name: "Andorra", region: "Southern Europe", icon: "fa-solid fa-skiing", cost: "$1,600 – $2,400/mo", wlb: "7.5 / 10", safety: "9.0 / 10", dimensions: { costIndex: 3, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, tags: ["mountains", "safe", "adventure", "high-cost"] },
  "Belarus": { name: "Belarus", region: "Eastern Europe", icon: "fa-solid fa-city", cost: "$700 – $1,300/mo", wlb: "5.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 1, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["urban", "cold", "affordable", "nature"] },
  "Bulgaria": { name: "Bulgaria", region: "Southeast Europe", icon: "fa-solid fa-mountain", cost: "$900 – $1,600/mo", wlb: "6.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 3, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["affordable", "mountains", "food", "nature"] },
  "Cyprus": { name: "Cyprus", region: "Southern Europe", icon: "fa-solid fa-sun", cost: "$1,300 – $2,200/mo", wlb: "7.0 / 10", safety: "7.5 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 3, religionRole: 'moderate', foreignerOpenness: 4, paceScore: 3 }, tags: ["coastal", "warm", "safe", "english-friendly"] },
  "Estonia": { name: "Estonia", region: "Northern Europe", icon: "fa-solid fa-wifi", cost: "$1,300 – $2,100/mo", wlb: "8.0 / 10", safety: "8.5 / 10", dimensions: { costIndex: 3, climate: 'cold-winter', transit: 'walkable-rail', convenienceScore: 4, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 4, religionRole: 'secular', foreignerOpenness: 4, paceScore: 3 }, tags: ["safe", "digital", "nature", "cold"] },
  "Hungary": { name: "Hungary", region: "Central Europe", icon: "fa-solid fa-landmark", cost: "$1,100 – $1,900/mo", wlb: "6.5 / 10", safety: "7.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'walkable-rail', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 4 }, tags: ["culture", "food", "transit", "affordable", "foodie"] },
  "Kosovo": { name: "Kosovo", region: "Southeast Europe", icon: "fa-solid fa-flag", cost: "$700 – $1,300/mo", wlb: "5.0 / 10", safety: "5.5 / 10", dimensions: { costIndex: 1, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "food", "mountains", "affordable"] },
  "Latvia": { name: "Latvia", region: "Northern Europe", icon: "fa-solid fa-tree", cost: "$1,100 – $1,800/mo", wlb: "7.5 / 10", safety: "7.5 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, tags: ["coastal", "safe", "affordable", "nature", "foodie"] },
  "Liechtenstein": { name: "Liechtenstein", region: "Central Europe", icon: "fa-solid fa-crown", cost: "$2,400 – $3,600/mo", wlb: "8.0 / 10", safety: "9.3 / 10", dimensions: { costIndex: 4, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, tags: ["mountains", "safe", "high-cost", "quiet"] },
  "Lithuania": { name: "Lithuania", region: "Northern Europe", icon: "fa-solid fa-landmark-dome", cost: "$1,200 – $1,900/mo", wlb: "7.5 / 10", safety: "7.5 / 10", dimensions: { costIndex: 2, climate: 'cold-winter', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "safe", "affordable", "nature"] },
  "Luxembourg": { name: "Luxembourg", region: "Western Europe", icon: "fa-solid fa-building-columns", cost: "$2,800 – $4,000/mo", wlb: "8.5 / 10", safety: "9.0 / 10", dimensions: { costIndex: 4, climate: 'four-seasons', transit: 'walkable-rail', convenienceScore: 4, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 5, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 3 }, tags: ["safe", "transit", "high-cost", "wlb"] },
  "Malta": { name: "Malta", region: "Southern Europe", icon: "fa-solid fa-sailboat", cost: "$1,400 – $2,300/mo", wlb: "7.5 / 10", safety: "8.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 2, lgbtqTier: 4, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 3 }, tags: ["coastal", "warm", "english-friendly", "safe"] },
  "Moldova": { name: "Moldova", region: "Eastern Europe", icon: "fa-solid fa-wine-glass", cost: "$600 – $1,100/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 1, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, tags: ["affordable", "food", "rural", "quiet", "foodie"] },
  "Monaco": { name: "Monaco", region: "Western Europe", icon: "fa-solid fa-ship", cost: "$6,000 – $12,000/mo", wlb: "7.0 / 10", safety: "9.5 / 10", dimensions: { costIndex: 5, climate: 'mild-coastal', transit: 'walkable-rail', convenienceScore: 4, weekendRhythm: 'vibrant-24-7', natureScore: 2, lgbtqTier: 5, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 4 }, tags: ["coastal", "high-cost", "safe", "warm"] },
  "Montenegro": { name: "Montenegro", region: "Southeast Europe", icon: "fa-solid fa-water", cost: "$900 – $1,600/mo", wlb: "6.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["coastal", "mountains", "adventure", "affordable"] },
  "Romania": { name: "Romania", region: "Eastern Europe", icon: "fa-solid fa-chess-rook", cost: "$900 – $1,600/mo", wlb: "7.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 3, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["culture", "affordable", "nature", "urban"] },
  "San Marino": { name: "San Marino", region: "Southern Europe", icon: "fa-solid fa-tower-observation", cost: "$1,600 – $2,400/mo", wlb: "7.5 / 10", safety: "9.0 / 10", dimensions: { costIndex: 3, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 5, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, tags: ["history", "safe", "quiet", "mountains"] },
  "Serbia": { name: "Serbia", region: "Southeast Europe", icon: "fa-solid fa-music", cost: "$900 – $1,600/mo", wlb: "6.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'vibrant-24-7', natureScore: 3, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 4 }, tags: ["culture", "food", "urban", "affordable", "foodie"] },
  "Slovakia": { name: "Slovakia", region: "Central Europe", icon: "fa-solid fa-hiking", cost: "$1,100 – $1,800/mo", wlb: "7.5 / 10", safety: "8.0 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["mountains", "safe", "affordable", "nature"] },
  "Slovenia": { name: "Slovenia", region: "Southern Europe", icon: "fa-solid fa-mountain", cost: "$1,300 – $2,100/mo", wlb: "8.0 / 10", safety: "8.5 / 10", dimensions: { costIndex: 3, climate: 'four-seasons', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 4, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["nature", "safe", "wlb", "mountains"] },
  "Vatican City": { name: "Vatican City", region: "Southern Europe", icon: "fa-solid fa-church", cost: "$2,500 – $3,500/mo", wlb: "6.0 / 10", safety: "9.0 / 10", dimensions: { costIndex: 4, climate: 'warm-sun', transit: 'walkable-rail', convenienceScore: 4, weekendRhythm: 'standard', natureScore: 1, lgbtqTier: 4, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["history", "safe", "urban", "religion"] },

  // ASIA — REMAINING
  "Bahrain": { name: "Bahrain", region: "West Asia", icon: "fa-solid fa-city", cost: "$1,300 – $2,300/mo", wlb: "6.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 2, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["urban", "warm", "island", "food"] },
  "Bhutan": { name: "Bhutan", region: "South Asia", icon: "fa-solid fa-mountain-sun", cost: "$1,200 – $2,000/mo", wlb: "6.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 3, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["mountains", "nature", "quiet", "adventure"] },
  "Brunei": { name: "Brunei", region: "Southeast Asia", icon: "fa-solid fa-mosque", cost: "$900 – $1,600/mo", wlb: "6.5 / 10", safety: "7.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["quiet", "safe", "tropical", "nature"] },
  "Israel": { name: "Israel", region: "West Asia", icon: "fa-solid fa-star-of-david", cost: "$1,800 – $3,000/mo", wlb: "6.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'mixed-transit', convenienceScore: 4, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 4, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 5 }, tags: ["food", "coastal", "history", "urban"] },
  "Jordan": { name: "Jordan", region: "West Asia", icon: "fa-solid fa-archway", cost: "$900 – $1,600/mo", wlb: "6.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["history", "nature", "adventure", "food"] },
  "Lebanon": { name: "Lebanon", region: "West Asia", icon: "fa-solid fa-tree", cost: "$800 – $1,600/mo", wlb: "5.0 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'vibrant-24-7', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 4 }, tags: ["food", "culture", "mountains", "nature", "foodie"] },
  "Maldives": { name: "Maldives", region: "South Asia", icon: "fa-solid fa-umbrella-beach", cost: "$1,000 – $1,900/mo", wlb: "6.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["coastal", "tropical", "island", "warm"] },
  "Mongolia": { name: "Mongolia", region: "East Asia", icon: "fa-solid fa-horse", cost: "$700 – $1,300/mo", wlb: "6.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 1, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["nature", "adventure", "cold", "nomad"] },
  "North Korea": { name: "North Korea", region: "East Asia", icon: "fa-solid fa-landmark", cost: "$500 – $1,000/mo", wlb: "3.0 / 10", safety: "4.0 / 10", dimensions: { costIndex: 1, climate: 'four-seasons', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 3 }, tags: ["history", "cold", "regional", "urban"] },
  "Oman": { name: "Oman", region: "West Asia", icon: "fa-solid fa-ship", cost: "$1,100 – $2,000/mo", wlb: "6.5 / 10", safety: "8.0 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["nature", "adventure", "safe", "warm"] },
  "Palestine": { name: "Palestine", region: "West Asia", icon: "fa-solid fa-landmark-dome", cost: "$700 – $1,400/mo", wlb: "4.5 / 10", safety: "3.5 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["history", "culture", "food", "family"] },
  "Sri Lanka": { name: "Sri Lanka", region: "South Asia", icon: "fa-solid fa-train", cost: "$600 – $1,200/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["nature", "food", "coastal", "affordable"] },
  "Timor-Leste": { name: "Timor-Leste", region: "Southeast Asia", icon: "fa-solid fa-mug-saucer", cost: "$600 – $1,100/mo", wlb: "5.0 / 10", safety: "5.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["coastal", "nature", "quiet", "adventure"] },
  "Turkmenistan": { name: "Turkmenistan", region: "Central Asia", icon: "fa-solid fa-landmark", cost: "$600 – $1,200/mo", wlb: "4.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 }, tags: ["history", "desert", "adventure", "regional"] },

  // AFRICA — REMAINING
  "Botswana": { name: "Botswana", region: "Southern Africa", icon: "fa-solid fa-gem", cost: "$800 – $1,500/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 3 }, tags: ["nature", "wildlife", "safe", "adventure"] },
  "Burundi": { name: "Burundi", region: "East Africa", icon: "fa-solid fa-drum", cost: "$500 – $1,000/mo", wlb: "4.5 / 10", safety: "3.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["culture", "nature", "regional", "adventure"] },
  "Cabo Verde": { name: "Cabo Verde", region: "West Africa", icon: "fa-solid fa-music", cost: "$800 – $1,500/mo", wlb: "6.0 / 10", safety: "7.0 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 2 }, tags: ["island", "coastal", "warm", "music"] },
  "Central African Republic": { name: "Central African Republic", region: "Central Africa", icon: "fa-solid fa-globe-asia", cost: "$500 – $1,000/mo", wlb: "3.5 / 10", safety: "2.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 }, tags: ["nature", "regional", "adventure", "wildlife"] },
  "Comoros": { name: "Comoros", region: "East Africa", icon: "fa-solid fa-umbrella-beach", cost: "$600 – $1,100/mo", wlb: "4.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["island", "tropical", "quiet", "nature"] },
  "Republic of the Congo": { name: "Republic of the Congo", region: "Central Africa", icon: "fa-solid fa-globe-asia", cost: "$700 – $1,300/mo", wlb: "5.0 / 10", safety: "4.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["nature", "culture", "regional", "wildlife"] },
  "Djibouti": { name: "Djibouti", region: "East Africa", icon: "fa-solid fa-anchor", cost: "$1,000 – $1,800/mo", wlb: "5.0 / 10", safety: "5.5 / 10", dimensions: { costIndex: 3, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 3 }, tags: ["desert", "coastal", "adventure", "warm"] },
  "Equatorial Guinea": { name: "Equatorial Guinea", region: "Central Africa", icon: "fa-solid fa-globe-asia", cost: "$1,000 – $1,900/mo", wlb: "5.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 3 }, tags: ["island", "tropical", "regional", "nature"] },
  "Eritrea": { name: "Eritrea", region: "East Africa", icon: "fa-solid fa-archway", cost: "$500 – $1,000/mo", wlb: "4.0 / 10", safety: "4.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 }, tags: ["history", "coastal", "culture", "regional"] },
  "Eswatini": { name: "Eswatini", region: "Southern Africa", icon: "fa-solid fa-crown", cost: "$600 – $1,200/mo", wlb: "5.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["culture", "mountains", "nature", "regional"] },
  "Gabon": { name: "Gabon", region: "Central Africa", icon: "fa-solid fa-tree", cost: "$900 – $1,600/mo", wlb: "5.5 / 10", safety: "5.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 2 }, tags: ["nature", "wildlife", "coastal", "tropical"] },
  "Guinea-Bissau": { name: "Guinea-Bissau", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$500 – $1,000/mo", wlb: "4.0 / 10", safety: "4.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'cultural-tradition', foreignerOpenness: 2, paceScore: 2 }, tags: ["island", "culture", "nature", "regional"] },
  "Lesotho": { name: "Lesotho", region: "Southern Africa", icon: "fa-solid fa-mountain", cost: "$600 – $1,100/mo", wlb: "5.0 / 10", safety: "4.5 / 10", dimensions: { costIndex: 1, climate: 'cold-winter', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["mountains", "adventure", "cold", "nature"] },
  "Liberia": { name: "Liberia", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,200/mo", wlb: "4.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["coastal", "culture", "nature", "regional"] },
  "Mali": { name: "Mali", region: "West Africa", icon: "fa-solid fa-mosque", cost: "$500 – $1,000/mo", wlb: "4.0 / 10", safety: "2.5 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["history", "music", "desert", "culture"] },
  "Mauritania": { name: "Mauritania", region: "West Africa", icon: "fa-solid fa-train", cost: "$500 – $1,000/mo", wlb: "4.5 / 10", safety: "5.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["desert", "history", "adventure", "culture"] },
  "Namibia": { name: "Namibia", region: "Southern Africa", icon: "fa-solid fa-sun", cost: "$900 – $1,600/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, tags: ["desert", "nature", "wildlife", "adventure"] },
  "Niger": { name: "Niger", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$500 – $900/mo", wlb: "3.5 / 10", safety: "2.0 / 10", dimensions: { costIndex: 1, climate: 'warm-sun', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 1, paceScore: 2 }, tags: ["desert", "history", "regional", "adventure"] },
  "Sao Tome and Principe": { name: "São Tomé and Principe", region: "Central Africa", icon: "fa-solid fa-cookie-bite", cost: "$700 – $1,300/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 1 }, tags: ["island", "tropical", "nature", "quiet"] },
  "Seychelles": { name: "Seychelles", region: "East Africa", icon: "fa-solid fa-seedling", cost: "$1,400 – $2,400/mo", wlb: "6.5 / 10", safety: "7.5 / 10", dimensions: { costIndex: 4, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 3, religionRole: 'cultural-tradition', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "coastal", "tropical", "nature", "foodie"] },
  "Sierra Leone": { name: "Sierra Leone", region: "West Africa", icon: "fa-solid fa-globe-asia", cost: "$600 – $1,100/mo", wlb: "4.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["coastal", "culture", "nature", "regional"] },
  "Zambia": { name: "Zambia", region: "Southern Africa", icon: "fa-solid fa-binoculars", cost: "$600 – $1,200/mo", wlb: "5.5 / 10", safety: "5.5 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["nature", "wildlife", "adventure", "affordable"] },

  // AMERICAS & CARIBBEAN — REMAINING
  "Antigua and Barbuda": { name: "Antigua and Barbuda", region: "Caribbean", icon: "fa-solid fa-sailboat", cost: "$1,100 – $2,000/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "coastal", "warm", "safe"] },
  "Bahamas": { name: "Bahamas", region: "Caribbean", icon: "fa-solid fa-fish", cost: "$1,300 – $2,300/mo", wlb: "6.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 3 }, tags: ["island", "coastal", "warm", "english-friendly"] },
  "Barbados": { name: "Barbados", region: "Caribbean", icon: "fa-solid fa-plate-wheat", cost: "$1,300 – $2,200/mo", wlb: "6.5 / 10", safety: "7.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 3, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 3 }, tags: ["island", "coastal", "warm", "english-friendly"] },
  "Belize": { name: "Belize", region: "Central America", icon: "fa-solid fa-compass", cost: "$900 – $1,700/mo", wlb: "6.0 / 10", safety: "5.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'cultural-tradition', foreignerOpenness: 4, paceScore: 2 }, tags: ["coastal", "nature", "island", "warm"] },
  "Dominica": { name: "Dominica", region: "Caribbean", icon: "fa-solid fa-tree", cost: "$900 – $1,600/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "nature", "hiking", "tropical"] },
  "Grenada": { name: "Grenada", region: "Caribbean", icon: "fa-solid fa-mortar-pestle", cost: "$1,000 – $1,800/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "coastal", "warm", "nature", "foodie"] },
  "Jamaica": { name: "Jamaica", region: "Caribbean", icon: "fa-solid fa-music", cost: "$800 – $1,600/mo", wlb: "5.5 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 3 }, tags: ["music", "culture", "food", "coastal", "foodie"] },
  "Saint Kitts and Nevis": { name: "Saint Kitts and Nevis", region: "Caribbean", icon: "fa-solid fa-globe-asia", cost: "$1,000 – $1,900/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "coastal", "warm", "quiet"] },
  "Saint Lucia": { name: "Saint Lucia", region: "Caribbean", icon: "fa-solid fa-mountain", cost: "$1,100 – $2,000/mo", wlb: "6.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 4, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "nature", "coastal", "warm"] },
  "Saint Vincent and the Grenadines": { name: "Saint Vincent and the Grenadines", region: "Caribbean", icon: "fa-solid fa-ferry", cost: "$1,000 – $1,800/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "coastal", "warm", "sailing"] },

  // OCEANIA — REMAINING
  "Fiji": { name: "Fiji", region: "Oceania", icon: "fa-solid fa-umbrella-beach", cost: "$800 – $1,600/mo", wlb: "6.0 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'mixed-transit', convenienceScore: 2, weekendRhythm: 'standard', natureScore: 5, lgbtqTier: 2, religionRole: 'prominent', foreignerOpenness: 4, paceScore: 2 }, tags: ["island", "coastal", "tropical", "nature"] },
  "Kiribati": { name: "Kiribati", region: "Oceania", icon: "fa-solid fa-water", cost: "$700 – $1,300/mo", wlb: "5.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 1, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 1 }, tags: ["island", "tropical", "remote", "quiet"] },
  "Marshall Islands": { name: "Marshall Islands", region: "Oceania", icon: "fa-solid fa-anchor", cost: "$1,000 – $1,700/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "tropical", "remote", "diving"] },
  "Micronesia": { name: "Micronesia", region: "Oceania", icon: "fa-solid fa-globe-asia", cost: "$900 – $1,600/mo", wlb: "5.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "tropical", "remote", "diving"] },
  "Nauru": { name: "Nauru", region: "Oceania", icon: "fa-solid fa-gem", cost: "$900 – $1,500/mo", wlb: "5.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 2, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["island", "remote", "tropical", "quiet"] },
  "Palau": { name: "Palau", region: "Oceania", icon: "fa-solid fa-fish", cost: "$1,100 – $1,900/mo", wlb: "5.5 / 10", safety: "7.0 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "nature", "diving", "remote"] },
  "Papua New Guinea": { name: "Papua New Guinea", region: "Oceania", icon: "fa-solid fa-feather", cost: "$900 – $1,700/mo", wlb: "4.5 / 10", safety: "3.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["nature", "adventure", "culture", "remote"] },
  "Samoa": { name: "Samoa", region: "Oceania", icon: "fa-solid fa-leaf", cost: "$800 – $1,400/mo", wlb: "5.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "tropical", "quiet", "culture"] },
  "Solomon Islands": { name: "Solomon Islands", region: "Oceania", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,500/mo", wlb: "5.0 / 10", safety: "4.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 2, paceScore: 2 }, tags: ["island", "nature", "tropical", "remote"] },
  "Tonga": { name: "Tonga", region: "Oceania", icon: "fa-solid fa-crown", cost: "$800 – $1,500/mo", wlb: "5.5 / 10", safety: "6.5 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 4, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "tropical", "quiet", "culture"] },
  "Tuvalu": { name: "Tuvalu", region: "Oceania", icon: "fa-solid fa-globe-asia", cost: "$800 – $1,400/mo", wlb: "5.0 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 1, weekendRhythm: 'quiet-sunday', natureScore: 3, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 1 }, tags: ["island", "remote", "tropical", "quiet"] },
  "Vanuatu": { name: "Vanuatu", region: "Oceania", icon: "fa-solid fa-volcano", cost: "$900 – $1,700/mo", wlb: "5.5 / 10", safety: "6.0 / 10", dimensions: { costIndex: 2, climate: 'tropical', transit: 'car-dependent', convenienceScore: 2, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 1, religionRole: 'prominent', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "nature", "diving", "adventure"] },
  "New Caledonia": { name: "New Caledonia", region: "Oceania", icon: "fa-solid fa-water", cost: "$2,000 – $3,200/mo", wlb: "7.8 / 10", safety: "6.8 / 10", dimensions: { costIndex: 3, climate: 'tropical', transit: 'car-dependent', convenienceScore: 3, weekendRhythm: 'quiet-sunday', natureScore: 5, lgbtqTier: 4, religionRole: 'moderate', foreignerOpenness: 3, paceScore: 2 }, tags: ["island", "lagoon", "france", "tropical", "snorkeling"] },
};

/**
 * Returns a complete CountryData object for any country on Earth.
 */
export function getCompleteCountryProfile(
  name: string,
  fallbackRegion: string = "Europe",
  centroid: [number, number] = [0, 0],
  locale: string = 'en',
): CountryData {
  // Single translation seam (docs/i18n-plan.md §3.3): prose for the requested
  // locale when loaded, with the English record kept alongside so any not-yet-
  // translated country/field silently falls back per string.
  const registry = getContentRegistry();
  const content = registry.en[name];
  const localized = locale !== 'en' ? registry[locale]?.[name] : undefined;
  const warmthEntry = COUNTRY_SOCIAL_WARMTH[name];
  // Relocation-note localization (Phase 3): per-field overlay of localized
  // notes over the English sources; undefined for en.
  const notesVi = locale !== 'en' ? getLocalizedPracticalNotes(locale) : undefined;
  const socialNotesVi = locale !== 'en' ? getLocalizedSocialWarmthNotes(locale) : undefined;

  // 1. If curated in Tier 1 database, return assembled profile
  if (COUNTRY_DATABASE[name]) {
    const meta = COUNTRY_DATABASE[name];
    return {
      id: meta.id,
      name: meta.name,
      icon: meta.icon,
      region: meta.region,
      tagline: localized?.tagline ?? content?.tagline ?? "",
      cost: meta.cost,
      wlb: meta.wlb,
      safety: meta.safety,
      culture: localized?.culture ?? content?.culture ?? "",
      people: localized?.people ?? content?.people ?? "",
      costOfLiving: localized?.costOfLiving ?? content?.costOfLiving ?? "",
      workday: localized?.workday ?? content?.workday ?? "",
      evening: localized?.evening ?? content?.evening ?? "",
      upsides: localized?.upsides ?? content?.upsides ?? [ "", "", "" ],
      downsides: localized?.downsides ?? content?.downsides ?? [ "", "", "" ],
      tags: meta.tags,
      dimensions: meta.dimensions,
      climateProfile: COUNTRY_CLIMATE_PROFILES[name] ?? estimateClimateProfile(meta.dimensions.climate),
      socialWarmth: warmthEntry?.warmth ?? estimateSocialWarmth(meta.region),
      socialWarmthNote: socialNotesVi?.[name]?.newcomerNote ?? warmthEntry?.newcomerNote,
      practical: {
        continent: continentFromRegion(meta.region),
        timezoneRegion: timezoneFromRegion(meta.region),
        ...PRACTICAL_FACTORS[name],
        ...notesVi?.[name],
      },
      realityCheck: localized?.realityCheck ?? content?.realityCheck ?? "",
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
      tagline: localized?.tagline ?? content?.tagline ?? `Everyday rhythms, local traditions, and real-world living insights in ${meta.name}.`,
      cost: meta.cost,
      wlb: meta.wlb,
      safety: meta.safety,
      culture: localized?.culture ?? content?.culture ?? `Living in ${meta.name} offers immersion into ${meta.region}'s rich social traditions.`,
      people: localized?.people ?? content?.people ?? `Residents of ${meta.name} value community, local hospitality, and pride in their cultural heritage.`,
      costOfLiving: localized?.costOfLiving ?? content?.costOfLiving ?? `In ${meta.name}, everyday living averages ${meta.cost}, with local dining, transport, and amenities offering good lifestyle balance.`,
      workday: localized?.workday ?? content?.workday ?? `A typical workday in ${meta.name} reflects regional commercial rhythms, balanced by family and social priorities.`,
      evening: localized?.evening ?? content?.evening ?? `Evenings in ${meta.name} bring people together at local gathering spots, markets, and neighborhood eateries.`,
      upsides: localized?.upsides ?? content?.upsides ?? [
        `Authentic cultural immersion in ${meta.region}.`,
        `Balanced quality of life with accessible daily amenities.`,
        `Direct access to regional nature and distinctive landscapes.`
      ],
      downsides: localized?.downsides ?? content?.downsides ?? [
        localized?.realityCheck ?? content?.realityCheck ?? `Language immersion is beneficial for deeper integration.`,
        `Language immersion is beneficial for deeper integration.`,
        `Administrative processes require patience and local guidance.`
      ],
      tags: meta.tags,
      dimensions: meta.dimensions,
      climateProfile: COUNTRY_CLIMATE_PROFILES[name] ?? estimateClimateProfile(meta.dimensions.climate),
      socialWarmth: warmthEntry?.warmth ?? estimateSocialWarmth(meta.region),
      socialWarmthNote: socialNotesVi?.[name]?.newcomerNote ?? warmthEntry?.newcomerNote,
      practical: { continent: continentFromRegion(meta.region), timezoneRegion: timezoneFromRegion(meta.region), ...PRACTICAL_FACTORS[name], ...notesVi?.[name] },
      realityCheck: localized?.realityCheck ?? content?.realityCheck ?? `Language immersion is beneficial for deeper integration.`
    };
  }

  // 3. Fallback: Algorithmic derivation based on region and latitude
  // Regional templates localize per locale (Phase 2); English stays the
  // static fallback and the vi scaffolds mirror the inline English ones.
  const templates = getRegionalTemplateRegistry()[locale];
  const fb = locale !== 'en' ? getRegionalFallbackSentences(locale) : undefined;
  const tpl = templates?.[fallbackRegion] ?? templates?.['Europe'] ?? REGIONAL_TEMPLATES[fallbackRegion] ?? REGIONAL_TEMPLATES["Europe"];
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
    tagline: localized?.tagline ?? content?.tagline ?? (fb ? fb.tagline(name) : `Everyday rhythms, local traditions, and real-world living insights in ${name}.`),
    cost: tpl.cost,
    wlb: tpl.wlb,
    safety: tpl.safety,
    culture: localized?.culture ?? content?.culture ?? (fb ? fb.culture(name, fallbackRegion, tpl.culture) : `Living in ${name} offers an authentic immersion into ${fallbackRegion}'s cultural fabric. ${tpl.culture}`),
    people: localized?.people ?? content?.people ?? (fb ? fb.people(name, tpl.people) : `Residents of ${name} take strong pride in their heritage and local hospitality. ${tpl.people}`),
    costOfLiving: localized?.costOfLiving ?? content?.costOfLiving ?? (fb ? fb.costOfLiving(name, tpl.cost, tpl.costOfLiving) : `In ${name}, day-to-day affordability averages ${tpl.cost}. ${tpl.costOfLiving}`),
    workday: localized?.workday ?? content?.workday
      ?? (fb ? fb.workday(name, tpl.workday) : `A typical weekday in ${name} blends local business customs with modern routines. ${tpl.workday}`),
    evening: localized?.evening ?? content?.evening
      ?? (fb ? fb.evening(name, tpl.evening) : `When the workday winds down in ${name}, locals head out to neighborhood gathering spots. ${tpl.evening}`),
    upsides: localized?.upsides ?? content?.upsides ?? tpl.upsides,
    downsides: localized?.downsides ?? content?.downsides ?? tpl.downsides,
    tags: [fallbackRegion.toLowerCase(), estClimate],
    dimensions: {
      ...tpl.dimensions,
      climate: estClimate
    },
    climateProfile: estimatedWeather,
    socialWarmth: COUNTRY_SOCIAL_WARMTH[name]?.warmth ?? estimateSocialWarmth(fallbackRegion),
    socialWarmthNote: socialNotesVi?.[name]?.newcomerNote ?? COUNTRY_SOCIAL_WARMTH[name]?.newcomerNote,
    practical: { continent: continentFromRegion(fallbackRegion), timezoneRegion: timezoneFromRegion(fallbackRegion) },
    realityCheck: localized?.realityCheck ?? content?.realityCheck ?? tpl.realityCheck
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
export function getAllGlobalCountries(locale: string = 'en'): CountryData[] {
  const map = new Map<string, CountryData>();

  // Insert Tier 1
  for (const name of Object.keys(COUNTRY_DATABASE)) {
    map.set(name, getCompleteCountryProfile(name, 'Europe', [0, 0], locale));
  }

  // Insert Tier 2
  for (const [name, meta] of Object.entries(GLOBAL_COUNTRY_METADATA)) {
    if (!map.has(name)) {
      map.set(name, getCompleteCountryProfile(name, meta.region, [0, 0], locale));
    }
  }

  return Array.from(map.values());
}

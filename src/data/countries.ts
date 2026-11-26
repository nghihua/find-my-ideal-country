export interface Video {
  title: string;
  channel: string;
  duration: string;
  url: string;
}

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
  videos: Video[];
  tags: string[];
  dimensions: LifestyleDimensions;
  climateProfile?: CountryClimateProfile;
  practical?: PracticalFactors;
  realityCheck: string;
  highlights?: string[];
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

export const COUNTRY_DATABASE: Record<string, CountryData> = {
  "Japan": {
    id: "392",
    name: "Japan",
    icon: "fa-solid fa-torii-gate",
    region: "East Asia",
    tagline: "Hyper-efficient, profoundly polite, quietly comforting—with an unspoken social rulebook.",
    cost: "$1,600 – $2,400/mo",
    wlb: "6.5 / 10",
    safety: "9.8 / 10",
    culture: "Built on 'wa' (social harmony), deep respect for craft, seasonality, and public consideration. While traditions like tea ceremonies and neighborhood matsuri festivals thrive, daily modern life is sleek, punctual, and deeply rooted in mutual non-interference.",
    people: "Polite, reserved, and extraordinarily helpful when approached, though forming deep personal friendships as an outsider takes patience and language effort. Locals value humility, punctuality, and reading the air ('kuuki wo yomu').",
    costOfLiving: "Surprisingly affordable outside central Tokyo luxury wards. A great bowl of ramen is $6–$8, rent for a modern 1K apartment in Tokyo or Osaka runs $650–$1,100, and national health insurance is inexpensive and comprehensive. Imported fruits and domestic highway tolls are pricey.",
    workday: "Starts with ultra-punctual trains where commuters nap or read quietly. Traditional corporate culture still features long hours and 'nomikai' (after-work drinks), though tech startups and remote roles are rapidly modernizing. Lunch breaks are sacred—convenience store ('konbini') bento boxes or quick teishoku set meals dominate.",
    evening: "Safe at 3 AM anywhere. Evenings involve grabbing yakitori and highballs under glowing lanterns in narrow alleys (yokocho), soaking in a local neighborhood sento (bathhouse), or unwinding at home after a stop at 7-Eleven for fresh snacks.",
    upsides: [
      "Unmatched public safety, cleanliness, and world-best public transit.",
      "Incredible food quality at every price point—from $5 convenience meals to Michelin dining.",
      "Distinct four seasons with stunning nature easily accessible by train."
    ],
    downsides: [
      "Rigid bureaucracy—fax machines, physical stamps (hanko), and slow banking processes still exist.",
      "Language barrier outside major tourist hubs; English proficiency is generally low.",
      "Social isolation is common for expats who don't speak conversational Japanese."
    ],
    videos: [
      { title: "What Living in Tokyo is Actually Like (Honest Pros & Cons)", channel: "Abroad in Japan", duration: "18:42", url: "https://en.wikipedia.org/wiki/Japan" },
      { title: "A Realistic Day in the Life in Osaka, Japan", channel: "Life Where I'm From", duration: "14:15", url: "https://en.wikipedia.org/wiki/Japan" }
    ],
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
    realityCheck: "Rigid administrative bureaucracy (hanko stamps and in-person paperwork), a steep language barrier outside major hubs, and intense unspoken social etiquettes."
  },
  "Vietnam": {
    id: "704",
    name: "Vietnam",
    icon: "fa-solid fa-mug-hot",
    region: "Southeast Asia",
    tagline: "Electric street-level energy, legendary coffee culture, and warm, entrepreneurial hustle.",
    cost: "$850 – $1,400/mo",
    wlb: "7.8 / 10",
    safety: "8.5 / 10",
    culture: "A dynamic blend of Confucian family values, French colonial architecture, and rapid modern optimism. Life happens outdoors on sidewalks—from morning tai chi in parks to plastic-stool street food feasts.",
    people: "Warm, curious, resilient, and famously hospitable. Locals are entrepreneurial and family-oriented, often eager to practice English or invite newcomers to share food and iced tea (trà đá).",
    costOfLiving: "One of the highest value-for-money lifestyles on Earth. A modern high-rise apartment with a pool in Ho Chi Minh City or Da Nang costs $450–$750/mo. Street meals like Phở or Bánh Mì cost $1.50–$3, and Grab rides across town are $2.",
    workday: "Starts early (7:30–8:00 AM) to beat the tropical heat, fueled by strong Vietnamese iced milk coffee (Cà phê sữa đá). Many offices and shops still observe a midday lunch and nap break between 12:00 PM and 1:30 PM.",
    evening: "As temperatures drop, cities come alive. Families ride motorbikes along riverfronts, young people pack aesthetic specialty cafes until 11 PM, and friends gather at lively 'nhậu' street eateries for grilled seafood and cold beer.",
    upsides: [
      "Extraordinary affordability allowing a high standard of living and dining out daily.",
      "World-class culinary scene and unmatched cafe culture.",
      "Fast-growing economy with huge energy and friendly locals."
    ],
    downsides: [
      "Chaotic motorbike traffic and loud noise levels in major cities.",
      "Seasonal air pollution in Hanoi and tropical humidity/rainy seasons.",
      "Bureaucracy for long-term visas requires periodic planning or sponsorships."
    ],
    videos: [
      { title: "Living in Ho Chi Minh City — Honest Expat Experience", channel: "Max McFarlin", duration: "16:20", url: "https://en.wikipedia.org/wiki/Vietnam" },
      { title: "Why Da Nang is Becoming Asia's Best Coastal City", channel: "Nomad Capitalist", duration: "12:50", url: "https://en.wikipedia.org/wiki/Vietnam" }
    ],
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
    realityCheck: "Chaotic motorbike traffic and horn noise, seasonal tropical humidity/air quality dips in big cities, and evolving visa policies."
  },
  "Portugal": {
    id: "620",
    name: "Portugal",
    icon: "fa-solid fa-umbrella-beach",
    region: "Southern Europe",
    tagline: "Sun-drenched Atlantic coastlines, gentle social warmth, and Europe's most relaxed daily pace.",
    cost: "$1,600 – $2,300/mo",
    wlb: "8.8 / 10",
    safety: "9.3 / 10",
    culture: "Anchored by 'saudade' (poetic nostalgia), coastal fishing heritage, and café terraces filled with espresso (bica) and pastéis de nata. Life moves at an unhurried, human pace where lunch breaks are genuinely respected.",
    people: "Unusually welcoming, soft-spoken, and humble. English proficiency is among the highest in Southern Europe, and locals treat respectful visitors with patience and genuine warmth.",
    costOfLiving: "Moderate compared to Western Europe, though Lisbon and Porto rents have surged. Smaller coastal towns like Nazaré, Ericeira, or Silver Coast remain high-value, with fresh seafood meals costing $10–$14 and local wine under $4.",
    workday: "Starts calmly between 9:00 and 9:30 AM. Afternoons include a 1–2 hour lunch break often taken outside with colleagues. The hustle mentality is culturally frowned upon in favor of steady consistency.",
    evening: "Locals gather at neighborhood 'miradouros' (viewpoint plazas) with cold beers to watch the sunset over the ocean, followed by grilled sardines, caldo verde, and conversation lingering until midnight.",
    upsides: [
      "Over 300 days of sunshine per year and world-class surfing coastlines.",
      "Ranked among the top 5 safest countries on Earth.",
      "High English fluency and very expat-friendly social environment."
    ],
    downsides: [
      "Extremely slow government bureaucracy (SEF/AIMA residency appointments).",
      "Older European apartments often lack central heating or insulation for winter dampness.",
      "Local salaries are low relative to rising housing costs in central Lisbon."
    ],
    videos: [
      { title: "The Truth About Living in Portugal in 2024", channel: "Our Rich Journey", duration: "19:10", url: "https://en.wikipedia.org/wiki/Portugal" },
      { title: "Cost of Living in Lisbon, Portugal (Honest Reality)", channel: "Expats Everywhere", duration: "13:40", url: "https://en.wikipedia.org/wiki/Portugal" }
    ],
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
    realityCheck: "Government administrative processes (AIMA immigration, utilities, banking) can be painstakingly slow, and older apartments lack central heating for damp winters."
  },
  "Netherlands": {
    id: "528",
    name: "Netherlands",
    icon: "fa-solid fa-bicycle",
    region: "Western Europe",
    tagline: "Egalitarian, bike-powered, direct, and masterfully engineered for balanced human living.",
    cost: "$2,400 – $3,600/mo",
    wlb: "9.4 / 10",
    safety: "9.1 / 10",
    culture: "Guided by 'gezelligheid' (cozy conviviality), egalitarian flat hierarchies, and pragmatic consensus ('polder model'). Public infrastructure is prioritized for bicycles and pedestrians over cars.",
    people: "Direct, articulate, and fiercely egalitarian. Dutch honesty is not rude—it is considered respectful not to waste anyone's time. Virtually everyone speaks fluent English.",
    costOfLiving: "High, driven primarily by acute housing shortages in the Randstad (Amsterdam, Utrecht, Rotterdam). However, you never need to own a car, public healthcare is top-tier, and fresh groceries at Albert Heijn are reasonably priced.",
    workday: "The gold standard of work-life balance. Over 50% of the working population works part-time (32–36 hours/week). Leaving at 5:00 PM sharp is the norm.",
    evening: "Streets fill with cyclists ringing bells heading home. Evenings are spent sharing 'borrel' (beers, bitterballen, and cheese) at brown cafes, canal-side picnics in summer, or cozy dinner at home.",
    upsides: [
      "Best cycling and urban design infrastructure in the entire world.",
      "Unmatched work-life balance with legally protected flexible hours.",
      "Near-universal English fluency makes initial relocation seamless."
    ],
    downsides: [
      "Severe national housing crisis with fierce competition for rentals.",
      "Grey, rainy, and windy weather for roughly 5 months of the year.",
      "Dutch directness can feel blunt to newcomers."
    ],
    videos: [
      { title: "Why Dutch Work-Life Balance is the Best in the World", channel: "Not Just Bikes", duration: "15:30", url: "https://en.wikipedia.org/wiki/Netherlands" },
      { title: "Cost of Living in Amsterdam: Realistic Budget", channel: "Dutchified", duration: "11:55", url: "https://en.wikipedia.org/wiki/Netherlands" }
    ],
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
    realityCheck: "Severe nationwide housing shortage making finding rentals intensely competitive, combined with grey, windy winter weather."
  },
  "Mexico": {
    id: "484",
    name: "Mexico",
    icon: "fa-solid fa-pepper-hot",
    region: "North America",
    tagline: "Vibrant color, immense warmth, world-heritage culinary mastery, and relentless joie de vivre.",
    cost: "$1,100 – $1,900/mo",
    wlb: "8.0 / 10",
    safety: "6.8 / 10",
    culture: "An intoxicating blend of ancient Mesoamerican civilizations and Spanish baroque heritage. Family, art, music (mariachi, son jarocho), and celebrations are at the core of everyday existence.",
    people: "Warm, expressive, generous, and proud of their rich traditions. Hospitality is a foundational virtue—foreigners are welcomed into conversations and festivities effortlessly.",
    costOfLiving: "Exceptional lifestyle value outside luxury tourist strips. Delicious street tacos are $1–$1.50, vibrant local tianguis produce markets are ultra-cheap, and stylish colonial or modern apartments cost $600–$1,100/mo.",
    workday: "Vibrant and relationship-driven. Working days feature lively mid-morning breakfasts ('desayunos') and late sit-down lunches ('comidas') with colleagues around 2:00–4:00 PM.",
    evening: "Plazas (zocalos) come alive with children playing, couples dancing, street churro vendors, and neighborhood mezcalerias serving craft cocktails late into the night.",
    upsides: [
      "Incredible culture, biodiversity, and UNESCO-recognized cuisine.",
      "High affordability allowing comfortable living and frequent travel.",
      "Year-round pleasant weather in central highlands (spring-like climate)."
    ],
    downsides: [
      "Safety is highly regional and requires neighborhood awareness.",
      "Tap water is not drinkable anywhere in the country.",
      "Administrative bureaucracy can be unpredictable."
    ],
    videos: [
      { title: "Living in Mexico City (CDMX) Honest Pros and Cons", channel: "Tangerine Travels", duration: "17:45", url: "https://en.wikipedia.org/wiki/Mexico" },
      { title: "Realistic Monthly Cost of Living in Mexico", channel: "Kinetic Kennons", duration: "14:20", url: "https://en.wikipedia.org/wiki/Mexico" }
    ],
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
    realityCheck: "Safety varies significantly by neighborhood and region requiring local vigilance, and municipal tap water is not potable."
  },
  "Norway": {
    id: "578",
    name: "Norway",
    icon: "fa-solid fa-mountain",
    region: "Northern Europe",
    tagline: "Dramatic fjords, midnight sun, high-trust social equity, and outdoor devotion.",
    cost: "$2,800 – $4,200/mo",
    wlb: "9.6 / 10",
    safety: "9.7 / 10",
    culture: "Centered on 'friluftsliv' (open-air living) and 'kos' (warm coziness). Nature is not a weekend trip—it is a spiritual right protected by 'allemannsretten' (right to roam anywhere in the wilderness).",
    people: "Egalitarian, humble (rooted in the Jante Law), respectful of privacy, and intensely outdoorsy. While forming initial deep friendships requires joining sports clubs or hobby groups, relationships once made are lifelong.",
    costOfLiving: "Among the highest on Earth. Dining out, alcohol, and fresh groceries command steep prices. However, high wages, free university tuition, and universal social security balance out the cost for residents.",
    workday: "37.5 hours per week with rigid adherence. Leaving the office by 4:00 PM is standard so families can hike, ski, or be together. Trust between managers and employees is near 100%.",
    evening: "In summer, the sun barely sets; people kayak and swim at 10 PM. In winter, evenings turn cozy with wood stoves, wool blankets, candlelit dinners, and cross-country skiing under lit trails.",
    upsides: [
      "Stunning fjords, waterfalls, and access to pristine wilderness.",
      "Unmatched social safety net, gender equality, and high public trust.",
      "Virtually everyone speaks near-native English."
    ],
    downsides: [
      "Very high taxes and expensive daily dining/groceries.",
      "Long, dark, freezing winter months north of the Arctic circle.",
      "Reserved social culture can feel lonely initially for extroverted expats."
    ],
    videos: [
      { title: "The Reality of Living in Norway: Honest Pros & Cons", channel: "Simple Joys", duration: "16:50", url: "https://en.wikipedia.org/wiki/Norway" },
      { title: "Cost of Living in Oslo, Norway: What Things Actually Cost", channel: "Expat in Norway", duration: "12:15", url: "https://en.wikipedia.org/wiki/Norway" }
    ],
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
    realityCheck: "Prohibitive dining and alcohol costs, strict DIY culture with zero cheap service labor, and dark, freezing sub-zero winter months."
  },
  "Spain": {
    id: "724",
    name: "Spain",
    icon: "fa-solid fa-sun",
    region: "Southern Europe",
    tagline: "Late-night plazas, vibrant tapas culture, Mediterranean warmth, and life lived outdoors.",
    cost: "$1,700 – $2,500/mo",
    wlb: "9.0 / 10",
    safety: "9.0 / 10",
    culture: "Passionate, family-centered, and outdoor-oriented. Meal times are social events lasting hours, and public plazas are the living rooms of every town.",
    people: "Vibrant, expressive, and welcoming. Socializing with multi-generational groups is the norm, and life is oriented around friends, food, and festivals.",
    costOfLiving: "Moderate compared to Northern Europe. Excellent regional produce, affordable wine ($3–$6), and inexpensive healthcare make daily life comfortable.",
    workday: "Traditionally structured around a split shift with late lunches (2:00–4:00 PM), though modern corporate offices follow standard 9-to-6 routines with strict disconnect rights.",
    evening: "Starts late—dinner rarely happens before 9:30 or 10:00 PM. Tapas crawl ('tapear') through bustling historic streets, followed by gelato and strolls (el paseo).",
    upsides: [
      "Superb Mediterranean climate with abundant annual sunshine.",
      "World-class public healthcare and safe, walkable historic cities.",
      "Rich cultural tapestry from Andalusia to the Basque Country."
    ],
    downsides: [
      "High local youth unemployment and slow domestic career progression.",
      "Summer heatwaves in Andalusia and Madrid can exceed 40°C (104°F).",
      "Bureaucracy (NIE, padrón) requires patience and Spanish fluency."
    ],
    videos: [
      { title: "Living in Spain: Honest Pros and Cons After 3 Years", channel: "Spain Revealed", duration: "18:05", url: "https://en.wikipedia.org/wiki/Spain" },
      { title: "Cost of Living in Valencia vs Madrid vs Barcelona", channel: "James Blick", duration: "14:50", url: "https://en.wikipedia.org/wiki/Spain" }
    ],
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
    realityCheck: "Stubbornly high domestic unemployment rates for local jobs, extreme summer heatwaves inland, and notoriously slow bureaucratic paperwork."
  },
  "South Korea": {
    id: "410",
    name: "South Korea",
    icon: "fa-solid fa-bolt",
    region: "East Asia",
    tagline: "Hyper-connected, lightning-fast innovation, vibrant night energy, and ancient palace pride.",
    cost: "$1,700 – $2,600/mo",
    wlb: "6.2 / 10",
    safety: "9.5 / 10",
    culture: "Defined by 'Ppalli-ppalli' (hurry, hurry) efficiency, cutting-edge K-culture, and deep Confucian respect for age and education.",
    people: "Hardworking, trend-conscious, and generous once personal rapport is built. Highly civic-minded with extreme respect for public order and safety.",
    costOfLiving: "Moderate. Public transit is cheap, dining out at Korean BBQ and soup joints is affordable, but apartment deposit systems ('jeonse') can be complex.",
    workday: "Dynamic and fast-paced. High-speed fiber internet everywhere, bustling business districts, and team lunch deliveries.",
    evening: "Cities never sleep. Evenings involve Korean fried chicken and beer ('chimaek'), pojangmacha tent street food, PC bangs, coin karaoke (noraebang), and 24/7 cafes.",
    upsides: [
      "Ultra-fast internet, modern transit, and exceptional personal safety.",
      "24/7 convenience with rocket delivery on virtually any product.",
      "Rich history seamlessly coexisting with futuristic technology."
    ],
    downsides: [
      "High-pressure societal expectations and competitive atmosphere.",
      "Extreme seasonal weather swings: hot humid summers, freezing sub-zero winters.",
      "Conservative corporate culture with long working hours in domestic firms."
    ],
    videos: [
      { title: "What Living in Seoul is Actually Like", channel: "Simon and Martina", duration: "16:40", url: "https://en.wikipedia.org/wiki/South_Korea" },
      { title: "Cost of Living in South Korea: Realistic Breakdown", channel: "Korean Englishman", duration: "13:20", url: "https://en.wikipedia.org/wiki/South_Korea" }
    ],
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
    realityCheck: "High-pressure societal conformity expectations, conservative legal attitudes toward LGBTQ+ rights, and intense summer humidity followed by sub-zero winters."
  },
  "Canada": {
    id: "124",
    name: "Canada",
    icon: "fa-solid fa-leaf",
    region: "North America",
    tagline: "Vast pristine wilderness, progressive civic trust, multicultural warmth, and crisp alpine air.",
    cost: "$2,500 – $3,800/mo",
    wlb: "8.5 / 10",
    safety: "9.2 / 10",
    culture: "Polite, multicultural, outdoors-loving, and civic-minded. Canadian mosaic culture celebrates immigrant identities alongside indigenous traditions.",
    people: "Famously friendly, considerate, and helpful. Diversity is embraced as a national strength, especially in major cities.",
    costOfLiving: "High, especially in Vancouver and Toronto housing markets. Groceries, domestic air travel, and cellular plans are costly, balanced by stable public services.",
    workday: "Collaborative and structured around standard 8:30–5:00 hours with growing hybrid remote flexibility. Strong emphasis on employee wellness.",
    evening: "In winter, ice hockey, craft brewery catchups, and cozy home gatherings; in summer, lake cabin trips, patio dining, and hiking until twilight.",
    upsides: [
      "Breathtaking Rocky Mountains, national parks, and endless clean water.",
      "Inclusive, safe, and progressive society welcoming to newcomers.",
      "High quality of public education and universal healthcare."
    ],
    downsides: [
      "Severe winter temperatures (-15°C to -30°C in inland regions) for months.",
      "High housing costs and high income taxation.",
      "Vast distances make domestic travel between provinces expensive."
    ],
    videos: [
      { title: "Living in Canada: Honest Pros & Cons From an Immigrant", channel: "Canada Bound", duration: "17:15", url: "https://en.wikipedia.org/wiki/Canada" },
      { title: "Real Cost of Living in Vancouver vs Toronto", channel: "DownieLive", duration: "15:10", url: "https://en.wikipedia.org/wiki/Canada" }
    ],
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
    realityCheck: "Severe, prolonged winter sub-zero temperatures, intense housing affordability pressures in major cities, and vast car-dependent suburban expanses."
  },
  "Thailand": {
    id: "764",
    name: "Thailand",
    icon: "fa-solid fa-water",
    region: "Southeast Asia",
    tagline: "Golden temples, legendary culinary passion, tropical island bliss, and the Land of Smiles.",
    cost: "$900 – $1,600/mo",
    wlb: "8.2 / 10",
    safety: "8.3 / 10",
    culture: "Guided by 'Sabai-Sabai' (contentment and ease) and 'Sanuk' (fun in daily life). Theravada Buddhism deeply informs respectful social etiquette and temple festivals.",
    people: "Incredibly gracious, smiling, and respectful. Locals go out of their way to make guests feel at home.",
    costOfLiving: "Remarkably high lifestyle value. Pad Thai and Tom Yum at night stalls cost $1.50–$3, high-rise luxury condos with rooftop pools rent for $500–$850/mo.",
    workday: "Begins early before the heat peaks, punctuated by iced Thai milk tea and street food snacks. A relaxed, polite workplace environment.",
    evening: "Street food night markets come alive with aromas of lemongrass and chili, rooftop sky bars buzz with travelers, and beach towns enjoy acoustic fire shows.",
    upsides: [
      "Sensational food culture recognized as one of the best in the world.",
      "Affordable luxury living with high quality private hospitals.",
      "Vibrant expat and digital nomad communities in Bangkok, Chiang Mai, and Phuket."
    ],
    downsides: [
      "Midday tropical heat and humidity can be draining.",
      "Seasonal air pollution (burning season in Chiang Mai/Northern Thailand from Feb–April).",
      "Complicated visa bureaucracy for long-term residency."
    ],
    videos: [
      { title: "Living in Bangkok, Thailand: Full Honest Review", channel: "Retired Working For You", duration: "21:30", url: "https://en.wikipedia.org/wiki/Thailand" },
      { title: "Cost of Living in Chiang Mai vs Bangkok", channel: "CB Media", duration: "14:40", url: "https://en.wikipedia.org/wiki/Thailand" }
    ],
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
    realityCheck: "Intense tropical midday heat and humidity, seasonal agricultural smoke in the north, and complex long-term visa renewals."
  },
  "New Zealand": {
    id: "554",
    name: "New Zealand",
    icon: "fa-solid fa-kiwi-bird",
    region: "Oceania",
    tagline: "Spectacular alpine wilderness, Māori cultural respect, unhurried coastal pace, and pure air.",
    cost: "$2,600 – $3,900/mo",
    wlb: "9.5 / 10",
    safety: "9.6 / 10",
    culture: "Grounded in Māori concept of 'Kaitiakitanga' (guardianship of nature), egalitarian camaraderie, and a DIY 'number 8 wire' ingenuity.",
    people: "Down-to-earth, friendly, and unpretentious. Kiwis value modesty, outdoor adventures, and taking care of their communities.",
    costOfLiving: "High due to island geography and imported goods. Groceries and petrol are pricey, but quality of life and clean environment are peerless.",
    workday: "Prompt 8:30–5:00 day where overtime is discouraged. Colleagues chat over flat whites in the morning and head outdoors straight after work.",
    evening: "Sunset surf sessions, barbecues in backyards, peaceful coastal walks, and dark-sky stargazing.",
    upsides: [
      "Some of the most spectacular, pristine landscapes on Earth.",
      "Top-tier safety, transparent government, and low crime.",
      "High work-life balance and deep outdoor culture."
    ],
    downsides: [
      "Geographic isolation makes international travel long and expensive.",
      "High cost of housing and consumer goods.",
      "Intense UV sun exposure requires daily protection."
    ],
    videos: [
      { title: "Why We Moved to New Zealand (And What We Love)", channel: "Indigo Traveller", duration: "19:00", url: "https://en.wikipedia.org/wiki/New_Zealand" },
      { title: "Cost of Living in New Zealand: Auckland vs Queenstown", channel: "NZ Pocket Guide", duration: "13:45", url: "https://en.wikipedia.org/wiki/New_Zealand" }
    ],
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
    realityCheck: "Extreme geographic isolation making flights back to Europe/Asia costly, heavy car dependency, and strong UV sun exposure."
  },
  "Germany": {
    id: "276",
    name: "Germany",
    icon: "fa-solid fa-beer-mug-empty",
    region: "Central Europe",
    tagline: "Engineered efficiency, vibrant green spaces, sacred work-life balance, and rich history.",
    cost: "$2,000 – $2,900/mo",
    wlb: "9.3 / 10",
    safety: "9.1 / 10",
    culture: "Values reliability, punctuality, and environmental consciousness. Social life flourishes in beer gardens, urban parks, and cultural centers.",
    people: "Direct, orderly, and respectful of public rules. While private initially, Germans form sincere and dependable friendships once trust is established.",
    costOfLiving: "Reasonable compared to London or Paris. Supermarket prices (Aldi, Lidl) are very affordable, public transit is heavily subsidized, and healthcare is comprehensive.",
    workday: "Highly focused and productive. The 35–38 hour workweek is strictly observed, with generous 30 days of paid vacation per year.",
    evening: "Quiet residential evenings, summer evenings lingering in neighborhood beer gardens (Biergarten), and weekend train excursions into forests.",
    upsides: [
      "Extensive public transit and high-speed rail connections across Europe.",
      "Generous worker protections and strict work-life separation.",
      "Lively arts, music, and club culture in cities like Berlin."
    ],
    downsides: [
      "Heavy reliance on paper bureaucracy and slow administrative digitisation.",
      "Strict Sunday shop closures (stores and supermarkets shut completely).",
      "Learning German is required for deep social and career integration."
    ],
    videos: [
      { title: "The Truth About Living in Germany as an Expat", channel: "Wanted Adventure", duration: "16:15", url: "https://en.wikipedia.org/wiki/Germany" },
      { title: "Cost of Living in Berlin: Real Monthly Budget", channel: "Simple Germany", duration: "12:50", url: "https://en.wikipedia.org/wiki/Germany" }
    ],
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
    realityCheck: "Strict Sunday store closures (supermarkets completely shut), cumbersome physical paper bureaucracy (Anmeldung), and high DIY culture with costly domestic services."
  },
  "Italy": {
    id: "380",
    name: "Italy",
    icon: "fa-solid fa-pizza-slice",
    region: "Southern Europe",
    tagline: "Living art, gastronomic devotion, historic piazzas, and the timeless art of dolce far niente.",
    cost: "$1,800 – $2,700/mo",
    wlb: "8.7 / 10",
    safety: "8.9 / 10",
    culture: "Deeply historical, passionate, and family-oriented. Daily life revolves around food quality, local markets, architectural beauty, and savoring the present moment.",
    people: "Warm, animated, expressive, and deeply proud of their hometowns (campanilismo). Conversation and connection come alive over coffee and wine.",
    costOfLiving: "Moderate. Fresh market ingredients, espresso ($1.20), and local dining are remarkably affordable outside prime tourist alleys.",
    workday: "Begins with a quick espresso at the local bar. Workdays blend professional pride with social connection, with proper lunch pauses.",
    evening: "Aperitivo hour from 6:30 PM with spritz and snacks, followed by evening strolls (passeggiata) through cobblestone streets and dinner at 8:30–9:30 PM.",
    upsides: [
      "Incomparable cultural heritage, museums, and historical beauty.",
      "World-standard food culture with obsession over fresh ingredients.",
      "Diverse landscapes from the Dolomites to the Amalfi Coast."
    ],
    downsides: [
      "Bureaucracy is notoriously slow and convoluted.",
      "Job opportunities and local salaries in the south are limited.",
      "Public transit outside major rail corridors can be irregular."
    ],
    videos: [
      { title: "Living in Italy: The Honest Pros and Cons", channel: "Kacie Rose", duration: "15:20", url: "https://en.wikipedia.org/wiki/Italy" },
      { title: "Cost of Living in Italy: Rome vs Florence vs Rural", channel: "Italy Made Easy", duration: "14:10", url: "https://en.wikipedia.org/wiki/Italy" }
    ],
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
    realityCheck: "Convoluted and notoriously slow public administration, limited local career mobility outside multinational hubs, and language barrier outside cities."
  },
  "France": {
    id: "250",
    name: "France",
    icon: "fa-solid fa-wine-glass",
    region: "Western Europe",
    tagline: "Culinary heritage, literary cafés, 35-hour workweeks, and fierce devotion to the art of living.",
    cost: "$2,200 – $3,400/mo",
    wlb: "9.2 / 10",
    safety: "8.7 / 10",
    culture: "Celebrates 'l'art de vivre'—the pleasure of literature, wine, intellectual debate, and gastronomy. Strong civic pride in social safety nets and cultural funding.",
    people: "Cultured, articulate, and respectful. Politeness formulas (always saying 'Bonjour madame/monsieur') are crucial social gatekeepers.",
    costOfLiving: "Moderate in regional cities (Lyon, Bordeaux, Montpellier) to very high in central Paris. Outstanding public transit and subsidized cultural events.",
    workday: "Protected by strict 35-hour week legislation. Two-hour lunch breaks with hot meals are culturally respected.",
    evening: "Terrace bistros filled with wine and charcuterie boards, strolls along riverbanks, and vibrant theater and cinema scenes.",
    upsides: [
      "Extraordinary food, wine, bakeries, and cheese culture.",
      "High-speed TGV rail network connecting cities effortlessly.",
      "Generous annual leave (5 weeks minimum) and labor protections."
    ],
    downsides: [
      "French language fluency is non-negotiable for real integration.",
      "Frequent labor strikes affecting public transportation.",
      "Complex tax system and administrative paperwork."
    ],
    videos: [
      { title: "What Living in France is Really Like", channel: "Not Even French", duration: "17:40", url: "https://en.wikipedia.org/wiki/France" }
    ],
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
    realityCheck: "French fluency is strictly necessary for daily life and administration, and recurring transit/labor strikes can disrupt routines."
  },
  "United Kingdom": {
    id: "826",
    name: "United Kingdom",
    icon: "fa-solid fa-landmark",
    region: "Western Europe",
    tagline: "Cozy pub culture, historic countryside, razor-sharp wit, and global cosmopolitan energy.",
    cost: "$2,500 – $3,800/mo",
    wlb: "8.4 / 10",
    safety: "8.8 / 10",
    culture: "A rich blend of centuries-old traditions and cutting-edge global arts, comedy, and music. The local pub is the heart of community life.",
    people: "Polite, self-deprecating, and humorous. Queuing etiquette and banter are cultural staples.",
    costOfLiving: "High in London and the Southeast; significantly more affordable in Scotland, Wales, and Northern England.",
    workday: "9 to 5:30 with Friday afternoon pub gatherings being an enduring tradition across all industries.",
    evening: "Meeting friends for pints of ale, cozy curry nights, West End theater, and neighborhood football matches.",
    upsides: [
      "World-capital cultural scene in London with free national museums.",
      "English-speaking environment making day-one communication effortless.",
      "Walkable towns and picturesque countryside walks (public footpaths)."
    ],
    downsides: [
      "Frequent overcast, grey skies and unpredictable drizzle.",
      "High train ticket prices and expensive housing.",
      "Strained public healthcare (NHS waiting times)."
    ],
    videos: [
      { title: "Moving to the UK: Honest Pros and Cons", channel: "Evan Edinger", duration: "19:20", url: "https://en.wikipedia.org/wiki/United_Kingdom" }
    ],
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
    realityCheck: "Persistent grey and overcast weather throughout autumn and winter, high rail and housing costs, and strained public healthcare waiting times."
  },
  "Australia": {
    id: "036",
    name: "Australia",
    icon: "fa-solid fa-kangaroo",
    region: "Oceania",
    tagline: "Golden beaches, outdoor lifestyle, world-leading coffee culture, and easygoing mateship.",
    cost: "$2,700 – $4,000/mo",
    wlb: "9.1 / 10",
    safety: "9.3 / 10",
    culture: "Devoted to the outdoors, surf breaks, and fitness. 'No worries' is not just a catchphrase—it defines the egalitarian social philosophy.",
    people: "Warm, informal, humorous, and straightforward. People judge you on character, not titles or pretension.",
    costOfLiving: "High, particularly in Sydney and Melbourne, but balanced by some of the world's highest minimum and professional wages.",
    workday: "Starts early around 8:00 AM fueled by artisanal flat whites, finishing promptly at 4:30 or 5:00 PM for gym, beach, or park visits.",
    evening: "Sunset coastal walks, barbecues with craft beer, and casual dining in multicultural neighborhoods.",
    upsides: [
      "Sensational beaches, sunshine, and pristine outdoor environment.",
      "High wages and exceptional overall standard of living.",
      "Phenomenal café and specialty coffee culture."
    ],
    downsides: [
      "High cost of housing and consumer goods.",
      "Long flight distances to the rest of the world.",
      "Intense sun and high UV index requiring rigorous protection."
    ],
    videos: [
      { title: "Living in Australia: 10 Things I Wish I Knew", channel: "Greg Snell", duration: "16:00", url: "https://en.wikipedia.org/wiki/Australia" }
    ],
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
    realityCheck: "Vast geographic isolation making international travel costly, high urban housing prices, and strict DIY/high labor rates for home services."
  },
  "Switzerland": {
    id: "756",
    name: "Switzerland",
    icon: "fa-solid fa-mountain-sun",
    region: "Central Europe",
    tagline: "Pristine alpine precision, crystal lakes, spotless public order, and top-tier prosperity.",
    cost: "$3,500 – $5,200/mo",
    wlb: "9.0 / 10",
    safety: "9.9 / 10",
    culture: "Built on direct democracy, neutrality, quiet civic respect, and meticulous craftsmanship. Peace, cleanliness, and punctuality reign supreme.",
    people: "Reserved, courteous, and respectful of public rules. Friendships are built slowly through shared activities like hiking and skiing.",
    costOfLiving: "The highest in Europe. However, Swiss wages are world-leading, income taxes are relatively low, and public infrastructure is immaculate.",
    workday: "40–42 hours with absolute punctuality. Commutes on Swiss Federal Railways (SBB) run with watch-like precision.",
    evening: "Swimming in crystal-clear rivers (like the Aare in Bern) in summer, fondue dinners, and hiking into alpine trails on weekends.",
    upsides: [
      "Highest standard of living, public safety, and infrastructure in Europe.",
      "Magnificent alpine peaks, lakes, and clean mountain air.",
      "Reliable, punctual, and spotless public transit network."
    ],
    downsides: [
      "Extremely expensive daily expenses, dining out, and mandatory health insurance.",
      "Strict social rules and quiet hours (Ruhezeit) enforced by neighbors.",
      "Hard to integrate deeply without German or French language skills."
    ],
    videos: [
      { title: "The Reality of Moving to Switzerland", channel: "How to Switzerland", duration: "15:35", url: "https://en.wikipedia.org/wiki/Switzerland" }
    ],
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
    realityCheck: "Extremely high cost of living (mandatory private health insurance, $30+ casual meals), strict quiet hours (Ruhezeit), and complete Sunday store closures."
  },
  "Costa Rica": {
    id: "188",
    name: "Costa Rica",
    icon: "fa-solid fa-seedling",
    region: "Central America",
    tagline: "Pura Vida living, world-leading biodiversity, cloud forests, and peaceful eco-paradise.",
    cost: "$1,400 – $2,200/mo",
    wlb: "9.2 / 10",
    safety: "8.2 / 10",
    culture: "Defined by 'Pura Vida' (pure life)—a philosophy of gratitude, community, and low stress. The country famously dissolved its military in 1948 to fund healthcare and education.",
    people: "Warm, peace-loving, and environmentally aware. Ticos are gentle and non-confrontational, valuing social harmony.",
    costOfLiving: "Moderate. Higher than neighbouring Central American states due to eco-taxes and stability, but very affordable compared to North America.",
    workday: "Starts early around 7:00 AM with fresh tropical fruit and Gallo Pinto, finishing with daylight for outdoor pursuits.",
    evening: "Watching Pacific ocean sunsets, listening to jungle wildlife, and enjoying community sodas (local family diners).",
    upsides: [
      "Over 25% of the national territory is protected national parks.",
      "Democratic stability and high human development index.",
      "World-class surfing, rainforests, and year-round green environment."
    ],
    downsides: [
      "Potholed roads and slower transportation between regions.",
      "High import duties on electronics and cars.",
      "Rainy season (green season) brings heavy afternoon downpours."
    ],
    videos: [
      { title: "Living in Costa Rica: The Real Truth", channel: "Traveling with Kristin", duration: "16:45", url: "https://en.wikipedia.org/wiki/Costa_Rica" }
    ],
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
    realityCheck: "Slow pace of infrastructure maintenance (potholed rural roads), heavy rainy season downpours, and high import tariffs on electronics."
  },
  "Greece": {
    id: "300",
    name: "Greece",
    icon: "fa-solid fa-landmark-dome",
    region: "Southern Europe",
    tagline: "Turquoise Aegean waters, ancient philosophical roots, Mediterranean diet, and endless blue skies.",
    cost: "$1,300 – $2,000/mo",
    wlb: "8.6 / 10",
    safety: "8.8 / 10",
    culture: "Passionate, philosophical, and intensely social. Life happens in the open air—around taverna tables, seaside promenades, and island squares.",
    people: "Genuinely welcoming and hospitable (Philoxenia). Conversation is animated and emotional, and guests are treated like family.",
    costOfLiving: "One of the most affordable countries in Western/Southern Europe. Fresh olives, feta, seafood, and island rentals offer great value.",
    workday: "Relaxed morning starts, midday break during summer heat, and productive afternoon sessions.",
    evening: "Late dinners at 9:30 PM under bougainvillea vines, savoring grilled octopus, tzatziki, and local wine with live rembetiko music.",
    upsides: [
      "Thousands of stunning islands with crystal-clear Aegean and Ionian waters.",
      "Low cost of living and rich historical heritage.",
      "Warm, sunny Mediterranean climate for over 250 days a year."
    ],
    downsides: [
      "Bureaucracy can be chaotic and paper-heavy.",
      "Intense summer tourist crowds on popular islands like Santorini and Mykonos.",
      "Low wages in the domestic economy."
    ],
    videos: [
      { title: "Living in Greece as an Expat: Pros and Cons", channel: "Jordan Simons", duration: "14:15", url: "https://en.wikipedia.org/wiki/Greece" }
    ],
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
    realityCheck: "Slow and complicated governmental bureaucracy, intense summer heat and tourist overcrowding in peak months, and modest domestic wages."
  },
  "Taiwan": {
    id: "158",
    name: "Taiwan",
    icon: "fa-solid fa-mug-saucer",
    region: "East Asia",
    tagline: "World-class night markets, mountain railways, hyper-safe communities, and legendary friendliness.",
    cost: "$1,400 – $2,200/mo",
    wlb: "7.8 / 10",
    safety: "9.7 / 10",
    culture: "A harmonious fusion of traditional Taiwanese, Hakka, indigenous, and Japanese colonial influences. Food, kindness, and civic responsibility are paramount.",
    people: "Widely regarded as some of the friendliest and most helpful people on Earth. Strangers will walk blocks out of their way to give directions.",
    costOfLiving: "Excellent value. High-speed rail is affordable, delicious night market meals cost $3–$6, and public national health insurance (NHI) is world-renowned.",
    workday: "Industrious and tech-focused, balanced by ubiquitous bubble tea and convenience store breaks.",
    evening: "Bustling night markets packed with stinky tofu, scallion pancakes, and fresh fruit, followed by thermal hot springs in Beitou.",
    upsides: [
      "First country in Asia to legalize marriage equality with vibrant Pride.",
      "Exceptionally high public safety and world-best universal healthcare.",
      "Incredible street food and lush mountain nature accessible right from Taipei."
    ],
    downsides: [
      "Humid, muggy summers with seasonal typhoons and earthquakes.",
      "High housing costs in central Taipei compared to local wages.",
      "Complex geopolitical tensions."
    ],
    videos: [
      { title: "What Living in Taiwan is Actually Like", channel: "Pro Walk", duration: "17:30", url: "https://en.wikipedia.org/wiki/Taiwan" }
    ],
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
    realityCheck: "Intense tropical summer humidity with seasonal typhoon risks, older housing stock lacking modern insulation, and complex geopolitical status."
  },
  "Colombia": {
    id: "170",
    name: "Colombia",
    icon: "fa-solid fa-mountain",
    region: "South America",
    tagline: "Eternal spring weather, rhythmic salsa energy, dramatic Andes peaks, and welcoming warmth.",
    cost: "$1,000 – $1,700/mo",
    wlb: "8.1 / 10",
    safety: "6.9 / 10",
    culture: "Vibrant, musical, and expressive. From Caribbean salsa in Cali to Andean coffee culture in the Eje Cafetero, life is lived with rhythm and resilience.",
    people: "Epitome of warmth, politeness, and joy. Colombians are famously conversational and take pride in showcasing their country's transformation.",
    costOfLiving: "Very affordable. Fine dining in Medellín or Bogotá costs a fraction of North American prices, and modern high-rise apartments rent for $500–$800/mo.",
    workday: "Starts early fueled by strong tinto coffee. Warm interpersonal relationships precede business transactions.",
    evening: "Lively salsa clubs, craft coffee shops in El Poblado, and outdoor plazas buzzing with live music and street snacks.",
    upsides: [
      "Medellín offers a year-round temperate 'City of Eternal Spring' climate.",
      "Remarkable affordability and high standard of living for remote earners.",
      "Warm, engaging locals making Spanish immersion effortless."
    ],
    downsides: [
      "Safety requires mindfulness ('no dar papaya'—don't flaunt wealth).",
      "Street noise and pollution in dense urban traffic corridors.",
      "Bureaucratic banking and visa verification processes."
    ],
    videos: [
      { title: "Living in Medellin, Colombia: Honest Pros and Cons", channel: "Nomad Capitalist", duration: "16:20", url: "https://en.wikipedia.org/wiki/Colombia" }
    ],
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
    realityCheck: "Urban safety requires constant street smarts and situational awareness, domestic flights are needed to cross mountain ranges, and traffic congestion is heavy."
  },
  "Indonesia": {
    id: "360",
    name: "Indonesia",
    icon: "fa-solid fa-volcano",
    region: "Southeast Asia",
    tagline: "Volcanic islands, tropical surf breaks, spiritual wellness traditions, and rich island cultures.",
    cost: "$900 – $1,600/mo",
    wlb: "8.4 / 10",
    safety: "8.1 / 10",
    culture: "An archipelago of over 17,000 islands with profound diversity—from Balinese Hindu temple rituals to Javanese arts and coastal seafaring traditions.",
    people: "Gracious, smiling, and community-minded (Gotong Royong). Respect for elders, visitors, and traditions runs deep.",
    costOfLiving: "Very affordable. Private villas with pools in Bali rent for $700–$1,200/mo, local warung meals (Nasi Goreng) cost $1.50–$3.",
    workday: "Relaxed tropical pace, especially in coastal and nomad hubs like Canggu and Ubud, surrounded by lush rice terraces.",
    evening: "Watching fiery Indian Ocean sunsets at beach clubs, fresh seafood beach barbecues, and yoga or acoustic sessions.",
    upsides: [
      "Incredible tropical nature, world-class surfing, and diving spots.",
      "High affordability allowing villa living and personal wellness.",
      "Vibrant global remote worker and wellness community in Bali."
    ],
    downsides: [
      "Heavy motorbike traffic and narrow infrastructure in popular Bali corridors.",
      "Conservative national laws outside Bali.",
      "Variable internet speeds and seasonal tropical monsoon rains."
    ],
    videos: [
      { title: "The Honest Reality of Living in Bali", channel: "Lost LeBlanc", duration: "18:40", url: "https://en.wikipedia.org/wiki/Indonesia" }
    ],
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
    realityCheck: "Motorbike traffic bottlenecks in tourist areas, conservative legal reforms at the national level, and heavy tropical monsoon downpours."
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
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'continent', stage: 1, stageName: 'Location & Practical Fit', question: 'Which continent is open to you?',
    subtitle: 'Select any continents you would consider. Leave everything unselected to include all regions.', category: 'openness',
    options: [
      { label: 'Anywhere', desc: 'Keep every region in the results.', value: 'all', icon: 'fa-solid fa-earth-americas', isNoPreference: true },
      ...['Europe','Asia','Africa','North America','South America','Oceania'].map((region, i) => ({ label: region, desc: `Include ${region} destinations.`, value: region, icon: ['fa-solid fa-landmark','fa-solid fa-torii-gate','fa-solid fa-mountain-sun','fa-solid fa-city','fa-solid fa-leaf','fa-solid fa-water'][i] }))
    ]
  },
  {
    id: 'timezoneOverlap', stage: 1, stageName: 'Location & Practical Fit', question: 'Where are your clients or collaborators?',
    subtitle: 'A broad timezone-region filter; countries can span multiple time zones.', category: 'openness',
    options: [
      { label: 'No timezone constraint', desc: 'Keep all destinations.', value: 'all', icon: 'fa-solid fa-clock', isNoPreference: true },
      { label: 'Americas', desc: 'Prefer overlap with the Americas.', value: 'Americas', icon: 'fa-solid fa-clock' },
      { label: 'Europe or Africa', desc: 'Prefer overlap with Europe or Africa.', value: 'Europe/Africa', icon: 'fa-solid fa-clock' },
      { label: 'Asia or Oceania', desc: 'Prefer overlap with Asia or Oceania.', value: 'Asia/Oceania', icon: 'fa-solid fa-clock' }
    ]
  },
  {
    id: 'healthcarePreference', stage: 1, stageName: 'Location & Practical Fit', question: 'What healthcare setup suits you?',
    subtitle: 'Country-level model only; coverage and costs depend on eligibility and location.', category: 'openness',
    options: [
      { label: 'Public or universal coverage', desc: 'Prefer broad public coverage.', value: 'public', icon: 'fa-solid fa-hospital' },
      { label: 'Affordable private clinics', desc: 'I’m comfortable paying directly for care.', value: 'affordable-private', icon: 'fa-solid fa-stethoscope' },
      { label: 'I can budget for private insurance', desc: 'Private coverage is acceptable.', value: 'private-required', icon: 'fa-solid fa-shield-heart' },
      { label: 'No preference', desc: 'Don’t score healthcare fit.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'taxPreference', stage: 1, stageName: 'Location & Practical Fit', question: 'How do you weigh taxes and public services?',
    subtitle: 'Tax depends on residency, income source, and personal circumstances.', category: 'openness',
    options: [
      { label: 'Higher taxes with broad public services', desc: 'I value the service package.', value: 'higher-services', icon: 'fa-solid fa-building-columns' },
      { label: 'Lower-tax or territorial systems', desc: 'I prioritize financial flexibility.', value: 'lower-territorial', icon: 'fa-solid fa-coins' },
      { label: 'No preference', desc: 'Don’t score tax fit.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'environmentPreference', stage: 1, stageName: 'Location & Practical Fit', question: 'How much environmental variability can you accept?',
    subtitle: 'Water, air quality, and hazards vary within countries and by season.', category: 'openness',
    options: [
      { label: 'Prefer lower exposure', desc: 'I favor places with fewer common environmental disruptions.', value: 'lower', icon: 'fa-solid fa-leaf' },
      { label: 'I can adapt to regional or seasonal issues', desc: 'I’m comfortable checking local conditions.', value: 'flexible', icon: 'fa-solid fa-cloud-sun' },
      { label: 'No preference', desc: 'Don’t score environmental fit.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: "visaPath", stage: 1, stageName: "Essentials & Dealbreakers",
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
    id: 'temperature', stage: 2, stageName: 'Weather Preferences', question: 'Which daytime temperature range feels best?',
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
    id: 'humidity', stage: 2, stageName: 'Weather Preferences', question: 'How much humidity feels comfortable?',
    subtitle: 'Country-level patterns are broad; coasts, mountains, and seasons can feel very different.', category: 'humidity',
    options: [
      { label: 'Dry air', desc: 'I prefer little muggy or sticky weather.', value: 'dry', icon: 'fa-solid fa-wind' },
      { label: 'Balanced', desc: 'Some humidity is fine, as long as it is not constant.', value: 'moderate', icon: 'fa-solid fa-cloud-sun' },
      { label: 'Humid air', desc: 'I am comfortable with warm, moisture-rich air.', value: 'humid', icon: 'fa-solid fa-droplet' },
      { label: 'No preference', desc: 'Humidity should not affect my matches.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'rainfall', stage: 2, stageName: 'Weather Preferences', question: 'How much rain do you like?',
    subtitle: 'Think about the overall pattern, including wet seasons.', category: 'rainfall',
    options: [
      { label: 'Mostly dry', desc: 'I prefer places with little rain through the year.', value: 'low', icon: 'fa-solid fa-sun' },
      { label: 'Seasonal rain', desc: 'Wet seasons are fine if there are drier parts of the year.', value: 'seasonal', icon: 'fa-solid fa-cloud-sun-rain' },
      { label: 'Frequent rain', desc: 'Regular showers and lush, rainy weather suit me.', value: 'frequent', icon: 'fa-solid fa-cloud-showers-heavy' },
      { label: 'No preference', desc: 'Rainfall should not affect my matches.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'snowfall', stage: 2, stageName: 'Weather Preferences', question: 'How do you feel about snow?',
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
    question: "What social climate and openness to foreigners do you seek?",
    subtitle: "Ease of making friends, English proficiency, and multicultural acceptance.",
    category: "openness",
    options: [
      { label: "Cosmopolitan, Diverse & High English Ease", desc: "Multicultural cities where English is widely spoken, low microaggressions, and foreigners integrate easily.", value: "cosmopolitan", icon: "fa-solid fa-globe" },
      { label: "Quiet, Polite & Respectful Distance", desc: "Locals give you privacy and respect personal boundaries; quiet courtesy without intrusive small talk.", value: "reserved", icon: "fa-solid fa-user-shield" },
      { label: "Flexible / No Preference", desc: "Happy to adapt to extroverted expat hubs or reserved homogeneous cultures.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
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
      { label: "Balanced Life / No Single Obsession", desc: "Value an overall healthy balance across all areas equally.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  }
];

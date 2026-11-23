export interface Video {
  title: string;
  channel: string;
  duration: string;
  url: string;
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
      { title: "What Living in Tokyo is Actually Like (Honest Pros & Cons)", channel: "Abroad in Japan", duration: "18:42", url: "https://www.youtube.com/results?search_query=what+living+in+tokyo+is+actually+like+abroad+in+japan" },
      { title: "A Realistic Day in the Life in Osaka, Japan", channel: "Life Where I'm From", duration: "14:15", url: "https://www.youtube.com/results?search_query=day+in+the+life+osaka+japan+life+where+im+from" }
    ],
    tags: ["urban", "safe", "transit", "moderate-cost", "introvert-friendly", "four-seasons"]
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
      "Bureaucracy for long-term visas requires periodic border runs or sponsorships."
    ],
    videos: [
      { title: "Living in Ho Chi Minh City — Honest Expat Experience", channel: "Max McFarlin", duration: "16:20", url: "https://www.youtube.com/results?search_query=living+in+ho+chi+minh+city+vietnam+expat" },
      { title: "Why Da Nang is Becoming Asia's Best Coastal City", channel: "Nomad Capitalist", duration: "12:50", url: "https://www.youtube.com/results?search_query=living+in+da+nang+vietnam+lifestyle" }
    ],
    tags: ["affordable", "warm", "energetic", "foodie", "social", "entrepreneurial"]
  },
  "Portugal": {
    id: "620",
    name: "Portugal",
    icon: "fa-solid fa-sun",
    region: "Southern Europe",
    tagline: "Sun-drenched Atlantic cliffs, slow-paced café mornings, and soulful European charm.",
    cost: "$1,900 – $2,800/mo",
    wlb: "8.8 / 10",
    safety: "9.2 / 10",
    culture: "Relaxed, nostalgic ('saudade'), and deeply tied to the ocean, family meals, and neighborhood life. Time moves slower here than in Northern Europe—rushing is frowned upon.",
    people: "Kind, gentle, and remarkably fluent in English compared to neighbors. Portuguese people are modest and welcoming, though local wages vs. rising foreign rents have created mixed feelings in Lisbon and Porto.",
    costOfLiving: "Historically Western Europe's bargain, though housing in Lisbon and Porto has surged ($1,200–$1,800 for a 1-bedroom). Groceries, local wine ($4 for great bottles), espresso ($1), and healthcare remain very reasonable.",
    workday: "Starts around 9:30 AM with an espresso and a pastel de nata. Lunch is a proper sit-down affair—often 1 to 2 hours with colleagues. Afternoon productivity flows calmly until 6:00 PM.",
    evening: "Dinner starts late (8:30–9:30 PM). Evenings are spent watching the sunset from a 'miradouro' (viewpoint) with a glass of vinho verde, strolling cobblestone plazas, or listening to live Fado music.",
    upsides: [
      "Over 300 days of sunshine a year and breathtaking Atlantic beaches.",
      "Consistently ranked among the top 10 safest countries globally.",
      "Easy gateway to the rest of Europe with clear residency pathways (D7/Digital Nomad)."
    ],
    downsides: [
      "Older apartments often lack central heating or insulation—winters feel surprisingly cold indoors.",
      "Slow public administration (AIMA/immigration) requires immense patience.",
      "Local salaries are low if you aren't earning foreign/remote income."
    ],
    videos: [
      { title: "The Truth About Moving to Portugal in 2025/2026", channel: "expatsi", duration: "15:10", url: "https://www.youtube.com/results?search_query=truth+about+living+in+portugal+expat" },
      { title: "A Day in the Life in Lisbon, Portugal", channel: "Yes Theory / Local", duration: "13:45", url: "https://www.youtube.com/results?search_query=day+in+the+life+lisbon+portugal" }
    ],
    tags: ["warm", "relaxed", "safe", "coastal", "moderate-cost", "europe"]
  },
  "Netherlands": {
    id: "528",
    name: "Netherlands",
    icon: "fa-solid fa-bicycle",
    region: "Western Europe",
    tagline: "Pragmatic, bike-first egalitarianism where efficiency meets cozy 'gezelligheid'.",
    cost: "$2,600 – $3,600/mo",
    wlb: "9.4 / 10",
    safety: "9.0 / 10",
    culture: "Direct, flat-hierarchy, and hyper-organized. The Dutch value modesty ('doe normaal' — just act normal), sustainability, and scheduling social plans weeks in advance in a shared calendar.",
    people: "Famous for radical honesty—they won't sugarcoat feedback, which feels refreshing once you adjust. Nearly everyone speaks near-native English, making daily navigation effortless.",
    costOfLiving: "High, primarily driven by a severe housing shortage ($1,600–$2,400/mo for an apartment in Amsterdam or Utrecht). Health insurance is mandatory (~$150/mo), while cycling eliminates car expenses completely.",
    workday: "Starts at 9:00 AM via a brisk bike commute along dedicated cycle highways. Meetings are direct and egalitarian—interns freely debate CEOs. At 5:00 PM sharp, laptops close; working overtime is seen as poor time management.",
    evening: "Dinner is early (6:00–6:30 PM). Evenings revolve around 'gezelligheid'—cozy drinks (borrel) at a brown café, canal-side walks in summer, or indoor board games and candles during grey winters.",
    upsides: [
      "World-leading work-life balance and part-time work culture.",
      "Unrivaled cycling infrastructure and seamless train connections across Europe.",
      "Almost zero language barrier for English speakers in daily life."
    ],
    downsides: [
      "Severe housing crisis makes finding an apartment fiercely competitive.",
      "Grey, rainy, and windy weather from October through March.",
      "Making close Dutch friends takes time since social circles are formed early in life."
    ],
    videos: [
      { title: "Why Dutch Work-Life Balance is Unbeatable", channel: "Not Just Bikes", duration: "17:05", url: "https://www.youtube.com/results?search_query=living+in+the+netherlands+not+just+bikes" },
      { title: "Honest Pros & Cons of Living in Amsterdam", channel: "Damian & The Netherlands", duration: "14:30", url: "https://www.youtube.com/results?search_query=pros+and+cons+living+in+netherlands+expat" }
    ],
    tags: ["urban", "transit", "wlb", "safe", "high-cost", "europe"]
  },
  "Mexico": {
    id: "484",
    name: "Mexico",
    icon: "fa-solid fa-pepper-hot",
    region: "North America",
    tagline: "Vibrant colors, world-heritage gastronomy, and deeply warm community spirit.",
    cost: "$1,300 – $2,200/mo",
    wlb: "8.2 / 10",
    safety: "6.5 / 10",
    culture: "Rich, expressive, and celebratory. Family and community bonds sit at the center of life, expressed through long Sunday lunches, neighborhood markets (tianguis), and vibrant art and music.",
    people: "Incredibly warm, generous, and expressive. Saying 'buen provecho' to strangers eating at a restaurant is standard courtesy. Learning Spanish unlocks deep friendships and genuine integration.",
    costOfLiving: "Varies widely by neighborhood. Trendy Mexico City areas (Roma/Condesa) now rival US prices ($1,400+ rent), while Oaxaca, Mérida, or Guadalajara offer gorgeous apartments for $600–$950/mo and street tacos for $1.",
    workday: "Starts around 9:00 AM. The main meal of the day ('la comida') happens between 2:00 PM and 4:00 PM, often as a multi-course 'menú del día' with coworkers before wrapping up work around 6:30 PM.",
    evening: "Plazas fill with street musicians, families eating churros or esquites, and friends gathering at mezcalerias or rooftop terraces under mild highland evenings.",
    upsides: [
      "Unbelievable culinary diversity, fresh produce, and year-round spring climate in highland cities.",
      "Warm, welcoming culture that prioritizes joy, relationships, and living in the moment.",
      "Same time zones as North America, ideal for remote workers."
    ],
    downsides: [
      "Safety requires regional awareness and street smarts—varies drastically by state and neighborhood.",
      "Traffic congestion in Mexico City and infrastructure quirks (water pressure, noise).",
      "Gentrification tensions in popular expat neighborhoods."
    ],
    videos: [
      { title: "What Living in Mexico City is Really Like", channel: "Kinging-It", duration: "19:12", url: "https://www.youtube.com/results?search_query=what+living+in+mexico+city+is+really+like" },
      { title: "Living in Oaxaca vs Mérida — Expat Breakdown", channel: "Backpacker Steve", duration: "15:40", url: "https://www.youtube.com/results?search_query=living+in+oaxaca+mexico+expat+life" }
    ],
    tags: ["warm", "affordable", "foodie", "social", "energetic"]
  },
  "Norway": {
    id: "578",
    name: "Norway",
    icon: "fa-solid fa-mountain-sun",
    region: "Northern Europe",
    tagline: "Dramatic fjords, high-trust society, and an outdoorsy 'friluftsliv' philosophy.",
    cost: "$3,000 – $4,200/mo",
    wlb: "9.5 / 10",
    safety: "9.7 / 10",
    culture: "Rooted in 'friluftsliv' (open-air living) and egalitarian trust. There is no bad weather, only bad clothing. Wealth is understated, and nature belongs equally to everyone via the right to roam (Allemannsretten).",
    people: "Polite, outdoorsy, and respectful of personal space. Norwegians seem reserved on the commuter train, yet warm up immediately on a mountain trail or at a weekend cabin ('hytte').",
    costOfLiving: "Among the highest in the world—restaurant meals easily cost $30–$50 per person, and alcohol is heavily taxed. However, high local wages, free healthcare, and subsidized childcare balance the equation for residents.",
    workday: "Starts early (8:00 AM) with a packed open-faced sandwich ('matpakke') for lunch at 11:30 AM. By 4:00 PM, offices empty out so people can pick up kids or hit cross-country ski trails and hiking paths.",
    evening: "Quiet and home-centered during dark winter months—cozy lighting ('kos'), home-cooked dinners, and sauna sessions followed by cold fjord plunges.",
    upsides: [
      "Jaw-dropping natural beauty right outside your doorstep in every city.",
      "Unmatched social safety net, high trust, and superb work-life balance.",
      "Clean air, pure tap water, and zero traffic stress."
    ],
    downsides: [
      "Long, dark winters in the north and very high cost of dining out.",
      "Social circles can feel closed off unless you join sports or outdoor clubs.",
      "Limited culinary variety compared to major global metropolises."
    ],
    videos: [
      { title: "Why Norwegians Are So Happy (Despite Dark Winters)", channel: "Life in Norway", duration: "13:55", url: "https://www.youtube.com/results?search_query=what+living+in+norway+is+actually+like" },
      { title: "A Realistic Day in Oslo, Norway", channel: "Simple Happy Zen", duration: "11:30", url: "https://www.youtube.com/results?search_query=day+in+the+life+oslo+norway" }
    ],
    tags: ["nature", "safe", "wlb", "high-cost", "introvert-friendly", "four-seasons"]
  },
  "Spain": {
    id: "724",
    name: "Spain",
    icon: "fa-solid fa-wine-glass",
    region: "Southern Europe",
    tagline: "Vibrant late-night plazas, Mediterranean sun, and a culture built around living well.",
    cost: "$1,800 – $2,600/mo",
    wlb: "9.0 / 10",
    safety: "8.9 / 10",
    culture: "Social, expressive, and proudly regional—Catalonia, Andalusia, and the Basque Country each feel like distinct worlds. Life revolves around shared public spaces, tapas, and multi-generational family gatherings.",
    people: "Warm, loud, humorous, and deeply social. Spaniards work to live, not live to work. Neighborhood bars act as community living rooms where toddlers and grandparents mingle at 10 PM.",
    costOfLiving: "Great value for Western Europe. Rent in Madrid or Barcelona is $1,100–$1,600, while Valencia, Seville, or Malaga sit around $850–$1,200. Fresh market produce, olive oil, and tapas culture keep daily costs low.",
    workday: "Starts around 9:00–9:30 AM with a mid-morning coffee and tortilla break. Traditional shops still close from 2:00 PM to 5:00 PM, though modern corporate offices work straight through until 6:00 PM.",
    evening: "The magic hour begins at 8:00 PM with the 'paseo' (evening stroll), followed by tapas hopping at 9:30 PM and lively conversation spilling onto warm terraces well past midnight.",
    upsides: [
      "Incredible Mediterranean climate, beaches, and world-class high-speed rail (AVE).",
      "Deeply social street life—it is almost impossible to feel lonely outside.",
      "Top-tier public healthcare and rich cultural heritage."
    ],
    downsides: [
      "High youth unemployment and low local salaries if not working remotely.",
      "Spanish bureaucracy ('papeleo') and appointment systems (cita previa) can be frustrating.",
      "Intense summer heatwaves in southern and central cities."
    ],
    videos: [
      { title: "Living in Valencia vs Madrid — What Nobody Tells You", channel: "Spain Revealed", duration: "16:45", url: "https://www.youtube.com/results?search_query=living+in+spain+spain+revealed+pros+cons" },
      { title: "A Typical Evening in Madrid, Spain", channel: "James Blick", duration: "12:18", url: "https://www.youtube.com/results?search_query=typical+day+living+in+madrid+spain" }
    ],
    tags: ["warm", "social", "wlb", "foodie", "moderate-cost", "europe", "coastal"]
  },
  "South Korea": {
    id: "410",
    name: "South Korea",
    icon: "fa-solid fa-city",
    region: "East Asia",
    tagline: "Hyper-fast 24/7 innovation, mountain hikes inside megacities, and electric nightlife.",
    cost: "$1,500 – $2,300/mo",
    wlb: "6.2 / 10",
    safety: "9.5 / 10",
    culture: "Driven by 'ppalli-ppalli' (hurry-hurry) efficiency, cutting-edge tech, and deep respect for elders. Despite ultra-modern skyscrapers, weekend hiking in national parks is practically a national religion.",
    people: "Passionate, stylish, and loyal once trust is built. Koreans take immense pride in hospitality ('jeong')—friends will insist on paying for dinner and making sure your glass is never empty.",
    costOfLiving: "Dining out at local Korean restaurants ($7–$10), fast fiber internet, and subway rides ($1.10) are cheap. However, housing deposits ('jeonse' or 'wolse') in Seoul require upfront capital, and fruit/groceries can be expensive.",
    workday: "Fast-paced and competitive. Mornings start with an iced Americano (even in freezing winter). Lunches are quick and communal, and work often extends into team dinners (hoesik).",
    evening: "Seoul never sleeps—24-hour cafes, late-night Korean BBQ, karaoke rooms (noraebang), PC bangs, and Han River park picnics with fried chicken and beer (chimaek).",
    upsides: [
      "Fastest internet, seamless digital infrastructure, and ultra-safe streets at all hours.",
      "Incredible food, café aesthetics, and skincare/healthcare accessibility.",
      "Easy access to scenic mountains and coastal islands."
    ],
    downsides: [
      "Intense work/academic pressure and competitive social expectations.",
      "Spring fine dust (yellow dust) and humid monsoon summers.",
      "Learning Hangul and basic Korean is essential for deep social integration."
    ],
    videos: [
      { title: "What Living in Seoul is Really Like as a Foreigner", channel: "Cari Cakes", duration: "17:30", url: "https://www.youtube.com/results?search_query=living+in+seoul+south+korea+honest+experience" },
      { title: "Day in the Life in Busan, South Korea", channel: "Q2HAN", duration: "14:05", url: "https://www.youtube.com/results?search_query=day+in+the+life+busan+korea" }
    ],
    tags: ["urban", "safe", "transit", "energetic", "foodie", "four-seasons"]
  },
  "Canada": {
    id: "124",
    name: "Canada",
    icon: "fa-brands fa-canadian-maple-leaf",
    region: "North America",
    tagline: "Multicultural cities framed by vast wilderness, polite neighbors, and crisp winters.",
    cost: "$2,500 – $3,600/mo",
    wlb: "8.3 / 10",
    safety: "8.8 / 10",
    culture: "Multicultural mosaic rather than a melting pot—Toronto and Vancouver feature world-class diversity. Outside cities, outdoor sports (hockey, skiing, canoeing) define national identity.",
    people: "Polite, progressive, and welcoming to newcomers. Canadians value inclusivity, personal space, and friendly small talk in coffee lines.",
    costOfLiving: "High in Vancouver and Toronto due to steep housing costs ($1,800–$2,500/mo for a 1-bedroom) and telecom/grocery prices. Montreal and Calgary offer noticeably better affordability.",
    workday: "9:00 AM to 5:00 PM North American rhythm, casual office environments, and strong emphasis on diversity and remote/hybrid flexibility.",
    evening: "Summer evenings stretch past 9:30 PM with lakeside patios and park gatherings; winter evenings are cozy with indoor sports, home cooking, and neighborhood pubs.",
    upsides: [
      "Immense natural beauty—Rockies, coastal rainforests, and thousands of lakes.",
      "Truly multicultural cuisine and welcoming immigrant communities.",
      "High safety, stability, and clean cities."
    ],
    downsides: [
      "Housing affordability crisis in major metro areas.",
      "Long, cold winters across most of the country (except coastal BC's rain).",
      "Vast distances make domestic flights expensive."
    ],
    videos: [
      { title: "Honest Pros & Cons of Moving to Canada", channel: "DownieLive", duration: "15:22", url: "https://www.youtube.com/results?search_query=pros+and+cons+living+in+canada" },
      { title: "Living in Vancouver vs Montreal", channel: "Paige Pritchard", duration: "13:10", url: "https://www.youtube.com/results?search_query=living+in+vancouver+vs+montreal" }
    ],
    tags: ["nature", "safe", "wlb", "high-cost", "four-seasons"]
  },
  "Thailand": {
    id: "764",
    name: "Thailand",
    icon: "fa-solid fa-umbrella-beach",
    region: "Southeast Asia",
    tagline: "Effortless daily convenience, tropical warmth, and the 'Mai Pen Rai' (no worries) spirit.",
    cost: "$1,000 – $1,800/mo",
    wlb: "8.6 / 10",
    safety: "8.4 / 10",
    culture: "Guided by Theravada Buddhism, respect for elders, and 'sanuk' (finding joy in whatever you do). Confrontation is avoided; a calm smile solves almost every hiccup.",
    people: "Gentle, tolerant, and welcoming. Thailand has hosted travelers and expats for decades, creating an easygoing atmosphere in Bangkok, Chiang Mai, and southern islands.",
    costOfLiving: "Remarkable flexibility—you can live comfortably on $1,100/mo in Chiang Mai or live a luxury condo lifestyle in Bangkok for $2,200/mo. Street food is $2, and private healthcare is world-class and affordable.",
    workday: "Flexible and relaxed, especially for remote workers in bustling coworking cafes. Locals start with iced Thai tea or coffee and enjoy social lunches at bustling food courts.",
    evening: "Night markets glow with sizzling woks, rooftop bars overlook Bangkok's skyline, or beachside fire shows light up Phuket and Koh Phangan.",
    upsides: [
      "Unbeatable comfort, modern condos, and elite private hospitals at low cost.",
      "Incredible food, tropical islands, and easy travel hub for all of Asia.",
      "Low-stress, tolerant daily social environment."
    ],
    downsides: [
      "Seasonal burning season smoke in Northern Thailand (Feb–April).",
      "Intense year-round heat and Bangkok traffic congestion.",
      "Strict visa rules if you don't qualify for DTV/Elite/retirement visas."
    ],
    videos: [
      { title: "What Living in Bangkok is Really Like", channel: "Retired Working For You", duration: "16:15", url: "https://www.youtube.com/results?search_query=what+living+in+bangkok+is+really+like" },
      { title: "Chiang Mai Lifestyle & Cost of Living Breakdown", channel: "Paddy Doyle", duration: "14:40", url: "https://www.youtube.com/results?search_query=living+in+chiang+mai+thailand+cost+of+living" }
    ],
    tags: ["affordable", "warm", "relaxed", "foodie", "social"]
  },
  "New Zealand": {
    id: "554",
    name: "New Zealand",
    icon: "fa-solid fa-compass",
    region: "Oceania",
    tagline: "Laid-back Kiwi friendliness surrounded by cinematic mountains, beaches, and sheep.",
    cost: "$2,400 – $3,300/mo",
    wlb: "9.2 / 10",
    safety: "9.3 / 10",
    culture: "Unpretentious, egalitarian ('tall poppy syndrome' discourages bragging), and deeply connected to Māori heritage and outdoor conservation.",
    people: "Friendly, relaxed, and barefoot-casual. Strangers chat easily at farmers' markets, and people genuinely value free time over status symbols.",
    costOfLiving: "High due to island import costs and housing prices ($1,500–$2,100/mo in Auckland or Wellington). Groceries and petrol are pricey, though outdoor recreation is completely free.",
    workday: "Starts with top-tier flat white coffee. Workplaces are informal and supportive, wrapping up promptly at 5:00 PM so everyone can surf, trail run, or barbecue.",
    evening: "Quiet and peaceful—fish and chips on the beach at sunset, backyard BBQs, or stargazing under some of the clearest dark skies in the world.",
    upsides: [
      "Extraordinary outdoor lifestyle, clean air, and dramatic landscapes.",
      "Friendly English-speaking culture with genuine work-life balance.",
      "Safe, stable, and peaceful pace of life."
    ],
    downsides: [
      "Geographic isolation—long, expensive flights to anywhere else.",
      "High cost of groceries, housing, and older poorly insulated homes.",
      "Small job market with lower salaries than neighboring Australia."
    ],
    videos: [
      { title: "Pros and Cons of Living in New Zealand", channel: "Kiwi Life", duration: "15:02", url: "https://www.youtube.com/results?search_query=pros+and+cons+living+in+new+zealand" },
      { title: "Day in the Life in Wellington, New Zealand", channel: "Wanderlust NZ", duration: "12:48", url: "https://www.youtube.com/results?search_query=day+in+the+life+wellington+new+zealand" }
    ],
    tags: ["nature", "relaxed", "safe", "wlb", "coastal", "high-cost"]
  },
  "Germany": {
    id: "276",
    name: "Germany",
    icon: "fa-solid fa-train-subway",
    region: "Central Europe",
    tagline: "Structured, green, rule-loving reliability paired with eclectic Berlin arts and beer gardens.",
    cost: "$2,100 – $3,000/mo",
    wlb: "8.9 / 10",
    safety: "8.8 / 10",
    culture: "Values privacy, punctuality, environmentalism, and clear rules. Sundays ('Ruhetag') are legally protected rest days—all supermarkets close so people can walk in forests or relax with family.",
    people: "Direct, dependable, and loyal. Germans respect boundaries and rules, and once you're considered a friend, they are fiercely reliable.",
    costOfLiving: "More affordable than London, Paris, or Amsterdam. Rent in Berlin or Munich ranges from $1,100–$1,800/mo; groceries at Aldi/Lidl are inexpensive, and the €58 Deutschland-Ticket covers regional transit nationwide.",
    workday: "Starts early (8:00–8:30 AM), focused and structured with minimal small talk, and ends cleanly around 5:00 PM with strong labor protections and 30 vacation days.",
    evening: "Summer evenings shine in leafy beer gardens ('Biergärten') with pretzels and Radlers, or riverside walks; Berlin offers unmatched underground music and arts.",
    upsides: [
      "Strong worker protections, generous vacation, and central European travel access.",
      "Abundant green parks, forests, and affordable groceries.",
      "Vibrant contrast between traditional Bavarian towns and creative Berlin."
    ],
    downsides: [
      "Notorious paper-heavy bureaucracy and slow digitalization.",
      "German language is essential for dealing with landlords and government offices.",
      "Grey winters and everything being closed on Sundays takes adjustment."
    ],
    videos: [
      { title: "What Living in Germany is Actually Like", channel: "Wanted Adventure", duration: "16:33", url: "https://www.youtube.com/results?search_query=what+living+in+germany+is+actually+like+wanted+adventure" },
      { title: "Berlin vs Munich — Where Should You Live?", channel: "Simple Germany", duration: "14:12", url: "https://www.youtube.com/results?search_query=living+in+berlin+vs+munich+expat" }
    ],
    tags: ["transit", "wlb", "safe", "moderate-cost", "europe", "four-seasons"]
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
    downsides: ["Slower administrative and banking bureaucracy.", "Higher income and VAT taxes.", "Seasonal winter gloom in northern latitudes."]
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
    downsides: ["Tropical heat, monsoon seasons, or urban air quality.", "Language barriers outside major commercial hubs.", "Dense traffic in megacities."]
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
    downsides: ["Public transit is often limited outside major cities.", "Safety and infrastructure vary significantly by neighborhood.", "Higher reliance on private healthcare or cars in many areas."]
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
    downsides: ["Infrastructure reliability (power/transit) varies by city.", "Safety requires local awareness and neighborhood selection.", "Bureaucracy can move at an unhurried pace."]
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
    downsides: ["Long flight distances to Europe, Asia, or the Americas.", "High urban housing costs.", "Strong UV sun exposure."]
  }
};

export interface QuizOption {
  label: string;
  desc: string;
  tag: string;
  icon: string;
}

export interface QuizQuestion {
  question: string;
  subtitle: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "What does your ideal monthly budget look like?",
    subtitle: "Including rent for a comfortable 1-bedroom apartment, dining out, and daily transit.",
    options: [
      { label: "Lean & High-Value ($900 – $1,500/mo)", desc: "Eat out daily, live in a modern condo, stretch every dollar.", tag: "affordable", icon: "fa-solid fa-wallet" },
      { label: "Balanced Comfort ($1,600 – $2,500/mo)", desc: "Solid infrastructure, great food, moderate European/Asian pricing.", tag: "moderate-cost", icon: "fa-solid fa-scale-balanced" },
      { label: "Premium & High-Trust ($2,600+/mo)", desc: "Top-tier public services, high salaries, pristine infrastructure.", tag: "high-cost", icon: "fa-solid fa-landmark" }
    ]
  },
  {
    question: "What climate makes you feel most alive?",
    subtitle: "Weather shapes daily routines more than almost anything else.",
    options: [
      { label: "Year-Round Warmth & Sunshine", desc: "Tropical breezes, outdoor cafes, never needing a heavy winter coat.", tag: "warm", icon: "fa-solid fa-sun" },
      { label: "Distinct Four Seasons", desc: "Cherry blossoms, crisp autumn leaves, and cozy snowy winters.", tag: "four-seasons", icon: "fa-solid fa-leaf" },
      { label: "Coastal & Mild", desc: "Ocean air, dramatic cliffs, and temperate days.", tag: "coastal", icon: "fa-solid fa-water" }
    ]
  },
  {
    question: "How do you want your typical evening to feel?",
    subtitle: "Picture a random Tuesday at 8:30 PM.",
    options: [
      { label: "Buzzing Street Life & Late Dinners", desc: "Night markets, lively plazas, tapas, and neon-lit alleys.", tag: "energetic", icon: "fa-solid fa-martini-glass-citrus" },
      { label: "Peaceful Nature & Quiet Comfort", desc: "Mountain trails, sunset walks, cozy home evenings, and zero noise.", tag: "nature", icon: "fa-solid fa-tree" },
      { label: "Hyper-Safe Urban Convenience", desc: "24/7 cafes, spotless trains, and effortless city exploration.", tag: "urban", icon: "fa-solid fa-train" }
    ]
  },
  {
    question: "What social dynamic suits your personality best?",
    subtitle: "Every culture has its own unspoken social rhythm.",
    options: [
      { label: "Warm, Expressive & Spontaneous", desc: "Easy conversations with strangers, communal dining, lively energy.", tag: "social", icon: "fa-solid fa-champagne-glasses" },
      { label: "Polite, Respectful & Low-Pressure", desc: "People give you space, value quiet courtesy, and respect boundaries.", tag: "introvert-friendly", icon: "fa-solid fa-mug-saucer" },
      { label: "Direct, Egalitarian & Structured", desc: "Clear communication, flat hierarchies, and strict work-life boundaries.", tag: "wlb", icon: "fa-solid fa-bicycle" }
    ]
  },
  {
    question: "What is your #1 non-negotiable priority?",
    subtitle: "The dealbreaker that makes a place feel like home.",
    options: [
      { label: "World-Class Food Culture", desc: "Street food legends, fresh markets, and culinary obsession.", tag: "foodie", icon: "fa-solid fa-utensils" },
      { label: "Top-Tier Safety & Public Transit", desc: "No car needed, safe walks at 2 AM, punctual trains.", tag: "safe", icon: "fa-solid fa-shield-halved" },
      { label: "Slow Pace & Work-Life Balance", desc: "Logging off at 5 PM sharp, zero hustle-culture guilt.", tag: "relaxed", icon: "fa-solid fa-spa" }
    ]
  }
];

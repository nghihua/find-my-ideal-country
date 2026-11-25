import type { ProfileSections } from './index';

/**
 * Profile-section copy for mainland Americas countries (North, Central, and South America; Mexico, Canada, Costa Rica, and Colombia are covered elsewhere).
 * Keys match country names in GLOBAL_COUNTRY_METADATA exactly.
 */
export const AMERICAS_A: Record<string, ProfileSections> = {
  "Argentina": {
    culture: "Sundays revolve around the 'asado': one person holds court at the 'parrilla' (grill) for hours while cousins multiply, Fernet-and-Coke flows, and nobody checks a watch. Mate circles turn park benches into living rooms, and the Italian grandparent generation still sets the table. Prices are re-labeled so often that menus carry their date of validity, and big purchases come quoted in 'cuotas' (installments) more than totals.",
    people: "Affectionate and argumentative in equal measure — a kiss on the cheek is the standard hello, and guests get folded into the table within minutes. Debate is a form of intimacy here: politics, fútbol, and inflation are all fair game at a first meeting. Dark humor about the economy is the national coping style, and it is genuinely funny.",
    costOfLiving: "Steak, Malbec, and a night on the town cost a fraction of what they would in Paris or New York, which is why foreign-income residents live startlingly well. Leases are often quoted in dollars, and landlords prefer greenbacks to pesos. Anything imported — electronics, brand clothing — carries markups that locals route around with Miami suitcases and courier networks.",
    upsides: [
      "A food culture where the steak-and-Malbec dinner is a Tuesday routine, not a splurge, and wine country sits a bus ride from the capital.",
      "Buenos Aires works without a car: the 'subte' subway, buses, and dense walkable neighborhoods cover most daily life.",
      "Four real seasons, with weekend escapes from subtropical Iguazú falls to Andean lake districts.",
    ],
    downsides: [
      "Economic volatility and currency shifts require managing cash and parallel exchange rates (dólar blue).",
      "Every 'trámite' — bank account, lease, utility hookup — runs through paper queues and in-person visits that eat whole mornings.",
      "Older Buenos Aires apartments were built before air conditioning was standard, and humid January heat makes that a daily argument.",
    ],
  },
  "Belize": {
    culture: "English-speaking, Caribbean-facing, and easygoing to the bone, with Kriol (the local creole) coloring every conversation. Garifuna culture — the Afro-Indigenous tradition that arrived by boat from St. Vincent — supplies the drums, punta dancing, and coastal kitchens, while Maya and Mestizo communities inland keep their own markets and corn-based cooking. June and July bring lobster festivals, and turnout is close to mandatory.",
    people: "Small enough that faces become familiar within weeks, and names by the second visit. Hospitality is casual and immediate — invitations land by word of mouth, church and family ties organize the calendar, and nobody rushes a goodbye. Outsiders who slow to local tempo get received as neighbors, not customers.",
    costOfLiving: "Market produce, fresh fish, and mainland rents run modest for the region, while the cayes and anything tourist-adjacent prices in US dollars. Cooking at home is cheap; eating out drifts toward Caribbean prices fast.",
    upsides: [
      "Contracts, clinics, and small talk all run in English — rare in the region, and it removes an entire layer of relocation friction.",
      "The hemisphere's largest barrier reef sits within boat reach of your doorstep, with diving and fishing as everyday options rather than bucket-list trips.",
      "A genuinely multicultural calendar — Garifuna drumming, Mestizo fiestas, and Maya village life within a few hours of each other.",
    ],
    downsides: [
      "Hurricane exposure, rainy-season roads, and limited specialized healthcare outside Belize City.",
      "Import markups are the quiet budget killer: cereal, toothpaste, and phone chargers all carry container-ship math.",
      "There is no meaningful public transit — two highways with retired US school buses, and everything else needs wheels, a boat, or patience.",
    ],
  },
  "Bolivia": {
    culture: "Highland life runs on thin-air consequences: coca tea ('mate de coca') is offered like coffee, water boils at a polite simmer, and the sun burns through a hat by noon. Aymara and Quechua tradition is lived, not curated — 'cholitas' in bowler hats run the markets and headline wrestling nights in El Alto, Oruro's February carnival is UNESCO-listed, and Pachamama offerings bless new trucks and new babies alike.",
    people: "Respect travels through greetings — a formal 'buenos días' before any request — and patience for ceremonial, unhurried ways of doing things. Foreigners draw curiosity more than polish; English is thin outside tourism, so basic Spanish earns real warmth. Invitations arrive around food, and the rule is to accept what is offered.",
    costOfLiving: "Among the cheapest capitals in South America for rent, market food, and transport. The problem is access, not price: imported electronics, cars, and brand goods carry brutal duties and thin selection, so the money question is whether the thing exists here at all. Fresh produce markets are glorious and nearly free by Northern standards.",
    upsides: [
      "Mi Teleférico turns the commute into a gondola ride over the canyon — aerial transit strung across the whole city.",
      "Living culture deeper than folklore: Aymara and Quechua languages, festivals, and market economies shape an ordinary Tuesday.",
      "A home base for the altiplano's headliners — the Uyuni salt flats, Lake Titicaca, the Yungas road — at local prices, not tour-package ones.",
    ],
    downsides: [
      "Altitude and transport access can affect daily routines and health.",
      "Houses are built for the sun, not the cold — central heating is rare, so winter nights indoors hover near freezing and family life happens in layers.",
      "Bureaucracy runs in Spanish (stamped in triplicate), and outside tourism almost nobody switches to English for you.",
    ],
  },
  "Brazil": {
    culture: "A continent with a shared accent of joy: gaúcho cattle culture and European-looking towns in the south, candomblé and Afro-Bahian rhythm in the northeast, river towns in the Amazonian north, and São Paulo's work-hard sprawl stitching it all together. Saturday 'feijoada' (black-bean and pork stew) is the recurring family appointment, and Carnival is the calendar's hinge — months of buildup, then a week in which the country agrees to stop.",
    people: "Physical and quick to laugh — conversation comes with arm-touching and loud tables, and personal space is a suggestion. Foreigners get pulled into group plans almost immediately, though deep friendship runs on Portuguese: without the language you remain a pleasant guest. Regional pride is fierce, teasing is affection, and everyone argues about which state does everything best.",
    costOfLiving: "Produce, corner-bar meals, and rideshare fares cost a fraction of any Western city, and regional capitals rent far below Rio and São Paulo. Imported electronics and cars carry heavy duties, so secondhand markets and cross-border runs are normal middle-class behavior. Weekly street markets make the bean-and-rice base of the diet nearly free.",
    upsides: [
      "The '13º salário' (13th-month salary) is a legal annual bonus, and even ordinary jobs carry statutory vacation the culture actually respects.",
      "A regional menu of possible lives — southern wine country, northeast beach culture, or Amazon river cities — inside one border.",
      "A public health system (SUS) means free serious care exists, and public universities are tuition-free.",
    ],
    downsides: [
      "Safety requires strict local awareness in major metropolitan areas, and Portuguese fluency is essential.",
      "Bureaucracy is notarized at every step: renting an apartment or buying a car means 'cartório' visits and a CPF tax number before anything else.",
      "The scale is continental — seeing friends in another region usually means a costly domestic flight or a two-day bus.",
    ],
  },
  "Chile": {
    culture: "The longest country on Earth lives with its geology: strict seismic codes, a shared vocabulary of 'temblor' (tremor), and buildings engineered to sway after the record 1960 Valdivia quake. Wine valleys sit an hour from the capital, and September's Fiestas Patrias turn parks into 'fondas' (pop-up party huts) for cueca dancing and grilled skewers. Mapuche language and territory questions stay part of everyday civic conversation in the south.",
    people: "More reserved than the regional stereotype — queues form, schedules hold, and small talk is brief before business. Warmth arrives by invitation: inside the circle, hosts are generous and gatherings run long. Regional rivalry between Santiago and everywhere else is standard dinner material, and outsiders who keep up with the fast local slang are quietly admired.",
    costOfLiving: "Santiago's nicer districts price like Southern Europe — rent, brunch, and wine bars all skew high — while produce markets and neighborhood services stay gentle. Provincial cities undercut the capital by a wide margin, and Chilean supermarket wine is one of the world's great daily-value groceries.",
    upsides: [
      "First-world daily fabric — drinkable tap water, honest queues, services that show up — rare at this latitude.",
      "Ski runs in the Andes above the city and Pacific surf within the same weekend; few capitals offer both.",
      "Banking, insurance, and long contracts actually function — stability you can build plans on.",
    ],
    downsides: [
      "Rapid Chilean Spanish dialect takes time to understand, and winter smog in Santiago valley can linger.",
      "The country stretches over 4,000 km — visiting your own national parks usually means domestic flights and real planning.",
      "Rents in the desirable comunas eat a serious share of local salaries, and leases often demand hefty guarantees from newcomers.",
    ],
  },
  "Ecuador": {
    culture: "Three countries in one — Pacific coast, sierra, and Amazon — close enough that a long weekend crosses climates. The hats Panama made famous are woven here from 'toquilla' straw, and Quito's Lent processions fill the streets with 'cucuruchos' (purple-robed penitents). Kichwa and mestizo heritage share the calendar with market days and fanesca, the twelve-grain Easter soup that still commands the family stove.",
    people: "Warm but initially formal — greetings matter, and invitations arrive through family or work rather than cold. Indigenous communities keep a polite, unhurried pace and expect the same in return. Foreigners are treated kindly the moment the effort shows: basic Spanish converts strangers into allies.",
    costOfLiving: "Dollarization removed exchange-rate math but imported some US pricing: produce markets and bus fares run cheap, while packaged imports and electronics skew high. Quito and Cuenca rent modestly for the quality of life; Galápagos and tourist towns price for visitors.",
    upsides: [
      "Galápagos sits within domestic flight range, and volcano hikes start at the edge of towns like Baños and Quito.",
      "Microclimates on demand: spring-like sierra, hot coast, or rainforest living inside one border.",
      "Retirement and remote-work residency routes are among the region's most navigable.",
    ],
    downsides: [
      "Altitude, climate, and safety conditions change significantly across regions.",
      "Mountain roads make distance deceptive — a short-map intercity trip can take most of a day by bus.",
      "Residency and property paperwork is Spanish-only, in-person, and fond of repeat visits for one more stamp.",
    ],
  },
  "El Salvador": {
    culture: "Small, dense, and caffeinated: remittances from family in the US thread through daily life, and August's saints' week — 'fiestas patronales' in every town — still anchors the calendar. The 2021 bitcoin experiment put the country on every fintech front page; a 2025 reform scaled it back to voluntary acceptance, but surf towns like El Zonte still take it alongside dollars. Catholic processions and a young population give the place a post-boom buzz.",
    people: "Quick to joke and quicker to feed you — hospitality is loud and unpretentious, and the diaspora means everyone has a cousin abroad who can help with anything. English is spotty outside the business class, so Spanish carries the day, but warmth does not require fluency. Ties run through family and church, and guests get the good plate.",
    costOfLiving: "Prices read like a US trip on sale — the dollar has been official since 2001, so there is no currency math, just import markups on anything packaged or electronic. Market food and bus fares cost little; San Salvador runs pricier than the towns, and the surf coast has learned to charge visitors.",
    upsides: [
      "The Pacific surf coast sits under an hour from the capital — dawn-patrol commutes are a real lifestyle here.",
      "Compact geography keeps everything close: volcano hikes, colonial towns, and the beach within an hour of each other.",
      "The security crackdown that began in 2022 has reopened streets and evening routines in neighborhoods locals once wrote off.",
    ],
    downsides: [
      "Check current local safety guidance and seasonal weather before choosing a location.",
      "Import prices on cars, electronics, and packaged goods bite hard in a small economy with thin shipping lanes.",
      "Bureaucracy runs in Spanish-only paper queues, and residency renewals are a recurring errand rather than a formality.",
    ],
  },
  "Guatemala": {
    culture: "Maya living culture sets the country apart: more than twenty Mayan languages are spoken daily, market towns keep rotating 'día de mercado' (market days), and Antigua's Lent processions lay 'alfombras' — street-length sawdust carpets — built overnight and swept away by one procession. November 1 brings Sumpango's giant kites, flown to carry messages to the dead. Catholic and Maya calendars overlap everywhere, and saints' days quiet whole towns.",
    people: "Gentle with strangers, and quick to share food once rapport forms. Maya communities expect respectful greetings and an unhurried pace; ladino urban life runs faster and louder. Family logistics govern invitations — everything includes kids, cousins, and an aunt who arrived unannounced.",
    costOfLiving: "Among the region's best values: market produce, bus fares, and highland rents cost little, and household help is affordable on even a modest foreign income. Antigua and the capital's nicer districts price for foreigners, and imported electronics and cars carry steep duties.",
    upsides: [
      "Antigua and Lake Atitlán offer colonial-and-volcano living with a long-established foreign-resident playbook — bilingual schools, clinics, and people who know the paperwork.",
      "Highland cities run spring-like year-round — no heating bills, no air conditioning, low utilities.",
      "Living Maya culture — textiles, languages, ceremonies, market days — is the neighbor's ordinary Tuesday, not a heritage show.",
    ],
    downsides: [
      "Altitude, rainy seasons, and safety conditions vary by destination.",
      "The capital sprawls car-first and rail-free: rush hour crawls, and buses range from packed secondhand school buses to a few BRT corridors.",
      "Import duties make electronics and cars among the region's pricier buys — budget a laptop like a repair bill.",
    ],
  },
  "Guyana": {
    culture: "A Caribbean tempo on a South American map: Hindu, Muslim, and Christian holidays share the calendar — Diwali lights the streets, Phagwah paints them — and pepperpot anchors Christmas breakfast. Most of the coast sits below sea level behind Dutch-engineered 'kokers' (sluice gates) and drainage canals, managed without drama every rainy season. African, Indian, Indigenous, and mixed heritages share one small capital and each other's holidays.",
    people: "Greetings open everything here — a proper good morning before any business — and elders are deferred to without discussion. Hospitality runs on food and favors, and invitations arrive through church, family, or a coworker who has decided you count. Outsiders are rare enough to be genuinely interesting, and patience with you is real.",
    costOfLiving: "Oil-sector demand is bidding up Georgetown rents and restaurant prices while average local pay lags far behind, so the city costs more than its neighborhood profile suggests. Market produce and river fish stay reasonable; imported groceries, building materials, and electronics carry container-freight markups.",
    upsides: [
      "English-language everything — contracts, clinics, courts, and small talk — on an otherwise Spanish-and-Portuguese continent.",
      "An interior of rainforest and rivers that most South Americans never see, with Indigenous villages and lodges reached by plane or boat.",
      "One of the world's fastest-growing economies is creating real jobs and infrastructure spending fast — rare ground-floor energy.",
    ],
    downsides: [
      "Infrastructure and healthcare access are limited outside major centers.",
      "Living below sea level means flood watch: heavy rains put streets and yards underwater until the kokers can drain.",
      "Import-freight pricing plus small-market scarcity makes electronics and specialty groceries a planned purchase, not an errand.",
    ],
  },
  "Honduras": {
    culture: "Two coasts and a mountain middle: highland towns run coffee and cattle under a permanent spring climate, while the Caribbean north coast moves to Garifuna drums and punta. The Bay Islands — Roatán, Utila, Guanaja — kept English, easygoing island time, and a colonial history apart from the Spanish mainland; Maya ruins at Copán sit in a quiet western valley. Village 'ferias' and saints' days organize the interior calendar.",
    people: "Warm, self-deprecating, and family-organized — plans bend without apology for a cousin's graduation or a saint's day. Hospitality is unpolished but total: you are fed before you are asked anything. Outside the big cities a foreign face is still an event, and the attention is friendly.",
    costOfLiving: "Mainland living runs at the region's floor — rent, market produce, and bus fares cost very little, and coffee-town highlands offer the best cheap quality of life. The Bay Islands price in tourism dollars, and fuel, electronics, and imported goods all skew high.",
    upsides: [
      "The Mesoamerican reef off the Bay Islands delivers serious diving at backpacker prices — Utila's certification courses are a global rite of passage.",
      "Coffee-country highland towns like Marcala or Santa Rosa de Copán pair spring climate with bottom-tier rents.",
      "A car-light life is workable in the north coast towns, where walking, ferries, and tuk-tuks cover most needs.",
    ],
    downsides: [
      "Safety and public services vary by city and region; check current local guidance.",
      "Getting between regions is its own project — limited internal flights and long highway hauls through the mountains.",
      "Coastal heat and humidity arrange your day around shade and fans, and the Sula valley bakes year-round.",
    ],
  },
  "Nicaragua": {
    culture: "Volcano geography shapes the map: Granada and León are colonial grid towns beneath big cones, Ometepe is an island made of two volcanoes, and the Pacific coast sells the best surf value in the Americas. Poetry is a national possession — Rubén Darío's face is on the banknotes. Since 2018 politics has split families and pushed many Nicaraguans abroad, even as budget-minded newcomers keep settling into Granada and San Juan del Sur.",
    people: "Unhurried and kind, with a rural politeness that survives city life. Baseball is the shared language across generations, and invitations center on family compounds and saints'-day parties. Foreign residents get genuine welcome alongside quiet curiosity about why here.",
    costOfLiving: "Among the hemisphere's lowest costs across the board: colonial-town rents, market meals, and bus fares all run at the floor. Tourist strips like San Juan del Sur price separately, and imported electronics and cars carry duties plus thin availability.",
    upsides: [
      "Lake and volcano country within day-trip range of the capital — Ometepe's twin cones, Masaya's lava-lit crater, and crater lakes you can swim in.",
      "Granada and León deliver big-city colonial beauty at small-town costs, with established foreign-resident networks to shortcut the learning curve.",
      "Purchasing power for remote workers on US or European salaries stretches further here than almost anywhere in the hemisphere.",
    ],
    downsides: [
      "Heat, seasonal storms, and local conditions vary by region.",
      "Specialists, banking needs, and serious shopping all mean a trip into Managua, where traffic and queues eat the day.",
      "Import selection is thin and priced accordingly — cars, electronics, and specialty groceries carry a real scarcity premium.",
    ],
  },
  "Panama": {
    culture: "The canal made a crossroads: a banking-capital skyline, a former US Zone whose bungalow neighborhoods still shape the city, and Guna communities who run their own 'comarca' (autonomous territory) in the San Blas islands. Carnival in Las Tablas is the collective national blowout, and the 'mola' — reverse-applique textile art — is the craft everyone brings home. The US dollar is the only paper money; the balboa survives as coins.",
    people: "Business-formal in the capital, beach-loose on the coasts — the same country holds both. Politeness is brisk-transactional in banks and warm-expansive at family Sundays. The Guna host San Blas on their own terms, permits and all, and outsiders are commonplace enough to be unremarkable, which has its own comfort.",
    costOfLiving: "The capital splits sharply: tower-district rents and fine dining skew toward Miami, while local markets, 'fondas' (cheap set-meal eateries), and provincial towns stay affordable. The dollar economy means US-style pricing for imported everything.",
    upsides: [
      "Dollarized, canal-anchored infrastructure — banking, shipping, and logistics that outclass the region.",
      "The Guna-governed San Blas islands offer autonomous-Indigenous Caribbean you visit on the community's terms.",
      "Two oceans in one day is a real errand here — Pacific surf morning, Caribbean sand by lunch, on a country an hour wide at the waist.",
    ],
    downsides: [
      "Heavy tropical humidity and afternoon storms, with sharp contrast between modern capital and rural areas.",
      "Groceries beyond local produce carry import markups, and electronics shopping means the capital's malls or a Miami run.",
      "Outside the capital's Metro, buses and cars carry everything, and provincial transport runs on patience.",
    ],
  },
  "Paraguay": {
    culture: "Bilingual to the bone: Guaraní and Spanish share official status, and daily speech is 'jopara' — a mix leaning Guaraní for feelings and Spanish for paperwork. The Guaraní myth of Yvy Marane'ỹ, the land without evil, is taught in schools; 'chipa' (manioc-cheese bread) sells at every traffic light; and Encarnación's riverfront carnival is the southern cone's beach party. Itaipú's hydro keeps electricity almost too cheap to meter.",
    people: "Shy-practical on first meeting, warm-fast after: greetings are formal — 'buen día' and a handshake — but invitations arrive quickly once you are known. Family is the operating system, and Sunday lunch is not optional. Foreigners draw friendly questions, and even broken Guaraní earns delighted surprise.",
    costOfLiving: "Rents, market food, and utilities run at South America's floor, and Itaipú's hydro keeps power bills negligible. Imported electronics and cars pay heavily at the border; Asunción's dining scene is rising but still modest. River beaches and provincial towns are the value end.",
    upsides: [
      "Itaipú's hydro output means some of the continent's cheapest electricity — a real edge for heavy AC or a home workshop.",
      "A living Indigenous language as everyday national speech — Guaraní is co-official, taught, and used on street corners.",
      "Undiscovered river life: Encarnación's beaches and quiet Paraná towns run cheap and calm.",
    ],
    downsides: [
      "Spanish and Guarani are important for everyday integration.",
      "Asunción summers push past 40°C with sauna humidity, and December–February life migrates between air conditioning and pools.",
      "Import duties on electronics and cars rank among the region's steepest, and selection is thin outside the capital.",
    ],
  },
  "Peru": {
    culture: "Cuisine is the national identity project: ceviche at lunch, 'chifa' (Chinese-Peruvian) wok cooking as comfort food, and October's Señor de los Milagros, when much of Lima wears purple and one of the world's largest Catholic processions walks the streets. Microclimates organize identity — Limeños joke about the gray 'garúa' drizzle, highlanders bundle up, and the Amazon side steams. Marinera dance competitions keep regional pride loud.",
    people: "Cordial and family-first, with a formality that softens fast over food. Punctuality is elastic for parties and rigid for buses; invitations revolve around long lunches rather than drinks. Foreigners get genuine curiosity, and every region sells you its hometown dish within minutes.",
    costOfLiving: "Produce markets are cheap and glorious, transport is remarkably affordable, and residential Lima rents run fair for a capital; Miraflores and tourist-heavy Cusco price for visitors. Imported electronics carry duties, and Amazon-region logistics add cost to everything.",
    upsides: [
      "A food scene that competes globally at everyday prices — Lima's kitchens earn the reputation nightly.",
      "Weekend-range landscapes from Andean treks to the Huacachina desert oasis and Amazon gateway towns.",
      "A remote-income sweet spot: capital-city comforts at a fraction of US or European costs.",
    ],
    downsides: [
      "Altitude, climate, and infrastructure vary substantially by region.",
      "Lima sits under a gray 'garúa' blanket from May through November — a months-long overcast that surprises arrivals expecting tropical sun.",
      "Getting official business done means 'trámites' — Spanish, in person, repeat visits, and one more stamped copy each time.",
    ],
  },
  "Suriname": {
    culture: "A Dutch-Creole country inside the Amazon: paperwork runs in Dutch, the street runs on Sranan Tongo, and 'no spans!' (never mind) is the national philosophy. Maroon nations — descendants of escaped enslaved people who won autonomy by treaty in the 1760s — still govern their own river territories. In Paramaribo a mosque and a synagogue share a street, and Hindu, Muslim, Javanese, and Indigenous holidays all appear on the official calendar.",
    people: "Soft-spoken, easygoing, and multicultural as the default — most families carry three or four heritages and the cooking to prove it. Greetings matter, pressure does not; commitments are real but flexible about timing. Outsiders are rare and warmly received, especially with any Dutch or Sranan phrases.",
    costOfLiving: "Paramaribo runs mid-range for the region, with container-freight markups on nearly everything and thin selection outside the capital. Local produce, river fish, and market food stay affordable; cars, electronics, and specialty imports are scarce and priced accordingly.",
    upsides: [
      "Rainforest covers most of the country and is genuinely accessible — river trips to Maroon villages and jungle lodges run on local logistics, not package tourism.",
      "A UNESCO-listed wooden historic core in Paramaribo, one of the quietest capitals you will ever wander.",
      "Dutch-language administration in South America — a European-language paperwork world, with English commonly understood.",
    ],
    downsides: [
      "Dutch is the official language; services are concentrated in Paramaribo.",
      "Equatorial heat and humidity with no cool season — the calendar reads hot, wet, hotter, wetter.",
      "Young Surinamers leave for the Netherlands in steady numbers, so families and friendships stretch across an ocean and holidays are about reunions.",
    ],
  },
  "United States": {
    culture: "Huge and self-varied: Thanksgiving is the true national homecoming — airports jam, every table fills — and the Super Bowl unites the rest as the secular holiday. Regional identity runs deep enough that moving states feels like changing countries: Texas barbecue, campus-football Saturdays in the South, county-fair summers in the Midwest. Tipping is a hard social rule, not a flourish, and religion varies by region rather than by rule.",
    people: "Fast-friendly: cashiers chat, strangers compliment your dog, and one shared activity — a gym class, a kid's soccer sideline — makes a friend. Depth takes longer in a country where people relocate for work every few years, so circles keep churning. Invitations are casual and literal: 'coffee sometime' means it, if you follow up.",
    costOfLiving: "The band is wide: a Midwest or Sun Belt one-bedroom can cost half what the same unit runs in a coastal job hub, and groceries stay cheaper than in most of Western Europe. Car ownership is the quiet second rent — payment, insurance, gas, repairs. Housing is the line that decides whether the country feels expensive or easy.",
    upsides: [
      "The national-park and public-lands system is a genuine inheritance — wilderness within a weekend drive of most metros.",
      "Whatever your profession, a city exists that runs on it — energy in Houston, film in Atlanta, biotech in Boston — and switching cities does not switch countries.",
      "An immigrant-shaped everyday culture: world cuisines, festivals, and languages in every major metro without leaving your neighborhood.",
    ],
    downsides: [
      "Heavy car dependency outside NYC/SF, high cost of private healthcare, and aggressive tipping culture.",
      "Health insurance is welded to employment, so a layoff or job change re-papers the whole family's coverage mid-stress.",
      "Continental distances: seeing family in another state means airfare and a day of travel each way, which quietly raises the price of staying close.",
    ],
  },
  "Uruguay": {
    culture: "Quietly confident and beef-fed: candombe drums — the Afro-Uruguayan rhythm UNESCO lists — roll through Montevideo's Barrio Sur on summer Sundays, and Carnaval stretches for weeks of 'murga' satirical theater in every neighborhood. Secular by law and custom — church and state parted ways early and stayed apart. Evenings belong to unhurried family tables and the working assumption that nobody is in a rush.",
    people: "Kind with Scandinavian calibration — genuinely warm, low-drama, and slow to impose. Friendship runs on repeated low-key presence: the same café, the same beach, the same circle. Directness is gentle but real, gossip is a low-intensity sport, and outsiders are welcomed and then quickly trusted with honest opinions.",
    costOfLiving: "Montevideo runs higher than its size suggests — dining out and capital rents approach European levels, though Tannat wine and local beef stay remarkably fair for the quality. Punta del Este goes full seasonal luxury; smaller coastal towns rent for a fraction off-season.",
    upsides: [
      "A level of everyday public trust rare in the region — you walk home at night without a strategy.",
      "Legal same-sex marriage and recreational cannabis have been settled law since 2013, backed by a live-and-let-live culture.",
      "Atlantic beach towns, from Punta del Este glamour to sleepy fishing villages, sit within a couple hours of the capital.",
    ],
    downsides: [
      "Prices for groceries, tech, and electronics are quite high due to import tariffs, and the winter coastal wind is damp.",
      "The coast empties to a sliver off-season, when restaurants shut and beach life goes dormant until December.",
      "The calm can flatten into boredom: Sundays are genuinely quiet, the cultural calendar is thin, and restless types start booking trips to Buenos Aires.",
    ],
  },
  "Venezuela": {
    culture: "The economic collapse hollowed out daily life — millions of family members now live abroad, and what any given store stocks varies week to week — yet the social fabric is famously intact. December brings 'gaitas' (Zulia-region party music) and all-day hallaca-making sessions where the extended family wraps Christmas corn parcels in production lines. Baseball, not soccer, is the emotional ledger, and every block argues about big-league prospects.",
    people: "Loud-hospitable and fast with affection: you are fed within minutes of arriving anywhere, and 'chamo' (buddy) enters your vocabulary by day two. Family networks do the work institutions cannot — a cousin's cousin finds the medicine, the mechanic, the answer. Humor about hardship is dark, constant, and genuinely funny.",
    costOfLiving: "The defining cost reality is availability more than price: imports are scarce and marked up, and anything specific means checking several stores or waiting for it to surface. Fresh produce and everyday services stay cheap for dollar-earners; Caracas is the priciest point, and provincial cities run cheaper with thinner selection.",
    upsides: [
      "Caracas is built against El Ávila, a national park you can hike to from the city — a capital with a wild ridge for a backyard.",
      "Caribbean coast within an hour of the capital keeps the beach an ordinary weekend ritual rather than a trip.",
      "For anyone earning in dollars, everyday food, transport, and household help sit far below regional capitals — the hemisphere's widest purchasing-power gap.",
    ],
    downsides: [
      "Economic conditions, security, and services vary; check current official advice.",
      "Power and water interruptions still punctuate the week in many cities, and remote workers treat battery backups and hotspots as standard kit.",
      "Lowland heat defines cities like Maracaibo — midday life becomes a scheduling problem the whole year round.",
    ],
  },
};

import type { ProfileSections } from './index';

/**
 * Profile-section copy for the European countries beyond the curated tier (Nordics, Baltics, Central and Southeast Europe, the east, and the microstates).
 * Keys match country names in GLOBAL_COUNTRY_METADATA exactly.
 */
export const EUROPE_A: Record<string, ProfileSections> = {
  "Albania": {
    culture: "A Mediterranean-Balkan hybrid where the family table outranks any institution: 'byrek' (savory filo pie) is the default breakfast, guest protocol is sacred, and the decades of isolation ended recently enough that openness to outsiders still feels fresh and unjaded. Muslim, Orthodox, and Catholic neighbors intermarry without ceremony, and the calendar belongs to saints' days and long Sunday lunches.",
    people: "Warm to a degree that startles newcomers: expect an immediate seat at the table, a toast in your honor, and a cousin found within the hour who can solve whatever problem you arrived with. 'Besa' — the old code of honoring one's word — still governs promises between people. Generosity is competitive, and grudges are not the local style.",
    costOfLiving: "Comfortably cheap by European standards: produce markets, restaurant meals, and barbers cost a fraction of Western prices, and rent outside central Tirana stays gentle. Imported goods and fuel carry a premium, and local salaries are low enough that residents still feel the pinch. Coastal rents climb each summer season.",
    upsides: [
      "The Albanian Alps around Theth and Valbona deliver serious mountain hiking and stone-village guesthouses a few hours from the coast.",
      "Overnight ferries from Durrës connect directly to Bari and the Italian rail network.",
      "Cafés, restaurants, and produce markets stay cheap enough that a modest income funds a full social life."
    ],
    downsides: [
      "Cash-based daily life outside cities, power and road quality vary, and winter rains slow travel.",
      "Getting anything official done usually runs through personal connections rather than straightforward procedures, which is charming until it is your paperwork.",
      "Passenger rail is skeletal, so intercity travel means 'furgon' (shared minivans) on winding roads and the Tirana traffic gauntlet."
    ],
  },
  "Andorra": {
    culture: "The constitution reads like a curiosity: the French president and a Catalan bishop serve as co-princes, and the country is governed through seven 'parròquies' (parishes) that predate most modern states. Catalan is the official language, heard alongside Spanish and French, and when snow fills the passes, 'escudella' (a slow meat-and-chickpea stew) appears on household stoves. Life is orderly, family-run, and quiet by design.",
    people: "Andorrans are a minority in their own country — Spanish, Portuguese, and French residents together outnumber them — which makes the society unusually practiced at absorbing newcomers. Manners are mountain-courteous: shop greetings are expected, and relationships build over seasons rather than weeks. Second-generation residents of every origin are simply Andorran.",
    costOfLiving: "Prices run below France and Spain on electronics, fuel, and cosmetics thanks to the low-tax retail economy, and groceries hover near Spanish levels. Rent is the pressure point — housing stock is small and ski-town priced, and seasonal demand squeezes it further. Lift passes and gear add the winter line item most budgets forget to plan for.",
    upsides: [
      "Locals rank among the longest-lived people on Earth, with hiking and skiing built into the default week rather than added to it.",
      "Low taxes keep electronics, cosmetics, and fuel meaningfully cheaper than in neighboring France and Spain.",
      "Slopes, trailheads, and thermal pools sit within a short drive of nearly every parish."
    ],
    downsides: [
      "Residency permits require deposits or income proof, and everything funnels through two valley towns.",
      "A car is close to mandatory: the mountain roads are serious in winter, and the bus network thins fast outside the main valleys.",
      "The job market is narrow — ski operations, retail, banking, and hospitality are the pillars, and little else."
    ],
  },
  "Austria": {
    culture: "Civic ritual structures the day: 'Grüß Gott' greetings open every counter, ball season turns Vienna's winter formal, and a majority of the capital lives in social or cost-rent housing built by the century-old 'Gemeindebau' program. Alpine weekends are the real weekly devotion — trains fill with hiking gear from spring through fall. Classical music is civic infrastructure here, priced for residents rather than visitors.",
    people: "Formal at the entrance, loyal past it: first meetings come with courtesy and a little distance, real friendship arrives slowly, and then permanently. The Viennese 'Grant' — public grumbling as an art form — signals comfort rather than hostility. An invitation to someone's home is the genuine milestone.",
    costOfLiving: "The expense reputation is deserved at the dinner table and for services — restaurant mains and any tradesman's hour cost real money — yet Vienna's municipal housing legacy keeps rents saner than in London, Paris, or Zurich. Discounter groceries stay reasonable, and the transit makes car-free living easy. Alpine leisure is where budgets quietly bend.",
    upsides: [
      "A majority of Viennese live in municipally built or subsidized housing, keeping rents capped by policy rather than by market panic.",
      "Vienna's tap water arrives by gravity from Alpine spring catchments through historic mountain pipelines.",
      "The UNESCO-listed Semmering railway and its modern twin put alpine trailheads within an hour of the capital."
    ],
    downsides: [
      "Strict Sunday store closures, conservative quiet hours (Ruhezeit), and high dining and service prices.",
      "Social formality slows belonging: circles form around school, family, and longtime colleagues, and newcomers often wait years to be let in.",
      "Vienna's winter is grey, damp, and fog-bound — nothing like the alpine postcard two hours west."
    ],
  },
  "Belarus": {
    culture: "Public life is immaculate and punctual — spotless metro platforms, everything running on schedule — while private life holds the color: kitchen-table talk, forest weekends, and theatergoing as a genuine habit rather than an occasion. The calendar keeps both calendars, with Orthodox Christmas on January 7 a public holiday alongside the New Year tree. Russian dominates casual speech, with Belarusian threaded through official life and signage.",
    people: "Surfaces are reserved and rules are respected in public, but a kitchen invitation changes everything — hospitality means pressing food and refilling tea until resistance collapses. Friendships run decades deep once formed. Expect bluntness in opinions once trust exists; expect silence on politics everywhere.",
    costOfLiving: "Cheap in absolute terms: groceries, transit, and utilities cost a fraction of Western levels, and rent outside central Minsk is modest. The catch is scarcity rather than price — many imported brands, electronics, and quality goods are hard to find or carry markups. Local salaries are low, but so is the cost of the basics.",
    upsides: [
      "The Belovezhskaya Pushcha reserve shelters European bison herds in some of the continent's oldest woodland, a few hours from Minsk.",
      "Opera, ballet, and drama tickets are subsidized to prices that keep a full arts calendar affordable on any salary.",
      "Minsk's metro, buses, and trams are dense, punctual, and cheap enough that a car is genuinely optional."
    ],
    downsides: [
      "Political repression and sanctions isolate daily life; entry rules change often and require current official guidance.",
      "Sanctions-era shelves show it: many Western brands, spare parts, and imports have grown scarce, expensive, or simply absent.",
      "The economy is state-shaped, so private employers and foreign firms are few — the job market has one main architecture."
    ],
  },
  "Belgium": {
    culture: "Daily life is organized around a question most countries never ask: which language region are you in? Flanders, Wallonia, and bilingual Brussels each carry their own shops, politics, and schools, and crossing a language line changes the texture of the street. Summer belongs to the 'kermis' — village funfairs that take over town squares — and weekends drift toward the coast for 'moules-frites' (mussels and fries) on the shore.",
    people: "Modest, practical, and allergic to grandstanding; conversation favors dinner-table debate over small talk, and opinions arrive freely once you are seated. Loyalty is the social currency — Belgians keep small, durable circles rather than wide ones. Multilingual by upbringing, they switch registers without ceremony.",
    costOfLiving: "Expensive, unevenly: rent in Brussels and Antwerp stings, restaurant mains run Western-premium, and a night out adds up quickly. Groceries are the equalizer — ordinary supermarkets price food reasonably — and the dense rail network makes a car optional. Services and tradesmen cost real money.",
    upsides: [
      "One of Europe's densest rail networks puts Antwerp, Ghent, and the coast within an hour of most commutes.",
      "Brussels sits at the crossroads: Paris, Amsterdam, Cologne, and London are all high-speed day-trip distance.",
      "Ghent's ten-day 'Gentse Feesten' and a packed festival calendar deliver a major city's cultural year at Belgian rather than Parisian prices."
    ],
    downsides: [
      "High personal income tax rates and frequent grey, rainy weather throughout the autumn and winter.",
      "Commune paperwork is famously slow — residence registration and permit renewals can stretch into months of waiting-room visits.",
      "The language divide shapes employment: many roles require Dutch or French specifically, and the wrong region for your language closes doors."
    ],
  },
  "Bosnia and Herzegovina": {
    culture: "Mountain valleys where three faiths share the same small cities — minarets, church towers, and an old synagogue within one skyline — and the days bend around long meals and longer conversations. 'Sevdah', the melancholy folk music born in Ottoman-era Sarajevo, is the culture's sound: slow, wistful, best heard live. The two administrative entities overlap the map, so paperwork can differ by which half of the country you are standing in.",
    people: "Generous and unhurried with affection: guests are fed past comfort, and conversation goes deep fast — expect questions about family and life within minutes. Gallows humor is the local coping art, deployed with real skill. Outsiders who slow down are welcomed without ceremony.",
    costOfLiving: "Among the more affordable corners of the continent: café meals, produce, and rent outside central Sarajevo cost a fraction of Croatian prices across the border. Imported goods carry markups, and average salaries are very low. The convertible mark is pegged to the euro, which keeps pricing stable.",
    upsides: [
      "Whitewater rafting on the Neretva and Tara rivers rivals Alpine trips at a fraction of the outfitter prices.",
      "Sarajevo's August film festival fills the city with international cinema and is the cultural event of the year.",
      "Blagaj's dervish lodge at the mouth of a river cave and Mostar's rebuilt bridge sit within easy reach of both major cities."
    ],
    downsides: [
      "Winter air quality can worsen in some urban valleys.",
      "Emigration has hollowed out the young workforce — towns feel older than their age, and finding specialized services can take real time.",
      "Rail coverage is skeletal and roads are winding; getting between cities means slow buses or patient driving."
    ],
  },
  "Bulgaria": {
    culture: "March 1 brings 'Martenitsa' — the red-and-white thread tied to wrists and tree branches to hurry spring along — and May 24 celebrates the Cyrillic alphabet itself with school parades. The national yogurt's bacteria is literally named for the country, a point of quiet pride. 'Horo' folk dancing reappears at every wedding, and the mountains frame most weekends for anyone who owns boots.",
    people: "Reserved first, warm second: Bulgarians take a beat to thaw, then offer startling hospitality that includes feeding you whether or not you arrived hungry. The famous head-shake reversal — a nod can mean no — trips every newcomer at least once. Loyalty to friends is fierce and long.",
    costOfLiving: "Some of the lowest big-city costs in the EU: restaurant meals, transit passes, and rent in Sofia cost a fraction of Western capitals, and smaller towns run cheaper still. Imported goods and cars are the exception — they carry Western prices against local salaries. Mountain resorts stay cheap outside ski weeks.",
    upsides: [
      "Vitosha mountain rises at the southern edge of Sofia's bus network, putting alpine hiking above the city within an hour.",
      "Plovdiv — a 2019 European Capital of Culture — layers a Roman theater and Ottoman lanes around a walkable old town.",
      "Black Sea beaches at Varna and Burgas stay cheap and crowd-free in June and September."
    ],
    downsides: [
      "Slow administration, grey lowland winters, and an aging population outside Sofia and Plovdiv.",
      "Sofia sits in a valley bowl: winter inversions trap smog over the city for days at a stretch.",
      "Public healthcare runs on long queues, so private insurance and out-of-pocket care are the working norm."
    ],
  },
  "Croatia": {
    culture: "A country of strong regions — Dalmatian coastal ease, continental briskness, Slavonian village tradition — each with its own food loyalties and accent. Family olive oil and wine production is a living household habit rather than a heritage display: October means picking, November means pressing. The Catholic calendar structures the year, with saints' days doubling as village holidays up and down the coast.",
    people: "Direct, witty, and quick with an opinion — Dalmatians especially trade playful jibes as a form of welcome. Hospitality follows a firm script: you are offered the best the house has, and refusal is not really on the menu. A summer acquaintance who returns in winter becomes family.",
    costOfLiving: "Mid-priced by EU standards with a tourist premium: Split and Dubrovnik rents and restaurant bills spike hard in July and August, while Zagreb and the continental towns stay noticeably cheaper all year. Groceries are reasonable; island life adds ferry and import costs. The euro arrived in 2023, ending the kuna's mental math.",
    upsides: [
      "Eurozone and Schengen membership since January 2023 removed border queues and currency friction with the rest of the EU.",
      "Plitvice Lakes' boardwalk trails and a string of national parks sit within weekend-trip distance of both major cities.",
      "The off-season Adriatic from October to May hands residents the same coastline at local prices."
    ],
    downsides: [
      "Coastal towns turn quiet and shutter services during off-season winter months, and domestic wages remain low.",
      "July and August double prices on the coast — restaurants, parking, and rentals all shift to visitor pricing overnight.",
      "Officialdom still wants signatures and in-person counter visits; expect a notary for things the rest of Europe does online."
    ],
  },
  "Cyprus": {
    culture: "Drive on the left, queue British-style, transact in English — the colonial inheritance shapes daily texture more than most residents notice. The Cypriot dialect of Greek is its own music, and village 'kafeneia' (coffeehouses) still function as the older generation's parliament. 'Siga siga' — slowly, slowly — is less a phrase than a governing philosophy, and the May-to-October heat enforces it.",
    people: "Talkative, warm, and networked to an extreme — everyone knows everyone's cousin, and a personal recommendation outranks any review site. Family is the operating system, and invitations flow quickly once you are known. Hospitality means second helpings pressed as a matter of pride.",
    costOfLiving: "Island pricing bites: groceries run above mainland Greece, fuel is pricey, and Limassol rents have climbed among the continent's steepest. Eating out is manageable at the taverna end and steep at the marina end. The low-tax salary structure buys back some of the sting for residents.",
    upsides: [
      "English is used everywhere — contracts, hospitals, and government offices operate comfortably in it.",
      "A 12.5% corporate tax rate keeps the professional and startup job market unusually international.",
      "Swimming runs from May into November, and the beach is a weekday-after-work option rather than a vacation."
    ],
    downsides: [
      "A divided island: services, property, and travel differ between the south and the north; summers are intense.",
      "There is no railway and bus coverage thins outside the main cities — the island runs on cars, and the traffic shows it.",
      "Chronic drought and desalination dependence make water a real constraint; restrictions surface in dry summers."
    ],
  },
  "Czech Republic": {
    culture: "Bohemian domesticity with a theatrical streak: the old Christmas carp tradition famously kept a live fish in the family bathtub, weekend mushroom-foraging is scored like sport, and a 'chata' (country cottage) culture empties Prague on Fridays. Puppetry, absurd humor, and classical music run deep in the culture's self-image. Religion barely registers — the working calendar is secular through and through.",
    people: "Reserved, dry, and allergic to salesmanship — sincerity is measured by how little is performed. Small talk stays minimal, and friendships accrete slowly over shared tables and walks. Czechs keep a running ironic commentary on their own country; joining it is halfway to belonging.",
    costOfLiving: "Prague has drifted toward Western prices in the center, but transit passes, groceries, and life one neighborhood out stay moderate. Rent is the pressure point — the core is tourist-priced and short on listings. Brno and the regional cities run noticeably cheaper than the capital.",
    upsides: [
      "Prague's annual transit pass covers trams, metro, buses, and the Petřín funicular for less than most Europeans pay in a month.",
      "Trains reach Berlin, Vienna, Kraków, and Budapest in a handful of hours — Central Europe's hub country.",
      "Bohemian Switzerland's sandstone gorges and the Šumava forests sit within weekend train range of the capital."
    ],
    downsides: [
      "Czech language is notoriously difficult for foreigners, and administrative paperwork is often slow.",
      "Prague's rental market is tight and agency-fee-heavy; good flats move fast and center prices track the tourist trade.",
      "Smaller shops and services outside the cities still expect cash more often than card-first newcomers expect."
    ],
  },
  "Denmark": {
    culture: "Consensus culture with a firewall against self-importance: 'Janteloven' (the Jante law), the unwritten rule against acting superior, keeps bragging socially expensive. December belongs to 'julefrokost' — the rolling Christmas lunch of herring, snaps, and speeches — and summer compresses a year's socializing into six weeks of light. Doors, prams parked outside cafés, and unlocked bikes are ordinary sights rather than anecdotes.",
    people: "Friendly within structure: Danes are easy to meet and slow to befriend — childhood and club circles stay intact for life, and calendars are booked weeks out. Directness is gentle but real; a no arrives without padding. Once inside a circle, the loyalty runs for decades.",
    costOfLiving: "The top band is real: restaurant mains, taxi rides, and any labor involving service cost punishing amounts, and Copenhagen housing competes brutally. Discounter groceries stay within reason, and nobody needs a car — bikes and transit absorb most trips. Taxes buy back healthcare, childcare, and schooling without invoices.",
    upsides: [
      "'Flexicurity' — easy hiring paired with strong safety nets — makes changing jobs and starting companies genuinely low-drama.",
      "The Øresund link puts Malmö and Sweden's south about thirty-five minutes by train from central Copenhagen.",
      "Summer light runs past ten in the evening, and the whole city relocates to waterfronts, parks, and garden parties until it ends."
    ],
    downsides: [
      "Dark and windy winters, acute housing competition in Copenhagen, and expensive everyday dining out.",
      "Adult friendship is the slow queue: lifelong school and club circles rarely open, and newcomers can wait years for a real invitation.",
      "Car ownership is taxed brutally — registration duties can double or triple a vehicle's price — which keeps the country bike-first whether you like it or not."
    ],
  },
  "Estonia": {
    culture: "A singing nation: the 'Laulupidu' song festivals that once helped end Soviet rule still fill a purpose-built amphitheater with tens of thousands of voices, and choir remains a normal hobby rather than a niche one. The UNESCO-listed smoke-sauna tradition survives in the southeast, and Soomaa's bogs offer snowshoe treks across landscapes that look pre-human. More than half the country is forest, and Estonians use it constantly.",
    people: "Quietly warm and allergic to filler: Estonians say what they mean, skip the weather talk, and treat silence in conversation as comfortable rather than awkward. Friendship is demonstrated by doing — a bog hike, a fishing spot, a cabin invitation. Outsiders who respect the reserve find it opens fairly quickly.",
    costOfLiving: "Priciest of the Baltics, still well below the Nordics across the water: Tallinn rent and groceries sit above Riga and Vilnius, matched by higher salaries. Alcohol is taxed firmly. Weekend leisure is mostly forest, bog, and coast, which costs nothing and shapes how the budget actually feels.",
    upsides: [
      "The e-Residency program lets non-residents run an EU-flagged company on Estonia's digital rails entirely online.",
      "The Tallinn–Helsinki ferry crosses in roughly two hours, putting Finland's capital in weekend range.",
      "Lahemaa's coastal forests and manor parks sit under an hour's drive from the capital."
    ],
    downsides: [
      "Long dark winters, a small market centered on Tallinn, and Estonian or Russian needed for some administration.",
      "Specialist healthcare means referrals and waits; the best care clusters in Tallinn and Tartu, and everything non-urgent queues.",
      "Sundays are near-silent: shops close early, and outside the two big cities the weekend options thin to forest and home."
    ],
  },
  "Finland": {
    culture: "'Sisu' — the untranslatable word for gritted-teeth endurance — is the national self-definition. The calendar proves it: midsummer is spent at the 'mökki' (lakeside cottage) with swimming, bonfires, and mosquitoes, and December runs on candles and the 'pikkujoulu' party circuit. Tango, of all imports, is a genuine Finnish passion with its own summer festival, and coffee is consumed at per-capita levels no other country approaches.",
    people: "Warmth arrives in deeds rather than words — the cottage invitation, the fishing hole shared, the refill poured without asking. The threshold into Finnish friendship is high, and the loyalty past it is rare and permanent. Solitude in public is respected as a right, not treated as a symptom.",
    costOfLiving: "Helsinki runs the top band for dining and services, though rents stay below Stockholm or Copenhagen levels, and prices soften the farther north you go. Secondhand markets are a genuine institution rather than a subculture. The majority of weekend leisure — lakes, forests, cabins — costs nothing at all.",
    upsides: [
      "'Jokamiehenoikeus' — everyman's right — lets you camp, hike, and forage across nearly all private land within reason.",
      "International studies have repeatedly ranked Finland's air among the cleanest measured anywhere.",
      "Statutory summer leave runs long, and July shows it — offices thin out for weeks at a time and nobody apologizes."
    ],
    downsides: [
      "Long and freezing Nordic winters, introverted social communication where small talk is rare, and high alcohol taxes.",
      "Careers outside the international tech sector usually run in Finnish — language study is not optional for the long game.",
      "Outside Helsinki the map empties: distances are long, services thin, and specialist anything may mean a trip south."
    ],
  },
  "Hungary": {
    culture: "A language that stands utterly alone — related to nothing spoken nearby — anchors a culture of wordplay, memorized poetry, and argument as recreation. 'Pálinka' (fruit brandy) governs the toasts, gulyás is a household staple rather than a menu cliché, and folk-dance ensembles survive as real community institutions. The national temperament runs dark-humored; complaint is a conversational art form practiced with pride.",
    people: "Witty, argumentative, and hospitable in the old style — guests are fed insistently, and a dinner invitation means hours, not minutes. Warmth arrives wrapped in irony. Pessimism is a shared dialect rather than a mood, and trust, once established, runs deep and personal.",
    costOfLiving: "Central Europe's value case: market-hall groceries, transit, and most services cost far less than in Vienna an hour west. Budapest rent climbs with demand but stays below Western levels, and the provinces are dramatically cheaper. The forint's swings make imported electronics and cars expensive against local wages.",
    upsides: [
      "Lake Balaton's beach towns and vineyard hills sit an easy train ride from the capital for summer weekends.",
      "State-opera and concert tickets cost a fraction of any Western capital's — a night of music is a midweek habit.",
      "The Danube Bend — Visegrád's castle trails and Szentendre's artist lanes — turns a spare Saturday into a proper outing."
    ],
    downsides: [
      "Government policy has chilled some civil liberties and press freedom; Hungarian is essential for paperwork.",
      "Public healthcare is underfunded — long waits push most employed people into supplementary private insurance.",
      "Winter inversions settle haze over Budapest's river bowl for days; the air lags Western capitals."
    ],
  },
  "Iceland": {
    culture: "The calendar is written in light: summer stretches the evening until it dissolves, and December compresses the day to a few hours of pearly grey. Icelandic coins new words rather than borrowing — 'sími' for telephone — and midwinter 'þorrablót' feasts revive fermented Viking-era foods with evident enjoyment. The society is small enough that everyone stands two acquaintances apart, and it acts like it.",
    people: "Direct to the point of bluntness and informal to the point of universal first names — everyone from the prime minister down is addressed by their given name. Hierarchy is nearly invisible in introductions, and conversations start in the middle rather than at the weather. Generosity is practical rather than ceremonial.",
    costOfLiving: "Everything imported carries freight costs, so the grocery basket shocks newcomers — the Bónus discount chain is the budget's best friend, and geothermal heating keeps utility bills the lowest surprise on the bill. Cooking at home is the national coping strategy; restaurants are occasions by design. Salaries are scaled to match, which helps residents more than visitors.",
    upsides: [
      "Geothermal district heating means winter utilities cost a fraction of what the latitude implies.",
      "The Ring Road loops the island's volcanoes, glaciers, and waterfalls into one drivable circuit that residents do in long weekends.",
      "Near-universal English fluency makes working and social life accessible from day one."
    ],
    downsides: [
      "Extremely high costs for food, groceries, and dining out, unpredictable gale-force weather, and car dependency.",
      "The society is small enough that anonymity does not exist — your landlord, boss, and dentist share group chats, and everyone knows everyone's business.",
      "Everything takes booking: rentals, restaurant tables, and trips need months of lead time, and the summer crush complicates even errands downtown."
    ],
  },
  "Ireland": {
    culture: "Conversation is the national craft — weather as the opener, sport as the second verse, no topic off-limits by the third — and the calendar belongs to community institutions: the GAA club runs underage training, lotto draws, and half the parish's social machinery on volunteer power. The Leaving Cert turns exam season into a national drama with radio coverage. Summer fills with local festivals, each town sure its own is the real one.",
    people: "Warmth arrives in the first five minutes — small talk is genuine here, and strangers chat at bus stops without alarm. 'Slagging' (affectionate mockery) is the friendship dialect: if a local teases you, you are being welcomed. Easy rapport does not automatically open the inner circle, but it makes the wait pleasant.",
    costOfLiving: "Groceries, fuel, and pints are pricey but ordinary; housing is the outlier that bends every budget — Dublin prices even solid salaries out of the neighborhoods they work in. Costs soften fast outside the capital. A heating bill in an older rural house can surprise winter arrivals.",
    upsides: [
      "The EU's only country where English is the everyday first language — post-Brexit, that makes it the natural landing spot for English-first movers.",
      "The GAA club system hands newcomers an instant community — coaching, volunteering, and summer camps fold new families in within weeks.",
      "Wild Atlantic Way weekends put surf beaches, harbor towns, and small music sessions within a Saturday's drive of the main cities."
    ],
    downsides: [
      "Severe housing crisis in Dublin and Cork with very expensive rent, along with persistent drizzle and overcast skies.",
      "Public healthcare runs on waiting lists — specialist referrals mean months, and private insurance is close to mandatory for anyone employed.",
      "Outside Dublin the public-transport map thins sharply; rural life comes bundled with a car and long drives."
    ],
  },
  "Kosovo": {
    culture: "Europe's youngest population by a distance — the median age sits around thirty — and the energy is audible on Pristina's streets. Family is the operating system, and the diaspora's summer return fills the roads with German- and Swiss-plated cars and doubles the population of many towns. 'Fli', a layered pastry baked for hours under embers, anchors celebrations; generosity around food is competitive and sincere.",
    people: "Young, informal, and fluent in the languages of elsewhere — English is common among the under-forties, and hospitality carries real pride. Guests are fed past comfort, and introductions move through family networks quickly. The diaspora's footprint means many people hold two cultural fluencies at once.",
    costOfLiving: "Among Europe's lowest price tags: rent, restaurant meals, and nights out cost a fraction of the neighbors', and a modest Western income lives very well. Imported goods carry markups, and salaries are among the continent's lowest. The euro is the working currency, which keeps pricing legible.",
    upsides: [
      "The Rugova Gorge above Peja opens into alpine trails, via ferrata, and swimming holes within an hour of the capital.",
      "Nights out cost so little that the full social calendar runs on local wages without strain.",
      "A population with one of Europe's lowest median ages keeps the pace restless — new cafés, festivals, and small ventures open constantly."
    ],
    downsides: [
      "Partial recognition complicates some passports, visas, and flights; power reliability and administration vary.",
      "Getting beyond the region usually means routing through neighboring capitals — direct flights and connections are thin.",
      "Winter air over Pristina thickens when cold settles in and household heating stacks up."
    ],
  },
  "Latvia": {
    culture: "Song is the national spine: the Song and Dance Festival, held every five years, fills a riverside amphitheater with tens of thousands in national dress, and the folk-song archive of 'dainas' — four-line quatrains — is a national monument. Solstice customs predate the country's Christianity comfortably; the old symbols decorate everything from mittens to money. 'Riga Black Balsam', the bitter herbal liqueur, anchors the joke end of toasts.",
    people: "Measured, reserved, and precise — Latvians speak when there is something to say and take introductions seriously. Baltic reserve thaws over seasons rather than meetings; an invitation to a family table is the real milestone. Dry humor surfaces once trust settles in.",
    costOfLiving: "Rents and groceries sit below Tallinn's, and the rest of the country is dramatically cheaper than the capital. Imported goods and dining trend toward Western-adjacent pricing. The countryside weekend economy runs on friends' farms, which keeps leisure nearly free.",
    upsides: [
      "Jūrmala's white-sand beach resort sits half an hour by train from central Riga — a Baltic swim before dinner is a real option.",
      "The Central Market's five converted Zeppelin hangars run one of Europe's great daily food markets at local prices.",
      "Half the country is forest and coast, both public, mostly empty, and rarely more than an hour away."
    ],
    downsides: [
      "Winters are long and dark, and the job market is concentrated in Riga; Latvian or Russian helps with services.",
      "The countryside is emptying — villages lose their young to Riga and to jobs abroad, leaving services thin.",
      "Intercity trains and buses are sparse, so life outside the capital quietly assumes a car."
    ],
  },
  "Liechtenstein": {
    culture: "A principality that runs like a family firm: the prince's castle watches over Vaduz from its hillside, roughly one registered company exists for every seven residents, and the state's wealth funds a manicured calm. 'Käsknöpfle' — cheese dumplings baked under fried onions — is the national comfort dish. German is the language, the Swiss franc the currency, and the whole country passes in about half an hour by car.",
    people: "Discreet, punctual, and quietly kind — greetings are formal, reputation is municipal, and everyone knows everyone's surname. Newcomers are welcomed politely and absorbed slowly. A third of the workforce arrives daily from neighboring countries, so the social fabric is less closed than it first appears.",
    costOfLiving: "Swiss-franc prices matched by Swiss-grade salaries for locals: groceries, meals, and services run at Zurich's level, softened by the cross-border supermarket run. Eating out is expensive enough that home kitchens dominate. The arithmetic works for the employed; it is brutal for the self-funded.",
    upsides: [
      "Alpine trails start at the edge of every village, and the whole principality's network is walkable from the Rhine valley floor.",
      "Crime is close to nonexistent, and children walk to school through villages where everyone recognizes them.",
      "Salaries sit at Swiss levels while the commute and the calendar run at village scale."
    ],
    downsides: [
      "Housing and residence permits are scarce, and many practical needs spill over into Austria or Switzerland.",
      "There is no airport of its own — Zurich is the nearest hub — and the cultural calendar is thin enough that big-city evenings mean crossing a border.",
      "Winter fog settles into the Rhine valley for weeks, dimming the alpine light everyone came for."
    ],
  },
  "Lithuania": {
    culture: "Basketball is the shared religion — Euroleague nights in Kaunas fill the Zalgiris arena like a cathedral — and the Christmas Eve table carries the strict twelve-dish 'Kūčios' feast. Cold pink 'šaltibarščiai' (beet soup) is the summer signature, and lake-and-garden weekends are the default leisure. Midsummer bonfires and autumn mushroom hunts run the family calendar.",
    people: "Reserved in public, exuberant at the table: Lithuanians take a few meetings to thaw, then offer loyalty that lasts decades. Directness arrives without cushioning, and complaints about the weather are a bonding ritual. Hospitality expresses itself through food — leaving a Lithuanian table hungry is a failure on the host's side, never yours.",
    costOfLiving: "Vilnius prices climb with the boom years — the center now carries capital-city rates — but groceries, transit, and the provinces stay modest, and a hot lunch at a neighborhood canteen still costs little. Regional cities run far cheaper than the capital. The value case for a moderate income is among Europe's strongest.",
    upsides: [
      "The Curonian Spit's dune landscapes — a UNESCO strip reached by ferry — make an extraordinary summer weekend.",
      "Vilnius ranks among Europe's greenest capitals, with parks inside the city and forests at its edges.",
      "Lakes and swim spots dot the countryside close enough that an evening dip is a routine, not a trip."
    ],
    downsides: [
      "Cold, dark winters and a shrinking countryside; services and jobs cluster in Vilnius and Kaunas.",
      "Vilnius rents are climbing fast with the growth years — the gap between capital and countryside pricing widens annually.",
      "Imported goods, electronics, and fuel carry Western price tags against decidedly non-Western salaries."
    ],
  },
  "Luxembourg": {
    culture: "Essentially one capital ringed by castle villages, the Grand Duchy's calendar still makes room for the 'Schueberfouer' — a giant funfair running since 1340 that takes over the Glacis field for three weeks each summer. Three administrative languages share the paperwork, and the national identity runs quietly confident beneath the banking glass. Sunday family lunches in village gardens hold much of the society together.",
    people: "Polite, international, and reserved — one of Europe's highest shares of foreign-born residents makes newcomers normal rather than novel. Friendships form through work, clubs, and children more than serendipity. Luxembourgish, the national language, is the insider's door; even a few phrases open genuine warmth.",
    costOfLiving: "Salaries are among the EU's highest, and the prices compete: central housing and restaurant meals run top-tier, groceries less so, and the classic resident strategy is a French or German supermarket run across the border. Fuel is cheap enough that neighbors fill up here. The arithmetic works because the wage floor is high.",
    upsides: [
      "EU institutions, funds, and a dense finance sector keep the job market deep for English, French, and German speakers alike.",
      "Weekend geography spans three countries — Moselle vineyards, the Ardennes, and German river towns within an hour.",
      "Safety is exceptional for a financial capital — violent crime is rare and streets stay calm late."
    ],
    downsides: [
      "Housing is scarce and pricey, and most workers commute across the French, Belgian, or German border.",
      "The cultural calendar is quiet for the wealth on display — a mid-sized town's scene at capital prices.",
      "Without French, German, or Luxembourgish, professional life stalls beyond the international-firm bubble."
    ],
  },
  "Malta": {
    culture: "A Catholic archipelago where village life still turns on the parish — the calendar, the schools, and Sunday rhythms all bend toward it — and the Maltese language, Europe's only Semitic tongue, writes Arabic roots in Latin script with Italian poured over the top. The islands are small enough that the sea is minutes from anywhere, which shapes weekend plans, real estate, and temperament alike. English signage sits over all of it.",
    people: "Chatty, warm, and loud in the affectionate register — conversations start mid-sentence, neighbors know your business, and hospitality means feeding guests as a reflex. English makes integration easy from day one. Family networks run the practical world; a cousin exists for every problem.",
    costOfLiving: "Island economics: groceries run above mainland Europe, and Sliema-to-St-Julian's rents have climbed hard with remote-work demand. The neighborhood baker and local eats stay cheap; anything imported or waterfront is priced accordingly. Air-conditioning season adds a summer electricity line item.",
    upsides: [
      "English is an official language — courts, hospitals, and government run in it natively.",
      "Swimming runs from April into November, and rocky beaches sit within walking distance of most towns.",
      "The whole country fits inside a half-hour drive — airport, cliffs, and beaches included."
    ],
    downsides: [
      "One of Europe's densest islands: summer crowds, scarce housing, and building-season noise.",
      "Car density runs among Europe's highest on roads built for a slower century — congestion is structural, not a rush hour.",
      "Island fever is real at this size: a genuine break requires an airport and a flight."
    ],
  },
  "Moldova": {
    culture: "Village culture in a country's clothing: the deepest of house-party hospitality, 'Mărțișor' red-and-white threads tied on March 1, and Orthodox feast days that still organize the rural year. Romanian and Russian both circulate, marking generations and geographies. The limestone cliffs of Orheiul Vechi, with hermitages carved above the river, anchor the landscape's identity.",
    people: "Among the most spontaneously welcoming people in Europe — an invitation follows acquaintance quickly, and the table fills with everything the household has. Direct questions about your life arrive within minutes. The under-forties increasingly speak English and lead with Romanian, while Russian still bridges generations.",
    costOfLiving: "Europe's lowest cost base: market produce, bread, restaurant meals, and rent all run at levels the rest of the continent forgot — a Chisinau apartment costs little by any standard. Imported goods and fuel carry the markups rent does not. A remote or IT income makes the arithmetic extraordinary.",
    upsides: [
      "Orheiul Vechi's cave monastery and river valley make a spectacular half-day from the capital for almost nothing.",
      "Wine estates like Purcari pour international-quality bottles at local prices an hour south of the capital.",
      "Chisinau's small IT scene punches far above the country's income level, hiring English-first at strong local salaries."
    ],
    downsides: [
      "It remains Europe's poorest economy; energy costs, emigration, and Romanian or Russian shape daily life.",
      "Roads between towns are patched and slow, and the 'marshrutka' (shared minivan) sets the intercity pace.",
      "Outside the capital, cash remains the working assumption — card coverage thins quickly in smaller towns."
    ],
  },
  "Monaco": {
    culture: "A hillside state that runs like a private club: the prince's palace on 'Le Rocher' (the rock) looks over a harbor of superyachts, the opera keeps its season, and everything is polished to a shine that never quite fades. The Monégasque themselves — a small tribe with their own Ligurian dialect — hold traditions most visitors never notice beneath the glamour. Life here is formal, centered on the sea, and safe to the point of blandness.",
    people: "Courteous, discreet, and socially tiered — Monégasque families, international residents, and the French-speaking workforce occupy visible layers, and code-switching between them is the local fluency. Formality is the register; warmth shows in familiarity. Reputations precede everyone in a state this size.",
    costOfLiving: "The price is the point: rent for a modest apartment can exceed a European salary whole, coffee runs Riviera-level, and groceries price for yachts, with the residents' tax regime as the counterweight. Ordinary shopping and routines hop over the border to France. Everything else is scaled to the harbor's standards.",
    upsides: [
      "No personal income tax for residents — with French nationals the documented exception under a 1963 treaty — an arrangement with no real equivalent in Europe.",
      "The Nice–Ventimiglia rail line runs through the principality — the Riviera and Italian Liguria are train rides away.",
      "The principality's hospital and nearby Nice's university hospitals give the area top-tier healthcare within a short radius."
    ],
    downsides: [
      "Residency requires proving substantial wealth or a Monaco employer, and most workers commute from France.",
      "There is effectively no rental market — a few thousand flats cycle through a tiny inventory, and whatever is available prices accordingly.",
      "Ordinary life requires France: supermarkets, variety, and most practical errands mean crossing the border or paying the premium."
    ],
  },
  "Montenegro": {
    culture: "One small country holding two worlds: the Adriatic coast's walled towns and beach bars, and the mountain north's plateaus, canyons, and snow — the beach-to-alpine drive takes a single afternoon. Family networks run deep and proud, and guest protocol means the best seat, the best glass, and a toast to your health before questions. The whole country is small enough that the sea, a lake, and a mountain range all fit in one Saturday.",
    people: "Easygoing and fiercely proud of the place — conversations about the country's virtues are only half ironic. Hospitality follows the Balkan script: you are fed, toasted, and adopted by the end of the evening. Everyone is someone's cousin, and problems dissolve into networks fast.",
    costOfLiving: "Euro-denominated and affordable by Adriatic standards — meals out and most town rents sit below Croatian equivalents, though the Bay of Kotor climbs with foreign demand. The coast doubles its prices in season; the north stays quiet and cheap all year. Seasonal tourism work pays in tips.",
    upsides: [
      "The euro is the working currency despite no eurozone membership — banking and pricing stay simple for EU-linked movers.",
      "The Belgrade–Bar railway threads gorges and viaducts on one of Europe's great rail rides.",
      "Tara River Canyon — among Europe's deepest — runs a spring rafting season on snowmelt."
    ],
    downsides: [
      "Coastal life runs on tourist seasons; administration is slow and winter infrastructure is limited.",
      "Beyond tourism, real estate, and bars, the job market is thin — professional careers mean the coast's season or a border commute.",
      "The rail map is one line; everywhere else means buses or your own car on mountain roads."
    ],
  },
  "North Macedonia": {
    culture: "Skopje runs hot — the valley summer is among Europe's fiercest — and the country shifts toward Ohrid when it does, where beaches and Byzantine churches share the same water. Autumn is the 'ajvar' ritual: whole households roasting and jarring peppers until the kitchen smells like the national dish in progress. Orthodox and Muslim calendars overlap openly — two Easters and two Christmases pass each other on the same streets.",
    people: "Warm, direct, and generous to a fault — guests are fed before they are introduced, and invitations escalate quickly from a first hello to family celebrations. Two communities share the country, and daily courtesies cross that line more easily than politics suggests. English is common among younger city residents.",
    costOfLiving: "Among the cheapest corners of the Balkans: restaurant meals, rent, and café life run far below Croatian or Greek levels, and Ohrid adds only a seasonal premium. Imports and fuel cost Western-adjacent against very low salaries. For a remote income, the value is hard to beat on the continent.",
    upsides: [
      "Lake Ohrid — a UNESCO lake with medieval churches at the waterline — is the summer default, an easy weekend from the capital.",
      "Matka Canyon's kayaking and cave hikes sit half an hour from downtown Skopje.",
      "Fresh markets and meals out cost little enough that hosting and being hosted are both easy habits."
    ],
    downsides: [
      "Local language skills help with administration and work outside central areas.",
      "Winter smog settles over Skopje's bowl — some evenings rank among Europe's worst air.",
      "The capital's summer heat is an infrastructure problem — buildings without air-conditioning turn July into an endurance event."
    ],
  },
  "Poland": {
    culture: "Family tables anchor the week: name days ('imieniny') are celebrated nearly as seriously as birthdays, the 'Majówka' May holidays turn the country into one long road trip, and All Saints' Day transforms cemeteries into oceans of candlelight each November 1. The proverb 'Gość w dom, Bóg w dom' — a guest in the house is God in the house — is practiced literally. Catholicism sets the calendar's rhythm even for those who skip Mass.",
    people: "Formality first — strangers are 'Pan' and 'Pani' (sir and madam) until mutual agreement changes it — but warmth arrives generously, and hosts will not be argued with about food. Poles are direct with opinions and quick with practical help. Friendships form fast and are kept seriously.",
    costOfLiving: "The value champion among Europe's larger countries: rent, transit, and groceries stay well below German or Austrian levels, though the Warsaw and Kraków centers climb annually. Wrocław, Poznań, and the regional cities balance price and livability well. Restaurant culture is affordable enough to be a weekly habit.",
    upsides: [
      "Fast rail links Warsaw and Kraków in under three hours, with Gdańsk and Wrocław on quick connections too.",
      "The Baltic coast and the Masurian lake district bracket the country with two entirely different summer cultures.",
      "English-speaking corporate hubs in Warsaw, Kraków, and Wrocław hire internationally at rising local salaries."
    ],
    downsides: [
      "Winter air quality can suffer from coal heating in smaller towns, and social policies remain more conservative than Western Europe.",
      "Public specialist care runs on queues — private insurance is cheap enough that most employed people simply carry it.",
      "Warsaw and Kraków rents are rising faster than anywhere else in the country, stretching the capital-province gap."
    ],
  },
  "Romania": {
    culture: "Latin-Balkan warmth on a Transylvanian foundation: name days ('ziua numelui') are celebrated like birthdays, mountain cabins ('cabane') fill on weekends with hikers, and 'țuică' (plum brandy) appears the moment you cross a household threshold. Village life still runs on orchards, preserves, and grandparents, while Bucharest moves at a caffeinated pace. The Orthodox calendar quietly structures the rural year.",
    people: "Warm, ironic, and immediately conversational — opinions, jokes, and life stories arrive within the first meeting. Hospitality means being fed the household's best and interrogated affectionately about your own. Underneath the fatalistic humor sits genuine optimism about where the country is heading.",
    costOfLiving: "Cheap in the way that reshapes budgets: market produce, restaurant meals, and services cost far below Western levels, and provincial cities run cheaper still. Bucharest and Cluj rents climb with tech demand. A modest remote salary lives like a generous local one.",
    upsides: [
      "The Carpathians' marked trails and mountain 'cabane' huts make hut-to-hut hiking a national pastime within reach of every city.",
      "Fast fiber internet runs deep into the country — rural speeds embarrass parts of Western Europe.",
      "Transylvania's Saxon villages and fortified churches, a UNESCO landscape, sit within weekend range of the major cities."
    ],
    downsides: [
      "Rural roads and healthcare lag Western Europe; earthquakes are a documented risk in Bucharest.",
      "Bucharest and Cluj rents are climbing fast as the tech scene grows — the value window narrows every year.",
      "Bureaucracy still favors paper, stamps, and multiple in-person visits — patience becomes a utility."
    ],
  },
  "Russia": {
    culture: "Hospitality is theatrical: guests are fed beyond capacity, toasts follow an unwritten script, and hosting well is a competitive art. New Year, not Christmas, owns the winter tree-and-gifts season; the 'banya' (bathhouse) with its birch-branch ritual is the weekly reset; travelers sit down in silence for a moment before journeys for luck. Superstition is alive and affectionate — it schedules when to sit and which corner of the table is yours.",
    people: "Surfaces are brusque — service without a smile, strangers without filler — and underneath sits a loyalty culture deeper than most: friendship means being needed at 3 AM and showing up. Conversations turn philosophical fast once trust forms. Formality and warmth coexist without contradiction.",
    costOfLiving: "Moscow and Petersburg price as world cities for rent and dining, while food, transit, and cultural tickets stay startlingly cheap — top-ballet gallery seats can cost less than Western cinema. The regions run far cheaper than either capital. Imports are the volatile line, priced by the ruble and the sanctions map.",
    upsides: [
      "The Bolshoi, the Hermitage, and great orchestras price tickets for local budgets — high culture as a weekly habit.",
      "The Sapsan links Moscow and St Petersburg in about four hours, making the two capitals one corridor.",
      "Long-distance sleeper trains make continental distances navigable — waking up 700 kilometers away is ordinary."
    ],
    downsides: [
      "Climate, services, and travel conditions vary greatly across the country; consult current official guidance.",
      "Foreign-issued cards do not work anywhere in the country — daily life runs on cash or a locally issued Mir card.",
      "Distances are continental: a weekend trip can mean time zones, and options thin outside the main corridors."
    ],
  },
  "San Marino": {
    culture: "The world's oldest surviving republic by its own telling — locals date it to a stonemason named Marinus in the fourth century — run today by two Captains Regent who change every six months. 'Torta Tre Monti' (a layered wafer cake named for the three towers) is the state dessert, stamps are a minor national industry, and Italian life flows in and out without border friction. The old center is a ridge of towers above the Romagna hills.",
    people: "Proud, formal-courteous, and family-networked — Sammarinesi hold one of the world's oldest citizenships and treat it accordingly. Most speak Romagna's dialect alongside standard Italian. The population is small enough that every family knows every other, and friendships are generational.",
    costOfLiving: "Prices are Italian — specifically Romagna's: groceries, meals, and services match the region below the mountain rather than any tax-haven stereotype. Housing is the catch; the inventory is tiny and mostly passes within families. Fuel and some goods run a little cheaper than Italian equivalents.",
    upsides: [
      "Taxation runs lighter than Italy's on several fronts, which supports a comfortable life at ordinary regional prices.",
      "Rimini's Adriatic beaches sit half an hour below the mountain, and Bologna's arcades are a straightforward two-hour drive.",
      "Crime is nearly nonexistent, and the state's size means officials answer their own phones."
    ],
    downsides: [
      "Residence permits are quota-limited and nearly all practical life happens through nearby Italian towns.",
      "Evenings and Sundays are pre-quiet-village strict: shops shutter early and the mountain goes dark by nine.",
      "Finding housing means word of mouth rather than listings — flats rarely reach the open market."
    ],
  },
  "Serbia": {
    culture: "'Slava' — the family's saint day, celebrated with candles, ritual bread, and an open house — is UNESCO-listed and the strongest institution in the calendar; the extended family rotates through each member's slava in turn. 'Inat' (defiant pride, doing the opposite to spite) is a national operating principle acknowledged with humor. Cyrillic and Latin scripts share every street, and autumn ajvar pepper-roasting perfumes whole neighborhoods.",
    people: "Expressive, loyal, and quick to argument followed by quicker embrace — volume is not anger here. Hospitality runs deep: a friend's family adopts you within weeks. Dark humor and self-awareness are conversational defaults, and complaining about Belgrade is a Belgrade tradition.",
    costOfLiving: "Belgrade keeps big-city life at Balkan prices: restaurant meals, café sessions, and nights out cost a fraction of Western capitals, and rents, though rising annually, sit below regional peers. Groceries run cheap; imports price at Western levels. The arithmetic works best for earners bringing income from outside.",
    upsides: [
      "EXIT festival fills Novi Sad's fortress with a global lineup each July — one of Europe's great festivals as local routine.",
      "The Fruška Gora wine hills and Danube monasteries sit an hour from the capital for easy weekends.",
      "Outsourced dev shops hire English-first at salaries that stretch far against local costs."
    ],
    downsides: [
      "Winter smog can settle over Belgrade, and EU-integration politics complicate some long-term plans.",
      "Belgrade's traffic and parking are chaotic by long-standing design flaw — a car here is a daily negotiation.",
      "Local salaries lag imports hard: anything branded, electronic, or foreign carries Western price tags."
    ],
  },
  "Slovakia": {
    culture: "Folk tradition is genuinely alive: the 'fujara' — a UNESCO-listed overtone shepherd's flute — still sounds at festivals like Východná, and weekends belong to 'chata' garden plots and family cottages. Sheep-cheese culture runs deep in the mountains — 'bryndza' is a protected heritage product — and hiking is the default recreation, not a niche pastime. Village Sundays still organize the week across much of the country.",
    people: "Modest, practical, and reserved first — Slovak warmth shows in offers of help and food rather than declarations. Formality fades into dry humor over time. Friendships accrete through shared activity: the hiking club, the cottage, the sports league.",
    costOfLiving: "Bratislava's rents run well below Vienna's an hour west, and the rest of the country falls away steeply from there. Groceries, transit, and services run low. The east and provincial towns are dramatically cheaper than the capital.",
    upsides: [
      "Vienna's airport, concerts, and flight connections sit an hour west — a metropolis as infrastructure.",
      "Piešťany's historic spa colonnades make a slow weekend of genuine thermal bathing.",
      "Marked trails, mountain huts, and buses to trailheads make Sunday hiking a functioning national system."
    ],
    downsides: [
      "The international job market is small; the rural east lags the Bratislava region in pay and services.",
      "Communist-era apartment blocks dominate the housing stock — condition varies widely by building, and renovation lands on owners.",
      "Lowland winters are grey and damp, with the alpine postcard season shorter than the brochures imply."
    ],
  },
  "Slovenia": {
    culture: "A nation of beekeepers — the Carniolan honeybee is native, World Bee Day was Slovenia's initiative, and hives sit in ordinary gardens — and a nation of hikers, for whom 'pohodništvo' (mountain walking) is the national pastime. Wine is hyper-local, vineyards folding into every region's hills. The society is small enough that a former president famously cycled to work, and everyone found it normal.",
    people: "Polite, reserved, and outdoors-practical — early invitations tend toward the trail rather than the living room, and friendship demonstrates itself through reliability. Slovenians are quietly proud and self-deprecating about it. Once you are in, the warmth is real and the help is concrete.",
    costOfLiving: "Prices sit near Austrian levels while salaries lag them — the richest-feeling corner of the former Yugoslavia is also its most expensive. Ljubljana carries the premium; provincial towns and the east soften it. Market produce and local wine keep the food budget sane.",
    upsides: [
      "The Slovenian Mountain Trail's marked route crosses the country's ridgelines — a national hiking spine with huts throughout.",
      "The Adriatic at Koper sits under ninety minutes from the capital — a sea swim after work is geographically honest.",
      "EU and eurozone membership keep travel, banking, and paperwork frictionless for the EU-linked."
    ],
    downsides: [
      "Ljubljana housing is tight, and Slovenian is needed for most administrative and professional life.",
      "Weekend crowds at the headline spots — Bled's lakefront, the coast — reach residents too; solitude requires the second-tier trails.",
      "The social scene runs quiet and early — evenings out thin fast after nine, and spontaneity is not the default."
    ],
  },
  "Sweden": {
    culture: "The calendar has its own constitution: 'fredagsmys' — cozy Friday, tacos and television — is a national institution, Midsummer's maypole, herring, and snaps songs outrank New Year, and the 'nummerlapp' (queue ticket) governs every counter with silent consensus. Summer light is spent outdoors with a seriousness that repays winter. Alcohol runs through the state monopoly's shops, which keep short Saturday hours and none on Sunday.",
    people: "Kind, considerate, and slow to intrude — personal space is respected so thoroughly that initiating contact is nearly the newcomer's job. Directness is quiet and consensus-shaped; disagreement arrives as a question. Friendship, once formed, is dependable and drama-free, built around activities rather than spontaneous visits.",
    costOfLiving: "High but evenly distributed: groceries are reasonable, transit is well-priced, and rent, services, and restaurant meals carry the premium. The monopoly's taxes make alcohol a planned purchase. Salaries scale to match, and the welfare state removes most of the invoice anxiety that prices elsewhere imply.",
    upsides: [
      "'Allemansrätten' — the right to roam — opens nearly all private land for camping, foraging, and lake swimming with few restrictions.",
      "Parental leave of 480 days per child, shared between parents, is a legal guarantee that reshapes working life.",
      "The Stockholm archipelago's tens of thousands of islands sit a short ferry ride from the capital — summer weekends have their own geography."
    ],
    downsides: [
      "Sub-zero freezing temperatures and short daylight hours in winter, combined with long waiting queues for rental apartments.",
      "Careers beyond the international firms tend to stall without Swedish — meetings, promotion paths, and public life run in it.",
      "The alcohol monopoly's hours are a planning tax: closed Sundays, short Saturdays, and no evening improvisation."
    ],
  },
  "Turkey": {
    culture: "Welcome is a script with no opt-out — 'Hoş geldiniz' is said constantly and meant — and the day's architecture is social: a long 'kahvaltı' (breakfast spread) that runs toward noon, the 'mahalle' (neighborhood) where shopkeepers track your routine, and the 'hamam' (bathhouse) as a weekly reset. Religion paces the calendar more than it polices behavior for most urban residents, and during Ramadan, daytime rhythms ease in some districts.",
    people: "Curious, expressive, and immediate — strangers become conversation partners within minutes, and hospitality escalates from a shared table to a home-cooked meal without much warning. Pride in feeding guests is genuine and competitive; refusing is the only impolite move. Friendship means being absorbed into the family's orbit.",
    costOfLiving: "Cheap at street level: restaurant meals, produce, barbers, and transit cost a fraction of European equivalents, and domestic services are famously affordable. Imported electronics and cars carry painful markups, and many urban rents are quoted in dollars or euros — inflation made hard-currency pricing the norm. A foreign income buys an enviable life; a lira income takes strategy.",
    upsides: [
      "Private hospitals deliver Western-standard care at prices that draw medical travelers from across Europe.",
      "Budget airlines stitch the country together — Istanbul, the coast, and Cappadocia connect for little.",
      "Weekly 'pazar' street markets sell produce at prices supermarkets cannot approach — fresh food is the default, not the luxury."
    ],
    downsides: [
      "High domestic currency inflation affecting daily pricing unpredictably, and intense traffic in Istanbul.",
      "Rents in the big cities are increasingly pegged to hard currency, so housing costs can move independently of the local economy.",
      "Earthquake readiness sits in the back of every mind and every building inspection — it genuinely shapes where and how people choose to live."
    ],
  },
  "Ukraine": {
    culture: "Civil society has reinvented itself around volunteering — mutual-aid networks deliver food, elder care, and drone funding with startling ease — and everyday culture leans on dark humor, long kitchen conversations, and insisting on normalcy as a value. 'Borshch', the beet stew now UNESCO-listed as Ukrainian heritage, is a household ritual rather than a restaurant order. The Ukrainian language has surged in daily use as a deliberate choice.",
    people: "Direct, warm, and armored in humor — conversations go deep quickly, hospitality insists even when the cupboard is modest, and resilience is both expected of everyone and given by everyone. Foreigners are received with curiosity and genuine warmth.",
    costOfLiving: "Modest by European standards, complicated by the war economy: food, transit, and services stay inexpensive, while imported goods, fuel, and some housing markets move with the hryvnia and the moment. An income earned outside the country lives very well; local salaries stretch carefully. Cards and cash both circulate comfortably in the cities.",
    upsides: [
      "Diia, the state-in-a-smartphone app, handles documents, IDs, and a striking share of bureaucracy online.",
      "The tech sector's English-first norms make professional integration realistic for qualified internationals even now.",
      "Volunteer networks double as social infrastructure — newcomers who join one find community and local fluency fast."
    ],
    downsides: [
      "Security conditions are affected by the ongoing war; consult current official travel guidance.",
      "Car ownership now carries a separate military-risk insurance policy on top of ordinary cover — one more monthly line in war-adjusted budgeting.",
      "Millions of Ukrainians live abroad for safety, so birthdays, weddings, and Sunday calls span borders — absence is daily life's quiet tax."
    ],
  },
  "Vatican City": {
    culture: "The year is a liturgical calendar wearing a state's clothes: feast days are the public holidays, the Swiss Guard's new recruits swear their oath each May 6 on the anniversary of the 1527 Sack of Rome, and the Clericus Cup — a football league of seminarians and curial staff — supplies the secular drama. There is no supermarket, no hospital, and no ordinary housing inside the walls; the pharmacy and post office are the civic infrastructure.",
    people: "A workplace of a few hundred that the whole world watches: clergy from every continent, young multilingual guards, and curial staff who greet each other across generations of service. Courtesy is formal and warm by Roman standards. No one here is anonymous.",
    costOfLiving: "The wallet lives in Rome — there is no housing market, grocery store, or utility bill inside the walls, so the practical budget is central Rome's, priced as one of Europe's capitals. The band is honest: this is a neighborhood of a great city with a global institution attached.",
    upsides: [
      "The Vatican post office is famously more reliable than Italy's — Romans themselves cross the border to mail what matters.",
      "Rome's entire urban supply — markets, hospitals, trains, nightlife — starts at the edge of St Peter's Square.",
      "Security is about as close to absolute as the modern world manages, in a state small enough to police every corner."
    ],
    downsides: [
      "Citizenship is functional, not residential: only clergy, guards, and certain workers live inside its walls.",
      "There is no rental market at any price — housing is tied to office or service, and even senior clergy commute in from Rome.",
      "Daily errands mean leaving the state: groceries, schools, and ordinary routines all live on the Italian side of the wall."
    ],
  },
};

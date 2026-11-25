import type { DailyRhythm } from './index';

/**
 * Daily-rhythm copy for mainland Americas countries (North, Central, and South America; Mexico, Canada, Costa Rica, and Colombia are covered elsewhere).
 * Keys match country names in GLOBAL_COUNTRY_METADATA exactly.
 */
export const AMERICAS_A: Record<string, DailyRhythm> = {
  "Argentina": {
    workday: "In Buenos Aires the workday genuinely runs late — 9:00–6:30 or 7:00 — with a 'merienda' revival around 5:00: coffee and medialunas (buttery croissants) that bridge the gap to a very late dinner. Lunch is usually a quick 'menú ejecutivo' near the office.",
    evening: "Dinner rarely starts before 10:00 PM, and kitchens plan for it. Evenings belong to corner cafés, league-night fútbol on TV, and late milongas (tango dance halls) where dancing continues into the small hours.",
  },
  "Belize": {
    workday: "Runs on unhurried 'Belize time' — offices open around 8:00, and the day bends around tourism, farming, and government payrolls. Lunch is a plate of rice and beans with stew chicken, and the midday heat makes the after-lunch stretch move at its own speed.",
    evening: "Once the workday ends, seaside bars pour cold Belikin with fresh ceviche or fried snapper, and dominoes tables fill up outside. Weekends mean boat runs out to the cayes; hurricane season (June–November) quietly shapes everyone's calendar.",
  },
  "Bolivia": {
    workday: "In La Paz, at nearly 12,000 feet, the altitude sets the pace — mornings begin briskly, and many offices take a long midday break for the set 'almuerzo' of soup, a main plate, and dessert. Mid-morning belongs to salteñas, juicy meat-filled pastries eaten hot with tea.",
    evening: "Andean evenings turn cold fast, so street food runs hot: carts selling api (warm purple-corn drink) with fried pastels, and stalls doing tucumanas and papa rellena. Families eat early by Latin American standards — often 7:00–8:00 PM — and streets quiet down by 10:00.",
  },
  "Brazil": {
    workday: "The CLT labor code caps the week at 44 hours, typically 8:00 or 9:00–6:00 with a proper sit-down lunch — the day's big meal, a 'prato executivo' of rice, beans, salad, and a protein. Offices in Rio thin out earlier when the beach calls, especially on Fridays.",
    evening: "Thursday is the unofficial happy-hour night: botecos (corner bars) fill with chopp (draft beer), petiscos (bar snacks), and loud debate over futebol. Weekend meals stretch late around a backyard churrasco grill or a crowded churrascaria.",
  },
  "Chile": {
    workday: "Santiago's Metro does the heavy lifting, packed by 7:30 AM, and offices run roughly 8:30 or 9:00–6:30. The afternoon 'once' — tea with bread, ham, and palta (avocado) — is the break that carries everyone to the evening.",
    evening: "The evening meal is late and often light: 'once-comida' — bread, cheese, and tea around 9:00 PM — replaces a cooked dinner on many weeknights. Weekends open up with asados, pisco sours, and friends dropping by with little notice.",
  },
  "Ecuador": {
    workday: "Starts early — 8:00 or 8:30 in Quito's offices — and centers on the city-center 'almuerzo': a set lunch of soup, a rice plate, and fresh juice for a few dollars. The old siesta habit varies by city and is fading in office life; most workers take a standard hour.",
    evening: "Family time owns the evening — dinner around 7:30, then slow laps around Quito's Parque La Carolina or Guayaquil's Malecón 2000 esplanade. Weekend plans default to ceviche, cold beer, and whoever's house has the space.",
  },
  "El Salvador": {
    workday: "Keeps US hours — the same clock as Central Time, and San Salvador's call centers match American schedules to serve clients up north. Offices run 8:00–5:00, and lunch is a proper plate of rice, beans, and tortillas, not a sandwich at the desk.",
    evening: "Pupusas own the evening: pupuserías grill thick corn tortillas stuffed with cheese, loroco, or chicharrón, served with curtido (tangy pickled cabbage), and families queue from 6:00 onward. Weekends add fútbol on TV and surf trips to El Tunco.",
  },
  "Guatemala": {
    workday: "Aligns with the US workday — offices 8:00–5:00 — with the afternoon 'refacción' as the sacred pause: coffee with sweet bread around 4:00. Lunch is the big meal, often tortillas, beans, and grilled meat eaten close to home or the office.",
    evening: "After dark, plans concentrate in air-conditioned malls like Oakland or at home with relatives, since city security keeps evening outings cautious. Friday means Pollo Campero runs and fútbol on TV — the fried-chicken queue is a real social institution.",
  },
  "Guyana": {
    workday: "The offshore oil boom has rewired Georgetown: government offices and old trading firms now share the city with energy contractors and foreign banks, and the East Bank road commute has only gotten slower. Workplaces stay formal and hierarchical — greetings come before business.",
    evening: "Evenings pull people toward the seawall — Georgetown's sea-defense promenade — for breeze, cricket talk, and rum-shop rounds with Banks beer and cook-up rice (coconut one-pot rice). The oil money shows in new restaurants, but Sunday remains family cookout day.",
  },
  "Honduras": {
    workday: "Business hours follow the US clock, and the day pauses for a long lunch — the main meal, often baleadas (thick tortillas folded around beans, cheese, and cream). Tegucigalpa spills across hills, so commutes are slow and winding enough that people leave early.",
    evening: "Nightlife leans toward trusted neighborhoods and indoors — security shapes the evening map — so malls, family barbecues, and fútbol carry the week, with baleada and pollo frito spots staying busy till late.",
  },
  "Nicaragua": {
    workday: "Managua keeps US Central Time at an unhurried tempo — offices 8:00–5:00, gallo pinto (rice and beans) at lunch, and a mid-afternoon coffee break that nobody rushes. Government and agriculture set the pace more than urgency does.",
    evening: "When the heat breaks, front-porch rocking chairs — a genuine national habit — fill up, and families head to Puerto Salvador Allende, Managua's waterfront malecón, for vigorón (yucca, pork rinds, and cabbage) by the water. Granada's La Calzada street takes over on weekends.",
  },
  "Panama": {
    workday: "Banks, the Canal Authority, and corporate offices all run on US Eastern Time — the whole country syncs to New York. The workday is 8:00–5:00 with a real lunch away from the desk, though 'el tráfico' stretches Panama City commutes into an hour each way.",
    evening: "As the heat fades, the Cinta Costera fills with joggers, families, and food trucks selling ceviche and raspao (shaved ice). Fridays drift into Casco Viejo's rooftop bars; Sunday is for sancocho (chicken soup) at home with the extended family.",
  },
  "Paraguay": {
    workday: "Tereré defines the workday — ice-cold herbal mate passed around the office in guampas (metal cups) with a shared bombilla straw, mid-morning and again mid-afternoon. Asunción hours run roughly 8:00–6:00, softened by a proper family lunch in between.",
    evening: "Evening life retreats into air-conditioned malls like Paseo La Galería and Shopping del Sol, and weekend asados carry the family calendar. The Carmelitas bar strip does fire up — just not before 11:00 PM, when the night owls finally arrive.",
  },
  "Peru": {
    workday: "In Lima the day starts early to beat traffic that adds real hours to every commute, and offices run 9:00–6:00. Lunch is sacred and affordable: the 'menú' — soup, a main, and chicha morada (purple-corn drink) — at a set price from neighborhood kitchens.",
    evening: "Anticucho carts grill marinated beef heart on street corners from dusk — smoky, cheap, with boiled potatoes on the side. On weekends, Lima's Barranco district takes over: colonial balconies, pisco bars, and criolla kitchens going until late.",
  },
  "Suriname": {
    workday: "Dutch is the office language, but Sranan Tongo carries the hallway talk; government posts, gold and timber firms, and new offshore oil money anchor Paramaribo's economy. The week runs Monday–Friday, with a roti lunch — flatbread and curry from the Javanese or Indian stall around the corner.",
    evening: "Paramaribo's Waterkant, the riverside promenade, is the evening ritual: stalls selling Javanese bami, Chinese-Surinamese plates, and cold dawet while the river breeze works. Most nights wind down family-sized; pom (a baked chicken-and-taro casserole) marks the celebrations.",
  },
  "United States": {
    workday: "The 9-to-5 is real but stretches — lunch is often a salad eaten at the desk between meetings, and after-hours emails are a known cost of at-will jobs with no federal paid-leave guarantee. Most commutes are solo drives; leaving at 5:00 sharp is quietly aspirational.",
    evening: "Happy hour runs 5:00–7:00 on discounted drinks, then splits by life stage: parents shuttle between youth-soccer practice and weeknight dinners, while suburban evenings default to the gym, then streaming. Weekend brunch is a full daytime event.",
  },
  "Uruguay": {
    workday: "Look for the thermos under every arm — mate is sipped all day at the desk, refilled hot and shared in rounds mid-morning and mid-afternoon. Offices run 9:00–6:00, and lunch is a proper sit-down affair rather than a desk sandwich.",
    evening: "The rambla — Montevideo's seaside promenade — does the evening work: strolling, fishing off the rocks, and mate shared at sunset over the River Plate. Weekends center on family asados, and torta frita (fried dough) appears the moment it rains.",
  },
  "Venezuela": {
    workday: "The crisis rewired work: much of the economy now runs informally, many professionals log into US or European employers remotely for dollar wages, and remittances prop up household budgets. Formal offices still keep 8:00–5:00 hours, bookended by strong 'guayoyo' coffee.",
    evening: "Arepas remain the evening constant — areperas stay open late, grilling corn cakes stuffed with shredded beef, white cheese, or 'reina pepiada' chicken salad. Even on tight budgets, plaza gatherings and fútbol broadcasts keep the social muscle alive.",
  },
};

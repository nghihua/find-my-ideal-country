import type { ClimateCategory, CountryClimateProfile } from './countries';
import type { Locale } from '../i18n';
import { getLocale } from '../i18n';

/**
 * Broad country-level fit labels and approximate daytime temperature ranges.
 * The ranges describe typical cooler-to-warmer season daytime highs, not extremes.
 * Update individual country entries here as more specific, consistent data is added.
 */
export const COUNTRY_CLIMATE_PROFILES: Record<string, CountryClimateProfile> = {
  Japan: { temperature: 'temperate', temperatureRangeCelsius: [5, 31], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Vietnam: { temperature: 'hot', temperatureRangeCelsius: [20, 34], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Portugal: { temperature: 'warm', temperatureRangeCelsius: [13, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Netherlands: { temperature: 'cool', temperatureRangeCelsius: [5, 23], humidity: 'moderate', rainfall: 'frequent', snowfall: 'rare' },
  Mexico: { temperature: 'warm', temperatureRangeCelsius: [16, 31], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Norway: { temperature: 'cool', temperatureRangeCelsius: [-5, 22], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'frequent' },
  Spain: { temperature: 'warm', temperatureRangeCelsius: [10, 34], humidity: 'dry', rainfall: 'seasonal', snowfall: 'rare' },
  'South Korea': { temperature: 'cool', temperatureRangeCelsius: [-2, 30], humidity: 'humid', rainfall: 'seasonal', snowfall: 'seasonal' },
  Canada: { temperature: 'very-cold', temperatureRangeCelsius: [-10, 25], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'frequent' },
  Thailand: { temperature: 'hot', temperatureRangeCelsius: [28, 35], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  'New Zealand': { temperature: 'temperate', temperatureRangeCelsius: [10, 25], humidity: 'moderate', rainfall: 'frequent', snowfall: 'seasonal' },
  Germany: { temperature: 'cool', temperatureRangeCelsius: [3, 25], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Italy: { temperature: 'warm', temperatureRangeCelsius: [9, 32], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  France: { temperature: 'temperate', temperatureRangeCelsius: [5, 28], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  'United Kingdom': { temperature: 'temperate', temperatureRangeCelsius: [6, 23], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Australia: { temperature: 'warm', temperatureRangeCelsius: [14, 32], humidity: 'dry', rainfall: 'seasonal', snowfall: 'rare' },
  Switzerland: { temperature: 'cool', temperatureRangeCelsius: [0, 25], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'frequent' },
  'Costa Rica': { temperature: 'warm', temperatureRangeCelsius: [23, 31], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Greece: { temperature: 'warm', temperatureRangeCelsius: [11, 33], humidity: 'dry', rainfall: 'seasonal', snowfall: 'rare' },
  Taiwan: { temperature: 'hot', temperatureRangeCelsius: [18, 34], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Colombia: { temperature: 'temperate', temperatureRangeCelsius: [18, 30], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Indonesia: { temperature: 'hot', temperatureRangeCelsius: [24, 33], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Austria: { temperature: 'cool', temperatureRangeCelsius: [0, 25], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'frequent' },
  Belgium: { temperature: 'cool', temperatureRangeCelsius: [4, 23], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Denmark: { temperature: 'cool', temperatureRangeCelsius: [2, 22], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Sweden: { temperature: 'cool', temperatureRangeCelsius: [-5, 23], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'frequent' },
  Finland: { temperature: 'very-cold', temperatureRangeCelsius: [-8, 22], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'frequent' },
  Ireland: { temperature: 'cool', temperatureRangeCelsius: [7, 21], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  'Czech Republic': { temperature: 'cool', temperatureRangeCelsius: [0, 26], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Poland: { temperature: 'cool', temperatureRangeCelsius: [-1, 25], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Croatia: { temperature: 'warm', temperatureRangeCelsius: [8, 32], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Iceland: { temperature: 'very-cold', temperatureRangeCelsius: [-1, 15], humidity: 'humid', rainfall: 'frequent', snowfall: 'frequent' },
  Singapore: { temperature: 'hot', temperatureRangeCelsius: [30, 32], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Malaysia: { temperature: 'hot', temperatureRangeCelsius: [27, 33], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Philippines: { temperature: 'hot', temperatureRangeCelsius: [25, 33], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  India: { temperature: 'hot', temperatureRangeCelsius: [15, 38], humidity: 'humid', rainfall: 'seasonal', snowfall: 'seasonal' },
  'United Arab Emirates': { temperature: 'hot', temperatureRangeCelsius: [18, 42], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Turkey: { temperature: 'warm', temperatureRangeCelsius: [5, 33], humidity: 'dry', rainfall: 'seasonal', snowfall: 'seasonal' },
  Georgia: { temperature: 'temperate', temperatureRangeCelsius: [5, 29], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'frequent' },
  'United States': { temperature: 'temperate', temperatureRangeCelsius: [-2, 34], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Brazil: { temperature: 'hot', temperatureRangeCelsius: [22, 34], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Argentina: { temperature: 'temperate', temperatureRangeCelsius: [12, 32], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Chile: { temperature: 'temperate', temperatureRangeCelsius: [8, 30], humidity: 'dry', rainfall: 'low', snowfall: 'seasonal' },
  Panama: { temperature: 'hot', temperatureRangeCelsius: [28, 32], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Uruguay: { temperature: 'temperate', temperatureRangeCelsius: [13, 28], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'South Africa': { temperature: 'warm', temperatureRangeCelsius: [14, 30], humidity: 'dry', rainfall: 'seasonal', snowfall: 'rare' },
  Morocco: { temperature: 'warm', temperatureRangeCelsius: [15, 35], humidity: 'dry', rainfall: 'low', snowfall: 'seasonal' },
  Egypt: { temperature: 'hot', temperatureRangeCelsius: [19, 40], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Kenya: { temperature: 'temperate', temperatureRangeCelsius: [20, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Mauritius: { temperature: 'warm', temperatureRangeCelsius: [22, 30], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },

  // Europe & Caucasus
  Albania: { temperature: 'warm', temperatureRangeCelsius: [13, 33], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Andorra: { temperature: 'temperate', temperatureRangeCelsius: [9, 28], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Armenia: { temperature: 'temperate', temperatureRangeCelsius: [2, 35], humidity: 'dry', rainfall: 'low', snowfall: 'seasonal' },
  Azerbaijan: { temperature: 'temperate', temperatureRangeCelsius: [7, 31], humidity: 'moderate', rainfall: 'low', snowfall: 'rare' },
  Belarus: { temperature: 'cool', temperatureRangeCelsius: [-2, 24], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  'Bosnia and Herzegovina': { temperature: 'temperate', temperatureRangeCelsius: [4, 28], humidity: 'moderate', rainfall: 'frequent', snowfall: 'seasonal' },
  Bulgaria: { temperature: 'temperate', temperatureRangeCelsius: [4, 28], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Cyprus: { temperature: 'warm', temperatureRangeCelsius: [16, 38], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Estonia: { temperature: 'cool', temperatureRangeCelsius: [-1, 22], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Greenland: { temperature: 'cool', temperatureRangeCelsius: [-6, 11], humidity: 'moderate', rainfall: 'frequent', snowfall: 'frequent' },
  Hungary: { temperature: 'temperate', temperatureRangeCelsius: [3, 28], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Kosovo: { temperature: 'temperate', temperatureRangeCelsius: [4, 29], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Latvia: { temperature: 'cool', temperatureRangeCelsius: [0, 24], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Liechtenstein: { temperature: 'temperate', temperatureRangeCelsius: [5, 25], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Lithuania: { temperature: 'cool', temperatureRangeCelsius: [-1, 24], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Luxembourg: { temperature: 'temperate', temperatureRangeCelsius: [4, 24], humidity: 'moderate', rainfall: 'frequent', snowfall: 'seasonal' },
  Malta: { temperature: 'warm', temperatureRangeCelsius: [16, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Moldova: { temperature: 'temperate', temperatureRangeCelsius: [1, 28], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Monaco: { temperature: 'warm', temperatureRangeCelsius: [13, 27], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Montenegro: { temperature: 'warm', temperatureRangeCelsius: [11, 35], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  'North Macedonia': { temperature: 'temperate', temperatureRangeCelsius: [5, 32], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Romania: { temperature: 'temperate', temperatureRangeCelsius: [3, 31], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Russia: { temperature: 'cool', temperatureRangeCelsius: [-4, 25], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  'San Marino': { temperature: 'temperate', temperatureRangeCelsius: [6, 27], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Serbia: { temperature: 'temperate', temperatureRangeCelsius: [5, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Slovakia: { temperature: 'temperate', temperatureRangeCelsius: [3, 28], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Slovenia: { temperature: 'temperate', temperatureRangeCelsius: [4, 28], humidity: 'moderate', rainfall: 'frequent', snowfall: 'seasonal' },
  Ukraine: { temperature: 'temperate', temperatureRangeCelsius: [-1, 27], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  'Vatican City': { temperature: 'warm', temperatureRangeCelsius: [13, 33], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  // Asia
  Afghanistan: { temperature: 'temperate', temperatureRangeCelsius: [5, 32], humidity: 'dry', rainfall: 'seasonal', snowfall: 'seasonal' },
  Bahrain: { temperature: 'hot', temperatureRangeCelsius: [21, 40], humidity: 'humid', rainfall: 'low', snowfall: 'rare' },
  Bangladesh: { temperature: 'hot', temperatureRangeCelsius: [25, 34], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Bhutan: { temperature: 'warm', temperatureRangeCelsius: [15, 27], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Brunei: { temperature: 'hot', temperatureRangeCelsius: [33, 35], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Cambodia: { temperature: 'hot', temperatureRangeCelsius: [31, 35], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  China: { temperature: 'temperate', temperatureRangeCelsius: [3, 33], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Iran: { temperature: 'temperate', temperatureRangeCelsius: [7, 35], humidity: 'dry', rainfall: 'seasonal', snowfall: 'seasonal' },
  Iraq: { temperature: 'hot', temperatureRangeCelsius: [16, 45], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Israel: { temperature: 'warm', temperatureRangeCelsius: [13, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Jordan: { temperature: 'warm', temperatureRangeCelsius: [13, 33], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Kazakhstan: { temperature: 'temperate', temperatureRangeCelsius: [1, 31], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Kuwait: { temperature: 'hot', temperatureRangeCelsius: [20, 47], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Kyrgyzstan: { temperature: 'temperate', temperatureRangeCelsius: [3, 32], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Laos: { temperature: 'hot', temperatureRangeCelsius: [29, 35], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Lebanon: { temperature: 'warm', temperatureRangeCelsius: [17, 31], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Maldives: { temperature: 'hot', temperatureRangeCelsius: [30, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Mongolia: { temperature: 'very-cold', temperatureRangeCelsius: [-15, 25], humidity: 'dry', rainfall: 'low', snowfall: 'seasonal' },
  Myanmar: { temperature: 'hot', temperatureRangeCelsius: [30, 38], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Nepal: { temperature: 'warm', temperatureRangeCelsius: [19, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  'North Korea': { temperature: 'temperate', temperatureRangeCelsius: [0, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Oman: { temperature: 'hot', temperatureRangeCelsius: [25, 40], humidity: 'humid', rainfall: 'low', snowfall: 'rare' },
  Pakistan: { temperature: 'hot', temperatureRangeCelsius: [18, 39], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Palestine: { temperature: 'warm', temperatureRangeCelsius: [14, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Qatar: { temperature: 'hot', temperatureRangeCelsius: [23, 42], humidity: 'humid', rainfall: 'low', snowfall: 'rare' },
  'Saudi Arabia': { temperature: 'hot', temperatureRangeCelsius: [20, 44], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  'Sri Lanka': { temperature: 'hot', temperatureRangeCelsius: [30, 32], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Syria: { temperature: 'warm', temperatureRangeCelsius: [13, 38], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Tajikistan: { temperature: 'temperate', temperatureRangeCelsius: [9, 36], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  'Timor-Leste': { temperature: 'hot', temperatureRangeCelsius: [31, 33], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Turkmenistan: { temperature: 'warm', temperatureRangeCelsius: [9, 38], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Uzbekistan: { temperature: 'temperate', temperatureRangeCelsius: [7, 36], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'seasonal' },
  Yemen: { temperature: 'warm', temperatureRangeCelsius: [20, 28], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  // Africa
  Algeria: { temperature: 'warm', temperatureRangeCelsius: [17, 33], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Angola: { temperature: 'warm', temperatureRangeCelsius: [25, 31], humidity: 'moderate', rainfall: 'low', snowfall: 'rare' },
  Benin: { temperature: 'hot', temperatureRangeCelsius: [28, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Botswana: { temperature: 'hot', temperatureRangeCelsius: [22, 33], humidity: 'dry', rainfall: 'seasonal', snowfall: 'rare' },
  'Burkina Faso': { temperature: 'hot', temperatureRangeCelsius: [32, 40], humidity: 'dry', rainfall: 'seasonal', snowfall: 'rare' },
  Burundi: { temperature: 'warm', temperatureRangeCelsius: [26, 28], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  'Cabo Verde': { temperature: 'warm', temperatureRangeCelsius: [27, 31], humidity: 'moderate', rainfall: 'low', snowfall: 'rare' },
  Cameroon: { temperature: 'warm', temperatureRangeCelsius: [27, 33], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'Central African Republic': { temperature: 'hot', temperatureRangeCelsius: [30, 35], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Chad: { temperature: 'hot', temperatureRangeCelsius: [32, 42], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Comoros: { temperature: 'hot', temperatureRangeCelsius: [28, 31], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  "Côte d'Ivoire": { temperature: 'hot', temperatureRangeCelsius: [28, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'Democratic Republic of the Congo': { temperature: 'hot', temperatureRangeCelsius: [28, 33], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Djibouti: { temperature: 'hot', temperatureRangeCelsius: [29, 42], humidity: 'humid', rainfall: 'low', snowfall: 'rare' },
  'Equatorial Guinea': { temperature: 'hot', temperatureRangeCelsius: [28, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Eritrea: { temperature: 'temperate', temperatureRangeCelsius: [21, 25], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Eswatini: { temperature: 'temperate', temperatureRangeCelsius: [19, 26], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Ethiopia: { temperature: 'temperate', temperatureRangeCelsius: [21, 26], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Gabon: { temperature: 'hot', temperatureRangeCelsius: [28, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Ghana: { temperature: 'hot', temperatureRangeCelsius: [28, 33], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Guinea: { temperature: 'hot', temperatureRangeCelsius: [28, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'Guinea-Bissau': { temperature: 'hot', temperatureRangeCelsius: [30, 36], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Lesotho: { temperature: 'temperate', temperatureRangeCelsius: [17, 28], humidity: 'dry', rainfall: 'seasonal', snowfall: 'rare' },
  Liberia: { temperature: 'hot', temperatureRangeCelsius: [27, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Libya: { temperature: 'warm', temperatureRangeCelsius: [18, 34], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Madagascar: { temperature: 'temperate', temperatureRangeCelsius: [20, 27], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Malawi: { temperature: 'warm', temperatureRangeCelsius: [23, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Mali: { temperature: 'hot', temperatureRangeCelsius: [31, 40], humidity: 'dry', rainfall: 'seasonal', snowfall: 'rare' },
  Mauritania: { temperature: 'hot', temperatureRangeCelsius: [29, 36], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Mozambique: { temperature: 'warm', temperatureRangeCelsius: [26, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Namibia: { temperature: 'warm', temperatureRangeCelsius: [21, 31], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Niger: { temperature: 'hot', temperatureRangeCelsius: [32, 42], humidity: 'dry', rainfall: 'seasonal', snowfall: 'rare' },
  Nigeria: { temperature: 'hot', temperatureRangeCelsius: [28, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'Republic of the Congo': { temperature: 'hot', temperatureRangeCelsius: [28, 33], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Rwanda: { temperature: 'warm', temperatureRangeCelsius: [26, 28], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  'Sao Tome and Principe': { temperature: 'hot', temperatureRangeCelsius: [27, 30], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Senegal: { temperature: 'warm', temperatureRangeCelsius: [25, 31], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Seychelles: { temperature: 'hot', temperatureRangeCelsius: [29, 32], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  'Sierra Leone': { temperature: 'hot', temperatureRangeCelsius: [28, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Somalia: { temperature: 'hot', temperatureRangeCelsius: [29, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'South Sudan': { temperature: 'hot', temperatureRangeCelsius: [31, 39], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Sudan: { temperature: 'hot', temperatureRangeCelsius: [31, 42], humidity: 'dry', rainfall: 'low', snowfall: 'rare' },
  Tanzania: { temperature: 'hot', temperatureRangeCelsius: [28, 33], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'The Gambia': { temperature: 'hot', temperatureRangeCelsius: [32, 34], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Togo: { temperature: 'hot', temperatureRangeCelsius: [29, 34], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Tunisia: { temperature: 'warm', temperatureRangeCelsius: [16, 34], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Uganda: { temperature: 'warm', temperatureRangeCelsius: [25, 29], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Zambia: { temperature: 'warm', temperatureRangeCelsius: [24, 31], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Zimbabwe: { temperature: 'warm', temperatureRangeCelsius: [22, 29], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  // Americas
  Belize: { temperature: 'hot', temperatureRangeCelsius: [28, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Bolivia: { temperature: 'temperate', temperatureRangeCelsius: [14, 20], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Ecuador: { temperature: 'hot', temperatureRangeCelsius: [29, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'El Salvador': { temperature: 'hot', temperatureRangeCelsius: [30, 33], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Guatemala: { temperature: 'warm', temperatureRangeCelsius: [24, 28], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Guyana: { temperature: 'hot', temperatureRangeCelsius: [30, 32], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Honduras: { temperature: 'warm', temperatureRangeCelsius: [27, 31], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Nicaragua: { temperature: 'hot', temperatureRangeCelsius: [31, 35], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Paraguay: { temperature: 'hot', temperatureRangeCelsius: [22, 34], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Peru: { temperature: 'temperate', temperatureRangeCelsius: [19, 28], humidity: 'humid', rainfall: 'low', snowfall: 'rare' },
  Suriname: { temperature: 'hot', temperatureRangeCelsius: [29, 32], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Venezuela: { temperature: 'warm', temperatureRangeCelsius: [27, 29], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  // Caribbean
  'Antigua and Barbuda': { temperature: 'hot', temperatureRangeCelsius: [28, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Bahamas: { temperature: 'hot', temperatureRangeCelsius: [26, 33], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Barbados: { temperature: 'hot', temperatureRangeCelsius: [29, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Cuba: { temperature: 'hot', temperatureRangeCelsius: [27, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Dominica: { temperature: 'hot', temperatureRangeCelsius: [30, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'Dominican Republic': { temperature: 'hot', temperatureRangeCelsius: [30, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Grenada: { temperature: 'hot', temperatureRangeCelsius: [30, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Haiti: { temperature: 'hot', temperatureRangeCelsius: [31, 34], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Jamaica: { temperature: 'hot', temperatureRangeCelsius: [31, 33], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  'Puerto Rico': { temperature: 'hot', temperatureRangeCelsius: [28, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'Saint Kitts and Nevis': { temperature: 'hot', temperatureRangeCelsius: [29, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'Saint Lucia': { temperature: 'hot', temperatureRangeCelsius: [29, 32], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  'Saint Vincent and the Grenadines': { temperature: 'hot', temperatureRangeCelsius: [29, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'Trinidad and Tobago': { temperature: 'hot', temperatureRangeCelsius: [31, 33], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  // Oceania
  Fiji: { temperature: 'warm', temperatureRangeCelsius: [27, 31], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Kiribati: { temperature: 'hot', temperatureRangeCelsius: [30, 31], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  'Marshall Islands': { temperature: 'hot', temperatureRangeCelsius: [30, 31], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Micronesia: { temperature: 'hot', temperatureRangeCelsius: [30, 31], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Nauru: { temperature: 'hot', temperatureRangeCelsius: [31, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  'New Caledonia': { temperature: 'warm', temperatureRangeCelsius: [23, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Palau: { temperature: 'hot', temperatureRangeCelsius: [30, 31], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  'Papua New Guinea': { temperature: 'hot', temperatureRangeCelsius: [30, 32], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Samoa: { temperature: 'hot', temperatureRangeCelsius: [30, 31], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  'Solomon Islands': { temperature: 'hot', temperatureRangeCelsius: [31, 32], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
  Tonga: { temperature: 'warm', temperatureRangeCelsius: [25, 30], humidity: 'moderate', rainfall: 'seasonal', snowfall: 'rare' },
  Tuvalu: { temperature: 'hot', temperatureRangeCelsius: [31, 32], humidity: 'humid', rainfall: 'frequent', snowfall: 'rare' },
  Vanuatu: { temperature: 'warm', temperatureRangeCelsius: [26, 31], humidity: 'humid', rainfall: 'seasonal', snowfall: 'rare' },
};

/** Broad fallback for countries that only have a regional climate label. */
export function estimateClimateProfile(climate: ClimateCategory, latitude?: number): CountryClimateProfile {
  const temperature = latitude === undefined
    ? ({
        tropical: 'hot',
        'warm-sun': 'warm',
        'four-seasons': 'temperate',
        'mild-coastal': 'temperate',
        'cold-winter': 'cool',
      } as const)[climate]
    : Math.abs(latitude) > 60 ? 'very-cold'
      : Math.abs(latitude) > 48 ? 'cool'
        : Math.abs(latitude) > 35 ? 'temperate'
          : Math.abs(latitude) > 23.5 ? 'warm'
            : 'hot';

  const temperatureRangeCelsius: [number, number] = temperature === 'very-cold' ? [-15, 18]
    : temperature === 'cool' ? [-5, 23]
      : temperature === 'temperate' ? [5, 27]
        : temperature === 'warm' ? [13, 33]
          : [22, 35];

  return {
    temperature,
    temperatureRangeCelsius,
    humidity: climate === 'tropical' ? 'humid' : climate === 'warm-sun' ? 'dry' : 'moderate',
    rainfall: climate === 'tropical' ? 'frequent' : 'seasonal',
    snowfall: climate === 'cold-winter' ? 'frequent' : climate === 'four-seasons' ? 'seasonal' : 'rare',
  };
}

export function describeClimateProfile(profile?: CountryClimateProfile, locale: Locale = getLocale()): string {
  return describeClimateProfilePoints(profile, locale).join(' · ');
}

export function describeClimateProfilePoints(profile?: CountryClimateProfile, locale: Locale = getLocale()): string[] {
  if (!profile) return locale === 'vi' ? ['Chưa có hồ sơ khí hậu cho quốc gia này'] : ['Climate profile not available'];
  const [minC, maxC] = profile.temperatureRangeCelsius;
  const toFahrenheit = (celsius: number) => Math.round(celsius * 9 / 5 + 32);
  if (locale === 'vi') {
    const humidity = ({ dry: 'khô', moderate: 'cân bằng', humid: 'ẩm' } as const)[profile.humidity];
    const rainfall = ({ low: 'ít mưa', seasonal: 'mưa theo mùa', frequent: 'mưa thường xuyên' } as const)[profile.rainfall];
    const snowfall = ({ rare: 'hiếm khi có tuyết', seasonal: 'có tuyết theo mùa', frequent: 'tuyết thường xuyên' } as const)[profile.snowfall];
    return [
      `Nhiệt độ: khoảng ${minC}–${maxC}°C ban ngày (${toFahrenheit(minC)}–${toFahrenheit(maxC)}°F)`,
      `Độ ẩm: ${humidity}`,
      `Mưa: ${rainfall}`,
      `Tuyết: ${snowfall}`,
    ];
  }
  const humidity = ({ dry: 'Dry air', moderate: 'Balanced humidity', humid: 'Humid air' } as const)[profile.humidity];
  const rainfall = ({ low: 'Little rain', seasonal: 'Seasonal rain', frequent: 'Frequent rain' } as const)[profile.rainfall];
  const snowfall = ({ rare: 'Rare snow', seasonal: 'Seasonal snow', frequent: 'Frequent snow' } as const)[profile.snowfall];
  return [
    `Temperature: Approx. daytime highs ${minC}–${maxC}°C (${toFahrenheit(minC)}–${toFahrenheit(maxC)}°F)`,
    `Humidity: ${humidity}`,
    `Rain: ${rainfall}`,
    `Snow: ${snowfall}`,
  ];
}

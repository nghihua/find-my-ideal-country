import type { ClimateCategory, CountryClimateProfile } from './countries';

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

export function describeClimateProfile(profile?: CountryClimateProfile): string {
  return describeClimateProfilePoints(profile).join(' · ');
}

export function describeClimateProfilePoints(profile?: CountryClimateProfile): string[] {
  if (!profile) return ['Climate profile not available'];
  const humidity = ({ dry: 'Dry air', moderate: 'Balanced humidity', humid: 'Humid air' } as const)[profile.humidity];
  const rainfall = ({ low: 'Little rain', seasonal: 'Seasonal rain', frequent: 'Frequent rain' } as const)[profile.rainfall];
  const snowfall = ({ rare: 'Rare snow', seasonal: 'Seasonal snow', frequent: 'Frequent snow' } as const)[profile.snowfall];
  const [minC, maxC] = profile.temperatureRangeCelsius;
  const toFahrenheit = (celsius: number) => Math.round(celsius * 9 / 5 + 32);
  return [
    `Temperature: Approx. daytime highs ${minC}–${maxC}°C (${toFahrenheit(minC)}–${toFahrenheit(maxC)}°F)`,
    `Humidity: ${humidity}`,
    `Rain: ${rainfall}`,
    `Snow: ${snowfall}`,
  ];
}

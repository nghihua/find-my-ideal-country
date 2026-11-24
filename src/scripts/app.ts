import { QUIZ_QUESTIONS } from '../data/countries';
import type { CountryData } from '../data/countries';
import { getCompleteCountryProfile, getAllGlobalCountries } from '../data/globalCountries';
import {
  initWorldMap,
  zoomToFeature,
  resetZoomTransform,
  getFallbackRegion,
  resolveDisplayName,
  worldFeatures,
  svg,
} from './map';
import { renderCountryDossier, closeCountryPanel } from './dossier';
import { initQuiz, openQuiz, closeQuiz } from './quiz';
import { initSearch } from './search';
import { showToast } from './toast';

declare const d3: any;

// Build complete dossier object using global profile engine
function getCountryProfile(feature: any): CountryData {
  const rawName: string = feature.properties.name || "Unknown Territory";
  const name = resolveDisplayName(rawName);
  const centroid = d3.geoCentroid(feature);
  const region = getFallbackRegion(centroid);
  return getCompleteCountryProfile(name, region, centroid);
}

function selectCountry(feature: any) {
  zoomToFeature(feature);
  const profile = getCountryProfile(feature);
  renderCountryDossier(profile);
}

function resetZoom() {
  resetZoomTransform();
  closeCountryPanel();
}

function flyToCountry(countryName: string) {
  closeQuiz();
  const feature = worldFeatures.find((f: any) => {
    const n = resolveDisplayName(f.properties.name);
    return n === countryName;
  });
  if (feature) {
    selectCountry(feature);
    showToast(`Zooming into ${countryName}...`);
  } else {
    // If not on map geometry, still open the country profile
    const profile = getCompleteCountryProfile(countryName);
    renderCountryDossier(profile);
    showToast(`Showing profile for ${countryName}`);
  }
}

window.addEventListener('load', async () => {
  // Init subsystems
  initQuiz(QUIZ_QUESTIONS, () => {
    const catalog = getAllGlobalCountries();
    const catalogNames = new Set(catalog.map(c => c.name));
    
    // Merge any additional map features loaded from world-atlas
    if (worldFeatures && worldFeatures.length > 0) {
      worldFeatures.forEach((f: any) => {
        const name = resolveDisplayName(f.properties.name || "");
        if (name && !catalogNames.has(name)) {
          catalog.push(getCountryProfile(f));
          catalogNames.add(name);
        }
      });
    }

    return catalog;
  }, flyToCountry);

  initSearch(() => worldFeatures, selectCountry);

  await initWorldMap(selectCountry, resetZoom);

  // Event listeners
  document.getElementById('close-panel-btn')!.addEventListener('click', closeCountryPanel);
  document.getElementById('reset-zoom-btn')!.addEventListener('click', resetZoom);
  document.getElementById('open-quiz-btn')!.addEventListener('click', openQuiz);
  document.getElementById('close-quiz-btn')!.addEventListener('click', closeQuiz);

  // Handle responsive resize
  window.addEventListener('resize', () => {
    const container = document.getElementById('map-container');
    if (svg && container) {
      svg.attr("viewBox", [0, 0, container.clientWidth, container.clientHeight]);
    }
  });
});

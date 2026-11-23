import { COUNTRY_DATABASE, REGIONAL_TEMPLATES, QUIZ_QUESTIONS } from '../data/countries';
import type { CountryData } from '../data/countries';
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

// Build complete dossier object (curated or intelligently synthesized)
function getCountryProfile(feature: any): CountryData & { isCurated: boolean } {
  const rawName: string = feature.properties.name || "Unknown Territory";
  const name = resolveDisplayName(rawName);

  if (COUNTRY_DATABASE[name]) {
    return { ...COUNTRY_DATABASE[name], isCurated: true };
  }

  const centroid = d3.geoCentroid(feature);
  const region = getFallbackRegion(centroid);
  const tpl = REGIONAL_TEMPLATES[region];

  return {
    id: "",
    name,
    icon: "fa-solid fa-location-dot",
    region,
    tagline: `Everyday rhythms, local traditions, and real-world living insights in ${name}.`,
    cost: tpl.cost,
    wlb: tpl.wlb,
    safety: tpl.safety,
    culture: `Living in ${name} offers an authentic immersion into ${region}'s cultural fabric—shaped by local language, regional cuisine, and historic traditions. ${tpl.culture}`,
    people: `Residents of ${name} take strong pride in their heritage and local hospitality. ${tpl.people}`,
    costOfLiving: `In ${name}, day-to-day affordability depends heavily on whether you live in the capital city or secondary towns. ${tpl.costOfLiving}`,
    workday: `A typical weekday in ${name} blends local business customs with modern urban routines. ${tpl.workday}`,
    evening: `When the workday winds down in ${name}, locals head out to neighborhood gathering spots. ${tpl.evening}`,
    upsides: tpl.upsides,
    downsides: tpl.downsides,
    tags: [],
    videos: [
      {
        title: `What Living in ${name} is Actually Like (Local & Expat Stories)`,
        channel: "YouTube Global Guides",
        duration: "Curated Search",
        url: `https://www.youtube.com/results?search_query=what+living+in+${encodeURIComponent(name)}+is+actually+like`,
      },
      {
        title: `A Day in the Life in ${name} — Cost of Living & Culture`,
        channel: "YouTube Street & Daily Life",
        duration: "Curated Search",
        url: `https://www.youtube.com/results?search_query=day+in+the+life+living+in+${encodeURIComponent(name)}`,
      },
    ],
    isCurated: false,
  };
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
  }
}

window.addEventListener('load', async () => {
  // Init subsystems
  initQuiz(QUIZ_QUESTIONS, COUNTRY_DATABASE, flyToCountry);
  initSearch(COUNTRY_DATABASE, () => worldFeatures, selectCountry);

  await initWorldMap(COUNTRY_DATABASE, selectCountry, resetZoom);

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

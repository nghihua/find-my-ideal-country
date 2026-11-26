import { QUIZ_QUESTIONS, COUNTRY_DATABASE } from '../data/countries';
import type { CountryData } from '../data/countries';
import { getCompleteCountryProfile, getAllGlobalCountries, GLOBAL_COUNTRY_METADATA } from '../data/globalCountries';
import {
  initWorldMap,
  zoomToFeature,
  zoomToCountryPoint,
  resetZoomTransform,
  getFallbackRegion,
  resolveDisplayName,
  worldFeatures,
  svg,
} from './map';
import { renderCountryDossier, closeCountryPanel } from './dossier';
import { initQuiz, openQuiz, closeQuiz } from './quiz';
import { initSearch } from './search';
import type { SearchEntry } from './search';
import { showToast } from './toast';
import { initAuthorModal } from './author';
import { watchScrollFade } from './scrollAffordance';

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

/** Map a display name to its catalog key. Keys are the lookup IDs for
 *  COUNTRY_DATABASE and GLOBAL_COUNTRY_METADATA, and one metadata entry
 *  ("Sao Tome and Principe") keys ASCII while displaying with diacritics —
 *  so a profile assembled by display name would silently fall back to the
 *  regional template. Keys and map-territory names pass through unchanged. */
function resolveCatalogKey(name: string): string {
  if (GLOBAL_COUNTRY_METADATA[name] || COUNTRY_DATABASE[name]) return name;
  const hit = Object.entries(GLOBAL_COUNTRY_METADATA).find(([, meta]) => meta.name === name);
  return hit ? hit[0] : name;
}

/**
 * Select a country by display name. Zooms the map when geometry exists; for
 * catalog-only countries missing from the coarse map geometry (e.g. Singapore,
 * Andorra), zooms to their real-world coordinates with a dot marker. Returns
 * whether the map moved.
 */
function selectCountryByName(name: string): boolean {
  const feature = worldFeatures.find((f: any) => resolveDisplayName(f.properties.name || "") === name);
  if (feature) {
    selectCountry(feature);
    return true;
  }
  const didZoom = zoomToCountryPoint(name);
  renderCountryDossier(getCompleteCountryProfile(resolveCatalogKey(name)));
  return didZoom;
}

function resetZoom() {
  resetZoomTransform();
  closeCountryPanel();
}

function flyToCountry(countryName: string) {
  closeQuiz();
  const didZoom = selectCountryByName(countryName);
  showToast(didZoom ? `Zooming into ${countryName}...` : `Showing profile for ${countryName}`);
}

let searchEntriesCache: { featuresLength: number; entries: SearchEntry[] } | null = null;

/**
 * Searchable names = the full country catalog (Tier 1 + Tier 2) plus any map-only
 * territories, with raw TopoJSON names kept as searchable aliases. Rebuilt once the
 * map finishes loading (worldFeatures grows from [] to its full size).
 */
function getSearchEntries(): SearchEntry[] {
  if (searchEntriesCache?.featuresLength === worldFeatures.length) {
    return searchEntriesCache.entries;
  }

  const rawByDisplayName = new Map<string, string>();
  for (const f of worldFeatures) {
    const rawName: string = f.properties.name || "";
    const displayName = resolveDisplayName(rawName);
    if (displayName && !rawByDisplayName.has(displayName)) {
      rawByDisplayName.set(displayName, rawName);
    }
  }

  const entries: SearchEntry[] = [];
  const seen = new Set<string>();
  for (const country of getAllGlobalCountries()) {
    entries.push({ name: country.name, icon: country.icon, rawName: rawByDisplayName.get(country.name) });
    seen.add(country.name);
  }
  for (const [displayName, rawName] of rawByDisplayName) {
    if (!seen.has(displayName)) {
      entries.push({ name: displayName, rawName });
      seen.add(displayName);
    }
  }

  searchEntriesCache = { featuresLength: worldFeatures.length, entries };
  return entries;
}

window.addEventListener('load', async () => {
  initAuthorModal();

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

  initSearch(getSearchEntries, selectCountryByName);

  await initWorldMap(selectCountry, resetZoom);

  // Event listeners
  document.getElementById('close-panel-btn')!.addEventListener('click', closeCountryPanel);
  document.getElementById('reset-zoom-btn')!.addEventListener('click', resetZoom);
  document.getElementById('open-quiz-btn')!.addEventListener('click', openQuiz);
  document.getElementById('close-quiz-btn')!.addEventListener('click', closeQuiz);

  // Scroll affordance: faded edges stand in for mobile auto-hiding scrollbars.
  watchScrollFade(document.getElementById('quiz-body')!);
  watchScrollFade(document.getElementById('panel-content')!);
  watchScrollFade(document.getElementById('author-body')!);

  // Handle responsive resize
  window.addEventListener('resize', () => {
    const container = document.getElementById('map-container');
    if (svg && container) {
      svg.attr("viewBox", [0, 0, container.clientWidth, container.clientHeight]);
    }
  });
});

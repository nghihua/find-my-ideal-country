declare const d3: any;
declare const topojson: any;

export let worldFeatures: any[] = [];
export let svg: any, g: any, projection: any, path: any, zoom: any;
let activeMatchColors = new Map<string, string>();

/** Apply quiz match colors while preserving the map's existing pan/zoom state. */
export function setMatchColors(colors: Map<string, string>) {
  activeMatchColors = colors;
  document.getElementById('map-legend')?.classList.remove('hidden');
  if (!g) return;
  g.selectAll(".country").attr("fill", (feature: any) => {
    const name = resolveDisplayName(feature.properties.name || "");
    return activeMatchColors.get(name) || "#f1f3f4";
  });
}

export function clearMatchColors() {
  activeMatchColors.clear();
  document.getElementById('map-legend')?.classList.add('hidden');
  if (g) g.selectAll(".country").attr("fill", "var(--color-map-country)");
}

/** Resolve display name from TopoJSON raw name */
export function resolveDisplayName(rawName: string): string {
  const nameMap: Record<string, string> = {
    "United States of America": "United States",
    "Korea": "South Korea",
    "Republic of Korea": "South Korea",
    "Dem. Rep. Korea": "North Korea",
    "Viet Nam": "Vietnam",
    "Czech Rep.": "Czech Republic",
    "Dominican Rep.": "Dominican Republic",
    "Central African Rep.": "Central African Republic",
    "Dem. Rep. Congo": "Democratic Republic of the Congo",
    "Czechia": "Czech Republic",
    "Gambia": "The Gambia",
    "Congo": "Republic of the Congo",
    "Bosnia and Herz.": "Bosnia and Herzegovina",
    "Macedonia": "North Macedonia",
    "Solomon Is.": "Solomon Islands",
    "Falkland Is.": "Falkland Islands",
    "eSwatini": "Eswatini",
    "W. Sahara": "Western Sahara",
    "Fr. S. Antarctic Lands": "French Southern Territories",
    "S. Sudan": "South Sudan",
    "Eq. Guinea": "Equatorial Guinea",
  };
  return nameMap[rawName] || rawName;
}

/** Get fallback region from map centroid [lon, lat] */
export function getFallbackRegion(centroid: [number, number]): string {
  const [lon, lat] = centroid;
  if (lon > -25 && lon < 45 && lat > 35) return "Europe";
  if (lon >= 45 && lon < 150 && lat > -10) return "Asia";
  if (lon >= 110 && lat <= -10) return "Oceania";
  if (lon > -20 && lon < 55 && lat <= 35) return "Africa";
  return "Americas";
}

export async function initWorldMap(
  onCountryClick: (feature: any) => void,
  onMapClick: () => void,
) {
  const container = document.getElementById('map-container')!;
  const width = container.clientWidth;
  const height = container.clientHeight;

  svg = d3.select("#world-map").attr("viewBox", [0, 0, width, height]);
  g = svg.append("g");

  const isSmallScreen = width < 768;
  // Portrait screens leave a lot of unused vertical space with a width-fitted globe.
  // Fit more closely to height there; desktop keeps the full-world framing.
  const initialScale = isSmallScreen
    ? Math.max(width / 5.4, height / 3.5)
    : width / 5.4;
  projection = d3.geoNaturalEarth1()
    .scale(initialScale)
    .translate([width / 2, height / 2]);

  path = d3.geoPath().projection(projection);

  zoom = d3.zoom()
    .scaleExtent([1, 10])
    .on("zoom", (event: any) => {
      g.attr("transform", event.transform);
      g.selectAll(".country").style("stroke-width", `${0.85 / event.transform.k}px`);
    });

  svg.call(zoom);

  try {
    const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
    const worldData = await response.json();
    worldFeatures = topojson.feature(worldData, worldData.objects.countries).features;
    worldFeatures = worldFeatures.filter((f: any) => f.properties.name !== "Antarctica");

    document.getElementById('map-loader')!.classList.add('hidden');
    document.getElementById('world-map')!.classList.remove('hidden');

    const tooltip = document.getElementById('map-tooltip')!;

    g.selectAll("path")
      .data(worldFeatures)
      .join("path")
      .attr("d", path)
      .attr("class", "country")
      .attr("fill", (feature: any) => activeMatchColors.get(resolveDisplayName(feature.properties.name || "")) || "var(--color-map-country)")
      .attr("stroke", "var(--color-map-stroke)")
      .attr("stroke-width", "0.85px")
      .on("mousemove", (event: MouseEvent, d: any) => {
        const displayName = resolveDisplayName(d.properties.name);
        tooltip.innerHTML = `<i class="fa-solid fa-location-dot text-[#1a73e8] mr-1.5 text-xs"></i><span>${displayName}</span>`;
        tooltip.style.left = `${event.clientX}px`;
        tooltip.style.top = `${event.clientY}px`;
        tooltip.classList.remove("hidden");
      })
      .on("mouseleave", () => {
        tooltip.classList.add("hidden");
      })
      .on("click", (event: MouseEvent, d: any) => {
        event.stopPropagation();
        onCountryClick(d);
      });

    svg.on("click", () => { onMapClick(); });

  } catch (err) {
    console.error("Map load error:", err);
    document.getElementById('map-loader')!.innerHTML = `
      <p class="text-rose-600 font-medium">Unable to load map geometry. Please check your connection.</p>
    `;
  }
}

/** Approximate [lon, lat] for catalog countries that have no geometry in the
 *  coarse 110m world atlas (microstates and small island nations). */
export const MAP_POINT_CENTROIDS: Record<string, [number, number]> = {
  "Singapore": [103.82, 1.35],
  "Andorra": [1.52, 42.51],
  "Liechtenstein": [9.56, 47.17],
  "Malta": [14.38, 35.94],
  "Monaco": [7.42, 43.74],
  "San Marino": [12.45, 43.94],
  "Vatican City": [12.45, 41.90],
  "Bahrain": [50.56, 26.07],
  "Maldives": [73.22, 3.20],
  "Cabo Verde": [-23.04, 16.54],
  "Comoros": [43.33, -11.65],
  "São Tomé and Principe": [6.61, 0.19],
  "Seychelles": [55.49, -4.68],
  "Mauritius": [57.55, -20.35],
  "Antigua and Barbuda": [-61.80, 17.06],
  "Barbados": [-59.54, 13.19],
  "Dominica": [-61.37, 15.42],
  "Grenada": [-61.68, 12.12],
  "Saint Kitts and Nevis": [-62.79, 17.36],
  "Saint Lucia": [-60.98, 13.91],
  "Saint Vincent and the Grenadines": [-61.20, 13.25],
  "Kiribati": [157.36, 1.87],
  "Marshall Islands": [171.18, 7.13],
  "Micronesia": [158.16, 6.92],
  "Nauru": [166.93, -0.52],
  "Palau": [134.58, 7.51],
  "Samoa": [-172.43, -13.76],
  "Tonga": [-175.48, -21.18],
  "Tuvalu": [177.65, -7.11],
};

/** Remove the dot marker placed by zoomToCountryPoint. */
function clearPointMarker() {
  g?.selectAll(".point-marker").remove();
}

/** Zoom to a country that has no map geometry, using its approximate location.
 *  Places a dot marker since there is no shape to highlight. Returns false when
 *  the location or the map is unavailable. */
export function zoomToCountryPoint(name: string): boolean {
  const centroid = MAP_POINT_CENTROIDS[name];
  const container = document.getElementById('map-container');
  if (!centroid || !container || !svg || !g || !projection) return false;

  const width = container.clientWidth;
  const height = container.clientHeight;
  const isMobile = width < 768;

  clearPointMarker();
  g.selectAll(".country").classed("active", false);

  const availableWidth = isMobile ? width : width - 560;
  const targetCenterX = isMobile ? width / 2 : availableWidth / 2;
  const targetCenterY = height / 2;

  const scale = 6.5;
  const [x, y] = projection(centroid) as [number, number];
  const translate = [targetCenterX - scale * x, targetCenterY - scale * y];

  // Dot marker sized to stay ~5px on screen at the final zoom level.
  g.append("circle")
    .attr("class", "point-marker")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", 5 / scale)
    .attr("fill", "#1a73e8")
    .attr("stroke", "#ffffff")
    .attr("stroke-width", 1.5 / scale)
    .attr("pointer-events", "none");

  svg.transition()
    .duration(850)
    .ease(d3.easeCubicInOut)
    .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
  return true;
}

export function zoomToFeature(feature: any) {
  const container = document.getElementById('map-container')!;
  const width = container.clientWidth;
  const height = container.clientHeight;
  const isMobile = width < 768;

  clearPointMarker();
  g.selectAll(".country").classed("active", (d: any) => d === feature);

  const [[x0, y0], [x1, y1]] = path.bounds(feature);
  const dx = x1 - x0;
  const dy = y1 - y0;
  const x = (x0 + x1) / 2;
  const y = (y0 + y1) / 2;

  const availableWidth = isMobile ? width : width - 560;
  const targetCenterX = isMobile ? width / 2 : availableWidth / 2;
  const targetCenterY = height / 2;

  const scale = Math.max(1.5, Math.min(6.5, 0.65 / Math.max(dx / availableWidth, dy / height)));
  const translate = [targetCenterX - scale * x, targetCenterY - scale * y];

  svg.transition()
    .duration(850)
    .ease(d3.easeCubicInOut)
    .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
}

export function resetZoomTransform() {
  clearPointMarker();
  g.selectAll(".country").classed("active", false);
  svg.transition()
    .duration(750)
    .ease(d3.easeCubicInOut)
    .call(zoom.transform, d3.zoomIdentity);
}

import { resolveDisplayName } from './map';

export function initSearch(
  getWorldFeatures: () => any[],
  onSelect: (feature: any) => void,
) {
  const searchInput = document.getElementById('country-search') as HTMLInputElement;
  const searchResults = document.getElementById('search-results')!;

  searchInput.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value.trim().toLowerCase();
    if (!query) {
      searchResults.classList.add('hidden');
      return;
    }

    const matches = getWorldFeatures()
      .filter(f => {
        const rawName = f.properties.name || "";
        const displayName = resolveDisplayName(rawName);
        return rawName.toLowerCase().includes(query) || displayName.toLowerCase().includes(query);
      })
      .slice(0, 8);

    if (matches.length === 0) {
      searchResults.innerHTML = `<div class="px-4 py-3 text-xs text-[#5f6368] font-sans">No matching country found</div>`;
    } else {
      searchResults.innerHTML = matches.map(f => {
        const rawName: string = f.properties.name;
        const displayName = resolveDisplayName(rawName);
        return `
          <button class="w-full text-left px-3.5 py-2.5 text-sm rounded-xl hover:bg-[#f1f3f4] active:bg-[#e8eaed] flex items-center gap-3 transition-colors text-[#202124] group" data-country="${rawName}">
            <div class="w-6 h-6 rounded-full bg-[#f1f3f4] group-hover:bg-[#e8f0fe] text-[#5f6368] group-hover:text-[#1a73e8] flex items-center justify-center shrink-0 transition-colors">
              <i class="fa-solid fa-location-dot text-xs"></i>
            </div>
            <span class="font-medium truncate">${displayName}</span>
          </button>
        `;
      }).join('');
    }
    searchResults.classList.remove('hidden');
  });

  searchResults.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-country]');
    if (!btn) return;
    const targetName = btn.getAttribute('data-country')!;
    const feature = getWorldFeatures().find(f => f.properties.name === targetName);
    if (feature) {
      onSelect(feature);
      (searchInput as HTMLInputElement).value = "";
      searchResults.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target as Node) && !searchResults.contains(e.target as Node)) {
      searchResults.classList.add('hidden');
    }
  });
}

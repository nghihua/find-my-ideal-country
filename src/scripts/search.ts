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
      searchResults.innerHTML = `<div class="px-4 py-3 text-xs text-stone-500">No matching country found</div>`;
    } else {
      searchResults.innerHTML = matches.map(f => {
        const rawName: string = f.properties.name;
        const displayName = resolveDisplayName(rawName);
        return `
          <button class="w-full text-left px-3.5 py-2.5 text-sm rounded-xl hover:bg-paper-100 flex items-center justify-between transition-colors" data-country="${rawName}">
            <span class="text-paper-900 font-medium">${displayName}</span>
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

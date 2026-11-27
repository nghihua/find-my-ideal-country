import { t } from '../i18n';

export interface SearchEntry {
  /** Canonical selection key passed to the selection handler (English catalog name). */
  name: string;
  /** Localized label shown in results; falls back to `name` when absent. */
  displayName?: string;
  /** Optional icon class; falls back to a location pin. */
  icon?: string;
  /** Raw TopoJSON name kept as a searchable alias (e.g. "Viet Nam" → "Vietnam"). */
  rawName?: string;
}

/** Accent-insensitive match key (docs/i18n-plan.md §3.5): Vietnamese users
 *  often type without accents ("nhat ban" instead of "Nhật Bản"), so
 *  diacritics are folded before comparison. đ/Đ do not decompose under NFD
 *  and are mapped by hand. */
export function foldDiacritics(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, (m) => (m === 'đ' ? 'd' : 'D'))
    .toLowerCase();
}

export function initSearch(
  getEntries: () => SearchEntry[],
  onSelect: (name: string) => void,
) {
  const searchInput = document.getElementById('country-search') as HTMLInputElement;
  const searchResults = document.getElementById('search-results')!;

  let matches: SearchEntry[] = [];
  /** Keyboard-highlighted row index; -1 means no row is highlighted. */
  let activeIndex = -1;

  // Combobox ARIA wiring (option ids/aria-selected are managed on render/highlight).
  searchInput.setAttribute('role', 'combobox');
  searchInput.setAttribute('aria-controls', 'search-results');
  searchInput.setAttribute('aria-expanded', 'false');
  searchInput.setAttribute('aria-autocomplete', 'list');
  searchInput.setAttribute('aria-haspopup', 'listbox');
  searchResults.setAttribute('role', 'listbox');

  function hideResults() {
    searchResults.classList.add('hidden');
    activeIndex = -1;
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.removeAttribute('aria-activedescendant');
  }

  function select(entry: SearchEntry) {
    onSelect(entry.name);
    searchInput.value = "";
    hideResults();
  }

  /** Highlight the row at activeIndex, keeping it in view. */
  function highlightActive() {
    const options = searchResults.querySelectorAll<HTMLButtonElement>('button[data-country]');
    options.forEach((el, i) => {
      const isActive = i === activeIndex;
      el.classList.toggle('search-option-active', isActive);
      el.setAttribute('aria-selected', String(isActive));
      if (isActive) {
        el.id = `search-option-${i}`;
        el.scrollIntoView({ block: 'nearest' });
      }
    });
    if (activeIndex >= 0) {
      searchInput.setAttribute('aria-activedescendant', `search-option-${activeIndex}`);
    } else {
      searchInput.removeAttribute('aria-activedescendant');
    }
  }

  function runSearch() {
    const query = foldDiacritics(searchInput.value.trim());
    if (!query) {
      matches = [];
      hideResults();
      return;
    }

    const entries = getEntries();
    const startsWith: SearchEntry[] = [];
    const contains: SearchEntry[] = [];
    for (const entry of entries) {
      const name = foldDiacritics(entry.name);
      const displayName = foldDiacritics(entry.displayName ?? '');
      const rawName = foldDiacritics(entry.rawName ?? '');
      if (name.startsWith(query) || displayName.startsWith(query) || rawName.startsWith(query)) startsWith.push(entry);
      else if (name.includes(query) || displayName.includes(query) || rawName.includes(query)) contains.push(entry);
    }

    matches = [
      ...startsWith.sort((a, b) => (a.displayName ?? a.name).localeCompare(b.displayName ?? b.name)),
      ...contains.sort((a, b) => (a.displayName ?? a.name).localeCompare(b.displayName ?? b.name)),
    ].slice(0, 8);
    activeIndex = -1;

    if (matches.length === 0) {
      searchResults.innerHTML = `<div role="status" class="px-4 py-3 text-xs text-[#5f6368] font-sans">${t('search.noResults')}</div>`;
    } else {
      searchResults.innerHTML = matches.map(entry => {
        return `
          <button type="button" role="option" aria-selected="false" class="w-full text-left px-3.5 py-2.5 text-sm rounded-xl hover:bg-[#f1f3f4] active:bg-[#e8eaed] flex items-center gap-3 transition-colors text-[#202124] group" data-country="${entry.name}">
            <div class="search-option-icon w-6 h-6 rounded-full bg-[#f1f3f4] group-hover:bg-[#e8f0fe] text-[#5f6368] group-hover:text-[#1a73e8] flex items-center justify-center shrink-0 transition-colors">
              <i class="${entry.icon || 'fa-solid fa-location-dot'} text-xs"></i>
            </div>
            <span class="font-medium truncate">${entry.displayName ?? entry.name}</span>
          </button>
        `;
      }).join('');
    }
    searchResults.classList.remove('hidden');
    searchInput.setAttribute('aria-expanded', 'true');
  }

  searchInput.addEventListener('input', runSearch);

  searchInput.addEventListener('keydown', (e) => {
    const isOpen = !searchResults.classList.contains('hidden');
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        // Re-open a dismissed dropdown when the query is still in the input.
        if (!isOpen) {
          if (!searchInput.value.trim()) return;
          runSearch();
        }
        if (matches.length === 0) return;
        e.preventDefault();
        const delta = e.key === 'ArrowDown' ? 1 : -1;
        // Clamp at the bottom row and let Up from the first row return to the input.
        activeIndex = Math.max(-1, Math.min(activeIndex + delta, matches.length - 1));
        highlightActive();
        break;
      }
      case 'Enter': {
        if (e.isComposing || !isOpen || matches.length === 0) return;
        e.preventDefault();
        select(activeIndex >= 0 ? matches[activeIndex] : matches[0]);
        break;
      }
      case 'Escape': {
        if (!isOpen) return;
        e.preventDefault();
        hideResults();
        break;
      }
    }
  });

  searchResults.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-country]');
    if (!btn) return;
    const entry = matches.find(m => m.name === btn.getAttribute('data-country'));
    if (entry) select(entry);
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target as Node) && !searchResults.contains(e.target as Node)) {
      hideResults();
    }
  });
}

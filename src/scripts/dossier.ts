import type { CountryData } from '../data/countries';

export function renderCountryDossier(data: CountryData & { isCurated: boolean }) {
  document.getElementById('panel-icon')!.innerHTML = `<i class="${data.icon}"></i>`;
  document.getElementById('panel-region')!.textContent = data.region;
  document.getElementById('panel-title')!.textContent = data.name;
  document.getElementById('panel-tagline')!.textContent = `"${data.tagline}"`;
  document.getElementById('metric-cost')!.textContent = data.cost;
  document.getElementById('metric-wlb')!.textContent = data.wlb;
  document.getElementById('metric-safety')!.textContent = data.safety;

  const badge = document.getElementById('panel-badge')!;
  badge.classList.toggle('hidden', !data.isCurated);

  const content = document.getElementById('panel-content')!;
  content.scrollTop = 0;
  content.innerHTML = buildDossierHTML(data);

  document.getElementById('country-panel')!.classList.remove('translate-x-full');
}

export function closeCountryPanel() {
  document.getElementById('country-panel')!.classList.add('translate-x-full');
}

function buildDossierHTML(data: CountryData): string {
  return `
    <!-- External Videos Section -->
    <section class="paper-card rounded-2xl p-5">
      <div class="flex items-center justify-between mb-3.5">
        <h3 class="font-display font-bold text-xs uppercase tracking-wider text-[#52827b] flex items-center gap-2">
          <svg class="w-4 h-4 text-[#e8998d]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Watch: Day in the Life &amp; Street Walks
        </h3>
        <span class="text-[11px] text-stone-400 font-medium">External Links</span>
      </div>
      <div class="space-y-2.5">
        ${data.videos.map(v => `
          <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-between gap-3 p-3 rounded-xl bg-paper-100 hover:bg-[#f5ede3] shadow-paper-sm hover:shadow-paper transition-all">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-9 h-9 rounded-lg bg-[#fbe5e2] text-[#c96e61] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div class="truncate">
                <div class="text-sm font-semibold text-paper-900 group-hover:text-[#c96e61] truncate transition-colors">${v.title}</div>
                <div class="text-xs text-stone-500">${v.channel} • ${v.duration}</div>
              </div>
            </div>
            <svg class="w-4 h-4 text-stone-400 group-hover:text-[#c96e61] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- Upsides & Downsides Grid -->
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-[#eef7f1] shadow-paper rounded-2xl p-5">
        <h4 class="font-display font-bold text-sm text-[#457268] flex items-center gap-2 mb-3">
          <i class="fa-solid fa-circle-arrow-up text-[#699e90]"></i> The Upsides
        </h4>
        <ul class="space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
          ${data.upsides.map(item => `<li class="flex items-start gap-2.5"><i class="fa-solid fa-check text-[#699e90] text-xs mt-1 shrink-0"></i><span>${item}</span></li>`).join('')}
        </ul>
      </div>
      <div class="bg-[#fcf0ee] shadow-paper rounded-2xl p-5">
        <h4 class="font-display font-bold text-sm text-[#b35e54] flex items-center gap-2 mb-3">
          <i class="fa-solid fa-circle-arrow-down text-[#d98479]"></i> The Downsides
        </h4>
        <ul class="space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
          ${data.downsides.map(item => `<li class="flex items-start gap-2.5"><i class="fa-solid fa-minus text-[#d98479] text-xs mt-1 shrink-0"></i><span>${item}</span></li>`).join('')}
        </ul>
      </div>
    </section>

    <!-- Daily Rhythm: Workday & Evening -->
    <section class="space-y-4">
      <div class="bg-[#fdf8ee] shadow-paper rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-[#faebd2] text-[#c78538] flex items-center justify-center text-xs"><i class="fa-solid fa-sun"></i></span>
          What a Typical Workday is Like
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.workday}</p>
      </div>
      <div class="bg-[#f3f2fa] shadow-paper rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-[#e5e2f5] text-[#6d629c] flex items-center justify-center text-xs"><i class="fa-solid fa-moon"></i></span>
          What a Typical Evening is Like
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.evening}</p>
      </div>
    </section>

    <!-- Culture, People, Cost of Living -->
    <section class="space-y-4 pb-6">
      <div class="paper-card rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-[#fbe5e2] text-[#c96e61] flex items-center justify-center text-xs"><i class="fa-solid fa-masks-theater"></i></span>
          The Culture
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.culture}</p>
      </div>
      <div class="paper-card rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-[#dff0ea] text-[#457268] flex items-center justify-center text-xs"><i class="fa-solid fa-people-group"></i></span>
          The People &amp; Social Vibe
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.people}</p>
      </div>
      <div class="paper-card rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-[#fdf0dc] text-[#b87b35] flex items-center justify-center text-xs"><i class="fa-solid fa-coins"></i></span>
          Cost of Living Breakdown
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.costOfLiving}</p>
      </div>
    </section>
  `;
}

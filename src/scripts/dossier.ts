import type { CountryData } from '../data/countries';

export function renderCountryDossier(data: CountryData) {
  document.getElementById('panel-icon')!.innerHTML = `<i class="${data.icon}"></i>`;
  document.getElementById('panel-region')!.textContent = data.region;
  document.getElementById('panel-title')!.textContent = data.name;
  document.getElementById('panel-tagline')!.textContent = `"${data.tagline}"`;
  document.getElementById('metric-cost')!.textContent = data.cost;
  document.getElementById('metric-wlb')!.textContent = data.wlb;
  document.getElementById('metric-safety')!.textContent = data.safety;

  const content = document.getElementById('panel-content')!;
  content.scrollTop = 0;
  content.innerHTML = buildDossierHTML(data);

  document.getElementById('country-panel')!.classList.remove('translate-x-full');
}

export function closeCountryPanel() {
  document.getElementById('country-panel')!.classList.add('translate-x-full');
}

function getTransitBadge(t?: string) {
  switch (t) {
    case 'walkable-rail': return { label: 'Walkable Towns & Rail', icon: 'fa-solid fa-train-subway' };
    case 'motorbike-active': return { label: 'Scooters & Active Street', icon: 'fa-solid fa-motorcycle' };
    case 'car-dependent': return { label: 'Car-Dependent Highways', icon: 'fa-solid fa-car' };
    default: return { label: 'Mixed Urban Transit', icon: 'fa-solid fa-bus' };
  }
}

function getConvenienceBadge(c?: number) {
  if (!c || c >= 5) return { label: '24/7 Delivery & Convenience', icon: 'fa-solid fa-basket-shopping' };
  if (c === 4) return { label: 'High Convenience Services', icon: 'fa-solid fa-store' };
  if (c === 3) return { label: 'Standard Balanced Services', icon: 'fa-solid fa-clock' };
  return { label: 'High-Wage DIY & Self-Reliance', icon: 'fa-solid fa-screwdriver-wrench' };
}

function getLgbtqBadge(t?: number) {
  if (!t || t >= 5) return { label: 'World-Leading Equality', icon: 'fa-solid fa-rainbow', color: 'text-teal' };
  if (t === 4) return { label: 'Legally Protected & Safe', icon: 'fa-solid fa-shield-heart', color: 'text-teal' };
  if (t === 3) return { label: 'Socially Tolerant & Safe', icon: 'fa-solid fa-hand-holding-heart', color: 'text-stone-700' };
  if (t === 2) return { label: 'Conservative Legal Norms', icon: 'fa-solid fa-scale-unbalanced', color: 'text-amber-accent' };
  return { label: 'Restricted Legal Status', icon: 'fa-solid fa-triangle-exclamation', color: 'text-coral' };
}

function getClimateBadge(cl?: string) {
  switch (cl) {
    case 'tropical': return { label: 'Tropical Warmth & Sun', icon: 'fa-solid fa-sun' };
    case 'warm-sun': return { label: 'Sunny Warm Climate', icon: 'fa-solid fa-sun-plant-wilt' };
    case 'four-seasons': return { label: 'Distinct Four Seasons', icon: 'fa-solid fa-leaf' };
    case 'cold-winter': return { label: 'Crisp Sub-Zero Winters', icon: 'fa-solid fa-snowflake' };
    case 'mild-coastal': return { label: 'Temperate Coastal Air', icon: 'fa-solid fa-water' };
    default: return { label: 'Temperate Climate', icon: 'fa-solid fa-cloud-sun' };
  }
}

function getWeekendBadge(w?: string) {
  switch (w) {
    case 'vibrant-24-7': return { label: '7-Day Vibrant / Open Sundays', icon: 'fa-solid fa-martini-glass-citrus' };
    case 'quiet-sunday': return { label: 'Sacred Sunday Rest (Stores Shut)', icon: 'fa-solid fa-bed' };
    default: return { label: 'Standard Weekend Rhythm', icon: 'fa-solid fa-calendar-check' };
  }
}

function buildDossierHTML(data: CountryData): string {
  const dim = data.dimensions;
  const transit = getTransitBadge(dim?.transit);
  const convenience = getConvenienceBadge(dim?.convenienceScore);
  const lgbtq = getLgbtqBadge(dim?.lgbtqTier);
  const climate = getClimateBadge(dim?.climate);
  const weekend = getWeekendBadge(dim?.weekendRhythm);

  return `
    <!-- Lifestyle Scorecard Strip -->
    <section class="paper-card rounded-2xl p-4 sm:p-5 space-y-3">
      <div class="flex items-center justify-between">
        <h3 class="font-display font-bold text-xs uppercase tracking-wider text-teal flex items-center gap-2">
          <i class="fa-solid fa-sliders text-primary"></i>
          Lifestyle & Living Factor Scorecard
        </h3>
        <span class="text-[10px] text-stone-400 font-medium">Real-World Rhythms</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
        <div class="flex items-center gap-2.5 p-2 rounded-xl bg-paper-100">
          <span class="w-7 h-7 rounded-lg bg-teal-light text-teal flex items-center justify-center shrink-0">
            <i class="${transit.icon}"></i>
          </span>
          <div>
            <div class="text-[10px] text-stone-400 uppercase font-semibold">Mobility</div>
            <div class="font-medium text-paper-900">${transit.label}</div>
          </div>
        </div>

        <div class="flex items-center gap-2.5 p-2 rounded-xl bg-paper-100">
          <span class="w-7 h-7 rounded-lg bg-coral-light text-coral flex items-center justify-center shrink-0">
            <i class="${convenience.icon}"></i>
          </span>
          <div>
            <div class="text-[10px] text-stone-400 uppercase font-semibold">Daily Convenience</div>
            <div class="font-medium text-paper-900">${convenience.label}</div>
          </div>
        </div>

        <div class="flex items-center gap-2.5 p-2 rounded-xl bg-paper-100">
          <span class="w-7 h-7 rounded-lg bg-amber-soft text-amber-accent flex items-center justify-center shrink-0">
            <i class="${climate.icon}"></i>
          </span>
          <div>
            <div class="text-[10px] text-stone-400 uppercase font-semibold">Climate Reality</div>
            <div class="font-medium text-paper-900">${climate.label}</div>
          </div>
        </div>

        <div class="flex items-center gap-2.5 p-2 rounded-xl bg-paper-100">
          <span class="w-7 h-7 rounded-lg bg-purple-light text-purple-dark flex items-center justify-center shrink-0">
            <i class="${weekend.icon}"></i>
          </span>
          <div>
            <div class="text-[10px] text-stone-400 uppercase font-semibold">Weekend & Sunday</div>
            <div class="font-medium text-paper-900">${weekend.label}</div>
          </div>
        </div>

        <div class="sm:col-span-2 flex items-center gap-2.5 p-2 rounded-xl bg-paper-100">
          <span class="w-7 h-7 rounded-lg bg-badge text-stone-700 flex items-center justify-center shrink-0">
            <i class="${lgbtq.icon}"></i>
          </span>
          <div>
            <div class="text-[10px] text-stone-400 uppercase font-semibold">Social Rights & Safety</div>
            <div class="font-medium ${lgbtq.color}">${lgbtq.label}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Honest Reality Check Section -->
    <section class="bg-amber-bg shadow-paper rounded-2xl p-4 sm:p-5 border-l-4 border-amber-accent space-y-1.5">
      <div class="text-xs font-bold uppercase tracking-wider text-amber-dark flex items-center gap-1.5">
        <i class="fa-solid fa-triangle-exclamation text-amber-accent"></i> The Reality Check & Trade-offs:
      </div>
      <p class="text-xs sm:text-sm text-stone-700 leading-relaxed">
        ${data.realityCheck || "Paperwork, language adjustments, and regional cultural customs require patience and local learning."}
      </p>
    </section>

    <!-- Upsides & Downsides Grid -->
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-green-bg shadow-paper rounded-2xl p-5">
        <h4 class="font-display font-bold text-sm text-teal-dark flex items-center gap-2 mb-3">
          <i class="fa-solid fa-circle-arrow-up text-green-accent"></i> The Upsides
        </h4>
        <ul class="space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
          ${data.upsides.map(item => `<li class="flex items-start gap-2.5"><i class="fa-solid fa-check text-green-accent text-xs mt-1 shrink-0"></i><span>${item}</span></li>`).join('')}
        </ul>
      </div>
      <div class="bg-coral-bg shadow-paper rounded-2xl p-5">
        <h4 class="font-display font-bold text-sm text-coral-dark flex items-center gap-2 mb-3">
          <i class="fa-solid fa-circle-arrow-down text-coral-muted"></i> The Downsides
        </h4>
        <ul class="space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
          ${data.downsides.map(item => `<li class="flex items-start gap-2.5"><i class="fa-solid fa-minus text-coral-muted text-xs mt-1 shrink-0"></i><span>${item}</span></li>`).join('')}
        </ul>
      </div>
    </section>

    <!-- Daily Rhythm: Workday & Evening -->
    <section class="space-y-4">
      <div class="bg-amber-bg shadow-paper rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-amber-light text-amber-accent flex items-center justify-center text-xs"><i class="fa-solid fa-sun"></i></span>
          What a Typical Workday is Like
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.workday}</p>
      </div>

      <div class="bg-purple-card shadow-paper rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-purple-light text-purple-dark flex items-center justify-center text-xs"><i class="fa-solid fa-moon"></i></span>
          What a Typical Evening is Like
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.evening}</p>
      </div>
    </section>

    <!-- Culture, People, Cost of Living -->
    <section class="space-y-4">
      <div class="paper-card rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-coral-light text-coral flex items-center justify-center text-xs"><i class="fa-solid fa-masks-theater"></i></span>
          The Culture
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.culture}</p>
      </div>
      <div class="paper-card rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-teal-light text-teal-dark flex items-center justify-center text-xs"><i class="fa-solid fa-people-group"></i></span>
          The People &amp; Social Vibe
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.people}</p>
      </div>
      <div class="paper-card rounded-2xl p-5">
        <h4 class="font-display font-bold text-base text-paper-900 flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-lg bg-amber-soft text-amber-dark flex items-center justify-center text-xs"><i class="fa-solid fa-coins"></i></span>
          Cost of Living Breakdown
        </h4>
        <p class="text-sm text-stone-700 leading-relaxed">${data.costOfLiving}</p>
      </div>
    </section>

    <!-- External Videos Section -->
    <section class="paper-card rounded-2xl p-5 pb-6">
      <div class="flex items-center justify-between mb-3.5">
        <h3 class="font-display font-bold text-xs uppercase tracking-wider text-teal flex items-center gap-2">
          <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          Watch: Day in the Life &amp; Street Walks
        </h3>
        <span class="text-[11px] text-stone-400 font-medium">External Links</span>
      </div>
      <div class="space-y-2.5">
        ${data.videos.map(v => `
          <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-between gap-3 p-3 rounded-xl bg-paper-100 hover:bg-hoverCard shadow-paper-sm hover:shadow-paper transition-all">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-9 h-9 rounded-lg bg-coral-light text-coral flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div class="truncate">
                <div class="text-sm font-semibold text-paper-900 group-hover:text-coral truncate transition-colors">${v.title}</div>
                <div class="text-xs text-stone-500">${v.channel} • ${v.duration}</div>
              </div>
            </div>
            <svg class="w-4 h-4 text-stone-400 group-hover:text-coral shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

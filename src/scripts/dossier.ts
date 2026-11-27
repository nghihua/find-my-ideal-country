import type { CountryData } from '../data/countries';
import { describeClimateProfilePoints } from '../data/climateProfiles';
import { SOCIAL_WARMTH_BANDS } from '../data/socialWarmth';
import { t } from '../i18n';

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

function getTransitBadge(tier?: string) {
  switch (tier) {
    case 'walkable-rail': return { label: t('badge.transit.walkableRail'), icon: 'fa-solid fa-train-subway' };
    case 'motorbike-active': return { label: t('badge.transit.motorbikeActive'), icon: 'fa-solid fa-motorcycle' };
    case 'car-dependent': return { label: t('badge.transit.carDependent'), icon: 'fa-solid fa-car' };
    default: return { label: t('badge.transit.default'), icon: 'fa-solid fa-bus' };
  }
}

function getConvenienceBadge(c?: number) {
  if (!c || c >= 5) return { label: t('badge.convenience.max'), icon: 'fa-solid fa-basket-shopping' };
  if (c === 4) return { label: t('badge.convenience.high'), icon: 'fa-solid fa-store' };
  if (c === 3) return { label: t('badge.convenience.standard'), icon: 'fa-solid fa-clock' };
  return { label: t('badge.convenience.low'), icon: 'fa-solid fa-screwdriver-wrench' };
}

function getLgbtqBadge(tier?: number) {
  if (!tier || tier >= 5) return { label: t('badge.lgbtq.tier5'), icon: 'fa-solid fa-rainbow', color: 'text-[#137333]' };
  if (tier === 4) return { label: t('badge.lgbtq.tier4'), icon: 'fa-solid fa-shield-heart', color: 'text-[#1a73e8]' };
  if (tier === 3) return { label: t('badge.lgbtq.tier3'), icon: 'fa-solid fa-hand-holding-heart', color: 'text-[#3c4043]' };
  if (tier === 2) return { label: t('badge.lgbtq.tier2'), icon: 'fa-solid fa-scale-unbalanced', color: 'text-[#b06000]' };
  return { label: t('badge.lgbtq.tier1'), icon: 'fa-solid fa-triangle-exclamation', color: 'text-[#c5221f]' };
}

function getClimateBadge(cl?: string) {
  switch (cl) {
    case 'tropical': return { label: t('badge.climate.tropical'), icon: 'fa-solid fa-sun' };
    case 'warm-sun': return { label: t('badge.climate.warmSun'), icon: 'fa-solid fa-sun-plant-wilt' };
    case 'four-seasons': return { label: t('badge.climate.fourSeasons'), icon: 'fa-solid fa-leaf' };
    case 'cold-winter': return { label: t('badge.climate.coldWinter'), icon: 'fa-solid fa-snowflake' };
    case 'mild-coastal': return { label: t('badge.climate.mildCoastal'), icon: 'fa-solid fa-water' };
    default: return { label: t('badge.climate.default'), icon: 'fa-solid fa-cloud-sun' };
  }
}

function getWeekendBadge(w?: string) {
  switch (w) {
    case 'vibrant-24-7': return { label: t('badge.weekend.vibrant'), icon: 'fa-solid fa-martini-glass-citrus' };
    case 'quiet-sunday': return { label: t('badge.weekend.quiet'), icon: 'fa-solid fa-bed' };
    default: return { label: t('badge.weekend.default'), icon: 'fa-solid fa-calendar-check' };
  }
}

function buildDossierHTML(data: CountryData): string {
  const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(data.name.replace(/ /g, '_'))}`;
  const dim = data.dimensions;
  const transit = getTransitBadge(dim?.transit);
  const convenience = getConvenienceBadge(dim?.convenienceScore);
  const lgbtq = getLgbtqBadge(dim?.lgbtqTier);
  const climate = getClimateBadge(dim?.climate);
  const weekend = getWeekendBadge(dim?.weekendRhythm);
  const practical = data.practical;
  const practicalValue = (value?: string) => value ? value.replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase()) : t('dossier.notSourced');
  const hazardSummary = practical?.hazardTypes
    ? Object.entries(practical.hazardTypes).map(([type, level]) => `${type}: ${level}`).join(', ')
    : practical?.hazardLevel;

  return `
    <!-- Lifestyle Scorecard Strip (Google Travel Metric Card) -->
    <section class="bg-white border border-[#dadce0] rounded-2xl p-4 sm:p-5 space-y-3 shadow-[0_1px_2px_rgba(60,64,67,0.1)]">
      <div class="flex items-center justify-between">
        <h3 class="font-display font-medium text-xs uppercase tracking-wider text-[#1a73e8] flex items-center gap-2">
          <i class="fa-solid fa-sliders text-[#1a73e8]"></i>
          ${t('dossier.scorecardTitle')}
        </h3>
        <span class="text-[10px] text-[#5f6368] font-normal">${t('dossier.scorecardNote')}</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
        <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f8f9fa] border border-[#f1f3f4]">
          <span class="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center shrink-0 text-xs">
            <i class="${transit.icon}"></i>
          </span>
          <div class="min-w-0">
            <div class="text-[10px] text-[#5f6368] uppercase font-medium">${t('dossier.mobility')}</div>
            <div class="font-medium text-[#202124] truncate">${transit.label}</div>
          </div>
        </div>

        <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f8f9fa] border border-[#f1f3f4]">
          <span class="w-8 h-8 rounded-full bg-[#fce8e6] text-[#ea4335] flex items-center justify-center shrink-0 text-xs">
            <i class="${convenience.icon}"></i>
          </span>
          <div class="min-w-0">
            <div class="text-[10px] text-[#5f6368] uppercase font-medium">${t('dossier.dailyConvenience')}</div>
            <div class="font-medium text-[#202124] truncate">${convenience.label}</div>
          </div>
        </div>

        <div class="sm:col-span-2 p-3 rounded-xl bg-[#f8f9fa] border border-[#f1f3f4]">
          <div class="flex items-center gap-2.5">
            <span class="w-8 h-8 rounded-full bg-[#fef7e0] text-[#b06000] flex items-center justify-center shrink-0 text-xs">
              <i class="${climate.icon}"></i>
            </span>
            <div class="min-w-0">
              <div class="text-[10px] text-[#5f6368] uppercase font-medium">${t('dossier.climateReality')}</div>
              <div class="font-medium text-[#202124]">${climate.label}</div>
            </div>
          </div>
          <ul class="mt-2 pl-12 space-y-1.5 list-disc text-[10px] leading-relaxed text-[#5f6368]">
            ${describeClimateProfilePoints(data.climateProfile).map(detail => `<li>${detail}</li>`).join('')}
          </ul>
        </div>

        <div class="sm:col-span-2 flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f8f9fa] border border-[#f1f3f4]">
          <span class="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center shrink-0 text-xs">
            <i class="${weekend.icon}"></i>
          </span>
          <div class="min-w-0">
            <div class="text-[10px] text-[#5f6368] uppercase font-medium">${t('dossier.weekendSunday')}</div>
            <div class="font-medium text-[#202124] truncate">${weekend.label}</div>
          </div>
        </div>

        <div class="sm:col-span-2 flex items-center gap-2.5 p-2.5 rounded-xl bg-[#f8f9fa] border border-[#f1f3f4]">
          <span class="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center shrink-0 text-xs">
            <i class="${lgbtq.icon}"></i>
          </span>
          <div class="min-w-0">
            <div class="text-[10px] text-[#5f6368] uppercase font-medium">${t('dossier.socialRights')}</div>
            <div class="font-medium ${lgbtq.color} truncate">${lgbtq.label}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white border border-[#dadce0] rounded-2xl p-4 sm:p-5 space-y-3 shadow-[0_1px_2px_rgba(60,64,67,0.1)]">
      <div class="flex items-center justify-between gap-3">
        <h3 class="font-display font-medium text-xs uppercase tracking-wider text-[#1a73e8]">${t('dossier.practicalTitle')}</h3>
        <span class="text-[10px] text-[#5f6368]">${practical?.verifiedAt ? t('dossier.checked', { date: practical.verifiedAt }) : t('dossier.dataNeedsSourcing')}</span>
      </div>
      <p class="text-[10px] text-[#5f6368] leading-relaxed">${t('dossier.practicalDisclaimer')}</p>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <span class="text-[#5f6368]">${t('dossier.visaRoutes')}</span><span>${practicalValue(practical?.visaRoutes ? Object.entries(practical.visaRoutes).map(([route, status]) => `${route}: ${status}`).join(', ') : practical?.visaFit)}</span>
        <span class="text-[#5f6368]">${t('dossier.healthcare')}</span><span>${practicalValue(practical?.healthcare)}</span>
        <span class="text-[#5f6368]">${t('dossier.englishIndependence')}</span><span>${practicalValue(practical?.englishEase ? `${practical.englishEase}/5` : undefined)}</span>
        <span class="text-[#5f6368]">${t('dossier.tapWater')}</span><span>${practicalValue(practical?.tapWater)}</span>
        <span class="text-[#5f6368]">${t('dossier.airQuality')}</span><span>${practicalValue(practical?.airQuality)}</span>
        <span class="text-[#5f6368]">${t('dossier.naturalHazards')}</span><span>${practicalValue(hazardSummary)}</span>
        <span class="text-[#5f6368]">${t('dossier.taxProfile')}</span><span>${practicalValue(practical?.taxProfile)}</span>
      </div>
      ${practical?.healthcareNote ? `<p class="text-xs text-[#5f6368] leading-relaxed">${practical.healthcareNote}</p>` : ''}
      ${practical?.englishEaseNote ? `<p class="text-xs text-[#5f6368] leading-relaxed">${practical.englishEaseNote}</p>` : ''}
      ${practical?.taxProfileNote ? `<p class="text-xs text-[#5f6368] leading-relaxed">${practical.taxProfileNote}</p>` : ''}
      ${practical?.tapWaterNote ? `<p class="text-xs text-[#5f6368] leading-relaxed">${practical.tapWaterNote}</p>` : ''}
      ${practical?.airQualityNote ? `<p class="text-xs text-[#5f6368] leading-relaxed">${practical.airQualityNote}</p>` : ''}
      ${practical?.hazardNote ? `<p class="text-xs text-[#5f6368] leading-relaxed">${practical.hazardNote}</p>` : ''}
      ${practical?.sources?.length ? `<div class="flex flex-wrap gap-x-3 gap-y-1 text-[10px]">${practical.sources.map((source, index) => `<a class="text-[#1a73e8] underline" href="${source}" target="_blank" rel="noopener noreferrer">${t('dossier.sourceN', { n: index + 1 })}</a>`).join('')}</div>` : ''}
    </section>

    <!-- The Honest Reality Check Section (Google Warning Banner) -->
    <section class="bg-[#fef7e0] border border-[#fce8b2] border-l-4 border-l-[#fbbc04] rounded-2xl p-4 sm:p-5 space-y-1.5 shadow-[0_1px_2px_rgba(60,64,67,0.06)]">
      <div class="text-xs font-semibold uppercase tracking-wider text-[#b06000] flex items-center gap-1.5">
        <i class="fa-solid fa-triangle-exclamation text-[#f29900]"></i> ${t('dossier.realityCheckTitle')}
      </div>
      <p class="text-xs sm:text-sm text-[#3c4043] leading-relaxed">
        ${data.realityCheck || t('dossier.realityCheckFallback')}
      </p>
    </section>

    <!-- Upsides & Downsides Grid (Google Green & Red Containers) -->
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      <div class="bg-[#e6f4ea] border border-[#ceead6] rounded-2xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(60,64,67,0.06)]">
        <h4 class="font-display font-medium text-sm text-[#137333] flex items-center gap-2 mb-3">
          <i class="fa-solid fa-circle-check text-[#34a853]"></i> ${t('dossier.upsidesTitle')}
        </h4>
        <ul class="space-y-2.5 text-xs sm:text-sm text-[#202124] leading-relaxed">
          ${data.upsides.map(item => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-[#34a853] text-xs mt-1 shrink-0"></i><span>${item}</span></li>`).join('')}
        </ul>
      </div>
      <div class="bg-[#fce8e6] border border-[#fad2cf] rounded-2xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(60,64,67,0.06)]">
        <h4 class="font-display font-medium text-sm text-[#c5221f] flex items-center gap-2 mb-3">
          <i class="fa-solid fa-circle-exclamation text-[#ea4335]"></i> ${t('dossier.downsidesTitle')}
        </h4>
        <ul class="space-y-2.5 text-xs sm:text-sm text-[#202124] leading-relaxed">
          ${data.downsides.map(item => `<li class="flex items-start gap-2"><i class="fa-solid fa-minus text-[#ea4335] text-xs mt-1 shrink-0"></i><span>${item}</span></li>`).join('')}
        </ul>
      </div>
    </section>

    <!-- Daily Rhythm: Workday & Evening (Clean Google Cards) -->
    <section class="space-y-3.5">
      <div class="bg-white border border-[#dadce0] rounded-2xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(60,64,67,0.08)]">
        <h4 class="font-display font-medium text-sm sm:text-base text-[#202124] flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-full bg-[#fef7e0] text-[#b06000] flex items-center justify-center text-xs">
            <i class="fa-solid fa-sun"></i>
          </span>
          ${t('dossier.workdayTitle')}
        </h4>
        <p class="text-xs sm:text-sm text-[#3c4043] leading-relaxed">${data.workday}</p>
      </div>

      <div class="bg-white border border-[#dadce0] rounded-2xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(60,64,67,0.08)]">
        <h4 class="font-display font-medium text-sm sm:text-base text-[#202124] flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center text-xs">
            <i class="fa-solid fa-moon"></i>
          </span>
          ${t('dossier.eveningTitle')}
        </h4>
        <p class="text-xs sm:text-sm text-[#3c4043] leading-relaxed">${data.evening}</p>
      </div>
    </section>

    <!-- Culture, People, Cost of Living -->
    <section class="space-y-3.5">
      <div class="bg-white border border-[#dadce0] rounded-2xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(60,64,67,0.08)]">
        <h4 class="font-display font-medium text-sm sm:text-base text-[#202124] flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-full bg-[#fce8e6] text-[#ea4335] flex items-center justify-center text-xs">
            <i class="fa-solid fa-masks-theater"></i>
          </span>
          ${t('dossier.cultureTitle')}
        </h4>
        <p class="text-xs sm:text-sm text-[#3c4043] leading-relaxed">${data.culture}</p>
      </div>
      <div class="bg-white border border-[#dadce0] rounded-2xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(60,64,67,0.08)]">
        <h4 class="font-display font-medium text-sm sm:text-base text-[#202124] flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center text-xs">
            <i class="fa-solid fa-people-group"></i>
          </span>
          ${t('dossier.peopleTitle')}
        </h4>
        <p class="text-xs sm:text-sm text-[#3c4043] leading-relaxed">${data.people}</p>
        ${data.socialWarmth ? `
          <div class="mt-3 pt-2.5 border-t border-[#f1f3f4]">
            <div class="text-[10px] font-medium text-[#5f6368] uppercase tracking-wider mb-1">
              ${t('dossier.socialFabricLabel')} <span class="font-medium text-[#1a73e8] normal-case capitalize">${SOCIAL_WARMTH_BANDS[data.socialWarmth]?.replace(/-/g, ' ')}</span>
            </div>
            ${data.socialWarmthNote ? `<p class="text-xs text-[#5f6368] leading-relaxed">${data.socialWarmthNote}</p>` : ''}
          </div>
        ` : ''}
      </div>
      <div class="bg-white border border-[#dadce0] rounded-2xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(60,64,67,0.08)]">
        <h4 class="font-display font-medium text-sm sm:text-base text-[#202124] flex items-center gap-2.5 mb-2">
          <span class="w-7 h-7 rounded-full bg-[#fef7e0] text-[#b06000] flex items-center justify-center text-xs">
            <i class="fa-solid fa-coins"></i>
          </span>
          ${t('dossier.costOfLivingTitle')}
        </h4>
        <p class="text-xs sm:text-sm text-[#3c4043] leading-relaxed">${data.costOfLiving}</p>
      </div>
    </section>

    <section class="bg-white border border-[#dadce0] rounded-2xl p-4 sm:p-5 shadow-[0_1px_2px_rgba(60,64,67,0.08)]">
      <h3 class="font-display font-medium text-xs uppercase tracking-wider text-[#5f6368] mb-3.5">${t('dossier.learnMore', { name: data.name })}</h3>
      <a href="${wikiUrl}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-3 p-3 rounded-xl bg-[#f8f9fa] hover:bg-[#f1f3f4] border border-[#dadce0] transition-colors">
        <span class="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center font-serif text-lg">W</span>
        <span class="text-sm font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors">${t('dossier.onWikipedia', { name: data.name })}</span>
        <span aria-hidden="true" class="text-[#5f6368]">↗</span>
      </a>
    </section>
  `;
}

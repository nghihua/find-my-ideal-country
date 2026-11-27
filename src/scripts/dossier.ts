import type { CountryData } from '../data/countries';
import { describeClimateProfilePoints } from '../data/climateProfiles';
import { socialWarmthBandLabel } from '../data/socialWarmth';
import type { Locale } from '../i18n';
import { t, getLocale } from '../i18n';
import { getLocalizedName } from '../i18n/countryNames';

// Region chips show the metadata region string (e.g. "Central Europe");
// localize for display. Values stay canonical — matching/filter logic is
// untouched.
const VI_REGION_LABELS: Record<string, string> = {
  // continent-level (regional-template fallback regions)
  Europe: 'châu Âu',
  Asia: 'châu Á',
  Americas: 'châu Mỹ',
  Africa: 'châu Phi',
  Oceania: 'Châu Đại Dương',
  // Europe
  'Central Europe': 'Trung Âu',
  'Western Europe': 'Tây Âu',
  'Eastern Europe': 'Đông Âu',
  'Northern Europe': 'Bắc Âu',
  'Southern Europe': 'Nam Âu',
  'Southeast Europe': 'Đông Nam Âu',
  Eurasia: 'Âu-Á',
  Caucasus: 'Kavkaz',
  // Asia
  'East Asia': 'Đông Á',
  'Southeast Asia': 'Đông Nam Á',
  'South Asia': 'Nam Á',
  'West Asia': 'Tây Á',
  'Middle East': 'Trung Đông',
  'Central Asia': 'Trung Á',
  // Africa
  'North Africa': 'Bắc Phi',
  'Northeast Africa': 'Đông Bắc Phi',
  'West Africa': 'Tây Phi',
  'Central Africa': 'Trung Phi',
  'East Africa': 'Đông Phi',
  'Southern Africa': 'Nam Phi',
  'Southeast Africa': 'Đông Nam châu Phi',
  // Americas
  'North America': 'Bắc Mỹ',
  'Central America': 'Trung Mỹ',
  'South America': 'Nam Mỹ',
  Caribbean: 'vùng Caribe',
};

/** Localized region-chip label; canonical string for en (byte-identical). */
export function localizedRegionLabel(region: string, locale: Locale = getLocale()): string {
  if (locale !== 'vi') return region;
  return VI_REGION_LABELS[region] ?? region;
}

export function renderCountryDossier(data: CountryData) {
  document.getElementById('panel-icon')!.innerHTML = `<i class="${data.icon}"></i>`;
  document.getElementById('panel-region')!.textContent = localizedRegionLabel(data.region);
  document.getElementById('panel-title')!.textContent = getLocalizedName(data.name, getLocale());
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

// Vietnamese labels for every practical-factor enum token (see
// data/practicalFactors.ts) plus the dimension tokens shown through the same
// comparison-table helper in quiz.ts.
const VI_PRACTICAL_LABELS: Record<string, string> = {
  // visaFit & hazardLevel scale
  easy: 'dễ dàng',
  moderate: 'trung bình',
  difficult: 'khó',
  lower: 'thấp',
  higher: 'cao',
  // visa routes
  remote: 'làm việc từ xa',
  mobility: 'du học, làm việc kỳ nghỉ',
  sponsored: 'bảo trợ việc làm',
  available: 'mở',
  limited: 'hạn chế',
  // healthcare
  public: 'công lập',
  'private-required': 'chủ yếu tư nhân',
  'affordable-private': 'phòng khám tư giá tốt',
  mixed: 'hỗn hợp',
  // tap water
  'generally-potable': 'uống được',
  regional: 'tùy khu vực',
  'generally-not-potable': 'không nên uống trực tiếp',
  // air quality
  good: 'tốt',
  'seasonal-issues': 'vấn đề theo mùa',
  'frequent-issues': 'vấn đề thường xuyên',
  // hazard level scale
  high: 'cao',
  medium: 'trung bình',
  low: 'thấp',
  'very-low': 'rất thấp',
  'no-hazard': 'không đáng kể',
  // hazard types
  earthquake: 'động đất',
  'tropical-cyclone': 'bão nhiệt đới',
  flood: 'lũ lụt',
  'coastal-flood': 'ngập ven biển',
  landslide: 'sạt lở đất',
  tsunami: 'sóng thần',
  volcano: 'núi lửa',
  'extreme-heat': 'nắng nóng gay gắt',
  'water-scarcity': 'thiếu nước',
  wildfire: 'cháy rừng',
  // tax profile
  'higher-services': 'thuế cao, dịch vụ tốt',
  'lower-territorial': 'thuế thấp, tính thuế theo lãnh thổ',
  // dimension tokens rendered in the quiz comparison table
  'walkable-rail': 'đi bộ, đi tàu',
  'motorbike-active': 'đi xe máy',
  'car-dependent': 'phụ thuộc ô tô',
  'mixed-transit': 'kết hợp nhiều phương tiện',
  'vibrant-24-7': 'sôi động 24/7',
  'quiet-sunday': 'chủ nhật yên tĩnh',
  standard: 'bình thường',
  // shared fallback
  unknown: 'chưa rõ',
};

/** Titlecase passthrough used as the English rendering and the unknown-token fallback. */
const titlecaseFactor = (value: string): string =>
  value.replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase());

/**
 * Readable label for a practical-factor enum token, or a composed string of
 * "token: token" pairs joined by ', '. English keeps the historical titlecase
 * passthrough byte-for-byte; Vietnamese uses curated labels and falls back to
 * the same titlecase passthrough for tokens outside the map.
 */
export function localizedFactorLabel(value?: string, locale: Locale = getLocale()): string {
  if (!value) return t('dossier.notSourced');
  if (locale !== 'vi') return titlecaseFactor(value);
  const mapped = VI_PRACTICAL_LABELS[value];
  if (mapped) return mapped;
  if (value.includes(': ')) {
    return value.split(', ').map(pair => {
      const separator = pair.indexOf(': ');
      if (separator < 0) return VI_PRACTICAL_LABELS[pair] ?? titlecaseFactor(pair);
      const head = pair.slice(0, separator);
      const tail = pair.slice(separator + 2);
      return `${VI_PRACTICAL_LABELS[head] ?? titlecaseFactor(head)}: ${VI_PRACTICAL_LABELS[tail] ?? titlecaseFactor(tail)}`;
    }).join(', ');
  }
  return titlecaseFactor(value);
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
  const practicalValue = localizedFactorLabel;
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
              ${t('dossier.socialFabricLabel')} <span class="font-medium text-[#1a73e8] ${getLocale() === 'vi' ? 'normal-case' : 'normal-case capitalize'}">${socialWarmthBandLabel(data.socialWarmth).replace(/-/g, ' ')}</span>
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
      <h3 class="font-display font-medium text-xs uppercase tracking-wider text-[#5f6368] mb-3.5">${t('dossier.learnMore', { name: getLocalizedName(data.name, getLocale()) })}</h3>
      <a href="${wikiUrl}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-3 p-3 rounded-xl bg-[#f8f9fa] hover:bg-[#f1f3f4] border border-[#dadce0] transition-colors">
        <span class="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center font-serif text-lg">W</span>
        <span class="text-sm font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors">${t('dossier.onWikipedia', { name: getLocalizedName(data.name, getLocale()) })}</span>
        <span aria-hidden="true" class="text-[#5f6368]">↗</span>
      </a>
    </section>
  `;
}

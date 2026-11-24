import type { CountryData, QuizQuestion } from '../data/countries';
import { getAllGlobalCountries } from '../data/globalCountries';

let currentQuizStep = 0;
let userAnswers: Record<string, string> = {};
let QUIZ_QUESTIONS_REF: QuizQuestion[] = [];
let getCountriesCatalog: () => CountryData[] = () => getAllGlobalCountries();
let onFlyToCountry: (name: string) => void = () => {};

export function initQuiz(
  questions: QuizQuestion[],
  countries: Record<string, CountryData> | CountryData[] | (() => CountryData[]),
  flyTo: (name: string) => void,
) {
  QUIZ_QUESTIONS_REF = questions;
  if (typeof countries === 'function') {
    getCountriesCatalog = countries;
  } else if (Array.isArray(countries)) {
    getCountriesCatalog = () => countries;
  } else {
    getCountriesCatalog = () => Object.values(countries);
  }
  onFlyToCountry = flyTo;
}

export function openQuiz() {
  currentQuizStep = 0;
  userAnswers = {};
  const modal = document.getElementById('quiz-modal')!;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  renderQuizStep();
}

export function closeQuiz() {
  const modal = document.getElementById('quiz-modal')!;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function renderQuizStep() {
  const total = QUIZ_QUESTIONS_REF.length;
  const q = QUIZ_QUESTIONS_REF[currentQuizStep];
  const pct = ((currentQuizStep + 1) / total) * 100;

  document.getElementById('quiz-progress')!.style.width = `${pct}%`;
  document.getElementById('quiz-subtitle')!.textContent = `Stage ${q.stage}: ${q.stageName} • Question ${currentQuizStep + 1} of ${total}`;

  const currentSelection = userAnswers[q.id];

  document.getElementById('quiz-body')!.innerHTML = `
    <div class="space-y-5">
      <div class="flex items-start justify-between gap-4">
        <div>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide bg-[#e8f0fe] text-[#1a73e8] mb-2">
            ${q.stageName}
          </span>
          <h4 class="font-display text-xl sm:text-2xl font-medium text-[#202124]">${q.question}</h4>
          <p class="text-xs sm:text-sm text-[#5f6368] mt-1">${q.subtitle}</p>
        </div>
      </div>

      <div class="space-y-2.5">
        ${q.options.map(opt => {
          const isSelected = currentSelection === opt.value;
          const isNoPref = opt.isNoPreference;
          
          return `
            <button 
              data-quiz-value="${opt.value}" 
              class="quiz-option w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all group flex items-center gap-3.5 ${
                isSelected 
                  ? 'border-2 border-[#1a73e8] bg-[#e8f0fe] shadow-[0_1px_3px_rgba(26,115,232,0.2)]' 
                  : isNoPref
                    ? 'bg-white border border-dashed border-[#dadce0] hover:border-[#bdc1c6] hover:bg-[#f8f9fa]'
                    : 'bg-white border border-[#dadce0] hover:bg-[#f8f9fa] hover:border-[#1a73e8]/40 shadow-[0_1px_2px_rgba(60,64,67,0.06)]'
              }"
            >
              <span class="text-base sm:text-lg w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                isSelected
                  ? 'bg-[#1a73e8] text-white font-medium'
                  : isNoPref
                    ? 'bg-[#f1f3f4] text-[#5f6368] group-hover:bg-[#e8eaed]'
                    : 'bg-[#f1f3f4] text-[#5f6368] group-hover:bg-[#e8f0fe] group-hover:text-[#1a73e8]'
              }">
                <i class="${opt.icon}"></i>
              </span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                  <span class="font-display font-medium text-sm sm:text-base text-[#202124] group-hover:text-[#1a73e8] transition-colors">
                    ${opt.label}
                  </span>
                  ${isNoPref ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-[#f1f3f4] text-[#5f6368] font-normal">Skip Filter</span>' : ''}
                </div>
                <div class="text-xs sm:text-sm text-[#5f6368] mt-0.5 leading-snug">${opt.desc}</div>
              </div>
              ${isSelected ? '<span class="text-[#1a73e8] text-lg"><i class="fa-solid fa-circle-check"></i></span>' : ''}
            </button>
          `;
        }).join('')}
      </div>

      ${currentQuizStep > 0 ? `
        <div class="pt-2 flex justify-start">
          <button id="prev-quiz-btn" class="text-xs font-medium text-[#5f6368] hover:text-[#1a73e8] flex items-center gap-1.5 transition-colors">
            <i class="fa-solid fa-arrow-left"></i> Previous Question
          </button>
        </div>
      ` : ''}
    </div>
  `;

  // Attach option click listeners
  document.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleQuizAnswer(q.id, btn.dataset.quizValue!));
  });
  document.getElementById('prev-quiz-btn')?.addEventListener('click', prevQuizStep);
}

function handleQuizAnswer(questionId: string, value: string) {
  userAnswers[questionId] = value;
  
  if (currentQuizStep < QUIZ_QUESTIONS_REF.length - 1) {
    currentQuizStep++;
    renderQuizStep();
  } else {
    calculateQuizResult();
  }
}

function prevQuizStep() {
  if (currentQuizStep > 0) {
    currentQuizStep--;
    renderQuizStep();
  }
}

interface ScoredCountry {
  country: CountryData;
  score: number;
  matchPercent: number;
  reasons: string[];
  realityCheck: string;
}

function calculateQuizResult() {
  document.getElementById('quiz-progress')!.style.width = "100%";
  document.getElementById('quiz-subtitle')!.textContent = "Your Global Relocation Match";

  const allCountries = getCountriesCatalog();
  const scoredCountries: ScoredCountry[] = [];

  // 1. Phase 1: Hard Filtering
  const eligibleCountries = allCountries.filter(c => {
    const dim = c.dimensions;
    if (!dim) return true;

    // LGBTQ+ Filter
    if (userAnswers['lgbtq'] === 'protected' && dim.lgbtqTier < 4) {
      return false;
    }
    if (userAnswers['lgbtq'] === 'tolerant' && dim.lgbtqTier < 3) {
      return false;
    }

    // Budget Ceiling Filter
    if (userAnswers['budget'] === 'lean' && dim.costIndex > 2) {
      return false;
    }
    if (userAnswers['budget'] === 'moderate' && dim.costIndex > 3) {
      return false;
    }

    // Transit Filter
    if (userAnswers['transit'] === 'walkable-rail' && dim.transit === 'car-dependent') {
      return false;
    }

    return true;
  });

  // Fallback if filters were too restrictive
  const candidates = eligibleCountries.length >= 3 ? eligibleCountries : allCountries;

  // 2. Phase 2: Multi-Dimensional Soft Scoring
  candidates.forEach(country => {
    const dim = country.dimensions;
    if (!dim) return;

    let totalScore = 0;
    let maxPossible = 0;
    const reasons: string[] = [];

    // Dimension 1: Budget
    if (userAnswers['budget'] && userAnswers['budget'] !== 'no-preference') {
      maxPossible += 10;
      if (userAnswers['budget'] === 'lean') {
        if (dim.costIndex === 1) { totalScore += 10; reasons.push(`Exceptional value (<$1,400/mo) allowing comfortable living`); }
        else if (dim.costIndex === 2) { totalScore += 7; }
      } else if (userAnswers['budget'] === 'moderate') {
        if (dim.costIndex === 2 || dim.costIndex === 3) { totalScore += 10; reasons.push(`Comfortable mid-range living expenses (${country.cost})`); }
        else if (dim.costIndex === 1) { totalScore += 8; }
        else if (dim.costIndex === 4) { totalScore += 4; }
      } else if (userAnswers['budget'] === 'premium') {
        if (dim.costIndex >= 4) { totalScore += 10; reasons.push(`World-class public services and high-standard infrastructure`); }
        else if (dim.costIndex === 3) { totalScore += 8; }
      }
    }

    // Dimension 2: LGBTQ+ & Inclusivity
    if (userAnswers['lgbtq'] && userAnswers['lgbtq'] !== 'no-preference') {
      maxPossible += 10;
      if (userAnswers['lgbtq'] === 'protected') {
        if (dim.lgbtqTier >= 5) { totalScore += 10; reasons.push(`Global leader in equality with full marriage and civil protections`); }
        else if (dim.lgbtqTier === 4) { totalScore += 8; reasons.push(`Legally protected and welcoming environment`); }
      } else if (userAnswers['lgbtq'] === 'tolerant') {
        if (dim.lgbtqTier >= 3) { totalScore += 10; }
      }
    }

    // Dimension 3: Transit
    if (userAnswers['transit'] && userAnswers['transit'] !== 'no-preference') {
      maxPossible += 10;
      if (userAnswers['transit'] === dim.transit) {
        totalScore += 10;
        if (dim.transit === 'walkable-rail') reasons.push(`Pedestrian-first cities and extensive passenger rail`);
        else if (dim.transit === 'motorbike-active') reasons.push(`Vibrant scooter mobility and rapid street connectivity`);
        else if (dim.transit === 'car-dependent') reasons.push(`Scenic open highways and easy personal vehicle travel`);
      } else if (dim.transit === 'mixed-transit') {
        totalScore += 6;
      }
    }

    // Dimension 4: Daily Convenience vs DIY
    if (userAnswers['convenience'] && userAnswers['convenience'] !== 'no-preference') {
      maxPossible += 10;
      if (userAnswers['convenience'] === 'high-convenience') {
        if (dim.convenienceScore >= 5) { totalScore += 10; reasons.push(`24/7 convenience stores, rapid delivery apps, and affordable services`); }
        else if (dim.convenienceScore === 4) { totalScore += 8; }
        else if (dim.convenienceScore === 3) { totalScore += 4; }
      } else if (userAnswers['convenience'] === 'diy') {
        if (dim.convenienceScore <= 2) { totalScore += 10; reasons.push(`Strong self-reliance culture with respect for service workers' leisure`); }
        else if (dim.convenienceScore === 3) { totalScore += 8; }
      }
    }

    // Dimension 5: Weekend Rhythms
    if (userAnswers['weekend'] && userAnswers['weekend'] !== 'no-preference') {
      maxPossible += 10;
      if (userAnswers['weekend'] === dim.weekendRhythm) {
        totalScore += 10;
        if (dim.weekendRhythm === 'vibrant-24-7') reasons.push(`7-day vibrant commerce, bustling night markets, and late-night social spots`);
        else if (dim.weekendRhythm === 'quiet-sunday') reasons.push(`Sacred peaceful Sundays and calm residential evenings`);
      } else if (dim.weekendRhythm === 'standard') {
        totalScore += 6;
      }
    }

    // Dimension 6: Climate
    if (userAnswers['climate'] && userAnswers['climate'] !== 'no-preference') {
      maxPossible += 10;
      if (userAnswers['climate'] === 'tropical') {
        if (dim.climate === 'tropical') { totalScore += 10; reasons.push(`Year-round tropical sunshine and outdoor lifestyle`); }
        else if (dim.climate === 'warm-sun') { totalScore += 8; }
      } else if (userAnswers['climate'] === 'four-seasons') {
        if (dim.climate === 'four-seasons') { totalScore += 10; reasons.push(`Vivid four seasons with crisp autumns and snowy winters`); }
        else if (dim.climate === 'cold-winter') { totalScore += 8; }
      } else if (userAnswers['climate'] === 'mild-coastal') {
        if (dim.climate === 'mild-coastal') { totalScore += 10; reasons.push(`Temperate coastal climate with refreshing ocean breezes`); }
        else if (dim.climate === 'warm-sun') { totalScore += 7; }
      }
    }

    // Dimension 7: Religion & Secularity
    if (userAnswers['religion'] && userAnswers['religion'] !== 'no-preference') {
      maxPossible += 10;
      const rAns = userAnswers['religion'];
      if (rAns === 'secular') {
        if (dim.religionRole === 'secular') { totalScore += 10; reasons.push(`Secular society with freedom from religious pressure`); }
        else if (dim.religionRole === 'cultural-tradition') { totalScore += 7; }
      } else if (rAns === 'cultural-tradition') {
        if (dim.religionRole === 'cultural-tradition') { totalScore += 10; reasons.push(`Rich cultural traditions and festivals with low religious enforcement`); }
        else if (dim.religionRole === 'secular') { totalScore += 7; }
        else if (dim.religionRole === 'moderate') { totalScore += 6; }
      } else if (rAns === 'prominent') {
        if (dim.religionRole === 'prominent' || dim.religionRole === 'moderate') { totalScore += 10; reasons.push(`Active spiritual community with accessible religious facilities`); }
        else { totalScore += 3; }
      }
    }

    // Dimension 8: Social Openness & Expat Ease
    if (userAnswers['openness'] && userAnswers['openness'] !== 'no-preference') {
      maxPossible += 10;
      const oAns = userAnswers['openness'];
      if (oAns === 'cosmopolitan') {
        if (dim.foreignerOpenness >= 5) { totalScore += 10; reasons.push(`Cosmopolitan society with high English fluency and welcoming integration`); }
        else if (dim.foreignerOpenness === 4) { totalScore += 8; }
        else if (dim.foreignerOpenness === 3) { totalScore += 4; }
      } else if (oAns === 'reserved') {
        if (dim.foreignerOpenness <= 3 || ['Japan', 'Norway', 'Finland', 'Switzerland', 'Germany'].includes(country.name)) {
          totalScore += 10;
          reasons.push(`Polite culture that respects personal boundaries and private space`);
        } else { totalScore += 6; }
      }
    }

    // Dimension 9: Population Density & Demographic Vibe
    if (userAnswers['density'] && userAnswers['density'] !== 'no-preference') {
      maxPossible += 10;
      const dAns = userAnswers['density'];
      if (dAns === 'bustling') {
        if (dim.paceScore >= 4) { totalScore += 10; reasons.push(`Bustling, dense urban dynamism and youthful street life`); }
        else if (dim.paceScore === 3) { totalScore += 6; }
      } else if (dAns === 'spacious') {
        if (dim.paceScore <= 3 && dim.natureScore >= 4) { totalScore += 10; reasons.push(`Peaceful, uncrowded landscapes with plenty of breathing room`); }
        else if (dim.paceScore <= 3) { totalScore += 8; }
      }
    }

    // Dimension 10: Career & Work Market
    if (userAnswers['career'] && userAnswers['career'] !== 'no-preference') {
      maxPossible += 10;
      const cAns = userAnswers['career'];
      if (cAns === 'nomad') {
        if (dim.costIndex <= 3 && (dim.convenienceScore >= 4 || ['Portugal', 'Spain', 'Thailand', 'Vietnam', 'Mexico', 'Costa Rica', 'Indonesia', 'Colombia'].includes(country.name))) {
          totalScore += 10;
          reasons.push(`Top-tier digital nomad hub with great cafes and remote work lifestyle`);
        } else { totalScore += 6; }
      } else if (cAns === 'corporate') {
        if (dim.costIndex >= 3 && ['Netherlands', 'Germany', 'United Kingdom', 'United States', 'Singapore', 'Switzerland', 'Australia', 'Canada'].includes(country.name)) {
          totalScore += 10;
          reasons.push(`Major international corporate hub with high-wage career prospects`);
        } else if (dim.costIndex >= 3) { totalScore += 7; }
      } else if (cAns === 'local') {
        totalScore += 8;
      }
    }

    // Dimension 7: Priority Boost (2.5x Multiplier = 25 pts)
    const priority = userAnswers['priority'];
    if (priority && priority !== 'no-preference') {
      maxPossible += 25;
      if (priority === 'safety') {
        const sVal = parseFloat(country.safety) || 8.0;
        if (sVal >= 9.0) { totalScore += 25; reasons.unshift(`World-leading personal safety (Safety: ${country.safety})`); }
        else if (sVal >= 8.0) { totalScore += 18; }
      } else if (priority === 'foodie') {
        if (country.tags.includes('foodie')) { totalScore += 25; reasons.unshift(`Celebrated culinary traditions and renowned food culture`); }
        else { totalScore += 12; }
      } else if (priority === 'wlb') {
        const wVal = parseFloat(country.wlb) || 8.0;
        if (wVal >= 8.8) { totalScore += 25; reasons.unshift(`Superb work-life balance and protected employee leisure (${country.wlb})`); }
        else if (wVal >= 8.0) { totalScore += 18; }
      } else if (priority === 'nature') {
        if (dim.natureScore >= 5) { totalScore += 25; reasons.unshift(`Spectacular immediate access to mountains, coastlines, and national parks`); }
        else if (dim.natureScore === 4) { totalScore += 18; }
      }
    }

    // Foreigner openness baseline bonus
    totalScore += dim.foreignerOpenness * 0.8;

    // Calculate normalized percentage
    const matchPercent = maxPossible > 0 
      ? Math.min(98, Math.max(76, Math.round((totalScore / maxPossible) * 100)))
      : 92;

    scoredCountries.push({
      country,
      score: totalScore,
      matchPercent,
      reasons: reasons.slice(0, 3),
      realityCheck: country.realityCheck || "Local language proficiency and patience with paperwork are recommended."
    });
  });

  // Sort descending by score
  scoredCountries.sort((a, b) => b.score - a.score);

  const bestMatch = scoredCountries[0];
  const runnerUp = scoredCountries[1] || bestMatch;
  const wildcard = scoredCountries.find((item, idx) => idx > 1 && item.country.region !== bestMatch.country.region) || scoredCountries[2] || runnerUp;

  renderResultsView(bestMatch, runnerUp, wildcard);
}

function renderResultsView(best: ScoredCountry, runner: ScoredCountry, wildcard: ScoredCountry) {
  const c = best.country;
  const dim = c.dimensions;

  document.getElementById('quiz-body')!.innerHTML = `
    <div class="space-y-5">
      <!-- Match Header Banner (Google Flights / Travel Styled Summary) -->
      <div class="text-center space-y-2.5">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f4ea] text-[#137333] border border-[#ceead6] text-xs font-semibold">
          <i class="fa-solid fa-sparkles text-[#34a853]"></i> ${best.matchPercent}% Relocation Compatibility
        </div>
        <div>
          <div class="w-14 h-14 mx-auto mb-2 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center text-2xl shadow-[0_1px_3px_rgba(60,64,67,0.15)]">
            <i class="${c.icon}"></i>
          </div>
          <span class="text-[11px] font-medium tracking-wide uppercase text-[#5f6368]">${c.region}</span>
          <h3 class="font-display text-2xl sm:text-3xl font-medium text-[#202124] mt-0.5">You Should Live in ${c.name}!</h3>
          <p class="text-xs sm:text-sm text-[#5f6368] max-w-lg mx-auto mt-1 font-normal leading-relaxed">"${c.tagline}"</p>
        </div>
      </div>

      <!-- Quick Metrics Strip -->
      <div class="grid grid-cols-3 gap-2.5 bg-[#f8f9fa] border border-[#dadce0] rounded-2xl p-3 text-center">
        <div>
          <div class="text-[10px] uppercase font-medium text-[#5f6368]">Monthly Budget</div>
          <div class="text-xs sm:text-sm font-semibold text-[#202124] mt-0.5">${c.cost}</div>
        </div>
        <div>
          <div class="text-[10px] uppercase font-medium text-[#5f6368]">Work-Life</div>
          <div class="text-xs sm:text-sm font-semibold text-[#137333] mt-0.5">${c.wlb}</div>
        </div>
        <div>
          <div class="text-[10px] uppercase font-medium text-[#5f6368]">Safety Score</div>
          <div class="text-xs sm:text-sm font-semibold text-[#1a73e8] mt-0.5">${c.safety}</div>
        </div>
      </div>

      <!-- Why It Fits Section -->
      <div class="bg-white border border-[#dadce0] rounded-2xl p-4 sm:p-5 space-y-2.5 shadow-[0_1px_2px_rgba(60,64,67,0.06)]">
        <div class="text-xs font-medium uppercase tracking-wider text-[#1a73e8] flex items-center gap-1.5">
          <i class="fa-solid fa-check-double text-[#1a73e8]"></i> Why ${c.name} fits your lifestyle:
        </div>
        <ul class="space-y-2 text-xs sm:text-sm text-[#3c4043]">
          ${best.reasons.length > 0 
            ? best.reasons.map(r => `
                <li class="flex items-start gap-2.5">
                  <i class="fa-solid fa-circle-check text-[#34a853] mt-0.5 text-xs shrink-0"></i>
                  <span>${r}</span>
                </li>
              `).join('')
            : `
                <li class="flex items-start gap-2.5">
                  <i class="fa-solid fa-circle-check text-[#34a853] mt-0.5 text-xs shrink-0"></i>
                  <span>Balanced quality of life matching your lifestyle priorities</span>
                </li>
              `
          }
        </ul>
      </div>

      <!-- The Honest Reality Check Callout -->
      <div class="bg-[#fef7e0] border border-[#fce8b2] border-l-4 border-l-[#fbbc04] rounded-2xl p-4 space-y-1.5 text-[#3c4043]">
        <div class="text-xs font-semibold uppercase tracking-wider text-[#b06000] flex items-center gap-1.5">
          <i class="fa-solid fa-triangle-exclamation text-[#f29900]"></i> The Reality Check & Trade-offs:
        </div>
        <p class="text-xs sm:text-sm text-[#3c4043] leading-relaxed">
          ${best.realityCheck}
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-2.5 pt-1">
        <button id="fly-best-btn" class="w-full py-3 px-6 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] active:bg-[#174ea6] text-white font-medium text-sm shadow-[0_1px_2px_rgba(60,64,67,0.3)] transition-all flex items-center justify-center gap-2">
          <span>Explore ${c.name} on Map</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button id="fly-runner-btn" class="py-2.5 px-3 rounded-full bg-white hover:bg-[#f8f9fa] border border-[#dadce0] text-[#202124] font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-[0_1px_2px_rgba(60,64,67,0.06)]">
            <i class="${runner.country.icon} text-[#1a73e8]"></i>
            <span>Runner-up: ${runner.country.name} (${runner.matchPercent}%)</span>
          </button>
          
          <button id="fly-wildcard-btn" class="py-2.5 px-3 rounded-full bg-white hover:bg-[#f8f9fa] border border-[#dadce0] text-[#202124] font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-[0_1px_2px_rgba(60,64,67,0.06)]">
            <i class="fa-solid fa-compass text-[#ea4335]"></i>
            <span>Wildcard: ${wildcard.country.name} (${wildcard.matchPercent}%)</span>
          </button>
        </div>
      </div>

      <div class="text-center pt-1">
        <button id="retake-quiz-btn" class="text-xs font-medium text-[#1a73e8] hover:underline">
          Retake Quiz with Different Preferences
        </button>
      </div>
    </div>
  `;

  document.getElementById('fly-best-btn')!.addEventListener('click', () => onFlyToCountry(c.name));
  document.getElementById('fly-runner-btn')!.addEventListener('click', () => onFlyToCountry(runner.country.name));
  document.getElementById('fly-wildcard-btn')!.addEventListener('click', () => onFlyToCountry(wildcard.country.name));
  document.getElementById('retake-quiz-btn')!.addEventListener('click', openQuiz);
}

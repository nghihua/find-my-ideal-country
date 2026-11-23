import type { CountryData, QuizQuestion } from '../data/countries';

let currentQuizStep = 0;
let selectedQuizTags: string[] = [];
let QUIZ_QUESTIONS_REF: QuizQuestion[] = [];
let COUNTRY_DATABASE_REF: Record<string, CountryData> = {};
let onFlyToCountry: (name: string) => void = () => {};

export function initQuiz(
  questions: QuizQuestion[],
  countries: Record<string, CountryData>,
  flyTo: (name: string) => void,
) {
  QUIZ_QUESTIONS_REF = questions;
  COUNTRY_DATABASE_REF = countries;
  onFlyToCountry = flyTo;
}

export function openQuiz() {
  currentQuizStep = 0;
  selectedQuizTags = [];
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
  document.getElementById('quiz-subtitle')!.textContent = `Question ${currentQuizStep + 1} of ${total}`;

  document.getElementById('quiz-body')!.innerHTML = `
    <div class="space-y-6">
      <div>
        <h4 class="font-display text-xl sm:text-2xl font-bold text-paper-900">${q.question}</h4>
        <p class="text-sm text-stone-500 mt-1">${q.subtitle}</p>
      </div>
      <div class="space-y-3.5">
        ${q.options.map(opt => `
          <button data-quiz-tag="${opt.tag}" class="quiz-option w-full text-left p-4 rounded-2xl paper-card hover:bg-[#fffaf3] hover:-translate-y-0.5 hover:shadow-paper-lg transition-all group flex items-center gap-4">
            <span class="text-lg sm:text-xl bg-[#f5efe6] text-[#52827b] group-hover:bg-[#fbe5e2] group-hover:text-[#c96e61] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors shadow-paper-sm">
              <i class="${opt.icon}"></i>
            </span>
            <div>
              <div class="font-display font-bold text-base text-paper-900 group-hover:text-[#c96e61] transition-colors">${opt.label}</div>
              <div class="text-xs sm:text-sm text-stone-500 mt-0.5">${opt.desc}</div>
            </div>
          </button>
        `).join('')}
      </div>
      ${currentQuizStep > 0 ? `
        <div class="pt-2 flex justify-start">
          <button id="prev-quiz-btn" class="text-xs font-semibold text-stone-500 hover:text-paper-900 flex items-center gap-1.5">
            <i class="fa-solid fa-arrow-left"></i> Previous Question
          </button>
        </div>
      ` : ''}
    </div>
  `;

  // Attach option click listeners
  document.querySelectorAll<HTMLButtonElement>('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleQuizAnswer(btn.dataset.quizTag!));
  });
  document.getElementById('prev-quiz-btn')?.addEventListener('click', prevQuizStep);
}

function handleQuizAnswer(tag: string) {
  selectedQuizTags[currentQuizStep] = tag;
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

function calculateQuizResult() {
  document.getElementById('quiz-progress')!.style.width = "100%";
  document.getElementById('quiz-subtitle')!.textContent = "Your Personalized Global Match";

  const scored = Object.values(COUNTRY_DATABASE_REF).map(country => {
    let score = 0;
    selectedQuizTags.forEach(tag => {
      if (country.tags && country.tags.includes(tag)) score += 2;
    });
    return { country, score };
  }).sort((a, b) => b.score - a.score);

  const bestMatch = scored[0].country;
  const runnerUp = scored[1].country;
  const matchPercent = Math.min(98, Math.max(76, 70 + scored[0].score * 4));

  document.getElementById('quiz-body')!.innerHTML = `
    <div class="text-center space-y-5">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dff0ea] text-[#457268] text-xs font-bold uppercase tracking-wider shadow-paper-sm">
        <i class="fa-solid fa-sparkles"></i> ${matchPercent}% Lifestyle Compatibility
      </div>
      <div>
        <div class="w-16 h-16 mx-auto mb-3 rounded-2xl bg-[#fbe5e2] text-[#c96e61] flex items-center justify-center text-3xl shadow-paper">
          <i class="${bestMatch.icon}"></i>
        </div>
        <h3 class="font-display text-3xl font-extrabold text-paper-900">You Should Live in ${bestMatch.name}!</h3>
        <p class="font-serif italic text-base text-stone-500 max-w-lg mx-auto mt-2">"${bestMatch.tagline}"</p>
      </div>
      <div class="paper-card rounded-2xl p-5 text-left space-y-2">
        <div class="text-xs font-bold uppercase tracking-wider text-[#52827b]">Why ${bestMatch.name} fits your answers:</div>
        <p class="text-sm text-stone-700 leading-relaxed">${bestMatch.culture}</p>
        <div class="grid grid-cols-3 gap-2 pt-3 text-center mt-3 bg-paper-100 rounded-xl p-2.5">
          <div>
            <div class="text-[11px] text-stone-500">Est. Monthly</div>
            <div class="text-xs font-bold text-paper-900">${bestMatch.cost}</div>
          </div>
          <div>
            <div class="text-[11px] text-stone-500">Work-Life</div>
            <div class="text-xs font-bold text-[#52827b]">${bestMatch.wlb}</div>
          </div>
          <div>
            <div class="text-[11px] text-stone-500">Safety</div>
            <div class="text-xs font-bold text-[#6c6394]">${bestMatch.safety}</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button id="fly-best-btn" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#e8998d] hover:bg-[#df8577] text-white font-display font-bold text-sm shadow-paper transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
          <span>Zoom to ${bestMatch.name} on Map</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
        <button id="fly-runner-btn" class="w-full sm:w-auto px-4 py-3 rounded-xl paper-card hover:bg-paper-50 text-paper-900 font-medium text-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
          <i class="${runnerUp.icon} text-[#52827b]"></i>
          <span>Runner-up: ${runnerUp.name}</span>
        </button>
      </div>
      <button id="retake-quiz-btn" class="text-xs font-medium text-stone-500 hover:text-paper-900 underline pt-1">
        Retake Quiz
      </button>
    </div>
  `;

  document.getElementById('fly-best-btn')!.addEventListener('click', () => onFlyToCountry(bestMatch.name));
  document.getElementById('fly-runner-btn')!.addEventListener('click', () => onFlyToCountry(runnerUp.name));
  document.getElementById('retake-quiz-btn')!.addEventListener('click', openQuiz);
}

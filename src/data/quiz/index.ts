import type { Locale } from '../../i18n';
import type { QuizQuestion } from '../countries';
import { QUIZ_QUESTIONS_EN } from './en';

export type { QuizQuestion };

// './vi' is loaded dynamically on purpose: it is chosen at runtime by the
// active locale, and lazy-loading keeps the large Vietnamese dataset out of
// the initial bundle (code splitting is the point of this loader).
export async function getQuizQuestions(locale: Locale): Promise<QuizQuestion[]> {
  if (locale === 'vi') {
    const { QUIZ_QUESTIONS_VI } = await import('./vi');
    return QUIZ_QUESTIONS_VI;
  }
  return QUIZ_QUESTIONS_EN;
}

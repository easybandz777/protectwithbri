/**
 * data/studyGuide/index.ts
 * Barrel file — re-exports everything so the rest of the app can import
 * from '@/data/studyGuide' exactly as before.
 */

// Types
export type {
    ContentItem,
    Topic,
    StudySection,
    QuizQuestion,
    Mnemonic,
    ExamTrap,
    NumberFact,
} from './types';

// Exam info
export { EXAM_FACTS, STUDY_TIPS } from './examInfo';

// Study sections (8 sections assembled into one array)
export { STUDY_SECTIONS } from './sections';

// Quiz questions
export { QUIZ_QUESTIONS } from './quizQuestions';

// Mnemonics, exam traps, numbers cheat sheet
export { MNEMONICS } from './mnemonics';
export { EXAM_TRAPS } from './examTraps';
export { NUMBERS_CHEAT_SHEET } from './numbersCheatSheet';

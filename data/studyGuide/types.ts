/**
 * types.ts
 * Shared TypeScript interfaces for the study guide data layer.
 */

export interface ContentItem {
    text: string;
    sub?: string[];
}

export interface Topic {
    title: string;
    content: ContentItem[];
}

export interface StudySection {
    id: string;
    number: string;
    title: string;
    icon: string;
    description: string;
    topics: Topic[];
}

export interface QuizQuestion {
    id: string;
    sectionId: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface Mnemonic {
    id: string;
    name: string;
    letters: string;
    items: string[];
    context: string;
}

export interface ExamTrap {
    id: string;
    title: string;
    trap: string;
    correct: string;
    tip: string;
}

export interface NumberFact {
    category: string;
    items: { number: string; meaning: string }[];
}

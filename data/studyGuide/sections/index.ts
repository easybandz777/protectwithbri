/**
 * sections/index.ts
 * Assembles STUDY_SECTIONS array from individual section files.
 */

import type { StudySection } from '../types';
import { section01 } from './01-generalConcepts';
import { section02 } from './02-contractLaw';
import { section03 } from './03-lifeProducts';
import { section04 } from './04-lifeProvisions';
import { section05 } from './05-annuities';
import { section06 } from './06-healthInsurance';
import { section07 } from './07-taxConsiderations';
import { section08 } from './08-georgiaLaw';

export const STUDY_SECTIONS: StudySection[] = [
    section01,
    section02,
    section03,
    section04,
    section05,
    section06,
    section07,
    section08,
];

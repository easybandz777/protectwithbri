/**
 * numbersCheatSheet.ts
 * All numbers, time limits, dollar amounts, and thresholds tested on the exam.
 */

import type { NumberFact } from './types';

export const NUMBERS_CHEAT_SHEET: NumberFact[] = [
    {
        category: 'Time Periods',
        items: [
            { number: '10 days', meaning: 'Free-look period (life & A&H in Georgia)' },
            { number: '20 days', meaning: 'Notice of claim deadline (health insurance)' },
            { number: '30-31 days', meaning: 'Grace period for life insurance' },
            { number: '31 days', meaning: 'Group life conversion period after leaving employer' },
            { number: '60 days', meaning: 'Minimum wait before legal action (after proof of loss)' },
            { number: '90 days', meaning: 'Proof of loss deadline (health insurance)' },
            { number: '15 days', meaning: 'Insurer must provide claim forms after notice of claim' },
            { number: '3 years', meaning: 'Time Limit on Certain Defenses (health) — like incontestability' },
            { number: '3 years', meaning: 'Maximum time to file a lawsuit after proof of loss' },
            { number: '2 years', meaning: 'Incontestability period (life insurance)' },
            { number: '2 years', meaning: 'Suicide clause period' },
            { number: '3-5 years', meaning: 'Reinstatement period for lapsed life policies' },
            { number: '6 months', meaning: 'Medigap Open Enrollment Period (from age 65 + Part B)' },
            { number: '6 months', meaning: 'Typical waiting period for Waiver of Premium rider' },
        ],
    },
    {
        category: 'COBRA Duration',
        items: [
            { number: '18 months', meaning: 'Employee termination or reduced hours' },
            { number: '36 months', meaning: 'Dependents (divorce, death, Medicare eligibility)' },
            { number: '20+ employees', meaning: 'COBRA applies to employers with 20+ employees' },
            { number: '102%', meaning: 'Maximum COBRA premium (100% + 2% admin fee)' },
        ],
    },
    {
        category: 'Health Insurance Grace Periods',
        items: [
            { number: '7 days', meaning: 'Weekly premium mode' },
            { number: '10 days', meaning: 'Monthly premium mode' },
            { number: '31 days', meaning: 'All other modes (quarterly, semi-annual, annual)' },
        ],
    },
    {
        category: 'Georgia-Specific Numbers',
        items: [
            { number: '18 years old', meaning: 'Minimum age to be an insurance producer in Georgia' },
            { number: '40 hours', meaning: 'Pre-licensing education (combined Life & Health)' },
            { number: '20 hours', meaning: 'Pre-licensing education (per line — Life OR Health)' },
            { number: '24 hours', meaning: 'CE requirement every 2-year period' },
            { number: '3 hours', meaning: 'Ethics CE requirement (included in the 24 hours)' },
            { number: '2 years', meaning: 'License validity period' },
            { number: '10 days', meaning: 'Free-look period for life and A&H policies' },
            { number: '$1,000', meaning: 'Maximum fine per unfair trade practice violation' },
            { number: '$10,000', meaning: 'Maximum total fine for unfair trade practices' },
            { number: '4 years', meaning: 'Insurance Commissioner term (elected official)' },
        ],
    },
    {
        category: 'Guaranty Association Limits (GLHIGA)',
        items: [
            { number: '$300,000', meaning: 'Life insurance death benefit maximum' },
            { number: '$100,000', meaning: 'Cash surrender value maximum' },
            { number: '$500,000', meaning: 'Health insurance benefit maximum' },
            { number: '$250,000', meaning: 'Annuity present value maximum' },
        ],
    },
    {
        category: 'Tax Numbers',
        items: [
            { number: '$50,000', meaning: 'Group term life tax-free threshold (employer-paid)' },
            { number: '7 years', meaning: '7-pay test for Modified Endowment Contracts (MECs)' },
            { number: '59½', meaning: 'Age before which annuity/MEC withdrawals incur 10% penalty' },
            { number: '65', meaning: 'Medicare eligibility age' },
            { number: '26', meaning: "Maximum age for children on parents' health plan (ACA)" },
        ],
    },
    {
        category: 'Disability Income',
        items: [
            { number: '60-70%', meaning: 'Typical benefit amount (percentage of income)' },
            { number: '30/60/90 days', meaning: 'Common elimination period options' },
            { number: '2/5 years or to age 65', meaning: 'Common benefit period options' },
        ],
    },
    {
        category: 'LTC Insurance',
        items: [
            { number: '2 of 6 ADLs', meaning: 'Must fail 2 of 6 Activities of Daily Living to trigger benefits' },
            { number: '6 ADLs', meaning: 'Bathing, Dressing, Eating, Toileting, Transferring, Continence' },
        ],
    },
    {
        category: 'Exam Logistics',
        items: [
            { number: '135', meaning: 'Total questions on the exam' },
            { number: '125', meaning: 'Scored questions (10 are unscored pretest)' },
            { number: '150 minutes', meaning: 'Time limit (2 hours 30 minutes)' },
            { number: '70%', meaning: 'Passing score on EACH section' },
            { number: '14 days', meaning: 'Retest wait after 1st/2nd failure' },
            { number: '60 days', meaning: 'Retest wait after 3rd+ failure' },
        ],
    },
];

/**
 * mnemonics.ts
 * Memory aids and mnemonic devices for the Georgia Life & Health exam.
 */

import type { Mnemonic } from './types';

export const MNEMONICS: Mnemonic[] = [
    {
        id: 'mn-1',
        name: 'CALC — Elements of a Valid Contract',
        letters: 'C-A-L-C',
        items: ['Consideration', 'Agreement (Offer & Acceptance)', 'Legal Purpose', 'Competent Parties'],
        context: 'All four must be present for a valid insurance contract.',
    },
    {
        id: 'mn-2',
        name: 'CRE — Nonforfeiture Options',
        letters: 'C-R-E',
        items: ['Cash Surrender Value', 'Reduced Paid-Up', 'Extended Term'],
        context: 'The three options when you surrender a cash-value policy. Extended Term is the default.',
    },
    {
        id: 'mn-3',
        name: 'STARR — Risk Management Techniques',
        letters: 'S-T-A-R-R',
        items: ['Sharing', 'Transfer', 'Avoidance', 'Reduction', 'Retention'],
        context: 'Insurance is the most common form of risk TRANSFER.',
    },
    {
        id: 'mn-4',
        name: 'ABCDE — Contract Characteristics',
        letters: 'A-B-C-D-E',
        items: ['Adhesion', "Bilateral? No — it's UNILATERAL", 'Conditional', 'aleatory (Dollar values unequal)', 'pErsonal'],
        context: 'Insurance contracts are adhesion, aleatory, unilateral, conditional, and personal.',
    },
    {
        id: 'mn-5',
        name: 'Medicare Parts — "A-B-C-D"',
        letters: 'A-B-C-D',
        items: [
            'A = hospitAl (inpatient)',
            'B = medical (doctor Bills)',
            'C = medicare advantage (Choice of private plans)',
            'D = Drugs (prescriptions)',
        ],
        context: 'Medicare Part A is usually premium-free. Parts B and D require monthly premiums.',
    },
    {
        id: 'mn-6',
        name: '"2-2-2" Rule — Life Insurance',
        letters: '2-2-2',
        items: [
            '2 years — Incontestability clause kicks in',
            '2 years — Suicide clause expires',
            '2 years — Time Limit on Certain Defenses (health) is 3 years, not 2',
        ],
        context: 'After 2 years, the insurer generally cannot contest the policy. Exception: fraud.',
    },
    {
        id: 'mn-7',
        name: 'COBRA Duration',
        letters: '18/36',
        items: ['18 months — employee termination or reduced hours', '36 months — dependents (divorce, death, Medicare eligibility)'],
        context: 'Applies to employers with 20+ employees. Employee pays up to 102% of full premium.',
    },
    {
        id: 'mn-8',
        name: "Disability Tax Rule — \"You Pay, You Don't Pay Taxes\"",
        letters: 'YPDPT',
        items: ['If YOU pay premiums (after-tax) → benefits are TAX-FREE', 'If EMPLOYER pays premiums → benefits are TAXABLE to you'],
        context: 'The person who pays the premium determines the tax treatment of the benefits.',
    },
    {
        id: 'mn-9',
        name: '1035 Exchange Direction — "Life Goes Down"',
        letters: 'L→A',
        items: [
            'Life → Life ✓',
            'Life → Annuity ✓',
            'Annuity → Annuity ✓',
            "Annuity → Life ✗ (CANNOT go from annuity to life)",
        ],
        context: "Tax-free exchange. Must be a direct transfer. Think: \"you can go DOWN from life to annuity, but you can't go UP.\"",
    },
    {
        id: 'mn-10',
        name: 'Health Insurance Grace Periods — "7-10-31"',
        letters: '7-10-31',
        items: ['7 days for weekly premium policies', '10 days for monthly premium policies', '31 days for all other modes (quarterly, semi-annual, annual)'],
        context: 'Different from life insurance which is always 30-31 days regardless of premium mode.',
    },
];

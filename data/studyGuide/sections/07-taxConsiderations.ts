/**
 * 07-taxConsiderations.ts
 * Section 7: Tax Considerations
 */

import type { StudySection } from '../types';

export const section07: StudySection = {
    id: 'tax-considerations',
    number: '07',
    title: 'Tax Considerations',
    icon: '📊',
    description: 'How life and health insurance is taxed. The exam tests this heavily.',
    topics: [
        {
            title: 'Life Insurance Taxation',
            content: [
                {
                    text: 'Key tax rules for life insurance:',
                    sub: [
                        'Death benefit proceeds are generally INCOME TAX-FREE to the beneficiary (IRC §101). This is the single biggest tax advantage of life insurance.',
                        'Cash value grows TAX-DEFERRED — no taxes owed on growth while inside the policy.',
                        'Policy loans are NOT taxable events (as long as the policy stays in force). If the policy lapses with an outstanding loan, the loan amount becomes taxable.',
                        'Dividends are NOT taxable income — they are considered a "return of overpaid premiums." But if dividends are left to accumulate INTEREST, the interest IS taxable.',
                        'Premiums paid for personal life insurance are NOT tax-deductible (you cannot deduct them on your tax return).',
                        'If you surrender a policy, the GAIN (cash value received minus total premiums paid) is taxable as ordinary income.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Death benefit = TAX-FREE. Cash value growth = TAX-DEFERRED. Premiums = NOT deductible. These three rules cover most exam questions on life insurance taxation.' },
            ],
        },
        {
            title: 'Modified Endowment Contracts (MECs)',
            content: [
                { text: 'A MEC is a life insurance policy that has been "overfunded" — too much money paid in too fast. The IRS created MECs to prevent people from using life insurance purely as a tax shelter.' },
                {
                    text: 'The 7-Pay Test:',
                    sub: [
                        'If cumulative premiums paid in the first 7 years EXCEED what would be needed to pay up the policy in 7 level annual payments, it\'s a MEC.',
                        'Once a MEC, ALWAYS a MEC — it cannot be undone.',
                        'A Single Premium Whole Life policy is ALWAYS a MEC (it fails the 7-pay test by definition).',
                    ],
                },
                {
                    text: 'MEC tax treatment (less favorable):',
                    sub: [
                        'Withdrawals are taxed LIFO — earnings come out FIRST and are taxed as ordinary income.',
                        'Policy loans are treated as taxable distributions.',
                        '10% IRS penalty on withdrawals AND loans before age 59½.',
                        'The death benefit is STILL income tax-free — MEC only affects LIVING benefits, not the death benefit.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Even though a MEC has worse tax treatment on withdrawals/loans, the DEATH BENEFIT remains TAX-FREE. The exam tests this distinction every time.' },
            ],
        },
        {
            title: '1035 Tax-Free Exchanges',
            content: [
                { text: 'Section 1035 of the IRC allows certain insurance products to be exchanged TAX-FREE — no gain is recognized at the time of exchange.' },
                {
                    text: 'Permitted exchanges (think "downhill only"):',
                    sub: [
                        'Life Insurance → Life Insurance ✓',
                        'Life Insurance → Annuity ✓',
                        'Life Insurance → Long-Term Care ✓',
                        'Annuity → Annuity ✓',
                        'Annuity → Long-Term Care ✓',
                        'Annuity → Life Insurance ✗ CANNOT do this!',
                        'Health → anything ✗ Not eligible for 1035',
                    ],
                },
                {
                    text: 'Requirements:',
                    sub: [
                        'Must be a DIRECT transfer between insurance companies (money never touches your hands).',
                        'Must be the SAME insured/owner — cannot change the insured person.',
                        'The new policy inherits the old policy\'s cost basis.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Think of 1035 as a one-way street going DOWNHILL. Life is "higher" than annuity. You can go down (life → annuity) but NEVER up (annuity → life).' },
            ],
        },
        {
            title: 'Health Insurance Taxation',
            content: [
                {
                    text: 'Employer-provided health insurance:',
                    sub: [
                        'Premiums paid by the employer are TAX-DEDUCTIBLE to the employer as a business expense.',
                        'Premiums are NOT counted as taxable income to the employee — a major employee benefit.',
                        'Benefits received under an employer-provided health plan are generally TAX-FREE to the employee.',
                    ],
                },
                {
                    text: 'Disability Income (DI) tax rule — "You Pay, You Don\'t Pay":',
                    sub: [
                        'If YOU pay the premiums with after-tax dollars → benefits are TAX-FREE.',
                        'If your EMPLOYER pays the premiums → benefits are TAXABLE income to you.',
                        'If premiums are SPLIT (you pay part, employer pays part) → benefits are taxable in proportion to the employer\'s contribution.',
                    ],
                },
                { text: '⚠️ EXAM TIP: The disability tax rule is tested constantly. Whoever PAYS the premium determines how benefits are TAXED. If you pay = tax-free benefits. If employer pays = taxable benefits.' },
                {
                    text: 'Self-employed individuals:',
                    sub: [
                        'Can deduct 100% of health insurance premiums (for themselves, spouse, and dependents).',
                        'This is an "above-the-line" deduction (reduces adjusted gross income).',
                    ],
                },
                {
                    text: 'Long-Term Care (LTC) tax treatment:',
                    sub: [
                        'Tax-qualified LTC premiums may be deductible as a medical expense (subject to age-based annual limits).',
                        'LTC benefits received are generally TAX-FREE up to a per diem limit set by the IRS.',
                        'Non-tax-qualified LTC policies — premiums are NOT deductible, but benefits may still be tax-free.',
                    ],
                },
            ],
        },
        {
            title: 'Tax-Advantaged Health Accounts',
            content: [
                {
                    text: 'HSA — Health Savings Account ("Triple Tax Advantage"):',
                    sub: [
                        'MUST be paired with a High-Deductible Health Plan (HDHP).',
                        'Contributions are pre-tax (or tax-deductible if made with after-tax dollars).',
                        'Growth is TAX-FREE.',
                        'Withdrawals for qualified medical expenses are TAX-FREE.',
                        'Triple tax benefit: tax-free in, tax-free growth, tax-free out.',
                        'Funds roll over year to year — NO "use it or lose it."',
                        'Portable — the account belongs to the individual, not the employer.',
                        'After age 65, withdrawals for non-medical expenses are taxed as ordinary income (no penalty).',
                    ],
                },
                {
                    text: 'FSA — Flexible Spending Account:',
                    sub: [
                        'Employer-sponsored plan. Employee contributions are pre-tax.',
                        '"Use it or lose it" — funds generally must be used by year-end (some plans allow $610 rollover or 2.5-month grace period).',
                        'NOT portable — stays with the employer.',
                        'Can be used for medical expenses, dependent care, or both.',
                    ],
                },
                {
                    text: 'HRA — Health Reimbursement Arrangement:',
                    sub: [
                        'Funded SOLELY by the employer — employees cannot contribute.',
                        'Used to reimburse employees for qualified medical expenses.',
                        'Employer decides whether funds roll over.',
                        'NOT portable (unless it\'s a Qualified Small Employer HRA).',
                    ],
                },
                { text: '⚠️ EXAM TIP: HSA = triple tax advantage + portable + rolls over. FSA = use it or lose it + NOT portable. HRA = employer-funded only. Know the differences!' },
            ],
        },
        {
            title: 'Business Uses of Life Insurance',
            content: [
                {
                    text: 'Key Person (Key Man) Insurance:',
                    sub: [
                        'The BUSINESS is the owner, premium payer, AND beneficiary.',
                        'Insures a key employee whose death would cause financial loss to the company.',
                        'Premiums are NOT tax-deductible (personal life insurance premiums never are).',
                        'Death benefit is received INCOME TAX-FREE by the business.',
                        'Used to cover: lost revenue, cost of replacement, debt obligations.',
                    ],
                },
                {
                    text: 'Buy-Sell Agreements — funded by life insurance to buy out a deceased owner\'s share:',
                    sub: [
                        'Cross-Purchase Plan — each partner/owner buys a policy on every OTHER partner. When one dies, the surviving partners use the death benefits to buy the deceased\'s share. Formula: N × (N-1) policies needed (e.g., 3 partners = 6 policies).',
                        'Entity (Stock Redemption) Plan — the BUSINESS itself buys a policy on each owner. When an owner dies, the business buys back their share. Formula: N policies needed (e.g., 3 partners = 3 policies).',
                    ],
                },
                { text: '⚠️ EXAM TIP: Cross-purchase = partners buy on each other = more policies needed. Entity = business buys on each = fewer policies. The exam asks which requires more policies.' },
                {
                    text: 'Executive Compensation Plans:',
                    sub: [
                        'Executive Bonus Plan (Section 162) — employer pays premiums on a life insurance policy OWNED by the executive. Premiums are tax-deductible to the employer AND taxable income to the employee. Simple arrangement.',
                        'Split-Dollar Plan — employer and employee SHARE the premium costs and policy benefits. Two methods: Endorsement (employer owns policy) and Collateral Assignment (employee owns policy).',
                        'Deferred Compensation Plan — employer promises to pay the executive additional compensation in the future (often at retirement). Often informally funded with life insurance.',
                        'Golden Parachute — special compensation for executives in the event of a company takeover or merger.',
                    ],
                },
                {
                    text: 'Group Term Life — tax rules:',
                    sub: [
                        'Employer-paid premiums for the FIRST $50,000 of coverage are TAX-FREE to the employee.',
                        'The cost of coverage ABOVE $50,000 is TAXABLE income to the employee (based on IRS Table I rates, not actual premium).',
                        '$50,000 is the magic number — memorize it.',
                    ],
                },
                { text: '⚠️ EXAM TIP: $50,000 group term life threshold is one of the most tested numbers on the exam. Above $50K = taxable to the employee.' },
            ],
        },
    ],
};

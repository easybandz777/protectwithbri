/**
 * 03-lifeProducts.ts
 * Section 3: Life Insurance Products
 */

import type { StudySection } from '../types';

export const section03: StudySection = {
    id: 'life-products',
    number: '03',
    title: 'Life Insurance Products',
    icon: '🛡️',
    description: 'The biggest section on the exam. Know every product type inside and out.',
    topics: [
        {
            title: 'Term Life Insurance',
            content: [
                { text: "Provides coverage for a SPECIFIC PERIOD (term). If you die during the term, it pays. If you outlive it, it expires — no cash value, no refund." },
                { text: "It's the most AFFORDABLE type of life insurance. Pure death protection — nothing else." },
                {
                    text: 'Types of Term:',
                    sub: [
                        'Level Term — death benefit AND premiums stay the same throughout the term. Most common type sold today.',
                        'Decreasing Term — death benefit DECREASES over time, premiums stay LEVEL. Used for mortgage protection — as the mortgage balance goes down, so does the insurance.',
                        'Increasing Term — death benefit increases over time. Used to keep pace with inflation.',
                        'Renewable Term — can be renewed at the end of the term WITHOUT proving insurability (no new medical exam). Premium increases with each renewal based on attained age.',
                        'Convertible Term — can be converted to a PERMANENT policy (whole life or UL) without a medical exam. Huge advantage if health deteriorates.',
                        "Return of Premium (ROP) — returns ALL premiums paid if the insured outlives the term. More expensive but appeals to buyers who don't want to \"waste\" money.",
                    ],
                },
                { text: '⚠️ EXAM TIP: Term insurance has NO cash value, NO loan value, and NO investment component. If a question mentions "cash value" or "policy loan," the answer is NOT term insurance.' },
                { text: 'Annual Renewable Term (ART/YRT) — renews every year with increasing premiums. Least expensive at young ages, most expensive at older ages (because premium is recalculated each year at attained age).' },
            ],
        },
        {
            title: 'Whole Life (Permanent) Insurance',
            content: [
                { text: 'Provides LIFELONG coverage (to age 100 or 121 under current mortality tables) with a GUARANTEED death benefit AND a cash value component that grows over time.' },
                {
                    text: 'Types of Whole Life:',
                    sub: [
                        'Ordinary/Straight Whole Life — premiums paid for your ENTIRE life until death or age 100/121. Most common permanent policy.',
                        'Limited Pay Whole Life — higher premiums paid for a SET number of years (e.g., 10-pay, 20-pay, paid-up at 65). Coverage still lasts your entire life, but you stop paying after the period.',
                        'Single Premium Whole Life (SPWL) — ONE lump-sum payment, immediately fully paid up. Always becomes a MEC (Modified Endowment Contract) — less favorable tax treatment on living benefits.',
                        'Modified Whole Life — LOWER premiums in the first 3-5 years, then HIGHER for the rest. Helps with affordability when young.',
                        'Graded Premium Whole Life — premiums INCREASE gradually over the first 5–10 years, then LEVEL off. Eases into full cost.',
                        'Interest-Sensitive Whole Life — similar to traditional whole life but the cash value earns current market interest rates (can be higher than the guaranteed rate).',
                    ],
                },
                {
                    text: 'Cash Value — the living benefit of permanent insurance:',
                    sub: [
                        'Grows TAX-DEFERRED inside the policy.',
                        'Can borrow against it (policy loan) at a stated interest rate. Unpaid loans + interest reduce the death benefit dollar-for-dollar.',
                        'Builds SLOWLY at first (because most of the early premium goes to the cost of insurance and expenses), then ACCELERATES later.',
                        'If you surrender the policy, you receive the CASH SURRENDER VALUE (cash value minus any surrender charges and outstanding loans).',
                        'Cash value DOES NOT equal the death benefit — they are separate amounts. At policy maturity (age 100/121), they converge.',
                    ],
                },
                {
                    text: 'Participating vs. Non-Participating:',
                    sub: [
                        'Participating Policy — pays DIVIDENDS to policyholders. Issued by mutual companies. Premiums are slightly higher to allow for dividend distribution.',
                        'Non-Participating Policy — does NOT pay dividends. Issued by stock companies. Premiums are generally lower.',
                        'Dividends are NOT guaranteed and are considered a RETURN of overpaid premiums — NOT taxable income.',
                    ],
                },
                { text: '⚠️ EXAM TIP: The exam loves asking about participating policies. Dividends are NOT guaranteed, NOT taxable, and are a return of premium. Mutual companies issue participating policies; stock companies issue non-participating.' },
            ],
        },
        {
            title: 'Universal Life (UL)',
            content: [
                { text: 'A FLEXIBLE permanent policy. The hallmark feature: you can adjust your premium payments AND your death benefit (within limits).' },
                {
                    text: 'How it works (transparent structure):',
                    sub: [
                        'You pay premiums into the policy (flexible amount, flexible timing).',
                        'The insurer deducts the Cost of Insurance (COI) and administrative charges — you can SEE these deductions (unlike whole life).',
                        "What's left goes into the cash value, which earns interest at a CURRENT rate set by the insurer (with a guaranteed minimum, often 2-4%).",
                        'You can INCREASE the death benefit (requires proof of insurability) or DECREASE it.',
                        'You can SKIP premium payments entirely if the cash value is large enough to cover the COI. ⚠️ But if cash value runs out, the policy LAPSES.',
                        'You can make partial withdrawals from the cash value (unlike whole life where you can only borrow).',
                    ],
                },
                {
                    text: 'Two death benefit options:',
                    sub: [
                        'Option A (Level) — death benefit stays LEVEL. As cash value grows, the "net amount at risk" for the insurer DECREASES. Lower cost of insurance over time.',
                        'Option B (Increasing) — death benefit equals face amount PLUS accumulated cash value. More expensive because the net amount at risk stays higher, but total death benefit GROWS.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Universal life\'s key advantage over whole life = FLEXIBILITY + TRANSPARENCY. The cost of insurance is unbundled and visible. Premium flexibility is the defining feature.' },
                { text: 'Guaranteed Universal Life (GUL) — a hybrid that keeps premiums fixed and guarantees the death benefit for life (as long as planned premiums are paid). Sacrifices cash value growth for lower cost and lifetime guarantee.' },
            ],
        },
        {
            title: 'Variable Life & Variable Universal Life',
            content: [
                { text: 'Variable Life — like whole life but the cash value is invested in "SEPARATE ACCOUNTS" (sub-accounts similar to mutual funds). The policyholder chooses the investments and bears the investment risk.' },
                { text: 'Variable Universal Life (VUL) — the "Swiss Army knife" of insurance. Combines the flexible premiums of UL with the investment features of Variable Life. Maximum flexibility + maximum investment potential + maximum risk.' },
                {
                    text: 'Key facts you MUST know:',
                    sub: [
                        'Cash value is NOT guaranteed — it depends entirely on investment performance.',
                        'Variable Life has a guaranteed MINIMUM death benefit (the face amount). Cash value can drop to zero, but the death benefit won\'t go below the minimum.',
                        'VUL has NO guaranteed minimum death benefit — both cash value and death benefit can decrease.',
                        'Both are SECURITIES — regulated by the SEC and FINRA.',
                        'The agent MUST hold a securities license (Series 6 or Series 7) IN ADDITION to their state life insurance license.',
                        'A PROSPECTUS must be delivered to the buyer BEFORE or AT the time of sale — never after.',
                        'Separate accounts are NOT part of the insurer\'s general account — they are kept separate and are not subject to the claims of the insurer\'s creditors.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Variable = SEC + FINRA + securities license + prospectus. This is tested on every exam. Also remember: Variable Life has a guaranteed minimum death benefit, but VUL does NOT.' },
            ],
        },
        {
            title: 'Indexed Universal Life (IUL)',
            content: [
                { text: "Cash value growth is TIED TO a market index (like the S&P 500) — but you DON'T directly invest in the market. The insurer credits interest based on the index performance." },
                {
                    text: 'Three key features:',
                    sub: [
                        'Floor — guaranteed MINIMUM interest rate (often 0–2%). Your cash value will NEVER decrease due to market downturns. Zero is a common floor.',
                        'Cap — MAXIMUM interest you can earn (e.g., 10–12%). If the S&P goes up 25%, you only get the cap. This is the trade-off for having downside protection.',
                        'Participation Rate — the PERCENTAGE of the index gain credited to you. E.g., 80% participation rate means if the S&P gains 10%, you get 8%.',
                    ],
                },
                { text: 'IUL is NOT a security — no SEC/FINRA registration required, no securities license needed, no prospectus. It is purely an INSURANCE product.' },
                { text: '⚠️ EXAM TIP: Variable Life IS a security. IUL is NOT a security. The exam loves this distinction. IUL only LINKS to an index — it doesn\'t invest in it. Variable Life directly invests in separate accounts.' },
                {
                    text: 'Crediting methods:',
                    sub: [
                        'Annual Point-to-Point — compares the index value at the START and END of a one-year period.',
                        'Monthly Average — averages the index value over each month.',
                        'Monthly Point-to-Point — measures gain/loss each month separately (allows monthly caps).',
                    ],
                },
            ],
        },
        {
            title: 'Group Life Insurance',
            content: [
                { text: 'Typically provided by EMPLOYERS as an employee benefit. The employer holds ONE master contract; employees receive CERTIFICATES of insurance (not individual policies).' },
                {
                    text: 'Key features:',
                    sub: [
                        'Usually GROUP TERM life insurance (not permanent).',
                        'Employer-paid premiums: first $50,000 of coverage is TAX-FREE to the employee. The cost of coverage ABOVE $50,000 is TAXABLE income to the employee (IRS Table I rates).',
                        'Conversion Privilege — when an employee LEAVES the group, they can convert to an individual policy (typically WHOLE LIFE only — not term) without proof of insurability. Must convert within 31 DAYS.',
                        'Underwriting is done on the GROUP as a whole (group underwriting), not on individual members. This means individual health conditions generally don\'t affect eligibility.',
                        'If the employee dies within the 31-day conversion period AND hasn\'t yet converted, the death benefit is STILL paid as if the group policy were in force.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Group conversion = 31 days + whole life only + no proof of insurability. Remember these three elements. Also remember, $50K is the tax-free threshold.' },
                {
                    text: 'Contributory vs. Noncontributory:',
                    sub: [
                        'Contributory — employees PAY part of the premium. Requires at least 75% employee participation.',
                        'Noncontributory — employer pays 100% of the premium. Requires 100% participation (everyone is covered).',
                    ],
                },
            ],
        },
        {
            title: 'Special Purpose Policies',
            content: [
                {
                    text: 'Other life insurance products to know:',
                    sub: [
                        'Survivorship (Second-to-Die) Life — pays the death benefit only when the SECOND insured dies. Used for estate planning (to pay estate taxes). Less expensive than two individual policies.',
                        'First-to-Die (Joint Life) — pays when the FIRST insured dies. The surviving spouse typically uses the proceeds. Less common.',
                        'Credit Life Insurance — decreasing term insurance that pays off a specific debt (car loan, mortgage) if the borrower dies. Amount decreases as the loan is paid down.',
                        'Juvenile Life Insurance — whole life policy purchased on a CHILD. Builds cash value early. Can be converted to adult coverage later. Payor Benefit rider waives premiums if the premium-paying adult dies or becomes disabled.',
                        'Final Expense / Burial Insurance — small whole life policies (typically $5,000–$25,000) designed to cover funeral and burial costs. Simplified underwriting.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Survivorship = pays at SECOND death (estate planning). Joint Life = pays at FIRST death. The exam frequently tests which pays when.' },
            ],
        },
    ],
};

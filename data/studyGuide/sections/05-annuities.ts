/**
 * 05-annuities.ts
 * Section 5: Annuities
 */

import type { StudySection } from '../types';

export const section05: StudySection = {
    id: 'annuities',
    number: '05',
    title: 'Annuities',
    icon: '💰',
    description: 'The opposite of life insurance — instead of protecting against dying too soon, annuities protect against living too long.',
    topics: [
        {
            title: 'Annuity Basics',
            content: [
                { text: 'An annuity is a contract between you and an insurance company that converts a lump sum or series of payments into a guaranteed income stream.' },
                { text: 'Think of it as the OPPOSITE of life insurance: life insurance protects against premature death, annuities protect against OUTLIVING your money (longevity risk).' },
                {
                    text: 'Two phases:',
                    sub: [
                        "Accumulation Phase (Pay-in Phase) — you're putting money in. Money grows tax-deferred. No taxes owed during this phase.",
                        'Annuitization Phase (Payout / Liquidation Phase) — the annuity is converted into an income stream. You start receiving periodic payments.',
                    ],
                },
                {
                    text: 'Key parties:',
                    sub: [
                        'Owner — the person who purchases and controls the annuity. Makes decisions about withdrawals, beneficiaries, and payout options.',
                        'Annuitant — the person whose life expectancy is used to calculate payments. Often the same as the owner.',
                        'Beneficiary — receives any remaining value if the annuitant dies before or during payout.',
                        'Insurer — the insurance company that guarantees the payments.',
                    ],
                },
                { text: '⚠️ EXAM TIP: The owner and annuitant can be different people. The OWNER controls the contract; the ANNUITANT\'s life determines payments.' },
            ],
        },
        {
            title: 'Types of Annuities — By Timing',
            content: [
                {
                    text: 'When do payments start?',
                    sub: [
                        'Immediate Annuity — payments start within ONE PAYMENT PERIOD (usually 1 month) after a single lump-sum premium. Must be purchased with a single premium. Used by people who are already retired and need income NOW.',
                        'Deferred Annuity — payments start at some FUTURE DATE. Money grows during the accumulation phase. Can be funded with single or flexible premiums. Used for retirement planning.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Immediate annuities ALWAYS require a single lump-sum premium. You cannot make periodic payments into an immediate annuity.' },
            ],
        },
        {
            title: 'Types of Annuities — By Investment',
            content: [
                {
                    text: 'How is the money invested?',
                    sub: [
                        'Fixed Annuity — the insurer guarantees a minimum interest rate. Safe, predictable. The INSURER bears the investment risk. Not a security.',
                        'Variable Annuity — money goes into "separate accounts" (similar to mutual funds). The CONTRACT OWNER bears the investment risk. Returns depend on market performance. IS a security — regulated by SEC/FINRA, requires a securities license (Series 6 or 7) to sell, and a prospectus must be delivered.',
                        'Equity-Indexed (Fixed-Indexed) Annuity — interest is tied to a market index (S&P 500). Has a FLOOR (guaranteed minimum, often 0-2%) and a CAP (maximum return, e.g., 10-12%). NOT a security — no SEC registration needed.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Variable annuity = security = SEC/FINRA = prospectus required. Fixed and indexed annuities are NOT securities.' },
                {
                    text: 'Variable Annuity Details:',
                    sub: [
                        'Accumulation Units — units purchased during the pay-in phase. Their value fluctuates with the market.',
                        'Annuity Units — units received during the payout phase. The NUMBER of units is fixed; the VALUE of each unit fluctuates.',
                        'Separate Account — where the money is invested (stocks, bonds, money market). Kept "separate" from the insurer\'s general account.',
                        'General Account — where fixed annuity money is held. Backed by the insurer\'s overall assets.',
                    ],
                },
            ],
        },
        {
            title: 'Funding Methods',
            content: [
                {
                    text: 'How is the annuity funded?',
                    sub: [
                        'Single Premium — one lump-sum payment. Can be immediate or deferred.',
                        'Flexible Premium — periodic payments in varying amounts. The owner decides how much and when to pay. Can only be deferred.',
                        'Fixed/Level Premium — periodic payments in equal, predetermined amounts.',
                    ],
                },
                {
                    text: 'Qualified vs. Non-Qualified:',
                    sub: [
                        'Qualified Annuity — purchased within a tax-qualified retirement plan (IRA, 401(k), 403(b)). Contributions are pre-tax (tax-deductible). All withdrawals are fully taxable as ordinary income.',
                        'Non-Qualified Annuity — purchased with after-tax dollars (no tax deduction). Only the EARNINGS are taxable on withdrawal. The principal (cost basis) comes out tax-free.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Qualified = pre-tax money in, fully taxed coming out. Non-qualified = after-tax money in, only earnings taxed coming out.' },
            ],
        },
        {
            title: 'Payout (Settlement) Options',
            content: [
                {
                    text: 'When the annuity is annuitized, the owner chooses a payout option. Once chosen, it is typically IRREVOCABLE:',
                    sub: [
                        "Life Only (Straight Life) — payments for the annuitant's ENTIRE LIFE. Provides the HIGHEST periodic payment. When the annuitant dies, payments STOP — nothing goes to beneficiaries. Maximum risk for the beneficiary.",
                        'Life with Period Certain — payments for life, BUT if the annuitant dies before a guaranteed period (e.g., 10 or 20 years), remaining payments continue to the beneficiary until the period ends.',
                        'Joint and Survivor — payments continue over TWO lives. When the first person dies, payments continue to the survivor (often at a reduced amount, e.g., 50% or 75%).',
                        'Installment Refund — payments for life. If the annuitant dies before receiving back the full purchase price, the REMAINDER goes to the beneficiary in periodic installments.',
                        'Cash Refund — same as installment refund, but the remainder is paid as a LUMP SUM.',
                        'Fixed Period — payments for a SET number of years regardless of whether the annuitant lives or dies. If annuitant dies, remaining payments go to beneficiary.',
                        'Fixed Amount — a set dollar amount paid periodically until the money (principal + interest) runs out.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Life Only = HIGHEST payment (because no guarantee). Joint & Survivor = LOWEST per-payment amount (covers two lives). The more guarantees, the lower each payment.' },
            ],
        },
        {
            title: 'Annuity Taxation',
            content: [
                { text: 'During the accumulation phase, earnings grow TAX-DEFERRED. You don\'t pay taxes until you withdraw — but you WILL pay taxes eventually. This is deferred, NOT tax-free.' },
                {
                    text: 'Withdrawal taxation (non-qualified):',
                    sub: [
                        'LIFO (Last In, First Out) — EARNINGS come out FIRST and are taxed as ordinary income.',
                        'After all earnings are withdrawn, the principal (cost basis) comes out TAX-FREE.',
                        '10% IRS PENALTY on withdrawals before age 59½ (in addition to income tax).',
                        'Surrender charges may also apply from the insurance company (separate from the IRS penalty).',
                    ],
                },
                {
                    text: 'Annuitization taxation:',
                    sub: [
                        'Each payment is SPLIT between taxable (earnings) and non-taxable (return of principal).',
                        'The Exclusion Ratio determines what percentage of each payment is tax-free: Cost Basis ÷ Expected Return = Exclusion Ratio.',
                        'Example: If you paid $100,000 and expect $200,000 total payments, Exclusion Ratio = 50%. Half of each payment is tax-free.',
                    ],
                },
                { text: '1035 Exchange — tax-free swap: Life → Life ✓, Life → Annuity ✓, Annuity → Annuity ✓, Annuity → Life ✗ (CANNOT go backwards). Must be a direct transfer.' },
                { text: '⚠️ EXAM TIP: The 1035 exchange is a one-way street. You can go "down" from life to annuity, but NEVER "up" from annuity to life. This is tested almost every exam.' },
                { text: 'Death of the Owner — if the owner dies during accumulation, the beneficiary must receive the funds within 5 years OR begin receiving payments within 1 year (exceptions for surviving spouses who can continue the contract).' },
            ],
        },
        {
            title: 'Suitability & Regulation',
            content: [
                {
                    text: 'Annuity suitability requirements:',
                    sub: [
                        'Agents must have reasonable grounds to believe the annuity is suitable for the customer.',
                        'Must consider: age, income, financial situation, tax status, investment objectives, risk tolerance, liquidity needs.',
                        'Special protections for seniors (age 65+) — Georgia requires enhanced suitability review.',
                        'Unsuitable sales can result in fines, license suspension, and liability.',
                    ],
                },
                {
                    text: 'Common annuity fees:',
                    sub: [
                        'Surrender Charge — penalty for early withdrawal, typically decreasing over 5-10 years (e.g., 7% in year 1, 6% in year 2... 0% after year 7).',
                        'Mortality & Expense (M&E) Charge — covers the insurer\'s risk and profit margin.',
                        'Administrative Fees — annual maintenance charges.',
                        'Investment Management Fees — for variable annuities, charged by the fund managers.',
                        'Rider Fees — additional charges for optional features (guaranteed income, death benefit guarantees).',
                    ],
                },
                { text: '⚠️ EXAM TIP: Surrender charges are imposed by the INSURANCE COMPANY (not the IRS). The 10% penalty is from the IRS. They are separate charges that can BOTH apply.' },
            ],
        },
    ],
};

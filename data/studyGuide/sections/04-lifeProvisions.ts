/**
 * 04-lifeProvisions.ts
 * Section 4: Life Insurance Provisions, Options & Riders
 */

import type { StudySection } from '../types';

export const section04: StudySection = {
    id: 'life-provisions',
    number: '04',
    title: 'Life Insurance Provisions, Options & Riders',
    icon: '📋',
    description: 'Policy provisions and riders — know every one. Second-heaviest exam topic.',
    topics: [
        {
            title: 'Required (Standard) Policy Provisions',
            content: [
                {
                    text: 'These appear in virtually every life insurance policy — required by law:',
                    sub: [
                        'Grace Period — 30 or 31 days after a missed premium to pay without losing coverage. If the insured dies during the grace period, the death benefit is STILL PAID (minus the unpaid premium).',
                        "Reinstatement — a lapsed policy can typically be reinstated within 3–5 years if the insured: (1) provides evidence of insurability, (2) pays all back premiums with interest, and (3) pays any outstanding loans. New contestability and suicide periods begin.",
                        'Incontestability Clause — after the policy has been in force for 2 YEARS, the insurer CANNOT contest (void) it based on misstatements in the application. EXCEPTIONS: fraud, non-payment of premium, and material misrepresentation about age/sex.',
                        'Suicide Clause — if the insured dies by suicide within the first 2 YEARS, the insurer only returns the premiums paid — NO death benefit. After 2 years, suicide is covered like any other cause of death.',
                        "Misstatement of Age or Sex — if the insured's age or sex was wrong on the application, the death benefit is ADJUSTED to what the correct premium would have purchased. The policy is NOT voided.",
                        'Entire Contract Clause — the policy and the attached application form the ENTIRE contract. No outside documents can be referenced to change its terms.',
                        'Free Look Period — 10 days (in Georgia) after DELIVERY to examine and return the policy for a full refund. No questions asked.',
                    ],
                },
                { text: '⚠️ EXAM TIP: The "2-2-2" rule — Incontestability = 2 years, Suicide = 2 years, and these are two of the most tested provisions. After 2 years, the policy is essentially bulletproof (except fraud).' },
            ],
        },
        {
            title: 'Optional Policy Provisions',
            content: [
                {
                    text: 'These may or may not be included:',
                    sub: [
                        'Ownership Clause — identifies the policyholder and their rights (naming beneficiaries, assigning the policy, borrowing, etc.).',
                        'Assignment Clause — allows the policyholder to transfer policy rights. Absolute Assignment = permanent, total transfer of ownership. Collateral Assignment = temporary transfer to a lender as loan security.',
                        'Automatic Premium Loan (APL) — if a premium isn\'t paid and the policy has sufficient cash value, the insurer AUTOMATICALLY borrows from the cash value to pay the premium. Prevents accidental lapse.',
                        'Policy Loan Provision — policyholders can borrow against the cash value. The interest rate is stated in the policy. Outstanding loans reduce the death benefit.',
                        'War Clause / Aviation Clause — may exclude death during wartime military service or while flying in non-commercial aircraft.',
                        'Spendthrift Clause — protects the death benefit from the beneficiary\'s creditors. Creditors cannot attach the death benefit to pay the beneficiary\'s debts.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Misstatement of age ADJUSTS the benefit — it does NOT void the policy. This is one of the most common wrong answers on the exam.' },
            ],
        },
        {
            title: 'Nonforfeiture Options',
            content: [
                { text: 'These ONLY apply to policies with CASH VALUE (whole life, universal life). NOT term insurance — term has NO cash value.' },
                { text: 'When you stop paying premiums on a cash-value policy, you don\'t lose everything. You have three nonforfeiture options (remember CRE):' },
                {
                    text: 'The three options:',
                    sub: [
                        "Cash Surrender Value — take the cash and walk away. The policy is TERMINATED. You receive the cash value minus any surrender charges and outstanding loans. Any gain over your cost basis is taxable.",
                        "Reduced Paid-Up Insurance — use the cash value as a single premium to buy a SMALLER whole life policy that is FULLY PAID UP. No more premium payments ever, but the death benefit is permanently reduced.",
                        'Extended Term Insurance — use the cash value to buy a TERM policy for the SAME FACE AMOUNT as the original policy. The cash value determines HOW LONG the term coverage lasts. Same death benefit, limited time.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Extended Term is the AUTOMATIC/DEFAULT nonforfeiture option if the policyholder doesn\'t choose. This is tested on nearly every exam. "What happens if the policyholder stops paying and does nothing?" = Extended Term.' },
                {
                    text: 'Key comparisons:',
                    sub: [
                        'Cash Surrender = walk away with money, NO more coverage.',
                        'Reduced Paid-Up = LOWER death benefit, coverage for LIFE, no more premiums.',
                        'Extended Term = SAME death benefit, coverage for a LIMITED TIME, no more premiums.',
                    ],
                },
            ],
        },
        {
            title: 'Settlement Options (Death Benefit Payout)',
            content: [
                {
                    text: 'How the death benefit is paid to the beneficiary. The policyholder can pre-select, or the beneficiary can choose after death:',
                    sub: [
                        'Lump Sum — the entire death benefit paid in ONE single payment. Most common. Simplest. No interest earned after receipt.',
                        'Fixed Period (Installments for a Fixed Period) — death benefit paid in EQUAL installments over a SET number of years (e.g., 10 years). Includes principal + interest.',
                        'Fixed Amount — a SET dollar amount paid periodically until the money (principal + interest) runs out. The BENEFICIARY chooses the amount; the insurance company determines how long payments last.',
                        "Life Income (Life Annuity) — payments for the beneficiary's ENTIRE LIFE. Amount depends on life expectancy and death benefit size. When the beneficiary dies, payments STOP.",
                        'Life Income with Period Certain — payments for life, but GUARANTEED for a minimum period (e.g., 10-year certain). If the beneficiary dies within the period, remaining payments go to a secondary beneficiary.',
                        'Interest Only — the insurer HOLDS the entire death benefit and pays out only the INTEREST periodically. The principal stays with the insurer. Beneficiary can later choose a different option.',
                        'Joint and Survivor — payments continue over TWO lives (e.g., husband and wife).',
                    ],
                },
                { text: '⚠️ EXAM TIP: Fixed Period = beneficiary picks the TIME, insurer determines the amount. Fixed Amount = beneficiary picks the AMOUNT, insurer determines the time. Know the difference!' },
            ],
        },
        {
            title: 'Dividend Options (Participating Policies)',
            content: [
                {
                    text: 'If the policy pays dividends (participating policy from a mutual company), the policyholder can choose how to receive them:',
                    sub: [
                        'Cash — receive the dividend as a check. Simplest option.',
                        'Premium Reduction — dividend applied to REDUCE the next premium payment.',
                        'Accumulate at Interest — dividends stay with the insurer and earn INTEREST (like a savings account). The dividends themselves are NOT taxable, but the INTEREST earned IS taxable.',
                        'Paid-Up Additions (PUAs) — dividend purchases small pieces of additional PAID-UP whole life insurance. Increases total death benefit AND cash value. Very popular option.',
                        'One-Year Term — dividend purchases ONE YEAR of additional term insurance equal to the cash value of the policy.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Dividends are NOT guaranteed, NOT taxable (return of premium), and not considered income. But interest earned on accumulated dividends IS taxable. Paid-Up Additions is the most commonly recommended option.' },
            ],
        },
        {
            title: 'Common Riders',
            content: [
                {
                    text: 'Riders MODIFY the base policy (for an additional premium). Know every one:',
                    sub: [
                        'Waiver of Premium — if the insured becomes TOTALLY DISABLED, premiums are WAIVED (paid by the insurer). Usually has a 6-month waiting/elimination period. Disability must occur before age 60 or 65.',
                        'Accidental Death Benefit (ADB) — "double indemnity." Pays an ADDITIONAL death benefit (usually equal to the face amount) if death is caused by an ACCIDENT. Does NOT cover: illness/disease, suicide, war, aviation, or death after age 65-70.',
                        'Guaranteed Insurability Rider (GIO) — allows the insured to purchase ADDITIONAL coverage at SPECIFIED ages or life events (marriage, birth of child) WITHOUT proof of insurability. Incredibly valuable if health declines.',
                        'Accelerated Death Benefit (Living Benefit) — allows the insured to receive a PORTION of the death benefit (typically 25-75%) while STILL ALIVE if diagnosed with a TERMINAL illness (usually 6-12 months to live). Proceeds are generally tax-free.',
                        "Payor Benefit Rider — if the person PAYING the premium (usually a parent) dies or becomes disabled, premiums are waived until the insured child reaches a specified age. Used with juvenile policies.",
                        "Child Term Rider — adds TERM insurance coverage for the insured's children. A single rider covers ALL eligible children. Usually convertible to permanent insurance when the child reaches adulthood. Very affordable.",
                        'Cost of Living Adjustment (COLA) Rider — AUTOMATICALLY increases the death benefit annually to keep pace with inflation, based on the Consumer Price Index (CPI). Premiums also increase.',
                        'Return of Premium Rider — returns ALL premiums paid if the insured outlives the policy term. Converts what was "lost" on term insurance into a refund.',
                        'Long-Term Care Rider — allows the policyholder to use a portion of the death benefit to pay for long-term care expenses. Combines LTC coverage with life insurance.',
                    ],
                },
                { text: '⚠️ EXAM TIP: ADB (double indemnity) only covers ACCIDENTAL death — NOT illness, disease, or suicide. "A heart attack is NOT an accident" is a classic exam question.' },
            ],
        },
        {
            title: 'Beneficiary Designations',
            content: [
                {
                    text: 'Types of beneficiaries:',
                    sub: [
                        'Primary Beneficiary — FIRST in line to receive the death benefit.',
                        'Contingent (Secondary) Beneficiary — receives the benefit only if the PRIMARY beneficiary dies first or cannot be found.',
                        'Tertiary — THIRD in line (rare but possible).',
                        'Revocable Beneficiary — can be CHANGED by the policyholder at any time without the beneficiary\'s consent. MOST COMMON type.',
                        "Irrevocable Beneficiary — CANNOT be changed without the beneficiary's WRITTEN CONSENT. Gives the beneficiary a \"vested interest\" in the policy. The policyowner gives up control over changes.",
                    ],
                },
                {
                    text: 'Distribution methods:',
                    sub: [
                        'Per Capita — "by the head." Death benefit is split EQUALLY among SURVIVING beneficiaries only. If one dies, their share goes to the other surviving beneficiaries.',
                        'Per Stirpes — "by the branch." If a beneficiary PREDECEASES the insured, their share passes DOWN to THEIR heirs (their children). Keeps money in the family "branch."',
                    ],
                },
                {
                    text: 'Special situations:',
                    sub: [
                        'Common Disaster Clause — if the insured and beneficiary die in the same accident, this clause specifies how proceeds are distributed (usually to the contingent beneficiary).',
                        'Uniform Simultaneous Death Act — if it cannot be determined who died first, the insured is PRESUMED to have survived the beneficiary. Proceeds go to the contingent beneficiary.',
                        'Facility of Payment Clause — allows the insurer to pay up to a certain amount to anyone who has incurred expenses (funeral costs, medical bills) on behalf of the insured.',
                        'Minor Beneficiary — a minor CANNOT receive death benefits directly. Benefits go to a legal guardian or are held in trust until the minor reaches legal age.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Per Stirpes = "down the family tree." Per Capita = "headcount of survivors." The exam loves asking about beneficiary distribution.' },
            ],
        },
    ],
};

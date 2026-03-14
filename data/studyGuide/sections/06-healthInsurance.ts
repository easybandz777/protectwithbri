/**
 * 06-healthInsurance.ts
 * Section 6: Health (Accident & Sickness) Insurance
 */

import type { StudySection } from '../types';

export const section06: StudySection = {
    id: 'health-insurance',
    number: '06',
    title: 'Health (Accident & Sickness) Insurance',
    icon: '🏥',
    description: 'Covers medical expenses, disability, supplemental plans, LTC, and Medicare. Large section.',
    topics: [
        {
            title: 'Medical Expense Insurance',
            content: [
                {
                    text: 'Three tiers of medical expense coverage:',
                    sub: [
                        'Basic Medical — covers hospital expenses, surgical expenses, and physician visits. First-dollar coverage (no deductible) but LOWER benefit limits. Three sub-types: Basic Hospital, Basic Surgical, Basic Physician.',
                        'Major Medical — covers LARGE, CATASTROPHIC medical expenses. Has a deductible AND coinsurance (typically 80/20 split). HIGH benefit maximums. Picks up where basic leaves off.',
                        'Comprehensive Medical — COMBINES basic and major medical into ONE plan. Most common type today. Usually has a low deductible and high limits.',
                    ],
                },
                {
                    text: 'Key cost-sharing terms:',
                    sub: [
                        'Deductible — the amount YOU pay out of pocket BEFORE insurance kicks in. Higher deductible = lower premium.',
                        'Coinsurance — the PERCENTAGE split between you and the insurer after the deductible. Example: 80/20 means insurer pays 80%, you pay 20%.',
                        'Copayment (Copay) — a FLAT dollar amount you pay per visit or service (e.g., $30 for a doctor visit). NOT the same as coinsurance.',
                        'Out-of-Pocket Maximum — once your total cost-sharing hits this amount, the insurer pays 100% for the rest of the year.',
                        "Stop-Loss — the point where the insured's coinsurance obligation STOPS. Same concept as OOP max. Limits the insured's total exposure.",
                        'Corridor Deductible — a separate deductible between basic and major medical coverage. Only applies in some older plan designs.',
                    ],
                },
                {
                    text: 'Managed Care Plans:',
                    sub: [
                        'HMO (Health Maintenance Organization) — must use network providers. Requires a PCP (Primary Care Physician). Referral needed for specialists. LOWEST cost, LEAST flexibility. Emphasizes preventive care.',
                        'PPO (Preferred Provider Organization) — can use in-network (lower cost) or out-of-network (higher cost). NO referral needed for specialists. More flexibility than HMO.',
                        'POS (Point of Service) — HYBRID of HMO and PPO. Has a PCP like an HMO, but allows out-of-network like a PPO (at higher cost).',
                        'EPO (Exclusive Provider Organization) — like a PPO but NO out-of-network coverage (except emergencies). No referral needed.',
                    ],
                },
                { text: '⚠️ EXAM TIP: HMO = most restrictive, lowest cost, needs referrals. PPO = more flexible, no referrals. POS = hybrid. Know the differences — this is tested frequently.' },
            ],
        },
        {
            title: 'Disability Income Insurance',
            content: [
                { text: "Replaces a PORTION of your income (typically 60–70%) if you become disabled and can't work. It does NOT pay 100% to discourage malingering." },
                {
                    text: 'Disability definitions (from most to least favorable):',
                    sub: [
                        "Own-Occupation (Own-Occ) — you're disabled if you can't perform the duties of YOUR SPECIFIC job. Most favorable and most expensive. A surgeon who can't operate but could teach is disabled under own-occ.",
                        "Any-Occupation (Any-Occ) — you're disabled ONLY if you can't perform ANY job you're reasonably qualified for by education, training, or experience. Much stricter.",
                        'Split Definition — own-occupation for the FIRST 2 years, then switches to any-occupation for the remainder. Most common in individual policies.',
                        'Presumptive Disability — certain conditions (total blindness, loss of two limbs, loss of speech/hearing) are PRESUMED totally disabled regardless of ability to work. Benefits begin immediately, no elimination period.',
                    ],
                },
                {
                    text: 'Key terms:',
                    sub: [
                        'Elimination Period (Waiting Period) — days you must be disabled BEFORE benefits begin (common: 30, 60, 90 days). Longer elimination period = LOWER premium. Think of it like a deductible, but measured in time instead of money.',
                        'Benefit Period — how long benefits are paid once they start (common: 2 years, 5 years, to age 65, lifetime).',
                        'Residual/Partial Disability — pays a REDUCED benefit if you can work part-time or at reduced capacity. Benefit is proportional to income loss.',
                        'Recurrent Disability — if you return to work and become disabled again from the SAME cause, a new elimination period may or may not apply (depends on the recurrent disability provision).',
                        'Social Insurance Supplement — covers the gap between your disability policy and Social Security disability benefits.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Own-occupation = most favorable to insured. Any-occupation = most strict. The disability tax rule: YOU pay premiums = TAX-FREE benefits. EMPLOYER pays = TAXABLE benefits. This is tested on every exam.' },
            ],
        },
        {
            title: 'Supplemental Plans (What Bri Specializes In!)',
            content: [
                { text: "These FILL THE GAPS that primary insurance doesn't cover. They pay in ADDITION to regular health insurance — they don't replace it." },
                {
                    text: 'Types of supplemental insurance:',
                    sub: [
                        'Hospital Indemnity — pays a FIXED daily/weekly amount for each day you\'re hospitalized (e.g., $200/day). Benefit is paid regardless of actual hospital charges. Helps cover deductibles, copays, and non-medical expenses.',
                        'Critical Illness — pays a LUMP SUM if diagnosed with a covered critical illness (heart attack, stroke, cancer, organ transplant, kidney failure). Money can be used for ANYTHING — bills, treatment, mortgage, groceries.',
                        'Accident Insurance — pays benefits for injuries from ACCIDENTS (not illness). Covers: ER visits, fractures, dislocations, concussions, ambulance rides, follow-up visits. Very popular with active families.',
                        'Cancer Insurance — specifically covers cancer-related expenses: chemotherapy, radiation, hospital stays, experimental treatments.',
                        'Dental Insurance — covers preventive care (cleanings, x-rays), basic procedures (fillings, extractions), and major procedures (crowns, bridges). Usually has annual maximums.',
                        'Vision Insurance — covers eye exams, glasses, contact lenses. Typically annual benefits.',
                    ],
                },
                { text: 'These are INDEMNITY-based: they pay a SET dollar amount regardless of actual expenses. The insured receives cash directly and can use the money however they want. This is the key selling point.' },
                { text: '⚠️ EXAM TIP: Supplemental plans are NOT major medical. They pay a fixed amount directly to the insured, not to the provider. They supplement — they don\'t replace primary coverage.' },
            ],
        },
        {
            title: 'Long-Term Care (LTC) Insurance',
            content: [
                { text: 'Covers the cost of long-term care services that regular health insurance and Medicare DO NOT cover: nursing homes, assisted living facilities, adult day care, and home health care.' },
                {
                    text: 'Benefit triggers — you must meet ONE to qualify for benefits:',
                    sub: [
                        'Cannot perform 2 out of 6 Activities of Daily Living (ADLs): Bathing, Dressing, Eating, Toileting, Transferring (moving from bed to chair), Continence.',
                        'Cognitive impairment requiring SUBSTANTIAL supervision (e.g., Alzheimer\'s disease, dementia, severe brain injury).',
                    ],
                },
                {
                    text: 'Policy components:',
                    sub: [
                        'Elimination Period — typically 30–90 days before benefits start (acts like a waiting period/deductible).',
                        'Benefit Period — how long benefits are paid (common: 2 years, 3 years, 5 years, lifetime). Longer period = higher premium.',
                        'Daily/Monthly Benefit Amount — e.g., $150/day or $4,500/month. Determines the maximum the policy will pay.',
                        'Inflation Protection Rider — AUTOMATICALLY increases the daily benefit annually (typically 3-5% compound). Highly recommended for younger purchasers because care costs increase over time.',
                        'Waiver of Premium — premiums are waived once you start receiving LTC benefits.',
                        'Nonforfeiture Benefit — if you lapse the policy after paying premiums for many years, you still retain some reduced coverage.',
                    ],
                },
                {
                    text: 'Tax treatment:',
                    sub: [
                        'Tax-Qualified LTC premiums may be deductible as a medical expense (subject to age-based annual limits set by the IRS).',
                        'Benefits received from a tax-qualified LTC policy are generally TAX-FREE up to the IRS per diem limit.',
                        'Non-tax-qualified LTC premiums are NOT deductible.',
                    ],
                },
                { text: '⚠️ EXAM TIP: 2 of 6 ADLs = benefit trigger. Know all 6 ADLs: Bathing, Dressing, Eating, Toileting, Transferring, Continence. The exam will list them and ask you to identify them.' },
                { text: 'Partnership Programs — some states (including Georgia) have LTC partnership programs. If you buy a qualified partnership policy and exhaust its benefits, you can apply for Medicaid without spending down ALL your personal assets. Dollar-for-dollar or total asset protection.' },
            ],
        },
        {
            title: 'Medicare & Medicare Supplement (Medigap)',
            content: [
                {
                    text: 'Medicare — FEDERAL program for people 65+ (or under 65 with certain disabilities or End-Stage Renal Disease):',
                    sub: [
                        'Part A — HOSPITAL Insurance. Covers: inpatient hospital stays, skilled nursing facility care (limited), hospice care, some home health care. Premium-FREE for most people (if they or a spouse paid Medicare taxes for 40+ quarters).',
                        'Part B — MEDICAL Insurance. Covers: doctor visits, outpatient services, preventive care, durable medical equipment, ambulance services. Requires a MONTHLY PREMIUM (income-based). Standard deductible applies.',
                        'Part C — Medicare ADVANTAGE. Private insurance plans that include EVERYTHING in Parts A & B (and often Part D). May offer additional benefits (dental, vision, fitness). Must still pay Part B premium. Replaces Original Medicare.',
                        'Part D — PRESCRIPTION Drug Coverage. Provided by private insurance companies. Separate monthly premium. Has the "donut hole" (coverage gap) — though the ACA has been closing this gap.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Part A = hospitAl. Part B = doctor Bills. Part C = Choice (private plans). Part D = Drugs. Use the first letter as a memory aid.' },
                {
                    text: 'Medicare Supplement (Medigap):',
                    sub: [
                        'PRIVATE insurance that covers the "gaps" in ORIGINAL Medicare (deductibles, copays, coinsurance that Parts A & B don\'t pay).',
                        'Standardized plans labeled A through N. Plan F was the most popular but is no longer available to NEW Medicare enrollees (as of 2020). Plan G is now the most popular.',
                        'Must have BOTH Part A AND Part B to enroll in Medigap.',
                        'Medigap Open Enrollment Period — 6 months starting the month you turn 65 AND are enrolled in Part B. During this period, insurers CANNOT deny coverage, CANNOT charge more due to health conditions, and CANNOT impose waiting periods.',
                        'After the OEP, insurers CAN use medical underwriting and may deny coverage.',
                        "CANNOT be used with Medicare Advantage — it's one OR the other. Medigap works with Original Medicare ONLY.",
                    ],
                },
                { text: 'Medicaid — a STATE-run program (not federal like Medicare) for LOW-INCOME individuals and families. Jointly funded by federal and state governments. Eligibility varies by state.' },
                { text: '⚠️ EXAM TIP: Medicare = federal, for 65+. Medicaid = state, for low-income. Do NOT confuse them. The exam loves asking which is which.' },
            ],
        },
        {
            title: 'Federal Health Laws',
            content: [
                {
                    text: 'COBRA (Consolidated Omnibus Budget Reconciliation Act):',
                    sub: [
                        'Applies to employers with 20+ EMPLOYEES.',
                        'Allows terminated employees (and dependents) to CONTINUE their group health coverage temporarily after a qualifying event.',
                        'Qualifying Events: termination (not gross misconduct), reduced hours, divorce, death of employee, dependent aging out.',
                        'Duration: 18 months for employee termination/reduced hours. 36 months for dependents (divorce, death, Medicare eligibility of employee).',
                        'Cost: the individual pays the FULL premium (up to 102% — employee share + employer share + 2% admin fee). This is often much more expensive than they were paying.',
                        'Election Period: 60 days to elect COBRA after notification.',
                    ],
                },
                { text: '⚠️ EXAM TIP: COBRA = 20+ employees. 18 months for the employee. 36 months for dependents. 102% premium. These numbers are tested every time.' },
                {
                    text: 'HIPAA (Health Insurance Portability and Accountability Act):',
                    sub: [
                        'Portability — provides credit for PRIOR continuous coverage when switching group plans. Reduces waiting periods for pre-existing conditions.',
                        'Privacy — protects the confidentiality of Protected Health Information (PHI). Requires authorization for sharing medical records.',
                        'Pre-existing conditions — limited exclusion period to 12 months (18 months for late enrollees). Reduced day-for-day by prior creditable coverage.',
                        'Special Enrollment Rights — allows enrollment outside open enrollment if you experience a qualifying life event (marriage, birth, loss of other coverage).',
                    ],
                },
                {
                    text: 'ACA (Affordable Care Act / "Obamacare") essentials:',
                    sub: [
                        'Guaranteed Issue — insurers CANNOT deny coverage for pre-existing conditions (individual or group market).',
                        "Dependent Coverage — children can stay on parents' plan until AGE 26 (regardless of student status, marital status, or financial dependency).",
                        '10 Essential Health Benefits must be covered: ambulatory/outpatient, emergency, hospitalization, maternity/newborn, mental health/substance abuse, prescription drugs, rehabilitative, laboratory, preventive/wellness, pediatric (including dental/vision).',
                        'No Annual or Lifetime Dollar Limits on essential health benefits.',
                        'Community Rating — premiums can only vary by: age (3:1 ratio), tobacco use (1.5:1), geography, and family size. NOT by health status or gender.',
                        'Metal Tiers — Bronze (60% AV), Silver (70% AV), Gold (80% AV), Platinum (90% AV). AV = Actuarial Value = the percentage of average health costs the plan covers.',
                    ],
                },
                { text: '⚠️ EXAM TIP: ACA = no pre-existing condition exclusions + kids to 26 + 10 essential benefits. These are the big three ACA rules the exam tests.' },
            ],
        },
        {
            title: 'Health Policy Provisions',
            content: [
                {
                    text: 'MANDATORY Provisions (required by law in ALL individual A&H policies) — memorize these:',
                    sub: [
                        'Entire Contract — policy + application = entire contract. Nothing else can change it.',
                        "Time Limit on Certain Defenses — after 3 YEARS, insurer can't void the policy for misstatements (except FRAUD). Similar to life insurance's 2-year incontestability, but it's 3 years for health.",
                        'Grace Period — 7 days (weekly premium), 10 days (monthly), 31 days (all other modes). Coverage stays in force during the grace period.',
                        'Reinstatement — if accepted, accident coverage is IMMEDIATE; sickness coverage has a 10-DAY waiting period after reinstatement.',
                        'Notice of Claim — insured must notify insurer within 20 DAYS of a loss.',
                        'Claim Forms — insurer must provide claim forms within 15 DAYS of receiving notice of claim. If they don\'t, the insured can file proof of loss in any reasonable format.',
                        'Proof of Loss — insured must submit written proof within 90 DAYS of the loss.',
                        'Payment of Claims — benefits must be paid IMMEDIATELY upon receiving satisfactory proof of loss. Periodic income benefits must be paid at least MONTHLY.',
                        'Legal Actions — insured must wait at least 60 DAYS after proof of loss to FILE SUIT, but no longer than 3 YEARS.',
                        'Physical Exam & Autopsy — insurer has the right to examine the insured (at their expense) and perform an autopsy if not prohibited by law.',
                        'Change of Beneficiary — the policyholder may change the beneficiary at any time (unless irrevocable).',
                    ],
                },
                { text: '⚠️ EXAM TIP: Health grace period = 7/10/31 (weekly/monthly/other). Life grace period = always 30-31 days. Health "incontestability" = 3 years. Life incontestability = 2 years. These differences are heavily tested.' },
                {
                    text: 'Renewability types (from BEST to WORST for the insured):',
                    sub: [
                        "Noncancellable — insurer can't cancel AND can't raise premiums. BEST for insured. Premium locked in.",
                        "Guaranteed Renewable — insurer can't cancel but CAN raise premiums for the ENTIRE CLASS (not individually). Second-best.",
                        'Conditionally Renewable — insurer can refuse to renew for specific STATED conditions (e.g., reaching retirement age).',
                        'Optionally Renewable — insurer can refuse to renew on ANY premium due date (but not mid-term).',
                        'Cancellable — insurer can cancel at ANY TIME with written notice. WORST for insured.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Noncancellable = best. Cancellable = worst. The exam asks "which is most favorable to the insured?" Answer: Noncancellable.' },
            ],
        },
    ],
};

/**
 * 01-generalConcepts.ts
 * Section 1: General Insurance Concepts
 */

import type { StudySection } from '../types';

export const section01: StudySection = {
    id: 'general-concepts',
    number: '01',
    title: 'General Insurance Concepts',
    icon: '🏛️',
    description: 'The foundational principles that everything else builds on. Master these first.',
    topics: [
        {
            title: 'What Is Risk?',
            content: [
                { text: 'Risk is the uncertainty or possibility of a financial loss. The entire insurance industry exists to manage risk.' },
                {
                    text: 'Types of Risk:',
                    sub: [
                        'Pure Risk — only a chance of loss or no loss (insurable). Example: house fire, car accident, death.',
                        'Speculative Risk — chance of loss, gain, or breaking even (NOT insurable). Example: stock market, gambling, starting a business.',
                        'Static Risk — present even in an unchanging economy. Example: lightning strike, theft.',
                        'Dynamic Risk — caused by changes in the economy. Example: inflation, shifting consumer preferences.',
                        'Fundamental Risk — affects large groups/society. Example: hurricanes, recessions, pandemics.',
                        'Particular Risk — affects specific individuals. Example: car theft, house fire.',
                        'Objective Risk — measurable, calculated statistically (e.g., probability of death at age 40).',
                        'Subjective Risk — based on personal perception or uncertainty (not measurable).',
                    ],
                },
                { text: '⚠️ EXAM TIP: Only PURE risks are insurable. If the question describes a chance of profit, it is speculative and NOT insurable.' },
                {
                    text: 'Types of Hazards (factors that increase the chance of a loss):',
                    sub: [
                        'Physical Hazard — a tangible condition that increases risk. Example: icy roads, faulty wiring, stored gasoline.',
                        'Moral Hazard — dishonesty or character flaws that increase risk. Example: faking an injury, arson for insurance money.',
                        'Morale Hazard — carelessness or indifference because insurance exists. Example: leaving doors unlocked because "insurance will cover it."',
                        'Legal Hazard — characteristics of the legal system that increase risk. Example: large jury awards, frivolous lawsuits.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Moral hazard = intentional dishonesty. Morale hazard = carelessness/indifference. The exam tests this distinction.' },
                { text: 'Peril — the actual cause of loss (fire, windstorm, theft, death). A hazard INCREASES the chance; a peril IS the cause.' },
            ],
        },
        {
            title: 'Risk Management Techniques',
            content: [
                {
                    text: 'The STARR method — five ways to handle risk:',
                    sub: [
                        'Sharing — spreading risk among a group (the core idea behind insurance pooling).',
                        'Transfer — shifting risk to another party, typically an insurance company. Insurance is the most common form of risk transfer.',
                        'Avoidance — eliminating the risk entirely (e.g., not owning a car eliminates auto risk, not flying eliminates plane crash risk).',
                        'Reduction — minimizing the severity or frequency (e.g., smoke detectors, seatbelts, alarm systems, healthy lifestyle).',
                        'Retention — assuming the risk yourself (e.g., high deductibles, self-insurance, setting aside emergency funds).',
                    ],
                },
                { text: '⚠️ EXAM TIP: Insurance = risk TRANSFER. Self-insurance = risk RETENTION. The exam loves asking which technique applies.' },
            ],
        },
        {
            title: 'How Insurance Works',
            content: [
                { text: 'Insurance = pooling of risks. Many people pay premiums into a pool, and the few who suffer losses are paid from that pool. The risk is SHARED across the group.' },
                { text: 'Law of Large Numbers — the more exposure units (people) in the pool, the more accurately insurers can predict losses. This is the statistical foundation of insurance pricing.' },
                {
                    text: 'Elements of an Insurable Risk (ALL must be met):',
                    sub: [
                        'Loss must be due to CHANCE (accidental, not intentional — you can\'t insure something you plan to do).',
                        'Loss must be DEFINITE and MEASURABLE (specific time, place, cause, and amount).',
                        'Loss must be STATISTICALLY PREDICTABLE (insurers must be able to estimate probable losses).',
                        'Loss must NOT be CATASTROPHIC to the insurer (one event shouldn\'t bankrupt the company).',
                        'LARGE NUMBER of similar exposure units must exist (enough policyholders to spread the risk).',
                        'Premium must be ECONOMICALLY FEASIBLE (affordable enough that people will actually buy the coverage).',
                    ],
                },
                { text: '⚠️ EXAM TIP: "The loss must be catastrophic" is a WRONG answer! The loss must NOT be catastrophic to the insurer. Watch for this reverse trick.' },
                { text: 'Adverse Selection — the tendency for people who are most likely to have a loss to be the ones who seek insurance. Underwriting exists to combat adverse selection.' },
            ],
        },
        {
            title: 'Insurable Interest',
            content: [
                { text: 'You must stand to suffer a FINANCIAL LOSS if the insured event occurs. Without insurable interest, a policy is void — it becomes a gambling contract.' },
                {
                    text: 'When insurable interest must exist:',
                    sub: [
                        'Life Insurance — at the TIME OF APPLICATION only (not at death). This is the #1 most tested rule.',
                        'Health Insurance — at the TIME OF APPLICATION.',
                        'Property/Casualty (not on this exam) — at the time of LOSS.',
                    ],
                },
                { text: 'You ALWAYS have insurable interest in your own life — unlimited amount.' },
                {
                    text: 'Who has insurable interest:',
                    sub: [
                        'Spouses — on each other (automatic).',
                        'Parents — on minor children (automatic).',
                        'Business partners — on each other (proven financial dependency).',
                        'Creditors — on debtors (up to the amount of the debt).',
                        'Employers — on key employees (proven financial impact).',
                        'Ex-spouses — may still have insurable interest if financial obligations continue (alimony, child support).',
                    ],
                },
                { text: '⚠️ EXAM TIP: The exam loves trick questions about insurable interest at "time of death" — that is WRONG for life insurance. It only needs to exist at APPLICATION.' },
            ],
        },
        {
            title: 'Key Legal Principles',
            content: [
                { text: 'Utmost Good Faith — both the insurer and insured must deal honestly. Insurance contracts are built on trust and full disclosure.' },
                { text: 'Representations — statements made on the application BELIEVED to be true. If materially false, the policy can be voided. Most application answers are representations.' },
                { text: 'Warranties — statements GUARANTEED to be true in every detail. More strict than representations. Breach of warranty can void a policy even if the false statement is immaterial. (Rarely used in life/health.)' },
                { text: 'Concealment — intentional failure to disclose a KNOWN material fact. Silence about something you should have disclosed. Can void the policy.' },
                { text: 'Material Misrepresentation — a false statement that, if the truth were known, would have changed the insurer\'s underwriting decision. Can void the contract within the contestable period.' },
                { text: 'Fraud — intentional deception for personal gain. Fraud can void a policy even AFTER the incontestability period.' },
                { text: 'Indemnity — the principle that insurance should restore the insured to the same financial position as before the loss — no better, no worse. Prevents profiting from insurance.' },
                { text: 'Subrogation — after paying a claim, the insurer "steps into the shoes" of the insured and can seek reimbursement from the responsible third party.' },
                { text: '⚠️ EXAM TIP: Representation = believed true. Warranty = guaranteed true. Concealment = failure to disclose. Know the differences!' },
            ],
        },
        {
            title: 'Types of Insurance Companies',
            content: [
                {
                    text: 'Ownership structures:',
                    sub: [
                        'Stock Company — owned by STOCKHOLDERS (shareholders). Profits go to shareholders as dividends. Typically issues non-participating policies.',
                        'Mutual Company — owned by POLICYHOLDERS. Profits returned to policyholders as dividends. Issues participating policies.',
                        'Fraternal Benefit Society — nonprofit organization (like the Knights of Columbus). Members share a common bond. Provides insurance to members only.',
                        'Reciprocal Exchange (Inter-Insurance Exchange) — unincorporated group of individuals who insure each other. Managed by an Attorney-in-Fact.',
                        'Lloyd\'s of London — NOT an insurance company. It\'s a marketplace where individual underwriters (syndicates) accept risk.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Stock companies = owned by stockholders. Mutual companies = owned by policyholders. The exam tests this distinction every time.' },
                {
                    text: 'Classification by where they are domiciled:',
                    sub: [
                        'Domestic — incorporated in THIS state (Georgia).',
                        'Foreign — incorporated in ANOTHER U.S. state.',
                        'Alien — incorporated in a FOREIGN COUNTRY.',
                    ],
                },
                { text: 'All three types must be licensed (admitted) to sell insurance in Georgia.' },
            ],
        },
        {
            title: 'The Insurance Process & Distribution',
            content: [
                {
                    text: 'Marketing/Distribution Systems:',
                    sub: [
                        'Captive (Exclusive) Agent — represents ONE insurance company only. Has an exclusive contract.',
                        'Independent Agent — represents MULTIPLE insurance companies. Owns the policy expirations (the book of business belongs to the agent).',
                        'Broker — represents the INSURED (client), not the company. Shops among multiple insurers for the best deal.',
                        'Direct Writer — the insurance company sells directly to the public (no agents). Example: online insurance portals.',
                    ],
                },
                {
                    text: 'Underwriting basics:',
                    sub: [
                        'Underwriting is the process of evaluating and classifying risk to determine if coverage should be offered and at what price.',
                        'Preferred Risk — better than average health/risk. Gets lower premiums.',
                        'Standard Risk — average risk. Pays standard premiums.',
                        'Substandard (Rated) Risk — higher than average risk. Pays higher premiums or gets modified coverage.',
                        'Declined — risk is too high. Application rejected.',
                    ],
                },
                { text: 'Reinsurance — when an insurer transfers part of its risk to ANOTHER insurance company. The original company is the "ceding" company; the one accepting risk is the "reinsurer." This is how insurers protect themselves from catastrophic losses.' },
                { text: '⚠️ EXAM TIP: An agent represents the INSURER. A broker represents the INSURED. This legal distinction is heavily tested.' },
            ],
        },
    ],
};

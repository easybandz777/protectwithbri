/**
 * 02-contractLaw.ts
 * Section 2: Insurance Contract Law
 */

import type { StudySection } from '../types';

export const section02: StudySection = {
    id: 'contract-law',
    number: '02',
    title: 'Insurance Contract Law',
    icon: '📜',
    description: 'How insurance policies work as legal contracts. Heavily tested.',
    topics: [
        {
            title: 'Elements of a Valid Contract',
            content: [
                {
                    text: 'Four requirements (remember: CALC):',
                    sub: [
                        "Consideration — the exchange of value. Applicant gives: premium payment + truthful statements on the application. Insurer gives: the promise to pay covered claims.",
                        "Agreement (Offer & Acceptance) — the applicant makes the offer by submitting the application (usually with the first premium). The insurer accepts by issuing the policy.",
                        'Legal Purpose — the contract must be for a lawful purpose. Cannot insure illegal activities.',
                        'Competent Parties (Legal Capacity) — both sides must be legally capable. Persons must be of legal age, mentally competent, and not under the influence of drugs/alcohol. The insurer must be licensed in the state.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Minors, intoxicated persons, and mentally incompetent individuals CANNOT enter into binding contracts. A contract with an incompetent party is VOIDABLE (not automatically void).' },
                {
                    text: 'Void vs. Voidable:',
                    sub: [
                        'Void Contract — has no legal effect from the beginning. As if it never existed (e.g., insuring an illegal activity).',
                        'Voidable Contract — valid and enforceable, but one party has the right to void it (e.g., a minor\'s contract, or a contract obtained through fraud).',
                    ],
                },
            ],
        },
        {
            title: 'Characteristics of Insurance Contracts',
            content: [
                {
                    text: 'Know these five characteristics cold — (remember AAUCP):',
                    sub: [
                        'Adhesion — the insurer writes the contract; the insured "adheres" to it (take it or leave it). Because the insured has NO bargaining power, any AMBIGUITY is interpreted in FAVOR of the insured.',
                        "Aleatory — the dollar amounts exchanged are UNEQUAL and depend on chance. You might pay $500 in premiums and get a $500,000 death benefit. Or pay for 40 years and never file a claim.",
                        'Unilateral — only ONE party (the insurer) makes a legally enforceable promise. The insured can stop paying premiums at any time — no legal consequence (the policy just lapses).',
                        "Conditional — benefits are paid only when certain CONDITIONS are met (e.g., the insured dies, a covered illness occurs, premiums are paid). If conditions aren't met, no payout.",
                        "Personal — life/health insurance covers the PERSON, not a thing. Policies cannot be assigned or transferred to another person without the insurer's consent (unlike property insurance).",
                    ],
                },
                { text: '⚠️ EXAM TIP: "Insurance contracts are contracts of adhesion" is a classic stem. The answer relates to ambiguity being interpreted in favor of the INSURED.' },
            ],
        },
        {
            title: 'Parts of the Insurance Contract',
            content: [
                {
                    text: 'Every insurance contract has four main parts:',
                    sub: [
                        "Declarations (Dec Page) — the \"who, what, when\" page. Contains: insured's name, policy number, effective date, coverage amount, premium, beneficiary.",
                        'Insuring Agreement — the HEART of the contract. Describes what the insurer promises to cover. Two approaches: Named Perils (lists specific covered events) or Open Perils/All Risk (covers everything EXCEPT what\'s excluded).',
                        'Conditions — the rules both parties must follow: premium payment, claim filing procedures, cooperation requirements, cancellation provisions.',
                        'Exclusions — what is NOT covered. Common life exclusions: war, aviation (non-commercial), suicide (first 2 years). Common health exclusions: pre-existing conditions (limited by ACA), cosmetic surgery, self-inflicted injuries.',
                    ],
                },
                { text: 'Riders/Endorsements — additional provisions that MODIFY the original policy. They can add, delete, or change coverage. Riders are attached to and become part of the contract.' },
                { text: 'Application — becomes part of the entire contract once attached to the policy. The Entire Contract Clause states that the policy + attached application = the WHOLE contract. No outside documents can change it.' },
            ],
        },
        {
            title: 'Agent Authority',
            content: [
                {
                    text: 'Three types of authority — know all three:',
                    sub: [
                        "Express Authority — specifically STATED in the agent's written contract with the insurer. Example: 'You are authorized to sell life and health insurance in Georgia.'",
                        "Implied Authority — NOT written, but REASONABLY ASSUMED to be necessary to conduct business. Example: setting appointments, ordering business cards, explaining policy features.",
                        "Apparent Authority — when the insurer CREATES THE IMPRESSION that the agent has authority, even if they don't. If a reasonable person would believe the agent is authorized, the insurer can be held liable for the agent's actions.",
                    ],
                },
                { text: '⚠️ EXAM TIP: Apparent authority is the trickiest concept. Even if the agent had NO actual authority, if the insurance company made it APPEAR that way (business cards, office space, etc.), the company is liable.' },
                { text: 'Agent vs. Broker — An AGENT represents the INSURER (company). A BROKER represents the INSURED (client). Agents have a contract with insurers. Brokers shop the market. This is a LEGAL distinction, not a preference.' },
                {
                    text: 'Agency Law concepts:',
                    sub: [
                        'Principal — the insurance company (employs the agent).',
                        'Agent — authorized representative of the principal.',
                        'Fiduciary — a person in a position of trust. Agents have a fiduciary duty to handle premiums and act in good faith.',
                        'Waiver — voluntary giving up of a KNOWN right. Example: insurer knowingly accepts a late premium.',
                        'Estoppel — prevents a party from asserting a right they previously waived. If the insurer waived a right, they are "estopped" from later enforcing it.',
                    ],
                },
            ],
        },
        {
            title: 'The Application & Policy Delivery',
            content: [
                {
                    text: 'The application process:',
                    sub: [
                        'Part 1 — General information: name, address, date of birth, occupation, beneficiary.',
                        'Part 2 — Medical information: health history, current conditions, medications, family medical history.',
                        'Part 3 — Agent\'s report: agent\'s personal observations about the applicant (appearance, behavior, etc.).',
                    ],
                },
                {
                    text: 'Conditional vs. Unconditional Receipt:',
                    sub: [
                        'Conditional Receipt — if the applicant pays the first premium with the application AND is later found to be insurable, coverage dates BACK to the date of application (or medical exam, whichever is later).',
                        'Binding Receipt (Unconditional) — provides IMMEDIATE temporary coverage from the date the premium is paid, regardless of insurability. Less common.',
                        'Inspection Report Receipt — no coverage until the policy is issued and delivered.',
                    ],
                },
                { text: 'Policy Delivery — the agent delivers the policy and collects any remaining premium. The insured must be in the same health condition as when the application was submitted (Statement of Good Health).' },
                { text: 'Free-Look Period — begins at policy DELIVERY (not application). In Georgia: 10 days to return the policy for a full refund, no questions asked.' },
                { text: '⚠️ EXAM TIP: The conditional receipt is the most commonly tested receipt type. Key point: coverage is BACKDATED to the application date IF the person is insurable.' },
            ],
        },
        {
            title: 'Legal Concepts & Doctrines',
            content: [
                { text: 'Parol Evidence Rule — once a contract is put into writing, oral statements made before or during negotiations CANNOT be used to change the written contract. The written policy is final.' },
                { text: 'Reasonable Expectations Doctrine — the policyholder is entitled to coverage they would REASONABLY EXPECT based on the policy language, even if a technical reading might exclude it.' },
                {
                    text: 'Third-Party Rights:',
                    sub: [
                        'Third-Party Beneficiary — a person who benefits from a contract they are NOT a party to (e.g., the beneficiary of a life insurance policy).',
                        'Assignment — transfer of policy rights to another party. Absolute Assignment = permanent transfer. Collateral Assignment = temporary transfer as loan security.',
                    ],
                },
                { text: '⚠️ EXAM TIP: The Parol Evidence Rule means an agent\'s verbal promises CANNOT override what\'s written in the policy. This protects both parties.' },
            ],
        },
    ],
};

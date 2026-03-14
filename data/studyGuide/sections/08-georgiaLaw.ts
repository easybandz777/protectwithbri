/**
 * 08-georgiaLaw.ts
 * Section 8: Georgia State Law & Regulations
 */

import type { StudySection } from '../types';

export const section08: StudySection = {
    id: 'georgia-law',
    number: '08',
    title: 'Georgia State Law & Regulations',
    icon: '⚖️',
    description: 'Scored SEPARATELY from national content. You must pass this section on its own with a 70%.',
    topics: [
        {
            title: 'Georgia Insurance Regulatory Authority',
            content: [
                { text: "Georgia's insurance industry is regulated by the Office of Insurance and Safety Fire Commissioner (OCI), a division under the Georgia Department of Insurance." },
                { text: 'The Commissioner of Insurance is an ELECTED official who serves a 4-YEAR term. (Not appointed — elected by the public.)' },
                {
                    text: "Commissioner's powers and duties:",
                    sub: [
                        'License and regulate insurance companies and producers (agents/brokers).',
                        'Examine the financial condition of insurance companies doing business in Georgia.',
                        'Approve or disapprove policy forms and premium rates.',
                        'Investigate complaints from consumers and producers.',
                        'Issue Cease and Desist orders to stop violations.',
                        'Impose fines, penalties, and sanctions.',
                        'Suspend or revoke licenses.',
                        'Hold administrative hearings.',
                        'Approve or deny company mergers and acquisitions.',
                    ],
                },
                { text: 'Georgia Insurance Code — Title 33 of the Official Code of Georgia Annotated (O.C.G.A. Title 33).' },
                { text: '⚠️ EXAM TIP: The Commissioner is ELECTED (4-year term). Many students assume appointed. Also remember: the Commissioner regulates the entire industry — companies AND agents.' },
            ],
        },
        {
            title: 'Producer Licensing Requirements',
            content: [
                {
                    text: 'To sell insurance in Georgia, you must meet ALL of the following:',
                    sub: [
                        'Be at least 18 years old.',
                        'Complete pre-licensing education: 40 hours for combined Life & Health, OR 20 hours per single line (Life OR Health separately).',
                        'Pass the state licensing examination administered by Pearson VUE.',
                        'Submit fingerprints for a criminal background check (through IdentoGO).',
                        'Submit a notarized Citizenship/Legal Presence Affidavit (Form GID-276-EN).',
                        'Apply for the license through NIPR (National Insurance Producer Registry) or Sircon.',
                    ],
                },
                {
                    text: 'License details:',
                    sub: [
                        'Lines of Authority: Life, Accident & Sickness (Health), or combined Life & Health.',
                        'License validity: 2 YEARS from date of issue.',
                        'Must be APPOINTED by at least one insurance company within the first licensing period. Appointment = formal authorization from an insurer to sell their products.',
                        'Temporary License — may be issued for up to 180 days in certain circumstances (death of a licensed agent, military deployment, court-appointed situations). Limited scope.',
                        'Nonresident Producer — licensed in their home state and can apply for a Georgia nonresident license. Must comply with Georgia laws when selling in Georgia.',
                    ],
                },
                {
                    text: 'Grounds for license DENIAL, SUSPENSION, or REVOCATION:',
                    sub: [
                        'Felony conviction (or conviction of a crime involving moral turpitude).',
                        'Providing false, incomplete, or misleading information on the application.',
                        'Misappropriation, conversion, or theft of premium funds.',
                        'Violation of insurance laws, regulations, or Commissioner orders.',
                        'Fraud, dishonesty, or incompetence in conducting insurance business.',
                        'Having a license revoked, suspended, or refused in ANY other state.',
                        'Using fraudulent, coercive, or dishonest practices.',
                        'Failure to comply with an administrative or court order regarding insurance.',
                        'Cheating on the licensing exam.',
                    ],
                },
                { text: '⚠️ EXAM TIP: A license can be revoked for actions in OTHER states, not just Georgia. Also remember: 18 years old, 40 hours education, 2-year license. These numbers are frequently tested.' },
            ],
        },
        {
            title: 'Unfair Trade Practices',
            content: [
                { text: 'Georgia follows the NAIC (National Association of Insurance Commissioners) Model Unfair Trade Practices Act. KNOW EVERY ONE of these prohibited practices:' },
                {
                    text: 'Prohibited practices (memorize all):',
                    sub: [
                        'Misrepresentation — making FALSE or MISLEADING statements about a policy\'s terms, benefits, dividends, or financial condition of the insurer.',
                        'False Advertising — any advertisement (print, digital, broadcast) that misleads the public about insurance products or the insurer.',
                        'Defamation — making intentionally FALSE statements about another insurer or their products to harm their reputation and business. Also called "disparagement."',
                        'Boycott, Coercion, & Intimidation — using pressure or threats to force someone to buy (or NOT buy) from a specific company. Restricting free market competition.',
                        "Unfair Discrimination — treating similarly situated individuals DIFFERENTLY in rates, benefits, or availability without actuarial justification. Note: using legitimate factors like age, sex, occupation, and health is NOT discrimination — that's proper underwriting.",
                        'Rebating — giving the buyer anything of VALUE (cash, gifts, gift cards, merchandise) not stated in the policy to INDUCE a purchase. ILLEGAL in Georgia. Exception: licensed agents may share commissions with OTHER licensed agents.',
                        'Twisting — using MISREPRESENTATION to convince a policyholder to LAPSE, SURRENDER, or REPLACE their existing policy — usually to benefit the agent\'s commission, not the client\'s interests. Often involves switching to a DIFFERENT company.',
                        'Churning — EXCESSIVE replacement of policies within the SAME company to generate commissions for the agent. Similar to twisting but within one company.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Twisting = TRICKING into switching (misrepresentation + replacement, often different company). Churning = CHURNING out policies at same company (excessive replacement). Rebating = giving GIFTS to induce sales. These three are the most tested unfair practices.' },
                {
                    text: 'Additional prohibited activities:',
                    sub: [
                        'Controlled Business — an agent who writes coverage PRIMARILY on themselves, family, or business associates. If controlled business is disproportionate, it suggests the agent obtained the license only for personal discounts.',
                        'Unfair Claims Practices — denying claims without reasonable investigation, failing to promptly communicate claim decisions, not attempting fair settlement when liability is clear.',
                        'Sliding — including coverages or products the consumer did NOT request and charging for them without clear disclosure.',
                    ],
                },
                {
                    text: 'Penalties for unfair trade practices:',
                    sub: [
                        'Fines: up to $1,000 per violation, not to exceed $10,000 total.',
                        'License suspension or revocation.',
                        'Criminal prosecution for willful and knowing violations.',
                        'Cease and Desist orders.',
                        'Restitution to consumers.',
                    ],
                },
            ],
        },
        {
            title: 'Replacement Regulations',
            content: [
                { text: 'When a new policy REPLACES an existing one, special consumer protection rules apply. Georgia has specific regulations to prevent churning and twisting:' },
                {
                    text: 'Agent duties when replacement is involved:',
                    sub: [
                        'Must ASK the applicant whether they have any existing life or health insurance in force.',
                        'If replacement is indicated, must provide a REPLACEMENT NOTICE to the applicant — a written disclosure explaining the pros and cons of replacing existing coverage.',
                        'Must provide a POLICY COMPARISON statement showing the differences between the old and new policies.',
                        'Must NOTIFY the existing insurer that a replacement is taking place.',
                        'Must maintain records of the replacement for at least 5 years.',
                        'Must list ALL existing policies to be replaced on the application.',
                    ],
                },
                { text: 'The existing insurer has the right to CONSERVE the policy — they can contact the policyholder and provide information about why keeping the existing policy might be better.' },
                { text: '⚠️ EXAM TIP: Replacement regulations exist to protect consumers from twisting. If the question mentions replacement, think: replacement notice + comparison + notify existing insurer.' },
            ],
        },
        {
            title: 'Georgia Life & Health Insurance Guaranty Association (GLHIGA)',
            content: [
                { text: 'Protects Georgia policyholders if a MEMBER insurance company becomes INSOLVENT (goes bankrupt). Funded by assessments on surviving member companies.' },
                {
                    text: 'Maximum coverage limits:',
                    sub: [
                        'Life insurance death benefits: up to $300,000 per life.',
                        'Cash surrender value: up to $100,000.',
                        'Health insurance benefits: up to $500,000.',
                        'Annuity present value: up to $250,000.',
                    ],
                },
                {
                    text: 'CRITICAL restrictions:',
                    sub: [
                        'Agents are PROHIBITED from using the guaranty association as a SELLING POINT. You CANNOT mention it to induce a sale.',
                        'Cannot reference the guaranty association in any advertising or marketing materials.',
                        'Violation of this restriction is an unfair trade practice.',
                    ],
                },
                { text: '⚠️ EXAM TIP: Memorize the GLHIGA limits: $300K life, $100K cash value, $500K health, $250K annuity. And NEVER use the guaranty association as a selling point — this is a specific exam question.' },
            ],
        },
        {
            title: 'Continuing Education & Maintenance',
            content: [
                {
                    text: 'Continuing Education (CE):',
                    sub: [
                        '24 HOURS every 2-year license renewal period.',
                        'Must include 3 HOURS of ETHICS (included in the 24 total, not in addition to).',
                        'Must be completed BEFORE the license expiration date — no grace period.',
                        'CE is NOT required during the FIRST license period (initial licensure through first renewal).',
                        'CE courses must be approved by the Georgia Office of Insurance Commissioner.',
                    ],
                },
                { text: '⚠️ EXAM TIP: 24 hours CE every 2 years, including 3 hours ethics. No CE required for the first license period. These are guaranteed exam questions.' },
                {
                    text: 'Other important Georgia-specific rules:',
                    sub: [
                        'Free-Look Period — 10 DAYS for life insurance and A&H policies after DELIVERY. Policyholder can return the policy for a full refund during this period, no questions asked, no penalties.',
                        'Senior Protections — enhanced SUITABILITY requirements when selling annuities to seniors (age 65+). Agent must have reasonable grounds to believe the product is suitable based on the senior\'s financial situation, needs, and objectives.',
                        'Advertising — ALL advertising must be truthful, not misleading, and must clearly IDENTIFY the insurer. Misleading advertising is a violation of the Unfair Trade Practices Act.',
                        'Premium Trust Accounts — premiums collected by agents are held in a FIDUCIARY capacity. Must be deposited promptly into a premium trust account. Mixing personal funds with premium funds (commingling) is illegal.',
                        'Reporting Changes — producers must report changes of address, criminal charges, or administrative actions to the Commissioner within 30 days.',
                        'Appointment Termination — when an insurer terminates an agent\'s appointment, it must notify the Commissioner within 30 days. If the termination was for cause (fraud, dishonesty), the insurer must provide specific details.',
                    ],
                },
            ],
        },
    ],
};

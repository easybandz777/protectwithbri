/**
 * examTraps.ts
 * Commonly missed questions and tricky distinctions on the Georgia exam.
 */

import type { ExamTrap } from './types';

export const EXAM_TRAPS: ExamTrap[] = [
    {
        id: 'trap-1',
        title: 'Twisting vs. Churning',
        trap: 'Many people confuse these two. Both involve replacing policies, but they are DIFFERENT.',
        correct: 'Twisting = using MISREPRESENTATION to get someone to replace a policy (often switching companies). Churning = EXCESSIVE replacement within the SAME company to earn commissions.',
        tip: 'Think: Twisting = Tricking into switching. Churning = Churning through the same company.',
    },
    {
        id: 'trap-2',
        title: 'Insurable Interest Timing',
        trap: 'The exam will try to trick you with "at the time of death" or "at the time of claim."',
        correct: 'For LIFE insurance, insurable interest must exist at the TIME OF APPLICATION — not at death. For PROPERTY insurance (not on this exam), it must exist at the time of loss.',
        tip: 'Life = at APPLICATION. Property = at LOSS. This is one of the most frequently tested questions.',
    },
    {
        id: 'trap-3',
        title: 'IUL vs. Variable Life — Securities',
        trap: 'Both involve market-linked returns. Are they both securities?',
        correct: "Variable Life IS a security (SEC/FINRA regulated, requires securities license). IUL is NOT a security — it only LINKS to an index, it doesn't directly invest in the market.",
        tip: 'Variable = separate accounts = security = need Series 6/7. IUL = index-linked but NOT a security.',
    },
    {
        id: 'trap-4',
        title: 'Annuity → Life Insurance Exchange',
        trap: 'The exam may offer "annuity exchanged for life insurance" as a valid 1035 exchange. It is NOT.',
        correct: 'You can exchange: Life→Life, Life→Annuity, Annuity→Annuity. You CANNOT go from Annuity→Life Insurance.',
        tip: "Think of it as a one-way street downhill. Life can go to annuity, but annuity cannot go back to life.",
    },
    {
        id: 'trap-5',
        title: 'Grace Period — Life vs. Health',
        trap: 'Life and health insurance have DIFFERENT grace periods.',
        correct: 'Life insurance: always 30-31 days. Health insurance: 7 days (weekly premium), 10 days (monthly), 31 days (all other modes).',
        tip: 'If the question says "life insurance," answer 30/31 days. If "health insurance," you need to know the premium mode.',
    },
    {
        id: 'trap-6',
        title: 'Unilateral vs. Bilateral',
        trap: 'Some questions imply both parties have obligations.',
        correct: "Insurance is UNILATERAL — only the insurer makes a legally enforceable promise. The insured can stop paying premiums anytime without legal penalty (the policy just lapses).",
        tip: 'The insured is NOT legally required to pay premiums. They CHOOSE to pay to keep coverage in force.',
    },
    {
        id: 'trap-7',
        title: 'Who Does the Agent Represent?',
        trap: 'You might feel like you represent the client, but legally...',
        correct: 'An AGENT represents the INSURER (company). A BROKER represents the INSURED (client). Agents have a contract with one or more insurers. Brokers shop the market for the client.',
        tip: 'Agent = company. Broker = customer. This is a legal distinction, not a philosophical one.',
    },
    {
        id: 'trap-8',
        title: 'Misstatement of Age — What Happens?',
        trap: 'The exam may suggest the policy is voided. It is NOT.',
        correct: "If the insured's age was misstated on the application, the death benefit is simply ADJUSTED to what the premium paid would have purchased at the correct age. The policy is NOT voided.",
        tip: "Misstatement of age ≠ fraud. The policy stays in force, just with an adjusted benefit.",
    },
    {
        id: 'trap-9',
        title: "Incontestability — Does It Cover Fraud?",
        trap: "After 2 years, the insurer can't contest the policy. But what about outright fraud?",
        correct: 'After 2 years, the insurer cannot void the policy for MISSTATEMENTS. However, FRAUD and non-payment of premiums are still grounds for voiding, even after 2 years.',
        tip: 'Incontestability protects against honest mistakes after 2 years. It does NOT protect fraud.',
    },
    {
        id: 'trap-10',
        title: 'Guaranty Association as Selling Tool',
        trap: 'A prospect asks "What if the insurance company goes bankrupt?" Can you mention the guaranty association?',
        correct: 'You CANNOT use the guaranty association as a selling point or advertising tool. It is ILLEGAL to mention it to induce a sale.',
        tip: 'Even though it protects consumers, agents cannot reference it to close deals. This is specifically tested.',
    },
    {
        id: 'trap-11',
        title: 'Group Life Conversion — Whole Life Only',
        trap: 'The exam may offer "convert to any type of individual policy" as an answer.',
        correct: 'When converting from group life to an individual policy, the conversion is typically to WHOLE LIFE only — not term. And it must be done within 31 days with no proof of insurability required.',
        tip: '31 days + whole life + no medical exam = group conversion privilege.',
    },
    {
        id: 'trap-12',
        title: 'Default Nonforfeiture Option',
        trap: "Which nonforfeiture option is the DEFAULT if the policyholder doesn't choose?",
        correct: 'Extended Term Insurance is the DEFAULT/automatic nonforfeiture option. Not cash surrender, not reduced paid-up.',
        tip: 'If you don\'t choose, you get Extended Term — same face amount, limited time period based on cash value.',
    },
    {
        id: 'trap-13',
        title: 'MEC Death Benefit — Still Tax-Free!',
        trap: 'MECs have worse tax treatment, so is the death benefit taxable?',
        correct: 'Even if a policy is classified as a MEC, the DEATH BENEFIT is still INCOME TAX-FREE to the beneficiary. Only withdrawals and loans get the worse LIFO tax treatment + 10% penalty under 59½.',
        tip: 'MEC changes how LIVING benefits are taxed. The death benefit remains tax-free.',
    },
    {
        id: 'trap-14',
        title: '$50,000 Group Life Tax Threshold',
        trap: 'Is all employer-paid group life tax-free?',
        correct: 'Employer-paid group term life premiums are tax-free to the employee only for the FIRST $50,000 of coverage. The cost of coverage ABOVE $50,000 is taxable income to the employee.',
        tip: 'Remember: $50K is the magic number for group term life. Above that, the excess cost is taxable.',
    },
];

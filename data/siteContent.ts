/**
 * siteContent.ts
 * All structured page content in one place.
 * Edit copy here — components read from these arrays.
 */

export const NAV_LINKS = [
    { href: '#about', label: 'About Bri' },
    { href: '#who-i-help', label: 'Who I Help' },
    { href: '#services', label: 'Coverage' },
    { href: '#faq', label: 'FAQ' },
] as const;

export const WHO_I_HELP_CARDS = [
    {
        title: 'Individuals',
        desc: "You're building your life. Let's make sure you're not leaving yourself exposed if something unexpected happens.",
    },
    {
        title: 'Couples',
        desc: "You've built something together. Let's talk about how to protect it — and each other — the right way.",
    },
    {
        title: 'Young Families',
        desc: "When little ones are counting on you, the stakes feel different. I get it. Let's make sure they're covered.",
    },
    {
        title: 'Parents Planning Ahead',
        desc: "You're thinking long-term — about what you'd leave behind, and who you'd be leaving it for. That's the most loving thing you can do.",
    },
    {
        title: 'People with Coverage They Never Fully Understood',
        desc: "You signed the paperwork but honestly? You're not sure what you actually have. That's more common than you think — and I can help.",
    },
] as const;

export const STEPS = [
    {
        number: '01',
        title: 'Reach out and book a call.',
        desc: "Five minutes, a form, and you've got time on Bri's calendar. That's really all it takes to get started.",
    },
    {
        number: '02',
        title: 'Talk — honestly and openly.',
        desc: "Tell Bri what's going on. What you're worried about. What you don't understand. What feels overwhelming. She's heard it all and will meet you where you are.",
    },
    {
        number: '03',
        title: 'Walk away with real clarity.',
        desc: "No homework. No mystery. Just a clear picture of what options exist for you — and the confidence to make a decision that feels right.",
    },
] as const;

export const SERVICE_CARDS = [
    {
        title: 'Life Insurance Guidance',
        desc: "Term, whole, universal — it can get confusing fast. I'll walk you through what each one actually means and help you figure out what might make sense for your family's future.",
    },
    {
        title: 'Supplemental Coverage',
        desc: "Think your primary insurance covers everything? It might not. Supplemental coverage fills those gaps — hospital bills, critical illness, income protection. I'll help you see what's missing.",
    },
    {
        title: 'Family Protection Reviews',
        desc: "Life changes — jobs, babies, marriages, mortgages. Your coverage should keep up. I'll sit down with you and honestly review what you have and whether it still fits.",
    },
    {
        title: 'One-on-One Consultations',
        desc: "Sometimes you just need someone to talk to — someone patient, knowledgeable, and not trying to rush you. That's me. Book a call and let's just talk it through.",
    },
] as const;

export const TRUST_CARDS = [
    {
        title: 'She listens first.',
        desc: "Before Bri ever talks products, she talks to you. She wants to understand your real life — not just your age and zip code.",
    },
    {
        title: 'She explains things for real.',
        desc: "No condescension. No alphabet soup of acronyms. Just clear, plain-English explanations you can actually repeat back to your spouse later.",
    },
    {
        title: "She's in your corner.",
        desc: "Bri genuinely cares about the outcome — not the commission. She'll tell you if something doesn't make sense for your situation, even if that means walking away from a sale.",
    },
    {
        title: 'She makes it easy to take action.',
        desc: "People often put off protection planning because it feels hard. Bri makes sure it doesn't feel that way. From the first call to the final decision, you'll know exactly where you are.",
    },
] as const;

export const FAQ_ITEMS = [
    {
        id: 'faq-1',
        question: 'How do I even know where to start?',
        answer:
            "You start by booking a free call with me. That's literally it. You don't need to know what coverage is right or even what questions to ask. Come with zero preparation — I'll guide the whole conversation.",
    },
    {
        id: 'faq-2',
        question: 'Is there any cost for talking to you?',
        answer:
            "No — and I mean that genuinely. Our first conversation is completely free. I don't believe people should have to pay just to understand their options. You'll never feel like the clock is ticking.",
    },
    {
        id: 'faq-3',
        question: 'Can I just ask questions without committing to anything?',
        answer:
            "100%. No pressure, no pitch, no obligation. I've had people come back months after our first conversation when they were ready — and that's completely fine with me. You move at your pace.",
    },
    {
        id: 'faq-4',
        question: 'What is supplemental coverage, really?',
        answer:
            "Think of it like this: your health insurance covers a lot, but it doesn't cover everything. Supplemental coverage steps in for the gaps — things like hospital stays, critical illness, loss of income. It's not about being excessive. It's about not being caught off guard. I'll show you exactly what that can look like for your situation.",
    },
    {
        id: 'faq-5',
        question: 'How much of my time does this take?',
        answer:
            "Our first conversation is usually about 30–45 minutes. That's less time than most Netflix episodes. From there, it really depends on what you need — some people make a decision quickly, others take a few weeks. Either way, I'm not going anywhere.",
    },
    {
        id: 'faq-6',
        question: 'I already have some coverage. Is it worth talking to you?',
        answer:
            "Yes — honestly, this is one of the best reasons to come talk. Life changes fast. The policy you got 5 years ago might not reflect your life today. I'll help you take an honest look at what you have and tell you straight up whether it still makes sense.",
    },
] as const;

export const TRUST_CHIPS = [
    '✦ Free Consultation',
    '✦ No Obligation',
    '✦ 100% Confidential',
] as const;

export const MEET_BRI_BULLETS = [
    {
        title: "You'll always feel heard — not sold to.",
        desc: 'My whole approach starts with listening. Your life, your goals, your worries — that\'s what shapes every recommendation.',
    },
    {
        title: 'I break it all the way down.',
        desc: 'Insurance talk can feel like a foreign language. I translate it — into real words, real numbers, and real decisions you can feel good about.',
    },
    {
        title: 'This is personal, not transactional.',
        desc: "I'm not trying to close a deal. I'm trying to make sure your family has what they need — and that you actually understand why.",
    },
] as const;

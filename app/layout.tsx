import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import ScrollReveal from '@/components/ScrollReveal';
import './globals.css';

// ── Fonts via next/font (self-hosted — no external CDN request, no layout shift) ──
const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-cormorant',
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['300', '400', '500', '600'],
    display: 'swap',
});

// ── SEO Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: 'ProtectWithBri.com | Personalized Insurance Guidance with Brianna Willis',
    description:
        'Personalized life and supplemental insurance guidance with clarity, compassion, and confidence. Book a free consultation with Brianna Willis at ProtectWithBri.com.',
    metadataBase: new URL('https://protectwithbri.com'),
    openGraph: {
        title: 'ProtectWithBri.com | Personalized Insurance Guidance',
        description:
            'Personalized guidance for life and supplemental coverage with clarity, compassion, and confidence.',
        url: 'https://protectwithbri.com',
        siteName: 'ProtectWithBri.com',
        images: [{ url: '/images/brianna-hero.jpg', width: 1200, height: 630, alt: 'Brianna Willis' }],
        type: 'website',
        locale: 'en_US',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
            <body>
                {children}
                <ScrollReveal />
            </body>
        </html>
    );
}

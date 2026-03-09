import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero" aria-labelledby="hero-heading">

            {/* ── LEFT: Premium editorial content panel ── */}
            <div className={styles.left}>

                {/* Warm ambient glow layer — pure CSS decoration */}
                <div className={styles.glowLayer} aria-hidden="true" />

                {/* Gold editorial rule — top-left accent */}
                <div className={styles.topRule} aria-hidden="true" />

                {/* Soft visual bridge gradient flowing toward the portrait */}
                <div className={styles.bridge} aria-hidden="true" />

                {/* The premium content panel */}
                <div className={styles.panel}>

                    {/* Accent rule + eyebrow */}
                    <div className={styles.eyebrowGroup}>
                        <div className={styles.accentLine} aria-hidden="true" />
                        <p className={styles.eyebrow}>Personalized Insurance Guidance</p>
                    </div>

                    {/* Headline */}
                    <h1 className={styles.headline} id="hero-heading">
                        Protecting what
                        <br />
                        <span className={styles.headlineIn}>matters most</span>
                        <br />
                        <em className={styles.headlineEm}>starts here.</em>
                    </h1>

                    {/* Sub-copy */}
                    <p className={styles.sub}>
                        I&apos;m Bri — a licensed insurance advisor who helps real families
                        understand their coverage with clarity, warmth, and zero pressure.
                    </p>

                    {/* Hairline divider */}
                    <div className={styles.divider} aria-hidden="true" />

                    {/* CTA zone */}
                    <div className={styles.ctaZone}>
                        <a
                            href="#consultation"
                            className={styles.primaryCta}
                            id="hero-primary-cta"
                        >
                            Book a Free Consultation
                            <span className={styles.ctaArrow} aria-hidden="true">→</span>
                        </a>
                        <a
                            href="#services"
                            className={styles.secondaryCta}
                            id="hero-secondary-cta"
                        >
                            Explore Coverage
                        </a>
                    </div>

                    {/* Micro trust chips */}
                    <ul className={styles.chips} aria-label="Trust indicators">
                        {[
                            'Personal guidance',
                            'Clear answers',
                            'No-pressure support',
                        ].map((label) => (
                            <li key={label} className={styles.chip}>
                                <span className={styles.chipDot} aria-hidden="true">◆</span>
                                {label}
                            </li>
                        ))}
                    </ul>

                    {/* Micro-reassurance signature line */}
                    <p className={styles.reassurance}>
                        Simple conversation.&ensp;Thoughtful guidance.&ensp;Clear next steps.
                    </p>

                </div>{/* /panel */}
            </div>

            {/* ── RIGHT: Portrait column ── */}
            <div className={styles.right}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/brianna-hero.jpg"
                        alt="Brianna Willis, Insurance Advisor, standing in front of the ProtectWithBri.com office logo"
                        fill
                        priority
                        className={styles.image}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        style={{ objectFit: 'cover', objectPosition: '50% 15%' }}
                    />
                    {/* Badge pinned over image */}
                    <div className={styles.badge}>
                        <span className={styles.badgeTop}>Trusted Advisor</span>
                        <span className={styles.badgeBottom}>Life &amp; Supplemental Coverage</span>
                    </div>
                </div>
            </div>

        </section>
    );
}

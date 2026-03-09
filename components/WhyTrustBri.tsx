import { TRUST_CARDS } from '@/data/siteContent';
import styles from './WhyTrustBri.module.css';

export default function WhyTrustBri() {
    return (
        <section className={`section ${styles.section}`} id="trust" aria-labelledby="trust-heading">
            <div className="container">
                <p className="section-label reveal">Trust</p>
                <h2 className="section-heading section-heading--centered reveal" id="trust-heading">
                    Why People Keep Coming Back to Bri
                </h2>
                <ul className={styles.grid} role="list">
                    {TRUST_CARDS.map(({ title, desc }, i) => (
                        <li key={title} className={`${styles.card} reveal${i > 0 && i < 5 ? ` reveal--delay-${i}` : ''}`}>
                            <span className={styles.glyph} aria-hidden="true">❧</span>
                            <h3 className={styles.cardTitle}>{title}</h3>
                            <p className={styles.cardDesc}>{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

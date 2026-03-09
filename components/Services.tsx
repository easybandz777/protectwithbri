import { SERVICE_CARDS } from '@/data/siteContent';
import styles from './Services.module.css';

export default function Services() {
    return (
        <section className={`section ${styles.section}`} id="services" aria-labelledby="coverage-heading">
            <div className="container">
                <p className="section-label reveal">Coverage</p>
                <h2 className="section-heading section-heading--centered reveal" id="coverage-heading">
                    What I Can Help You Navigate
                </h2>
                <p className="section-sub reveal">
                    I&apos;m not here to sell you a product. I&apos;m here to help you understand your
                    options — so whatever you decide, it&apos;s truly yours.
                </p>
                <ul className={styles.grid} role="list">
                    {SERVICE_CARDS.map(({ title, desc }, i) => (
                        <li key={title} className={`${styles.card} reveal${i > 0 && i < 5 ? ` reveal--delay-${i}` : ''}`}>
                            <div className={styles.cardAccent} aria-hidden="true" />
                            <h3 className={styles.cardTitle}>{title}</h3>
                            <p className={styles.cardDesc}>{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

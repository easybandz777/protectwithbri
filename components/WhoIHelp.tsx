import { WHO_I_HELP_CARDS } from '@/data/siteContent';
import styles from './WhoIHelp.module.css';

export default function WhoIHelp() {
    return (
        <section className={`section ${styles.section}`} id="who-i-help" aria-labelledby="who-heading">
            <div className="container">
                <p className="section-label reveal">Who I Serve</p>
                <h2 className="section-heading section-heading--centered reveal" id="who-heading">
                    Who I Work With
                </h2>
                <p className="section-sub reveal">
                    Every single person I talk to is at a different place in life. That&apos;s exactly how it
                    should be. Wherever you are, there&apos;s a seat at the table.
                </p>
                <ul className={styles.grid} role="list">
                    {WHO_I_HELP_CARDS.map(({ title, desc }, i) => (
                        <li key={title} className={`${styles.card} reveal${i > 0 && i < 5 ? ` reveal--delay-${i}` : ''}`}>
                            <div className={styles.cardIcon} aria-hidden="true">◆</div>
                            <h3 className={styles.cardTitle}>{title}</h3>
                            <p className={styles.cardDesc}>{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

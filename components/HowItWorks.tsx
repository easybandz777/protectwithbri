import { STEPS } from '@/data/siteContent';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
    return (
        <section className={`section ${styles.section}`} id="how-it-works" aria-labelledby="how-heading">
            <div className="container">
                <p className="section-label reveal">The Process</p>
                <h2 className="section-heading section-heading--centered reveal" id="how-heading">
                    Here&apos;s What Working with Bri Looks Like
                </h2>
                <p className="section-sub reveal">
                    I made this simple on purpose. Because you shouldn&apos;t have to jump through hoops just
                    to get a straight answer about your protection options.
                </p>
                <ol className={styles.steps} role="list">
                    {STEPS.map(({ number, title, desc }) => (
                        <li key={number} className={`${styles.step} reveal`}>
                            <div className={styles.number} aria-hidden="true">{number}</div>
                            <h3 className={styles.title}>{title}</h3>
                            <p className={styles.desc}>{desc}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

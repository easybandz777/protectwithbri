import { MEET_BRI_BULLETS } from '@/data/siteContent';
import styles from './MeetBri.module.css';

export default function MeetBri() {
    return (
        <section className={`section ${styles.section}`} id="about" aria-labelledby="about-heading">
            <div className="container">
                <p className="section-label reveal">About</p>
                <h2 className="section-heading section-heading--centered reveal" id="about-heading">
                    Meet Bri
                </h2>
                <div className={`${styles.card} reveal`}>
                    <p className={styles.copy}>
                        I got into insurance because I watched people I love get blindsided — by medical bills,
                        by loss, by situations nobody planned for. I knew there had to be a better way than just
                        hoping things would work out.
                    </p>
                    <p className={styles.copy}>
                        So now? I sit across from families — literally or virtually — and I help them understand
                        what protection options exist, what actually fits their life, and what they can stop
                        worrying about. I don&apos;t push products. I have conversations. And when you leave,
                        you&apos;ll know exactly where you stand.
                    </p>
                    <p className={styles.copy}>
                        Whether you&apos;ve never looked into coverage before, or you have a policy collecting
                        dust that you&apos;re not even sure is right anymore — I&apos;m here for all of it. No
                        judgment. No rush.
                    </p>

                    <ul className={`${styles.bullets} reveal`} role="list">
                        {MEET_BRI_BULLETS.map(({ title, desc }) => (
                            <li key={title} className={styles.bullet}>
                                <span className={styles.bulletIcon} aria-hidden="true">✦</span>
                                <div>
                                    <strong>{title}</strong>
                                    <p>{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/data/siteContent';
import styles from './FAQ.module.css';

export default function FAQ() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className={`section ${styles.section}`} id="faq" aria-labelledby="faq-heading">
            <div className="container container--narrow">
                <p className="section-label reveal">Questions</p>
                <h2 className="section-heading section-heading--centered reveal" id="faq-heading">
                    You Probably Have Questions Like These
                </h2>
                <p className="section-sub reveal">
                    These are the ones I hear most often. Honestly — there&apos;s no such thing as a bad
                    one. Ask away.
                </p>

                <div className={`${styles.accordion} reveal`} role="list">
                    {FAQ_ITEMS.map(({ id, question, answer }) => {
                        const isOpen = openId === id;
                        const triggerId = `trigger-${id}`;
                        const bodyId = `body-${id}`;
                        return (
                            <div key={id} className={styles.item} role="listitem">
                                <button
                                    id={triggerId}
                                    className={styles.trigger}
                                    aria-expanded={isOpen}
                                    aria-controls={bodyId}
                                    onClick={() => toggle(id)}
                                >
                                    {question}
                                    <span className={styles.arrow} aria-hidden="true" />
                                </button>
                                {isOpen && (
                                    <div
                                        id={bodyId}
                                        className={styles.body}
                                        role="region"
                                        aria-labelledby={triggerId}
                                    >
                                        <p>{answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

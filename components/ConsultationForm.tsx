'use client';

import { useState, useRef } from 'react';
import { validateConsultationForm, type ConsultationFormData } from '@/lib/validation';
import styles from './ConsultationForm.module.css';

type FieldErrors = Partial<Record<keyof ConsultationFormData, string>>;

export default function ConsultationForm() {
    const [errors, setErrors] = useState<FieldErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [serverError, setServerError] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setServerError(false);

        const form = e.currentTarget;
        const data: Partial<ConsultationFormData> = {
            full_name: (form.elements.namedItem('full_name') as HTMLInputElement)?.value.trim(),
            email: (form.elements.namedItem('email') as HTMLInputElement)?.value.trim(),
            phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value.trim(),
            best_time: (form.elements.namedItem('best_time') as HTMLSelectElement)?.value,
            interest: (form.elements.namedItem('interest') as HTMLSelectElement)?.value,
        };

        // Client-side validation
        const { ok, errors: validationErrors } = validateConsultationForm(data);
        if (!ok) {
            setErrors(validationErrors);
            // Focus the first error field
            const firstErrorKey = Object.keys(validationErrors)[0] as keyof ConsultationFormData;
            (form.elements.namedItem(firstErrorKey) as HTMLElement)?.focus();
            return;
        }

        setErrors({});
        setSubmitting(true);

        try {
            const res = await fetch('/api/consultation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                setServerError(true);
            }
        } catch {
            setServerError(true);
        } finally {
            setSubmitting(false);
        }
    };

    const clearError = (field: keyof ConsultationFormData) => {
        setErrors((prev) => {
            if (!prev[field]) return prev;
            const next = { ...prev };
            delete next[field];
            return next;
        });
    };

    if (submitted) {
        return (
            <section className={`section ${styles.section}`} id="consultation" aria-labelledby="cta-heading">
                <div className={`container container--narrow`}>
                    <div className={styles.success} role="alert" aria-live="polite">
                        <p>
                            ✦ You&apos;re all set! Bri will be reaching out to you personally — usually within
                            one business day. Can&apos;t wait to connect.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`section ${styles.section}`} id="consultation" aria-labelledby="cta-heading">
            <div className="container container--narrow">
                <p className="section-label">Get Started</p>
                <h2 className="section-heading section-heading--centered" id="cta-heading">
                    You&apos;ve been thinking about this
                    <br />
                    <em>long enough. Let&apos;s talk.</em>
                </h2>
                <p className="section-sub">
                    There&apos;s no catch. No pressure. Just Bri — ready to listen, answer your questions
                    honestly, and help you feel confident about protecting what matters most to you.
                </p>

                <form
                    ref={formRef}
                    className={`${styles.form} reveal`}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Consultation request form"
                >
                    <div className={styles.rowTwo}>
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="full_name">
                                Full Name <span aria-hidden="true">*</span>
                            </label>
                            <input
                                className={`${styles.input} ${errors.full_name ? styles.inputError : ''}`}
                                type="text"
                                id="full_name"
                                name="full_name"
                                placeholder="Your full name"
                                required
                                autoComplete="name"
                                aria-required="true"
                                aria-invalid={!!errors.full_name}
                                aria-describedby={errors.full_name ? 'err-full_name' : undefined}
                                onChange={() => clearError('full_name')}
                            />
                            {errors.full_name && (
                                <span id="err-full_name" className={styles.error} role="alert">
                                    {errors.full_name}
                                </span>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="email">
                                Email Address <span aria-hidden="true">*</span>
                            </label>
                            <input
                                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@email.com"
                                required
                                autoComplete="email"
                                aria-required="true"
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? 'err-email' : undefined}
                                onChange={() => clearError('email')}
                            />
                            {errors.email && (
                                <span id="err-email" className={styles.error} role="alert">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className={styles.rowTwo}>
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="phone">Phone Number</label>
                            <input
                                className={styles.input}
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="(000) 000-0000"
                                autoComplete="tel"
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="best_time">Best Time to Reach You</label>
                            <select className={`${styles.input} ${styles.select}`} id="best_time" name="best_time">
                                <option value="" disabled>Select a time</option>
                                <option value="morning">Morning (9am – 12pm)</option>
                                <option value="afternoon">Afternoon (12pm – 4pm)</option>
                                <option value="evening">Evening (4pm – 7pm)</option>
                                <option value="flexible">I&apos;m flexible</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="interest">What are you looking for?</label>
                        <select className={`${styles.input} ${styles.select}`} id="interest" name="interest">
                            <option value="" disabled>Select a topic</option>
                            <option value="life">Life insurance guidance</option>
                            <option value="supplemental">Supplemental coverage guidance</option>
                            <option value="review">Family protection review</option>
                            <option value="questions">I just have questions</option>
                        </select>
                    </div>

                    {serverError && (
                        <p className={styles.serverError} role="alert">
                            Something went wrong. Please try again or email us directly.
                        </p>
                    )}

                    <div className={styles.actions}>
                        <button
                            type="submit"
                            className="btn btn--primary btn--large"
                            id="form-submit"
                            disabled={submitting}
                        >
                            {submitting ? 'Sending…' : "Let's Talk — Book Your Free Call"}
                        </button>
                        <a
                            href="mailto:brianna@protectwithbri.com"
                            className="btn btn--secondary btn--large"
                            id="form-quick-question"
                        >
                            Just Have a Quick Question?
                        </a>
                    </div>

                    <p className={styles.disclaimer}>
                        Your info stays private. This is a real conversation — not a sales pitch.
                    </p>
                </form>
            </div>
        </section>
    );
}

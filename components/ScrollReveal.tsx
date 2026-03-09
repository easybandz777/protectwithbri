'use client';

/**
 * ScrollReveal.tsx
 * Wraps children and attaches IntersectionObserver-based reveal classes.
 * Used in layout.tsx so it runs once for the whole page.
 * Respects prefers-reduced-motion — does nothing if reduced motion is set
 * (globals.css already has a fallback that makes .reveal immediately visible).
 */

import { useEffect } from 'react';

const REVEAL_SELECTORS = [
    '.section-label',
    '.section-heading',
    '.section-sub',
    '.reveal',
].join(', ');

export default function ScrollReveal() {
    useEffect(() => {
        // Bail if user prefers reduced motion — CSS handles visibility already
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
        );

        elements.forEach((el) => {
            // Only observe if not already visible
            if (!el.classList.contains('visible')) {
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    return null; // Render-nothing component
}

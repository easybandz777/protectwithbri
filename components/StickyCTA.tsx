'use client';

import { useEffect, useState } from 'react';
import styles from './StickyCTA.module.css';

export default function StickyCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consultationEl = document.getElementById('consultation');
        const footerEl = document.getElementById('footer');

        function update() {
            // Only show on mobile
            if (window.innerWidth > 768) {
                setVisible(false);
                return;
            }

            const consultRect = consultationEl?.getBoundingClientRect();
            const footerRect = footerEl?.getBoundingClientRect();

            const consultVisible = consultRect && consultRect.top < window.innerHeight;
            const footerVisible = footerRect && footerRect.top < window.innerHeight;

            setVisible(!(consultVisible || footerVisible));
        }

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        update();
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <div
            className={`${styles.stickyBanner} ${visible ? styles.visible : ''}`}
            aria-hidden={!visible}
        >
            <a href="#consultation" className={`btn btn--primary btn--full ${styles.btn}`}>
                Book a Free Consultation
            </a>
        </div>
    );
}

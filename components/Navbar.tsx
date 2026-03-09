'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/data/siteContent';
import { smoothScrollTo } from '@/lib/utils';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    // Scroll shadow effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // Close on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && menuOpen) closeMenu();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    const handleAnchorClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault();
            const id = href.replace('#', '');
            const navHeight = navRef.current?.offsetHeight ?? 76;
            closeMenu();
            smoothScrollTo(id, navHeight);
        },
        [closeMenu],
    );

    return (
        <nav
            ref={navRef}
            className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
            id="nav"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className={styles.inner}>
                {/* Brand */}
                <a
                    href="#"
                    className={styles.brand}
                    aria-label="ProtectWithBri home"
                    onClick={(e) => handleAnchorClick(e, '#hero')}
                >
                    <Image
                        src="/images/logo.svg"
                        alt="ProtectWithBri.com"
                        width={190}
                        height={72}
                        priority
                        className={styles.brandLogo}
                    />
                </a>

                {/* Desktop nav links */}
                <ul className={styles.links} role="list">
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className={styles.link}
                                onClick={(e) => handleAnchorClick(e, href)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a
                    href="#consultation"
                    className={`btn btn--nav ${styles.desktopCta}`}
                    onClick={(e) => handleAnchorClick(e, '#consultation')}
                >
                    Book a Consultation
                </a>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    id="mobile-menu"
                    className={styles.mobileMenu}
                    role="dialog"
                    aria-label="Mobile navigation menu"
                    aria-modal="true"
                >
                    <ul className={styles.mobileLinks} role="list">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className={styles.link}
                                    onClick={(e) => handleAnchorClick(e, href)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#consultation"
                                className="btn btn--primary btn--full"
                                onClick={(e) => handleAnchorClick(e, '#consultation')}
                            >
                                Book a Consultation
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

import { NAV_LINKS } from '@/data/siteContent';
import styles from './Footer.module.css';

const FOOTER_PAGES = [
    { href: '#about', label: 'About Bri' },
    { href: '#services', label: 'Coverage Guidance' },
    { href: '#faq', label: 'FAQ' },
    { href: '#consultation', label: 'Book a Consultation' },
    { href: '/study-guide', label: '🔐 Partner Login' },
] as const;

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="footer" role="contentinfo">
            <div className="container">
                <div className={styles.top}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <p className={styles.brandName}>
                            ProtectWithBri<span className={styles.brandDot}>.com</span>
                        </p>
                        <p className={styles.tagline}>Protecting families with clarity and compassion</p>
                        <p className={styles.agent}>Brianna Willis — Licensed Insurance Advisor</p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className={styles.colTitle}>Contact</h3>
                        <ul className={styles.list} role="list">
                            <li><a href="mailto:brianna@protectwithbri.com" className={styles.link}>brianna@protectwithbri.com</a></li>
                            <li><a href="tel:5551234567" className={styles.link}>(555) 123-4567</a></li>
                            <li><span className={styles.link}>Serving Clients Nationwide</span></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className={styles.colTitle}>Connect</h3>
                        <ul className={styles.list} role="list">
                            {/* TODO: Replace # with real Facebook URL */}
                            <li><a href="#" className={styles.link} aria-label="Facebook">Facebook</a></li>
                            <li><a href="https://www.linkedin.com/in/brianna-willis-insurance/" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="LinkedIn">LinkedIn</a></li>
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h3 className={styles.colTitle}>Pages</h3>
                        <ul className={styles.list} role="list">
                            {FOOTER_PAGES.map(({ href, label }) => (
                                <li key={href}><a href={href} className={styles.link}>{label}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copy}>
                        &copy; {year} ProtectWithBri.com | Brianna Willis. All rights reserved.
                    </p>
                    <ul className={styles.legal} role="list">
                        {/* TODO: Add real Privacy Policy and Terms pages */}
                        <li><a href="#" className={styles.legalLink}>Privacy Policy</a></li>
                        <li><a href="#" className={styles.legalLink}>Terms of Use</a></li>
                        <li><span className={styles.legalLink}>Licensed Insurance Advisor</span></li>
                    </ul>
                    <p className={styles.disclaimer}>
                        This site is intended for general informational purposes only and does not constitute
                        financial, legal, or insurance advice. Coverage eligibility and terms vary. Please
                        consult with a licensed professional regarding your specific situation.
                    </p>
                </div>
            </div>
        </footer>
    );
}

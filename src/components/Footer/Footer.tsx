import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            CATALYST RD1
                        </Link>
                        <p className={styles.tagline}>
                            Offline AI. Privacy First.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Product</h4>
                            <Link href="#features">Features</Link>
                            <Link href="#specs">Specifications</Link>
                            <Link href="#waitlist">Waitlist</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>Company</h4>
                            <Link href="/about">About</Link>
                            <Link href="/about#team">Team</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>Social</h4>
                            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Catalyst. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

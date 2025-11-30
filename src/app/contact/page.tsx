'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/Form/ContactForm';
import styles from './page.module.css';

export default function Contact() {
    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We are building the future of private AI, and we'd love to hear from you.
                    Whether you need support, are interested in partnerships, or just want to say hello.
                </motion.p>
            </div>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>Contact Us</h2>
                    <p>Fill out the form below and our team will get back to you as soon as possible.</p>
                    <ContactForm />
                </div>

                <div className={styles.card}>
                    <h2>Partner / Collaboration</h2>
                    <p>
                        AiDen is actively seeking OEM partners and enterprise integrators to expand the Catalyst ecosystem.
                        If you are interested in leveraging our offline-first AI technology or building compatible hardware, let's innovate together.
                    </p>
                    <p>
                        Email us directly at:<br />
                        <a href="mailto:partners@aiden.ai" style={{ color: '#fff', textDecoration: 'underline' }}>partners@aiden.ai</a>
                    </p>
                </div>
            </div>

            <div className={styles.noteSection}>
                <h3>Note on Cloud Usage</h3>
                <p>
                    While we prioritize offline operation, we are not completely cloud-free.
                    We utilize a hybrid approach combining Edge, Fog, and Cloud technologies based on specific requirements.
                    However, we strictly adhere to a security-first policy: your personal data remains local and encrypted,
                    with cloud usage reserved for non-sensitive, opt-in features.
                </p>
            </div>
        </div>
    );
}

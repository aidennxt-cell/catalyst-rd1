'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import WaitlistForm from '@/components/Form/WaitlistForm';
import styles from './page.module.css';

const benefits = [
    { title: 'Early Access', description: 'Be among the first to pre-order Catalyst RD.' },
    { title: 'Exclusive Updates', description: 'Get behind-the-scenes looks at development progress.' },
    { title: 'Pilot Program Priority', description: 'Chance to participate in beta testing.' },
    { title: 'Community Perks', description: 'Access to private forums and developer channels.' },
    { title: 'Founder Edition Badge', description: 'Exclusive digital badge for early supporters.' },
    { title: 'Direct Feedback', description: 'Direct channel to the engineering team.' },
];

export default function Waitlist() {
    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Join the Revolution
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Secure your place in the offline future with AiDen.
                </motion.p>
            </div>

            <div className={styles.content}>
                <div className={styles.benefitsSection}>
                    <h2>Why Join?</h2>
                    <ul className={styles.benefitsList}>
                        {benefits.map((benefit, index) => (
                            <li key={index} className={styles.benefitItem}>
                                <div className={styles.iconWrapper}>
                                    <Check size={20} />
                                </div>
                                <div className={styles.benefitContent}>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.formSection}>
                    <h2>Reserve Your Spot</h2>
                    <p>Join the waitlist today and secure your future.</p>
                    <WaitlistForm />
                </div>
            </div>
        </div>
    );
}

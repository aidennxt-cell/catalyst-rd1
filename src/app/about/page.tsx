'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section/Section';
import styles from './page.module.css';

export default function About() {
    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Vision
                </motion.h1>
                <motion.p
                    className={styles.vision}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We envision a future where artificial intelligence empowers the individual without compromising privacy.
                    By decoupling intelligence from the cloud, we are building a world where your data remains yours, physically and digitally.
                    AiDen is dedicated to creating the first truly private, offline-first AI ecosystem that lives with you, not in a data center.
                </motion.p>
            </div>

            <Section id="problems" background="gray">
                <h2 className={styles.sectionTitle}>Why We Exist</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Cloud Reliance</h3>
                        <p>Constant connectivity requirements create latency and fragility. We believe your tools should work everywhere, regardless of signal.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Privacy Loss</h3>
                        <p>User data is mined, sold, and used to train external models. We believe your thoughts and data belong to you alone.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Platform Lock-in</h3>
                        <p>Fragmented ecosystems force users into walled gardens. We build bridges, not walls.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Poor Accessibility</h3>
                        <p>Rural and remote areas are left behind by cloud-dependent AI. We bring intelligence to the edge.</p>
                    </div>
                </div>
            </Section>

            <Section id="philosophy">
                <h2 className={styles.sectionTitle}>Design Philosophy</h2>
                <div className={styles.philosophy}>
                    <p>
                        Our design philosophy centers on offline intelligence and adaptive learning.
                        We leverage Fog and Edge computing to process data locally, ensuring zero latency and absolute privacy.
                        By prioritizing user-owned data, Catalyst NXT adapts to you without ever exposing your information to the cloud.
                    </p>
                </div>
            </Section>

            <Section id="roadmap" background="black">
                <h2 className={styles.sectionTitle}>Our Journey</h2>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <h3>Phase 1: Concept Validation & Hardware Prototyping</h3>
                        <p>In Progress</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <h3>Phase 2: Catalyst OS Development & AI Model Optimization</h3>
                        <p>In Progress</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <h3>Phase 3: Catalyst RD Device Manufacturing & Beta Testing</h3>
                        <p>Upcoming</p>
                    </div>
                    <div className={styles.timelineItem}>
                        <h3>Phase 4: Ecosystem Expansion & OEM Partnerships</h3>
                        <p>Future</p>
                    </div>
                </div>
            </Section>
        </div>
    );
}

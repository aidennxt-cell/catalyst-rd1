'use client';

import { motion } from 'framer-motion';
import { Eye, MessageSquare, Mic, Router } from 'lucide-react';
import Section from '@/components/Section/Section';
import styles from './page.module.css';

const intelligenceFeatures = [
    { title: 'Vision', icon: <Eye size={24} />, description: 'On-device object recognition and scene analysis.' },
    { title: 'Language', icon: <MessageSquare size={24} />, description: 'Local natural language processing for writing and summarization.' },
    { title: 'Audio', icon: <Mic size={24} />, description: 'Real-time voice transcription and translation without latency.' },
    { title: 'IoT Automation', icon: <Router size={24} />, description: 'Intelligent control of smart devices based on local context.' },
];

export default function Ecosystem() {
    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Catalyst NXT
                </motion.h1>
                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    The multimodal, offline-first AI ecosystem that powers the Catalyst RD device and extends to your home edge cloud.
                    The universal operating layer for your personal intelligence, functioning independently of big tech clouds.
                </motion.p>
            </div>

            <Section id="os" background="gray">
                <div className={styles.osSection}>
                    <div className={styles.osContent}>
                        <h3>OS + Services</h3>
                        <p>
                            Catalyst OS provides a streamlined, intent-based interface focused on getting things done.
                            It features a local continuity engine that syncs state across devices via peer-to-peer connections.
                            The included SDK allows developers to build private, offline-capable applications.
                        </p>
                    </div>
                </div>
            </Section>

            <Section id="intelligence">
                <h2 className={styles.sectionTitle}>Multi-Modal Intelligence</h2>
                <div className={styles.grid}>
                    {intelligenceFeatures.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.iconWrapper}>{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="integrations" background="black">
                <h2 className={styles.sectionTitle}>Seamless Integrations</h2>
                <div className={styles.integrations}>
                    <p>
                        Catalyst NXT is built to play well with others. It offers seamless compatibility with Android, iOS, Windows, macOS, and Linux through our bridge applications.
                        We also support major smart home standards, allowing Catalyst RD to act as a universal remote for your connected life.
                    </p>
                </div>
            </Section>
        </div>
    );
}

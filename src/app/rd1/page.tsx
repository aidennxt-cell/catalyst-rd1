'use client';

import { motion } from 'framer-motion';
import { Zap, Brain, Link, Home, Shield, Layers } from 'lucide-react';
import Section from '@/components/Section/Section';
import Card from '@/components/Card/Card';
import ModelViewer from '@/components/3D/ModelViewer';
import styles from './page.module.css';

const capabilities = [
    { title: 'Offline LLMs', icon: <Zap size={24} />, description: 'Run powerful AI models directly on-device without internet.' },
    { title: 'Adaptive Personal Model', icon: <Brain size={24} />, description: 'AI that learns from your habits and preferences locally.' },
    { title: 'Multi-Device Bridge', icon: <Link size={24} />, description: 'Instantly connect and control nearby devices.' },
    { title: 'IoT Integration', icon: <Home size={24} />, description: 'Direct communication with smart home standards (Matter/Zigbee).' },
    { title: 'Privacy-First Architecture', icon: <Shield size={24} />, description: 'Hardware-level security ensures data isolation.' },
    { title: 'Modular Expansion', icon: <Layers size={24} />, description: 'Ready for RD Pro and future hardware upgrades.' },
];

const hardwareSpecs = [
    { label: 'SoC', value: 'High-performance Edge AI Processor' },
    { label: 'Memory', value: 'LPDDR5 RAM' },
    { label: 'Storage', value: 'UFS 3.1' },
    { label: 'Display', value: 'Hybrid E-Ink / OLED' },
    { label: 'Connectivity', value: 'Sliding USB-C, Wi-Fi 6E, BT 5.3' },
    { label: 'Dock', value: 'MagSafe-style magnetic dock' },
];

const useCases = [
    { title: 'Students', description: 'Distraction-free research and writing assistant that works anywhere.' },
    { title: 'Creators', description: 'Securely manage ideas and drafts without cloud syncing risks.' },
    { title: 'Tech Professionals', description: 'A dedicated terminal for secure code and network management.' },
    { title: 'Remote Workers', description: 'Reliable AI tools that function perfectly in off-grid locations.' },
    { title: 'Privacy-Focused', description: 'Complete digital sovereignty with zero data leakage.' },
];

export default function Device() {
    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Catalyst RD
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    The physical anchor of your private AI ecosystem.
                    Offline-first, always-on, and precision-engineered for continuity.
                </motion.p>

                <div className={styles.modelPlaceholder}>
                    <ModelViewer />
                </div>
            </div>

            <Section id="capabilities" background="gray">
                <h2 className={styles.sectionTitle}>Key Capabilities</h2>
                <div className={styles.grid}>
                    {capabilities.map((cap, index) => (
                        <Card key={index} title={cap.title} icon={cap.icon}>
                            {cap.description}
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="hardware">
                <h2 className={styles.sectionTitle}>Hardware Breakdown</h2>
                <ul className={styles.specList}>
                    {hardwareSpecs.map((spec, index) => (
                        <li key={index} className={styles.specItem}>
                            <span className={styles.specLabel}>{spec.label}</span>
                            <span className={styles.specValue}>{spec.value}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section id="use-cases" background="black">
                <h2 className={styles.sectionTitle}>Built For</h2>
                <div className={styles.useCaseGrid}>
                    {useCases.map((useCase, index) => (
                        <div key={index} className={styles.useCaseCard}>
                            <h4>{useCase.title}</h4>
                            <p>{useCase.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}

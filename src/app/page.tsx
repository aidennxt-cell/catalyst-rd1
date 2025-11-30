'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '@/components/Section/Section';
import Button from '@/components/Button/Button';
import WaitlistForm from '@/components/Form/WaitlistForm';
import Card from '@/components/Card/Card';
import styles from './page.module.css';

const roadmapSteps = [
  'Concept & Hardware Design',
  'OS & AI Integration',
  'Prototype Development',
  'RD Standard Launch Prep',
  'RD Pro & Edge Cloud Expansion',
  'Ecosystem & OEM Scaling',
];

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <Section id="hero" className={styles.hero} noPadding>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.title}
          >
            Catalyst NXT <span className={styles.highlight}>+</span> Catalyst RD
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            <p>The next-generation offline-first AI ecosystem and handheld device.</p>
            <p>Premium, private, and designed for the future of personal intelligence.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.ctaGroup}
          >
            <Button href="/waitlist" variant="primary" size="lg">
              Join Waitlist
            </Button>
            <Button href="/ecosystem" variant="outline" size="lg">
              Explore Ecosystem
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* What We Solve */}
      <Section id="problem" background="black">
        <div className={styles.sectionHeader}>
          <h2>Reclaiming Your Digital Self.</h2>
          <p>
            Cloud dependency compromises privacy, fragments experiences, and limits personalization.
            We eliminate the reliance on external servers, returning total control and data sovereignty to your hands.
          </p>
        </div>
      </Section>

      {/* Our Ecosystem */}
      <Section id="ecosystem" background="gray">
        <div className={styles.splitSection}>
          <div className={styles.textBlock}>
            <h2>The Ecosystem.</h2>
            <p>
              Catalyst NXT is the intelligent AI OS that unifies your digital life with offline-first privacy.
              Catalyst RD is the precision-engineered handheld device that anchors this ecosystem.
              Together, they deliver seamless multi-device continuity and a truly personal AI experience.
            </p>
          </div>
          <div className={styles.imagePlaceholder}>
            <Image
              src="/catalyst-rd.png"
              alt="Catalyst RD Device"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
      </Section>

      {/* Roadmap Preview */}
      <Section id="roadmap">
        <div className={styles.sectionHeader}>
          <h2>Roadmap</h2>
        </div>
        <div className={styles.roadmapContainer}>
          <div className={styles.roadmapFlow}>
            {roadmapSteps.map((step, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className={styles.roadmapItem}>{step}</span>
                {index < roadmapSteps.length - 1 && <span className={styles.roadmapArrow}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Waitlist CTA */}
      <Section id="waitlist" background="black" className={styles.waitlistSection}>
        <div className={styles.waitlistContent}>
          <h2>Join the Revolution.</h2>
          <p>Secure your place in the offline future with AiDen.</p>
          <WaitlistForm />
        </div>
      </Section>
    </div>
  );
}


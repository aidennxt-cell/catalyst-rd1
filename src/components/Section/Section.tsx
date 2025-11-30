import { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    background?: 'white' | 'gray' | 'black';
    noPadding?: boolean;
}

export default function Section({
    children,
    id,
    className = '',
    background = 'white',
    noPadding = false,
}: SectionProps) {
    return (
        <section
            id={id}
            className={`
        ${styles.section}
        ${styles[background]}
        ${noPadding ? styles.noPadding : ''}
        ${className}
      `}
        >
            <div className={`container ${styles.container}`}>
                {children}
            </div>
        </section>
    );
}

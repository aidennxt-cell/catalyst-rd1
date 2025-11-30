import { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: ReactNode;
    title?: string;
    icon?: string;
    className?: string;
    variant?: 'default' | 'bordered';
}

export default function Card({
    children,
    title,
    icon,
    className = '',
    variant = 'default',
}: CardProps) {
    return (
        <div className={`${styles.card} ${styles[variant]} ${className}`}>
            {icon && <div className={styles.icon}>{icon}</div>}
            {title && <h3 className={styles.title}>{title}</h3>}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

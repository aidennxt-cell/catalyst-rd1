import Link from 'next/link';
import { ReactNode, MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    fullWidth = false,
    type = 'button',
    disabled = false,
}: ButtonProps) {
    const className = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${fullWidth ? styles.fullWidth : ''}
    ${disabled ? styles.disabled : ''}
  `;

    if (href) {
        return (
            <Link href={href} className={className} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={className}
            onClick={onClick as MouseEventHandler<HTMLButtonElement>}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

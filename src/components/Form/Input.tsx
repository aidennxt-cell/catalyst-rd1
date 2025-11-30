import { ChangeEventHandler } from 'react';
import styles from './Input.module.css';

interface InputProps {
    label?: string;
    name: string;
    type?: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    error?: string;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    disabled?: boolean;
}

export default function Input({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    placeholder,
    required = false,
    rows = 4,
    disabled = false,
}: InputProps) {
    const isTextarea = type === 'textarea';

    return (
        <div className={styles.wrapper}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label} {required && <span className={styles.required}>*</span>}
                </label>
            )}
            {isTextarea ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    className={`${styles.input} ${error ? styles.errorInput : ''}`}
                    required={required}
                    disabled={disabled}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`${styles.input} ${error ? styles.errorInput : ''}`}
                    required={required}
                    disabled={disabled}
                />
            )}
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
}

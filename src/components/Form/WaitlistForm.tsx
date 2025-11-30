'use client';

import { useState, FormEvent } from 'react';
import Input from './Input';
import Button from '../Button/Button';
import styles from './Form.module.css';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage('You have been added to the waitlist!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to submit. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading' || status === 'success'}
                />
                <Button type="submit" variant="primary" disabled={status === 'loading' || status === 'success'}>
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </Button>
            </div>
            {message && (
                <p className={`${styles.message} ${status === 'error' ? styles.error : styles.success}`}>
                    {message}
                </p>
            )}
        </form>
    );
}

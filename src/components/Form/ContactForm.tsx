'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Input from './Input';
import Button from '../Button/Button';
import styles from './Form.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [responseMsg, setResponseMsg] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setResponseMsg('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setResponseMsg(data.error || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('error');
            setResponseMsg('Failed to send message. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${styles.contactForm}`}>
            <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
            />
            <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
            />
            <Input
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
            />
            <Button type="submit" variant="primary" fullWidth disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
            {responseMsg && (
                <p className={`${styles.message} ${status === 'error' ? styles.error : styles.success}`}>
                    {responseMsg}
                </p>
            )}
        </form>
    );
}

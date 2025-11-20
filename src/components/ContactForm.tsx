import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // REPLACE THIS URL WITH YOUR FORMSPREE ENDPOINT
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div style={{
            padding: 'var(--spacing-lg)',
            textAlign: 'center'
        }}>
            <h2 style={{
                fontSize: '2rem',
                marginBottom: 'var(--spacing-md)',
                background: 'linear-gradient(to right, #fff, #888)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                {t('contact.title')}
            </h2>

            <p className="mono" style={{
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--spacing-lg)',
                fontSize: '0.9rem'
            }}>
                {t('contact.emailAddress')}
            </p>

            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                textAlign: 'left'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="name" className="mono" style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>
                        {t('contact.name')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--color-border)',
                            padding: '0.75rem',
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="email" className="mono" style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>
                        {t('contact.email')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--color-border)',
                            padding: '0.75rem',
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="message" className="mono" style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>
                        {t('contact.message')}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--color-border)',
                            padding: '0.75rem',
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '1rem',
                            resize: 'vertical',
                            outline: 'none',
                            transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    style={{
                        background: status === 'success' ? 'var(--color-accent)' : 'transparent',
                        border: '1px solid var(--color-accent)',
                        color: status === 'success' ? '#000' : 'var(--color-accent)',
                        padding: '0.75rem 2rem',
                        fontSize: '0.9rem',
                        marginTop: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s ease',
                        opacity: status === 'submitting' ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                        if (status !== 'success') {
                            e.currentTarget.style.background = 'var(--color-accent)';
                            e.currentTarget.style.color = '#000';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (status !== 'success') {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--color-accent)';
                        }
                    }}
                >
                    {status === 'submitting' ? (
                        <span className="mono">{t('contact.sending')}</span>
                    ) : status === 'success' ? (
                        <>
                            <CheckCircle size={20} />
                            <span className="mono">{t('contact.sent')}</span>
                        </>
                    ) : status === 'error' ? (
                        <>
                            <AlertCircle size={20} />
                            <span className="mono">{t('contact.error')}</span>
                        </>
                    ) : (
                        <>
                            <span className="mono">{t('contact.send')}</span>
                            <Send size={18} />
                        </>
                    )}
                </button>

                {status === 'success' && (
                    <p className="mono" style={{ color: 'var(--color-accent)', marginTop: '1rem', fontSize: '0.9rem' }}>
                        {t('contact.successMsg')}
                    </p>
                )}

                {status === 'error' && (
                    <p className="mono" style={{ color: '#ff4444', marginTop: '1rem', fontSize: '0.9rem' }}>
                        {t('contact.errorMsg')}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const WhyChooseLack: React.FC = () => {
    const { t } = useTranslation();

    const reasons = [
        {
            title: t('why.local.title'),
            description: t('why.local.desc')
        },
        {
            title: t('why.ready.title'),
            description: t('why.ready.desc')
        },
        {
            title: t('why.flexible.title'),
            description: t('why.flexible.desc')
        },
        {
            title: t('why.report.title'),
            description: t('why.report.desc')
        }
    ];

    return (
        <section id="why-choose-lack" style={{
            padding: 'var(--spacing-xl) 0',
            borderTop: '1px solid var(--color-border)'
        }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: 'var(--spacing-lg)',
                    textAlign: 'left'
                }}>
                    {t('why.title')}<span style={{ color: 'var(--color-accent)' }}>.</span>
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {reasons.map((reason, index) => (
                        <div key={index} style={{
                            padding: 'var(--spacing-md)',
                            borderLeft: '2px solid var(--color-border)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderLeftColor = 'var(--color-accent)';
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderLeftColor = 'var(--color-border)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: 'var(--spacing-sm)',
                                fontFamily: 'var(--font-mono)'
                            }}>{reason.title}</h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.95rem'
                            }}>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseLack;

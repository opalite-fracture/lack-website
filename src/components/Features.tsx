import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Features: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            title: t('features.crossPlatform.title'),
            description: t('features.crossPlatform.desc')
        },
        {
            title: t('features.redTeaming.title'),
            description: t('features.redTeaming.desc')
        },
        {
            title: t('features.secureCore.title'),
            description: t('features.secureCore.desc')
        },
        {
            title: t('features.highPerformance.title'),
            description: t('features.highPerformance.desc')
        }
    ];

    return (
        <section id="features" style={{
            padding: 'var(--spacing-xl) 0',
            borderTop: '1px solid var(--color-border)'
        }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: 'var(--spacing-lg)',
                    textAlign: 'left'
                }}>
                    {t('features.title')}<span style={{ color: 'var(--color-accent)' }}>.</span>
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            border: '1px solid var(--color-border)',
                            padding: 'var(--spacing-md)',
                            transition: 'border-color 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
                        >
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: 'var(--spacing-sm)',
                                fontFamily: 'var(--font-mono)'
                            }}>{feature.title}</h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.95rem'
                            }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

import featureRisk from '../assets/feature_risk.png';
import featureMultimodal from '../assets/feature_multimodal.png';
import featureMultilanguage from '../assets/feature_multilanguage.png';
import featureDialogue from '../assets/feature_dialogue.png';

const Features: React.FC = () => {
    const { t } = useTranslation();

    const features = [
        {
            title: t('features.riskCoverage.title'),
            description: t('features.riskCoverage.desc'),
            image: featureRisk
        },
        {
            title: t('features.multimodal.title'),
            description: t('features.multimodal.desc'),
            image: featureMultimodal
        },
        {
            title: t('features.multiLanguage.title'),
            description: t('features.multiLanguage.desc'),
            image: featureMultilanguage
        },
        {
            title: t('features.dialogueModes.title'),
            description: t('features.dialogueModes.desc'),
            image: featureDialogue
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
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            minHeight: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-accent)';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.opacity = '0.4';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border)';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.opacity = '0';
                            }}
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0,
                                    transition: 'opacity 0.5s ease',
                                    zIndex: 0,
                                    pointerEvents: 'none'
                                }}
                            />
                            <div style={{ position: 'relative', zIndex: 1 }}>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

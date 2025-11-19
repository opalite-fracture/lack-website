import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const UseCases: React.FC = () => {
    const { t } = useTranslation();

    const useCases = [
        {
            title: t('useCases.modelEval.title'),
            description: t('useCases.modelEval.desc'),
            details: t('useCases.modelEval.details')
        },
        {
            title: t('useCases.compliance.title'),
            description: t('useCases.compliance.desc'),
            details: t('useCases.compliance.details')
        },
        {
            title: t('useCases.redTeaming.title'),
            description: t('useCases.redTeaming.desc'),
            details: t('useCases.redTeaming.details')
        },
        {
            title: t('useCases.monitoring.title'),
            description: t('useCases.monitoring.desc'),
            details: t('useCases.monitoring.details')
        },
        {
            title: t('useCases.reporting.title'),
            description: t('useCases.reporting.desc'),
            details: t('useCases.reporting.details')
        },
        {
            title: t('useCases.research.title'),
            description: t('useCases.research.desc'),
            details: t('useCases.research.details')
        }
    ];

    return (
        <section id="use-cases" style={{
            padding: 'var(--spacing-xl) 0',
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'rgba(255, 255, 255, 0.02)'
        }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: 'var(--spacing-lg)',
                    textAlign: 'left'
                }}>
                    {t('useCases.title')}<span style={{ color: 'var(--color-accent)' }}>.</span>
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {useCases.map((useCase, index) => (
                        <div key={index} style={{
                            padding: 'var(--spacing-md)',
                            backgroundColor: 'var(--color-background)',
                            border: '1px solid transparent',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            height: '160px' // Fixed height initially
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.height = '220px'; // Expand height
                                const details = e.currentTarget.querySelector('.details');
                                if (details) (details as HTMLElement).style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.height = '160px'; // Collapse height
                                const details = e.currentTarget.querySelector('.details');
                                if (details) (details as HTMLElement).style.opacity = '0';
                            }}
                        >
                            <h3 style={{
                                fontSize: '1.1rem',
                                marginBottom: 'var(--spacing-xs)',
                                fontWeight: 600
                            }}>{useCase.title}</h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                marginBottom: 'var(--spacing-md)'
                            }}>{useCase.description}</p>

                            <div className="details" style={{
                                opacity: 0,
                                transition: 'opacity 0.3s ease 0.1s',
                                color: 'var(--color-accent)',
                                fontSize: '0.85rem',
                                fontFamily: 'var(--font-mono)',
                                borderTop: '1px solid var(--color-border)',
                                paddingTop: 'var(--spacing-sm)'
                            }}>
                                {useCase.details}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;

import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

import whyLocal from '../assets/why_local.png';
import whyReady from '../assets/why_ready.png';
import whyFlexible from '../assets/why_flexible.png';
import whyReport from '../assets/why_report.png';

const WhyChooseLack: React.FC = () => {
    const { t } = useTranslation();
    const [activeImage, setActiveImage] = React.useState<string | null>(null);
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
    const sectionRef = React.useRef<HTMLElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const reasons = [
        {
            title: t('why.local.title'),
            description: t('why.local.desc'),
            image: whyLocal
        },
        {
            title: t('why.ready.title'),
            description: t('why.ready.desc'),
            image: whyReady
        },
        {
            title: t('why.flexible.title'),
            description: t('why.flexible.desc'),
            image: whyFlexible
        },
        {
            title: t('why.report.title'),
            description: t('why.report.desc'),
            image: whyReport
        }
    ];

    return (
        <section
            id="why-choose-lack"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            style={{
                padding: 'var(--spacing-xl) 0',
                borderTop: '1px solid var(--color-border)',
                position: 'relative',
                cursor: activeImage ? 'none' : 'default'
            }}
        >
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
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-md)',
                            minHeight: '120px',
                            position: 'relative',
                            zIndex: 2
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderLeftColor = 'var(--color-accent)';
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                                setActiveImage(reason.image);
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderLeftColor = 'var(--color-border)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                                setActiveImage(null);
                            }}
                        >
                            <div>
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Image Cursor */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '400px',
                height: 'auto',
                transform: `translate(${cursorPos.x + 20}px, ${cursorPos.y + 20}px)`,
                pointerEvents: 'none',
                opacity: activeImage ? 1 : 0,
                transition: 'opacity 0.2s ease, transform 0.1s ease-out',
                zIndex: 9999,
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-background)'
            }}>
                {activeImage && (
                    <img
                        src={activeImage}
                        alt="Preview"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block'
                        }}
                    />
                )}
            </div>
        </section>
    );
};

export default WhyChooseLack;

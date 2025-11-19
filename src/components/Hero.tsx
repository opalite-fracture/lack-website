import React, { useEffect, useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

import heroDashboard from '../assets/hero_dashboard.png';

const Hero: React.FC = () => {
    const { t } = useTranslation();
    const [text, setText] = useState('');
    // We need to update the typewriter effect when language changes
    const fullText = t('hero.subtitle');

    useEffect(() => {
        setText(''); // Reset text when language changes
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(timer);
        }, 50);
        return () => clearInterval(timer);
    }, [fullText]); // Re-run effect when fullText changes

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: 'var(--header-height)',
            paddingBottom: 'var(--spacing-xl)',
            overflow: 'hidden'
        }}>
            <h1 style={{
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                letterSpacing: '-0.05em',
                marginBottom: 'var(--spacing-sm)',
                position: 'relative',
                zIndex: 2
            }}>
                {t('hero.title')}
                <span style={{
                    position: 'absolute',
                    top: 0,
                    right: '-20px',
                    fontSize: '2rem',
                    color: 'var(--color-accent)'
                }}>*</span>
            </h1>
            <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.2rem',
                color: 'var(--color-text-secondary)',
                minHeight: '1.6em',
                marginBottom: 'var(--spacing-lg)',
                zIndex: 2
            }}>
                {text}<span className="cursor">_</span>
            </p>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)', zIndex: 2 }}>
                <a href="#download" style={{
                    padding: '12px 32px',
                    backgroundColor: 'var(--color-text)',
                    color: 'var(--color-background)',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    transition: 'opacity 0.2s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                    {t('header.getStarted')}
                </a>
                <a href="#features" style={{
                    padding: '12px 32px',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text)',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    transition: 'all 0.2s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-text)';
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    {t('hero.viewFeatures')}
                </a>
            </div>

            {/* Dashboard Container with 3D Effect */}
            <div style={{
                perspective: '1000px',
                width: '90%',
                maxWidth: '1200px',
                zIndex: 1
            }}>
                <div style={{
                    transform: 'rotateX(20deg) scale(0.9)',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.5s ease',
                    boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5), 0 0 30px rgba(var(--color-accent-rgb), 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateX(0deg) scale(1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateX(20deg) scale(0.9)'}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
                        opacity: 0.5
                    }} />
                    <img
                        src={heroDashboard}
                        alt="Lack Dashboard"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            borderRadius: '12px'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                        pointerEvents: 'none'
                    }} />
                </div>
            </div>

            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor {
          animation: blink 1s step-end infinite;
          color: var(--color-accent);
        }
      `}</style>
        </section>
    );
};

export default Hero;

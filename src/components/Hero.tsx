import React, { useEffect, useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

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
            paddingTop: 'var(--header-height)'
        }}>
            <h1 style={{
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                letterSpacing: '-0.05em',
                marginBottom: 'var(--spacing-sm)',
                position: 'relative'
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
                minHeight: '1.6em'
            }}>
                {text}<span className="cursor">_</span>
            </p>

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

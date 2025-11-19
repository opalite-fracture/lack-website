import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const Header: React.FC = () => {
    const { t, language, setLanguage } = useTranslation();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'zh' : 'en');
    };

    return (
        <header style={{
            height: 'var(--header-height)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 var(--spacing-md)',
            borderBottom: '1px solid var(--color-border)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 100
        }}>
            <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                letterSpacing: '-0.05em'
            }}>
                lack<span style={{ color: 'var(--color-accent)' }}>_</span>
            </div>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <a href="#features" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    marginRight: '1rem',
                    transition: 'color 0.2s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                    {t('header.features')}
                </a>
                <button
                    onClick={toggleLanguage}
                    style={{
                        background: 'none',
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        padding: '0.5rem',
                        transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                    {language === 'en' ? 'EN' : '中'} / {language === 'en' ? '中' : 'EN'}
                </button>
                <a href="#download" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    border: '1px solid var(--color-border)',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    transition: 'all 0.2s ease',
                    color: 'var(--color-text-primary)'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                        e.currentTarget.style.color = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                        e.currentTarget.style.color = 'var(--color-text-primary)';
                    }}
                >
                    {t('header.getStarted')}
                </a>
            </nav>
        </header>
    );
};

export default Header;

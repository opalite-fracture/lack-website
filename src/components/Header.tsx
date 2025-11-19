import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    letterSpacing: '-0.05em'
                }}>
                    lack<span style={{ color: 'var(--color-accent)' }}>_</span>
                </div>
            </Link>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <a href="/#features" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    marginRight: '1rem',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                    {t('header.features')}
                </a>
                <a href="/#use-cases" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    marginRight: '1rem',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                    {t('header.useCases')}
                </a>
                <a href="/#why-choose-lack" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    marginRight: '1rem',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                    {t('header.whyLack')}
                </a>
                <button
                    onClick={toggleLanguage}
                    style={{
                        background: 'none',
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        padding: '0.5rem',
                        transition: 'color 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    title={language === 'en' ? 'Switch to Chinese' : 'Switch to English'}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        position: 'relative'
                    }}>
                        <Languages
                            size={18}
                            className="lang-icon"
                        />
                        <span style={{
                            fontSize: '0.8rem',
                            fontFamily: 'var(--font-mono)',
                            minWidth: '2ch'
                        }}>
                            {language === 'en' ? 'EN' : '中'}
                        </span>
                    </div>
                    <style>{`
                        .lang-icon {
                            transition: transform 0.3s ease;
                        }
                        button:hover .lang-icon {
                            transform: rotate(180deg);
                        }
                    `}</style>
                </button>
                <a href="/#download" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    border: '1px solid var(--color-border)',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    transition: 'all 0.2s ease',
                    color: 'var(--color-text-primary)',
                    textDecoration: 'none'
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

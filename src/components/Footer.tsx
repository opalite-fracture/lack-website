import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Book, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer style={{
            padding: 'var(--spacing-lg) 0',
            borderTop: '1px solid var(--color-border)',
            marginTop: 'auto'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 'var(--spacing-sm)'
            }}>
                <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)'
                }}>
                    &copy; {new Date().getFullYear()} lack. {t('footer.rights')}
                    <span style={{ margin: '0 0.5rem' }}>|</span>
                    {t('footer.contact')}
                </div>

                <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-md)'
                }}>
                    <a href="/docs" style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'color 0.2s ease'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    >
                        <Book size={16} />
                        {t('footer.docs')}
                    </a>
                    <a href="#" style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'color 0.2s ease'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    >
                        <Github size={16} />
                        {t('footer.github')}
                    </a>
                    <a href="#" style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'color 0.2s ease'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                    >
                        <Twitter size={16} />
                        {t('footer.twitter')}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

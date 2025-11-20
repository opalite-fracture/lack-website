import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Book, Mail } from 'lucide-react';
import Modal from './Modal';
import ContactForm from './ContactForm';
import { GithubIcon, TwitterIcon } from './BrandIcons';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
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
                            <GithubIcon size={16} />
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
                            <TwitterIcon size={16} />
                            {t('footer.twitter')}
                        </a>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            style={{
                                background: 'transparent',
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'color 0.2s ease',
                                cursor: 'pointer',
                                padding: 0
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                        >
                            <Mail size={16} />
                            {t('contact.title')}
                        </button>
                    </div>
                </div>
            </footer>

            <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
                <ContactForm />
            </Modal>
        </>
    );
};

export default Footer;

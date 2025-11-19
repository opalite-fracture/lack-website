import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

type Platform = 'mac' | 'windows' | null;

const Download: React.FC = () => {
    const { t } = useTranslation();
    const [expandedPlatform, setExpandedPlatform] = useState<Platform>(null);

    const togglePlatform = (platform: Platform) => {
        if (expandedPlatform === platform) {
            setExpandedPlatform(null);
        } else {
            setExpandedPlatform(platform);
        }
    };

    return (
        <section id="download" style={{
            padding: 'var(--spacing-xl) 0',
            textAlign: 'center',
            borderTop: '1px solid var(--color-border)',
            position: 'relative',
            zIndex: 1
        }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: 'var(--spacing-md)'
                }}>
                    {t('download.title')}
                </h2>
                <p style={{
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--spacing-lg)',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    {t('download.subtitle')}
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--spacing-md)'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--spacing-md)',
                        flexWrap: 'wrap'
                    }}>
                        {/* macOS Button */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <button style={{
                                backgroundColor: expandedPlatform === 'mac' ? 'var(--color-accent)' : 'var(--color-text-primary)',
                                color: expandedPlatform === 'mac' ? 'var(--color-bg)' : 'var(--color-bg)',
                                padding: '1rem 2rem',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                border: '1px solid var(--color-text-primary)',
                                transition: 'all 0.2s ease',
                                minWidth: '200px'
                            }}
                                onClick={() => togglePlatform('mac')}
                            >
                                {t('download.mac')}
                            </button>

                            {expandedPlatform === 'mac' && (
                                <div style={{
                                    marginTop: 'var(--spacing-sm)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    animation: 'fadeIn 0.3s ease'
                                }}>
                                    <div style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-secondary)',
                                        textAlign: 'left',
                                        paddingLeft: '1rem',
                                        borderLeft: '1px solid var(--color-border)'
                                    }}>
                                        ├── <a href={`https://dl.lackrt.com/lack/releases/v${import.meta.env.VITE_APP_VERSION}/Lack-v${import.meta.env.VITE_APP_VERSION}-arm64.dmg`} className="download-link">{t('download.mac.appleSilicon')}</a>
                                    </div>
                                    <div style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-secondary)',
                                        textAlign: 'left',
                                        paddingLeft: '1rem',
                                        borderLeft: '1px solid var(--color-border)'
                                    }}>
                                        └── <a href={`https://dl.lackrt.com/lack/releases/v${import.meta.env.VITE_APP_VERSION}/Lack-v${import.meta.env.VITE_APP_VERSION}-x64.dmg`} className="download-link">{t('download.mac.intel')}</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Windows Button */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <button style={{
                                backgroundColor: expandedPlatform === 'windows' ? 'rgba(255,255,255,0.1)' : 'transparent',
                                color: 'var(--color-text-primary)',
                                padding: '1rem 2rem',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                border: '1px solid var(--color-border)',
                                borderColor: expandedPlatform === 'windows' ? 'var(--color-text-primary)' : 'var(--color-border)',
                                transition: 'all 0.2s ease',
                                minWidth: '200px'
                            }}
                                onClick={() => togglePlatform('windows')}
                            >
                                {t('download.windows')}
                            </button>

                            {expandedPlatform === 'windows' && (
                                <div style={{
                                    marginTop: 'var(--spacing-sm)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    animation: 'fadeIn 0.3s ease'
                                }}>
                                    <div style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-secondary)',
                                        textAlign: 'left',
                                        paddingLeft: '1rem',
                                        borderLeft: '1px solid var(--color-border)'
                                    }}>
                                        ├── <a href={`https://dl.lackrt.com/lack/releases/v${import.meta.env.VITE_APP_VERSION}/Lack-v${import.meta.env.VITE_APP_VERSION}-x64.exe`} className="download-link">{t('download.windows.x64')}</a>
                                    </div>
                                    <div style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-secondary)',
                                        textAlign: 'left',
                                        paddingLeft: '1rem',
                                        borderLeft: '1px solid var(--color-border)'
                                    }}>
                                        └── <a href={`https://dl.lackrt.com/lack/releases/v${import.meta.env.VITE_APP_VERSION}/Lack-v${import.meta.env.VITE_APP_VERSION}-arm64.exe`} className="download-link">{t('download.windows.arm64')}</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div style={{
                    marginTop: 'var(--spacing-lg)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)'
                }}>
                    {t('download.version')}
                </div>

                <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .download-link {
            color: var(--color-text-secondary);
            text-decoration: none;
            transition: color 0.2s ease;
          }
          .download-link:hover {
            color: var(--color-accent);
            text-decoration: underline;
          }
        `}</style>
            </div>
        </section>
    );
};

export default Download;

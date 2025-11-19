import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, useLocation } from 'react-router-dom';
import type { SidebarItem } from '../utils/docs';

interface DocsLayoutProps {
    children: React.ReactNode;
    sidebar: SidebarItem[];
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children, sidebar }) => {
    const location = useLocation();

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--color-bg)'
        }}>
            <Header />

            <div className="container" style={{
                flex: 1,
                display: 'flex',
                paddingTop: 'calc(var(--header-height) + var(--spacing-lg))',
                gap: 'var(--spacing-lg)',
                position: 'relative'
            }}>
                {/* Sidebar */}
                <aside style={{
                    width: '250px',
                    flexShrink: 0,
                    position: 'sticky',
                    top: 'calc(var(--header-height) + var(--spacing-lg))',
                    height: 'calc(100vh - var(--header-height) - var(--spacing-lg) * 2)',
                    overflowY: 'auto',
                    borderRight: '1px solid var(--color-border)',
                    paddingRight: 'var(--spacing-md)'
                }}>
                    <h3 style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.1rem',
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--color-text-primary)'
                    }}>
                        Documentation
                    </h3>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {sidebar.map(item => (
                            <Link
                                key={item.slug}
                                to={`/docs/${item.slug}`}
                                style={{
                                    color: location.pathname === `/docs/${item.slug}`
                                        ? 'var(--color-accent)'
                                        : 'var(--color-text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '4px',
                                    backgroundColor: location.pathname === `/docs/${item.slug}`
                                        ? 'rgba(var(--color-accent-rgb), 0.1)'
                                        : 'transparent',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main style={{
                    flex: 1,
                    minWidth: 0, // Prevent overflow
                    paddingBottom: 'var(--spacing-lg)'
                }}>
                    {children}
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default DocsLayout;

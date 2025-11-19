import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import DocsLayout from '../components/DocsLayout';
import { getDocs, getSidebar } from '../utils/docs';
import type { Doc, SidebarItem } from '../utils/docs';
import { useTranslation } from '../contexts/LanguageContext';
import 'highlight.js/styles/github-dark.css'; // Or any other style

const Docs: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { language } = useTranslation();
    const [docs, setDocs] = useState<Doc[]>([]);
    const [sidebar, setSidebar] = useState<SidebarItem[]>([]);
    const [currentDoc, setCurrentDoc] = useState<Doc | null>(null);
    const [loading, setLoading] = useState(true);
    const mountedRef = useRef(false);
    const lastLanguageRef = useRef(language);

    // Content wrapper style to ensure consistent layout
    const contentStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        color: 'var(--color-text-primary)',
        fontFamily: 'var(--font-sans)',
        minHeight: '50vh' // Prevent height collapse
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);

            try {
                // Only fetch sidebar if language changed or it's initial load
                if (sidebar.length === 0 || language !== lastLanguageRef.current) {
                    const loadedSidebar = await getSidebar(language);
                    setSidebar(loadedSidebar);
                    lastLanguageRef.current = language;

                    // If no slug, redirect to first sidebar item
                    if (!slug && loadedSidebar.length > 0) {
                        navigate(`/docs/${loadedSidebar[0].slug}`, { replace: true });
                        return;
                    }
                }

                // Always fetch docs for the current language (could be optimized further but this is safe)
                const loadedDocs = await getDocs(language);
                setDocs(loadedDocs);

                if (slug) {
                    const doc = loadedDocs.find(d => d.slug === slug);
                    setCurrentDoc(doc || null);
                }
            } catch (error) {
                console.error("Failed to load docs:", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [slug, navigate, language]);

    if (loading) {
        return (
            <DocsLayout sidebar={sidebar}>
                <div style={contentStyle}>
                    <div style={{ padding: '2rem', color: 'var(--color-text-secondary)' }}>Loading...</div>
                </div>
            </DocsLayout>
        );
    }

    if (!currentDoc) {
        return (
            <DocsLayout sidebar={sidebar}>
                <div style={contentStyle}>
                    <div style={{ padding: '2rem', color: 'var(--color-text-secondary)' }}>
                        <h2>Document not found.</h2>
                        <p>Current Slug: {slug || 'none'}</p>
                        <p>Language: {language}</p>
                    </div>
                </div>
            </DocsLayout>
        );
    }

    return (
        <DocsLayout sidebar={sidebar}>
            <div className="markdown-body" style={contentStyle}>
                <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>{currentDoc.metadata.title}</h1>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                        code({ node, inline, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <div style={{ position: 'relative', margin: '1.5rem 0' }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '10px',
                                        fontSize: '0.8rem',
                                        color: 'var(--color-text-secondary)',
                                        backgroundColor: 'var(--color-bg)',
                                        padding: '0 5px'
                                    }}>
                                        {match[1]}
                                    </div>
                                    <code className={className} {...props} style={{
                                        display: 'block',
                                        padding: '1.5rem',
                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                        borderRadius: '8px',
                                        overflowX: 'auto',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem'
                                    }}>
                                        {children}
                                    </code>
                                </div>
                            ) : (
                                <code className={className} {...props} style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    padding: '0.2rem 0.4rem',
                                    borderRadius: '4px',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.9em'
                                }}>
                                    {children}
                                </code>
                            )
                        },
                        h1: ({ node, ...props }) => <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', marginTop: '3rem' }} {...props} />,
                        h2: ({ node, ...props }) => <h2 style={{ fontSize: '2rem', marginBottom: '1rem', marginTop: '2.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }} {...props} />,
                        h3: ({ node, ...props }) => <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }} {...props} />,
                        p: ({ node, ...props }) => <p style={{ marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }} {...props} />,
                        ul: ({ node, ...props }) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)' }} {...props} />,
                        li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
                        a: ({ node, ...props }) => <a style={{ color: 'var(--color-accent)', textDecoration: 'none' }} {...props} />,
                        blockquote: ({ node, ...props }) => (
                            <blockquote style={{
                                borderLeft: '4px solid var(--color-accent)',
                                paddingLeft: '1rem',
                                marginLeft: 0,
                                fontStyle: 'italic',
                                color: 'var(--color-text-secondary)'
                            }} {...props} />
                        )
                    }}
                >
                    {currentDoc.content}
                </ReactMarkdown>
            </div>

            <div style={{
                maxWidth: '800px',
                margin: '3rem auto 0',
                paddingTop: '2rem',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem'
            }}>
                {(() => {
                    const currentIndex = sidebar.findIndex(item => item.slug === currentDoc.slug);
                    const prevItem = currentIndex > 0 ? sidebar[currentIndex - 1] : null;
                    const nextItem = currentIndex < sidebar.length - 1 ? sidebar[currentIndex + 1] : null;

                    return (
                        <>
                            {prevItem ? (
                                <button
                                    onClick={() => navigate(`/docs/${prevItem.slug}`)}
                                    style={{
                                        background: 'none',
                                        border: '1px solid var(--color-border)',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        color: 'var(--color-text-primary)',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        flex: 1,
                                        maxWidth: '45%',
                                        transition: 'all 0.2s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                                        e.currentTarget.style.backgroundColor = 'rgba(var(--color-accent-rgb), 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-border)';
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>← Previous</span>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{prevItem.title}</span>
                                </button>
                            ) : <div />}

                            {nextItem ? (
                                <button
                                    onClick={() => navigate(`/docs/${nextItem.slug}`)}
                                    style={{
                                        background: 'none',
                                        border: '1px solid var(--color-border)',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        color: 'var(--color-text-primary)',
                                        cursor: 'pointer',
                                        textAlign: 'right',
                                        flex: 1,
                                        maxWidth: '45%',
                                        transition: 'all 0.2s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem',
                                        alignItems: 'flex-end'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                                        e.currentTarget.style.backgroundColor = 'rgba(var(--color-accent-rgb), 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-border)';
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Next →</span>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{nextItem.title}</span>
                                </button>
                            ) : <div />}
                        </>
                    );
                })()}
            </div>
        </DocsLayout>
    );
};

export default Docs;

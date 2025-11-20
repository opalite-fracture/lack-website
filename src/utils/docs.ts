

export interface DocMetadata {
    title: string;
    order?: number;
}

export interface Doc {
    slug: string;
    content: string;
    metadata: DocMetadata;
}

export interface SidebarItem {
    title: string;
    slug: string;
}

export async function getDocs(lang: string = 'en'): Promise<Doc[]> {
    // Load all docs from all languages
    const modules = import.meta.glob('../docs/**/*.md', { query: '?raw', import: 'default' });
    const docs: Doc[] = [];

    console.log('Glob modules:', Object.keys(modules));

    for (const path in modules) {
        // Filter by language
        if (!path.includes(`/${lang}/`)) continue;
        if (path.endsWith('_sidebar.md')) continue;

        try {
            const slug = path.split('/').pop()?.replace('.md', '') || '';
            const rawContent = await modules[path]() as string;
            console.log('Loading doc:', slug, 'Lang:', lang, 'Content length:', rawContent?.length);

            // Manual frontmatter parsing
            const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
            const match = frontmatterRegex.exec(rawContent);

            let metadata: DocMetadata = { title: slug, order: 999 };
            let content = rawContent;

            if (match) {
                const frontmatter = match[1];
                content = match[2];

                const meta: Record<string, string> = {};
                frontmatter.split('\n').forEach(line => {
                    const [key, ...values] = line.split(':');
                    if (key && values.length) {
                        meta[key.trim()] = values.join(':').trim();
                    }
                });

                metadata = {
                    title: meta.title || slug,
                    order: parseInt(meta.order) || 999
                };
            }

            docs.push({
                slug,
                content,
                metadata
            });
        } catch (e) {
            console.error('Error loading doc:', path, e);
        }
    }

    return docs;
}

export async function getSidebar(lang: string = 'en'): Promise<SidebarItem[]> {
    const modules = import.meta.glob('../docs/**/_sidebar.md', { query: '?raw', import: 'default' });
    const sidebarItems: SidebarItem[] = [];

    for (const path in modules) {
        if (!path.includes(`/${lang}/`)) continue;

        try {
            const content = await modules[path]() as string;
            const lines = content.split('\n');

            for (const line of lines) {
                const match = line.match(/- \[(.*?)\]\((.*?)\)/);
                if (match) {
                    sidebarItems.push({
                        title: match[1],
                        slug: match[2]
                    });
                }
            }
        } catch (e) {
            console.error('Error loading sidebar:', path, e);
        }
    }

    return sidebarItems;
}

export async function getDoc(slug: string): Promise<Doc | undefined> {
    const docs = await getDocs();
    return docs.find(d => d.slug === slug);
}

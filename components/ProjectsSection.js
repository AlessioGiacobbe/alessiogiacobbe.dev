import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import TopicIcon from './TopicIcon';

const MAX_PER_ROW = 3;

// Column spans on a 6-column grid: a row of 3 cards → 2 cols each, a row of 2 → 3 cols each.
const SPAN_BY_ROW_SIZE = {
    1: 'lg:col-span-6',
    2: 'lg:col-span-3',
    3: 'lg:col-span-2',
};

// Splits n items into rows of at most `max`, spreading items so no row is left
// with a single card: 7 → [3, 2, 2], 8 → [3, 3, 2], 5 → [3, 2], 4 → [2, 2].
function rowSizes(n, max) {
    if (n <= 0) return [];
    const rows = Math.ceil(n / max);
    const base = Math.floor(n / rows);
    const extra = n % rows;
    return Array.from({ length: rows }, (_, r) => base + (r < extra ? 1 : 0));
}

export default function ProjectsSection() {
    const { t } = useTranslation('index');
    const section = sectionsItems.find(s => s.name === 'things_i_did');
    const [items, setItems] = useState(section.items);

    useEffect(() => {
        setItems([...section.items].sort(() => Math.random() - 0.5));
    }, []);

    const spans = rowSizes(items.length, MAX_PER_ROW)
        .flatMap(size => Array(size).fill(SPAN_BY_ROW_SIZE[size]));

    return (
        <div>
            <p className="text-muted mb-4">
                {'//' + t('things_i_did').toLowerCase()}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {items.map((item, i) => {
                    const primaryLink = item.links?.[0];
                    return (
                        <div key={i} className={`group relative border border-line p-5 overflow-hidden ${spans[i]}`}>
                            <span aria-hidden className="pointer-events-none absolute -top-px right-0 h-px w-full bg-gradient-to-l from-accent via-accent-soft to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <span aria-hidden className="pointer-events-none absolute -right-px top-0 w-px h-full bg-gradient-to-b from-accent via-accent-soft to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <span aria-hidden className="pointer-events-none absolute top-0 right-0 w-56 h-56 bg-[radial-gradient(circle_at_top_right,var(--color-accent),transparent_70%)] opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                            {primaryLink && (
                                <a href={primaryLink.link} target="_blank" rel="noopener noreferrer"
                                    aria-label={t(item.title)}
                                    className="absolute inset-0 z-10" />
                            )}
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <span className="font-bold">{t(item.title)}</span>
                                {item.links && (
                                    <div className="flex gap-2 flex-shrink-0 relative z-20">
                                        {item.links.map(link => (
                                            <a key={link.link} href={link.link} target="_blank" rel="noopener noreferrer"
                                                className="text-muted hover:text-accent transition-colors">
                                                <TopicIcon iconName={link.icon} size={14} />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {item.description && (
                                <p className="text-muted text-sm leading-relaxed">
                                    {t(item.description)}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

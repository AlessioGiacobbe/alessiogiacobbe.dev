import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import TopicIcon from './TopicIcon';

const LINK_LABELS = {
    github: 'GitHub',
    googlePlay: 'Google Play',
    appStore: 'App Store',
    arrowUpRight: 'website',
};

export default function ProjectsSection() {
    const { t } = useTranslation('index');
    const section = sectionsItems.find(s => s.name === 'things_i_did');
    const [items, setItems] = useState(section.items);

    useEffect(() => {
        setItems([...section.items].sort(() => Math.random() - 0.5));
    }, []);

    return (
        <div className="settle" style={{ '--i': 1 }}>
            <h2 className="max-w-none text-title">{'//' + t('things_i_did').toLowerCase()}</h2>
            <ul className="mt-4 border-t border-rule">
                {items.map(item => {
                    const primaryLink = item.links?.[0];
                    return (
                        <li key={item.title} className="group relative grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 border-b border-rule py-2">
                            <h3 className="text-lg leading-snug transition-colors duration-200 group-hover:text-accent">
                                {primaryLink ? (
                                    <a href={primaryLink.link} target="_blank" rel="noopener noreferrer"
                                        className="after:absolute after:inset-0">
                                        {t(item.title)}
                                    </a>
                                ) : t(item.title)}
                            </h3>
                            {item.links && (
                                <div className="relative z-10 flex gap-1 self-start">
                                    {item.links.map(link => (
                                        <a key={link.link} href={link.link} target="_blank" rel="noopener noreferrer"
                                            aria-label={`${t(item.title)} on ${LINK_LABELS[link.icon]}`}
                                            className="link p-2">
                                            <TopicIcon iconName={link.icon} size={16} />
                                        </a>
                                    ))}
                                </div>
                            )}
                            {item.description && (
                                <p className="col-span-2 text-sm text-muted">
                                    {t(item.description)}
                                </p>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

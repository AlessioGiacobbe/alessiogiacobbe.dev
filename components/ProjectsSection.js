import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import TopicIcon from './TopicIcon';

export default function ProjectsSection() {
    const { t } = useTranslation('index');
    const section = sectionsItems.find(s => s.name === 'things_i_did');

    return (
        <div>
            <p className="text-muted mb-4">
                {'//' + t('things_i_did').toLowerCase()}
            </p>
            <div className="grid grid-cols-2 gap-4">
                {section.items.map((item, i) => (
                    <div key={i} className="border border-line p-5">
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="font-bold">{t(item.title)}</span>
                            {item.links && (
                                <div className="flex gap-2 flex-shrink-0">
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
                ))}
            </div>
        </div>
    );
}

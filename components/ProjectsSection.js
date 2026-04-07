import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import TopicIcon from './TopicIcon';

function ProjectsSection() {
    const { t } = useTranslation('index');
    const section = sectionsItems.find(s => s.name === 'things_i_did');

    return (
        <div>
            <p className="text-xs font-black uppercase tracking-widest text-ink-muted mb-3">
                {t('things_i_did')}
            </p>
            <div className="grid grid-cols-2 gap-4">
                {section.items.map((item, i) => (
                    <div key={i} className="bg-panna-2 border-2 border-dashed border-panna-border rounded-xl px-5 py-5 flex flex-col">
                        <div className="flex items-start justify-between gap-2 mb-3">
                            <p className="font-black text-xl text-ink leading-tight">{t(item.title)}</p>
                            {item.links && (
                                <div className="flex gap-2 flex-shrink-0 mt-0.5">
                                    {item.links.map(link => (
                                        <a key={link.link} href={link.link} target="_blank" rel="noopener noreferrer"
                                            className="text-ink-muted hover:text-ink transition-colors">
                                            <TopicIcon iconName={link.icon} size={18} />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        {item.description && (
                            <p className="text-ink-muted text-sm font-medium leading-relaxed flex-1">
                                {t(item.description)}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection

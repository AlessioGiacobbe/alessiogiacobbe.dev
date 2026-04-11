import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import TopicIcon from './TopicIcon';

export default function StackSection() {
    const { t } = useTranslation('index');
    const section = sectionsItems.find(s => s.name === 'things_i_work_with');

    return (
        <div>
            <p className="text-muted mb-4">
                {'//' + t('things_i_work_with').toLowerCase()}
            </p>
            <div className="flex flex-wrap gap-2">
                {section.items.map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-2 border border-line px-4 py-2 text-base hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                        <TopicIcon iconName={item.iconName} size={16} />
                        {t(item.title)}
                    </span>
                ))}
            </div> 
        </div>
    );
}

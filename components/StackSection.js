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
            <div className="flex flex-wrap justify-between gap-y-3">
                {section.items.map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 text-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                        <TopicIcon iconName={item.iconName} size={13} />
                        {t(item.title)}
                    </span>
                ))}
            </div>
        </div>
    );
}

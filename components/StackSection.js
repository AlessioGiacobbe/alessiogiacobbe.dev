import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import TopicIcon from './TopicIcon';

export default function StackSection() {
    const { t } = useTranslation('index');
    const section = sectionsItems.find(s => s.name === 'things_i_work_with');

    return (
        <section className="pt-[var(--section-gap-l)]">
            <div className="container">
                <h2>{'//' + t('things_i_work_with').toLowerCase()}</h2>
                <ul className="mt-16 grid grid-cols-2 gap-x-[var(--gap-columns)] lg:grid-cols-5">
                    {section.items.map(item => (
                        <li key={item.title} className="flex items-center gap-3 whitespace-nowrap border-t border-rule py-8 font-semibold xl:text-xl">
                            <TopicIcon iconName={item.iconName} size={24} className="flex-shrink-0 text-muted" />
                            {t(item.title)}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

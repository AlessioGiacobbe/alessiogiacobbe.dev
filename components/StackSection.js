import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import TopicIcon from './TopicIcon';
import moment from 'moment';

function Pill({ item }) {
    const { t } = useTranslation('index');
    return (
        <div className="flex items-center gap-2.5 bg-panna-2 border-2 border-dashed border-panna-border rounded-xl px-3 py-2.5">
            <TopicIcon iconName={item.iconName} size={16} className="text-ink-muted flex-shrink-0" />
            <div className="min-w-0">
                <p className="font-black text-sm text-ink leading-none">{t(item.title)}</p>
                {item.since && (
                    <p className="text-ink-muted text-xs mt-0.5 font-medium">
                        since {moment(item.since, "DD/MM/YYYY").format("MMM YYYY")}
                    </p>
                )}
            </div>
        </div>
    );
}

function StackSection() {
    const { t } = useTranslation('index');
    const working = sectionsItems.find(s => s.name === 'things_i_work_with');
    const learning = sectionsItems.find(s => s.name === 'things_im_learning');

    return (
        <div>
            <p className="text-xs font-black uppercase tracking-widest text-ink-muted mb-3">
                {t('things_i_work_with')}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
                {working.items.map((item, i) => <Pill key={i} item={item} />)}
            </div>

            <p className="text-xs font-black uppercase tracking-widest text-ink-muted mb-3">
                {t('things_im_learning')}
            </p>
            <div className="flex flex-wrap gap-2">
                {learning.items.map((item, i) => <Pill key={i} item={item} />)}
            </div>
        </div>
    );
}

export default StackSection

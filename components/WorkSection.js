import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import moment from 'moment';

function WorkSection() {
    const { t } = useTranslation('index');
    const jobs = sectionsItems.find(s => s.name === 'where_i_have_worked');
    const certs = sectionsItems.find(s => s.name === 'certifications');

    return (
        <div>
            <p className="text-xs font-black uppercase tracking-widest text-ink-muted mb-4">
                {t('where_i_have_worked')}
            </p>
            <div className="space-y-4">
                {jobs.items.map((item, i) => {
                    const end = item.end ? moment(item.end, "DD/MM/YYYY") : moment();
                    const duration = moment.duration(end.diff(moment(item.since, "DD/MM/YYYY")));
                    const isCurrent = !item.end;
                    return (
                        <div key={i} className="flex gap-3">
                            <div className="flex flex-col items-center pt-1.5">
                                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${isCurrent ? 'bg-ink' : 'bg-panna-border'}`} />
                                {i < jobs.items.length - 1 && (
                                    <div className="w-px flex-1 mt-1.5 bg-panna-border" />
                                )}
                            </div>
                            <div className="pb-4">
                                <p className="font-black text-base text-ink leading-tight">{t(item.title)}</p>
                                <p className="text-ink-muted text-sm font-semibold mt-0.5">
                                    {item.role}
                                </p>
                                <p className="text-ink-muted text-xs mt-0.5">
                                    {duration.humanize()}{isCurrent ? ' · now' : ''}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {certs && certs.items.length > 0 && (
                <div className="mt-8">
                    <p className="text-xs font-black uppercase tracking-widest text-ink-muted mb-3">
                        {t('certifications')}
                    </p>
                    <div className="space-y-2">
                        {certs.items.map((item, i) => (
                            <div key={i} className="bg-panna-2 border-2 border-dashed border-panna-border rounded-xl px-4 py-3">
                                <p className="font-black text-base text-ink">{item.title}</p>
                                <p className="text-ink-muted text-sm font-medium">{item.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default WorkSection

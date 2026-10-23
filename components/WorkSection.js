import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import moment from 'moment';

export default function WorkSection() {
    const { t } = useTranslation('index');
    const jobs = sectionsItems.find(s => s.name === 'where_i_have_worked');

    return (
        <section>
            <div className="container">
                <div className="grid gap-y-12 border-t border-rule pt-[var(--section-gap-s)] lg:grid-cols-12 lg:gap-x-8">
                    <h2 className="lg:sticky lg:top-16 lg:col-span-4 lg:self-start">
                        {'//' + t('where_i_have_worked').toLowerCase()}
                    </h2>
                    <ol className="lg:col-span-8">
                        {jobs.items.map(item => {
                            const since = moment(item.since, "DD/MM/YYYY").format("MMM YYYY").toLowerCase();
                            const end = item.end
                                ? moment(item.end, "DD/MM/YYYY").format("MMM YYYY").toLowerCase()
                                : 'present';
                            return (
                                <li key={item.title} className="grid gap-x-8 gap-y-3 border-t border-rule py-10 first:border-t-0 first:pt-0 md:grid-cols-[11rem_minmax(0,1fr)]">
                                    <p className="num pt-1 text-sm text-muted">{since} to {end}</p>
                                    <div>
                                        <h3>
                                            {item.url ? (
                                                <a href={item.url} target="_blank" rel="noopener noreferrer"
                                                    className="underline decoration-muted transition-colors duration-200 hover:text-accent hover:decoration-accent">
                                                    {t(item.title)}
                                                </a>
                                            ) : t(item.title)}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted">{item.role.toLowerCase()}</p>
                                        {item.details && item.details.length > 0 && (
                                            <ul className="mt-6 flex max-w-[65ch] flex-col gap-3">
                                                {item.details.map(detail => (
                                                    <li key={detail}>{t(detail)}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}

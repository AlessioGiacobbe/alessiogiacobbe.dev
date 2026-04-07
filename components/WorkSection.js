import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import moment from 'moment';

export default function WorkSection() {
    const { t } = useTranslation('index');
    const jobs = sectionsItems.find(s => s.name === 'where_i_have_worked');
    const certs = sectionsItems.find(s => s.name === 'certifications');

    return (
        <div>
            <p className="text-muted text-xs mb-8">
                {'//' + t('where_i_have_worked').toLowerCase()}
            </p>
            <div className="space-y-10">
                {jobs.items.map((item, i) => {
                    const since = moment(item.since, "DD/MM/YYYY").format("MMM YYYY").toLowerCase();
                    const end = item.end
                        ? moment(item.end, "DD/MM/YYYY").format("MMM YYYY").toLowerCase()
                        : 'present';
                    return (
                        <div key={i} className="flex gap-8">
                            <span className="text-muted text-sm w-48 flex-shrink-0 pt-0.5">
                                {since} - {end}
                            </span>
                            <div className="flex-1">
                                <div className="mb-3">
                                    <span className="border border-line px-2.5 py-1 text-sm">
                                        {t(item.title)}
                                    </span>
                                    <span className="text-muted text-sm ml-3">
                                        {'//' + item.role.toLowerCase()}
                                    </span>
                                </div>
                                {item.details && item.details.length > 0 && (
                                    <ul className="space-y-2 mt-3">
                                        {item.details.map((detail, j) => (
                                            <li key={j} className="flex gap-3 text-sm leading-relaxed">
                                                <span className="text-muted mt-1.5 flex-shrink-0">&#9679;</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {certs && certs.items.length > 0 && (
                <div className="mt-14">
                    <p className="text-muted text-xs mb-4">
                        {'//' + t('certifications').toLowerCase()}
                    </p>
                    {certs.items.map((item, i) => (
                        <div key={i} className="flex gap-8">
                            <span className="w-48 flex-shrink-0" />
                            <div>
                                <span className="border border-line px-2.5 py-1 text-sm">
                                    {item.title}
                                </span>
                                <span className="text-muted text-sm ml-3">
                                    {'//' + item.role.toLowerCase()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

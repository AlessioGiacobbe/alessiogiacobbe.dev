import useTranslation from 'next-translate/useTranslation';
import { sectionsItems } from '../contents/home';
import moment from 'moment';
import { FiArrowUpRight } from 'react-icons/fi';

export default function WorkSection() {
    const { t } = useTranslation('index');
    const jobs = sectionsItems.find(s => s.name === 'where_i_have_worked');

    return (
        <div>
            <p className="text-muted mb-8">
                {'//' + t('where_i_have_worked').toLowerCase()}
            </p>
            <div className="space-y-10">
                {jobs.items.map((item, i) => {
                    const since = moment(item.since, "DD/MM/YYYY").format("MMM YYYY").toLowerCase();
                    const end = item.end
                        ? moment(item.end, "DD/MM/YYYY").format("MMM YYYY").toLowerCase()
                        : 'present';
                    return (
                        <div key={i}>
                            {/* Mobile layout */}
                            <div className="sm:hidden mb-1">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    {item.url ? (
                                        <a href={item.url} target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-medium hover:text-accent transition-colors">
                                            {t(item.title)}
                                            <FiArrowUpRight size={12} className="opacity-50" />
                                        </a>
                                    ) : (
                                        <span className="font-medium">{t(item.title)}</span>
                                    )}
                                    <span className="text-muted text-xs flex-shrink-0">{since} — {end}</span>
                                </div>
                                <p className="text-muted text-xs mb-3">{item.role.toLowerCase()}</p>
                                {item.details && item.details.length > 0 && (
                                    <ul className="space-y-1.5">
                                        {item.details.map((detail, j) => (
                                            <li key={j} className="flex gap-2 text-sm leading-relaxed">
                                                <span className="text-muted mt-1.5 flex-shrink-0">&#9679;</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {/* Desktop layout */}
                            <div className="hidden sm:flex gap-8">
                                <span className="text-muted text-sm w-48 flex-shrink-0 pt-0.5">
                                    {since} — {end}
                                </span>
                                <div className="flex-1">
                                    <div className="mb-1">
                                        {item.url ? (
                                            <a href={item.url} target="_blank" rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 font-medium hover:text-accent transition-colors">
                                                {t(item.title)}
                                                <FiArrowUpRight size={13} className="opacity-50" />
                                            </a>
                                        ) : (
                                            <span className="font-medium">{t(item.title)}</span>
                                        )}
                                    </div>
                                    <p className="text-muted text-sm mb-3">{item.role.toLowerCase()}</p>
                                    {item.details && item.details.length > 0 && (
                                        <ul className="space-y-2">
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
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

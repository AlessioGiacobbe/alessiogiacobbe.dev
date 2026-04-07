import useTranslation from 'next-translate/useTranslation';

export default function Hero() {
    const { t } = useTranslation('index');

    return (
        <section className="pt-20 pb-14">
            <h1 className="text-5xl font-bold tracking-tight mb-2">
                &lt;Alessio Giacobbe&gt;
            </h1>
            <p className="text-muted text-lg mb-16">
                {'//fullstack developer'}
            </p>

            <p className="text-muted text-xs mb-4">{'//about'}</p>
            <p className="max-w-lg leading-relaxed">
                {t('hero_subtitle', { exp_years: new Date().getFullYear() - 2019 })}
            </p>
        </section>
    );
}

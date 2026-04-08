import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

export default function Hero() {
    const { t } = useTranslation('index');

    return (
        <section className="pt-20 pb-14">
            <div className="flex items-center gap-8 mb-16">
                <div className="flex-shrink-0">
                    <Image
                        src="/avatar.jpg"
                        alt="Alessio Giacobbe"
                        width={100}
                        height={100}
                        className="rounded-full"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <h1 className="text-5xl font-bold tracking-tight mb-2">
                        &lt;Alessio Giacobbe&gt;
                    </h1>
                    <p className="text-muted text-2xl">
                        {'//fullstack developer'}
                    </p>
                </div>
            </div>

            <p className="text-muted mb-4">{'//about'}</p>
            <p className="max-w-xl leading-relaxed">
                {t('hero_subtitle', { exp_years: new Date().getFullYear() - 2019 })}
            </p>
        </section>
    );
}

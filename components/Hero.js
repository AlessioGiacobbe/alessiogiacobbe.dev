import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

export default function Hero({ email, cv }) {
    const { t } = useTranslation('index');

    return (
        <div className="settle flex flex-col items-start lg:justify-between lg:self-stretch">
            <div>
                <h1>&lt;Alessio Giacobbe&gt;</h1>
                <div className="mt-6 flex items-center gap-4">
                    <Image
                        src="/avatar.jpg"
                        alt=""
                        width={48}
                        height={48}
                        priority
                        className="flex-shrink-0 rounded-full"
                        style={{ objectFit: 'cover' }}
                    />
                    <p className="lead text-ink-2">{'//fullstack developer'}</p>
                </div>
                <p className="mt-6 max-w-[48ch]">
                    {t('hero_subtitle', { exp_years: new Date().getFullYear() - 2019 })}
                </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
                <a href={`mailto:${email}`} className="btn">email me</a>
                <a href={cv} download className="btn btn--quiet">download cv</a>
            </div>
        </div>
    );
}

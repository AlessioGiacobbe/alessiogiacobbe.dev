import useTranslation from 'next-translate/useTranslation';
import TopicIcon from './TopicIcon';

function Hero() {
    const { t } = useTranslation('index');

    return (
        <div className="py-16 pb-12">
            <p className="text-ink-muted text-base font-semibold mb-2">{t('hero_im')}</p>
            <h1 className="text-8xl font-black text-ink tracking-tighter leading-none mb-8">
                Alessio<br />Giacobbe
            </h1>
            <div className="flex items-end justify-between flex-wrap gap-6">
                <p className="text-ink-muted text-xl font-medium max-w-lg leading-relaxed">
                    {t('hero_subtitle', { exp_years: new Date().getFullYear() - 2019 })}
                </p>
                <div className="flex gap-5 items-center">
                    <a href="mailto:giacobbealessio@gmail.com" className="text-ink-muted hover:text-ink transition-colors">
                        <TopicIcon iconName="mail" size={22} />
                    </a>
                    <a href="Alessio Giacobbe CV.pdf" target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-ink transition-colors">
                        <TopicIcon iconName="document" size={22} />
                    </a>
                    <a href="https://twitter.com/GiacobbeAlessio" className="text-ink-muted hover:text-ink transition-colors">
                        <TopicIcon iconName="twitter" size={22} />
                    </a>
                    <a href="https://github.com/AlessioGiacobbe" className="text-ink-muted hover:text-ink transition-colors">
                        <TopicIcon iconName="github" size={22} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero

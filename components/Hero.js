import useTranslation from 'next-translate/useTranslation';

function Hero() {
    const { t } = useTranslation('index');

    return <div>
        <h1 className="text-1xl ">
            <span>{t('hero_im')}</span><br />
            <span>Alessio Giacobbe</span><br />
            <span>{t('hero_subtitle', { exp_years: new Date().getFullYear() - 2019 })}</span>
        </h1>
    </div>
}

export default Hero
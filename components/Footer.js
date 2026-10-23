import useTranslation from "next-translate/useTranslation";

export default function Footer() {
    const { t } = useTranslation('index');

    return (
        <footer className="container">
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule py-8 text-sm text-muted">
                <span>{t('footer_developed_by')}</span>
                <a href="https://github.com/AlessioGiacobbe/alessiogiacobbe.dev" className="link">
                    source
                </a>
            </div>
        </footer>
    );
}

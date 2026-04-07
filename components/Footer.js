import useTranslation from "next-translate/useTranslation";

export default function Footer() {
    const { t } = useTranslation('index');

    return (
        <footer className="py-8 border-t border-line">
            <div className="flex justify-between items-center text-muted text-xs">
                <span>{t('footer_developed_by')}</span>
                <a href="https://github.com/AlessioGiacobbe/alessiogiacobbe.dev"
                    className="hover:text-accent transition-colors">
                    source
                </a>
            </div>
        </footer>
    );
}

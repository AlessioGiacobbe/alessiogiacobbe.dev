import useTranslation from "next-translate/useTranslation";

function Footer() {
    const { t } = useTranslation('index');

    return (
        <footer className="py-7 border-t border-panna-border">
            <div className="flex justify-between items-center text-ink-muted text-sm font-semibold">
                <span>{t('footer_developed_by')}</span>
                <a href="https://github.com/AlessioGiacobbe/alessiogiacobbe.dev"
                    className="hover:text-ink transition-colors">
                    Star on GitHub
                </a>
            </div>
        </footer>
    );
}

export default Footer

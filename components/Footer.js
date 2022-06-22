import useTranslation from "next-translate/useTranslation";
import NextjsIcon from "../assets/nextjs.svg";
import VercelIcon from "../assets/vercel.svg";

function Footer() {
    const { t } = useTranslation('index');

    return <footer className=" mx-auto border-t border-slate-700  transform text-center max-w-7xl lg:text-left  text-slate-500 mt-9">
        <div className="flex justify-center items-center lg:justify-between p-6 ">
            <div className="mr-12 hidden lg:block">
                <span>{t('footer_developed_by')}</span>
            </div>
            <div className="flex justify-center">
                <span>{t('built_with')}
                    <a href="https://nextjs.org/"><NextjsIcon className="inline-block mx-2 align-baseline" /></a>
                    {t('hosted_on')}
                    <a href="https://vercel.com/"><VercelIcon className="inline-block mx-2 align-baseline" /></a>
                </span>
            </div>
        </div>
    </footer>
}

export default Footer
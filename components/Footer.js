import useTranslation from "next-translate/useTranslation";
import NextjsIcon from "../assets/nextjs.svg";
import VercelIcon from "../assets/vercel.svg";

function Footer() {
    const { t } = useTranslation('index');

    return <footer className=" bg-[#0f172acc] backdrop-blur-md mx-auto border-t border-slate-700  transform text-center max-w-7xl lg:text-left  text-slate-500">
        <div className="flex justify-center items-center lg:justify-between p-6 ">
            <div className="w-96 hidden lg:block">
                <span>{t('footer_developed_by')}</span>
            </div>
            <div className="hidden lg:block cursor-pointer">
                <a href="https://github.com/AlessioGiacobbe/alessiogiacobbe.dev">
                    <div className='relative z-0 shadow-cool-white-border inline-block bg-[#FFFFFF05] hover:bg-[#FFFFFF10] text-[#FFFFFFCC] transition-all hover:shadow-cool-white-border-and-shadow  font-bold py-2 px-3 rounded-xl'>
                        <p className="text-sm">Star me on Github!</p>
                    </div>
                </a>
            </div>
            <div className="w-96 flex justify-end">
                <span>{t('built_with')}
                    <a href="https://nextjs.org/"><NextjsIcon className="inline-block align-middle scale-50" /></a>
                    {t('hosted_on')}
                    <a href="https://vercel.com/"><VercelIcon className="inline-block mx-2 align-baseline" /></a>
                </span>
            </div>
        </div>
    </footer>
}

export default Footer
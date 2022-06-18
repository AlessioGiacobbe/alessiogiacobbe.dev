import useTranslation from 'next-translate/useTranslation';
import { animations, motion } from "framer-motion";
import { container as containerAnimations, item as itemAnimations } from '../contents/animations';

function Hero() {
    const { t } = useTranslation('index');

    return <div>

        <div className="text-1xl  relative h-128  w-full overflow-hidden m-auto">
            <div class="absolute blur-4xl h-4/5 w-2/5 bg-[#6e45e2] rounded-full right-1/2 transform -translate-x-1/6 -translate-y-1/3 animate-[vibeLeft_20s_ease-in-out_infinite]"></div>
            <div class="absolute blur-4xl h-96 w-2/5 bg-[#764ba2] rounded-full  left-1/2 transform -translate-x-1/2 -translate-y-1/3 "></div>
            <div class="absolute blur-4xl h-4/5 w-2/5 bg-[#3f98cc] rounded-full left-1/2 transform -translate-x-1/6 -translate-y-1/3 animate-[vibeRight_20s_ease-in-out_infinite]"></div>
            <div className='left-1/2  transform -translate-x-1/2 absolute h-128 max-w-6xl w-full text-white flex flex-col justify-center px-8 transition duration-300 ease-in-out'>
                <div className='font-bold text-3xl'>
                    <motion.ul
                        variants={containerAnimations}
                        initial="hidden"
                        animate="visible">
                        <motion.li variants={itemAnimations}><div className='text-3xlfont-bold ext-slate-400 opacity-70'>{t('hero_im')}</div></motion.li>
                        <motion.li variants={itemAnimations}><div className='text-7xl font-extrabold mb-2'>Alessio Giacobbe</div></motion.li>
                        <motion.li variants={itemAnimations}><div className='opacity-70'>{t('hero_subtitle', { exp_years: new Date().getFullYear() - 2019 })}</div></motion.li>
                    </motion.ul>
                </div>
            </div>

        </div>
    </div>
}

export default Hero
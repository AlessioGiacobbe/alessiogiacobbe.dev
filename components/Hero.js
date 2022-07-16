import useTranslation from 'next-translate/useTranslation';
import { animations, motion } from "framer-motion";
import { container as containerAnimations, item as itemAnimations } from '../contents/animations';

function Hero() {
    const { t } = useTranslation('index');

    return <div>
        <div className="text-1xl bg-hero-bg bg-size-100 relative h-110  w-full overflow-hidden m-auto">
            <div className='left-1/2  transform -translate-x-1/2 absolute h-110 max-w-7xl w-full text-white flex flex-col justify-center px-8 transition duration-300 ease-in-out'>
                <div className='font-bold text-3xl'>
                    <motion.ul
                        variants={containerAnimations}
                        initial="hidden"
                        animate="visible">
                        <motion.li variants={itemAnimations}><div className='text-2xl ext-slate-400 opacity-70'>{t('hero_im')}</div></motion.li>
                        <motion.li variants={itemAnimations}><div className='text-7xl font-extrabold mb-2'>Alessio Giacobbe</div></motion.li>
                        <motion.li variants={itemAnimations}><div className='opacity-70  text-2xl'>{t('hero_subtitle', { exp_years: new Date().getFullYear() - 2019 })}</div></motion.li>
                    </motion.ul>
                </div>
            </div>

        </div>
    </div>
}

export default Hero
import { sectionsItems } from '../contents/home';
import Section from './Section';
import { motion } from "framer-motion";
import { container as containerAnimations, item as itemAnimations } from '../contents/animations';

function Sections() {
    return <>
        <div className='mx-auto justify-center px-8 left-1/2  transform px-8 max-w-7xl'>
            <motion.ul
                variants={containerAnimations}
                initial="hidden"
                animate="visible">

                {
                    sectionsItems.map((section, index) => <Section section={section} index={index} key={section.name} />)
                }
            </motion.ul>
        </div>
    </>
}

export default Sections
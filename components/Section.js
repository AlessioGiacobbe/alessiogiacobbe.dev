import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import SplineItem from "./SplineItem";
import TopicCard from "./TopicCard";
import { motion } from "framer-motion";
import { container as containerAnimations, item as itemAnimations } from '../contents/animations';

function Section({ section, index }) {
    const { t } = useTranslation('index');
    const [isHovered, setIsHovered] = useState(false);

    return <motion.li className="mt-8 first:mt-0" variants={itemAnimations}>
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} key={section.name} className="grid grid-cols-2 gap-4 max-w-7xl mx-auto ">
            <div className='col-span-3 row-span-3 '>
                <div className='relative z-0 shadow-cool-purple-border inline-block bg-[#9575CD50] text-[#FFFFFFEE] pr-4 font-bold py-2 rounded-xl'>
                    <p className="ml-20 text-xl">{t(section.name)}</p>
                    <div className="absolute w-24 inset-0 flex  items-center z-10">
                        {section.spline.link && <SplineItem imageFallback={section.spline.fallback} splineLink={section.spline.link} splineItemName={section.spline.itemName} hovered={isHovered} />}
                    </div>
                </div>
            </div>
            <motion.ul
                variants={containerAnimations}
                initial="hidden"
                className="flex flex-nowrap overflow-x-auto pb-4 overflow-hidden col-span-2"
                animate="visible">
                {
                    section.items.map((item, index) => {
                        return <TopicCard key={index} topic={item} size={section.customSize} />
                    })
                }
            </motion.ul>
        </div>
    </motion.li>
}

export default Section
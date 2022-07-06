import Spline from "@splinetool/react-spline";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import SplineItem from "./SplineItem";
import TopicIcon from "./TopicIcon";

function Contacts() {
    const { t } = useTranslation('index');
    const [isHovered, setIsHovered] = useState(false);
    const { ref, inView, entry } = useInView({ triggerOnce: true, rootMargin: "50px" });

    return <div className="mx-auto items-center flex transform h-20 sm:h-100 text-white  text-center max-w-7xl mt-24 mb-24 md:mt-6 md:mb-0">
        <div className="mx-auto w-11/12 sm:hidden">
            <h1 className="text-4xl font-extrabold mb-2">{t('contacts_get_in_touch')}</h1>
            <div className="flex justify-between w-2/3 mx-auto mt-9">
                <div>
                    <a href="mailto:giacobbealessio@gmail.com">
                        <TopicIcon iconName={"mail"} customStyles={"scale-125 inline-block"} />
                    </a>
                </div>
                <div>
                    <a href="Alessio Giacobbe CV.pdf"
                        alt="Curriculum vitae"
                        target="_blank"
                        rel="noopener noreferrer">
                        <TopicIcon iconName={"document"} customStyles={"scale-125 inline-block"} />
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/GiacobbeAlessio">
                        <TopicIcon iconName={"twitter"} customStyles={"scale-125 inline-block"} />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/AlessioGiacobbe">
                        <TopicIcon iconName={"github"} customStyles={"scale-125 inline-block"} />
                    </a>
                </div>
            </div>
        </div>
        <div ref={ref} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="mx-auto hidden md:block">
            {
                inView && <SplineItem splineLink="https://prod.spline.design/hFvwmdrlIakDYHon/scene.splinecode" splineItemName="Console" hovered={isHovered} className="" />
            }
        </div>
    </div>
}

export default Contacts
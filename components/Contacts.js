import Spline from "@splinetool/react-spline";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import TopicIcon from "./TopicIcon";

function Contacts() {
    const { t } = useTranslation('index');
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false
        return window.innerWidth < 576
    })


    return <div className="mx-auto items-center flex transform h-80 text-white  text-center max-w-7xl mt-24">
        <div className="m-auto w-11/12 sm:hidden">
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
        <div className="mx-auto hidden md:block">
            <Spline scene="https://prod.spline.design/hFvwmdrlIakDYHon/scene.splinecode" />
        </div>
    </div>
}

export default Contacts
import useTranslation from "next-translate/useTranslation";
import TopicIcon from "./TopicIcon";

function Contacts() {
    const { t } = useTranslation('index');

    return <div className="mx-auto flex transform h-80 text-white text-center max-w-7xl mt-9">
        <div className="m-auto w-1/3">
            <h1 className="text-4xl font-extrabold mb-2">{t('contacts_get_in_touch')}</h1>
            <div className="flex justify-between my-10 w-full">
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
    </div>
}

export default Contacts
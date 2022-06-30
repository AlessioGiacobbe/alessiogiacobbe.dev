import { motion } from "framer-motion";
import { item as itemOpacity } from '../contents/animations';
import ReactIcon from "../assets/react.svg";
import TopicIcon from "./TopicIcon";
import moment from "moment";
import useTranslation from "next-translate/useTranslation";

function TopicCard({ topic, size = "w-64" }) {
    const { t } = useTranslation('index');
    const topicEnd = topic.end ? moment(topic.end) : moment()
    const topicDuration = moment.duration(topicEnd.diff(moment(topic.since ?? null)));

    return <>
        <motion.li className="inline-block px-3 pt-4 max-h-72" key={topic.title} variants={itemOpacity}>
            <div className={`${size} flow-root  max-h-72 bg-gradient-to-br hover:bg-gradient-to-r  bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500  from-[#764ba230] to-[#3f98cc20]  flex overflow-hidden shadow-cool-white-border px-5 py-4  text-white font-semibold  rounded-xl`}>
                <div className="float-left">
                    <div className="flow-root ">
                        <p className={`float-left text-xl ${topic.links && "max-w-3/4"}`}>
                            {t(topic.title)}
                        </p>
                        <div className="float-right">
                            {
                                topic.links &&
                                <>
                                    {
                                        topic.links.map(topicLink => {
                                            return <a key={topicLink.link} href={topicLink.link}>
                                                <TopicIcon iconName={topicLink.icon} customStyles={"scale-70 mx-1 inline-block"}/>
                                            </a>
                                        })
                                    }
                                </>
                            }
                        </div>
                    </div>
                    {
                        topic.since &&
                        <p className="text-sm uppercase mix-blend-soft-light opacity-80	">
                            {topic.role && `${topic.role} \u2022 `}{topicDuration.humanize()}
                        </p>
                    }
                    {
                        topic.description &&
                        <p className="text-sm mt-2 mix-blend-soft-light opacity-80">
                            {t(topic.description)}
                        </p>
                    }
                </div>
                {
                    topic.iconName && <div className="float-right">
                        <div className="h-10 w-10 bg-black justify-center rounded-full flex  items-center " >
                            <TopicIcon iconName={topic.iconName} />
                        </div>
                    </div>
                }
            </div>
        </motion.li>
    </>
}

export default TopicCard
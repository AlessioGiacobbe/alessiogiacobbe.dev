import { motion } from "framer-motion";
import { item as itemOpacity } from '../contents/animations';
import ReactIcon from "../assets/react.svg";
import TopicIcon from "./TopicIcon";
import moment from "moment";
import useTranslation from "next-translate/useTranslation";

function TopicCard({ topic }) {
    const { t } = useTranslation('index');
    const topicEnd = topic.end ? moment(topic.end) : moment()
    const topicDuration = moment.duration(topicEnd.diff(moment(topic.since ?? null)));

    return <>
        <motion.li className="inline-block px-3 pt-4 h-full" key={topic.title} variants={itemOpacity}>
            <div className="w-64 flow-root h-full bg-gradient-to-br hover:bg-gradient-to-r  bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500  from-[#764ba230] to-[#3f98cc20]  flex overflow-hidden shadow-cool-white-border px-5 py-4  text-white font-semibold  rounded-xl">
                <div className="float-left">
                    <h1 className="text-xl">{t(topic.title)}</h1>
                    {
                        topic.since &&
                        <p className="text-sm uppercase mix-blend-soft-light opacity-80	">
                            {topicDuration.humanize()}
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
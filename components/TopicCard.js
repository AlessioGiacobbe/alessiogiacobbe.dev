import { motion } from "framer-motion";
import { item as itemOpacity } from '../contents/animations';

function TopicCard({ topic }) {

    return <>
        <motion.li className="inline-block px-3 pt-4" key={topic.title} variants={itemOpacity}>
                <div className="w-64 h-32 p-5 rounded-xl shadow-md bg-white">
                    {topic.title}
                </div>
        </motion.li>
    </>
}

export default TopicCard
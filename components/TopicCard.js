import { motion } from "framer-motion";
import { item as itemOpacity } from '../contents/animations';
import ReactIcon from "../assets/react.svg";

function TopicCard({ topic }) {

    return <>
        <motion.li className="inline-block px-3 pt-4" key={topic.title} variants={itemOpacity}>

            <div className="w-64 bg-gradient-to-br hover:bg-gradient-to-r  bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500  from-[#764ba230] to-[#3f98cc20]  flex overflow-hidden shadow-cool-white-border p-5  text-white font-semibold  rounded-xl">
                <div>
                    <div className="h-10 w-10 bg-black justify-center rounded-full flex  items-center " >
                        <ReactIcon  className="scale-60" />
                    </div>
                </div>
                <div className="pl-4">
                    <h1 className="text-xl">{topic.title}</h1>
                    <h5 className="text-md">{topic.title}</h5>
                </div>

            </div>
        </motion.li>
    </>
}

export default TopicCard
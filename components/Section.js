import useTranslation from "next-translate/useTranslation";
import Spline from "@splinetool/react-spline";

function Section({ section }) {
    const { t } = useTranslation('index');

    return <div key={section.name} className='grid grid-cols-2 gap-4 max-w-7xl mx-auto mt-8'>
        <div className='col-span-3 row-span-3 '>
            <div className='relative z-0 shadow-cool-purple-border inline-block bg-[#9575CD50] text-[#FFFFFFEE] pr-4 font-bold py-2 rounded-xl'>
                <p className="ml-20">{t(section.name)}</p>
                <div className="absolute w-24 inset-0 flex  items-center z-10">
                    {section.splineLink && <Spline className="!inline h-16 w-32" scene={section.splineLink} />}
                </div>
            </div>
        </div>
        <div className="flex  overflow-x-hidden hide-scroll-bar col-span-2">
            <div className="flex flex-nowrap ">
                {
                    section.items.map(item => {
                        return <div key={item.title} className="inline-block px-3">
                            <div className="w-64 h-32 rounded-lg shadow-md bg-white">
                                {item.title}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default Section
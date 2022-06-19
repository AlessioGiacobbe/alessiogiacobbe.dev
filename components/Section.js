import useTranslation from "next-translate/useTranslation";

function Section({ name, items }) {
    const { t } = useTranslation('index');

    return <div key={name} className='grid grid-cols-2 gap-4 max-w-6xl mx-auto'>
        <div className='col-span-3 row-span-3 '>
            <div className='shadow-cool-purple-border inline-block bg-[#9575CD50] text-[#FFFFFFEE] px-4 font-bold py-2 rounded-xl'>
                {t(name)}
            </div>
        </div>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar col-span-2">
            <div className="flex flex-nowrap ">
                {
                    items.map(item => {
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
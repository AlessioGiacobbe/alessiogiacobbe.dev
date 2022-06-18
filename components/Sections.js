import { sectionsItems } from '../contents/home';

function Sections() {
    return <>
        {
            sectionsItems.map(section => {
                return <div key={section.name} className='grid grid-cols-2  gap-4'>
                    <div className='col-span-3 row-span-3 bg-yellow-400'>
                        {section.name}
                    </div>
                    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar col-span-2">
                        <div className="flex flex-nowrap ">
                            {
                                section.items.map(item => {
                                    return <div className="inline-block px-3">
                                        <div key={item.title} className="w-64 h-32 rounded-lg shadow-md bg-white">
                                            {item.title}
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            })
        }
    </>
}

export default Sections
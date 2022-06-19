function Section({ name, items }) {
    return <div key={name} className='grid grid-cols-2 gap-4 max-w-6xl mx-auto'>
        <div className='col-span-3 row-span-3 '>
            <div className='inline-block bg-yellow-400'>
                {name}
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
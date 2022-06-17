import { sectionsItems } from '../contents/home';

function Sections() {
    return <>
        {
            sectionsItems.map(section => {
                return <div key={section.name} className='Section'>
                    {
                        section.items.map(item => {
                            return <div key={item.title} className='section-item'>
                                {item.title}
                            </div>
                        })
                    }
                </div>
            })
        }
    </>
}

export default Sections
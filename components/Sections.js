import { sectionsItems } from '../contents/home';
import Section from './Section';

function Sections() {
    return <>
        <div className='mx-auto justify-center px-8 left-1/2  transform px-8 max-w-6xl'>
            {
                sectionsItems.map(section => <Section key={section.name} name={section.name} items={section.items} />)
            }
        </div>
    </>
}

export default Sections
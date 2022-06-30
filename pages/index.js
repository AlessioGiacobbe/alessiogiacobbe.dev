import Sections from '../components/Sections';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';

export default function Home() {
  return (
    <div className="mx-auto ">
      <Hero />
      <Sections />
      <Contacts />
      <Footer />
    </div>
  )
}

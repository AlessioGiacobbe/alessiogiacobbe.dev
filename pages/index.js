import Sections from '../components/Sections';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl">
      <Hero />
      <Sections />
      <Footer />
    </div>
  )
}

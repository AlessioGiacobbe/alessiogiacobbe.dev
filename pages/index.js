import Hero from '../components/Hero';
import StackSection from '../components/StackSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto px-8">
            <Hero />
            <div className="grid grid-cols-5 gap-10 pb-16">
                <div className="col-span-2 space-y-10">
                    <StackSection />
                    <WorkSection />
                </div>
                <div className="col-span-3">
                    <ProjectsSection />
                </div>
            </div>
            <Footer />
        </div>
    );
}

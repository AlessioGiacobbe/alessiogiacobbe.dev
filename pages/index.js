import Hero from '../components/Hero';
import StackSection from '../components/StackSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto px-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
                <Hero />
            </div>
            <div className="grid grid-cols-2 gap-6 pb-12">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
                    <StackSection />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <WorkSection />
                </div>
            </div>
            <div className="pb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <ProjectsSection />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Footer />
            </div>
        </div>
    );
}

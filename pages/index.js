import useTranslation from 'next-translate/useTranslation';
import Hero from '../components/Hero';
import StackSection from '../components/StackSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
    const { t } = useTranslation('index');

    return (
        <div className="max-w-6xl mx-auto px-16">
            {/* Top info bar with vertical dividers */}
            <nav className="animate-fade-in-up flex items-start py-10 border-b border-line">
                <div className="pr-12 border-r border-line">
                    <span className="text-muted text-xs block mb-1">{'//portfolio'}</span>
                    <span>alessiogiacobbe.dev</span>
                </div>
                <div className="px-12 border-r border-line">
                    <span className="text-muted text-xs block mb-1">{'//contact'}</span>
                    <a href="mailto:giacobbealessio@gmail.com"
                        className="hover:text-accent transition-colors">
                        giacobbealessio@gmail.com
                    </a>
                </div>
                <div className="px-12 border-r border-line">
                    <span className="text-muted text-xs block mb-1">{'//github'}</span>
                    <a href="https://github.com/AlessioGiacobbe" target="_blank" rel="noopener noreferrer"
                        className="hover:text-accent transition-colors">
                        github.com/AlessioGiacobbe
                    </a>
                </div>
                <div className="pl-12">
                    <ThemeToggle />
                </div>
            </nav>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.08s' }}>
                <Hero />
            </div>

            <div className="animate-fade-in-up border-t border-line pt-14" style={{ animationDelay: '0.16s' }}>
                <WorkSection />
            </div>

            <div className="animate-fade-in-up border-t border-line pt-14 mt-14" style={{ animationDelay: '0.24s' }}>
                <StackSection />
            </div>

            <div className="animate-fade-in-up border-t border-line pt-14 mt-14" style={{ animationDelay: '0.32s' }}>
                <ProjectsSection />
            </div>

            <div className="animate-fade-in-up mt-14" style={{ animationDelay: '0.38s' }}>
                <Footer />
            </div>
        </div>
    );
}

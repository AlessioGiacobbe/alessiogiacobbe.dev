import useTranslation from 'next-translate/useTranslation';
import Hero from '../components/Hero';
import StackSection from '../components/StackSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import { FiGlobe, FiMail, FiGithub } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {
    const { t } = useTranslation('index');

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-16">
            {/* Top info bar with vertical dividers */}
            <nav className="animate-fade-in-up py-4 md:py-10 border-b border-line">
                {/* Mobile: icon row */}
                <div className="flex items-center gap-5 md:hidden">
                    <Link href="/" className="text-muted hover:text-accent transition-colors">
                        <FiGlobe size={18} />
                    </Link>
                    <a href="mailto:giacobbealessio@gmail.com" className="text-muted hover:text-accent transition-colors">
                        <FiMail size={18} />
                    </a>
                    <a href="https://github.com/AlessioGiacobbe" target="_blank" rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors">
                        <FiGithub size={18} />
                    </a>
                    <div className="ml-auto">
                        <ThemeToggle />
                    </div>
                </div>
                {/* Desktop: single row with dividers */}
                <div className="hidden md:flex items-start">
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

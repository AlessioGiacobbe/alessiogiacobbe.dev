import Hero from '../components/Hero';
import StackSection from '../components/StackSection';
import WorkSection from '../components/WorkSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import Link from 'next/link';

const EMAIL = 'giacobbealessio@gmail.com';
const GITHUB = 'https://github.com/AlessioGiacobbe';
const CV = '/Alessio Giacobbe CV.pdf';

export default function Home() {
    return (
        <>
            <header className="container flex h-[72px] items-center justify-between gap-6">
                <Link href="/" className="link font-semibold text-ink">alessiogiacobbe.dev</Link>
                <nav aria-label="contacts" className="flex items-center gap-6 text-sm">
                    <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="link">github</a>
                    <a href={CV} download className="link hidden md:inline">cv</a>
                    <a href={`mailto:${EMAIL}`} className="link hidden md:inline">{EMAIL}</a>
                    <ThemeToggle />
                </nav>
            </header>

            <main id="main">
                <section className="lg:flex lg:min-h-[calc(100dvh-72px)] lg:items-center">
                    <div className="container grid items-center gap-y-16 py-12 lg:py-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-24">
                        <Hero email={EMAIL} cv={CV} />
                        <ProjectsSection />
                    </div>
                </section>

                <WorkSection />
                <StackSection />

                <section className="pt-[var(--section-gap)] pb-[var(--section-gap-s)]">
                    <div className="container">
                        <div className="grid gap-y-10 border-t-2 border-ink pt-16 xl:grid-cols-12 xl:items-end xl:gap-x-8">
                            <h2 className="max-w-none whitespace-nowrap text-[clamp(1.125rem,5vw,var(--text-section))] xl:col-span-9">
                                <a href={`mailto:${EMAIL}`} className="link text-ink underline decoration-muted hover:decoration-accent">{EMAIL}</a>
                            </h2>
                            <ul className="flex flex-col gap-3 xl:col-span-3">
                                <li><a href={CV} download className="link">alessio_giacobbe_cv.pdf</a></li>
                                <li><a href={GITHUB} target="_blank" rel="noopener noreferrer" className="link">github.com/AlessioGiacobbe</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

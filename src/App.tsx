import { ThemeProvider } from '@/hooks/useTheme';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                <Navigation />

                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Services />
                    <Testimonials />
                    <Contact />
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;

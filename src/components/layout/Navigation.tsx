import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { siteConfig, navigation } from '@/config/site';
import Button from '@/components/ui/Button';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navigation.map((item) => item.href.slice(1));
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(`#${current}`);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'glass shadow-md py-4'
                    : 'bg-transparent py-6'
            )}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-2xl font-bold font-display gradient-text"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        {siteConfig.name}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={cn(
                                    'text-base font-medium transition-colors relative',
                                    'hover:text-primary-600 dark:hover:text-primary-400',
                                    activeSection === item.href
                                        ? 'text-primary-600 dark:text-primary-400'
                                        : 'text-gray-700 dark:text-gray-300',
                                    activeSection === item.href &&
                                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-600 dark:after:bg-primary-400'
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side actions */}
                    <div className="flex items-center gap-4">
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>

                        {/* Download Resume */}
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => window.open(siteConfig.resume, '_blank')}
                            className="hidden md:inline-flex"
                            leftIcon={<Download className="w-4 h-4" />}
                        >
                            Resume
                        </Button>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 py-4 glass rounded-xl animate-fade-in-up">
                        <div className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className={cn(
                                        'px-4 py-2 text-base font-medium transition-colors rounded-lg',
                                        'hover:bg-gray-100 dark:hover:bg-gray-800',
                                        activeSection === item.href
                                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                                            : 'text-gray-700 dark:text-gray-300'
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="mt-4 px-4">
                                <Button
                                    variant="primary"
                                    size="md"
                                    onClick={() => window.open(siteConfig.resume, '_blank')}
                                    className="w-full"
                                    leftIcon={<Download className="w-4 h-4" />}
                                >
                                    Download Resume
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

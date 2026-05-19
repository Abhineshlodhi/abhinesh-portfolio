import { siteConfig, navigation } from '@/config/site';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            href: siteConfig.social.github,
            icon: Github,
        },
        {
            name: 'LinkedIn',
            href: siteConfig.social.linkedin,
            icon: Linkedin,
        },
        {
            name: 'Twitter',
            href: siteConfig.social.twitter,
            icon: Twitter,
        },
        {
            name: 'Email',
            href: `mailto:${siteConfig.email}`,
            icon: Mail,
        },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold font-display gradient-text mb-4">
                            {siteConfig.name}
                        </h3>
                        <p className="text-gray-400 mb-4">{siteConfig.tagline}</p>
                        <p className="text-sm text-gray-500">{siteConfig.location}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.querySelector(item.href);
                                            if (element) {
                                                const offset = 80;
                                                const elementPosition = element.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: 'smooth',
                                                });
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4 mb-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return social.href ? (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ) : null;
                            })}
                        </div>
                        <p className="text-sm text-gray-400">
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="hover:text-primary-400 transition-colors"
                            >
                                {siteConfig.email}
                            </a>
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                        aria-label="Back to top"
                    >
                        Back to top
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

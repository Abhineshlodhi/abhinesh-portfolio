import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { downloadFile } from '@/lib/utils';
import { ChevronDown, Download, Eye } from 'lucide-react';

export default function Hero() {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate particles with GSAP
        if (particlesRef.current) {
            const particles = particlesRef.current.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                gsap.to(particle, {
                    y: 'random(-100, 100)',
                    x: 'random(-100, 100)',
                    duration: 'random(3, 6)',
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.1,
                });
            });
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 dark:from-gray-900 dark:via-primary-950/20 dark:to-secondary-950/20">
            {/* Animated Background */}
            <div ref={particlesRef} className="absolute inset-0 overflow-hidden opacity-30">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-500" />

            {/* Content */}
            <div className="container-custom relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={itemVariants}
                        className="text-primary-600 dark:text-primary-400 font-medium text-lg mb-4"
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 gradient-text"
                    >
                        {siteConfig.name}
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-gray-800 dark:text-gray-200 mb-6"
                    >
                        {siteConfig.tagline}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
                    >
                        {siteConfig.description}
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-8 mb-10"
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-1">1+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Year Learning</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-1">3+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-1">100%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Passion Driven</div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => {
                                const element = document.getElementById('projects');
                                if (element) {
                                    const offset = 80;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                }
                            }}
                            leftIcon={<Eye className="w-5 h-5" />}
                            className="min-w-[200px]"
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => downloadFile(siteConfig.resume, 'Abhinesh_Lodhi_Resume.pdf')}
                            leftIcon={<Download className="w-5 h-5" />}
                            className="min-w-[200px]"
                        >
                            Download Resume
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 flex justify-center"
                    >
                        <button
                            onClick={() => {
                                const element = document.getElementById('about');
                                if (element) {
                                    const offset = 80;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                }
                            }}
                            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                            aria-label="Scroll to about section"
                        >
                            <span className="text-sm font-medium">Scroll to explore</span>
                            <ChevronDown className="w-6 h-6 animate-bounce-slow group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

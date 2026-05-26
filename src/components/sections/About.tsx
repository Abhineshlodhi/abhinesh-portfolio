import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { downloadFile } from '@/lib/utils';
import { Download, Code, Palette, Rocket } from 'lucide-react';

export default function About() {
    const highlights = [
        {
            icon: Code,
            title: 'Technical Excellence',
            description: 'Mastering modern web technologies and best practices',
        },
        {
            icon: Palette,
            title: 'Design Thinking',
            description: 'Creating beautiful, user-centric interfaces',
        },
        {
            icon: Rocket,
            title: 'Performance Focus',
            description: 'Building fast, optimized, and accessible applications',
        },
    ];

    const timeline = [
        { year: '2025', event: 'PG-DBDA at C-DAC, Bengaluru' },
        { year: '2025', event: 'Python Intern at CredenTek' },
        { year: '2024', event: 'Python Full Stack Training at Qspiders' },
        { year: '2024', event: 'Graduated B.Tech in CSE from TIT&S Bhopal' },
        { year: '2020', event: 'Started B.Tech at TIT&S Bhopal' },
    ];

    return (
        <Section id="about" background="muted">
            <SectionHeader
                title="About Me"
                subtitle="Passionate about creating exceptional digital experiences"
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                        <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-6xl">
                            👨‍💻
                        </div>
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-6 glass-card p-6">
                        <div className="text-3xl font-bold gradient-text">1+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Year of Learning</div>
                    </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Building User-Centred Applications with Passion
                    </h3>

                    <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
                        <p>
                            I'm an aspiring Data Scientist and AI Engineer with a strong foundation in Python,
                            machine learning, and big data technologies. Currently pursuing a PG-DBDA at C-DAC Bengaluru,
                            I'm passionate about building intelligent, data-driven applications.
                        </p>
                        <p>
                            My journey started with a B.Tech in Computer Science Engineering from TITS Bhopal (2020-2024),
                            followed by intensive Python Full Stack Training at Qspiders and an internship at CredenTek. I've developed
                            projects ranging from RAG-based AI assistants to retail sales forecasting systems.
                        </p>
                        <p>
                            I'm a strong communicator, collaborative team player, and always eager to learn and
                            grow in a dynamic development environment. I believe in writing clean, maintainable
                            code that makes a real impact.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {highlights.map((highlight, index) => {
                            const Icon = highlight.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-3">
                                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {highlight.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => downloadFile(siteConfig.resume, 'Abhinesh_Lodhi_Resume.pdf')}
                        leftIcon={<Download className="w-5 h-5" />}
                    >
                        Download Resume
                    </Button>
                </motion.div>
            </div>

            {/* Timeline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-20"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    My Journey
                </h3>
                <div className="max-w-3xl mx-auto">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex gap-6 mb-8 last:mb-0"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    {item.year}
                                </div>
                                {index < timeline.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-primary-200 dark:bg-primary-800 mt-2" />
                                )}
                            </div>
                            <div className="pb-8">
                                <p className="text-lg text-gray-900 dark:text-white">{item.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}

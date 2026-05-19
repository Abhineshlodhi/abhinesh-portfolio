import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
    return (
        <Section id="experience">
            <SectionHeader
                title="Work Experience"
                subtitle="My professional journey and achievements"
            />

            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative pl-8 pb-12 last:pb-0"
                    >
                        {/* Timeline line */}
                        {index < experiences.length - 1 && (
                            <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />
                        )}

                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-white" />
                        </div>

                        {/* Content */}
                        <div className="glass-card p-6">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {exp.role}
                                    </h3>
                                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                                        {exp.company}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>
                                        {new Date(exp.startDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                        })}{' '}
                                        -{' '}
                                        {exp.endDate
                                            ? new Date(exp.endDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                            })
                                            : 'Present'}
                                    </span>
                                </div>
                            </div>

                            {/* Achievements */}
                            <ul className="space-y-2 mb-4">
                                {exp.achievements.map((achievement, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-600 dark:text-gray-400 flex items-start"
                                    >
                                        <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                    <Badge key={i} variant="neutral" size="sm">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

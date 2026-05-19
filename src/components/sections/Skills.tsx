import { useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { skills, skillCategories } from '@/data/skills';

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredSkills =
        selectedCategory === 'all'
            ? skills
            : skills.filter((skill) => skill.category === selectedCategory);

    return (
        <Section id="skills">
            <SectionHeader
                title="Skills & Expertise"
                subtitle="Technologies and tools I work with to bring ideas to life"
            />

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Badge
                    variant={selectedCategory === 'all' ? 'primary' : 'neutral'}
                    size="lg"
                    className="cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedCategory('all')}
                >
                    All Skills
                </Badge>
                {skillCategories.map((category) => (
                    <Badge
                        key={category.id}
                        variant={selectedCategory === category.id ? 'primary' : 'neutral'}
                        size="lg"
                        className="cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        {category.name}
                    </Badge>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSkills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                        <Card
                            variant="glass"
                            hover
                            className="p-6 h-full group"
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {skill.name}
                            </h3>

                            {/* Category Badge */}
                            <Badge variant="neutral" size="sm" className="mb-4">
                                {skillCategories.find((cat) => cat.id === skill.category)?.name}
                            </Badge>

                            {/* Proficiency Bar */}
                            <div className="mb-3">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                                        {skill.proficiency}%
                                    </span>
                                </div>
                                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.proficiency}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Experience */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                <strong className="text-gray-900 dark:text-white">
                                    {skill.yearsOfExperience}+ years
                                </strong>{' '}
                                of experience
                            </p>

                            {/* Description */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {skill.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Summary Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {skillCategories.slice(0, 4).map((category) => {
                    const categorySkills = skills.filter((s) => s.category === category.id);
                    return (
                        <div key={category.id} className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">
                                {categorySkills.length}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{category.name}</div>
                        </div>
                    );
                })}
            </motion.div>
        </Section>
    );
}

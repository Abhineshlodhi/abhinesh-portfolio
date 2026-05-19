import { useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Card, { CardBody, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Github, ExternalLink } from 'lucide-react';

// Abhinesh Lodhi's Projects
const projects = [
    {
        id: '1',
        title: 'RAG-Based AI Assistant',
        description: 'Built a RAG assistant using LangChain, LlamaIndex, vector embeddings, semantic search, and LLM-based response generation workflows.',
        image: '🧠',
        tags: ['Python', 'Django', 'LangChain', 'LlamaIndex', 'OpenAI', 'Vector Embeddings'],
        category: 'ml',
        featured: true,
    },
    {
        id: '2',
        title: 'Multi-Agent AI Research Assistant',
        description: 'Built a production-grade multi-agent AI research assistant using LangGraph and LangChain to orchestrate autonomous workflows for semantic retrieval, summarization, and report generation.',
        image: '🤖',
        tags: ['Python', 'FastAPI', 'LangGraph', 'FAISS', 'Pinecone', 'Redis', 'MLflow', 'QLoRA', 'Docker'],
        category: 'ml',
        featured: true,
    },
    {
        id: '3',
        title: 'Network Intrusion Detection System',
        description: 'Built a machine learning-based analytics system for real-time network traffic classification and anomaly detection, achieving 95%+ prediction accuracy.',
        image: '🛡️',
        tags: ['Python', 'Django', 'Scikit-learn', 'Scapy', 'Pandas', 'MySQL'],
        category: 'ml',
        githubUrl: 'https://github.com/Abhineshlodhi/NIDS',
    },
    {
        id: '4',
        title: 'Retail Sales Forecasting & Demand Analytics System',
        description: 'Developed an end-to-end Data Analytics and ML system to analyze retail sales data and forecast product demand using statistical modeling techniques.',
        image: '📈',
        tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL'],
        category: 'ml',
    },
    {
        id: '5',
        title: 'Full Stack E-commerce Platform',
        description: 'Developed a Django-based e-commerce platform with scalable backend architecture, optimized MySQL database schemas, and robust RESTful APIs.',
        image: '🛒',
        tags: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'REST APIs'],
        category: 'web',
        githubUrl: 'https://github.com/Abhineshlodhi/E-commerce',
    },
    {
        id: '6',
        title: 'TaskFlow -- Team Task Manager',
        description: 'Developed a full-stack team task management platform with Kanban-style workflows, JWT authentication, and real-time task progress tracking.',
        image: '📝',
        tags: ['Python', 'Django', 'DRF', 'React', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
        category: 'web',
        githubUrl: 'https://github.com/Abhineshlodhi/team-task-manager',
        liveUrl: 'https://team-task-manager-sigma-henna.vercel.app/',
    },
    {
        id: '7',
        title: 'Personal Portfolio Website',
        description: 'Developed a production-ready personal portfolio website using React, TypeScript, Tailwind CSS, and Framer Motion with modern UI/UX design.',
        image: '✨',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        category: 'web',
    },
];

const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'ml', name: 'ML/AI' },
];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter((proj) => proj.category === selectedCategory);

    return (
        <Section id="projects" background="muted">
            <SectionHeader
                title="Featured Projects"
                subtitle="Showcasing my best work and creative solutions"
            />

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
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

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Card variant="glass" hover className="h-full flex flex-col">
                            {/* Project Image/Icon */}
                            <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 rounded-t-xl flex items-center justify-center text-6xl relative overflow-hidden">
                                {project.image}
                                {project.featured && (
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="warning" size="sm">
                                            Featured
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            <CardBody className="flex-grow">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <Badge key={i} variant="neutral" size="sm">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardBody>

                            <CardFooter className="flex gap-3">
                                {project.githubUrl && (
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => window.open(project.githubUrl, '_blank')}
                                        leftIcon={<Github className="w-4 h-4" />}
                                        className="flex-1"
                                    >
                                        View on GitHub
                                    </Button>
                                )}
                                {project.liveUrl && (
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={() => window.open(project.liveUrl, '_blank')}
                                        leftIcon={<ExternalLink className="w-4 h-4" />}
                                        className="flex-1"
                                    >
                                        Visit Website
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

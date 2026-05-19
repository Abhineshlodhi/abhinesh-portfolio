import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Card, { CardBody } from '@/components/ui/Card';
import { services } from '@/data/services';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Services() {
    return (
        <Section id="services" background="muted">
            <SectionHeader
                title="Services"
                subtitle="How I can help bring your vision to life"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Card variant="glass" hover className="h-full">
                            <CardBody className="flex flex-col h-full">
                                {/* Icon */}
                                <div className="text-5xl mb-4">{service.icon}</div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                    {service.description}
                                </p>

                                {/* Deliverables */}
                                <div className="space-y-2 mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                                        Deliverables:
                                    </h4>
                                    <ul className="space-y-1">
                                        {service.deliverables.slice(0, 3).map((deliverable, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                                            >
                                                <span className="text-primary-600 dark:text-primary-400 mr-2">✓</span>
                                                {deliverable}
                                            </li>
                                        ))}
                                        {service.deliverables.length > 3 && (
                                            <li className="text-sm text-gray-500 dark:text-gray-500 italic">
                                                +{service.deliverables.length - 3} more...
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                {/* Timeline */}
                                {service.timeline && (
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        <strong className="text-gray-900 dark:text-white">Timeline:</strong>{' '}
                                        {service.timeline}
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 text-center"
            >
                <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                            const offset = 80;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - offset;
                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        }
                    }}
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                    Let's Work Together
                </Button>
            </motion.div>
        </Section>
    );
}

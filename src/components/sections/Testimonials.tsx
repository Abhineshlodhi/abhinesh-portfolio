import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Card, { CardBody } from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <Section id="testimonials" background="gradient">
            <SectionHeader
                title="Client Testimonials"
                subtitle="What people say about working with me"
            />

            <div className="max-w-4xl mx-auto">
                {/* Main Testimonial Card */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card variant="glass" className="p-8 md:p-12">
                                <CardBody>
                                    {/* Quote Icon */}
                                    <Quote className="w-12 h-12 text-primary-500/20 mb-6" />

                                    {/* Rating */}
                                    {currentTestimonial.rating && (
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* Feedback */}
                                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                                        "{currentTestimonial.feedback}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-2xl">
                                            👤
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg text-gray-900 dark:text-white">
                                                {currentTestimonial.name}
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                {currentTestimonial.role} at {currentTestimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                            ? 'bg-primary-600 w-8'
                                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 grid grid-cols-3 gap-8 text-center"
                >
                    <div>
                        <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Client Satisfaction
                        </div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold gradient-text mb-2">5.0</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

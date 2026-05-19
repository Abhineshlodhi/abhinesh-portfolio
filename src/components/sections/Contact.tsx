import { useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/layout/Section';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';
import { siteConfig } from '@/config/site';
import { Send, Mail, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log('Form data:', formData);
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 2000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: siteConfig.email,
            href: `mailto:${siteConfig.email}`,
        },
        {
            icon: MapPin,
            label: 'Location',
            value: siteConfig.location,
        },
        {
            icon: Clock,
            label: 'Status',
            value: siteConfig.availability,
        },
    ];

    const socialLinks = [
        { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
        { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
        { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    ];

    return (
        <Section id="contact">
            <SectionHeader
                title="Get In Touch"
                subtitle="Have a project in mind? Let's create something amazing together"
            />

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Let's talk about your project
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            I'm always interested in hearing about new projects and opportunities. Whether
                            you have a question or just want to say hi, feel free to reach out!
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Card key={index} variant="glass" className="p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                {item.label}
                                            </div>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <div className="text-gray-900 dark:text-white font-medium">
                                                    {item.value}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Follow me
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return social.href ? (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors group"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Card variant="glass" className="p-8">
                        <CardBody>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />

                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    required
                                />

                                <Input
                                    label="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    required
                                />

                                <Textarea
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    required
                                />

                                {submitStatus === 'success' && (
                                    <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                                        ✓ Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                                        ✗ Something went wrong. Please try again.
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    isLoading={isSubmitting}
                                    leftIcon={<Send className="w-5 h-5" />}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </CardBody>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}

import type { Service } from '@/types';

export const services: Service[] = [
    {
        id: '1',
        title: 'UI/UX Design',
        description:
            'Creating intuitive and visually stunning user interfaces that delight users and drive engagement. From wireframes to high-fidelity prototypes.',
        icon: '🎨',
        deliverables: [
            'User research and persona development',
            'Wireframes and user flows',
            'High-fidelity mockups',
            'Interactive prototypes',
            'Design system creation',
            'Usability testing',
        ],
        timeline: '2-4 weeks',
    },
    {
        id: '2',
        title: 'Frontend Development',
        description:
            'Building modern, responsive, and performant web applications using the latest technologies and best practices.',
        icon: '💻',
        deliverables: [
            'Single Page Applications (SPAs)',
            'Progressive Web Apps (PWAs)',
            'Server-Side Rendered apps',
            'Responsive layouts',
            'Component libraries',
            'API integration',
        ],
        timeline: '4-8 weeks',
    },
    {
        id: '3',
        title: 'Web Performance Optimization',
        description:
            'Analyzing and optimizing web applications for speed, efficiency, and superior user experience. Achieving perfect Lighthouse scores.',
        icon: '⚡',
        deliverables: [
            'Performance audit',
            'Code splitting and lazy loading',
            'Image optimization',
            'Bundle size reduction',
            'Core Web Vitals optimization',
            'Performance monitoring setup',
        ],
        timeline: '1-2 weeks',
    },
    {
        id: '4',
        title: 'Accessibility Audits',
        description:
            'Ensuring your website is accessible to all users, meeting WCAG 2.1 AA standards and improving inclusivity.',
        icon: '♿',
        deliverables: [
            'Accessibility audit report',
            'WCAG compliance assessment',
            'Screen reader testing',
            'Keyboard navigation review',
            'Color contrast analysis',
            'Remediation recommendations',
        ],
        timeline: '1 week',
    },
    {
        id: '5',
        title: 'Product Prototyping',
        description:
            'Rapid prototyping to validate ideas, test concepts, and gather feedback before full development.',
        icon: '🚀',
        deliverables: [
            'Clickable prototypes',
            'User testing sessions',
            'Feedback analysis',
            'Iteration and refinement',
            'Technical feasibility assessment',
            'Implementation roadmap',
        ],
        timeline: '1-3 weeks',
    },
    {
        id: '6',
        title: 'Technical Consulting',
        description:
            'Expert guidance on frontend architecture, technology stack selection, and development best practices.',
        icon: '🎯',
        deliverables: [
            'Architecture review',
            'Technology stack recommendations',
            'Code review and best practices',
            'Team training and workshops',
            'Documentation',
            'Strategic planning',
        ],
        timeline: 'Ongoing',
    },
];

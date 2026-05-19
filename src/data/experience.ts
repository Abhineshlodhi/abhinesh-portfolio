import type { Experience } from '@/types';

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'CredenTek Software & Consultancy Pvt. Ltd., Pune, India',
        role: 'Python Intern',
        startDate: '2025-06',
        endDate: '2025-08',
        achievements: [
            'Developed Python-based ETL pipelines for processing CSV, XLSX, and PDF datasets, improving data cleaning, preprocessing, and validation workflows',
            'Analyzed structured and transactional datasets to generate analytical summaries and improve backend data processing efficiency',
            'Automated validation and workflow management processes using Python and SQL for reliable large-scale enterprise data handling',
            'Assisted in debugging, API integrations, and Agile/SDLC engineering practices to improve operational reliability and workflow efficiency',
        ],
        technologies: ['Python', 'SQL', 'ETL', 'APIs', 'Agile'],
    },
    {
        id: '2',
        company: 'Qspiders',
        role: 'Python Full Stack Training',
        startDate: '2024-10',
        endDate: '2025-05',
        achievements: [
            'Mastered Python Basic & Advanced programming concepts',
            'Developed expertise in HTML, CSS, and JavaScript for frontend development',
            'Built backend applications using Django and FastAPI frameworks',
            'Worked with Oracle SQL for database management',
            'Built complete E-commerce Web Application as capstone project',
        ],
        technologies: ['Python', 'Django', 'FastAPI', 'HTML', 'CSS', 'JavaScript', 'Oracle SQL'],
    },
];

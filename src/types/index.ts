// Core types
export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    images?: string[];
    tags: string[];
    category: 'web' | 'mobile' | 'design' | 'other';
    complexity: 'beginner' | 'intermediate' | 'advanced';
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
    caseStudy?: CaseStudy;
}

export interface CaseStudy {
    problem: string;
    solution: string;
    research?: string;
    personas?: string[];
    wireframes?: string[];
    architecture?: string;
    techStack: string[];
    challenges: string[];
    results: string[];
    metrics?: Metric[];
}

export interface Metric {
    label: string;
    value: string;
    description?: string;
}

export interface Skill {
    id: string;
    name: string;
    category: 'frontend' | 'backend' | 'design' | 'devops' | 'testing' | 'tools' | 'ai' | 'data';
    icon: string;
    proficiency: number; // 0-100
    yearsOfExperience: number;
    description: string;
}

export interface Experience {
    id: string;
    company: string;
    companyLogo?: string;
    role: string;
    startDate: string;
    endDate?: string; // undefined means current
    achievements: string[];
    technologies: string[];
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    deliverables: string[];
    timeline?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    image?: string;
    feedback: string;
    rating?: number;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    category: string;
    tags: string[];
    publishedAt: string;
    readTime: number;
    author: {
        name: string;
        avatar?: string;
    };
}

export interface SiteConfig {
    name: string;
    title: string;
    description: string;
    tagline: string;
    url: string;
    email: string;
    phone?: string;
    location: string;
    availability: string;
    social: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        dribbble?: string;
        behance?: string;
        medium?: string;
    };
    resume: string;
}

export interface SEOConfig {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    twitterHandle?: string;
}

export type Theme = 'light' | 'dark';

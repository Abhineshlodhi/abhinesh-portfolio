import type { Skill } from '@/types';

export const skills: Skill[] = [
    // Programming Languages
    {
        id: 'languages',
        name: 'Languages',
        category: 'backend',
        icon: '💻',
        proficiency: 90,
        yearsOfExperience: 2,
        description: 'Python, SQL, Java, JavaScript, TypeScript, R, Bash, C/C++',
    },
    // AI, Machine Learning & NLP
    {
        id: 'ai-ml',
        name: 'AI, ML & NLP',
        category: 'ai',
        icon: '🧠',
        proficiency: 85,
        yearsOfExperience: 2,
        description: 'Scikit-learn, TensorFlow, PyTorch, Hugging Face, Transformers, Statistical Modeling, Predictive Modeling',
    },
    // Generative AI
    {
        id: 'gen-ai',
        name: 'Gen AI & Agentic AI',
        category: 'ai',
        icon: '🤖',
        proficiency: 85,
        yearsOfExperience: 1,
        description: 'LangChain, LangGraph, LlamaIndex, OpenAI, RAG, Semantic Search, FAISS, Pinecone',
    },
    // Frontend
    {
        id: 'frontend',
        name: 'Frontend Development',
        category: 'frontend',
        icon: '🎨',
        proficiency: 85,
        yearsOfExperience: 1,
        description: 'React.js, TypeScript, HTML5, CSS3, Tailwind CSS, Framer Motion, GSAP, Vite',
    },
    // Backend
    {
        id: 'backend',
        name: 'Backend & APIs',
        category: 'backend',
        icon: '⚙️',
        proficiency: 90,
        yearsOfExperience: 1,
        description: 'Django, FastAPI, Flask, DRF, REST APIs, JWT, OAuth, Microservices Basics',
    },
    // Data Engineering
    {
        id: 'data-engineering',
        name: 'Data Engineering & Big Data',
        category: 'data',
        icon: '🚰',
        proficiency: 80,
        yearsOfExperience: 1,
        description: 'Apache Spark, Kafka, Hadoop, Hive, Airflow, ETL pipelines',
    },
    // Databases
    {
        id: 'databases',
        name: 'Databases & Search',
        category: 'data',
        icon: '🗄️',
        proficiency: 85,
        yearsOfExperience: 2,
        description: 'MySQL, PostgreSQL, Redis, ElasticSearch, Relational & NoSQL Design',
    },
    // Cloud & DevOps
    {
        id: 'cloud-devops',
        name: 'Cloud, DevOps & CI/CD',
        category: 'devops',
        icon: '☁️',
        proficiency: 75,
        yearsOfExperience: 1,
        description: 'Docker, Kubernetes, Git, Linux, Vercel, Railway, AWS, OCI, MLflow',
    },
    // Visualization & Analytics
    {
        id: 'analytics',
        name: 'Visualization & Analytics',
        category: 'data',
        icon: '📊',
        proficiency: 85,
        yearsOfExperience: 1,
        description: 'EDA, Tableau, Power BI, Matplotlib, Seaborn, Chart.js',
    },
    // Automation & Testing
    {
        id: 'automation',
        name: 'Automation & Testing',
        category: 'tools',
        icon: '🔧',
        proficiency: 80,
        yearsOfExperience: 1,
        description: 'Selenium, Playwright, Browser Automation, Debugging',
    },
];

export const softSkills = [
    { id: 'teamwork', name: 'Teamwork', icon: '🤝' },
    { id: 'leadership', name: 'Leadership', icon: '👥' },
    { id: 'communication', name: 'Communication', icon: '💬' },
    { id: 'time-management', name: 'Time Management', icon: '⏰' },
    { id: 'active-listener', name: 'Active Listener', icon: '👂' },
];

export const skillCategories = [
    { id: 'backend', name: 'Backend', color: 'primary' },
    { id: 'ai', name: 'AI & ML', color: 'secondary' },
    { id: 'data', name: 'Data', color: 'accent' },
    { id: 'frontend', name: 'Frontend', color: 'primary' },
    { id: 'devops', name: 'DevOps', color: 'secondary' },
    { id: 'tools', name: 'Tools', color: 'accent' },
] as const;

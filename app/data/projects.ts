import { PROJECT_DESCRIPTIONS } from "./project-descriptions";

export type Project = {
    slug: string;
    title: string;
    role: string;
    description: string;
    highlights: readonly string[];
    tech: readonly string[];
    github: string;
    live: string;
    featured: boolean;
    year: string;
    image: string;
};

type ProjectCore = Omit<Project, "description">;

const projectCoreList: readonly ProjectCore[] = [
    {
        slug: "udharmaster-conversational-ai-ledger",
        title: "Udharmaster: AI Conversational Ledger & Billing Platform",
        role: "Senior AI & Backend Engineer",
        highlights: [
            "Engineered speech-to-text and conversational AI backend integrating Ollama LLMs locally and server-side.",
            "Built natural-language voice chatbot capable of opening ledgers, managing bills, and registering customers.",
            "Designed and implemented high-throughput Laravel REST API endpoints with MySQL.",
            "Engineered prompts and curated training datasets for intent recognition and confidence scoring.",
        ],
        tech: ["Laravel", "PHP", "Ollama", "Whisper", "LLM Integration", "Prompt Engineering", "MySQL"],
        github: "https://github.com/WaleedAnjum1",
        live: "https://play.google.com/store/apps/details?id=co.appdev.udharmaster&hl=en&pli=1",
        featured: true,
        year: "2026",
        image: "/images/projects/udharmaster.png",
    },
    {
        slug: "reteam-energy-platform",
        title: "ReTeam: Energy Management & Assessment Platform",
        role: "Frontend & Full-Stack Architect",
        highlights: [
            "Architected 15+ dynamic assessment modules in React and TypeScript with Context API.",
            "Engineered real-time energy savings calculation engine with debouncing, improving responsiveness by 40%.",
            "Built multi-utility configuration system cutting setup time by 60%.",
            "Integrated AI-driven data extraction from images, reducing manual entry time by 50%.",
        ],
        tech: ["React.js", "TypeScript", "Vite", "Material UI", "Python", "FastAPI", "PostgreSQL"],
        github: "https://github.com/WaleedAnjum1",
        live: "https://dev.reteamenergy.com/",
        featured: false,
        year: "2026",
        image: "/images/projects/reteam-energy.png",
    },
    {
        slug: "voiceclone-ai-rag-conversion",
        title: "VoiceClone AI: Multilingual RAG Voice Conversion",
        role: "AI & Pipeline Engineer",
        highlights: [
            "Researched and built a RAG-based multilingual voice conversion pipeline using Hugging Face & Whisper-TTS.",
            "Preserves original speaker vocal timbre and tone across multi-language audio outputs.",
            "Built asynchronous task processing pipelines with Python, FastAPI, Celery, and Redis.",
            "Implemented remote inference and experimentation tunnels via Google Colab.",
        ],
        tech: ["Python", "FastAPI", "Celery", "Redis", "Hugging Face", "Whisper-TTS", "RAG"],
        github: "https://github.com/WaleedAnjum1",
        live: "",
        featured: false,
        year: "2026",
        image: "/images/projects/beremote.png",
    },
    {
        slug: "cove-digital-childcare-ecosystem",
        title: "Cove: Digital Childcare Ecosystem",
        role: "Frontend Architect",
        highlights: [
            "Architected asset-intensive digital platform managing 165+ visual assets.",
            "Engineered a custom LazyImage architecture achieving 60-80% initial load time reduction.",
            "Implemented accessible UI with Radix UI primitives and real-time asynchronous validation.",
            "Delivered responsive mobile-first experiences with Tailwind CSS.",
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "REST APIs"],
        github: "https://github.com/WaleedAnjum1",
        live: "https://covechildcare.co.uk/",
        featured: true,
        year: "2025",
        image: "/images/projects/cove-childcare.png",
    },
    {
        slug: "cove-adult-care",
        title: "Cove Adult Care: Dignified Residential Care Platform",
        role: "Frontend Architect",
        highlights: [
            "Designed and developed a specialized adult residential and assisted living digital care platform.",
            "Engineered high-contrast WCAG 2.1 accessible layouts tailored for families and care seekers.",
            "Built responsive booking inquiry systems and service category discovery pathways.",
            "Optimized asset pipelines for rapid mobile loading and smooth micro-interactions.",
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "Accessibility (a11y)", "REST APIs"],
        github: "https://github.com/WaleedAnjum1",
        live: "http://coveadultcare.co.uk/",
        featured: true,
        year: "2026",
        image: "/images/projects/cove-adultcare.png",
    },
    {
        slug: "ara-architect",
        title: "ARA Architect: Architecture & Interior Design Portfolio",
        role: "Lead Frontend Developer",
        highlights: [
            "Engineered an editorial, minimalist digital architectural showcase with dark theme aesthetics (#232323).",
            "Implemented fluid responsive image galleries showcasing residential, commercial, and interior spaces.",
            "Designed typography hierarchy and micro-interactions reflecting high-end architectural craft.",
            "Optimized Core Web Vitals with preconnect font strategies and lazy-loading techniques.",
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "GSAP / Framer Motion", "Vite"],
        github: "https://github.com/WaleedAnjum1",
        live: "https://araarchitect.co.uk/",
        featured: false,
        year: "2026",
        image: "/images/projects/ara-architect.png",
    },
    {
        slug: "masroor-law",
        title: "Masroor Law Associates: Legal Counsel Platform",
        role: "Full-Stack Web Architect",
        highlights: [
            "Engineered a premier legal services website featuring custom branding (#B8985F luxury gold accents).",
            "Built comprehensive practice area directory covering Civil Litigation, Criminal Defense, and Family Law.",
            "Implemented localized SEO metadata, schema markup, and rapid consultation booking forms.",
            "Optimized bundle delivery via Vite module preloading for sub-second page loads.",
        ],
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "SEO Architecture"],
        github: "https://github.com/WaleedAnjum1",
        live: "https://masroorlaw.com/",
        featured: true,
        year: "2026",
        image: "/images/projects/masroor-law.png",
    },
    {
        slug: "awaken-with-ateka",
        title: "Awaken with Ateka: Therapy & Breathwork Sanctuary",
        role: "Lead Web Developer",
        highlights: [
            "Developed an organic, calming digital platform for Edinburgh-based Play Therapy & Breathwork practice.",
            "Engineered multi-pathway user journey for Breathwork, Play Therapy, and Restorative Experiences.",
            "Integrated third-party booking workflows (Eventbrite, direct scheduling) with seamless transitions.",
            "Implemented responsive editorial layouts and client testimonial storytelling components.",
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Eventbrite API"],
        github: "https://github.com/WaleedAnjum1",
        live: "https://awakenwithateka.com/",
        featured: true,
        year: "2026",
        image: "/images/projects/awaken-with-ateka.png",
    },
    {
        slug: "iclear-telehealth-platform",
        title: "iClear Platform: Telemedicine & Scheduling Infrastructure",
        role: "Backend & Systems Engineer",
        highlights: [
            "Engineered RESTful API architecture supporting 1,000+ concurrent active users.",
            "Optimized MongoDB schemas and indexing, cutting average query response times by 65%.",
            "Implemented real-time chat and dashboard features with Socket.IO and Redis session caching.",
            "Built secure authentication system with Passport.js, JWT, and OpenAPI Swagger documentation.",
        ],
        tech: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.IO", "Firebase", "Swagger"],
        github: "https://github.com/WaleedAnjum1",
        live: "https://iclear.vteamslabs.com/",
        featured: false,
        year: "2025",
        image: "/images/projects/iclear.png",
    },
    {
        slug: "ihunt-recruitment-platform",
        title: "iHunt Platform: Enterprise Recruitment & ATS",
        role: "Full-Stack Engineer",
        highlights: [
            "Engineered candidate search and applicant tracking pipeline workflows for hiring teams.",
            "Built high-performance API endpoints and query indexing for rapid candidate filtering.",
            "Integrated automated notification engines and status update synchronization.",
            "Delivered responsive dashboards for recruiters with real-time pipeline status tracking.",
        ],
        tech: ["Node.js", "Express.js", "React.js", "MongoDB", "Redis", "REST APIs"],
        github: "https://github.com/WaleedAnjum1",
        live: "https://ihunt.vteamslabs.com/",
        featured: false,
        year: "2023",
        image: "/images/projects/ihunt.png",
    },
    {
        slug: "mashroom-medical-edtech-ecosystem",
        title: "Mashroom: Medical EdTech Learning Platform",
        role: "Lead Full-Stack Developer",
        highlights: [
            "Architected comprehensive medical learning platform using Next.js and TypeScript.",
            "Engineered exam simulation engine and QBank with real-time persistence via TanStack Query.",
            "Integrated interactive Chart.js and Ant Design Plots for granular student analytics.",
            "Delivered adaptive learning insights to guide student revision workflows.",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Chart.js"],
        github: "https://github.com/WaleedAnjum1",
        live: "",
        featured: false,
        year: "2025",
        image: "/images/projects/mashroom-medical.jpg",
    },
];

function attachDescription(core: ProjectCore): Project {
    const description = PROJECT_DESCRIPTIONS[core.slug];
    if (description === undefined) {
        throw new Error(`Missing PROJECT_DESCRIPTIONS entry for slug: ${core.slug}`);
    }
    return { ...core, description };
}

const rawProjects: readonly Project[] = projectCoreList.map(attachDescription);

// Sort so that all featured projects appear first, followed by the rest
export const projects: readonly Project[] = [...rawProjects].sort((a, b) => {
    if (a.featured === b.featured) return 0;
    return a.featured ? -1 : 1;
});

export const getProjectBySlug = (slug: string): Project | null => {
    return projects.find((project) => project.slug === slug) ?? null;
};


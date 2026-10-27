/**
 * Long-form project blurbs keyed by slug.
 * Kept separate from the main project list so detail routing and static generation stay predictable.
 */
export const PROJECT_DESCRIPTIONS: Readonly<Record<string, string>> = {
    "udharmaster-conversational-ai-ledger":
        "An AI-powered digital ledger and billing platform leveraging Ollama LLMs and Speech-to-Text models to handle ledger creation, billing, and customer records via natural voice commands.",
    "reteam-energy-platform":
        "An enterprise energy analytics platform featuring 15+ dynamic assessment modules, a debounced calculation engine, and AI-powered visual data extraction.",
    "voiceclone-ai-rag-conversion":
        "A multilingual voice conversion pipeline leveraging Hugging Face transformers, OpenAI Whisper-TTS, and Celery task queues to preserve speaker vocal timbre across languages.",
    "cove-digital-childcare-ecosystem":
        "A high-performance digital ecosystem for childcare with a custom LazyImage architecture managing 165+ assets, accessible Radix UI primitives, and asynchronous validation.",
    "mashroom-medical-edtech-ecosystem":
        "A medical education platform built with Next.js, featuring real-time exam simulations, QBanks, and detailed student learning curve analytics via Chart.js.",
    "cove-adult-care":
        "A specialized, dignified digital care platform tailored for adult residential and support services, engineered with high-contrast accessibility standards and responsive UI architectures.",
    "ara-architect":
        "A minimalist, editorial architecture and interior design portfolio featuring fluid layout compositions, dynamic project showcases, and bespoke typography.",
    "masroor-law":
        "A premier law firm digital presence engineered with modern typography, localized SEO optimization, consultation booking workflows, and responsive practice area showcases.",
    "awaken-with-ateka":
        "A calming therapeutic wellness web application supporting Play & Creative Arts Therapy and Rebirthing Breathwork, featuring integrated session scheduling and community event bookings.",
    "iclear-telehealth-platform":
        "A healthcare communication platform built with Node.js, Express, Socket.IO, and Redis caching supporting 1,000+ concurrent users with indexed MongoDB schemas.",
    "ihunt-recruitment-platform":
        "An enterprise recruitment and applicant tracking platform engineered with high-throughput candidate matching, pipeline stage analytics, and automated notification engines.",
};

export function getProjectDescription(slug: string): string | undefined {
    return PROJECT_DESCRIPTIONS[slug];
}

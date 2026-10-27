"use client";

import { useRef } from "react";
import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Linkedin } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export type TestimonialItem = {
    name: string;
    role: string;
    relationship: string;
    initials: string;
    linkedin: string;
    content: string;
    highlight: string;
};

const testimonials: TestimonialItem[] = [
    {
        name: "Shah Zaib Khan",
        role: "Senior Full-Stack Engineer",
        relationship: "Worked on the same team",
        initials: "SK",
        linkedin: "https://www.linkedin.com/in/shah-zaib-khan-50470631/",
        highlight: "Dependable, cooperative, and goes beyond code reviews",
        content: "It was a genuine pleasure working alongside Waleed, who served as a React Front-end Developer on our project. Beyond writing clean, responsive front-end code, he brought something just as valuable: he is polite, cooperative, and the kind of teammate who makes a project run smoother. What stood out most was when he helped me work through a tricky issue even when he was no longer on the team. Any team looking for a dependable, easy-going, and skilled React developer would be lucky to have him."
    },
    {
        name: "Usman Mahmood",
        role: "Senior Mobile Engineer",
        relationship: "Collaborated across multiple projects",
        initials: "UM",
        linkedin: "https://www.linkedin.com/in/usmanmahmood940/",
        highlight: "Calm under pressure & consistently delivers ahead of deadlines",
        content: "I’ve had the opportunity to collaborate with Waleed on multiple projects, and what really stands out is the way he communicates and approaches problems. He stays calm and professional even in challenging situations, takes ownership of his work, and consistently delivers high-quality work well before deadlines. I’ve also learned a lot from him, especially around backend technologies and system concepts."
    },
    {
        name: "Sameer Rafiq",
        role: "B2B Growth & Lead Gen Strategist @ PureLogics",
        relationship: "Partnered on AI Voice Agent venture",
        initials: "SR",
        linkedin: "https://www.linkedin.com/in/sameer-rafiq-622a0034b/",
        highlight: "Built scalable AI voice agent from concept to production",
        content: "I worked with Waleed on building an AI voice agent that could make and receive calls on behalf of businesses, and I was genuinely impressed by his technical expertise and ability to turn an idea into a working product. Waleed handled the entire technical and development side—from building the voice agent and integrating underlying technologies to developing the application at scale across React, Next.js, Node.js, and FastAPI. He understands business requirements and delivers practical solutions."
    },
    {
        name: "Telha Wasim",
        role: "Senior iOS Engineer (Swift 6)",
        relationship: "Worked closely on full-stack & mobile systems",
        initials: "TW",
        linkedin: "https://www.linkedin.com/in/telha-wasim/",
        highlight: "Versatile full-stack architect across APIs and UI",
        content: "I’ve consistently been impressed by Waleed's expertise as a Senior Software Engineer across both frontend and backend development. Whether he’s building intuitive frontend experiences, designing backend services, or solving system-level API challenges, he quickly translates requirements into scalable, maintainable solutions. His ability to understand problems from both the user-facing and backend perspectives makes him particularly valuable."
    },
    {
        name: "Abdul Ahad Akram",
        role: "Founder, XenonDev",
        relationship: "Teamed up across university & commercial ventures",
        initials: "AA",
        linkedin: "https://www.linkedin.com/in/abdulahadakam/",
        highlight: "Translates complex architectures into elegant models",
        content: "Waleed possesses an exceptional capacity for cognitive clarity; he takes highly complex systems and translates them into elegant, accessible models. Having teamed up with him on various projects since university, I can vouch for both his technical rigor and his collaborative mindset. He is a phenomenal asset to any engineering team."
    },
    {
        name: "Abdullah Khalil",
        role: "CRM & Full Stack Engineer",
        relationship: "Academic collaborator & peer engineer",
        initials: "AK",
        linkedin: "https://www.linkedin.com/in/abdullah-khalil-2371a0233/",
        highlight: "Deeply user-centric systems thinker",
        content: "What makes Waleed exceptional as an engineer is his refusal to look at problems in isolation. Whenever an issue arises, Waleed looks past the immediate code to ask the bigger questions: Why did this happen, who is affected, and what stress is it causing them? He is genuinely motivated by relieving frustration for end-users, driving him to build durable, well-thought-out solutions rather than temporary fixes."
    },
    {
        name: "Usama Jehangir",
        role: "Software Engineer @ NETSOL",
        relationship: "Cross-company project collaborator",
        initials: "UJ",
        linkedin: "https://www.linkedin.com/in/usama-jehangir-750331206/",
        highlight: "Balances delivery speed with pristine software quality",
        content: "As a Senior Software Engineer, Waleed brings strong technical knowledge along with a practical and thoughtful approach to development. He is quick to understand complex requirements and can adapt easily when priorities change. Waleed consistently delivers with a good balance of speed and quality, and is always willing to take ownership when challenging technical problems arise."
    },
    {
        name: "Muhammad Huzaifa",
        role: "Software Engineer",
        relationship: "Mentored at NextBridge Ltd",
        initials: "MH",
        linkedin: "https://www.linkedin.com/in/huzaifahayee/",
        highlight: "Empowering mentor in full-stack MERN & backend architectures",
        content: "I had the opportunity to be mentored by Waleed Anjum during my internship at NextBridge Ltd. He was consistently patient, knowledgeable, and generous with his time, always willing to explain concepts and guide me through problems rather than simply giving me answers. His clear and constructive feedback helped me grow significantly as a backend/MERN developer."
    },
    {
        name: "Touseef Zia",
        role: "Sr. Software Engineer @ Nextbridge",
        relationship: "Collaborated across cross-functional engineering teams",
        initials: "TZ",
        linkedin: "https://www.linkedin.com/in/touseef-zia-8aa60b226/",
        highlight: "Adaptable, sharp, and dependable senior engineer",
        content: "I’ve had the opportunity to work with Waleed across different teams, and he has always stood out as a sharp and dependable software engineer. What I particularly appreciate is his ability to take ownership of his work, learn new concepts quickly, and remain reliable when projects get challenging. His problem-solving skills make him a valuable addition to any team."
    },
    {
        name: "Abdul Rafy",
        role: "Senior iOS Engineer @ Nextbridge Ltd",
        relationship: "Worked on the same team",
        initials: "AR",
        linkedin: "https://www.linkedin.com/in/abdulrafy345/",
        highlight: "Problem-solving mindset with strong full-stack ownership",
        content: "Waleed is a great full-stack resource with a strong technical skill set and a problem-solving mindset. He’s reliable, collaborative, and always willing to take ownership and deliver quality work."
    }
];

export default function Testimonials() {
    const sliderRef = useRef<HTMLDivElement>(null);
    
    // Duplicate twice for seamless infinite scrolling loop
    const loopedTestimonials = [...testimonials, ...testimonials];

    const containerRef = useGSAP(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        const section = slider.closest(".testimonials-section");
        if (!section) return;

        const totalWidth = slider.scrollWidth;
        const widthPerSet = totalWidth / 2;

        const animation = gsap.to(slider, {
            x: -widthPerSet,
            duration: 55,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % widthPerSet)
            }
        });

        // Pause on hover so visitors can comfortably read individual recommendations
        const onMouseEnter = () => animation.pause();
        const onMouseLeave = () => animation.play();

        slider.addEventListener("mouseenter", onMouseEnter);
        slider.addEventListener("mouseleave", onMouseLeave);

        // Section header reveal animation
        gsap.from(".testimonial-header", {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        return () => {
            slider.removeEventListener("mouseenter", onMouseEnter);
            slider.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <section ref={containerRef} className="testimonials-section relative w-full py-28 sm:py-32 overflow-hidden bg-background">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 mb-16 sm:mb-20">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <span className="testimonial-header font-mono text-xs uppercase tracking-[0.3em] text-foreground/45 font-medium">
                            Endorsements & Recommendations
                        </span>
                        <span className="hidden sm:inline-block h-px w-10 bg-border" aria-hidden />
                        <span className="testimonial-header font-mono text-[10px] uppercase tracking-widest text-primary/80">
                            Verified via LinkedIn
                        </span>
                    </div>
                    <h2 className="testimonial-header text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.9] text-foreground">
                        What People <br /> Say
                    </h2>
                    <p className="testimonial-header text-sm sm:text-base text-foreground/55 max-w-xl font-light">
                        Feedback from engineering teammates, technical founders, and mentored developers who have built production systems alongside me.
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden mask-fade-sides">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />

                <div ref={sliderRef} className="flex gap-6 sm:gap-8 w-max items-stretch pl-4 sm:pl-6 md:pl-12 lg:pl-20">
                    {loopedTestimonials.map((testimonial, index) => (
                        <div 
                            key={`${testimonial.name}-${index}`} 
                            className="w-[320px] sm:w-[420px] md:w-[480px] shrink-0 group relative select-none"
                        >
                            <div className="h-full bg-card/40 hover:bg-card/80 border border-border hover:border-foreground/30 transition-all duration-300 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                                <div>
                                    <div className="flex items-center justify-between mb-5 text-foreground/40">
                                        <Quote className="w-7 h-7 opacity-40 text-primary" />
                                        <a 
                                            href={testimonial.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/40 hover:text-primary transition-colors p-1"
                                            aria-label={`View ${testimonial.name}'s LinkedIn recommendation`}
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    </div>
                                    
                                    <h3 className="font-mono text-xs uppercase tracking-wider text-primary/90 font-semibold mb-3">
                                        "{testimonial.highlight}"
                                    </h3>

                                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-light mb-6">
                                        "{testimonial.content}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-3.5 pt-5 border-t border-border/70 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-mono font-bold flex items-center justify-center text-xs border border-primary/20 shrink-0">
                                        {testimonial.initials}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-bold text-foreground uppercase tracking-wider text-xs truncate">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-[11px] text-foreground/60 truncate mt-0.5">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-[9px] font-mono uppercase tracking-widest text-foreground/40 mt-0.5">
                                            {testimonial.relationship}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

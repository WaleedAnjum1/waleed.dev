"use client";

import Image from "next/image";
import { LazyMotion, domAnimation } from "framer-motion";
import {
    HeroAvailability,
    HeroBackdrop,
    HeroEnterBlock,
    HeroEnterSplitRow,
    HeroExploreLink,
    HeroResumeButton,
    HeroInteractivePortrait,
    HeroMotionRoot,
    HeroTechChips,
} from "./hero-interactive";

export default function Hero() {
    return (
        <LazyMotion features={domAnimation} strict>
        <section
            data-shoot-target="1"
            data-shoot-granularity="char"
            className="relative isolate w-full overflow-hidden bg-background contain-layout pb-8 min-h-[calc(100svh-var(--app-header-h,88px))] sm:min-h-[calc(72dvh-var(--app-header-h,88px))] sm:pb-10 md:min-h-0 md:pb-14 lg:pb-6 xl:flex xl:min-h-[calc(100svh-var(--app-header-h,88px))] xl:flex-col xl:justify-center xl:pb-8"
            style={{
                marginTop: "var(--app-header-h, 88px)",
            }}
        >
            <HeroBackdrop />
            <div className="relative z-10 mx-auto h-full min-h-0 w-full max-w-[1920px] px-4 sm:px-6 md:h-auto md:px-10 lg:px-14 xl:px-20">
                {/* Mobile layout */}
                <HeroMotionRoot className="md:hidden flex h-full flex-col justify-center gap-4 py-4 sm:py-6">
                    <HeroEnterSplitRow
                        left={
                            <div className="font-mono uppercase tracking-[0.28em] text-[10px] text-foreground/70">
                                <div>01/</div>
                                <div className="mt-2 text-foreground/55 tracking-[0.26em]">
                                    Engineered with
                                    <br />
                                    Precision
                                </div>
                            </div>
                        }
                        right={<HeroAvailability />}
                    />

                    <HeroEnterBlock drift="center">
                        <h1
                            data-shoot-target="1"
                            data-shoot-granularity="char"
                            className="text-foreground font-black uppercase leading-[0.9] tracking-[-0.05em] text-[clamp(2.6rem,11vw,4.6rem)]"
                        >
                            Senior
                            <br />
                            Software
                            <br />
                            Engineer
                        </h1>
                    </HeroEnterBlock>

                    <HeroEnterBlock drift="left">
                        <HeroTechChips />
                    </HeroEnterBlock>

                    <HeroEnterBlock drift="center">
                        <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-foreground/70 mb-2">
                            Applied AI &amp; Full Stack
                        </div>
                        <HeroInteractivePortrait frameClassName="w-full aspect-4/3 max-w-[480px] mx-auto">
                            <Image
                                src="/another-heropic-me.jpeg"
                                alt="Waleed Anjum"
                                width={1200}
                                height={900}
                                sizes="100vw"
                                priority
                                fetchPriority="high"
                                className="h-full w-full object-cover object-top"
                            />
                        </HeroInteractivePortrait>
                    </HeroEnterBlock>

                    <HeroEnterBlock drift="right">
                        <div className="text-right">
                            <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-foreground/72">
                                Architecting scalable platforms
                                <br />
                                &amp; Applied AI workflows.
                            </p>
                            <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.24em] text-foreground/55">
                                Open for Opportunities / Projects
                                <br />
                                Full-Stack &amp; AI Integrations
                            </div>
                        </div>
                    </HeroEnterBlock>

                    <HeroEnterBlock drift="right">
                        <div
                            data-shoot-target="1"
                            data-shoot-granularity="char"
                            className="text-right text-foreground font-black uppercase leading-[0.88] tracking-[-0.06em] text-[clamp(2.6rem,11vw,4.5rem)]"
                        >
                            Waleed
                            <br />
                            Anjum
                        </div>
                    </HeroEnterBlock>

                    <HeroEnterBlock>
                        <div className="text-right text-[10px] font-mono uppercase tracking-[0.26em] text-foreground/55">
                            {new Date().getFullYear()} Portfolio
                        </div>
                    </HeroEnterBlock>

                    <HeroEnterBlock>
                        <div className="grid grid-cols-12 items-start gap-4">
                            <div className="col-span-2 text-foreground/70 text-lg leading-none select-none">
                                <span aria-hidden="true">-&gt;</span>
                            </div>
                            <div className="col-span-10">
                                <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-foreground/70">
                                    Specializing in
                                    <br />
                                    React, Python, Laravel
                                    <br />
                                    &amp; Conversational AI
                                </div>
                            </div>
                        </div>
                    </HeroEnterBlock>

                    <HeroEnterBlock className="flex flex-wrap items-center justify-end gap-3" drift="right">
                        <HeroResumeButton />
                        <HeroExploreLink />
                    </HeroEnterBlock>

                    <HeroEnterBlock drift="right">
                        <div className="text-right text-[10px] font-mono uppercase tracking-[0.28em] text-foreground/55">
                            Portfolio of Waleed Anjum
                        </div>
                    </HeroEnterBlock>
                </HeroMotionRoot>

                {/* Desktop/tablet layout */}
                <HeroMotionRoot className="hidden flex-col gap-6 py-6 md:flex md:justify-start md:gap-8 md:py-8 lg:gap-10 lg:py-10">
                    {/* Top row */}
                    <div className="grid grid-cols-12 items-start gap-x-6 gap-y-10">
                        <HeroEnterBlock className="col-span-12 md:col-span-5 md:order-2">
                            <div className="flex flex-col items-end gap-3 md:items-end">
                                <HeroAvailability />
                                <div className="font-mono uppercase tracking-[0.28em] text-[10px] text-foreground/70 md:text-right">
                                    <div>01/</div>
                                    <div className="mt-2 text-foreground/55 tracking-[0.26em]">
                                        Full-Stack Systems
                                        <br />
                                        &amp; Applied AI
                                    </div>
                                </div>
                            </div>
                        </HeroEnterBlock>

                        <HeroEnterBlock className="col-span-12 md:col-span-7 md:order-1 md:text-left" drift="left">
                            <h1
                                data-shoot-target="1"
                                data-shoot-granularity="char"
                                className="text-foreground font-black uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(2.5rem,5.5vw,5.5rem)]"
                            >
                                Senior Software
                                <br />
                                Engineer
                            </h1>
                            <div className="mt-4">
                                <HeroTechChips />
                            </div>
                        </HeroEnterBlock>
                    </div>

                    {/* Bottom row */}
                    <div className="grid grid-cols-12 items-start gap-x-6 gap-y-8">
                        <HeroEnterBlock className="col-span-12 md:col-span-5 md:order-2" drift="right">
                            <div className="mb-8 max-w-104 md:ml-auto md:text-right">
                                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-foreground/72">
                                    Building fast, resilient web apps
                                    <br />
                                    and AI-powered automation.
                                </p>
                                <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.24em] text-foreground/55">
                                    Open for freelance / full-time
                                    <br />
                                    Nextbridge Ltd. • Pakistan
                                </div>
                            </div>

                            <div
                                data-shoot-target="1"
                                data-shoot-granularity="char"
                                className="text-foreground font-black uppercase leading-[0.88] tracking-[-0.05em] text-[clamp(3.0rem,5.8vw,5.6rem)] md:text-right"
                            >
                                Waleed
                                <br />
                                Anjum
                            </div>

                            <div className="mt-8 text-[10px] font-mono uppercase tracking-[0.26em] text-foreground/55 md:text-right">
                                {new Date().getFullYear()} Portfolio
                            </div>

                            <div className="mt-6 flex flex-wrap items-center justify-end gap-3 md:justify-end">
                                <HeroResumeButton />
                                <HeroExploreLink />
                            </div>
                        </HeroEnterBlock>

                        <HeroEnterBlock className="col-span-12 md:col-span-7 md:order-1" drift="left">
                            <div className="md:flex md:justify-start">
                                <div className="w-full max-w-[720px]">
                                    <HeroInteractivePortrait frameClassName="w-full aspect-4/3 max-w-[560px]">
                                        <Image
                                            src="/another-heropic-me.jpeg"
                                            alt="Waleed Anjum"
                                            width={1600}
                                            height={1200}
                                            sizes="(max-width: 768px) 100vw, 560px"
                                            priority
                                            fetchPriority="high"
                                            className="h-full w-full object-cover object-[center_20%]"
                                        />
                                    </HeroInteractivePortrait>

                                    <div className="mt-6 grid grid-cols-12 items-start gap-4">
                                        <div className="col-span-2 text-foreground/70 text-lg leading-none select-none">
                                            <span aria-hidden="true">-&gt;</span>
                                        </div>
                                        <div className="col-span-10">
                                            <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-foreground/70">
                                                Specializing in
                                                <br />
                                                React, Python, Laravel
                                                <br />
                                                &amp; Conversational AI Systems
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 text-left text-[10px] font-mono uppercase tracking-[0.28em] text-foreground/55">
                                        Portfolio of Waleed Anjum
                                    </div>
                                </div>
                            </div>
                        </HeroEnterBlock>
                    </div>
                </HeroMotionRoot>
            </div>
        </section>
        </LazyMotion>
    );
}

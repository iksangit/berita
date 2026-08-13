"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

const timeline = [
  {
    year: "2024 — 2026",
    title: "Software Engineering Education",
    description: "Bachelor of Software Engineering, focusing on full-stack development, mobile applications, and database systems.",
  },
  {
    year: "2024 — 2025",
    title: "Personal Projects Development",
    description: "Built multiple full-stack web and mobile applications using Next.js, TypeScript, Flutter, and Dart, showcasing practical development skills.",
  },
  {
    year: "2025 — Present",
    title: "Professional Portfolio & Open Source",
    description: "Maintaining a professional portfolio, contributing to open-source projects, and continuously improving development expertise.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              My <span className="text-gradient">Journey</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A timeline of my growth as a developer.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    className="absolute left-4 top-1 z-10 -translate-x-1.5 md:left-1/2"
                  >
                    <div className="h-3 w-3 rounded-full border-2 border-primary bg-background shadow-[0_0_8px_rgba(56,189,248,0.3)]" />
                  </motion.div>

                  {/* Content */}
                  <div className={`ml-12 flex-1 md:ml-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}>
                    <div className="inline-block rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold text-primary">
                      {item.year}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

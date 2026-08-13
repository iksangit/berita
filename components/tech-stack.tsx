"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { skillCategories } from "@/data/skills";

/** Maps skill icon keys to short colored abbreviations */
const iconConfig: Record<string, { abbr: string; color: string }> = {
  nextjs: { abbr: "N", color: "text-foreground" },
  react: { abbr: "⚛", color: "text-sky-400" },
  typescript: { abbr: "TS", color: "text-blue-400" },
  tailwindcss: { abbr: "Tw", color: "text-cyan-400" },
  html5: { abbr: "H5", color: "text-orange-500" },
  css3: { abbr: "C3", color: "text-blue-500" },
  nodejs: { abbr: "No", color: "text-green-500" },
  api: { abbr: "AP", color: "text-violet-400" },
  postgresql: { abbr: "Pg", color: "text-sky-600" },
  prisma: { abbr: "Pr", color: "text-indigo-400" },
  flutter: { abbr: "Fl", color: "text-sky-400" },
  dart: { abbr: "Da", color: "text-cyan-500" },
  git: { abbr: "Gt", color: "text-orange-600" },
  github: { abbr: "Gh", color: "text-foreground" },
  vscode: { abbr: "VS", color: "text-blue-500" },
  figma: { abbr: "Fi", color: "text-pink-400" },
};

export function TechStack() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              My Technology <span className="text-gradient">Stack</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Technologies I use to bring ideas to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-12">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.name} delay={catIdx * 0.1}>
              <div>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
                  <span className="h-px flex-1 max-w-8 bg-primary/50" />
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {category.skills.map((skill) => {
                    const config = iconConfig[skill.icon] || { abbr: skill.name.slice(0, 2).toUpperCase(), color: "text-primary" };
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -2, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="group cursor-default rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                      >
                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                          <span className={`text-sm font-bold ${config.color}`}>
                            {config.abbr}
                          </span>
                        </div>
                        <div className="text-sm font-medium text-foreground">{skill.name}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{skill.description}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

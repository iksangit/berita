"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { featuredSkills } from "@/data/skills";

const iconColors: Record<string, string> = {
  typescript: "from-blue-500/20 to-blue-400/5",
  nextjs: "from-foreground/10 to-foreground/5",
  flutter: "from-sky-500/20 to-sky-400/5",
  postgresql: "from-sky-600/20 to-sky-600/5",
  prisma: "from-indigo-500/20 to-indigo-400/5",
  tailwindcss: "from-cyan-500/20 to-cyan-400/5",
};

export function SkillCards() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSkills.map((skill, i) => {
            const gradient = iconColors[skill.icon] || "from-primary/20 to-primary/5";
            return (
              <ScrollReveal key={skill.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}>
                    <span className="text-sm font-bold text-primary">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

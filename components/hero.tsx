"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/social-icons";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/providers/translation-provider";

interface CodeToken {
  text: string;
  color: string;
}

const codeLines: { indent: number; tokens: CodeToken[] }[] = [
  {
    indent: 0,
    tokens: [
      { text: "const ", color: "text-purple-400" },
      { text: "developer", color: "text-sky-300" },
      { text: " = {", color: "text-foreground" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "name", color: "text-sky-300" },
      { text: ": ", color: "text-foreground" },
      { text: '"Moch Iksan"', color: "text-emerald-400" },
      { text: ",", color: "text-foreground" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "role", color: "text-sky-300" },
      { text: ": ", color: "text-foreground" },
      { text: '"Full-Stack Developer"', color: "text-emerald-400" },
      { text: ",", color: "text-foreground" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "stack", color: "text-sky-300" },
      { text: ": [", color: "text-foreground" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: '"Next.js"', color: "text-amber-400" },
      { text: ", ", color: "text-foreground" },
      { text: '"TypeScript"', color: "text-amber-400" },
      { text: ", ", color: "text-foreground" },
      { text: '"Flutter"', color: "text-amber-400" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "],", color: "text-foreground" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "passion", color: "text-sky-300" },
      { text: ": ", color: "text-foreground" },
      { text: '"Building digital products"', color: "text-emerald-400" },
    ],
  },
  {
    indent: 0,
    tokens: [
      { text: "};", color: "text-foreground" },
    ],
  },
];

const floatingTech = [
  { name: "Next.js", x: "-55%", y: "-60%", delay: 0 },
  { name: "TypeScript", x: "55%", y: "-70%", delay: 0.2 },
  { name: "React", x: "-65%", y: "30%", delay: 0.4 },
  { name: "Tailwind", x: "60%", y: "20%", delay: 0.6 },
  { name: "Node.js", x: "-70%", y: "-15%", delay: 0.8 },
  { name: "Flutter", x: "65%", y: "-25%", delay: 1.0 },
  { name: "PostgreSQL", x: "-50%", y: "60%", delay: 1.2 },
  { name: "Git", x: "50%", y: "60%", delay: 1.4 },
];

export function Hero() {
  const { t } = useTranslation();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/3 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t("availableForProjects")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              {t("hero.headline")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              I&apos;m {siteConfig.name} — a {siteConfig.role} focused on
              {t("hero.subhead")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              <Button size="lg" onClick={() => handleScroll("#projects")}>
                {t("viewWork")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open(siteConfig.cv, "_blank")}>
                {t("downloadCV")}
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex gap-3"
            >
              {["Web Development", "Mobile Development", "UI/UX"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <div className="relative hidden lg:flex lg:justify-center">
            <div className="relative">
              {/* Glow ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative h-[380px] w-[380px]"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
                {/* Animated ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                />
                {/* Photo frame */}
                <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-primary/40 shadow-2xl shadow-primary/20">
                  <Image
                    src={siteConfig.profileImage}
                    alt={`${siteConfig.name} — ${siteConfig.role}`}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="380px"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                {/* Name badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card/90 px-4 py-1.5 text-sm font-semibold text-foreground shadow-lg backdrop-blur-sm"
                >
                  {siteConfig.name} <span className="text-primary">✦</span>
                </motion.div>
              </motion.div>

              {/* Floating tech badges */}
              {floatingTech.map((tech) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + tech.delay, type: "spring", stiffness: 200 }}
                  className="animate-float absolute rounded-full border border-border bg-card/90 px-3 py-1.5 font-mono text-xs text-muted-foreground shadow-lg backdrop-blur-sm"
                  style={{
                    left: `calc(50% + ${tech.x})`,
                    top: `calc(50% + ${tech.y})`,
                    animationDelay: `${tech.delay * 2}s`,
                  }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => handleScroll("#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label={t("aria.scrollToAbout")}
        >
          <span className="text-xs font-medium">{t("scroll")}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
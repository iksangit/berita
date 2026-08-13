"use client";

import { useTranslation } from "@/providers/translation-provider";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { SkillCards } from "@/components/skill-cards";
import { Projects } from "@/components/projects";
import { Journey } from "@/components/journey";
import { Services } from "@/components/services";
import { GitHub } from "@/components/github";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition-transform focus:translate-y-0"
      >
        {t("skipToContent")}
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <TechStack />
        <SkillCards />
        <Projects />
        <Journey />
        <Services />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
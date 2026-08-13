"use client";

import Image from "next/image";
import { Code2, Smartphone, Palette, Server } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useTranslation } from "@/providers/translation-provider";
import { siteConfig } from "@/data/config";

export function About() {
  const { t } = useTranslation();

  const highlights = [
    { icon: Code2, label: t("highlights.web") },
    { icon: Smartphone, label: t("highlights.mobile") },
    { icon: Palette, label: t("highlights.ui") },
    { icon: Server, label: t("highlights.server") },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-secondary">
                {siteConfig.profileImage && !siteConfig.profileImage.includes("REPLACE") ? (
                  <Image
                    src={siteConfig.profileImage}
                    alt={t("about.title")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-cyan-500/10"
                      >
                        <span className="text-4xl font-bold text-gradient">{t("about.title")}</span>
                      </motion.div>
                      <p className="text-sm text-muted-foreground/50">{t("about.subtitle")}</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border border-primary/20 bg-primary/5" />
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-2xl border border-primary/20 bg-primary/5" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("about.title")}
                <span className="text-gradient">{t("about.subtitle")}</span>.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Saya adalah seorang Software Engineering student yang memiliki ketertarikan pada
                full-stack development, mobile development, UI/UX, dan teknologi digital. Saya senang
                mengubah ide menjadi produk digital yang memiliki desain menarik, pengalaman pengguna yang
                baik, serta arsitektur yang terstruktur.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {siteConfig.stats.map((stat) => (
                  <div key={stat.label} className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Server, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useTranslation } from "@/providers/translation-provider";

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code2,
      title: t("servicesItems.fullstack"),
      description: t("servicesItems.fullstack.desc"),
      highlights: [t("highlights.nextjs"), t("highlights.typescript"), t("highlights.react")],
    },
    {
      icon: Smartphone,
      title: t("servicesItems.mobile"),
      description: t("servicesItems.mobile.desc"),
      highlights: [t("highlights.flutter"), t("highlights.dart"), t("highlights.restapi")],
    },
    {
      icon: Palette,
      title: t("servicesItems.ui"),
      description: t("servicesItems.ui.desc"),
      highlights: [t("highlights.tailwind"), t("highlights.figma"), t("highlights.ui")],
    },
    {
      icon: Server,
      title: t("servicesItems.backend"),
      description: t("servicesItems.backend.desc"),
      highlights: [t("highlights.postgresql"), t("highlights.prisma"), t("highlights.restapi")],
    },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("services.title")}{" "}
              <span className="text-gradient">{t("services.subtitle")}</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("services.intro")}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground/0 transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.highlights.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
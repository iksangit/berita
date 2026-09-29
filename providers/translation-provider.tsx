"use client";

import { createContext, useContext, useState } from "react";

type Locale = "en" | "id";

interface TranslationFile {
  [key: string]: string;
}

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  translations: Record<string, TranslationFile>;
}

// Default translations (English)
const defaultTranslations: TranslationFile = {
  "skipToContent": "Skip to content",
  "hero.headline": "I Build Digital Experiences",
  "hero.subhead": "With Code.",
  "downloadCV": "Download CV",
  "viewWork": "View My Work",
  "availableForProjects": "Available for Projects",
  "tags.web": "Web Development",
  "tags.mobile": "Mobile Development",
  "tags.ui": "UI/UX",
  "about.title": "A Developer Who Loves",
  "about.subtitle": "Building Things",
  "about.description": "I'm a Software Engineering student passionate about full-stack web development, mobile apps, UI/UX, and digital technology. I love turning ideas into clean, functional, and user-centric digital products.",
  "highlights.web": "Web Development",
  "highlights.mobile": "Mobile Development",
  "highlights.ui": "UI/UX Design",
  "highlights.server": "Backend & Database",
  "services.title": "What I Can Build",
  "services.intro": "Services and capabilities I can offer for your next project.",
  "servicesItems.fullstack": "Full-Stack Web Development",
  "servicesItems.mobile": "Mobile Development",
  "servicesItems.ui": "UI Implementation",
  "servicesItems.backend": "Backend & Database",
  "highlights.nextjs": "Next.js",
  "highlights.typescript": "TypeScript",
  "highlights.react": "React",
  "highlights.tailwind": "Tailwind CSS",
  "highlights.flutter": "Flutter",
  "highlights.dart": "Dart",
  "highlights.postgresql": "PostgreSQL",
  "highlights.prisma": "Prisma",
  "highlights.restapi": "REST API",
  "projects.title": "Selected Works",
  "projects.intro": "Some things I've built while learning, experimenting, and solving real problems.",
  "projects.filter.all": "All",
  "projects.filter.web": "Web",
  "projects.filter.mobile": "Mobile",
  "projects.filter.ui": "UI/UX",
  "projects.viewDetails": "View Details",
  "journey.title": "My Journey",
  "journey.intro": "A timeline of my growth as a developer.",
  "footer.description": "Building digital experiences with code. Software Engineering student passionate about creating modern, scalable, and user-friendly applications.",
  "footer.quickLinks": "Quick Links",
  "footer.connect": "Connect",
  "footer.copyright": "&copy; {year} {name}. All rights reserved.",
  "footer.builtWith": "Built with",
  "contact.title": "Have an idea?",
  "contact.subtitle": "Let's build it.",
  "contact.paragraph": "Feel free to reach out. I'd love to hear from you and discuss potential projects or opportunities.",
  "contact.labels.name": "Name",
  "contact.labels.email": "Email",
  "contact.labels.message": "Message",
  "contact.button": "Send Message",
  "contact.success": "Message sent successfully! I'll get back to you soon.",
  "contact.error": "Failed to send message. Please try again later.",
  "contact.validation.nameRequired": "Name is required",
  "contact.validation.nameMin": "Name must be at least 2 characters",
  "contact.validation.emailRequired": "Email is required",
  "contact.validation.emailValid": "Please enter a valid email",
  "contact.validation.messageRequired": "Message is required",
  "contact.validation.messageMin": "Message must be at least 10 characters",
  "contact.validation.messageMax": "Message must be under 500 characters",
  "skillCategories.frontend": "Frontend",
  "skillCategories.backend": "Backend",
  "skillCategories.database": "Database",
  "skillCategories.mobile": "Mobile",
  "skillCategories.tools": "Tools",
  "skillNames.nextjs": "Next.js",
  "skillNames.react": "React",
  "skillNames.typescript": "TypeScript",
  "skillNames.tailwindcss": "Tailwind CSS",
  "skillNames.html5": "HTML5",
  "skillNames.css3": "CSS3",
  "skillNames.nodejs": "Node.js",
  "skillNames.api": "REST API",
  "skillNames.postgresql": "PostgreSQL",
  "skillNames.prisma": "Prisma",
  "skillNames.flutter": "Flutter",
  "skillNames.dart": "Dart",
  "skillNames.git": "Git",
  "skillNames.github": "GitHub",
  "skillNames.vscode": "VS Code",
  "skillNames.figma": "Figma",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.journey": "Journey",
  "nav.contact": "Contact",
  "aria.themeToggle": "Toggle theme",
  "aria.closeMenu": "Close menu",
  "aria.openMenu": "Open menu",
  "aria.navigationMenu": "Navigation menu"
};

// Indonesian translations
const idTranslations: TranslationFile = {
  "skipToContent": "Lewati ke konten",
  "hero.headline": "Saya Membangun Pengalaman Digital",
  "hero.subhead": "Dengan Kode.",
  "downloadCV": "Unduh CV",
  "viewWork": "Lihat Kerja Saya",
  "availableForProjects": "Tersedia untuk Proyek",
  "tags.web": "Pengembangan Web",
  "tags.mobile": "Pengembangan Mobile",
  "tags.ui": "Desain UI/UX",
  "about.title": "Seorang Developer yang Suka",
  "about.subtitle": "Membangun Hal-hal",
  "highlights.web": "Pengembangan Web",
  "highlights.mobile": "Pengembangan Mobile",
  "highlights.ui": "Desain UI/UX",
  "highlights.server": "Backend & Database",
  "services.title": "Apa Yang Bisa Saya Bangun",
  "services.intro": "Layanan dan kemampuan yang dapat saya tawarkan untuk proyek selanjutmu.",
  "servicesItems.fullstack": "Pengembangan Full-Stack Web",
  "servicesItems.mobile": "Pengembangan Mobile",
  "servicesItems.ui": "Implementasi UI",
  "servicesItems.backend": "Backend & Database",
  "highlights.nextjs": "Next.js",
  "highlights.typescript": "TypeScript",
  "highlights.react": "React",
  "highlights.tailwind": "Tailwind CSS",
  "highlights.flutter": "Flutter",
  "highlights.dart": "Dart",
  "highlights.postgresql": "PostgreSQL",
  "highlights.prisma": "Prisma",
  "highlights.restapi": "REST API",
  "projects.title": "Kerja Saya yang Dipilih",
  "projects.intro": "Beberapa hal yang saya bangun sambil belajar, bereksperimen, dan menyelesaikan masalah nyata.",
  "projects.filter.all": "Semua",
  "projects.filter.web": "Web",
  "projects.filter.mobile": "Mobile",
  "projects.filter.ui": "UI/UX",
  "projects.viewDetails": "Lihat Detail",
  "journey.title": "Perjalanan Saya",
  "journey.intro": "Sebuah timeline dari pertumbuhan saya sebagai developer.",
  "footer.description": "Membangun pengalaman digital dengan kode. Sarjana Teknik Informatik yang khalayak tentang menciptakan aplikasi modern, scalable, dan user-friendly.",
  "footer.quickLinks": "Tautan Cepat",
  "footer.connect": "Hubungi",
  "footer.copyright": "&copy; {year} {name}. Semua hak dilindungi.",
  "footer.builtWith": "Dibangun dengan",
  "contact.title": "Punya Ide?",
  "contact.subtitle": "Mari Bangun!",
  "contact.paragraph": "Silakan hubungi saya. Saya akan sangat senang mendengar dari Anda dan membahas proyek atau kesempatan yang potencial.",
  "contact.labels.name": "Nama",
  "contact.labels.email": "Email",
  "contact.labels.message": "Pesan",
  "contact.button": "Kirim Pesan",
  "contact.success": "Pesan berhasil teririm! Saya akan segera membalas.",
  "contact.error": "Gagal mengirim pesan. Silakan coba lagi nanti.",
  "contact.validation.nameRequired": "Nama wajib diisi",
  "contact.validation.nameMin": "Nama minimal 2 karakter",
  "contact.validation.emailRequired": "Email wajib diisi",
  "contact.validation.emailValid": "Silakan masukkan email yang valid",
  "contact.validation.messageRequired": "Pesan wajib diisi",
  "contact.validation.messageMin": "Pesan minimal 10 karakter",
  "contact.validation.messageMax": "Pesan maksimal 500 karakter",
  "skillCategories.frontend": "Frontend",
  "skillCategories.backend": "Backend",
  "skillCategories.database": "Database",
  "skillCategories.mobile": "Mobile",
  "skillCategories.tools": "Alat",
  "skillNames.nextjs": "Next.js",
  "skillNames.react": "React",
  "skillNames.typescript": "TypeScript",
  "skillNames.tailwindcss": "Tailwind CSS",
  "skillNames.html5": "HTML5",
  "skillNames.css3": "CSS3",
  "skillNames.nodejs": "Node.js",
  "skillNames.api": "REST API",
  "skillNames.postgresql": "PostgreSQL",
  "skillNames.prisma": "Prisma",
  "skillNames.flutter": "Flutter",
  "skillNames.dart": "Dart",
  "skillNames.git": "Git",
  "skillNames.github": "GitHub",
  "skillNames.vscode": "VS Code",
  "skillNames.figma": "Figma",
  "nav.home": "Beranda",
  "nav.about": "Tentang",
  "nav.skills": "Keterampilan",
  "nav.projects": "Proyek",
  "nav.journey": "Perjalanan",
  "nav.contact": "Kontak",
  "aria.themeToggle": "Toggle theme",
  "aria.closeMenu": "Close menu",
  "aria.openMenu": "Open menu",
  "aria.navigationMenu": "Navigation menu"
};

// Create context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    // Fallback saat build/SSR: kembalikan context default (English)
    return {
      locale: "en",
      setLocale: (_locale: Locale) => {},
      t: (key: string): string => key,
      translations: {} as Record<string, TranslationFile>,
    };
  }
  return context;
};

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  const t = (key: string): string => {
    const translations = locale === "id" ? idTranslations : defaultTranslations;
    return translations[key] || key;
  };

  const value = {
    locale,
    s
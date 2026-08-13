export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: "web" | "mobile" | "ui";
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string[];
  result?: string;
}

export const projects: Project[] = [
  {
    title: "Berita App",
    slug: "berita-app",
    description: "Mobile news application for reading and discovering the latest news.",
    longDescription:
      "A mobile news application built with Flutter that fetches real-time news from REST APIs. Features include category browsing, search functionality, and a clean reading experience.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "REST API"],
    image: "REPLACE_WITH_PROJECT_IMAGE",
    github: "https://github.com/ikmochan/berita-app",
    problem:
      "Need for a fast, clean, and accessible mobile news reader that aggregates content from multiple sources.",
    solution:
      "Built a Flutter app with a modular architecture, using REST API integration for real-time news data and a custom UI optimized for readability.",
    features: [
      "Real-time news fetching",
      "Category-based browsing",
      "Search functionality",
      "Responsive mobile layout",
      "Pull-to-refresh",
    ],
    architecture: "Feature-based architecture with clean separation of data, domain, and presentation layers.",
    challenges: [
      "Handling API rate limits and error states",
      "Optimizing list performance for large datasets",
      "Managing app state across multiple screens",
    ],
    result: "A functional news app with smooth performance and clean UI that demonstrates mobile development skills.",
  },
  {
    title: "Vocational Education Platform",
    slug: "vocational-education-platform",
    description: "Web platform for discovering vocational majors and programs.",
    longDescription:
      "A comprehensive web platform that helps students discover and explore vocational education majors. Features include advanced search, filtering, favorites, and an admin dashboard for content management.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "REPLACE_WITH_PROJECT_IMAGE",
    github: "https://github.com/ikmochan/vocational-education-platform",
    demo: "https://vocational-platform.ikmochan.dev",
    problem:
      "Students lack a centralized platform to explore and compare vocational education programs with detailed information.",
    solution:
      "Developed a full-stack Next.js application with PostgreSQL for data persistence, featuring search, filtering, favorites, and an admin dashboard.",
    features: [
      "Advanced search and filtering",
      "Favorites system",
      "Major detail pages",
      "Gallery section",
      "Admin dashboard",
      "Responsive design",
    ],
    architecture:
      "Next.js App Router with Server Components for performance, Server Actions for mutations, and Prisma ORM for database access.",
    challenges: [
      "Designing a scalable database schema for educational data",
      "Implementing complex search and filter logic",
      "Building a secure admin dashboard",
    ],
    result: "A production-ready platform that demonstrates full-stack development capabilities with real-world application.",
  },
  {
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    description: "Modern developer portfolio built with Next.js and Tailwind CSS.",
    longDescription:
      "A premium dark-themed developer portfolio showcasing projects, skills, and professional journey. Built with modern web technologies for optimal performance and user experience.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    image: "REPLACE_WITH_PROJECT_IMAGE",
    github: "https://github.com/ikmochan/portfolio",
    problem:
      "Need for a professional online presence that showcases technical skills and projects effectively.",
    solution:
      "Built a modern portfolio using Next.js with App Router, TypeScript for type safety, Tailwind CSS for styling, and Framer Motion for smooth animations.",
    features: [
      "Dark/Light theme toggle",
      "Smooth scroll animations",
      "Responsive design",
      "Project showcase with details",
      "Contact form",
      "GitHub integration",
      "SEO optimized",
    ],
    architecture: "Next.js App Router with component-based architecture, data layer separation, and server-side rendering.",
    challenges: [
      "Creating smooth, performant animations",
      "Implementing responsive design across all breakpoints",
      "Optimizing for performance and accessibility",
    ],
    result: "A professional portfolio that demonstrates modern web development skills and attention to detail.",
  },
];
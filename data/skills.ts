export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", category: "Frontend", description: "Full-stack React framework", icon: "nextjs" },
      { name: "React", category: "Frontend", description: "Component-based UI library", icon: "react" },
      { name: "TypeScript", category: "Frontend", description: "Type-safe JavaScript", icon: "typescript" },
      { name: "Tailwind CSS", category: "Frontend", description: "Utility-first CSS framework", icon: "tailwindcss" },
      { name: "HTML5", category: "Frontend", description: "Semantic markup", icon: "html5" },
      { name: "CSS3", category: "Frontend", description: "Modern styling", icon: "css3" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", category: "Backend", description: "JavaScript runtime", icon: "nodejs" },
      { name: "Next.js Server Actions", category: "Backend", description: "Server-side mutations", icon: "nextjs" },
      { name: "REST API", category: "Backend", description: "API design and integration", icon: "api" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", category: "Database", description: "Relational database", icon: "postgresql" },
      { name: "Prisma", category: "Database", description: "Type-safe database ORM", icon: "prisma" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "Flutter", category: "Mobile", description: "Cross-platform development", icon: "flutter" },
      { name: "Dart", category: "Mobile", description: "Programming language", icon: "dart" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", category: "Tools", description: "Version control", icon: "git" },
      { name: "GitHub", category: "Tools", description: "Code collaboration", icon: "github" },
      { name: "VS Code", category: "Tools", description: "Code editor", icon: "vscode" },
      { name: "Figma", category: "Tools", description: "Design tool", icon: "figma" },
    ],
  },
];

export const featuredSkills = [
  {
    name: "TypeScript",
    description: "Frontend & application development with type safety",
    icon: "typescript",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework for modern web apps",
    icon: "nextjs",
  },
  {
    name: "Flutter",
    description: "Cross-platform mobile development with beautiful UI",
    icon: "flutter",
  },
  {
    name: "PostgreSQL",
    description: "Relational database for scalable data architecture",
    icon: "postgresql",
  },
  {
    name: "Prisma",
    description: "Type-safe database ORM for Node.js and TypeScript",
    icon: "prisma",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS for rapid UI development",
    icon: "tailwindcss",
  },
];
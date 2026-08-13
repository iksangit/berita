import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/social-icons";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Project`,
    description: project.description,
  };
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border bg-card p-6">
      <h2 className="mb-4 text-xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm text-primary">
                {String(projectIndex + 1).padStart(2, "0")}
              </span>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h1>
              <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground capitalize">
                {project.category}
              </span>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <GithubIcon className="h-4 w-4" />
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="mb-12 aspect-video overflow-hidden rounded-xl border border-border bg-secondary">
            <div className="flex h-full items-center justify-center text-muted-foreground/30">
              <div className="text-center">
                <span className="text-sm">Project Screenshot</span>
                <p className="mt-1 text-xs text-muted-foreground/20">
                  Replace image in data/projects.ts
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Overview */}
            {project.longDescription && (
              <SectionCard title="Overview">
                <p className="leading-relaxed text-muted-foreground">
                  {project.longDescription}
                </p>
              </SectionCard>
            )}

            {/* Problem & Solution side by side on desktop */}
            {(project.problem || project.solution) && (
              <div className="grid gap-6 sm:grid-cols-2">
                {project.problem && (
                  <SectionCard title="Problem">
                    <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
                  </SectionCard>
                )}
                {project.solution && (
                  <SectionCard title="Solution">
                    <p className="leading-relaxed text-muted-foreground">{project.solution}</p>
                  </SectionCard>
                )}
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <SectionCard title="Features">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            )}

            {/* Architecture */}
            {project.architecture && (
              <SectionCard title="Architecture">
                <p className="leading-relaxed text-muted-foreground">{project.architecture}</p>
              </SectionCard>
            )}

            {/* Tech Stack */}
            <SectionCard title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SectionCard>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <SectionCard title="Challenges">
                <ul className="space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span className="text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            )}

            {/* Result */}
            {project.result && (
              <SectionCard title="Result">
                <p className="leading-relaxed text-muted-foreground">{project.result}</p>
              </SectionCard>
            )}
          </div>

          {/* Navigation between projects */}
          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            {projectIndex > 0 ? (
              <Link
                href={`/projects/${projects[projectIndex - 1].slug}`}
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {projects[projectIndex - 1].title}
              </Link>
            ) : (
              <div />
            )}
            {projectIndex < projects.length - 1 ? (
              <Link
                href={`/projects/${projects[projectIndex + 1].slug}`}
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {projects[projectIndex + 1].title}
                <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

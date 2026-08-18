import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — ${site.name}`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="container-page py-16 md:py-24">
      <Link href="/projects" className="text-sm text-muted hover:text-accent">
        ← All projects
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {project.placeholder && (
            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
              Sample
            </span>
          )}
          <span className="text-accent">{project.status}</span>
          <span className="text-muted">{project.year}</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-muted">{project.tagline}</p>
      </header>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            The thinking
          </h2>
          <p className="mt-3 leading-relaxed">{project.description}</p>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
              Problem
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
              What it does
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              {project.whatItDoes}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
              How it was built
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              {project.howItWasBuilt}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border-subtle px-3 py-1 text-sm text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.link || project.source) && (
        <div className="mt-10 flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Live demo
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border-subtle px-6 py-3 text-sm font-medium transition-colors hover:text-accent"
            >
              Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}
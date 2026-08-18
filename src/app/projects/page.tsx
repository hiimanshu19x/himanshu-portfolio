import Link from "next/link";
import { projects, type ProjectStatus } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "A shipping log — experiments and products I'm building with AI and vibecoding.",
};

const statusStyles: Record<ProjectStatus, string> = {
  Building: "text-accent",
  Live: "text-accent",
  Experiment: "text-muted",
  Archived: "text-muted",
};

export default function ProjectsPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Shipping Log
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
        Projects
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted">
        A public log of things I&apos;m building while I learn. Statuses mean
        what they say: building, live, experiment or archived.
      </p>

      <ul className="mt-14 divide-y divide-border-subtle border-y border-border-subtle">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between"
            >
              <div>
                <h2 className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                {project.placeholder && (
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                    Sample
                  </span>
                )}
                <span className={statusStyles[project.status]}>
                  {project.status}
                </span>
                <span className="text-muted">{project.year}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Link from "next/link";
import { site } from "@/data/site";
import { articles } from "@/data/writing";

export const metadata = {
  title: site.title,
  description: site.description,
};

const sports = ["Cricket", "Football", "Formula 1", "Tennis"];
const building = ["AI", "SaaS", "Vibecoding", "Technology"];

export default function HomePage() {
  const selected = articles.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container-page py-20 md:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Currently building →
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Sports writer. <span className="text-accent">AI enthusiast.</span>{" "}
          Building my way into tech.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          I&apos;ve spent the last 3.5+ years writing about sports — cricket,
          football, F1 and tennis. Now I&apos;m exploring the other side of the
          internet: building things.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          I&apos;m learning by building small products with AI and vibecoding —
          and writing about what I learn along the way.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Projects
          </Link>
          <Link
            href="/writing"
            className="rounded-md border border-border-subtle px-6 py-3 text-sm font-medium transition-colors hover:text-accent"
          >
            Read My Writing
          </Link>
        </div>
      </section>

      {/* Experience */}
      <Section>
        <SectionLabel>Experience</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          3.5+ Years
          <span className="mt-2 block text-xl font-normal text-muted md:text-2xl">
            Sports Content Writing
          </span>
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          Professional experience covering cricket, football, Formula 1 and
          tennis — producing analytical articles, match predictions,
          SEO-driven long-form pieces, opinion pieces and match previews.
        </p>
      </Section>

      {/* What I write about */}
      <Section>
        <SectionLabel>What I Write About</SectionLabel>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {sports.map((sport) => (
            <li key={sport}>
              <span className="text-2xl font-semibold tracking-tight transition-colors hover:text-accent md:text-3xl">
                {sport}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* What I'm building now */}
      <Section>
        <SectionLabel>What I&apos;m Building Now</SectionLabel>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {building.map((item) => (
            <li key={item}>
              <span className="text-2xl font-semibold tracking-tight text-accent md:text-3xl">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          I&apos;m experimenting with ideas, building small products and
          learning how modern software products are made — one shipped
          experiment at a time.
        </p>
      </Section>

      {/* Selected work */}
      <Section>
        <div className="flex items-baseline justify-between gap-4">
          <SectionLabel>Selected Work</SectionLabel>
          <Link href="/writing" className="text-sm text-muted hover:text-accent">
            View all →
          </Link>
        </div>
        <ul className="mt-6 divide-y divide-border-subtle border-y border-border-subtle">
          {selected.map((article) => (
            <li key={article.slug} className="py-6">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-lg font-medium tracking-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-muted">
                  {article.category} · {article.date}
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {article.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="container-page py-16 md:py-24">{children}</section>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-widest text-accent">
      {children}
    </p>
  );
}

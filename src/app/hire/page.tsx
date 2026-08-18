import { site } from "@/data/site";

export const metadata = {
  title: "Hire Me",
  description:
    "Let's build something — content writing, sports writing, SEO content and AI-assisted product building.",
};

const offerings = [
  "Content writing & sports writing",
  "SEO-driven long-form content",
  "AI-assisted content projects",
  "AI-assisted product building",
  "SaaS experiments",
  "Writing + technology projects",
];

export default function HirePage() {
  return (
    <div className="container-page py-16 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Hire Me
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
        Let&apos;s build something.
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted">
        I bring 3.5+ years of professional sports writing and a fast-growing
        interest in AI and product building. I&apos;m available for work that
        combines writing, content and technology.
      </p>

      <h2 className="mt-14 text-sm font-medium uppercase tracking-widest text-accent">
        What I can help with
      </h2>
      <ul className="mt-6 max-w-2xl">
        {offerings.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-3 border-b border-border-subtle py-4"
          >
            <span className="text-accent">→</span>
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 text-sm font-medium uppercase tracking-widest text-accent">
        Contact
      </h2>
      <div className="mt-6 flex flex-col gap-3 text-lg">
        <a
          href={`mailto:${site.contact.email}`}
          className="w-fit font-medium transition-colors hover:text-accent"
        >
          {site.contact.email}
        </a>
        <a
          href={site.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="w-fit text-muted transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href={site.contact.github}
          target="_blank"
          rel="noreferrer"
          className="w-fit text-muted transition-colors hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={site.contact.twitter}
          target="_blank"
          rel="noreferrer"
          className="w-fit text-muted transition-colors hover:text-accent"
        >
          X / Twitter
        </a>
      </div>
      <p className="mt-8 text-sm text-muted">
        Note: contact details above are placeholders until I add real ones in
        src/data/site.ts.
      </p>
    </div>
  );
}

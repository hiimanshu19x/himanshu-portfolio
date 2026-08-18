// ---------------------------------------------------------------------------
// WRITING — add, edit or remove articles here.
// The Writing page (with All / Sports / Technical / Personal tabs) is
// generated from this file. `placeholder: true` marks sample content.
// ---------------------------------------------------------------------------

export type WritingSection = "sports" | "technical" | "personal";

export interface Article {
  slug: string;
  title: string;
  section: WritingSection;
  category: string; // e.g. "Cricket · Analysis", "AI", "Vibecoding"
  date: string; // ISO format: YYYY-MM-DD
  excerpt: string;
  link?: string; // external "read article" link
  placeholder: boolean;
}

export const articles: Article[] = [
  // ----- SPORTS -----------------------------------------------------------
  {
    slug: "sample-t20-analysis",
    title: "Sample: Reading a T20 innings before the first ball",
    section: "sports",
    category: "Cricket · Analysis",
    date: "2025-11-02",
    excerpt: "Placeholder excerpt — replace this with a real cricket analysis piece.",
    placeholder: true,
  },
  {
    slug: "sample-f1-preview",
    title: "Sample: What a Friday practice session actually tells you",
    section: "sports",
    category: "Formula 1 · Preview",
    date: "2025-10-18",
    excerpt: "Placeholder excerpt — replace this with a real F1 preview piece.",
    placeholder: true,
  },
  {
    slug: "sample-football-opinion",
    title: "Sample: Why the mid-table press is underrated",
    section: "sports",
    category: "Football · Opinion",
    date: "2025-09-30",
    excerpt: "Placeholder excerpt — replace this with a real football opinion piece.",
    placeholder: true,
  },

  // ----- TECHNICAL --------------------------------------------------------
  {
    slug: "sample-learning-to-build",
    title: "Sample: I spent 3.5 years writing about sports. Now I'm learning to build.",
    section: "technical",
    category: "Building · Learning",
    date: "2025-11-10",
    excerpt: "Placeholder excerpt — replace with a real piece about your transition into building.",
    placeholder: true,
  },
  {
    slug: "sample-vibecoding-notes",
    title: "Sample: What vibecoding taught me about shipping fast",
    section: "technical",
    category: "Vibecoding",
    date: "2025-10-25",
    excerpt: "Placeholder excerpt — replace with a real piece about your experience vibecoding.",
    placeholder: true,
  },

  // ----- PERSONAL ---------------------------------------------------------
  {
    slug: "sample-writer-to-builder",
    title: "Sample: A writer learning to build",
    section: "personal",
    category: "Essays · Writing",
    date: "2025-10-05",
    excerpt: "Placeholder excerpt — replace with a real personal essay.",
    placeholder: true,
  },
  {
    slug: "sample-internet-notes",
    title: "Sample: Notes on the internet, creativity and shipping",
    section: "personal",
    category: "Thoughts",
    date: "2025-09-15",
    excerpt: "Placeholder excerpt — replace with a real personal piece.",
    placeholder: true,
  },
];

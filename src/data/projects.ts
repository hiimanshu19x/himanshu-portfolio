// ---------------------------------------------------------------------------
// PROJECTS — add, edit or remove projects here.
// The Projects page and project detail pages are generated from this file.
// `placeholder: true` marks sample content so it shows a "Sample" tag.
// ---------------------------------------------------------------------------

export type ProjectStatus = "Building" | "Live" | "Experiment" | "Archived";

export interface Project {
  slug: string;
  name: string;
  tagline: string; // one-line description
  description: string;
  problem: string;
  whatItDoes: string;
  howItWasBuilt: string;
  technologies: string[];
  status: ProjectStatus;
  year: string;
  link?: string; // live demo
  source?: string; // GitHub/source
  image?: string; // optional screenshot path
  placeholder: boolean;
}

export const projects: Project[] = [
  {
    slug: "cricket-match-predictor",
    name: "Cricket Match Predictor",
    tagline: "An experiment in turning cricket data into pre-match predictions.",
    description:
      "Sample project — replace with a real project. A small web app that takes recent form and head-to-head data for a cricket match and produces a simple predicted outcome.",
    problem:
      "Sample: pre-match analysis usually lives in scattered articles; I wanted to try codifying it into one repeatable tool.",
    whatItDoes:
      "Sample: you pick two teams and a format, and it shows a simple predicted outcome based on the data I feed it.",
    howItWasBuilt:
      "Sample: built with Next.js and a simple data file, using AI to help structure the logic. A learning exercise more than a finished product.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Experiment",
    year: "2025",
    placeholder: true,
  },
  {
    slug: "content-workbench",
    name: "Content Workbench",
    tagline: "A personal toolkit for turning rough ideas into SEO-ready drafts.",
    description:
      "Sample project — replace with a real project. A small app that helps me take a sports topic and generate an outline, headlines and a first draft faster.",
    problem:
      "Sample: as a writer moving into AI, I wanted a hands-on way to learn how AI-assisted content pipelines work.",
    whatItDoes:
      "Sample: paste a topic, get an outline, suggested headlines and a draft to edit.",
    howItWasBuilt:
      "Sample: built by vibecoding with an AI API — the point was to learn, not to build something perfect.",
    technologies: ["Next.js", "Tailwind CSS", "AI API"],
    status: "Building",
    year: "2025",
    placeholder: true,
  },
  {
    slug: "build-in-public-dashboard",
    name: "Build-in-Public Dashboard",
    tagline: "A simple page that tracks what I'm building and what I'm learning.",
    description:
      "Sample project — replace with a real project. A public dashboard that logs experiments, tools tried and lessons learned while I transition into building.",
    problem:
      "Sample: I wanted a single place to show my transition from writing to building, instead of scattering updates across social media.",
    whatItDoes:
      "Sample: lists my current experiments, statuses and short notes on each.",
    howItWasBuilt:
      "Sample: a simple static site — deliberately minimal, because the content matters more than the chrome.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    year: "2025",
    placeholder: true,
  },
];

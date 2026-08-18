// ---------------------------------------------------------------------------
// SITE CONFIG — name, nav, contact, socials, SEO live here.
// Edit this one file when you get real contact details.
// ---------------------------------------------------------------------------

export const site = {
  name: "Himanshu Singh",
  tagline: "Sports writer → AI builder",
  title: "Himanshu Singh — Sports Writer & AI Builder",
  description:
    "Himanshu Singh — sports writer, AI enthusiast and independent builder exploring AI, SaaS, technology and the future of building on the internet.",
  url: "https://himanshu-portfolio.vercel.app", // TODO: replace with your real domain later
  author: "Himanshu Singh",
  // Replace these with real details before sharing the site
  contact: {
    email: "your@email.com",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/hiimanshu19x",
    twitter: "https://x.com/yourusername",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Writing", href: "/writing" },
    { label: "Hire Me", href: "/hire" },
  ],
} as const;

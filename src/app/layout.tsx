import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1122" },
  ],
};

// Applies the saved/system theme before React hydrates — prevents flash.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between md:py-16">
        <div>
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-muted">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-muted transition-colors hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <a href={`mailto:${site.contact.email}`} className="text-muted transition-colors hover:text-accent">
            {site.contact.email}
          </a>
          <a href={site.contact.linkedin} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={site.contact.github} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={site.contact.twitter} target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-accent">
            X / Twitter
          </a>
        </div>
      </div>
      <div className="container-page pb-8">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { articles, type WritingSection } from "@/data/writing";

type TabKey = "all" | WritingSection;

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "sports", label: "Sports" },
  { key: "technical", label: "Technical" },
  { key: "personal", label: "Personal" },
];

export default function WritingArchive() {
  const [active, setActive] = useState<TabKey>("all");

  const visible = articles.filter(
    (a) => active === "all" || a.section === active
  );

  return (
    <div>
      <div role="tablist" aria-label="Filter writing" className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const selected = active === tab.key;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.key)}
              className={
                selected
                  ? "rounded-full bg-accent px-4 py-2 text-sm font-medium text-background"
                  : "rounded-full border border-border-subtle px-4 py-2 text-sm text-muted transition-colors hover:text-accent"
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 divide-y divide-border-subtle border-y border-border-subtle">
        {visible.map((article) => (
          <li key={article.slug} className="py-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div className="flex items-center gap-3">
                {article.link ? (
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl font-medium tracking-tight transition-colors hover:text-accent md:text-2xl"
                  >
                    {article.title}
                  </a>
                ) : (
                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {article.title}
                  </h3>
                )}
                {article.placeholder && (
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                    Sample
                  </span>
                )}
              </div>
              <p className="text-sm text-muted">
                {article.category} · {article.date}
              </p>
            </div>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              {article.excerpt}
            </p>
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="py-16 text-center text-muted">Nothing here yet.</p>
      )}
    </div>
  );
}

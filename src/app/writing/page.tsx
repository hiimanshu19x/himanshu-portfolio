import WritingArchive from "@/components/writing-archive";

export const metadata = {
  title: "Writing",
  description:
    "Learning in public. Building in public. Writing about what I learn.",
};

export default function WritingPage() {
  return (
    <div className="container-page py-16 md:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Learning in public
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
        Writing
      </h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted">
        Sports writing from 3.5+ years of covering cricket, football, F1 and
        tennis. Plus new technical and personal writing as I learn to build.
      </p>
      <div className="mt-12">
        <WritingArchive />
      </div>
    </div>
  );
}

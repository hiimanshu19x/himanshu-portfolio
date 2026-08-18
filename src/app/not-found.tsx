import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for isn&apos;t here.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </div>
  );
}

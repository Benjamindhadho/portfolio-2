import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm text-cyan-400">404</p>
      <h1 className="font-display text-3xl font-semibold">Page not found</h1>
      <p className="text-zinc-400 max-w-md">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950"
      >
        Back home
      </Link>
    </main>
  );
}

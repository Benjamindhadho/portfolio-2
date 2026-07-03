import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Container from "../common/Container";
import Badge from "../common/Badge";
import GlassCard from "../ui/GlassCard";
import { ArrowUpRightIcon } from "../common/Icons";

// Shared chrome (nav/footer/hero/meta strip) for every case study page.
// Each project's own file supplies the body sections as children, so the
// content of each case study still lives in its own separate file.
export default function CaseStudyLayout({
  title,
  tagline,
  tags = [],
  meta = [],
  liveUrl,
  prevProject,
  nextProject,
  children,
}) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white antialiased">
      <Navbar />

      <header className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <Container className="relative">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
          >
            ← Back to all work
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl">
            {title}
          </h1>
          {tagline && (
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-zinc-400">
              {tagline}
            </p>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.03] w-fit"
            >
              View live project
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          )}

          {meta.length > 0 && (
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {meta.map(({ label, value }) => (
                <GlassCard key={label} className="px-4 py-4">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">{label}</p>
                  <p className="mt-1 text-sm font-medium text-white">{value}</p>
                </GlassCard>
              ))}
            </div>
          )}
        </Container>
      </header>

      <Container className="pb-24 flex flex-col gap-16">{children}</Container>

      {(prevProject || nextProject) && (
        <Container className="pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-10">
            {prevProject ? (
              <Link to={`/work/${prevProject.slug}`} className="group">
                <p className="text-xs uppercase tracking-wide text-zinc-500 mb-1">Previous</p>
                <p className="font-display text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {prevProject.title}
                </p>
              </Link>
            ) : <span />}
            {nextProject && (
              <Link to={`/work/${nextProject.slug}`} className="group sm:text-right">
                <p className="text-xs uppercase tracking-wide text-zinc-500 mb-1">Next</p>
                <p className="font-display text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {nextProject.title}
                </p>
              </Link>
            )}
          </div>
        </Container>
      )}

      <Footer />
    </main>
  );
}

// Small reusable section block used inside each case study body.
export function CaseStudySection({ heading, children }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-2xl font-semibold text-white">{heading}</h2>
      <div className="text-zinc-400 leading-relaxed flex flex-col gap-4">{children}</div>
    </section>
  );
}

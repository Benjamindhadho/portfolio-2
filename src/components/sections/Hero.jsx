import Container from "../common/Container";
import Badge from "../common/Badge";
import { stats, profile } from "../../data/profile";
import { DownloadIcon, ArrowUpRightIcon } from "../common/Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-32">
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <Container className="relative">
        <div className="flex flex-col items-center text-center gap-6">
          <Badge className="text-cyan-300 border-cyan-400/30 bg-cyan-400/5">
            {profile.availability} · Open to new projects
          </Badge>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-3xl">
            Hi, I&rsquo;m {profile.firstName} —{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-zinc-400">
            {profile.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.03]"
            >
              Start a project
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Download CV
              <DownloadIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 py-6 text-center"
            >
              <p className="font-display text-3xl font-semibold bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from "../common/Container";
import SectionLabel from "../common/SectionLabel";
import GlassCard from "../ui/GlassCard";
import { profile } from "../../data/profile";
import { MailIcon, MapPinIcon, BriefcaseIcon, LinkIcon } from "../common/Icons";

const DETAILS = [
  { Icon: MailIcon, text: profile.email },
  { Icon: MapPinIcon, text: profile.location },
  { Icon: BriefcaseIcon, text: profile.availability },
  { Icon: LinkIcon, text: profile.website },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <Container>
        <SectionLabel index="01">About</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-violet-500/30 to-cyan-400/20 blur-xl" />
              <img
                src="/ProfilePhoto2.jpg"
                alt={`Portrait of ${profile.name}`}
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[2rem] object-cover border border-white/10"
              />
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
              Building thoughtful products, end to end.
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              I&rsquo;m {profile.name}, a {profile.role.toLowerCase()} who enjoys
              taking ideas from a rough sketch to a polished, production-ready
              product. I care as much about clean component architecture and
              backend security as I do about typography and motion — the kind
              of detail that makes an interface feel considered rather than
              assembled.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DETAILS.map(({ Icon, text }) => (
                <GlassCard key={text} className="flex items-center gap-3 px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm text-zinc-300 break-all">{text}</span>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

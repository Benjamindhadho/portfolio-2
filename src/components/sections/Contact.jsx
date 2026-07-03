import Container from "../common/Container";
import SectionLabel from "../common/SectionLabel";
import GlassCard from "../ui/GlassCard";
import ContactForm from "./ContactForm2";
import { profile } from "../../data/profile";
import { MailIcon, MapPinIcon, GithubIcon, InstagramIcon, DiscordIcon } from "../common/Icons";

const ICONS = { Github: GithubIcon, Instagram: InstagramIcon, Discord: DiscordIcon };

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <Container>
        <SectionLabel index="05">Contact</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-4">
          Let&rsquo;s build something together
        </h2>
        <p className="text-zinc-400 max-w-xl mb-12">
          I&rsquo;m currently available for freelance work. Tell me a bit about
          your project and I&rsquo;ll get back to you within a couple of days.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <GlassCard className="lg:col-span-2 p-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300">
                <MailIcon className="w-4 h-4" />
              </span>
              <span className="text-sm text-zinc-300 break-all">{profile.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-300">
                <MapPinIcon className="w-4 h-4" />
              </span>
              <span className="text-sm text-zinc-300">{profile.location}</span>
            </div>

            <div className="h-px w-full bg-white/10" />

            <div className="flex items-center gap-3">
              {profile.socials.map(({ label, href }) => {
                const Icon = ICONS[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-3 p-6 sm:p-8">
            <ContactForm />
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}

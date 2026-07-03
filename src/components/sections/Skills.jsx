import Container from "../common/Container";
import SectionLabel from "../common/SectionLabel";
import GlassCard from "../ui/GlassCard";
import { skills } from "../../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <Container>
        <SectionLabel index="02">Skills</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-10">
          Tools I reach for daily
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <GlassCard key={skill.name} className="px-5 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">{skill.name}</span>
                <span className="text-xs text-zinc-500">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

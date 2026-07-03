import Container from "../common/Container";
import SectionLabel from "../common/SectionLabel";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/profile";

export default function Work() {
  return (
    <section id="work" className="py-20 lg:py-28">
      <Container>
        <SectionLabel index="03">Selected Work</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-10">
          A few things I&rsquo;ve shipped
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

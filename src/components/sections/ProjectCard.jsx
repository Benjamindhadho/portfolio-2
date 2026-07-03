import { Link } from "react-router-dom";
import GlassCard from "../ui/GlassCard";
import Badge from "../common/Badge";
import { ArrowUpRightIcon } from "../common/Icons";

export default function ProjectCard({ project }) {
  return (
    <GlassCard
      as={Link}
      to={`/work/${project.slug}`}
      className="group relative flex flex-col gap-4 p-6 transition-all hover:-translate-y-1 hover:border-white/20"
    >
      <div className="flex items-start justify-between">
        <h3 className="font-display text-xl font-semibold text-white">
          {project.title}
        </h3>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors group-hover:border-cyan-400/40 group-hover:text-cyan-300">
          <ArrowUpRightIcon className="w-4 h-4" />
        </span>
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed">{project.summary}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <span className="absolute inset-x-6 bottom-4 text-xs font-medium text-cyan-300 opacity-0 transition-opacity group-hover:opacity-100">
        View case study →
      </span>
    </GlassCard>
  );
}

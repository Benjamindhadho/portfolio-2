import GlassCard from "../ui/GlassCard";
import Badge from "../common/Badge";
import { ArrowUpRightIcon } from "../common/Icons";

export default function BlogCard({ post }) {
  return (
    <GlassCard className="group flex flex-col gap-4 p-6 transition-all hover:-translate-y-1 hover:border-white/20">
      <div className="flex items-center justify-between">
        <Badge>{post.tag}</Badge>
        <span className="text-xs text-zinc-500">{post.date} · {post.readTime}</span>
      </div>
      <h3 className="font-display text-xl font-semibold text-white">
        {post.title}
      </h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{post.excerpt}</p>
      <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-cyan-300 mt-auto">
        Read article
        <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </GlassCard>
  );
}

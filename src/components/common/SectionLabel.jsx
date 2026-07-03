export default function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {index && (
        <span className="font-mono text-sm text-cyan-400">{index}</span>
      )}
      <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-cyan-400" />
      <span className="uppercase tracking-[0.2em] text-xs font-semibold text-zinc-400">
        {children}
      </span>
    </div>
  );
}

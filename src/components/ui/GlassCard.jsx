export default function GlassCard({ children, className = "", as: Tag = "div", ...rest }) {
  return (
    <Tag
      className={`rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

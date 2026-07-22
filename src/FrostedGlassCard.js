export default function FrostedGlassCard({ children, className = "" }) {
  return <div className={`frosted-glass-card ${className}`.trim()}>{children}</div>;
}

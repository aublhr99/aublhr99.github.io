import FrostedGlassCard from "./FrostedGlassCard";

export default function FrostedGlassButton({ text, link }) {
  return (
    <div onClick={() => window.open(link, "_blank")} className="btn">
      <FrostedGlassCard>{text}</FrostedGlassCard>
    </div>
  );
}

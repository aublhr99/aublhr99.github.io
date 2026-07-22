import FrostedGlassCard from "./FrostedGlassCard";

export default function FrostedGlassButton({ text, link }) {
  const isExternal = link.startsWith("http");
  const target = link.startsWith("mailto:") || link.endsWith(".pdf") ? "_self" : "_blank";

  return (
    <a
      className="btn"
      href={link}
      target={target}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={text}
    >
      <FrostedGlassCard>{text}</FrostedGlassCard>
    </a>
  );
}

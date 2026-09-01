import { PlusMark } from "./PlusMark";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} ${className ?? ""}`}
    >
      {eyebrow ? (
        <Reveal>
          <div
            className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
              isCenter ? "justify-center" : ""
            } ${isLight ? "text-cyan-300" : "text-cyan-700"}`}
          >
            <PlusMark size={11} />
            <span>{eyebrow}</span>
          </div>
        </Reveal>
      ) : null}
      <Reveal delay={eyebrow ? 0.08 : 0}>
        <h2
          className={`font-display text-balance text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] ${
            eyebrow ? "mt-4" : ""
          } ${isLight ? "text-white" : "text-petrol-900"}`}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.14}>
          <p
            className={`mt-4 text-pretty text-[1.05rem] leading-relaxed ${
              isLight ? "text-white/70" : "text-ink-soft"
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

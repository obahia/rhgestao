import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators } from "@/lib/content";

export function Differentiators() {
  return (
    <section id="diferenciais" className="bg-petrol-900 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          tone="light"
          title="O que sua empresa ganha ao trocar pela RH+."
          className="max-w-xl"
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-16">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.08}>
              <span className="font-display text-sm font-medium text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl font-medium text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 text-pretty text-[0.98rem] leading-relaxed text-white/65">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

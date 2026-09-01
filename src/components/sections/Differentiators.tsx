import { ArrowUpRight, Fingerprint } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators } from "@/lib/content";

export function Differentiators() {
  const [hero, ...rest] = differentiators;

  return (
    <section id="diferenciais" className="bg-petrol-900 py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          tone="light"
          title="O que sua empresa ganha ao trocar pela RH+."
          className="max-w-xl"
        />

        <div className="mt-14 grid gap-x-16 gap-y-14 border-t border-white/10 pt-12 lg:mt-16 lg:grid-cols-12 lg:pt-14">
          <Reveal className="lg:col-span-7">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
              <Fingerprint size={14} />
              Maior diferencial
            </span>
            <h3 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.01em] text-white text-balance">
              {hero.title}
            </h3>
            <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-white/65">
              {hero.description}
            </p>
          </Reveal>

          <div className="lg:col-span-5 lg:pt-1">
            <ul className="divide-y divide-white/10 border-t border-white/10">
              {rest.map((item, index) => (
                <Reveal
                  key={item.title}
                  as="li"
                  delay={0.12 + index * 0.06}
                  className="group relative pl-5 py-6"
                >
                  <span className="absolute left-0 top-6 h-4 w-px origin-top scale-y-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-y-100" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-display text-sm text-cyan-400">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <h4 className="mt-1.5 font-display text-base font-medium text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 max-w-xs text-pretty text-[0.9rem] leading-relaxed text-white/55">
                        {item.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-cyan-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

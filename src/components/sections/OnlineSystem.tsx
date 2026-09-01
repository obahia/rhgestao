import { Fingerprint, Monitor, Send, type LucideIcon } from "lucide-react";
import { PlusMark } from "@/components/ui/PlusMark";
import { Reveal } from "@/components/ui/Reveal";
import { onlineSystemFeatures } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  monitor: Monitor,
  send: Send,
  fingerprint: Fingerprint,
};

export function OnlineSystem() {
  return (
    <section className="border-t border-white/10 bg-petrol-900 py-24 lg:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              <PlusMark size={11} />
              Tecnologia RH+
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.01em] text-white text-balance">
              Gestão ocupacional que sua empresa acompanha de verdade.
            </h2>
          </Reveal>

          <ul className="mt-9 space-y-6 border-t border-white/15 pt-7">
            {onlineSystemFeatures.map((feature, index) => {
              const Icon = icons[feature.icon];
              return (
                <Reveal key={feature.title} delay={0.14 + index * 0.06} as="li">
                  <div className="flex items-start gap-3.5">
                    <Icon size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-cyan-400" />
                    <div>
                      <h3 className="font-display text-base font-medium text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-white/60">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7">
          <div className="flex aspect-[4/3] items-center justify-center rounded-sm border border-dashed border-white/20 bg-white/[0.03]">
            <span className="text-sm text-white/40">Screenshot do sistema RH+</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

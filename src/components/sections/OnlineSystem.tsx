"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Fingerprint, Monitor, Send, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { Photo } from "@/components/ui/Photo";
import { PlusMark } from "@/components/ui/PlusMark";
import { Reveal } from "@/components/ui/Reveal";
import { onlineSystemFeatures } from "@/lib/content";
import { stockPhotos } from "@/lib/stock-photos";

const icons: Record<string, LucideIcon> = {
  monitor: Monitor,
  send: Send,
  fingerprint: Fingerprint,
};

export function OnlineSystem() {
  const reduceMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 0.9", "start 0.35"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0.9, 1]);

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

        <div className="lg:col-span-6 lg:col-start-7" style={{ perspective: 1400 }}>
          <motion.div
            ref={frameRef}
            style={{ rotateX, scale, transformOrigin: "50% 100%" }}
            className="aspect-[4/3] overflow-hidden rounded-sm"
          >
            <Photo
              src={stockPhotos.typingLaptop}
              alt="Consulta ao sistema de gestão ocupacional da RH+"
              label="Portal RH+"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

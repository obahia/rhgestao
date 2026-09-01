"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper-warm py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Como funciona"
          title="Gestão ocupacional sem burocracia."
          align="center"
        />

        <ol className="relative mt-16 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-line-strong lg:block"
          />
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px origin-left bg-cyan-500 lg:block"
          />

          {processSteps.map((step, index) => (
            <Reveal key={step.index} delay={index * 0.08} as="li" className="relative">
              <div className="flex gap-5 lg:block">
                <div className="flex flex-col items-center lg:hidden">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-petrol-900 bg-paper-warm font-display text-sm text-petrol-900">
                    {step.index}
                  </span>
                  {index < processSteps.length - 1 ? (
                    <motion.span
                      initial={{ scaleY: reduceMotion ? 1 : 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-2 w-px flex-1 origin-top bg-cyan-500"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>

                <span className="relative z-10 hidden h-11 w-11 items-center justify-center rounded-full border border-petrol-900 bg-paper-warm font-display text-sm text-petrol-900 lg:flex">
                  {step.index}
                </span>

                <div className="pb-2 lg:mt-6 lg:pr-6 lg:pb-0">
                  <h3 className="font-display text-lg font-medium text-petrol-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-pretty text-[0.95rem] leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

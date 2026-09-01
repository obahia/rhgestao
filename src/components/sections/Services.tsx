"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PlusMark } from "@/components/ui/PlusMark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="solucoes" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Soluções"
          title="Saúde e segurança do trabalho em um só parceiro."
          description="Quatro frentes que, juntas, cobrem toda a rotina de gestão ocupacional da sua empresa."
        />

        <div className="mt-14 grid gap-10 border-t border-line pt-10 lg:mt-16 lg:grid-cols-12 lg:gap-8 lg:pt-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <ul className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
                {services.map((service, index) => {
                  const isActive = index === active;
                  return (
                    <li key={service.title} className="shrink-0 lg:shrink">
                      <button
                        type="button"
                        onClick={() => setActive(index)}
                        aria-pressed={isActive}
                        className={`flex w-full items-center gap-4 rounded-full border px-5 py-3 text-left transition-colors duration-300 lg:rounded-none lg:border-0 lg:border-l-2 lg:px-5 lg:py-4 ${
                          isActive
                            ? "border-petrol-900 bg-petrol-900 text-white lg:border-l-cyan-500 lg:bg-cyan-100/40 lg:text-petrol-900"
                            : "border-line text-ink-soft hover:border-petrol-300 lg:border-l-line lg:bg-transparent lg:hover:border-l-petrol-300"
                        }`}
                      >
                        <span
                          className={`font-display text-sm ${
                            isActive ? "text-cyan-400 lg:text-cyan-700" : "text-ink-faint"
                          }`}
                        >
                          {service.index}
                        </span>
                        <span className="font-medium">{service.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="relative lg:col-span-7 lg:col-start-6">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[7rem] font-medium leading-none text-petrol-900/[0.04] sm:text-[9rem]"
            >
              {current.index}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <h3 className="font-display text-2xl font-medium text-petrol-900 sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-4 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                  {current.summary}
                </p>

                <ul className="mt-8 grid gap-x-8 gap-y-3.5 border-t border-line pt-8 sm:grid-cols-2">
                  {current.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.98rem] text-ink">
                      <PlusMark size={10} className="mt-1.5 shrink-0 text-cyan-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

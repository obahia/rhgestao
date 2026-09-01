"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Photo } from "@/components/ui/Photo";
import { PlusMark } from "@/components/ui/PlusMark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(services.length - 1, Math.floor(value * services.length));
    setActive(Math.max(0, index));
  });

  const goTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const bandHeight = container.offsetHeight / services.length;
    const rect = container.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const target = containerTop + index * bandHeight + bandHeight / 2;
    window.scrollTo({ top: target, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section id="solucoes" className="relative bg-white py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Soluções"
          title="Saúde e segurança do trabalho em um só parceiro."
          description="Quatro frentes que, juntas, cobrem toda a rotina de gestão ocupacional da sua empresa."
        />

        {/* Desktop: scroll-driven sticky reveal */}
        <div
          ref={containerRef}
          className="mt-16 hidden border-t border-line lg:block lg:h-[280vh]"
        >
          <div className="lg:sticky lg:top-28 lg:grid lg:grid-cols-12 lg:gap-10 lg:pt-14">
            <div className="lg:col-span-4">
              <ul className="space-y-1">
                {services.map((service, index) => {
                  const isActive = index === active;
                  return (
                    <li key={service.title}>
                      <button
                        type="button"
                        onClick={() => goTo(index)}
                        aria-pressed={isActive}
                        className={`flex w-full items-center gap-4 border-l-2 px-5 py-4 text-left transition-colors duration-300 ${
                          isActive
                            ? "border-l-cyan-500 bg-cyan-100/40 text-petrol-900"
                            : "border-l-line text-ink-soft hover:border-l-petrol-300"
                        }`}
                      >
                        <span
                          className={`font-display text-sm ${
                            isActive ? "text-cyan-700" : "text-ink-faint"
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

            <div className="relative lg:col-span-7 lg:col-start-6 lg:min-h-[580px]">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  aria-hidden={index !== active}
                  className={`grid gap-8 transition-opacity duration-500 ease-out sm:grid-cols-2 ${
                    index === active
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0"
                  }`}
                >
                  <div>
                    <h3 className="font-display text-2xl font-medium text-petrol-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-pretty text-[1.02rem] leading-relaxed text-ink-soft">
                      {service.summary}
                    </p>
                    <ul className="mt-7 space-y-3 border-t border-line pt-6">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink">
                          <PlusMark size={10} className="mt-1.5 shrink-0 text-cyan-700" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <Photo
                      src={service.photo}
                      alt={service.title}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / tablet: accordion */}
        <Accordion.Root
          type="single"
          collapsible
          defaultValue={services[0].title}
          className="mt-14 border-t border-line lg:hidden"
        >
          {services.map((service) => (
            <Accordion.Item
              key={service.title}
              value={service.title}
              className="border-b border-line"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center gap-4 py-5 text-left">
                  <span className="font-display text-sm text-cyan-700">{service.index}</span>
                  <span className="flex-1 font-medium text-petrol-900">{service.title}</span>
                  <PlusMark
                    size={14}
                    className="shrink-0 text-cyan-700 transition-transform duration-300 group-data-[state=open]:rotate-45"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-content">
                <div className="pb-6">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm">
                    <Photo src={service.photo} alt={service.title} className="h-full w-full" />
                  </div>
                  <p className="mt-5 text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
                    {service.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink">
                        <PlusMark size={10} className="mt-1.5 shrink-0 text-cyan-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

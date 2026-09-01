"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { PlusMark } from "@/components/ui/PlusMark";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="bg-paper py-24 lg:py-32">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                <PlusMark size={11} />
                Perguntas frequentes
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[clamp(1.75rem,3.2vw,2.4rem)] font-medium leading-[1.15] tracking-[-0.01em] text-petrol-900 text-balance">
                Dúvidas comuns de quem está organizando a gestão ocupacional.
              </h2>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12} className="lg:col-span-7 lg:col-start-6">
          <Accordion.Root type="single" collapsible className="border-t border-line">
            {faqItems.map((item) => (
              <Accordion.Item
                key={item.question}
                value={item.question}
                className="border-b border-line"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                    <span className="font-display text-[1.05rem] font-medium text-petrol-900 sm:text-lg">
                      {item.question}
                    </span>
                    <PlusMark
                      size={16}
                      strokeWidth={1.6}
                      className="shrink-0 text-cyan-700 transition-transform duration-300 group-data-[state=open]:rotate-45"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="accordion-content">
                  <p className="max-w-2xl pb-6 text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}

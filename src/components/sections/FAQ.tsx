"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { PlusMark } from "@/components/ui/PlusMark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="bg-paper py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Dúvidas comuns de quem está organizando a gestão ocupacional."
        />

        <Reveal delay={0.1} className="mt-14 lg:mt-16">
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
                      className="shrink-0 text-cyan-600 transition-transform duration-300 group-data-[state=open]:rotate-45"
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

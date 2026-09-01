import { Star } from "lucide-react";
import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/lib/content";

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-[340px] shrink-0 rounded-sm border border-line bg-paper p-7 sm:w-[380px]">
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <Star key={starIndex} size={14} className="fill-cyan-500 text-cyan-500" />
        ))}
      </div>
      <blockquote className="mt-4 text-pretty font-display text-lg font-medium leading-snug text-petrol-900">
        “{item.quote}”
      </blockquote>
      <div className="mt-5 border-t border-line pt-4">
        <div className="font-display text-sm font-medium text-petrol-900">{item.name}</div>
        <div className="mt-1 flex flex-wrap items-center gap-x-1.5 text-xs text-ink-faint">
          {item.localGuide ? (
            <>
              <span className="font-medium text-cyan-700">Guia local</span>
              <span aria-hidden="true">·</span>
            </>
          ) : null}
          <span>Avaliação no Google</span>
        </div>
      </div>
    </div>
  );
}

function MarqueeTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="animate-marquee-left flex min-w-full shrink-0 items-stretch gap-6 pr-6 will-change-transform [backface-visibility:hidden]"
      style={{ "--duration": "48s" } as CSSProperties}
    >
      {testimonials.map((item) => (
        <TestimonialCard key={item.name} item={item} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que dizem sobre a RH+."
          description="Avaliações reais, publicadas no Google."
        />
      </div>

      <div
        aria-hidden="true"
        className="testimonial-marquee relative mt-12 overflow-hidden lg:mt-14"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-28" />
        <div className="flex">
          <MarqueeTrack />
          <MarqueeTrack hidden />
        </div>
      </div>

      <ul className="sr-only">
        {testimonials.map((item) => (
          <li key={item.name}>
            {item.quote} — {item.name}, avaliação de 5 estrelas no Google
            {item.localGuide ? ", Guia Local" : ""}.
          </li>
        ))}
      </ul>
    </section>
  );
}

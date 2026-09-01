"use client";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const targetIndexRef = useRef(0);
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let settleTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(settleTimeout);
      settleTimeout = setTimeout(() => {
        const viewStart = track.scrollLeft;
        const viewEnd = viewStart + track.clientWidth;
        let mostVisible = 0;
        let mostVisibleOverlap = -1;
        slideRefs.current.forEach((slide, i) => {
          if (!slide) return;
          const slideStart = slide.offsetLeft;
          const slideEnd = slideStart + slide.offsetWidth;
          const overlap = Math.min(viewEnd, slideEnd) - Math.max(viewStart, slideStart);
          if (overlap > mostVisibleOverlap) {
            mostVisibleOverlap = overlap;
            mostVisible = i;
          }
        });
        targetIndexRef.current = mostVisible;
        setActive(mostVisible);
      }, 120);
    };

    const updateScrollPadding = () => {
      const lastSlide = slideRefs.current[total - 1];
      if (!lastSlide) return;
      const inset = Math.max(0, track.clientWidth - lastSlide.offsetWidth);
      track.style.scrollPaddingInlineEnd = `${inset}px`;
    };
    updateScrollPadding();
    const resizeObserver = new ResizeObserver(updateScrollPadding);
    resizeObserver.observe(track);

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", handleScroll);
      clearTimeout(settleTimeout);
    };
  }, [total]);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index));
    targetIndexRef.current = clamped;
    slideRefs.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(targetIndexRef.current + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(targetIndexRef.current - 1);
    }
  };

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Depoimentos"
            title="O que dizem sobre a RH+."
            description="Avaliações reais, publicadas no Google."
            className="mb-0"
          />

          <div className="flex items-center gap-4">
            <span className="font-display text-sm tabular-nums text-ink-faint">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(targetIndexRef.current - 1)}
                disabled={active === 0}
                aria-label="Depoimento anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-petrol-900 transition-colors hover:border-petrol-900 disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => goTo(targetIndexRef.current + 1)}
                disabled={active === total - 1}
                aria-label="Próximo depoimento"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-petrol-900 transition-colors hover:border-petrol-900 disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de clientes"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="scrollbar-hide relative mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 lg:mt-14"
        >
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${total}`}
              className={`w-[86%] shrink-0 snap-start rounded-sm bg-paper p-8 transition-opacity duration-300 sm:w-[70%] lg:w-[56%] lg:p-10 ${
                index === active ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="flex min-h-[220px] flex-col justify-between gap-8 lg:min-h-[240px]">
                <div>
                  <div className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={16} className="fill-cyan-500 text-cyan-500" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-pretty font-display text-xl font-medium leading-snug text-petrol-900 sm:text-2xl">
                    “{item.quote}”
                  </blockquote>
                </div>
                <div>
                  <div className="font-display text-base font-medium text-petrol-900">
                    {item.name}
                  </div>
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
            </div>
          ))}
        </div>

        <div className="mt-8 h-px w-full bg-line">
          <div
            className="h-px bg-petrol-900 transition-all duration-300"
            style={{ width: `${((active + 1) / total) * 100}%` }}
          />
        </div>

        <span aria-live="polite" className="sr-only">
          Depoimento {active + 1} de {total}: {testimonials[active].name}
        </span>
      </div>
    </section>
  );
}

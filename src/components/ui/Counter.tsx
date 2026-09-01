"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  className?: string;
};

/**
 * Renders `to` immediately — correct with no JS and for crawlers. The
 * count-up is a client-only enhancement layered on top once the number
 * scrolls into view, never the source of the content.
 */
export function Counter({ to, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(to);

  useEffect(() => {
    if (!isInView || reduceMotion) return;
    const controls = animate(0, to, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setDisplay(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, reduceMotion, to]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

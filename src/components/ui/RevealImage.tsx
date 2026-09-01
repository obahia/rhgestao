"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealImageProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  trigger?: "mount" | "view";
};

/**
 * Wraps a photo (or placeholder) with a petrol curtain that wipes away on
 * reveal — the page's one recurring "image entering with a mask" moment.
 */
export function RevealImage({
  children,
  className,
  delay = 0,
  trigger = "view",
}: RevealImageProps) {
  const reduceMotion = useReducedMotion();

  const curtainProps = reduceMotion
    ? { animate: { scaleX: 0 } }
    : trigger === "mount"
      ? { animate: { scaleX: 0 } }
      : {
          whileInView: { scaleX: 0 },
          viewport: { once: true, margin: "-10% 0px -10% 0px" },
        };

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 origin-left bg-petrol-900"
        initial={{ scaleX: reduceMotion ? 0 : 1 }}
        transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
        {...curtainProps}
      />
    </div>
  );
}

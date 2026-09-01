"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-petrol-900 py-3 pl-3.5 pr-4 text-white shadow-[0_8px_24px_-6px_rgba(6,49,63,0.45)] transition-colors hover:bg-petrol-800 sm:bottom-6 sm:right-6"
      aria-label="Falar com a RH+ pelo WhatsApp"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-petrol-950">
        <WhatsAppIcon size={14} />
      </span>
      <span className="text-sm font-semibold">WhatsApp</span>
    </motion.a>
  );
}

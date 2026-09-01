"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { PlusMark } from "@/components/ui/PlusMark";
import { RevealImage } from "@/components/ui/RevealImage";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import { stockPhotos } from "@/lib/stock-photos";

const EASE = [0.22, 1, 0.36, 1] as const;

function StatBlock({ className }: { className?: string }) {
  return (
    <div className={className}>
      <span className="font-display text-[clamp(2.6rem,5vw,3.4rem)] font-medium leading-none text-petrol-900">
        +{siteConfig.companiesServed}
      </span>
      <p className="mt-2 max-w-[14rem] text-[0.92rem] leading-snug text-ink-soft">
        empresas já confiam sua gestão ocupacional à RH+.
      </p>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -34]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -64]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -16]);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative overflow-hidden bg-paper pt-[112px] pb-20 lg:flex lg:min-h-[92vh] lg:items-center lg:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[560px] w-[560px] rounded-full bg-cyan-200/40 blur-[120px]"
      />

      <div className="container-page relative grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-petrol-700"
          >
            <PlusMark size={11} />
            <span>Rio de Janeiro · Atendimento empresarial</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mt-6 font-display text-[clamp(2.4rem,5.4vw,3.9rem)] font-medium leading-[1.06] tracking-[-0.015em] text-petrol-900 text-balance"
          >
            Saúde ocupacional{" "}
            <span className="text-cyan-600">sem complicação</span> para
            sua empresa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
            className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-ink-soft"
          >
            Medicina ocupacional, segurança do trabalho e gestão de SST para
            empresas que querem cuidar das pessoas sem perder tempo com
            burocracia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#contato" variant="primary" size="lg" icon={<ArrowUpRight size={18} />}>
              Solicitar orçamento
            </Button>
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<WhatsAppIcon size={17} />}
              className="text-petrol-900"
            >
              Falar pelo WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Desktop: staggered editorial photo stream */}
        <div className="relative hidden lg:col-span-7 lg:col-start-6 lg:block">
          <PlusMark size={16} className="absolute -left-3 -top-3 text-petrol-700/30" />
          <PlusMark size={16} className="absolute -bottom-3 -right-3 text-petrol-700/30" />

          <div className="grid grid-cols-3 gap-5">
            <motion.div style={{ y: yA }} className="flex flex-col gap-5">
              <RevealImage trigger="mount" delay={0.15} className="aspect-[3/4] rounded-sm">
                <Photo
                  src={stockPhotos.team}
                  alt="Equipe RH+"
                  label="Equipe RH+"
                  className="h-full w-full"
                  priority
                />
              </RevealImage>
            </motion.div>

            <motion.div style={{ y: yB }} className="mt-16 flex flex-col gap-5">
              <StatBlock />
              <RevealImage trigger="mount" delay={0.35} className="aspect-square rounded-sm">
                <Photo
                  src={stockPhotos.safetyBriefing}
                  alt="Equipe de segurança do trabalho em briefing"
                  label="Segurança do trabalho"
                  className="h-full w-full"
                />
              </RevealImage>
            </motion.div>

            <motion.div style={{ y: yC }} className="mt-8 flex flex-col gap-5">
              <RevealImage trigger="mount" delay={0.25} className="aspect-[4/5] rounded-sm">
                <Photo
                  src={stockPhotos.clinicalCare}
                  alt="Profissional da RH+ em atendimento a colaborador"
                  label="Atendimento RH+"
                  className="h-full w-full"
                />
              </RevealImage>
              <RevealImage trigger="mount" delay={0.45} className="aspect-square rounded-sm">
                <Photo
                  src={stockPhotos.stethoscopeExam}
                  alt="Atendimento clínico ocupacional"
                  label="Atendimento clínico"
                  className="h-full w-full"
                />
              </RevealImage>
            </motion.div>
          </div>
        </div>

        {/* Mobile / tablet: compact photo + integrated stat */}
        <div className="lg:hidden">
          <RevealImage
            trigger="mount"
            delay={0.15}
            className="aspect-[4/3] rounded-sm"
          >
            <Photo
              src={stockPhotos.clinicalCare}
              alt="Profissional da RH+ em atendimento a colaborador"
              label="Atendimento RH+"
              className="h-full w-full"
              priority
            />
          </RevealImage>
          <StatBlock className="mt-8" />
        </div>
      </div>
    </section>
  );
}

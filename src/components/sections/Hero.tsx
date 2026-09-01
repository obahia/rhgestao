"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { PlusMark } from "@/components/ui/PlusMark";
import { RevealImage } from "@/components/ui/RevealImage";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import { stockPhotos } from "@/lib/stock-photos";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-paper pt-[112px] pb-20 lg:flex lg:min-h-[88vh] lg:items-center lg:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[560px] w-[560px] rounded-full bg-cyan-200/40 blur-[120px]"
      />

      <div className="container-page relative grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-6">
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

        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-[480px] lg:max-w-none">
            <PlusMark
              size={16}
              className="absolute -left-2 -top-2 hidden text-petrol-700/30 lg:block"
            />
            <PlusMark
              size={16}
              className="absolute -bottom-2 -right-2 hidden text-petrol-700/30 lg:block"
            />

            <div className="grid grid-cols-2 grid-rows-[minmax(0,auto)] gap-3 lg:aspect-[1/0.98] lg:grid-cols-6 lg:grid-rows-6 lg:gap-4">
              <RevealImage
                trigger="mount"
                delay={0.15}
                className="col-span-2 aspect-[4/3] rounded-sm lg:col-start-3 lg:col-span-4 lg:row-start-1 lg:row-span-4 lg:aspect-auto"
              >
                <Photo
                  src={stockPhotos.clinicalCare}
                  alt="Profissional da RH+ em atendimento a colaborador"
                  label="Atendimento RH+"
                  labelPosition="top-left"
                  className="h-full w-full"
                  priority
                />
              </RevealImage>

              <div className="col-span-1 row-start-2 flex flex-col justify-center gap-1 rounded-sm bg-petrol-900 px-4 py-5 text-white lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-3 lg:px-5">
                <span className="font-display text-[2.1rem] font-medium leading-none lg:text-[2.5rem]">
                  +{siteConfig.companiesServed}
                </span>
                <span className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white/65">
                  Empresas atendidas
                </span>
              </div>

              <RevealImage
                trigger="mount"
                delay={0.3}
                className="col-span-1 row-start-2 aspect-square rounded-sm lg:col-start-1 lg:col-span-3 lg:row-start-4 lg:row-span-3 lg:aspect-auto"
              >
                <Photo
                  src={stockPhotos.safetyBriefing}
                  alt="Equipe de segurança do trabalho em briefing"
                  label="Segurança do trabalho"
                  className="h-full w-full"
                />
              </RevealImage>

              <div className="col-span-2 flex flex-col justify-center gap-2.5 rounded-sm border border-line-strong bg-white px-4 py-5 lg:col-start-4 lg:col-span-3 lg:row-start-5 lg:row-span-2 lg:px-5">
                {["Medicina ocupacional", "Segurança do trabalho", "SST · eSocial"].map(
                  (item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-[0.8rem] font-medium text-petrol-900"
                    >
                      <PlusMark size={9} className="shrink-0 text-cyan-600" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

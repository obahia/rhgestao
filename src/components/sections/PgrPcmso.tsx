import { PlusMark } from "@/components/ui/PlusMark";
import { Reveal } from "@/components/ui/Reveal";

const pgr = {
  label: "PGR",
  fullName: "Programa de Gerenciamento de Riscos",
  steps: ["Identificar", "Avaliar", "Controlar riscos"],
};

const pcmso = {
  label: "PCMSO",
  fullName: "Programa de Controle Médico de Saúde Ocupacional",
  steps: ["Monitorar", "Prevenir", "Acompanhar a saúde"],
};

export function PgrPcmso() {
  return (
    <section className="relative overflow-hidden bg-petrol-900 py-24 text-white lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container-page relative text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            <PlusMark size={11} />
            Duas frentes, um só objetivo
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 flex flex-wrap items-baseline justify-center gap-x-5 gap-y-2 font-display text-[clamp(2.8rem,9vw,6rem)] font-medium leading-none tracking-tight">
            <span>PGR</span>
            <span className="text-cyan-400">+</span>
            <span>PCMSO</span>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/70">
            A dupla que protege sua empresa e seus colaboradores.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-3xl gap-10 text-left sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:gap-6 lg:mt-20">
          <Reveal>
            <div>
              <h3 className="font-display text-xl font-medium text-white">{pgr.label}</h3>
              <p className="mt-1.5 text-sm text-white/55">{pgr.fullName}</p>
              <ul className="mt-6 space-y-3">
                {pgr.steps.map((step) => (
                  <li key={step} className="flex items-center gap-3 text-[0.98rem] text-white/85">
                    <PlusMark size={10} className="shrink-0 text-cyan-400" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div
            aria-hidden="true"
            className="hidden justify-center text-white/25 sm:flex"
          >
            <div className="h-full w-px bg-white/15" />
          </div>

          <Reveal delay={0.1}>
            <div>
              <h3 className="font-display text-xl font-medium text-white">{pcmso.label}</h3>
              <p className="mt-1.5 text-sm text-white/55">{pcmso.fullName}</p>
              <ul className="mt-6 space-y-3">
                {pcmso.steps.map((step) => (
                  <li key={step} className="flex items-center gap-3 text-[0.98rem] text-white/85">
                    <PlusMark size={10} className="shrink-0 text-cyan-400" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mx-auto mt-16 flex max-w-xl flex-col items-center justify-center gap-3 border-t border-white/10 pt-10 text-sm font-medium uppercase tracking-[0.08em] text-white/70 sm:flex-row lg:mt-20">
            <span>Ambiente mais seguro</span>
            <PlusMark size={11} className="text-cyan-400" />
            <span>Empresa em conformidade</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { PlusMark } from "@/components/ui/PlusMark";
import { Reveal } from "@/components/ui/Reveal";
import { painPoints } from "@/lib/content";

export function PainPoints() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                O problema
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-petrol-900 text-balance">
                Sua equipe de RH já tem trabalho demais.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                Entre folha de pagamento, admissões e rotina do dia a dia, a
                gestão ocupacional acaba entrando na fila. E ela não pode
                esperar.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-line border-t border-line">
              {painPoints.map((point, index) => (
                <Reveal
                  key={point}
                  delay={index * 0.06}
                  as="li"
                  className="flex items-start gap-4 py-5"
                >
                  <PlusMark size={12} className="mt-1.5 shrink-0 text-cyan-600" />
                  <span className="text-[1.02rem] leading-relaxed text-ink">
                    {point}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-20 lg:mt-28">
          <p className="border-t border-line pt-10 text-center font-display text-[clamp(1.6rem,3.2vw,2.35rem)] font-medium leading-snug text-petrol-900 text-balance">
            A RH+ cuida da gestão ocupacional.
            <br className="hidden sm:block" /> Sua empresa cuida do negócio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

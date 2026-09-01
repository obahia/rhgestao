import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/lib/site-config";

const PLUS_PATTERN =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cpath d='M24 10v28M10 24h28' stroke='%23ffffff' stroke-opacity='0.12' stroke-width='1.2'/%3E%3C/svg%3E";

export function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-petrol-950 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url("${PLUS_PATTERN}")`, backgroundSize: "48px 48px" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-petrol-950 via-transparent to-petrol-950/40"
      />

      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(2.1rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.01em] text-white text-balance">
            Vamos simplificar a saúde ocupacional da sua empresa?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/65">
            Fale com a equipe da RH+ e descubra como podemos cuidar da gestão
            ocupacional dos seus colaboradores.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<WhatsAppIcon size={17} />}
            >
              Falar com a RH+
            </Button>
            <Button
              href="mailto:contato@gruporhmais.com.br"
              variant="secondary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
              className="text-white"
            >
              Solicitar orçamento
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

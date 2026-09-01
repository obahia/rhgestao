import { ArrowUpRight } from "lucide-react";
import { PlusMark } from "@/components/ui/PlusMark";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { fullAddress, mapEmbedSrc, mapLinkHref, siteConfig, whatsappHref } from "@/lib/site-config";

export function Location() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          title="Atendimento presencial em Jacarepaguá."
          description="Estrutura própria para receber empresas e colaboradores, com fácil acesso pela Estrada de Jacarepaguá."
        />

        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between gap-8 border-t border-line pt-6">
              <div className="space-y-5">
                <div>
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    <PlusMark size={10} className="text-cyan-600" />
                    Endereço
                  </span>
                  <p className="mt-2 text-[1.02rem] leading-relaxed text-ink">
                    {siteConfig.addressStreet}
                    <br />
                    {siteConfig.addressNeighborhood}, {siteConfig.city} - {siteConfig.state}
                    <br />
                    {siteConfig.zip}
                  </p>
                </div>

                <div>
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    <PlusMark size={10} className="text-cyan-600" />
                    Contato
                  </span>
                  <p className="mt-2 text-[1.02rem] leading-relaxed text-ink">
                    {siteConfig.phoneDisplay}
                    <br />
                    {siteConfig.email}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={mapLinkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-petrol-900"
                >
                  Ver rotas no Google Maps
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-petrol-900"
                >
                  <WhatsAppIcon size={15} />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-sm border border-line-strong sm:aspect-[16/8]">
              <iframe
                src={mapEmbedSrc}
                title={`Mapa — ${fullAddress}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[15%]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

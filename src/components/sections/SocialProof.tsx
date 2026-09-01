import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export function SocialProof() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page text-center">
        <Reveal>
          <p className="font-display text-[clamp(5rem,18vw,11rem)] font-medium leading-none tracking-tight text-petrol-900">
            +<Counter to={siteConfig.companiesServed} />
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-pretty text-lg leading-relaxed text-ink-soft">
            Empresas já confiaram sua gestão ocupacional à RH+ — dos exames
            admissionais à conformidade com o eSocial.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

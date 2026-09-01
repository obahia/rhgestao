import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { RevealImage } from "@/components/ui/RevealImage";
import { aboutGallery } from "@/lib/content";

export function About() {
  const [big, vertical, small1, small2] = aboutGallery;

  return (
    <section id="sobre" className="bg-white py-24 lg:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Sobre a RH+
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-petrol-900 text-balance">
              Há muito mais por trás de um ASO.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-md text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
              Somos uma equipe de médicos do trabalho, técnicos de segurança
              e profissionais de gestão que cuida da saúde dos colaboradores
              e da rotina de SST das empresas — presentes no consultório e
              nas ações das empresas parceiras, no Rio de Janeiro.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="flex aspect-[16/11] gap-4">
            <RevealImage className="w-[62%] rounded-sm">
              <Photo src={big.photo} alt={big.caption} label={big.caption} className="h-full w-full" />
            </RevealImage>
            <RevealImage delay={0.1} className="w-[38%] rounded-sm">
              <Photo
                src={vertical.photo}
                alt={vertical.caption}
                label={vertical.caption}
                className="h-full w-full"
              />
            </RevealImage>
          </div>
          <div className="mt-4 flex gap-4">
            <RevealImage delay={0.16} className="flex-1 aspect-[4/3] rounded-sm">
              <Photo
                src={small1.photo}
                alt={small1.caption}
                label={small1.caption}
                className="h-full w-full"
              />
            </RevealImage>
            <RevealImage delay={0.22} className="flex-1 aspect-[4/3] rounded-sm">
              <Photo
                src={small2.photo}
                alt={small2.caption}
                label={small2.caption}
                className="h-full w-full"
              />
            </RevealImage>
          </div>
        </div>
      </div>
    </section>
  );
}

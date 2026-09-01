import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/content";
import { mapLinkHref, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-petrol-950 pt-16 pb-8 text-white/70">
      <div className="container-page">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {siteConfig.legalName}. Medicina ocupacional, segurança do
              trabalho e gestão de SST para empresas.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Soluções
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>Medicina Ocupacional</li>
              <li>Segurança do Trabalho</li>
              <li>eSocial / SST</li>
              <li>Gestão Ocupacional</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={mapLinkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.addressStreet}
                  <br />
                  {siteConfig.addressNeighborhood}, {siteConfig.city} - {siteConfig.state}
                </a>
              </li>
              <li>{siteConfig.phoneDisplay}</li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <InstagramIcon size={15} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos os direitos
            reservados.
          </span>
          <a href="#" className="transition-colors hover:text-white/70">
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

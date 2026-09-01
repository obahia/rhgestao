import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title =
  "RH+ Gestão Ocupacional | Medicina Ocupacional e Segurança do Trabalho no Rio de Janeiro";
const description =
  "Medicina ocupacional, segurança do trabalho e gestão de SST para empresas no Rio de Janeiro. PCMSO, PGR, ASO e eSocial com acompanhamento contínuo. +350 empresas atendidas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | RH+ Gestão Ocupacional",
  },
  description,
  keywords: [
    "medicina ocupacional Rio de Janeiro",
    "clínica de medicina ocupacional RJ",
    "segurança do trabalho RJ",
    "PCMSO Rio de Janeiro",
    "PGR Rio de Janeiro",
    "exame admissional RJ",
    "exame demissional RJ",
    "SST eSocial",
    "gestão ocupacional",
  ],
  authors: [{ name: siteConfig.legalName }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.legalName,
  url: siteConfig.url,
  areaServed: {
    "@type": "City",
    name: "Rio de Janeiro",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressStreet,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    postalCode: siteConfig.zip,
    addressCountry: "BR",
  },
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  medicalSpecialty: "Occupational Medicine",
  sameAs: [siteConfig.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

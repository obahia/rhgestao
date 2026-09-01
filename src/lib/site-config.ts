// Dados de contato reais da RH+ ainda não foram fornecidos.
// Substitua os valores abaixo pelos dados oficiais antes de publicar.
export const siteConfig = {
  name: "RH+ Gestão Ocupacional",
  legalName: "Grupo RH+ Gestão Ocupacional",
  url: "https://www.gruporhmais.com.br",
  addressStreet: "Estrada de Jacarepaguá, 7655 - Sala 1215",
  addressNeighborhood: "Jacarepaguá",
  city: "Rio de Janeiro",
  state: "RJ",
  zip: "22755-155",
  whatsappNumber: "5521970302377",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento para minha empresa.",
  phoneDisplay: "(21) 9972-83909",
  email: "igorbahia8@gmail.com",
  instagramUrl: "https://www.instagram.com/gruporhgestaoocupacional/",
  companiesServed: 350,
} as const;

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

export const fullAddress = `${siteConfig.addressStreet}, ${siteConfig.city} - ${siteConfig.state}, ${siteConfig.zip}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  fullAddress
)}&output=embed`;

export const mapLinkHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  fullAddress
)}`;

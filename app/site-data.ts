const name = "Dr. Emmanuel Carlos de Souza";
const address = "Av. Duque de Caxias, 1.389, 2º andar, Quatorze de Fevereiro, Itabira - MG, CEP 35900-236";

export const office = {
  name,
  address,
  brandName: "Emmanuel Souza",
  registration: "OAB/MG 232.059",
  city: "Itabira",
  phoneDisplay: "(31) 99798-9797",
  telephone: "tel:+5531997989797",
  whatsapp: "https://wa.me/5531997989797?text=" + encodeURIComponent(
    "Olá, Dr. Emmanuel! Gostaria de conversar sobre uma orientação jurídica e agendar um atendimento.",
  ),
  maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${name}, ${address}`),
  // Dados do material enviado pelo cliente, sem atualização automática.
  rating: "5,0",
  reviewCount: 107,
} as const;

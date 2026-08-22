// Configurações da barbearia — edite aqui para personalizar
export const BARBER_SHOP = {
  name: "Dom Barbearia",
  slogan: "Tradição, estilo e precisão em cada corte.",
  phone: "5534993357833", // Número real com DDI e DDD
  address: "Rua dos Barbeiros, 123 — Centro, São Paulo/SP",
  hours: [
    { day: "Segunda a Sexta", time: "09h às 20h" },
    { day: "Sábado", time: "09h às 18h" },
    { day: "Domingo", time: "Fechado" },
  ],
  social: {
    instagram: "https://www.instagram.com/_freire_02/",
    facebook: "https://facebook.com/dombarbearia",
  },
  about: {
    title: "Nossa História",
    paragraphs: [
      "Fundada em 2015, a Dom Barbearia nasceu da paixão pela arte da barbearia clássica. Combinamos técnicas tradicionais com as tendências mais atuais para entregar um visual impecável a cada cliente.",
      "Nosso espaço foi pensado para proporcionar uma experiência completa de cuidado pessoal: ambiente acolhedor, profissionais experientes e atenção aos detalhes. Aqui, cada corte é uma obra de arte.",
    ],
  },
};

export type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "corte-social",
    name: "Corte Social",
    description: "Corte clássico e elegante, ideal para o dia a dia profissional.",
    price: "R$ 45,00",
    image: "/images/service-corte-social.jpg",
  },
  {
    id: "degrade",
    name: "Degradê",
    description: "Transição suave e bem definida para um visual moderno e estiloso.",
    price: "R$ 50,00",
    image: "/images/service-degrade.jpg",
  },
  {
    id: "barba",
    name: "Barba",
    description: "Modelagem, aparo e acabamento perfeitos para valorizar sua barba.",
    price: "R$ 35,00",
    image: "/images/service-barba.jpg",
  },
  {
    id: "combo",
    name: "Combo Corte + Barba",
    description: "O pacote completo para quem quer sair renovado e alinhado.",
    price: "R$ 75,00",
    image: "/images/service-combo.jpg",
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha",
    description: "Design de sobrancelha para harmonizar e destacar o olhar.",
    price: "R$ 20,00",
    image: "/images/service-sobrancelha.jpg",
  },
];

export const GALLERY_IMAGES = [
  { id: "1", src: "/images/gallery-1.jpg", alt: "Corte degradê moderno" },
  { id: "2", src: "/images/gallery-2.jpg", alt: "Barba bem cuidada" },
  { id: "3", src: "/images/gallery-3.jpg", alt: "Corte social clássico" },
  { id: "4", src: "/images/gallery-4.jpg", alt: "Combo corte e barba" },
  { id: "5", src: "/images/gallery-5.jpg", alt: "Acabamento de precisão" },
  { id: "6", src: "/images/gallery-6.jpg", alt: "Estilo único e personalizado" },
];

export function buildWhatsAppLink(
  phone: string,
  message?: string
): string {
  const base = `https://wa.me/${phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function serviceBookingMessage(serviceName: string): string {
  return `Olá! Gostaria de agendar um ${serviceName}. Qual a disponibilidade de horário?`;
}
// Configurações da barbearia — edite aqui para personalizar
export const BARBER_SHOP = {
  name: "Diego Barbearia",
  slogan: "Tradição, estilo e cuidado masculino em cada detalhe.",
  phone: "553499979244", // Número real com DDI e DDD
  address: "R. Paulo Frontin, 993 - Alto Umuarama, Uberlândia - MG, 38405-283",
  hours: [
    { day: "Segunda a Sexta", time: "09h às 20h" },
    { day: "Sábado", time: "09h às 18h" },
    { day: "Domingo", time: "Fechado" },
  ],
  social: {
    instagram: "https://www.instagram.com/_freire_02/",
    facebook: "https://facebook.com/diegobarbearia",
  },
  about: {
    title: "Nossa História",
    paragraphs: [
      "Fundada em 2015, a Diego Barbearia nasceu da paixão pela arte da barbearia clássica. Combinamos técnicas tradicionais com as tendências mais atuais para entregar um visual impecável a cada cliente.",
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

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "pomada" | "finalizador" | "kit";
};

export const PRODUCTS: Product[] = [
  {
    id: "pomada-matte",
    name: "Pomada Matte Diego",
    description: "Fixação média, acabamento seco e textura natural. Ideal para cortes modernos e desconstruídos.",
    price: "R$ 49,90",
    image: "/images/product-pomada-matte.jpg",
    category: "pomada",
  },
  {
    id: "pomada-brilliance",
    name: "Pomada Brilho Clássico",
    description: "Fixação leve a média com brilho discreto. Perfeita para penteados sociais e retrôs.",
    price: "R$ 54,90",
    image: "/images/product-pomada-brilliance.jpg",
    category: "pomada",
  },
  {
    id: "pomada-forte",
    name: "Pomada Forte Hold",
    description: "Máxima fixação e controle o dia todo. Não resseca e sai facilmente com a lavagem.",
    price: "R$ 59,90",
    image: "/images/product-pomada-forte.jpg",
    category: "pomada",
  },
  {
    id: "finalizador-spray",
    name: "Spray Texturizador",
    description: "Volume e definição instantâneos. Fixação flexível para looks naturais.",
    price: "R$ 44,90",
    image: "/images/product-spray.jpg",
    category: "finalizador",
  },
  {
    id: "kit-cuidado",
    name: "Kit Cuidado do Cabelo",
    description: "Combo com shampoo, condicionador e pomada matte. Tudo que você precisa para manter o estilo.",
    price: "R$ 129,90",
    image: "/images/product-kit.jpg",
    category: "kit",
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

export function productOrderMessage(productName: string): string {
  return `Olá! Tenho interesse no produto ${productName}. Ele está disponível?`;
}

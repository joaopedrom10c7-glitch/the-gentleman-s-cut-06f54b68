import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, BARBER_SHOP } from "@/lib/barbershop-data";

export function FloatingWhatsApp() {
  const link = buildWhatsAppLink(
    BARBER_SHOP.phone,
    "Olá! Gostaria de agendar um horário na Diego Barbearia."
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background sm:right-6 sm:bottom-6"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
    </a>
  );
}

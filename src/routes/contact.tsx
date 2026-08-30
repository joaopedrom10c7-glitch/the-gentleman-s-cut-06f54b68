import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Instagram, Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { BARBER_SHOP, buildWhatsAppLink } from "@/lib/barbershop-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contato — ${BARBER_SHOP.name}` },
      {
        name: "description",
        content: `Entre em contato com a ${BARBER_SHOP.name}. Endereço, horários e WhatsApp para agendamentos.`,
      },
      { property: "og:title", content: `Contato — ${BARBER_SHOP.name}` },
      { property: "og:description", content: `Fale com a ${BARBER_SHOP.name} pelo WhatsApp.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const whatsappLink = buildWhatsAppLink(
    BARBER_SHOP.phone,
    "Olá! Gostaria de agendar um horário na Diego Barbearia."
  );

  return (
    <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Fale conosco
        </span>
        <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">Contato</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Estamos prontos para atender você. Agende pelo WhatsApp ou visite nossa barbearia.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-heading text-2xl text-foreground">Informações de contato</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Endereço</h3>
                  <p className="text-sm text-muted-foreground">{BARBER_SHOP.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Horário de funcionamento</h3>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    {BARBER_SHOP.hours.map((h) => (
                      <li key={h.day}>
                        {h.day}: <span className="text-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">WhatsApp</h3>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Clique para agendar
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-heading text-2xl text-foreground">Redes sociais</h2>
            <div className="mt-4 flex gap-3">
              <a
                href={BARBER_SHOP.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Instagram className="h-4 w-4 text-primary" /> Instagram
              </a>
              <a
                href={BARBER_SHOP.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Facebook className="h-4 w-4 text-primary" /> Facebook
              </a>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#128C7E]"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
            Agendar pelo WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Map placeholder */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative aspect-video w-full bg-secondary lg:aspect-auto lg:h-full">
            <iframe
              title="Localização da barbearia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0979!2d-46.6539!3d-23.5617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQyLjEiUyA0NsKwMzknMTQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1609459200000!5m2!1spt-BR!2sbr"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

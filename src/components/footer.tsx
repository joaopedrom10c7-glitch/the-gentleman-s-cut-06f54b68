import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";
import { BARBER_SHOP, buildWhatsAppLink } from "@/lib/barbershop-data";
import logoAsset from "@/assets/diego-logo.png.asset.json";

export function Footer() {
  const whatsappLink = buildWhatsAppLink(
    BARBER_SHOP.phone,
    "Olá! Gostaria de mais informações sobre a Diego Barbearia."
  );

  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt={`Logo ${BARBER_SHOP.name}`}
                className="h-10 w-auto"
              />
              <span className="font-heading text-xl font-semibold text-foreground">
                {BARBER_SHOP.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tradição e estilo em cada corte. Agende seu horário e viva a experiência de uma
              barbearia clássica.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg text-foreground">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{BARBER_SHOP.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <ul className="space-y-1">
                  {BARBER_SHOP.hours.map((h) => (
                    <li key={h.day}>
                      {h.day}: {h.time}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-lg text-foreground">Redes Sociais</h3>
            <div className="mt-4 flex gap-3">
              <a
                href={BARBER_SHOP.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BARBER_SHOP.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {BARBER_SHOP.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

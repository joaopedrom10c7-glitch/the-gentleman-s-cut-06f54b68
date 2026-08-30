import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { BARBER_SHOP } from "@/lib/barbershop-data";
import logoAsset from "@/assets/diego-logo.png.asset.json";

const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/services", label: "Serviços" },
  { to: "/products", label: "Produtos" },
  { to: "/gallery", label: "Galeria" },
  { to: "/about", label: "Sobre" },
  { to: "/contact", label: "Contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt={`Logo ${BARBER_SHOP.name}`}
            className="h-10 w-auto"
          />
          <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
            {BARBER_SHOP.name}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative font-body text-sm font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Social icons + mobile menu button */}
        <div className="flex items-center gap-2">
          <a
            href={BARBER_SHOP.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary md:grid"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={BARBER_SHOP.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary md:grid"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-secondary text-foreground md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-3 border-t border-border/50 px-3 pt-3">
              <a
                href={BARBER_SHOP.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={BARBER_SHOP.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

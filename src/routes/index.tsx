import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { ProductCard } from "@/components/product-card";
import { BARBER_SHOP, PRODUCTS, SERVICES, buildWhatsAppLink } from "@/lib/barbershop-data";
import logonovapng from "../../public/logonova.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BARBER_SHOP.name} — Barbearia Clássica em Uberlândia` },
      {
        name: "description",
        content: `${BARBER_SHOP.slogan} Cortes sociais, degradês, barba, pomadas e muito mais. Agende pelo WhatsApp.`,
      },
      { property: "og:title", content: `${BARBER_SHOP.name} — Barbearia Clássica` },
      { property: "og:description", content: BARBER_SHOP.slogan },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredServices = SERVICES.slice(0, 3);
  const featuredProducts = PRODUCTS.slice(0, 3);
  const whatsappLink = buildWhatsAppLink(
    BARBER_SHOP.phone,
    "Olá! Gostaria de agendar um horário na Diego Barbearia."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Interior clássico da barbearia"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col items-center gap-4">
            <img
              src={logonovapng}
              alt={`Logo ${BARBER_SHOP.name}`}
              className="mx-auto h-24 w-auto sm:h-32"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span>Barbearia Clássica</span>
            </span>
          </div>
          <h1 className="font-heading text-5xl leading-[1.1] font-bold text-foreground sm:text-6xl md:text-7xl">
            {BARBER_SHOP.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {BARBER_SHOP.slogan}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Agende pelo WhatsApp
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              to="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-8 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary sm:w-auto"
            >
              Ver serviços
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9 estrelas</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{BARBER_SHOP.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Seg a Sáb</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Serviços
            </span>
            <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">
              Nossos cortes
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Escolha o serviço ideal e agende direto pelo WhatsApp.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Products preview */}
      <section className="section-padding border-y border-border/50 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Loja
              </span>
              <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">
                Pomadas & Produtos
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Produtos selecionados para manter seu estilo em dia. Compre pelo WhatsApp.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img
              src="/images/gallery-3.jpg"
              alt="Barbeiro trabalhando com precisão"
              className="rounded-2xl object-cover shadow-2xl shadow-black/20"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre nós
            </span>
            <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">
              {BARBER_SHOP.about.title}
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {BARBER_SHOP.about.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Conheça a barbearia <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-background px-6 py-16 text-center sm:px-12">
          <div className="relative z-10">
            <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
              Pronto para renovar o visual?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Agende seu horário agora mesmo pelo WhatsApp e venha viver a experiência Diego
              Barbearia.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Agendar pelo WhatsApp
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

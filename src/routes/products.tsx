import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { BARBER_SHOP, PRODUCTS } from "@/lib/barbershop-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: `Produtos — ${BARBER_SHOP.name}` },
      {
        name: "description",
        content: `Compre pomadas, finalizadores e kits de cuidado masculino na ${BARBER_SHOP.name}. Entre em contato pelo WhatsApp.`,
      },
      { property: "og:title", content: `Produtos — ${BARBER_SHOP.name}` },
      {
        property: "og:description",
        content: `Pomadas e produtos para cabelo na ${BARBER_SHOP.name}.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Loja
        </span>
        <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">
          Pomadas & Produtos
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Produtos selecionados para manter seu cabelo e barba no estilo. Compre pelo WhatsApp e
          retire na barbearia.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

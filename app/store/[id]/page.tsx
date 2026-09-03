import type { Metadata } from "next";
import { supabase, Product } from "@/lib/supabase";
import ProductDetailClient from "./ProductDetailClient";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

// Metadata only needs to be reasonably fresh, not real-time — avoids a DB
// round trip on every crawl/share while still picking up edits within an hour.
export const revalidate = 3600;

function firstImageUrl(images: Product["images"] | undefined): string | undefined {
  if (!images || images.length === 0) return undefined;
  const first = images[0];
  return typeof first === "string" ? first : first?.url;
}

async function getProduct(id: string): Promise<Product | null> {
  const { data } = await supabase.from("products").select("*").eq("id", id).single();
  return data ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: { index: false, follow: true },
    };
  }

  const description =
    product.description?.slice(0, 160) ||
    `${product.name} — available from the Police Dog Centre India K9 equipment store.`;
  const image = firstImageUrl(product.images);
  const url = `/store/${product.id}`;

  return {
    title: product.name,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: product.name,
      description,
      url,
      type: "website",
      images: image ? [{ url: image, alt: product.name }] : undefined,
    },
    twitter: {
      title: product.name,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  const productJsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: (product.images ?? [])
          .map((img) => (typeof img === "string" ? img : img?.url))
          .filter(Boolean),
        category: product.category,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: product.base_price,
          availability:
            product.stock > 0
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          url: `https://www.policedogcentreindia.com/store/${product.id}`,
        },
      }
    : null;

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Store", path: "/store" },
    { name: product?.name ?? "Product", path: `/store/${id}` },
  ]);

  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbs)} />
      {productJsonLd && <script {...jsonLdScriptProps(productJsonLd)} />}
      <ProductDetailClient />
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BadgeIndianRupee, Filter } from "lucide-react";
import type { StoreProduct, ProductCategory } from "@/lib/site-content";

const categoryOrder: Array<{ value: ProductCategory | "all"; label: string }> = [
  { value: "all", label: "All" },
  { value: "security", label: "Security Packages" },
  { value: "gear", label: "Dog Gear" },
  { value: "merch", label: "Merchandise" },
];

type StoreCatalogProps = {
  locale: string;
  products: StoreProduct[];
};

export default function StoreCatalog({ locale, products }: StoreCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-3xl border border-white/50 bg-white/70 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm font-semibold text-navy-900">
          <Filter className="h-4 w-4 text-gold-500" />
          <span>Category filter</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryOrder.map((category) => {
            const active = activeCategory === category.value;
            return (
              <button
                key={String(category.value)}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active
                    ? "bg-navy-900 text-white shadow-lg shadow-navy-900/20"
                    : "bg-white text-navy-800 hover:bg-gold-50"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <article
            key={product.slug}
            className="group overflow-hidden rounded-[28px] border border-white/60 bg-white/80 shadow-[0_20px_60px_rgba(13,27,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-44 items-end justify-between bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 p-5 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                  {product.categoryLabel}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{product.title}</h3>
              </div>
              <div className="rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1 text-xs font-bold text-gold-300">
                {product.badge}
              </div>
            </div>

            <div className="space-y-4 p-6">
              <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>
              <div className="flex items-center gap-2 text-xl font-black text-navy-900">
                <BadgeIndianRupee className="h-5 w-5 text-gold-500" />
                {product.price}
              </div>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.01] hover:bg-navy-800"
                >
                  Enquire now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
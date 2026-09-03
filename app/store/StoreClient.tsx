"use client";
import { useEffect, useState, useRef } from "react";
import { supabase, Product } from "@/lib/supabase";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────────────────────
const CATEGORIES = [
    "All",
    "Leashes and Harnesses",
    "Detection Dog Equipment",
    "Patrol Dog Equipment",
    "Dog Training Aids",
    "Dog Toys",
    "Training Vest and Pouches",
    "Apparel",
    "Accessories",
];

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function getImages(images: Product["images"]): string[] {
    if (!images || images.length === 0) return ["/placeholder.jpg"];
    return images
        .map((img) => {
            if (!img) return null;
            return typeof img === "string" ? img : (img.url ?? null);
        })
        .filter(Boolean) as string[];
}

function colorToHex(color: string): string {
    const map: Record<string, string> = {
        White: "#ffffff",
        Grey: "#9ca3af",
        "Black with Orange Collar": "#1a1a1a",
        "Olive Green": "#6b7c3a",
        Black: "#1a1a1a",
        Beige: "#d4b896",
        "Black / Beige (Reversible)": "#888",
        Silver: "#c0c0c0",
        Color: "#c9a45a",
        Brown: "#7b4f2e",
        Red: "#cc2222",
        Sand: "#c2a97a",
    };
    return map[color] ?? "#c9a45a";
}

// ─────────────────────────────────────────────────────────────
// PRODUCT CARD
// ─────────────────────────────────────────────────────────────
function ProductCard({ product, index }: { product: Product; index: number }) {
    const allImages = getImages(product.images);

    return (
        <Link href={`/store/${product.id}`}>
            <div
                className="group flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                    background: "#ffffff",
                    border: "1px solid rgba(201,164,90,0.15)",
                    borderRadius: "2px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    animationDelay: `${index * 40}ms`,
                }}
            >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden" style={{ background: "#ffffff" }}>
                    <img
                        src={allImages[0]}
                        alt={product.name}
                        className="h-full w-full object-contain"
                    />

                    {/* Color swatches */}
                    {product.has_colors && (
                        <div className="absolute bottom-6 left-2 flex gap-1">
                            {product.colors.slice(0, 4).map((c) => (
                                <div
                                    key={c}
                                    className="h-3 w-3 border border-white/60 shadow-sm"
                                    style={{ background: colorToHex(c), borderRadius: "2px" }}
                                    title={c}
                                />
                            ))}
                        </div>
                    )}

                    {/* Category badge */}
                    <div
                        className="absolute top-2 right-2 px-2 py-0.5 text-[0.55rem] font-bold uppercase"
                        style={{
                            background: "linear-gradient(135deg, #c9a45a, #d4b06a)",
                            color: "#0a1628",
                            letterSpacing: "0.08em",
                            borderRadius: "2px",
                        }}
                    >
                        {product.category}
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-3 gap-1">
                    <h3 className="text-sm font-semibold leading-tight line-clamp-2" style={{ color: "#0a1628" }}>
                        {product.name}
                    </h3>
                    {product.has_sizes && (
                        <p className="text-[0.65rem]" style={{ color: "#94a3b8" }}>
                            {product.size_label ?? "Sizes"}: {product.sizes.join(", ")}
                        </p>
                    )}
                    <div
                        className="mt-auto pt-2 flex items-center justify-between"
                        style={{ borderTop: "1px solid rgba(201,164,90,0.12)" }}
                    >
                        <span className="text-base font-bold" style={{ color: "#c9a45a" }}>
                            ₹{product.base_price.toLocaleString("en-IN")}
                        </span>
                        <span
                            className="px-3 py-1 text-[0.6rem] font-bold uppercase transition-colors"
                            style={{
                                background: "#0a1628",
                                color: "#ffffff",
                                letterSpacing: "0.08em",
                                borderRadius: "2px",
                            }}
                        >
                            View
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

// ─────────────────────────────────────────────────────────────
// STORE PAGE
// ─────────────────────────────────────────────────────────────
export default function StoreClient() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filtered, setFiltered] = useState<Product[]>([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);
    const catBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchProducts() {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .order("created_at", { ascending: true });
            if (!error && data) {
                setProducts(data);
                setFiltered(data);
            }
            setLoading(false);
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        setFiltered(
            activeCategory === "All"
                ? products
                : products.filter((p) => p.category === activeCategory)
        );
    }, [activeCategory, products]);

    // Offset sticky category bar below sticky header
    useEffect(() => {
        function setOffset() {
            const header = document.querySelector("header");
            if (header && catBarRef.current) {
                catBarRef.current.style.top = `${header.offsetHeight}px`;
            }
        }
        setOffset();
        window.addEventListener("resize", setOffset);
        return () => window.removeEventListener("resize", setOffset);
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden">

            {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
            <section className="py-8" style={{ background: "#f9f6f1", borderBottom: "2px solid #c9a45a" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm mb-4">
                        <Link
                            href="/"
                            className="transition-colors hover:text-[#c9a45a]"
                            style={{ color: "#64748b" }}
                        >
                            Home
                        </Link>
                        <span style={{ color: "#c9a45a" }}>/</span>
                        <span style={{ color: "#c9a45a" }}>Store</span>
                    </div>

                    {/* Eyebrow */}
                    <p
                        className="font-semibold uppercase mb-4"
                        style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}
                    >
                        Official K9 Equipment Store
                    </p>

                    {/* Title */}
                    <h1
                        className="text-3xl sm:text-4xl font-bold mb-3"
                        style={{ fontFamily: "Georgia, serif", color: "#0a1628", lineHeight: 1.15 }}
                    >
                        Premium K9 Gear for{" "}
                        <span style={{ color: "#c9a45a" }}>Handlers &amp; Professionals</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base max-w-2xl" style={{ color: "#64748b" }}>
                        Tactical equipment, training aids, apparel and accessories  -  trusted by
                        handlers and professionals across India.
                    </p>

                </div>
            </section>

            {/* ══════════════════════════════════════════
          STICKY CATEGORY BAR
      ══════════════════════════════════════════ */}
            <div
                ref={catBarRef}
                className="sticky z-10 px-6 py-3"
                style={{
                    top: 0,
                    background: "rgba(255,255,255,0.93)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    borderBottom: "1px solid rgba(201,164,90,0.22)",
                    boxShadow: "0 3px 16px rgba(10,22,40,0.08)",
                }}
            >
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="px-4 py-1.5 text-[0.71rem] font-semibold uppercase tracking-[0.08em] border rounded-[2px] cursor-pointer transition-all duration-200 whitespace-nowrap"
                            style={
                                activeCategory === cat
                                    ? {
                                        background: "linear-gradient(135deg,#c9a45a,#d4b06a)",
                                        borderColor: "transparent",
                                        color: "#07111f",
                                        boxShadow: "0 2px 10px rgba(201,164,90,0.35)",
                                    }
                                    : {
                                        background: "transparent",
                                        borderColor: "rgba(201,164,90,0.32)",
                                        color: "#0a1628",
                                    }
                            }
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════════════
          PRODUCTS GRID
      ══════════════════════════════════════════ */}
            <div>
                <div className="max-w-7xl mx-auto px-6 py-10 pb-20" style={{ minHeight: "60vh" }}>

                    {/* Section heading + count */}
                    <div
                        className="flex items-baseline justify-between mb-6 pb-3"
                        style={{ borderBottom: "1px solid rgba(201,164,90,0.2)" }}
                    >
                        <h2
                            style={{
                                fontFamily: "'Times New Roman', serif",
                                fontSize: "1.35rem",
                                color: "#0a1628",
                            }}
                        >
                            {activeCategory === "All" ? "All Products" : activeCategory}
                        </h2>
                        <span style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 500 }}>
                            {filtered.length} {filtered.length === 1 ? "product" : "products"}
                        </span>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-24">
                            <div
                                className="h-10 w-10 animate-spin rounded-full border-4"
                                style={{
                                    borderColor: "rgba(201,164,90,0.3)",
                                    borderTopColor: "transparent",
                                }}
                            />
                        </div>
                    ) : filtered.length === 0 ? (
                        <p className="text-center py-24 text-sm" style={{ color: "#94a3b8" }}>
                            No products found in this category.
                        </p>
                    ) : (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                            {filtered.map((product, i) => (
                                <ProductCard key={product.id} product={product} index={i} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

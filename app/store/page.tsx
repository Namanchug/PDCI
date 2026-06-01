"use client";
import { useEffect, useState } from "react";
import { supabase, Product } from "@/lib/supabase";
import Link from "next/link";

const categories = ["All", "Leashes and Harnesses", "Detection Dog Equipment", "Patrol Dog Equipment", "Dog Training Aids", "Dog Toys", "Training Vest and Pouches", "Apparel", "Accessories"];

function getFirstImage(images: Product["images"]): string {
    if (!images || images.length === 0) return "/placeholder.jpg";
    const first = images[0];
    if (!first) return "/placeholder.jpg";
    return typeof first === "string" ? first : (first.url ?? "/placeholder.jpg");
}

export default function StorePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filtered, setFiltered] = useState<Product[]>([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

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
        if (activeCategory === "All") {
            setFiltered(products);
        } else {
            setFiltered(products.filter((p) => p.category === activeCategory));
        }
    }, [activeCategory, products]);

    return (
        <div className="min-h-screen" style={{ background: "#0a1628" }}>
            {/* ── Page Header ── */}
            <section className="py-8" style={{ background: "#f9f6f1", borderBottom: "2px solid #c9a45a" }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm mb-4">
                        <Link href="/" className="transition-colors hover:text-[#c9a45a]" style={{ color: "#64748b" }}>Home</Link>
                        <span style={{ color: "#c9a45a" }}>/</span>
                        <span style={{ color: "#c9a45a" }}>Store</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}>
                        Official Store
                    </h1>
                    <p className="text-base max-w-2xl" style={{ color: "#64748b" }}>
                        Premium K9 gear, training equipment, apparel and accessories — trusted by handlers and professionals across India.
                    </p>
                </div>
            </section>

            {/* ── Category Filters ── */}
            <div
                className="sticky top-0 z-10 px-4 py-3"
                style={{
                    background: "#0a1628",
                    borderBottom: "1px solid rgba(201,164,90,0.2)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                }}
            >
                <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="px-4 py-1.5 text-xs font-semibold uppercase transition-all duration-200"
                            style={
                                activeCategory === cat
                                    ? {
                                        background: "linear-gradient(135deg, #c9a45a, #d4b06a)",
                                        color: "#0a1628",
                                        letterSpacing: "0.08em",
                                        borderRadius: "2px",
                                        border: "1px solid transparent",
                                    }
                                    : {
                                        background: "transparent",
                                        color: "#94a3b8",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        letterSpacing: "0.08em",
                                        borderRadius: "2px",
                                    }
                            }
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Products Grid ── */}
            <div
                className="mx-auto max-w-6xl px-4 py-12"
                style={{ minHeight: "60vh" }}
            >
                {loading ? (
                    <div className="flex items-center justify-center py-24">
                        <div
                            className="h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"
                            style={{ borderColor: "rgba(201,164,90,0.3)", borderTopColor: "transparent" }}
                        />
                    </div>
                ) : filtered.length === 0 ? (
                    <p className="text-center py-24 text-sm" style={{ color: "#64748b" }}>
                        No products found in this category.
                    </p>
                ) : (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const displayImg = getFirstImage(product.images);

    return (
        <Link href={`/store/${product.id}`}>
            <div
                className="group flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                    background: "#ffffff",
                    border: "1px solid rgba(201,164,90,0.2)",
                    borderRadius: "2px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
            >
                {/* Image */}
                <div
                    className="relative aspect-square overflow-hidden"
                    style={{ background: "#ffffff" }}
                >
                    <img
                        src={displayImg}
                        alt={product.name}
                        className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
                    />

                    {product.has_colors && (
                        <div className="absolute bottom-2 left-2 flex gap-1">
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
                    <h3
                        className="text-sm font-semibold leading-tight line-clamp-2"
                        style={{ color: "#0a1628" }}
                    >
                        {product.name}
                    </h3>
                    {product.has_sizes && (
                        <p className="text-[0.65rem]" style={{ color: "#94a3b8" }}>
                            {product.size_label ?? "Sizes"}: {product.sizes.join(", ")}
                        </p>
                    )}
                    <div className="mt-auto pt-2 flex items-center justify-between"
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

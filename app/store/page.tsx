"use client";
import { useEffect, useState } from "react";
import { supabase, Product } from "@/lib/supabase";
import Link from "next/link";

const categories = ["All", "Apparel", "Dog Equipment", "Dog Toys", "Accessories"];

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
        <div
            className="min-h-screen"
            style={{ background: "linear-gradient(180deg,#0f1f33 0%,#13253b 100%)" }}
        >
            {/* Hero Banner */}
            <div
                className="relative px-4 py-16 text-center"
                style={{
                    background:
                        "linear-gradient(135deg,#0a1628 0%,#0f1f33 50%,#1a2f4a 100%)",
                    borderBottom: "1px solid rgba(201,164,90,0.25)",
                }}
            >
                <p
                    className="mb-2 text-xs font-semibold tracking-[0.3em] uppercase"
                    style={{ color: "#c9a45a" }}
                >
                    Police Dog Centre India
                </p>
                <h1
                    className="text-4xl font-bold md:text-5xl"
                    style={{ fontFamily: "'Times New Roman', serif", color: "#f8f2e7" }}
                >
                    Official Store
                </h1>
                <p className="mt-3 text-sm text-[#d0d8e3] max-w-xl mx-auto">
                    Premium K9 gear, training equipment, apparel and accessories — trusted
                    by handlers and professionals across India.
                </p>
                <div
                    className="mx-auto mt-6 h-px w-24"
                    style={{
                        background:
                            "linear-gradient(to right, transparent, #c9a45a, transparent)",
                    }}
                />
            </div>

            {/* Category Filters */}
            <div className="sticky top-0 z-10 border-b border-[#d8c08a]/15 bg-[#0f1f33]/95 backdrop-blur-md px-4 py-3">
                <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200"
                            style={
                                activeCategory === cat
                                    ? {
                                        background: "linear-gradient(135deg,#c9a45a,#f7dfb0)",
                                        color: "#0f1f33",
                                    }
                                    : {
                                        background: "rgba(255,255,255,0.05)",
                                        color: "#d0d8e3",
                                        border: "1px solid rgba(201,164,90,0.2)",
                                    }
                            }
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="mx-auto max-w-6xl px-4 py-10">
                {loading ? (
                    <div className="flex items-center justify-center py-24">
                        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#c9a45a] border-t-transparent" />
                    </div>
                ) : filtered.length === 0 ? (
                    <p className="text-center text-[#d0d8e3] py-24">No products found.</p>
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
                className="group flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(201,164,90,0.15)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
            >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-[#0a1628]">
                    <img
                        src={displayImg}
                        alt={product.name}
                        className="h-full w-full object-contain transition-all duration-500"
                    />

                    {product.has_colors && (
                        <div className="absolute bottom-6 left-2 flex gap-1">
                            {product.colors.slice(0, 4).map((c) => (
                                <div
                                    key={c}
                                    className="h-3 w-3 rounded-full border border-white/40"
                                    title={c}
                                    style={{ background: colorToHex(c) }}
                                />
                            ))}
                        </div>
                    )}

                    <div
                        className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-[0.6rem] font-bold text-[#0f1f33]"
                        style={{ background: "linear-gradient(135deg,#c9a45a,#f7dfb0)" }}
                    >
                        {product.category}
                    </div>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col p-3 gap-1">
                    <h3 className="text-sm font-semibold leading-tight text-[#f8f2e7] line-clamp-2">
                        {product.name}
                    </h3>
                    {product.has_sizes && (
                        <p className="text-[0.65rem] text-[#d0d8e3]">
                            Sizes: {product.sizes.join(", ")}
                        </p>
                    )}
                    <div className="mt-auto pt-2 flex items-center justify-between">
                        <span className="text-base font-bold text-[#c9a45a]">
                            ₹{product.base_price.toLocaleString("en-IN")}
                        </span>
                        <span
                            className="rounded-full px-3 py-1 text-[0.65rem] font-bold text-[#0f1f33]"
                            style={{ background: "linear-gradient(135deg,#c9a45a,#f7dfb0)" }}
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
    };
    return map[color] ?? "#c9a45a";
}
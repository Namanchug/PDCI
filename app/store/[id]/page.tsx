"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase, Product } from "@/lib/supabase";
import { useCart } from "@/context/CartContext";
import { ChevronLeft, ShoppingCart, X, ChevronLeft as Prev, ChevronRight as Next, ZoomIn } from "lucide-react";

export default function ProductDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { addItem, setIsOpen } = useCart();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState(0);
    const [showSizeChart, setShowSizeChart] = useState(false);
    const [lightbox, setLightbox] = useState(false);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        async function fetch() {
            const { data } = await supabase
                .from("products")
                .select("*")
                .eq("id", id)
                .single();
            if (data) {
                setProduct(data);
                if (data.colors?.length > 0) setSelectedColor(data.colors[0]);
                if (data.sizes?.length > 0) setSelectedSize(data.sizes[0]);
            }
            setLoading(false);
        }
        if (id) fetch();
    }, [id]);

    if (loading) {
        return (
            <div
                className="flex min-h-screen items-center justify-center"
                style={{ background: "linear-gradient(180deg,#0f1f33 0%,#13253b 100%)" }}
            >
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#c9a45a] border-t-transparent" />
            </div>
        );
    }

    if (!product) {
        return (
            <div
                className="flex min-h-screen items-center justify-center text-[#f8f2e7]"
                style={{ background: "linear-gradient(180deg,#0f1f33 0%,#13253b 100%)" }}
            >
                Product not found.
            </div>
        );
    }

    // Build image list filtered by selected color
    const allImages = product.images ?? [];
    const filteredImages =
        product.has_colors && selectedColor
            ? allImages.filter((img) => {
                if (typeof img === "string") return true;
                return img.color === selectedColor;
            })
            : allImages;

    const imageUrls: string[] =
        filteredImages.length > 0
            ? filteredImages.map((img) => (typeof img === "string" ? img : img.url))
            : allImages.map((img) => (typeof img === "string" ? img : img.url));

    const currentImg = imageUrls[activeImg] ?? "";

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        setActiveImg(0);
    };

    const handleAddToCart = () => {
        if (!product) return;
        addItem({
            id: product.id,
            name: product.name,
            price: product.base_price,
            image: imageUrls[0] ?? "",
            color: selectedColor || undefined,
            size: selectedSize || undefined,
            quantity,
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    // Parse description: split by | for spec bullets
    const descParts = product.description?.split("|") ?? [];
    const mainDesc = descParts[0]?.trim() ?? "";
    const specs = descParts.slice(1).map((s) => s.trim()).filter(Boolean);

    return (
        <div
            className="min-h-screen"
            style={{ background: "linear-gradient(180deg,#0f1f33 0%,#13253b 100%)" }}
        >
            {/* Size Chart Modal */}
            {showSizeChart && product.size_chart?.headers && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div
                        className="w-full max-w-lg rounded-2xl p-6 relative"
                        style={{
                            background: "linear-gradient(135deg,#0f1f33,#1a2f4a)",
                            border: "1px solid rgba(201,164,90,0.3)",
                        }}
                    >
                        <button
                            onClick={() => setShowSizeChart(false)}
                            className="absolute top-4 right-4 text-[#d0d8e3] hover:text-[#f8f2e7] transition"
                        >
                            <X size={20} />
                        </button>
                        <h3
                            className="text-xl font-bold text-[#f8f2e7] mb-4"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            Size Chart
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr style={{ borderBottom: "1px solid rgba(201,164,90,0.3)" }}>
                                        {product.size_chart.headers.map((h) => (
                                            <th
                                                key={h}
                                                className="pb-2 pr-4 text-left font-semibold"
                                                style={{ color: "#c9a45a" }}
                                            >
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.size_chart.rows?.map((row, i) => (
                                        <tr
                                            key={i}
                                            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                                        >
                                            {row.map((cell, j) => (
                                                <td
                                                    key={j}
                                                    className="py-2 pr-4 text-[#f8f2e7]"
                                                    style={{ fontWeight: j === 0 ? 700 : 400 }}
                                                >
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {product.size_chart.note && (
                            <p className="mt-4 text-xs text-[#d0d8e3] italic">
                                * {product.size_chart.note}
                            </p>
                        )}
                    </div>
                </div>
            )}

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                    onClick={() => setLightbox(false)}
                >
                    <img
                        src={currentImg}
                        alt={product.name}
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
                    />
                    <button className="absolute top-4 right-4 text-white hover:text-[#c9a45a]">
                        <X size={28} />
                    </button>
                </div>
            )}

            <div className="mx-auto max-w-6xl px-4 py-8">
                {/* Back */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 flex items-center gap-1 text-sm text-[#d0d8e3] hover:text-[#c9a45a] transition"
                >
                    <ChevronLeft size={16} />
                    Back to Store
                </button>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* ── LEFT: Images ── */}
                    <div className="flex flex-col gap-4">
                        {/* Main image */}
                        <div
                            className="relative aspect-square w-full overflow-hidden rounded-2xl cursor-zoom-in"
                            style={{
                                background: "#0a1628",
                                border: "1px solid rgba(201,164,90,0.2)",
                            }}
                            onClick={() => setLightbox(true)}
                        >
                            <img
                                src={currentImg}
                                alt={product.name}
                                className="h-full w-full object-cover transition-all duration-300"
                            />
                            <button className="absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white hover:bg-[#c9a45a]/80 transition">
                                <ZoomIn size={16} />
                            </button>
                            {/* Prev / Next arrows */}
                            {imageUrls.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveImg((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
                                        }}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-[#c9a45a]/80 transition"
                                    >
                                        <Prev size={16} />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveImg((prev) => (prev + 1) % imageUrls.length);
                                        }}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-[#c9a45a]/80 transition"
                                    >
                                        <Next size={16} />
                                    </button>
                                </>
                            )}
                            {/* Dot indicators */}
                            {imageUrls.length > 1 && (
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                    {imageUrls.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={(e) => { e.stopPropagation(); setActiveImg(i); }}
                                            className="h-1.5 rounded-full transition-all"
                                            style={{
                                                width: i === activeImg ? "20px" : "6px",
                                                background: i === activeImg ? "#c9a45a" : "rgba(255,255,255,0.4)",
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {imageUrls.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {imageUrls.map((url, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImg(i)}
                                        className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg transition-all"
                                        style={{
                                            border: i === activeImg
                                                ? "2px solid #c9a45a"
                                                : "2px solid rgba(255,255,255,0.1)",
                                            opacity: i === activeImg ? 1 : 0.6,
                                        }}
                                    >
                                        <img src={url} alt="" className="h-full w-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ── RIGHT: Details ── */}
                    <div className="flex flex-col gap-5">
                        {/* Category badge */}
                        <span
                            className="w-fit rounded-full px-3 py-1 text-xs font-semibold text-[#0f1f33]"
                            style={{ background: "linear-gradient(135deg,#c9a45a,#f7dfb0)" }}
                        >
                            {product.category}
                        </span>

                        {/* Name */}
                        <h1
                            className="text-3xl font-bold leading-tight text-[#f8f2e7]"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            {product.name}
                        </h1>

                        {/* Price */}
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-[#c9a45a]">
                                ₹{product.base_price.toLocaleString("en-IN")}
                            </span>
                            <span className="text-sm text-[#d0d8e3]">incl. all taxes</span>
                        </div>

                        <div
                            className="h-px w-full"
                            style={{ background: "linear-gradient(to right, rgba(201,164,90,0.4), transparent)" }}
                        />

                        {/* Color picker */}
                        {product.has_colors && product.colors.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold text-[#f8f2e7]">
                                    Colour:{" "}
                                    <span className="font-normal text-[#c9a45a]">{selectedColor}</span>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => handleColorChange(color)}
                                            className="rounded-full px-4 py-1.5 text-sm font-medium transition-all"
                                            style={
                                                selectedColor === color
                                                    ? {
                                                        background: "linear-gradient(135deg,#c9a45a,#f7dfb0)",
                                                        color: "#0f1f33",
                                                        fontWeight: 700,
                                                    }
                                                    : {
                                                        background: "rgba(255,255,255,0.05)",
                                                        color: "#d0d8e3",
                                                        border: "1px solid rgba(201,164,90,0.25)",
                                                    }
                                            }
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Size picker */}
                        {product.has_sizes && product.sizes.length > 0 && (
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-[#f8f2e7]">
                                        Size:{" "}
                                        <span className="font-normal text-[#c9a45a]">{selectedSize}</span>
                                    </p>
                                    {product.size_chart?.headers && (
                                        <button
                                            onClick={() => setShowSizeChart(true)}
                                            className="text-xs text-[#c9a45a] underline hover:text-[#f7dfb0] transition"
                                        >
                                            Size Chart
                                        </button>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className="h-10 min-w-[42px] rounded-lg px-3 text-sm font-semibold transition-all"
                                            style={
                                                selectedSize === size
                                                    ? {
                                                        background: "linear-gradient(135deg,#c9a45a,#f7dfb0)",
                                                        color: "#0f1f33",
                                                    }
                                                    : {
                                                        background: "rgba(255,255,255,0.05)",
                                                        color: "#d0d8e3",
                                                        border: "1px solid rgba(201,164,90,0.25)",
                                                    }
                                            }
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold text-[#f8f2e7]">Quantity</p>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    className="h-10 w-10 rounded-full border border-[#d8c08a]/30 text-[#f8f2e7] hover:bg-white/10 transition text-lg flex items-center justify-center"
                                >
                                    −
                                </button>
                                <span className="w-8 text-center text-lg font-bold text-[#f8f2e7]">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity((q) => q + 1)}
                                    className="h-10 w-10 rounded-full border border-[#d8c08a]/30 text-[#f8f2e7] hover:bg-white/10 transition text-lg flex items-center justify-center"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to cart */}
                        <button
                            onClick={handleAddToCart}
                            className="flex items-center justify-center gap-2 rounded-full py-4 text-base font-bold text-[#0f1f33] transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                            style={{ background: "linear-gradient(135deg,#c9a45a,#f7dfb0)" }}
                        >
                            <ShoppingCart size={18} />
                            {added ? "Added to Cart! ✓" : "Add to Cart"}
                        </button>

                        <div
                            className="h-px w-full"
                            style={{ background: "linear-gradient(to right, rgba(201,164,90,0.4), transparent)" }}
                        />

                        {/* Description */}
                        <div className="flex flex-col gap-3">
                            <h2
                                className="text-lg font-bold text-[#f8f2e7]"
                                style={{ fontFamily: "'Times New Roman', serif" }}
                            >
                                Product Details
                            </h2>
                            <p className="text-sm leading-relaxed text-[#d0d8e3]">{mainDesc}</p>

                            {specs.length > 0 && (
                                <div
                                    className="rounded-xl p-4 mt-2"
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(201,164,90,0.15)",
                                    }}
                                >
                                    <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a45a] mb-3">
                                        Specifications
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        {specs.map((spec, i) => {
                                            const [label, ...rest] = spec.split(":");
                                            const value = rest.join(":").trim();
                                            return (
                                                <div key={i} className="flex gap-2 text-sm">
                                                    <span className="font-semibold text-[#f8f2e7] min-w-[90px]">
                                                        {label.trim()}
                                                    </span>
                                                    <span className="text-[#d0d8e3]">{value || label}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Trust badges */}
                        <div className="grid grid-cols-3 gap-3 pt-2">
                            {[
                                { icon: "🐾", label: "K9 Grade" },
                                { icon: "🇮🇳", label: "Made in India" },
                                { icon: "✓", label: "Verified Quality" },
                            ].map((b) => (
                                <div
                                    key={b.label}
                                    className="flex flex-col items-center gap-1 rounded-xl p-3 text-center"
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(201,164,90,0.12)",
                                    }}
                                >
                                    <span className="text-xl">{b.icon}</span>
                                    <span className="text-[0.65rem] font-semibold text-[#d0d8e3]">{b.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
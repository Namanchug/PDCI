"use client";
import { useCart } from "@/context/CartContext";
import { X, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
    const { items, isOpen, setIsOpen, removeItem, updateQty, totalPrice, totalItems } = useCart();

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-full max-w-md flex flex-col shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ background: "linear-gradient(180deg,#0f1f33 0%,#13253b 100%)" }}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#d8c08a]/20 px-5 py-4">
                    <div className="flex items-center gap-2 text-[#f8f2e7]">
                        <ShoppingBag size={20} />
                        <span className="text-lg font-bold" style={{ fontFamily: "'Times New Roman', serif" }}>
                            Your Cart
                        </span>
                        {totalItems > 0 && (
                            <span className="ml-1 rounded-full bg-[#c9a45a] px-2 py-0.5 text-xs font-bold text-[#0f1f33]">
                                {totalItems}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-full p-2 text-[#d0d8e3] hover:bg-white/10 hover:text-[#f8f2e7] transition"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-[#d0d8e3]">
                            <ShoppingBag size={48} className="opacity-30" />
                            <p className="text-sm">Your cart is empty</p>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full px-5 py-2 text-sm font-semibold text-[#0f1f33] transition hover:opacity-90"
                                style={{ background: "linear-gradient(135deg,#c9a45a,#f7dfb0)" }}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        items.map((item) => {
                            const imgSrc = typeof item.image === "string" ? item.image : "";
                            return (
                                <div
                                    key={`${item.id}-${item.color}-${item.size}`}
                                    className="flex gap-3 rounded-xl border border-[#d8c08a]/15 bg-white/5 p-3"
                                >
                                    <img
                                        src={imgSrc}
                                        alt={item.name}
                                        className="h-16 w-16 rounded-lg object-contain flex-shrink-0 bg-[#0a1628]"
                                    />
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                        <p className="text-sm font-semibold text-[#f8f2e7] leading-tight truncate">
                                            {item.name}
                                        </p>
                                        <div className="flex gap-2 text-xs text-[#d0d8e3]">
                                            {item.color && <span>{item.color}</span>}
                                            {item.size && <span>· Size {item.size}</span>}
                                        </div>
                                        <p className="text-sm font-bold text-[#c9a45a]">₹{item.price}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <button
                                                onClick={() => updateQty(item.id, item.color, item.size, item.quantity - 1)}
                                                className="h-6 w-6 rounded-full border border-[#d8c08a]/30 text-[#f8f2e7] hover:bg-white/10 flex items-center justify-center text-sm transition"
                                            >
                                                −
                                            </button>
                                            <span className="text-sm text-[#f8f2e7] w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQty(item.id, item.color, item.size, item.quantity + 1)}
                                                className="h-6 w-6 rounded-full border border-[#d8c08a]/30 text-[#f8f2e7] hover:bg-white/10 flex items-center justify-center text-sm transition"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id, item.color, item.size)}
                                        className="text-[#d0d8e3] hover:text-red-400 transition self-start mt-1"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-[#d8c08a]/20 px-5 py-4 space-y-3">
                        <div className="flex items-center justify-between text-[#f8f2e7]">
                            <span className="text-sm text-[#d0d8e3]">Subtotal</span>
                            <span className="text-lg font-bold text-[#c9a45a]">₹{totalPrice.toLocaleString("en-IN")}</span>
                        </div>
                        <Link
                            href="/store/checkout"
                            onClick={() => setIsOpen(false)}
                            className="block w-full rounded-full py-3 text-center text-sm font-bold text-[#0f1f33] transition hover:opacity-90"
                            style={{ background: "linear-gradient(135deg,#c9a45a,#f7dfb0)" }}
                        >
                            Proceed to Checkout
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="block w-full rounded-full border border-[#d8c08a]/30 py-2.5 text-center text-sm text-[#d0d8e3] hover:bg-white/5 transition"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
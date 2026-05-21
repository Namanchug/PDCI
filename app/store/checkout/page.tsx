"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { ShoppingBag, ChevronLeft, CheckCircle } from "lucide-react";

declare global {
    interface Window {
        Razorpay: any;
    }
}

type FormData = {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
};

const emptyForm: FormData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
};

// ── Field component OUTSIDE CheckoutPage to prevent remount on each keystroke ──
function Field({
    label,
    name,
    type = "text",
    placeholder,
    half = false,
    value,
    error,
    onChange,
}: {
    label: string;
    name: keyof FormData;
    type?: string;
    placeholder?: string;
    half?: boolean;
    value: string;
    error?: string;
    onChange: (name: keyof FormData, value: string) => void;
}) {
    return (
        <div className={half ? "col-span-1" : "col-span-2"}>
            <label className="mb-1 block text-xs font-semibold text-[#d0d8e3] uppercase tracking-wide">
                {label} <span className="text-[#c9a45a]">*</span>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-sm text-[#f8f2e7] outline-none transition placeholder:text-[#6b7c95]"
                style={{
                    background: "rgba(255,255,255,0.06)",
                    border: error
                        ? "1px solid #f87171"
                        : "1px solid rgba(201,164,90,0.2)",
                }}
            />
            {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
        </div>
    );
}

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart();
    const router = useRouter();
    const [form, setForm] = useState<FormData>(emptyForm);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [orderId, setOrderId] = useState("");

    const shipping = 0;
    const total = totalPrice + shipping;

    function handleFieldChange(name: keyof FormData, value: string) {
        setForm((f) => ({ ...f, [name]: value }));
        setErrors((e) => ({ ...e, [name]: "" }));
    }

    function validate(): boolean {
        const e: Partial<FormData> = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
            e.email = "Valid email required";
        if (!form.phone.match(/^[6-9]\d{9}$/))
            e.phone = "Valid 10-digit Indian mobile number required";
        if (!form.address.trim()) e.address = "Address is required";
        if (!form.city.trim()) e.city = "City is required";
        if (!form.state.trim()) e.state = "State is required";
        if (!form.pincode.match(/^\d{6}$/))
            e.pincode = "Valid 6-digit pincode required";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function loadRazorpayScript(): Promise<boolean> {
        return new Promise((resolve) => {
            if (window.Razorpay) return resolve(true);
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    }

    async function handlePayment() {
        if (!validate()) return;
        if (items.length === 0) return;
        setLoading(true);

        try {
            const res = await fetch("/api/razorpay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: total }),
            });
            const { orderId: rzpOrderId, error } = await res.json();
            if (error) throw new Error(error);

            const loaded = await loadRazorpayScript();
            if (!loaded) throw new Error("Razorpay failed to load");

            const rzp = new window.Razorpay({
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: Math.round(total * 100),
                currency: "INR",
                name: "Police Dog Centre India",
                description: "Order from PDCI Store",
                order_id: rzpOrderId,
                prefill: {
                    name: form.name,
                    email: form.email,
                    contact: form.phone,
                },
                theme: { color: "#c9a45a" },
                handler: async function (response: any) {
                    await supabase.from("orders").insert({
                        customer_name: form.name,
                        customer_email: form.email,
                        customer_phone: form.phone,
                        items: items,
                        total: total,
                        razorpay_order_id: rzpOrderId,
                        razorpay_payment_id: response.razorpay_payment_id,
                        status: "paid",
                        address: `${form.address}, ${form.city}, ${form.state} - ${form.pincode}`,
                    });
                    clearCart();
                    setOrderId(response.razorpay_payment_id);
                    setSuccess(true);
                },
                modal: {
                    ondismiss: () => setLoading(false),
                },
            });

            rzp.open();
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
            setLoading(false);
        }
    }

    // ── Success screen ──
    if (success) {
        return (
            <div
                className="min-h-screen flex items-center justify-center px-4"
                style={{ background: "linear-gradient(180deg,#0f1f33 0%,#13253b 100%)" }}
            >
                <div
                    className="w-full max-w-md rounded-2xl p-8 text-center"
                    style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(201,164,90,0.25)",
                    }}
                >
                    <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#c9a45a" }} />
                    <h2
                        className="text-2xl font-bold text-[#f8f2e7] mb-2"
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        Order Confirmed!
                    </h2>
                    <p className="text-sm text-[#d0d8e3] mb-2">
                        Thank you,{" "}
                        <span className="text-[#f8f2e7] font-semibold">{form.name}</span>!
                    </p>
                    <p className="text-sm text-[#d0d8e3] mb-1">
                        A confirmation will be sent to{" "}
                        <span className="text-[#c9a45a]">{form.email}</span>
                    </p>
                    <p className="text-xs text-[#d0d8e3] mt-2 mb-6">
                        Payment ID:{" "}
                        <span className="font-mono text-[#f8f2e7]">{orderId}</span>
                    </p>
                    <div
                        className="h-px w-full mb-6"
                        style={{
                            background:
                                "linear-gradient(to right, transparent, rgba(201,164,90,0.4), transparent)",
                        }}
                    />
                    <button
                        onClick={() => router.push("/store")}
                        className="w-full rounded-full py-3 text-sm font-bold text-[#0f1f33] transition hover:opacity-90"
                        style={{ background: "linear-gradient(135deg,#c9a45a,#f7dfb0)" }}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    // ── Empty cart ──
    if (items.length === 0) {
        return (
            <div
                className="min-h-screen flex flex-col items-center justify-center gap-4 px-4"
                style={{ background: "linear-gradient(180deg,#0f1f33 0%,#13253b 100%)" }}
            >
                <ShoppingBag size={48} className="text-[#c9a45a] opacity-50" />
                <p className="text-[#d0d8e3]">Your cart is empty.</p>
                <button
                    onClick={() => router.push("/store")}
                    className="rounded-full px-6 py-2.5 text-sm font-bold text-[#0f1f33]"
                    style={{ background: "linear-gradient(135deg,#c9a45a,#f7dfb0)" }}
                >
                    Go to Store
                </button>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen"
            style={{ background: "linear-gradient(180deg,#0f1f33 0%,#13253b 100%)" }}
        >
            <div className="mx-auto max-w-5xl px-4 py-8">
                <button
                    onClick={() => router.back()}
                    className="mb-6 flex items-center gap-1 text-sm text-[#d0d8e3] hover:text-[#c9a45a] transition"
                >
                    <ChevronLeft size={16} />
                    Back to Cart
                </button>

                <h1
                    className="mb-8 text-3xl font-bold text-[#f8f2e7]"
                    style={{ fontFamily: "'Times New Roman', serif" }}
                >
                    Checkout
                </h1>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
                    {/* ── LEFT: Form ── */}
                    <div
                        className="rounded-2xl p-6"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(201,164,90,0.15)",
                        }}
                    >
                        <h2
                            className="mb-5 text-lg font-bold text-[#f8f2e7]"
                            style={{ fontFamily: "'Times New Roman', serif" }}
                        >
                            Delivery Details
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            <Field label="Full Name" name="name" placeholder="Rajan Sharma"
                                value={form.name} error={errors.name} onChange={handleFieldChange} />
                            <Field label="Email Address" name="email" type="email" placeholder="you@email.com"
                                value={form.email} error={errors.email} onChange={handleFieldChange} />
                            <Field label="Mobile Number" name="phone" type="tel" placeholder="9XXXXXXXXX"
                                value={form.phone} error={errors.phone} onChange={handleFieldChange} />
                            <Field label="Full Address" name="address" placeholder="House No, Street, Area"
                                value={form.address} error={errors.address} onChange={handleFieldChange} />
                            <Field label="City" name="city" placeholder="New Delhi" half
                                value={form.city} error={errors.city} onChange={handleFieldChange} />
                            <Field label="State" name="state" placeholder="Delhi" half
                                value={form.state} error={errors.state} onChange={handleFieldChange} />
                            <Field label="Pincode" name="pincode" placeholder="110001" half
                                value={form.pincode} error={errors.pincode} onChange={handleFieldChange} />
                        </div>
                    </div>

                    {/* ── RIGHT: Order Summary ── */}
                    <div className="flex flex-col gap-4">
                        <div
                            className="rounded-2xl p-5"
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(201,164,90,0.15)",
                            }}
                        >
                            <h2
                                className="mb-4 text-lg font-bold text-[#f8f2e7]"
                                style={{ fontFamily: "'Times New Roman', serif" }}
                            >
                                Order Summary
                            </h2>

                            <div className="flex flex-col gap-3 mb-4">
                                {items.map((item) => (
                                    <div
                                        key={`${item.id}-${item.color}-${item.size}`}
                                        className="flex gap-3 items-center"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-12 w-12 rounded-lg object-cover flex-shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-[#f8f2e7] truncate">
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-[#d0d8e3]">
                                                {[item.color, item.size && `Size: ${item.size}`]
                                                    .filter(Boolean)
                                                    .join(" · ")}
                                            </p>
                                            <p className="text-xs text-[#d0d8e3]">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-sm font-bold text-[#c9a45a] flex-shrink-0">
                                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="h-px w-full mb-4" style={{ background: "rgba(201,164,90,0.2)" }} />

                            <div className="flex flex-col gap-2 text-sm">
                                <div className="flex justify-between text-[#d0d8e3]">
                                    <span>Subtotal</span>
                                    <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                                </div>
                                <div className="flex justify-between text-[#d0d8e3]">
                                    <span>Shipping</span>
                                    <span className="text-green-400">Free</span>
                                </div>
                                <div className="h-px w-full my-1" style={{ background: "rgba(201,164,90,0.2)" }} />
                                <div className="flex justify-between text-base font-bold">
                                    <span className="text-[#f8f2e7]">Total</span>
                                    <span className="text-[#c9a45a]">₹{total.toLocaleString("en-IN")}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handlePayment}
                            disabled={loading}
                            className="w-full rounded-full py-4 text-base font-bold text-[#0f1f33] transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                            style={{ background: "linear-gradient(135deg,#c9a45a,#f7dfb0)" }}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0f1f33] border-t-transparent" />
                                    Processing...
                                </span>
                            ) : (
                                `Pay ₹${total.toLocaleString("en-IN")} via Razorpay`
                            )}
                        </button>

                        <p className="text-center text-xs text-[#6b7c95]">
                            🔒 Secured by Razorpay · UPI · Cards · Net Banking
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
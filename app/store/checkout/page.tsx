"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
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
    address2: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
};

const emptyForm: FormData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    address2: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
};

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
            <label
                className="mb-1.5 block text-xs font-semibold uppercase"
                style={{ color: "#0a1628", letterSpacing: "0.12em" }}
            >
                {label} <span style={{ color: "#dc2626" }}>*</span>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                className="w-full px-4 py-3 text-sm outline-none transition placeholder:text-gray-400"
                style={{
                    background: "#ffffff",
                    color: "#0a1628",
                    border: error
                        ? "1px solid #dc2626"
                        : "1px solid rgba(201,164,90,0.25)",
                    borderRadius: "2px",
                }}
            />
            {error && <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>{error}</p>}
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
    const [verifiedTotal, setVerifiedTotal] = useState<number | null>(null);

    function getShipping(price: number): number {
        if (price >= 2500) return 0;
        if (price >= 2000) return 250;
        if (price >= 1000) return 200;
        return 100;
    }

    const shipping = getShipping(totalPrice);
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
                body: JSON.stringify({ items }),   // ← send items, not amount
            });
            const { orderId: rzpOrderId, amount: verifiedAmount, error } = await res.json();
            if (error) throw new Error(error);
            setVerifiedTotal(verifiedAmount);

            const loaded = await loadRazorpayScript();
            if (!loaded) throw new Error("Razorpay failed to load");

            const rzp = new window.Razorpay({
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: Math.round(verifiedAmount * 100),
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
                    // Verify signature server-side; this also handles order insert,
                    // stock deduction, and confirmation email in one atomic step.
                    const verifyRes = await fetch("/api/verify-payment", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            items,
                            form,
                        }),
                    });

                    if (!verifyRes.ok) {
                        const data = await verifyRes.json().catch(() => ({}));
                        throw new Error(data.error ?? "Payment verification failed");
                    }

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
                style={{ background: "#f9f6f1" }}
            >
                <div
                    className="w-full max-w-md p-8 text-center"
                    style={{
                        background: "#ffffff",
                        border: "1px solid rgba(201,164,90,0.18)",
                        borderTop: "3px solid #c9a45a",
                        borderRadius: "2px",
                    }}
                >
                    <div
                        className="mx-auto mb-6 flex items-center justify-center"
                        style={{
                            width: "72px",
                            height: "72px",
                            background: "rgba(201,164,90,0.1)",
                            border: "1px solid rgba(201,164,90,0.3)",
                            borderRadius: "2px",
                        }}
                    >
                        <CheckCircle size={36} style={{ color: "#c9a45a" }} />
                    </div>
                    <h2
                        className="text-2xl font-bold mb-2"
                        style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
                    >
                        Order Confirmed!
                    </h2>
                    <p className="text-sm mb-2" style={{ color: "#4b5563" }}>
                        Thank you,{" "}
                        <span className="font-semibold" style={{ color: "#0a1628" }}>{form.name}</span>!
                    </p>
                    <p className="text-sm mb-1" style={{ color: "#4b5563" }}>
                        A confirmation has been sent to{" "}
                        <span style={{ color: "#c9a45a" }}>{form.email}</span>
                    </p>
                    <p className="text-xs mt-2 mb-6" style={{ color: "#94a3b8" }}>
                        Payment ID:{" "}
                        <span className="font-mono" style={{ color: "#0a1628" }}>{orderId}</span>
                    </p>
                    <div
                        className="h-px w-full mb-6"
                        style={{ background: "linear-gradient(to right, transparent, rgba(201,164,90,0.4), transparent)" }}
                    />
                    <button
                        onClick={() => router.push("/store")}
                        className="w-full py-3 text-sm font-bold uppercase transition hover:opacity-90"
                        style={{
                            background: "linear-gradient(135deg, #c9a45a, #d4b06a)",
                            color: "#0a1628",
                            letterSpacing: "0.08em",
                            borderRadius: "2px",
                        }}
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
                className="min-h-screen flex flex-col items-center justify-center gap-5 px-4"
                style={{ background: "#f9f6f1" }}
            >
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: "80px",
                        height: "80px",
                        background: "rgba(201,164,90,0.1)",
                        border: "1px solid rgba(201,164,90,0.25)",
                        borderRadius: "2px",
                    }}
                >
                    <ShoppingBag size={36} style={{ color: "#c9a45a", opacity: 0.7 }} />
                </div>
                <p className="text-sm" style={{ color: "#64748b" }}>Your cart is empty.</p>
                <button
                    onClick={() => router.push("/store")}
                    className="px-6 py-2.5 text-sm font-bold uppercase transition hover:opacity-90"
                    style={{
                        background: "linear-gradient(135deg, #c9a45a, #d4b06a)",
                        color: "#0a1628",
                        letterSpacing: "0.08em",
                        borderRadius: "2px",
                    }}
                >
                    Go to Store
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={{ background: "#f9f6f1" }}>
            <div className="mx-auto max-w-5xl px-4 py-10">
                {/* Back */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-1 text-sm font-medium transition hover:text-[#c9a45a]"
                    style={{ color: "#64748b" }}
                >
                    <ChevronLeft size={16} />
                    Back to Cart
                </button>

                {/* Page title */}
                <p
                    className="font-semibold uppercase mb-3"
                    style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}
                >
                    Secure Checkout
                </p>
                <h1
                    className="mb-10 text-3xl font-bold"
                    style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
                >
                    Complete Your Order
                </h1>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
                    {/* ── LEFT: Delivery Form ── */}
                    <div
                        className="p-6"
                        style={{
                            background: "#ffffff",
                            border: "1px solid rgba(201,164,90,0.18)",
                            borderTop: "3px solid #c9a45a",
                            borderRadius: "2px",
                        }}
                    >
                        <p
                            className="font-semibold uppercase mb-1"
                            style={{ color: "#c9a45a", fontSize: "0.65rem", letterSpacing: "0.2em" }}
                        >
                            Step 1
                        </p>
                        <h2
                            className="mb-6 text-lg font-bold"
                            style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
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
                            <Field label="Address Line 1" name="address" placeholder="House No, Flat, Building Name"
                                value={form.address} error={errors.address} onChange={handleFieldChange} />
                            <Field label="Address Line 2" name="address2" placeholder="Street, Area, Colony"
                                value={form.address2} error={errors.address2} onChange={handleFieldChange} />
                            <Field label="Landmark" name="landmark" placeholder="Near Apollo Hospital, Opp. SBI Bank"
                                value={form.landmark} error={errors.landmark} onChange={handleFieldChange} />
                            <Field label="City" name="city" placeholder="New Delhi" half
                                value={form.city} error={errors.city} onChange={handleFieldChange} />
                            <div className="col-span-1">
                                <label
                                    className="mb-1.5 block text-xs font-semibold uppercase"
                                    style={{ color: "#0a1628", letterSpacing: "0.12em" }}
                                >
                                    State <span style={{ color: "#dc2626" }}>*</span>
                                </label>
                                <select
                                    value={form.state}
                                    onChange={(e) => handleFieldChange("state", e.target.value)}
                                    className="w-full px-4 py-3 text-sm outline-none transition"
                                    style={{
                                        background: "#ffffff",
                                        color: form.state ? "#0a1628" : "#9ca3af",
                                        border: errors.state
                                            ? "1px solid #dc2626"
                                            : "1px solid rgba(201,164,90,0.25)",
                                        borderRadius: "2px",
                                        appearance: "none",
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c9a45a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right 16px center",
                                    }}
                                >
                                    <option value="" disabled style={{ background: "#ffffff", color: "#9ca3af" }}>Select State</option>
                                    {["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"].map((s) => (
                                        <option key={s} value={s} style={{ background: "#ffffff", color: "#0a1628" }}>{s}</option>
                                    ))}
                                </select>
                                {errors.state && <p className="mt-1 text-xs" style={{ color: "#dc2626" }}>{errors.state}</p>}
                            </div>
                            <Field label="Pincode" name="pincode" placeholder="110001" half
                                value={form.pincode} error={errors.pincode} onChange={handleFieldChange} />
                        </div>
                    </div>

                    {/* ── RIGHT: Order Summary ── */}
                    <div className="flex flex-col gap-4">
                        <div
                            className="p-5"
                            style={{
                                background: "#ffffff",
                                border: "1px solid rgba(201,164,90,0.18)",
                                borderTop: "3px solid #c9a45a",
                                borderRadius: "2px",
                            }}
                        >
                            <p
                                className="font-semibold uppercase mb-1"
                                style={{ color: "#c9a45a", fontSize: "0.65rem", letterSpacing: "0.2em" }}
                            >
                                Step 2
                            </p>
                            <h2
                                className="mb-5 text-lg font-bold"
                                style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
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
                                            className="h-12 w-12 flex-shrink-0 object-cover"
                                            style={{
                                                border: "1px solid rgba(201,164,90,0.15)",
                                                borderRadius: "2px",
                                                background: "#f5f1eb",
                                            }}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold truncate" style={{ color: "#0a1628" }}>
                                                {item.name}
                                            </p>
                                            <p className="text-xs" style={{ color: "#94a3b8" }}>
                                                {[item.color, item.size && `Size: ${item.size}`]
                                                    .filter(Boolean)
                                                    .join(" · ")}
                                            </p>
                                            <p className="text-xs" style={{ color: "#94a3b8" }}>Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-sm font-bold flex-shrink-0" style={{ color: "#c9a45a" }}>
                                            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="h-px w-full mb-4"
                                style={{ background: "rgba(201,164,90,0.2)" }}
                            />

                            <div className="flex flex-col gap-2 text-sm">
                                <div className="flex justify-between" style={{ color: "#64748b" }}>
                                    <span>Subtotal</span>
                                    <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                                </div>
                                <div className="flex justify-between" style={{ color: "#64748b" }}>
                                    <span>Shipping</span>
                                    <span style={{ color: shipping === 0 ? "#16a34a" : "#0a1628", fontWeight: shipping === 0 ? 600 : 400 }}>
                                        {shipping === 0 ? "Free" : `₹${shipping}`}
                                    </span>
                                </div>
                                <div
                                    className="h-px w-full my-1"
                                    style={{ background: "rgba(201,164,90,0.2)" }}
                                />
                                <div className="flex justify-between text-base font-bold">
                                    <span style={{ color: "#0a1628" }}>Total</span>
                                    <span style={{ color: "#c9a45a" }}>₹{total.toLocaleString("en-IN")}</span>
                                </div>
                            </div>
                        </div>

                        {/* Pay button */}
                        <button
                            onClick={handlePayment}
                            disabled={loading}
                            className="w-full py-4 text-sm font-bold uppercase transition-opacity hover:opacity-90 active:opacity-75 disabled:opacity-60 disabled:cursor-not-allowed"
                            style={{
                                background: "linear-gradient(135deg, #c9a45a, #d4b06a)",
                                color: "#0a1628",
                                letterSpacing: "0.08em",
                                borderRadius: "2px",
                            }}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span
                                        className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"
                                        style={{ borderColor: "rgba(10,22,40,0.4)", borderTopColor: "transparent" }}
                                    />
                                    Processing...
                                </span>
                            ) : (
                                `Pay ₹${(verifiedTotal ?? total).toLocaleString("en-IN")} via Razorpay`
                            )}
                        </button>

                        <p className="text-center text-xs" style={{ color: "#94a3b8" }}>
                            🔒 Secured by Razorpay · UPI · Cards · Net Banking
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

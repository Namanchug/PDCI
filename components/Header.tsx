"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/k9-security-services", label: "K9 Security Services" },
    { href: "/k9-seminars-workshops", label: "K9 Seminars & Workshops" },
    { href: "/forensic-k9-education", label: "Forensic K9 & Education" },
    { href: "/accreditations", label: "Accreditations" },
    { href: "/store", label: "Store" },
    { href: "/contact", label: "Contact Us" },
];

function isActivePath(pathname: string, href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
    const pathname = usePathname();
    const { totalItems, setIsOpen } = useCart();

    return (
        <header className="w-full border-b border-[#d8c08a]/20 bg-[linear-gradient(180deg,#0f1f33_0%,#13253b_100%)] text-[#f8f2e7] shadow-[0_8px_28px_rgba(15,23,42,0.18)]">
            <div className="flex flex-col px-4 pt-3 sm:px-6 lg:px-10">
                <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-start md:gap-5">
                    {/* Logo */}
                    <div className="flex w-full flex-col items-center md:w-[110px] md:shrink-0">
                        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-[#d8c08a]/20 bg-[rgba(248,242,231,0.96)] p-1.5 md:h-24 md:w-24">
                            <img
                                src="/logo.jpg"
                                alt="Police Dog Centre India logo"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Title block */}
                    <div className="flex flex-1 flex-col items-center">
                        {/*
                          Rendered on every page via the root layout, so this must not be an
                          <h1> — each page supplies its own unique <h1> for its content; two
                          H1s per page confuses heading hierarchy for SEO and screen readers.
                        */}
                        <p
                            className="text-center font-bold leading-none"
                            style={{
                                fontFamily: "'Times New Roman', serif",
                                fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)",
                                color: "#f8f2e7",
                            }}
                        >
                            Police Dog Centre INDIA
                        </p>
                        <div
                            className="mt-2 w-fit px-4 py-1.5 text-center text-[0.65rem] font-semibold tracking-[0.38em] sm:text-[0.72rem]"
                            style={{
                                background: "rgba(201,164,90,0.14)",
                                border: "1px solid rgba(201,164,90,0.28)",
                                color: "#f7dfb0",
                                borderRadius: "9999px",
                            }}
                        >
                            DETER | DETECT | DEFEND | DOMINATE
                        </div>
                    </div>

                    {/* Cart icon */}
                    <div className="md:ml-auto md:shrink-0">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="relative flex items-center gap-2 rounded-full px-4 py-2 text-[#f8f2e7] transition hover:bg-white/10"
                        >
                            <ShoppingCart size={22} />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#c9a45a] text-[0.65rem] font-bold text-[#0f1f33]">
                                    {totalItems}
                                </span>
                            )}
                            <span className="hidden text-sm font-medium sm:inline">Cart</span>
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="mt-3"
                    style={{
                        height: "1px",
                        background: "linear-gradient(to right, transparent, rgba(201,164,90,0.45), transparent)",
                    }}
                />

                {/* Nav */}
                <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 py-3 text-[0.82rem] sm:text-[0.88rem]">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="rounded-full px-3 py-1.5 no-underline transition-colors duration-200 hover:bg-white/10 hover:text-[#f7dfb0]"
                            style={{
                                color: isActivePath(pathname, item.href) ? "#f7dfb0" : "#d0d8e3",
                                fontWeight: isActivePath(pathname, item.href) ? 700 : 500,
                                background: isActivePath(pathname, item.href)
                                    ? "rgba(201,164,90,0.12)"
                                    : "transparent",
                            }}
                            aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
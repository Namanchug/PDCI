"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/k9-security-services", label: "K9 Security Services" },
    { href: "/contact", label: "Contact Us" },
];

function isActivePath(pathname: string, href: string) {
    if (href === "/") {
        return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
    const pathname = usePathname();

    return (
        <header
            className="w-full border-b border-[#d8c08a]/20 bg-[linear-gradient(180deg,#0f1f33_0%,#13253b_100%)] text-[#f8f2e7] shadow-[0_8px_28px_rgba(15,23,42,0.18)]"
        >
            <div className="flex flex-col px-4 pt-3 sm:px-6 lg:px-10">
                <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-start md:gap-5">

                    {/* Logo */}
                    <div className="flex w-full flex-col items-center md:w-[110px] md:shrink-0">
                        <div
                            className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border border-[#d8c08a]/20 bg-[rgba(248,242,231,0.96)] p-1.5 md:h-24 md:w-24"
                        >
                            <img
                                src="/logo.png"
                                alt="Police Dog Centre India logo"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Title block */}
                    <div className="flex flex-1 flex-col items-center">
                        <h1
                            className="text-center font-bold leading-none"
                            style={{
                                fontFamily: "'Times New Roman', serif",
                                fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)",
                                color: "#f8f2e7",
                            }}
                        >
                            Police Dog Centre INDIA
                        </h1>

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
                </div>

                {/* Divider */}
                <div
                    className="mt-3"
                    style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,164,90,0.45), transparent)" }}
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
                                background: isActivePath(pathname, item.href) ? "rgba(201,164,90,0.12)" : "transparent",
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
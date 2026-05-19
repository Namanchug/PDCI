"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/store", label: "Store" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/k9-security-services", label: "K9 Security Services" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/90 shadow-[0_10px_30px_rgba(6,13,21,0.28)] backdrop-blur-xl">
      <div className="border-b border-white/5 bg-white/5 text-[11px] text-gray-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <span className="uppercase tracking-[0.28em] text-gold-400">
            Police Dog Centre India
          </span>
          <div className="hidden items-center gap-4 md:flex">
            <span>Pan-India deployments</span>
            <span className="text-white/20">|</span>
            <a href="tel:+911234567890" className="hover:text-gold-400 transition-colors">
              +91 12345 67890
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4 lg:h-20 lg:py-0">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="rounded-full bg-gold-500 p-2 shadow-lg shadow-gold-500/20 transition-transform group-hover:scale-105">
              <Shield className="w-7 h-7 text-navy-900" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-extrabold tracking-wide text-sm sm:text-base">
                Police Dog Centre
              </div>
              <div className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                India
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-white/8 text-gold-400"
                    : "text-gray-300 hover:bg-white/8 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-navy-950 transition-transform hover:scale-[1.02] hover:bg-gold-400"
            >
              Get a Quote
              <MessageCircle className="h-4 w-4" />
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden border-t border-white/10 bg-navy-900/95">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-white/8 text-gold-400"
                    : "text-gray-300 hover:bg-white/8 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-full bg-gold-500 px-4 py-3 text-center text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

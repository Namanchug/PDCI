"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/k9-security-services", label: "K9 Security Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-navy-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gold-500 p-2 rounded-full group-hover:bg-gold-400 transition-colors">
              <Shield className="w-7 h-7 text-navy-900" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-base tracking-wide">
                Police Dog Centre
              </div>
              <div className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                India
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-gold-400 bg-navy-800"
                    : "text-gray-300 hover:text-gold-400 hover:bg-navy-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm px-5 py-2 rounded transition-colors"
            >
              Get a Quote
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
        <div className="md:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold-400 bg-navy-900"
                    : "text-gray-300 hover:text-gold-400 hover:bg-navy-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm px-4 py-3 rounded text-center transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

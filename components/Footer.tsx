"use client";

import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { getLocale, withLocale } from "@/lib/i18n";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/store", label: "Store" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/k9-security-services", label: "K9 Security Services" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Narcotics Detection",
  "Explosive Detection",
  "Patrol & Guard Dogs",
  "Search & Rescue",
  "Event Security",
  "Corporate K9 Security",
  "Store & Merchandise",
];

export default function Footer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = getLocale(searchParams.get("lang"));
  const linkHref = (href: string) => withLocale(href, locale);

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-gray-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold-500 p-2 rounded-full shadow-lg shadow-gold-500/20">
                <Shield className="w-6 h-6 text-navy-900" />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-sm tracking-wide">
                  Police Dog Centre
                </div>
                <div className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                  India
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mt-4">
              India&apos;s premier K9 security solutions provider. Delivering
              world-class trained security dogs, security packages, and
              professional handlers since 2005.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://wa.me/911234567890"
                className="bg-white/5 hover:bg-gold-500 hover:text-navy-900 text-gray-400 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                className="bg-white/5 hover:bg-gold-500 hover:text-navy-900 text-gray-400 w-9 h-9 rounded-full flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://www.linkedin.com"
                className="bg-white/5 hover:bg-gold-500 hover:text-navy-900 text-gray-400 w-9 h-9 rounded-full flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 border-b border-gold-500/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={linkHref(link.href)}
                    className="text-sm hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-gold-500 text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 border-b border-gold-500/30 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm flex items-center gap-2">
                  <span className="text-gold-500 text-xs">›</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 border-b border-gold-500/30 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span>
                  Police Dog Centre India, New Delhi - 110001, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="tel:+911234567890" className="hover:text-gold-400 transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:info@policedogcentreindia.com" className="hover:text-gold-400 transition-colors">
                  info@policedogcentreindia.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Police Dog Centre India. All rights reserved.
          </p>
          <p className={pathname === "/" ? "text-gold-400" : ""}>
            Securing India with K9 Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}

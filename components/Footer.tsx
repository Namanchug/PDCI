import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/k9-security-services", label: "K9 Security Services" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Narcotics Detection",
  "Explosive Detection",
  "Patrol & Guard Dogs",
  "Event Security",
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d8c08a]/15 bg-[linear-gradient(180deg,#0f1f33_0%,#09111d_100%)] text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/pdci-logo.png"
                alt="Police Dog Centre India logo"
                width={48}
                height={48}
                className="shrink-0 object-contain"
              />
              <div className="leading-tight">
                <div className="text-white font-bold text-sm tracking-wide">
                  Police Dog Centre
                </div>
                <div className="text-[#f7dfb0] text-xs font-semibold tracking-widest uppercase">
                  India
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 mt-4">
              India&apos;s premier K9 security solutions provider. Delivering
              world-class trained security dogs and professional handlers since
              2005.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="bg-white/6 border border-white/10 hover:bg-[#c9a45a] hover:text-[#0f1f33] text-slate-300 w-9 h-9 rounded-full flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="bg-white/6 border border-white/10 hover:bg-[#c9a45a] hover:text-[#0f1f33] text-slate-300 w-9 h-9 rounded-full flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Twitter"
              >
                X
              </a>
              <a
                href="#"
                className="bg-white/6 border border-white/10 hover:bg-[#c9a45a] hover:text-[#0f1f33] text-slate-300 w-9 h-9 rounded-full flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 border-b border-[#c9a45a]/25 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#f7dfb0] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#c9a45a] text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 border-b border-[#c9a45a]/25 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm flex items-center gap-2">
                  <span className="text-[#c9a45a] text-xs">›</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5 border-b border-[#c9a45a]/25 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#c9a45a] mt-0.5 shrink-0" />
                <span>
                  Police Dog Centre India, New Delhi - 110001, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#c9a45a] shrink-0" />
                <a href="tel:+911234567890" className="hover:text-[#f7dfb0] transition-colors">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#c9a45a] shrink-0" />
                <a href="mailto:info@policedogcentreindia.com" className="hover:text-[#f7dfb0] transition-colors">
                  info@policedogcentreindia.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-[#c9a45a] shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Police Dog Centre India. All rights reserved.</p>
          <p>Securing India with K9 Excellence</p>
        </div>
      </div>
    </footer>
  );
}

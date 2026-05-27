import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/accreditations", label: "Accreditations" },
  { href: "/k9-security-services", label: "K9 Security Services" },
  { href: "/forensic-k9-education", label: "Forensic K9 Education" },
  { href: "/k9-seminars-workshops", label: "Seminars & Workshops" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  { href: "/k9-security-services#tracking-trailing", label: "Tracking & Trailing Dogs" },
  { href: "/k9-security-services#explosive-detection", label: "Explosive Detection" },
  { href: "/k9-security-services#narcotics-detection", label: "Narcotics Detection" },
  { href: "/k9-security-services#patrol-dogs", label: "Patrol Dogs" },
  { href: "/k9-security-services#event-security", label: "Event Security Dogs" },
  { href: "/k9-security-services#behaviour-assessment", label: "Behaviour Assessment & Selection" },
  { href: "/k9-security-services#proficiency-evaluation", label: "Proficiency Evaluation & Certification" },
  { href: "/k9-security-services#pet-dog-training", label: "Pet Dog Training / Boarding & Behaviour Modification" },
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
                src="/pdci-logo.jpg"
                alt="Police Dog Centre India logo"
                width={48}
                height={48}
                className="shrink-0 object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-300 mt-4">
              India&apos;s premier K9 security solutions provider. Delivering
              world-class trained security dogs and professional handlers since
              2005.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/pdcindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/6 border border-white/10 hover:bg-[#c9a45a] hover:text-[#0f1f33] text-slate-300 w-9 h-9 rounded-full flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
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
                <li key={s.href} className="text-sm flex items-center gap-2">
                  <span className="text-[#c9a45a] text-xs">›</span>
                  <Link
                    href={s.href}
                    className="hover:text-[#f7dfb0] transition-colors"
                    aria-label={s.label}
                  >
                    {s.label}
                  </Link>
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
                <span>Training Facilities: Sainik Farma, GXMH+3FQ, Badusarai, New Delhi, Delhi, 110071</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#c9a45a] mt-0.5 shrink-0" />
                <span>Head Office: E-601, Jagran CGHS, Plot-17, Dwarka Sector-22, New Delhi, 110077</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#c9a45a] shrink-0" />
                <a href="tel:+918287793696" className="hover:text-[#f7dfb0] transition-colors">
                  +91 8287793696
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#c9a45a] shrink-0" />
                <a href="mailto:policedogcentreindia@gmail.com" className="hover:text-[#f7dfb0] transition-colors">
                  policedogcentreindia@gmail.com
                </a>
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

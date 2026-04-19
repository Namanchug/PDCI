import Link from "next/link";
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
} from "lucide-react";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Trained K9 Units" },
  { value: "300+", label: "Satisfied Clients" },
  { value: "18+", label: "States Served" },
];

const services = [
  {
    icon: "🐕",
    title: "Narcotics Detection",
    description:
      "Highly trained K9 units for detecting concealed narcotics in vehicles, luggage, premises, and cargo.",
  },
  {
    icon: "💣",
    title: "Explosive Detection",
    description:
      "Certified bomb-detection dogs ensuring safety at high-security venues, events, and critical infrastructure.",
  },
  {
    icon: "🛡️",
    title: "Patrol & Guard Dogs",
    description:
      "Professionally trained guard dogs and handlers for perimeter security, deterrence, and rapid response.",
  },
  {
    icon: "🔍",
    title: "Search & Rescue",
    description:
      "Specialized tracking and search dogs deployed for missing persons, disaster relief, and forensic operations.",
  },
  {
    icon: "🎪",
    title: "Event Security",
    description:
      "K9 security teams for large-scale events, VIP protection, political rallies, and cultural gatherings.",
  },
  {
    icon: "🏢",
    title: "Corporate Security",
    description:
      "Tailored K9 security programs for corporate campuses, data centers, banks, and industrial facilities.",
  },
];

const whyUs = [
  {
    title: "Government Certified",
    description:
      "All our K9 teams are certified by recognized Indian government and law enforcement agencies.",
    icon: Award,
  },
  {
    title: "Expert Handlers",
    description:
      "Our handlers are ex-military and ex-police professionals with decades of operational experience.",
    icon: Users,
  },
  {
    title: "Rigorous Training",
    description:
      "Every dog undergoes 6–12 months of intensive specialized training before deployment.",
    icon: Shield,
  },
  {
    title: "Pan-India Presence",
    description:
      "Operations across 18+ states with rapid deployment capability within 24 hours.",
    icon: CheckCircle,
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Head of Security, Tata Group",
    text: "PDCI has been an invaluable partner for our corporate security needs. Their K9 teams are highly professional and effective.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Event Director, Grand Events India",
    text: "We've used PDCI for multiple large-scale events. Their explosive detection teams give us confidence to host safely.",
    rating: 5,
  },
  {
    name: "Col. (Retd.) Arun Verma",
    role: "Security Consultant",
    text: "The quality of training and discipline of PDCI handlers is on par with the best K9 units I've seen globally.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                India&apos;s Premier K9 Security
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Protecting India with{" "}
              <span className="text-gold-400">Elite K9</span> Forces
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              Police Dog Centre India (PDCI) delivers world-class K9 security
              services — from narcotics and explosive detection to patrol and
              search &amp; rescue. Trusted by government agencies, corporates,
              and event organizers across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/k9-security-services"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded transition-all text-base shadow-lg"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:border-gold-400 text-white hover:text-gold-400 font-semibold px-8 py-4 rounded transition-all text-base"
              >
                <Phone className="w-5 h-5" />
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 0C480 0 240 60 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-4xl font-extrabold text-navy-900 mb-1 group-hover:text-gold-500 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Our K9 Security Services
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Comprehensive K9 security solutions delivered by certified
              professionals and expertly trained dogs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-gold-500/30 transition-all group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-navy-900 font-bold text-lg mb-3 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/k9-security-services"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-7 py-3 rounded transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
              Why PDCI
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              The PDCI Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-navy-800 rounded-xl p-7 border border-navy-700 hover:border-gold-500/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gold-500/10 rounded-full p-2">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <span className="text-gold-400 font-bold text-2xl">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-xl p-7 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold-500 fill-gold-500"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                  &quot;{t.text}&quot;
                </p>
                <div>
                  <div className="text-navy-900 font-bold text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
            Ready to Strengthen Your Security?
          </h2>
          <p className="text-navy-800/80 text-lg mb-8">
            Contact our team today for a free consultation and customized K9
            security solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded transition-colors shadow-lg"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-navy-900 font-bold px-8 py-4 rounded transition-colors border-2 border-navy-900/20"
            >
              <Phone className="w-5 h-5" />
              +91 12345 67890
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

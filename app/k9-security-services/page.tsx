import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Search,
  AlertTriangle,
  Eye,
  Users,
  Building2,
  Zap,
  Dog,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "K9 Security Services | Police Dog Centre India",
  description:
    "Explore PDCI's comprehensive K9 security services – narcotics detection, explosive detection, patrol dogs, search & rescue, event security, and more.",
};

const services = [
  {
    icon: AlertTriangle,
    title: "Narcotics Detection",
    shortDesc: "Drug detection K9 teams for any environment",
    description:
      "Our highly specialized narcotics detection dogs are trained to identify a wide range of controlled substances including heroin, cocaine, methamphetamine, cannabis, and prescription drug misuse. Deployed in airports, seaports, customs checkpoints, educational institutions, hotels, and corporate premises.",
    features: [
      "Multi-drug detection capability",
      "Passive alert methodology",
      "Certified by recognized agencies",
      "Available for spot checks & routine screening",
      "Suitable for schools, offices, events",
    ],
    breeds: "Belgian Malinois, Labrador Retriever, Springer Spaniel",
  },
  {
    icon: Zap,
    title: "Explosive Detection",
    shortDesc: "Bomb & IED detection for critical venues",
    description:
      "Our explosive detection K9 units undergo rigorous training to detect a vast range of explosive compounds including RDX, TNT, PETN, ANFO, improvised devices, and more. These teams are deployed at VIP events, government buildings, airports, metro stations, and critical infrastructure.",
    features: [
      "Detection of 15+ explosive compounds",
      "Vehicle, luggage & area sweeps",
      "Pre-event & real-time threat assessment",
      "Coordination with bomb disposal squads",
      "Available on short notice for emergencies",
    ],
    breeds: "German Shepherd, Belgian Malinois, Golden Retriever",
  },
  {
    icon: Shield,
    title: "Patrol & Guard Dogs",
    shortDesc: "Deterrence and perimeter security",
    description:
      "Our patrol and guard dogs are trained in obedience, protection, and apprehension. They serve as a powerful deterrent and active security measure for factories, warehouses, construction sites, gated communities, and government installations. Each dog is paired with a professionally trained handler.",
    features: [
      "24/7 deployment capability",
      "Obedience & protection trained",
      "Handler-dog team deployment",
      "Effective deterrent & rapid response",
      "Perimeter and area patrols",
    ],
    breeds: "German Shepherd, Doberman, Rottweiler, Belgian Malinois",
  },
  {
    icon: Search,
    title: "Search & Rescue (SAR)",
    shortDesc: "Locating missing persons and disaster survivors",
    description:
      "Our SAR K9 teams are equipped to locate missing persons, disaster survivors, and evidence in challenging environments — collapsed buildings, forests, mountainous terrain, and disaster sites. These teams coordinate with NDRF, police, and civil authorities.",
    features: [
      "Urban & wilderness search capability",
      "Disaster & rubble rescue trained",
      "Cadaver dog operations",
      "Night operation ready",
      "NDRF coordination & rapid deployment",
    ],
    breeds: "German Shepherd, Belgian Malinois, Bloodhound, Labrador",
  },
  {
    icon: Eye,
    title: "Tracking & Trailing",
    shortDesc: "Following criminal and missing person trails",
    description:
      "Our tracking dogs are trained to follow scent trails of suspects, escaped individuals, or missing persons across varied terrains and time intervals. Widely used by police, investigative agencies, and private security firms for post-incident investigation and active pursuit.",
    features: [
      "Follow trails up to 24+ hours old",
      "Track across urban & rural terrain",
      "Coordinate with police units",
      "Evidence identification",
      "Suspect apprehension support",
    ],
    breeds: "Bloodhound, German Shepherd, Belgian Malinois",
  },
  {
    icon: Users,
    title: "Event Security",
    shortDesc: "K9 teams for events, venues & gatherings",
    description:
      "For concerts, political rallies, sports events, religious gatherings, and corporate functions, PDCI provides specialized K9 security teams. Our event security packages include pre-event sweeps, perimeter monitoring, crowd deterrence dogs, and rapid response units.",
    features: [
      "Pre-event venue sweep",
      "Explosive & narcotics detection at entry",
      "Crowd management K9 support",
      "VIP protection assistance",
      "Post-event clearance",
    ],
    breeds: "German Shepherd, Belgian Malinois, Labrador",
  },
  {
    icon: Building2,
    title: "Corporate K9 Security",
    shortDesc: "Customized K9 programs for businesses",
    description:
      "We design bespoke K9 security programs for corporate clients including IT parks, banks, data centers, pharmaceutical companies, and manufacturing facilities. Our solutions include access control dog teams, periodic narcotics/explosive sweeps, and full-time K9 guard deployment.",
    features: [
      "Bespoke security assessment",
      "Periodic sweep schedules",
      "Full-time K9 guard deployment",
      "Staff security awareness training",
      "Compliance documentation provided",
    ],
    breeds: "German Shepherd, Belgian Malinois, Doberman",
  },
  {
    icon: Dog,
    title: "K9 Training & Certification",
    shortDesc: "Training programs for dog handlers",
    description:
      "Beyond deployment, PDCI runs structured K9 training programs for police units, private security agencies, and individuals. Our courses range from basic obedience and agility to advanced detection and patrol work, all certified by recognized agencies.",
    features: [
      "Basic to advanced K9 courses",
      "Handler training & certification",
      "Specialized detection courses",
      "Police unit training programs",
      "Refresher & recertification courses",
    ],
    breeds: "All working breeds accepted for training",
  },
];

const process = [
  {
    step: "01",
    title: "Security Assessment",
    description:
      "Our team conducts a thorough on-site assessment to understand your specific security requirements and risks.",
  },
  {
    step: "02",
    title: "Custom Solution Design",
    description:
      "We design a K9 security solution tailored to your environment, budget, and threat profile.",
  },
  {
    step: "03",
    title: "Team Deployment",
    description:
      "Certified K9 teams are deployed with full documentation, handler credentials, and operational protocols.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "We provide continuous monitoring, periodic reviews, and rapid response to evolving security needs.",
  },
];

export default function K9ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400">K9 Security Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            K9 Security Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Comprehensive K9 security solutions — from narcotics &amp; explosive
            detection to patrol, search &amp; rescue, and specialized training.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Complete K9 Security Portfolio
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Each service is delivered by certified handlers with professionally
              trained dogs, backed by 20+ years of operational excellence.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-5 ${isEven ? "" : "lg:flex-row-reverse"}`}
                  >
                    {/* Icon & title panel */}
                    <div
                      className={`lg:col-span-1 bg-navy-900 p-8 flex flex-col items-center justify-center text-center ${!isEven ? "lg:order-last" : ""}`}
                    >
                      <div className="bg-gold-500/10 rounded-full p-4 mb-4">
                        <Icon className="w-8 h-8 text-gold-400" />
                      </div>
                      <h3 className="text-white font-bold text-base">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-2">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-4 p-8">
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-navy-900 font-bold text-xs uppercase tracking-wider mb-3">
                            Key Capabilities
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((f) => (
                              <li
                                key={f}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-navy-900 font-bold text-xs uppercase tracking-wider mb-3">
                            Breeds Used
                          </h4>
                          <p className="text-sm text-gray-500">
                            {service.breeds}
                          </p>
                          <div className="mt-6">
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold px-5 py-2.5 rounded transition-colors"
                            >
                              Enquire About This Service
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Our Deployment Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-5">
                  <span className="text-navy-900 font-extrabold text-lg">
                    {p.step}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dog Breeds We Work With */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Our K9 Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Breeds We Train & Deploy
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { emoji: "🐕", name: "German Shepherd", role: "Patrol & Detection" },
              { emoji: "🐕‍🦺", name: "Belgian Malinois", role: "Multi-Purpose" },
              { emoji: "🦮", name: "Labrador Retriever", role: "Narcotics Detection" },
              { emoji: "🐩", name: "Bloodhound", role: "Tracking & Trailing" },
              { emoji: "🐕", name: "Doberman", role: "Guard & Patrol" },
              { emoji: "🦮", name: "Golden Retriever", role: "Explosive Detection" },
            ].map((breed) => (
              <div
                key={breed.name}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-gold-500/30 transition-all"
              >
                <div className="text-4xl mb-3">{breed.emoji}</div>
                <div className="text-navy-900 font-bold text-xs mb-1">
                  {breed.name}
                </div>
                <div className="text-gray-400 text-xs">{breed.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
            Need a K9 Security Solution?
          </h2>
          <p className="text-navy-800/80 text-lg mb-8">
            Our security experts are ready to design a custom K9 solution for
            your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded transition-colors shadow-lg"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-navy-900 font-bold px-8 py-4 rounded transition-colors border-2 border-navy-900/20"
            >
              <Phone className="w-5 h-5" />
              Call: +91 12345 67890
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

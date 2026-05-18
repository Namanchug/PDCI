import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  Eye,
  Users,
  Zap,
  Dog,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "K9 Security Services | Police Dog Centre India",
  description:
    "Professional K9 security services covering detection, patrol, event support, and handler training.",
};

const services = [
  {
    icon: AlertTriangle,
    title: "Narcotics Detection",
    shortDesc: "Targeted screening for controlled environments",
    image: "/k9-detection/narco.jpg",
    description:
      "Our narcotics detection teams are trained to identify a broad range of controlled substances and concealment methods. They are deployed in airports, seaports, customs checkpoints, educational institutions, hospitality venues, and corporate facilities.",
    features: [
      "Broad-spectrum substance detection",
      "Passive alert methodology",
      "Suitable for routine or ad hoc screening",
      "Discreet deployment in public-facing spaces",
      "Operational reporting available on request",
    ],
    breeds: "Belgian Malinois, Labrador Retriever, Springer Spaniel",
  },
  {
    icon: Zap,
    title: "Explosive Detection",
    shortDesc: "Threat screening for high-risk venues",
    image: "/k9-detection/explosive.jpg",
    description:
      "Our explosive detection K9 units support pre-event sweeps, perimeter checks, baggage screening, and route security for environments with elevated threat exposure. Teams are deployed with structured protocols and clear reporting.",
    features: [
      "Venue, vehicle, and baggage screening",
      "Vehicle, luggage & area sweeps",
      "Pre-event and day-of-operations sweeps",
      "Rapid deployment for urgent requirements",
      "Coordination with site security teams",
    ],
    breeds: "German Shepherd, Belgian Malinois, Golden Retriever",
  },
  {
    icon: Shield,
    title: "Patrol & Perimeter Security",
    shortDesc: "Visible deterrence and rapid response support",
    image: "/k9-detection/patrol.jpg",
    description:
      "Patrol K9 teams provide a strong deterrent and an immediate response layer for factories, warehouses, construction sites, residential compounds, and government facilities. Each deployment is led by a trained handler with defined patrol and escalation procedures.",
    features: [
      "24/7 deployment options",
      "Handler-led patrol operations",
      "Perimeter and access-point coverage",
      "Controlled deterrence and response",
      "Scalable for short- or long-term assignments",
    ],
    breeds: "German Shepherd, Doberman, Rottweiler, Belgian Malinois",
  },
  {
    icon: Eye,
    title: "Tracking & Trailing",
    shortDesc: "Scent tracking for investigations and recovery",
    image: "/k9-detection/tracking.jpg",
    description:
      "Tracking dogs are trained to follow scent trails across urban and rural environments to support investigations, recovery operations, and missing-person searches. They are commonly used by law enforcement and private security teams.",
    features: [
      "Follow trails across varied terrain",
      "Useful for recent and older scent trails",
      "Supports investigative and recovery work",
      "Works with police and security teams",
      "Helps establish operational direction",
    ],
    breeds: "Bloodhound, German Shepherd, Belgian Malinois",
  },
  {
    icon: Users,
    title: "Event Security",
    shortDesc: "K9 support for venues and public gatherings",
    image: "/k9-detection/event.jpg",
    description:
      "For concerts, rallies, sports events, religious gatherings, and public gatherings, PDCI provides structured K9 support focused on pre-event screening, perimeter control, and rapid incident response.",
    features: [
      "Pre-event venue sweep",
      "Entry-point screening support",
      "Crowd deterrence and perimeter monitoring",
      "VIP and restricted-zone coverage",
      "Post-event clearance checks",
    ],
    breeds: "German Shepherd, Belgian Malinois, Labrador",
  },
  {
    icon: Dog,
    title: "K9 Training & Certification",
    shortDesc: "Structured training for handlers and teams",
    image: "/k9-detection/certifications.jpg",
    description:
      "PDCI offers training programs for police units, private security providers, and individual handlers. Courses cover obedience, agility, detection, patrol handling, and recertification pathways.",
    features: [
      "Basic to advanced training pathways",
      "Handler development and assessment",
      "Detection and patrol specialization",
      "Police and private-sector programs",
      "Refresher and recertification support",
    ],
    breeds: "All working breeds accepted for training",
  },
];

const process = [
  {
    step: "01",
    title: "Site Assessment",
    description:
      "We evaluate operational risks, access points, and deployment requirements before recommending a K9 solution.",
  },
  {
    step: "02",
    title: "Deployment Planning",
    description:
      "We align dog selection, handler requirements, and scheduling with your environment and risk profile.",
  },
  {
    step: "03",
    title: "Operational Deployment",
    description:
      "Certified K9 teams arrive with documentation, protocols, and handler credentials ready for service.",
  },
  {
    step: "04",
    title: "Review & Support",
    description:
      "We remain available for adjustments, follow-up visits, and escalations as requirements evolve.",
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
            Professional K9 security solutions for detection, patrol, event
            support, and specialist training.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Wide-ranging K9 Security Solutions are provided through highly trained and certified K9 teams well-versed in explosive, firearms, and narcotics detection, personal protection, and guarding. These trained K9 Teams are available in multiple formats, all of which may be tailored to your schedule, facility, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Explosive Detection",
                body: "Detection of explosive ordinance and firearms at Air Cargo, Sports Stadiums, Concert Venues, Convention Centers and Events, Transportation Facilities and Vehicles, Health Care Facilities, Critical Infrastructure including pre-Destination K-9 Detection Sweeps.",
              },
              {
                title: "Tactical K9 Security",
                body: "We can assist you with virtually every security need for your event, ranging from armed guards and canine units to other more unique services for your safety concerns.",
              },
              {
                title: "K9 Tactical Checkpoint & Perimeter Patrol",
                body: "K-9 Support & Deployment for Law Enforcement and high-security perimeter operations requiring rapid response and deterrence.",
              },
              {
                title: "Narcotics Detection",
                body: "Detection of narcotics substances — marijuana, cocaine, heroin, methamphetamines, and any other prohibited drugs — in support of Law Enforcement Organizations.",
              },
              {
                title: "Customized K9 Security",
                body: "Highly experienced teams of Police Dog Centre India are capable to offer you customized security solutions, tailor-made to suit your requirements and overcome security threats and challenges.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gold-500/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                    <span className="text-gold-600 font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-navy-900 font-bold text-sm">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
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
              Professional K9 Security Capabilities
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Each service is delivered by trained handlers and operationally
              ready dogs with a focus on discipline, discretion, and reliable
              performance.
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
                    className={`grid grid-cols-1 ${service.image ? "lg:grid-cols-5" : "lg:grid-cols-1"}`}
                  >
                    {/* Image panel — only rendered when an image exists */}
                    {service.image && (
                      <div
                        className={`lg:col-span-2 min-h-[260px] ${!isEven ? "lg:order-last" : ""}`}
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    )}

                    {/* Content */}
                    <div className={`${service.image ? "lg:col-span-3" : ""} p-8`}>
                      {/* Title row */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-navy-900 rounded-lg p-2 shrink-0">
                          <Icon className="w-5 h-5 text-gold-400" />
                        </div>
                        <div>
                          <h3 className="text-navy-900 font-bold text-base">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-xs">{service.shortDesc}</p>
                        </div>
                      </div>

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
              { initials: "GS", name: "German Shepherd", role: "Patrol and Detection" },
              { initials: "BM", name: "Belgian Malinois", role: "Multi-Purpose" },
              { initials: "LR", name: "Labrador Retriever", role: "Narcotics Detection" },
              { initials: "BH", name: "Bloodhound", role: "Tracking and Trailing" },
              { initials: "DB", name: "Doberman", role: "Guard and Patrol" },
              { initials: "GR", name: "Golden Retriever", role: "Explosive Detection" },
            ].map((breed) => (
              <div
                key={breed.name}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-gold-500/30 transition-all"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-navy-900 text-sm font-bold">
                  {breed.initials}
                </div>
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
            Our team can design a K9 deployment plan tailored to your site,
            schedule, and risk profile.
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

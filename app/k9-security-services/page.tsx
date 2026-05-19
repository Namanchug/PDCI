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
  ClipboardList,
  Heart,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "K9 Security Services | Police Dog Centre India",
  description:
    "Professional K9 security services covering tracking, explosive and narcotics detection, patrol, event security, behaviour assessment, proficiency certification, and pet dog training.",
};

const services = [
  {
    icon: Eye,
    slug: "tracking-trailing",
    title: "Tracking & Trailing Dogs",
    shortDesc: "Crime scene investigation and suspect tracking",
    image: "/k9-detection/tracking.jpg",
    description:
      "Tracker-Trailing Dogs (TR) are deployed for crime scene investigation and suspect tracking, following scent trails across urban, rural, and forested environments. Leveraging their extraordinary olfactory capability, these dogs support law enforcement agencies in locating suspects, missing persons, and evidence — often after significant time has elapsed. Trained in accordance with MHA standards, PDCI's tracking teams are a reliable force multiplier for investigative and recovery operations.",
    features: [
      "Crime scene investigation and scent work",
      "Suspect tracking across urban and rural terrain",
      "Missing person and evidence recovery",
      "Works alongside police and security teams",
      "Operates on recent as well as older scent trails",
    ],
    breeds: "Bloodhound, German Shepherd, Belgian Malinois",
  },
  {
    icon: Zap,
    slug: "explosive-detection",
    title: "Explosive Detection",
    shortDesc: "Threat screening for high-risk venues",
    image: "/k9-detection/explosive.jpg",
    description:
      "Our Explosive Detection Dog Teams (EDDTs) are trained to identify all five MHA-classified classes of explosive substances — Aliphatic Nitro, Aromatic Nitro, Nitrate Ester, Nitramines, and Acid Salts — including home-made IEDs, TATP, HMTD, and military-grade ordnance. Certified under the MHA's K9 Proficiency Evaluation Test (K9 PET) protocol with a minimum 90% detection score, these teams support airport and cargo security, pre-event venue sweeps, baggage screening, vehicle checks, and route clearance.",
    features: [
      "Detection of all 5 MHA-classified explosive classes",
      "IED, TATP, HMTD, and home-made explosive detection",
      "Venue, vehicle, baggage, and open-area sweeps",
      "Pre-event and day-of-operations clearance",
      "MHA K9 PET certified with >90% accuracy",
    ],
    breeds: "German Shepherd, Belgian Malinois, Golden Retriever",
  },
  {
    icon: AlertTriangle,
    slug: "narcotics-detection",
    title: "Narcotics Detection",
    shortDesc: "Targeted screening for controlled environments",
    image: "/k9-detection/narco.jpg",
    description:
      "Our Narcotics Detection Dog Teams (NDDTs) are trained and certified to identify a wide range of controlled substances — including Marijuana, Cocaine, Heroin, Opiates, Methamphetamine, and MDMA — across airports, seaports, customs checkpoints, educational institutions, hospitality venues, and corporate facilities. Passive alert methodology ensures discreet, non-disruptive screening. All teams are certified as per the MHA AKLAN SOP with a minimum 90% detection rate, with annual recertification.",
    features: [
      "Mandatory substances: Marijuana and Cocaine",
      "Additional: Heroin, Meth, MDMA, Opiates, and more",
      "Passive alert methodology for discreet screening",
      "Suitable for airports, ports, institutions, and events",
      "MHA-certified teams with annual recertification",
    ],
    breeds: "Belgian Malinois, Labrador Retriever, Springer Spaniel",
  },
  {
    icon: Shield,
    slug: "patrol-dogs",
    title: "Patrol Dogs",
    shortDesc: "Visible deterrence, rapid response, and assault capability",
    image: "/k9-detection/patrol.jpg",
    description:
      "PDCI's Patrol K9 teams provide a strong deterrent and an immediate response layer for factories, warehouses, residential compounds, government facilities, and PCR van operations. Trained using modern operant conditioning techniques — not outdated coercive methods — these dogs demonstrate superior initiative, controlled aggression, and reliable off-leash obedience. Advanced Assault K9 configurations are also available for anti-terror squads, NSG-style special interventions, and building clearance operations.",
    features: [
      "24/7 deployment for perimeter and access-point coverage",
      "Controlled deterrence and rapid incident response",
      "Assault K9 configuration for special forces support",
      "Handler-led patrol with defined escalation procedures",
      "Scalable for short- or long-term assignments",
    ],
    breeds: "German Shepherd, Doberman, Rottweiler, Belgian Malinois",
  },
  {
    icon: Users,
    slug: "event-security",
    title: "Event Security Dogs",
    shortDesc: "K9 support for venues and public gatherings",
    image: "/k9-detection/event.jpg",
    description:
      "For concerts, rallies, sports events, religious gatherings, and VIP protection assignments, PDCI provides structured K9 security support focused on pre-event venue sweeps, entry-point explosive and narcotics screening, perimeter monitoring, and crowd management. Teams are deployed with defined response protocols and are experienced operating in large, high-footfall public environments while maintaining full discretion and handler control.",
    features: [
      "Pre-event explosive and narcotics venue sweep",
      "Entry-point and baggage screening support",
      "Crowd deterrence and perimeter monitoring",
      "VIP and restricted-zone protection",
      "Post-event clearance and incident response",
    ],
    breeds: "German Shepherd, Belgian Malinois, Labrador",
  },
  {
    icon: ClipboardList,
    slug: "behaviour-assessment",
    title: "Behaviour Assessment & Selection of Dogs",
    shortDesc: "Scientific selection of dogs for specialised duties",
    image: "/k9-detection/tracking.jpg",
    description:
      "Selecting the right dog is the foundation of any high-performing K9 team. PDCI applies the advanced 'K9 Behavioural Assessment' (K9 BAT) model — developed by Col. (Dr.) P.K. Chug for the Ministry of Home Affairs — to scientifically evaluate and select pups and adult dogs for specific police and security roles. The assessment evaluates prey drive, nerve strength, temperament, trainability, and stress recovery to ensure only the most suitable dogs are matched to demanding operational roles.",
    features: [
      "MHA-aligned K9 BAT assessment model",
      "Pup and adult dog evaluation for police duties",
      "Drive, temperament, and stress resilience testing",
      "Breed suitability matching for specialised roles",
      "Supported by structured dog breeding programme guidance",
    ],
    breeds: "German Shepherd, Belgian Malinois, Labrador, Springer Spaniel, Bloodhound",
  },
  {
    icon: Award,
    slug: "proficiency-evaluation",
    title: "Proficiency Evaluation & Certification",
    shortDesc: "MHA-compliant K9 team assessment and accreditation",
    image: "/k9-detection/certifications.jpg",
    description:
      "PDCI conducts independent, third-party K9 Proficiency Evaluation Tests (K9 PET) for Explosive Detection Dog Teams (EDDTs) and Narcotics Detection Dog Teams (NDDTs) as mandated by the MHA's AKLAN SOP (Augmentation of K9s by Licensing as per Accreditation Norms). Certification requires a minimum 91.66% pass rate across four mandatory scenario-based searches — Building, Vehicle, Open Area, and Baggage. Annual certification with six-monthly internal audit support ensures continued operational credibility and judicial admissibility.",
    features: [
      "MHA AKLAN SOP-compliant third-party evaluation",
      "Explosive and narcotics detection dog certification",
      "Minimum 91.66% pass rate for K9 PET accreditation",
      "Mandatory scenarios: Building, Vehicle, Open Area, Baggage",
      "Annual certification + six-monthly internal audit support",
    ],
    breeds: "All police service K9 breeds accepted for evaluation",
  },
  {
    icon: Heart,
    slug: "pet-dog-training",
    title: "Pet Dog Training / Boarding & Behaviour Modification",
    shortDesc: "Professional training and care for companion dogs",
    image: "/k9-detection/patrol.jpg",
    description:
      "PDCI extends its police-standard training expertise to pet dog owners across India. Using the same science-based operant conditioning techniques applied to police K9s, our trainers help family dogs develop reliable obedience, social confidence, and good manners. Boarding services maintain the same high standards of professional care. For dogs exhibiting problem behaviours — aggression, anxiety, reactivity, excessive barking, or leash issues — our structured behaviour modification programmes address root causes for lasting results.",
    features: [
      "Basic and advanced obedience using reward-based methods",
      "Behaviour modification for aggression, anxiety, and reactivity",
      "Professional boarding at police K9 facility standards",
      "Personalised programmes designed for each individual dog",
      "Ongoing handler coaching and follow-up support",
    ],
    breeds: "All breeds welcomed for training and boarding",
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
            Comprehensive K9 security solutions spanning tracking, explosive and narcotics detection, patrol, event security, behaviour assessment, proficiency certification, and pet dog training — all delivered to MHA-aligned standards.
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
                  id={service.slug}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden scroll-mt-24"
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

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, BookOpen, Globe, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Accreditations | Police Dog Centre India",
  description:
    "Police Dog Centre India holds accreditations from QCI (GeM), KCI, NFSU, ICODD (USA), and Florida International University (FIU), Miami — nationally and internationally recognised.",
};

const nationalAccreditations = [
  {
    id: 1,
    category: "Academic & Research Collaboration",
    badge: "NFSU",
    title: "Affiliated Institution & Collaborating Partner",
    issuedBy: "National Forensic Sciences University (NFSU)",
    subtext: "Ministry of Home Affairs, Government of India",
    description:
      "NFSU, in collaboration with Police Dog Centre India, has launched the Professional Diploma in Canine Forensics (DCF) — India's first-of-its-kind academic programme in K9 science and forensic deployment. Col. (Dr.) P.K. Chug serves as Chief Mentor, Canine Forensics at NFSU. With six successful batches since July 2023 and nearly 150 forensic/police K9 experts trained, this initiative is backed by both BPR&D and the Ministry of Home Affairs. NFSU is the world's first and only forensic sciences university, established by an Act of Parliament and recognised as an Institution of National Importance.",
    icon: BookOpen,
    highlight: "NFSU Affiliated",
    logo: "/accreditations/nfsu.jpg",
  },
  {
    id: 2,
    category: "National Accreditation",
    badge: "QCI / GeM",
    title: "Accredited Police K9 Centre",
    issuedBy: "Quality Council of India (QCI)",
    subtext: "for Government e-Marketplace (GeM)",
    description:
      "Police Dog Centre India is an ISO 9001:2015 Company and an Indian Startup and MSME, accredited by the Quality Council of India (QCI) for the Government e-Marketplace (GeM) — a Government of India initiative that certifies organisations meeting the highest standards of quality and credibility for procurement by central and state government agencies.",
    icon: ShieldCheck,
    highlight: "GeM Certified",
    logo: "/accreditations/qci.jpg",
  },
  {
    id: 3,
    category: "National Accreditation",
    badge: "KCI",
    title: "Registered Dog Breeding Institution",
    issuedBy: "Kennel Club of India (KCI)",
    subtext: "",
    description:
      "Police Dog Centre India is a registered dog breeding institution with the Kennel Club of India (KCI) — the apex body governing purebred dog registration, breeding standards, and canine sports in India. This registration affirms PDCI's commitment to ethical, standards-compliant breeding practices for working and service K9s.",
    icon: Award,
    highlight: "KCI Registered",
    logo: "/accreditations/kci.jpg",
  },
];

const internationalAccreditations = [
  {
    id: 4,
    category: "International Recognition",
    badge: "ICODD",
    title: "Advisory Board Member & Assessor",
    issuedBy: "International Commission on Detector Dogs (ICODD)",
    subtext: "USA",
    description:
      "Col. (Dr.) P.K. Chug, CMD of Police Dog Centre India, serves as an Advisory Board Member and Assessor of the International Commission on Detector Dogs (ICODD), USA — the globally recognised body for evaluation, standardisation, and certification of detector dog teams. This distinction positions PDCI's leadership and training standards at the highest level of international K9 credentialing.",
    icon: Globe,
    highlight: "ICODD Advisory Board",
    logo: "/accreditations/icodd.jpg",
  },
  {
    id: 5,
    category: "International Academic Collaboration",
    badge: "FIU",
    title: "Collaborating Partner",
    issuedBy: "Florida International University (FIU)",
    subtext: "Global Forensic and Justice Centre (GFJC), Miami, USA",
    description:
      "Police Dog Centre India, through its collaboration with NFSU, is a collaborating partner with the Global Forensic and Justice Centre (GFJC) at Florida International University (FIU), Miami, USA — for international benchmarking and academic exchange in the field of Canine Forensics. Outstanding students from the DCF programme and qualified professionals from police and law enforcement organisations may pursue Master's and Ph.D. programmes including semesters at FIU's GFJC campus in the USA.",
    icon: Users,
    highlight: "FIU Collaborating Partner",
    logo: "/accreditations/fiu.jpg",
  },
];

function AccreditationCard({
  item,
}: {
  item: (typeof nationalAccreditations)[0];
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      {/* Logo area */}
      <div className="bg-navy-900 h-44 flex flex-col items-center justify-center gap-3 px-6">
        <div className="relative h-24 w-40">
          <Image
            src={item.logo}
            alt={`${item.issuedBy} logo`}
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>
        <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase text-center">
          {item.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-7 flex flex-col flex-1">
        {/* Badge */}
        <span
          className="inline-block w-fit text-xs font-bold px-3 py-1 rounded-full mb-4"
          style={{
            background: "rgba(201,164,90,0.12)",
            color: "#9f7b35",
            border: "1px solid rgba(201,164,90,0.3)",
          }}
        >
          {item.highlight}
        </span>

        <h3 className="text-navy-900 font-bold text-lg leading-snug mb-1">
          {item.title}
        </h3>
        <p className="text-gold-600 font-semibold text-sm mb-1">
          {item.issuedBy}
        </p>
        {item.subtext && (
          <p className="text-gray-400 text-xs mb-2">{item.subtext}</p>
        )}

        <div className="mt-3 pt-4 border-t border-gray-100 text-gray-600 text-sm leading-relaxed flex-1">
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default function AccreditationsPage() {
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
            <span className="text-gold-400">Accreditations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Accreditations
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Police Dog Centre India is formally recognised and accredited by
            leading national and international bodies — validating our standards
            in K9 training, breeding, canine forensics education, and global
            detector dog evaluation.
          </p>
        </div>
      </section>



      {/* Accreditations — Two-Column Layout */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section intro */}
          <div className="text-center mb-16">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Accreditations &amp; Collaborations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Recognised Nationally &amp; Internationally
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              Formally evaluated and recognised by India&apos;s premier governing bodies
              and global K9 institutions — validating every dimension of PDCI&apos;s work.
            </p>
          </div>

          {/* Two-column split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 relative">

            {/* Vertical divider (desktop only) */}
            <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-gray-200 -translate-x-1/2" />

            {/* ── National Column ── */}
            <div className="lg:pr-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="flex-shrink-0 w-8 h-px bg-gold-500" />
                <div>
                  <p className="text-gold-500 font-semibold text-xs tracking-widest uppercase">
                    National
                  </p>
                  <h3 className="text-xl font-bold text-navy-900 mt-0.5">
                    National Accreditations
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                {nationalAccreditations.map((item) => (
                  <AccreditationCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* ── International Column ── */}
            <div className="lg:pl-12 pt-10 lg:pt-0 border-t border-gray-200 lg:border-t-0">
              <div className="flex items-center gap-3 mb-8">
                <span className="flex-shrink-0 w-8 h-px bg-gold-500" />
                <div>
                  <p className="text-gold-500 font-semibold text-xs tracking-widest uppercase">
                    International
                  </p>
                  <h3 className="text-xl font-bold text-navy-900 mt-0.5">
                    International Accreditations &amp; Collaborations
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                {internationalAccreditations.map((item) => (
                  <AccreditationCard key={item.id} item={item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
            Why It Matters
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
            The Mark of Verified Excellence
          </h2>
          <p className="text-gray-300 leading-relaxed text-base max-w-3xl mx-auto">
            These accreditations are not self-declared — they are the result of
            formal evaluations by independent, nationally and internationally
            recognised governing bodies. For police forces, law enforcement
            agencies, and government procurement offices, they serve as
            verifiable proof that Police Dog Centre India meets the highest
            standards of quality, ethics, and professional competence in every
            aspect of K9 training, breeding, and education.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {[
              {
                label: "Govt. Procurement",
                text: "QCI/GeM accreditation enables direct procurement by central and state government bodies.",
              },
              {
                label: "Ethical Breeding",
                text: "KCI registration guarantees adherence to India's highest standards for working dog breeding.",
              },
              {
                label: "Academic Rigour",
                text: "NFSU collaboration places PDCI at the forefront of canine forensics education in India.",
              },
              {
                label: "Global K9 Standards",
                text: "ICODD membership aligns PDCI's evaluation and training methods with the world's top detector dog standards.",
              },
              {
                label: "International Research",
                text: "FIU collaboration opens pathways for Master's and PhD programmes in Canine Forensics at a US university.",
              },
            ].map((point) => (
              <div
                key={point.label}
                className="bg-navy-800 rounded-xl p-6 border border-navy-700"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                  <span className="text-gold-400 font-semibold text-xs">
                    {point.label}
                  </span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-3">
            Want to verify our credentials?
          </h3>
          <p className="text-gray-500 text-sm mb-7">
            Reach out to us directly and we will share the relevant accreditation
            certificates and documentation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-navy-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, BookOpen, Globe, Users } from "lucide-react";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

const TITLE = "Accreditations";
const DESCRIPTION =
  "Police Dog Centre India holds accreditations from QCI (GeM), KCI, NFSU, ICODD (USA), and Florida International University (FIU), Miami  -  nationally and internationally recognised.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/accreditations",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/accreditations",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
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
      "NFSU, in collaboration with Police Dog Centre India, has launched the Professional Diploma in Canine Forensics (DCF)  -  India's first-of-its-kind academic programme in K9 science and forensic deployment. Col. (Dr.) P.K. Chug serves as Chief Mentor, Canine Forensics at NFSU. With six successful batches since July 2023 and nearly 150 forensic/police K9 experts trained, this initiative is backed by both BPR&D and the Ministry of Home Affairs. NFSU is the world's first and only forensic sciences university, established by an Act of Parliament and recognised as an Institution of National Importance.",
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
      "Police Dog Centre India is an ISO 9001:2015 Company and an Indian Startup and MSME, accredited by the Quality Council of India (QCI) for the Government e-Marketplace (GeM)  -  a Government of India initiative that certifies organisations meeting the highest standards of quality and credibility for procurement by central and state government agencies.",
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
      "Police Dog Centre India is a registered dog breeding institution with the Kennel Club of India (KCI)  -  the apex body governing purebred dog registration, breeding standards, and canine sports in India. This registration affirms PDCI's commitment to ethical, standards-compliant breeding practices for working and service K9s.",
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
      "Col. (Dr.) P.K. Chug, CMD of Police Dog Centre India, serves as an Advisory Board Member and Assessor of the International Commission on Detector Dogs (ICODD), USA  -  the globally recognised body for evaluation, standardisation, and certification of detector dog teams. This distinction positions PDCI's leadership and training standards at the highest level of international K9 credentialing.",
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
      "Police Dog Centre India, through its collaboration with NFSU, is a collaborating partner with the Global Forensic and Justice Centre (GFJC) at Florida International University (FIU), Miami, USA  -  for international benchmarking and academic exchange in the field of Canine Forensics. Outstanding students from the DCF programme and qualified professionals from police and law enforcement organisations may pursue Master's and Ph.D. programmes including semesters at FIU's GFJC campus in the USA.",
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
    <div
      className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(201,164,90,0.18)",
        borderRadius: "2px",
      }}
    >
      {/* Logo area */}
      <div
        className="h-44 flex flex-col items-center justify-center gap-3 px-6"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #112240 100%)",
          borderBottom: "3px solid #c9a45a",
        }}
      >
        <div className="relative h-24 w-40">
          <Image
            src={item.logo}
            alt={`${item.issuedBy} logo`}
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>
        <span
          className="font-semibold uppercase text-center"
          style={{ color: "#c9a45a", fontSize: "0.65rem", letterSpacing: "0.18em" }}
        >
          {item.category}
        </span>
      </div>

      {/* Card body */}
      <div className="p-7 flex flex-col flex-1">
        {/* Highlight badge */}
        <span
          className="inline-block w-fit font-bold uppercase mb-4"
          style={{
            background: "rgba(201,164,90,0.1)",
            color: "#9f7b35",
            border: "1px solid rgba(201,164,90,0.3)",
            borderRadius: "2px",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            padding: "0.25rem 0.75rem",
          }}
        >
          {item.highlight}
        </span>

        <h3
          className="font-bold text-lg mb-1"
          style={{ fontFamily: "Georgia, serif", color: "#0a1628", lineHeight: 1.3 }}
        >
          {item.title}
        </h3>
        <p className="font-semibold text-sm mb-1" style={{ color: "#c9a45a" }}>
          {item.issuedBy}
        </p>
        {item.subtext && (
          <p className="text-xs mb-2" style={{ color: "#94a3b8" }}>
            {item.subtext}
          </p>
        )}

        <div
          className="mt-3 pt-4 text-sm leading-relaxed flex-1"
          style={{
            borderTop: "1px solid rgba(201,164,90,0.15)",
            color: "#4b5563",
          }}
        >
          {item.description}
        </div>
      </div>
    </div>
  );
}

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Accreditations", path: "/accreditations" },
]);

export default function AccreditationsPage() {
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbs)} />
      {/* ── Page Header ── */}
      <section className="py-8" style={{ background: "#f9f6f1", borderBottom: "2px solid #c9a45a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link
              href="/"
              className="transition-colors hover:text-[#c9a45a]"
              style={{ color: "#64748b" }}
            >
              Home
            </Link>
            <span style={{ color: "#c9a45a" }}>/</span>
            <span style={{ color: "#c9a45a" }}>Accreditations</span>
          </div>

          {/* Eyebrow */}
          <p
            className="font-semibold uppercase mb-4"
            style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}
          >
            Our Credentials
          </p>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 max-w-3xl"
            style={{ fontFamily: "Georgia, serif", color: "#0a1628", lineHeight: 1.15 }}
          >
            Accreditations &amp;{" "}
            <span style={{ color: "#c9a45a" }}>Recognition</span>
          </h1>

          {/* Description */}
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#64748b" }}>
            Police Dog Centre India is formally recognised and accredited by
            leading national and international bodies  -  validating our standards
            in K9 training, breeding, canine forensics education, and global
            detector dog evaluation.
          </p>
        </div>
      </section>

      {/* ── Accreditations Grid ── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-16">
            <p
              className="font-semibold uppercase mb-3"
              style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}
            >
              Accreditations &amp; Collaborations
            </p>
            <div
              className="mx-auto mb-5"
              style={{
                width: "40px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #c9a45a, transparent)",
              }}
            />
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", color: "#0a1628", lineHeight: 1.2 }}
            >
              Recognised Nationally &amp; Internationally
            </h2>
            <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "#64748b" }}>
              Formally evaluated and recognised by India&apos;s premier governing bodies
              and global K9 institutions  -  validating every dimension of PDCI&apos;s work.
            </p>
          </div>

          {/* Two-column split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 relative">

            {/* Vertical divider (desktop only) */}
            <div
              className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2"
              style={{
                width: "1px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(201,164,90,0.4) 20%, rgba(201,164,90,0.4) 80%, transparent)",
              }}
            />

            {/* ── National Column ── */}
            <div className="lg:pr-14">
              <div className="flex items-center gap-4 mb-10">
                <div
                  style={{
                    width: "3px",
                    height: "44px",
                    background: "linear-gradient(to bottom, #c9a45a, rgba(201,164,90,0.25))",
                    borderRadius: "2px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    className="font-semibold uppercase mb-0.5"
                    style={{ color: "#c9a45a", fontSize: "0.65rem", letterSpacing: "0.2em" }}
                  >
                    National
                  </p>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
                  >
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
            <div
              className="lg:pl-14 pt-10 lg:pt-0 border-t lg:border-t-0"
              style={{ borderColor: "rgba(201,164,90,0.2)" }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div
                  style={{
                    width: "3px",
                    height: "44px",
                    background: "linear-gradient(to bottom, #c9a45a, rgba(201,164,90,0.25))",
                    borderRadius: "2px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    className="font-semibold uppercase mb-0.5"
                    style={{ color: "#c9a45a", fontSize: "0.65rem", letterSpacing: "0.2em" }}
                  >
                    International
                  </p>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
                  >
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

      {/* ── Why It Matters ── */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #091525 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="font-semibold uppercase mb-3"
              style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}
            >
              Why It Matters
            </p>
            <div
              className="mx-auto mb-5"
              style={{
                width: "40px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #c9a45a, transparent)",
              }}
            />
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ fontFamily: "Georgia, serif", color: "#ffffff", lineHeight: 1.2 }}
            >
              The Mark of{" "}
              <span style={{ color: "#c9a45a" }}>Verified Excellence</span>
            </h2>
            <p
              className="max-w-3xl mx-auto text-base leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              These accreditations are not self-declared  -  they are the result of
              formal evaluations by independent, nationally and internationally
              recognised governing bodies. For police forces, law enforcement
              agencies, and government procurement offices, they serve as
              verifiable proof that Police Dog Centre India meets the highest
              standards of quality, ethics, and professional competence in every
              aspect of K9 training, breeding, and education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,164,90,0.18)",
                  borderTop: "3px solid #c9a45a",
                  borderRadius: "2px",
                  padding: "1.5rem",
                }}
              >
                <span
                  className="font-bold uppercase block mb-3"
                  style={{ color: "#c9a45a", fontSize: "0.65rem", letterSpacing: "0.15em" }}
                >
                  {point.label}
                </span>
                <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #091525 0%, #0a1628 50%, #112240 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="font-semibold uppercase mb-4"
            style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}
          >
            Get In Touch
          </p>
          <h3
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#ffffff" }}
          >
            Want to verify our credentials?
          </h3>
          <p className="text-sm mb-8" style={{ color: "#94a3b8" }}>
            Reach out to us directly and we will share the relevant accreditation
            certificates and documentation.
          </p>
          <Link
            href="/contact"
            className="inline-block uppercase font-bold hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(135deg, #c9a45a, #d4b06a)",
              color: "#0a1628",
              padding: "0.875rem 2.5rem",
              letterSpacing: "0.08em",
              fontSize: "0.8rem",
              borderRadius: "2px",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}


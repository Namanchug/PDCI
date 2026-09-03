import { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Shield,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  IndianRupee,
  ExternalLink,
  ChevronRight,
  Microscope,
  Target,
  Cpu,
} from "lucide-react";
import { breadcrumbJsonLd, jsonLdScriptProps, SITE_URL } from "@/lib/seo";

const TITLE = "Forensic K9 & Education";
const DESCRIPTION =
  "India's pioneering Professional Diploma in Canine Forensics (PDCF)  -  a 6-month hybrid university program by NFSU in collaboration with Police Dog Centre India, bridging K9 training with forensic science and judicial admissibility.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/forensic-k9-education",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/forensic-k9-education",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Forensic K9 & Education", path: "/forensic-k9-education" },
]);

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Professional Diploma in Canine Forensics (PDCF)",
  description:
    "A 6-month hybrid university programme by NFSU in collaboration with Police Dog Centre India, bridging K9 training with forensic science and judicial admissibility.",
  provider: {
    "@type": "CollegeOrUniversity",
    name: "National Forensic Sciences University (NFSU)",
    sameAs: "https://www.nfsu.ac.in/",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Blended",
    courseWorkload: "P6M",
  },
  url: `${SITE_URL}/forensic-k9-education`,
};

const subjects = [
  "Fundamentals of Police Service K9s",
  "Suitability of Different Dog Breeds including Indigenous Breeds",
  "Canine Behaviour & Personality among Police Service K9s",
  "Modern Techniques in Police & Military Dog Training",
  "Canine Forensic Odorology & Scent Management",
  "Specialized Detection: Explosives, Narcotics, Arson, Cadaver, Medical Alert",
  "Emerging Technologies & K9 Augmentation (RASCO, Vapour Wake Detection)",
  "Veterinary Care & First Aid for Working Dogs",
  "Forensic Science Principles in K9 Deployment",
  "Legal Frameworks: Explosives, NDPS & Crime Scene Law",
  "Crime Scene Management & K9 Integration",
  "Research Project on a Topic of Practical Importance",
];

const practicalExposure = [
  "Individual Puppy assigned to each participant for obedience & agility handling",
  "Scent imprinting and simulated explosives / narcotics detection scenarios",
  "Preparation of Tracking-Trailing and Patrol Dogs",
  "Escorted visits to NSG, Air Force, SSB, Delhi Police & premier K9 facilities",
  "Exposure to international accreditation norms and SOPs",
  "Interaction with veteran trainers and forensic science experts",
];

const specialForceModules = [
  {
    icon: Shield,
    title: "Patrol & Assault Dog Preparation",
    description:
      "Modern, science-based methodologies producing dogs with superior initiative, courage, controlled aggression, and reliable off-leash obedience  -  essential for building clearance, area denial, and suspect apprehension.",
  },
  {
    icon: Target,
    title: "Dual Purpose K9s (Patrol + Detection)",
    description:
      "Training protocols for dogs that combine patrol and apprehension with detection capability  -  IED clearance, narcotics, and personnel tracking in a single asset without requiring two dogs.",
  },
  {
    icon: Microscope,
    title: "Advanced Canine Behaviour Science",
    description:
      "Cognitive reinforcement, imprinting, and handler-independent odour obedience. Benchmarked against global K9 standards from NSG, Air Force, SSB, and FIU collaboration.",
  },
  {
    icon: Cpu,
    title: "K9 Augmentation Technologies",
    description:
      "RASCO (Remote Animal-Sensor Communication), Canine Remote Delivery System (CRDS), Laser-Directed Deployments, and Vapour Wake Detection for VUCA environments.",
  },
  {
    icon: Zap,
    title: "Dogs & Drones: Integrated Operations",
    description:
      "Combining K9 olfactory capability with UAV aerial surveillance for border infiltration detection, jungle and urban sweeps, and pre-assault route clearance.",
  },
  {
    icon: Globe,
    title: "High-Value Sensitive Interventions",
    description:
      "Forensic science principles and legal frameworks applied to counter-terrorism, hostage rescue, dignitary protection, and evidence-preservation missions across diverse terrain.",
  },
];

const outcomes = [
  "University certification from an Institution of National Importance (INI)",
  "Training in modern, evidence-based dog training techniques",
  "Expertise in emerging K9 augmentation technologies",
  "Alignment with judicial admissibility & international K9 standards",
  "Pathway to Master's & PhD programs in Canine Forensics",
  "Opportunity for academic exchange at Florida International University, USA",
  "Enhanced operational performance and leadership in K9 roles",
  "Eligibility to serve as MHA-qualified PSK Assessor for K9 certifications",
];

const batches = [
  { batch: "Batch 1", period: "Aug 2023 – Jan 2024", status: "Completed" },
  { batch: "Batch 2", period: "Feb 2024 – Jul 2024", status: "Completed" },
  { batch: "Batch 3", period: "Aug 2024 – Jan 2025", status: "Completed" },
  { batch: "Batch 4", period: "Feb 2025 – Jul 2025", status: "Completed" },
  { batch: "Batch 5", period: "Aug 2025 – Jan 2026", status: "Completed" },
  { batch: "Batch 6", period: "Feb 2026 – Jul 2026", status: "Completed" },
];

const campuses = [
  { name: "Delhi Campus", url: "https://delhi.nfsu.ac.in/program/prog_details/75?deptid=46" },
  { name: "Dharwad Campus", url: "https://dharwad.nfsu.ac.in/program/prog_details/75?deptid=46" },
  { name: "Pune Campus", url: "https://pune.nfsu.ac.in/program/prog_details/75?deptid=46" },
];

export default function ForensicK9EducationPage() {
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbs)} />
      <script {...jsonLdScriptProps(courseJsonLd)} />
      {/* ── Hero ── */}
      <section className="py-8" style={{ background: "#f9f6f1", borderBottom: "2px solid #c9a45a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="transition-colors hover:text-[#c9a45a]" style={{ color: "#64748b" }}>
              Home
            </Link>
            <ChevronRight className="w-4 h-4" style={{ color: "#c9a45a" }} />
            <span style={{ color: "#c9a45a" }}>Forensic K9 &amp; Education</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5"
              style={{ background: "rgba(201,164,90,0.1)", color: "#9f7b35", border: "1px solid rgba(201,164,90,0.3)", borderRadius: "2px" }}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              World&apos;s First  -  University-Level Canine Forensics Program
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5"
              style={{ background: "rgba(10,22,40,0.05)", color: "#0a1628", border: "1px solid rgba(10,22,40,0.12)", borderRadius: "2px" }}
            >
              <Award className="w-3.5 h-3.5" />
              Institution of National Importance  -  National Forensic Sciences University
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Georgia, serif", color: "#0a1628" }}
          >
            Professional Diploma in
            <span style={{ color: "#c9a45a" }} className="block sm:inline"> Canine Forensics</span>
          </h1>
          <p className="text-base max-w-3xl leading-relaxed" style={{ color: "#64748b" }}>
            A first-of-its-kind academic program by the National Forensic Sciences University
            (NFSU) in collaboration with Police Dog Centre India  -  bridging forensic science,
            canine behaviour, and the operational deployment of working dogs under a structured
            university education framework.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid rgba(201,164,90,0.18)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-between gap-6">
            {[
              { label: "Duration", value: "6 Months" },
              { label: "Format", value: "Hybrid (Online + Hands-On)" },
              { label: "Batches Per Year", value: "2 (Jan & Jul)" },
              { label: "Seats Per Batch", value: "25" },
              { label: "Experts Trained", value: "150+" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <div className="font-extrabold text-2xl" style={{ color: "#c9a45a" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "#64748b" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Program Overview ── */}
      <section style={{ background: "#ffffff" }} className="pt-14 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-8">
            <p className="font-semibold uppercase mb-2" style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}>
              About the Program
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-2 mb-4" style={{ color: "#0a1628", fontFamily: "Georgia, serif" }}>
              Bridging the Gap in India&apos;s K9 Ecosystem
            </h2>
            <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "#64748b" }}>
              Despite global advancements, India&apos;s law enforcement K9 units have historically
              lacked two things: <strong style={{ color: "#0a1628" }}>scientific training standards</strong> and a
              clear path to <strong style={{ color: "#0a1628" }}>judicial admissibility</strong> of K9 evidence.
              The PDCF was designed to fix both.
            </p>
          </div>

          {/* Gap problem cards */}
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden mb-12" style={{ border: "1px solid #1e3a5f", borderRadius: "16px" }}>
            <div className="p-8" style={{ background: "#0a1628", borderRight: "1px solid #1e3a5f" }}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0"
                  style={{ background: "rgba(201,164,90,0.2)", border: "1px solid rgba(201,164,90,0.4)", color: "#c9a45a" }}
                >A</span>
                <h3 className="font-bold text-base" style={{ color: "#ffffff" }}>Outdated Training Practices</h3>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                Many forces in India still rely on punishment-and-pressure methods  -  producing
                dogs that respond to <em>handlers</em> rather than <em>scents</em>.
              </p>
              <div className="px-4 py-3" style={{ background: "#112240", borderRadius: "12px", border: "1px solid #1e3a5f" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#c9a45a" }}>PDCF Solution</p>
                <p className="text-sm" style={{ color: "#cbd5e1" }}>
                  Modern operant conditioning  -  producing <strong style={{ color: "#ffffff" }}>self-driven,
                    odour-obedient</strong> dogs free from handler influence, aligned with international K9 standards.
                </p>
              </div>
            </div>
            <div className="p-8" style={{ background: "#112240" }}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0"
                  style={{ background: "rgba(201,164,90,0.2)", border: "1px solid rgba(201,164,90,0.4)", color: "#c9a45a" }}
                >B</span>
                <h3 className="font-bold text-base" style={{ color: "#ffffff" }}>No Certification or Judicial Admissibility</h3>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                The MHA&apos;s AKLAN SOP mandates annual third-party certification  -  yet periodic
                proficiency assessment is rarely implemented across forces.
              </p>
              <div className="px-4 py-3" style={{ background: "#0a1628", borderRadius: "12px", border: "1px solid #1e3a5f" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#c9a45a" }}>PDCF Solution</p>
                <p className="text-sm" style={{ color: "#cbd5e1" }}>
                  Forensic evaluation protocols and certification frameworks that make
                  K9 testimony <strong style={{ color: "#ffffff" }}>legally credible in courts of law</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative + info cards */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 space-y-5 text-sm leading-relaxed" style={{ color: "#4b5563" }}>
              <p>
                The <strong style={{ color: "#0a1628" }}>Professional Diploma in Canine Forensics (PDCF)</strong>,
                launched at NFSU Delhi Campus, was developed by internationally acclaimed
                military and police K9 expert <strong style={{ color: "#0a1628" }}>Col. (Dr.) P.K. Chug</strong>{" "}
                in collaboration with Police Dog Centre India. The 6-month hybrid program allows working
                professionals to upgrade their skills without career interruption  -  four months
                of online instruction followed by two months of intensive hands-on training,
                including escorted visits to restricted facilities unavailable to the general public.
              </p>
              <p>
                Since its inaugural batch in August 2023, the program has trained nearly{" "}
                <strong style={{ color: "#0a1628" }}>150 Forensic Police K9 Experts</strong> across
                six completed batches, drawing participants from CAPFs, Railway Protection Force,
                and State Police organisations in Rajasthan, Tamil Nadu, Odisha, Telangana, Delhi,
                Andaman &amp; Nicobar, and more.
              </p>
              <div className="pl-5 py-1" style={{ borderLeft: "4px solid #c9a45a" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#9f7b35" }}>Government Endorsement</p>
                <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                  <strong style={{ color: "#0a1628" }}>BPR&amp;D (April 2024)</strong> directed all CAPFs and
                  State Police to nominate 3 K9 personnel per course. The{" "}
                  <strong style={{ color: "#0a1628" }}>Ministry of Home Affairs (March 2026)</strong> subsequently
                  mandated 4–5 nominations per organisation to transform K9 practices across central police
                  and law enforcement agencies.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="p-6" style={{ background: "#0a1628", borderRadius: "16px" }}>
                <p className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: "#c9a45a" }}>About NFSU</p>
                <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                  Established by an Act of Parliament under the Ministry of Home Affairs, NFSU
                  is the <strong style={{ color: "#ffffff" }}>world&apos;s first and only forensic sciences
                    university</strong>  -  an Institution of National Importance, conceptualised by
                  Prime Minister Narendra Modi in 2009, with campuses across India and internationally.
                </p>

                <a
                  href="https://www.nfsu.ac.in/Programs/programinfo/75?deptid=46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-80"
                  style={{ color: "#c9a45a" }}
                >
                  Official NFSU Program Page <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-6" style={{ background: "rgba(201,164,90,0.06)", borderRadius: "16px", border: "1px solid rgba(201,164,90,0.25)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 shrink-0" style={{ color: "#c9a45a" }} />
                  <p className="font-bold text-xs uppercase tracking-wider" style={{ color: "#9f7b35" }}>Global Collaboration</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                  NFSU is partnered with{" "}
                  <strong style={{ color: "#0a1628" }}>Florida International University (FIU), USA</strong>{" "}
                   -  Global Forensic and Justice Center. Top PDCF graduates may pursue{" "}
                  <strong style={{ color: "#0a1628" }}>Master&apos;s and Ph.D. programs</strong> with
                  semesters at FIU, Miami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Course Structure ── */}
      <section className="py-24" style={{ background: "#f9f6f1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-semibold uppercase mb-2" style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}>
              Curriculum
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: "#0a1628", fontFamily: "Georgia, serif" }}>
              Course Structure &amp; Subjects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-8" style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #f1f5f9", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 shrink-0" style={{ background: "#0a1628", borderRadius: "8px" }}>
                  <BookOpen className="w-5 h-5" style={{ color: "#c9a45a" }} />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "#0a1628" }}>Phase 1  -  Online Learning</h3>
                  <p className="text-xs" style={{ color: "#94a3b8" }}>Months 1–4</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                Online lectures, assignments, and presentations by domain experts including
                specialists from foreign countries. Covers all theoretical foundations of
                canine forensics, behaviour science, legal frameworks, and forensic odourology.
                Enables working professionals to upskill without career interruption.
              </p>
            </div>
            <div className="p-8" style={{ background: "#0a1628", borderRadius: "16px" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 shrink-0" style={{ background: "rgba(201,164,90,0.2)", borderRadius: "8px" }}>
                  <Target className="w-5 h-5" style={{ color: "#c9a45a" }} />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "#ffffff" }}>Phase 2  -  Intensive Hands-On Training</h3>
                  <p className="text-xs" style={{ color: "#94a3b8" }}>Months 5–6 · NFSU Delhi Campus</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                Residential practical training at NFSU Delhi Campus. Includes live dog handling,
                scent imprinting, simulated detection scenarios, patrol dog preparation, and
                escorted visits to premier K9 facilities  -  a rare exposure unavailable to the
                general public. Assessed via rigorous formal procedures as per UGC norms.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8" style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #f1f5f9", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <h3 className="font-bold text-lg mb-6" style={{ color: "#0a1628" }}>Subjects Covered</h3>
              <ul className="space-y-3">
                {subjects.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm" style={{ color: "#4b5563" }}>
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9a45a" }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8" style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #f1f5f9", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <h3 className="font-bold text-lg mb-6" style={{ color: "#0a1628" }}>Practical Training Exposure</h3>
              <ul className="space-y-3 mb-8">
                {practicalExposure.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm" style={{ color: "#4b5563" }}>
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9a45a" }} />
                    {s}
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "#0a1628" }}>
                Batch History
              </h4>
              <div className="space-y-2">
                {batches.map((b) => (
                  <div key={b.batch} className="flex items-center justify-between text-sm">
                    <span style={{ color: "#4b5563" }}>{b.batch} · {b.period}</span>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: "#dcfce7", color: "#15803d" }}
                    >
                      {b.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Special Forces Suitability ── */}
      <section className="py-20" style={{ background: "#0a1628" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-semibold text-sm tracking-widest uppercase mb-2" style={{ color: "#c9a45a" }}>
              Strategic Value
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: "#ffffff", fontFamily: "Georgia, serif" }}>
              Special Forces &amp; Paramilitary Relevance
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              While primarily structured for law enforcement K9 teams, the PDCF curriculum
              directly addresses the specialised requirements of elite military and paramilitary
              units operating in high-stakes, dynamic environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialForceModules.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="p-6 transition-all"
                  style={{ background: "#112240", borderRadius: "16px", border: "1px solid #1e3a5f" }}
                >
                  <div className="p-2 w-fit mb-4" style={{ background: "rgba(201,164,90,0.2)", borderRadius: "8px" }}>
                    <Icon className="w-5 h-5" style={{ color: "#c9a45a" }} />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#ffffff" }}>{m.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{m.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6" style={{ background: "#112240", borderRadius: "16px", border: "1px solid #1e3a5f" }}>
            <p className="font-bold text-xs uppercase tracking-wider mb-4 text-center" style={{ color: "#c9a45a" }}>
              Special Forces K9 Capability Matrix  -  PDCF Program Coverage
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Patrol / Assault Dogs",
                "Dual Purpose K9s",
                "Advanced Training Concepts",
                "K9 Augmentation Tech",
                "Dogs–Drone Integration",
                "Sensitive Interventions",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-4 py-2 rounded-full"
                  style={{ background: "#0a1628", color: "#cbd5e1", border: "1px solid #1e3a5f" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Eligibility & Schedule & Fee ── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-semibold uppercase mb-2" style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}>
              Admissions
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: "#0a1628", fontFamily: "Georgia, serif" }}>
              Eligibility, Schedule &amp; Fees
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Eligibility */}
            <div className="p-8" style={{ background: "#f9f6f1", borderRadius: "16px", border: "1px solid #f1f5f9" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2" style={{ background: "#0a1628", borderRadius: "8px" }}>
                  <Users className="w-5 h-5" style={{ color: "#c9a45a" }} />
                </div>
                <h3 className="font-bold" style={{ color: "#0a1628" }}>Eligibility Criteria</h3>
              </div>
              <ul className="space-y-3 text-sm" style={{ color: "#4b5563" }}>
                {[
                  "Graduation in any discipline (minimum 50% marks)",
                  "OR Diploma in Police Dog Handling / Training",
                  "OR 10+2 with 3+ years of dog handling experience",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9a45a" }} />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-4" style={{ color: "#94a3b8" }}>Reservations as per Government of India norms.</p>
              <h4 className="font-bold text-xs uppercase tracking-wider mt-6 mb-3" style={{ color: "#0a1628" }}>
                Target Audience
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: "#4b5563" }}>
                {[
                  "Police dog handlers, trainers & mid-level officers",
                  "Defence & paramilitary K9 personnel",
                  "Graduates & civilians passionate about K9 science",
                  "NGOs and private sector working in security",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9a45a" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div className="p-8" style={{ background: "#f9f6f1", borderRadius: "16px", border: "1px solid #f1f5f9" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2" style={{ background: "#0a1628", borderRadius: "8px" }}>
                  <Calendar className="w-5 h-5" style={{ color: "#c9a45a" }} />
                </div>
                <h3 className="font-bold" style={{ color: "#0a1628" }}>Course Schedule</h3>
              </div>
              <div className="space-y-4 text-sm">
                {[
                  { session: "January Session", admissions: "Admissions: Nov – Dec", runs: "Course runs Jan – Jun" },
                  { session: "July Session", admissions: "Admissions: May – Jun", runs: "Course runs Jul – Jan" },
                ].map((s) => (
                  <div key={s.session} className="p-4" style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #f1f5f9" }}>
                    <p className="font-bold text-xs mb-1" style={{ color: "#9f7b35" }}>{s.session}</p>
                    <p className="font-semibold" style={{ color: "#0a1628" }}>{s.admissions}</p>
                    <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>{s.runs}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm flex items-center gap-2" style={{ color: "#64748b" }}>
                <Clock className="w-4 h-4 shrink-0" style={{ color: "#c9a45a" }} />
                Seats limited to <strong style={{ color: "#0a1628" }}>25 per batch</strong>, filled on merit basis.
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider mt-6 mb-3" style={{ color: "#0a1628" }}>
                Available Campuses
              </h4>
              <div className="space-y-2">
                {campuses.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors hover:opacity-70"
                    style={{ color: "#0a1628" }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" style={{ color: "#c9a45a" }} />
                    {c.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="https://admission.nfsu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 w-full justify-center transition-opacity hover:opacity-80"
                  style={{ background: "#0a1628", color: "#ffffff", borderRadius: "8px" }}
                >
                  Apply via NFSU Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Fees */}
            <div className="p-8" style={{ background: "#f9f6f1", borderRadius: "16px", border: "1px solid #f1f5f9" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2" style={{ background: "#0a1628", borderRadius: "8px" }}>
                  <IndianRupee className="w-5 h-5" style={{ color: "#c9a45a" }} />
                </div>
                <h3 className="font-bold" style={{ color: "#0a1628" }}>Course Fees</h3>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Tuition Fee", amount: "₹35,000/-" },
                  { label: "Misc. Fees (Exam, Library, Alumni)", amount: "₹5,000/-" },
                  { label: "Refundable Caution Deposit", amount: "₹7,500/-" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center justify-between px-4 py-3"
                    style={{ background: "#ffffff", borderRadius: "8px", border: "1px solid #f1f5f9" }}
                  >
                    <span style={{ color: "#4b5563" }}>{f.label}</span>
                    <span className="font-semibold" style={{ color: "#0a1628" }}>{f.amount}</span>
                  </div>
                ))}
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{ background: "#0a1628", borderRadius: "8px" }}
                >
                  <span className="font-bold" style={{ color: "#ffffff" }}>Total</span>
                  <span className="font-extrabold text-lg" style={{ color: "#c9a45a" }}>₹47,500/-</span>
                </div>
              </div>
              <div className="mt-5 p-4" style={{ background: "rgba(201,164,90,0.08)", borderRadius: "12px", border: "1px solid rgba(201,164,90,0.2)" }}>
                <p className="font-bold text-xs mb-1" style={{ color: "#9f7b35" }}>Bank Details</p>
                <p className="text-xs leading-relaxed" style={{ color: "#374151" }}>
                  Fee Collection NFSU Delhi Campus<br />
                  Punjab National Bank<br />
                  A/C No: 0944100100008485<br />
                  IFSC: PUNB0094410
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional Outcomes ── */}
      <section className="py-24" style={{ background: "#f9f6f1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-semibold text-sm tracking-widest uppercase mb-2" style={{ color: "#c9a45a" }}>
                What You Gain
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-2 mb-8" style={{ color: "#0a1628", fontFamily: "Georgia, serif" }}>
                Professional Outcomes
              </h2>
              <ul className="space-y-4">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <div className="rounded-full p-1 mt-0.5 shrink-0" style={{ background: "#0a1628" }}>
                      <CheckCircle className="w-3.5 h-3.5" style={{ color: "#c9a45a" }} />
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col. Chug */}
            <div className="p-8" style={{ background: "#0a1628", borderRadius: "16px" }}>
              <p className="font-bold text-xs uppercase tracking-wider mb-5" style={{ color: "#c9a45a" }}>
                Chief Mentor  -  Canine Forensics, NFSU
              </p>
              <h3 className="font-extrabold text-xl mb-1" style={{ color: "#ffffff" }}>
                Col. (Dr.) P.K. Chug (Retd)
              </h3>
              <p className="text-xs mb-4" style={{ color: "#94a3b8" }}>
                BVSc &amp; AH, MVSc, MBA, PhD · Fellow NAVS · Fellow IAAVR<br />
                Advisory Board Member, International Commission on Detector Dogs (ICODD)
              </p>
              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                <p>
                  India's foremost military and police K9 trainer  -  an Army Veteran with over{" "}
                  <strong style={{ color: "#ffffff" }}>30 years of operational experience</strong>,
                  having commanded Specialised Dog Units across six terms, including with the
                  Indian Special Forces and twice with the Elite NSG Black Cats.
                </p>
                <p>
                  Founder Head of the <strong style={{ color: "#ffffff" }}>MHA Police K9 Cell</strong>,
                  Founding Editor of the <strong style={{ color: "#ffffff" }}>National Police K9 Journal</strong>,
                  and pioneer of the <strong style={{ color: "#ffffff" }}>K9 Vision System (KVS)</strong>,
                  Canine Remote Delivery System (CRDS), and the integration of Dogs with Drones.
                </p>
                <p>
                  Honours include COAS Commendation (three times), Army Commander&apos;s
                  Commendation, UN Force Commander Commendation, and a Citation by the US
                  Department of Defense for the USNS Mercy Mission.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Fellow NAVS", "Fellow IAAVR", "ICODD Advisory Board", "MHA K9 Cell Founder"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: "#112240", color: "#cbd5e1", border: "1px solid #1e3a5f" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Police Dog Centre India Partnership ── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-semibold uppercase mb-2" style={{ color: "#c9a45a", fontSize: "0.7rem", letterSpacing: "0.25em" }}>
              Collaborating Partner
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: "#0a1628", fontFamily: "Georgia, serif" }}>
              Police Dog Centre India
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, title: "Academic Collaboration", desc: "Collaborating partner with NFSU and Florida International University (FIU) Miami, USA, for the Professional Diploma in Canine Forensics." },
              { icon: Award, title: "ISO 9001:2015 Certified", desc: "An ISO-certified, Indian Startup and MSME company accredited by QCI and GeM. Professional K9 security solutions to police and law enforcement." },
              { icon: Shield, title: "The 4D Doctrine", desc: "All training is designed to prepare 4D K9s  -  Deter, Detect, Defend, and Dominate  -  replacing coercive methods with modern operant conditioning." },
              { icon: BookOpen, title: "Training of Trainers", desc: "Conducts large-scale Police K9 Workshops and Training of Trainer (ToT) courses for CAPFs and State Police organisations across India." },
              { icon: Star, title: "National Register for Working Dogs", desc: "Pioneered the ground-breaking National Register for Working Dogs (NRWD) and K9 Behavioural Assessment (K9 BAT) model for police dog selection." },
              { icon: Globe, title: "International Speaker", desc: "Col. (Dr.) P.K. Chug is an internationally recognised speaker and author, representing India's K9 capabilities on the global stage." },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="p-6 transition-all"
                  style={{ background: "#f9f6f1", borderRadius: "16px", border: "1px solid #f1f5f9" }}
                >
                  <div className="p-2 w-fit mb-4" style={{ background: "#0a1628", borderRadius: "8px" }}>
                    <Icon className="w-5 h-5" style={{ color: "#c9a45a" }} />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0a1628" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact / Apply ── */}
      <section className="py-24" style={{ background: "#f9f6f1" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-7 items-start">
            <div>
              <p className="font-semibold text-sm tracking-widest uppercase mb-2" style={{ color: "#c9a45a" }}>
                Get In Touch
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mt-2 mb-8" style={{ color: "#0a1628", fontFamily: "Georgia, serif" }}>
                How to Apply &amp; Contact
              </h2>
              <div className="p-8 space-y-5" style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #f1f5f9", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <div className="flex items-start gap-4">
                  <div className="p-2 shrink-0 mt-0.5" style={{ background: "#0a1628", borderRadius: "8px" }}>
                    <Users className="w-4 h-4" style={{ color: "#c9a45a" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0a1628" }}>Police Dog Centre India</p>
                    <p className="text-xs" style={{ color: "#94a3b8" }}>National Centre for K9 Security, Detection, and Training</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 shrink-0" style={{ background: "#0a1628", borderRadius: "8px" }}>
                    <Phone className="w-4 h-4" style={{ color: "#c9a45a" }} />
                  </div>
                  <a href="tel:+918287793696" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: "#0a1628" }}>
                    +91 8287793696
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 shrink-0" style={{ background: "#0a1628", borderRadius: "8px" }}>
                    <Mail className="w-4 h-4" style={{ color: "#c9a45a" }} />
                  </div>
                  <a href="mailto:policedogcentreindia@gmail.com" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: "#0a1628" }}>
                    policedogcentreindia@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 shrink-0 mt-0.5" style={{ background: "#0a1628", borderRadius: "8px" }}>
                    <MapPin className="w-4 h-4" style={{ color: "#c9a45a" }} />
                  </div>
                  <div className="text-sm" style={{ color: "#4b5563" }}>
                    <p>Training Facilities: Sainik Farma, GXMH+3FQ, Badusarai, New Delhi, Delhi, 110071</p>
                    <p className="mt-1">Head Office: E-601, Jagran CGHS, Plot-17, Dwarka Sector-22, New Delhi, 110077</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="p-8 mb-6" style={{ background: "#0a1628", borderRadius: "16px" }}>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#ffffff" }}>Register for the Program</h3>
                <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
                  Applications are accepted twice a year. Seats are limited and filled on merit.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://admission.nfsu.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between font-bold text-sm px-6 py-4 transition-opacity hover:opacity-90"
                    style={{ background: "#c9a45a", color: "#0a1628", borderRadius: "12px" }}
                  >
                    Apply via NFSU Admission Portal
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://forms.gle/PS4q5RVdYnDV2HHw6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between font-bold text-sm px-6 py-4 transition-opacity hover:opacity-80"
                    style={{ background: "#112240", color: "#ffffff", borderRadius: "12px", border: "1px solid #1e3a5f" }}
                  >
                    Google Pre-Registration Form
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.nfsu.ac.in/Programs/programinfo/75?deptid=46"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between font-semibold text-sm px-6 py-4 transition-opacity hover:opacity-80"
                    style={{ background: "#112240", color: "#94a3b8", borderRadius: "12px", border: "1px solid #1e3a5f" }}
                  >
                    View Official NFSU Program Page
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-6" style={{ background: "rgba(201,164,90,0.08)", borderRadius: "16px", border: "1px solid rgba(201,164,90,0.2)" }}>
                <p className="font-bold text-xs uppercase tracking-wider mb-2" style={{ color: "#9f7b35" }}>
                  For Law Enforcement Organisations
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                  CAPFs and State Police organisations are encouraged to nominate{" "}
                  <strong>4–5 K9 personnel</strong> per batch as directed by the Ministry of Home
                  Affairs (March 2026). Contact Police Dog Centre India for bulk nominations and
                  organisational coordination.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold transition-colors hover:opacity-70"
                  style={{ color: "#0a1628" }}
                >
                  Contact Police Dog Centre India
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ background: "#c9a45a" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "#0a1628", fontFamily: "Georgia, serif" }}
          >
            Advance India&apos;s Forensic K9 Capabilities
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(10,22,40,0.75)" }}>
            Join India&apos;s pioneering forensic K9 education program  -  and help transform
            police dog training from coercion to science-based excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://admission.nfsu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 transition-opacity hover:opacity-90"
              style={{ background: "#0a1628", color: "#ffffff", borderRadius: "4px" }}
            >
              Apply to NFSU Program
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 transition-opacity hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.2)", color: "#0a1628", borderRadius: "4px", border: "2px solid rgba(10,22,40,0.2)" }}
            >
              Contact Police Dog Centre India
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

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

export const metadata: Metadata = {
  title: "Forensic K9 & Education | Police Dog Centre India",
  description:
    "India's pioneering Professional Diploma in Canine Forensics (PDCF) — a 6-month hybrid university program by NFSU in collaboration with Police Dog Centre India, bridging K9 training with forensic science and judicial admissibility.",
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
      "Modern, science-based methodologies producing dogs with superior initiative, courage, controlled aggression, and reliable off-leash obedience — essential for building clearance, area denial, and suspect apprehension.",
  },
  {
    icon: Target,
    title: "Dual Purpose K9s (Patrol + Detection)",
    description:
      "Training protocols for dogs that combine patrol and apprehension with detection capability — IED clearance, narcotics, and personnel tracking in a single asset without requiring two dogs.",
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
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-6 relative overflow-hidden">
        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,164,90,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,164,90,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold-400">Forensic K9 &amp; Education</span>
          </div>

          {/* Badge row */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-gold-500/30">
              <GraduationCap className="w-3.5 h-3.5" />
              World&apos;s First — University-Level Canine Forensics Program
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
              <Award className="w-3.5 h-3.5" />
              Institution of National Importance — National Forensic Sciences University
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Professional Diploma in
            <span className="text-gold-400 block sm:inline"> Canine Forensics</span>
          </h1>
          <p className="text-gray-300 text-base max-w-3xl leading-relaxed mb-8">
            A first-of-its-kind academic program by the National Forensic Sciences University
            (NFSU) in collaboration with Police Dog Centre India — bridging forensic science,
            canine behaviour, and the operational deployment of working dogs under a structured
            university education framework.
          </p>

          {/* Quick-stat strip */}
          <div className="flex flex-wrap gap-8 mt-4">
            {[
              { label: "Duration", value: "6 Months" },
              { label: "Format", value: "Hybrid (Online + Hands-On)" },
              { label: "Batches Per Year", value: "2 (Jan & Jul)" },
              { label: "Seats Per Batch", value: "25" },
              { label: "Experts Trained", value: "150+" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-gold-400 font-extrabold text-2xl">{s.value}</div>
                <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Overview ─────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-8">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              About the Program
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 mt-2 mb-4">
              Bridging the Gap in India&apos;s K9 Ecosystem
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              Despite global advancements, India&apos;s law enforcement K9 units have historically
              lacked two things: <strong className="text-navy-900">scientific training standards</strong> and a
              clear path to <strong className="text-navy-900">judicial admissibility</strong> of K9
              evidence. The PDCF was designed to fix both.
            </p>
          </div>

          {/* Two gap problem cards — full width dark banner */}
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-navy-700 mb-12">
            <div className="bg-navy-900 p-8 md:border-r border-navy-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 font-extrabold text-sm shrink-0">A</span>
                <h3 className="text-white font-bold text-base">Outdated Training Practices</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Many forces in India still rely on punishment-and-pressure methods — producing
                dogs that respond to <em>handlers</em> rather than <em>scents</em>.
              </p>
              <div className="bg-navy-800 rounded-xl px-4 py-3 border border-navy-600">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">PDCF Solution</p>
                <p className="text-gray-300 text-sm">
                  Modern operant conditioning — producing <strong className="text-white">self-driven,
                    odour-obedient</strong> dogs free from handler influence, aligned with international K9 standards.
                </p>
              </div>
            </div>
            <div className="bg-navy-800 p-8 md:border-t-0 border-t border-navy-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 font-extrabold text-sm shrink-0">B</span>
                <h3 className="text-white font-bold text-base">No Certification or Judicial Admissibility</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                The MHA&apos;s AKLAN SOP mandates annual third-party certification — yet periodic
                proficiency assessment is rarely implemented across forces.
              </p>
              <div className="bg-navy-900 rounded-xl px-4 py-3 border border-navy-700">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">PDCF Solution</p>
                <p className="text-gray-300 text-sm">
                  Forensic evaluation protocols and certification frameworks that make
                  K9 testimony <strong className="text-white">legally credible in courts of law</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative + two info cards */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Narrative — 3 cols */}
            <div className="lg:col-span-3 space-y-5 text-gray-600 leading-relaxed text-sm">
              <p>
                The <strong className="text-navy-900">Professional Diploma in Canine Forensics (PDCF)</strong>,
                launched at NFSU Delhi Campus, was developed by internationally acclaimed
                military and police K9 expert <strong className="text-navy-900">Col. (Dr.) P.K. Chug</strong>{" "}
                in collaboration with PDC India. The 6-month hybrid program allows working
                professionals to upgrade their skills without career interruption — four months
                of online instruction followed by two months of intensive hands-on training,
                including escorted visits to restricted facilities unavailable to the general public.
              </p>
              <p>
                Since its inaugural batch in August 2023, the program has trained nearly{" "}
                <strong className="text-navy-900">150 Forensic Police K9 Experts</strong> across
                six completed batches, drawing participants from CAPFs, Railway Protection Force,
                and State Police organisations in Rajasthan, Tamil Nadu, Odisha, Telangana, Delhi,
                Andaman &amp; Nicobar, and more.
              </p>

              {/* Government endorsement ribbon */}
              <div className="border-l-4 border-gold-500 pl-5 py-1">
                <p className="text-gold-600 font-bold text-xs uppercase tracking-wider mb-2">Government Endorsement</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-navy-900">BPR&amp;D (April 2024)</strong> directed all CAPFs and
                  State Police to nominate 3 K9 personnel per course. The{" "}
                  <strong className="text-navy-900">Ministry of Home Affairs (March 2026)</strong> subsequently
                  mandated 4–5 nominations per organisation to transform K9 practices across central police
                  and law enforcement agencies.
                </p>
              </div>
            </div>

            {/* Info cards — 2 cols */}
            <div className="lg:col-span-2 space-y-4">

              {/* NFSU */}
              <div className="bg-navy-900 rounded-2xl p-6">
                <p className="text-gold-400 font-bold text-xs uppercase tracking-wider mb-3">About NFSU</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Established by an Act of Parliament under the Ministry of Home Affairs, NFSU
                  is the <strong className="text-white">world&apos;s first and only forensic sciences
                    university</strong> — an Institution of National Importance, conceptualised by
                  Prime Minister Narendra Modi in 2009, with campuses across India and internationally.
                </p>
                <a
                  href="https://www.nfsu.ac.in/Programs/programinfo/75?deptid=46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-gold-400 text-xs font-semibold hover:text-gold-300 transition-colors"
                >
                  Official NFSU Program Page <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* FIU */}
              <div className="rounded-2xl border border-gold-500/25 bg-gold-500/8 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-gold-500 shrink-0" />
                  <p className="text-gold-700 font-bold text-xs uppercase tracking-wider">Global Collaboration</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  NFSU is partnered with{" "}
                  <strong className="text-navy-900">Florida International University (FIU), USA</strong>{" "}
                  — Global Forensic and Justice Center. Top PDCF graduates may pursue{" "}
                  <strong className="text-navy-900">Master&apos;s and Ph.D. programs</strong> with
                  semesters at FIU, Miami.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Course Structure ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 mt-2">
              Course Structure &amp; Subjects
            </h2>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy-900 rounded-lg p-2 shrink-0">
                  <BookOpen className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-navy-900 font-bold">Phase 1 — Online Learning</h3>
                  <p className="text-gray-400 text-xs">Months 1–4</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Online lectures, assignments, and presentations by domain experts including
                specialists from foreign countries. Covers all theoretical foundations of
                canine forensics, behaviour science, legal frameworks, and forensic odourology.
                Enables working professionals to upskill without career interruption.
              </p>
            </div>
            <div className="bg-navy-900 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gold-500/20 rounded-lg p-2 shrink-0">
                  <Target className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Phase 2 — Intensive Hands-On Training</h3>
                  <p className="text-gray-400 text-xs">Months 5–6 · NFSU Delhi Campus</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Residential practical training at NFSU Delhi Campus. Includes live dog handling,
                scent imprinting, simulated detection scenarios, patrol dog preparation, and
                escorted visits to premier K9 facilities — a rare exposure unavailable to the
                general public. Assessed via rigorous formal procedures as per UGC norms.
              </p>
            </div>
          </div>

          {/* Subjects + Practical side by side */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-navy-900 font-bold text-lg mb-6">Subjects Covered</h3>
              <ul className="space-y-3">
                {subjects.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-navy-900 font-bold text-lg mb-6">Practical Training Exposure</h3>
              <ul className="space-y-3 mb-8">
                {practicalExposure.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Batch history */}
              <h4 className="text-navy-900 font-bold text-sm uppercase tracking-wider mb-4">
                Batch History
              </h4>
              <div className="space-y-2">
                {batches.map((b) => (
                  <div
                    key={b.batch}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-gray-600">{b.batch} · {b.period}</span>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                      {b.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Special Forces Suitability ───────────────────────────── */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
              Strategic Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-2">
              Special Forces &amp; Paramilitary Relevance
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
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
                  className="bg-navy-800 rounded-2xl border border-navy-700 p-6 hover:border-gold-500/30 transition-all"
                >
                  <div className="bg-gold-500/20 rounded-lg p-2 w-fit mb-4">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{m.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{m.description}</p>
                </div>
              );
            })}
          </div>

          {/* Capability matrix */}
          <div className="mt-12 bg-navy-800 rounded-2xl border border-navy-700 p-6">
            <p className="text-gold-400 font-bold text-xs uppercase tracking-wider mb-4 text-center">
              Special Forces K9 Capability Matrix — PDCF Program Coverage
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
                  className="bg-navy-900 text-gray-300 text-xs font-semibold px-4 py-2 rounded-full border border-navy-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Eligibility & Schedule & Fee ────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Admissions
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 mt-2">
              Eligibility, Schedule &amp; Fees
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Eligibility */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-navy-900 rounded-lg p-2">
                  <Users className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-navy-900 font-bold">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  Graduation in any discipline (minimum 50% marks)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  OR Diploma in Police Dog Handling / Training
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  OR 10+2 with 3+ years of dog handling experience
                </li>
              </ul>

              <p className="text-xs text-gray-400 mt-4">
                Reservations as per Government of India norms.
              </p>

              <h4 className="text-navy-900 font-bold text-xs uppercase tracking-wider mt-6 mb-3">
                Target Audience
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Police dog handlers, trainers & mid-level officers",
                  "Defence & paramilitary K9 personnel",
                  "Graduates & civilians passionate about K9 science",
                  "NGOs and private sector working in security",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-navy-900 rounded-lg p-2">
                  <Calendar className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-navy-900 font-bold">Course Schedule</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-xl border border-gray-100 p-4">
                  <p className="text-gold-600 font-bold text-xs mb-1">January Session</p>
                  <p className="text-navy-900 font-semibold">Admissions: Nov – Dec</p>
                  <p className="text-gray-500 text-xs mt-1">Course runs Jan – Jun</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4">
                  <p className="text-gold-600 font-bold text-xs mb-1">July Session</p>
                  <p className="text-navy-900 font-semibold">Admissions: May – Jun</p>
                  <p className="text-gray-500 text-xs mt-1">Course runs Jul – Jan</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-500" />
                  Seats limited to <strong className="text-navy-900">25 per batch</strong>, filled
                  on merit basis.
                </p>
              </div>

              <h4 className="text-navy-900 font-bold text-xs uppercase tracking-wider mt-6 mb-3">
                Available Campuses
              </h4>
              <div className="space-y-2">
                {campuses.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gold-500" />
                    {c.name}
                  </a>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="https://admission.nfsu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors w-full justify-center"
                >
                  Apply via NFSU Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Fees */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-navy-900 rounded-lg p-2">
                  <IndianRupee className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-navy-900 font-bold">Course Fees</h3>
              </div>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Tuition Fee", amount: "₹35,000/-" },
                  { label: "Misc. Fees (Exam, Library, Alumni)", amount: "₹5,000/-" },
                  { label: "Refundable Caution Deposit", amount: "₹7,500/-" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center justify-between bg-white rounded-lg border border-gray-100 px-4 py-3"
                  >
                    <span className="text-gray-600">{f.label}</span>
                    <span className="text-navy-900 font-semibold">{f.amount}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between bg-navy-900 rounded-lg px-4 py-3">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-gold-400 font-extrabold text-lg">₹47,500/-</span>
                </div>
              </div>

              <div className="mt-5 bg-gold-500/10 rounded-xl border border-gold-500/20 p-4">
                <p className="text-gold-600 font-bold text-xs mb-1">Bank Details</p>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Fee Collection NFSU Delhi Campus<br />
                  Punjab National Bank<br />
                  A/C No: 0944100100008485<br />
                  IFSC: PUNB0094410
                </p>
              </div>

              <div className="mt-4 text-xs text-gray-500 space-y-1">
                <p>• Accommodation &amp; messing provided during hands-on training at reasonable rates</p>
                <p>• Transport facility included for field visits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional Outcomes ────────────────────────────────── */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
                What You Gain
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 mt-2 mb-8">
                Professional Outcomes
              </h2>
              <ul className="space-y-4">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <div className="bg-navy-900 rounded-full p-1 mt-0.5 shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Col. Chug */}
            <div className="bg-navy-900 rounded-2xl p-8">
              <p className="text-gold-400 font-bold text-xs uppercase tracking-wider mb-5">
                Chief Mentor — Canine Forensics, NFSU
              </p>
              <h3 className="text-white font-extrabold text-xl mb-1">
                Col. (Dr.) P.K. Chug (Retd)
              </h3>
              <p className="text-gray-400 text-xs mb-4">
                BVSc &amp; AH, MVSc, MBA, PhD · Fellow NAVS · Fellow IAAVR<br />
                Advisory Board Member, International Commission on Detector Dogs (ICODD)
              </p>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  India's foremost military and police K9 trainer — an Army Veteran with over{" "}
                  <strong className="text-white">30 years of operational experience</strong>,
                  having commanded Specialised Dog Units across six terms, including with the
                  Indian Special Forces and twice with the Elite NSG Black Cats.
                </p>
                <p>
                  Founder Head of the <strong className="text-white">MHA Police K9 Cell</strong>,
                  Founding Editor of the <strong className="text-white">National Police K9 Journal</strong>,
                  and pioneer of the <strong className="text-white">K9 Vision System (KVS)</strong>,
                  Canine Remote Delivery System (CRDS), and the integration of Dogs with Drones.
                </p>
                <p>
                  Honours include COAS Commendation (three times), Army Commander&apos;s
                  Commendation, UN Force Commander Commendation, and a Citation by the US
                  Department of Defense for the USNS Mercy Mission.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Fellow NAVS", "Fellow IAAVR", "ICODD Advisory Board", "MHA K9 Cell Founder"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-navy-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-navy-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Police Dog Centre India Partnership ────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Collaborating Partner
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 mt-2">
              Police Dog Centre India
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Academic Collaboration",
                desc: "Collaborating partner with NFSU and Florida International University (FIU) Miami, USA, for the Professional Diploma in Canine Forensics.",
              },
              {
                icon: Award,
                title: "ISO 9001:2015 Certified",
                desc: "An ISO-certified, Indian Startup and MSME company accredited by QCI and GeM. Professional K9 security solutions to police and law enforcement.",
              },
              {
                icon: Shield,
                title: "The 4D Doctrine",
                desc: "All training is designed to prepare 4D K9s — Deter, Detect, Defend, and Dominate — replacing coercive methods with modern operant conditioning.",
              },
              {
                icon: BookOpen,
                title: "Training of Trainers",
                desc: "Conducts large-scale Police K9 Workshops and Training of Trainer (ToT) courses for CAPFs and State Police organisations across India.",
              },
              {
                icon: Star,
                title: "National Register for Working Dogs",
                desc: "Pioneered the ground-breaking National Register for Working Dogs (NRWD) and K9 Behavioural Assessment (K9 BAT) model for police dog selection.",
              },
              {
                icon: Globe,
                title: "International Speaker",
                desc: "Col. (Dr.) P.K. Chug is an internationally recognised speaker and author, representing India's K9 capabilities on the global stage.",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-gold-500/30 transition-all"
                >
                  <div className="bg-navy-900 rounded-lg p-2 w-fit mb-4">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3 className="text-navy-900 font-bold text-sm mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact / Apply ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-7 items-start">
            {/* Contact info */}
            <div>
              <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 mt-2 mb-8">
                How to Apply &amp; Contact
              </h2>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-navy-900 rounded-lg p-2 shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-navy-900 font-bold text-sm">Police Dog Centre India</p>
                    <p className="text-gray-500 text-xs">
                      National Centre for K9 Security, Detection, and Training
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-navy-900 rounded-lg p-2 shrink-0">
                    <Phone className="w-4 h-4 text-gold-400" />
                  </div>
                  <a href="tel:+918287793696" className="text-navy-900 text-sm font-semibold hover:text-gold-600 transition-colors">
                    +91 8287793696
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-navy-900 rounded-lg p-2 shrink-0">
                    <Mail className="w-4 h-4 text-gold-400" />
                  </div>
                  <a href="mailto:policedogcentreindia@gmail.com" className="text-navy-900 text-sm font-semibold hover:text-gold-600 transition-colors">
                    policedogcentreindia@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-navy-900 rounded-lg p-2 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-gold-400" />
                  </div>
                  <div className="text-gray-600 text-sm">
                    <p>Training Facilities: Sainik Farma, GXMH+3FQ, Badusarai, New Delhi, Delhi, 110071</p>
                    <p className="mt-1">Head Office: E-601, Jagran CGHS, Plot-17, Dwarka Sector-22, New Delhi, 110077</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply links */}
            <div>
              <div className="bg-navy-900 rounded-2xl p-8 mb-6">
                <h3 className="text-white font-bold text-lg mb-2">Register for the Program</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Applications are accepted twice a year. Seats are limited and filled on merit.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://admission.nfsu.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm px-6 py-4 rounded-xl transition-colors"
                  >
                    Apply via NFSU Admission Portal
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://forms.gle/PS4q5RVdYnDV2HHw6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-navy-800 hover:bg-navy-700 text-white font-bold text-sm px-6 py-4 rounded-xl transition-colors border border-navy-700"
                  >
                    Google Pre-Registration Form
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.nfsu.ac.in/Programs/programinfo/75?deptid=46"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-navy-800 hover:bg-navy-700 text-gray-300 font-semibold text-sm px-6 py-4 rounded-xl transition-colors border border-navy-700"
                  >
                    View Official NFSU Program Page
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-gold-500/10 rounded-2xl border border-gold-500/20 p-6">
                <p className="text-gold-600 font-bold text-xs uppercase tracking-wider mb-2">
                  For Law Enforcement Organisations
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  CAPFs and State Police organisations are encouraged to nominate{" "}
                  <strong>4–5 K9 personnel</strong> per batch as directed by the Ministry of Home
                  Affairs (March 2026). Contact Police Dog Centre India for bulk nominations and
                  organisational coordination.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-navy-900 text-sm font-bold hover:text-gold-600 transition-colors"
                >
                  Contact Police Dog Centre India
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
            Advance India&apos;s Forensic K9 Capabilities
          </h2>
          <p className="text-navy-800/80 text-lg mb-8 max-w-2xl mx-auto">
            Join India&apos;s pioneering forensic K9 education program — and help transform
            police dog training from coercion to science-based excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://admission.nfsu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded transition-colors shadow-lg"
            >
              Apply to NFSU Program
              <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-navy-900 font-bold px-8 py-4 rounded transition-colors border-2 border-navy-900/20"
            >
              Contact Police Dog Centre India
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
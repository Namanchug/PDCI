import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Globe } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "K9 Seminars & Workshops | Police Dog Centre India",
  description:
    "PDCI's national Police K9 workshops with Central Armed Police Forces and state police, and participation in national and international K9 seminars and conferences worldwide.",
};

// ─── PHOTO REPLACEMENT GUIDE ─────────────────────────────────────────────────
// Each card uses an `images` array — add as many paths as you like.
// Photos must be placed inside /public/ and paths start with "/".
//
// Suggested folder structure:
//   /public/seminars-workshops/workshops/   → one sub-folder per org
//   /public/seminars-workshops/national/    → national seminar photos
//   /public/seminars-workshops/international/ → international event photos
//
// Example for ITBP (multiple photos):
//   images: [
//     "/seminars-workshops/workshops/itbp/itbp-1.jpg",
//     "/seminars-workshops/workshops/itbp/itbp-2.jpg",
//     "/seminars-workshops/workshops/itbp/itbp-3.jpg",
//   ]
//
// The carousel shows one photo at a time with prev/next arrows + dot indicators.
// If only one image is provided, arrows and dots are hidden automatically.
// ─────────────────────────────────────────────────────────────────────────────

const workshops = [
  // ── Elite / Counter-Terrorism ──────────────────────────────────────────────
  {
    org: "NSG",
    fullName: "National Security Guard",
    badge: "CAPF",
    location: "NSG Centre, Manesar, Haryana",
    images: [
      "/home-page-banner/banner-5.jpg",
      "/home-page-banner/banner-6.jpg",
      "/home-page-banner/banner-7.jpg",
      "/home-page-banner/banner-8.jpg",
    ],
    description:
      "Elite K9 workshop for the NSG Black Cats — India's premier counter-terrorism force. Showcased the path-breaking K9 Vision System (KVS): training Assault Dogs on a Wireless Command System using a Remote Radio Controlled Device, enabling the dog to operate off-leash and away from the handler based solely on audio-video inputs monitored on a real-time basis — a revolutionary capability for building intervention operations.",
  },
  // ── Defence ───────────────────────────────────────────────────────────────
  {
    org: "Indian Army",
    fullName: "Indian Army / Remount Veterinary Corps",
    badge: "Defence",
    location: "RVC Centre & College, Meerut Cantonment",
    images: [
      "/home-page-banner/banner-10.jpg",
      "/home-page-banner/banner-11.jpg",
      "/home-page-banner/banner-12.jpg",
    ],
    description:
      "Advanced K9 workshop for Indian Army handlers and Remount Veterinary Corps (RVC) personnel. Covered Military Working Dog (MWD) doctrines, drone integration with K9 units, and the pioneering Canine Remote Delivery System (CRDS) — a revolutionary system developed by Col Chug.",
  },
  {
    org: "Indian Air Force",
    fullName: "Indian Air Force",
    badge: "Defence",
    location: "Air Force Stations, Pan-India",
    images: ["/home-page-banner/banner-9.jpg"],
    description:
      "Workshop for Indian Air Force K9 teams responsible for perimeter security and explosive detection at air bases. Focused on base security protocols, detection sweeps for aircraft and cargo areas, and handler development standards aligned with global air force K9 practices.",
  },
  // ── Central Armed Police Forces ───────────────────────────────────────────
  {
    org: "BSF",
    fullName: "Border Security Force",
    badge: "CAPF",
    location: "BSF Establishments, Indo-Pakistan & Indo-Bangladesh Border",
    images: ["/home-page-banner/banner-6.jpg"],
    description:
      "Workshop for BSF K9 units guarding India's western and eastern borders. Covered tracker and detection dog deployment across diverse terrain, K9 Behavioural Assessment (K9 BAT) protocols, and operational integration of working dogs with BSF's border surveillance systems.",
  },
  {
    org: "CRPF",
    fullName: "Central Reserve Police Force",
    badge: "CAPF",
    location: "CRPF Establishments, Pan-India",
    images: ["/home-page-banner/banner-2.jpg"],
    description:
      "Workshop conducted for India's largest Central Armed Police Force, integrating modern dog training science into CRPF's extensive K9 programme. Covered explosive and narcotics detection upgradation and improving K9 Proficiency Evaluation standards across CRPF's diverse operational theatres.",
  },
  {
    org: "CISF",
    fullName: "Central Industrial Security Force",
    badge: "CAPF",
    location: "CISF Establishments & Major Airports, India",
    images: ["/home-page-banner/banner-4.jpg"],
    description:
      "Specialized workshop for CISF K9 teams deployed at airports, seaports, nuclear installations, and critical infrastructure. Focus areas included explosive detection protocols, passive alert methodology for high-traffic civilian environments, and K9 integration with CISF's electronic security systems.",
  },
  {
    org: "ITBP",
    fullName: "Indo-Tibetan Border Police",
    badge: "CAPF",
    location: "ITBP Establishments, Himalayan Region",
    images: [
      "/home-page-banner/banner-1.jpg",
      "/home-page-banner/banner-2.jpg",
      "/home-page-banner/banner-3.jpg",
    ],
    description:
      "A focused Police K9 Workshop addressing the unique challenges of working with service dogs at high altitudes. Covered operant conditioning techniques, specialized detection training, and handler communication protocols tailored to mountain terrain operations in extreme sub-zero conditions.",
  },
  {
    org: "SSB",
    fullName: "Sashastra Seema Bal",
    badge: "CAPF",
    location: "SSB Establishments, Indo-Nepal & Indo-Bhutan Border",
    images: ["/home-page-banner/banner-3.jpg"],
    description:
      "A comprehensive K9 workshop for SSB — guardian of India's borders with Nepal and Bhutan. Addressed tracker dog deployment, handler refresher training, and best practices in K9 welfare and operational maintenance in challenging border conditions.",
  },
  {
    org: "Assam Rifles",
    fullName: "Assam Rifles",
    badge: "CAPF",
    location: "Assam Rifles Dog Training Centre, Jorhat, Assam",
    images: ["/home-page-banner/banner-7.jpg"],
    description:
      "The 10th Police K9 Workshop conducted at the Assam Rifles Dog Training Centre in Jorhat — a milestone event under the theme 'Bridging Gaps in Augmentation of K9 Performance.' Addressed K9 operations in dense jungle terrain, counter-insurgency tracking, and patrol dog employment along the challenging Indo-Myanmar border.",
  },
  // ── State Police ──────────────────────────────────────────────────────────
  {
    org: "Delhi Police",
    fullName: "Delhi Police",
    badge: "Police",
    location: "Delhi Police Establishments, New Delhi",
    images: ["/home-page-banner/banner-8.jpg"],
    description:
      "A high-impact K9 workshop for Delhi Police — one of India's largest urban police K9 forces. Covered advanced detection techniques, crowd-environment operations, and the practical application of operant conditioning in the high-pressure urban policing context of India's capital.",
  },
  {
    org: "Telangana Police",
    fullName: "Telangana State Police",
    badge: "Police",
    location: "Hyderabad, Telangana",
    images: ["/home-page-banner/banner-11.jpg"],
    description:
      "A regional police K9 workshop introducing modern operant conditioning techniques to replace coercive training methods. Covered specialized detection, patrol dog deployment, and K9 proficiency standards for urban and rural policing environments across Telangana.",
  },
];

const nationalSeminars = [
  // ── Elite / Counter-Terrorism ──────────────────────────────────────────────
  {
    title: "Counter-Terrorism K9 Seminar",
    org: "National Security Guard (NSG)",
    location: "NSG Centre, Manesar, Haryana",
    images: [
      "/home-page-banner/banner-1.jpg",
      "/home-page-banner/banner-4.jpg",
      "/home-page-banner/banner-9.jpg",
    ],
    description:
      "Hosted by the NSG Black Cats as part of MHA's Annual National Police K9 Seminar series. Covered counter-terrorism K9 operations, Assault Dog employment, and the K9 Vision System (KVS) — bringing together K9 practitioners across CAPFs to strengthen national standards.",
  },
  // ── Defence ───────────────────────────────────────────────────────────────
  {
    title: "Military Working Dog Seminar",
    org: "Indian Army / Remount Veterinary Corps",
    location: "RVC Centre, Meerut Cantonment",
    images: [
      "/home-page-banner/banner-5.jpg",
      "/home-page-banner/banner-13.jpg",
      "/home-page-banner/banner-14.jpg",
    ],
    description:
      "A joint seminar with the Indian Army's Remount Veterinary Corps at Meerut Cantonment. Covered Military Working Dog (MWD) doctrines, the Canine Remote Delivery System (CRDS), and drone-K9 integration — bridging defence and police K9 capabilities.",
  },
  // ── Central Armed Police Forces ───────────────────────────────────────────
  {
    title: "Border Intelligence K9 Seminar",
    org: "Border Security Force (BSF)",
    location: "BSF Establishments",
    images: ["/home-page-banner/banner-4.jpg"],
    description:
      "Organized with BSF as part of MHA's Annual National Police K9 Seminar series. Covered tracker dog standards, K9 Behavioural Assessment (K9 BAT) protocols, and best-practice dissemination through the National Police K9 Journal — published twice yearly across all CAPFs.",
  },
  {
    title: "Border K9 Operations Seminar",
    org: "Sashastra Seema Bal (SSB)",
    location: "SSB Establishments",
    images: ["/home-page-banner/banner-2.jpg"],
    description:
      "Conducted with SSB as part of MHA's Annual National Police K9 Seminar series. Focused on border K9 operations, Training of Trainers (ToT) methodology, and CAPF-wide standardization along India's northern and northeastern frontiers.",
  },
  {
    title: "High-Altitude K9 Seminar",
    org: "Indo-Tibetan Border Police (ITBP)",
    location: "ITBP Establishments",
    images: ["/home-page-banner/banner-3.jpg"],
    description:
      "Organized with ITBP as part of MHA's Annual National Police K9 Seminar series. Addressed dog acclimatization for sub-zero environments, Training of Trainers (ToT) programmes, and methodologies unique to Himalayan high-altitude K9 operations.",
  },
  // ── Academic ──────────────────────────────────────────────────────────────
  {
    title: "K9 Science Seminar — JECRC University",
    org: "JECRC University, Jaipur",
    location: "JECRC University, Jaipur, Rajasthan",
    images: ["/home-page-banner/banner-6.jpg"],
    description:
      "An academic seminar at JECRC University engaging veterinary science and security management students. Presented operant conditioning fundamentals, K9 behaviour research, and career pathways in India's growing police and security K9 sector.",
  },
  {
    title: "K9 Science Seminar — Jamia Hamdard",
    org: "Jamia Hamdard University, New Delhi",
    location: "Jamia Hamdard, New Delhi",
    images: ["/home-page-banner/banner-7.jpg"],
    description:
      "A university seminar with Jamia Hamdard's veterinary and life sciences faculty. Covered K9 Behavioural Assessment (K9 BAT), K9 welfare standards, and evidence-based training protocols advancing India's police K9 academic and operational capacity.",
  },
];

const internationalSeminars = [
  {
    title: "World Police K9 Summit",
    location: "Dubai, United Arab Emirates",
    images: [
      "/home-page-banner/banner-8.jpg",
      "/home-page-banner/banner-11.jpg",
      "/home-page-banner/banner-14.jpg",
    ],
    description:
      "PDCI's representation at the prestigious World Police K9 Summit in Dubai — a premier global gathering for law enforcement K9 professionals from over 50 countries. Col Chug presented India's police K9 modernization achievements and the MHA K9 Cell initiative to an elite international audience.",
  },
  {
    title: "K9 Olympics",
    location: "United States of America",
    images: ["/home-page-banner/banner-9.jpg"],
    description:
      "Participation in the K9 Olympics in the USA — a world-class event showcasing the highest standards in K9 performance, training methodology, and sport competition. Provided PDCI an invaluable opportunity to benchmark India's K9 training standards against world-class international practitioners.",
  },
  {
    title: "New Zealand Defence K9 Conference",
    location: "New Zealand",
    images: ["/home-page-banner/banner-10.jpg"],
    description:
      "An international defence K9 conference in New Zealand bringing together military K9 experts from the Asia-Pacific region and beyond. Enabled exchange of advanced military working dog doctrines, joint training protocols, and research in detection and patrol K9 capabilities with global defence leaders.",
  },
  {
    title: "IWDBA Conference",
    location: "International",
    images: ["/home-page-banner/banner-12.jpg"],
    description:
      "PDCI's participation in the International Working Dog Breeders Association (IWDBA) Conference — the leading body for working dog breeding and performance standards. Addressed genetic selection, temperament assessment, and breeding protocols that inform PDCI's National Register for Working Dogs (NRWD).",
  },
  {
    title: "Bravo3 Conference",
    location: "International",
    images: ["/home-page-banner/banner-11.jpg"],
    description:
      "Participation in the Bravo3 Conference — a specialized international forum for law enforcement and military K9 professionals. Covered operational K9 tactics, handler development, and emerging working dog technologies, with PDCI sharing India's unique K9 innovations on a global stage.",
  },
  {
    title: "K9cop Conference",
    location: "International",
    images: ["/home-page-banner/banner-13.jpg"],
    description:
      "Participation in the K9cop Conference — a global platform dedicated to law enforcement K9 professionals. Shared India's experience with the MHA's national K9 standardization initiative and explored international collaborations for advancing police K9 handler training standards worldwide.",
  },
];

const badgeStyle: Record<string, { bg: string; color: string; border: string }> = {
  CAPF: {
    bg: "rgba(201,164,90,0.12)",
    color: "#9f7b35",
    border: "rgba(201,164,90,0.25)",
  },
  Police: {
    bg: "rgba(44,77,116,0.10)",
    color: "#2c4d74",
    border: "rgba(44,77,116,0.20)",
  },
  Defence: {
    bg: "rgba(15,23,42,0.10)",
    color: "#1c3858",
    border: "rgba(15,23,42,0.20)",
  },
};

export default function SeminarsWorkshopsPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400">K9 Seminars &amp; Workshops</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            K9 Seminars &amp; Workshops
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            From elite CAPF establishments to international K9 summits — PDCI's
            hands-on workshops and knowledge-sharing seminars span India's entire
            law enforcement and defence ecosystem and the global working dog
            community.
          </p>
        </div>
      </section>



      {/* ── WORKSHOPS ───────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              CAPF &middot; State Police &middot; Defence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Police K9 Workshops
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
              Hands-on K9 workshops conducted across India&apos;s Central Armed
              Police Forces, state police units, and defence establishments —
              bridging performance gaps through modern operant conditioning and
              evidence-based training methodologies — under the guiding theme
              &apos;Bridging Gaps in Augmentation of K9 Performance.&apos;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((w) => {
              const bs = badgeStyle[w.badge] ?? badgeStyle.CAPF;
              return (
                <div
                  key={w.org}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Image */}
                  <ImageCarousel
                    images={w.images}
                    alt={`${w.org} Police K9 Workshop`}
                    heightClass="h-48"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest mb-3"
                      style={{
                        background: bs.bg,
                        color: bs.color,
                        border: `1px solid ${bs.border}`,
                      }}
                    >
                      {w.badge}
                    </span>

                    <h3 className="text-navy-900 font-bold text-xl leading-snug mb-0.5">
                      {w.org}
                    </h3>
                    <p
                      className="text-xs font-semibold mb-3"
                      style={{ color: "#9f7b35" }}
                    >
                      {w.fullName}
                    </p>

                    <div className="flex items-start gap-1.5 text-gray-400 text-xs mb-4">
                      <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{w.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {w.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SEMINARS — Two-Column Layout ────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section intro */}
          <div className="text-center mb-16">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Seminars &amp; Conferences
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Knowledge Exchange — National &amp; International
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              From MHA&apos;s Annual National Police K9 Seminar series to prestigious global
              summits — PDCI drives K9 knowledge-sharing across India&apos;s security
              establishment and on the world stage.
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
                    National Seminars
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {nationalSeminars.map((s, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 hover:shadow-sm transition-all duration-300"
                  >
                    {/* Image */}
                    <ImageCarousel
                      images={s.images}
                      alt={`${s.org} K9 Seminar`}
                      heightClass="h-40"
                    />
                    {/* Content */}
                    <div className="p-5">
                      <span
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest mb-2"
                        style={{
                          background: "rgba(201,164,90,0.12)",
                          color: "#9f7b35",
                          border: "1px solid rgba(201,164,90,0.25)",
                        }}
                      >
                        National Seminar
                      </span>
                      <h4 className="text-navy-900 font-bold text-sm leading-snug mb-0.5">
                        {s.title}
                      </h4>
                      <p className="text-gold-600 text-xs font-semibold mb-2">
                        {s.org}
                      </p>
                      <div className="flex items-start gap-1.5 text-gray-400 text-xs mb-3">
                        <MapPin className="w-3 h-3 shrink-0 mt-0.5" />
                        <span>{s.location}</span>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
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
                    International Seminars &amp; Conferences
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {internationalSeminars.map((s, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-500/30 hover:shadow-sm transition-all duration-300"
                  >
                    {/* Image with location overlay */}
                    <div className="relative">
                      <ImageCarousel
                        images={s.images}
                        alt={`${s.title} — International K9 Conference`}
                        heightClass="h-40"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
                        }}
                      />
                      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5">
                        <Globe className="w-3 h-3 text-white drop-shadow" />
                        <span className="text-white text-xs font-semibold drop-shadow">
                          {s.location}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <span
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest mb-2"
                        style={{
                          background: "rgba(13,27,42,0.07)",
                          color: "#1c3858",
                          border: "1px solid rgba(13,27,42,0.12)",
                        }}
                      >
                        International
                      </span>
                      <h4 className="text-navy-900 font-bold text-sm leading-snug mb-3">
                        {s.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

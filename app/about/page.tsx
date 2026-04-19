import { Metadata } from "next";
import Link from "next/link";
import { Shield, Target, Eye, Award, CheckCircle, ArrowRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Police Dog Centre India",
  description:
    "Learn about Police Dog Centre India – our history, mission, vision, and commitment to delivering elite K9 security solutions since 2005.",
};

const milestones = [
  {
    year: "2005",
    title: "Founded",
    description:
      "Established in New Delhi by retired police and military officers with a vision to professionalize K9 security in India.",
  },
  {
    year: "2008",
    title: "First Government Contract",
    description:
      "Secured our first major government contract, deploying K9 teams for airport security.",
  },
  {
    year: "2012",
    title: "National Expansion",
    description:
      "Expanded operations to 10 states with dedicated regional training centers in Mumbai and Bangalore.",
  },
  {
    year: "2016",
    title: "International Certification",
    description:
      "Achieved international K9 certification, aligning our training standards with global best practices.",
  },
  {
    year: "2019",
    title: "500 K9 Units Milestone",
    description:
      "Reached a landmark of 500 trained and deployed K9 units across India.",
  },
  {
    year: "2023",
    title: "18 States & Growing",
    description:
      "Currently operational across 18 states with over 300 clients from government, corporate, and event sectors.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with the highest ethical standards, ensuring transparency and accountability in all our services.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We set the benchmark in K9 training and deployment, constantly raising the bar for quality and performance.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build long-term relationships with our clients, understanding their unique security needs.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Every mission is executed with military-grade precision, leaving nothing to chance.",
  },
];

const team = [
  {
    name: "DIG (Retd.) Ramesh Chauhan",
    role: "Founder & Chairman",
    experience: "35+ years in Indian Police Service",
    description:
      "Former Deputy Inspector General with specialization in K9 operations and security management.",
  },
  {
    name: "Col. (Retd.) Suresh Mehta",
    role: "Director of Operations",
    experience: "28 years in Indian Army",
    description:
      "Decorated military officer, ex-Army Dog Unit commander with expertise in tactical K9 deployments.",
  },
  {
    name: "Dr. Anita Bose",
    role: "Chief Veterinary Officer",
    experience: "20+ years in veterinary science",
    description:
      "Specialist in working dog health, nutrition, and performance optimization for service animals.",
  },
  {
    name: "Inspector (Retd.) Vijay Singh",
    role: "Head of Training",
    experience: "22 years K9 training",
    description:
      "Master dog trainer with expertise in narcotics detection, explosive detection, and patrol dog training.",
  },
];

const certifications = [
  "Bureau of Police Research and Development (BPR&D) Certified",
  "National Security Guard (NSG) Approved Vendor",
  "CISF (Central Industrial Security Force) Empanelled",
  "ISO 9001:2015 Quality Management Certified",
  "International Police Association (IPA) Member",
  "Indian Army Veterinary Corps – Approved Training Partner",
];

export default function AboutPage() {
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
            <span className="text-gold-400">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            About PDCI
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Two decades of safeguarding India with elite K9 security —
            professional, certified, and trusted.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2 mb-6">
                India&apos;s Trusted K9 Security Partner
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Police Dog Centre India (PDCI) was founded in 2005 by a team
                  of retired Indian Police Service and Army officers who
                  recognized the immense potential of K9 units in modern
                  security operations. What started as a small training facility
                  in New Delhi has grown into India&apos;s most respected K9
                  security organization.
                </p>
                <p>
                  Over the past two decades, we have trained and deployed more
                  than 500 K9 units across India, serving government agencies,
                  airports, seaports, corporate campuses, and large-scale public
                  events. Our dogs are trained in narcotics detection, explosive
                  detection, patrol, tracking, and search &amp; rescue — making
                  us a one-stop solution for all K9 security needs.
                </p>
                <p>
                  PDCI&apos;s commitment to excellence is reflected in our
                  rigorous training protocols, our team of expert handlers, and
                  our unwavering dedication to keeping India safe. Every K9 unit
                  we deploy is a testament to our belief that security is not
                  just a service — it&apos;s a responsibility.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["500+", "Trained K9 Units"],
                  ["300+", "Clients Served"],
                  ["18+", "States Operational"],
                  ["20+", "Years of Excellence"],
                ].map(([val, label]) => (
                  <div
                    key={label}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                  >
                    <div className="text-3xl font-extrabold text-navy-900 mb-1">
                      {val}
                    </div>
                    <div className="text-gray-500 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-navy-900 rounded-2xl p-10 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">🐕‍🦺</div>
                  <div className="text-white text-2xl font-bold">
                    Elite K9 Forces
                  </div>
                  <div className="text-gold-400 mt-2">
                    Trained to Protect. Built to Serve.
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold-500 rounded-xl p-5 shadow-lg">
                <div className="text-navy-900 font-extrabold text-2xl">20+</div>
                <div className="text-navy-800 text-xs font-medium">
                  Years of Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-900 rounded-2xl p-10 text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-gold-500/20 p-3 rounded-full">
                  <Target className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                To provide India with the highest standard of K9 security
                services through expertly trained dogs and professional
                handlers, making communities, organizations, and critical
                infrastructure safer — one K9 team at a time.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Deliver certified, world-class K9 security",
                  "Innovate training methods continuously",
                  "Build long-term security partnerships",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold-500 rounded-2xl p-10 text-navy-900">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-navy-900/10 p-3 rounded-full">
                  <Eye className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-navy-800 leading-relaxed text-base">
                To be recognized as Asia&apos;s leading K9 security
                organization, setting the gold standard for canine training,
                deployment, and security excellence — while making India the
                global benchmark for K9 security professionalism.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Expand to every major Indian city",
                  "Establish Asia-leading training standards",
                  "Train & certify K9 professionals nationwide",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-navy-900 mt-0.5 shrink-0" />
                    <span className="text-navy-800 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Two Decades of Growth
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="relative shrink-0 hidden sm:flex">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-xs font-extrabold z-10 ${
                        i % 2 === 0
                          ? "bg-navy-900 text-gold-400"
                          : "bg-gold-500 text-navy-900"
                      }`}
                    >
                      {m.year}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 flex-1 border border-gray-100">
                    <div className="sm:hidden text-gold-500 font-bold text-sm mb-1">
                      {m.year}
                    </div>
                    <h3 className="text-navy-900 font-bold text-lg mb-2">
                      {m.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-navy-800 rounded-xl p-7 border border-navy-700 text-center hover:border-gold-500/40 transition-all"
                >
                  <div className="bg-gold-500/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-3">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-navy-900 h-40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gold-500/20 border-2 border-gold-500/40 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-navy-900 font-bold text-sm mb-1">
                    {member.name}
                  </h3>
                  <div className="text-gold-500 text-xs font-semibold mb-2">
                    {member.role}
                  </div>
                  <div className="text-gray-400 text-xs mb-3 italic">
                    {member.experience}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Accreditations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Certifications & Affiliations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <div className="bg-gold-500/10 rounded-full p-2 shrink-0">
                  <Award className="w-4 h-4 text-gold-500" />
                </div>
                <span className="text-navy-900 text-sm font-medium leading-relaxed">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner With India&apos;s K9 Experts
          </h2>
          <p className="text-gray-400 mb-8">
            Discover how PDCI can elevate your security operations with elite K9
            solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

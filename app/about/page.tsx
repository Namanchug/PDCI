import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Target, Eye, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Police Dog Centre India",
  description:
    "Learn about Police Dog Centre India – our mission, leadership, and commitment to modernizing K9 training in India through operant conditioning.",
};

const achievements = [
  "India's Top Military and Police K9 Trainer having Prepared and Deployed Hundreds of Dogs for Counter-Terror Operations.",
  "An Army Veteran with Over 25 Years of Operational Experience in Army/RVC with Unique Distinction of Commanding 'Specialized Dog Units' for exceptional six terms; including once with Indian Special Forces and Twice with Elite NSG Black Cats.",
  "Pioneering Work in Developing Indian Army's Military Working Dog (MWD) Training, Assessment and Employment Doctrines.",
  "Known for Introducing Multiple Innovative & Inexpensive Dog Training Aids, Effective Military Doctrines and Tactically Sound, Customised Solutions to Augment the Performance of Military and Police Service K9s (PSKs) including Revolutionary 'Heliborne Slithering with Army Dogs'.",
  "Introduced the 'Quadrants of Operant Conditioning' to Transform Police K9 Training in India based on Contemporary Dog Training Techniques.",
  "Conducted Large Number of 'Police K9 Workshops' with Various Central Armed Police Forces for \"Bridging Gaps in Augmentation of K9 Performance\" for Over 1000 Police K9 Handlers, Trainers and Supervisors.",
  "Conducted Multiple 'Training of Trainer' (ToT) Courses for Indian Police and Law Enforcement Organizations.",
  "Introduced the Concept of 'Assault K9' in Intervention Operations in NSG and for the First Time in the World, Trained & Demonstrated the path-breaking 'K9 Vision System' (KVS) — Training Assault Dogs on Wireless Command System using Remote Radio Controlled Device while the Dog is Off-leash.",
  "Pioneered the revolutionary 'Canine Remote Delivery System' (CRDS), 'Laser Guided Detection' & 'Patrol K9s' and Successfully Integrated 'Dogs with Drones' for Tactical Advantages during Highly Sensitive Special Missions.",
  "Founding and Former Head of the 'Police K9 Cell' with Police Modernization Division/Ministry of Home Affairs, Government of India for 03 Years.",
  "Drafted the 'Roadmap & Action Plan' of the MHA/Government of India to bring in Transformational Changes in the Training and Deployment of Police Service K9s (PSKs) among various CAPFs, State Police and Other Law Enforcement Organizations.",
  "Started Conducting 'MHA's National Police K9 Seminar' annually in India.",
  "Publication of MHA's 'National Police K9 Journal' as its Founding Editor twice every year.",
  "An International Speaker and Master K9 Trainer, Authored a Large Number of Professional and Technical Articles for Leading Publications on Technical Subjects.",
  "Sole 'Change Agent' in the Country Leading to Draft Various Technical Standards/SOPs for Police K9s — including Police Dog Breeding Guidelines, 'K9 Behavioural Assessment' (K9 BAT), 'K9 Proficiency Evaluation Test' (K9 PET), and the Ground-breaking 'National Register for Working Dogs' (NRWD).",
];

const honours = [
  "'Chief of Army Staff Commendation' (COAS CC**) — on three occasions",
  "Army Commander's (EC) Commendation",
  "United Nation's Force Commander Commendation",
  "Citation by US Department of Defense (DoD) for USNS (Mercy) Mission",
  "'Best Administrator's Award' for the year 2020 by Pearl Foundation",
  "Fellow of National Academy of Veterinary Sciences (NAVS) India — 2021",
  "Fellow of Indian Association for Advancement of Veterinary Research (IAAVR) — 2022",
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
    icon: Target,
    title: "Precision",
    description:
      "Every mission is executed with military-grade precision, leaving nothing to chance.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We continuously pioneer new methods — from operant conditioning protocols to integrating dogs with drones.",
  },
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
            Modernizing K9 training across India — replacing coercive methods
            with science-based operant conditioning for police, law enforcement,
            and pet parents.
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
                Police Dog Centre India
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Police Dog Centre INDIA, we help in providing specialized
                  training and consultancy services to a large number of police
                  and law enforcement organizations. We would like to continue
                  sharing our vast experience and in-depth knowledge with Police
                  K9 Practitioners to ensure sustainable modernization in this
                  niche field among diverse security organizations in India.
                </p>
                <p>
                  Our mission is to replace the old-school coercive dog training
                  with quadrants of modern operant conditioning protocols and
                  develop dog training based on scientific knowledge, and
                  practical experience by collecting &amp; recording data to
                  teach dog training better.
                </p>
                <p>
                  Additionally, we aim for pet parents in India to make the most
                  of their friendship with their furry friends. We know that each
                  animal is different, and we work with you and your pet to
                  provide tailor-made guidance that creates long-lasting change.
                  Whether you have a new pet or already own a pet with behavioral
                  challenges, we are here to support you.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[480px]">
              <Image
                src="/about-who-we-are.jpg"
                alt="PDCI handler training a Belgian Malinois on the field"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Motto Banner */}
      <section className="bg-gold-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-900 font-bold text-lg sm:text-xl tracking-wide">
            Our Motto for preparing 4D K9s &mdash;{" "}
            <span className="text-navy-900">
              Deter &bull; Detect &bull; Defend &bull; Dominate
            </span>
          </p>
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
                To replace the old-school coercive dog training with quadrants
                of modern operant conditioning protocols and develop dog training
                based on scientific knowledge and practical experience — by
                collecting &amp; recording data to teach dog training better
                among diverse security organizations in India.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Deliver science-based, world-class K9 training",
                  "Innovate and pioneer new K9 techniques continuously",
                  "Build long-term partnerships with law enforcement",
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
                To ensure sustainable modernization of K9 training across India,
                sharing vast experience and in-depth knowledge with Police K9
                Practitioners — making India the global benchmark for
                science-driven K9 security professionalism.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Mainstream Police Service K9 teams nationwide",
                  "Establish operant conditioning as the national standard",
                  "Train &amp; certify K9 professionals across all forces",
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

      {/* Leadership — Col PK Chug */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Chief Trainer and Managing Director (CMD)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Photo & credentials card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div className="relative h-80 w-full">
                <Image
                  src="/picture2.jpg"
                  alt="Col PK Chug (Retd) – MD & Chief Trainer, Police Dog Centre India"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-navy-900 font-bold text-lg mb-1">
                  Col (Dr) P K Chug (Retd)
                </h3>
                <div className="text-gold-500 font-semibold text-sm mb-3">
                  Chief Trainer and Managing Director (CMD)
                  Police Dog Centre INDIA
                </div>
                <div className="space-y-1 text-blue-500 text-xs leading-relaxed1">
                  <p>Advisory Board Member &nbsp;&&nbsp; Assessor, International Commission on Detector Dogs (ICODD), USA</p>
                </div>
                <div className="space-y-1 text-gray-500 text-xs leading-relaxed1">
                  <br />
                  <p>Former and Founding Head of Police K9 Cell</p>
                  <p>Ministry of Home Affairs, Government of India</p>
                  <br />
                  <p>Founder Editor — MHA's National Police K9 Journal</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-gray-400 text-xs">
                  BVSc &amp; AH &nbsp;|&nbsp; MVSc &nbsp;|&nbsp; MBA &nbsp;|&nbsp; PhD
                  <br />
                  Fellow NAVS &nbsp;|&nbsp; Fellow IAAVR
                  <br />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Colonel PK Chug is the leading Military and Police K9 Trainer of
                India who has pioneered enormous work in developing the subject
                of &lsquo;Working Dogs&rsquo; in India based on contemporary dog
                training techniques and introducing the &lsquo;Operant
                Conditioning&rsquo; to the Police K9 training in India.
              </p>
              <p>
                He is a former Colonel of the Indian Army (Remount Veterinary
                Corps — RVC) with an enriching experience of nearly 25 years of
                chequered military service who has never accepted the status quo.
                He had commanded the &lsquo;Specialized Army Dog Units&rsquo; on
                6 occasions with the Army and Special Forces including his last
                command of the most prestigious K9 Unit of elite NSG Black Cats.
              </p>
              <p>
                He is known for introducing multiple innovative &amp; inexpensive
                dog training aids, effective military doctrines and tactically
                sound solutions to augment the performance of Military and Police
                Service K9s (PSKs).
              </p>
              <p>
                He has established &lsquo;Police Dog Centre INDIA&rsquo; at New
                Delhi to continue the mission of modernizing Police Dog Training
                in India — sharing his vast experience and in-depth knowledge
                with Police K9 Practitioners, providing specialized consultancy
                and training services to a large number of Police and Law
                Enforcement Organizations, and also offering training and
                boarding services for pet parents with Police K9 standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">
              Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-2">
              Achievements
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <div className="bg-navy-900 text-gold-400 font-bold text-xs rounded-full w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honours & Awards */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">
              Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Honours &amp; Awards
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {honours.map((honour) => (
              <div
                key={honour}
                className="flex items-start gap-4 bg-navy-800 rounded-xl p-5 border border-navy-700"
              >
                <div className="bg-gold-500/10 rounded-full p-2 shrink-0">
                  <Award className="w-4 h-4 text-gold-400" />
                </div>
                <span className="text-gray-300 text-sm font-medium leading-relaxed">
                  {honour}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

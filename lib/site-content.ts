export type LocalizedText = string;

export type ServiceCard = {
  icon: string;
  title: string;
  description: string;
};

export type ServiceDetail = ServiceCard & {
  features: string[];
  breeds: string;
};

export type ProductCategory = "security" | "gear" | "merch";

export type StoreProduct = {
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  title: string;
  description: string;
  price: string;
  badge: string;
  features: string[];
};

export type GalleryItem = {
  title: string;
  description: string;
  accent: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type TeamItem = {
  name: string;
  role: string;
  experience: string;
  description: string;
};

export type OfficeItem = {
  city: string;
  address: string;
  phone: string;
  email: string;
};

export const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Trained K9 Units" },
  { value: "300+", label: "Satisfied Clients" },
  { value: "18+", label: "States Served" },
] as const;

export const services: ServiceDetail[] = [
  {
    icon: "🐕",
    title: "Narcotics Detection",
    description:
      "Highly trained K9 units that detect concealed narcotics in vehicles, luggage, premises, and cargo.",
    features: [
      "Multi-drug detection capability",
      "Passive alert methodology",
      "Certified deployment teams",
      "Spot checks or routine screening",
    ],
    breeds: "Belgian Malinois, Labrador Retriever, Springer Spaniel",
  },
  {
    icon: "💣",
    title: "Explosive Detection",
    description:
      "Certified bomb-detection dogs for high-security venues, events, and critical infrastructure.",
    features: [
      "Vehicle, luggage, and area sweeps",
      "Pre-event and live threat assessment",
      "Short-notice deployment",
      "Coordinated security support",
    ],
    breeds: "German Shepherd, Belgian Malinois, Golden Retriever",
  },
  {
    icon: "🛡️",
    title: "Patrol & Guard Dogs",
    description:
      "Professionally trained guard dogs and handlers for perimeter security, deterrence, and rapid response.",
    features: [
      "24/7 deployment capability",
      "Handler-dog team deployment",
      "Perimeter patrols",
      "Deterrence-focused presence",
    ],
    breeds: "German Shepherd, Doberman, Rottweiler, Belgian Malinois",
  },
  {
    icon: "🔍",
    title: "Search & Rescue",
    description:
      "Specialized tracking and search dogs deployed for missing persons, disaster relief, and forensic operations.",
    features: [
      "Urban and wilderness search capability",
      "Disaster and rubble rescue trained",
      "Night operation ready",
      "Agency coordination support",
    ],
    breeds: "German Shepherd, Belgian Malinois, Bloodhound, Labrador",
  },
  {
    icon: "🎪",
    title: "Event Security",
    description:
      "K9 teams for large events, VIP protection, political rallies, and cultural gatherings.",
    features: [
      "Venue sweep before opening",
      "Entry screening support",
      "VIP and backstage coverage",
      "Rapid response teams",
    ],
    breeds: "German Shepherd, Belgian Malinois, Labrador",
  },
  {
    icon: "🏢",
    title: "Corporate Security",
    description:
      "Tailored K9 security programs for campuses, data centers, banks, and industrial facilities.",
    features: [
      "Risk-based deployment plans",
      "Periodic sweeps and checks",
      "Full-time guard deployment",
      "Documentation and compliance support",
    ],
    breeds: "German Shepherd, Belgian Malinois, Doberman",
  },
  {
    icon: "🛰️",
    title: "Tracking & Trailing",
    description:
      "Scent-tracking dogs trained to follow suspects, missing persons, or escaped individuals across terrain.",
    features: [
      "Older trail tracking",
      "Urban and rural terrain support",
      "Police coordination",
      "Evidence trail support",
    ],
    breeds: "Bloodhound, German Shepherd, Belgian Malinois",
  },
  {
    icon: "📚",
    title: "K9 Training & Certification",
    description:
      "Structured training programs for handlers, agencies, and teams that need certified canine capability.",
    features: [
      "Basic to advanced courses",
      "Handler certification programs",
      "Refreshers and recertification",
      "Operational readiness assessments",
    ],
    breeds: "All working breeds accepted",
  },
];

export const values = [
  {
    icon: "Shield",
    title: "Integrity",
    description:
      "Transparent, disciplined, and accountable delivery on every assignment.",
  },
  {
    icon: "Award",
    title: "Excellence",
    description:
      "We aim for the highest standard in training, deployment, and client care.",
  },
  {
    icon: "Users",
    title: "Partnership",
    description:
      "We work alongside your team, not outside it.",
  },
  {
    icon: "Target",
    title: "Precision",
    description:
      "Our teams move with clear protocols and operational discipline.",
  },
] as const;

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Head of Security, Tata Group",
    text: "PDCI has been an invaluable partner for our corporate security needs. Their K9 teams are highly professional and effective.",
  },
  {
    name: "Priya Sharma",
    role: "Event Director, Grand Events India",
    text: "We've used PDCI for multiple large-scale events. Their explosive detection teams give us confidence to host safely.",
  },
  {
    name: "Col. (Retd.) Arun Verma",
    role: "Security Consultant",
    text: "The quality of training and discipline of PDCI handlers is on par with the best K9 units I've seen globally.",
  },
] as const;

export const storeProducts: StoreProduct[] = [
  {
    slug: "tactical-handling-pack",
    category: "gear",
    categoryLabel: "Dog Gear",
    title: "Tactical Handling Pack",
    description:
      "A professional bundle with leash, harness, travel mat, and cleaning accessories.",
    price: "From ₹3,900",
    badge: "Best Seller",
    features: [
      "Military-grade hardware",
      "Comfort fit",
      "Travel-ready pouch",
    ],
  },
  {
    slug: "working-dog-nutrition-kit",
    category: "gear",
    categoryLabel: "Dog Gear",
    title: "Working Dog Nutrition Kit",
    description:
      "Premium nutrition essentials designed for active K9 dogs and training routines.",
    price: "From ₹2,450",
    badge: "New",
    features: [
      "Energy-focused support",
      "Training recovery bundle",
      "Shipping-friendly pack",
    ],
  },
  {
    slug: "site-sweep-package",
    category: "security",
    categoryLabel: "Security Packages",
    title: "Site Sweep Package",
    description:
      "A recurring package for offices, factories, and venues that need scheduled sweeps.",
    price: "Custom quote",
    badge: "Popular",
    features: [
      "Routine K9 inspection",
      "Reporting summary",
      "Flexible frequency",
    ],
  },
  {
    slug: "event-guard-package",
    category: "security",
    categoryLabel: "Security Packages",
    title: "Event Guard Package",
    description:
      "Pre-event sweep, live monitoring, and rapid response coverage for premium gatherings.",
    price: "From ₹18,000/day",
    badge: "High Demand",
    features: [
      "Venue sweep included",
      "Handler deployment",
      "VIP zone support",
    ],
  },
  {
    slug: "rapid-response-retainer",
    category: "security",
    categoryLabel: "Security Packages",
    title: "Rapid Response Retainer",
    description:
      "Priority response access for organizations that need quick deployment in emergencies.",
    price: "On request",
    badge: "24x7",
    features: [
      "Priority hotline",
      "Incident escalation",
      "Fast dispatch",
    ],
  },
  {
    slug: "pdci-heritage-cap",
    category: "merch",
    categoryLabel: "Merchandise",
    title: "PDCI Heritage Cap",
    description:
      "Premium embroidered cap with a clean tactical profile.",
    price: "₹1,250",
    badge: "Limited",
    features: [
      "Unisex fit",
      "Embossed logo",
      "Gift-ready packaging",
    ],
  },
  {
    slug: "pdci-field-hoodie",
    category: "merch",
    categoryLabel: "Merchandise",
    title: "PDCI Field Hoodie",
    description:
      "Heavyweight hoodie built for range days, travel, and team wear.",
    price: "From ₹2,850",
    badge: "Top Rated",
    features: [
      "Soft brushed lining",
      "Relaxed fit",
      "Winter-ready",
    ],
  },
  {
    slug: "command-travel-mug",
    category: "merch",
    categoryLabel: "Merchandise",
    title: "Command Travel Mug",
    description:
      "Double-wall insulated mug for the field, office, or early-morning briefing.",
    price: "₹950",
    badge: "Giftable",
    features: [
      "Leak-resistant lid",
      "Thermal insulation",
      "Premium finish",
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Training Yard",
    description:
      "Structured obedience, scent, and agility drills.",
    accent: "from-navy-900 via-navy-800 to-slate-900",
  },
  {
    title: "Event Sweep",
    description:
      "Pre-opening screening for high-profile venues.",
    accent: "from-amber-500 via-gold-500 to-orange-500",
  },
  {
    title: "Guard Deployment",
    description:
      "Handler-dog teams deployed for perimeter coverage.",
    accent: "from-slate-800 via-navy-800 to-navy-950",
  },
  {
    title: "Search & Rescue",
    description:
      "Responsive tracking support in complex terrain.",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Dog Care",
    description:
      "Health checks, grooming, and conditioning routines.",
    accent: "from-stone-400 via-amber-200 to-gold-300",
  },
  {
    title: "Operations Board",
    description:
      "Mission planning, deployment notes, and route checks.",
    accent: "from-indigo-600 via-navy-700 to-navy-900",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Which services are best for corporate sites?",
    answer:
      "Corporate clients usually start with site sweeps, patrol deployment, and an emergency response retainer.",
  },
  {
    question: "Can you support one-day events?",
    answer:
      "Yes. We handle pre-event sweeps, live coverage, and post-event clearance for one-day and multi-day events.",
  },
  {
    question: "Do you offer merchandise online?",
    answer:
      "Yes. The store section includes gear, security packages, and branded merchandise with inquiry-based ordering.",
  },
  {
    question: "How quickly can you deploy?",
    answer:
      "For priority clients, we can mobilize response teams quickly after confirming location and scope.",
  },
  {
    question: "Do you train handlers too?",
    answer:
      "Yes. We provide structured K9 training and certification programs for handlers and agencies.",
  },
] as const;

export const timeline: TimelineItem[] = [
  {
    year: "2005",
    title: "Founded",
    description:
      "Launched in New Delhi with a mission to professionalize K9 security in India.",
  },
  {
    year: "2008",
    title: "First Major Contract",
    description:
      "Expanded into airport and critical infrastructure security work.",
  },
  {
    year: "2012",
    title: "National Reach",
    description:
      "Built regional deployment capacity across major metro cities.",
  },
  {
    year: "2016",
    title: "Certification Focus",
    description:
      "Standardized training and reporting across service lines.",
  },
  {
    year: "2019",
    title: "500+ Units",
    description:
      "Reached a large operational base of trained working dogs.",
  },
  {
    year: "2025",
    title: "Hybrid Platform",
    description:
      "Expanded into a full service and store experience for customers online.",
  },
];

export const team: TeamItem[] = [
  {
    name: "DIG (Retd.) Ramesh Chauhan",
    role: "Founder & Chairman",
    experience: "35+ years in police service",
    description:
      "Built the operational vision behind PDCI and continues to guide major deployments.",
  },
  {
    name: "Col. (Retd.) Suresh Mehta",
    role: "Director of Operations",
    experience: "28 years in the Army",
    description:
      "Coordinates response teams, routes, and mission planning.",
  },
  {
    name: "Dr. Anita Bose",
    role: "Chief Veterinary Officer",
    experience: "20+ years in veterinary science",
    description:
      "Oversees working dog health, diet, and recovery standards.",
  },
  {
    name: "Inspector (Retd.) Vijay Singh",
    role: "Head of Training",
    experience: "22 years in K9 training",
    description:
      "Designs the certification tracks for detection, patrol, and rescue teams.",
  },
];

export const certifications = [
  "BPR&D Certified",
  "NSG Approved Vendor",
  "CISF Empanelled",
  "ISO 9001:2015 Quality Management",
  "International Police Association Member",
] as const;

export const offices: OfficeItem[] = [
  {
    city: "New Delhi (HQ)",
    address: "Block A, Security Complex, Karol Bagh, New Delhi – 110005",
    phone: "+91 11 2345 6789",
    email: "delhi@policedogcentreindia.com",
  },
  {
    city: "Mumbai",
    address: "Unit 12, Andheri Industrial Estate, Andheri East, Mumbai – 400093",
    phone: "+91 22 6789 1234",
    email: "mumbai@policedogcentreindia.com",
  },
  {
    city: "Bengaluru",
    address: "No. 45, Whitefield Main Road, Bengaluru – 560066",
    phone: "+91 80 4567 8901",
    email: "bengaluru@policedogcentreindia.com",
  },
] as const;

export type ServiceCard = {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
};

export type ServiceDetail = ServiceCard & {
  features: LocalizedText[];
  breeds: LocalizedText;
};

export type ProductCategory = "security" | "gear" | "merch";

export type StoreProduct = {
  slug: string;
  category: ProductCategory;
  categoryLabel: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  price: LocalizedText;
  badge: LocalizedText;
  features: LocalizedText[];
};

export type GalleryItem = {
  title: LocalizedText;
  description: LocalizedText;
  accent: string;
};

export type FaqItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type TimelineItem = {
  year: string;
  title: LocalizedText;
  description: LocalizedText;
};

export type TeamItem = {
  name: string;
  role: LocalizedText;
  experience: LocalizedText;
  description: LocalizedText;
};

export type OfficeItem = {
  city: LocalizedText;
  address: string;
  phone: string;
  email: string;
};

export const stats = [
  { value: "20+", label: { en: "Years of Experience", hi: "वर्षों का अनुभव" } },
  { value: "500+", label: { en: "Trained K9 Units", hi: "प्रशिक्षित K9 यूनिट" } },
  { value: "300+", label: { en: "Satisfied Clients", hi: "संतुष्ट ग्राहक" } },
  { value: "18+", label: { en: "States Served", hi: "राज्यों में सेवा" } },
] as const;

export const services: ServiceDetail[] = [
  {
    icon: "🐕",
    title: { en: "Narcotics Detection", hi: "नारकोटिक्स डिटेक्शन" },
    description: {
      en: "Highly trained K9 units that detect concealed narcotics in vehicles, luggage, premises, and cargo.",
      hi: "उन्नत रूप से प्रशिक्षित K9 यूनिट जो वाहनों, सामान, परिसरों और कार्गो में छिपे नशीले पदार्थों का पता लगाती हैं।",
    },
    features: [
      { en: "Multi-drug detection capability", hi: "कई प्रकार के नशीले पदार्थों की पहचान" },
      { en: "Passive alert methodology", hi: "पैसिव अलर्ट पद्धति" },
      { en: "Certified deployment teams", hi: "प्रमाणित डिप्लॉयमेंट टीम" },
      { en: "Spot checks or routine screening", hi: "स्पॉट चेक या नियमित जांच" },
    ],
    breeds: { en: "Belgian Malinois, Labrador Retriever, Springer Spaniel", hi: "बेल्जियन मैलिनोइस, लैब्राडोर रिट्रीवर, स्प्रिंगर स्पैनियल" },
  },
  {
    icon: "💣",
    title: { en: "Explosive Detection", hi: "विस्फोटक पहचान" },
    description: {
      en: "Certified bomb-detection dogs for high-security venues, events, and critical infrastructure.",
      hi: "उच्च-सुरक्षा स्थलों, आयोजनों और महत्वपूर्ण अवसंरचना के लिए प्रमाणित बम-डिटेक्शन डॉग्स।",
    },
    features: [
      { en: "Vehicle, luggage, and area sweeps", hi: "वाहन, सामान और क्षेत्र की जांच" },
      { en: "Pre-event and live threat assessment", hi: "इवेंट-पूर्व और रियल-टाइम खतरे का आकलन" },
      { en: "Short-notice deployment", hi: "कम समय में तैनाती" },
      { en: "Coordinated security support", hi: "समन्वित सुरक्षा सहायता" },
    ],
    breeds: { en: "German Shepherd, Belgian Malinois, Golden Retriever", hi: "जर्मन शेफर्ड, बेल्जियन मैलिनोइस, गोल्डन रिट्रीवर" },
  },
  {
    icon: "🛡️",
    title: { en: "Patrol & Guard Dogs", hi: "पेट्रोल और गार्ड डॉग्स" },
    description: {
      en: "Professionally trained guard dogs and handlers for perimeter security, deterrence, and rapid response.",
      hi: "परिधि सुरक्षा, निवारण और त्वरित प्रतिक्रिया के लिए पेशेवर रूप से प्रशिक्षित गार्ड डॉग्स और हैंडलर्स।",
    },
    features: [
      { en: "24/7 deployment capability", hi: "24/7 तैनाती क्षमता" },
      { en: "Handler-dog team deployment", hi: "हैंडलर-डॉग टीम तैनाती" },
      { en: "Perimeter patrols", hi: "परिधि गश्त" },
      { en: "Deterrence-focused presence", hi: "निवारक उपस्थिति" },
    ],
    breeds: { en: "German Shepherd, Doberman, Rottweiler, Belgian Malinois", hi: "जर्मन शेफर्ड, डोबर्मन, रॉटवीलर, बेल्जियन मैलिनोइस" },
  },
  {
    icon: "🔍",
    title: { en: "Search & Rescue", hi: "खोज एवं बचाव" },
    description: {
      en: "Specialized tracking and search dogs deployed for missing persons, disaster relief, and forensic operations.",
      hi: "लापता व्यक्तियों, आपदा राहत और फॉरेंसिक कार्यों के लिए विशेष खोज और ट्रैकिंग डॉग्स।",
    },
    features: [
      { en: "Urban and wilderness search capability", hi: "शहरी और वन क्षेत्र में खोज" },
      { en: "Disaster and rubble rescue trained", hi: "आपदा और मलबा बचाव प्रशिक्षण" },
      { en: "Night operation ready", hi: "रात में संचालन के लिए तैयार" },
      { en: "Agency coordination support", hi: "एजेंसी समन्वय सहायता" },
    ],
    breeds: { en: "German Shepherd, Belgian Malinois, Bloodhound, Labrador", hi: "जर्मन शेफर्ड, बेल्जियन मैलिनोइस, ब्लडहाउंड, लैब्राडोर" },
  },
  {
    icon: "🎪",
    title: { en: "Event Security", hi: "इवेंट सुरक्षा" },
    description: {
      en: "K9 teams for large events, VIP protection, political rallies, and cultural gatherings.",
      hi: "बड़े आयोजनों, वीआईपी सुरक्षा, राजनीतिक रैलियों और सांस्कृतिक कार्यक्रमों के लिए K9 टीमें।",
    },
    features: [
      { en: "Venue sweep before opening", hi: "खुलने से पहले स्थल की जांच" },
      { en: "Entry screening support", hi: "प्रवेश जांच में सहायता" },
      { en: "VIP and backstage coverage", hi: "वीआईपी और बैकस्टेज कवरेज" },
      { en: "Rapid response teams", hi: "त्वरित प्रतिक्रिया टीम" },
    ],
    breeds: { en: "German Shepherd, Belgian Malinois, Labrador", hi: "जर्मन शेफर्ड, बेल्जियन मैलिनोइस, लैब्राडोर" },
  },
  {
    icon: "🏢",
    title: { en: "Corporate Security", hi: "कॉर्पोरेट सुरक्षा" },
    description: {
      en: "Tailored K9 security programs for campuses, data centers, banks, and industrial facilities.",
      hi: "कैंपस, डेटा सेंटर, बैंक और औद्योगिक इकाइयों के लिए कस्टम K9 सुरक्षा कार्यक्रम।",
    },
    features: [
      { en: "Risk-based deployment plans", hi: "जोखिम-आधारित तैनाती योजना" },
      { en: "Periodic sweeps and checks", hi: "समय-समय पर जांच" },
      { en: "Full-time guard deployment", hi: "पूर्णकालिक गार्ड तैनाती" },
      { en: "Documentation and compliance support", hi: "दस्तावेज़ और अनुपालन सहायता" },
    ],
    breeds: { en: "German Shepherd, Belgian Malinois, Doberman", hi: "जर्मन शेफर्ड, बेल्जियन मैलिनोइस, डोबर्मन" },
  },
  {
    icon: "🛰️",
    title: { en: "Tracking & Trailing", hi: "ट्रैकिंग एवं ट्रेलिंग" },
    description: {
      en: "Scent-tracking dogs trained to follow suspects, missing persons, or escaped individuals across terrain.",
      hi: "सुगंध का पीछा करने वाले कुत्ते जो संदिग्धों, लापता व्यक्तियों या फरार लोगों को विभिन्न क्षेत्रों में ट्रैक करते हैं।",
    },
    features: [
      { en: "Older trail tracking", hi: "पुराने ट्रेल का अनुसरण" },
      { en: "Urban and rural terrain support", hi: "शहरी और ग्रामीण क्षेत्र सहायता" },
      { en: "Police coordination", hi: "पुलिस समन्वय" },
      { en: "Evidence trail support", hi: "एविडेंस ट्रेल सहायता" },
    ],
    breeds: { en: "Bloodhound, German Shepherd, Belgian Malinois", hi: "ब्लडहाउंड, जर्मन शेफर्ड, बेल्जियन मैलिनोइस" },
  },
  {
    icon: "📚",
    title: { en: "K9 Training & Certification", hi: "K9 प्रशिक्षण एवं प्रमाणन" },
    description: {
      en: "Structured training programs for handlers, agencies, and teams that need certified canine capability.",
      hi: "हैंडलर, एजेंसी और टीमों के लिए संरचित प्रशिक्षण कार्यक्रम जिन्हें प्रमाणित कैनाइन क्षमता चाहिए।",
    },
    features: [
      { en: "Basic to advanced courses", hi: "बेसिक से एडवांस कोर्स" },
      { en: "Handler certification programs", hi: "हैंडलर सर्टिफिकेशन कार्यक्रम" },
      { en: "Refreshers and recertification", hi: "रिफ्रेशर और पुनः प्रमाणन" },
      { en: "Operational readiness assessments", hi: "ऑपरेशनल रेडीनेस मूल्यांकन" },
    ],
    breeds: { en: "All working breeds accepted", hi: "सभी कार्यशील नस्लें स्वीकार्य" },
  },
];

export const values = [
  {
    icon: "Shield",
    title: { en: "Integrity", hi: "ईमानदारी" },
    description: {
      en: "Transparent, disciplined, and accountable delivery on every assignment.",
      hi: "हर कार्य में पारदर्शी, अनुशासित और जवाबदेह सेवा।",
    },
  },
  {
    icon: "Award",
    title: { en: "Excellence", hi: "उत्कृष्टता" },
    description: {
      en: "We aim for the highest standard in training, deployment, and client care.",
      hi: "प्रशिक्षण, तैनाती और ग्राहक सेवा में सर्वोच्च मानक।",
    },
  },
  {
    icon: "Users",
    title: { en: "Partnership", hi: "साझेदारी" },
    description: {
      en: "We work alongside your team, not outside it.",
      hi: "हम आपकी टीम के साथ मिलकर काम करते हैं, अलग नहीं।",
    },
  },
  {
    icon: "Target",
    title: { en: "Precision", hi: "सटीकता" },
    description: {
      en: "Our teams move with clear protocols and operational discipline.",
      hi: "हमारी टीमें स्पष्ट प्रोटोकॉल और संचालन अनुशासन के साथ काम करती हैं।",
    },
  },
] as const;

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: { en: "Head of Security, Tata Group", hi: "हेड ऑफ सिक्योरिटी, टाटा ग्रुप" },
    text: {
      en: "PDCI has been an invaluable partner for our corporate security needs. Their K9 teams are highly professional and effective.",
      hi: "PDCI हमारी कॉर्पोरेट सुरक्षा आवश्यकताओं के लिए एक अमूल्य साझेदार रहा है। उनकी K9 टीमें बहुत पेशेवर और प्रभावी हैं।",
    },
  },
  {
    name: "Priya Sharma",
    role: { en: "Event Director, Grand Events India", hi: "इवेंट डायरेक्टर, ग्रैंड इवेंट्स इंडिया" },
    text: {
      en: "We've used PDCI for multiple large-scale events. Their explosive detection teams give us confidence to host safely.",
      hi: "हमने कई बड़े आयोजनों में PDCI का उपयोग किया है। उनकी विस्फोटक पहचान टीमें सुरक्षित रूप से आयोजन करने का भरोसा देती हैं।",
    },
  },
  {
    name: "Col. (Retd.) Arun Verma",
    role: { en: "Security Consultant", hi: "सुरक्षा सलाहकार" },
    text: {
      en: "The quality of training and discipline of PDCI handlers is on par with the best K9 units I've seen globally.",
      hi: "PDCI हैंडलर्स का प्रशिक्षण और अनुशासन वैश्विक स्तर की सर्वश्रेष्ठ K9 यूनिट्स के बराबर है।",
    },
  },
] as const;

export const storeProducts: StoreProduct[] = [
  {
    slug: "tactical-handling-pack",
    category: "gear",
    categoryLabel: { en: "Dog Gear", hi: "डॉग गियर" },
    title: { en: "Tactical Handling Pack", hi: "टैक्टिकल हैंडलिंग पैक" },
    description: {
      en: "A professional bundle with leash, harness, travel mat, and cleaning accessories.",
      hi: "लीश, हार्नेस, ट्रैवल मैट और सफाई सहायक सामान का प्रोफेशनल बंडल।",
    },
    price: { en: "From ₹3,900", hi: "₹3,900 से" },
    badge: { en: "Best Seller", hi: "सर्वाधिक पसंदीदा" },
    features: [
      { en: "Military-grade hardware", hi: "मिलिट्री-ग्रेड हार्डवेयर" },
      { en: "Comfort fit", hi: "आरामदायक फिट" },
      { en: "Travel-ready pouch", hi: "ट्रैवल-रेडी पाउच" },
    ],
  },
  {
    slug: "working-dog-nutrition-kit",
    category: "gear",
    categoryLabel: { en: "Dog Gear", hi: "डॉग गियर" },
    title: { en: "Working Dog Nutrition Kit", hi: "वर्किंग डॉग न्यूट्रिशन किट" },
    description: {
      en: "Premium nutrition essentials designed for active K9 dogs and training routines.",
      hi: "सक्रिय K9 डॉग्स और प्रशिक्षण दिनचर्या के लिए डिजाइन किए गए प्रीमियम न्यूट्रिशन आवश्यक सामान।",
    },
    price: { en: "From ₹2,450", hi: "₹2,450 से" },
    badge: { en: "New", hi: "नया" },
    features: [
      { en: "Energy-focused support", hi: "ऊर्जा-आधारित सहायता" },
      { en: "Training recovery bundle", hi: "ट्रेनिंग रिकवरी बंडल" },
      { en: "Shipping-friendly pack", hi: "शिपिंग-फ्रेंडली पैक" },
    ],
  },
  {
    slug: "site-sweep-package",
    category: "security",
    categoryLabel: { en: "Security Packages", hi: "सुरक्षा पैकेज" },
    title: { en: "Site Sweep Package", hi: "साइट स्वीप पैकेज" },
    description: {
      en: "A recurring package for offices, factories, and venues that need scheduled sweeps.",
      hi: "कार्यालयों, फैक्ट्रियों और स्थलों के लिए नियमित जांच वाला पैकेज।",
    },
    price: { en: "Custom quote", hi: "कस्टम कोट" },
    badge: { en: "Popular", hi: "लोकप्रिय" },
    features: [
      { en: "Routine K9 inspection", hi: "नियमित K9 निरीक्षण" },
      { en: "Reporting summary", hi: "रिपोर्ट सारांश" },
      { en: "Flexible frequency", hi: "लचीली आवृत्ति" },
    ],
  },
  {
    slug: "event-guard-package",
    category: "security",
    categoryLabel: { en: "Security Packages", hi: "सुरक्षा पैकेज" },
    title: { en: "Event Guard Package", hi: "इवेंट गार्ड पैकेज" },
    description: {
      en: "Pre-event sweep, live monitoring, and rapid response coverage for premium gatherings.",
      hi: "प्रीमियम आयोजनों के लिए प्री-इवेंट स्वीप, लाइव मॉनिटरिंग और त्वरित प्रतिक्रिया कवरेज।",
    },
    price: { en: "From ₹18,000/day", hi: "₹18,000/दिन से" },
    badge: { en: "High Demand", hi: "उच्च मांग" },
    features: [
      { en: "Venue sweep included", hi: "स्थल जांच शामिल" },
      { en: "Handler deployment", hi: "हैंडलर तैनाती" },
      { en: "VIP zone support", hi: "वीआईपी ज़ोन सपोर्ट" },
    ],
  },
  {
    slug: "rapid-response-retainer",
    category: "security",
    categoryLabel: { en: "Security Packages", hi: "सुरक्षा पैकेज" },
    title: { en: "Rapid Response Retainer", hi: "रैपिड रिस्पॉन्स रिटेनर" },
    description: {
      en: "Priority response access for organizations that need quick deployment in emergencies.",
      hi: "आपातकाल में तुरंत तैनाती की जरूरत वाली संस्थाओं के लिए प्रायोरिटी रिस्पॉन्स एक्सेस।",
    },
    price: { en: "On request", hi: "अनुरोध पर" },
    badge: { en: "24x7", hi: "24x7" },
    features: [
      { en: "Priority hotline", hi: "प्राथमिकता हॉटलाइन" },
      { en: "Incident escalation", hi: "इंसिडेंट एस्केलेशन" },
      { en: "Fast dispatch", hi: "फास्ट डिस्पैच" },
    ],
  },
  {
    slug: "pdci-heritage-cap",
    category: "merch",
    categoryLabel: { en: "Merchandise", hi: "मर्चेंडाइज़" },
    title: { en: "PDCI Heritage Cap", hi: "PDCI हेरिटेज कैप" },
    description: {
      en: "Premium embroidered cap with a clean tactical profile.",
      hi: "प्रीमियम एंब्रॉयडर्ड कैप, साफ और टैक्टिकल लुक के साथ।",
    },
    price: { en: "₹1,250", hi: "₹1,250" },
    badge: { en: "Limited", hi: "सीमित" },
    features: [
      { en: "Unisex fit", hi: "यूनिसेक्स फिट" },
      { en: "Embossed logo", hi: "एम्बॉस्ड लोगो" },
      { en: "Gift-ready packaging", hi: "गिफ्ट-रेडी पैकेजिंग" },
    ],
  },
  {
    slug: "pdci-field-hoodie",
    category: "merch",
    categoryLabel: { en: "Merchandise", hi: "मर्चेंडाइज़" },
    title: { en: "PDCI Field Hoodie", hi: "PDCI फील्ड हूडी" },
    description: {
      en: "Heavyweight hoodie built for range days, travel, and team wear.",
      hi: "रेंज डेज़, ट्रैवल और टीम वियर के लिए भारी-भरकम हूडी।",
    },
    price: { en: "From ₹2,850", hi: "₹2,850 से" },
    badge: { en: "Top Rated", hi: "सर्वाधिक रेटेड" },
    features: [
      { en: "Soft brushed lining", hi: "सॉफ्ट ब्रश्ड लाइनिंग" },
      { en: "Relaxed fit", hi: "आरामदायक फिट" },
      { en: "Winter-ready", hi: "सर्दियों के लिए उपयुक्त" },
    ],
  },
  {
    slug: "command-travel-mug",
    category: "merch",
    categoryLabel: { en: "Merchandise", hi: "मर्चेंडाइज़" },
    title: { en: "Command Travel Mug", hi: "कमांड ट्रैवल मग" },
    description: {
      en: "Double-wall insulated mug for the field, office, or early-morning briefing.",
      hi: "फील्ड, ऑफिस या सुबह की ब्रीफिंग के लिए डबल-वॉल इंसुलेटेड मग।",
    },
    price: { en: "₹950", hi: "₹950" },
    badge: { en: "Giftable", hi: "उपहार योग्य" },
    features: [
      { en: "Leak-resistant lid", hi: "लीक-रोधी ढक्कन" },
      { en: "Thermal insulation", hi: "थर्मल इंसुलेशन" },
      { en: "Premium finish", hi: "प्रीमियम फिनिश" },
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: { en: "Training Yard", hi: "ट्रेनिंग यार्ड" },
    description: {
      en: "Structured obedience, scent, and agility drills.",
      hi: "अनुशासन, सुगंध और फुर्ती के संरचित अभ्यास।",
    },
    accent: "from-navy-900 via-navy-800 to-slate-900",
  },
  {
    title: { en: "Event Sweep", hi: "इवेंट स्वीप" },
    description: {
      en: "Pre-opening screening for high-profile venues.",
      hi: "उच्च-प्रोफ़ाइल स्थलों के लिए उद्घाटन-पूर्व जांच।",
    },
    accent: "from-amber-500 via-gold-500 to-orange-500",
  },
  {
    title: { en: "Guard Deployment", hi: "गार्ड डिप्लॉयमेंट" },
    description: {
      en: "Handler-dog teams deployed for perimeter coverage.",
      hi: "परिधि कवरेज के लिए हैंडलर-डॉग टीम तैनात।",
    },
    accent: "from-slate-800 via-navy-800 to-navy-950",
  },
  {
    title: { en: "Search & Rescue", hi: "खोज एवं बचाव" },
    description: {
      en: "Responsive tracking support in complex terrain.",
      hi: "जटिल क्षेत्रों में त्वरित ट्रैकिंग सहायता।",
    },
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: { en: "Dog Care", hi: "डॉग केयर" },
    description: {
      en: "Health checks, grooming, and conditioning routines.",
      hi: "स्वास्थ्य जांच, ग्रूमिंग और कंडीशनिंग रूटीन।",
    },
    accent: "from-stone-400 via-amber-200 to-gold-300",
  },
  {
    title: { en: "Operations Board", hi: "ऑपरेशंस बोर्ड" },
    description: {
      en: "Mission planning, deployment notes, and route checks.",
      hi: "मिशन प्लानिंग, डिप्लॉयमेंट नोट्स और रूट चेक।",
    },
    accent: "from-indigo-600 via-navy-700 to-navy-900",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: { en: "Which services are best for corporate sites?", hi: "कॉर्पोरेट साइट्स के लिए कौन-सी सेवाएँ सबसे बेहतर हैं?" },
    answer: {
      en: "Corporate clients usually start with site sweeps, patrol deployment, and an emergency response retainer.",
      hi: "कॉर्पोरेट ग्राहक आमतौर पर साइट स्वीप, पेट्रोल डिप्लॉयमेंट और इमरजेंसी रिस्पॉन्स रिटेनर से शुरुआत करते हैं।",
    },
  },
  {
    question: { en: "Can you support one-day events?", hi: "क्या आप एक-दिवसीय इवेंट्स को सपोर्ट करते हैं?" },
    answer: {
      en: "Yes. We handle pre-event sweeps, live coverage, and post-event clearance for one-day and multi-day events.",
      hi: "हाँ। हम एक-दिवसीय और बहु-दिवसीय आयोजनों के लिए प्री-इवेंट स्वीप, लाइव कवरेज और पोस्ट-इवेंट क्लीयरेंस संभालते हैं।",
    },
  },
  {
    question: { en: "Do you offer merchandise online?", hi: "क्या आप ऑनलाइन मर्चेंडाइज़ भी देते हैं?" },
    answer: {
      en: "Yes. The store section includes gear, security packages, and branded merchandise with inquiry-based ordering.",
      hi: "हाँ। स्टोर सेक्शन में गियर, सुरक्षा पैकेज और ब्रांडेड मर्चेंडाइज़ शामिल है, जिसमें इनक्वायरी-आधारित ऑर्डरिंग है।",
    },
  },
  {
    question: { en: "How quickly can you deploy?", hi: "आप कितनी जल्दी तैनाती कर सकते हैं?" },
    answer: {
      en: "For priority clients, we can mobilize response teams quickly after confirming location and scope.",
      hi: "प्राथमिकता ग्राहकों के लिए, स्थान और दायरे की पुष्टि के बाद हम प्रतिक्रिया टीम तेजी से तैनात कर सकते हैं।",
    },
  },
  {
    question: { en: "Do you train handlers too?", hi: "क्या आप हैंडलर्स को भी प्रशिक्षित करते हैं?" },
    answer: {
      en: "Yes. We provide structured K9 training and certification programs for handlers and agencies.",
      hi: "हाँ। हम हैंडलर्स और एजेंसियों के लिए संरचित K9 प्रशिक्षण और प्रमाणन कार्यक्रम प्रदान करते हैं।",
    },
  },
] as const;

export const timeline: TimelineItem[] = [
  {
    year: "2005",
    title: { en: "Founded", hi: "स्थापना" },
    description: {
      en: "Launched in New Delhi with a mission to professionalize K9 security in India.",
      hi: "नई दिल्ली में भारत में K9 सुरक्षा को पेशेवर बनाने के मिशन के साथ शुरुआत हुई।",
    },
  },
  {
    year: "2008",
    title: { en: "First Major Contract", hi: "पहला बड़ा अनुबंध" },
    description: {
      en: "Expanded into airport and critical infrastructure security work.",
      hi: "एयरपोर्ट और महत्वपूर्ण अवसंरचना सुरक्षा कार्यों में विस्तार।",
    },
  },
  {
    year: "2012",
    title: { en: "National Reach", hi: "राष्ट्रीय उपस्थिति" },
    description: {
      en: "Built regional deployment capacity across major metro cities.",
      hi: "प्रमुख मेट्रो शहरों में क्षेत्रीय तैनाती क्षमता बनाई।",
    },
  },
  {
    year: "2016",
    title: { en: "Certification Focus", hi: "प्रमाणन केंद्रित" },
    description: {
      en: "Standardized training and reporting across service lines.",
      hi: "सेवा लाइनों में प्रशिक्षण और रिपोर्टिंग मानकीकृत की गई।",
    },
  },
  {
    year: "2019",
    title: { en: "500+ Units", hi: "500+ यूनिट" },
    description: {
      en: "Reached a large operational base of trained working dogs.",
      hi: "प्रशिक्षित कार्यशील कुत्तों का बड़ा ऑपरेशनल बेस बना।",
    },
  },
  {
    year: "2025",
    title: { en: "Hybrid Platform", hi: "हाइब्रिड प्लेटफॉर्म" },
    description: {
      en: "Expanded into a full service and store experience for customers online.",
      hi: "ऑनलाइन ग्राहकों के लिए पूर्ण सेवा और स्टोर अनुभव में विस्तार।",
    },
  },
];

export const team: TeamItem[] = [
  {
    name: "DIG (Retd.) Ramesh Chauhan",
    role: { en: "Founder & Chairman", hi: "संस्थापक एवं चेयरमैन" },
    experience: { en: "35+ years in police service", hi: "पुलिस सेवा में 35+ वर्ष" },
    description: {
      en: "Built the operational vision behind PDCI and continues to guide major deployments.",
      hi: "PDCI के संचालन विज़न को आकार दिया और आज भी प्रमुख तैनाती का मार्गदर्शन करते हैं।",
    },
  },
  {
    name: "Col. (Retd.) Suresh Mehta",
    role: { en: "Director of Operations", hi: "डायरेक्टर ऑफ ऑपरेशंस" },
    experience: { en: "28 years in the Army", hi: "सेना में 28 वर्ष" },
    description: {
      en: "Coordinates response teams, routes, and mission planning.",
      hi: "रिस्पॉन्स टीम, रूट और मिशन प्लानिंग का समन्वय करते हैं।",
    },
  },
  {
    name: "Dr. Anita Bose",
    role: { en: "Chief Veterinary Officer", hi: "चीफ वेटरिनरी ऑफिसर" },
    experience: { en: "20+ years in veterinary science", hi: "पशुचिकित्सा में 20+ वर्ष" },
    description: {
      en: "Oversees working dog health, diet, and recovery standards.",
      hi: "वर्किंग डॉग्स के स्वास्थ्य, आहार और रिकवरी मानकों की देखरेख करती हैं।",
    },
  },
  {
    name: "Inspector (Retd.) Vijay Singh",
    role: { en: "Head of Training", hi: "हेड ऑफ ट्रेनिंग" },
    experience: { en: "22 years in K9 training", hi: "K9 प्रशिक्षण में 22 वर्ष" },
    description: {
      en: "Designs the certification tracks for detection, patrol, and rescue teams.",
      hi: "डिटेक्शन, पेट्रोल और रेस्क्यू टीमों के लिए सर्टिफिकेशन ट्रैक डिजाइन करते हैं।",
    },
  },
];

export const certifications = [
  { en: "BPR&D Certified", hi: "BPR&D प्रमाणित" },
  { en: "NSG Approved Vendor", hi: "NSG अनुमोदित विक्रेता" },
  { en: "CISF Empanelled", hi: "CISF पैनल्ड" },
  { en: "ISO 9001:2015 Quality Management", hi: "ISO 9001:2015 गुणवत्ता प्रबंधन" },
  { en: "International Police Association Member", hi: "इंटरनेशनल पुलिस एसोसिएशन सदस्य" },
] as const;

export const offices: OfficeItem[] = [
  {
    city: { en: "New Delhi (HQ)", hi: "नई दिल्ली (मुख्यालय)" },
    address: "Block A, Security Complex, Karol Bagh, New Delhi – 110005",
    phone: "+91 11 2345 6789",
    email: "delhi@policedogcentreindia.com",
  },
  {
    city: { en: "Mumbai", hi: "मुंबई" },
    address: "Unit 12, Andheri Industrial Estate, Andheri East, Mumbai – 400093",
    phone: "+91 22 6789 1234",
    email: "mumbai@policedogcentreindia.com",
  },
  {
    city: { en: "Bengaluru", hi: "बेंगलुरु" },
    address: "No. 45, Whitefield Main Road, Bengaluru – 560066",
    phone: "+91 80 4567 8901",
    email: "bengaluru@policedogcentreindia.com",
  },
] as const;

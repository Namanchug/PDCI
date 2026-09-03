import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const TITLE = "Police Dog Centre India | K9 Security Services";
const DESCRIPTION =
  "India's premier K9 security solutions provider. Specialized trained dogs for narcotics detection, explosive detection, patrol, tracking, event security, and forensic K9 education, backed by 25+ years of military and police experience.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return <HomeClient />;
}

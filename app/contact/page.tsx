import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact Us", path: "/contact" },
]);

const TITLE = "Contact Us";
const DESCRIPTION =
  "Get in touch with Police Dog Centre India for a free consultation, K9 security service enquiry, forensic K9 course admission, or workshop request. Call, email, or visit our Delhi offices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <script {...jsonLdScriptProps(breadcrumbs)} />
      <ContactClient />
    </>
  );
}

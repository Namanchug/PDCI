import type { Metadata } from "next";
import StoreClient from "./StoreClient";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/seo";

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Store", path: "/store" },
]);

const TITLE = "K9 Equipment Store";
const DESCRIPTION =
  "Shop tactical K9 equipment, leashes and harnesses, detection and patrol dog gear, training aids, apparel, and accessories — trusted by handlers and professionals across India.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/store",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/store",
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
      <StoreClient />
    </>
  );
}

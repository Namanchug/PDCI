import type { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

// Checkout is a user-specific, session-driven page with no unique content to
// rank for — keep it out of the index so it doesn't compete with /store or
// dilute crawl budget, and so cart contents never surface in search results.
export const metadata: Metadata = {
  title: "Checkout",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/store/checkout",
  },
};

export default function Page() {
  return <CheckoutClient />;
}

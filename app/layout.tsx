import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { jsonLdScriptProps } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

const SITE_NAME = "Police Dog Centre India";
export const SITE_URL = "https://www.policedogcentreindia.com";
const DEFAULT_TITLE = "Police Dog Centre India | K9 Security Services";
const DEFAULT_DESCRIPTION =
  "India's premier K9 security solutions provider. Specialized trained dogs for narcotics detection, explosive detection, patrol, tracking, event security, and forensic K9 education, backed by 25+ years of military and police experience.";
const DEFAULT_OG_IMAGE = "/pdci-logo.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "K9 security India",
    "police dog training",
    "narcotics detection dog",
    "explosive detection dog",
    "security dogs India",
    "military working dogs India",
    "K9 handler training",
    "forensic K9 education",
    "Police Dog Centre India",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/pdci-logo.jpg",
    apple: "/pdci-logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "PDCI",
  url: SITE_URL,
  logo: `${SITE_URL}/pdci-logo.jpg`,
  image: `${SITE_URL}/pdci-logo.jpg`,
  description: DEFAULT_DESCRIPTION,
  telephone: "+91-8287793696",
  email: "policedogcentreindia@gmail.com",
  foundingDate: "2005",
  sameAs: [
    "https://www.instagram.com/pdcindia",
  ],
  address: [
    {
      "@type": "PostalAddress",
      name: "Head Office",
      streetAddress: "E-601, Jagran CGHS, Plot-17, Dwarka Sector-22",
      addressLocality: "New Delhi",
      postalCode: "110077",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      name: "Training Facilities",
      streetAddress: "Sainik Farma, Badusarai",
      addressLocality: "New Delhi",
      postalCode: "110071",
      addressCountry: "IN",
    },
  ],
  areaServed: "IN",
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script {...jsonLdScriptProps(organizationJsonLd)} />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
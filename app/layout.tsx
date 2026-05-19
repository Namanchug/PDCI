import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Police Dog Centre India | Premium K9 Security, Store & Services",
  description:
    "India's premium K9 security brand with services, store, booking, gallery, and multilingual support.",
  keywords:
    "K9 security India, police dog training, narcotics detection dog, explosive detection, security dogs India, dog store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <a
          href="https://wa.me/911234567890"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-emerald-500/30 transition-transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          Chat now
        </a>
        <Analytics />
      </body>
    </html>
  );
}

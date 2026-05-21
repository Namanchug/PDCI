import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Police Dog Centre India | K9 Security Services",
  description:
    "India's premier K9 security solutions provider. Specialized trained dogs for narcotics detection, explosive detection, patrol, and comprehensive security services.",
  keywords:
    "K9 security India, police dog training, narcotics detection dog, explosive detection, security dogs India",
  icons: {
    icon: "/pdci-logo.jpg",
    apple: "/pdci-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
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
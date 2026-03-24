import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://hollowaywhitfield.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Holloway & Whitfield LLP | Distinguished Legal Counsel",
    template: "%s | Holloway & Whitfield LLP",
  },
  description:
    "Holloway & Whitfield is a premier New York law firm delivering exceptional legal representation in corporate law, litigation, real estate, intellectual property, employment law, and estate planning. Over 40 years of trusted counsel and $2.8B+ in verdicts and settlements.",
  keywords: [
    "law firm",
    "attorney",
    "lawyer",
    "New York law firm",
    "corporate law",
    "litigation",
    "real estate attorney",
    "intellectual property lawyer",
    "employment law",
    "estate planning",
    "Holloway Whitfield",
    "legal counsel",
    "trial attorney",
    "mergers and acquisitions",
  ],
  authors: [{ name: "Holloway & Whitfield LLP" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Holloway & Whitfield LLP",
    title: "Holloway & Whitfield LLP | Distinguished Legal Counsel",
    description:
      "Premier New York law firm with 40+ years of excellence. Corporate law, litigation, real estate, IP, employment, and estate planning. $2.8B+ in verdicts and settlements.",
    images: [
      {
        url: "/images/heroes/hero-office.png",
        width: 1200,
        height: 630,
        alt: "Holloway & Whitfield LLP — Distinguished Legal Counsel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holloway & Whitfield LLP | Distinguished Legal Counsel",
    description:
      "Premier New York law firm with 40+ years of excellence. $2.8B+ in verdicts and settlements.",
    images: ["/images/heroes/hero-office.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

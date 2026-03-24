import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Holloway & Whitfield provides comprehensive legal services across six core practice areas: Corporate Law & Governance, Commercial Litigation, Real Estate Law, Intellectual Property, Employment Law, and Tax & Estate Planning.",
  openGraph: {
    title: "Practice Areas — Holloway & Whitfield LLP",
    description:
      "Corporate law, litigation, real estate, IP, employment, and estate planning. $12B+ in M&A transactions. 450+ trials to verdict. 1,200+ patents protected.",
    url: "/practice-areas",
  },
  alternates: {
    canonical: "/practice-areas",
  },
};

export default function PracticeAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

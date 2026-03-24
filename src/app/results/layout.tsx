import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Results & Track Record",
  description:
    "Explore Holloway & Whitfield's proven track record: $2.8B+ in total recoveries, 2,400+ cases resolved, 96% success rate. View our landmark verdicts and settlements across corporate, litigation, real estate, and IP matters.",
  openGraph: {
    title: "Case Results — Holloway & Whitfield LLP",
    description:
      "$847M largest verdict. $2.8B+ total recovered. 96% success rate. 40+ years of landmark legal results.",
    url: "/results",
  },
  alternates: {
    canonical: "/results",
  },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

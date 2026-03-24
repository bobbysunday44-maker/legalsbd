import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Firm",
  description:
    "Learn about Holloway & Whitfield LLP — founded in 1983, our firm has grown into one of New York's most respected legal practices. Meet our 10 distinguished attorneys, explore our values, and discover why clients trust us with their most critical matters.",
  openGraph: {
    title: "About Holloway & Whitfield LLP",
    description:
      "Founded in 1983. 10 distinguished attorneys. 40+ years of legal excellence in New York. Meet the team behind $2.8B+ in client recoveries.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

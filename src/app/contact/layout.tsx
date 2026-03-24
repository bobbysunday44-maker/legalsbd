import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Schedule a confidential consultation with Holloway & Whitfield LLP. Offices in New York, Washington D.C., and Los Angeles. Call (212) 555-1000 or submit our contact form. Free initial consultation.",
  openGraph: {
    title: "Contact Holloway & Whitfield LLP",
    description:
      "Schedule a free, confidential consultation. New York, Washington D.C., and Los Angeles offices. (212) 555-1000.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

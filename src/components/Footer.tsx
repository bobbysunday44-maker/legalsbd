import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const practiceAreas = [
  { label: "Corporate Law", anchor: "#corporate" },
  { label: "Commercial Litigation", anchor: "#litigation" },
  { label: "Real Estate", anchor: "#real-estate" },
  { label: "Intellectual Property", anchor: "#ip" },
  { label: "Employment Law", anchor: "#employment" },
  { label: "Tax & Estate Planning", anchor: "#tax-estate" },
];

const quickLinks = [
  { href: "/about", label: "Our Firm" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/results", label: "Case Results" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-nude-light/80">
      {/* CTA Band */}
      <div className="bg-walnut">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-ivory mb-3">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-sand/80 text-lg max-w-xl">
              Schedule a confidential consultation with one of our experienced
              attorneys today. No obligation, no pressure.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 group flex items-center gap-3 px-10 py-4 bg-bronze text-ivory text-lg tracking-wide hover:bg-bronze-light transition-colors cursor-pointer"
          >
            Schedule Consultation
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 cursor-pointer">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-ivory">
                Holloway
                <span className="text-gold">&</span>
                Whitfield
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-sand/60 mt-1">
                Attorneys at Law
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-sand/70 max-w-xs">
              Providing distinguished legal counsel to individuals and
              businesses for over four decades. Integrity, excellence, and
              unwavering commitment to our clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-gold mb-6 font-medium">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand/70 hover:text-ivory transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-gold mb-6 font-medium">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.label}>
                  <Link
                    href={`/practice-areas${area.anchor}`}
                    className="text-sm text-sand/70 hover:text-ivory transition-colors cursor-pointer"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-gold mb-6 font-medium">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-sand/70 leading-relaxed">
                  One Liberty Plaza, 42nd Floor
                  <br />
                  New York, NY 10006
                </span>
              </li>
              <li>
                <a
                  href="tel:+12125551000"
                  className="flex items-center gap-3 text-sm text-sand/70 hover:text-ivory transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  (212) 555-1000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hollowaywhitfield.com"
                  className="flex items-center gap-3 text-sm text-sand/70 hover:text-ivory transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  info@hollowaywhitfield.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-sand/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sand/40">
          <p>&copy; {new Date().getFullYear()} Holloway & Whitfield LLP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-sand/70 transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-sand/70 transition-colors cursor-pointer">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-sand/70 transition-colors cursor-pointer">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

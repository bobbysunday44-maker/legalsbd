"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  Building2,
  Home,
  Lightbulb,
  Users,
  Calculator,
  ChevronDown,
  Quote,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const practiceAreas = [
  {
    icon: Scale,
    title: "Corporate Law",
    description:
      "Advising Fortune 500 companies and emerging enterprises on mergers, acquisitions, governance, and compliance. We structure transactions that protect your interests and accelerate growth.",
    href: "/practice-areas#corporate",
  },
  {
    icon: Building2,
    title: "Commercial Litigation",
    description:
      "Aggressive courtroom advocacy for complex commercial disputes, securities litigation, and class actions. Our trial attorneys have secured landmark verdicts across federal and state courts.",
    href: "/practice-areas#litigation",
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description:
      "Full-spectrum counsel for institutional investors, developers, and REITs navigating acquisitions, financing, zoning, and joint ventures across every asset class.",
    href: "/practice-areas#real-estate",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    description:
      "Protecting patents, trademarks, copyrights, and trade secrets for innovators and global brands. We litigate IP disputes and craft licensing strategies that maximize value.",
    href: "/practice-areas#ip",
  },
  {
    icon: Users,
    title: "Employment Law",
    description:
      "Defending employers in high-stakes discrimination, harassment, and wage-and-hour litigation while advising on compliance, executive compensation, and workforce restructuring.",
    href: "/practice-areas#employment",
  },
  {
    icon: Calculator,
    title: "Tax & Estate Planning",
    description:
      "Sophisticated tax planning for ultra-high-net-worth individuals, family offices, and closely held businesses. We minimize exposure and preserve generational wealth.",
    href: "/practice-areas#tax-estate",
  },
];

const attorneys = [
  {
    name: "Craig Holloway",
    title: "Managing Partner",
    specialty: "Corporate M&A and Securities Litigation",
    image: "/images/team/craig-holloway.png",
  },
  {
    name: "Diane Whitfield",
    title: "Senior Partner",
    specialty: "Complex Commercial Litigation and Arbitration",
    image: "/images/team/diane-whitfield.png",
  },
  {
    name: "Priya Narayanan",
    title: "Partner — Litigation",
    specialty: "Intellectual Property and Patent Trial Law",
    image: "/images/team/priya-narayanan.png",
  },
  {
    name: "Jordan Kelleher",
    title: "Partner — Corporate",
    specialty: "Private Equity, Venture Capital, and Fund Formation",
    image: "/images/team/jordan-kelleher.png",
  },
];

const testimonials = [
  {
    quote:
      "When our company faced a $340 million patent infringement suit that threatened our entire product line, Holloway & Whitfield assembled a team that not only defeated every claim but secured a counter-judgment that sent a clear message to our competitors. Their preparation was surgical, their courtroom presence commanding.",
    name: "Richard Emmerich",
    caseType: "Patent Infringement Defense",
  },
  {
    quote:
      "During our cross-border acquisition of a European pharmaceutical group, the regulatory landscape was a minefield. Craig Holloway and his corporate team navigated every jurisdiction, every antitrust concern, and every disclosure requirement with extraordinary precision. The deal closed on schedule and under budget.",
    name: "Margaret Liu-Chen",
    caseType: "Cross-Border M&A Transaction",
  },
  {
    quote:
      "After our founder passed unexpectedly, the future of a four-generation family enterprise hung in the balance. Diane Whitfield guided our family through an extraordinarily sensitive restructuring, protecting $180 million in assets and ensuring the business could continue for the next generation. We owe her everything.",
    name: "Thomas Ashford III",
    caseType: "Estate & Succession Planning",
  },
];

const caseResults = [
  {
    type: "Securities Class Action",
    amount: "$412M",
    description:
      "Represented institutional investors in a landmark securities fraud class action against a multinational financial services company, securing one of the largest settlements in the Southern District of New York.",
  },
  {
    type: "Corporate Acquisition Defense",
    amount: "$225M",
    description:
      "Successfully defended a publicly traded technology firm against a hostile takeover bid, implementing a strategic defense that preserved shareholder value and corporate independence.",
  },
  {
    type: "Real Estate Development Dispute",
    amount: "$178M",
    description:
      "Resolved a complex multi-party construction and financing dispute for a Manhattan mixed-use development, recovering the full investment plus damages for our development client.",
  },
];

const whyChooseUs = [
  {
    number: "01",
    title: "Proven Track Record",
    description:
      "Over four decades of landmark results across every major practice area. Our attorneys have secured billions in verdicts and settlements, established precedent in appellate courts, and consistently achieved outcomes that redefine what clients can expect from their legal counsel. When the stakes are at their highest, our record speaks for itself.",
  },
  {
    number: "02",
    title: "Elite Legal Team",
    description:
      "Our attorneys hail from the nation's most prestigious law schools — Harvard, Yale, Columbia, Stanford — and have honed their expertise at AmLaw 100 firms, the Department of Justice, and the SEC. We recruit only the most exceptional legal minds, then invest deeply in their continued development and specialization.",
  },
  {
    number: "03",
    title: "Client-First Approach",
    description:
      "Every client receives the direct attention of a senior partner — not a junior associate learning on your matter. We maintain transparent communication at every stage, provide honest assessments of risk and opportunity, and structure our engagements to align our success with yours. Your priorities are our mandate.",
  },
  {
    number: "04",
    title: "Strategic Innovation",
    description:
      "We combine time-tested legal strategy with cutting-edge technology and data-driven insights. From AI-powered document review to predictive litigation analytics, we leverage every available advantage to deliver faster, smarter, and more cost-effective outcomes without ever compromising on the quality of our advocacy.",
  },
];

const awards = [
  "Best Law Firms 2024 — U.S. News",
  "Chambers USA Band 1",
  "Super Lawyers Top 100",
  "Martindale-Hubbell AV Rated",
  "Benchmark Litigation Star",
];

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <>
      {/* ================================================================ */}
      {/* 1. HERO                                                          */}
      {/* ================================================================ */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/heroes/hero-office.png"
          alt="Holloway & Whitfield offices"
          fill
          unoptimized
          priority
          className="object-cover"
        />

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-[11px] md:text-xs tracking-[0.35em] uppercase text-gold/90 mb-6 font-medium">
              Holloway & Whitfield LLP — Distinguished Legal Counsel Since 1983
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-ivory leading-[1.1] tracking-tight"
          >
            When Everything Is
            <br className="hidden sm:block" /> at Stake,{" "}
            <span className="text-gold">Experience</span> Matters
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-6 md:mt-8 text-lg md:text-xl text-sand/80 max-w-2xl mx-auto leading-relaxed"
          >
            Distinguished legal counsel for those who demand nothing less than
            extraordinary. For over forty years, we have protected the interests
            of industry leaders, institutions, and individuals at the highest
            levels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/contact"
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-bronze text-ivory text-sm tracking-[0.15em] uppercase font-medium rounded-sm hover:bg-bronze-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/practice-areas"
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 border border-ivory/30 text-ivory text-sm tracking-[0.15em] uppercase font-medium rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
            >
              Our Practice Areas
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-sand/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-sand/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================================================================ */}
      {/* 2. FIRM INTRODUCTION                                             */}
      {/* ================================================================ */}
      <section className="bg-ivory py-24 md:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left column — Text block */}
            <AnimatedSection direction="left">
              <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-bronze font-medium mb-4">
                Our Legacy
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-espresso leading-tight">
                A Tradition of Legal
                <br />
                Excellence Since 1983
              </h2>
              <div className="mt-6 h-px w-16 bg-bronze/40" />
              <p className="mt-8 text-lg text-taupe leading-relaxed">
                For over four decades, Holloway & Whitfield has stood as a
                pillar of legal excellence in New York. Our attorneys bring
                unmatched expertise, strategic thinking, and a relentless
                commitment to achieving the best possible outcomes for our
                clients.
              </p>
              <p className="mt-6 text-lg text-taupe leading-relaxed">
                Founded by Craig Holloway Sr. and the late Margaret Whitfield,
                the firm was built on a singular conviction: that the practice of
                law, at its highest level, is both an art and a discipline. Every
                case we accept receives the full weight of our institutional
                knowledge, our relationships, and our reputation.
              </p>
              <p className="mt-6 text-lg text-taupe leading-relaxed">
                Today, with fifteen offices and over two hundred attorneys, we
                continue to set the standard for sophisticated legal
                representation across corporate transactions, high-stakes
                litigation, and complex regulatory matters.
              </p>
              <Link
                href="/about"
                className="cursor-pointer inline-flex items-center gap-2 mt-8 text-bronze text-sm tracking-[0.15em] uppercase font-medium hover:text-espresso transition-colors duration-300 group"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </AnimatedSection>

            {/* Right column — Stats */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="space-y-6">
                {[
                  {
                    stat: "40+",
                    label: "Years of Excellence",
                    detail:
                      "Continuously ranked among the nation's top law firms since our founding in 1983.",
                  },
                  {
                    stat: "$2.8B+",
                    label: "In Verdicts & Settlements",
                    detail:
                      "Cumulative results that reflect our commitment to maximizing outcomes for every client.",
                  },
                  {
                    stat: "98%",
                    label: "Client Satisfaction",
                    detail:
                      "Independently measured across all practice groups, reflecting our dedication to service.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="bg-cream border border-border rounded-sm p-8 relative overflow-hidden group hover:border-bronze/30 transition-colors duration-500"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-bronze/60" />
                    <div className="flex items-start gap-6">
                      <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-bronze leading-none shrink-0">
                        {item.stat}
                      </span>
                      <div>
                        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-espresso">
                          {item.label}
                        </h3>
                        <p className="mt-2 text-taupe text-sm leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. PRACTICE AREAS                                                */}
      {/* ================================================================ */}
      <section className="bg-cream py-24 md:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Areas of Practice"
            subtitle="Our attorneys deliver counsel across the full spectrum of business law, bringing deep specialization and cross-practice collaboration to every engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <AnimatedSection key={area.title} delay={index * 0.1}>
                  <Link
                    href={area.href}
                    className="cursor-pointer group block h-full bg-ivory border border-border rounded-sm p-8 lg:p-10 relative overflow-hidden hover:shadow-lg hover:shadow-espresso/5 transition-all duration-500"
                  >
                    {/* Bronze top border on hover */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-bronze scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="w-12 h-12 rounded-sm bg-bronze/10 flex items-center justify-center mb-6 group-hover:bg-bronze/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-bronze" />
                    </div>

                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-espresso mb-3">
                      {area.title}
                    </h3>

                    <p className="text-taupe text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-bronze text-xs tracking-[0.15em] uppercase font-medium group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. DISTINGUISHED RESULTS                                         */}
      {/* ================================================================ */}
      <section className="bg-espresso py-24 md:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Results That Define Us"
            title="A Legacy of Landmark Results"
            subtitle="Decades of relentless advocacy have produced outcomes that set industry benchmarks and reshape legal landscapes."
            dark
          />

          {/* Stats row */}
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
              {[
                { value: "$847M", label: "Largest Verdict" },
                { value: "2,400+", label: "Cases Resolved" },
                { value: "96%", label: "Success Rate" },
                { value: "15", label: "Offices Nationwide" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-center"
                >
                  <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-none">
                    {stat.value}
                  </span>
                  <p className="mt-3 text-sand text-sm tracking-[0.15em] uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Featured case result cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {caseResults.map((result, index) => (
              <AnimatedSection key={index} delay={index * 0.12}>
                <div className="bg-walnut/50 border border-sand/10 rounded-sm p-8 lg:p-10 h-full">
                  <span className="text-[11px] tracking-[0.3em] uppercase text-gold font-medium">
                    {result.type}
                  </span>
                  <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-gold mt-3 mb-4">
                    {result.amount}
                  </p>
                  <div className="h-px w-12 bg-bronze/40 mb-4" />
                  <p className="text-sand/70 text-sm leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. FEATURED ATTORNEYS                                            */}
      {/* ================================================================ */}
      <section className="bg-cream-light py-24 md:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Leadership"
            title="Meet the Partners"
            subtitle="Led by seasoned trial lawyers and transactional strategists, our leadership team brings unparalleled depth to every matter we undertake."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {attorneys.map((attorney, index) => (
              <AnimatedSection key={attorney.name} delay={index * 0.1}>
                <Link
                  href="/about#team"
                  className="cursor-pointer group block bg-ivory border border-border rounded-sm overflow-hidden hover:shadow-lg hover:shadow-espresso/5 transition-all duration-500"
                >
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={attorney.image}
                      alt={attorney.name}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Warm overlay on hover */}
                    <div className="absolute inset-0 bg-bronze/0 group-hover:bg-bronze/15 transition-colors duration-500" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-espresso">
                      {attorney.name}
                    </h3>
                    <p className="text-bronze text-xs tracking-[0.1em] uppercase font-medium mt-1">
                      {attorney.title}
                    </p>
                    <p className="text-taupe text-sm mt-3 leading-relaxed">
                      {attorney.specialty}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection className="text-center mt-14">
            <Link
              href="/about#team"
              className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 border border-bronze text-bronze text-sm tracking-[0.15em] uppercase font-medium rounded-sm hover:bg-bronze hover:text-ivory transition-all duration-300 group"
            >
              Meet Our Full Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. TESTIMONIALS                                                  */}
      {/* ================================================================ */}
      <section className="bg-ivory py-24 md:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Client Voices"
            title="What Our Clients Say"
            subtitle="The trust of our clients is earned through results. Their words reflect the standard of excellence we bring to every engagement."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.12}>
                <div className="bg-cream border border-border rounded-sm p-8 lg:p-10 h-full flex flex-col relative">
                  {/* Decorative quote */}
                  <Quote className="w-10 h-10 text-bronze/20 mb-6 shrink-0" />

                  <blockquote className="font-[family-name:var(--font-playfair)] text-espresso text-base md:text-lg italic leading-relaxed flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="font-[family-name:var(--font-playfair)] text-espresso font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-bronze text-xs tracking-[0.1em] uppercase font-medium mt-1">
                      {testimonial.caseType}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. WHY CHOOSE US                                                 */}
      {/* ================================================================ */}
      <section className="bg-cream py-24 md:py-32 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="The Holloway & Whitfield Difference"
            title="Why Clients Choose Us"
            subtitle="Exceptional outcomes are never accidental. They are the product of preparation, talent, and an unwavering commitment to the clients we serve."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {whyChooseUs.map((pillar, index) => (
              <AnimatedSection key={pillar.number} delay={index * 0.1}>
                <div className="bg-ivory border border-border rounded-sm p-8 lg:p-10 h-full group hover:border-bronze/30 transition-colors duration-500">
                  <div className="flex items-start gap-6">
                    {/* Accent number */}
                    <span className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-bronze/20 leading-none shrink-0 group-hover:text-bronze/40 transition-colors duration-500">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl lg:text-2xl font-semibold text-espresso mb-4">
                        {pillar.title}
                      </h3>
                      <p className="text-taupe leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 8. AWARDS & RECOGNITION                                          */}
      {/* ================================================================ */}
      <section className="bg-espresso py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold font-medium mb-4">
              Awards & Recognition
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-ivory leading-tight">
              Recognized by Those Who Matter
            </h2>
            <div className="mt-6 h-px w-16 bg-bronze/40 mx-auto" />
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-center px-6 py-4 border border-sand/15 rounded-sm"
                >
                  <p className="font-[family-name:var(--font-playfair)] text-gold text-sm md:text-base font-medium whitespace-nowrap">
                    {award}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 9. CTA BANNER                                                    */}
      {/* ================================================================ */}
      <section className="bg-walnut py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-gold font-medium mb-4">
              Take the First Step
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory leading-tight">
              Your Case Deserves
              <br />
              Extraordinary Counsel
            </h2>
            <p className="mt-6 text-sand/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential consultation with one of our partners. We
              will assess your situation, outline a clear strategy, and explain
              exactly how Holloway & Whitfield can help you achieve the outcome
              you need.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-bronze text-ivory text-sm tracking-[0.15em] uppercase font-medium rounded-sm hover:bg-bronze-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 border border-sand/30 text-sand text-sm tracking-[0.15em] uppercase font-medium rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                Learn About the Firm
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

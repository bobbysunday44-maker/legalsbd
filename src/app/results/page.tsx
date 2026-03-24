"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Scale,
  Award,
  TrendingUp,
  Quote,
  ChevronRight,
  Star,
  Shield,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

/* ------------------------------------------------------------------ */
/*  Animated Counter Hook                                             */
/* ------------------------------------------------------------------ */
function useCounter(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView || !inView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration, startOnView]);

  return { count, ref };
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const headlineStats = [
  { value: 2.8, prefix: "$", suffix: "B+", label: "Total Recovered for Clients", decimals: 1 },
  { value: 2400, prefix: "", suffix: "+", label: "Cases Successfully Resolved", decimals: 0 },
  { value: 96, prefix: "", suffix: "%", label: "Client Success Rate", decimals: 0 },
  { value: 40, prefix: "", suffix: "+", label: "Years of Legal Excellence", decimals: 0 },
];

const landmarkCases = [
  {
    amount: "$847M",
    type: "Verdict",
    category: "Securities Class Action",
    description:
      "Landmark jury verdict against a Fortune 100 financial institution for systematic securities fraud affecting over 12,000 institutional and retail investors across three continents.",
  },
  {
    amount: "$342M",
    type: "Settlement",
    category: "Corporate Fraud",
    description:
      "Negotiated the largest corporate fraud settlement in New York history on behalf of defrauded shareholders of a publicly traded technology conglomerate.",
  },
  {
    amount: "$215M",
    type: "Verdict",
    category: "Product Liability",
    description:
      "Secured a decisive jury verdict against a multinational pharmaceutical manufacturer for knowingly distributing a defective medical device to hospitals nationwide.",
  },
  {
    amount: "$178M",
    type: "Settlement",
    category: "Antitrust Violation",
    description:
      "Led a coalition of plaintiffs in a price-fixing settlement involving four major industry players in the commercial construction materials market.",
  },
  {
    amount: "$156M",
    type: "Settlement",
    category: "Employment Discrimination",
    description:
      "Class action settlement on behalf of 8,500 employees subjected to systematic gender and racial discrimination in compensation and promotion practices.",
  },
  {
    amount: "$98M",
    type: "Verdict",
    category: "Real Estate Development",
    description:
      "Prevailed at trial in a complex dispute over a waterfront development project involving allegations of fraud, breach of fiduciary duty, and unjust enrichment.",
  },
  {
    amount: "$67M",
    type: "Settlement",
    category: "Intellectual Property",
    description:
      "Resolved a multi-year patent infringement dispute for a biotech innovator, securing both a substantial damages award and permanent injunctive relief.",
  },
  {
    amount: "$45M",
    type: "Verdict",
    category: "Medical Malpractice",
    description:
      "Jury verdict for a family devastated by catastrophic surgical errors, including one of the largest individual medical malpractice awards in the state.",
  },
];

const practiceAreaStats = [
  { area: "Estate Planning", rate: 99 },
  { area: "Corporate Law", rate: 98 },
  { area: "Real Estate", rate: 97 },
  { area: "Intellectual Property", rate: 96 },
  { area: "Employment Law", rate: 95 },
  { area: "Litigation", rate: 94 },
];

const testimonials = [
  {
    quote:
      "When our company faced a $400 million securities class action, Holloway & Whitfield assembled a team that was nothing short of extraordinary. Their strategic brilliance and relentless preparation resulted in a complete vindication of our position. They did not merely represent us -- they protected our legacy.",
    name: "Richard A. Castellano",
    title: "Chief Executive Officer",
    company: "Meridian Capital Holdings",
  },
  {
    quote:
      "After three other firms told us our intellectual property case was unwinnable, Holloway & Whitfield took it on and secured a $67 million settlement that fundamentally changed the landscape of our industry. Their depth of knowledge, courtroom presence, and sheer determination are unmatched by any firm we have encountered.",
    name: "Dr. Katherine L. Chen",
    title: "Chief Financial Officer",
    company: "Helix BioSciences Inc.",
  },
  {
    quote:
      "Through a grueling two-year real estate dispute that threatened the future of our organization, this firm stood as an unwavering pillar of counsel and conviction. The $98 million verdict they secured did more than resolve our case -- it sent a message to the entire industry. I would entrust no other firm with matters of this magnitude.",
    name: "James F. Whitmore III",
    title: "Managing Director",
    company: "Atlantic Realty Partners",
  },
];

const awards = [
  {
    title: "Ranked #1 in New York for Commercial Litigation",
    source: "Chambers USA, 2024",
    icon: Star,
  },
  {
    title: "Tier 1 National Ranking — Commercial Litigation",
    source: 'U.S. News & World Report "Best Law Firms," 2024',
    icon: Award,
  },
  {
    title: "Litigation Department of the Year",
    source: "New York Law Journal, 2024",
    icon: Scale,
  },
  {
    title: "Top 10 Verdicts in New York",
    source: "National Law Journal, 2024",
    icon: TrendingUp,
  },
  {
    title: "Pro Bono Firm of the Year",
    source: "Legal Aid Society of New York, 2023",
    icon: Shield,
  },
];

/* ------------------------------------------------------------------ */
/*  Stat Card Component                                               */
/* ------------------------------------------------------------------ */
function StatCard({
  stat,
  index,
}: {
  stat: (typeof headlineStats)[0];
  index: number;
}) {
  const { count, ref } = useCounter(
    stat.decimals > 0 ? stat.value * 10 : stat.value,
    2200
  );

  const displayValue =
    stat.decimals > 0
      ? `${stat.prefix}${(count / 10).toFixed(stat.decimals)}${stat.suffix}`
      : `${stat.prefix}${count.toLocaleString()}${stat.suffix}`;

  return (
    <AnimatedSection delay={index * 0.12}>
      <div className="relative bg-cream-light border border-border p-8 md:p-10 text-center group hover:shadow-lg transition-shadow duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-bronze" />
        <span
          ref={ref}
          className="block font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-bronze leading-none"
        >
          {displayValue}
        </span>
        <span className="block mt-4 text-sm md:text-base tracking-wide text-taupe uppercase">
          {stat.label}
        </span>
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  Practice Area Bar Component                                       */
/* ------------------------------------------------------------------ */
function PracticeBar({
  area,
  rate,
  index,
}: {
  area: string;
  rate: number;
  index: number;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const inView = useInView(barRef, { once: true, margin: "-50px" });

  return (
    <AnimatedSection delay={index * 0.08}>
      <div ref={barRef} className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-ivory text-sm md:text-base tracking-wide">
            {area}
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-gold text-xl md:text-2xl font-semibold">
            {rate}%
          </span>
        </div>
        <div className="h-2 bg-walnut/60 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-bronze to-gold rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: `${rate}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                    */
/* ------------------------------------------------------------------ */
export default function ResultsPage() {
  return (
    <>
      {/* =============================================================
          SECTION 1 — HERO
          ============================================================= */}
      <section className="relative min-h-[50vh] flex items-center bg-espresso overflow-hidden">
        {/* Subtle decorative pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-40 pb-20 md:pt-44 md:pb-24">
          {/* Breadcrumb */}
          <AnimatedSection delay={0}>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-sand/50 mb-10"
            >
              <Link
                href="/"
                className="hover:text-gold transition-colors cursor-pointer"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-gold">Results</span>
            </nav>
          </AnimatedSection>

          {/* Label */}
          <AnimatedSection delay={0.1}>
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase font-medium text-gold mb-6">
              Proven Excellence
            </span>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={0.2}>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-ivory leading-[1.1] max-w-4xl">
              Our Track Record
              <br />
              <span className="text-gold">Speaks</span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection delay={0.35}>
            <p className="mt-8 text-lg md:text-xl text-sand/70 max-w-2xl leading-relaxed">
              Four decades of landmark verdicts, record-setting settlements, and
              unwavering advocacy. Our results reflect a singular commitment to
              achieving the best possible outcome in every case we undertake,
              across the full spectrum of complex legal matters.
            </p>
          </AnimatedSection>

          {/* Decorative line */}
          <AnimatedSection delay={0.5}>
            <div className="mt-10 h-px w-20 bg-bronze/60" />
          </AnimatedSection>
        </div>
      </section>

      {/* =============================================================
          SECTION 2 — HEADLINE STATS
          ============================================================= */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="The Numbers"
            title="A Legacy Measured in Results"
            subtitle="These figures represent real outcomes for real clients -- families protected, businesses preserved, and justice delivered."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {headlineStats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================
          SECTION 3 — LANDMARK VERDICTS & SETTLEMENTS
          ============================================================= */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Case Highlights"
            title="Landmark Verdicts & Settlements"
            subtitle="A selection of representative results that demonstrate the caliber and scope of our advocacy. Each case reflects thousands of hours of meticulous preparation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {landmarkCases.map((caseItem, i) => (
              <AnimatedSection
                key={caseItem.amount}
                delay={i * 0.08}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div className="relative bg-ivory border border-border p-8 md:p-10 group hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* Bronze accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-bronze/20 group-hover:bg-bronze transition-colors duration-500" />

                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span
                      className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold leading-none ${
                        caseItem.type === "Settlement"
                          ? "text-bronze"
                          : "text-espresso"
                      }`}
                    >
                      {caseItem.amount}
                    </span>
                    <span
                      className={`shrink-0 px-4 py-1.5 text-[11px] tracking-[0.15em] uppercase font-medium ${
                        caseItem.type === "Verdict"
                          ? "bg-espresso text-ivory"
                          : "bg-beige/30 text-walnut border border-beige/50"
                      }`}
                    >
                      {caseItem.type}
                    </span>
                  </div>

                  {/* Category */}
                  <span className="text-xs tracking-[0.2em] uppercase text-bronze font-medium mb-3">
                    {caseItem.category}
                  </span>

                  {/* Description */}
                  <p className="text-taupe text-sm md:text-base leading-relaxed flex-1">
                    {caseItem.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================
          SECTION 4 — BY THE NUMBERS (Dark Section)
          ============================================================= */}
      <section className="bg-espresso py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Practice Area Performance"
            title="Success Across Every Discipline"
            subtitle="Our commitment to excellence is reflected in consistently high success rates across all practice areas. These figures span our entire forty-year history."
            dark
          />

          <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
            {practiceAreaStats.map((item, i) => (
              <PracticeBar
                key={item.area}
                area={item.area}
                rate={item.rate}
                index={i}
              />
            ))}
          </div>

          {/* Supplementary stats row */}
          <AnimatedSection delay={0.6}>
            <div className="mt-16 md:mt-20 pt-12 border-t border-sand/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold font-semibold">
                  18
                </span>
                <span className="block mt-2 text-sm text-sand/60 tracking-wide uppercase">
                  Consecutive Years of Tier 1 Rankings
                </span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold font-semibold">
                  350+
                </span>
                <span className="block mt-2 text-sm text-sand/60 tracking-wide uppercase">
                  Trials Taken to Verdict
                </span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold font-semibold">
                  50
                </span>
                <span className="block mt-2 text-sm text-sand/60 tracking-wide uppercase">
                  States with Active Matters
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* =============================================================
          SECTION 5 — CLIENT TESTIMONIALS
          ============================================================= */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Client Voices"
            title="Trusted by Industry Leaders"
            subtitle="The confidence of our clients is the highest measure of our success. These testimonials reflect the caliber of relationships we cultivate and the outcomes we deliver."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.15}>
                <div className="relative bg-cream-light border border-border p-8 md:p-10 h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-bronze/20 mb-6 shrink-0" />

                  {/* Quote text */}
                  <p className="font-[family-name:var(--font-playfair)] text-espresso text-base md:text-lg italic leading-relaxed flex-1 mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="h-px w-12 bg-bronze/30 mb-6" />

                  {/* Attribution */}
                  <div>
                    <span className="block text-espresso font-medium text-sm tracking-wide">
                      {testimonial.name}
                    </span>
                    <span className="block text-taupe text-sm mt-1">
                      {testimonial.title}
                    </span>
                    <span className="block text-bronze text-xs tracking-wider uppercase mt-1">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================
          SECTION 6 — INDUSTRY RECOGNITION
          ============================================================= */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Accolades"
            title="Industry Recognition"
            subtitle="Our peers, publications, and professional organizations consistently recognize Holloway & Whitfield as a leader in legal excellence."
          />

          <div className="space-y-5 max-w-4xl mx-auto">
            {awards.map((award, i) => {
              const Icon = award.icon;
              return (
                <AnimatedSection key={award.title} delay={i * 0.1}>
                  <div className="relative flex items-center gap-6 md:gap-8 bg-ivory border border-border p-6 md:p-8 group hover:shadow-lg transition-all duration-500">
                    {/* Left accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-bronze/0 group-hover:bg-bronze transition-colors duration-500" />

                    {/* Icon */}
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-beige/20 border border-beige/30 rounded-sm">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-bronze" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-[family-name:var(--font-playfair)] text-espresso text-lg md:text-xl font-semibold leading-snug">
                        {award.title}
                      </h3>
                      <p className="text-taupe text-sm mt-1.5 tracking-wide">
                        {award.source}
                      </p>
                    </div>

                    {/* Decorative */}
                    <div className="hidden md:block shrink-0 w-8 h-px bg-bronze/30 group-hover:w-12 transition-all duration-500" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================================
          SECTION 7 — DISCLAIMER + CTA
          ============================================================= */}
      <section className="bg-cream-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Disclaimer */}
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <div className="inline-block px-5 py-2 border border-border bg-ivory text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Legal Disclaimer
              </div>
              <p className="text-taupe text-sm md:text-base leading-relaxed">
                The case results described on this page are not a guarantee of
                future outcomes. Each legal matter is unique, and the outcome of
                any particular case depends on a variety of factors, including the
                specific facts and circumstances involved. Prior results do not
                guarantee a similar outcome. The information presented here is for
                general informational purposes only and should not be construed as
                legal advice.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA Block */}
          <AnimatedSection delay={0.2}>
            <div className="relative bg-espresso py-16 md:py-20 px-8 md:px-16 text-center overflow-hidden">
              {/* Background texture */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)",
                  }}
                />
              </div>

              <div className="relative z-10">
                <span className="inline-block text-[11px] tracking-[0.3em] uppercase font-medium text-gold mb-6">
                  Take the First Step
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory leading-tight max-w-3xl mx-auto">
                  Every Case is Unique.
                  <br />
                  Let Us Evaluate Yours.
                </h2>
                <p className="mt-6 text-sand/70 text-lg max-w-xl mx-auto leading-relaxed">
                  Whether you are facing a complex commercial dispute, a
                  high-stakes regulatory matter, or a sensitive personal legal
                  issue, our attorneys bring the depth and determination your case
                  demands.
                </p>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-bronze text-ivory text-base md:text-lg tracking-wide hover:bg-bronze-light transition-colors duration-300 cursor-pointer group"
                  >
                    Request a Case Evaluation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                <p className="mt-6 text-sand/40 text-xs tracking-wide">
                  Confidential consultations available. No obligation.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

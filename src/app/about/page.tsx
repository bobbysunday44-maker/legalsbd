"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Scale,
  Shield,
  Users,
  Handshake,
  Award,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const values = [
  {
    number: "01",
    title: "Unwavering Integrity",
    icon: Shield,
    description:
      "We believe the law is a sacred trust between attorney and client. Every strategy we develop, every motion we file, and every negotiation we enter is grounded in absolute honesty and ethical rigor. Our reputation has been built over four decades on the principle that integrity is not negotiable -- it is the bedrock upon which lasting legal relationships are forged.",
  },
  {
    number: "02",
    title: "Relentless Advocacy",
    icon: Scale,
    description:
      "When we take on a case, we commit fully. Our attorneys pursue every viable avenue, prepare exhaustively for every contingency, and advocate with the kind of tenacity that has earned us a record of landmark verdicts and precedent-setting settlements. We do not settle for adequate results when exceptional outcomes are attainable.",
  },
  {
    number: "03",
    title: "Collaborative Excellence",
    icon: Users,
    description:
      "Our attorneys work as integrated teams, drawing on complementary expertise across practice areas to deliver comprehensive counsel. A real estate transaction benefits from our tax specialists. A corporate merger leverages our litigation team's risk assessment. This interdisciplinary approach allows us to anticipate challenges that siloed firms simply cannot see.",
  },
  {
    number: "04",
    title: "Client Partnership",
    icon: Handshake,
    description:
      "We don't just represent clients -- we partner with them. From the first consultation through case resolution and beyond, we invest in understanding our clients' businesses, families, and long-term objectives. This depth of relationship enables us to provide counsel that is not merely reactive, but genuinely strategic and forward-looking.",
  },
];

const teamMembers = [
  {
    name: "Craig Holloway",
    title: "Founding Partner",
    area: "Corporate Law",
    education: "Yale Law School",
    admissions: "NY, CT, DC",
    image: "/images/team/craig-holloway.png",
  },
  {
    name: "Diane Whitfield",
    title: "Founding Partner",
    area: "Litigation",
    education: "Harvard Law School",
    admissions: "NY, NJ, DC",
    image: "/images/team/diane-whitfield.png",
  },
  {
    name: "Priya Narayanan",
    title: "Managing Partner",
    area: "Intellectual Property",
    education: "Stanford Law School",
    admissions: "NY, CA, USPTO",
    image: "/images/team/priya-narayanan.png",
  },
  {
    name: "Jordan Kelleher",
    title: "Senior Partner",
    area: "Real Estate",
    education: "Columbia Law School",
    admissions: "NY, NJ, CT",
    image: "/images/team/jordan-kelleher.png",
  },
  {
    name: "Nathan Driscoll",
    title: "Partner",
    area: "Employment Law",
    education: "NYU School of Law",
    admissions: "NY, NJ",
    image: "/images/team/nathan-driscoll.png",
  },
  {
    name: "Gail Pemberton",
    title: "Partner",
    area: "Tax & Estate Planning",
    education: "Georgetown Law",
    admissions: "NY, DC, US Tax Court",
    image: "/images/team/gail-pemberton.png",
  },
  {
    name: "Keith Overstreet",
    title: "Partner",
    area: "Commercial Litigation",
    education: "UPenn Law School",
    admissions: "NY, PA, NJ",
    image: "/images/team/keith-overstreet.png",
  },
  {
    name: "Renee Castellano",
    title: "Senior Counsel",
    area: "Corporate M&A",
    education: "Duke Law School",
    admissions: "NY, DE, CT",
    image: "/images/team/renee-castellano.png",
  },
  {
    name: "Sierra Montoya",
    title: "Associate",
    area: "Civil Rights Litigation",
    education: "UCLA School of Law",
    admissions: "NY, CA",
    image: "/images/team/sierra-montoya.png",
  },
  {
    name: "Tomas Ferreira",
    title: "Associate",
    area: "International Trade",
    education: "Michigan Law School",
    admissions: "NY, DC, CIT",
    image: "/images/team/tomas-ferreira.png",
  },
];

const awards = [
  {
    year: "2020 - 2024",
    title: "Chambers USA -- Tier 1 Ranking",
    description:
      "Recognized in the top tier across Corporate/M&A, Litigation, and Real Estate practices for five consecutive years.",
  },
  {
    year: "2018 - 2024",
    title: 'Best Law Firms -- U.S. News & World Report',
    description:
      "Named a \"Best Law Firm\" nationally in multiple practice areas, reflecting peer and client recognition of sustained excellence.",
  },
  {
    year: "2023",
    title: "New York Super Lawyers -- Top 100",
    description:
      "Six Holloway & Whitfield attorneys named to the prestigious New York Super Lawyers Top 100 list in a single year.",
  },
  {
    year: "2022",
    title: "Pro Bono Excellence Award -- NYC Bar Association",
    description:
      "Honored for over 12,000 cumulative pro bono hours dedicated to immigrant rights, housing justice, and civil liberties.",
  },
  {
    year: "2021",
    title: "Diversity Champion -- American Bar Association",
    description:
      "Recognized for pioneering diversity and inclusion initiatives, mentorship programs, and equitable advancement practices.",
  },
  {
    year: "2019 - 2024",
    title: "Martindale-Hubbell AV Preeminent",
    description:
      "Every partner maintains the highest peer-review rating for legal ability and professional ethics.",
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 -- HERO                                           */}
      {/* ============================================================ */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/heroes/hero-office.png"
          alt="Holloway and Whitfield office interior"
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/50 to-espresso/30" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Breadcrumb"
            className="mb-6"
          >
            <ol className="flex items-center gap-2 text-sm text-sand/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-ivory transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-ivory font-medium">About</li>
            </ol>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory leading-tight mb-5"
          >
            A Tradition of Legal Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-2xl text-lg md:text-xl text-sand/80 leading-relaxed"
          >
            For over four decades, Holloway & Whitfield has set the standard for
            principled, results-driven legal representation in New York and
            beyond.
          </motion.p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 2 -- OUR STORY                                      */}
      {/* ============================================================ */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Story"
            title="Founded on Principle, Built on Results"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-4">
            {/* Left -- Editorial text */}
            <AnimatedSection direction="left" className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-walnut">
                In 1983, Craig Holloway Sr. and Diane Whitfield founded a law
                firm built on a radical premise: that exceptional legal
                representation should be defined not by billable hours, but by
                outcomes achieved. From a modest office on lower Broadway, they
                set out to prove that meticulous preparation, intellectual
                honesty, and relentless advocacy could outperform the sprawling
                machinery of New York&apos;s largest firms.
              </p>

              <p className="text-base leading-relaxed text-taupe">
                Within a decade, their approach had attracted a clientele that
                ranged from emerging technology startups to Fortune 500
                corporations. The firm&apos;s early victories in complex commercial
                litigation and pioneering corporate restructurings established a
                reputation that resonated well beyond Manhattan&apos;s courtrooms.
                Opposing counsel learned quickly that Holloway & Whitfield
                prepared as though every case would go to trial -- and frequently
                prevailed when it did.
              </p>

              <p className="text-base leading-relaxed text-taupe">
                As the firm grew, its founders remained committed to a
                deliberate, intentional culture. They recruited not simply for
                academic credentials, but for character, curiosity, and an
                intrinsic drive to serve. Every attorney who has joined the
                partnership has been mentored in the Holloway & Whitfield
                tradition: master the law, know the client, and never cut
                corners.
              </p>

              <p className="text-base leading-relaxed text-taupe">
                Today, with ten distinguished attorneys spanning eight practice
                areas, the firm remains proudly independent and selectively
                engaged. We have never pursued growth for its own sake. Instead,
                we have deepened our expertise, expanded our capabilities, and
                maintained the intimate, partner-led service model that first
                distinguished us over forty years ago. Our roots in New York
                City&apos;s legal landscape run deep, but our reach -- through
                international trade, cross-border transactions, and federal
                appellate work -- extends across the globe.
              </p>
            </AnimatedSection>

            {/* Right -- Image with decorative border */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative">
                {/* Decorative bronze border accent */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-bronze/30 hidden md:block" />
                <div className="relative overflow-hidden shadow-xl">
                  <Image
                    src="/images/office/reception.png"
                    alt="Holloway and Whitfield reception area"
                    width={720}
                    height={540}
                    unoptimized
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Caption */}
                <p className="mt-4 text-xs tracking-widest uppercase text-taupe/60">
                  Our reception at One Liberty Plaza, New York
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 -- OUR VALUES                                     */}
      {/* ============================================================ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="The Principles That Guide Every Engagement"
            subtitle="These four commitments have defined the character of our practice since 1983. They are not aspirations -- they are non-negotiable standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection
                  key={value.number}
                  delay={index * 0.1}
                  className="group"
                >
                  <div className="h-full bg-ivory border border-border/50 p-8 md:p-10 transition-all duration-500 hover:shadow-lg hover:border-bronze/30">
                    {/* Number + Icon row */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-bronze/25 group-hover:text-bronze/50 transition-colors duration-500">
                        {value.number}
                      </span>
                      <Icon className="w-6 h-6 text-bronze/40 group-hover:text-bronze transition-colors duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-espresso mb-4">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-taupe">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 -- OUR LEADERSHIP                                 */}
      {/* ============================================================ */}
      <section id="team" className="bg-cream-light py-24 md:py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Leadership"
            title="Attorneys Who Define the Standard"
            subtitle="Our team combines Ivy League credentials, decades of courtroom experience, and a genuine commitment to every client's success."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-4">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.name}
                delay={index * 0.06}
                className="group"
              >
                <div className="bg-ivory border border-border/40 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-bronze/30 hover:-translate-y-1">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.title}`}
                      fill
                      unoptimized
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Info */}
                  <div className="p-5 md:p-6">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-espresso mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-bronze mb-3">
                      {member.title}
                    </p>

                    <div className="space-y-1.5 text-xs text-taupe">
                      <p>
                        <span className="text-walnut font-medium">
                          Practice:
                        </span>{" "}
                        {member.area}
                      </p>
                      <p>
                        <span className="text-walnut font-medium">
                          Education:
                        </span>{" "}
                        {member.education}
                      </p>
                      <p>
                        <span className="text-walnut font-medium">
                          Bar Admissions:
                        </span>{" "}
                        {member.admissions}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 5 -- OFFICE & CULTURE                               */}
      {/* ============================================================ */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Office & Culture"
            title="Where Tradition Meets Forward Thinking"
            subtitle="Our environment reflects who we are: disciplined yet welcoming, established yet innovative."
          />

          {/* Image gallery -- staggered layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 md:mb-20 mt-4">
            <AnimatedSection direction="left">
              <div className="relative overflow-hidden shadow-lg">
                <Image
                  src="/images/office/conference.png"
                  alt="Conference room at Holloway and Whitfield"
                  width={720}
                  height={480}
                  unoptimized
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-xs tracking-widest uppercase text-taupe/60">
                The Whitfield Conference Room, 42nd Floor
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative overflow-hidden shadow-lg md:mt-12">
                <Image
                  src="/images/office/reception.png"
                  alt="Reception area at Holloway and Whitfield"
                  width={720}
                  height={480}
                  unoptimized
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-xs tracking-widest uppercase text-taupe/60">
                Main reception and client welcome area
              </p>
            </AnimatedSection>
          </div>

          {/* Culture text -- three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            <AnimatedSection delay={0}>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-espresso mb-4">
                Diversity as Strength
              </h3>
              <p className="text-base leading-relaxed text-taupe">
                Holloway & Whitfield has championed diversity since long before
                it became an industry talking point. Our attorneys represent a
                breadth of backgrounds, perspectives, and lived experiences that
                enrich our counsel and broaden our strategic thinking. We
                actively recruit from historically underrepresented communities
                and have maintained gender parity at the partner level for over
                a decade. Diversity is not a program here -- it is the fabric of
                who we are.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-espresso mb-4">
                Pro Bono Commitment
              </h3>
              <p className="text-base leading-relaxed text-taupe">
                Every attorney at the firm dedicates a minimum of 100 pro bono
                hours annually -- a commitment that far exceeds the New York
                State Bar&apos;s aspirational standard. Our pro bono practice focuses
                on immigrant rights, housing justice, and criminal justice
                reform. In the past five years alone, our attorneys have logged
                over 12,000 pro bono hours, securing asylum for dozens of
                families and preventing hundreds of wrongful evictions across the
                five boroughs.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-espresso mb-4">
                Mentorship & Growth
              </h3>
              <p className="text-base leading-relaxed text-taupe">
                We believe that the measure of a great firm is not only the
                quality of its current work, but the caliber of attorneys it
                develops. Every associate is paired with a senior mentor from
                their first day. Our structured advancement program provides
                clear, transparent milestones for partnership consideration. We
                invest in continuing education, sponsor attendance at national
                legal conferences, and encourage the publication of scholarly
                articles. The attorneys we develop today become the leaders our
                profession needs tomorrow.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 6 -- AWARDS & RECOGNITION                           */}
      {/* ============================================================ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Awards & Recognition"
            title="A Record of Acknowledged Excellence"
            subtitle="Industry accolades are not our objective, but they are a reflection of the standards we uphold every day."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
            {awards.map((award, index) => (
              <AnimatedSection key={award.title} delay={index * 0.08}>
                <div className="h-full bg-ivory border border-border/40 p-7 md:p-8 flex flex-col transition-all duration-500 hover:shadow-lg hover:border-bronze/30">
                  {/* Award icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 flex items-center justify-center bg-bronze/10 text-bronze">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs tracking-widest uppercase font-medium text-bronze">
                      {award.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-espresso mb-3">
                    {award.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-taupe flex-1">
                    {award.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 7 -- CTA                                            */}
      {/* ============================================================ */}
      <section className="bg-espresso py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase font-medium mb-5 text-gold">
              Take the First Step
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory leading-tight mb-6">
              Your Case Deserves Exceptional Counsel
            </h2>
            <p className="text-lg md:text-xl text-sand/70 leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you are navigating a complex business transaction,
              preparing for high-stakes litigation, or seeking strategic counsel
              on a matter of personal significance, Holloway & Whitfield brings
              four decades of proven excellence to your side. Schedule a
              confidential, no-obligation consultation with one of our partners
              today.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-bronze text-ivory text-lg tracking-wide hover:bg-bronze-light transition-colors cursor-pointer"
            >
              Schedule a Consultation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

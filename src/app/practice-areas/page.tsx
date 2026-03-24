"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  Home,
  Lightbulb,
  Users,
  Calculator,
  ChevronRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

/* ------------------------------------------------------------------ */
/*  PRACTICE AREA DATA                                                 */
/* ------------------------------------------------------------------ */

const practiceAreas = [
  { label: "Corporate Law", id: "corporate" },
  { label: "Commercial Litigation", id: "litigation" },
  { label: "Real Estate Law", id: "real-estate" },
  { label: "Intellectual Property", id: "ip" },
  { label: "Employment Law", id: "employment" },
  { label: "Tax & Estate Planning", id: "tax-estate" },
];

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-espresso overflow-hidden">
      {/* Subtle radial pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso/95 to-walnut/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-32 md:py-40">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 mb-10 text-xs tracking-[0.2em] uppercase text-sand/50"
        >
          <Link
            href="/"
            className="hover:text-gold transition-colors cursor-pointer"
          >
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gold">Practice Areas</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory leading-tight"
        >
          Areas of Practice
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 h-px w-20 bg-bronze origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-sand/70 max-w-2xl mx-auto leading-relaxed"
        >
          Comprehensive legal expertise across every discipline that matters to
          your business and personal interests.
        </motion.p>

        {/* Quick jump links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {practiceAreas.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="px-4 py-2 text-xs tracking-widest uppercase border border-sand/15 text-sand/60 hover:text-ivory hover:border-bronze/50 transition-all cursor-pointer"
            >
              {area.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  OVERVIEW                                                           */
/* ------------------------------------------------------------------ */

function Overview() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Our Expertise"
          title="A Legacy of Legal Excellence"
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-taupe leading-relaxed text-center">
              At Holloway & Whitfield, our practice areas reflect decades of
              accumulated expertise across the most demanding areas of law. Each
              practice group is led by partners who are recognized authorities in
              their fields.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-base text-taupe/80 leading-relaxed text-center">
              Our interdisciplinary approach means that when your matter touches
              multiple areas of law, our teams collaborate seamlessly to deliver
              comprehensive strategies. From boardroom transactions to courtroom
              trials, from patent portfolios to estate plans, our attorneys bring
              the full weight of the firm&apos;s institutional knowledge to bear on
              every engagement.
            </p>
          </AnimatedSection>
        </div>

        {/* Stats row */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { value: "40+", label: "Years of Practice" },
              { value: "85", label: "Attorneys" },
              { value: "6", label: "Core Practice Areas" },
              { value: "96%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-espresso">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-taupe">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SHARED PRACTICE AREA LAYOUT                                        */
/* ------------------------------------------------------------------ */

interface SubSpecialty {
  text: string;
}

interface PracticeProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  stat: { value: string; label: string };
  paragraphs: string[];
  subSpecialties: SubSpecialty[];
  bg: string;
  reverse?: boolean;
}

function PracticeSection({
  id,
  icon,
  label,
  title,
  stat,
  paragraphs,
  subSpecialties,
  bg,
  reverse = false,
}: PracticeProps) {
  return (
    <section id={id} className={`${bg} py-20 md:py-28 scroll-mt-24`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* LEFT / ICON COLUMN */}
          <div
            className={`lg:col-span-4 ${reverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <AnimatedSection direction={reverse ? "right" : "left"}>
              <div className="sticky top-32">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-bronze/10 border border-bronze/20 mb-6">
                  <span className="text-bronze">{icon}</span>
                </div>

                {/* Label */}
                <span className="inline-block text-[11px] tracking-[0.3em] uppercase font-medium text-bronze mb-3">
                  {label}
                </span>

                {/* Title */}
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-espresso leading-tight">
                  {title}
                </h2>

                <div className="mt-5 h-px w-12 bg-bronze/40" />

                {/* Stat card */}
                <div className="mt-8 p-6 bg-espresso">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-gold">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs tracking-[0.2em] uppercase text-sand/60">
                    {stat.label}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT / CONTENT COLUMN */}
          <div
            className={`lg:col-span-8 ${reverse ? "lg:order-1" : "lg:order-2"}`}
          >
            <AnimatedSection
              direction={reverse ? "left" : "right"}
              delay={0.1}
            >
              {/* Bronze left border accent */}
              <div className="border-l-2 border-bronze/30 pl-6 md:pl-10">
                <div className="space-y-5">
                  {paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-base md:text-lg text-walnut/80 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {/* Sub-specialties */}
                <div className="mt-10">
                  <h3 className="text-[11px] tracking-[0.3em] uppercase font-medium text-bronze mb-5">
                    Key Sub-Specialties
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subSpecialties.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 py-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-bronze mt-0.5 shrink-0" />
                        <span className="text-sm text-walnut/70 leading-relaxed">
                          {spec.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

function CtaSection() {
  return (
    <section className="bg-espresso py-20 md:py-28 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase font-medium text-gold mb-6">
            Get Started
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory leading-tight">
            Need Legal Guidance?
          </h2>
          <div className="mt-5 h-px w-16 bg-bronze/40 mx-auto" />
          <p className="mt-6 text-lg text-sand/70 max-w-2xl mx-auto leading-relaxed">
            Whether you are navigating a complex transaction, facing litigation,
            or planning for the future, our attorneys are ready to provide the
            counsel you need. Every engagement begins with a confidential
            consultation to understand your objectives and craft a tailored
            strategy.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-bronze text-ivory text-base tracking-wide hover:bg-bronze-light transition-colors cursor-pointer"
            >
              Schedule a Consultation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="tel:+12125551000"
              className="inline-flex items-center gap-2 px-8 py-4 border border-sand/20 text-sand/70 text-base tracking-wide hover:text-ivory hover:border-sand/40 transition-colors cursor-pointer"
            >
              (212) 555-1000
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE EXPORT                                                        */
/* ------------------------------------------------------------------ */

export default function PracticeAreasPage() {
  return (
    <>
      {/* 1. HERO */}
      <Hero />

      {/* 2. OVERVIEW */}
      <Overview />

      {/* 3. CORPORATE LAW */}
      <PracticeSection
        id="corporate"
        icon={<Scale className="w-7 h-7" />}
        label="Practice Area"
        title="Corporate Law & Governance"
        stat={{ value: "$12B+", label: "In M&A transactions closed" }}
        bg="bg-cream"
        reverse={false}
        paragraphs={[
          "Our Corporate Law & Governance practice is the cornerstone of Holloway & Whitfield. For over four decades, we have served as trusted advisors to Fortune 500 corporations, middle-market companies, private equity sponsors, and emerging growth enterprises navigating the full spectrum of corporate transactions and governance challenges.",
          "We guide clients through every stage of the corporate lifecycle -- from formation and capitalization through mergers, acquisitions, and divestitures. Our attorneys have closed more than $12 billion in aggregate M&A transactions, earning a reputation for structuring deals that protect value and minimize risk in even the most complex multi-jurisdictional arrangements.",
          "In the governance arena, we counsel boards of directors and executive leadership teams on fiduciary duties, shareholder activism, proxy contests, and regulatory compliance. Our work extends to SEC reporting obligations, Sarbanes-Oxley compliance, and the design of corporate governance frameworks that withstand scrutiny from regulators, shareholders, and the public.",
          "Our private equity and venture capital attorneys work hand-in-hand with fund sponsors and portfolio companies on leveraged buyouts, growth equity investments, PIPE transactions, and exit strategies. We understand the economics of deal-making and bring a pragmatic, business-minded perspective to every negotiation table.",
          "Whether you are a public company facing a hostile takeover bid or a startup preparing for its Series A, our corporate team delivers strategic counsel calibrated to your goals, your timeline, and your risk tolerance.",
        ]}
        subSpecialties={[
          { text: "Mergers & Acquisitions" },
          { text: "Corporate Governance & Board Advisory" },
          { text: "Securities Compliance & SEC Reporting" },
          { text: "Joint Ventures & Strategic Alliances" },
          { text: "Private Equity & Leveraged Buyouts" },
          { text: "Venture Capital & Emerging Companies" },
          { text: "Shareholder Activism & Proxy Contests" },
          { text: "Corporate Restructuring & Reorganization" },
          { text: "Cross-Border Transactions" },
          { text: "SPAC Formations & De-SPAC Transactions" },
        ]}
      />

      {/* 4. COMMERCIAL LITIGATION */}
      <PracticeSection
        id="litigation"
        icon={<Briefcase className="w-7 h-7" />}
        label="Practice Area"
        title="Commercial Litigation"
        stat={{ value: "450+", label: "Trials to verdict" }}
        bg="bg-ivory"
        reverse={true}
        paragraphs={[
          "When disputes escalate beyond negotiation, Holloway & Whitfield's litigation team stands ready. Our trial attorneys have logged more than 450 trials to verdict across federal and state courts nationwide, with a track record that has earned the respect of adversaries and judges alike. We do not shy away from the courtroom -- we thrive in it.",
          "Our Commercial Litigation practice handles the full range of complex business disputes: breach of contract actions involving hundreds of millions in claimed damages, fraud and misrepresentation claims, partnership and shareholder disputes, and trade secret misappropriation cases that carry existential stakes for the companies involved. We approach every case with the rigor it demands, from early case assessment through trial and, when necessary, appeal.",
          "In securities litigation, we represent public companies, officers, and directors in class actions, derivative suits, and SEC enforcement proceedings. Our antitrust practice defends clients against both government investigations and private treble-damage claims, with particular depth in price-fixing, monopolization, and merger challenge matters.",
          "Our appellate advocacy group includes attorneys who have argued before the United States Supreme Court, multiple federal circuit courts of appeal, and the highest courts of New York, California, and Illinois. When the trial verdict is not the final word, our appellate team ensures that your legal arguments receive their most persuasive presentation.",
          "We also maintain an active alternative dispute resolution practice, representing clients in high-value arbitrations before the AAA, JAMS, ICC, and FINRA panels. Many of our most consequential victories have come in confidential arbitration proceedings where billions of dollars hung in the balance.",
        ]}
        subSpecialties={[
          { text: "Complex Commercial Disputes" },
          { text: "Securities & Shareholder Litigation" },
          { text: "Antitrust & Competition Law" },
          { text: "Class Action Defense" },
          { text: "Appellate Practice & Strategy" },
          { text: "Fraud & Business Tort Claims" },
          { text: "International Arbitration (ICC, LCIA)" },
          { text: "FINRA & Financial Services Disputes" },
          { text: "Trade Secret Misappropriation" },
          { text: "Insurance Coverage Litigation" },
        ]}
      />

      {/* 5. REAL ESTATE LAW */}
      <PracticeSection
        id="real-estate"
        icon={<Home className="w-7 h-7" />}
        label="Practice Area"
        title="Real Estate Law"
        stat={{ value: "$8.5B", label: "In real estate transactions" }}
        bg="bg-cream"
        reverse={false}
        paragraphs={[
          "New York City is the most dynamic and demanding real estate market in the world, and Holloway & Whitfield has been at its center for more than forty years. Our Real Estate practice has guided clients through over $8.5 billion in transactions -- from landmark office tower acquisitions on Park Avenue to mixed-use development projects reshaping the Brooklyn waterfront.",
          "We represent institutional investors, developers, REITs, pension funds, family offices, and high-net-worth individuals across the full transactional spectrum. Our attorneys handle acquisitions and dispositions, joint venture structuring, construction and permanent financing, and lease negotiations for both landlords and tenants in properties spanning millions of square feet.",
          "Our land use and zoning attorneys navigate the complex regulatory landscape that governs development in New York and the tri-state area. From securing zoning variances and special permits before the Board of Standards and Appeals to negotiating development agreements with municipal authorities, we have the relationships and the regulatory knowledge to move projects from concept to certificate of occupancy.",
          "The firm's REIT practice is among the most active in the Northeast. We advise on REIT formation, qualification, and ongoing compliance, as well as the tax-efficient structuring of real estate investments through UPREIT, DownREIT, and TRS structures. Our attorneys understand the intersection of real estate law and tax law that drives investment returns.",
          "Whether you are acquiring a single trophy asset, assembling a portfolio, or developing a ground-up project that will define a neighborhood for decades, our real estate team brings the transactional sophistication and market insight that the most consequential deals demand.",
        ]}
        subSpecialties={[
          { text: "Commercial Acquisitions & Dispositions" },
          { text: "Real Estate Development & Construction" },
          { text: "Zoning, Land Use & Entitlements" },
          { text: "REIT Formation & Compliance" },
          { text: "Commercial Lease Negotiation" },
          { text: "Real Estate Finance & Mortgage Lending" },
          { text: "Condominium & Cooperative Law" },
          { text: "1031 Exchange Transactions" },
          { text: "Environmental Compliance & Remediation" },
          { text: "Affordable Housing & Tax Credits" },
        ]}
      />

      {/* 6. INTELLECTUAL PROPERTY */}
      <PracticeSection
        id="ip"
        icon={<Lightbulb className="w-7 h-7" />}
        label="Practice Area"
        title="Intellectual Property"
        stat={{ value: "1,200+", label: "Patents protected" }}
        bg="bg-ivory"
        reverse={true}
        paragraphs={[
          "In an economy increasingly driven by innovation and intangible assets, protecting intellectual property is not optional -- it is existential. Holloway & Whitfield's Intellectual Property practice combines deep technical knowledge with sophisticated legal strategy to safeguard the innovations, brands, and creative works that define our clients' competitive advantage.",
          "Our patent prosecution team includes attorneys and patent agents with advanced degrees in electrical engineering, computer science, molecular biology, and mechanical engineering. We have secured more than 1,200 patents for clients ranging from Fortune 100 technology companies to university research labs and solo inventors. We know the USPTO inside and out, and we draft patent applications that stand up to the toughest examiner scrutiny and the most aggressive invalidity challenges.",
          "On the enforcement side, our IP litigators have tried patent infringement cases in the Eastern District of Texas, the District of Delaware, the Northern District of California, and before the International Trade Commission. We also represent defendants in patent troll litigation, deploying aggressive early-stage strategies that resolve meritless cases before they drain our clients' resources.",
          "Our trademark and brand protection practice covers the full lifecycle: clearance searches, prosecution, portfolio management, opposition and cancellation proceedings before the TTAB, domain name disputes under UDRP and ACPA, and enforcement actions against counterfeiters and infringers worldwide. We understand that a brand is not just a logo -- it is the repository of your reputation.",
          "For clients in the technology sector, we negotiate and draft complex technology licensing agreements, joint development agreements, and SaaS contracts that balance IP protection with commercial flexibility. Our trade secret practice counsels companies on protection strategies and litigates misappropriation claims under both the Defend Trade Secrets Act and state law.",
        ]}
        subSpecialties={[
          { text: "Patent Prosecution & Portfolio Strategy" },
          { text: "Patent Infringement Litigation" },
          { text: "Trademark Registration & Enforcement" },
          { text: "Trade Secret Protection & Litigation" },
          { text: "Copyright Registration & Enforcement" },
          { text: "Technology Licensing & SaaS Agreements" },
          { text: "IP Due Diligence for M&A" },
          { text: "ITC Section 337 Investigations" },
          { text: "Open Source Compliance & Strategy" },
          { text: "Domain Name & Online Brand Protection" },
        ]}
      />

      {/* 7. EMPLOYMENT LAW */}
      <PracticeSection
        id="employment"
        icon={<Users className="w-7 h-7" />}
        label="Practice Area"
        title="Employment Law & Labor Relations"
        stat={{ value: "98%", label: "Favorable resolutions" }}
        bg="bg-cream"
        reverse={false}
        paragraphs={[
          "The relationship between employers and employees is governed by an intricate web of federal, state, and local laws that grows more complex with every legislative session and regulatory pronouncement. Holloway & Whitfield's Employment Law practice helps organizations and individuals navigate this landscape with confidence, achieving a 98% favorable resolution rate across all matters handled.",
          "For employers, we serve as outside employment counsel to companies ranging from multinational corporations to high-growth startups. We draft and audit employee handbooks, design compensation and equity incentive programs, negotiate executive employment agreements and separation packages, and counsel on compliance with Title VII, the ADA, the FMLA, and the ever-expanding patchwork of state and local employment laws.",
          "Our litigation team defends employers in single-plaintiff discrimination, harassment, and retaliation claims, as well as wage and hour class and collective actions under the FLSA and state wage laws. We have successfully defended companies in matters before the EEOC, state human rights agencies, and in federal and state courts nationwide. When claims lack merit, we pursue early dismissal aggressively. When cases require trial, we are prepared.",
          "On the employee side, we represent senior executives and professionals in contract negotiations, severance disputes, whistleblower retaliation claims, and enforcement of non-competition and non-solicitation agreements. We understand the dynamics of high-stakes employment relationships and advocate fiercely for our individual clients.",
          "Our labor relations attorneys advise on union organizing campaigns, collective bargaining negotiations, arbitration of grievances, and proceedings before the National Labor Relations Board. We also conduct sensitive workplace investigations into allegations of misconduct, harassment, and fraud, delivering findings that withstand legal and regulatory scrutiny.",
        ]}
        subSpecialties={[
          { text: "Workplace Discrimination & Harassment Defense" },
          { text: "ERISA & Employee Benefits Litigation" },
          { text: "Executive Compensation & Equity Programs" },
          { text: "Non-Compete & Restrictive Covenant Enforcement" },
          { text: "Wage & Hour Class Action Defense" },
          { text: "Union Negotiations & Collective Bargaining" },
          { text: "Workplace Investigations & Compliance Audits" },
          { text: "Whistleblower & Retaliation Claims" },
          { text: "Employment Contracts & Severance Agreements" },
          { text: "OSHA Compliance & Workplace Safety" },
        ]}
      />

      {/* 8. TAX & ESTATE PLANNING */}
      <PracticeSection
        id="tax-estate"
        icon={<Calculator className="w-7 h-7" />}
        label="Practice Area"
        title="Tax & Estate Planning"
        stat={{ value: "$4.2B", label: "In estates administered" }}
        bg="bg-ivory"
        reverse={true}
        paragraphs={[
          "Wealth is built over a lifetime. Preserving it across generations requires foresight, precision, and an intimate understanding of the tax code's opportunities and pitfalls. Holloway & Whitfield's Tax & Estate Planning practice has administered more than $4.2 billion in estates, serving as trusted counsel to some of the nation's most prominent families, entrepreneurs, and philanthropists.",
          "Our estate planning attorneys design comprehensive wealth transfer strategies that minimize gift and estate tax exposure while achieving our clients' personal and philanthropic objectives. We draft and administer revocable and irrevocable trusts, family limited partnerships, grantor retained annuity trusts (GRATs), qualified personal residence trusts (QPRTs), and intentionally defective grantor trusts (IDGTs) -- each structure carefully tailored to the client's asset profile and family dynamics.",
          "For clients with closely held businesses, we provide integrated succession planning that addresses both the tax and governance dimensions of transferring a family enterprise to the next generation. We have guided multi-generational transitions for family businesses valued from $10 million to over $500 million, preserving both wealth and family harmony in the process.",
          "Our tax controversy practice represents individuals, corporations, and fiduciaries in disputes with the IRS and state tax authorities. From audit defense and administrative appeals to Tax Court litigation and offers in compromise, we resolve tax controversies efficiently and favorably. Our international tax attorneys advise on FBAR and FATCA compliance, offshore voluntary disclosures, and the tax-efficient structuring of cross-border investments and business operations.",
          "The firm's charitable planning group works with philanthropically minded clients to establish private foundations, donor-advised funds, charitable remainder trusts, and charitable lead trusts. We help clients maximize the impact of their giving while capturing every available tax benefit. For family offices, we serve as outside general counsel, coordinating investment, tax, philanthropic, and governance matters under a single strategic umbrella.",
        ]}
        subSpecialties={[
          { text: "High-Net-Worth Estate Planning" },
          { text: "Trust Administration & Fiduciary Services" },
          { text: "Tax Controversy & IRS Audit Defense" },
          { text: "International Tax Planning & FATCA" },
          { text: "Charitable Planning & Private Foundations" },
          { text: "Family Office Advisory Services" },
          { text: "Business Succession Planning" },
          { text: "Generation-Skipping Transfer Strategies" },
          { text: "State & Local Tax (SALT) Planning" },
          { text: "Qualified Opportunity Zone Investments" },
        ]}
      />

      {/* 9. CTA */}
      <CtaSection />
    </>
  );
}

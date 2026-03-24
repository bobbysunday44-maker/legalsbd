"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Send,
  Shield,
  MessageSquare,
  Timer,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

/* ------------------------------------------------------------------ */
/*  TYPES & DATA                                                       */
/* ------------------------------------------------------------------ */

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  practiceArea: "",
  subject: "",
  message: "",
};

const practiceAreaOptions = [
  "Corporate Law",
  "Commercial Litigation",
  "Real Estate",
  "Intellectual Property",
  "Employment Law",
  "Tax & Estate Planning",
  "Other",
];

const offices = [
  {
    city: "New York",
    label: "Headquarters",
    address: "One Liberty Plaza, 42nd Floor",
    cityState: "New York, NY 10006",
    phone: "(212) 555-1000",
    email: "newyork@hollowaywhitfield.com",
  },
  {
    city: "Washington, D.C.",
    label: null,
    address: "1900 K Street NW, Suite 800",
    cityState: "Washington, DC 20006",
    phone: "(202) 555-2000",
    email: "dc@hollowaywhitfield.com",
  },
  {
    city: "Los Angeles",
    label: null,
    address: "2049 Century Park East, 41st Floor",
    cityState: "Los Angeles, CA 90067",
    phone: "(310) 555-3000",
    email: "losangeles@hollowaywhitfield.com",
  },
];

const faqs = [
  {
    question: "What should I expect during my initial consultation?",
    answer:
      "During your initial consultation, one of our experienced attorneys will take the time to understand your legal situation in detail. We will review any relevant documents you bring, discuss your goals and concerns, and outline the potential legal strategies available to you. This meeting is entirely confidential and carries no obligation, allowing you to make an informed decision about your next steps.",
  },
  {
    question: "How does your firm structure its fees?",
    answer:
      "We understand that transparency in billing is essential. Our fee structures vary depending on the nature of the matter and may include hourly rates, flat fees, or contingency arrangements. During your initial consultation, we will provide a clear explanation of expected costs and billing practices, so there are no surprises. We are committed to delivering exceptional value for every dollar spent on your representation.",
  },
  {
    question: "How long will my case take to resolve?",
    answer:
      "The timeline for resolving a legal matter depends on numerous factors, including the complexity of the case, the willingness of opposing parties to negotiate, and court scheduling. While we cannot guarantee specific timelines, we pride ourselves on moving matters forward efficiently without sacrificing thoroughness. During your consultation, we will provide a realistic assessment based on similar cases we have handled.",
  },
  {
    question: "Do you handle cases outside of New York?",
    answer:
      "Yes. With offices in New York, Washington D.C., and Los Angeles, our firm regularly handles matters across multiple jurisdictions. Our attorneys are licensed in numerous states and have extensive experience with federal matters. We also maintain a network of trusted co-counsel relationships for jurisdictions where additional local expertise may be beneficial.",
  },
  {
    question: "What information should I bring to my first meeting?",
    answer:
      "To make the most of your initial consultation, we recommend bringing any documents related to your legal matter, such as contracts, correspondence, court filings, or relevant financial records. A written timeline of key events can also be very helpful. If you are unsure what to bring, our intake team will provide guidance when you schedule your appointment so you feel fully prepared.",
  },
  {
    question: "How do I know if I have a viable case?",
    answer:
      "Determining the viability of a legal matter requires careful analysis of the facts, applicable law, and potential remedies. That is precisely what our initial consultation is designed to accomplish. Our attorneys will candidly assess the strengths and challenges of your situation and advise you on whether pursuing legal action is in your best interest. We believe in honest counsel above all else.",
  },
];

/* ------------------------------------------------------------------ */
/*  INPUT STYLES                                                       */
/* ------------------------------------------------------------------ */

const inputClasses =
  "w-full px-5 py-4 bg-cream border border-border rounded-none text-espresso placeholder:text-taupe/60 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none transition-colors text-sm";

const labelClasses =
  "block text-xs tracking-[0.15em] uppercase text-walnut font-medium mb-2";

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function toggleFaq(index: number) {
    setOpenFaq((prev) => (prev === index ? null : index));
  }

  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 — HERO                                            */}
      {/* ============================================================ */}
      <section className="relative bg-espresso min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(155,123,79,0.08)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-36 pb-20 md:pt-40 md:pb-24">
          {/* Breadcrumb */}
          <AnimatedSection delay={0}>
            <nav
              className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-sand/50 mb-10"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="hover:text-gold transition-colors cursor-pointer"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-gold">Contact</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory leading-tight max-w-3xl">
              Get in Touch
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="mt-6 text-lg md:text-xl text-sand/70 max-w-2xl leading-relaxed">
              We welcome the opportunity to discuss how we can serve your legal
              needs. Reach out for a confidential consultation.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mt-8 h-px w-20 bg-bronze/50" />
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 2 — CONTACT FORM + INFO                             */}
      {/* ============================================================ */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Reach Out"
            title="Contact Our Firm"
            subtitle="Complete the form below or use our direct contact information. We look forward to hearing from you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mt-12">
            {/* Left — Form (3 columns) */}
            <AnimatedSection
              className="lg:col-span-3"
              direction="left"
              delay={0.1}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className={labelClasses}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John A. Doe"
                        required
                        className={inputClasses}
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john.doe@example.com"
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className={inputClasses}
                      />
                    </div>

                    {/* Practice Area */}
                    <div>
                      <label htmlFor="practiceArea" className={labelClasses}>
                        Practice Area
                      </label>
                      <select
                        id="practiceArea"
                        name="practiceArea"
                        value={form.practiceArea}
                        onChange={handleChange}
                        required
                        className={`${inputClasses} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238B7D6F%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_16px_center] bg-no-repeat`}
                      >
                        <option value="">Select a practice area</option>
                        {practiceAreaOptions.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className={labelClasses}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Brief description of your inquiry"
                      required
                      className={inputClasses}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your legal matter or question in as much detail as you are comfortable sharing..."
                      required
                      rows={6}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group flex items-center gap-3 bg-espresso text-ivory px-8 py-4 text-sm tracking-wide font-medium hover:bg-walnut transition-colors cursor-pointer"
                    >
                      Submit Inquiry
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-taupe/70 leading-relaxed max-w-lg pt-2">
                    By submitting this form, you agree to our privacy policy.
                    Submitting this form does not create an attorney-client
                    relationship.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-cream border border-border p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-7 h-7 text-bronze" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-espresso mb-3">
                    Thank You, {form.fullName.split(" ")[0] || "Friend"}
                  </h3>
                  <p className="text-taupe leading-relaxed max-w-md mx-auto">
                    Your inquiry has been received. A member of our team will
                    review your message and respond within 24 business hours. We
                    appreciate your trust in Holloway & Whitfield.
                  </p>
                  <button
                    onClick={() => {
                      setForm(initialFormState);
                      setSubmitted(false);
                    }}
                    className="mt-8 text-sm text-bronze hover:text-bronze-light transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatedSection>

            {/* Right — Contact Info (2 columns) */}
            <AnimatedSection
              className="lg:col-span-2"
              direction="right"
              delay={0.2}
            >
              <div className="bg-cream border border-border p-8 md:p-10 space-y-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-espresso font-semibold">
                  Contact Information
                </h3>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-bronze" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-taupe font-medium mb-1">
                      Main Office
                    </p>
                    <p className="text-sm text-walnut leading-relaxed">
                      One Liberty Plaza, 42nd Floor
                      <br />
                      New York, NY 10006
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-bronze" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-taupe font-medium mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+12125551000"
                      className="text-sm text-walnut hover:text-bronze transition-colors cursor-pointer"
                    >
                      (212) 555-1000
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-bronze" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-taupe font-medium mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@hollowaywhitfield.com"
                      className="text-sm text-walnut hover:text-bronze transition-colors cursor-pointer"
                    >
                      info@hollowaywhitfield.com
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-bronze" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.15em] uppercase text-taupe font-medium mb-1">
                      Office Hours
                    </p>
                    <p className="text-sm text-walnut leading-relaxed">
                      Monday - Friday: 8:30 AM - 6:00 PM
                      <br />
                      Saturday: By Appointment
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Confidentiality Notice */}
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                  <p className="text-xs text-taupe leading-relaxed">
                    <span className="font-semibold text-walnut">
                      Confidentiality Notice:
                    </span>{" "}
                    All communications with our firm are treated as privileged
                    and confidential. Information you share is protected under
                    attorney-client privilege and will never be disclosed without
                    your express consent.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 3 — OFFICE LOCATIONS                                */}
      {/* ============================================================ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Offices"
            title="Office Locations"
            subtitle="With strategically located offices across the country, we are well-positioned to serve clients wherever their legal needs arise."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {offices.map((office, index) => (
              <AnimatedSection key={office.city} delay={index * 0.12}>
                <div className="bg-ivory border border-border p-8 h-full flex flex-col">
                  {/* Map placeholder */}
                  <div className="bg-nude-light h-44 flex items-center justify-center mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(155,123,79,0.06)_0%,_transparent_70%)]" />
                    <div className="text-center relative z-10">
                      <MapPin className="w-6 h-6 text-bronze/40 mx-auto mb-2" />
                      <span className="text-xs tracking-[0.15em] uppercase text-taupe/70 font-medium">
                        View on Map
                      </span>
                    </div>
                  </div>

                  {/* City title */}
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-espresso font-semibold mb-1">
                    {office.city}
                  </h3>
                  {office.label && (
                    <span className="text-[10px] tracking-[0.25em] uppercase text-bronze font-medium">
                      {office.label}
                    </span>
                  )}

                  <div className="mt-5 space-y-4 flex-1">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                      <p className="text-sm text-walnut leading-relaxed">
                        {office.address}
                        <br />
                        {office.cityState}
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-bronze shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                        className="text-sm text-walnut hover:text-bronze transition-colors cursor-pointer"
                      >
                        {office.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-bronze shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm text-walnut hover:text-bronze transition-colors cursor-pointer"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 4 — FAQ                                             */}
      {/* ============================================================ */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Common Questions"
            title="Frequently Asked Questions"
            subtitle="We understand that seeking legal representation can raise many questions. Here are answers to some of the most common inquiries we receive."
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-0">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.06}>
                <div className="border-b border-border">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-[family-name:var(--font-playfair)] text-lg text-espresso font-medium pr-8 group-hover:text-bronze transition-colors">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-bronze" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-taupe leading-relaxed text-[15px] pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 5 — RESPONSE COMMITMENT                             */}
      {/* ============================================================ */}
      <section className="bg-cream-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Promise"
            title="Our Commitment to You"
            subtitle="We respond to all inquiries within 24 business hours. Your initial consultation is always complimentary and confidential. We believe everyone deserves access to exceptional legal counsel."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {[
              {
                icon: Timer,
                title: "24-Hour Response",
                description:
                  "Every inquiry receives a thoughtful response from a qualified attorney within one business day. Your time matters to us.",
              },
              {
                icon: MessageSquare,
                title: "Free Initial Consultation",
                description:
                  "Your first meeting with our team is complimentary. We want you to feel confident in your choice of counsel before any commitment.",
              },
              {
                icon: Shield,
                title: "100% Confidential",
                description:
                  "Every conversation, document, and detail you share with our firm is protected by the strictest standards of attorney-client privilege.",
              },
            ].map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.12}>
                <div className="bg-ivory border border-border p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-6">
                    <card.icon className="w-6 h-6 text-bronze" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-espresso font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTION 6 — MAP PLACEHOLDER + CTA                           */}
      {/* ============================================================ */}
      <section className="bg-espresso py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Find Us"
            title="Visit Our Office"
            dark
            subtitle="Our doors are always open to clients, prospective clients, and members of the legal community."
          />

          {/* Map placeholder */}
          <AnimatedSection delay={0.1}>
            <div className="bg-walnut rounded-sm h-72 md:h-96 flex items-center justify-center relative overflow-hidden mt-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,184,122,0.04)_0%,_transparent_70%)]" />
              <div className="text-center relative z-10">
                <MapPin className="w-10 h-10 text-gold/30 mx-auto mb-4" />
                <p className="text-sand/50 text-sm tracking-[0.15em] uppercase font-medium">
                  Interactive Map Coming Soon
                </p>
                <p className="text-sand/30 text-xs mt-2">
                  One Liberty Plaza, 42nd Floor, New York, NY 10006
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.25}>
            <div className="mt-16 text-center">
              <p className="text-sand/60 text-lg leading-relaxed max-w-xl mx-auto">
                Prefer to call? Reach us directly at
              </p>
              <a
                href="tel:+12125551000"
                className="inline-block mt-4 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold hover:text-gold-light transition-colors cursor-pointer"
              >
                (212) 555-1000
              </a>
              <p className="mt-6 text-sand/40 text-sm max-w-md mx-auto leading-relaxed">
                Available Monday through Friday, 8:30 AM to 6:00 PM Eastern
                Time. After-hours calls will be returned the next business day.
              </p>
              <div className="mt-10 flex items-center justify-center gap-8">
                <Link
                  href="/practice-areas"
                  className="text-sm text-sand/50 hover:text-ivory transition-colors underline underline-offset-4 cursor-pointer"
                >
                  View Practice Areas
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-sand/50 hover:text-ivory transition-colors underline underline-offset-4 cursor-pointer"
                >
                  About Our Firm
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

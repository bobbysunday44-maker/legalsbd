import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span
          className={`inline-block text-[11px] tracking-[0.3em] uppercase font-medium mb-4 ${
            dark ? "text-gold" : "text-bronze"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
          dark ? "text-ivory" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-sand/70" : "text-taupe"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-bronze/40 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </AnimatedSection>
  );
}

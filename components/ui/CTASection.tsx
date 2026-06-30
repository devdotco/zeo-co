import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "dark" | "green";
}

export default function CTASection({
  headline = "Ready to evaluate your financing options?",
  subtext = "Submit a brief intake and ZEO will review the best potential paths for your business.",
  primaryLabel = "Find Financing",
  primaryHref = "/apply",
  secondaryLabel = "Explore Financing Options",
  secondaryHref = "/financing",
  variant = "dark",
}: CTASectionProps) {
  const bg = variant === "green"
    ? "bg-[#f5f5f5] border-[#1a4020]"
    : "bg-[#f5f5f5] border-[#e5e5e5]";

  return (
    <section className={`border-t ${bg} py-16`}>
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0f0f0f] mb-4">{headline}</h2>
        <p className="text-[#737373] mb-8 max-w-xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primaryHref}
            className="px-8 py-3 rounded-xl bg-[#0f0f0f] text-[#0f0f0f] font-semibold hover:bg-[#333333] transition-colors"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="px-8 py-3 rounded-xl border border-[#e5e5e5] text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

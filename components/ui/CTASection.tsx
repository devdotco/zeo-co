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
    ? "bg-[#0f2a14] border-[#1a4020]"
    : "bg-[#111512] border-[#1e2620]";

  return (
    <section className={`border-t ${bg} py-16`}>
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{headline}</h2>
        <p className="text-[#9aaa98] mb-8 max-w-xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primaryHref}
            className="px-8 py-3 rounded-xl bg-[#22c55e] text-black font-semibold hover:bg-[#16a34a] transition-colors"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="px-8 py-3 rounded-xl border border-[#1e2620] text-[#9aaa98] hover:text-white hover:border-[#22c55e] transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

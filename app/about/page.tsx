import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "About ZEO.co — Business Financing Navigation",
  description:
    "ZEO.co helps business owners understand, compare, and connect with financing options — without the confusion. Learn how we work, what we cover, and how we're compensated.",
  path: "/about",
  keywords: [
    "about ZEO",
    "business financing navigation",
    "how ZEO works",
    "business loan comparison",
    "financing referral platform",
  ],
});

const faqs = [
  {
    q: "Is ZEO a lender?",
    a: "No. ZEO.co is not a bank, lender, or credit union. We are a financing navigation platform that helps business owners understand their options and connect with third-party providers who may be a fit. All credit decisions are made by those providers.",
  },
  {
    q: "How does ZEO make money?",
    a: "ZEO may receive referral compensation from financing providers when a business owner is connected and proceeds with an offer. This compensation does not change the products we surface or the order we present them — we present options based on fit, not fee.",
  },
  {
    q: "Does submitting an intake affect my credit?",
    a: "The ZEO intake itself does not initiate a credit pull. Individual providers may perform soft or hard inquiries as part of their own underwriting process, which they will disclose prior to doing so.",
  },
  {
    q: "Can ZEO guarantee I'll qualify for financing?",
    a: "No. Qualification is determined entirely by third-party providers based on their own underwriting criteria. ZEO helps identify options that may be worth exploring — we never guarantee approval, terms, or rates.",
  },
  {
    q: "What industries does ZEO cover?",
    a: "ZEO currently covers 15 industries including construction, healthcare, restaurants, professional services, transportation, retail, manufacturing, real estate, and more. If your industry isn't listed, the general intake still applies to most business types.",
  },
  {
    q: "What if none of the products are a fit right now?",
    a: "That's a valid outcome, and one we don't hide. If your profile doesn't align well with available options, we'll say so and explain what factors might need to change before financing becomes viable.",
  },
];

const coverageItems = [
  {
    category: "Debt Products",
    items: [
      "SBA 7(a) Loans",
      "SBA 504 Loans",
      "USDA Business Loans",
      "Term Loans",
      "Lines of Credit",
      "Equipment Financing",
    ],
  },
  {
    category: "Revenue-Based",
    items: [
      "Merchant Cash Advances",
      "Revenue-Based Financing",
      "Invoice Factoring",
      "AR Lines of Credit",
      "Purchase Order Financing",
    ],
  },
  {
    category: "Specialty",
    items: [
      "Business Acquisition Loans",
      "Commercial Real Estate",
      "Construction Financing",
      "Startup Capital",
      "Private Credit",
      "Franchise Financing",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <PageHero
        breadcrumbs={[{ label: "About", href: "/about" }]}
        eyebrow="About ZEO.co"
        title="Helping Business Owners Find the Right Financing Path"
        subtitle="Most business owners don't need more lenders to call — they need a clearer map of what exists, what they may qualify for, and why one product fits better than another."
      />

      {/* Mission metrics */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Financing Products"
              value="20+"
              note="Across debt, revenue-based, and specialty categories"
            />
            <MetricCard
              label="Industries Covered"
              value="15"
              note="From construction to healthcare to professional services"
            />
            <MetricCard
              label="Calculators"
              value="14"
              note="DSCR, APR, payback, amortization, and more"
            />
            <MetricCard
              label="Referral Model"
              value="100%"
              note="Transparent: ZEO is compensated by providers, not borrowers"
              highlight
            />
          </div>
        </div>
      </section>

      {/* The problem + solution */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                The Problem
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 leading-snug" style={{ textWrap: "balance" } as React.CSSProperties}>
                Business financing is fragmented, jargon-heavy, and built for lenders — not borrowers.
              </h2>
              <div className="space-y-4 text-[#737373] text-sm leading-relaxed">
                <p>
                  A business owner searching for capital encounters dozens of product types — SBA 7(a),
                  MCA, factoring, revenue-based financing, equipment loans — with no clear guide to
                  which applies to their situation.
                </p>
                <p>
                  Most comparison sites are lead-gen funnels in disguise: optimized to route borrowers
                  toward the highest-margin product, not the most appropriate one. The result is
                  mismatched applications, wasted time, and sometimes financing that does more harm
                  than good.
                </p>
                <p>
                  And when something goes wrong — a declined application, an unexpected term, a product
                  that didn't fit the cash flow cycle — there's rarely anyone who explained the risk
                  upfront.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                What ZEO Does Differently
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 leading-snug" style={{ textWrap: "balance" } as React.CSSProperties}>
                Guided intake. Plain-language education. Honest comparison.
              </h2>
              <div className="space-y-3">
                {[
                  {
                    step: "Intake",
                    desc: "A structured questionnaire maps your business profile — revenue, industry, use of funds, timeline — to the products most likely to be a fit.",
                  },
                  {
                    step: "Education",
                    desc: "Each product is explained in plain terms: what it is, how repayment works, what it costs, who it's right for, and what the risks are.",
                  },
                  {
                    step: "Comparison",
                    desc: "Side-by-side views and calculators let you model real scenarios before talking to anyone. No account required.",
                  },
                  {
                    step: "Referral",
                    desc: "When you're ready, ZEO connects you with providers that may be a fit. All financing is subject to their underwriting and approval.",
                  },
                ].map(({ step, desc }) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-4"
                  >
                    <span className="flex-shrink-0 mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#0f0f0f] w-14">
                      {step}
                    </span>
                    <p className="text-sm text-[#737373] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">
              Coverage
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]" style={{ textWrap: "balance" } as React.CSSProperties}>
              20+ products across three financing categories
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-xl">
              ZEO covers the full commercial financing landscape — not just the products that are
              easiest to place.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {coverageItems.map(({ category, items }) => (
              <div
                key={category}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-5"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                  {category}
                </p>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[#737373]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency / compensation */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              How We're Compensated
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5" style={{ textWrap: "balance" } as React.CSSProperties}>
              ZEO is a referral platform, not a lender
            </h2>
            <div className="space-y-4 text-[#737373] text-sm leading-relaxed">
              <p>
                ZEO.co does not originate loans, extend credit, or hold any interest in financing
                outcomes. We are compensated by third-party providers when a business owner we refer
                proceeds with financing. This is disclosed upfront and is the standard model for
                referral-based financial platforms.
              </p>
              <p>
                Our referral compensation does not determine which products we surface or how we rank
                them. Intake results are based on profile fit, not provider margin. We may have
                relationships with some providers and not others, which means options outside our
                network are not reflected in results.
              </p>
              <p>
                We never represent ourselves as a lender, guarantor, advisor, or government agency.
                All financing is subject to underwriting, approval, and terms set entirely by the
                third-party provider.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-sm text-[#0f0f0f] hover:text-[#333333] transition-colors font-medium"
              >
                How the intake works
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/financing"
                className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#0f0f0f] transition-colors"
              >
                Browse financing products
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="Common Questions About ZEO"
        items={faqs}
      />

      <CTASection
        headline="Ready to see which financing paths may fit?"
        subtext="The intake takes a few minutes. ZEO reviews your profile and surfaces options that may qualify — subject to underwriting by third-party providers."
        primaryLabel="Start the Intake"
        primaryHref="/apply"
        secondaryLabel="Explore Products First"
        secondaryHref="/financing"
      />

      <section className="py-10 border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>
    </main>
  );
}

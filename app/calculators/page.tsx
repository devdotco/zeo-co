import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Business Financing Calculators | ZEO.co",
  description:
    "Free calculators for SBA loans, working capital, invoice factoring, MCA, equipment financing, and more. Estimate payments, costs, and financing fit before you apply.",
  path: "/calculators",
  keywords: [
    "business financing calculator",
    "SBA loan calculator",
    "working capital calculator",
    "invoice factoring calculator",
    "MCA calculator",
    "equipment financing calculator",
    "loan payment calculator",
    "business loan estimator",
    "DSCR calculator",
    "debt service coverage ratio calculator",
  ],
});

// ── Calculator data ───────────────────────────────────────────────────────────

type CalcCategory =
  | "SBA & Term Loans"
  | "Working Capital"
  | "Factoring & Receivables"
  | "Real Estate & Equipment"
  | "Acquisition & Coverage";

interface Calculator {
  title: string;
  slug: string;
  description: string;
  category: CalcCategory;
  tags?: string[];
}

const CALCULATORS: Calculator[] = [
  // SBA & Term Loans
  {
    title: "SBA 7(a) Loan Payment",
    slug: "sba-7a-loan-payment",
    description:
      "Estimate monthly principal and interest payments on an SBA 7(a) loan given loan amount, term, and current rate.",
    category: "SBA & Term Loans",
    tags: ["SBA", "7(a)"],
  },
  {
    title: "SBA 504 Project Cost",
    slug: "sba-504-project-cost",
    description:
      "Model the three-tranche structure of an SBA 504 deal: bank first mortgage, CDC debenture, and borrower equity injection.",
    category: "SBA & Term Loans",
    tags: ["SBA", "504", "CRE"],
  },
  {
    title: "Business Term Loan Payment",
    slug: "business-term-loan-payment",
    description:
      "Calculate monthly payment and total interest cost for any conventional business term loan amount and rate.",
    category: "SBA & Term Loans",
    tags: ["Term Loan"],
  },
  // Working Capital
  {
    title: "Business Line of Credit Cost",
    slug: "business-line-of-credit-cost",
    description:
      "Estimate the interest cost of drawing on a revolving credit line based on draw amount, rate, and days outstanding.",
    category: "Working Capital",
    tags: ["LOC", "Revolving"],
  },
  {
    title: "Merchant Cash Advance (MCA) Cost",
    slug: "merchant-cash-advance-cost",
    description:
      "Convert a factor rate to effective APR, total payback, and daily hold amount. Compare MCA cost to other options.",
    category: "Working Capital",
    tags: ["MCA", "Factor Rate"],
  },
  {
    title: "Revenue-Based Financing Cost",
    slug: "revenue-based-financing-cost",
    description:
      "Estimate the total cost and repayment horizon for revenue-based financing given monthly revenue and remittance rate.",
    category: "Working Capital",
    tags: ["RBF", "Revenue Share"],
  },
  // Factoring & Receivables
  {
    title: "Invoice Factoring Cost",
    slug: "invoice-factoring-cost",
    description:
      "Calculate net advance, fees, and effective cost of factoring an invoice based on face value, advance rate, and discount.",
    category: "Factoring & Receivables",
    tags: ["Factoring", "AR"],
  },
  {
    title: "Accounts Receivable Turnover",
    slug: "accounts-receivable-turnover",
    description:
      "Measure how quickly your business collects receivables. Input annual credit sales and average AR balance.",
    category: "Factoring & Receivables",
    tags: ["AR", "DSO"],
  },
  {
    title: "Purchase Order Financing Cost",
    slug: "purchase-order-financing-cost",
    description:
      "Estimate the fee and net margin impact of using PO financing to fulfill a large customer order.",
    category: "Factoring & Receivables",
    tags: ["PO Finance"],
  },
  // Real Estate & Equipment
  {
    title: "Equipment Financing Payment",
    slug: "equipment-financing-payment",
    description:
      "Estimate monthly payments on financed or leased equipment. Compare buy-vs-lease scenarios side by side.",
    category: "Real Estate & Equipment",
    tags: ["Equipment", "Lease"],
  },
  {
    title: "Commercial Real Estate Loan Payment",
    slug: "commercial-real-estate-loan-payment",
    description:
      "Calculate monthly debt service on a CRE loan with amortization schedule, balloon balance, and LTV summary.",
    category: "Real Estate & Equipment",
    tags: ["CRE", "Balloon"],
  },
  // Acquisition & Coverage
  {
    title: "Business Acquisition Loan",
    slug: "business-acquisition-loan",
    description:
      "Model acquisition financing structure: purchase price, equity injection, seller note, and SBA or conventional debt.",
    category: "Acquisition & Coverage",
    tags: ["Acquisition", "SBA"],
  },
  {
    title: "DSCR Calculator",
    slug: "dscr-calculator",
    description:
      "Calculate debt service coverage ratio from net operating income and annual debt obligations. See lender thresholds.",
    category: "Acquisition & Coverage",
    tags: ["DSCR", "Underwriting"],
  },
  {
    title: "Working Capital Needs",
    slug: "working-capital-needs",
    description:
      "Estimate how much working capital your business needs based on monthly expenses, cash cycle, and buffer targets.",
    category: "Acquisition & Coverage",
    tags: ["Working Capital"],
  },
];

const CATEGORY_ORDER: CalcCategory[] = [
  "SBA & Term Loans",
  "Working Capital",
  "Factoring & Receivables",
  "Real Estate & Equipment",
  "Acquisition & Coverage",
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M5 5h2M9 5h2M5 8h2M9 8h2M5 11h2M9 11h2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co";

function calculatorListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Business Financing Calculators",
    description:
      "Free calculators for estimating business financing costs, payments, and structures.",
    url: `${siteUrl}/calculators`,
    numberOfItems: CALCULATORS.length,
    itemListElement: CALCULATORS.map((calc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: calc.title,
      url: `${siteUrl}/calculators/${calc.slug}`,
    })),
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CalculatorsPage() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: CALCULATORS.filter((c) => c.category === cat),
  }));

  const total = CALCULATORS.length;

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <JsonLd data={calculatorListSchema()} />

      <PageHero
        breadcrumbs={[{ label: "Calculators" }]}
        eyebrow="Free Tools"
        title="Business Financing Calculators"
        subtitle={`${total} calculators for estimating loan payments, factoring costs, MCA rates, coverage ratios, and more — before you talk to a lender.`}
      />

      {/* Disclaimer banner */}
      <div className="border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-3">
          <p className="text-xs text-[#a3a3a3] leading-relaxed">
            <span className="text-[#737373] font-medium">Estimates only.</span>{" "}
            All calculator results are illustrative and based on inputs you
            provide. They are not offers, approvals, or commitments. Actual
            financing terms are set by lenders subject to underwriting and
            eligibility. Review all financing agreements with qualified counsel
            before signing.
          </p>
        </div>
      </div>

      {/* Calculator grid */}
      <main className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
        <div className="space-y-14">
          {grouped.map(({ category, items }) => (
            <section key={category} aria-labelledby={`cat-${category.replace(/\s+/g, "-").toLowerCase()}`}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  id={`cat-${category.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#0f0f0f]"
                >
                  {category}
                </span>
                <div className="flex-1 h-px bg-[#e5e5e5]" aria-hidden="true" />
                <span className="text-[0.65rem] font-medium tabular-nums text-[#a3a3a3]">
                  {items.length} tool{items.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/calculators/${calc.slug}`}
                    className="group relative flex flex-col bg-[#f5f5f5] border border-[#e5e5e5] rounded-xl p-5 hover:border-[#2e3d2c] hover:bg-[#131a12] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f0f0f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]"
                  >
                    {/* Top row: icon + tags */}
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0f2010] border border-[#e5e5e5] flex items-center justify-center text-[#0f0f0f] group-hover:border-[#0f0f0f]/30 transition-colors">
                        <CalcIcon />
                      </div>
                      {calc.tags && calc.tags.length > 0 && (
                        <div className="flex flex-wrap justify-end gap-1">
                          {calc.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[0.6rem] font-medium uppercase tracking-wide text-[#a3a3a3] bg-[#ffffff] border border-[#e5e5e5] rounded px-1.5 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-sm font-semibold text-[#0f0f0f] mb-2 leading-snug group-hover:text-[#0f0f0f] transition-colors">
                      {calc.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs text-[#737373] leading-relaxed flex-1">
                      {calc.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-[#e5e5e5] text-xs font-medium text-[#a3a3a3] group-hover:text-[#333333] transition-colors">
                      <span>Open calculator</span>
                      <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                        <ArrowRightIcon />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Estimate disclaimer */}
        <div className="mt-14">
          <ProductDisclaimer type="general" />
        </div>
      </main>

      <CTASection
        headline="Ready to find actual financing?"
        subtext="Calculators give you estimates. ZEO reviews your situation and identifies financing paths that may be a genuine fit — without the sales pressure."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Explore Financing Options"
        secondaryHref="/financing"
      />
    </div>
  );
}

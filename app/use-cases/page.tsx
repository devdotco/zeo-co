import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Business Financing Use Cases | ZEO.co",
  description:
    "Explore financing options by use case — working capital, equipment purchases, business acquisitions, real estate, payroll, and more. ZEO.co helps match your financing need to the right structure.",
  path: "/use-cases",
  keywords: [
    "business financing use cases",
    "working capital financing",
    "equipment purchase financing",
    "business acquisition financing",
    "commercial real estate financing",
    "payroll financing",
    "inventory purchase financing",
    "franchise financing",
    "debt consolidation business",
  ],
});

// ── Use Case Data ─────────────────────────────────────────────────────────────

const useCases = [
  {
    slug: "working-capital",
    title: "Working Capital & Cash Flow",
    description:
      "Cover operating expenses, manage cash flow gaps, fund payroll, or bridge seasonal revenue swings. Short- to medium-term products including lines of credit, term loans, and factoring are commonly used for this purpose.",
    products: ["Business Line of Credit", "Working Capital Loans", "Invoice Factoring", "MCA"],
    eyebrow: "Ongoing Operations",
  },
  {
    slug: "equipment-purchase",
    title: "Equipment Purchase or Upgrade",
    description:
      "Finance or lease machinery, vehicles, technology, and other capital equipment. The equipment typically serves as collateral, which may reduce other security requirements. Section 179 deduction eligibility may apply.",
    products: ["Equipment Financing", "Equipment Leasing", "SBA 7(a)", "Term Loans"],
    eyebrow: "Capital Investment",
  },
  {
    slug: "business-acquisition",
    title: "Business Acquisition",
    description:
      "Finance the purchase of an existing business, franchise, or competitor. SBA 7(a) is the most common structure for business acquisitions, often combined with a seller note and equity injection. DSCR is the primary underwriting metric.",
    products: ["SBA 7(a)", "Acquisition Financing", "Private Lending", "Seller Notes"],
    eyebrow: "Growth via M&A",
  },
  {
    slug: "commercial-real-estate",
    title: "Commercial Real Estate",
    description:
      "Purchase, refinance, or develop owner-occupied or investment commercial property. SBA 504 is designed specifically for fixed assets including real estate. Bridge loans and hard money are used when conventional timelines are too slow.",
    products: ["SBA 504", "CRE Loans", "Bridge / Hard Money", "Private Lending"],
    eyebrow: "Property & Facilities",
  },
  {
    slug: "payroll-funding",
    title: "Payroll Funding",
    description:
      "Ensure timely payroll when client payment delays create a gap. Invoice factoring and payroll-specific working capital facilities are common tools for staffing firms, contractors, and businesses with extended payment terms.",
    products: ["Invoice Factoring", "Working Capital", "Line of Credit"],
    eyebrow: "Workforce & HR",
  },
  {
    slug: "inventory-purchase",
    title: "Inventory Purchase",
    description:
      "Finance the purchase or build-out of product inventory ahead of demand. Inventory financing, purchase order financing, and asset-based revolving facilities are commonly structured around eligible inventory as collateral.",
    products: ["Inventory Financing", "PO Financing", "Asset-Based Lending", "Line of Credit"],
    eyebrow: "Supply Chain",
  },
  {
    slug: "franchise-startup",
    title: "Franchise Startup or Expansion",
    description:
      "Fund the acquisition, buildout, equipment, and initial working capital for a new franchise location or franchise system expansion. SBA 7(a) applies to franchises on the SBA Franchise Registry. Franchisor eligibility affects options.",
    products: ["SBA 7(a)", "Franchise Financing", "Equipment Financing", "CRE / Buildout"],
    eyebrow: "Franchise",
  },
  {
    slug: "debt-consolidation",
    title: "Debt Consolidation & Refinancing",
    description:
      "Restructure multiple existing business obligations into a single facility to potentially simplify payments, extend terms, or reduce effective cost. SBA 7(a) can be used for qualifying debt refinancing. Subject to lender approval.",
    products: ["Debt Refinancing", "SBA 7(a)", "Term Loans", "Private Lending"],
    eyebrow: "Balance Sheet",
  },
  {
    slug: "contract-fulfillment",
    title: "Contract Fulfillment",
    description:
      "Finance labor, materials, or procurement to fulfill a confirmed contract or purchase order. PO financing, contract financing, and factoring are commonly used by government contractors, manufacturers, and distributors.",
    products: ["PO Financing", "Contract Financing", "Invoice Factoring", "Working Capital"],
    eyebrow: "Contract Execution",
  },
  {
    slug: "growth-expansion",
    title: "Business Growth & Expansion",
    description:
      "Fund a new location, hire additional staff, launch a new product line, or enter a new market. Term loans, SBA programs, and asset-based facilities are common growth-stage tools depending on the business profile.",
    products: ["SBA 7(a)", "Term Loans", "Line of Credit", "Revenue-Based Financing"],
    eyebrow: "Scale",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
        ])}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Use Cases" },
        ]}
        eyebrow="By Use Case"
        title="Business Financing Use Cases"
        subtitle="Not all capital needs look the same. Browse common business financing scenarios and the structures typically relevant to each. All financing is subject to third-party underwriting and approval."
      />

      {/* Use Case Grid */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Use Cases
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              10 common financing scenarios
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-xl">
              Select the use case most relevant to your financing need to explore applicable structures. Eligibility and product availability vary by business profile and provider.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={`/use-cases/${useCase.slug}`}
                className="group rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 hover:border-[#0f0f0f]/40 transition-all"
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f]">
                    {useCase.eyebrow}
                  </span>
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-[#a3a3a3] group-hover:text-[#333333] transition-colors"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[#0f0f0f] group-hover:text-[#0f0f0f] transition-colors mb-2 leading-snug">
                  {useCase.title}
                </h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="pt-3 border-t border-[#e5e5e5]">
                  <p className="text-[0.6rem] uppercase tracking-[0.08em] text-[#a3a3a3] mb-2">
                    Common structures
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {useCase.products.map((product) => (
                      <span
                        key={product}
                        className="text-[0.6rem] font-medium px-2 py-0.5 rounded-full bg-[#ffffff] border border-[#e5e5e5] text-[#737373]"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <ProductDisclaimer type="general" />
          </div>
        </div>
      </section>

      {/* How to Identify Your Use Case */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Evaluation
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              Matching your need to the right structure
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-2xl">
              The intended use of capital is one of the most important factors in determining which financing structures are appropriate. Lenders often require documentation supporting how proceeds will be deployed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Define the Use of Proceeds",
                desc: "Be specific about what the capital will fund — equipment, payroll, real estate, inventory, or acquisition. Lenders typically require a clear use of proceeds and may restrict how funds can be deployed.",
              },
              {
                label: "Match Term to Need",
                desc: "Short-term needs like a payroll gap or inventory purchase are generally better suited to short-duration products. Long-term investments like real estate or equipment should be matched to longer-term structures.",
              },
              {
                label: "Consider the Collateral Available",
                desc: "Some use cases naturally generate collateral — equipment financing is secured by the equipment itself, invoice factoring is secured by receivables. Understanding your collateral position helps identify viable structures.",
              },
              {
                label: "Assess Urgency vs. Cost",
                desc: "Faster funding options — MCA, factoring, hard money — typically carry higher effective costs. If your timeline allows for a more deliberate process, lower-cost structures like SBA or conventional bank products may be available.",
              },
              {
                label: "Understand Repayment Sources",
                desc: "Where will repayment come from? Revenue, asset liquidation, refinancing, or contract payment? Lenders evaluate repayment source when structuring deals. Mismatched repayment sources increase underwriting risk.",
              },
              {
                label: "Layer If Needed",
                desc: "Some transactions are structured with multiple financing layers — for example, an SBA 7(a) for a business acquisition combined with a seller note. ZEO's intake process is designed to evaluate multi-layer scenarios.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5"
              >
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.label}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-nav to Industries and Products */}
      <section className="py-14 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-2">
                Also Browse
              </p>
              <p className="text-[#0f0f0f] font-semibold text-lg">Explore by industry or product</p>
              <p className="text-[#737373] text-sm mt-1 max-w-md">
                Browse financing by the industry you operate in, or view all available commercial financing structures.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/industries"
                className="px-6 py-2.5 rounded-xl bg-[#0f0f0f] text-white text-sm font-semibold hover:bg-[#333333] transition-colors"
              >
                Browse by Industry
              </Link>
              <Link
                href="/financing"
                className="px-6 py-2.5 rounded-xl border border-[#e5e5e5] text-[#737373] text-sm hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors"
              >
                All Financing Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Know your financing need? Let's evaluate your options."
        subtext="Submit a brief intake and ZEO will review potential financing structures for your specific use case. Subject to underwriting by third-party providers."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Talk to an Advisor"
        secondaryHref="/contact"
      />
    </>
  );
}

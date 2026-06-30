import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Buy a Business | ZEO.co",
  description:
    "Financing options for buying an existing business. Explore SBA 7(a), seller notes, acquisition loans, and private credit structures — what they cover, how they're underwritten, and what buyers typically need to qualify.",
  path: "/use-cases/buy-a-business",
  keywords: [
    "buy a business financing",
    "business acquisition loan",
    "SBA 7(a) business purchase",
    "seller note acquisition",
    "acquisition financing",
    "buy existing business",
    "business purchase loan",
    "DSCR acquisition underwriting",
    "equity injection SBA",
  ],
});

// ── FAQ Data ──────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Can I buy a business with no money down?",
    a: "Fully no-money-down acquisitions are rare in traditional lending. Most SBA 7(a) acquisitions require a minimum 10% equity injection from the buyer, which may come from personal funds, a gift letter, or a seller note subordinated to the SBA lender. Private credit deals may have different structures, but typically still require some buyer contribution. All terms are subject to underwriting and lender approval.",
  },
  {
    q: "What is DSCR and why does it matter for acquisitions?",
    a: "Debt Service Coverage Ratio (DSCR) measures the business's ability to service its debt from operating cash flow. Lenders typically calculate it as net operating income divided by total annual debt payments. A DSCR of 1.25 or higher is commonly required, meaning the business generates 25% more cash than needed to cover the proposed debt load. Low DSCR can disqualify a deal even if the business appears profitable on paper.",
  },
  {
    q: "What is a seller note and how does it factor into acquisition financing?",
    a: "A seller note is a loan from the seller to the buyer, where the seller receives payment over time rather than in full at close. In SBA-backed acquisitions, lenders may allow a seller note to count toward part of the equity injection if it is properly subordinated. The size and terms of the seller note are negotiated between buyer and seller and must be disclosed to and approved by the lender. A seller note does not eliminate the need for buyer equity in most conventional structures.",
  },
  {
    q: "How long does it take to close an acquisition loan?",
    a: "Timelines vary significantly by financing type. SBA 7(a) transactions commonly take 60 to 120 days from application to close, depending on lender, deal complexity, business type, and documentation readiness. Conventional bank acquisitions may be faster or slower. Private credit and bridge facilities can sometimes close in 2 to 4 weeks. All timelines are subject to underwriting review, appraisal, environmental assessments (if real estate is involved), and lender processing times.",
  },
];

// ── Comparison Table Data ─────────────────────────────────────────────────────

const comparisonColumns = ["SBA 7(a)", "Conventional Bank", "Private Credit"];

const comparisonRows = [
  {
    feature: "Typical loan size",
    "SBA 7(a)": "Up to $5M",
    "Conventional Bank": "$250K–$10M+",
    "Private Credit": "$500K–$20M+",
  },
  {
    feature: "Buyer equity injection",
    "SBA 7(a)": "10% minimum",
    "Conventional Bank": "20–30%+",
    "Private Credit": "Varies by deal",
  },
  {
    feature: "Time to close",
    "SBA 7(a)": "60–120 days",
    "Conventional Bank": "45–90 days",
    "Private Credit": "2–6 weeks",
  },
  {
    feature: "Personal guarantee",
    "SBA 7(a)": "Required (20%+ owners)",
    "Conventional Bank": "Common",
    "Private Credit": "Common",
  },
  {
    feature: "Seller note allowed",
    "SBA 7(a)": "Yes, if subordinated",
    "Conventional Bank": "Case-by-case",
    "Private Credit": "Case-by-case",
  },
  {
    feature: "Collateral required",
    "SBA 7(a)": "Business assets; real estate if available",
    "Conventional Bank": "Typically required",
    "Private Credit": "Typically required",
  },
  {
    feature: "DSCR typical minimum",
    "SBA 7(a)": "1.15–1.25x",
    "Conventional Bank": "1.25x+",
    "Private Credit": "Flexible",
  },
];

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function IconBuilding() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
      <rect x="3" y="7" width="14" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 18v-5h6v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 2l8 5H2l8-5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
      <path d="M2 10l3-3 3 2 4-4 4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 14c2-1 4 1 6 0s4-2 6-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
      <path d="M10 2l7 3v5c0 4-3 7-7 8C6 17 3 14 3 10V5l7-3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPrivate() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BuyABusinessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
          { name: "Buy a Business", url: "https://zeo.co/use-cases/buy-a-business" },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Use Cases", href: "/use-cases" },
          { label: "Buy a Business" },
        ]}
        eyebrow="Use Case"
        title="Buy a Business"
        subtitle="Buying an existing business involves a distinct financing category — different underwriting metrics, different structures, and different documentation requirements than most other commercial loans. This page covers what buyers typically encounter."
      />

      {/* 2. The Scenario */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
                What business acquisition financing actually covers
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  When a buyer acquires an existing business, the purchase price typically includes the value of tangible assets, intangible assets, goodwill, and — in some cases — real estate. Lenders evaluate the business being acquired, not just the buyer, which means historical cash flow, DSCR, customer concentration, industry, and owner-dependency all factor into the underwriting decision.
                </p>
                <p>
                  The most common structure for small business acquisitions is the SBA 7(a) loan, which allows buyers to finance goodwill (often the largest component of the purchase price) in a way that conventional bank loans typically do not. SBA transactions require a minimum 10% equity injection from the buyer, and lenders may accept a subordinated seller note as part of that contribution.
                </p>
                <p>
                  Larger or more complex acquisitions — particularly those involving real estate, distressed businesses, or deal structures outside SBA eligibility — may use conventional bank financing, private credit, or a combination of layers. Each structure carries different costs, timelines, documentation requirements, and lender covenants.
                </p>
                <p>
                  All financing described on this page is provided by third-party lenders. ZEO.co is not a lender and does not make credit decisions. Eligibility is subject to underwriting and approval.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="SBA 7(a) max loan size"
                value="$5M"
                note="For business acquisitions including goodwill. Subject to SBA guidelines and lender approval."
              />
              <MetricCard
                label="Typical buyer equity injection"
                value="10%"
                unit="minimum"
                note="Required for SBA acquisitions. May include a subordinated seller note."
                highlight
              />
              <MetricCard
                label="Common DSCR minimum"
                value="1.25x"
                note="Net operating income to total debt service. Lender-specific thresholds apply."
              />
              <MetricCard
                label="Typical SBA close timeline"
                value="60–120"
                unit="days"
                note="Dependent on lender, deal complexity, and documentation readiness."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Financing Options */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Financing Structures
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Common options for buying a business
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              Multiple financing paths may be relevant depending on deal size, business type, buyer profile, and whether real estate is involved. These are the structures most commonly used for small to mid-market acquisitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FinancingPathCard
              icon={<IconBuilding />}
              title="SBA 7(a) Loan"
              description="The primary government-backed structure for small business acquisitions. Allows financing of goodwill, working capital, and business assets in a single facility. Requires 10% buyer equity injection, personal guarantee from owners holding 20%+, and full lender underwriting. ZEO.co is not an SBA lender or the SBA."
              tags={["Up to $5M", "10% equity injection", "Goodwill eligible", "60–120 day close"]}
              href="/financing/sba-7a"
              highlight
            />
            <FinancingPathCard
              icon={<IconHandshake />}
              title="Seller Note"
              description="A note from the seller to the buyer, where the seller defers a portion of the purchase price and is repaid over time. Often used alongside SBA or conventional bank financing. In SBA transactions, a subordinated seller note may count toward a portion of the buyer's required equity injection. Terms negotiated between buyer and seller."
              tags={["Negotiated terms", "May count as equity", "Must be subordinated", "Disclosed to lender"]}
              href="/financing/seller-notes"
            />
            <FinancingPathCard
              icon={<IconShield />}
              title="Conventional Acquisition Loan"
              description="Bank-originated term loans structured for business acquisitions outside SBA parameters. Typically requires stronger financials, higher buyer equity (20–30%+), and may not finance goodwill. Faster than SBA in some cases, but with stricter collateral requirements. Subject to individual lender underwriting."
              tags={["20–30%+ equity", "Stronger DSCR needed", "No goodwill in some cases", "Lender-specific terms"]}
              href="/financing/acquisition-financing"
            />
            <FinancingPathCard
              icon={<IconPrivate />}
              title="Private Credit / Bridge"
              description="Non-bank lenders providing acquisition financing for deals that fall outside conventional or SBA eligibility — distressed businesses, faster timelines, complex structures, or borrowers who do not qualify for bank products. Typically carries higher rates and shorter terms. Subject to private lender underwriting."
              tags={["Faster close", "Higher cost", "Complex deals", "Non-bank lenders"]}
              href="/financing/private-lending"
            />
          </div>
        </div>
      </section>

      {/* 4. How to Evaluate Which Option Fits */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Evaluation
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              How to evaluate which structure may fit your deal
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              No two acquisitions are identical. The right structure depends on deal size, business cash flow, how much goodwill is involved, your equity position, and the timeline required. The following questions are a starting framework — not a guarantee of eligibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              {
                question: "Is the purchase price under $5M?",
                guidance:
                  "SBA 7(a) is available for acquisitions up to $5M in total loan amount. Deals above this threshold typically require conventional bank or private credit structures, which generally do not allow goodwill financing to the same degree.",
              },
              {
                question: "Does the business generate documented cash flow?",
                guidance:
                  "Lenders underwrite acquisition loans based on the target business's historical financials, not just the buyer's profile. Three years of tax returns and financial statements are standard. Low or negative DSCR is a common deal-killer regardless of financing type.",
              },
              {
                question: "How much capital can the buyer contribute?",
                guidance:
                  "SBA 7(a) requires a minimum 10% equity injection from the buyer, which may come from personal funds or a subordinated seller note. Conventional lenders typically require 20–30% or more. Deals with very limited buyer equity may be restricted to structures where the seller is willing to carry a meaningful note.",
              },
              {
                question: "Is the seller willing to carry a note?",
                guidance:
                  "Seller financing is common in small business acquisitions and can bridge the gap between what traditional lenders will provide and the total purchase price. A properly structured seller note may also count toward the SBA equity injection requirement if subordinated to the senior lender's satisfaction.",
              },
              {
                question: "What is the deal timeline?",
                guidance:
                  "SBA transactions are thorough but time-consuming — 60 to 120 days is typical. If the transaction requires a faster close, private credit or bridge facilities may be more suitable, though they typically carry a higher effective cost.",
              },
              {
                question: "Is real estate part of the transaction?",
                guidance:
                  "If the acquisition includes owner-occupied commercial real estate, an SBA 504 loan may be relevant for the property component, potentially combined with a 7(a) for business assets and goodwill. Commercial real estate within an acquisition adds complexity and may require a separate appraisal, environmental review, and title work.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.question}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.guidance}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">
              Structure Comparison
            </p>
            <ComparisonTable
              columns={comparisonColumns}
              rows={comparisonRows}
              highlightCol="SBA 7(a)"
            />
            <p className="text-xs text-[#a3a3a3] mt-3 leading-relaxed">
              Figures above are general ranges based on commonly published program guidelines and are not offers or guarantees. Actual terms are set by individual lenders and subject to underwriting. All financing is provided by third-party providers.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Common Requirements */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Common Requirements
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              What buyers typically need to document
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              Documentation requirements vary by lender and loan type, but the following items are routinely requested for business acquisitions. Incomplete documentation is one of the most common causes of delays. All requirements are subject to lender-specific underwriting criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                category: "Business Financials",
                items: [
                  "3 years of target business tax returns",
                  "3 years of P&L statements",
                  "Current year-to-date financials",
                  "Accounts receivable / payable aging",
                  "Business debt schedule",
                ],
              },
              {
                category: "Buyer Financials",
                items: [
                  "2–3 years personal tax returns (all 20%+ owners)",
                  "Personal financial statement",
                  "Business tax returns if existing business ownership",
                  "Source of equity injection documentation",
                  "Personal credit authorization",
                ],
              },
              {
                category: "Deal Documents",
                items: [
                  "Executed Letter of Intent (LOI) or purchase agreement",
                  "Business valuation or purchase price justification",
                  "Seller note term sheet (if applicable)",
                  "Business plan or buyer resume / management bio",
                  "Asset list or inventory schedule",
                ],
              },
              {
                category: "SBA-Specific (if applicable)",
                items: [
                  "SBA Form 1919 (borrower information)",
                  "SBA Form 912 (statement of personal history)",
                  "Evidence of eligible business use",
                  "Franchise disclosure if franchise acquisition",
                  "Environmental questionnaire if real estate involved",
                ],
              },
              {
                category: "Legal & Ownership",
                items: [
                  "Entity formation documents (LLC operating agreement, articles)",
                  "Ownership chart with percentages",
                  "Prior business purchase/sale agreements if applicable",
                  "Any existing liens, judgments, or bankruptcies disclosed",
                ],
              },
              {
                category: "Real Estate (if included)",
                items: [
                  "Property appraisal (FIRREA-compliant for SBA/bank)",
                  "Phase I environmental site assessment",
                  "Title commitment or title search",
                  "Survey (if required by lender)",
                  "Lease or deed documentation",
                ],
              },
            ].map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#737373] leading-relaxed">
                      <span className="mt-1 flex-shrink-0 w-1 h-1 rounded-full bg-[#0f0f0f]/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ProductDisclaimer type="acquisition" />
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ
        items={faqs}
        title="Business Acquisition Financing — Common Questions"
      />

      {/* 7. CTA */}
      <CTASection
        headline="Evaluating a business acquisition?"
        subtext="Submit a brief intake describing the deal and ZEO will review which financing structures may be relevant. All financing is subject to third-party underwriting and approval."
        primaryLabel="Start Intake"
        primaryHref="/apply"
        secondaryLabel="View All Financing Options"
        secondaryHref="/financing"
      />

      {/* 8. ProductDisclaimer */}
      <section className="pb-12 bg-[#f5f5f5] border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>
    </>
  );
}

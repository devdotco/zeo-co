import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";

export const metadata: Metadata = buildMetadata({
  title: "Expand Your Business | ZEO.co",
  description:
    "Explore financing paths that may support business expansion — new locations, equipment, acquisitions, and growth capital — subject to lender underwriting and approval.",
  path: "/use-cases/expand-business",
  keywords: [
    "business expansion financing",
    "SBA expansion loan",
    "equipment financing expansion",
    "acquisition financing",
    "business growth capital",
    "commercial real estate loan",
    "expansion working capital",
  ],
});

const breadcrumbs = [
  { label: "Use Cases", href: "/use-cases" },
  { label: "Expand Your Business" },
];

const faqItems = [
  {
    q: "How much financing might be available for a business expansion?",
    a: "Potential financing amounts vary widely by product type, lender, and your business profile. SBA 7(a) loans may go up to $5 million; SBA 504 programs can exceed that for real estate and equipment. Term loans and lines of credit through conventional or alternative lenders typically range from $50,000 into the millions. Actual amounts are subject to underwriting and lender approval — no specific amount can be guaranteed.",
  },
  {
    q: "Does expanding to a new location require a separate loan from my existing business?",
    a: "Not necessarily. Some lenders evaluate the consolidated entity, while others prefer to structure the new location as a separate borrower or subsidiary. The right structure depends on your legal entity setup, collateral, and how the lender underwrites the deal. An attorney and your accountant should be part of that conversation before you commit to a structure.",
  },
  {
    q: "Can I finance an acquisition and working capital together?",
    a: "Some SBA 7(a) loans allow proceeds to cover both acquisition costs and post-close working capital in a single transaction, subject to SBA rules and lender approval. Conventional lenders may also structure combination facilities. The terms, covenants, and collateral requirements will differ across lenders, so comparison matters.",
  },
  {
    q: "What documents do lenders typically review for an expansion financing request?",
    a: "Most lenders require two to three years of business tax returns, current financial statements (P&L and balance sheet), a business plan or expansion summary, personal tax returns for principal owners, and details on the specific use of proceeds. Equipment or real estate purchases typically require additional documentation such as a purchase agreement, appraisal, or invoice. Requirements vary by lender and product.",
  },
];

const comparisonColumns = ["SBA 7(a)", "Equipment Loan", "Term Loan", "Line of Credit"];

const comparisonRows = [
  {
    feature: "Typical use",
    "SBA 7(a)": "Acquisition, real estate, working capital",
    "Equipment Loan": "Machinery, vehicles, technology",
    "Term Loan": "General expansion capital",
    "Line of Credit": "Ongoing operational needs",
  },
  {
    feature: "Amount range",
    "SBA 7(a)": "Up to $5M",
    "Equipment Loan": "$10K – $5M+",
    "Term Loan": "$25K – $5M+",
    "Line of Credit": "$10K – $500K+",
  },
  {
    feature: "Repayment term",
    "SBA 7(a)": "Up to 25 years (RE) / 10 years",
    "Equipment Loan": "2 – 7 years",
    "Term Loan": "1 – 7 years",
    "Line of Credit": "Revolving / 1 – 2 years",
  },
  {
    feature: "Collateral",
    "SBA 7(a)": "Required when available",
    "Equipment Loan": "Equipment itself",
    "Term Loan": "Varies by lender",
    "Line of Credit": "Varies; often UCC",
  },
  {
    feature: "Speed to funding",
    "SBA 7(a)": "Weeks to months",
    "Equipment Loan": "Days to weeks",
    "Term Loan": "Days to weeks",
    "Line of Credit": "Days to weeks",
  },
  {
    feature: "Personal guarantee",
    "SBA 7(a)": "Required (20%+ owners)",
    "Equipment Loan": "Often required",
    "Term Loan": "Often required",
    "Line of Credit": "Often required",
  },
];

// Simple inline SVG icons as React nodes
function IconBuilding() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="14" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 18v-4h6v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M1 7l9-5 9 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 11l3-3 3 3 2-2 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6l2-2 3 3-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconCash() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="1" y="5" width="18" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 10h.01M16 10h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ExpandBusinessPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Use Case"
        title="Expand Your Business"
        subtitle="Growth often requires outside capital — new locations, larger equipment, acquisitions, or inventory. This guide covers the financing paths businesses commonly explore when scaling, and what lenders typically evaluate."
      />

      {/* Business scenario */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 leading-snug">
                When growth outpaces what cash flow can cover
              </h2>
              <div className="space-y-4 text-[#737373] text-sm leading-relaxed">
                <p>
                  A business poised for expansion — whether opening a second location, purchasing a
                  building, acquiring a competitor, or adding production capacity — frequently
                  encounters a gap between what its cash flow can support and what the opportunity
                  requires. That gap is where commercial financing becomes relevant.
                </p>
                <p>
                  The right financing structure depends heavily on what you are expanding into. Real
                  estate acquisitions, equipment purchases, working capital needs, and business
                  acquisitions each have distinct lender markets, underwriting criteria, and
                  documentation requirements. Selecting the wrong product type can mean higher costs,
                  mismatched repayment timelines, or an outright decline.
                </p>
                <p>
                  ZEO does not originate loans or guarantee any outcome. What we do is help you
                  understand the landscape — so you can approach lenders with a clearer picture of
                  where you may qualify and what terms are typical for your situation, subject to
                  underwriting.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="SBA 7(a) max"
                value="$5M"
                note="For acquisition, real estate, equipment, or working capital"
              />
              <MetricCard
                label="SBA 504 project"
                value="$5.5M+"
                note="For owner-occupied commercial real estate and large equipment"
                highlight
              />
              <MetricCard
                label="Typical equity injection"
                value="10–30%"
                note="Down payment lenders commonly require for expansion deals"
              />
              <MetricCard
                label="DSCR floor"
                value="1.25×"
                note="Debt service coverage ratio most lenders expect at minimum"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financing options */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Financing Paths
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Products that may apply to business expansion
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              Each option below is a potential fit depending on your expansion type, financials, and
              lender eligibility — not a guarantee of approval or specific terms.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<IconBuilding />}
              title="SBA 7(a) Loans"
              description="Government-backed financing that may cover acquisitions, real estate, working capital, and equipment in a single facility — up to $5M for eligible businesses."
              tags={["Acquisition", "Real estate", "Working capital", "Long terms"]}
              href="/financing/sba-loans"
              highlight
            />
            <FinancingPathCard
              icon={<IconGear />}
              title="Equipment Financing"
              description="Collateralized lending specifically for machinery, vehicles, technology, and production equipment. The asset itself typically secures the loan."
              tags={["Collateral-backed", "Fast close", "Preserves cash"]}
              href="/financing/equipment-financing"
            />
            <FinancingPathCard
              icon={<IconHandshake />}
              title="Acquisition Financing"
              description="Structured capital for buying an existing business — often layered between SBA debt, seller notes, and buyer equity injection."
              tags={["Business purchase", "SBA eligible", "Seller note"]}
              href="/financing/acquisition-financing"
            />
            <FinancingPathCard
              icon={<IconCash />}
              title="Business Term Loans"
              description="Conventional term debt from banks and alternative lenders, suitable for general expansion capital when SBA programs do not apply or move too slowly."
              tags={["Flexible use", "Fixed payments", "1–7 year terms"]}
              href="/financing/term-loans"
            />
          </div>
        </div>
      </section>

      {/* How to evaluate */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                Fit Evaluation
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
                Matching the product to your expansion type
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed">
                The financing product that fits your expansion depends on what you are buying and
                how quickly you need to close. Use the table as a starting reference — actual terms
                are set by individual lenders after underwriting.
              </p>
            </div>
            <div className="lg:col-span-3">
              <ComparisonTable
                columns={comparisonColumns}
                rows={comparisonRows}
                highlightCol="SBA 7(a)"
              />
              <p className="text-xs text-[#a3a3a3] mt-3">
                Ranges shown are illustrative based on commonly available products. Actual terms are
                subject to lender underwriting and approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common requirements */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              What Lenders Evaluate
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Common requirements for expansion financing
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              These factors appear across most commercial expansion deals. Meeting them does not
              guarantee approval — lenders apply their own credit policies and may require additional
              documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                heading: "Time in business",
                body:
                  "Most conventional and SBA lenders look for at least two years of operating history under the same ownership. Shorter-tenured businesses may qualify with alternative lenders, often at higher cost.",
              },
              {
                heading: "Debt service coverage",
                body:
                  "Lenders assess whether your existing and projected cash flow can service new debt. A DSCR of 1.25x or higher is a common minimum — meaning $1.25 of net operating income for every $1.00 of debt payment due.",
              },
              {
                heading: "Equity injection or down payment",
                body:
                  "Expansion loans, especially for real estate or acquisitions, typically require the business owner to contribute equity — commonly 10–30% of the project cost, depending on the program and collateral.",
              },
              {
                heading: "Collateral",
                body:
                  "Lenders generally require collateral when it is available. Real estate, equipment, and business assets are most commonly pledged. SBA loans require lenders to take available collateral but will not decline solely due to insufficient collateral.",
              },
              {
                heading: "Personal guarantee",
                body:
                  "Owners with 20% or more ownership typically must personally guarantee commercial loans. This means personal assets may be at risk if the business defaults — review this carefully before signing.",
              },
              {
                heading: "Purpose documentation",
                body:
                  "Lenders require documentation specific to the expansion: a purchase agreement for acquisitions, an invoice or quote for equipment, or a lease or purchase contract for real estate. Vague use-of-proceeds applications are routinely declined.",
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <h3 className="font-semibold text-[#0f0f0f] text-sm mb-2">{heading}</h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Common questions about expansion financing"
      />

      {/* CTA */}
      <CTASection
        headline="Ready to explore financing for your expansion?"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit for your situation, subject to lender underwriting and approval by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare Financing Options"
        secondaryHref="/financing"
        variant="dark"
      />

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="general" />
      </div>
    </div>
  );
}

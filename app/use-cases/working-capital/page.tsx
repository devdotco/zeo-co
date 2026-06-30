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
  title: "Get Working Capital | ZEO.co",
  description:
    "Explore financing structures that may help your business cover operating expenses, bridge cash flow gaps, fund payroll, or manage seasonal revenue swings. Subject to third-party underwriting.",
  path: "/use-cases/working-capital",
  keywords: [
    "working capital financing",
    "business cash flow financing",
    "working capital loan",
    "business line of credit",
    "invoice factoring working capital",
    "merchant cash advance",
    "revenue based financing",
    "short term business financing",
    "operating capital financing",
  ],
});

// ── Data ──────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What counts as working capital financing?",
    a: "Working capital financing refers to short- to medium-term structures intended to fund day-to-day operating needs — payroll, rent, supplier payments, inventory, or bridging the gap between receivables and obligations. Products commonly used include lines of credit, short-term term loans, invoice factoring, and revenue-based advances. The right structure depends on your business model, cash flow profile, and how quickly you need funds.",
  },
  {
    q: "How is a business line of credit different from a term loan for working capital?",
    a: "A business line of credit is a revolving facility — you draw what you need, repay it, and draw again. Interest typically accrues only on the outstanding balance. A working capital term loan delivers a lump sum upfront and is repaid on a fixed schedule over the agreed term. Lines of credit are generally better suited to recurring or unpredictable cash flow needs; term loans are more appropriate when you have a specific, one-time capital requirement. Both are subject to lender underwriting and approval.",
  },
  {
    q: "Does my business need to be profitable to qualify for working capital financing?",
    a: "Profitability is one of many factors lenders evaluate, but it is not always a hard requirement for every product. Some working capital structures — particularly revenue-based financing and invoice factoring — weight revenue consistency and receivables quality more heavily than bottom-line profitability. SBA-backed working capital loans typically require a positive cash flow trend and demonstrated ability to service new debt. Requirements vary by lender and product. ZEO can help you identify which structures may be relevant given your financial profile.",
  },
  {
    q: "What documents are typically required for a working capital application?",
    a: "Most lenders require recent business bank statements (typically 3–6 months), business tax returns (1–2 years), a profit and loss statement, and basic business information including time in business, entity type, and ownership structure. Some products — especially shorter-term revenue-based advances — rely primarily on bank statement cash flow analysis and have lighter documentation requirements. SBA and conventional bank products typically require more thorough documentation including a business plan, owner personal financial statements, and collateral schedules.",
  },
];

const comparisonRows = [
  {
    feature: "Typical use",
    "Line of Credit": "Recurring gaps, seasonal swings",
    "Term Loan": "One-time capital need",
    "Invoice Factoring": "B2B receivables, net-terms gaps",
    "Revenue-Based Advance": "Immediate cash need, flexible repayment",
  },
  {
    feature: "Funding speed",
    "Line of Credit": "Days to weeks",
    "Term Loan": "Days to weeks",
    "Invoice Factoring": "24–72 hours",
    "Revenue-Based Advance": "24–48 hours",
  },
  {
    feature: "Repayment structure",
    "Line of Credit": "Revolving, draw as needed",
    "Term Loan": "Fixed schedule",
    "Invoice Factoring": "When client pays invoice",
    "Revenue-Based Advance": "Daily or weekly % of revenue",
  },
  {
    feature: "Collateral typical",
    "Line of Credit": "Varies; often unsecured",
    "Term Loan": "UCC lien, varies",
    "Invoice Factoring": "Receivables",
    "Revenue-Based Advance": "UCC lien on revenue",
  },
  {
    feature: "Credit profile sensitivity",
    "Line of Credit": "Moderate–High",
    "Term Loan": "Moderate–High",
    "Invoice Factoring": "Lower — client credit matters",
    "Revenue-Based Advance": "Lower",
  },
  {
    feature: "Effective cost range",
    "Line of Credit": "Varies by lender",
    "Term Loan": "Varies by lender",
    "Invoice Factoring": "Factoring fee + advance rate",
    "Revenue-Based Advance": "Typically higher",
  },
];

// ── Icons (inline SVG kept minimal) ──────────────────────────────────────────

function IconCreditLine() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 8h16" stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="11" width="4" height="1.5" rx="0.75" fill="currentColor" />
    </svg>
  );
}

function IconTerm() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 15V9l6-5 6 5v6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="7.5" y="11" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function IconFactoring() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5h10M5 8.5h7M5 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="15" cy="13" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 13h1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconRevenue() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 14l4-5 3 3 3-4 4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WorkingCapitalPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
          { name: "Get Working Capital", url: "https://zeo.co/use-cases/working-capital" },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Use Cases", href: "/use-cases" },
          { label: "Get Working Capital" },
        ]}
        eyebrow="Use Case"
        title="Get Working Capital"
        subtitle="Your business is operating. Revenue is coming in. But timing gaps — slow-paying clients, seasonal lulls, a large supplier invoice — put pressure on cash. Several financing structures exist to address exactly this scenario."
      />

      {/* 2. The Business Scenario */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
                When revenue is real but timing is the problem
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Working capital is the difference between what your business currently has coming in and what it currently owes. When that gap is negative — or about to become negative — you are in a working capital crunch. This does not necessarily mean your business is unprofitable. It often means your receivables are slow, your payables are front-loaded, or you are growing faster than your cash flow can keep up with.
                </p>
                <p>
                  Common triggers include net-30 or net-60 payment terms from customers, a large contract requiring upfront materials or labor, a seasonal revenue dip, or unexpected operating expenses. Businesses in staffing, construction, trucking, distribution, and professional services frequently encounter this scenario.
                </p>
                <p>
                  Several financing structures are specifically designed to address working capital needs. The right structure depends on how your cash flow gap is generated, the duration of the need, the credit profile of your business, and how quickly funds are required.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="Typical funding timeline"
                value="24 hrs"
                unit="to 2 weeks"
                note="Varies by product and lender"
              />
              <MetricCard
                label="Common advance rates"
                value="70–90%"
                unit="of eligible assets"
                note="Receivables, revenue, invoices"
              />
              <MetricCard
                label="Revolving or one-time"
                value="Both"
                note="Lines revolve; term loans are one-time"
              />
              <MetricCard
                label="Revenue minimum"
                value="$10K+"
                unit="/ month typical"
                note="Varies significantly by product"
                highlight
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Relevant Financing Options */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Financing Options
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Structures that may be relevant
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              Each of the following structures is commonly used for working capital purposes. Availability, terms, and eligibility vary by lender and business profile. All financing is subject to third-party underwriting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<IconCreditLine />}
              title="Business Line of Credit"
              description="A revolving credit facility you draw on as needed and repay over time. Interest accrues only on the outstanding balance. Well-suited for recurring cash flow gaps and seasonal needs."
              tags={["Revolving", "Flexible draw", "Short–medium term"]}
              href="/financing/business-line-of-credit"
              highlight
            />
            <FinancingPathCard
              icon={<IconTerm />}
              title="Working Capital Term Loan"
              description="A lump-sum advance repaid on a fixed schedule. Useful when the working capital need is a known, one-time amount rather than an ongoing revolving requirement."
              tags={["Lump sum", "Fixed repayment", "6 mo – 3 yr"]}
              href="/financing/term-loans"
            />
            <FinancingPathCard
              icon={<IconFactoring />}
              title="Invoice Factoring"
              description="Sell outstanding B2B receivables to a factoring company for an immediate advance — typically 80–95% of face value. Repayment occurs when your client pays the invoice."
              tags={["B2B only", "No new debt", "Fast funding"]}
              href="/financing/invoice-factoring"
            />
            <FinancingPathCard
              icon={<IconRevenue />}
              title="Revenue-Based Advance"
              description="An advance against future revenue repaid as a fixed percentage of daily or weekly deposits. Fast approval and funding, typically based on bank statement cash flow analysis."
              tags={["Revenue-based", "Daily repayment", "High effective cost"]}
              href="/financing/merchant-cash-advance"
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
              Comparing common working capital structures
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl mb-8">
              The table below is a general reference. Actual terms, costs, and eligibility depend on the specific lender, your business financials, and current market conditions. This is not an offer or commitment.
            </p>
          </div>
          <ComparisonTable
            columns={["Line of Credit", "Term Loan", "Invoice Factoring", "Revenue-Based Advance"]}
            rows={comparisonRows}
            highlightCol="Line of Credit"
          />

          {/* Decision guidance below table */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                question: "Is your gap recurring or one-time?",
                guidance:
                  "If you consistently need capital between receivables and payables, a revolving line of credit may be more efficient than repeatedly taking term loans. If the need is a single defined amount, a term loan may be cleaner.",
              },
              {
                question: "Are you owed money by other businesses?",
                guidance:
                  "If your working capital shortage is largely caused by outstanding B2B invoices, invoice factoring can convert those receivables to cash quickly without taking on conventional debt.",
              },
              {
                question: "How quickly do you need funds?",
                guidance:
                  "Revenue-based advances and factoring can fund in 24–72 hours. Lines of credit and term loans through banks may take one to three weeks. Faster options typically carry a higher effective cost.",
              },
              {
                question: "What is your business credit profile?",
                guidance:
                  "Strong personal and business credit scores broaden access to lower-cost revolving lines and bank term loans. Revenue-based products weigh cash flow more heavily than credit scores and may be relevant for newer businesses.",
              },
              {
                question: "How long is the need expected to last?",
                guidance:
                  "Short-duration gaps (30–90 days) may be addressed with a factoring advance or a short-term draw. Multi-month or seasonal needs are often better matched to a revolving line with an extended availability period.",
              },
              {
                question: "What is the fully-loaded cost you can absorb?",
                guidance:
                  "Effective cost varies significantly across products. Compare total repayment amounts, not just stated rates. Revenue-based advances express cost as a factor rate — understanding the equivalent APR is important before accepting an offer.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2 leading-snug">
                  {item.question}
                </p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.guidance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Common Requirements */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Common Requirements
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
                What lenders typically evaluate
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Requirements vary by product type and individual lender. The following are general factors commonly reviewed during underwriting for working capital products. Meeting these thresholds does not guarantee approval — all financing is subject to underwriting by third-party providers.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    label: "Time in business",
                    detail:
                      "Most lenders require at least 6 months of operating history. Bank lines and SBA products typically require 2+ years.",
                  },
                  {
                    label: "Monthly revenue",
                    detail:
                      "Minimum monthly revenue thresholds vary from $10,000 (alternative products) to $50,000+ (conventional bank products).",
                  },
                  {
                    label: "Business bank statements",
                    detail:
                      "Typically 3–6 months of recent statements. Lenders assess average daily balance, deposit frequency, NSFs, and net cash flow.",
                  },
                  {
                    label: "Personal credit score",
                    detail:
                      "Credit score requirements range from 500+ (revenue-based products) to 680+ (conventional lines and SBA). Higher scores broaden options.",
                  },
                  {
                    label: "Business credit profile",
                    detail:
                      "Paydex, Experian Business, and Equifax Business scores may be reviewed. Active trade lines and clean payment history support approval.",
                  },
                  {
                    label: "Tax returns",
                    detail:
                      "Business and personal returns for 1–2 years are typically required for bank products and SBA. Alternative lenders may waive this requirement.",
                  },
                  {
                    label: "Outstanding debt obligations",
                    detail:
                      "Existing loans, MCAs, or liens will be reviewed. Multiple stacked positions may reduce eligibility for additional working capital.",
                  },
                ].map((req) => (
                  <li key={req.label} className="flex gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0f0f0f]"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="text-sm font-medium text-[#0f0f0f]">{req.label}: </span>
                      <span className="text-sm text-[#a3a3a3]">{req.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Document checklist */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">
                Typical Document Checklist
              </p>
              <div className="space-y-5">
                {[
                  {
                    category: "Always requested",
                    items: [
                      "3–6 months business bank statements",
                      "Driver's license or government ID",
                      "Business entity documents (EIN, formation docs)",
                    ],
                  },
                  {
                    category: "Commonly requested",
                    items: [
                      "Business tax returns — 1 to 2 years",
                      "Profit and loss statement (current year)",
                      "Accounts receivable aging report",
                    ],
                  },
                  {
                    category: "For bank and SBA products",
                    items: [
                      "Personal tax returns (owner)",
                      "Personal financial statement",
                      "Business plan or use of proceeds narrative",
                      "Collateral schedule (if applicable)",
                    ],
                  },
                ].map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold text-[#737373] mb-2">{group.category}</p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#a3a3a3]">
                          <svg
                            className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 text-[#0f0f0f]/60"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.5 7l3.5 3.5 5.5-6"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-[#e5e5e5]">
                <p className="text-xs text-[#a3a3a3] leading-relaxed">
                  Document requirements vary by lender and product. ZEO's intake process is designed to surface the most relevant requirements for your specific scenario before you engage with a provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ
        title="Working Capital Financing — Common Questions"
        items={faqItems}
        includeSchema
      />

      {/* 7. CTA */}
      <CTASection
        headline="Ready to explore your working capital options?"
        subtext="Submit a brief intake and ZEO will review financing structures that may be relevant to your cash flow need. All options are subject to third-party underwriting and approval."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing"
        secondaryHref="/financing"
        variant="dark"
      />

      {/* 8. Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="general" />
      </div>
    </>
  );
}

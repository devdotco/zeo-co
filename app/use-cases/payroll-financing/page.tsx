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
  title: "Cover Payroll | ZEO.co",
  description:
    "Explore financing structures that may help your business cover payroll when client payments are delayed or cash flow gaps arise. Invoice factoring, lines of credit, and working capital options. Subject to third-party underwriting.",
  path: "/use-cases/payroll-financing",
  keywords: [
    "payroll financing",
    "cover payroll financing",
    "payroll funding",
    "invoice factoring payroll",
    "staffing company financing",
    "business line of credit payroll",
    "working capital payroll gap",
    "payroll bridge financing",
    "small business payroll funding",
  ],
});

// ── Data ──────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Can I use invoice factoring specifically to cover payroll?",
    a: "Invoice factoring is one of the most commonly used tools for covering payroll gaps in businesses with outstanding B2B receivables — particularly staffing firms, contractors, and service businesses on net-30 or net-60 terms. A factoring company advances a percentage of your outstanding invoice value (typically 80–95%) and collects directly from your clients. Because repayment is tied to your clients paying their invoices rather than your cash flow, factoring can be a practical fit when your receivables are solid but your payment timing is misaligned with your payroll schedule. All factoring arrangements are subject to underwriting and provider-specific terms.",
  },
  {
    q: "How quickly can a business access funds to meet a payroll deadline?",
    a: "Speed depends heavily on the product. Invoice factoring and merchant cash advances are typically the fastest, with funding possible in 24–72 hours once an account is established. Business lines of credit that are already open can fund same-day. Setting up a new line of credit with a bank may take 1–3 weeks. SBA-backed working capital loans carry longer timelines — often 30–90 days. If payroll is a recurring concern rather than a one-time emergency, establishing a line of credit or factoring facility before the gap occurs is generally more practical than seeking emergency capital under time pressure.",
  },
  {
    q: "Do I need to disclose that I'm using financing for payroll?",
    a: "Most lenders ask how proceeds will be used during the application process. Working capital and payroll are among the most common and accepted uses for short-term financing products. Invoice factoring is somewhat distinct — you are selling receivables, not borrowing, so use of proceeds is less of a formal requirement, though factoring companies may ask about your business context. Being accurate and consistent in how you describe your use of funds is important for all applications. ZEO does not provide legal or compliance advice — consult your own advisors for specific guidance.",
  },
  {
    q: "What industries most commonly use payroll financing?",
    a: "Staffing and temporary workforce companies are the most frequent users of payroll-specific financing because their cost structure is almost entirely labor and their revenue depends on client collections on net terms. Other common industries include construction (subcontractors often wait 60–90 days for payment), government contracting, healthcare staffing, trucking, cleaning and facility services, and other professional service businesses that bill on completion rather than in advance. The underlying pattern is consistent: labor costs are due immediately, but revenue is collected later. Financing structures that convert receivables to cash bridge that gap.",
  },
];

const comparisonRows = [
  {
    feature: "Typical use",
    "Invoice Factoring": "Convert outstanding invoices to cash",
    "Line of Credit": "Draw as needed for recurring gaps",
    "Term Loan": "Lump sum for a defined payroll need",
    "Revenue-Based Advance": "Fast cash against future revenue",
  },
  {
    feature: "Funding speed",
    "Invoice Factoring": "24–72 hours",
    "Line of Credit": "Same-day (if open) / 1–3 weeks (new)",
    "Term Loan": "Days to weeks",
    "Revenue-Based Advance": "24–48 hours",
  },
  {
    feature: "Repayment source",
    "Invoice Factoring": "Client pays invoice to factor",
    "Line of Credit": "Business repays from revenue",
    "Term Loan": "Fixed schedule from cash flow",
    "Revenue-Based Advance": "Daily or weekly % of deposits",
  },
  {
    feature: "Collateral typical",
    "Invoice Factoring": "Outstanding receivables",
    "Line of Credit": "Varies; often unsecured",
    "Term Loan": "UCC lien, varies",
    "Revenue-Based Advance": "UCC lien on revenue",
  },
  {
    feature: "Credit sensitivity",
    "Invoice Factoring": "Lower — client credit matters",
    "Line of Credit": "Moderate–High",
    "Term Loan": "Moderate–High",
    "Revenue-Based Advance": "Lower",
  },
  {
    feature: "Effective cost",
    "Invoice Factoring": "Factoring fee + advance rate",
    "Line of Credit": "Varies by lender",
    "Term Loan": "Varies by lender",
    "Revenue-Based Advance": "Typically higher",
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconFactoring() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5h10M5 8.5h7M5 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="15" cy="13" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 13h1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

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

function IconRevenue() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 14l4-5 3 3 3-4 4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PayrollFinancingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
          { name: "Cover Payroll", url: "https://zeo.co/use-cases/payroll-financing" },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Use Cases", href: "/use-cases" },
          { label: "Cover Payroll" },
        ]}
        eyebrow="Use Case"
        title="Cover Payroll"
        subtitle="Your employees need to be paid on time, every time. But client payments move on their own schedule — net-30, net-60, or later. Several financing structures are designed specifically for this gap."
      />

      {/* 2. The Business Scenario */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                When the work is done but the payment hasn't arrived
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Payroll is one of the most time-sensitive obligations a business carries. Unlike rent or supplier invoices — which may offer some flexibility — employees expect payment on a consistent, predictable schedule. Missing a payroll cycle damages trust, creates legal exposure, and can trigger immediate employee departures.
                </p>
                <p>
                  The core problem is structural for many businesses: labor costs are incurred and paid weekly or biweekly, while client revenue is collected on net terms — sometimes 30, 60, or even 90 days after the work is complete. This mismatch is especially acute for staffing firms, government contractors, construction subcontractors, and service businesses billing on completion.
                </p>
                <p>
                  The scenario does not necessarily indicate a struggling business. A growing company winning larger contracts may face its most significant payroll gap precisely when business is accelerating. Several financing structures address this pattern specifically, with invoice factoring being the most commonly used tool for payroll-driven cash gaps in businesses with outstanding B2B receivables.
                </p>
                <p>
                  All financing is subject to third-party underwriting and approval. Availability and terms vary by lender, business profile, and product type.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="Common funding speed"
                value="24–72"
                unit="hours (factoring)"
                note="Once a factoring account is established"
              />
              <MetricCard
                label="Typical advance rate"
                value="80–95%"
                unit="of invoice face value"
                note="Varies by provider and client quality"
              />
              <MetricCard
                label="Revolving or one-time"
                value="Both"
                note="Lines revolve; factoring is per-invoice"
              />
              <MetricCard
                label="Time in business typical"
                value="6 mo+"
                note="Requirements vary significantly by product"
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
            <h2 className="text-2xl font-semibold text-white mb-2">
              Structures that may be relevant
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              The following structures are commonly used by businesses that need to bridge a gap between labor costs and client collections. Eligibility, terms, and availability vary by lender and business profile. All financing is subject to third-party underwriting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<IconFactoring />}
              title="Invoice Factoring"
              description="Sell outstanding B2B receivables to a factoring company for an immediate advance — typically 80–95% of face value. Repayment occurs when your client pays the invoice, not from your operating cash flow."
              tags={["B2B invoices", "24–72 hr funding", "No monthly payment"]}
              href="/financing/invoice-factoring"
              highlight
            />
            <FinancingPathCard
              icon={<IconCreditLine />}
              title="Business Line of Credit"
              description="A revolving facility you draw on as needed and repay over time. A pre-established line means capital is available the moment a payroll gap appears, without requiring a new application each cycle."
              tags={["Revolving", "Flexible draw", "Pre-approved access"]}
              href="/financing/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<IconTerm />}
              title="Working Capital Term Loan"
              description="A lump-sum advance repaid on a fixed schedule. Most appropriate when the payroll gap is a defined, one-time amount rather than an ongoing structural mismatch between labor costs and collections."
              tags={["Lump sum", "Fixed repayment", "Defined amount"]}
              href="/financing/term-loans"
            />
            <FinancingPathCard
              icon={<IconRevenue />}
              title="Revenue-Based Advance"
              description="An advance against future revenue repaid as a percentage of daily or weekly deposits. Approval is primarily based on bank statement cash flow. Fast to access, but carries a higher effective cost — review total repayment carefully."
              tags={["Fast funding", "Revenue-based", "High effective cost"]}
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
            <h2 className="text-2xl font-semibold text-white mb-2">
              Comparing structures for payroll coverage
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl mb-8">
              The table below reflects general characteristics. Actual terms, costs, and eligibility depend on the specific lender, your financials, and current market conditions. This is not an offer or commitment.
            </p>
          </div>

          <ComparisonTable
            columns={["Invoice Factoring", "Line of Credit", "Term Loan", "Revenue-Based Advance"]}
            rows={comparisonRows}
            highlightCol="Invoice Factoring"
          />

          {/* Decision guidance below table */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                question: "Do you have outstanding B2B invoices?",
                guidance:
                  "If your payroll gap exists because clients owe you money on net terms, invoice factoring may convert those receivables to cash without creating a new repayment obligation from your operating deposits. The factor is repaid when your client pays — not from your bank account.",
              },
              {
                question: "Is this a recurring gap or a one-time shortfall?",
                guidance:
                  "If payroll pressure happens every cycle because of consistent net-term billing, a revolving structure — factoring facility or line of credit — addresses the pattern rather than a single event. A term loan is better suited to a defined, one-time payroll need.",
              },
              {
                question: "How urgently do you need funds?",
                guidance:
                  "If payroll is days away, factoring and revenue-based advances typically fund in 24–72 hours once an account is active. Establishing a line of credit or factoring facility before a gap occurs is strongly preferable to seeking emergency capital under deadline pressure.",
              },
              {
                question: "What is the credit quality of your clients?",
                guidance:
                  "For invoice factoring, the creditworthiness of your clients — not your own business — is a primary underwriting factor. Strong enterprise or government clients make receivables easier to factor and may result in better advance rates and lower fees.",
              },
              {
                question: "Are your clients willing to receive payment notices from a third party?",
                guidance:
                  "Notification factoring requires notifying your clients that their invoice has been sold and that payment should be remitted to the factoring company. Non-notification arrangements exist but are less common. Consider your client relationships when evaluating factoring.",
              },
              {
                question: "What is the fully-loaded cost you can absorb?",
                guidance:
                  "Factoring fees, factor rates, and APR-equivalent costs vary widely. Compare the total repayment amount across structures — not just stated rates. A revenue-based advance that funds quickly may carry a factor rate of 1.2x–1.5x or more, meaning you repay significantly more than you received.",
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
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                What lenders and factors typically evaluate
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Requirements vary by product and individual provider. The following factors are commonly reviewed during underwriting for payroll-related financing. Meeting these thresholds does not guarantee approval — all financing is subject to underwriting by third-party providers.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    label: "Time in business",
                    detail:
                      "Most lenders require at least 6 months of operating history. Bank lines and SBA products typically require 2+ years. Some factoring companies work with businesses as young as 3 months.",
                  },
                  {
                    label: "Invoice quality and client creditworthiness",
                    detail:
                      "For factoring, the factor evaluates your clients' ability and history of paying invoices. Invoices to creditworthy, established businesses are easiest to factor.",
                  },
                  {
                    label: "Monthly revenue",
                    detail:
                      "Minimum thresholds range from $10,000/month (alternative products) to $50,000+/month (conventional lines). Factoring is often sized off invoice volume rather than a monthly revenue floor.",
                  },
                  {
                    label: "Business bank statements",
                    detail:
                      "Typically 3–6 months of recent statements. Lenders assess average daily balance, deposit frequency, NSF occurrences, and overall cash flow pattern.",
                  },
                  {
                    label: "Personal credit score",
                    detail:
                      "Score requirements range from 500+ (alternative and factoring) to 680+ (conventional lines, SBA). Higher scores widen the range of available structures.",
                  },
                  {
                    label: "Outstanding liens and stacked positions",
                    detail:
                      "Existing MCAs, UCC blanket liens, or multiple stacked funding positions may reduce eligibility or require payoff before new funding is approved.",
                  },
                  {
                    label: "Accounts receivable aging",
                    detail:
                      "Factoring companies typically require an AR aging report. Invoices older than 90 days or disputed invoices are generally ineligible. A clean AR schedule supports higher advance rates.",
                  },
                ].map((req) => (
                  <li key={req.label} className="flex gap-3 list-none">
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
                    category: "For invoice factoring",
                    items: [
                      "Accounts receivable aging report",
                      "Sample invoices and client contracts",
                      "Client contact information for verification",
                      "Articles of incorporation or operating agreement",
                    ],
                  },
                  {
                    category: "For lines of credit and term loans",
                    items: [
                      "Business tax returns — 1 to 2 years",
                      "Profit and loss statement (current year)",
                      "Personal tax returns (owner)",
                      "Personal financial statement",
                    ],
                  },
                  {
                    category: "For SBA and bank products",
                    items: [
                      "Business plan or use of proceeds narrative",
                      "Balance sheet",
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
                  Document requirements vary by lender and product type. ZEO's intake process is designed to surface the most relevant documentation requirements for your specific scenario before you engage with a provider.
                </p>
              </div>
            </div>
          </div>

          {/* Industries callout */}
          <div className="mt-10 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Common Industries
            </p>
            <p className="text-sm text-[#737373] mb-4 max-w-2xl">
              Payroll financing structures are most commonly used by businesses where labor costs precede client collections. Industries that frequently encounter this scenario include:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Staffing & Temp Agencies",
                "Construction & Subcontractors",
                "Government Contractors",
                "Healthcare Staffing",
                "Trucking & Logistics",
                "IT Services & Consulting",
                "Cleaning & Facility Services",
                "Security Services",
                "Professional Services",
              ].map((industry) => (
                <span
                  key={industry}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] text-[#737373]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ
        title="Payroll Financing — Common Questions"
        items={faqItems}
        includeSchema
      />

      {/* 7. CTA */}
      <CTASection
        headline="Need to cover payroll? Let's look at your options."
        subtext="Submit a brief intake and ZEO will review financing structures that may be relevant to your payroll gap. All options are subject to third-party underwriting and approval."
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

import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Improve Cash Flow | ZEO.co",
  description:
    "Explore financing structures that may help your business manage cash flow gaps, cover operating expenses, bridge seasonal revenue swings, or fund payroll. Subject to third-party underwriting.",
  path: "/use-cases/cash-flow",
  keywords: [
    "cash flow financing",
    "improve business cash flow",
    "business working capital",
    "invoice factoring cash flow",
    "line of credit cash flow",
    "business cash flow gap",
    "revenue-based financing",
    "merchant cash advance alternative",
    "business cash flow solutions",
  ],
});

// ── Data ──────────────────────────────────────────────────────────────────────

const financingOptions = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 9h16" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 13h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Business Line of Credit",
    description:
      "A revolving credit facility that lets you draw funds as needed and repay on your schedule. Often the most flexible structure for recurring cash flow gaps, seasonal shortfalls, or bridging receivables. Availability and terms are subject to lender underwriting.",
    tags: ["Revolving", "Flexible draw", "Short-term", "No collateral required (varies)"],
    href: "/financing/line-of-credit",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4h12v12H4z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 8h12M8 8v8" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "Invoice Factoring",
    description:
      "Sell outstanding invoices to a third-party factor at a discount in exchange for immediate cash. Useful for businesses with long payment terms (net-30 to net-90) or a growing receivables backlog. Not structured as a loan; fees and recourse obligations apply.",
    tags: ["Receivables-based", "Fast funding", "B2B focus", "Non-dilutive"],
    href: "/financing/invoice-factoring",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Short-Term Working Capital Loan",
    description:
      "A fixed-term loan disbursed as a lump sum and repaid over a defined period — typically 3 to 24 months. Suited for one-time cash flow events such as a large purchase, a gap between contract payment cycles, or a seasonal inventory build.",
    tags: ["Fixed term", "Lump sum", "3–24 months", "Revenue-based repayment (varies)"],
    href: "/financing/working-capital",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Merchant Cash Advance",
    description:
      "An advance against future receivables or card revenue, repaid via a daily or weekly holdback. May offer very fast access to capital, but typically carries significantly higher effective costs than traditional structures. Review total repayment carefully.",
    tags: ["Fast approval", "High effective cost", "Revenue-based", "No fixed payment"],
    href: "/financing/merchant-cash-advance",
  },
];

const evaluationCriteria = [
  {
    label: "Frequency of the gap",
    body: "Recurring gaps — seasonal fluctuation, extended payment terms — are generally better addressed by a revolving line of credit. One-time events like a large order or missed payment may be more appropriate for a term advance.",
  },
  {
    label: "Source of the shortfall",
    body: "If the gap stems from slow-paying clients, invoice factoring converts receivables directly to cash without adding traditional debt. If the gap is operational, a working capital loan or line may be more appropriate.",
  },
  {
    label: "How quickly you need funds",
    body: "Lines of credit and MCAs typically fund faster than SBA or bank products. Faster funding options often carry higher costs. Match urgency to cost tolerance.",
  },
  {
    label: "Your repayment capacity",
    body: "Fixed daily or weekly repayment (common with MCAs) can compound a cash flow problem. Revolving lines and invoice facilities that scale with actual cash flows tend to be lower-risk for already-tight operations.",
  },
  {
    label: "Business age and revenue",
    body: "Most structured working capital products require at least 6–12 months in business and a minimum monthly revenue threshold. Startup businesses have fewer options; invoice factoring can be accessible earlier if receivables exist.",
  },
];

const commonRequirements = [
  { label: "Time in business", value: "6–24+ months", note: "Varies by product and lender" },
  { label: "Monthly revenue", value: "$10K–$25K+", note: "Typical minimum for most products" },
  { label: "Credit score", value: "500–650+", note: "Owner personal credit reviewed" },
  { label: "Bank statements", value: "3–6 months", note: "Standard documentation request" },
  { label: "Outstanding AR", value: "Required for factoring", note: "Eligible invoices only" },
  { label: "Collateral", value: "Often unsecured", note: "UCC filing may apply; varies by structure" },
];

const faqItems = [
  {
    q: "What is the fastest way to access working capital for a cash flow gap?",
    a: "Merchant cash advances and some invoice factoring arrangements can fund in 24–72 hours. Business lines of credit from online lenders may fund within a few business days. Traditional bank lines and SBA products typically take longer due to underwriting requirements. Faster options generally carry higher effective costs — review total repayment, not just the rate, before accepting any offer.",
  },
  {
    q: "Is invoice factoring the same as a business loan?",
    a: "No. Invoice factoring is typically structured as the sale of a receivable to a third-party factor, not a traditional loan. The factor advances a percentage of the invoice value (commonly 70–90%) and collects the receivable directly. The remaining balance, minus fees, is remitted to you upon collection. Because it is not a loan in all structures, it may affect your balance sheet differently. Review any factoring agreement with qualified counsel.",
  },
  {
    q: "Can I use an SBA loan to improve cash flow?",
    a: "SBA 7(a) loans can be used for working capital purposes and may offer favorable terms relative to non-bank options. However, SBA programs involve a more involved underwriting process, documentation requirements, and longer approval timelines. They are generally better suited for businesses with a documented history and some lead time before the funding need arises.",
  },
  {
    q: "Will applying for working capital financing affect my credit score?",
    a: "Most lenders perform a soft inquiry during initial prequalification, which does not affect your score. A hard inquiry is typically performed later in the underwriting process and may have a modest, temporary impact on personal credit. Multiple hard inquiries in a short window are often treated as a single inquiry by credit bureaus for rate-shopping purposes. Confirm the credit pull type with each lender before submitting a full application.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CashFlowPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
          { name: "Improve Cash Flow", url: "https://zeo.co/use-cases/cash-flow" },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Use Cases", href: "/use-cases" },
          { label: "Improve Cash Flow" },
        ]}
        eyebrow="Use Case"
        title="Improve Cash Flow"
        subtitle="Cash flow gaps are among the most common operational challenges for small and mid-sized businesses. Several financing structures may help — each with different cost profiles, funding timelines, and eligibility requirements. All financing is subject to third-party underwriting and approval."
      />

      {/* 2. The Business Scenario */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-white mb-5 leading-snug">
                When revenue exists but cash is constrained
              </h2>
              <div className="space-y-4 text-sm text-[#9aaa98] leading-relaxed">
                <p>
                  A profitable business can still run short on cash. Extended payment terms from clients,
                  seasonal revenue cycles, rapid growth outpacing collections, unexpected expenses, or a
                  single delayed invoice can create a gap between cash in and cash out — even when the
                  underlying business is healthy.
                </p>
                <p>
                  This is different from a business that needs capital to grow. Cash flow financing is
                  typically shorter-term, tied to the operating cycle, and structured to be repaid from
                  near-term receivables or revenue. The goal is to bridge the gap, not fund a
                  long-horizon investment.
                </p>
                <p>
                  Common triggers include: a large customer on net-60 terms, a payroll date that falls
                  before client payment, a seasonal trough in a cyclical business, or a one-time outlay
                  that precedes incoming revenue. In each case, the business has the capacity to repay —
                  the question is timing.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-4">
                Common causes of cash flow gaps
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Extended client payment terms",
                    detail: "Net-30 to net-90 terms mean revenue is earned but not yet received.",
                  },
                  {
                    label: "Seasonal revenue cycles",
                    detail: "Off-peak quarters require operating capital not covered by current revenue.",
                  },
                  {
                    label: "Growth outpacing collections",
                    detail: "Rapid scaling increases expenses before receivables catch up.",
                  },
                  {
                    label: "Delayed contract payments",
                    detail: "Government or enterprise clients often have longer payment windows.",
                  },
                  {
                    label: "Inventory build-ahead",
                    detail: "Purchasing stock before seasonal demand creates a short-term gap.",
                  },
                  {
                    label: "Unexpected operating expenses",
                    detail: "Equipment repair, tax liabilities, or emergency costs disrupt cash position.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-3 items-start rounded-lg border border-[#1e2620] bg-[#0a0d0b] px-4 py-3"
                  >
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-medium text-[#eef2ec]">{item.label}</p>
                      <p className="text-xs text-[#6b7e69] mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Financing Options */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Financing Structures
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Options that may apply to cash flow needs
            </h2>
            <p className="text-[#9aaa98] text-sm max-w-2xl">
              These structures are commonly considered for cash flow improvement. Suitability depends on
              your business profile, revenue, time in business, and the nature of the gap. Subject to
              underwriting by third-party providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {financingOptions.map((option) => (
              <FinancingPathCard
                key={option.title}
                icon={option.icon}
                title={option.title}
                description={option.description}
                tags={option.tags}
                href={option.href}
                highlight={option.highlight}
              />
            ))}
          </div>

          <div className="mt-6">
            <ProductDisclaimer type="general" />
          </div>
        </div>
      </section>

      {/* 4. How to Evaluate Which Option Fits */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Evaluation Framework
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Choosing the right structure for your situation
            </h2>
            <p className="text-[#9aaa98] text-sm max-w-2xl">
              Not all cash flow products work the same way. The right structure depends on why the gap
              exists, how long it will last, and what your business can realistically repay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {evaluationCriteria.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-5"
              >
                <p className="text-sm font-semibold text-[#eef2ec] mb-2">{item.label}</p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Common Requirements */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Typical Requirements
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              What lenders commonly look at
            </h2>
            <p className="text-[#9aaa98] text-sm max-w-2xl">
              Requirements vary significantly across products and lenders. The figures below reflect
              general ranges across the working capital and cash flow financing category — not specific
              lender requirements. Actual eligibility is determined by third-party providers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {commonRequirements.map((req) => (
              <MetricCard
                key={req.label}
                label={req.label}
                value={req.value}
                note={req.note}
              />
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#1e2620] bg-[#111512] p-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
              What to prepare
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Bank statements",
                  detail:
                    "Most lenders request 3–6 months of business bank statements to assess average daily balances and cash flow consistency.",
                },
                {
                  title: "Business tax returns",
                  detail:
                    "1–2 years of business tax returns may be required for larger facilities or SBA products. Some online lenders waive this for smaller amounts.",
                },
                {
                  title: "Accounts receivable aging",
                  detail:
                    "For invoice factoring, a current AR aging report and copies of eligible invoices are typically required at application.",
                },
                {
                  title: "Basic business formation docs",
                  detail:
                    "Articles of incorporation, EIN, business license, and ownership documents are standard requests across most lenders.",
                },
              ].map((doc) => (
                <div key={doc.title}>
                  <p className="text-xs font-semibold text-[#eef2ec] mb-1">{doc.title}</p>
                  <p className="text-xs text-[#6b7e69] leading-relaxed">{doc.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ
        title="Cash Flow Financing — Common Questions"
        items={faqItems}
      />

      {/* 7. CTA */}
      <CTASection
        headline="Cash flow gap affecting your business?"
        subtext="Submit a brief intake and ZEO will review potential financing structures for your situation. All financing is subject to third-party underwriting and approval."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="View All Financing Options"
        secondaryHref="/financing"
      />

      {/* 8. ProductDisclaimer */}
      <section className="pb-12 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>
    </>
  );
}

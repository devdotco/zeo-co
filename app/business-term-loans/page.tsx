import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Business Term Loans | ZEO.co",
  description:
    "Understand how business term loans work, who may qualify, typical requirements, costs, and how they compare to other financing options. Subject to underwriting by third-party providers.",
  path: "/business-term-loans",
  keywords: [
    "business term loans",
    "commercial term loan",
    "small business loan",
    "fixed rate business loan",
    "long term business financing",
    "business loan requirements",
    "business loan rates",
    "term loan vs line of credit",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2.5" y="3.5" width="13" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 7.5h13M6 2v3M12 2v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function RepeatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 6h9a3 3 0 0 1 0 6H3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 3.5L3 6l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2.5L3.5 5v4.5c0 3 2.3 5.7 5.5 6.5 3.2-.8 5.5-3.5 5.5-6.5V5L9 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6.5 9.5l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h12M3 13h8M3 5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="14" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M10.5 2L4 10h6l-2.5 6L16 8h-6l.5-6z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Constants ─────────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Financing Options", href: "/financing" },
  { label: "Business Term Loans" },
];

const FAQ_ITEMS = [
  {
    q: "What is a business term loan and how does it differ from a line of credit?",
    a: "A business term loan provides a lump-sum disbursement that you repay over a fixed schedule — typically monthly — with a defined end date. A line of credit is revolving: you draw and repay repeatedly up to a limit, paying interest only on what you've drawn. Term loans suit one-time capital needs like equipment purchases or expansion projects, while lines of credit are generally better for managing variable cash flow or recurring working capital gaps.",
  },
  {
    q: "What credit score may be needed to qualify for a business term loan?",
    a: "Lender requirements vary widely. Many conventional bank term loans prefer personal credit scores of 680 or higher, with some requiring 720+. Online and alternative lenders may consider borrowers with scores in the 600–650 range, often at higher rates and with additional documentation requirements. Your business credit profile, revenue history, and time in business are weighed alongside personal credit. Subject to individual lender underwriting standards.",
  },
  {
    q: "How long does it typically take to receive funds after applying?",
    a: "Timelines depend heavily on the lender and loan type. Traditional bank and credit union term loans may take two to six weeks due to more extensive underwriting. Some online lenders can fund in as little as one to three business days for smaller loan amounts with less documentation. SBA-backed term loans often take 30 to 90 days given the additional approval layer. These are general observations, not guarantees — your actual timeline depends on the lender, your documentation readiness, and current processing volumes.",
  },
  {
    q: "Are personal guarantees typically required?",
    a: "For most small business term loans — particularly those under a few million dollars — lenders commonly require a personal guarantee from owners holding 20% or more of the business. This means the owner takes on personal liability if the business cannot repay. Some lenders may also require collateral such as real estate, equipment, or business assets. Review all terms with qualified legal and financial advisors before signing.",
  },
  {
    q: "What can proceeds from a business term loan be used for?",
    a: "Term loan proceeds are generally flexible and may be used for a wide range of business purposes: purchasing or upgrading equipment, funding a buildout or renovation, hiring and payroll, acquiring inventory, refinancing higher-cost debt, or supporting a business acquisition. Some lenders place restrictions on use of proceeds — for example, prohibiting real estate speculation or personal expenses. Always confirm eligible uses with your specific lender and review any covenant language in the loan agreement.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Disbursement",
    "Term Loan": "Lump sum upfront",
    "Line of Credit": "Draw as needed",
    "Merchant Cash Advance": "Lump sum upfront",
    "SBA Loan": "Lump sum (most programs)",
  },
  {
    feature: "Repayment",
    "Term Loan": "Fixed schedule",
    "Line of Credit": "Revolving / minimum",
    "Merchant Cash Advance": "Daily / weekly % of sales",
    "SBA Loan": "Fixed schedule",
  },
  {
    feature: "Typical term",
    "Term Loan": "1 – 10 years",
    "Line of Credit": "6 months – 3 years",
    "Merchant Cash Advance": "3 – 18 months",
    "SBA Loan": "5 – 25 years",
  },
  {
    feature: "Cost structure",
    "Term Loan": "Interest + fees",
    "Line of Credit": "Interest on drawn amount",
    "Merchant Cash Advance": "Factor rate (can be high)",
    "SBA Loan": "Interest + guarantee fee",
  },
  {
    feature: "Credit profile",
    "Term Loan": "Moderate to strong",
    "Line of Credit": "Moderate to strong",
    "Merchant Cash Advance": "Flexible (revenue-focused)",
    "SBA Loan": "Strong + eligibility reqs",
  },
  {
    feature: "Speed to fund",
    "Term Loan": "Days to weeks",
    "Line of Credit": "Days to weeks",
    "Merchant Cash Advance": "1 – 3 business days",
    "SBA Loan": "30 – 90+ days",
  },
];

const STEPS = [
  {
    label: "Assess your need",
    body: "Define the specific capital requirement — how much, for what purpose, and over what timeframe. A clear use-of-proceeds narrative strengthens your application and helps match you to the right loan structure.",
  },
  {
    label: "Gather documentation",
    body: "Most lenders will request recent business tax returns, bank statements (typically 3–12 months), a profit and loss statement, a balance sheet, and basic business information. Having these ready before you apply shortens underwriting timelines.",
  },
  {
    label: "Submit and underwrite",
    body: "The lender reviews your credit profile, business financials, collateral, and overall risk. They may request additional documentation or clarification during this stage. Underwriting depth varies significantly between traditional banks and online lenders.",
  },
  {
    label: "Review the offer",
    body: "If approved, you'll receive a term sheet or loan agreement detailing the principal, interest rate (fixed or variable), repayment schedule, fees, collateral requirements, covenants, and any prepayment penalties. Review all terms carefully — ideally with legal and financial advisors.",
  },
  {
    label: "Fund and execute",
    body: "Once you accept and complete any closing requirements, funds are disbursed — typically to your designated business bank account. Repayment begins per the agreed schedule, usually monthly.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BusinessTermLoansPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Financing"
        title="Business Term Loans"
        subtitle="A fixed sum of capital, repaid on a defined schedule. Term loans are one of the most common and flexible financing structures available to established businesses — covering everything from expansion projects to equipment acquisition and debt refinancing."
      />

      {/* ── Metrics snapshot ── */}
      <section className="py-10 border-b border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical loan amounts"
              value="$25K – $5M+"
              note="Varies by lender and business profile"
            />
            <MetricCard
              label="Repayment terms"
              value="1 – 10 yrs"
              note="Longer terms available for real estate"
            />
            <MetricCard
              label="Funding speed"
              value="1 day – 6 wks"
              note="Depends on lender type and documentation"
            />
            <MetricCard
              label="Min. time in business"
              value="1 – 2 yrs"
              note="Common threshold; some lenders differ"
              highlight
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-3">
            Figures above are general market observations, not offers or guarantees. All terms subject to underwriting by third-party lenders.
          </p>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Potential fit
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2 leading-snug">
              Who may be a candidate for a term loan
            </h2>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              Term loans aren't the right structure for every situation. They generally suit businesses with a concrete, one-time capital need, a predictable revenue base to support fixed payments, and a track record lenders can evaluate. Below are common characteristics of businesses that may qualify — subject to individual lender underwriting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                heading: "Established operating history",
                body: "Lenders typically look for at least one to two years of business operations with documented financial history. Startups and early-stage companies often face more limited options within traditional term loan structures.",
              },
              {
                heading: "Consistent, verifiable revenue",
                body: "Most lenders require demonstrable annual revenue — often starting around $100,000–$250,000 for smaller term loans — to assess debt service capacity. Revenue documentation (bank statements, tax returns) is central to underwriting.",
              },
              {
                heading: "Defined capital purpose",
                body: "Term loans suit businesses with a specific use of proceeds: acquiring equipment, funding a buildout, purchasing inventory in bulk, or consolidating higher-cost debt. Businesses with ongoing, variable capital needs may find a line of credit a better fit.",
              },
              {
                heading: "Capacity to support fixed payments",
                body: "Unlike revenue-based products that flex with cash flow, term loans carry a fixed monthly obligation. Businesses should model whether their cash flow can reliably cover principal and interest payments across the full loan term, including slower periods.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] mt-2" />
                  <h3 className="font-medium text-[#0f0f0f] text-sm leading-snug">{item.heading}</h3>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed pl-4">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Process
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              How business term lending works
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed">
              The application and underwriting process varies between lenders, but most term loans follow a similar arc — from initial documentation through funding. Understanding each stage helps set realistic expectations and improves your preparation.
            </p>
          </div>
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[15px] top-6 bottom-6 w-px bg-[#e5e5e5] md:hidden" aria-hidden="true" />
            <div className="space-y-4">
              {STEPS.map((step, i) => (
                <div key={step.label} className="flex gap-4 items-start">
                  {/* Step number */}
                  <div className="relative flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#e5e5e5] bg-[#ffffff] text-[0.6875rem] font-semibold text-[#0f0f0f] tabular-nums">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4 pb-4">
                    <p className="text-sm font-medium text-[#0f0f0f] mb-1">{step.label}</p>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Common use cases ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Use cases
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Common purposes for business term loans
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed">
              Term loans are broadly applicable across industries and business stages. Below are typical scenarios where this structure may be well-suited — though actual use-of-proceeds eligibility depends on the specific lender and loan program.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                title: "Equipment and machinery",
                body: "Financing new or used equipment outright — manufacturing machinery, commercial vehicles, medical devices, restaurant equipment — with a repayment term that can align with the asset's useful life.",
              },
              {
                title: "Leasehold improvements and build-outs",
                body: "Funding physical space improvements such as a restaurant fit-out, clinic renovation, or office expansion where the capital need is large and the benefit is long-term.",
              },
              {
                title: "Business acquisition",
                body: "Acquiring an existing business, franchise, or practice often requires a structured term loan — sometimes in conjunction with seller financing or an SBA 7(a) loan — to cover the purchase price.",
              },
              {
                title: "Inventory and seasonal build",
                body: "Purchasing a large inventory position ahead of a peak season or locking in bulk pricing, where a lump sum is more efficient than drawing repeatedly from a revolving line.",
              },
              {
                title: "Hiring and team expansion",
                body: "Funding a significant staffing increase — sales team build-out, skilled trades hiring, or operational headcount — ahead of anticipated revenue growth.",
              },
              {
                title: "Debt consolidation and refinancing",
                body: "Rolling multiple higher-cost obligations — merchant cash advances, short-term notes, or credit card balances — into a single term loan at a potentially lower effective cost.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <h3 className="text-sm font-medium text-[#0f0f0f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typical requirements ── */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Eligibility
              </p>
              <h2 className="text-2xl font-semibold text-white mb-3 leading-snug">
                Typical lender requirements
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Requirements vary materially between traditional banks, credit unions, and online lenders. The thresholds below represent general observations across the market — not the requirements of any specific lender. All financing is subject to third-party underwriting.
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Personal credit score",
                    value: "600 – 720+",
                    note: "Conventional banks often require 680–720+; alternative lenders may work with lower scores at higher rates.",
                  },
                  {
                    label: "Time in business",
                    value: "1 – 2 years",
                    note: "Most lenders require at least 12 months of operating history. Longer histories generally improve terms.",
                  },
                  {
                    label: "Annual revenue",
                    value: "$100K – $250K+",
                    note: "Minimum revenue thresholds vary by loan size and lender. Lenders assess revenue consistency as much as volume.",
                  },
                  {
                    label: "Debt service coverage",
                    value: "1.25x+",
                    note: "Many lenders look for business cash flow sufficient to cover loan payments with a meaningful cushion.",
                  },
                ].map((req) => (
                  <div key={req.label} className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="text-xs font-medium text-[#737373]">{req.label}</span>
                      <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">{req.value}</span>
                    </div>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed">{req.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Documentation checklist
              </p>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] overflow-hidden">
                {[
                  { doc: "Business tax returns", detail: "Typically 2 most recent years" },
                  { doc: "Personal tax returns", detail: "For all owners with 20%+ equity" },
                  { doc: "Bank statements", detail: "3–12 months business checking" },
                  { doc: "Profit & loss statement", detail: "Year-to-date, prepared or compiled" },
                  { doc: "Balance sheet", detail: "Current period" },
                  { doc: "Business formation documents", detail: "Articles, operating agreement, or similar" },
                  { doc: "Government-issued ID", detail: "For all principal owners" },
                  { doc: "Business debt schedule", detail: "Existing loans and obligations" },
                ].map((item, i, arr) => (
                  <div
                    key={item.doc}
                    className={`flex items-start gap-3 px-4 py-3 ${i < arr.length - 1 ? "border-b border-[#e5e5e5]" : ""}`}
                  >
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8.5L6.5 11L12 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium text-[#0f0f0f]">{item.doc}</p>
                      <p className="text-xs text-[#a3a3a3]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#a3a3a3] mt-2 leading-relaxed">
                Actual documentation requirements are set by the individual lender. Some lenders require significantly more or less documentation depending on loan size and program type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost discussion ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Understanding cost
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3 leading-snug">
              What drives term loan pricing
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              The total cost of a business term loan is shaped by several interacting factors. There is no single "market rate" — pricing is set by individual lenders based on their assessment of your specific risk profile. Understanding what lenders weigh helps you position your application and evaluate offers more critically.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              {
                factor: "Credit risk",
                explanation: "Your personal and business credit scores are among the most direct drivers of rate. Stronger credit profiles typically access lower rates; lenders view credit history as a proxy for repayment reliability.",
              },
              {
                factor: "Business financial performance",
                explanation: "Revenue trajectory, profitability, cash flow margins, and debt service coverage all inform how a lender prices risk. A business showing consistent revenue growth and healthy margins is typically viewed more favorably.",
              },
              {
                factor: "Loan term and size",
                explanation: "Longer loan terms carry more uncertainty and often higher rates. Smaller loan amounts may also carry higher rates as fixed underwriting costs are spread over less principal.",
              },
              {
                factor: "Collateral and guarantees",
                explanation: "Loans secured by real estate, equipment, or other assets can access lower rates because the lender has recourse. Unsecured loans carry more lender risk, which is typically reflected in pricing.",
              },
              {
                factor: "Lender type",
                explanation: "Traditional banks and credit unions typically offer lower rates but stricter requirements and longer timelines. Online lenders may fund faster and accept more risk, often at a higher cost to the borrower.",
              },
              {
                factor: "Fees and structure",
                explanation: "Origination fees, prepayment penalties, draw fees, and annual fees all affect the all-in cost. Always evaluate APR or effective annualized cost — not the stated rate alone — when comparing offers.",
              },
            ].map((item) => (
              <div key={item.factor} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                <h3 className="text-sm font-medium text-[#0f0f0f] mb-1.5">{item.factor}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] p-5 max-w-3xl">
            <p className="text-xs text-[#737373] leading-relaxed">
              <span className="font-medium text-[#0f0f0f]">Important:</span> ZEO.co does not quote, guarantee, or negotiate interest rates. All rate discussions on this page are educational. Actual rates and terms are determined solely by third-party lenders through their own underwriting process.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pros and Cons ── */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Tradeoffs
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Advantages and limitations
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              Term loans have structural characteristics that make them well-suited for certain situations and less optimal for others. Evaluate these honestly against your business's specific capital needs and financial position.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">
                Potential advantages
              </p>
              <ul className="space-y-3">
                {[
                  "Predictable, fixed monthly payments simplify cash flow planning",
                  "Lump-sum disbursement is well-suited for defined, one-time capital needs",
                  "Can build business credit profile with consistent on-time payments",
                  "May offer lower rates than revolving or short-term products for qualified borrowers",
                  "Broad flexibility in permitted use of proceeds with many lenders",
                  "Longer terms reduce individual payment size, preserving working capital",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8.5L6.5 11L12 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-[#737373] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                Limitations to consider
              </p>
              <ul className="space-y-3">
                {[
                  "Fixed payments continue regardless of revenue fluctuations or slow periods",
                  "Qualification typically requires established credit and operating history",
                  "Collateral and personal guarantees are commonly required",
                  "Prepayment penalties may limit ability to refinance if rates improve",
                  "Underwriting can be documentation-heavy and time-consuming",
                  "Taking on long-term debt increases financial leverage and fixed obligations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#a3a3a3]" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8L12 8M4 8l3-3M4 8l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-[#737373] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              How it compares
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Term loans vs. other financing structures
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              The right structure depends on your business's specific situation — revenue profile, capital need, timing, and risk tolerance. This overview is general; actual product availability and terms are set by individual lenders.
            </p>
          </div>
          <ComparisonTable
            columns={["Term Loan", "Line of Credit", "Merchant Cash Advance", "SBA Loan"]}
            rows={COMPARISON_ROWS}
            highlightCol="Term Loan"
          />
        </div>
      </section>

      {/* ── Alternatives ── */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Alternatives
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Other financing options to explore
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              A business term loan is one structure among many. Depending on your profile and need, one of these alternatives may be a better or complementary fit — subject to availability and underwriting by third-party providers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA Loans"
              description="Government-backed loans with longer terms and potentially lower rates for qualifying businesses. More documentation-intensive and slower to fund."
              tags={["Government-backed", "Long terms", "Lower rates (potential)"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Line of Credit"
              description="Revolving credit for ongoing or variable working capital needs. Draw and repay repeatedly up to your limit — better suited for cash flow management than one-time capital needs."
              tags={["Revolving", "Flexible draws", "Working capital"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<CalendarIcon />}
              title="Equipment Financing"
              description="Loans and leases structured specifically around equipment purchases, often using the asset as collateral. May enable financing with less emphasis on general business credit."
              tags={["Asset-backed", "Equipment-specific", "Collateral"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<BoltIcon />}
              title="Merchant Cash Advance"
              description="Revenue-based advances repaid as a percentage of daily sales. Higher effective cost but flexible qualification and fast funding — may suit businesses with strong card volume."
              tags={["Fast funding", "Revenue-based", "Flexible qualification"]}
              href="/financing"
            />
          </div>
        </div>
      </section>

      {/* ── Calculator link ── */}
      <section className="py-10 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-1">
                Planning tool
              </p>
              <h3 className="text-base font-semibold text-[#0f0f0f] mb-1">
                Estimate your monthly payment
              </h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-md">
                Use our loan payment calculator to model how different loan amounts, terms, and rates affect monthly obligations. Results are estimates only — not offers or commitments.
              </p>
            </div>
            <Link
              href="/calculators/loan-payment"
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-medium text-[#737373] hover:text-[#333333] hover:border-[#0f0f0f]/50 transition-colors"
            >
              Loan payment calculator
              <ChevronRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ items={FAQ_ITEMS} title="Frequently asked questions" />

      {/* ── CTA ── */}
      <CTASection
        headline="Ready to explore term loan options?"
        subtext="Submit a brief intake and ZEO will review financing paths that may be a potential fit for your business. Subject to underwriting by third-party lenders."
        primaryLabel="Start Your Application"
        primaryHref="/apply"
        secondaryLabel="View All Financing Options"
        secondaryHref="/financing"
        variant="dark"
      />

      {/* ── Disclaimer ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

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
  title: "Business Debt Refinancing | ZEO.co",
  description:
    "Learn how business debt refinancing works, who may qualify, typical requirements, cost considerations, and how it compares to other financing structures. Subject to underwriting by third-party providers.",
  path: "/debt-refinancing",
  keywords: [
    "business debt refinancing",
    "refinance business loan",
    "consolidate business debt",
    "lower business loan rate",
    "mca refinancing",
    "refinance merchant cash advance",
    "business debt consolidation",
    "refinance high-cost debt",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function RefreshIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3.5 9A5.5 5.5 0 0 1 9 3.5c1.8 0 3.4.87 4.4 2.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M14.5 9A5.5 5.5 0 0 1 9 14.5c-1.8 0-3.4-.87-4.4-2.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M11.5 2L13.9 4.4L11.5 6.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 16L4.1 13.6L6.5 11.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TermLoanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2.5" y="4.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 4.5V3M12 4.5V3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 9h8M5 11.5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
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

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 5.5v3.75L11.5 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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
  { label: "Business Debt Refinancing" },
];

const FAQ_ITEMS = [
  {
    q: "What types of business debt can typically be refinanced?",
    a: "Many types of business obligations may be candidates for refinancing, including merchant cash advances, short-term business loans, equipment loans, business credit card balances, revenue-based financing, and in some cases, earlier-vintage bank term loans. The feasibility of refinancing depends on the lender's policies, remaining balances, payoff terms in the original agreements, and your current financial profile. Some lenders place restrictions on refinancing proceeds, so confirm eligible uses before applying.",
  },
  {
    q: "Will refinancing always lower my total cost of borrowing?",
    a: "Not necessarily. Refinancing can reduce your effective cost when you qualify for meaningfully lower rates or fees compared to the debt being replaced. However, extending the repayment term — even at a lower rate — can increase total interest paid over the life of the loan. Always compare the total repayment amount, not just the monthly payment or stated rate. Origination fees, prepayment penalties on the existing debt, and other closing costs affect whether refinancing produces a net benefit. ZEO.co does not guarantee any particular rate or outcome.",
  },
  {
    q: "Can I refinance a merchant cash advance into a term loan?",
    a: "Some businesses with MCAs or stacked short-term advances may qualify to consolidate those into a longer-term loan product at a lower effective cost. This is sometimes called MCA consolidation or MCA buyout financing. Qualifying typically requires demonstrating improved business performance, sufficient revenue, and creditworthiness that may not have been present when the original advance was taken. Eligibility is subject to individual lender underwriting and is not guaranteed.",
  },
  {
    q: "What is a prepayment penalty and how does it affect refinancing?",
    a: "A prepayment penalty is a fee charged by some lenders when you pay off a loan earlier than its scheduled end date. If your existing debt carries a prepayment penalty, that cost must be factored into the economic analysis of refinancing — it directly offsets any savings from a new, lower-rate product. Review your existing loan agreement carefully before initiating a refinancing process. Some lenders offer flat prepayment fees; others use declining schedules that reduce over time.",
  },
  {
    q: "How does refinancing affect my business credit profile?",
    a: "Applying for refinancing typically involves a hard credit inquiry, which may cause a short-term dip in personal and business credit scores. Successfully refinancing and making on-time payments on the new obligation can build positive credit history over time. Closing an older account through payoff may also affect your credit mix and account age, depending on the bureau and scoring model. These are general observations — your individual credit outcome will vary based on your full profile.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Primary purpose",
    "Debt Refinancing": "Replace existing obligations",
    "Term Loan (new)": "Fund a new capital need",
    "SBA 7(a)": "New capital or refinancing",
    "Line of Credit": "Ongoing working capital",
  },
  {
    feature: "Typical timeline",
    "Debt Refinancing": "Days to weeks",
    "Term Loan (new)": "Days to weeks",
    "SBA 7(a)": "30 – 90+ days",
    "Line of Credit": "Days to weeks",
  },
  {
    feature: "Use of proceeds",
    "Debt Refinancing": "Pay off existing debt",
    "Term Loan (new)": "Equipment, expansion, etc.",
    "SBA 7(a)": "Broad; refi eligible",
    "Line of Credit": "Working capital draws",
  },
  {
    feature: "Cost vs. original debt",
    "Debt Refinancing": "Potentially lower (not guaranteed)",
    "Term Loan (new)": "Adds new obligation",
    "SBA 7(a)": "Often lower; more requirements",
    "Line of Credit": "Variable; revolving",
  },
  {
    feature: "Cash-out possible?",
    "Debt Refinancing": "Sometimes (net proceeds)",
    "Term Loan (new)": "Yes — full amount",
    "SBA 7(a)": "Yes — with restrictions",
    "Line of Credit": "Yes — up to limit",
  },
];

const STEPS = [
  {
    label: "Inventory your existing obligations",
    body: "Document every current business debt: lender, balance, remaining term, monthly payment, interest rate or factor rate, and any prepayment penalties. This inventory forms the foundation of your refinancing analysis and is information lenders will request.",
  },
  {
    label: "Assess payoff costs",
    body: "Contact each lender to request a formal payoff amount — this includes remaining principal, accrued interest, and any early termination or prepayment fees. These figures determine the minimum refinancing amount needed and the true cost of exiting current obligations.",
  },
  {
    label: "Evaluate your current profile",
    body: "Lenders offering refinancing products will assess your credit, revenue, time in business, and debt service capacity based on your current — not original — financial picture. If your profile has improved since the original debt was taken on, you may qualify for better structures.",
  },
  {
    label: "Apply and underwrite",
    body: "Submit applications to prospective refinancing lenders. Expect to provide business tax returns, bank statements, existing loan documentation, a current profit and loss statement, and a list of obligations being refinanced. Underwriting depth varies by lender and loan size.",
  },
  {
    label: "Compare offers carefully",
    body: "Evaluate any refinancing offer based on total repayment amount, effective annualized cost (APR or equivalent), monthly payment impact, term length, and any fees. Calculate net savings after accounting for payoff costs on existing debt. Review all terms with your legal and financial advisors before signing.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DebtRefinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Financing"
        title="Business Debt Refinancing"
        subtitle="Replacing existing business obligations with new financing — potentially at a lower cost, better structure, or longer term. Debt refinancing may help reduce monthly payments, consolidate multiple obligations, or exit high-cost short-term products. Subject to underwriting and approval by third-party lenders."
      />

      {/* ── Metrics snapshot ── */}
      <section className="py-10 border-b border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical refinance amounts"
              value="$25K – $2M+"
              note="Varies by lender and existing debt profile"
            />
            <MetricCard
              label="Repayment terms"
              value="1 – 10 yrs"
              note="Longer terms may lower monthly obligations"
            />
            <MetricCard
              label="Funding speed"
              value="2 days – 6 wks"
              note="Depends on lender, loan size, documentation"
            />
            <MetricCard
              label="Min. credit score"
              value="600 – 680+"
              note="Varies by lender and product type"
              highlight
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-3">
            Figures above are general market observations, not offers or guarantees. All financing is subject to underwriting and approval by third-party lenders.
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
              Who may be a candidate for debt refinancing
            </h2>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              Refinancing is not universally beneficial — its value depends on your current obligations, your improved financial profile, and what new terms you may qualify for. These are common situations where a business might explore refinancing. All outcomes are subject to individual lender underwriting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                heading: "Businesses carrying high-cost short-term debt",
                body: "Merchant cash advances, short-term notes, and stacked advances often carry high effective costs due to factor rates and daily or weekly repayment schedules. Businesses that have stabilized and grown since taking on these products may qualify to replace them with a lower-cost, longer-term structure.",
              },
              {
                heading: "Businesses with multiple obligations to consolidate",
                body: "Managing several concurrent debt payments — each with different payment schedules, lenders, and terms — adds administrative complexity and cash flow unpredictability. Consolidating into a single obligation can simplify operations and may reduce total monthly outflow.",
              },
              {
                heading: "Businesses whose credit profile has improved",
                body: "If your business has meaningfully grown revenue, extended its operating history, or improved its credit profile since the original debt was incurred, you may now qualify for products that were previously out of reach. The refinancing market rewards improved risk profiles.",
              },
              {
                heading: "Businesses approaching balloon payments or maturity",
                body: "Some loan structures include balloon payments or shorter maturities than the business's ability to pay. If a large payment is approaching and the business cannot fund it from operations, refinancing into a longer-term amortizing structure may provide a path forward — subject to lender qualification.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] mt-2" />
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
              How business debt refinancing works
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed">
              Refinancing involves more upfront analysis than taking on new debt — you must understand your existing obligations before you can evaluate whether a new structure genuinely improves your position. The steps below reflect a deliberate, informed approach.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[15px] top-6 bottom-6 w-px bg-[#e5e5e5] md:hidden" aria-hidden="true" />
            <div className="space-y-4">
              {STEPS.map((step, i) => (
                <div key={step.label} className="flex gap-4 items-start">
                  <div className="relative flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#e5e5e5] bg-[#ffffff] text-[0.6875rem] font-semibold text-[#0f0f0f] tabular-nums">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
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
              Common refinancing scenarios
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed">
              The motivations for refinancing business debt vary. Below are the most common scenarios businesses explore when evaluating whether a refinancing may be beneficial. Actual eligibility depends on your specific financial profile and lender requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                title: "MCA and short-term advance consolidation",
                body: "Replacing one or more merchant cash advances — which often carry high factor rates and daily payment schedules — with a single term loan at a lower effective cost and predictable monthly payments. Sometimes called MCA buyout or MCA refinancing.",
              },
              {
                title: "Rate reduction on existing term loans",
                body: "If your credit profile, revenue, or time in business has improved since a term loan was originated, a new lender may offer comparable or better terms. This is most straightforward when the existing loan has limited or no prepayment penalties.",
              },
              {
                title: "Extending repayment to reduce monthly cash burn",
                body: "Refinancing into a longer-term loan can reduce the monthly payment even if the rate is similar, freeing working capital for operations. Note that this typically increases total interest paid over the life of the obligation.",
              },
              {
                title: "Consolidating multiple lenders into one payment",
                body: "Businesses with several outstanding obligations across multiple lenders may simplify their debt service by consolidating into a single loan. This reduces administrative overhead and can improve cash flow visibility.",
              },
              {
                title: "Removing personal guarantee or collateral",
                body: "As a business matures and its standalone creditworthiness improves, some lenders may offer unsecured or less personally encumbered structures compared to the original loan. This is not guaranteed and depends on the lender and risk profile.",
              },
              {
                title: "Bridge to SBA or conventional bank financing",
                body: "Some businesses use shorter-term products while building the track record needed for SBA or conventional bank financing. Refinancing into those structures once eligibility is established can significantly reduce long-run borrowing costs.",
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
                Refinancing lenders evaluate both your current financial profile and the structure of the debt being refinanced. Requirements below reflect general market observations — not any specific lender. All financing is subject to third-party underwriting.
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Personal credit score",
                    value: "600 – 680+",
                    note: "Higher scores generally access better structures. Some alternative lenders consider scores below 600 with additional requirements.",
                  },
                  {
                    label: "Time in business",
                    value: "1 – 2 years",
                    note: "Most refinancing lenders require at least one year of operating history. SBA refinancing programs typically require more.",
                  },
                  {
                    label: "Annual revenue",
                    value: "$150K – $300K+",
                    note: "Lenders assess whether the business generates sufficient cash flow to service the new obligation after retiring existing debt.",
                  },
                  {
                    label: "Debt service coverage",
                    value: "1.20x – 1.35x+",
                    note: "After refinancing, the business must demonstrate cash flow adequate to cover the new payment with a meaningful margin.",
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
                  { doc: "Bank statements", detail: "3–12 months business checking" },
                  { doc: "Personal tax returns", detail: "For owners with 20%+ equity" },
                  { doc: "Profit & loss statement", detail: "Year-to-date, current period" },
                  { doc: "Balance sheet", detail: "Current period" },
                  { doc: "Existing loan agreements", detail: "All obligations being refinanced" },
                  { doc: "Payoff statements", detail: "Formal payoff amounts from current lenders" },
                  { doc: "Business debt schedule", detail: "Complete list of all outstanding obligations" },
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
                Actual documentation requirements vary by lender, loan size, and whether refinancing proceeds are used for new capital in addition to debt payoff.
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
              What actually determines refinancing economics
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              The value of refinancing is not simply a lower rate — it's the net difference between total cost under existing obligations and total cost under the proposed new structure, including all fees and penalties on both sides. Understanding each factor prevents decisions that appear beneficial on the surface but increase total cost.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              {
                factor: "Effective cost of existing debt",
                explanation: "MCA factor rates and short-term loan fees often translate to very high annualized effective rates. Understanding the true cost of what you currently carry is the baseline against which any refinancing option must be measured.",
              },
              {
                factor: "Prepayment penalties",
                explanation: "Many existing loan agreements include prepayment penalties that must be paid when the balance is retired early. These costs reduce the net benefit of refinancing and must be included in any break-even analysis.",
              },
              {
                factor: "New loan origination fees",
                explanation: "Refinancing lenders typically charge origination fees of 1–5% of the loan amount. These upfront costs extend the time needed to realize net savings from a lower ongoing rate.",
              },
              {
                factor: "Term length and total repayment",
                explanation: "Extending the repayment term reduces monthly payments but increases total interest paid over the life of the loan. Calculate total repayment under both scenarios — not just the monthly payment — before concluding a refinancing is beneficial.",
              },
              {
                factor: "Rate and risk profile today",
                explanation: "The rate on a refinancing offer reflects your current risk profile, prevailing market conditions, and the specific lender's pricing model. An improved credit and revenue profile since original borrowing is the primary driver of accessing better terms.",
              },
              {
                factor: "Cash-out proceeds",
                explanation: "Some refinancing transactions include net new capital above the payoff amount — effectively a term loan with debt consolidation built in. The incremental cost of those new proceeds should be evaluated separately from the savings on the refinanced portion.",
              },
            ].map((item) => (
              <div key={item.factor} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                <h3 className="text-sm font-medium text-[#0f0f0f] mb-1.5">{item.factor}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#0f2a14] p-5 max-w-3xl">
            <p className="text-xs text-[#737373] leading-relaxed">
              <span className="font-medium text-[#0f0f0f]">Important:</span> ZEO.co does not quote, guarantee, or negotiate interest rates or terms. All cost discussions on this page are educational. Actual rates, fees, and terms are determined solely by third-party lenders through their own underwriting processes.
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
              Potential advantages and limitations
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              Debt refinancing can meaningfully improve a business's financial position in the right circumstances — and produce a worse outcome in the wrong ones. Evaluate these considerations against your specific debt profile and business situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">
                Potential advantages
              </p>
              <ul className="space-y-3">
                {[
                  "May reduce effective cost of borrowing for businesses whose profile has improved",
                  "Consolidating multiple obligations simplifies cash flow management",
                  "Lower monthly payments can free working capital for operations and growth",
                  "Replacing daily or weekly advance payments with monthly obligations improves cash flow predictability",
                  "Successful refinancing and on-time payments can build business credit history",
                  "Longer repayment terms reduce per-period obligation, though total interest may increase",
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
                  "Prepayment penalties on existing debt may eliminate net savings from refinancing",
                  "Origination fees and closing costs extend the break-even timeline for any rate improvement",
                  "Extending term length increases total interest paid, even with a lower rate",
                  "Refinancing does not address underlying cash flow issues — it restructures existing cost",
                  "Hard credit inquiries during application may temporarily affect credit scores",
                  "Not all existing debt can be refinanced — some agreements restrict payoff or have unfavorable terms",
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
              Debt refinancing vs. other financing structures
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed">
              Refinancing is distinct from taking on entirely new financing — it's specifically about replacing existing obligations. Depending on your situation, one of the alternative structures below may be a better fit or a complementary option.
            </p>
          </div>
          <ComparisonTable
            columns={["Debt Refinancing", "Term Loan (new)", "SBA 7(a)", "Line of Credit"]}
            rows={COMPARISON_ROWS}
            highlightCol="Debt Refinancing"
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
              Debt refinancing is one path for addressing high-cost or poorly structured business obligations. Depending on your profile and goals, one of these alternatives may be a better primary solution or a complementary fit — subject to availability and underwriting by third-party providers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <FinancingPathCard
              icon={<TermLoanIcon />}
              title="Business Term Loans"
              description="A fixed sum repaid on a defined schedule. If refinancing is not the goal, a new term loan may provide additional capital while leaving existing debt in place."
              tags={["Fixed payments", "Lump sum", "1–10 years"]}
              href="/business-term-loans"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loans"
              description="SBA 7(a) loans can be used to refinance existing business debt in certain circumstances, often with longer terms and lower rates for qualifying businesses."
              tags={["Government-backed", "Long terms", "Refi eligible"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Line of Credit"
              description="For businesses needing working capital flexibility rather than debt consolidation, a revolving line of credit may address the underlying cash flow dynamic driving debt accumulation."
              tags={["Revolving", "Flexible draws", "Working capital"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<WorkingCapitalIcon />}
              title="Working Capital Loans"
              description="Short-to-medium term loans specifically designed to bridge operational gaps. May be appropriate as a stepping stone while building the profile needed for lower-cost refinancing."
              tags={["Short-to-mid term", "Operations", "Bridge financing"]}
              href="/working-capital"
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
                Model your refinancing payment
              </h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-md">
                Use the loan payment calculator to estimate how a refinanced loan at different amounts, terms, and rates would affect your monthly payment. Results are estimates only — not offers or commitments.
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
        headline="Ready to explore refinancing options?"
        subtext="Submit a brief intake and ZEO will review financing paths that may help restructure your existing business debt. All options are subject to underwriting by third-party lenders."
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

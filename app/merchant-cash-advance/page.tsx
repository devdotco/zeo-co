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
  title: "Merchant Cash Advance Costs and Alternatives | ZEO.co",
  description:
    "Understand how merchant cash advances work, what they typically cost, who may qualify, and what alternatives may be a better fit. Subject to underwriting and approval by third-party providers.",
  path: "/merchant-cash-advance",
  keywords: [
    "merchant cash advance",
    "MCA financing",
    "business cash advance",
    "MCA factor rate",
    "MCA holdback percentage",
    "sales-based financing",
    "revenue-based financing",
    "merchant cash advance alternatives",
    "small business cash advance",
    "MCA vs business loan",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function CreditCardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 7.5h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 10a6 6 0 1 1 12 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 10L6.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

function SeasonalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4 13l2.5-5 2 2.5L11 6l2.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 15h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function RepairIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M10.5 3.5a4 4 0 0 1 0 5.66L6 13.5a1.5 1.5 0 0 1-2.12-2.12l4.5-4.5A4 4 0 0 1 10.5 3.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13 5l1.5-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function InventoryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="7" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function BridgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 13V9a7 7 0 0 1 14 0v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 13h14M6 13V9M12 13V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function TermLoanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 5V4a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 10h4M5 12.5h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 9h14M2 5h14M2 13h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Financing Options", href: "/financing" },
  { label: "Merchant Cash Advance" },
];

const faqItems = [
  {
    q: "Is a merchant cash advance a loan?",
    a: "An MCA is structured as a purchase of future receivables, not a traditional loan, which means it may not be subject to state usury laws that cap interest rates. However, it operates similarly to a loan in practice — you receive a lump sum upfront and repay a larger total amount over time. Because it is not classified as a loan in many states, standard APR disclosures may not apply, making it harder to compare costs directly to a term loan or line of credit.",
  },
  {
    q: "How does the holdback percentage work?",
    a: "The holdback (also called the retrieval rate) is the percentage of your daily or weekly card sales or bank deposits that the MCA provider automatically collects until your advance is repaid in full. Holdback percentages typically range from 10% to 20% of daily gross receipts. If your sales slow down, your payments slow down proportionally — but the total amount you owe remains fixed, which can extend the repayment period significantly.",
  },
  {
    q: "What is a factor rate and how is it different from an interest rate?",
    a: "A factor rate is a multiplier applied to your advance amount to calculate the total repayment. For example, an advance of $50,000 with a factor rate of 1.35 means you repay $67,500 total. Unlike interest, factor rates do not decrease over time as you repay the balance — the full cost is fixed at origination. When converted to an equivalent APR, MCA costs are often substantially higher than traditional financing, particularly when the repayment period is short.",
  },
  {
    q: "Can a business with bad credit qualify for an MCA?",
    a: "MCAs tend to be more accessible to businesses with lower credit scores than traditional term loans or SBA financing, because approval is based primarily on monthly revenue and sales volume rather than personal credit history alone. That said, each provider sets its own eligibility standards, and approval is never guaranteed. A business may qualify based on consistent revenue even if its credit profile would not meet the threshold for bank financing. All applications are subject to underwriting.",
  },
  {
    q: "What happens if my sales drop and I can't keep up with payments?",
    a: "If a reconciliation provision is included in your agreement, the provider may adjust daily or weekly payment amounts based on actual sales. Not all MCA agreements include this, so it is important to review the contract carefully before accepting an offer. Defaulting on an MCA can trigger confession of judgment clauses in some states, giving the provider the ability to obtain a judgment without a lawsuit. Understanding default provisions, remedies, and any personal guarantee requirements is essential before signing.",
  },
];

const comparisonColumns = ["MCA", "Term Loan", "Line of Credit"];
const comparisonRows = [
  {
    feature: "Approval speed",
    MCA: "1–3 business days",
    "Term Loan": "1–6 weeks",
    "Line of Credit": "3–14 days",
  },
  {
    feature: "Credit score emphasis",
    MCA: "Low — revenue-focused",
    "Term Loan": "High",
    "Line of Credit": "Moderate to high",
  },
  {
    feature: "Collateral required",
    MCA: "Generally none",
    "Term Loan": "Often required",
    "Line of Credit": "Sometimes required",
  },
  {
    feature: "Repayment structure",
    MCA: "% of daily sales",
    "Term Loan": "Fixed monthly payment",
    "Line of Credit": "Draw as needed",
  },
  {
    feature: "Total cost structure",
    MCA: "Factor rate (fixed)",
    "Term Loan": "Interest + fees",
    "Line of Credit": "Interest on drawn balance",
  },
  {
    feature: "Typical effective cost",
    MCA: "High — varies widely",
    "Term Loan": "Moderate",
    "Line of Credit": "Moderate",
  },
  {
    feature: "Prepayment benefit",
    MCA: "None (cost is fixed)",
    "Term Loan": "May reduce total interest",
    "Line of Credit": "Pay down anytime",
  },
];

export default function MerchantCashAdvancePage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Financing"
        title="Merchant Cash Advance"
        subtitle="A merchant cash advance (MCA) provides a lump sum of capital in exchange for a portion of your future sales. Approval is primarily revenue-based, and funding can happen quickly — but effective costs are typically higher than other financing products. Understanding how MCAs are priced is essential before accepting any offer."
      />

      {/* ── Who it's for ─────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-2">Who typically considers an MCA</h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            An MCA may be a potential fit for businesses in specific situations. It is not a universal solution, and the cost profile means it is generally better suited for short-term, high-margin needs where speed outweighs total cost.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                heading: "High card-sales volume",
                body: "Businesses that process a significant portion of revenue through credit and debit card transactions — restaurants, retail stores, salons, e-commerce merchants — are the core MCA market. Consistent card volume is how most providers underwrite and collect.",
              },
              {
                heading: "Limited credit history",
                body: "A business that is too young or has a credit profile that does not meet bank or SBA thresholds may find MCA approval more accessible, because the primary underwriting factor is monthly gross revenue rather than credit score or collateral.",
              },
              {
                heading: "Urgent capital need",
                body: "When an opportunity or expense requires capital within days rather than weeks, MCA timelines can match that urgency. The tradeoff is that speed often comes with a meaningfully higher total cost than slower financing paths.",
              },
              {
                heading: "Previously declined elsewhere",
                body: "Businesses that have been declined for traditional financing — bank loans, SBA programs, or equipment financing — sometimes turn to MCAs as a fallback. Whether this is the right decision depends heavily on the business's cash flow margin and the specific terms offered.",
              },
            ].map((item) => (
              <div key={item.heading} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.heading}</h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-2">How a merchant cash advance works</h2>
          <p className="text-[#737373] text-sm mb-10 max-w-2xl">
            An MCA is structured as a purchase of future receivables, not a loan. The mechanics differ from term debt in ways that carry real financial implications.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                heading: "Application and review",
                body: "You submit recent bank statements or processor statements — typically 3–6 months — along with basic business information. The provider assesses average monthly revenue, deposit consistency, and existing advance balances.",
              },
              {
                step: "2",
                heading: "Offer and factor rate",
                body: "The provider issues an offer specifying the advance amount, factor rate, holdback percentage, and estimated repayment period. The factor rate — typically 1.15 to 1.55 — determines your total repayment. A $50,000 advance at 1.40 means repaying $70,000 total.",
              },
              {
                step: "3",
                heading: "Funding",
                body: "Upon contract execution, funds are deposited into your business bank account, often within one to three business days. Some providers fund same-day. Speed is one of the MCA product's genuine advantages over slower financing options.",
              },
              {
                step: "4",
                heading: "Automatic holdback",
                body: "Each business day (or week, depending on the agreement), the provider automatically debits a fixed percentage of your gross card sales or deposits — the holdback. This continues until the full repayment amount is collected.",
              },
              {
                step: "5",
                heading: "Repayment complete",
                body: "Once the total payback amount has been collected, the advance is satisfied. There is no interest accruing over time — the cost is fully determined by the factor rate at origination. Paying faster does not reduce your total cost.",
              },
            ].map((item) => (
              <div key={item.step} className="relative rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#ffffff] border border-[#e5e5e5] text-[0.65rem] font-semibold text-[#0f0f0f] tabular-nums">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-semibold text-[#0f0f0f]">{item.heading}</h3>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common use cases ─────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-2">Common use cases</h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            MCA proceeds can be used for most general business purposes. These are the scenarios where businesses most commonly turn to this product.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FinancingPathCard
              icon={<InventoryIcon />}
              title="Inventory purchase"
              description="Stocking up ahead of a peak season or taking advantage of a bulk purchase opportunity — situations where the revenue lift from the inventory may justify the cost of the advance."
              tags={["Retail", "E-commerce", "Wholesale"]}
              href="/merchant-cash-advance"
            />
            <FinancingPathCard
              icon={<SeasonalIcon />}
              title="Seasonal cash flow gaps"
              description="Covering fixed overhead during a slow season when sales are insufficient to meet payroll, rent, and vendor payments, with repayment expected to accelerate during the busy season."
              tags={["Seasonal", "Restaurants", "Tourism"]}
              href="/merchant-cash-advance"
            />
            <FinancingPathCard
              icon={<RepairIcon />}
              title="Emergency equipment repair"
              description="When critical equipment fails and downtime directly costs revenue, access to capital within days may be worth a higher cost than waiting weeks for a bank or SBA loan decision."
              tags={["Operations", "Manufacturing", "Food service"]}
              href="/merchant-cash-advance"
            />
            <FinancingPathCard
              icon={<CreditCardIcon />}
              title="Marketing and advertising campaigns"
              description="Funding a time-sensitive marketing push — a campaign tied to an event, a competitor shift, or a seasonal window — where the expected revenue return can be estimated against the cost."
              tags={["Growth", "Marketing", "Campaigns"]}
              href="/merchant-cash-advance"
            />
            <FinancingPathCard
              icon={<BridgeIcon />}
              title="Bridge to a slower approval"
              description="Covering near-term needs while waiting for a longer-term financing solution — such as an SBA loan in underwriting — to close. This should be evaluated carefully against total cost."
              tags={["Bridge", "Interim", "Short-term"]}
              href="/merchant-cash-advance"
            />
            <FinancingPathCard
              icon={<SpeedIcon />}
              title="Rapid opportunity capture"
              description="Responding to a time-sensitive business opportunity — an acquisition target, a lease on desirable space, a contract requiring capital commitment — where decision timelines are compressed."
              tags={["Opportunistic", "Fast-moving", "Time-sensitive"]}
              href="/merchant-cash-advance"
            />
          </div>
        </div>
      </section>

      {/* ── Typical requirements ─────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-2">Typical eligibility thresholds</h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            MCA providers set their own standards. These represent common benchmarks seen in the market — individual providers may qualify businesses that fall outside these ranges, or may require more. Subject to underwriting.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <MetricCard
              label="Time in business"
              value="6+ mo"
              note="Some providers require 12 months. Newer businesses may face higher factor rates or lower offer amounts."
            />
            <MetricCard
              label="Monthly revenue"
              value="$10K+"
              note="Most providers underwrite based on average monthly deposits or gross card sales. Higher volume typically yields larger offers."
            />
            <MetricCard
              label="Credit score"
              value="500+"
              note="Many MCA providers consider applicants with scores below 600 — lower than most bank or SBA thresholds."
            />
            <MetricCard
              label="Open bankruptcies"
              value="None"
              note="An active or recently discharged bankruptcy typically disqualifies an application with most providers."
            />
            <MetricCard
              label="Outstanding advances"
              value="Reviewed"
              note="Multiple stacked advances significantly increase default risk and may disqualify or reduce an offer."
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4 max-w-2xl">
            These thresholds are general market observations and do not represent ZEO's standards or those of any specific provider. Eligibility is determined by third-party underwriting.
          </p>
        </div>
      </section>

      {/* ── Cost discussion ──────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-white mb-4">Understanding MCA costs</h2>
            <p className="text-[#737373] text-sm leading-relaxed mb-5">
              MCA pricing is expressed as a factor rate rather than an annual percentage rate (APR), which makes direct cost comparison with traditional financing difficult. A factor rate of 1.30 on a $40,000 advance means you repay $52,000 total — regardless of how quickly or slowly you repay. Paying off the advance in 60 days versus 180 days does not change the total cost, but it dramatically changes the effective annualized rate.
            </p>
            <p className="text-[#737373] text-sm leading-relaxed mb-5">
              Factor rates in the market typically range from approximately 1.10 on the lower end to 1.55 or higher for higher-risk profiles. The effective APR equivalent can range widely depending on the repayment speed. A short repayment period (e.g., 90 days) on a higher factor rate can produce effective annualized costs that are substantially higher than any regulated lending product. ZEO does not quote rates or guarantee terms — any specific offer will depend on your business profile and the provider's underwriting.
            </p>
            <p className="text-[#737373] text-sm leading-relaxed mb-5">
              Additional costs to review before signing include: origination or processing fees, prepayment terms (if any — most MCAs offer no prepayment benefit), reconciliation rights, and default provisions such as confession of judgment clauses. These provisions vary significantly by provider and state, and should be reviewed with qualified counsel before accepting an offer.
            </p>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5 mt-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">Cost example — for illustration only</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Advance amount", value: "$50,000" },
                  { label: "Factor rate", value: "1.38×" },
                  { label: "Total repayment", value: "$69,000" },
                  { label: "Total cost", value: "$19,000" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[0.65rem] text-[#a3a3a3] mb-1">{item.label}</p>
                    <p className="text-lg font-semibold text-white tabular-nums">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#a3a3a3] mt-4">
                This example is hypothetical and for illustrative purposes only. Actual offers will vary based on business profile, revenue, creditworthiness, and provider. Not an offer of financing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pros and cons ────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-8">Potential advantages and drawbacks</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">Potential advantages</p>
              <ul className="space-y-3">
                {[
                  "Faster approval and funding than most traditional financing options — often within 1–3 business days",
                  "Revenue-based underwriting may allow businesses with thin credit profiles to qualify",
                  "Payments scale with sales, which can ease pressure during slower revenue periods (if reconciliation is included)",
                  "Generally unsecured — typically does not require real estate or equipment as collateral",
                  "Use of proceeds is usually flexible, covering most general business expenses",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <span className="mt-1 flex-shrink-0 h-4 w-4 rounded-full bg-[#f5f5f5] border border-[#0f0f0f]/30 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="#0f0f0f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#737373] mb-4">Significant drawbacks to consider</p>
              <ul className="space-y-3">
                {[
                  "Effective costs are typically much higher than term loans, SBA financing, or lines of credit when measured as an equivalent APR",
                  "Prepayment does not reduce total cost — the factor rate is fixed at origination regardless of how quickly you repay",
                  "Daily or weekly automatic debits can strain cash flow, particularly if sales soften after funding",
                  "Stacking multiple MCAs is common and substantially increases default risk and total debt burden",
                  "Some agreements include confession of judgment clauses that allow providers to collect without a court proceeding in certain states",
                  "Factor rate disclosure may not convert to APR, making it harder to compare with other financing products",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <span className="mt-1 flex-shrink-0 h-4 w-4 rounded-full bg-[#e5e5e5] flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M2 2l4 4M6 2L2 6" stroke="#a3a3a3" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-2">MCA compared to other financing options</h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            This comparison reflects general market characteristics. Individual offers will vary by provider, business profile, and underwriting. Subject to approval.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="MCA"
          />
        </div>
      </section>

      {/* ── Alternatives ─────────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-2">Alternatives that may be worth evaluating</h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            Before accepting an MCA, it is worth understanding what other financing paths may be available. Lower-cost products may be accessible even if your credit or time-in-business falls short of bank standards.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FinancingPathCard
              icon={<TermLoanIcon />}
              title="Business term loans"
              description="Fixed-amount loans with set repayment schedules and interest rates. Typically lower total cost than an MCA, but may require stronger credit history, collateral, and longer underwriting timelines."
              tags={["Lower cost", "Fixed payments", "Credit-based"]}
              href="/business-term-loans"
            />
            <FinancingPathCard
              icon={<LineIcon />}
              title="Business line of credit"
              description="A revolving credit facility you draw from as needed and repay over time. Interest accrues only on the outstanding balance — more flexible than an MCA and typically less expensive for recurring needs."
              tags={["Revolving", "Pay interest on balance", "Flexible"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<InvoiceIcon />}
              title="Invoice factoring"
              description="If your business invoices commercial clients with net payment terms, factoring converts those receivables to immediate cash. Approval is based more on your customers' credit than your own."
              tags={["B2B", "No debt", "Receivables-based"]}
              href="/financing"
            />
          </div>
          <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5 max-w-2xl">
            <p className="text-sm text-[#737373] leading-relaxed">
              Not sure which path fits your situation?{" "}
              <Link href="/financing" className="text-[#0f0f0f] hover:text-[#333333] transition-colors">
                Browse all financing options
              </Link>{" "}
              or{" "}
              <Link href="/apply" className="text-[#0f0f0f] hover:text-[#333333] transition-colors">
                submit an intake
              </Link>{" "}
              and ZEO will identify potential fits based on your business profile.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator link ──────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] p-6 max-w-2xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-2">Calculator</p>
            <h2 className="text-lg font-semibold text-white mb-2">Estimate your MCA repayment</h2>
            <p className="text-sm text-[#737373] leading-relaxed mb-4">
              Use ZEO's MCA calculator to model total repayment amounts and estimated holdback timelines based on different factor rates and advance sizes. Calculator results are estimates only and do not represent offers or guarantees.
            </p>
            <Link
              href="/calculators/mca"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f0f0f] text-white text-sm font-semibold hover:bg-[#333333] transition-colors"
            >
              Open MCA calculator
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7.5 4l3.5 3-3.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ items={faqItems} title="Merchant cash advance — common questions" />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Explore whether an MCA or a lower-cost alternative may fit your business"
        subtext="Submit a brief intake and ZEO will review potential financing paths based on your revenue, credit profile, and funding timeline. No commitment required. Subject to underwriting and approval by third-party providers."
        primaryLabel="Submit an Intake"
        primaryHref="/apply"
        secondaryLabel="Compare Financing Options"
        secondaryHref="/financing"
      />

      {/* ── Disclaimer ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="mca" />
      </div>
    </main>
  );
}

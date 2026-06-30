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
  title: "Revenue-Based Financing for Business | ZEO.co",
  description:
    "Learn how revenue-based financing works, who may qualify, how repayment scales with revenue, and how it compares to term loans and other small business financing options. Subject to underwriting by third-party providers.",
  path: "/revenue-based-financing",
  keywords: [
    "revenue-based financing",
    "revenue based financing",
    "RBF small business",
    "royalty-based financing",
    "revenue share financing",
    "flexible repayment business loan",
    "percentage of revenue repayment",
    "non-dilutive growth capital",
    "merchant cash advance alternative",
    "small business revenue financing",
  ],
});

// ── Constants ─────────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Financing Options", href: "/financing" },
  { label: "Revenue-Based Financing" },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function RevenueIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 14l4-4 3 3 4-5 3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="4" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 4v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function TermLoanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8h3M5 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 7l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MCAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 9h8M5 12h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LOCIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h12M3 13h8M3 5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="14" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

// ── Comparison data ───────────────────────────────────────────────────────────

const comparisonColumns = [
  "Revenue-Based",
  "Term Loan",
  "MCA",
  "Line of Credit",
];

const comparisonRows = [
  {
    feature: "Repayment structure",
    "Revenue-Based": "Fixed % of monthly revenue until cap reached",
    "Term Loan": "Fixed monthly payment, regardless of revenue",
    MCA: "Daily/weekly holdback % of sales",
    "Line of Credit": "Interest on drawn balance; minimum monthly payment",
  },
  {
    feature: "Typical amount",
    "Revenue-Based": "$50K – $3M",
    "Term Loan": "$25K – $2M",
    MCA: "$5K – $500K",
    "Line of Credit": "$10K – $500K",
  },
  {
    feature: "Repayment cap (cost)",
    "Revenue-Based": "1.2x – 2.0x advance (factor rate)",
    "Term Loan": "Interest + fees over term",
    MCA: "Factor rate 1.1x – 1.5x",
    "Line of Credit": "Interest on draws only",
  },
  {
    feature: "Collateral",
    "Revenue-Based": "None (revenue-only underwriting)",
    "Term Loan": "Varies; often assets or personal guarantee",
    MCA: "Future receivables; not traditional collateral",
    "Line of Credit": "Often unsecured (smaller amounts)",
  },
  {
    feature: "Equity dilution",
    "Revenue-Based": "None",
    "Term Loan": "None",
    MCA: "None",
    "Line of Credit": "None",
  },
  {
    feature: "Funding speed",
    "Revenue-Based": "3 – 10 days",
    "Term Loan": "3 – 14 days",
    MCA: "1 – 3 days",
    "Line of Credit": "3 – 10 days",
  },
  {
    feature: "Best use case",
    "Revenue-Based": "Revenue-generating businesses needing growth capital without fixed obligations",
    "Term Loan": "One-time capital expenditure or expansion",
    MCA: "Short-term liquidity, limited credit options",
    "Line of Credit": "Cash flow gaps, recurring operating needs",
  },
];

// ── FAQ data ──────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What is revenue-based financing and how does repayment work?",
    a: "Revenue-based financing (RBF) is a structure in which a provider advances capital in exchange for a fixed percentage of the business's ongoing monthly revenue until a predetermined total repayment cap is reached. Because repayments scale with revenue, payments are lower during slow months and higher during strong months — the total repaid is fixed, but the timeline is variable. This differs from a term loan, where fixed monthly payments are owed regardless of revenue performance.",
  },
  {
    q: "What is a factor rate and how do I calculate the total repayment?",
    a: "The total cost of revenue-based financing is typically expressed as a factor rate rather than an APR. A factor rate of 1.35 means you repay $1.35 for every $1.00 advanced — so on a $100,000 advance, total repayment would be $135,000, regardless of how quickly you pay it back. Factor rates in the market commonly range from 1.15 to 2.0 depending on business revenue, industry, and financial health. ZEO does not guarantee any specific factor rate — terms are set by the third-party provider at underwriting.",
  },
  {
    q: "Does revenue-based financing require collateral or equity?",
    a: "Revenue-based financing is generally structured as a non-dilutive, unsecured product: providers underwrite primarily against revenue history and business performance rather than requiring a pledge of hard assets or equity. Some providers may require a personal guarantee or a UCC-1 blanket lien, even without traditional collateral. Review the specific agreement with the provider before accepting any offer.",
  },
  {
    q: "What types of businesses may qualify for revenue-based financing?",
    a: "Revenue-based financing tends to fit businesses with consistent, recurring revenue — SaaS and subscription companies, e-commerce, professional services, and businesses with strong monthly sales volume. Most providers look for at least $100,000–$200,000 in annual revenue and 6–12 months in business, though specific requirements vary significantly by provider. Subject to underwriting and approval by the applicable third-party lender.",
  },
  {
    q: "Does ZEO guarantee approval or specific terms on revenue-based financing?",
    a: "No. ZEO.co is not a lender and does not make credit decisions. All financing is subject to underwriting, approval, and final terms set by the applicable third-party provider. ZEO helps businesses evaluate whether revenue-based financing may be a potential fit and may connect businesses with relevant providers based on their profile. Nothing on this site constitutes an offer, commitment, or guarantee of financing.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RevenueBasedFinancingPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Financing"
        title="Revenue-Based Financing"
        subtitle="Capital repaid as a fixed percentage of monthly revenue — not a fixed monthly payment. Repayment adjusts with your business performance, making it a structure worth evaluating for revenue-generating businesses that want growth capital without a rigid payment schedule or equity dilution."
      />

      {/* Who it may fit */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Who It May Fit
              </p>
              <h2 className="text-2xl font-semibold text-white leading-snug">
                Businesses with consistent, recurring revenue
              </h2>
              <p className="text-[#9aaa98] text-sm mt-4 leading-relaxed">
                Revenue-based financing is structurally different from a loan. The repayment mechanism is what defines the product: it scales with your revenue rather than following a fixed calendar. That structure is best suited to businesses whose revenue is predictable enough that a percentage-based holdback won&rsquo;t create operational strain in slow months.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "SaaS and subscription businesses",
                  desc: "Recurring subscription revenue provides the predictability that revenue-based financing underwriters typically look for. Monthly recurring revenue (MRR) or annual recurring revenue (ARR) can be modeled clearly, making the advance and repayment structure easier for both parties to evaluate.",
                },
                {
                  title: "E-commerce and direct-to-consumer brands",
                  desc: "Businesses with consistent online sales volume may find that the holdback structure aligns naturally with their cash flow. RBF can fund inventory, paid acquisition, or fulfillment infrastructure without tying the business to fixed monthly obligations.",
                },
                {
                  title: "Professional services with retainer revenue",
                  desc: "Agencies, consulting firms, and service businesses with long-term client retainers generate reliable monthly revenue that supports repayment modeling. The non-dilutive nature may be attractive compared to equity financing alternatives.",
                },
                {
                  title: "Growth-stage businesses avoiding equity dilution",
                  desc: "Founders who have built revenue but are not yet ready — or willing — to raise equity may find revenue-based financing a bridge to the next stage. Capital is deployed without giving up ownership or board control, subject to the provider's terms and underwriting.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#1e2620] bg-[#111512] p-5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mb-3" />
                  <p className="text-sm font-semibold text-[#eef2ec] mb-2">{item.title}</p>
                  <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            The revenue-based financing cycle
          </h2>
          <p className="text-[#9aaa98] text-sm mb-10 max-w-2xl leading-relaxed">
            Unlike a term loan with a fixed payoff date, revenue-based financing has a variable repayment timeline determined by how quickly your revenue delivers the agreed repayment cap. The steps below reflect the general structure — specific mechanics vary by provider.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                label: "Application & revenue review",
                desc: "The provider reviews your revenue history — typically 6–24 months of bank statements or payment processor data. Underwriting focuses primarily on revenue consistency and volume rather than credit alone.",
              },
              {
                label: "Advance amount & factor rate set",
                desc: "The provider offers an advance amount (the capital you receive) and a factor rate (the multiplier that determines your total repayment). A 1.30 factor on $200K means total repayment of $260K.",
              },
              {
                label: "Capital disbursed",
                desc: "Once terms are agreed and documents are signed, the advance is funded — typically within a few business days. No fixed payoff date is established; repayment is determined by your revenue performance.",
              },
              {
                label: "Holdback applied to monthly revenue",
                desc: "Each month, an agreed percentage of revenue — commonly 3%–10% — is remitted to the provider. Months with higher revenue result in larger repayments; slower months result in smaller payments.",
              },
              {
                label: "Cap reached — financing complete",
                desc: "Once total remittances equal the agreed repayment cap, the obligation is satisfied. If revenue grows faster than projected, the term shortens. If revenue slows, the term extends — no penalty for slower repayment.",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-5"
              >
                <p className="text-[0.65rem] font-semibold tabular-nums tracking-[0.08em] text-[#22c55e] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-sm font-semibold text-[#eef2ec] mb-2 leading-snug">
                  {item.label}
                </p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common use cases */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Common Use Cases
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            What businesses typically use RBF for
          </h2>
          <p className="text-[#9aaa98] text-sm mb-10 max-w-2xl leading-relaxed">
            The following represent observed patterns in how revenue-based financing is deployed. They are not guarantees of eligibility or approval for any specific purpose. Lender-specific restrictions on use of proceeds may apply.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Paid acquisition and marketing spend",
                detail:
                  "Digital advertising campaigns, affiliate programs, and paid acquisition channels often generate a measurable return per dollar spent. RBF can fund scaled marketing pushes where the expected revenue return is well understood, making the cost of capital easier to evaluate against projected lift.",
              },
              {
                title: "Inventory and supply chain build-up",
                detail:
                  "Product businesses facing a selling season, a new retail account, or a restocking cycle need capital before revenue arrives. RBF funds the inventory purchase; the holdback structure means repayment flows naturally as product sells.",
              },
              {
                title: "Hiring and team expansion",
                detail:
                  "Revenue-generating headcount — sales, customer success, fulfillment — often pays for itself over a known horizon. RBF can fund the payroll ramp before the new revenue fully materializes, with the holdback structure smoothing repayment against incremental growth.",
              },
              {
                title: "Product development and feature build",
                detail:
                  "SaaS and software businesses investing in roadmap acceleration — a new integration, a self-serve tier, a compliance feature for enterprise — may use RBF to fund the build cycle without equity dilution from a priced round.",
              },
              {
                title: "Geographic or channel expansion",
                detail:
                  "Opening a new market, launching on a new platform, or entering a new sales channel requires upfront investment against future revenue. RBF is a structure where the capital provider shares in the risk through a revenue percentage rather than requiring fixed principal repayment regardless of outcome.",
              },
              {
                title: "Bridge to next funding milestone",
                detail:
                  "Founders preparing for a subsequent equity or debt raise may use RBF to extend runway, hit a revenue milestone, or avoid a dilutive down-bridge. It preserves ownership and capitalizes tables cleanly since it is not equity and does not appear as convertible debt.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#1e2620] bg-[#111512] p-5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border border-[#1e2620] bg-[#0a0d0b] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#22c55e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-[#eef2ec] leading-snug">{item.title}</p>
                </div>
                <p className="text-xs text-[#6b7e69] leading-relaxed pl-8">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical requirements — MetricCards */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Typical Requirements
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            What providers generally evaluate
          </h2>
          <p className="text-[#9aaa98] text-sm mb-8 max-w-2xl leading-relaxed">
            These are general ranges observed across revenue-based financing providers. Actual criteria vary by provider and product. Subject to underwriting by third-party providers.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            <MetricCard
              label="Personal Credit"
              value="550+"
              note="Some RBF providers weight credit less heavily than revenue history"
            />
            <MetricCard
              label="Annual Revenue"
              value="$100K+"
              note="Many providers require $200K–$500K+ depending on advance size"
            />
            <MetricCard
              label="Time in Business"
              value="6–12 mo"
              note="Some providers accept as little as 6 months with strong revenue"
            />
            <MetricCard
              label="Typical Advance Range"
              value="$50K–$3M"
              note="Advance is commonly 1–3x monthly recurring revenue"
            />
            <MetricCard
              label="Holdback Rate"
              value="3%–10%"
              note="Percentage of monthly revenue remitted until repayment cap is met"
            />
            <MetricCard
              label="Funding Speed"
              value="3–10 days"
              note="Once underwriting is complete; varies by provider"
              highlight
            />
          </div>
          <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-5">
            <p className="text-xs font-semibold text-[#eef2ec] mb-2">
              Additional factors providers commonly consider
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 mt-3">
              {[
                "Revenue consistency — month-over-month and year-over-year trends",
                "Churn rate or customer retention for subscription businesses",
                "Payment processor or bank account integration for automated remittance",
                "Existing debt obligations and current leverage profile",
                "Industry vertical and revenue model (subscription, transactional, project-based)",
                "Personal guarantee — required by some providers even for revenue-based products",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-[#6b7e69]">
                  <span className="mt-0.5 flex-shrink-0 text-[#22c55e]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cost discussion */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Cost Structure
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                How revenue-based financing is priced
              </h2>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-4">
                Revenue-based financing is typically priced using a factor rate rather than an interest rate or APR. The factor rate is applied to the advance amount to determine total repayment. For example, a $200,000 advance with a 1.40 factor rate means total repayment of $280,000 — paid out as a percentage of monthly revenue until that amount is remitted.
              </p>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-4">
                Because repayment is variable in timing (not amount), factor rates cannot be meaningfully converted to APR without knowing the actual repayment duration. A 1.30 factor repaid over 8 months carries a very different effective APR than the same factor repaid over 24 months. ZEO does not guarantee any specific factor rate, advance amount, or repayment timeline — all terms are determined by the third-party provider at underwriting.
              </p>
              <p className="text-[#9aaa98] text-sm leading-relaxed">
                When evaluating an RBF offer, focus on: the total repayment cap (advance × factor rate), the holdback percentage and its impact on monthly cash flow, any origination or administrative fees charged separately, and whether the agreement contains a minimum monthly payment floor or early repayment provisions.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Factor rate",
                  desc: "The core pricing mechanism. The factor rate multiplied by the advance amount equals the total you will repay. Common ranges in the market are 1.15 to 2.0 — but the specific rate offered depends on revenue, consistency, industry, and the provider's own underwriting criteria.",
                },
                {
                  label: "Holdback percentage",
                  desc: "The percentage of monthly revenue remitted to the provider. A higher holdback percentage means faster repayment but more cash flow impact each month. A lower holdback extends the repayment timeline with less monthly impact. Typically negotiated as part of the term sheet.",
                },
                {
                  label: "Origination or processing fee",
                  desc: "Some providers charge a one-time fee on the advance at disbursement — separate from the factor rate. This fee is effectively additional cost on top of the repayment cap and should be factored into any total cost analysis.",
                },
                {
                  label: "Minimum monthly payment",
                  desc: "Certain agreements include a minimum monthly remittance floor, even if actual revenue falls below the amount that would generate it. This reduces some of the flexibility that makes RBF attractive — review for this provision before signing.",
                },
                {
                  label: "No early repayment discount (commonly)",
                  desc: "Unlike a term loan where paying early reduces total interest, most RBF agreements require the full repayment cap to be paid regardless of timing. Early repayment in a strong revenue month does not reduce the total owed — it only shortens the term.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#1e2620] bg-[#111512] px-5 py-4"
                >
                  <p className="text-sm font-semibold text-[#eef2ec] mb-1.5">{item.label}</p>
                  <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Trade-offs
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Potential advantages and limitations to consider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded-full border border-[#22c55e]/40 bg-[#0f2a14] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 2.5" stroke="#22c55e" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#eef2ec]">Potential advantages</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Repayment scales with revenue — lower payments during slow months, no fixed obligation in a bad month",
                  "Non-dilutive: no equity given up, no board seats, no ownership changes",
                  "No hard collateral typically required — underwriting focuses on revenue performance",
                  "Faster to close than SBA loans or conventional term debt in many cases",
                  "Can be appropriate for businesses with limited credit history if revenue is strong",
                  "Repayment term extends naturally if revenue slows — no default triggered by a soft quarter",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#9aaa98] leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-[#22c55e]">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Cons */}
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded-full border border-[#6b7e69]/40 bg-[#111512] flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2.5 7.5l5-5M7.5 7.5l-5-5" stroke="#9aaa98" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-[#eef2ec]">Limitations to be aware of</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Factor rates often result in a higher total cost than traditional interest-bearing debt at equivalent advance amounts",
                  "Total repayment cap is fixed — strong revenue months shorten the term but do not reduce the total owed",
                  "Holdback percentage reduces monthly cash flow and can constrain operating flexibility during repayment",
                  "Not appropriate for businesses with low or inconsistent revenue — repayment depends on that revenue stream",
                  "Factor rates are harder to compare across providers than APR-based products; analysis requires care",
                  "Personal guarantee or UCC lien may still be required by many providers despite the revenue-based structure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#9aaa98] leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-[#6b7e69]">−</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Revenue-based financing vs. other structures
          </h2>
          <p className="text-[#9aaa98] text-sm mb-8 max-w-2xl leading-relaxed">
            General overview only. Actual terms vary significantly by lender, borrower profile, and product. Not offers or commitments. Subject to underwriting.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Revenue-Based"
          />
          <p className="text-[0.65rem] text-[#6b7e69] mt-3">
            All figures are general market estimates. ZEO.co does not guarantee rates, terms, or approval. Third-party providers set their own criteria.
          </p>
        </div>
      </section>

      {/* Alternatives */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Alternatives
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Other structures that may address similar needs
          </h2>
          <p className="text-[#9aaa98] text-sm mb-8 max-w-2xl leading-relaxed">
            Revenue-based financing is one of several non-dilutive capital structures for operating businesses. Depending on your revenue profile, credit, and capital need, these alternatives may be worth evaluating alongside RBF.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<WorkingCapitalIcon />}
              title="Working Capital Loans"
              description="Term-based working capital financing with fixed monthly payments. Better suited to businesses that prefer a predictable payment schedule over a revenue percentage."
              tags={["Fixed payments", "$50K–$5M", "6–36 mo"]}
              href="/working-capital"
            />
            <FinancingPathCard
              icon={<TermLoanIcon />}
              title="Business Term Loans"
              description="Lump-sum financing repaid on a fixed schedule. Often lower in total cost than RBF for creditworthy businesses that can service a fixed monthly payment."
              tags={["Lump sum", "Fixed term", "$25K–$2M"]}
              href="/business-term-loans"
            />
            <FinancingPathCard
              icon={<MCAIcon />}
              title="Merchant Cash Advances"
              description="Similar holdback structure but typically shorter term, higher factor rates, and daily or weekly remittance cadence. Faster access, higher cost — may suit businesses with limited credit history."
              tags={["Daily holdback", "Fast access", "$5K–$500K"]}
              href="/merchant-cash-advance"
            />
            <FinancingPathCard
              icon={<LOCIcon />}
              title="Business Lines of Credit"
              description="Revolving credit facility. Draw what you need, repay, and draw again. Interest accrues only on the drawn balance — potentially lower total cost for businesses with intermittent capital needs."
              tags={["Revolving", "Interest on draws", "$10K–$500K"]}
              href="/business-line-of-credit"
            />
          </div>
        </div>
      </section>

      {/* Calculator link */}
      <section className="py-10 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-1">
                Calculator
              </p>
              <p className="text-sm font-semibold text-[#eef2ec]">
                Estimate the total cost and repayment timeline for a revenue-based advance
              </p>
              <p className="text-xs text-[#6b7e69] mt-1">
                Model factor rate scenarios, holdback percentages, and projected revenue to estimate repayment duration. Estimates only — not a commitment or offer.
              </p>
            </div>
            <Link
              href="/calculators/revenue-based-financing"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#1e2620] text-sm text-[#9aaa98] hover:text-white hover:border-[#22c55e] transition-colors whitespace-nowrap"
            >
              Open Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Frequently Asked Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="See whether revenue-based financing may fit your business"
        subtext="Submit a brief intake and ZEO will review financing structures that may be relevant based on your revenue profile. All financing is subject to underwriting and approval by third-party providers."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing Options"
        secondaryHref="/financing"
      />

      {/* Disclaimer */}
      <section className="pb-12 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>
    </>
  );
}

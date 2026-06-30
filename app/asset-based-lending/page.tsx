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
  title: "Asset-Based Lending for Business | ZEO.co",
  description:
    "Learn how asset-based lending works — how lenders evaluate receivables, inventory, and equipment as collateral, what businesses may qualify, and what to expect from underwriting. Subject to third-party provider terms.",
  path: "/asset-based-lending",
  keywords: [
    "asset-based lending",
    "asset based loan",
    "ABL financing",
    "accounts receivable financing",
    "inventory financing",
    "revolving credit facility",
    "collateral-based lending",
    "business asset loan",
    "working capital ABL",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function ReceivablesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 7h8M5 10h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function InventoryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="12" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function MachineryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 2v2M9 14v2M2 9h2M14 9h2M4.22 4.22l1.42 1.42M12.36 12.36l1.42 1.42M4.22 13.78l1.42-1.42M12.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DistributionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 4h9v7H2zM11 7h3l2 2v4h-5V7z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function StaffingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ManufacturingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 14V8l4-3v3l4-3v3l4-3v8H2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <rect x="6" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function TermLoanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 12h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FactoringIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Financing Options", href: "/financing" },
  { label: "Asset-Based Lending" },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is the difference between asset-based lending and a traditional term loan?",
    a: "A traditional term loan is typically underwritten based on a business's cash flow, profitability, and credit history — you receive a fixed lump sum and repay it on a set schedule. Asset-based lending is structured around a borrowing base: the amount you can draw is tied directly to the value of eligible collateral, most commonly accounts receivable and inventory. As your asset balances rise and fall, so does your available credit. This makes ABL well-suited for businesses with strong asset pools but more volatile or seasonal cash flow.",
  },
  {
    q: "What does the borrowing base mean in practice?",
    a: "The borrowing base is a formula the lender uses to determine how much you can borrow at any given time. It typically advances a percentage of eligible receivables (often 70–85%) and a lower percentage of eligible inventory (often 40–65%), less any reserves the lender holds back. You submit regular borrowing base certificates — usually monthly or weekly — that report your current asset balances. Your available credit line moves with those balances. This is a defining feature of ABL compared to a fixed credit line.",
  },
  {
    q: "Does my business need to be profitable to qualify for asset-based lending?",
    a: "Not necessarily. ABL lenders focus primarily on asset quality and collateral coverage rather than trailing EBITDA. Businesses going through a turnaround, seasonal businesses with compressed margins in off-peak periods, or companies experiencing rapid growth that is outpacing current profitability may still qualify if the underlying asset pool is strong, clean, and well-documented. That said, each lender has its own underwriting criteria, and specific situations vary. Meeting general thresholds does not guarantee approval.",
  },
  {
    q: "What are field examinations and why do lenders require them?",
    a: "A field exam (also called an audit or collateral audit) is an on-site review of your business records, accounting systems, receivables aging, inventory counts, and internal controls conducted by the lender's own staff or a third-party auditor. ABL lenders require these because the collateral is dynamic — unlike a building or a machine, receivables and inventory change constantly. Field exams verify that the assets you report in your borrowing base certificate actually exist and meet eligibility criteria. For new facilities, an initial exam is standard before closing. Ongoing exams are typically annual or more frequent for larger lines.",
  },
  {
    q: "How is asset-based lending different from invoice factoring?",
    a: "Both use receivables as the primary collateral, but the structure differs. In factoring, you sell your invoices outright to a factor, who then collects directly from your customers. You typically receive an advance immediately and the remainder (less fees) when the invoice is paid. ABL keeps the receivables on your books — you borrow against them as collateral while retaining the customer relationship and collecting payment yourself. ABL also typically allows you to draw on inventory as well. Factoring tends to be faster to set up and is accessible to smaller or earlier-stage companies, while ABL generally suits businesses with larger, more predictable receivable pools and established operations.",
  },
];

// ── Comparison data ───────────────────────────────────────────────────────────

const COMPARISON_COLUMNS = ["Asset-Based Lending", "Invoice Factoring", "Term Loan"];

const COMPARISON_ROWS = [
  {
    feature: "Credit basis",
    "Asset-Based Lending": "Asset collateral value",
    "Invoice Factoring": "Invoice quality / debtor credit",
    "Term Loan": "Business cash flow & credit",
  },
  {
    feature: "Credit availability",
    "Asset-Based Lending": "Revolving — tracks asset pool",
    "Invoice Factoring": "Per invoice or portfolio",
    "Term Loan": "Fixed lump sum",
  },
  {
    feature: "Collateral used",
    "Asset-Based Lending": "Receivables, inventory, equipment",
    "Invoice Factoring": "Accounts receivable only",
    "Term Loan": "Varies — often general lien",
  },
  {
    feature: "Customer notification",
    "Asset-Based Lending": "Typically not required",
    "Invoice Factoring": "Usually yes (factor collects)",
    "Term Loan": "Not applicable",
  },
  {
    feature: "Typical facility size",
    "Asset-Based Lending": "$1M – $100M+",
    "Invoice Factoring": "$50K – $5M+",
    "Term Loan": "$25K – $10M+",
  },
  {
    feature: "Ongoing reporting",
    "Asset-Based Lending": "Frequent (borrowing base certs, audits)",
    "Invoice Factoring": "Per invoice submission",
    "Term Loan": "Annual or as required",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AssetBasedLendingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Financing Options", url: "https://zeo.co/financing" },
          { name: "Asset-Based Lending", url: "https://zeo.co/asset-based-lending" },
        ])}
      />

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Financing"
        title="Asset-Based Lending"
        subtitle="A revolving credit structure secured by business assets — primarily accounts receivable and inventory — where borrowing capacity is tied to the real-time value of eligible collateral. Subject to lender underwriting and third-party approval."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical facility size"
              value="$1M – $100M+"
              note="Subject to lender underwriting and asset pool"
            />
            <MetricCard
              label="Receivables advance rate"
              value="70 – 85%"
              note="Of eligible AR; varies by lender and debtor quality"
            />
            <MetricCard
              label="Inventory advance rate"
              value="40 – 65%"
              note="Varies significantly by inventory type and lender"
              highlight
            />
            <MetricCard
              label="Typical facility term"
              value="1 – 3 yrs"
              note="Often renewable; revolving structure"
            />
          </div>
        </div>
      </section>

      {/* ── Who it is for ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Who it may fit
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Asset-heavy businesses that need capital aligned with their cycle
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm">
                Asset-based lending is designed for businesses whose balance sheets contain
                significant, liquid collateral — receivables that turn regularly and inventory
                that moves. The structure is built around the idea that your capacity to borrow
                should expand when your business is growing and contracting when it is not. It is
                not a fit for every company, but for the right profile it can provide substantial
                liquidity without the rigid constraints of a cash-flow term loan.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Businesses with large, diversified receivables",
                  body:
                    "Companies that invoice regularly across a broad customer base — rather than concentrating revenue in one or two accounts — tend to have stronger borrowing bases. Lenders typically apply concentration limits; receivables from any single debtor above a threshold may not be fully eligible.",
                },
                {
                  heading: "Seasonal or cyclical businesses",
                  body:
                    "Businesses whose working capital needs spike — retailers building holiday inventory, agricultural processors, construction contractors in peak season — can draw on an ABL facility when assets are high and repay when they convert to cash. A fixed term loan does not naturally follow this pattern.",
                },
                {
                  heading: "Companies in turnaround or with compressed margins",
                  body:
                    "Because ABL underwrites primarily against assets rather than trailing EBITDA, businesses that are profitable but thin — or working through a restructuring — may qualify when cash-flow lenders decline. The asset quality has to support it, but the structure can provide a lifeline that traditional lenders would not.",
                },
                {
                  heading: "Growth-stage companies outpacing their cash flow",
                  body:
                    "A manufacturer winning large new contracts often has to build inventory and fund payroll before the invoices are paid. ABL allows that company to borrow against the receivables those contracts generate — capital that moves in step with the growth, rather than waiting for it to show up in financial statements.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                >
                  <h3 className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{item.heading}</h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            How it works
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8 text-balance">
            From collateral evaluation to revolving draws
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                step: "1",
                title: "Initial collateral review",
                body:
                  "The lender evaluates your receivables aging, inventory composition, customer concentrations, and historical collection performance to assess the quality and size of the potential borrowing base.",
              },
              {
                step: "2",
                title: "Field exam and due diligence",
                body:
                  "An auditor reviews your books, accounting systems, and internal controls. This initial exam is standard for new ABL facilities and establishes a baseline for ongoing monitoring.",
              },
              {
                step: "3",
                title: "Facility structure and closing",
                body:
                  "If approved, the lender proposes a credit agreement outlining the line size, advance rates, eligible asset criteria, reporting requirements, covenants, and fees. Review thoroughly with counsel.",
              },
              {
                step: "4",
                title: "Borrowing base certificates",
                body:
                  "After closing, you submit regular certificates — often weekly or monthly — reporting current receivables and inventory balances. Your available credit adjusts automatically based on eligible assets.",
              },
              {
                step: "5",
                title: "Ongoing draws and repayment",
                body:
                  "You draw on the facility as needed, up to the borrowing base limit. As invoices are collected, funds are swept to pay down the line, which frees up capacity for future draws.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <span className="inline-block text-[0.65rem] font-semibold tabular-nums text-[#0f0f0f] bg-[#f5f5f5] border border-[#0f0f0f]/20 rounded-md px-2 py-0.5 mb-3">
                  Step {s.step}
                </span>
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{s.title}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common use cases ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Common use cases
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8 text-balance">
            Industries and situations where ABL is commonly used
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<DistributionIcon />}
              title="Wholesale and Distribution"
              description="Distributors holding substantial inventory and carrying large receivables from retail or B2B customers are a classic ABL use case. The asset pool is predictable and lenders understand the sector well."
              tags={["Inventory", "Receivables", "B2B"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<ManufacturingIcon />}
              title="Manufacturing"
              description="Manufacturers carry raw materials, work-in-process, and finished goods alongside receivables. ABL can unlock liquidity at multiple stages of the production cycle, subject to lender eligibility criteria."
              tags={["WIP inventory", "Finished goods", "Receivables"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<StaffingIcon />}
              title="Staffing and Professional Services"
              description="Staffing firms generate large weekly payroll obligations before invoices are collected. ABL against the receivables float can bridge that gap at scale without requiring collateral the business does not have."
              tags={["Payroll funding", "Receivables", "B2B invoices"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<ReceivablesIcon />}
              title="Government and Healthcare Contractors"
              description="Companies that invoice government agencies or large healthcare systems face reliable but slow payment cycles. The creditworthiness of the debtor — not just the borrower — can strengthen the borrowing base."
              tags={["Slow payers", "High credit debtors", "Receivables"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<InventoryIcon />}
              title="Retail and Consumer Goods"
              description="Retailers or brand owners building seasonal inventory ahead of peak periods can borrow against that inventory as it accumulates, then repay as products sell and cash is collected."
              tags={["Seasonal", "Inventory build", "Consumer goods"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<MachineryIcon />}
              title="Industrial and Equipment-Heavy Businesses"
              description="Some ABL structures include equipment as part of the borrowing base alongside receivables and inventory, particularly when the machinery has strong, liquid secondary market value."
              tags={["Equipment", "Multi-asset", "Industrial"]}
              href="/asset-based-lending"
            />
          </div>
        </div>
      </section>

      {/* ── Typical requirements ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Typical requirements
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                What lenders generally evaluate
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                ABL underwriting differs from cash-flow lending in that collateral quality often
                carries more weight than profitability metrics alone. The benchmarks below
                represent common patterns among ABL lenders; individual providers set their own
                criteria. Meeting these thresholds does not guarantee approval.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Minimum facility size",
                    value: "Often $1M or more",
                    note: "Smaller revolvers exist but ABL's reporting infrastructure makes it most efficient at larger sizes; sub-$1M needs may be better served by factoring",
                  },
                  {
                    label: "Receivables quality",
                    value: "Diversified, current, documented",
                    note: "Lenders look for low concentration risk, short average days outstanding, and clean aging — old or concentrated AR reduces eligible balances",
                  },
                  {
                    label: "Inventory eligibility",
                    value: "Finished goods preferred; WIP and raw materials vary",
                    note: "Highly specialized, perishable, or consignment inventory may receive lower advance rates or be excluded from the borrowing base entirely",
                  },
                  {
                    label: "Time in business",
                    value: "Generally 2+ years",
                    note: "Lenders want to see at least two years of auditable or reviewed financials and a track record of asset generation",
                  },
                  {
                    label: "Financial reporting",
                    value: "Monthly financials, audited or reviewed annual statements",
                    note: "ABL requires robust reporting infrastructure — businesses without reliable accounting systems may struggle to maintain compliance",
                  },
                  {
                    label: "Personal credit",
                    value: "Typically 600+ for principals",
                    note: "Less determinative than in cash-flow lending, but severe derogatory history can still affect approval and structure",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                  >
                    <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0f0f0f]" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{req.label}</p>
                      <p className="text-sm text-[#737373] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Cost discussion ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Understanding cost
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                What drives the cost of an ABL facility
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                ZEO.co does not quote, set, or guarantee financing rates. Actual costs depend
                on the factors below and the specific terms offered by a third-party provider
                following underwriting. ABL facilities typically carry multiple fee components —
                evaluate the total cost, not just the stated interest rate.
              </p>
              <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Interest on drawn balances.</span>{" "}
                  ABL facilities are typically priced as a spread over a reference rate (historically
                  LIBOR, now typically SOFR). You pay interest only on the amount you have actually
                  drawn, not the full committed line — which can make them cost-efficient for
                  businesses that draw down and repay frequently.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Unused line fees.</span>{" "}
                  Most ABL facilities charge a fee on the undrawn portion of the committed line —
                  typically a fraction of a percent annually. This compensates the lender for
                  holding the commitment available even when you are not drawing on it.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Field exam and audit costs.</span>{" "}
                  Initial and ongoing field exams are often passed through to the borrower. These
                  can add meaningful cost, particularly at smaller facility sizes. Understand the
                  exam schedule and cost structure before committing to a facility.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Origination and closing fees.</span>{" "}
                  Upfront fees to establish the facility vary by lender and deal complexity. On
                  larger transactions, legal fees for negotiating the credit agreement can also be
                  substantial.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Collateral quality.</span>{" "}
                  Businesses with clean, diversified, short-cycle receivables and well-documented
                  inventory tend to receive more favorable pricing. Riskier asset profiles —
                  concentrated debtors, slow-paying customers, hard-to-value inventory — may see
                  lower advance rates, higher spreads, or additional reserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pros and cons ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Weighing your options
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8 text-balance">
            Potential advantages and drawbacks
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Potential advantages
              </h3>
              <ul className="space-y-3">
                {[
                  "Borrowing capacity scales with the business — as receivables and inventory grow, so does your available line.",
                  "May provide access to capital when cash flow is insufficient to qualify for a traditional term loan.",
                  "You pay interest only on drawn balances, which can make it cost-efficient for businesses with variable draw patterns.",
                  "Revolving structure means repaid balances become available again — unlike a term loan that reduces as you pay it down.",
                  "Asset focus rather than pure cash-flow underwriting can benefit seasonal or turnaround businesses with strong balance sheets.",
                  "Larger facilities often carry lower rates than factoring or short-term working capital products, subject to deal terms.",
                ].map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg
                      className="flex-shrink-0 mt-0.5 text-[#0f0f0f]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 7.5l3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#a3a3a3] uppercase tracking-wide mb-4">
                Potential drawbacks
              </h3>
              <ul className="space-y-3">
                {[
                  "Significant ongoing reporting obligations — borrowing base certificates, field exams, and financial statement delivery can be burdensome.",
                  "Generally requires minimum facility sizes that may be too large for smaller businesses; smaller needs may be better served by factoring.",
                  "Lenders typically take a first-priority blanket lien on all business assets, which can limit other financing options.",
                  "Costs beyond interest — unused line fees, audit costs, legal fees — can erode the value of the facility if not planned for.",
                  "If asset quality deteriorates (customers slow to pay, inventory becomes ineligible), available credit can contract quickly — sometimes at the worst time.",
                  "Approval and terms are not guaranteed; subject to full underwriting and third-party lender decisions.",
                ].map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg
                      className="flex-shrink-0 mt-0.5 text-[#a3a3a3]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 3l8 8M11 3l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {pt}
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
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Structure comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-6 text-balance">
            Asset-based lending vs. invoice factoring vs. term loan
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            This table summarizes general structural differences between common approaches to
            receivables-backed financing. Actual terms depend on the lender and your specific situation.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Asset-Based Lending"
          />
        </div>
      </section>

      {/* ── Alternatives ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Alternatives to consider
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            Other financing paths that may be relevant
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Asset-based lending is a powerful tool for the right profile, but it is not always the
            best starting point. Depending on your business size, asset pool, and financing goals,
            one of these alternatives may be a better potential fit or a useful complement.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <FinancingPathCard
              icon={<FactoringIcon />}
              title="Invoice Factoring"
              description="Sell outstanding invoices for immediate cash. Simpler setup than ABL and accessible to smaller businesses, but you give up the customer relationship and typically pay higher fees."
              tags={["Receivables", "Fast setup", "No debt"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Line of Credit"
              description="A revolving credit line typically underwritten on cash flow rather than asset value. Less reporting overhead than ABL but availability is not tied to your asset base."
              tags={["Revolving", "Unsecured options", "Cash flow"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loans"
              description="SBA-backed term financing that can include working capital. Longer terms and potentially favorable rates for qualifying businesses, though the process is documentation-intensive."
              tags={["SBA", "Government-backed", "Term loan"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<TermLoanIcon />}
              title="Business Term Loans"
              description="Fixed-sum, fixed-term financing based on business cash flow and creditworthiness. Simpler structure than ABL with predictable payments, but not revolving."
              tags={["Fixed repayment", "Cash-flow based", "Lump sum"]}
              href="/business-term-loans"
            />
          </div>
        </div>
      </section>

      {/* ── Calculator link ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1">
                Calculator
              </p>
              <h3 className="text-lg font-semibold text-white mb-1">
                Estimate your borrowing base
              </h3>
              <p className="text-sm text-[#a3a3a3] max-w-md">
                Use our working capital calculator to model how receivable and inventory balances
                translate to potential borrowing capacity under typical ABL advance rates. Results
                are illustrative only — not an offer or commitment from any lender.
              </p>
            </div>
            <Link
              href="/calculators/working-capital"
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-[#0f0f0f]/30 text-[#0f0f0f] text-sm font-semibold hover:bg-[#f5f5f5] hover:border-[#0f0f0f]/60 transition-colors whitespace-nowrap"
            >
              Open Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={FAQ_ITEMS}
        title="Asset-Based Lending — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Evaluate asset-based lending options for your business"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit based on your business profile. Subject to underwriting by third-party providers. Results are not guaranteed."
        primaryLabel="Start Application"
        primaryHref="/apply"
        secondaryLabel="Browse All Financing Options"
        secondaryHref="/financing"
      />

      {/* ── Disclaimer ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

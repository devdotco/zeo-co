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
  title: "Working Capital Loans for Business | ZEO.co",
  description:
    "Working capital financing may help businesses cover operating expenses, bridge revenue gaps, fund payroll, and manage seasonal demand. Subject to underwriting and approval by third-party providers.",
  path: "/working-capital",
  keywords: [
    "working capital loans",
    "working capital financing",
    "business working capital",
    "short-term business loans",
    "operating capital financing",
    "cash flow loans for business",
    "business revenue gap financing",
    "seasonal business financing",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function CashFlowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 14l3-5 3 2 3-6 3 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 14h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function PayrollIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8h3M5 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="13" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function InventoryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="10" width="14" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 13h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function MarketingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L15 5v5c0 3.5-2.5 6-6 7C3.5 16 1 13.5 1 10V5L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6.5 9l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BridgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 13h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 13V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 13V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 9C2 9 5 5 9 5s7 4 7 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SeasonalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3V2M9 16v-1M3 9H2M16 9h-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

function FactoringIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 7h5M5 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13 9l2 2-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Comparison Table Data ─────────────────────────────────────────────────────

const comparisonColumns = ["Working Capital Loan", "Business Line of Credit", "MCA", "SBA 7(a)"];

const comparisonRows = [
  {
    feature: "Structure",
    "Working Capital Loan": "Lump-sum, fixed term",
    "Business Line of Credit": "Revolving, draw as needed",
    MCA: "Advance against receivables",
    "SBA 7(a)": "Lump-sum, gov.-backed",
  },
  {
    feature: "Typical amount",
    "Working Capital Loan": "$50K – $5M",
    "Business Line of Credit": "$10K – $500K",
    MCA: "$5K – $500K",
    "SBA 7(a)": "$50K – $5M+",
  },
  {
    feature: "Typical term",
    "Working Capital Loan": "6 – 36 months",
    "Business Line of Credit": "12 – 24 months",
    MCA: "3 – 18 months",
    "SBA 7(a)": "Up to 10 years",
  },
  {
    feature: "Repayment",
    "Working Capital Loan": "Fixed monthly",
    "Business Line of Credit": "Interest on drawn balance",
    MCA: "Daily/weekly holdback %",
    "SBA 7(a)": "Fixed monthly",
  },
  {
    feature: "Collateral",
    "Working Capital Loan": "Often unsecured / UCC",
    "Business Line of Credit": "Often unsecured",
    MCA: "Future receivables",
    "SBA 7(a)": "Business assets + PG",
  },
  {
    feature: "Typical funding speed",
    "Working Capital Loan": "2 – 7 days",
    "Business Line of Credit": "3 – 10 days",
    MCA: "1 – 3 days",
    "SBA 7(a)": "30 – 90 days",
  },
  {
    feature: "Min. credit (typical)",
    "Working Capital Loan": "580+",
    "Business Line of Credit": "600+",
    MCA: "500+",
    "SBA 7(a)": "650+",
  },
];

// ── FAQ Data ──────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What can working capital financing be used for?",
    a: "Working capital financing is generally used to cover near-term operating expenses rather than long-term capital assets. Common uses include bridging gaps between receivables and payables, covering payroll during a slow month, stocking inventory ahead of a peak season, funding a marketing push, and handling unexpected operating expenses. Specific use-of-proceeds restrictions vary by lender and product structure.",
  },
  {
    q: "What revenue and credit profile might a business need to potentially qualify?",
    a: "Requirements vary by provider. Many working capital lenders look for a minimum of $10,000–$15,000 in average monthly revenue, at least 6–12 months of operating history, and a personal credit score above 580. Stronger revenue, longer operating history, and higher credit scores typically correspond to more favorable offers. These are general estimates — actual eligibility is determined by the applicable third-party provider's underwriting criteria.",
  },
  {
    q: "Is working capital financing the same as a merchant cash advance?",
    a: "No, though the two are sometimes confused. A working capital loan is typically a fixed lump-sum disbursement repaid in scheduled installments with an explicit cost rate. A merchant cash advance is a purchase of future receivables or sales — not technically a loan — with repayment structured as a holdback percentage of daily or weekly transactions. MCAs often carry significantly higher effective costs. Always compare the total payback amount, not just the headline rate or factor.",
  },
  {
    q: "How is the cost of working capital financing typically expressed?",
    a: "Short-term lenders often quote an Annual Percentage Rate (APR), a simple interest rate, or a factor rate depending on the product. APR is the most standardized basis for comparison, but many providers quote simple rates or factor rates. To compare products accurately, convert every offer to APR or total payback amount. ZEO does not set rates and does not guarantee any specific pricing — all offers are made by and subject to the underwriting criteria of the applicable third-party provider.",
  },
  {
    q: "How quickly can working capital financing fund?",
    a: "Funding timelines vary significantly by product, lender, and application completeness. Some online lenders fund within 24–72 hours of approval; others take 5–10 business days. SBA-structured working capital loans involve longer review processes that typically run 30–90 days. Providing complete financial documentation — bank statements, tax returns, P&L — generally shortens review time. Actual timelines are determined by the applicable third-party provider.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WorkingCapitalPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Financing Options", url: "https://zeo.co/financing" },
          { name: "Working Capital Loans", url: "https://zeo.co/working-capital" },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Financing Options", href: "/financing" },
          { label: "Working Capital Loans" },
        ]}
        eyebrow="Financing"
        title="Working Capital Loans"
        subtitle="Short- to medium-term financing designed to cover operating expenses, bridge revenue timing gaps, and support day-to-day business operations. All financing is subject to underwriting and approval by third-party providers."
      />

      {/* 2. Snapshot metrics */}
      <section className="py-12 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <MetricCard label="Typical amount" value="$50K – $5M" note="Subject to underwriting" />
            <MetricCard label="Typical term" value="6 – 36" unit="months" note="Varies by lender and structure" />
            <MetricCard label="Funding speed" value="2 – 7" unit="days" note="After approval; varies by provider" />
            <MetricCard label="Min. credit (typical)" value="580+" note="Personal FICO; varies by lender" highlight />
          </div>
          <p className="text-[0.65rem] text-[#a3a3a3] mt-3">
            All figures are general market estimates. ZEO.co does not set terms or guarantee any specific amount, rate, or timeline. Actual offers are subject to third-party underwriting.
          </p>
        </div>
      </section>

      {/* 3. Who it is for */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Fit
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Who working capital financing may be a fit for
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed">
                Working capital financing is not one-size-fits-all. It tends to be most relevant for businesses with identifiable short-term cash flow needs rather than long-term capital investment projects. Below are common business profiles where this type of financing may be worth evaluating.
              </p>
              <p className="text-[0.65rem] text-[#a3a3a3] mt-4">
                Whether any specific business may qualify is subject to third-party underwriting. ZEO is not a lender.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Established businesses with revenue timing gaps",
                  body: "Businesses that invoice clients on net-30, net-60, or net-90 terms often accumulate receivables faster than cash arrives. Working capital financing may help bridge the lag between earned revenue and collected cash.",
                },
                {
                  heading: "Seasonal businesses preparing for peak periods",
                  body: "Retail, hospitality, agriculture, and construction businesses often need capital before their highest-revenue months. Financing deployed pre-season may support inventory build, staffing, or marketing ahead of cash coming in.",
                },
                {
                  heading: "Growing businesses managing rapid scale",
                  body: "Revenue growth frequently outpaces the cash available to fulfill new orders or service contracts. Working capital can provide the float needed to hire, stock, or execute while customer payments accumulate.",
                },
                {
                  heading: "Businesses covering a specific near-term expense",
                  body: "Not every capital need is strategic. Equipment repair, a large vendor invoice, or a temporary payroll shortfall may be addressable with a short-term working capital structure rather than a multi-year term loan.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{item.heading}</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Process
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            How working capital financing typically works
          </h2>
          <p className="text-[#737373] text-sm mb-10 max-w-2xl">
            The process varies by lender and product type. The sequence below reflects a common online-lender flow. Traditional bank and SBA-structured working capital products involve additional documentation and review steps.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "Application",
                body: "A business submits basic information — revenue, time in business, requested amount, and use of proceeds — along with financial documentation such as recent bank statements and tax returns.",
              },
              {
                step: "2",
                title: "Underwriting review",
                body: "The lender or provider reviews cash flow, credit profile, debt obligations, and sometimes industry and business type. Additional documentation may be requested.",
              },
              {
                step: "3",
                title: "Offer presentation",
                body: "If approved, the provider presents offer terms: amount, cost rate or APR, repayment schedule, fees, and any collateral or guarantee requirements. These vary by provider.",
              },
              {
                step: "4",
                title: "Agreement and closing",
                body: "Upon acceptance, closing documents are executed. Some lenders file a UCC-1 financing statement. Personal guarantees are common across most working capital structures.",
              },
              {
                step: "5",
                title: "Disbursement",
                body: "Funds are deposited to the business bank account. Repayment begins per the agreed schedule — typically monthly or weekly automated ACH debits.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#e5e5e5] mb-3">
                  <span className="text-xs font-semibold text-[#0f0f0f] tabular-nums">{item.step}</span>
                </div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.title}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Common use cases */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Use Cases
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Common uses of working capital financing
          </h2>
          <p className="text-[#737373] text-sm mb-10 max-w-2xl">
            Specific use-of-proceeds restrictions vary by lender. Always confirm with the applicable third-party provider what a working capital product may be used for before accepting an offer.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                Icon: CashFlowIcon,
                title: "Cash flow gap coverage",
                body: "Cover operating expenses during periods when revenue is earned but not yet collected, or when revenue is temporarily below fixed cost obligations.",
                tags: ["Net-30/60/90 terms", "Receivables lag"],
              },
              {
                Icon: PayrollIcon,
                title: "Payroll funding",
                body: "Ensure payroll obligations are met during slow months, after a large client payment delay, or while waiting on a large contract disbursement.",
                tags: ["Operating continuity", "Fixed obligations"],
              },
              {
                Icon: InventoryIcon,
                title: "Inventory and supply purchasing",
                body: "Pre-purchase inventory ahead of a high-demand period, lock in supplier pricing, or build buffer stock to avoid stockouts during peak demand.",
                tags: ["Seasonal prep", "Pre-purchase"],
              },
              {
                Icon: MarketingIcon,
                title: "Marketing and customer acquisition",
                body: "Fund a specific marketing campaign or digital advertising push where the expected return justifies the short-term cost of capital.",
                tags: ["Revenue-generating", "Time-sensitive"],
              },
              {
                Icon: BridgeIcon,
                title: "Bridge financing",
                body: "Cover operations while waiting for a longer-term financing product — SBA, term loan, or CRE — to close, or while a pending contract is finalized.",
                tags: ["Short-term bridge", "Gap coverage"],
              },
              {
                Icon: SeasonalIcon,
                title: "Seasonal ramp-up",
                body: "Hire seasonal staff, expand service capacity, or ramp production in advance of a business's highest-revenue months.",
                tags: ["Hospitality", "Retail", "Agriculture"],
              },
            ].map(({ Icon, title, body, tags }) => (
              <div key={title} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f] mb-3">
                  <Icon />
                </div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{title}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed mb-3">{body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span key={t} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Typical requirements */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Eligibility
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Typical requirements
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                Requirements vary meaningfully across lenders and product types. The figures below reflect general market patterns across online working capital lenders. Bank and SBA-backed working capital products typically carry stricter standards. Whether any specific business may qualify is determined solely by the applicable third-party provider.
              </p>
              <ProductDisclaimer type="general" />
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Time in business",
                  range: "6 months – 2 years minimum (varies by lender)",
                  note: "Online lenders often accept 6–12 months. Traditional banks typically require 2+ years. SBA-structured products generally require an established operating history.",
                },
                {
                  label: "Annual revenue",
                  range: "$120K – $250K+ (varies by lender and amount)",
                  note: "Many online working capital providers look for $10K–$15K or more in average monthly deposits. Higher requested amounts typically require proportionally higher revenue.",
                },
                {
                  label: "Personal credit score",
                  range: "580+ (varies; higher is better)",
                  note: "Some lenders accept scores below 600; others require 650 or higher. Derogatory items, recent bankruptcies, and existing defaults may affect eligibility regardless of score.",
                },
                {
                  label: "Business bank account",
                  range: "Required by most providers",
                  note: "Most lenders require an active business checking account for underwriting review and repayment. Minimum average daily balance requirements vary.",
                },
                {
                  label: "Documentation typically required",
                  range: "Bank statements, tax returns, P&L",
                  note: "Typically 3–6 months of business bank statements. Some lenders also require 1–2 years of business tax returns, a profit and loss statement, and identification.",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="text-sm font-semibold text-[#0f0f0f]">{item.label}</p>
                    <span className="flex-shrink-0 text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#0f0f0f] font-medium tabular-nums whitespace-nowrap">
                      {item.range}
                    </span>
                  </div>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Cost discussion */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Cost
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Understanding the cost of working capital financing
            </h2>
            <div className="space-y-5 text-sm text-[#737373] leading-relaxed">
              <p>
                Working capital financing can carry a wide range of costs depending on the product structure, lender, borrower credit profile, revenue, and requested term. ZEO does not set or guarantee any specific rate, and nothing on this page constitutes a rate offer.
              </p>
              <p>
                Short-term working capital loans — particularly those from online or alternative lenders — often carry higher effective rates than conventional bank term loans or SBA products. This reflects the lender's risk exposure: shorter repayment windows, less collateral, and faster underwriting timelines typically correspond to higher pricing.
              </p>
              <p>
                <span className="text-[#0f0f0f] font-medium">How cost is quoted varies:</span> some providers express cost as an APR (Annual Percentage Rate), others use a simple interest rate, and some — particularly MCA providers — use a factor rate (e.g., 1.25 on a $100,000 advance means $125,000 total repayment). Factor rates are not APRs and can be misleading when used for comparison. To compare offers accurately, convert all to either total repayment amount or APR.
              </p>
              <p>
                Additional fees may include origination fees, draw fees, prepayment penalties, and monthly maintenance charges. Review the full fee schedule before accepting any offer. Third-party legal and accounting review is advisable for any significant financing commitment.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">APR</p>
                <p className="text-sm font-medium text-[#0f0f0f] mb-1">Annual Percentage Rate</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">Standardized basis for cost comparison. Accounts for fees and term length. Use this to compare across lenders.</p>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">Factor Rate</p>
                <p className="text-sm font-medium text-[#0f0f0f] mb-1">Used by some MCA / short-term providers</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">Expressed as a multiplier (e.g., 1.30). Not an APR — total repayment = advance amount × factor rate.</p>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">Total Payback</p>
                <p className="text-sm font-medium text-[#0f0f0f] mb-1">Most direct comparison</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">The total amount repaid across all payments, including principal, interest, and fees. Useful for evaluating absolute cost.</p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/calculators/working-capital"
                className="inline-flex items-center gap-2 text-sm text-[#0f0f0f] hover:text-[#0f0f0f] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4 4h2.5M4 7h6M4 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Estimate working capital costs with the calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pros and cons */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Considerations
          </p>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Potential advantages and tradeoffs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Potential advantages */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#0f0f0f]" />
                <p className="text-sm font-semibold text-[#0f0f0f]">Potential advantages</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Faster funding timelines compared to SBA or conventional bank products — some providers fund within 24–72 hours of approval.",
                  "Less collateral required than secured term loans; many working capital products are structured without real property collateral.",
                  "Flexible use of proceeds for general operating needs, without the asset-specific restrictions that apply to equipment or real estate financing.",
                  "Shorter terms may reduce total interest paid when the capital need is genuinely short-term and the loan is repaid early.",
                  "Accessible to businesses that may not meet the 2+ year history or credit thresholds of conventional lenders.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#a3a3a3] leading-relaxed">
                    <svg className="flex-shrink-0 w-4 h-4 mt-0.5 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3 3 7-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Potential tradeoffs */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-[#a3a3a3]" />
                <p className="text-sm font-semibold text-[#0f0f0f]">Potential tradeoffs</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Short-term working capital products — especially from alternative or online lenders — often carry higher effective rates than longer-term bank or SBA financing.",
                  "Shorter repayment windows mean higher periodic payment obligations, which can strain cash flow if revenue does not recover as anticipated.",
                  "Personal guarantees are common across most working capital structures, meaning the owner's personal assets may be at risk in a default.",
                  "UCC-1 financing statements filed by the lender can affect a business's ability to obtain additional financing until the obligation is retired.",
                  "Repeated stacking of short-term working capital obligations — taking a new loan before the prior one is paid — is associated with elevated default risk.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#a3a3a3] leading-relaxed">
                    <svg className="flex-shrink-0 w-4 h-4 mt-0.5 text-[#a3a3a3]" viewBox="0 0 16 16" fill="none">
                      <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Comparison table */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Working capital vs. related financing structures
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            General comparison only. Actual terms, eligibility, and cost vary by applicant, lender, and product. Not offers or commitments.
          </p>

          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Working Capital Loan"
          />

          <p className="text-[0.65rem] text-[#a3a3a3] mt-3">
            All figures are general estimates. ZEO.co does not guarantee rates, terms, or approval. Third-party providers set their own underwriting criteria. Results may vary significantly.
          </p>
        </div>
      </section>

      {/* 10. Alternatives */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Alternatives
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Related financing options to consider
          </h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            Depending on your business profile and use case, one of these structures may be a better potential fit than a general working capital loan.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Line of Credit"
              description="A revolving facility you draw from and repay as needed. May suit businesses with ongoing, variable cash flow needs rather than a single lump-sum requirement."
              tags={["Revolving", "Draw as needed", "$10K–$500K"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Working Capital"
              description="For businesses that may qualify, SBA 7(a) can structure working capital financing with longer terms and government-backed guarantees. Longer process, more documentation."
              tags={["Government-backed", "Up to 10 years", "Stricter criteria"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<FactoringIcon />}
              title="Invoice Factoring"
              description="If receivables are the source of your cash flow gap, selling outstanding invoices to a factor may unlock capital without taking on debt against future revenues."
              tags={["A/R-based", "Non-dilutive", "B2B invoices"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<SeasonalIcon />}
              title="Revenue-Based Financing"
              description="Repayment adjusts with revenue — useful when income is variable. May suit subscription, SaaS, or recurring-revenue businesses with predictable top-line but variable timing."
              tags={["% of revenue", "Flexible repay", "Recurring model"]}
              href="/revenue-based-financing"
            />
          </div>
        </div>
      </section>

      {/* 11. Calculator link callout */}
      <section className="py-12 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-2">
                Calculator
              </p>
              <h3 className="text-base font-semibold text-[#0f0f0f] mb-1">
                Estimate your working capital costs
              </h3>
              <p className="text-xs text-[#a3a3a3] max-w-md">
                Enter loan amount, term, and an estimated rate to see projected payment and total cost figures. Results are estimates only — not offers, commitments, or guarantees from any lender.
              </p>
            </div>
            <Link
              href="/calculators/working-capital"
              className="flex-shrink-0 px-6 py-2.5 rounded-xl border border-[#e5e5e5] text-sm text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f]/50 transition-colors"
            >
              Open calculator
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <FAQ
        title="Working Capital Financing — Common Questions"
        items={faqItems}
      />

      {/* 13. CTA */}
      <CTASection
        headline="Explore whether working capital financing may be a fit"
        subtext="Submit a brief intake and ZEO will review potential financing structures that may be relevant to your business. All financing is subject to underwriting and approval by third-party providers."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="View All Financing Options"
        secondaryHref="/financing"
      />

      {/* 14. Disclaimer */}
      <section className="py-10 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>
    </>
  );
}

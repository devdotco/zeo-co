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
  title: "Trucking and Logistics Financing | ZEO.co",
  description:
    "Explore financing options for trucking carriers, freight brokers, and logistics operators — including freight factoring, equipment financing, SBA loans, and working capital. Learn what lenders typically evaluate and which structures may be a fit, subject to third-party underwriting.",
  path: "/industries/trucking-logistics",
  keywords: [
    "trucking financing",
    "freight factoring",
    "trucking equipment financing",
    "carrier working capital",
    "logistics business loans",
    "SBA loan trucking",
    "freight broker financing",
    "fleet financing",
    "owner operator financing",
    "transportation factoring",
    "fuel advance trucking",
    "commercial truck loan",
  ],
});

// ── Breadcrumbs ────────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Industries", href: "/industries" },
  { label: "Trucking and Logistics Financing" },
];

// ── Icons ──────────────────────────────────────────────────────────────────────

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M1.5 12.5h1m11 0h1.5M1.5 5h10v7.5H1.5V5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 7.5h3l2 2.5v2.5h-5V7.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4.5" cy="13" r="1.25" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13.5" cy="13" r="1.25" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M13.5 3a3.5 3.5 0 0 0-3.46 4.04L4.5 12.5a1.41 1.41 0 1 0 2 2l5.46-5.54A3.5 3.5 0 1 0 13.5 3z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GovIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3 7h12M3 7V6l6-3 6 3v1M5 7v7M9 7v7M13 7v7M3 14h12"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4.5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 11.5h3M12 11.5h1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className}>
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-[#22c55e]">
      <path
        d="M3 7l2.5 2.5L11 4.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-[#6b7e69]">
      <path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Comparison data ────────────────────────────────────────────────────────────

const comparisonColumns = ["Freight Factoring", "Equipment Financing", "SBA 7(a) Loan"];
const comparisonRows = [
  {
    feature: "Primary approval basis",
    "Freight Factoring": "Broker / shipper credit quality",
    "Equipment Financing": "Equipment value + business credit",
    "SBA 7(a) Loan": "Business credit, cash flow, collateral",
  },
  {
    feature: "Typical speed to funding",
    "Freight Factoring": "Same day – 2 business days",
    "Equipment Financing": "3–10 business days",
    "SBA 7(a) Loan": "30–90 days",
  },
  {
    feature: "Use of proceeds",
    "Freight Factoring": "Any operating expense",
    "Equipment Financing": "Truck, trailer, or equipment purchase",
    "SBA 7(a) Loan": "Broad: equipment, working capital, real estate",
  },
  {
    feature: "Collateral required",
    "Freight Factoring": "Invoices / receivables",
    "Equipment Financing": "The financed asset",
    "SBA 7(a) Loan": "Business and personal assets",
  },
  {
    feature: "Personal guarantee",
    "Freight Factoring": "Varies by provider",
    "Equipment Financing": "Common for new operators",
    "SBA 7(a) Loan": "Required for 20%+ owners",
  },
  {
    feature: "Best fit for",
    "Freight Factoring": "Cash flow gaps between load and payment",
    "Equipment Financing": "Fleet expansion or replacement",
    "SBA 7(a) Loan": "Established carriers with strong financials",
  },
];

// ── Financing products ─────────────────────────────────────────────────────────

const financingCards = [
  {
    icon: <InvoiceIcon />,
    title: "Freight Factoring",
    description:
      "Sell load invoices to a factoring company and receive an advance — often the same day or next business day. Factors specializing in trucking typically offer fuel advances, back-office support, and broker credit checks. Approval is based on broker and shipper creditworthiness, not just carrier credit history.",
    tags: ["Same-day funding", "Fuel advances", "Broker credit checks", "Back-office support"],
    href: "/factoring/freight-factoring",
    highlight: true,
  },
  {
    icon: <WrenchIcon />,
    title: "Equipment Financing",
    description:
      "Finance the purchase of trucks, trailers, refrigerated units, and other commercial vehicles through term loans or leases secured by the equipment itself. Down payment requirements, interest rates, and term lengths vary based on the age of equipment, the carrier's time in business, and credit profile.",
    tags: ["Trucks & trailers", "Reefer units", "New and used", "Secured by asset"],
    href: "/equipment-financing",
  },
  {
    icon: <GovIcon />,
    title: "SBA 7(a) Loans",
    description:
      "SBA-guaranteed loans issued by participating lenders can be used for equipment, working capital, or real estate by established trucking businesses. Longer repayment terms and potentially lower rates than conventional alternatives — but documentation requirements are substantial and approval timelines are longer.",
    tags: ["Up to $5M", "Longer terms", "SBA-guaranteed", "Heavy documentation"],
    href: "/sba-loans",
  },
  {
    icon: <CreditIcon />,
    title: "Working Capital Line of Credit",
    description:
      "A revolving draw facility for covering fuel, insurance, driver wages, and repairs between load payments. Approval is based on the business's creditworthiness and revenue history rather than specific invoices. Suitable for carriers with established operating histories who need flexible short-term liquidity.",
    tags: ["Revolving access", "Fuel & payroll", "No invoice required", "Credit-based approval"],
    href: "/business-line-of-credit",
  },
];

// ── FAQ data ───────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What is freight factoring and how does it work for trucking companies?",
    a: "Freight factoring is a form of invoice factoring specific to carriers, owner-operators, and freight brokers. After completing a load, the carrier submits the load confirmation and proof of delivery to a factoring company instead of waiting for the broker or shipper to pay net-30 or net-60. The factor advances a large percentage of the invoice — often 90–97% — usually the same day or next business day. The factor then collects directly from the broker or shipper. Once payment is received, the factor remits the reserve balance minus its discount fee. Freight-specialized factors often include fuel advance programs, broker credit screening, and back-office invoicing as part of their service.",
  },
  {
    q: "Can owner-operators and small fleets qualify for equipment financing?",
    a: "Many equipment lenders do work with owner-operators and small fleets, though eligibility criteria vary significantly by lender. Key factors typically include time in business, personal credit score, prior commercial vehicle history, and the age and condition of the equipment being financed. Newer operators or those with credit challenges may face higher down payment requirements, shorter terms, or may need to work with lenders who specialize in startup trucking businesses. Approval is subject to each lender's own underwriting standards.",
  },
  {
    q: "How do trucking companies typically use SBA loans?",
    a: "Established trucking businesses may use SBA 7(a) loans for fleet expansion, purchasing real estate for a terminal or yard, refinancing existing equipment debt, or funding working capital. The SBA does not lend directly — loans are issued by participating banks, credit unions, and non-bank lenders with an SBA guarantee on a portion of the loan. Trucking applicants typically need at least two years in business, documented revenue, a solid personal credit profile, and the ability to demonstrate repayment capacity from business cash flow. ZEO.co is not the SBA or an SBA lender.",
  },
  {
    q: "What financial documents do trucking lenders typically request?",
    a: "Most commercial lenders reviewing trucking businesses will ask for business and personal tax returns for the past 2–3 years, recent profit and loss statements, a year-to-date balance sheet, bank statements for the past 3–6 months, and basic information about the fleet — number of units, age, owner-operated or driver-employed. For equipment loans, title or purchase agreements for the assets may be required. Factoring companies focus more on load documentation and broker payment history than on the carrier's financial statements.",
  },
  {
    q: "Is factoring or a line of credit a better fit for covering fuel and operating costs?",
    a: "This depends on the carrier's situation. Freight factoring can provide same-day or next-day cash on completed loads, which many carriers use to cover fuel and driver pay without waiting on broker payment. Some freight factors also offer fuel advance programs before proof of delivery is submitted. A business line of credit, on the other hand, does not require an outstanding invoice — it provides revolving access to funds based on the business's overall creditworthiness. Factoring is often more accessible for newer carriers or those without strong credit, while a line of credit may carry lower effective costs for well-established operators who qualify.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function TruckingLogisticsPage() {
  return (
    <div className="min-h-screen bg-[#0a0d0b]">
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industry"
        title="Trucking and Logistics Financing"
        subtitle="Carriers, owner-operators, freight brokers, and logistics businesses operate on thin margins and long payment cycles. Explore financing structures that may help bridge the gap — subject to underwriting and approval by third-party providers."
      />

      {/* ── Metrics strip ─────────────────────────────────────────────────── */}
      <section className="border-b border-[#1e2620] py-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Freight factoring advance"
              value="90–97"
              unit="% of invoice"
              note="Higher advance rates than general factoring; brokers and shippers are the credit basis"
            />
            <MetricCard
              label="Typical funding speed"
              value="Same day"
              unit="– 2 days"
              note="After initial setup; some factors offer fuel advances before proof of delivery"
            />
            <MetricCard
              label="Equipment loan terms"
              value="24–84"
              unit="months"
              note="Varies by asset age, lender, and borrower credit profile"
              highlight
            />
            <MetricCard
              label="SBA 7(a) maximum"
              value="$5M"
              unit="loan amount"
              note="Subject to SBA program rules, lender underwriting, and eligibility"
            />
          </div>
        </div>
      </section>

      {/* ── Financing challenges ───────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Industry Context
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                Financing challenges unique to trucking and logistics
              </h2>
              <div className="space-y-4 text-sm text-[#9aaa98] leading-relaxed">
                <p>
                  The trucking industry is defined by a persistent structural mismatch: operating costs hit immediately — fuel, driver wages, insurance, tolls, maintenance — while broker and shipper payments often don&apos;t arrive for 30 to 60 days. For carriers hauling dozens of loads a week, that gap compounds quickly into a meaningful working capital deficit, even when the business is profitable on paper.
                </p>
                <p>
                  Equipment is the other defining constraint. A Class 8 truck can cost $150,000 to $250,000 new and $50,000 to $100,000 used. Trailer costs add further capital requirements. Carriers need to grow their fleet to win larger contracts, but deploying capital to buy equipment while managing tight cash flow requires access to outside financing. Banks have traditionally been conservative in this space, particularly with newer carriers or owner-operators with limited credit history.
                </p>
                <p>
                  Fuel price volatility adds a layer of unpredictability that makes budgeting difficult. A sudden spike in diesel can compress per-mile margins on fixed-rate contracts with no adjustment mechanism. Insurance costs have also risen significantly for trucking businesses, adding another fixed expense that must be absorbed before a single mile is driven.
                </p>
                <p>
                  These dynamics make trucking one of the industries where specialized financing products — particularly freight factoring — have become deeply embedded in day-to-day operations rather than a last resort. Understanding the available structures, and which situations each one is suited to, is a practical necessity for running a trucking business at any scale.
                </p>
              </div>
            </div>

            {/* Challenge sidebar */}
            <div className="space-y-3">
              <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-4">
                  Common cash flow pressure points
                </p>
                <ul className="space-y-3">
                  {[
                    "Fuel and DEF expenses due immediately; broker payment net-30 to net-60",
                    "Driver wages and per-diem obligations run weekly regardless of invoice payment timing",
                    "Insurance premiums — often six-figure annual costs — paid in lump sums or installments",
                    "Unexpected maintenance and breakdowns with no buffer for downtime",
                    "Deadhead miles and empty return legs eroding per-load economics",
                    "Slow freight markets compressing spot rates while fixed costs remain constant",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#9aaa98] leading-relaxed">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-4">
                  Equipment capital requirements
                </p>
                <ul className="space-y-3">
                  {[
                    "New Class 8 sleeper: $150,000 – $250,000+",
                    "Used Class 8 day cab: $40,000 – $100,000 depending on age and miles",
                    "Dry van trailer: $30,000 – $60,000 new",
                    "Reefer trailer: $60,000 – $100,000+ new",
                    "Liftgate truck or flatbed: varies significantly by spec",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#9aaa98] leading-relaxed font-variant-numeric tabular-nums">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[0.65rem] text-[#6b7e69] mt-3 leading-relaxed">
                  Ranges are general market observations only and will vary by spec, market conditions, and seller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Financing products ─────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Financing Options
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Products commonly used in trucking and logistics
          </h2>
          <p className="text-[#9aaa98] text-sm mb-8 max-w-2xl">
            No single financing product fits every trucking business. The right structure depends on your immediate need, operating history, credit profile, and whether you&apos;re addressing cash flow, equipment, or growth capital — all subject to underwriting.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {financingCards.map((card) => (
              <FinancingPathCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy — how lenders evaluate trucking businesses ─────────────── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6 text-sm text-[#9aaa98] leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  What lenders and factors typically evaluate in trucking businesses
                </h2>
                <p>
                  Lender evaluation criteria vary significantly by product. A freight factoring company&apos;s primary concern is the creditworthiness of the brokers and shippers the carrier hauls for — not the carrier&apos;s own credit score. This makes factoring accessible to newer operators and those with imperfect credit history, provided they work with reputable, creditworthy freight brokers. Before approving a carrier, many factors run a credit check on each broker the carrier intends to invoice and may decline to advance on loads from brokers with poor payment track records.
                </p>
                <p className="mt-3">
                  Equipment lenders take a different view. They evaluate the carrier&apos;s time in business, personal credit score (particularly for owner-operators and small fleets), down payment capacity, and the age and condition of the equipment being financed. Lenders generally prefer equipment that is newer and lower in mileage, as collateral value deteriorates quickly on high-mileage commercial vehicles. A carrier with two years of operating history and a 680+ personal credit score will typically see more options at better terms than a startup with limited credit history.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Revenue documentation and bank statement requirements
                </h2>
                <p>
                  For most working capital and term loan products, lenders will request three to six months of business bank statements to verify revenue, average daily balances, and cash flow consistency. Carriers with highly variable revenue — common in spot market trucking — may need to demonstrate that their worst months still support the proposed payment obligation. Lenders may also request copies of recent load confirmations or a dispatch report to substantiate revenue claims.
                </p>
                <p className="mt-3">
                  For SBA loans, documentation requirements are substantially more extensive: typically two to three years of business and personal tax returns, a current profit and loss statement, a balance sheet, a business debt schedule, and a detailed description of how the funds will be used. Lenders also review the carrier&apos;s operating authority status, insurance certificates, and FMCSA safety rating where applicable. Carriers with a Conditional or Unsatisfactory safety rating may face additional scrutiny from lenders and factors alike.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Fleet size, authority status, and how they affect financing options
                </h2>
                <p>
                  Owner-operators running under a carrier&apos;s authority as a lease-on may have different financing options than operators running under their own MC authority. Some equipment lenders require the borrower to have their own operating authority. Factors also typically require the carrier to hold their own authority, as the factor needs to verify the load and freight bill under that authority.
                </p>
                <p className="mt-3">
                  Fleet size affects the scale of financing available but not always the breadth of options. A single-truck owner-operator can access freight factoring, equipment financing, and certain SBA programs just as a ten-truck fleet can — the amounts and terms will differ, but the categories of products are largely the same. Where fleet size matters more is in access to asset-based lending (ABL) facilities, which typically require a larger receivables base to justify the lender&apos;s due diligence costs, and in negotiating volume-based factoring rates.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">
                  Fuel advances and same-day funding programs
                </h2>
                <p>
                  Many freight-specialized factoring companies offer fuel advance programs that allow carriers to receive a portion of a load&apos;s value before proof of delivery is submitted — sometimes immediately after the load is dispatched or picked up. Fuel advances are typically limited to a percentage of the expected invoice value and are deducted when the full advance is funded. These programs exist because fuel is the largest variable cost per load and carriers often need to cover a full tank before the load generates any revenue.
                </p>
                <p className="mt-3">
                  Same-day or next-morning funding after proof of delivery submission is a standard feature among established freight factors. After the initial onboarding — which typically takes one to three business days — most carriers find that ongoing funding turnaround on verified loads is very fast. This speed is one of the primary reasons factoring remains widely used in trucking even when carriers have access to other forms of credit.
                </p>
              </div>
            </div>

            {/* Sidebar: lender requirements */}
            <div className="space-y-4">
              <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-4">
                  Typical lender requirements — trucking
                </p>
                <ul className="space-y-3">
                  {[
                    "Active FMCSA operating authority (MC or DOT number)",
                    "Valid commercial truck insurance at required coverage levels",
                    "3–6 months business bank statements",
                    "Time in business: varies by product (factoring may accept newer operators)",
                    "Personal credit score: 600–650+ for equipment loans; lower thresholds for factoring",
                    "No open tax liens or recent bankruptcies (some exceptions depending on product)",
                    "Satisfactory or Conditional FMCSA safety rating for most mainstream lenders",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#9aaa98] leading-relaxed">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[0.65rem] text-[#6b7e69] mt-3 leading-relaxed">
                  Requirements listed are general observations. Specific criteria are set by individual third-party lenders and factors and are subject to their own underwriting guidelines.
                </p>
              </div>

              <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-4">
                  Factors that may limit financing options
                </p>
                <ul className="space-y-3">
                  {[
                    "Unsatisfactory FMCSA safety rating — most lenders and factors decline",
                    "Less than 6 months under own authority — reduces equipment loan access",
                    "Prior repossessions on commercial vehicles",
                    "Significant unresolved tax debt or IRS liens",
                    "Hauling exclusively for a single broker or shipper (concentration risk)",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#6b7e69] leading-relaxed">
                      <CrossIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#22c55e]/20 bg-[#0f2a14] p-5">
                <p className="text-xs font-semibold text-[#22c55e] mb-2">
                  Not sure which product fits your situation?
                </p>
                <p className="text-xs text-[#6b7e69] leading-relaxed mb-4">
                  Submit a brief intake describing your fleet size, revenue, and immediate capital need. ZEO will review potential paths against third-party providers, subject to underwriting.
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22c55e] hover:text-white transition-colors"
                >
                  Get started <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Freight factoring vs. equipment financing vs. SBA loans
          </h2>
          <p className="text-[#9aaa98] text-sm mb-8 max-w-2xl">
            Each product addresses a different problem. This table reflects general market characteristics — individual terms are set by third-party providers and are subject to underwriting.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Freight Factoring"
          />
          <p className="text-xs text-[#6b7e69] mt-4">
            All ranges and characteristics are general market observations, not offers or guaranteed terms. Actual terms are determined by individual lenders and factors subject to underwriting.
          </p>
        </div>
      </section>

      {/* ── Related financing ─────────────────────────────────────────────── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
            Related Options
          </p>
          <h2 className="text-2xl font-semibold text-white mb-6">
            Other financing structures to consider
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Invoice Factoring (General)",
                description:
                  "The broader factoring landscape covering non-freight industries. Useful context for carriers who also haul for government agencies or manage non-transportation receivables alongside freight invoices.",
                href: "/factoring",
              },
              {
                label: "Asset-Based Lending",
                description:
                  "Revolving credit secured by accounts receivable and equipment. A potential alternative for larger, established fleets that want a credit facility rather than per-invoice factoring.",
                href: "/asset-based-lending",
              },
              {
                label: "Revenue-Based Financing",
                description:
                  "Advances against future revenue repaid as a percentage of monthly receipts. May carry higher effective costs — evaluate total repayment amount carefully relative to alternatives.",
                href: "/revenue-based-financing",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block rounded-xl border border-[#1e2620] bg-[#111512] p-5 hover:border-[#22c55e]/40 hover:bg-[#0f2a14] transition-all"
              >
                <p className="font-semibold text-[#eef2ec] text-sm mb-2 group-hover:text-white transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-[#6b7e69] leading-relaxed mb-3">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQ
        items={faqItems}
        title="Frequently Asked Questions — Trucking and Logistics Financing"
      />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Explore financing options for your trucking business"
        subtext="Submit a brief intake describing your fleet, revenue, and capital need. ZEO will review potential paths with third-party providers — subject to underwriting and approval."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing"
        secondaryHref="/financing"
      />

      {/* ── Disclaimer ────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-10">
        <ProductDisclaimer type="general" />
      </div>
    </div>
  );
}

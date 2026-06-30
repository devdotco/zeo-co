import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Business Financing Options | ZEO.co",
  description:
    "Explore commercial financing options including SBA loans, working capital, equipment financing, invoice factoring, merchant cash advance, hard money, asset-based lending, and more. Subject to underwriting by third-party providers.",
  path: "/financing",
  keywords: [
    "business financing options",
    "commercial financing",
    "SBA loans",
    "working capital",
    "equipment financing",
    "invoice factoring",
    "merchant cash advance",
    "hard money business loans",
    "asset-based lending",
    "purchase order financing",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h12M3 13h8M3 5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="14" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
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

function EquipmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="5" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 13V7l3-3h6l3 3v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CREIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="7" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 7V5h8v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 3V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function AcquisitionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="5" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="5" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 9h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FranchiseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2l2 4h4l-3 2.5 1 4L9 10l-4 2.5 1-4L3 6h4L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function DebtRefiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9a6 6 0 0 1 6-6 6 6 0 0 1 4.2 1.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M15 9a6 6 0 0 1-6 6 6 6 0 0 1-4.2-1.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12.5 2.5L14.5 4.5 12.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 15.5L3.5 13.5 5.5 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MCAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 12h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function RevenueBasedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 14l3-5 3 2 3-6 3 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 14h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function PrivateLendingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L15 5v5c0 3.5-2.5 6-6 7C3.5 16 1 13.5 1 10V5L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function HardMoneyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="7" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="9" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function AssetBasedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="3" y="10" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="10" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
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

function POFinancingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 7h5M5 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13 9l2 2-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Product Data ──────────────────────────────────────────────────────────────

const products = [
  {
    icon: <SBAIcon />,
    title: "SBA Loans",
    description:
      "Government-backed loan programs for eligible small businesses. 7(a) and 504 structures for real estate, equipment, working capital, and acquisitions. Subject to SBA eligibility and lender underwriting.",
    tags: ["7(a) & 504", "Up to $5M+", "10–25 yr terms"],
    href: "/sba-loans",
  },
  {
    icon: <WorkingCapitalIcon />,
    title: "Working Capital",
    description:
      "Short- to medium-term financing to cover operating gaps, seasonal needs, payroll, or growth-stage expenses. May qualify based on revenue, time in business, and credit profile.",
    tags: ["$50K–$5M", "Flexible use", "6–36 mo"],
    href: "/working-capital",
  },
  {
    icon: <LineOfCreditIcon />,
    title: "Business Line of Credit",
    description:
      "Revolving credit facility that allows draws as needed up to a set limit. Useful for managing cash flow variability without taking a lump-sum term loan.",
    tags: ["Revolving", "$10K–$500K", "Draw as needed"],
    href: "/business-line-of-credit",
  },
  {
    icon: <TermLoanIcon />,
    title: "Business Term Loans",
    description:
      "Fixed lump-sum disbursement repaid over a set term with regular payments. Common for specific capital needs such as expansion, buildout, or equipment purchase.",
    tags: ["Fixed payment", "$25K–$2M", "12–60 mo"],
    href: "/business-term-loans",
  },
  {
    icon: <EquipmentIcon />,
    title: "Equipment Financing",
    description:
      "Finance or lease machinery, vehicles, technology, and other capital equipment. The asset typically serves as collateral. May preserve operating cash flow.",
    tags: ["Asset-secured", "Section 179", "$10K–$5M+"],
    href: "/equipment-financing",
  },
  {
    icon: <CREIcon />,
    title: "Commercial Real Estate Loans",
    description:
      "Purchase, refinance, or develop owner-occupied or investment commercial property. Structures include SBA 504, conventional CRE, and bridge financing.",
    tags: ["SBA 504", "DSCR-based", "Long-term"],
    href: "/commercial-real-estate-loans",
  },
  {
    icon: <AcquisitionIcon />,
    title: "Acquisition Financing",
    description:
      "Finance the purchase of an existing business. Commonly structured with SBA 7(a), seller notes, and equity injection. DSCR is the primary underwriting metric.",
    tags: ["SBA 7(a)", "Seller notes", "Equity injection"],
    href: "/acquisition-financing",
  },
  {
    icon: <FranchiseIcon />,
    title: "Franchise Financing",
    description:
      "Financing for franchise acquisition, buildout, equipment, and working capital. SBA 7(a) programs frequently apply. Franchisor registry status may affect eligibility.",
    tags: ["SBA eligible", "Buildout", "Franchise-ready"],
    href: "/franchise-financing",
  },
  {
    icon: <DebtRefiIcon />,
    title: "Debt Refinancing",
    description:
      "Restructure existing business debt to potentially reduce payments, extend terms, or simplify obligations. Subject to lender approval and underwriting criteria.",
    tags: ["Restructure", "Term extension", "SBA eligible"],
    href: "/debt-refinancing",
  },
  {
    icon: <MCAIcon />,
    title: "Merchant Cash Advance",
    description:
      "A purchase of future receivables or sales, not a traditional loan. High effective cost — review total payback, holdback percentage, and factor rate carefully before accepting.",
    tags: ["Daily holdback", "High eff. cost", "Fast funding"],
    href: "/merchant-cash-advance",
  },
  {
    icon: <RevenueBasedIcon />,
    title: "Revenue-Based Financing",
    description:
      "Repayment tied to a percentage of monthly revenue. Common for businesses with recurring or subscription revenue. Terms vary significantly by provider.",
    tags: ["% of revenue", "Flexible repay", "Recurring revenue"],
    href: "/revenue-based-financing",
  },
  {
    icon: <PrivateLendingIcon />,
    title: "Private Lending",
    description:
      "Non-bank financing from private credit funds and family offices. Often asset-secured. May carry higher rates and shorter terms than bank alternatives.",
    tags: ["Non-bank", "Asset-based", "Faster close"],
    href: "/private-lending",
  },
  {
    icon: <HardMoneyIcon />,
    title: "Hard Money Business Loans",
    description:
      "Short-term asset-backed financing, typically secured by real property or business assets. Used when speed or credit profile prevents conventional financing.",
    tags: ["Asset-secured", "Short-term", "Bridge use"],
    href: "/hard-money-business-loans",
  },
  {
    icon: <AssetBasedIcon />,
    title: "Asset-Based Lending",
    description:
      "A revolving credit facility secured against eligible assets such as accounts receivable, inventory, and equipment. Borrowing capacity tied to collateral value.",
    tags: ["A/R + inventory", "Revolving", "$500K–$50M+"],
    href: "/asset-based-lending",
  },
  {
    icon: <InventoryIcon />,
    title: "Inventory Financing",
    description:
      "Financing secured by eligible inventory to fund purchase or build-out of product. Common for distributors, wholesalers, manufacturers, and seasonal retailers.",
    tags: ["Inventory-backed", "Seasonal use", "B2B / wholesale"],
    href: "/inventory-financing",
  },
  {
    icon: <POFinancingIcon />,
    title: "Purchase Order Financing",
    description:
      "Financing to fulfill confirmed purchase orders when a business lacks the capital to produce or procure goods. Typically repaid when the customer pays.",
    tags: ["PO-backed", "Fulfillment gap", "B2B orders"],
    href: "/purchase-order-financing",
  },
];

// ── Comparison Table Data ─────────────────────────────────────────────────────

const comparisonColumns = ["SBA 7(a)", "Term Loan", "Line of Credit", "MCA", "Asset-Based"];

const comparisonRows = [
  {
    feature: "Amount range",
    "SBA 7(a)": "$50K – $5M+",
    "Term Loan": "$25K – $2M",
    "Line of Credit": "$10K – $500K",
    MCA: "$5K – $500K",
    "Asset-Based": "$500K – $50M+",
  },
  {
    feature: "Typical term",
    "SBA 7(a)": "10 – 25 years",
    "Term Loan": "1 – 5 years",
    "Line of Credit": "12 – 24 months",
    MCA: "3 – 18 months",
    "Asset-Based": "Revolving",
  },
  {
    feature: "Collateral",
    "SBA 7(a)": "Business assets + PG",
    "Term Loan": "Varies by lender",
    "Line of Credit": "Often unsecured",
    MCA: "Future receivables",
    "Asset-Based": "A/R, inventory, equip.",
  },
  {
    feature: "Typical use case",
    "SBA 7(a)": "Acquisition, CRE, refi",
    "Term Loan": "Expansion, buildout",
    "Line of Credit": "Cash flow, operating",
    MCA: "Short-term liquidity",
    "Asset-Based": "Growth, working capital",
  },
  {
    feature: "Funding speed",
    "SBA 7(a)": "30 – 90 days",
    "Term Loan": "3 – 14 days",
    "Line of Credit": "3 – 10 days",
    MCA: "1 – 3 days",
    "Asset-Based": "14 – 45 days",
  },
  {
    feature: "Min. credit (typical)",
    "SBA 7(a)": "650+",
    "Term Loan": "600+",
    "Line of Credit": "600+",
    MCA: "500+",
    "Asset-Based": "Collateral-driven",
  },
];

// ── FAQ Data ──────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Does ZEO make loans or guarantee financing approval?",
    a: "No. ZEO.co is not a bank, lender, or loan broker. ZEO helps business owners evaluate potential financing options and may share their profile with third-party providers where permitted. All financing decisions — including approval, pricing, and terms — are made by the applicable third-party provider based on their own underwriting criteria. Nothing on this site constitutes a loan offer or commitment.",
  },
  {
    q: "How do I know which financing product may be a potential fit for my business?",
    a: "The right structure depends on your use of proceeds, revenue profile, time in business, credit history, collateral, and urgency. For example, businesses with strong accounts receivable may find factoring or asset-based lending relevant, while profitable businesses seeking acquisitions often look at SBA 7(a). ZEO's intake process evaluates your profile against applicable structures. Results are indicative only and subject to underwriting.",
  },
  {
    q: "What is the difference between a merchant cash advance and a business term loan?",
    a: "A business term loan is a fixed amount repaid over a set period with scheduled payments and an explicit interest rate. A merchant cash advance is a purchase of future receivables — not technically a loan — with repayment typically structured as a daily or weekly holdback percentage of sales. MCAs frequently carry significantly higher effective costs than term loans. Always compare the total payback amount, not just the factor rate.",
  },
  {
    q: "Are all of these financing products available in every state?",
    a: "No. Product availability varies by state, provider, and business type. Some products — including certain factoring, MCA, and private lending structures — may be subject to state-specific licensing requirements or commercial financing disclosure laws. ZEO may refer inquiries to licensed or exempt third-party providers where applicable. Consult with qualified legal or financial counsel regarding state-specific requirements.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FinancingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Financing Options", url: "https://zeo.co/financing" },
        ])}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Financing Options" },
        ]}
        eyebrow="Commercial Financing"
        title="Commercial Financing Options"
        subtitle="Explore the full range of business financing structures ZEO evaluates. All financing is subject to underwriting and approval by third-party providers. ZEO is not a lender."
      />

      {/* Product Grid */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Products
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f]">
                16 commercial financing structures
              </h2>
              <p className="text-[#737373] text-sm mt-2 max-w-xl">
                Each product has different eligibility, collateral, term, and cost characteristics. Select a product to learn more. All subject to third-party underwriting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((p) => (
              <FinancingPathCard key={p.href} {...p} />
            ))}
          </div>

          <div className="mt-8">
            <ProductDisclaimer type="general" />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              Financing structures at a glance
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-xl">
              General overview only. Actual terms, amounts, and eligibility vary by applicant, lender, and product. Not offers or commitments.
            </p>
          </div>

          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />

          <p className="text-[0.65rem] text-[#a3a3a3] mt-3">
            All figures are general estimates. ZEO.co does not guarantee rates, terms, or approval. Third-party providers set their own underwriting criteria. Results may vary significantly.
          </p>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Evaluation
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              Factors that may affect which structures apply
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-2xl">
              No single product fits every business. These are common factors lenders and providers consider during underwriting. Final determinations are made by the applicable third-party provider.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Use of Proceeds",
                desc: "What the capital will fund — equipment, real estate, working capital, acquisition, or payroll — typically determines which products are structurally appropriate.",
              },
              {
                label: "Revenue & Cash Flow",
                desc: "Annual revenue, monthly cash flow, and EBITDA influence both the eligible amount and the debt service coverage ratio required by lenders.",
              },
              {
                label: "Time in Business",
                desc: "Most conventional lenders require 2+ years in business. Some products — including factoring and MCA — may be available to newer businesses with qualifying receivables or sales volume.",
              },
              {
                label: "Credit Profile",
                desc: "Personal credit scores, business credit history, prior derogatory items, and existing debt obligations affect eligibility and pricing across most products.",
              },
              {
                label: "Collateral",
                desc: "Available collateral — real property, equipment, receivables, inventory — can open or close certain financing structures. SBA loans typically require available collateral and a personal guarantee.",
              },
              {
                label: "Industry & Business Type",
                desc: "Some products are more common in specific industries. Trucking, healthcare, staffing, and construction have distinct factoring markets. SBA-eligible vs. ineligible industries affect government-backed options.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.label}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-nav: Product Categories */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Quick Navigation
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">Browse by financing category</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Traditional / Bank-aligned */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-4">
                Traditional &amp; Government-Backed
              </p>
              <ul className="space-y-2">
                {[
                  { label: "SBA Loans", href: "/sba-loans" },
                  { label: "Business Term Loans", href: "/business-term-loans" },
                  { label: "Business Line of Credit", href: "/business-line-of-credit" },
                  { label: "Working Capital", href: "/working-capital" },
                  { label: "Equipment Financing", href: "/equipment-financing" },
                  { label: "Commercial Real Estate Loans", href: "/commercial-real-estate-loans" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#333333] transition-colors"
                    >
                      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                        <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Acquisition & Specialty */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-4">
                Acquisition &amp; Specialty
              </p>
              <ul className="space-y-2">
                {[
                  { label: "Acquisition Financing", href: "/acquisition-financing" },
                  { label: "Franchise Financing", href: "/franchise-financing" },
                  { label: "Debt Refinancing", href: "/debt-refinancing" },
                  { label: "Private Lending", href: "/private-lending" },
                  { label: "Hard Money Business Loans", href: "/hard-money-business-loans" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#333333] transition-colors"
                    >
                      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                        <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Receivables & Asset-Based */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-4">
                Receivables &amp; Asset-Based
              </p>
              <ul className="space-y-2">
                {[
                  { label: "Merchant Cash Advance", href: "/merchant-cash-advance" },
                  { label: "Revenue-Based Financing", href: "/revenue-based-financing" },
                  { label: "Asset-Based Lending", href: "/asset-based-lending" },
                  { label: "Inventory Financing", href: "/inventory-financing" },
                  { label: "Purchase Order Financing", href: "/purchase-order-financing" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#333333] transition-colors"
                    >
                      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="none">
                        <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="Common Questions About Business Financing"
        items={faqItems}
      />

      <section className="py-10 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>

      <CTASection
        headline="Ready to evaluate your financing options?"
        subtext="Submit a brief intake and ZEO will review potential financing paths that may be relevant to your business. Subject to underwriting by third-party providers."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Talk to an Advisor"
        secondaryHref="/contact"
      />
    </>
  );
}

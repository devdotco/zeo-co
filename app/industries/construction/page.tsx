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
  title: "Construction Financing | ZEO.co",
  description:
    "Explore financing options for construction businesses — equipment, working capital, SBA loans, and invoice factoring. Learn what lenders evaluate and which paths may be a potential fit. Subject to underwriting by third-party providers.",
  path: "/industries/construction",
  keywords: [
    "construction financing",
    "construction business loans",
    "equipment financing for contractors",
    "construction working capital",
    "SBA loans for contractors",
    "invoice factoring construction",
    "heavy equipment financing",
    "construction company financing",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function ExcavatorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 13h14M4 13V9l3-4h4l3 4v4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="6" y="9" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="9" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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

function CapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 6.5v1.25l-1.5.75L9 9.5l1.5.75L9 11.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CREIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 15V7l7-4 7 4v8H2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <rect x="7" y="10" width="4" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 7.5h.01M9 7.5h.01M12 7.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 12h2M10.5 12h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ABLIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="3" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="3" y="10" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="10" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Industries", href: "/industries" },
  { label: "Construction Financing" },
];

const FAQ_ITEMS = [
  {
    q: "Why is it harder for construction companies to qualify for financing than other businesses?",
    a: "Construction businesses often face more scrutiny than businesses in other industries for several structural reasons. Revenue is typically project-based rather than recurring, which makes cash flow harder to predict. Profit margins can be thin and variable depending on material costs, labor, and project delays. Many lenders also view construction as a higher-risk sector due to the frequency of business failures. Additionally, contractors frequently carry high accounts receivable balances with slow-paying general contractors or government entities, which can distort their financial statements. Presenting organized financials, clear project pipelines, and documented contract backlogs can help demonstrate creditworthiness to lenders.",
  },
  {
    q: "Can I use SBA financing to purchase heavy equipment or a work truck?",
    a: "SBA 7(a) loans can be used for equipment purchases, including vehicles and heavy machinery, among other eligible purposes. However, SBA programs involve significant documentation requirements, lender underwriting, and eligibility reviews — and approval is not guaranteed. For straightforward equipment purchases, some borrowers find that direct equipment financing through specialty lenders moves faster and involves less paperwork, though terms will vary. SBA 504 loans may also be relevant for certain fixed-asset purchases. ZEO.co is not the SBA, an SBA lender, or a government agency.",
  },
  {
    q: "How does invoice factoring work for a general contractor or subcontractor?",
    a: "Invoice factoring allows a construction business to sell outstanding invoices — such as pay applications or draw requests — to a third-party factoring company in exchange for an immediate advance, typically a percentage of the invoice face value. The factoring company then collects from the owner, GC, or government entity directly. This can address the cash flow gap created by net-60, net-90, or slow-paying clients without taking on traditional debt. Factoring in construction is more complex than in some industries because of retainage provisions, mechanics lien waivers, and conditional payment terms. Review all factoring agreements carefully with qualified counsel.",
  },
  {
    q: "What financial documents do lenders typically ask for from a construction company?",
    a: "Lenders commonly request two to three years of business tax returns, current-year profit and loss statements, balance sheets, business bank statements (often 3–6 months), a current accounts receivable aging report, and documentation of active contracts or backlog. For larger requests, lenders may also want a work-in-progress schedule, bonding information, and information about key relationships with general contractors or project owners. Having these prepared before approaching lenders generally reduces processing time.",
  },
  {
    q: "What is retainage and how does it affect financing options?",
    a: "Retainage is a portion of the contract payment — typically 5 to 10 percent — that the project owner withholds from each draw until the project is substantially complete or a punch list is finalized. For subcontractors and general contractors, retainage can represent a significant amount of cash that is earned but not yet collected, sometimes for many months. This creates a structural working capital challenge. Some lenders and factoring companies will advance against retainage receivables, though at different rates and terms than standard invoices. Understanding your retainage exposure is important when evaluating how much working capital you actually need.",
  },
];

const COMPARISON_COLUMNS = ["Equipment Financing", "Invoice Factoring", "SBA 7(a) Loan", "Business Line of Credit"];

const COMPARISON_ROWS = [
  {
    feature: "Primary use",
    "Equipment Financing": "Machinery, vehicles, tools",
    "Invoice Factoring": "Bridge slow-paying invoices",
    "SBA 7(a) Loan": "Equipment, WC, real estate",
    "Business Line of Credit": "Flexible operating expenses",
  },
  {
    feature: "Collateral",
    "Equipment Financing": "The financed asset",
    "Invoice Factoring": "Invoices sold to factor",
    "SBA 7(a) Loan": "Business assets, personal guarantee",
    "Business Line of Credit": "Varies by lender",
  },
  {
    feature: "Repayment",
    "Equipment Financing": "Fixed monthly payments",
    "Invoice Factoring": "Deducted from collections",
    "SBA 7(a) Loan": "Fixed monthly payments",
    "Business Line of Credit": "Draw and repay as needed",
  },
  {
    feature: "Speed to funding",
    "Equipment Financing": "Days to weeks",
    "Invoice Factoring": "Often 1–3 business days",
    "SBA 7(a) Loan": "Weeks to months",
    "Business Line of Credit": "Days to weeks",
  },
  {
    feature: "Credit requirements",
    "Equipment Financing": "Moderate",
    "Invoice Factoring": "Focuses on client creditworthiness",
    "SBA 7(a) Loan": "Stricter eligibility",
    "Business Line of Credit": "Moderate to strong",
  },
  {
    feature: "Best for",
    "Equipment Financing": "Asset acquisition",
    "Invoice Factoring": "Cash flow gaps from receivables",
    "SBA 7(a) Loan": "Long-term capital needs",
    "Business Line of Credit": "Seasonal or variable costs",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ConstructionFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Industry"
        title="Construction Financing"
        subtitle="Construction businesses face financing challenges that most industries don't — project-based revenue, slow-paying clients, heavy equipment needs, and cash flow gaps that can persist for months. Understanding which financing structures are designed for these dynamics is the first step."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Equipment financing range"
              value="$10K – $5M+"
              note="Subject to lender underwriting"
            />
            <MetricCard
              label="Factoring advance rate"
              value="70 – 90%"
              note="Of invoice face value, varies by factor"
            />
            <MetricCard
              label="SBA 7(a) max loan"
              value="$5M"
              note="Government program; not guaranteed"
              highlight
            />
            <MetricCard
              label="Typical time in business"
              value="2+ yrs"
              note="Many lenders prefer established contractors"
            />
          </div>
        </div>
      </section>

      {/* ── Industry challenges ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Industry context
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                Why construction financing is structurally different
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Construction is one of the more complex industries to finance from a lender's
                perspective. Revenue is lumpy, margins fluctuate with material and labor costs,
                and receivables can sit unpaid for months due to retainage provisions and
                payment waterfalls between project owners, general contractors, and
                subcontractors.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm">
                For the business owner, this creates a persistent tension: you may be winning
                contracts and growing your backlog while simultaneously running short on cash.
                Knowing which financing tools are structured for this dynamic — rather than
                forcing a conventional product onto an unconventional cash flow pattern — is
                what this page covers.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Retainage and slow payment cycles",
                  body: "Project owners routinely withhold 5–10% of each draw until project completion. Combined with net-60 or net-90 payment terms from GCs, subcontractors can have large amounts of earned-but-unpaid receivables at any given time. This creates working capital gaps that don't show up clearly on a P&L.",
                },
                {
                  heading: "Front-loaded equipment and material costs",
                  body: "Construction projects often require significant upfront spending on equipment mobilization, materials procurement, and subcontractor deposits before the first draw is funded. The revenue from that work may arrive weeks or months later, requiring capital to bridge the gap.",
                },
                {
                  heading: "Seasonal revenue and project concentration risk",
                  body: "Many contractors — particularly in northern climates — see sharp revenue swings between seasons. A business that generates 70% of its annual revenue in five months faces different financing needs than one with steady monthly cash flow. Lenders assess this risk carefully.",
                },
                {
                  heading: "Equipment-heavy balance sheets",
                  body: "A fleet of excavators, cranes, trucks, or specialty tools represents a significant capital commitment that must be maintained, insured, and eventually replaced. Financing the right piece of equipment at the right time can determine whether a contractor can bid on and execute larger projects.",
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

      {/* ── Financing products ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Relevant financing structures
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3 text-balance">
            Products commonly used in the construction industry
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Not every product is a fit for every business. The right structure depends on your
            specific situation, credit profile, and what the capital is actually needed for.
            All financing is subject to underwriting by third-party providers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<ExcavatorIcon />}
              title="Equipment Financing"
              description="Financing for excavators, cranes, bulldozers, dump trucks, and other heavy machinery. The equipment typically serves as collateral, which can make this more accessible than unsecured options."
              tags={["Heavy equipment", "Vehicles", "Asset-secured"]}
              href="/equipment-financing"
              highlight
            />
            <FinancingPathCard
              icon={<InvoiceIcon />}
              title="Invoice Factoring"
              description="Sell outstanding pay applications or invoices to a factoring company for an immediate advance. Addresses cash flow gaps created by slow-paying GCs or retainage without adding conventional debt."
              tags={["Receivables", "Retainage", "Cash flow"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loans"
              description="Government-backed term loans that may be used for equipment, working capital, real estate, or refinancing existing debt. Longer terms and structured repayment — though the application process is documentation-heavy."
              tags={["SBA", "Long-term", "Multi-purpose"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<CapitalIcon />}
              title="Working Capital Loans"
              description="Short-to-medium-term cash financing for payroll, materials, subcontractor payments, and other operating expenses. Useful when a project is running but the draw hasn't been funded yet."
              tags={["Payroll", "Materials", "Operating costs"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Line of Credit"
              description="A revolving credit facility you draw from and repay as needed. Well-suited to the irregular cash flow patterns common in construction — draw for a material buy, repay when the draw clears."
              tags={["Revolving", "Flexible", "Draw as needed"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<CREIcon />}
              title="Commercial Real Estate Loans"
              description="For contractors who own or are acquiring shop space, equipment yards, or office facilities. A separate category from project financing — secured by the real property itself."
              tags={["Real estate", "Shop", "Yard"]}
              href="/commercial-real-estate-loans"
            />
          </div>
        </div>
      </section>

      {/* ── Typical requirements ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Lender criteria
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                What lenders typically evaluate for construction businesses
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                These are general benchmarks drawn from common lender practices in the
                construction sector. Each provider sets its own criteria. Meeting these
                thresholds does not guarantee approval, and requirements will differ
                significantly by product type, loan size, and lender.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Personal credit score",
                    value: "660+ for most conventional lenders",
                    note: "Some specialty equipment lenders and factors weight client or asset quality more heavily than personal credit",
                  },
                  {
                    label: "Time in business",
                    value: "2+ years preferred",
                    note: "Contractors under two years in business face fewer product options and typically stricter terms",
                  },
                  {
                    label: "Annual revenue",
                    value: "Often $250K – $500K minimum",
                    note: "Construction lenders want to see revenue that supports the requested loan amount; backlog documentation may supplement historical revenue",
                  },
                  {
                    label: "Project documentation",
                    value: "Active contracts, backlog schedule, WIP report",
                    note: "Lenders in the construction space often want to see your pipeline, not just past financials",
                  },
                  {
                    label: "Licensing and insurance",
                    value: "Current contractor's license, general liability, workers' comp",
                    note: "Lenders and factors typically verify that the business is properly licensed and insured before funding",
                  },
                  {
                    label: "Financial documentation",
                    value: "2–3 years of tax returns, P&L, bank statements",
                    note: "A work-in-progress schedule and accounts receivable aging report are frequently requested in addition to standard financials",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                  >
                    <div className="flex-shrink-0 mt-[7px] h-1.5 w-1.5 rounded-full bg-[#0f0f0f]" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{req.label}</p>
                      <p className="text-sm text-[#737373] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Preparing your application ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Preparation
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                How construction businesses can strengthen a financing application
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                Construction businesses that present well-organized financial documentation and
                a clear business narrative tend to move through lender underwriting more
                smoothly. These are general considerations — not a guarantee of any outcome.
              </p>
              <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Organize your contract backlog.</span>{" "}
                  A documented pipeline of signed contracts and pending awards gives lenders
                  forward-looking revenue visibility that tax returns alone can't provide.
                  Include the contract value, start and expected completion dates, and the
                  identity of the project owner.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Separate your business and personal finances.</span>{" "}
                  Commingled accounts are a common issue for small contractors. Lenders want
                  clean business bank statements — deposits and withdrawals that reflect
                  business activity, not personal expenses run through the company account.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Understand your receivables aging.</span>{" "}
                  Know how much you're owed, from whom, and how long those invoices have been
                  outstanding. A large retainage balance can look like poor collections to a
                  lender who doesn't understand construction — be prepared to explain it.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Document equipment and assets.</span>{" "}
                  For equipment financing, have vendor quotes or appraisals ready. For general
                  financing applications, a clear picture of your existing equipment — what you
                  own, what you lease, and estimated values — helps lenders assess your
                  collateral position.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Maintain current licensing and insurance.</span>{" "}
                  Lapsed licenses or coverage gaps can stop a financing process entirely.
                  Verify your contractor's license, general liability, and workers'
                  compensation are current before submitting any application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Side-by-side comparison
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3 text-balance">
            Construction financing structures at a glance
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            General structural differences between common products used by construction
            businesses. Actual terms depend on the lender, your credit profile, and your
            specific situation.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Invoice Factoring"
          />
        </div>
      </section>

      {/* ── Industry-specific note on factoring ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Construction-specific consideration
              </p>
              <h3 className="text-lg font-semibold text-[#0f0f0f] mb-3 text-balance">
                Factoring in construction: what makes it different
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-3">
                Invoice factoring works differently in construction than in industries where a
                simple invoice triggers immediate payment. Construction billing typically
                involves pay applications, conditional lien waivers, notarized certifications,
                and payment waterfall provisions that require the factoring company to
                understand construction law and contract mechanics.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                Not all factoring companies work with construction receivables. Those that do
                typically specialize in the sector and will review the underlying contract,
                verify the project owner's creditworthiness (not just yours), and assess
                retainage exposure before making an advance. Review all factoring agreements
                with qualified counsel, including any recourse provisions that may apply if
                the client does not pay.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Construction-specific consideration
              </p>
              <h3 className="text-lg font-semibold text-[#0f0f0f] mb-3 text-balance">
                Equipment as collateral: a relative advantage
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-3">
                Construction businesses often hold an asset-based advantage when seeking
                equipment financing: heavy machinery — excavators, cranes, bulldozers, dump
                trucks — tends to hold its value better than office equipment or technology
                assets. Lenders financing tangible, well-maintained equipment with established
                resale markets may underwrite more favorably than for abstract working capital
                requests.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                This doesn't mean approval is easier — credit history, business revenue, and
                time in business still matter significantly. But for contractors with a strong
                asset base and a clear equipment need, this can be a productive financing
                path to evaluate. All equipment financing is subject to lender underwriting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Alternatives ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Additional options
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Other financing paths that may be relevant
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Depending on your business profile and what the capital is needed for, one of
            these paths may be a better fit — or a useful complement to a primary financing
            structure.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<ABLIcon />}
              title="Asset-Based Lending"
              description="Borrowing against a pool of business assets including receivables, equipment, and inventory. May offer higher advance rates for contractors with significant assets on their balance sheet."
              tags={["ABL", "Receivables", "Equipment"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<CREIcon />}
              title="Commercial Real Estate"
              description="For contractors acquiring or refinancing shop facilities, equipment storage yards, or office space. Secured by real property with longer terms than equipment or working capital products."
              tags={["Property", "Long-term", "Fixed asset"]}
              href="/commercial-real-estate-loans"
            />
            <FinancingPathCard
              icon={<CapitalIcon />}
              title="Debt Refinancing"
              description="If existing high-cost debt is straining cash flow, refinancing into a longer term or lower-rate structure may free up operating capital. Subject to lender approval and underwriting."
              tags={["Refinance", "Consolidation", "Cash flow"]}
              href="/debt-refinancing"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={FAQ_ITEMS}
        title="Construction Financing — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Explore financing options for your construction business"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit based on your situation. Subject to underwriting by third-party providers. Results are not guaranteed."
        primaryLabel="Find Financing"
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

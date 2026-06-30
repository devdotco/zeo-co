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
  title: "Oil and Gas Financing | ZEO.co",
  description:
    "Explore financing options for oil and gas businesses — equipment, working capital, SBA loans, and asset-based lending. Learn what lenders evaluate and which paths may be a potential fit. Subject to underwriting by third-party providers.",
  path: "/industries/oil-gas",
  keywords: [
    "oil and gas financing",
    "oilfield equipment financing",
    "oil and gas working capital",
    "SBA loans for oil and gas",
    "energy sector business loans",
    "oilfield services financing",
    "drilling equipment financing",
    "oil and gas business loans",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function DrillIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 2v10M7 4h4M6 7h6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M6 12l-2 4h10l-2-4H6z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PipelineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 9h14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="5" cy="9" r="1.5" fill="currentColor" />
      <circle cx="13" cy="9" r="1.5" fill="currentColor" />
      <path
        d="M5 6v6M13 6v6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
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

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

// ── Static data ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Industries", href: "/industries" },
  { label: "Oil and Gas Financing" },
];

const FAQ_ITEMS = [
  {
    q: "Why do lenders treat oil and gas businesses differently from other industries?",
    a: "Lenders view the oil and gas sector as carrying a distinct risk profile compared to most industries. Revenue is directly tied to commodity prices — crude oil, natural gas, and NGLs — that can swing dramatically in short periods due to geopolitical events, supply decisions by OPEC+, demand shifts, or domestic production changes. A business that was cash-flow-positive at $80 oil may face significant stress at $55. This makes it harder for lenders to model repayment risk using historical financials alone. Additionally, the sector is capital-intensive, with long project timelines and significant upfront spending before revenue is generated. Lenders who do work with oil and gas businesses typically focus heavily on the operator's track record, reserve documentation, contract backlog, and hedging strategy.",
  },
  {
    q: "What types of equipment can be financed for oilfield operations?",
    a: "A wide range of oilfield equipment may qualify for financing, including drilling rigs, well service units, pump jacks, compressors, vacuum trucks, frac tanks, oilfield trailers, workover rigs, flowback units, and specialized vehicles such as tank trucks and flatbeds used for field operations. The equipment itself typically serves as collateral. Lenders will evaluate the asset's resale value, useful life, and condition. Specialty oilfield equipment can have strong residual values if maintained, which can work in the borrower's favor — but equipment tied to a specific basin or application may have a thinner secondary market. All equipment financing is subject to lender underwriting and not all equipment types are accepted by all lenders.",
  },
  {
    q: "Can an oilfield services company qualify for an SBA loan?",
    a: "Oilfield services businesses — trucking, well servicing, flowback, inspection, rental tools, and similar — are generally not excluded from SBA 7(a) eligibility on the basis of industry alone, provided they meet standard SBA eligibility requirements. However, some lenders who participate in the SBA program are selective about which industries they serve, and oil and gas exposure may affect their appetite depending on current commodity prices and their portfolio concentration. SBA 7(a) loans can be used for equipment, working capital, real estate acquisition, and refinancing of qualifying existing debt. The application process involves significant documentation, lender underwriting, and an SBA guaranty review — approval is not guaranteed, and timelines can run several weeks to several months. ZEO.co is not the SBA, an SBA lender, or a government agency.",
  },
  {
    q: "How does commodity price volatility affect financing options for oil and gas businesses?",
    a: "Commodity price cycles directly influence both the availability and cost of financing for energy businesses. During periods of sustained low prices, lenders who serve the sector may tighten underwriting standards, reduce advance rates on asset-based facilities, or exit the market entirely. During periods of high prices, credit tends to be more available. For individual businesses, the practical impact is that historical revenue — particularly if it was generated during a different price environment — may be discounted by lenders in favor of current and projected cash flows. Businesses with long-term service contracts, hedged production, or diversified revenue streams across multiple operators may present a more stable financial picture to underwriters. These are general observations; actual lender criteria vary.",
  },
  {
    q: "What financial documents do lenders typically request from oil and gas businesses?",
    a: "Lenders commonly ask for two to three years of business and personal tax returns, current-year profit and loss statements, balance sheets, and three to six months of business bank statements. For businesses with active drilling or service contracts, lenders may also want to review the underlying contract terms, client creditworthiness, and any revenue concentration among a small number of operators. Equipment-heavy businesses should have documentation of current assets — ownership records, appraisals or vendor quotes for equipment being financed, and insurance certificates. Businesses with reserves may be asked to provide reserve engineering reports. Having organized documentation prepared in advance generally reduces processing time with lenders.",
  },
];

const COMPARISON_COLUMNS = ["Equipment Financing", "Asset-Based Lending", "SBA 7(a) Loan", "Working Capital Loan"];

const COMPARISON_ROWS = [
  {
    feature: "Primary use",
    "Equipment Financing": "Rigs, trucks, compressors",
    "Asset-Based Lending": "Revolving facility vs. assets",
    "SBA 7(a) Loan": "Equipment, WC, real estate",
    "Working Capital Loan": "Payroll, fuel, operating costs",
  },
  {
    feature: "Collateral",
    "Equipment Financing": "The financed asset",
    "Asset-Based Lending": "Receivables, equipment, inventory",
    "SBA 7(a) Loan": "Business assets, personal guarantee",
    "Working Capital Loan": "Varies; may be unsecured",
  },
  {
    feature: "Repayment",
    "Equipment Financing": "Fixed monthly payments",
    "Asset-Based Lending": "Revolving; draw and repay",
    "SBA 7(a) Loan": "Fixed monthly payments",
    "Working Capital Loan": "Fixed term or revenue-based",
  },
  {
    feature: "Speed to funding",
    "Equipment Financing": "Days to weeks",
    "Asset-Based Lending": "Weeks (facility setup)",
    "SBA 7(a) Loan": "Weeks to months",
    "Working Capital Loan": "Days to weeks",
  },
  {
    feature: "Credit requirements",
    "Equipment Financing": "Moderate; asset offsets risk",
    "Asset-Based Lending": "Moderate to strong",
    "SBA 7(a) Loan": "Stricter eligibility",
    "Working Capital Loan": "Varies by lender",
  },
  {
    feature: "Best for",
    "Equipment Financing": "Specific asset acquisition",
    "Asset-Based Lending": "Businesses with large asset base",
    "SBA 7(a) Loan": "Long-term structured capital",
    "Working Capital Loan": "Bridging operational cash gaps",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function OilGasFinancingPage() {
  return (
    <main className="bg-[#0a0d0b] min-h-screen">

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Industry"
        title="Oil and Gas Financing"
        subtitle="Oil and gas businesses operate under financing conditions unlike most industries — commodity-linked revenue, capital-intensive operations, long project timelines, and lender sensitivity to energy price cycles. Understanding which financing structures are designed for this environment is where to start."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Equipment financing range"
              value="$25K – $5M+"
              note="Subject to lender underwriting"
            />
            <MetricCard
              label="Typical time in business"
              value="2+ yrs"
              note="Many lenders prefer established operators"
            />
            <MetricCard
              label="SBA 7(a) max loan"
              value="$5M"
              note="Government program; not guaranteed"
              highlight
            />
            <MetricCard
              label="Asset-based advance rates"
              value="70 – 85%"
              note="Of eligible receivables; varies by lender"
            />
          </div>
        </div>
      </section>

      {/* ── Industry challenges ── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Industry context
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Why oil and gas financing is structurally different
              </h2>
              <p className="text-[#9aaa98] leading-relaxed text-sm mb-4">
                Few industries carry the combination of capital intensity and revenue uncertainty that
                characterizes oil and gas. Operators, drillers, and oilfield services companies all
                face a common challenge: the work requires significant upfront capital — equipment,
                labor, materials, mobilization — while revenue depends on production volumes and
                commodity prices that can shift sharply between the time a project is planned and
                when it generates cash.
              </p>
              <p className="text-[#9aaa98] leading-relaxed text-sm">
                For lenders, this creates an underwriting environment that differs from most
                commercial sectors. Businesses with strong fundamentals at one price environment
                may look materially different on paper when prices fall. Understanding how lenders
                navigate this — and which financing structures are better suited to energy sector
                cash flows — is the focus of this page.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Commodity price exposure",
                  body: "Oil and gas revenue is directly linked to benchmark prices — WTI, Henry Hub, or regional differentials — that fluctuate with global supply and demand, geopolitical events, and OPEC+ production decisions. A business that performs well at $80/barrel may face cash flow stress when prices drop to $55. Lenders weight this risk heavily and often stress-test financials at lower price assumptions.",
                },
                {
                  heading: "Capital-intensive operations with long lead times",
                  body: "Drilling a well, mobilizing a rig, or commissioning a compression station requires substantial capital expenditure before any revenue is generated. Project timelines can extend many months. This front-loaded cost structure creates working capital gaps that conventional financing products — designed for steady monthly revenue — may not address well.",
                },
                {
                  heading: "Operator concentration risk",
                  body: "Many oilfield services companies — trucking, well servicing, rental tools, flowback — derive a large portion of revenue from a small number of E&P operators. If a major client reduces activity due to budget cuts or low commodity prices, services revenue can drop sharply. Lenders assess client concentration carefully and may limit advance rates when exposure is high.",
                },
                {
                  heading: "Specialized equipment with variable residual values",
                  body: "Oilfield equipment — drilling rigs, frac pumps, workover units, vacuum trucks — can have strong resale markets when activity is high and thin secondary markets when the sector is in contraction. This affects how lenders value collateral and what advance rates they're willing to offer on equipment-secured financing.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-[#1e2620] bg-[#111512] px-5 py-4"
                >
                  <h3 className="text-sm font-semibold text-[#eef2ec] mb-1.5">{item.heading}</h3>
                  <p className="text-sm text-[#6b7e69] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Financing products ── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Relevant financing structures
          </p>
          <h2 className="text-2xl font-semibold text-white mb-3 text-balance">
            Products commonly used in the oil and gas industry
          </h2>
          <p className="text-sm text-[#9aaa98] mb-8 max-w-2xl">
            No single financing product fits every situation. The right structure depends on what
            the capital is needed for, your business type within the sector, your credit profile,
            and current market conditions. All financing is subject to underwriting by third-party
            providers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<DrillIcon />}
              title="Equipment Financing"
              description="Financing for drilling rigs, workover units, compressors, vacuum trucks, frac tanks, pump jacks, and other oilfield equipment. The asset typically serves as collateral, which can make this more accessible than unsecured options."
              tags={["Rigs", "Trucks", "Compressors", "Asset-secured"]}
              href="/equipment-financing"
              highlight
            />
            <FinancingPathCard
              icon={<ABLIcon />}
              title="Asset-Based Lending"
              description="A revolving credit facility secured by a borrowing base of eligible receivables and equipment. Well-suited to oilfield services companies with significant assets on their balance sheet and variable revenue tied to operator activity levels."
              tags={["Receivables", "Equipment", "Revolving"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loans"
              description="Government-backed term loans that may be used for equipment, working capital, real estate, or refinancing existing debt. Longer terms and structured repayment — though the application process involves significant documentation and lender review."
              tags={["SBA", "Long-term", "Multi-purpose"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<CapitalIcon />}
              title="Working Capital Loans"
              description="Short-to-medium-term cash financing for payroll, fuel, maintenance, and operating expenses during the gap between project mobilization and invoice collection. Useful when active contracts outpace current cash position."
              tags={["Payroll", "Fuel", "Operating costs"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<InvoiceIcon />}
              title="Invoice Factoring"
              description="Sell outstanding invoices to a third-party factoring company for an immediate advance. Useful for oilfield services companies waiting on net-30 to net-60 payments from E&P operators. The factor collects directly from your client."
              tags={["Receivables", "Cash flow", "Fast funding"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Line of Credit"
              description="A revolving credit facility for managing irregular operating expenses — draw when activity spikes and costs run ahead of collections, repay when the next payment cycle clears. Requires an established business with consistent revenue."
              tags={["Revolving", "Flexible", "Draw as needed"]}
              href="/business-line-of-credit"
            />
          </div>
        </div>
      </section>

      {/* ── Typical requirements ── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Lender criteria
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                What lenders typically evaluate for oil and gas businesses
              </h2>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-6">
                These are general benchmarks drawn from common lender practices in the energy
                sector. Each provider sets its own criteria. Meeting these thresholds does not
                guarantee approval, and requirements will vary significantly by product type,
                loan size, lender, and current market conditions.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Personal credit score",
                    value: "660+ for most conventional lenders",
                    note: "Equipment lenders sometimes weight asset quality and operator relationships more heavily than personal credit for established businesses",
                  },
                  {
                    label: "Time in business",
                    value: "2+ years preferred",
                    note: "Businesses under two years face fewer product options; a track record through at least one commodity price cycle can be viewed favorably",
                  },
                  {
                    label: "Annual revenue",
                    value: "Often $300K – $500K minimum",
                    note: "Energy lenders want to see revenue that supports the requested loan amount; active contract documentation may supplement historical revenue",
                  },
                  {
                    label: "Client and contract documentation",
                    value: "Active service agreements, client creditworthiness",
                    note: "Lenders often evaluate who your clients are — well-capitalized E&P operators with strong balance sheets are viewed more favorably than highly leveraged independents",
                  },
                  {
                    label: "Equipment documentation",
                    value: "Asset lists, appraisals, maintenance records",
                    note: "For equipment-secured financing, lenders will assess the asset's value, condition, and secondary market liquidity",
                  },
                  {
                    label: "Financial documentation",
                    value: "2–3 years of tax returns, P&L, bank statements",
                    note: "Lenders may apply price-sensitivity adjustments to historical oil and gas revenue if it was generated in a materially different commodity price environment",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#1e2620] bg-[#111512] px-5 py-4"
                  >
                    <div className="flex-shrink-0 mt-[7px] h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    <div>
                      <p className="text-sm font-medium text-[#eef2ec]">{req.label}</p>
                      <p className="text-sm text-[#9aaa98] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#6b7e69] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Preparing your application ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Preparation
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                How oil and gas businesses can strengthen a financing application
              </h2>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-5">
                Energy businesses that present well-organized financials and a clear picture of
                their customer relationships, contract pipeline, and asset base tend to move
                through lender underwriting more efficiently. These are general considerations
                — not a guarantee of any outcome.
              </p>
              <div className="space-y-3 text-sm text-[#9aaa98] leading-relaxed">
                <p>
                  <span className="text-[#eef2ec] font-medium">Document your active service contracts.</span>{" "}
                  A pipeline of signed agreements with E&P operators — showing scope, term, and
                  counterparty — gives lenders forward-looking revenue visibility that historical
                  financials alone cannot provide during a volatile commodity price environment.
                </p>
                <p>
                  <span className="text-[#eef2ec] font-medium">Demonstrate client quality and diversification.</span>{" "}
                  Lenders assess not just your financials but the credit quality of your clients.
                  If a significant share of revenue comes from a single operator, be prepared to
                  address that concentration. If you work with multiple well-capitalized operators,
                  document it clearly.
                </p>
                <p>
                  <span className="text-[#eef2ec] font-medium">Maintain clear equipment records.</span>{" "}
                  For businesses pursuing equipment financing or asset-based lending, organized
                  records of what you own, maintenance history, and current condition are important.
                  Recent appraisals or vendor quotes for equipment being financed can expedite
                  the lender's collateral assessment.
                </p>
                <p>
                  <span className="text-[#eef2ec] font-medium">Address commodity price context in your narrative.</span>{" "}
                  If your historical financials were generated at significantly different price
                  levels than today, provide context. Lenders appreciate borrowers who understand
                  how price cycles affect their business and can articulate how their model
                  performs across scenarios.
                </p>
                <p>
                  <span className="text-[#eef2ec] font-medium">Separate business and personal finances.</span>{" "}
                  Commingled accounts complicate underwriting. Clean business bank statements
                  — reflecting business deposits and operational expenses — help lenders assess
                  actual cash flow without needing to reconstruct it from mixed records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Side-by-side comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-3 text-balance">
            Oil and gas financing structures at a glance
          </h2>
          <p className="text-sm text-[#9aaa98] mb-6 max-w-2xl">
            General structural differences between common products used by oil and gas businesses.
            Actual terms depend on the lender, your credit profile, and your specific situation.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Equipment Financing"
          />
        </div>
      </section>

      {/* ── Industry-specific notes ── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Oil and gas consideration
              </p>
              <h3 className="text-lg font-semibold text-white mb-3 text-balance">
                Oilfield equipment financing: sector-specific dynamics
              </h3>
              <p className="text-sm text-[#9aaa98] leading-relaxed mb-3">
                Oilfield equipment occupies an unusual position as collateral. During periods of
                high activity, specialized assets — drilling rigs, frac pumps, workover units —
                command strong secondary market prices and may support favorable advance rates
                from lenders. During downturns, the same equipment can be difficult to move
                quickly, and lenders may apply more conservative valuations.
              </p>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Lenders who specialize in the energy sector generally have a more calibrated view
                of oilfield equipment values than generalist lenders who apply a uniform depreciation
                schedule. If you are evaluating equipment financing, working with lenders who have
                direct experience in the sector can affect the terms and advance rates you may
                qualify for. All financing is subject to lender underwriting.
              </p>
            </div>
            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Oil and gas consideration
              </p>
              <h3 className="text-lg font-semibold text-white mb-3 text-balance">
                Invoice factoring for oilfield services companies
              </h3>
              <p className="text-sm text-[#9aaa98] leading-relaxed mb-3">
                Oilfield services companies — trucking, well servicing, water hauling, pipe
                inspection, rental tools — often carry significant accounts receivable from
                E&P operators on net-30 to net-60 payment terms. Invoice factoring allows
                these businesses to convert outstanding invoices to immediate cash, with the
                factoring company collecting directly from the operator.
              </p>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Factoring in the oil and gas sector requires factors who understand the
                payment structures common in E&P contracts, including division orders, joint
                interest billing, and operator-specific payment cycles. Not all factoring
                companies work with energy sector receivables. Review any factoring agreement
                carefully with qualified counsel, including recourse provisions that may apply
                if the operator does not pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Oilfield subsectors note ── */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
            Sector context
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            How financing needs vary across oil and gas subsectors
          </h2>
          <p className="text-sm text-[#9aaa98] mb-8 max-w-2xl">
            The oil and gas industry spans a range of business types with meaningfully different
            financing profiles. The same lender may approach an E&P operator, an oilfield services
            company, and a midstream pipeline business very differently.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                heading: "Exploration and production (E&P)",
                body: "Operators who drill and produce oil and gas face the most direct commodity price risk. Reserve-based lending — where credit availability is tied to the value of proven reserves — is a common institutional structure, though it typically requires scale that smaller operators may not yet have reached. Working capital loans and equipment financing are more broadly accessible entry points.",
              },
              {
                heading: "Oilfield services",
                body: "Trucking, well servicing, rental tools, flowback, inspection, and other service companies generate revenue from operators rather than from production directly. Their financing needs center on equipment acquisition, receivables management, and bridging the gap between service delivery and invoice payment. Invoice factoring and equipment financing are commonly used in this segment.",
              },
              {
                heading: "Midstream and gathering",
                body: "Pipeline, gathering system, and processing businesses are generally more capital-intensive and project-financed than services companies. For smaller midstream operators or businesses building out gathering infrastructure, equipment financing and SBA 7(a) loans may be relevant depending on scale. These businesses tend to have more stable, fee-based revenue that lenders view more favorably.",
              },
              {
                heading: "Oilfield manufacturing and fabrication",
                body: "Businesses that manufacture equipment, tanks, separators, or skid-mounted systems for the oilfield share characteristics with both manufacturing and energy service companies. Their inventory and receivables cycle is driven by operator activity, and equipment financing — for their own production machinery — is a common need alongside working capital for materials and labor.",
              },
              {
                heading: "Environmental and reclamation services",
                body: "Businesses focused on site remediation, produced water management, and environmental compliance services for oilfield operators occupy a somewhat different risk profile than production-linked services. Revenue often comes from regulatory compliance requirements that don't disappear when commodity prices fall, which some lenders view more favorably from a cash flow stability standpoint.",
              },
              {
                heading: "Fuel distribution and hauling",
                body: "Companies that haul crude, water, frac sand, or produced fluids for oilfield operations — or that distribute diesel and fuel to wellsites — often need financing for trucks, trailers, and tankers. Equipment financing and, for larger fleets, asset-based lending against the vehicle portfolio are common. Revenue concentration among a small number of operator clients is a common underwriting consideration.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="rounded-xl border border-[#1e2620] bg-[#111512] px-5 py-4"
              >
                <h3 className="text-sm font-semibold text-[#eef2ec] mb-2">{item.heading}</h3>
                <p className="text-sm text-[#6b7e69] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={FAQ_ITEMS}
        title="Oil and Gas Financing — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Explore financing options for your oil and gas business"
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

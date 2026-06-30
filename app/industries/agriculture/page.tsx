import type { Metadata } from "next";
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
  title: "Agriculture Financing | ZEO.co",
  description:
    "Explore financing options for farms and agribusinesses — equipment loans, operating lines, SBA farm programs, and invoice factoring. Learn what lenders evaluate and which paths may be a potential fit. Subject to underwriting by third-party providers.",
  path: "/industries/agriculture",
  keywords: [
    "agriculture financing",
    "farm business loans",
    "equipment financing for farms",
    "agricultural working capital",
    "SBA loans for farmers",
    "farm operating line of credit",
    "tractor financing",
    "agribusiness financing",
    "crop input financing",
    "farm equipment loans",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function TractorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="5" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M7.5 13H11.5M3 10V6h4l3 4H3z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 6V4h2l1.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SeedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 15V9M9 9C9 5.5 5 3 3 3c0 4 2.5 6 6 6zM9 9c0-3.5 4-6 6-6 0 4-2.5 6-6 6z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
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

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 12h2M10.5 12h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

function LandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 14h14M2 14l3-4 3 2 4-6 4 8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
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

function StorageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 15V8l7-4 7 4v7H2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M9 4v11M2 11h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Industries", href: "/industries" },
  { label: "Agriculture Financing" },
];

const FAQ_ITEMS = [
  {
    q: "What makes agriculture financing different from other business loans?",
    a: "Agriculture operates on biological timelines that don't match standard loan repayment schedules. A grain farmer may plant in April, harvest in October, and not receive payment until the following spring — a cycle that can span 12 to 18 months. This revenue pattern doesn't fit neatly into monthly repayment structures designed for businesses with steady cash flow. As a result, lenders who specialize in agriculture typically offer products structured around crop cycles, harvest seasons, or livestock production schedules. Presenting a clear picture of your production calendar, input costs, and expected revenue timing helps lenders evaluate your actual repayment capacity rather than defaulting to generic benchmarks.",
  },
  {
    q: "Can a farm or agribusiness qualify for SBA financing?",
    a: "Eligibility for SBA programs depends on your specific operation and how it is structured. The SBA 7(a) program generally excludes farming operations that are primarily agricultural in nature, though exceptions exist for certain types of agribusinesses. The USDA's Farm Service Agency (FSA) administers separate loan programs specifically designed for farmers and ranchers, including direct farm operating loans and guaranteed programs through commercial lenders. If you operate an agribusiness that processes, distributes, or services the agricultural sector rather than farming directly, SBA 7(a) or 504 programs may be more accessible. ZEO.co is not the SBA, an SBA lender, a government agency, or the USDA — consult the relevant agency directly for program details.",
  },
  {
    q: "How does invoice factoring work for produce distributors and agricultural suppliers?",
    a: "Agricultural distributors, food processors, and ag-input suppliers that sell to grocery chains, food service companies, or other businesses on net terms often carry significant accounts receivable balances. Invoice factoring allows these businesses to sell those outstanding invoices to a third-party factoring company in exchange for an immediate advance — typically 70 to 90 percent of the invoice face value — rather than waiting 30, 60, or 90 days for payment. The factoring company then collects from the buyer directly. For produce businesses in particular, where perishability creates pressure to move product quickly, factoring can provide the liquidity needed to keep purchasing and operating without waiting on slow-paying accounts. All factoring agreements should be reviewed with qualified legal counsel.",
  },
  {
    q: "What documents do agricultural lenders typically require?",
    a: "Agricultural lenders generally request a combination of standard business documentation and farm-specific records. Standard items typically include two to three years of business and personal tax returns, recent bank statements, and a current profit and loss statement. Farm-specific documentation often includes a farm balance sheet showing land, equipment, livestock, and crop inventory values; a current-year acreage summary and crop plan; commodity sales records or warehouse receipts; existing crop insurance documentation; and information about any Farm Service Agency programs the operation participates in. For equipment financing, recent appraisals or dealer quotes for the specific equipment are commonly required. Operations with lease arrangements should have current farm leases available.",
  },
  {
    q: "Is crop insurance relevant to getting farm financing?",
    a: "Many agricultural lenders and USDA programs view crop insurance as an important risk management component and may factor its presence — or absence — into underwriting decisions. Crop insurance through USDA's Risk Management Agency reduces the lender's exposure to weather, disease, and price events that could prevent repayment in a given year. Some lenders explicitly require federal crop insurance as a condition of lending. From a planning standpoint, maintaining adequate crop coverage can make your operation look more creditworthy to lenders who specialize in agricultural finance. Review your coverage levels annually relative to your current debt obligations.",
  },
];

const COMPARISON_COLUMNS = ["Equipment Financing", "Operating Line of Credit", "SBA / USDA Programs", "Invoice Factoring"];

const COMPARISON_ROWS = [
  {
    feature: "Primary use",
    "Equipment Financing": "Tractors, harvesters, irrigation",
    "Operating Line of Credit": "Seed, fertilizer, labor, fuel",
    "SBA / USDA Programs": "Long-term capital, land, equipment",
    "Invoice Factoring": "Bridge slow-paying buyers",
  },
  {
    feature: "Collateral",
    "Equipment Financing": "The financed equipment",
    "Operating Line of Credit": "Crops, receivables, or blanket lien",
    "SBA / USDA Programs": "Real estate, assets, personal guarantee",
    "Invoice Factoring": "Invoices sold to factor",
  },
  {
    feature: "Repayment structure",
    "Equipment Financing": "Fixed monthly payments",
    "Operating Line of Credit": "Draw and repay seasonally",
    "SBA / USDA Programs": "Fixed monthly payments",
    "Invoice Factoring": "Deducted from collections",
  },
  {
    feature: "Speed to funding",
    "Equipment Financing": "Days to weeks",
    "Operating Line of Credit": "Once established, same day",
    "SBA / USDA Programs": "Weeks to months",
    "Invoice Factoring": "Often 1–3 business days",
  },
  {
    feature: "Seasonal flexibility",
    "Equipment Financing": "Limited",
    "Operating Line of Credit": "High — draw when needed",
    "SBA / USDA Programs": "Moderate",
    "Invoice Factoring": "High — tied to invoice activity",
  },
  {
    feature: "Best for",
    "Equipment Financing": "Capital asset acquisition",
    "Operating Line of Credit": "Pre-season and in-season inputs",
    "SBA / USDA Programs": "Long-term capital needs",
    "Invoice Factoring": "Produce / ag-supply receivables",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AgricultureFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Industry"
        title="Agriculture Financing"
        subtitle="Farms and agribusinesses operate on seasonal cycles, biological timelines, and commodity markets that most conventional financing products aren't designed for. Understanding which structures align with how agricultural cash flow actually works is where to start."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Equipment financing range"
              value="$25K – $5M+"
              note="Subject to lender underwriting"
            />
            <MetricCard
              label="Operating line advance"
              value="Up to 80%"
              note="Of eligible collateral; varies by lender"
            />
            <MetricCard
              label="Factoring advance rate"
              value="70 – 90%"
              note="Of invoice face value; produce varies"
              highlight
            />
            <MetricCard
              label="USDA FSA direct loan max"
              value="$600K"
              note="Operating loans; not guaranteed by ZEO"
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
                Why agriculture requires financing structures built around production cycles
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Most business financing products are designed around monthly revenue and monthly
                repayment. Agriculture rarely works that way. A row-crop farmer may spend
                heavily in March and April on seed, fertilizer, fuel, and custom hire, generate
                no meaningful revenue until harvest in September or October, and not receive
                final payment until grain is priced and delivered months later.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm">
                Lenders who specialize in agriculture understand this — and structure operating
                lines, equipment loans, and repayment terms around production calendars rather
                than forcing agricultural cash flow into conventional monthly templates. Working
                with lenders who have agricultural experience is one of the most important early
                decisions for a farm or agribusiness seeking financing.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Front-loaded input costs before any revenue",
                  body: "Crop production requires significant spending on seed, fertilizer, chemicals, and fuel months before the first dollar of revenue arrives. For a 1,000-acre grain operation, pre-season input costs alone can reach six figures — creating a capital need that conventional short-term loan structures aren't built to accommodate.",
                },
                {
                  heading: "Commodity price and weather risk",
                  body: "Unlike most industries, agricultural revenue is subject to price movements in commodity markets and weather events outside the operator's control. A drought, flood, or sudden commodity price drop can materially change the repayment capacity of an otherwise well-run operation. Lenders factor this into risk assessment, and producers with documented risk management — including crop insurance and forward contracts — often present more favorably.",
                },
                {
                  heading: "Heavy equipment depreciation and replacement cycles",
                  body: "Modern farm equipment — row-crop tractors, combines, planters, sprayers — represents a capital investment that few other industries can match for the business's scale. Equipment that is undercapitalized or aging increases operating risk and production costs. Financing the right equipment at the right time has a direct impact on per-acre profitability.",
                },
                {
                  heading: "Land access and long-term asset concentration",
                  body: "For operations that own land, it typically represents the largest asset on the balance sheet. Accessing equity in owned land can provide significant capital, but land-backed financing involves longer terms, lender appraisals, and a different underwriting process than operating or equipment financing. Leased-ground operations face different challenges — no land equity, but also less long-term capital tied up.",
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
            Products commonly used in agriculture and agribusiness
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            The right financing structure depends on your operation type, production calendar,
            credit profile, and what the capital is needed for. All financing is subject to
            underwriting by third-party providers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<TractorIcon />}
              title="Equipment Financing"
              description="Financing for tractors, combines, planters, sprayers, irrigation systems, and other farm equipment. The equipment typically serves as collateral, which can make this more accessible than unsecured options for established operations."
              tags={["Tractors", "Combines", "Irrigation"]}
              href="/equipment-financing"
              highlight
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Agricultural Line of Credit"
              description="A revolving operating line used to cover pre-season input costs — seed, fertilizer, fuel, custom hire, and labor — before harvest revenue arrives. Structured around the production calendar with seasonal repayment terms."
              tags={["Seasonal", "Inputs", "Operating"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<SeedIcon />}
              title="Crop Input Financing"
              description="Short-term financing specifically structured around crop production input costs. Typically repaid at harvest. May be offered directly by agricultural lenders, cooperatives, or input suppliers with financing programs."
              tags={["Seed", "Fertilizer", "Pre-season"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<InvoiceIcon />}
              title="Invoice Factoring"
              description="For produce distributors, food processors, and agricultural suppliers selling to buyers on net terms. Advance against outstanding invoices rather than waiting 30–90 days for payment from grocery chains or food service accounts."
              tags={["Produce", "Distributors", "Receivables"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA / USDA Programs"
              description="Government-backed programs including SBA 7(a) for eligible agribusinesses and USDA Farm Service Agency programs for qualifying farmers and ranchers. Documentation-intensive with specific eligibility criteria. ZEO is not the SBA or USDA."
              tags={["Government-backed", "Long-term", "FSA"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<LandIcon />}
              title="Farm Real Estate Loans"
              description="Long-term financing for purchasing farmland or accessing equity in owned land. Secured by the real property. Separate from operating or equipment financing — typically involves agricultural appraisals and longer underwriting timelines."
              tags={["Farmland", "Equity", "Long-term"]}
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
                What lenders typically evaluate for agricultural operations
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                These are general benchmarks drawn from common lender practices in agricultural
                finance. Individual lenders set their own criteria, and requirements vary
                significantly between equipment financing, operating lines, and real estate
                programs. Meeting these thresholds does not guarantee approval.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Personal credit score",
                    value: "650+ for most agricultural lenders",
                    note: "Some FSA programs and specialty agricultural lenders have more flexibility for beginning farmers or those rebuilding credit",
                  },
                  {
                    label: "Time in operation",
                    value: "2+ years preferred; FSA beginning farmer programs available",
                    note: "Beginning farmers with less operating history may find USDA FSA direct programs more accessible than commercial lenders",
                  },
                  {
                    label: "Farm income documentation",
                    value: "2–3 years of Schedule F or business tax returns",
                    note: "Lenders look at trend in gross revenue, net farm income, and whether the operation shows consistent profitability over time",
                  },
                  {
                    label: "Acreage and production records",
                    value: "FSA farm records, yield history, lease agreements",
                    note: "Documenting your actual acres operated, owned vs. leased breakdown, and historical production gives lenders a clearer picture of revenue potential",
                  },
                  {
                    label: "Crop insurance",
                    value: "Current federal crop insurance coverage",
                    note: "Many agricultural lenders view crop insurance as a prerequisite; some require it as a condition of lending",
                  },
                  {
                    label: "Farm balance sheet",
                    value: "Land, equipment, livestock, crop inventory, and liabilities",
                    note: "A current farm balance sheet showing asset values and all existing debt — including FSA, commercial, and equipment loans — is standard",
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
                How agricultural operations can strengthen a financing application
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                Agricultural lenders evaluate risk differently than general business lenders.
                Presenting your operation clearly — including the seasonal dynamics and
                risk management measures you have in place — helps underwriters make an
                informed assessment. These are general considerations, not a guarantee
                of any outcome.
              </p>
              <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Prepare a current farm balance sheet.</span>{" "}
                  Unlike a standard business P&L, a farm balance sheet captures the full picture
                  of an agricultural operation: land values, equipment, growing crops, stored
                  grain or livestock inventory, and all liabilities including operating debt and
                  equipment loans. Lenders use this to assess your working capital position and
                  debt-to-asset ratio.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Document your acres and lease agreements.</span>{" "}
                  Know your exact total acres — owned and cash-rented — and have current farm
                  leases in hand. Lenders want to confirm the operational scale of the business
                  and that your lease arrangements are stable. Multi-year leases with documented
                  terms are viewed more favorably than year-to-year verbal arrangements.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Show your risk management position.</span>{" "}
                  Document your current crop insurance coverage levels, any forward-contracted
                  bushels or livestock, and any commodity price risk management you use. This
                  signals to lenders that you actively manage downside risk rather than leaving
                  revenue entirely exposed to market conditions.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Separate business and personal finances.</span>{" "}
                  Farm finances are frequently commingled with personal accounts, particularly on
                  smaller operations. Lenders want to see business cash flow that reflects farm
                  income and expenses — not personal purchases running through the farm account.
                  Clean bank statements accelerate underwriting.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Know your existing debt structure.</span>{" "}
                  Have a clear list of all current obligations: FSA loans, commercial operating
                  lines, equipment notes, real estate mortgages, and any dealer or co-op
                  financing. Lenders will ask, and a clear picture of your debt service
                  requirements demonstrates that you understand your own financial position.
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
            Agriculture financing structures at a glance
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            General structural differences between common products used in agricultural
            finance. Actual terms depend on the lender, your credit profile, and your
            specific operation.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Operating Line of Credit"
          />
        </div>
      </section>

      {/* ── Industry-specific considerations ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Agriculture-specific consideration
              </p>
              <h3 className="text-lg font-semibold text-[#0f0f0f] mb-3 text-balance">
                USDA Farm Service Agency programs
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-3">
                The USDA Farm Service Agency administers direct loan programs and guaranteed
                loan programs specifically for farmers and ranchers that are not available
                through the commercial lending system. Direct FSA loans are made by the
                government itself; guaranteed programs allow commercial lenders to originate
                loans with an FSA guarantee that reduces their risk and may improve your
                access to financing.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                FSA programs include farm ownership loans, operating loans, and targeted
                programs for beginning farmers, socially disadvantaged producers, and those
                who cannot obtain credit elsewhere. Eligibility requirements, loan limits, and
                application processes vary by program type. ZEO.co is not the USDA, the Farm
                Service Agency, or a USDA-approved lender — contact your local FSA service
                center directly for program information.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Agriculture-specific consideration
              </p>
              <h3 className="text-lg font-semibold text-[#0f0f0f] mb-3 text-balance">
                Factoring for produce and perishable-commodity businesses
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-3">
                Produce distributors, packing operations, and agricultural commodity suppliers
                that sell to grocery chains, food service distributors, or processors frequently
                operate on tight margins with slow-paying accounts. The Perishable Agricultural
                Commodities Act (PACA) governs trust provisions on produce sales that factoring
                companies must understand and navigate carefully.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                Factoring companies that work with produce and perishable agricultural
                commodities typically have experience with PACA trust requirements, buyer
                creditworthiness in the food distribution sector, and the speed required to
                advance on invoices before inventory turns. Review all factoring agreements
                with qualified legal counsel who understands PACA implications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Additional financing paths ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Additional options
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Other financing paths that may apply to agricultural operations
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Depending on your operation type and capital need, one of these paths may be a
            better fit or a useful complement to a primary financing structure.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<StorageIcon />}
              title="Grain Storage Financing"
              description="For row-crop operations building or expanding on-farm grain storage. Bins, dryers, and handling systems can be financed as capital assets. On-farm storage provides greater marketing flexibility and can support grain-backed operating financing."
              tags={["Storage bins", "Dryers", "Capital assets"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<CapitalIcon />}
              title="Working Capital Loans"
              description="Short-to-medium-term cash financing for operating expenses that fall outside the scope of a pre-established line of credit. May be relevant for agribusinesses, food processors, or farm service businesses with less seasonal cash flow patterns."
              tags={["Operating", "Bridge", "Short-term"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<LandIcon />}
              title="Farm Real Estate & Land Loans"
              description="Long-term financing for farmland acquisition or refinancing. Farm Credit institutions, USDA FSA, and commercial agricultural lenders all participate in this space. Land values vary significantly by region and commodity type."
              tags={["Land purchase", "Refinance", "Farm Credit"]}
              href="/commercial-real-estate-loans"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={FAQ_ITEMS}
        title="Agriculture Financing — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Explore financing options for your farm or agribusiness"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit based on your operation and situation. Subject to underwriting by third-party providers. Results are not guaranteed."
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

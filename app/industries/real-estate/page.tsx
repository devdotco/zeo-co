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
  title: "Real Estate Operator Financing | ZEO.co",
  description:
    "Explore financing options for real estate operators — bridge loans, SBA 504, working capital, and portfolio-level structures. Learn what lenders evaluate for investment properties and portfolios. Subject to underwriting by third-party providers.",
  path: "/industries/real-estate",
  keywords: [
    "real estate operator financing",
    "investment property loans",
    "bridge loan real estate",
    "SBA 504 commercial real estate",
    "DSCR loans",
    "portfolio lender real estate",
    "fix and flip financing",
    "commercial real estate working capital",
    "real estate investor loans",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 15v-4h4v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 7.5h.01M9 7.5h.01M12 7.5h.01M6 10.5h.01M12 10.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 2.5l3 1.5 3-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BridgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 12h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 12V8M13 12V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 8c0-2 1.5-4 7-4s7 2 7 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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
        d="M9 6v1l-1.5.75L9 8.5l1.5.75L9 11"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="2" width="6" height="13" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 9h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function HardMoneyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2L15 5.5V12.5L9 16L3 12.5V5.5L9 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 6v2.5l2 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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
  { label: "Real Estate Operator Financing" },
];

const FAQ_ITEMS = [
  {
    q: "What is a DSCR loan and why do lenders use it for investment properties?",
    a: "DSCR stands for Debt Service Coverage Ratio — a measure of whether a property generates enough income to cover its debt payments. Lenders calculate it by dividing net operating income by total annual debt service. A ratio above 1.0 means the property covers its own debt; ratios of 1.2 or higher are generally preferred. DSCR-based underwriting is common for investment properties because it focuses on the property's performance rather than the borrower's personal income, which is especially relevant for operators who hold multiple properties or who rely on business income from multiple sources. Requirements and thresholds vary by lender and loan structure, and qualification is subject to underwriting.",
  },
  {
    q: "How does a bridge loan work for real estate operators, and what are the typical terms?",
    a: "A bridge loan is a short-term financing tool — typically 6 to 36 months — used to acquire or reposition a property while longer-term financing is arranged or while the property stabilizes its occupancy and income. Operators commonly use bridge loans when conventional financing isn't available because the property needs renovation, is below occupancy thresholds, or has an income profile that doesn't yet support a permanent mortgage. Bridge lenders focus heavily on the exit strategy: how and when will the loan be repaid, whether through sale, refinance, or occupancy-driven stabilization. Interest rates for bridge financing are typically higher than long-term debt. All bridge financing is subject to lender underwriting and approval.",
  },
  {
    q: "Can an SBA 504 loan be used to purchase commercial real estate for an investment property?",
    a: "Generally, no. SBA 504 loans are designed for owner-occupied commercial real estate — meaning the operating business must occupy at least 51% of the property (or 60% for new construction). Pure investment properties where a third party is the tenant typically do not qualify for SBA 504. However, real estate operators who also run an operating business — such as a hotel, self-storage facility, or car wash — may be able to structure a qualifying acquisition. SBA eligibility rules are detailed and lender-specific. ZEO.co is not the SBA, an SBA lender, or a government agency. Consult an SBA-approved lender to determine whether your specific situation may qualify.",
  },
  {
    q: "What documentation do lenders typically require for investment property financing?",
    a: "For investment property loans, lenders commonly request two to three years of personal and business tax returns, a current rent roll with lease expiration dates and tenant payment history, trailing 12-month operating statements for the property, recent bank statements, a property appraisal (ordered by the lender), and information on existing debt against the property. For portfolio loans covering multiple properties, a schedule of real estate owned (SREO) is typically required, showing all properties, their values, current debt, and net cash flow. Documentation requirements vary by lender and loan type.",
  },
  {
    q: "Is working capital financing available for real estate operators between acquisitions or during renovation?",
    a: "Yes, though options depend heavily on the operator's business profile and credit strength. Real estate operators with an operating business entity — not just a holding company — may qualify for unsecured or lightly-secured working capital lines to cover expenses like property management overhead, insurance, legal fees, or carrying costs during renovation. Some private lenders also offer liquidity lines secured by equity in stabilized properties. Because real estate holding companies often show low W-2 income and irregular cash flow, lenders tend to underwrite these requests more carefully than for businesses with recurring revenue. Subject to lender underwriting and approval.",
  },
];

const COMPARISON_COLUMNS = ["Bridge Loan", "SBA 504", "Portfolio Loan", "Hard Money"];

const COMPARISON_ROWS = [
  {
    feature: "Primary use",
    "Bridge Loan": "Acquisition & stabilization",
    "SBA 504": "Owner-occupied CRE",
    "Portfolio Loan": "Multiple properties",
    "Hard Money": "Fast acquisition, fix-and-flip",
  },
  {
    feature: "Typical term",
    "Bridge Loan": "6 – 36 months",
    "SBA 504": "20 – 25 years",
    "Portfolio Loan": "5 – 30 years",
    "Hard Money": "6 – 18 months",
  },
  {
    feature: "Collateral",
    "Bridge Loan": "Subject property",
    "SBA 504": "Real estate + business assets",
    "Portfolio Loan": "Pool of properties",
    "Hard Money": "Subject property (ARV-based)",
  },
  {
    feature: "Speed to fund",
    "Bridge Loan": "2 – 4 weeks",
    "SBA 504": "60 – 120+ days",
    "Portfolio Loan": "3 – 6 weeks",
    "Hard Money": "Days to 2 weeks",
  },
  {
    feature: "Credit focus",
    "Bridge Loan": "Property + exit strategy",
    "SBA 504": "Business + personal credit",
    "Portfolio Loan": "Portfolio DSCR + track record",
    "Hard Money": "Asset value, less on credit",
  },
  {
    feature: "Owner-occupancy req.",
    "Bridge Loan": "Not required",
    "SBA 504": "51%+ required",
    "Portfolio Loan": "Not required",
    "Hard Money": "Not required",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RealEstateFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Industry"
        title="Real Estate Operator Financing"
        subtitle="Real estate operators face a distinct financing landscape — capital needs that shift between acquisition, renovation, stabilization, and long-term hold, often simultaneously across multiple properties. The product that fits a single-property purchase rarely fits a growing portfolio. This page covers which structures are designed for how operators actually work."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Bridge loan typical term"
              value="6 – 36"
              unit="months"
              note="Short-term; exit strategy required"
            />
            <MetricCard
              label="DSCR threshold (common)"
              value="1.20x"
              note="Net operating income ÷ debt service; varies by lender"
            />
            <MetricCard
              label="SBA 504 max loan"
              value="$5.5M"
              note="Owner-occupied CRE only; not guaranteed"
              highlight
            />
            <MetricCard
              label="Down payment (typical CRE)"
              value="20 – 35%"
              note="Investment properties; varies by product and lender"
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
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Why real estate operator financing is structurally complex
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Real estate operators — investors, landlords, developers, and portfolio managers —
                operate across a capital stack that conventional business lenders aren't always
                built to serve. A single-property owner looking for a 30-year mortgage is a
                straightforward borrower. An operator acquiring a vacant retail strip, converting
                it to mixed-use, and financing the next acquisition against stabilized equity is
                a different conversation entirely.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm">
                The financing challenges aren't just about size — they're structural. Income comes
                from rents, not payroll. Tax returns often show significant depreciation that
                suppresses reported income. Properties carry debt that needs to be understood as
                a portfolio, not a single liability. Lenders who work in this space underwrite
                differently than those who work primarily with operating businesses, and knowing
                which lenders to approach with which structure saves time.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Income verification is more complex",
                  body: "Real estate operators often show lower taxable income than their actual cash flow due to depreciation, cost segregation, and interest deductions. This makes standard income verification methods — W-2s, traditional P&L analysis — less useful. Lenders who specialize in this space may use rent rolls, property operating statements, and DSCR calculations rather than personal income as the primary underwriting lens.",
                },
                {
                  heading: "Capital deployment timing mismatches",
                  body: "Acquisition opportunities don't wait for financing timelines. An operator who identifies a motivated seller with a 30-day close window needs a capital source that can move quickly — conventional CRE lenders often cannot. Bridge lenders and hard money sources fill this gap, but at higher cost. Managing when to use each type of capital is an ongoing operational decision, not a one-time choice.",
                },
                {
                  heading: "Portfolio-level vs. property-level financing",
                  body: "Once an operator holds more than a handful of properties, property-by-property financing becomes increasingly inefficient. Blanket loans, portfolio lenders, and credit facilities secured by a pool of assets can simplify the capital stack, reduce administrative overhead, and create borrowing capacity tied to portfolio performance rather than any single property's metrics.",
                },
                {
                  heading: "Value-add and renovation financing gaps",
                  body: "Properties in transition — between tenants, under renovation, or repositioning to a new use — often fall outside the parameters of permanent financing. Revenue may be partial or absent during the renovation period. Stabilized appraisal values don't yet exist. Bridge and construction-to-permanent structures exist for this purpose, but underwriting focuses heavily on the operator's experience and the credibility of the renovation timeline and exit plan.",
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
          <h2 className="text-2xl font-semibold text-white mb-3 text-balance">
            Products commonly used by real estate operators
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Each structure below addresses a different stage of the real estate capital cycle.
            The right product depends on the property type, current occupancy, operator experience,
            and what the capital is needed for. All financing is subject to underwriting by
            third-party providers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<BuildingIcon />}
              title="Commercial Real Estate Loans"
              description="Permanent financing for stabilized income-producing properties — retail, office, industrial, multifamily. Underwritten primarily on the property's DSCR and the operator's track record. Typically requires full occupancy or near-stabilization."
              tags={["Stabilized properties", "DSCR", "Long-term"]}
              href="/commercial-real-estate-loans"
              highlight
            />
            <FinancingPathCard
              icon={<BridgeIcon />}
              title="Bridge Loans"
              description="Short-term financing for acquisitions, value-add projects, and properties in transition. Useful when conventional financing isn't available yet — occupancy is below threshold, renovation is underway, or a fast close is required."
              tags={["Short-term", "Value-add", "Fast close"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 504 Loans"
              description="Government-backed financing for owner-occupied commercial real estate. Lower down payment requirements and long terms can make this a cost-effective path for operators who also run an active business in the space they're acquiring."
              tags={["Owner-occupied", "SBA", "Long-term"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<PortfolioIcon />}
              title="Portfolio Loans"
              description="Single loans secured by multiple properties. Consolidates individual property debt into a manageable structure and can unlock borrowing capacity tied to portfolio-wide performance rather than property-by-property underwriting."
              tags={["Multi-property", "Blanket lien", "Portfolio DSCR"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<HardMoneyIcon />}
              title="Hard Money & Fix-and-Flip Financing"
              description="Asset-based lending focused on after-repair value rather than current income. Typically used for distressed acquisitions, short renovation timelines, and situations where speed or asset condition prevents conventional financing."
              tags={["ARV-based", "Fast funding", "Short-term"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Lines of Credit"
              description="Revolving credit for operating expenses between acquisitions — legal fees, property management overhead, insurance, and carrying costs. Access depends on the operating entity's profile and may require demonstrating active business income."
              tags={["Operating expenses", "Revolving", "Flexible draw"]}
              href="/business-line-of-credit"
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
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                What lenders typically evaluate for real estate operators
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                These are general benchmarks drawn from common lender practices in the commercial
                real estate sector. Each provider sets its own criteria. Meeting these thresholds
                does not guarantee approval, and requirements differ significantly by product
                type, property class, and lender.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Debt Service Coverage Ratio (DSCR)",
                    value: "1.20x – 1.30x for most lenders",
                    note: "Calculated as net operating income divided by total annual debt service on the subject property. Some portfolio programs use blended portfolio DSCR",
                  },
                  {
                    label: "Loan-to-value (LTV)",
                    value: "65 – 80% for investment properties",
                    note: "LTV limits vary significantly by asset class, property condition, and lender risk appetite; bridge lenders may also underwrite to after-repair value (ARV)",
                  },
                  {
                    label: "Personal credit score",
                    value: "660 – 680+ for most programs",
                    note: "Hard money and some bridge lenders weight asset value more heavily; SBA and conventional CRE lenders typically require stronger credit profiles",
                  },
                  {
                    label: "Operator track record",
                    value: "Documented prior experience preferred",
                    note: "Lenders for value-add and bridge transactions often require evidence of prior successful projects — purchase price, renovation costs, exit, and timeline",
                  },
                  {
                    label: "Rent roll and lease documentation",
                    value: "Current leases with tenants and expiration dates",
                    note: "Tenant credit quality, lease terms, and occupancy rate all factor into property-level underwriting; single-tenant properties carry concentration risk",
                  },
                  {
                    label: "Reserves",
                    value: "3 – 12 months of PITI in liquid reserves",
                    note: "Many commercial lenders require evidence of post-close liquidity to cover carrying costs through vacancy periods or unexpected expenses",
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

            {/* ── Strengthening a financing application ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Preparation
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                How real estate operators can strengthen a financing application
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                Operators who present organized property financials, a clear capital stack, and
                a credible exit or hold strategy tend to move through lender underwriting more
                smoothly. These are general considerations — not a guarantee of any outcome.
              </p>
              <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Prepare a Schedule of Real Estate Owned (SREO).</span>{" "}
                  Lenders evaluating portfolio borrowers expect a clean summary of all properties
                  held — address, property type, current value, outstanding debt, monthly payment,
                  gross rent, and net cash flow. An up-to-date SREO signals operational maturity
                  and makes the lender's due diligence faster.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Document operating income at the property level.</span>{" "}
                  Lenders want trailing 12-month income and expense statements for each
                  subject property. Keep utility costs, insurance, taxes, maintenance, and
                  management fees clearly itemized. Blended or estimated figures require
                  more back-and-forth and can slow underwriting.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Have an exit strategy for bridge financing.</span>{" "}
                  Bridge lenders underwrite the exit, not just the entry. Know your plan — sale,
                  refinance into permanent debt, or lease-up to a stabilization threshold — and
                  be prepared to explain what triggers the repayment and how realistic the
                  timeline is given current market conditions.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Separate entity structure matters.</span>{" "}
                  Operating through distinct LLCs or other entities for different properties
                  simplifies lender due diligence and limits cross-collateralization exposure.
                  Commingled entity structures — multiple properties under one entity with
                  shared liabilities — can complicate underwriting significantly.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Know your depreciation-adjusted cash flow.</span>{" "}
                  Real estate investors often show low taxable income due to depreciation. Be
                  prepared to walk lenders through your actual economic income versus reported
                  taxable income, and have your CPA available to explain the add-backs. Lenders
                  who specialize in real estate investor financing understand this; general
                  business lenders may not.
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
          <h2 className="text-2xl font-semibold text-white mb-3 text-balance">
            Real estate financing structures at a glance
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            General structural differences between common products used by real estate operators.
            Actual terms depend on the lender, property type, and borrower profile.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Bridge Loan"
          />
        </div>
      </section>

      {/* ── Industry-specific considerations ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Real estate–specific consideration
              </p>
              <h3 className="text-lg font-semibold text-white mb-3 text-balance">
                When DSCR underwriting works in your favor
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-3">
                DSCR-based lending evaluates whether a property pays for itself. For operators
                with strong-performing properties but complex personal tax returns — or whose
                income is distributed across multiple entities — DSCR products may offer a
                cleaner path than programs that rely heavily on W-2 income or personal financial
                statement analysis.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                DSCR programs are not available for all property types or all borrower profiles.
                They typically apply to non-owner-occupied investment property. Lenders set their
                own DSCR minimums, LTV limits, and property class restrictions. Subject to
                lender underwriting. Review all terms carefully before proceeding.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Real estate–specific consideration
              </p>
              <h3 className="text-lg font-semibold text-white mb-3 text-balance">
                Portfolio loans: consolidation vs. cross-collateralization risk
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-3">
                Blanket or portfolio loans can simplify the capital stack for operators holding
                multiple properties by replacing individual mortgages with a single facility.
                This can reduce administrative overhead, improve borrowing capacity, and allow
                properties to cross-support each other in underwriting.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                The tradeoff is cross-collateralization: underperformance or default on one
                property may have implications for the entire portfolio. Release provisions —
                allowing individual properties to be sold out of the blanket — vary by lender
                and may include significant prepayment requirements. Understand these terms
                fully before consolidating a portfolio into a single loan structure. Consult
                qualified legal and financial advisors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Working capital note ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Operating capital
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Working capital needs for real estate operating companies
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-4">
                Holding companies that own properties are generally not the borrowing entity
                for working capital — lenders prefer to see an active operating business with
                revenue and expenses flowing through a business bank account. Real estate
                operators who have structured an active management or development entity
                alongside their holding company may qualify for working capital products
                through that operating entity.
              </p>
              <p className="text-[#737373] text-sm leading-relaxed">
                Uses might include covering payroll for in-house property management staff,
                financing smaller renovation scopes that don't justify a full bridge loan,
                bridging the gap between property acquisitions, or funding legal and
                professional fees during a larger financing transaction. All working capital
                financing is subject to lender underwriting and approval by third-party
                providers. Terms vary significantly.
              </p>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-1.5">
                  Operating entity requirement
                </p>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Most working capital lenders require an active operating business, not a
                  passive holding company. Ensure the entity you apply under has meaningful
                  revenue and expense activity in its bank statements.
                </p>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-1.5">
                  Equity-based liquidity
                </p>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Some operators access liquidity by refinancing stabilized properties above
                  their current debt balance — a cash-out refinance. This is a property-level
                  transaction, not a business loan, and is subject to LTV limits and
                  underwriting by the refinancing lender.
                </p>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-1.5">
                  Private credit options
                </p>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Private lenders may offer liquidity facilities against stabilized portfolio
                  equity for experienced operators with a demonstrable track record. Terms
                  and availability vary significantly. Subject to underwriting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={FAQ_ITEMS}
        title="Real Estate Operator Financing — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Explore financing options for your real estate operations"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit based on your property type, portfolio structure, and capital needs. Subject to underwriting by third-party providers. Results are not guaranteed."
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

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
  title: "Hard Money Business Loans | ZEO.co",
  description:
    "Learn how hard money business loans work — asset-based lending, typical structures, costs, requirements, and whether this type of financing may be a fit for your situation. Subject to underwriting by third-party providers.",
  path: "/hard-money-business-loans",
  keywords: [
    "hard money business loans",
    "hard money lenders for business",
    "asset-based business lending",
    "private hard money loans",
    "hard money commercial loan",
    "hard money bridge loan",
    "business hard money lender",
    "hard money loan requirements",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 16V11h6v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 2v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function BridgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 12h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4 12V7M14 12V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4 7c0 0 2-3 5-3s5 3 5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 2C9 2 11 5 10 8C12 6.5 12.5 4 12.5 4C14 6 14.5 8.5 13.5 11C12.5 13.5 10.5 15 9 15C7.5 15 5.5 13.5 4.5 11C3.5 8.5 4 6 6 4.5C5.8 6.5 6.5 8 7.5 8.5C6.5 6.5 7 3.5 9 2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TimerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="10" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 7v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 2h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="11" width="14" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5 11V8M9 11V6M13 11V9"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M2 14h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function RefiIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 9a5 5 0 0 1 5-5c2 0 3.5 1 4.5 2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M12.5 4l1.5 3-3-0.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14 9a5 5 0 0 1-5 5c-2 0-3.5-1-4.5-2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M5.5 14l-1.5-3 3 0.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M11.5 3C10 3 8.5 4 8.5 5.5c0 .5.1 1 .4 1.4L4 11.5a1.5 1.5 0 0 0 2 2.2L11 9a3 3 0 0 0 4-2.5C15 5 13.5 3 11.5 3z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TermLoanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 12h2M10 12h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LineIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 9h6M9 6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Financing Options", href: "/financing" },
  { label: "Hard Money Business Loans" },
];

const FAQ_ITEMS = [
  {
    q: "What is a hard money business loan?",
    a: "A hard money business loan is a form of asset-based financing where the lending decision is driven primarily by the value of collateral — most commonly real property or commercial real estate — rather than the borrower's credit score or income documentation. Private lenders and funds typically originate these loans, which tend to have shorter terms, faster funding timelines, and higher costs than conventional bank financing. They are most commonly used as bridge financing or when a borrower cannot qualify for traditional products within the needed timeframe.",
  },
  {
    q: "How quickly can a hard money loan fund?",
    a: "Funding speed varies by lender, deal complexity, and the state of the collateral. Some private lenders can fund in as few as five to ten business days once a deal is under review. However, appraisals, title work, environmental reviews, and lender-specific processing can extend timelines. Businesses needing same-day or next-day funding may find that hard money is still faster than conventional options but not instantaneous. Always confirm timelines directly with each lender.",
  },
  {
    q: "Do I need good credit to qualify for a hard money business loan?",
    a: "Many hard money lenders place less emphasis on credit scores than conventional lenders do. Some will work with borrowers who have credit challenges, prior bankruptcies, or limited business history, provided the collateral value is strong and the loan-to-value ratio is acceptable. That said, lenders still perform varying levels of underwriting — some may review personal or business credit as one factor among many. Minimum requirements differ by lender and are subject to their own underwriting criteria.",
  },
  {
    q: "What types of collateral are typically accepted?",
    a: "Commercial real estate is the most common form of collateral for hard money business loans — including raw land, mixed-use properties, industrial or warehouse space, retail, and multifamily. Some lenders also accept residential investment properties, fix-and-flip properties, or other business assets depending on their focus. The lender's willingness to accept a particular asset type and the loan-to-value ratio they offer are both lender-specific and subject to their internal policies.",
  },
  {
    q: "What are the typical costs associated with hard money business loans?",
    a: "Hard money loans generally carry higher interest rates and fees than conventional bank financing. Common costs include origination points (often 1–4% of the loan amount), higher annual interest rates, and potentially prepayment penalties or exit fees. Total cost of capital should be evaluated carefully alongside the loan's term length and repayment structure. Because costs vary significantly by lender, deal size, and collateral quality, any figures should be treated as illustrative only — actual terms are subject to underwriting and individual lender offers.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Approval basis",
    "Hard Money": "Asset / collateral value",
    "Bank Term Loan": "Credit, financials, cash flow",
    "SBA Loan": "Credit, cash flow, eligibility",
  },
  {
    feature: "Typical funding speed",
    "Hard Money": "Days to 2–3 weeks",
    "Bank Term Loan": "Weeks to months",
    "SBA Loan": "60–90+ days",
  },
  {
    feature: "Credit requirements",
    "Hard Money": "Flexible; collateral-driven",
    "Bank Term Loan": "Good to excellent",
    "SBA Loan": "Good (650+ common)",
  },
  {
    feature: "Typical term length",
    "Hard Money": "6 months – 3 years",
    "Bank Term Loan": "2–10 years",
    "SBA Loan": "10–25 years",
  },
  {
    feature: "Relative cost",
    "Hard Money": "Higher",
    "Bank Term Loan": "Moderate",
    "SBA Loan": "Lower",
  },
  {
    feature: "Collateral required",
    "Hard Money": "Required (primary basis)",
    "Bank Term Loan": "Often required",
    "SBA Loan": "Required when available",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HardMoneyBusinessLoansPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* 1. Hero */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Financing"
        title="Hard Money Business Loans"
        subtitle="Asset-based financing where collateral drives the decision — not credit score or years of financials. Learn how hard money lending works, who it may fit, and what to watch out for before pursuing this path."
      />

      {/* 2. Who it is for */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Who Hard Money Lending May Fit</h2>
          <p className="text-[#737373] text-sm mb-10 max-w-2xl">
            Hard money is not a one-size-fits-all solution. It tends to be a potential fit when speed, flexibility, or asset strength matters more than obtaining the lowest possible cost of capital.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                heading: "Businesses with strong collateral but credit challenges",
                body: "If your business owns or is acquiring real estate with significant equity, private lenders may focus more on the asset than your credit profile. Borrowers who have experienced prior credit events — delinquencies, workouts, or thin credit histories — may find hard money more accessible than conventional options. All outcomes remain subject to lender-specific underwriting.",
              },
              {
                heading: "Time-sensitive transactions requiring fast capital",
                body: "Bank loan processes can take months. Hard money lenders often move faster because their diligence centers on the collateral rather than extensive income documentation review. Businesses under contract with closing deadlines, or those needing bridge capital to prevent loss of an opportunity, may explore hard money as a potential solution.",
              },
              {
                heading: "Real estate investors and developers",
                body: "Fix-and-flip investors, commercial property developers, and businesses acquiring investment properties often use hard money as short-term bridge financing between acquisition and permanent financing or property sale. These borrowers typically plan a defined exit strategy — refinance or disposition — rather than carrying the loan long-term.",
              },
              {
                heading: "Businesses that don't fit conventional underwriting boxes",
                body: "Seasonal revenue patterns, recent restructuring, unconventional business models, or limited operating history can disqualify otherwise viable businesses from traditional lending. Hard money lenders evaluate collateral independently of income documentation requirements, which may open doors for borrowers who struggle with conventional qualification criteria.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-2">
                  {item.heading}
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How it works */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">How Hard Money Lending Typically Works</h2>
          <p className="text-[#737373] text-sm mb-10 max-w-2xl">
            The general process varies by lender, but most hard money transactions follow a similar path from inquiry to funding.
          </p>
          <div className="space-y-3">
            {[
              {
                label: "Collateral evaluation",
                detail:
                  "The lender assesses the property or asset being offered as collateral. This often involves an independent appraisal, a review of the property's condition, and an analysis of the lender's loan-to-value position. Loan amounts are typically expressed as a percentage of the collateral's current or after-repair value — this figure varies by lender and asset type.",
              },
              {
                label: "Borrower review",
                detail:
                  "While the collateral is central, most hard money lenders still review the borrower's background to some degree. This may include a credit pull (soft or hard), review of the borrower's experience with similar transactions, and a basic assessment of the exit strategy — how the borrower intends to repay the loan. Documentation requirements are generally lighter than bank loans but are still lender-specific.",
              },
              {
                label: "Term sheet and commitment",
                detail:
                  "If the lender is interested, they issue a term sheet or letter of intent outlining proposed loan amount, rate, origination points, term length, repayment structure, and any conditions. This is not a guarantee of funding — it is a preliminary offer subject to final underwriting and due diligence.",
              },
              {
                label: "Underwriting and due diligence",
                detail:
                  "The lender completes their formal review process, which may include title search, survey, environmental assessment (for commercial property), final appraisal confirmation, and entity documentation review. The depth of this process varies by lender and deal complexity.",
              },
              {
                label: "Closing and funding",
                detail:
                  "Upon completion of underwriting and satisfaction of conditions, the loan closes — typically through a title company or attorney. Funds are disbursed, and the lender records a lien against the collateral. Some lenders fund in days from a completed application; others may take several weeks depending on deal and property complexity.",
              },
            ].map((step, i) => (
              <div
                key={step.label}
                className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#ffffff] border border-[#e5e5e5] flex items-center justify-center">
                  <span className="text-[0.65rem] font-semibold text-[#0f0f0f] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1.5">
                    {step.label}
                  </h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Common use cases */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Common Use Cases</h2>
          <p className="text-[#737373] text-sm mb-10 max-w-2xl">
            Hard money financing tends to cluster around real asset transactions where conventional financing is unavailable, too slow, or structurally mismatched to the deal.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FinancingPathCard
              icon={<BridgeIcon />}
              title="Bridge Loans"
              description="Short-term financing used to bridge the gap between immediate capital need and longer-term financing. Common when a business needs to close quickly while arranging permanent financing."
              tags={["Short-term", "Real estate", "Fast close"]}
              href="/hard-money-business-loans"
            />
            <FinancingPathCard
              icon={<BuildingIcon />}
              title="Commercial Property Acquisition"
              description="Purchasing income-producing or investment properties when bank timelines are too slow or when the property does not yet qualify for agency financing due to occupancy or condition."
              tags={["Acquisition", "Commercial RE", "Asset-based"]}
              href="/hard-money-business-loans"
            />
            <FinancingPathCard
              icon={<ToolsIcon />}
              title="Fix-and-Flip or Value-Add"
              description="Funding the acquisition and renovation of distressed commercial or investment residential properties. Lenders may underwrite to the after-repair value rather than current condition."
              tags={["Renovation", "ARV lending", "Investor"]}
              href="/hard-money-business-loans"
            />
            <FinancingPathCard
              icon={<LandIcon />}
              title="Raw Land and Development"
              description="Acquiring undeveloped land or early-stage development projects. Conventional lenders often avoid raw land; hard money lenders may be more flexible depending on location, entitlements, and exit plan."
              tags={["Land", "Development", "Entitlement"]}
              href="/hard-money-business-loans"
            />
            <FinancingPathCard
              icon={<FlameIcon />}
              title="Distressed Business Situations"
              description="Businesses facing foreclosure, tax liens, or maturity defaults on existing debt may use hard money to buy time, recapitalize, or execute an orderly sale or refinance."
              tags={["Distressed", "Recapitalization", "Workout"]}
              href="/hard-money-business-loans"
            />
            <FinancingPathCard
              icon={<RefiIcon />}
              title="Refinance into Conventional Financing"
              description="Using a hard money loan as a temporary vehicle to acquire or stabilize an asset, then refinancing into longer-term bank or agency debt once the property and business profile meet conventional requirements."
              tags={["Refi bridge", "Stabilization", "Exit strategy"]}
              href="/hard-money-business-loans"
            />
          </div>
        </div>
      </section>

      {/* 5. Typical requirements */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Typical Requirements</h2>
          <p className="text-[#737373] text-sm mb-10 max-w-2xl">
            Hard money lenders vary significantly in their requirements. These ranges are illustrative and based on general market patterns — actual requirements depend entirely on the lender and the specific deal. All financing is subject to underwriting.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <MetricCard
              label="Loan-to-Value (LTV)"
              value="60–75%"
              note="Of current or after-repair value; varies by asset type and lender"
            />
            <MetricCard
              label="Minimum Credit Score"
              value="Varies"
              note="Some lenders set no minimum; others use 550–600+ as a floor"
            />
            <MetricCard
              label="Time in Business"
              value="Flexible"
              note="Less emphasis than conventional; entity documentation still required"
            />
            <MetricCard
              label="Typical Term Length"
              value="6–36 mo"
              note="Short-term structure; renewal or extension may be available"
            />
          </div>
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
            <h3 className="text-sm font-semibold text-[#0f0f0f] mb-3">Common documentation lenders may request</h3>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
              {[
                "Property address and description",
                "Purchase contract or ownership documents",
                "Independent or desk appraisal",
                "Scope of work (for renovation projects)",
                "Borrower entity documents (operating agreement, EIN)",
                "Personal identification",
                "Exit strategy narrative",
                "Existing mortgage statements (if refinancing)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#737373]">
                  <div className="w-1 h-1 rounded-full bg-[#0f0f0f] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cost discussion */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white mb-4">Understanding Hard Money Costs</h2>
            <p className="text-sm text-[#737373] leading-relaxed mb-4">
              Hard money loans are generally more expensive than conventional business financing. The higher cost reflects the lender's faster underwriting, greater flexibility on borrower profile, and increased risk from collateral-only underwriting. Businesses that pursue this path typically do so because the speed, access, or strategic value of the capital justifies the cost in their specific situation.
            </p>
            <p className="text-sm text-[#737373] leading-relaxed mb-4">
              Common cost components include origination points charged at closing (typically expressed as a percentage of the loan amount), an annual interest rate applied to the outstanding balance, and potentially draw fees, extension fees, or prepayment penalties depending on the lender's structure. Some lenders also charge for appraisals, document preparation, or legal review.
            </p>
            <p className="text-sm text-[#737373] leading-relaxed mb-6">
              Because terms differ substantially across lenders, comparing total cost of capital — not just the stated interest rate — is important. The effective annual cost on a short-term hard money loan can be meaningfully higher than the face rate when origination points are amortized over the actual loan period. ZEO does not quote rates or guarantee terms. Actual costs are set by third-party lenders and are subject to their underwriting.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">Origination Points</p>
                <p className="text-sm text-[#0f0f0f] leading-relaxed">Typically charged upfront as a percentage of the loan amount. Points reduce net proceeds but are a primary revenue component for hard money lenders.</p>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">Interest Rate</p>
                <p className="text-sm text-[#0f0f0f] leading-relaxed">Applied to the outstanding balance. Hard money rates are generally higher than conventional alternatives to reflect speed and flexibility. Rates vary by lender, deal, and market.</p>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">Other Fees</p>
                <p className="text-sm text-[#0f0f0f] leading-relaxed">Extension fees, draw fees for construction loans, prepayment penalties, and third-party costs (appraisal, title) may also apply depending on lender and transaction type.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pros and cons */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-10">Pros and Cons</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">
                Potential Advantages
              </p>
              <div className="space-y-3">
                {[
                  {
                    heading: "Faster funding timelines",
                    detail: "Private lenders can often move faster than banks, which may matter when a deal has a defined closing date or competitive timeline.",
                  },
                  {
                    heading: "Flexible qualification criteria",
                    detail: "Credit challenges, limited operating history, or non-traditional revenue patterns may be less disqualifying than they are with conventional lenders.",
                  },
                  {
                    heading: "Asset-driven underwriting",
                    detail: "Strong collateral can sometimes offset borrower profile weaknesses, allowing businesses to access capital they might not otherwise qualify for.",
                  },
                  {
                    heading: "Shorter decision cycles",
                    detail: "Term sheets and approvals can move in days rather than weeks, making it easier to plan around deal timelines.",
                  },
                ].map((item) => (
                  <div
                    key={item.heading}
                    className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4 flex gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-1">{item.heading}</p>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#737373] mb-4">
                Considerations and Risks
              </p>
              <div className="space-y-3">
                {[
                  {
                    heading: "Higher cost of capital",
                    detail: "Interest rates and origination fees are generally higher than conventional alternatives. Borrowers should model total repayment cost carefully before proceeding.",
                  },
                  {
                    heading: "Short terms require a clear exit strategy",
                    detail: "Most hard money loans mature in 12–36 months. Borrowers who cannot refinance or sell before maturity face extension fees, balloon payments, or potential default.",
                  },
                  {
                    heading: "Collateral at risk",
                    detail: "Because the loan is secured by real property or assets, the lender may foreclose or pursue the collateral in a default scenario. Personal guarantees may also be required.",
                  },
                  {
                    heading: "Lender quality varies widely",
                    detail: "The hard money market includes lenders across a broad quality spectrum. Reviewing loan agreements, fee structures, and lender reputation carefully — with qualified legal counsel — is important.",
                  },
                ].map((item) => (
                  <div
                    key={item.heading}
                    className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4 flex gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a3a3a3] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-1">{item.heading}</p>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Comparison table */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">How It Compares to Other Financing</h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            This comparison is illustrative only. Actual terms, requirements, and availability depend on the lender, deal, and underwriting outcome.
          </p>
          <ComparisonTable
            columns={["Hard Money", "Bank Term Loan", "SBA Loan"]}
            rows={COMPARISON_ROWS}
            highlightCol="Hard Money"
          />
        </div>
      </section>

      {/* 9. Alternatives */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Alternatives to Explore</h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl">
            Hard money may not be the right fit for every situation. Depending on your business profile, timeline, and use of funds, other financing structures may be worth evaluating.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FinancingPathCard
              icon={<TermLoanIcon />}
              title="Business Term Loans"
              description="Conventional term loans from banks, credit unions, or online lenders. Longer terms and lower rates than hard money for qualifying borrowers."
              tags={["Lower cost", "Longer term", "Stronger credit"]}
              href="/business-term-loans"
            />
            <FinancingPathCard
              icon={<BuildingIcon />}
              title="Commercial Real Estate Loans"
              description="Permanent commercial mortgage financing for stabilized income-producing properties. May be a refinance exit from a hard money bridge loan."
              tags={["Permanent financing", "Stabilized assets", "Lower rate"]}
              href="/commercial-real-estate-loans"
            />
            <FinancingPathCard
              icon={<TimerIcon />}
              title="SBA Loans"
              description="SBA 7(a) and 504 programs offer longer terms and lower rates for qualifying businesses. Documentation requirements and timelines are more intensive."
              tags={["Government-backed", "Lower rate", "Longer term"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<LineIcon />}
              title="Business Line of Credit"
              description="Revolving credit access for working capital needs. Not collateral-heavy like hard money, but can provide flexible short-term liquidity for operating needs."
              tags={["Revolving", "Working capital", "Flexible draw"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<RefiIcon />}
              title="Debt Refinancing"
              description="If you currently hold a high-cost loan, refinancing into a longer-term, lower-rate structure may reduce carrying costs and extend runway."
              tags={["Reduce cost", "Extend term", "Refinance"]}
              href="/debt-refinancing"
            />
          </div>

          {/* Calculator link */}
          <div className="mt-8 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-[#0f0f0f] mb-1">Estimate your financing picture</p>
              <p className="text-xs text-[#a3a3a3] max-w-lg">
                Use the ZEO financing calculator to model loan payments, compare structures, and get a sense of costs across different scenarios. Results are estimates only and are not offers or guarantees.
              </p>
            </div>
            <Link
              href="/how-it-works"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#e5e5e5] text-sm text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f]/50 transition-colors whitespace-nowrap"
            >
              View How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <FAQ items={FAQ_ITEMS} title="Hard Money Business Loan FAQ" />

      {/* 11. CTA */}
      <CTASection
        headline="See if hard money financing may be a fit"
        subtext="Submit a brief intake and ZEO will review potential third-party lender paths for your situation. All financing is subject to underwriting and third-party provider approval."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing Options"
        secondaryHref="/financing"
      />

      {/* 12. Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-12">
        <ProductDisclaimer type="private" />
      </div>
    </main>
  );
}

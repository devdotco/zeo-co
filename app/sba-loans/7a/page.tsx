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
  title: "SBA 7(a) Loans | ZEO.co",
  description:
    "Learn how SBA 7(a) loans work, who may qualify, how lenders typically structure them, and how they compare to other commercial financing options. Subject to SBA eligibility and lender underwriting.",
  path: "/sba-loans/7a",
  keywords: [
    "SBA 7(a) loan",
    "SBA loan requirements",
    "SBA 7a loan rates",
    "small business administration loan",
    "SBA working capital loan",
    "SBA acquisition financing",
    "SBA loan eligibility",
    "government-backed business loan",
    "SBA preferred lender",
    "7a loan max amount",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <path
        d="M2.5 7L5.5 10L11.5 4"
        stroke="#0f0f0f"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <path
        d="M4 4L10 10M10 4L4 10"
        stroke="#a3a3a3"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
      <path
        d="M4 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

function EquipmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="5" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 13V7l3-3h6l3 3v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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

function CREIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="7" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 7V5h8v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 3V5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Financing Options", href: "/financing" },
  { label: "SBA 7(a) Loans" },
];

// ── Key Metrics ───────────────────────────────────────────────────────────────

const metrics = [
  {
    label: "Maximum Loan Amount",
    value: "$5M",
    note: "Standard 7(a) program; SBA Export Working Capital may differ",
    highlight: true,
  },
  {
    label: "Maximum Term — Real Estate",
    value: "25 yrs",
    note: "For owner-occupied commercial real estate purposes",
  },
  {
    label: "Maximum Term — Equipment",
    value: "10 yrs",
    note: "Or useful life of the equipment, whichever is less",
  },
  {
    label: "Maximum Term — Working Capital",
    value: "10 yrs",
    note: "General working capital and most other uses",
  },
  {
    label: "SBA Guaranty — Up To $150K",
    value: "85%",
    note: "SBA guarantees a portion of the loan to the participating lender",
  },
  {
    label: "SBA Guaranty — Over $150K",
    value: "75%",
    note: "Maximum SBA guaranty for loans above $150,000",
  },
];

// ── How It Works Steps ────────────────────────────────────────────────────────

const howItWorksSteps = [
  {
    step: "1",
    title: "Confirm SBA Eligibility",
    body: "The SBA defines eligible businesses as for-profit U.S. entities that meet its size standards, operate in an eligible industry, and have exhausted or cannot obtain reasonable financing elsewhere on comparable terms. Certain industries — gambling, speculation, political lending — are ineligible. Your lender and ZEO can help identify whether SBA programs may apply to your situation.",
  },
  {
    step: "2",
    title: "Select an SBA-Participating Lender",
    body: "SBA 7(a) loans are made by approved participating lenders — commercial banks, credit unions, and non-bank lenders with SBA authorization. Preferred Lenders (PLPs) have delegated authority to approve loans on the SBA's behalf, which can shorten the process. The lender underwrites the application; the SBA guarantees a portion of the approved loan.",
  },
  {
    step: "3",
    title: "Prepare the Application Package",
    body: "A complete SBA 7(a) application typically requires 2–3 years of business tax returns, 2–3 years of personal tax returns for each owner with 20%+ ownership, current business financial statements, a business plan or purpose-of-proceeds narrative, SBA Form 1919 (Borrower Information), SBA Form 912 (Statement of Personal History) if applicable, and collateral documentation. Acquisition transactions require the purchase agreement, business valuation, and seller financial records.",
  },
  {
    step: "4",
    title: "Lender and SBA Underwriting",
    body: "The participating lender evaluates creditworthiness, cash flow, collateral, management experience, and purpose of proceeds. For PLP lenders, the lender's approval may be sufficient. For standard-process lenders, the application is submitted to the SBA for final guaranty approval. The SBA reviews eligibility, use of proceeds, and compliance with program requirements. Total processing time commonly ranges from 30 to 90 days, depending on loan complexity and lender.",
  },
  {
    step: "5",
    title: "Closing, Funding, and Ongoing Compliance",
    body: "Upon approval, the lender issues a commitment letter and schedules closing. SBA loans require the SBA guaranty fee to be paid at closing (fee waivers are sometimes available for loans under certain thresholds — confirm with your lender). Ongoing compliance includes maintaining required insurance, not changing the material nature of the business without lender notice, and in some cases, annual financial reporting. The SBA may call the guaranty if the borrower defaults.",
  },
];

// ── Use Cases ─────────────────────────────────────────────────────────────────

const useCases = [
  {
    icon: <AcquisitionIcon />,
    title: "Business Acquisition",
    description:
      "SBA 7(a) is among the most common structures for acquiring an existing business. Lenders typically require a 10–20% equity injection from the buyer, a personal guarantee, and DSCR that demonstrates the acquired business can service the debt from its own cash flow. Seller notes may be allowed to fill part of the equity requirement, subject to conditions.",
    tags: ["Equity injection req.", "Seller notes allowed", "DSCR-driven"],
    href: "/acquisition-financing",
  },
  {
    icon: <WorkingCapitalIcon />,
    title: "Working Capital",
    description:
      "SBA 7(a) can fund operating capital needs including inventory, payroll, receivables gaps, and growth-stage expenses. For working capital purposes, terms up to 10 years may apply, which can result in lower monthly payments than shorter-term alternatives — though total interest cost over the life of the loan may be higher.",
    tags: ["Up to 10-yr term", "Operating use", "Longer repayment"],
    href: "/working-capital",
  },
  {
    icon: <EquipmentIcon />,
    title: "Equipment & Machinery",
    description:
      "Heavy equipment, manufacturing machinery, vehicles, and technology purchases may be financed through SBA 7(a), with terms up to the lesser of 10 years or the equipment's useful life. Because 7(a) is not an equipment-specific structure, businesses with straightforward equipment needs may also consider conventional equipment financing, which can sometimes close faster.",
    tags: ["Up to 10 yrs", "Any equipment type", "Useful life cap"],
    href: "/equipment-financing",
  },
  {
    icon: <CREIcon />,
    title: "Owner-Occupied Real Estate",
    description:
      "When a business owner purchases real estate in which the business occupies at least 51% (existing building) or 60% (new construction) of the space, SBA 7(a) may apply with terms up to 25 years. For purely investment or multi-tenant commercial property, the SBA 504 program is typically more relevant and is often paired with a conventional first mortgage.",
    tags: ["Up to 25-yr term", "51%+ occupancy req.", "Owner-user only"],
    href: "/commercial-real-estate-loans",
  },
  {
    icon: <DebtRefiIcon />,
    title: "Debt Refinancing",
    description:
      "Existing business debt with a maturity date or balloon payment, high rates, or terms that don't match the underlying asset's life may be eligible for refinancing via SBA 7(a). The SBA has specific eligibility rules for debt refinancing — the existing debt must generally be on unreasonable terms and must be for an SBA-eligible purpose. Refinancing to extract equity or pay off owner debt is typically not allowed.",
    tags: ["Existing debt refi", "Unreasonable terms req.", "Subject to SBA rules"],
    href: "/debt-refinancing",
  },
  {
    icon: <AcquisitionIcon />,
    title: "Franchise Financing",
    description:
      "Franchise concepts listed on the SBA's Franchise Directory are generally considered SBA-eligible without requiring separate review. For concepts not on the directory, additional documentation may be required, and approval timelines can be longer. 7(a) can fund franchise fees, buildout, equipment, and initial working capital as a combined package.",
    tags: ["SBA directory status", "Buildout + equipment", "Working capital"],
    href: "/franchise-financing",
  },
];

// ── Typical Requirements ──────────────────────────────────────────────────────

const requirements = [
  {
    category: "Credit",
    items: [
      "Personal credit score of 650 or higher is commonly required; some lenders prefer 680+",
      "No recent bankruptcies, foreclosures, or open tax liens without resolution",
      "Clean personal financial history for all owners with 20%+ equity",
      "Business credit history reviewed where available",
    ],
  },
  {
    category: "Revenue & Cash Flow",
    items: [
      "Business must demonstrate positive cash flow or a credible path to it on projected financials",
      "Debt service coverage ratio (DSCR) of 1.25x or higher is typical for most lenders",
      "Startups may be eligible with strong projections and relevant management experience",
      "Revenue thresholds vary by lender; most conventional SBA lenders want to see $250K+ in annual revenue",
    ],
  },
  {
    category: "Time in Business",
    items: [
      "2+ years in business is the standard expectation for most participating lenders",
      "Startup businesses may qualify under specific SBA programs with a detailed business plan and equity injection",
      "Acquisition transactions underwrite the acquired business's history, not solely the buyer's",
    ],
  },
  {
    category: "Equity & Collateral",
    items: [
      "SBA requires lenders to take available collateral, but insufficient collateral alone does not disqualify",
      "Personal guarantee required from all owners with 20%+ equity",
      "Equity injection of 10–30% commonly required for acquisitions and startups",
      "Real property, equipment, and business assets typically pledged when available",
    ],
  },
];

// ── Comparison Table ──────────────────────────────────────────────────────────

const comparisonColumns = ["SBA 7(a)", "Conv. Term Loan", "SBA 504", "Line of Credit"];

const comparisonRows = [
  {
    feature: "Max amount",
    "SBA 7(a)": "$5M",
    "Conv. Term Loan": "Varies",
    "SBA 504": "$5.5M+ (SBA portion)",
    "Line of Credit": "Up to $500K",
  },
  {
    feature: "Max term",
    "SBA 7(a)": "25 yrs (RE)",
    "Conv. Term Loan": "5–7 yrs",
    "SBA 504": "10–25 yrs",
    "Line of Credit": "12–24 mo",
  },
  {
    feature: "Use of proceeds",
    "SBA 7(a)": "Broad: WC, equip., RE, acq.",
    "Conv. Term Loan": "General business use",
    "SBA 504": "Fixed assets only",
    "Line of Credit": "Operating / revolving",
  },
  {
    feature: "Collateral req.",
    "SBA 7(a)": "All available assets + PG",
    "Conv. Term Loan": "Varies by lender",
    "SBA 504": "Project assets + PG",
    "Line of Credit": "Often unsecured",
  },
  {
    feature: "Typical close time",
    "SBA 7(a)": "30–90 days",
    "Conv. Term Loan": "7–21 days",
    "SBA 504": "45–90 days",
    "Line of Credit": "3–10 days",
  },
  {
    feature: "Personal guarantee",
    "SBA 7(a)": "Required (20%+ owners)",
    "Conv. Term Loan": "Often required",
    "SBA 504": "Required (20%+ owners)",
    "Line of Credit": "Varies",
  },
  {
    feature: "SBA guaranty fee",
    "SBA 7(a)": "Yes (waived on some)",
    "Conv. Term Loan": "None",
    "SBA 504": "Yes",
    "Line of Credit": "None",
  },
];

// ── Pros & Cons ───────────────────────────────────────────────────────────────

const pros = [
  "Longer repayment terms (up to 25 years for real estate) can reduce monthly payment obligations",
  "Government guaranty may allow lenders to approve applications that might not qualify for conventional financing",
  "Broad use of proceeds — working capital, equipment, real estate, acquisition, and refinancing can be combined in one loan",
  "SBA caps the maximum interest rate lenders may charge, which limits pricing relative to unregulated private credit",
  "For acquisitions, seller notes may be allowed to contribute to equity injection, reducing out-of-pocket cash",
  "Available to a wide range of industries and business structures, including startups with qualifying equity",
];

const cons = [
  "Processing time of 30–90 days is longer than conventional term loans or lines of credit",
  "Significant documentation requirements: tax returns, financials, SBA forms, and often a business plan",
  "Personal guarantee required from all owners with 20%+ stake — personal assets are at risk in default",
  "SBA guaranty fee adds to the all-in cost and must typically be paid at closing",
  "Collateral requirements can be extensive; borrowers should review what assets they are pledging",
  "Prepayment penalties may apply on loans with terms of 15 years or more",
  "SBA-ineligible industries (including some financial businesses, speculative real estate, and others) cannot use the program",
];

// ── FAQ ───────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Does ZEO make SBA loans or guarantee approval?",
    a: "No. ZEO.co is not a bank, SBA lender, or government agency. ZEO helps business owners evaluate whether SBA 7(a) may be a potential fit based on their profile and connects qualified candidates with participating lenders. All loan decisions, including approval, rate, and terms, are made solely by the participating lender and, where applicable, the SBA. Nothing on this site is a loan offer, commitment, or guarantee of any kind.",
  },
  {
    q: "What is the difference between SBA 7(a) and SBA 504?",
    a: "SBA 7(a) is the broader program and can be used for working capital, equipment, acquisitions, real estate, and debt refinancing. SBA 504 is structured specifically for fixed assets — owner-occupied real estate and long-life equipment — and is typically arranged as a first mortgage from a conventional lender plus a second debenture funded through a Certified Development Company (CDC). 504 may offer different rate characteristics than 7(a) for real estate purposes, but it cannot be used for working capital or acquisitions. The right structure depends on your use of proceeds and eligibility.",
  },
  {
    q: "What does the SBA guaranty mean for the borrower?",
    a: "The SBA guaranty is a promise to reimburse the participating lender for a portion of losses if the borrower defaults — it is a protection for the lender, not the borrower. The guaranty does not reduce the borrower's obligation to repay. If you default, the lender can pursue all collateral and personal guarantees, and the SBA may seek recovery from the lender's loss claim. From the borrower's perspective, the guaranty makes SBA loans possible in situations where the risk would otherwise prevent a lender from extending credit.",
  },
  {
    q: "How are SBA 7(a) interest rates determined?",
    a: "SBA 7(a) rates are subject to SBA maximum rate caps, which are tied to a base rate — typically the prime rate, SOFR, or the SBA's optional peg rate — plus a spread that varies based on loan size and maturity. Rates can be variable or fixed depending on the lender and loan structure. The SBA publishes current maximum spread tables, which lenders cannot exceed. Actual rates depend on the lender's pricing, the borrower's credit profile, loan size, and term. ZEO does not quote or guarantee rates; only the participating lender can provide binding rate terms.",
  },
  {
    q: "How long does it take to close an SBA 7(a) loan?",
    a: "Timelines vary significantly by loan complexity, completeness of the application package, the participating lender's processing capacity, and whether the loan is approved by a Preferred Lender (PLP) or requires SBA submission. PLP lenders can sometimes complete the process in 30–45 days for well-prepared applications. Loans requiring full SBA review may take 60–90 days or longer. Acquisition loans involving business valuations, franchise review, or environmental assessments typically run toward the longer end. Incomplete documentation is the most common cause of delay.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SBA7aPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Financing"
        title="SBA 7(a) Loans"
        subtitle="A government-backed lending program administered through participating lenders that may allow eligible small businesses to access longer terms and higher amounts than conventional financing. Subject to SBA eligibility criteria and lender underwriting."
      />

      {/* Key Metrics */}
      <section className="py-14 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Program Parameters
            </p>
            <h2 className="text-xl font-semibold text-[#0f0f0f]">
              SBA 7(a) program at a glance
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-2xl">
              These are the SBA's published program parameters as of 2025. Lender-specific underwriting, eligibility determinations, and actual terms may differ. Confirm current program rules with a participating lender.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Fit Assessment
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">
                Who SBA 7(a) may be a potential fit for
              </h2>
              <p className="text-[#737373] leading-relaxed mb-6">
                SBA 7(a) is not a universal product. It is best suited to businesses that can document profitability or a credible path to it, can tolerate a 30–90 day process, have owners prepared to provide personal guarantees, and have a specific capital need that maps to SBA-eligible use of proceeds. It is one of the most relevant structures for business acquisitions, owner-occupied real estate, and long-horizon equipment needs.
              </p>
              <ul className="space-y-3">
                {[
                  "For-profit U.S. businesses that meet SBA size standards for their industry",
                  "Businesses acquiring an existing company where DSCR from the target's cash flow can support debt service",
                  "Owner-operators purchasing or refinancing the commercial real estate their business occupies",
                  "Established businesses (typically 2+ years) with documented revenue and personal credit at or above 650",
                  "Entrepreneurs purchasing a franchise listed on the SBA Franchise Directory",
                  "Businesses carrying higher-rate or short-term debt that may be eligible for refinancing under SBA rules",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#737373]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Common Non-Fits
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">
                When SBA 7(a) may not be the right path
              </h2>
              <p className="text-[#737373] leading-relaxed mb-6">
                No product is right for every situation. SBA 7(a) involves government program eligibility requirements, documentation-intensive underwriting, and timelines that may not work for every business need.
              </p>
              <ul className="space-y-3">
                {[
                  "Businesses needing capital in days, not weeks — SBA timelines are 30–90 days at minimum",
                  "Industries the SBA defines as ineligible (certain financial businesses, gambling, speculation, political lending)",
                  "Businesses that cannot demonstrate sufficient cash flow to support debt service",
                  "Owners unwilling or unable to provide a personal guarantee",
                  "Pure investment real estate — the SBA 504 program has specific occupancy requirements",
                  "Businesses seeking to pay off personal debts, speculate, or engage in non-eligible use of proceeds",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#737373]">
                    <XIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Process
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              How the SBA 7(a) process typically works
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-2xl">
              Actual steps, requirements, and timelines vary by lender, loan purpose, and transaction complexity. This is a general overview, not a guarantee of process or outcome.
            </p>
          </div>
          <div className="space-y-4">
            {howItWorksSteps.map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6 grid sm:grid-cols-[3rem_1fr] gap-4"
              >
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#0f0f0f]/30 bg-[#f5f5f5] text-[#0f0f0f] text-xs font-semibold tabular-nums">
                    {s.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f0f0f] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Use Cases
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              Common purposes for SBA 7(a) financing
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-2xl">
              SBA 7(a) supports a broad range of eligible business purposes. Each has distinct structural considerations, eligibility nuances, and lender preferences. Subject to third-party underwriting and SBA program rules.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc) => (
              <FinancingPathCard key={uc.href} {...uc} />
            ))}
          </div>
        </div>
      </section>

      {/* Typical Requirements */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Eligibility
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              Typical underwriting criteria
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-2xl">
              These are general criteria commonly applied by SBA participating lenders. Individual lenders set their own standards within SBA program rules. Meeting these thresholds does not guarantee approval. Subject to underwriting.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {requirements.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-4">
                  {group.category}
                </p>
                <ul className="space-y-2.5">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#737373]">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Discussion */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Cost Considerations
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">
                Understanding SBA 7(a) costs
              </h2>
              <p className="text-[#737373] leading-relaxed mb-4">
                SBA 7(a) costs include the interest rate charged by the lender, the SBA guaranty fee paid at closing, and potentially other lender-specific fees. ZEO does not quote rates and cannot guarantee the terms any lender will offer. The following describes how the cost structure generally works — not what any borrower may actually pay.
              </p>
              <p className="text-[#737373] leading-relaxed mb-4">
                <span className="text-[#0f0f0f] font-medium">Interest rate:</span> The SBA caps the maximum spread lenders may charge above a base rate (prime rate, SOFR, or SBA optional peg). As of 2025, for loans over $50,000 with maturities exceeding 7 years, the maximum spread is typically 2.75%. Shorter maturities and smaller loans have different caps. Rates may be variable or fixed; variable-rate loans carry rate risk over the loan term.
              </p>
              <p className="text-[#737373] leading-relaxed mb-4">
                <span className="text-[#0f0f0f] font-medium">SBA guaranty fee:</span> Paid to the SBA at closing and typically ranges from 0.25% to 3.75% of the guaranteed portion of the loan, depending on loan size and term. The SBA periodically waives guaranty fees for loans under certain thresholds — confirm current fee schedules with your lender at the time of application.
              </p>
              <p className="text-[#737373] leading-relaxed">
                <span className="text-[#0f0f0f] font-medium">Prepayment penalty:</span> SBA 7(a) loans with terms of 15 years or more are subject to a prepayment penalty if prepaid within the first three years (5% in year 1, 3% in year 2, 1% in year 3). Loans under 15 years typically have no SBA-mandated prepayment penalty, though lenders may have their own terms.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "All-in Rate Components",
                  value: "Base rate + spread",
                  note: "Lender sets the spread; SBA caps the maximum. Actual rate subject to lender underwriting.",
                },
                {
                  label: "SBA Guaranty Fee Range",
                  value: "0.25% – 3.75%",
                  note: "Of the guaranteed loan portion. Paid at closing. Fee waivers available periodically — confirm with lender.",
                },
                {
                  label: "Prepayment Penalty Window",
                  value: "3 years",
                  note: "Applies to loans with 15+ year terms only. 5% / 3% / 1% in years 1, 2, 3 respectively.",
                },
                {
                  label: "Other Potential Fees",
                  value: "Lender-specific",
                  note: "Origination, closing costs, appraisal, environmental review, and other fees vary by lender and transaction.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-[#0f0f0f] mb-1">{item.value}</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.note}</p>
                </div>
              ))}
              <ProductDisclaimer type="sba" />
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Tradeoffs
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              Pros and cons of SBA 7(a)
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-xl">
              No financing product is right for every situation. Evaluate these tradeoffs in the context of your business, timeline, and risk tolerance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-4">
                Potential Advantages
              </p>
              <ul className="space-y-3">
                {pros.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#737373]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">
                Potential Drawbacks
              </p>
              <ul className="space-y-3">
                {cons.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#737373]">
                    <XIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              SBA 7(a) vs. other financing structures
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-2xl">
              General comparisons only. Actual terms depend on the lender, borrower profile, and transaction. Not offers or commitments. All subject to third-party underwriting.
            </p>
          </div>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
          <p className="text-[0.65rem] text-[#a3a3a3] mt-3">
            All figures are general estimates based on publicly available program information. ZEO.co does not guarantee rates, terms, or approval. Lenders set their own criteria within applicable program guidelines.
          </p>
        </div>
      </section>

      {/* Alternatives */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Alternatives
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]">
              Related financing structures to consider
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-xl">
              Depending on your use of proceeds and profile, one of these may be a more relevant fit than SBA 7(a) — or used in combination with it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                label: "SBA 504 Loans",
                href: "/sba-loans/504",
                desc: "Fixed-asset financing for owner-occupied real estate and long-life equipment. Typically structured with a first mortgage plus a CDC debenture.",
              },
              {
                label: "Business Term Loans",
                href: "/business-term-loans",
                desc: "Conventional term loans from banks and non-bank lenders. Faster to close but typically shorter terms and stricter credit requirements.",
              },
              {
                label: "Acquisition Financing",
                href: "/acquisition-financing",
                desc: "Deep dive into business acquisition capital structures, including the role of equity injection, seller notes, and DSCR analysis.",
              },
              {
                label: "Equipment Financing",
                href: "/equipment-financing",
                desc: "Asset-secured financing specific to machinery, vehicles, and technology. May close faster than SBA for straightforward equipment needs.",
              },
            ].map((alt) => (
              <Link
                key={alt.href}
                href={alt.href}
                className="group block rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5 hover:border-[#0f0f0f]/40 hover:bg-[#f5f5f5] transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-[#0f0f0f] text-sm">{alt.label}</h3>
                  <span className="text-[#a3a3a3] group-hover:text-[#333333] transition-colors flex-shrink-0 mt-0.5">
                    <ArrowRightIcon />
                  </span>
                </div>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{alt.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Link */}
      <section className="py-10 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1.5">
                Estimator Tool
              </p>
              <h3 className="font-semibold text-[#0f0f0f] mb-1">
                SBA 7(a) payment estimator
              </h3>
              <p className="text-sm text-[#737373] max-w-xl">
                Estimate potential monthly payments based on loan amount and term. Results are illustrative only — not offers or commitments. Subject to underwriting by third-party providers.
              </p>
            </div>
            <Link
              href="/calculators/sba-loan"
              className="flex-shrink-0 px-6 py-2.5 rounded-xl border border-[#e5e5e5] text-sm text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors whitespace-nowrap"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="SBA 7(a) Frequently Asked Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="See if SBA 7(a) may be a potential fit for your business"
        subtext="Submit a brief intake and ZEO will review whether SBA 7(a) or other commercial financing structures may be relevant to your situation. All financing is subject to underwriting and approval by third-party providers."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="Explore Other Financing Options"
        secondaryHref="/financing"
        variant="dark"
      />

      {/* Disclaimer */}
      <section className="pb-12 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-10">
          <ProductDisclaimer type="sba" />
        </div>
      </section>
    </>
  );
}

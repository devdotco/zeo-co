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
  title: "SBA Loans for Small Business | ZEO.co",
  description:
    "Explore SBA loan programs including 7(a) and 504 financing. Learn how SBA-backed lending works, typical requirements, use cases, and how to evaluate whether it may be a fit for your business — subject to underwriting by participating lenders.",
  path: "/sba-loans",
  keywords: [
    "SBA loans",
    "SBA 7a loan",
    "SBA 504 loan",
    "small business administration loan",
    "SBA loan requirements",
    "government-backed business loan",
    "SBA loan application",
    "SBA working capital",
    "SBA real estate loan",
    "SBA equipment financing",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2L3 5v4.5C3 13.09 5.64 15.9 9 17c3.36-1.1 6-3.91 6-7.5V5L9 2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M6.5 9l1.5 1.5L11.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="7" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 16v-4h6v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 7V4.5C5 3.12 6.79 2 9 2s4 1.12 4 2.5V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 2v1.5M9 14.5V16M16 9h-1.5M3.5 9H2M13.95 4.05l-1.06 1.06M5.11 12.89l-1.06 1.06M13.95 13.95l-1.06-1.06M5.11 5.11L4.05 4.05"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 13l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6h2.5v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2v14M12.5 5.5C12.5 4.12 10.88 3 9 3S5.5 4.12 5.5 5.5C5.5 7.5 9 8 9 8s3.5.5 3.5 2.5C12.5 11.88 10.88 13 9 13s-3.5-1.12-3.5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Financing Options", href: "/financing" },
  { label: "SBA Loans" },
];

const typicalMetrics = [
  {
    label: "7(a) Max Amount",
    value: "$5M",
    note: "Standard 7(a) program ceiling",
  },
  {
    label: "504 Max Amount",
    value: "$5.5M",
    note: "Up to $5.5M for eligible energy projects",
    highlight: true,
  },
  {
    label: "Repayment Terms",
    value: "25 yr",
    note: "Real estate; up to 10 yr for working capital",
  },
  {
    label: "Time in Business",
    value: "2+ yr",
    note: "Many lenders require 2 years of operating history",
  },
];

const comparisonColumns = ["SBA 7(a)", "SBA 504", "Conventional Term"];
const comparisonRows = [
  { feature: "Government Guarantee", "SBA 7(a)": "Up to 85%", "SBA 504": "Debenture-backed", "Conventional Term": "None" },
  { feature: "Max Loan Size", "SBA 7(a)": "$5 million", "SBA 504": "$5.5 million", "Conventional Term": "Lender-defined" },
  { feature: "Best For", "SBA 7(a)": "Working capital, acquisitions", "SBA 504": "Real estate, major equipment", "Conventional Term": "Established borrowers" },
  { feature: "Collateral Required", "SBA 7(a)": "Often required", "SBA 504": "Financed asset", "Conventional Term": "Typically required" },
  { feature: "Down Payment", "SBA 7(a)": "Varies", "SBA 504": "10–20%", "Conventional Term": "Varies" },
  { feature: "Personal Guarantee", "SBA 7(a)": "Required (20%+ owners)", "SBA 504": "Required", "Conventional Term": "Often required" },
];

const alternativePaths = [
  {
    icon: <TrendingIcon />,
    title: "Business Line of Credit",
    description:
      "A revolving credit facility that may offer faster access than SBA programs. Amounts are typically smaller but draw-and-repay flexibility can suit seasonal or cyclical businesses.",
    tags: ["Revolving", "Faster Access", "Variable Draw"],
    href: "/business-line-of-credit",
  },
  {
    icon: <DollarIcon />,
    title: "Working Capital Loans",
    description:
      "Short- to medium-term term loans focused on operational cash needs. Underwriting criteria can vary widely from lender to lender, and approval timelines tend to be shorter than SBA programs.",
    tags: ["Short-term", "Cash Flow", "Operations"],
    href: "/working-capital",
  },
  {
    icon: <GearIcon />,
    title: "Equipment Financing",
    description:
      "When the primary need is equipment, a dedicated equipment loan or lease may close faster than the SBA process. The financed asset typically serves as collateral.",
    tags: ["Equipment", "Asset-backed", "Structured"],
    href: "/equipment-financing",
  },
  {
    icon: <BuildingIcon />,
    title: "Commercial Real Estate",
    description:
      "CRE loans and bridge financing for property acquisition or refinance outside the SBA 504 structure. Useful when speed or property type falls outside standard SBA eligibility.",
    tags: ["Property", "CRE", "Bridge"],
    href: "/commercial-real-estate",
  },
];

const faqItems = [
  {
    q: "What is the difference between an SBA 7(a) and an SBA 504 loan?",
    a: "The 7(a) program is the most flexible and is commonly used for working capital, acquisitions, debt refinancing, and general business purposes. The 504 program is designed specifically for major fixed assets — primarily owner-occupied commercial real estate and large equipment — and is structured as a partnership between a Certified Development Company (CDC) and a conventional lender. If your primary need is property or heavy equipment, 504 may be evaluated; if your needs are broader, 7(a) is typically the starting point. All programs are subject to SBA eligibility rules and individual lender underwriting.",
  },
  {
    q: "What credit score is typically needed to be considered for an SBA loan?",
    a: "Most participating lenders require a personal credit score of at least 650–680, though many prefer scores above 700. Credit score is one factor among many: lenders also evaluate business credit, debt service coverage, time in business, collateral, and the overall financial picture of the business. There is no single universal minimum, and requirements vary by lender and program.",
  },
  {
    q: "How long does the SBA loan process typically take?",
    a: "Timelines vary considerably depending on the program, lender, documentation readiness, and whether the lender holds SBA Preferred Lender Program (PLP) status. Preferred lenders can approve loans in-house, which shortens the process. In general, borrowers should plan for a process that spans several weeks to a few months from initial inquiry through funding. The SBA Express program targets a 36-hour turnaround on the guarantee decision, but total time to funding still depends on the lender.",
  },
  {
    q: "What can SBA loan proceeds be used for?",
    a: "Eligible uses under the 7(a) program include working capital, purchasing equipment, acquiring or improving real estate, refinancing existing eligible debt, financing a business acquisition, and covering startup costs in certain cases. The 504 program restricts proceeds to fixed assets. Proceeds may not be used for passive real estate investment, speculation, or to finance businesses in ineligible industries. The lender and SBA rules govern permissible use at the time of application.",
  },
  {
    q: "Do I need collateral for an SBA loan?",
    a: "The SBA does not require lenders to decline applications solely due to insufficient collateral, but most participating lenders will require collateral to the extent it is available. Lenders are required to take available collateral — including business assets and, when business assets are insufficient, personal real estate — though a loan will not be declined solely because collateral is unavailable. All 20% or greater owners are typically required to provide a personal guarantee regardless of collateral position.",
  },
];

// ── Page Component ─────────────────────────────────────────────────────────────

export default function SBALoansPage() {
  return (
    <main className="bg-[#0a0d0b] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Financing"
        title="SBA Loans"
        subtitle="Government-backed loan programs through the U.S. Small Business Administration may offer longer terms and lower down payments than conventional lending — subject to eligibility, underwriting, and approval by participating lenders."
      />

      {/* 2 — Who it is for */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Who It May Suit</p>
            <h2 className="text-2xl font-semibold text-white mb-3">A potential fit for established, creditworthy businesses</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              SBA loan programs are not designed for every borrower. The application process is more involved than many alternative financing products, and the underwriting bar tends to be meaningful. Businesses that may be worth evaluating often share a set of common characteristics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                heading: "Businesses with at least two years of operating history",
                body: "Most SBA participating lenders look for an established track record. Startups and early-stage businesses may encounter more friction, though the SBA does offer some programs that accommodate newer businesses.",
              },
              {
                heading: "Owners seeking longer repayment timelines",
                body: "SBA programs can offer repayment terms of up to 10 years for working capital and equipment, and up to 25 years for real estate — longer than many conventional or alternative lenders. This may reduce monthly payment burden relative to shorter-term products.",
              },
              {
                heading: "Businesses with demonstrated revenue and cash flow",
                body: "Lenders will typically require evidence of consistent revenue and the ability to service new debt — often evaluated through Debt Service Coverage Ratio (DSCR). Businesses generating steady, documented revenue are better positioned than those with irregular income.",
              },
              {
                heading: "Owners with acceptable personal credit",
                body: "Personal credit history is a material part of SBA underwriting. Owners with strong personal credit profiles (generally 650+ FICO) and limited derogatory marks may be in a stronger position to move through the process, though requirements vary by lender.",
              },
            ].map((item) => (
              <div key={item.heading} className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border border-[#22c55e]/40 bg-[#22c55e]/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#eef2ec] mb-1.5">{item.heading}</p>
                    <p className="text-sm text-[#6b7e69] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — How it works */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Process Overview</p>
            <h2 className="text-2xl font-semibold text-white mb-3">How SBA lending generally works</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              The SBA does not lend directly to businesses. Instead, the agency provides a partial guarantee to approved participating lenders — banks, credit unions, and CDFIs — which then make and service the loans. Understanding the general flow helps set expectations.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-[19px] top-6 bottom-6 w-px bg-[#1e2620]" aria-hidden="true" />
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Confirm eligibility and select a program",
                  body: "Determine whether your business and intended use of proceeds meet SBA eligibility criteria. The 7(a) program covers the broadest range of use cases. The 504 program applies specifically to major fixed assets. SBA Express and other specialty programs have distinct rules.",
                },
                {
                  step: "2",
                  title: "Identify a participating lender",
                  body: "Not all banks offer SBA loans, and those that do may have different appetite, focus industries, and processing speed. Lenders with SBA Preferred Lender Program (PLP) status can make approval decisions in-house, which can reduce timeline. A referral source like ZEO may help identify lenders who work with your business profile.",
                },
                {
                  step: "3",
                  title: "Prepare and submit documentation",
                  body: "SBA applications require a meaningful documentation package — typically including two to three years of business and personal tax returns, year-to-date financial statements, a business plan or business overview, personal financial statements for all 20%+ owners, and documentation specific to the use of proceeds (e.g., purchase agreement, appraisal, equipment quotes).",
                },
                {
                  step: "4",
                  title: "Underwriting and SBA review",
                  body: "The lender conducts underwriting, which may include credit review, financial analysis, collateral assessment, and site visits. Depending on the lender's PLP status, the SBA may also independently review the guarantee request. This stage can take days to weeks.",
                },
                {
                  step: "5",
                  title: "Closing and funding",
                  body: "Upon approval, the borrower completes closing documentation, satisfies any conditions, and the loan funds. For real estate transactions, a formal closing with title transfer is typically involved. Closing timelines vary based on complexity.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 md:gap-6">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full border border-[#1e2620] bg-[#0a0d0b] flex items-center justify-center">
                    <span className="text-xs font-semibold text-[#22c55e] tabular-nums">{item.step}</span>
                  </div>
                  <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-4 flex-1 mb-0">
                    <p className="text-sm font-semibold text-[#eef2ec] mb-1.5">{item.title}</p>
                    <p className="text-sm text-[#6b7e69] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Common use cases */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Common Use Cases</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Where SBA financing is commonly evaluated</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              SBA programs cover a broad range of business financing needs. These are among the more common scenarios where business owners explore SBA-backed options — though each situation is subject to individual program rules and lender requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <BuildingIcon />,
                title: "Owner-Occupied Real Estate",
                body: "Purchasing or refinancing commercial property where the business occupies a majority of the space. SBA 504 is commonly evaluated for this use case, with down payments that may be lower than conventional CRE financing.",
              },
              {
                icon: <GearIcon />,
                title: "Equipment and Machinery",
                body: "Acquiring major equipment — manufacturing machinery, vehicles, restaurant equipment, medical devices — with longer repayment terms than equipment leases or shorter-term lender products may offer.",
              },
              {
                icon: <ShieldIcon />,
                title: "Business Acquisitions",
                body: "Financing the purchase of an existing business, including goodwill. SBA 7(a) is one of the more common vehicles for business acquisition financing, particularly for smaller deals where conventional lenders may be less active.",
              },
              {
                icon: <TrendingIcon />,
                title: "Working Capital",
                body: "Funding operating costs, inventory, payroll, and other day-to-day business needs. The 7(a) program can be structured for working capital purposes with repayment terms up to 10 years.",
              },
              {
                icon: <DollarIcon />,
                title: "Debt Refinancing",
                body: "Restructuring existing business debt under the SBA umbrella may lower payment burden for eligible borrowers. Not all existing debt is eligible for SBA refinance — lender and SBA rules apply.",
              },
              {
                icon: <BuildingIcon />,
                title: "Leasehold Improvements",
                body: "Renovating or improving a leased commercial space. When paired with a long-term lease, improvements may be eligible under 7(a) financing depending on lender and project specifics.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a0d0b] border border-[#1e2620] text-[#22c55e]">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-[#eef2ec] mb-2">{item.title}</p>
                <p className="text-sm text-[#6b7e69] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Typical requirements & metrics */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Typical Requirements</p>
            <h2 className="text-2xl font-semibold text-white mb-3">What lenders generally look at</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              Requirements vary by lender, program, loan size, and use of proceeds. The following represents a general picture of what participating lenders typically evaluate — it is not a guarantee of eligibility, and all financing is subject to underwriting.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {typicalMetrics.map((m) => (
              <MetricCard key={m.label} label={m.label} value={m.value} note={m.note} highlight={m.highlight} />
            ))}
          </div>

          {/* Requirements list */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Personal Credit",
                detail: "Most participating lenders look for personal FICO scores of 650 or higher, with many preferring 680–700+. Derogatory marks, recent bankruptcies, and open judgments can affect eligibility. All owners with 20% or greater equity interest are typically evaluated.",
              },
              {
                label: "Time in Business",
                detail: "The majority of SBA lenders require at least two years of operating history, verified through tax returns. Some programs and lenders work with businesses under two years, but the pool of willing lenders narrows and documentation requirements often increase.",
              },
              {
                label: "Revenue and Cash Flow",
                detail: "Lenders assess whether projected cash flow can service the new debt — typically expressed as Debt Service Coverage Ratio (DSCR) of 1.25x or higher. Revenue alone is not sufficient; consistent profitability and controllable expenses matter.",
              },
              {
                label: "Collateral",
                detail: "SBA guidelines require lenders to take available collateral, including business assets and personal real estate when business assets are insufficient. Loans will not be declined solely on collateral shortfall, but undercollateralized applications may face additional scrutiny.",
              },
              {
                label: "Personal Guarantee",
                detail: "All owners with 20% or more ownership are required to personally guarantee SBA loans. This means personal assets may be at risk in the event of default. Spouses of majority owners may also be required to guarantee depending on lender and marital property state laws.",
              },
              {
                label: "Business Documentation",
                detail: "Lenders typically require two to three years of business and personal tax returns, recent financial statements, a business plan or overview, government-issued ID, entity formation documents, and any documents relevant to the specific use of proceeds.",
              },
            ].map((req) => (
              <div key={req.label} className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#22c55e] mb-2">{req.label}</p>
                <p className="text-sm text-[#9aaa98] leading-relaxed">{req.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Cost discussion */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Understanding Cost</p>
              <h2 className="text-2xl font-semibold text-white mb-4">What determines total cost of SBA financing</h2>
              <div className="space-y-4 text-sm text-[#9aaa98] leading-relaxed">
                <p>
                  SBA loans are generally considered lower-cost than many alternative financing products, but the specific rate and total cost any borrower may encounter depends on multiple factors and cannot be predicted in advance. Interest rates on SBA 7(a) loans are negotiated between the borrower and lender, subject to SBA maximum rate caps that are pegged to the prime rate.
                </p>
                <p>
                  For 504 debentures, rates are set at the time of funding and are fixed for the life of the loan, tied to U.S. Treasury rates at the time of closing. The conventional lender portion of a 504 carries its own rate, negotiated separately.
                </p>
                <p>
                  Beyond interest, borrowers should account for SBA guarantee fees (which vary by loan size and term and are subject to change), lender origination and packaging fees, third-party costs including appraisals and environmental assessments for real estate transactions, and, for 504 loans, CDC processing fees and closing costs.
                </p>
                <p>
                  Prepayment penalties may apply on certain SBA loans — particularly 504 debentures and 7(a) loans with terms over 15 years. Review all fee disclosures and loan terms carefully before accepting any offer.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6b7e69] mb-4">Typical Cost Factors</p>
              {[
                { factor: "Base interest rate", note: "Tied to prime rate for 7(a); Treasury benchmarks for 504. Subject to SBA maximum rate caps." },
                { factor: "SBA guarantee fee", note: "Assessed on the guaranteed portion. Varies by loan size, maturity, and current SBA fee schedule." },
                { factor: "Lender origination fees", note: "Charged by the participating lender. Varies by institution and loan complexity." },
                { factor: "Third-party costs", note: "Appraisals, environmental reports, title insurance, attorney fees — particularly relevant for real estate." },
                { factor: "Prepayment penalties", note: "May apply on 504 debentures and longer-term 7(a) loans. Review terms before accepting." },
                { factor: "Personal guarantee exposure", note: "Not a fee, but a risk factor: defaults can result in personal asset pursuit under the guarantee." },
              ].map((item) => (
                <div key={item.factor} className="flex gap-3 rounded-lg border border-[#1e2620] bg-[#111512] px-4 py-3">
                  <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#22c55e]/60 flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-sm font-medium text-[#eef2ec]">{item.factor}</p>
                    <p className="text-xs text-[#6b7e69] leading-relaxed mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Pros and cons */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Tradeoffs</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Weighing SBA financing against your situation</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              SBA programs involve meaningful tradeoffs. Understanding both sides helps set realistic expectations before beginning the process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#22c55e] mb-4">Potential Advantages</p>
              <div className="space-y-3">
                {[
                  "Longer repayment terms than most conventional or alternative products, which may reduce monthly payment obligations.",
                  "Down payment requirements are often lower than conventional commercial financing for comparable loan sizes.",
                  "SBA guarantee reduces lender risk, which may expand access for businesses that would not qualify for conventional credit.",
                  "Fixed and variable rate structures available depending on program and lender, offering some flexibility.",
                  "Wide range of eligible use cases under 7(a) — including acquisitions, working capital, and real estate — in a single program.",
                  "504 fixed-rate debenture provides long-term rate certainty for real estate and equipment-heavy businesses.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 text-sm">
                    <svg className="flex-shrink-0 w-4 h-4 text-[#22c55e] mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[#9aaa98] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6b7e69] mb-4">Potential Drawbacks</p>
              <div className="space-y-3">
                {[
                  "Application and underwriting timelines are longer than most alternative financing products — often several weeks to months.",
                  "Documentation requirements are substantial. Businesses without clean, complete tax returns and financials face additional friction.",
                  "Personal guarantees are required from all 20%+ owners, creating personal liability exposure that outlasts the business in some cases.",
                  "Collateral requirements, including personal real estate, may be a concern for owners with significant home equity.",
                  "SBA guarantee fees add to total cost; for smaller loan amounts, these fees can represent a meaningful percentage of proceeds.",
                  "Prepayment restrictions on certain loans limit flexibility if the business wants to pay off debt early.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 text-sm">
                    <svg className="flex-shrink-0 w-4 h-4 text-[#6b7e69] mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <p className="text-[#9aaa98] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Comparison table */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Program Comparison</p>
            <h2 className="text-2xl font-semibold text-white mb-3">SBA programs vs. conventional term lending</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              A high-level comparison to help orient your evaluation. All terms are subject to lender underwriting, SBA program rules, and market conditions at time of application.
            </p>
          </div>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
          <p className="text-xs text-[#6b7e69] mt-4">
            This table is for informational purposes only. Actual program terms, limits, and eligibility criteria are set by the SBA and individual participating lenders. Subject to change without notice.
          </p>
        </div>
      </section>

      {/* 9 — Alternatives */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">Alternatives</p>
            <h2 className="text-2xl font-semibold text-white mb-3">Other financing paths to consider</h2>
            <p className="text-[#9aaa98] leading-relaxed">
              SBA programs are one option in a broader landscape of commercial financing. Depending on your timeline, credit profile, collateral position, and use case, other products may be worth evaluating alongside or instead of an SBA application.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {alternativePaths.map((card) => (
              <FinancingPathCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                tags={card.tags}
                href={card.href}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/financing"
              className="inline-flex items-center gap-2 text-sm text-[#9aaa98] hover:text-white transition-colors"
            >
              View all financing options
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 9b — Calculator link */}
      <section className="py-12 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-1.5">Tools</p>
              <p className="text-base font-semibold text-[#eef2ec] mb-1">Estimate your potential payment range</p>
              <p className="text-sm text-[#6b7e69]">
                Use the loan payment calculator to model different principal amounts, terms, and rate assumptions. Results are estimates only — not offers or commitments.
              </p>
            </div>
            <Link
              href="/calculators/loan-payment"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#22c55e]/40 text-[#22c55e] text-sm font-medium hover:bg-[#22c55e]/10 transition-colors whitespace-nowrap"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <FAQ
        items={faqItems}
        title="SBA Loan FAQs"
      />

      {/* 11 — CTA */}
      <CTASection
        headline="Explore whether SBA financing may be a fit"
        subtext="Submit a brief intake and ZEO will review your situation against potential financing paths — including SBA programs and alternatives. Subject to underwriting by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare All Options"
        secondaryHref="/financing"
      />

      {/* 12 — Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="sba" />
      </div>

    </main>
  );
}

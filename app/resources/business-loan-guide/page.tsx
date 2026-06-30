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
  title: "Business Loan Guide | ZEO.co",
  description:
    "A practical guide to business loan types, qualification factors, and how to evaluate financing options for your company — subject to underwriting by third-party lenders.",
  path: "/resources/business-loan-guide",
  keywords: [
    "business loan guide",
    "how to get a business loan",
    "business loan types",
    "business loan requirements",
    "small business financing",
    "commercial lending",
    "business loan comparison",
    "business financing options",
    "how business loans work",
    "business loan qualification",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 3h6a2 2 0 0 1 2 2v10H5a2 2 0 0 1-2-2V3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M11 5h4v8a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 7h3M6 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 14V9M7 14V6M11 14V10M15 14V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3.5l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L3 5v4.5C3 13.09 5.64 15.9 9 17c3.36-1.1 6-3.91 6-7.5V5L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6.5 9l1.5 1.5L11.5 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 2v1.5M9 14.5V16M16 9h-1.5M3.5 9H2M13.95 4.05l-1.06 1.06M5.11 12.89l-1.06 1.06M13.95 13.95l-1.06-1.06M5.11 5.11L4.05 4.05" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="7" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 16v-4h6v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 7V4.5C5 3.12 6.79 2 9 2s4 1.12 4 2.5V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Resources", href: "/resources" },
  { label: "Business Loan Guide" },
];

const qualificationMetrics = [
  {
    label: "Typical Min. Credit Score",
    value: "600+",
    note: "Varies significantly by product and lender",
  },
  {
    label: "Time in Business",
    value: "1–2 yr",
    note: "Some products accept less; SBA often requires 2+",
    highlight: true,
  },
  {
    label: "Annual Revenue",
    value: "$100K+",
    note: "Many lenders set a minimum revenue threshold",
  },
  {
    label: "Repayment Terms",
    value: "3 mo–25 yr",
    note: "Wide range depending on product type",
  },
];

const comparisonColumns = ["Term Loan", "Line of Credit", "SBA 7(a)", "MCA"];
const comparisonRows = [
  {
    feature: "Typical Loan Size",
    "Term Loan": "$25K–$5M+",
    "Line of Credit": "$10K–$500K",
    "SBA 7(a)": "Up to $5M",
    MCA: "$5K–$500K",
  },
  {
    feature: "Repayment Term",
    "Term Loan": "1–10 years",
    "Line of Credit": "Revolving",
    "SBA 7(a)": "Up to 25 years",
    MCA: "3–24 months",
  },
  {
    feature: "Time to Fund",
    "Term Loan": "Days–weeks",
    "Line of Credit": "Days–weeks",
    "SBA 7(a)": "Weeks–months",
    MCA: "24–72 hours",
  },
  {
    feature: "Credit Profile Needed",
    "Term Loan": "Moderate–strong",
    "Line of Credit": "Moderate–strong",
    "SBA 7(a)": "Strong",
    MCA: "Flexible",
  },
  {
    feature: "Collateral",
    "Term Loan": "Often required",
    "Line of Credit": "Sometimes",
    "SBA 7(a)": "Often required",
    MCA: "None (revenue-based)",
  },
  {
    feature: "Typical Cost Structure",
    "Term Loan": "Interest rate",
    "Line of Credit": "Interest on draws",
    "SBA 7(a)": "Interest + SBA fees",
    MCA: "Factor rate",
  },
];

const financingPaths = [
  {
    icon: <ShieldIcon />,
    title: "SBA Loans",
    description:
      "Government-backed programs through the SBA may offer longer terms and lower down payments than conventional lending for eligible businesses — subject to underwriting by participating lenders.",
    tags: ["Long Terms", "Lower Down Payment", "Government-Backed"],
    href: "/sba-loans",
  },
  {
    icon: <TrendingIcon />,
    title: "Business Line of Credit",
    description:
      "A revolving credit facility that lets you draw and repay as needed. May suit businesses with variable cash flow or recurring short-term capital needs.",
    tags: ["Revolving", "Flexible Draw", "Short-Term"],
    href: "/business-line-of-credit",
  },
  {
    icon: <GearIcon />,
    title: "Equipment Financing",
    description:
      "Dedicated financing for machinery, vehicles, and commercial equipment, where the asset typically serves as collateral. May have faster timelines than general-purpose loans.",
    tags: ["Asset-Backed", "Equipment", "Fixed Term"],
    href: "/equipment-financing",
  },
  {
    icon: <BuildingIcon />,
    title: "Commercial Real Estate",
    description:
      "Financing for owner-occupied or investment commercial property acquisition, refinance, or construction. Structures include conventional CRE, SBA 504, and bridge lending.",
    tags: ["Property", "Long-Term", "CRE"],
    href: "/commercial-real-estate-loans",
  },
];

const faqItems = [
  {
    q: "What is the difference between a business loan and a business line of credit?",
    a: "A business loan provides a lump sum of capital that is repaid on a fixed schedule over a defined term, with interest charged on the full principal. A business line of credit is a revolving facility where you draw funds as needed, repay them, and draw again — interest typically accrues only on what you've drawn. Term loans may be better suited to a defined, one-time capital need (equipment, acquisition, real estate), while lines of credit may better serve ongoing, variable needs like inventory purchasing or cash flow management. Both are subject to underwriting and lender approval.",
  },
  {
    q: "What do lenders typically look at when evaluating a business loan application?",
    a: "Most lenders evaluate a combination of factors: personal and business credit history, time in business, annual revenue, profitability and debt service coverage, available collateral, and the intended use of proceeds. The specific weight given to each factor varies by lender and product type. Alternative lenders may place more emphasis on revenue and cash flow trends; traditional banks and SBA lenders tend to place heavier weight on credit history, time in business, and financial documentation. There is no universal formula, and what qualifies a business with one lender may not qualify it with another.",
  },
  {
    q: "How much can a business borrow?",
    a: "Loan amounts vary widely based on product type, lender, and the financial profile of the business. SBA 7(a) loans may reach up to $5 million for qualifying borrowers. Conventional term loans and lines of credit span a wide range from tens of thousands to several million. Merchant cash advances and revenue-based products are often sized as a multiple of monthly revenue. Lenders assess whether the business can service the proposed debt — higher proposed amounts require stronger financial indicators. There is no single ceiling that applies to all businesses.",
  },
  {
    q: "How long does it take to get a business loan?",
    a: "Timelines depend heavily on the product type and lender. Some alternative and online lenders can approve and fund working capital loans within 24 to 72 hours. Traditional bank term loans often take one to four weeks from application to funding, assuming complete documentation. SBA loans can range from several weeks to multiple months depending on the program, lender, documentation readiness, and whether the lender holds Preferred Lender Program (PLP) status. Complex transactions involving real estate, collateral appraisals, or environmental reviews add time to any process.",
  },
  {
    q: "Do I need collateral to get a business loan?",
    a: "It depends on the product and lender. Secured loans — common in traditional bank lending and SBA programs — require collateral such as business equipment, real estate, accounts receivable, or other assets. Some online and alternative lenders offer unsecured business loans, though these tend to carry higher rates or shorter terms to compensate for the added lender risk. Merchant cash advances are typically unsecured but are repaid as a percentage of future revenue, which carries its own risk structure. Personal guarantees are commonly required by lenders even when physical collateral is not.",
  },
];

// ── Page Component ─────────────────────────────────────────────────────────────

export default function BusinessLoanGuidePage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Guide"
        title="Business Loan Guide"
        subtitle="A practical overview of how business lending works, what lenders evaluate, and how to think through the financing options available to your company — all subject to underwriting by third-party providers."
      />

      {/* 2 — What is a business loan */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">The Basics</p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">What a business loan actually is</h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  A business loan is a financing arrangement in which a lender provides capital to a business, and the business agrees to repay that capital over time — typically with interest and fees — according to a defined schedule. Unlike equity financing, debt does not require giving up ownership; but it does create a repayment obligation that persists regardless of business performance.
                </p>
                <p>
                  The term "business loan" covers a wide range of products: traditional term loans from banks, SBA-backed loans from participating lenders, lines of credit, equipment loans, invoice factoring, merchant cash advances, and more. Each product is structured differently, serves different use cases, and carries a different risk and cost profile. Understanding which category fits your situation is the starting point for any financing evaluation.
                </p>
                <p>
                  Lenders in the commercial space include national and regional banks, credit unions, Community Development Financial Institutions (CDFIs), online lenders, specialty finance companies, and private credit providers. The underwriting standards, speed, and products available vary substantially across these channels.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">Key Concepts</p>
              {[
                {
                  term: "Principal",
                  definition: "The original amount borrowed. Repayment schedules return this amount plus interest and fees to the lender over the loan term.",
                },
                {
                  term: "Interest Rate",
                  definition: "The cost of borrowing, expressed as a percentage of the outstanding principal, typically annualized. May be fixed or variable depending on the product.",
                },
                {
                  term: "Term",
                  definition: "The length of time over which the loan is repaid. Short-term products may run 3 to 18 months; long-term products can extend 10 to 25 years.",
                },
                {
                  term: "Collateral",
                  definition: "Assets pledged to secure a loan. In the event of default, the lender may have the right to seize and liquidate collateral to recover principal.",
                },
                {
                  term: "Personal Guarantee",
                  definition: "A commitment by the business owner to repay the loan from personal assets if the business cannot. Common across most commercial lending products.",
                },
                {
                  term: "Debt Service Coverage Ratio (DSCR)",
                  definition: "A measure of a business's ability to repay debt from operating cash flow. A DSCR above 1.25x is generally considered adequate by most lenders.",
                },
              ].map((item) => (
                <div key={item.term} className="rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3">
                  <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{item.term}</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Types of business loans */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Loan Types</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Common types of business financing</h2>
            <p className="text-[#737373] leading-relaxed">
              No single product works for every business or every use case. The landscape of commercial financing includes products with meaningfully different structures, timelines, costs, and qualification standards.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <DollarIcon />,
                title: "Term Loans",
                body: "A lump sum repaid over a fixed schedule with a defined interest rate. The most common form of business lending. Offered by banks, credit unions, and online lenders. Terms typically range from 1 to 10 years for general-purpose loans; longer for real estate.",
                tags: ["Fixed Schedule", "Lump Sum", "1–10+ Years"],
              },
              {
                icon: <TrendingIcon />,
                title: "Lines of Credit",
                body: "A revolving facility with a credit limit you draw from as needed and repay over time. Interest typically accrues only on drawn amounts. Often used for working capital, seasonal inventory, or cash flow gaps. Subject to periodic renewal by lender.",
                tags: ["Revolving", "Flexible", "Interest on Draws"],
              },
              {
                icon: <ShieldIcon />,
                title: "SBA Loans",
                body: "Government-backed loans through the Small Business Administration, made by participating lenders. Programs include 7(a) for broad use cases and 504 for fixed assets. Longer terms than most conventional products, but more documentation and a longer process.",
                tags: ["Government-Backed", "Long Terms", "Bank-Originated"],
              },
              {
                icon: <GearIcon />,
                title: "Equipment Financing",
                body: "Loans or leases specifically for purchasing equipment, vehicles, or machinery. The financed asset typically serves as collateral, which may result in more accessible underwriting for asset-heavy purchases. Terms often align with the expected useful life of the equipment.",
                tags: ["Asset-Backed", "Equipment", "Structured"],
              },
              {
                icon: <BookIcon />,
                title: "Invoice Factoring",
                body: "A form of accounts receivable financing in which a factoring company purchases outstanding invoices at a discount, advancing a percentage of the invoice value upfront. The business receives the remainder (minus fees) once the invoice is collected. Not technically a loan in all jurisdictions.",
                tags: ["AR-Based", "No Fixed Repayment", "B2B"],
              },
              {
                icon: <ChartIcon />,
                title: "Merchant Cash Advances",
                body: "A lump-sum advance repaid via a percentage of daily or weekly card or revenue receipts, often called a holdback or split. Typically structured as a purchase of future receivables, not a loan. Effective costs can be high. Review total repayment obligation carefully before accepting any offer.",
                tags: ["Revenue-Based", "Fast Access", "High Effective Cost"],
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.title}</p>
                <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">{item.body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Qualification factors */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Qualification</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">What lenders evaluate</h2>
            <p className="text-[#737373] leading-relaxed">
              Lender underwriting standards are not uniform, and eligibility thresholds vary by institution and product. The following factors commonly appear in commercial lending decisions across most product types — they are indicators, not guarantees.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {qualificationMetrics.map((m) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                note={m.note}
                highlight={m.highlight}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Credit History",
                detail:
                  "Lenders assess both personal and business credit. Personal FICO scores below 600 can narrow the field considerably; scores above 680 open access to more traditional lenders. Business credit history — including Dun & Bradstreet, Experian Business, and Equifax Business scores — matters for established companies. Derogatory marks, recent bankruptcies, or open judgments can affect outcomes regardless of other factors.",
              },
              {
                label: "Time in Business",
                detail:
                  "Most traditional and SBA lenders require at least two years of operating history, evidenced through tax returns. Some online and alternative lenders work with businesses that have been operating for six to twelve months. Startups without revenue history typically face limited options outside of startup-specific programs, equity financing, or personal credit products.",
              },
              {
                label: "Revenue and Cash Flow",
                detail:
                  "Revenue demonstrates that the business has a functioning customer base; cash flow demonstrates that the business generates enough after expenses to service debt. Lenders often express this as Debt Service Coverage Ratio (DSCR) — the ratio of net operating income to total debt service. Most traditional lenders look for a DSCR of at least 1.20 to 1.25x on proposed debt. Irregular or declining revenue trends create friction.",
              },
              {
                label: "Collateral",
                detail:
                  "Collateral reduces lender risk by providing a recovery mechanism if the borrower defaults. Business assets — equipment, inventory, accounts receivable, real estate — may serve as collateral. For smaller or newer businesses, lenders may require personal real estate or other personal assets. Some products, particularly online term loans and MCAs, are underwritten without collateral but typically compensate through pricing.",
              },
              {
                label: "Industry and Business Type",
                detail:
                  "Lenders consider industry risk, concentration, and their own appetite. Some industries face greater scrutiny — restaurants, retail, and startups are often viewed as higher-risk than professional services or established manufacturers. SBA programs have explicit industry restrictions. A business operating in a cyclical or volatile industry may encounter higher pricing or additional documentation requirements regardless of its financial profile.",
              },
              {
                label: "Use of Proceeds",
                detail:
                  "What the loan will be used for affects both eligibility and product fit. Equipment purchases, real estate acquisition, business acquisitions, and working capital each point toward different products with different structures. Lenders want to understand that proceeds are being used for a legitimate business purpose and that the use supports the ability to repay. Vague or speculative uses of proceeds create friction.",
              },
            ].map((req) => (
              <div key={req.label} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-2">{req.label}</p>
                <p className="text-sm text-[#737373] leading-relaxed">{req.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — How to approach the process */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Process</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">How to approach a business loan application</h2>
            <p className="text-[#737373] leading-relaxed">
              A structured approach reduces friction, improves outcomes, and helps avoid common mistakes that slow or derail applications. The steps below represent a general framework — specific requirements vary by product and lender.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-[19px] top-6 bottom-6 w-px bg-[#e5e5e5]" aria-hidden="true" />
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Clarify your capital need and timeline",
                  body: "Before evaluating lenders, define exactly what you need the capital for, how much you need, and when you need it. A business buying equipment in 90 days has different options than one needing working capital in 72 hours. Use case, amount, and timing are the three inputs that filter your product universe before any other evaluation begins.",
                },
                {
                  step: "2",
                  title: "Pull and review your credit reports",
                  body: "Check both personal credit (FICO) and business credit reports before beginning any application process. Errors are common and can be disputed in advance. Know your scores going in — surprises during underwriting create delays and can affect pricing. If your scores are below typical thresholds, consider whether improvement steps are feasible before applying.",
                },
                {
                  step: "3",
                  title: "Assemble your financial documentation",
                  body: "Most lenders require two to three years of business and personal tax returns, recent profit and loss statements and balance sheets, bank statements (typically three to six months), and a summary of current debt obligations. For SBA loans and larger transactions, additional documentation — business plans, entity documents, appraisals — will be required. Having these materials organized before applying accelerates the process.",
                },
                {
                  step: "4",
                  title: "Identify the right product and lender channel",
                  body: "Match your use case, timeline, and financial profile against the product landscape. If your situation suggests an SBA loan, begin identifying participating lenders with appetite for your industry and loan size. If you need capital quickly, online lenders and alternative channels may be more appropriate starting points than bank underwriting processes. A referral partner or marketplace can help orient your search.",
                },
                {
                  step: "5",
                  title: "Submit applications and evaluate offers carefully",
                  body: "When comparing offers, look beyond headline rate. Evaluate the total repayment amount, fees, prepayment terms, covenant requirements, personal guarantee scope, and collateral pledged. Short-term products with high effective costs may solve an immediate problem but create a longer-term obligation. All offers are subject to final underwriting conditions — a term sheet is not a commitment to lend.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 md:gap-6">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full border border-[#e5e5e5] bg-[#ffffff] flex items-center justify-center">
                    <span className="text-xs font-semibold text-[#0f0f0f] tabular-nums">{item.step}</span>
                  </div>
                  <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4 flex-1">
                    <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{item.title}</p>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Comparing loan costs */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Understanding Cost</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">How to evaluate the true cost of a business loan</h2>
            <p className="text-[#737373] leading-relaxed">
              Interest rate alone does not tell the full story of what a loan costs. Different products use different pricing conventions, and comparing across them requires looking beyond the headline number.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
              <p>
                Traditional term loans and SBA products express cost as an annual percentage rate (APR) or a stated interest rate. APR is more useful for comparison because it incorporates fees into the annualized cost. However, even APR comparisons can mislead when comparing loans with different terms — a 20% APR on a 6-month loan may cost less in total dollars than a 10% APR on a 5-year loan, depending on the principal and use case.
              </p>
              <p>
                Merchant cash advances and some revenue-based products use a factor rate rather than an interest rate. A factor rate of 1.30 means you repay $1.30 for every $1.00 advanced — the total cost is fixed regardless of how quickly you repay. There is no interest accrual in the traditional sense, but translating factor rates to APR often reveals effective costs that are significantly higher than equivalent annual rates. Always calculate the total repayment obligation in dollars before comparing.
              </p>
              <p>
                In addition to interest and factor rates, review origination fees, documentation fees, underwriting fees, draw fees (for lines of credit), prepayment penalties, and any ongoing maintenance fees. For SBA products, guarantee fees assessed by the SBA add to total cost. For factoring arrangements, review discount rates, reserve account terms, and recourse provisions carefully.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">Cost Factors to Review</p>
              {[
                { factor: "APR vs. stated rate", note: "APR incorporates fees and gives a more complete picture of annualized cost than stated interest rate alone." },
                { factor: "Total repayment amount", note: "The actual dollars you will repay over the life of the loan — the clearest apples-to-apples comparison across products." },
                { factor: "Origination and processing fees", note: "Upfront fees that reduce the effective amount received. Common across most product types." },
                { factor: "Prepayment penalties", note: "Some lenders, particularly on fixed-rate and SBA products, charge fees for early repayment. Review before accepting." },
                { factor: "Draw and maintenance fees", note: "Lines of credit may carry fees per draw, monthly maintenance fees, or annual renewal fees." },
                { factor: "Factor rate vs. APR translation", note: "For MCA and revenue-based products, convert the factor rate to an approximate APR to understand relative cost." },
              ].map((item) => (
                <div key={item.factor} className="flex gap-3 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3">
                  <div className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#0f0f0f]/60" />
                  <div>
                    <p className="text-sm font-medium text-[#0f0f0f]">{item.factor}</p>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed mt-0.5">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Comparison table */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Product Comparison</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Business loan types side by side</h2>
            <p className="text-[#737373] leading-relaxed">
              A high-level comparison to help orient your evaluation. All terms are general estimates — actual terms are set by individual lenders and subject to underwriting.
            </p>
          </div>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
          <p className="text-xs text-[#a3a3a3] mt-4">
            This table is for informational purposes only. Actual terms, amounts, and eligibility are set by individual lenders and subject to change. Not an offer or commitment to lend.
          </p>
        </div>
      </section>

      {/* 8 — Common mistakes */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">What to Avoid</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Common mistakes in business loan applications</h2>
            <p className="text-[#737373] leading-relaxed">
              The following mistakes frequently slow or derail applications, result in worse terms, or create downstream complications that are difficult to unwind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                heading: "Applying for the wrong product",
                body: "Applying for a short-term working capital loan when the need is a long-term equipment purchase — or vice versa — creates mismatches in repayment structure and cost that hurt the business. Matching product to use case before applying is more valuable than applying broadly.",
              },
              {
                heading: "Submitting incomplete or inconsistent documentation",
                body: "Inconsistencies between tax returns, bank statements, and profit and loss statements — or missing documents — are among the most common sources of delay. Lenders typically cannot proceed until the documentation package is complete. Preparing materials in advance reduces unnecessary back-and-forth.",
              },
              {
                heading: "Applying to multiple lenders simultaneously without a plan",
                body: "Multiple hard credit inquiries in a short period can affect credit scores. More importantly, accepting multiple offers or creating conflicting UCC filings can complicate future financing and create legal and contractual obligations. Understand your options before committing.",
              },
              {
                heading: "Accepting an offer without reading the full agreement",
                body: "Term sheets summarize headline terms but do not contain full loan agreement language. Reviewing only the rate and payment before signing leaves borrowers unaware of covenant requirements, default triggers, prepayment penalties, collateral scope, and guarantee terms. Have qualified counsel review any agreement before signing.",
              },
            ].map((item) => (
              <div key={item.heading} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-[#a3a3a3]" viewBox="0 0 16 16" fill="none">
                      <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0f0f0f] mb-1.5">{item.heading}</p>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — Financing paths */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Explore Options</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Financing paths worth evaluating</h2>
            <p className="text-[#737373] leading-relaxed">
              The right product depends on your business profile, use case, and timeline. These are some of the most commonly evaluated paths for established businesses — each subject to underwriting by third-party providers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {financingPaths.map((card) => (
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
              className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#0f0f0f] transition-colors"
            >
              View all financing options
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — Calculator prompt */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1.5">Tools</p>
              <p className="text-base font-semibold text-[#0f0f0f] mb-1">Model potential payment scenarios</p>
              <p className="text-sm text-[#a3a3a3]">
                Use the loan payment calculator to estimate monthly payments across different amounts, terms, and rate assumptions. Results are estimates only and are not offers or commitments.
              </p>
            </div>
            <Link
              href="/calculators/loan-payment"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#0f0f0f]/40 text-[#0f0f0f] text-sm font-medium hover:bg-[#0f0f0f]/10 transition-colors whitespace-nowrap"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* 11 — FAQ */}
      <FAQ items={faqItems} title="Business Loan FAQs" />

      {/* 12 — CTA */}
      <CTASection
        headline="Explore financing options for your business"
        subtext="Submit a brief intake and ZEO will review potential financing paths based on your situation. All financing is subject to underwriting and approval by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare All Options"
        secondaryHref="/financing"
      />

      {/* 13 — Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="general" />
      </div>

    </main>
  );
}

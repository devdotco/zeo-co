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
  title: "Private Business Loans | ZEO.co",
  description:
    "Private business loans may offer faster decisions and more flexible criteria than traditional bank financing. Learn how private lending works, who it may suit, typical requirements, costs, and how it compares to other financing options — subject to underwriting by third-party providers.",
  path: "/private-lending",
  keywords: [
    "private business loans",
    "private lending",
    "private lender business loan",
    "non-bank business financing",
    "direct lender small business",
    "private credit small business",
    "alternative business loans",
    "fast business loans",
    "private business financing",
    "non-traditional business lending",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="8" r="4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.5 10.5l5 5M13.5 12.5l-1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 5.5V9l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L2 6l7 4 7-4-7-4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M2 10l7 4 7-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="6" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6V4.5A1.5 1.5 0 017.5 3h3A1.5 1.5 0 0112 4.5V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 10h14" stroke="currentColor" strokeWidth="1.3" />
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

// ── Static data ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Financing Options", href: "/financing" },
  { label: "Private Business Loans" },
];

const typicalMetrics = [
  {
    label: "Funding Speed",
    value: "Days",
    note: "Some private lenders fund in days vs. weeks for bank loans",
  },
  {
    label: "Typical Amounts",
    value: "$50K–$5M",
    note: "Range varies widely by lender, use case, and borrower profile",
    highlight: true,
  },
  {
    label: "Min. Credit Score",
    value: "600+",
    note: "Requirements vary; some lenders prioritize revenue over credit",
  },
  {
    label: "Min. Time in Business",
    value: "1–2 yr",
    note: "Many private lenders are flexible; some will consider earlier stages",
  },
];

const comparisonColumns = ["Private Lender", "Bank Term Loan", "SBA 7(a)"];
const comparisonRows = [
  {
    feature: "Approval Speed",
    "Private Lender": "Days to 1–2 weeks",
    "Bank Term Loan": "Weeks to months",
    "SBA 7(a)": "Several weeks to months",
  },
  {
    feature: "Credit Flexibility",
    "Private Lender": "More flexible",
    "Bank Term Loan": "Strict",
    "SBA 7(a)": "Moderate",
  },
  {
    feature: "Documentation",
    "Private Lender": "Lighter package common",
    "Bank Term Loan": "Extensive",
    "SBA 7(a)": "Extensive",
  },
  {
    feature: "Typical Cost",
    "Private Lender": "Higher rates",
    "Bank Term Loan": "Lower rates",
    "SBA 7(a)": "Competitive rates",
  },
  {
    feature: "Collateral",
    "Private Lender": "Varies; some unsecured",
    "Bank Term Loan": "Often required",
    "SBA 7(a)": "Often required",
  },
  {
    feature: "Loan Terms",
    "Private Lender": "Short to medium",
    "Bank Term Loan": "Medium to long",
    "SBA 7(a)": "Up to 25 years",
  },
];

const alternativePaths = [
  {
    icon: <TrendingIcon />,
    title: "Business Line of Credit",
    description:
      "A revolving credit facility that provides ongoing access to capital without reapplying for each draw. May suit businesses with recurring or cyclical cash needs rather than a single capital event.",
    tags: ["Revolving", "Flexible Draw", "Ongoing Access"],
    href: "/business-line-of-credit",
  },
  {
    icon: <DollarIcon />,
    title: "SBA Loans",
    description:
      "Government-backed programs through the SBA may offer longer terms and lower rates for qualified borrowers. The tradeoff is a longer, more document-intensive process relative to private lenders.",
    tags: ["Government-Backed", "Longer Terms", "Lower Cost"],
    href: "/sba-loans",
  },
  {
    icon: <GearIcon />,
    title: "Equipment Financing",
    description:
      "When the primary need is equipment, a dedicated equipment loan or lease may offer better structure than a general-purpose private loan. The asset itself typically serves as collateral.",
    tags: ["Asset-Backed", "Equipment", "Structured"],
    href: "/equipment-financing",
  },
  {
    icon: <BuildingIcon />,
    title: "Business Term Loans",
    description:
      "Conventional bank and credit union term loans provide structured repayment over a fixed period. For established businesses with strong financials, these may offer more favorable pricing than private alternatives.",
    tags: ["Fixed Terms", "Bank Lenders", "Established Credit"],
    href: "/business-term-loans",
  },
];

const faqItems = [
  {
    q: "What is a private business loan and how does it differ from a bank loan?",
    a: "Private business loans are made by non-bank lenders — including private credit funds, specialty finance companies, and direct lenders — rather than traditional banks or credit unions. Because private lenders are not subject to the same regulatory framework as depository institutions, they often have more flexibility in their underwriting criteria, can make decisions faster, and may work with business profiles that fall outside conventional bank parameters. The tradeoff is that private lenders typically charge higher interest rates and fees to compensate for the additional risk they accept. All private lending is subject to underwriting by the individual lender; there is no guarantee of approval.",
  },
  {
    q: "What credit score do I need to qualify for a private business loan?",
    a: "Requirements vary considerably across private lenders. Some private lenders set a minimum personal FICO score of 600 or above, while others place more emphasis on revenue, cash flow, and collateral than on credit score alone. Businesses with credit challenges may still find lenders willing to evaluate their application, but should expect that weaker credit profiles generally result in higher rates, shorter terms, or more restrictive conditions. All financing is subject to individual lender underwriting, and there is no universal minimum score that guarantees approval.",
  },
  {
    q: "How fast can a private business loan actually fund?",
    a: "Funding timelines depend on the lender, the complexity of the loan, the documentation package provided, and the use of proceeds. Some private lenders — particularly those offering smaller, unsecured working capital products — can make a credit decision and fund within two to five business days of receiving a complete application. Larger or more complex loans, or those secured by real estate or business assets, typically take longer. Providing complete and accurate documentation upfront is one of the most reliable ways to avoid delays. No timeline is guaranteed.",
  },
  {
    q: "Are private business loans more expensive than bank loans?",
    a: "In most cases, yes. Private lenders accept a broader range of borrower profiles and move faster than banks, and they price that additional flexibility and speed into the cost of the loan. Interest rates from private lenders are generally higher than comparable bank or SBA products, and fees can also be more significant. That said, cost is not the only variable — for a business that needs capital quickly, cannot meet bank documentation standards, or has a time-sensitive opportunity, the higher cost of private financing may be justified relative to the alternative of not having capital available. Comparing all-in cost across options, including fees and total repayment, is advisable before committing.",
  },
  {
    q: "What can private business loan proceeds be used for?",
    a: "Private lenders generally impose fewer use-of-proceeds restrictions than SBA programs or conventional bank loans. Common uses include working capital and operating expenses, equipment acquisition, inventory builds, business expansion or buildout, bridge financing while a longer-term deal is arranged, acquisition financing, and refinancing of existing higher-cost debt. Specific restrictions depend on the individual lender and loan structure — always confirm acceptable use of proceeds with the lender before accepting an offer.",
  },
];

// ── Page Component ────────────────────────────────────────────────────────────

export default function PrivateLendingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Financing"
        title="Private Business Loans"
        subtitle="Private lenders operate outside the traditional bank framework, which may allow for faster decisions and more flexible underwriting criteria. Whether private lending is a fit depends on your business profile, timeline, and cost tolerance — all financing is subject to underwriting by third-party providers."
      />

      {/* 2 — Who it is for */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Who It May Suit</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Businesses that may find private lending worth evaluating</h2>
            <p className="text-[#737373] leading-relaxed">
              Private lending is not the right fit for every situation. It tends to be more relevant when speed, flexibility, or a non-standard credit profile makes conventional financing inaccessible or impractical. Below are common circumstances where business owners explore this path.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                heading: "Businesses that need capital faster than bank timelines allow",
                body: "When an acquisition window, inventory purchase, or seasonal opportunity has a hard deadline, the weeks-long process of a conventional bank application may not be workable. Private lenders often have streamlined processes that can move from application to funding in days for qualified borrowers.",
              },
              {
                heading: "Owners with credit challenges or non-standard financial profiles",
                body: "Banks and SBA programs have rigid credit standards. Private lenders tend to look at the overall picture — revenue, cash flow, collateral, and the specific situation — rather than relying solely on credit score as a gatekeeping threshold. This may expand options for businesses that have had past credit difficulties.",
              },
              {
                heading: "Businesses with revenue but limited collateral or operating history",
                body: "Some private lenders will underwrite primarily on demonstrated cash flow or contracts rather than requiring two-plus years of tax returns, substantial collateral, or a long operating track record. Earlier-stage businesses generating consistent revenue may qualify where conventional lenders would decline.",
              },
              {
                heading: "Situations where conventional options have been exhausted or declined",
                body: "For businesses that have been declined by banks or cannot meet SBA eligibility criteria, the private lending market — which includes a wide range of lender types and risk appetites — may offer paths that were not available through traditional channels.",
              },
            ].map((item) => (
              <div key={item.heading} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="flex gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border border-[#0f0f0f]/40 bg-[#0f0f0f]/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]" />
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

      {/* 3 — How it works */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Process Overview</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">How private business lending generally works</h2>
            <p className="text-[#737373] leading-relaxed">
              Private lending encompasses a wide variety of lender types — specialty finance companies, private credit funds, direct lenders, family offices, and more. While processes vary, the general flow for a business loan from a private lender tends to follow these stages.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-[19px] top-6 bottom-6 w-px bg-[#e5e5e5]" aria-hidden="true" />
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Initial inquiry and profile match",
                  body: "Private lenders vary significantly in their focus: some specialize in a particular industry, deal size, or loan type. The first step is identifying lenders whose program parameters align with your business profile, loan size, and use of proceeds. A referral source like ZEO may help surface lenders whose criteria are a reasonable match before a formal application is submitted.",
                },
                {
                  step: "2",
                  title: "Application and documentation",
                  body: "Private lenders generally require less documentation than banks or SBA programs, but requirements vary. A typical package may include recent bank statements (three to six months), business and personal tax returns, a profit and loss statement, a brief description of the business and use of funds, and identity verification. Some lenders focus heavily on bank statement revenue and may require little else for smaller amounts.",
                },
                {
                  step: "3",
                  title: "Underwriting and credit decision",
                  body: "Private lenders conduct their own underwriting, which may include reviewing cash flow, evaluating collateral, assessing the industry and business model, and pulling personal and business credit. Because private lenders set their own criteria, underwriting emphasis varies widely — one lender may weight collateral heavily, another may focus primarily on monthly revenue. Decisions can come in as little as 24–48 hours for straightforward applications, or take longer for complex deals.",
                },
                {
                  step: "4",
                  title: "Offer and term review",
                  body: "If approved, the lender issues a term sheet or loan agreement outlining the loan amount, interest rate, fees, repayment structure, collateral requirements, and any covenants or conditions. Review all terms carefully — private loan offers can vary considerably in total cost, prepayment flexibility, and default provisions. Comparing offers from multiple lenders when possible is advisable.",
                },
                {
                  step: "5",
                  title: "Closing and funding",
                  body: "After accepting an offer and completing any closing conditions — which may include finalizing collateral liens, signing agreements, and satisfying any pre-funding requirements — the lender disburses funds. For straightforward working capital loans, this step can happen quickly. Secured loans involving real estate or business assets may involve additional documentation and time.",
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

      {/* 4 — Common use cases */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Common Use Cases</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Where businesses commonly explore private lending</h2>
            <p className="text-[#737373] leading-relaxed">
              Private lending is used across a wide range of capital needs. These are among the more frequent scenarios where business owners evaluate private lenders as a potential source of financing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <DollarIcon />,
                title: "Working Capital and Operations",
                body: "Covering payroll, vendor payments, rent, and other operating costs during periods of cash flow gaps, rapid growth, or seasonal demand. Private lenders can often deploy working capital quickly relative to bank alternatives.",
              },
              {
                icon: <TrendingIcon />,
                title: "Growth and Expansion",
                body: "Opening a new location, hiring additional staff, launching a new product line, or scaling into a new market. When the opportunity is time-sensitive or the business is not yet a conventional lending candidate, private capital may bridge the gap.",
              },
              {
                icon: <BriefcaseIcon />,
                title: "Business Acquisitions",
                body: "Acquiring an existing business — including partial buyouts, management buyouts, and distressed acquisitions — where deal speed matters and conventional financing timelines or eligibility requirements are a barrier.",
              },
              {
                icon: <GearIcon />,
                title: "Equipment and Asset Purchases",
                body: "Acquiring machinery, vehicles, or other business-critical assets outside of a formal equipment finance structure. Private lenders may accommodate equipment needs within a broader working capital or term loan, particularly for smaller amounts.",
              },
              {
                icon: <LayersIcon />,
                title: "Bridge Financing",
                body: "Providing capital while longer-term, lower-cost financing is arranged — for example, bridging to SBA loan approval, a commercial real estate transaction closing, or an equity raise. Private lenders are commonly used for bridge scenarios given their speed.",
              },
              {
                icon: <KeyIcon />,
                title: "Refinancing Higher-Cost Debt",
                body: "Restructuring existing merchant cash advances, high-rate working capital loans, or credit cards into a more manageable repayment structure. Whether private refinancing reduces total cost depends on the specific terms offered and the debt being replaced.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.title}</p>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Typical requirements and metrics */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Typical Requirements</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">What private lenders generally evaluate</h2>
            <p className="text-[#737373] leading-relaxed">
              Requirements vary significantly across private lenders. Unlike banks or SBA programs, there is no standard underwriting framework. The following reflects what many private lenders commonly look at — it is not a checklist for guaranteed approval, and all financing is subject to individual lender underwriting.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {typicalMetrics.map((m) => (
              <MetricCard key={m.label} label={m.label} value={m.value} note={m.note} highlight={m.highlight} />
            ))}
          </div>

          {/* Requirements detail */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Personal Credit Score",
                detail: "Many private lenders set a floor around 600 FICO, though some will work below this if other factors are strong. Unlike conventional bank lending, credit score is often one factor among several rather than a hard gate. Lenders focused on cash-flow underwriting may weight revenue more than credit history.",
              },
              {
                label: "Monthly Revenue",
                detail: "Most private lenders require a minimum monthly revenue threshold — commonly $10,000–$25,000 per month — to establish that the business has the capacity to service new debt. Bank statements are the primary verification method. Revenue consistency over three to six months is typically more important than a single strong month.",
              },
              {
                label: "Time in Business",
                detail: "Many private lenders require six months to two years of operating history. Some lenders will work with businesses under one year if revenue is strong and documented. Startups with no operating history face a significantly narrower set of private lending options.",
              },
              {
                label: "Collateral",
                detail: "Some private loan products are unsecured and rely entirely on cash flow and credit; others require a lien on business assets, a personal guarantee, or both. Real estate-secured private loans may be available to owners with equity in commercial or investment property. Collateral requirements vary substantially by lender and loan size.",
              },
              {
                label: "Personal Guarantee",
                detail: "Most private business lenders require at least one principal to provide a personal guarantee, particularly for loans above a certain threshold. This means personal assets may be at risk in the event of default. Review personal guarantee terms carefully before accepting any financing offer.",
              },
              {
                label: "Use of Proceeds",
                detail: "Private lenders generally impose fewer restrictions on how loan proceeds are used compared to SBA programs. Working capital, expansion, equipment, and bridge purposes are broadly acceptable. Some lenders may restrict certain uses or require documentation of intended deployment. Confirm acceptable use of proceeds before accepting an offer.",
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

      {/* 6 — Cost discussion */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Understanding Cost</p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">What determines the cost of private business financing</h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Private business loans are generally priced higher than conventional bank or SBA financing. This reflects the additional risk private lenders accept — broader credit criteria, faster timelines, and less regulatory backstop — and the cost of private capital itself relative to deposit-funded bank lending.
                </p>
                <p>
                  Interest rates on private business loans vary widely depending on the lender, the borrower's credit and revenue profile, the loan structure, and prevailing market conditions. Rates may be expressed as an annual percentage rate (APR), a factor rate (common in short-term working capital products), or through other pricing structures. Understanding the total repayment amount — not just the stated rate — is important when comparing offers.
                </p>
                <p>
                  In addition to interest, private lenders may charge origination fees, administrative fees, prepayment penalties, or draw fees on line-of-credit products. These fees can meaningfully affect total cost and should be factored into any comparison with other financing options.
                </p>
                <p>
                  For short-duration loans with factor-rate pricing, the effective APR can be substantially higher than it appears at first glance. Calculating the total repayment amount and comparing it to alternatives — including the cost of not having the capital — is advisable before committing to any private financing offer.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">Cost Factors to Evaluate</p>
              {[
                {
                  factor: "Interest rate or factor rate",
                  note: "Private loans may be priced as an APR or a fixed factor rate (e.g., 1.20x on the principal). Factor rates can obscure true cost — calculate total repayment in either case.",
                },
                {
                  factor: "Origination and closing fees",
                  note: "Typically 1–5% of the loan amount, charged upfront or added to the balance. Varies considerably by lender and deal size.",
                },
                {
                  factor: "Prepayment terms",
                  note: "Some private loans carry prepayment penalties or no prepayment discount. Review whether early payoff is permissible and at what cost before accepting.",
                },
                {
                  factor: "Renewal and extension fees",
                  note: "Short-term private loans may offer renewals at additional cost. Repeated renewals can compound total borrowing cost significantly.",
                },
                {
                  factor: "Personal guarantee scope",
                  note: "Not a direct fee, but a contingent liability. Guarantees may be limited or unlimited; understand the scope of personal exposure under default scenarios.",
                },
                {
                  factor: "Total repayment vs. amount received",
                  note: "Net advance amount (after fees) vs. total repayment is the most straightforward cost measure. Compare this across offers before deciding.",
                },
              ].map((item) => (
                <div key={item.factor} className="flex gap-3 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]/60 flex-shrink-0 mt-2" />
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

      {/* 7 — Pros and cons */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Tradeoffs</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Weighing private lending against your situation</h2>
            <p className="text-[#737373] leading-relaxed">
              Private lending is a tradeoff: speed and accessibility on one side, higher cost and shorter terms on the other. Whether those tradeoffs are worth it depends entirely on your specific situation, available alternatives, and the cost of inaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-4">Potential Advantages</p>
              <div className="space-y-3">
                {[
                  "Faster decisions and funding timelines than traditional banks or SBA programs — sometimes days rather than weeks or months.",
                  "More flexible underwriting criteria that may accommodate businesses with credit challenges, limited history, or non-standard financials.",
                  "Lighter documentation requirements for many private lenders, which reduces the time and administrative burden of applying.",
                  "Fewer use-of-proceeds restrictions compared to government-backed programs, giving borrowers more flexibility in how capital is deployed.",
                  "Broader market of lender types and risk appetites, increasing the likelihood of finding a program that matches a specific situation.",
                  "Bridge financing capability — private lenders can provide short-term capital while longer-term solutions are being arranged.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 text-sm">
                    <svg className="flex-shrink-0 w-4 h-4 text-[#0f0f0f] mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-[#737373] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">Potential Drawbacks</p>
              <div className="space-y-3">
                {[
                  "Higher interest rates and fees than conventional bank or SBA financing, often significantly so — total cost of capital is a critical consideration.",
                  "Shorter repayment terms on many private products can create higher monthly payment obligations relative to longer-term bank or SBA options.",
                  "Factor-rate pricing structures common in short-term private lending can be difficult to compare to APR-based products without calculating total repayment.",
                  "Personal guarantee requirements are common, creating personal liability exposure that survives business failure in most cases.",
                  "Prepayment penalties or no-discount payoff provisions on some private loans reduce flexibility to refinance or exit early.",
                  "Lender quality and terms vary widely in the private market — due diligence on lender reputation, fee structures, and loan terms is important.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 text-sm">
                    <svg className="flex-shrink-0 w-4 h-4 text-[#a3a3a3] mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <p className="text-[#737373] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Comparison table */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">How It Compares</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Private lending vs. bank and SBA financing</h2>
            <p className="text-[#737373] leading-relaxed">
              A high-level comparison to help frame the tradeoffs. Actual terms vary considerably by lender, borrower profile, and market conditions at time of application.
            </p>
          </div>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Private Lender"
          />
          <p className="text-xs text-[#a3a3a3] mt-4">
            This table is for general informational purposes only. All terms are subject to individual lender underwriting and current market conditions. Not all products or terms are available to all borrowers.
          </p>
        </div>
      </section>

      {/* 9 — Alternatives with links */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">Alternatives</p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Other financing paths to consider alongside private lending</h2>
            <p className="text-[#737373] leading-relaxed">
              Private lending is one option in a broader landscape. Depending on your timeline, credit profile, and use case, one of the following may be a better fit — or worth evaluating in parallel before committing to private financing.
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

      {/* 9b — Calculator link */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1.5">Tools</p>
              <p className="text-base font-semibold text-[#0f0f0f] mb-1">Model potential payment scenarios</p>
              <p className="text-sm text-[#a3a3a3]">
                Use the loan payment calculator to estimate monthly obligations across different loan amounts, terms, and rate assumptions. Results are illustrative only — not offers, commitments, or guarantees.
              </p>
            </div>
            <Link
              href="/calculators/loan-payment"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#0f0f0f]/40 text-white text-sm font-medium hover:bg-[#0f0f0f]/10 transition-colors whitespace-nowrap"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <FAQ
        items={faqItems}
        title="Private Business Loan FAQs"
      />

      {/* 11 — CTA */}
      <CTASection
        headline="See if private lending may be a fit for your business"
        subtext="Submit a brief intake and ZEO will review your situation against potential financing paths — including private lenders and alternatives. Subject to underwriting by third-party providers. No commitment required."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare All Options"
        secondaryHref="/financing"
      />

      {/* 12 — Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="private" />
      </div>

    </main>
  );
}

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
  title: "Franchise Financing | ZEO.co",
  description:
    "Explore financing options for franchise purchases and expansions. Learn how franchise financing works, typical requirements, common use cases, and how to evaluate potential paths — subject to underwriting by third-party providers.",
  path: "/franchise-financing",
  keywords: [
    "franchise financing",
    "franchise loan",
    "SBA franchise loan",
    "franchise business funding",
    "franchise startup financing",
    "franchise expansion loan",
    "buying a franchise",
    "franchise fee financing",
    "SBA 7a franchise",
    "small business franchise loan",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function StoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M2 7.5l1.5-4h11L16 7.5H2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M2 7.5v7a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M6.5 15v-4h5v4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7.5c0 1.1.9 2 2 2s2-.9 2-2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M6 7.5c0 1.1.9 2 2 2s2-.9 2-2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M10 7.5c0 1.1.9 2 2 2s2-.9 2-2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M14 7.5c0 1.1.9 2 2 2s2-.9 2-2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2v14M12.5 5.5C12.5 4.12 10.88 3 9 3S5.5 4.12 5.5 5.5C5.5 7.5 9 8 9 8s3.5.5 3.5 2.5C12.5 11.88 10.88 13 9 13s-3.5-1.12-3.5-2.5"
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
      <path
        d="M3 13l4-4 3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 6h2.5v2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="7" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 16v-4h6v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M5 7V4.5C5 3.12 6.79 2 9 2s4 1.12 4 2.5V7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2L3 5v4.5C3 13.09 5.64 15.9 9 17c3.36-1.1 6-3.91 6-7.5V5L9 2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9l1.5 1.5L11.5 7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Financing Options", href: "/financing" },
  { label: "Franchise Financing" },
];

const typicalMetrics = [
  {
    label: "Common Loan Range",
    value: "$50K–$5M",
    note: "Varies widely by franchise brand and scope",
  },
  {
    label: "SBA 7(a) Max",
    value: "$5M",
    note: "Most franchise deals are well under this ceiling",
    highlight: true,
  },
  {
    label: "Typical Repayment",
    value: "7–10 yr",
    note: "For working capital and equipment; up to 25 yr for real estate",
  },
  {
    label: "Equity Injection",
    value: "10–30%",
    note: "Down payment required; varies by lender and program",
  },
];

const comparisonColumns = ["SBA 7(a)", "Conventional Term", "Franchisor Financing"];
const comparisonRows = [
  {
    feature: "Government Guarantee",
    "SBA 7(a)": "Up to 85%",
    "Conventional Term": "None",
    "Franchisor Financing": "None",
  },
  {
    feature: "Max Loan Size",
    "SBA 7(a)": "$5 million",
    "Conventional Term": "Lender-defined",
    "Franchisor Financing": "Brand-specific",
  },
  {
    feature: "Equity Injection",
    "SBA 7(a)": "10–20% typical",
    "Conventional Term": "20–30%+ typical",
    "Franchisor Financing": "Varies by brand",
  },
  {
    feature: "Brand Approval Required",
    "SBA 7(a)": "Yes (SBA Registry)",
    "Conventional Term": "Not always",
    "Franchisor Financing": "N/A",
  },
  {
    feature: "Personal Guarantee",
    "SBA 7(a)": "Required (20%+ owners)",
    "Conventional Term": "Often required",
    "Franchisor Financing": "Often required",
  },
  {
    feature: "Collateral",
    "SBA 7(a)": "Required if available",
    "Conventional Term": "Typically required",
    "Franchisor Financing": "Varies",
  },
];

const alternativePaths = [
  {
    icon: <ShieldIcon />,
    title: "SBA Loans",
    description:
      "SBA 7(a) is among the most commonly evaluated programs for franchise financing. Government-backed guarantees can reduce lender risk and may expand access for qualified franchise buyers.",
    tags: ["Government-backed", "Low down payment", "Long terms"],
    href: "/sba-loans",
  },
  {
    icon: <GearIcon />,
    title: "Equipment Financing",
    description:
      "If franchise startup costs are heavily equipment-driven — commercial kitchen equipment, vehicles, point-of-sale systems — a dedicated equipment loan or lease may close faster than SBA.",
    tags: ["Asset-backed", "Faster close", "Equipment"],
    href: "/equipment-financing",
  },
  {
    icon: <TrendingIcon />,
    title: "Business Line of Credit",
    description:
      "A revolving credit facility may complement franchise financing for working capital needs once the location is open. Not typically used to fund the franchise fee itself.",
    tags: ["Revolving", "Working capital", "Post-open"],
    href: "/business-line-of-credit",
  },
  {
    icon: <BuildingIcon />,
    title: "Commercial Real Estate",
    description:
      "When a franchise deal includes an owned or owner-leased property, a CRE or SBA 504 structure may be evaluated alongside or instead of a standard 7(a) for the real estate component.",
    tags: ["Property", "SBA 504", "Owner-occupied"],
    href: "/commercial-real-estate-loans",
  },
];

const faqItems = [
  {
    q: "Does the franchise brand need to be approved for SBA financing?",
    a: "Yes. The SBA maintains a Franchise Directory — sometimes called the SBA Franchise Registry — that lists brands pre-approved for SBA financing. If a franchise brand is not on the registry, the lender must conduct additional review of the franchise agreement to confirm compliance with SBA affiliation rules. This review adds time and creates uncertainty. Most established national brands are already listed; newer or international brands may not be. Confirm registry status early in your evaluation.",
  },
  {
    q: "Can I finance the franchise fee itself, or just the build-out and equipment?",
    a: "Under SBA 7(a), the initial franchise fee is generally an eligible use of proceeds, along with build-out, equipment, initial inventory, and working capital. Some conventional lenders are more restrictive and prefer to finance hard assets rather than intangibles like franchise fees or goodwill. The specific eligibility of each cost component depends on the lender and program — confirm with your lender what expenses are includable before preparing your request.",
  },
  {
    q: "What credit score is typically required to pursue franchise financing?",
    a: "Most SBA participating lenders look for personal FICO scores of at least 650–680, with many preferring scores above 700. Credit score is one factor among many: lenders also evaluate liquid capital, industry experience, the strength of the franchise brand, and the overall financial picture. For conventional lenders, requirements vary. There is no universal minimum; your profile is evaluated holistically by each lender.",
  },
  {
    q: "Do I need prior franchise or industry experience to qualify?",
    a: "Not necessarily, but relevant experience is generally a positive factor in underwriting. Many franchise lenders view industry or management experience favorably because it reduces execution risk. Some franchise brands require their own validation of buyer backgrounds as part of the franchisee approval process, independent of the financing application. Where experience is limited, a detailed business plan and strong financial profile can help support the application.",
  },
  {
    q: "How long does franchise financing typically take to close?",
    a: "Timelines vary considerably by lender, program, and documentation readiness. SBA 7(a) deals through Preferred Lender Program (PLP) lenders can move faster than non-PLP lenders, but the total process — from initial inquiry through funded closing — typically spans several weeks to a few months. Build-out timelines often run parallel to financing. Starting the financing process early in the franchise discovery and approval process is advisable.",
  },
];

// ── Page Component ─────────────────────────────────────────────────────────────

export default function FranchiseFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Financing"
        title="Franchise Financing"
        subtitle="Explore financing options for purchasing, building out, or expanding a franchise location. Franchise financing draws from several lending products — most commonly SBA 7(a) — and is subject to lender underwriting, brand approval, and eligibility criteria."
      />

      {/* 2 — Who it is for */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Who It May Suit
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              A potential fit for aspiring and existing franchise operators
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Franchise financing is not a single product — it describes a category of lending applied to franchise-specific situations. The borrowers who tend to explore it share a few common characteristics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                heading: "First-time franchise buyers entering a proven brand",
                body: "Individuals purchasing their first franchise location often need to finance the initial franchise fee, build-out costs, equipment, and early working capital. SBA programs are commonly evaluated here because they may accommodate lower down payments than conventional financing and cover a wide range of startup costs.",
              },
              {
                heading: "Multi-unit operators expanding their footprint",
                body: "Existing franchisees opening additional locations may have a track record that supports lender review — including operating history, demonstrated unit economics, and brand tenure. Lenders generally view expansion of an established operator differently from a first-time acquisition.",
              },
              {
                heading: "Buyers with liquid capital but limited operating history",
                body: "Franchise financing is sometimes evaluated by buyers with meaningful personal liquidity — sufficient for the required equity injection — but without the multi-year business history that conventional lenders typically require. The franchise brand's established system can partially offset the absence of personal operating history in some lenders' underwriting.",
              },
              {
                heading: "Operators acquiring an existing franchise resale",
                body: "Purchasing a resale franchise — an existing location from a current franchisee — involves different underwriting considerations than a new unit. Historical financial performance of the location is typically available, which lenders may view favorably. Acquisition deals may be structured similarly to business acquisition financing.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
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
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Process Overview
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              How franchise financing generally works
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Franchise financing involves parallel tracks: the franchisor's own approval process and the lender's underwriting process. These timelines often run concurrently, and coordination between them matters. Here is how the overall arc typically unfolds.
            </p>
          </div>
          <div className="relative">
            <div
              className="hidden md:block absolute left-[19px] top-6 bottom-6 w-px bg-[#e5e5e5]"
              aria-hidden="true"
            />
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Select a franchise brand and confirm SBA registry status",
                  body: "Before engaging lenders, confirm whether your target franchise brand appears on the SBA Franchise Directory. Brands on the registry have pre-cleared franchise agreement language for SBA financing, which streamlines lender review. For brands not on the registry, lenders must conduct their own affiliation analysis — a step that adds time and introduces uncertainty.",
                },
                {
                  step: "2",
                  title: "Assess your equity injection and total startup costs",
                  body: "Franchise financing generally requires the borrower to inject a meaningful portion of total project costs — often 10–30% — from personal liquid assets. Understanding total startup costs (franchise fee, build-out, equipment, initial inventory, working capital reserves) is necessary before approaching lenders. Lenders will want to see that the injection is coming from eligible sources, typically documented savings or retirement accounts.",
                },
                {
                  step: "3",
                  title: "Identify lenders with franchise experience",
                  body: "Not all SBA lenders are equally experienced with franchise deals. Lenders familiar with franchise financing understand the Franchise Directory, know how to underwrite brand-specific risk, and are accustomed to coordinating with franchisor timelines. A referral source or broker familiar with franchise lending can help identify candidates. Preferred Lender Program (PLP) lenders can make approval decisions in-house, which typically shortens timelines.",
                },
                {
                  step: "4",
                  title: "Prepare documentation and submit application",
                  body: "Franchise financing applications typically require personal and business tax returns (if applicable), personal financial statements for all 20%+ owners, a business plan or franchise-specific projections, a copy of the Franchise Disclosure Document (FDD) and signed franchise agreement, and documentation of the equity injection source. For resale deals, historical financials of the acquired location are also required.",
                },
                {
                  step: "5",
                  title: "Underwriting, franchisor approval, and closing",
                  body: "The lender underwrites the application while the franchisee completes the franchisor's approval process. Both tracks must conclude before closing. Closing involves loan documents, franchise agreement execution, lease or real estate closing if applicable, and satisfaction of any lender conditions. Once closed and funded, the franchise build-out or acquisition can proceed.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 md:gap-6">
                  <div className="relative flex-shrink-0 w-10 h-10 rounded-full border border-[#e5e5e5] bg-[#ffffff] flex items-center justify-center">
                    <span className="text-xs font-semibold text-[#0f0f0f] tabular-nums">
                      {item.step}
                    </span>
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
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Common Use Cases
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Where franchise financing is commonly evaluated
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Franchise financing is not limited to initial purchases. Several situations regularly prompt business owners to explore lending options in the franchise context.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <StoreIcon />,
                title: "New Franchise Unit Purchase",
                body: "Financing the initial franchise fee, build-out, equipment, and pre-opening working capital for a new location. SBA 7(a) is commonly evaluated and can cover a range of startup costs in a single facility.",
              },
              {
                icon: <TrendingIcon />,
                title: "Multi-Unit Expansion",
                body: "Existing franchisees opening their second, third, or additional locations. A track record of operating the brand may support lender review. Multi-unit development agreements typically require expansion within a defined timeline.",
              },
              {
                icon: <DollarIcon />,
                title: "Franchise Resale Acquisition",
                body: "Purchasing an existing location from a current franchisee. Historical unit financials are typically available, and lenders often treat this more like a business acquisition than a startup — which can affect how underwriting is conducted.",
              },
              {
                icon: <GearIcon />,
                title: "Build-Out and Renovation",
                body: "Capital-intensive build-outs for new locations, or significant renovations required by the franchisor as part of a remodel or brand refresh program. These costs can be substantial and may warrant financing independent of, or alongside, any initial franchise fee.",
              },
              {
                icon: <BuildingIcon />,
                title: "Real Estate Acquisition",
                body: "Franchisees who intend to own the property housing their location — rather than leasing — may combine franchise financing with a commercial real estate or SBA 504 structure. Owner-occupied properties with long-term leases can also support financing in certain structures.",
              },
              {
                icon: <ShieldIcon />,
                title: "Working Capital Post-Opening",
                body: "Covering operating expenses through the ramp-up period after opening, before the location reaches sustainable cash flow. Some franchise loans include a working capital component; in other cases, a separate line of credit or term loan may be evaluated.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
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

      {/* 5 — Typical requirements & metrics */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Typical Requirements
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What lenders generally look at
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Requirements vary by lender, program, loan size, and whether the deal is a new unit, resale, or expansion. The following reflects general patterns across franchise financing — not a guarantee of eligibility. All financing is subject to underwriting.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {typicalMetrics.map((m) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                note={m.note}
                highlight={m.highlight}
              />
            ))}
          </div>

          {/* Requirements list */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Personal Credit",
                detail:
                  "Most participating lenders look for personal FICO scores of 650 or higher, with many preferring 680–700+. All owners with 20% or greater equity interest are typically evaluated. Derogatory marks, recent bankruptcies, and unresolved judgments can affect eligibility. Credit score is one factor; the overall profile matters.",
              },
              {
                label: "Liquid Capital / Equity Injection",
                detail:
                  "Lenders require borrowers to inject a portion of project costs from personal liquid assets — typically 10–20% under SBA programs, potentially more under conventional lending. Funds must generally come from eligible documented sources: savings, brokerage accounts, or retirement funds via rollover structures. Gifts and borrowed equity injection funds may be restricted.",
              },
              {
                label: "Franchise Brand Approval",
                detail:
                  "The lender must confirm the franchise brand is eligible for SBA financing, either through the SBA Franchise Directory or through independent franchise agreement review. Additionally, the franchisor must approve the buyer as a franchisee — lender approval and franchisor approval are separate processes that must both be satisfied.",
              },
              {
                label: "Business Plan and Projections",
                detail:
                  "For new units without operating history, lenders typically require a business plan including market analysis, location rationale, operational overview, and financial projections. For resales or expansions, historical unit financials may substitute for or supplement projections. Franchisor-provided data on unit economics can support the plan.",
              },
              {
                label: "Personal Guarantee",
                detail:
                  "All owners with 20% or more ownership are required to personally guarantee SBA loans. This means personal assets may be at risk in the event of default. The personal guarantee requirement is standard and generally non-negotiable under SBA programs.",
              },
              {
                label: "Documentation Package",
                detail:
                  "Expect to provide two to three years of personal (and business, if applicable) tax returns, a personal financial statement for each 20%+ owner, a copy of the Franchise Disclosure Document (FDD) and signed or draft franchise agreement, the proposed lease or real estate purchase agreement, and documentation of the equity injection source.",
              },
            ].map((req) => (
              <div
                key={req.label}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-2">
                  {req.label}
                </p>
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
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Understanding Cost
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                What determines the total cost of franchise financing
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  The total cost of franchise financing depends on the program, lender, loan size, term, and your credit profile — among other factors. No specific rate or cost can be predicted in advance, and any figures you see in advertising or comparison tools are illustrative only. Actual terms are determined through underwriting.
                </p>
                <p>
                  For SBA 7(a) franchise loans, interest rates are negotiated between the borrower and lender, subject to SBA maximum rate caps pegged to the prime rate. Rates may be fixed or variable depending on lender and structure. For longer-term real estate or equipment components financed through SBA 504, the debenture rate is fixed at the time of closing based on Treasury benchmarks.
                </p>
                <p>
                  Beyond the interest rate, borrowers should account for SBA guarantee fees — which vary by loan amount, maturity, and the current SBA fee schedule — lender origination and packaging fees, third-party costs such as appraisals and environmental reports for real estate, and any prepayment penalties applicable to the specific loan structure.
                </p>
                <p>
                  In addition to financing costs, total franchise investment includes the franchise fee itself, ongoing royalties and marketing fund contributions, and potential remodel or refresh obligations over the franchise term. These are obligations to the franchisor, not the lender, but they affect the business's ability to service debt and should be incorporated into any cash flow analysis.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">
                Typical Cost Factors
              </p>
              {[
                {
                  factor: "Base interest rate",
                  note: "Tied to prime rate for SBA 7(a); subject to SBA maximum rate caps. Varies by lender and loan term.",
                },
                {
                  factor: "SBA guarantee fee",
                  note: "Assessed on the guaranteed portion. Varies by loan size, maturity, and current SBA fee schedule. Subject to change.",
                },
                {
                  factor: "Lender origination and packaging fees",
                  note: "Charged by the participating lender. Varies by institution, loan complexity, and whether a third-party packager is involved.",
                },
                {
                  factor: "Third-party costs",
                  note: "Appraisals, environmental reports, title insurance, attorney fees — particularly relevant when real estate is part of the deal.",
                },
                {
                  factor: "Prepayment penalties",
                  note: "May apply on SBA loans with terms over 15 years and on 504 debentures. Review loan terms carefully before accepting.",
                },
                {
                  factor: "Ongoing franchise obligations",
                  note: "Royalties, marketing fund contributions, and potential technology or remodel fees are franchisor obligations that affect net cash flow available for debt service.",
                },
              ].map((item) => (
                <div
                  key={item.factor}
                  className="flex gap-3 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3"
                >
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
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Tradeoffs
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Weighing franchise financing against your situation
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Franchise financing involves meaningful tradeoffs specific to this category of borrower. Understanding both sides helps set expectations before beginning the process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-4">
                Potential Advantages
              </p>
              <div className="space-y-3">
                {[
                  "Established franchise brands with SBA Directory listing may face less underwriting friction than independent startup businesses.",
                  "SBA 7(a) can finance a broad range of startup costs — including the franchise fee, build-out, equipment, and working capital — in a single loan.",
                  "Longer repayment terms than most alternative products may reduce monthly cash flow pressure during the ramp-up period.",
                  "Franchise brands with demonstrated unit economics give lenders more data to underwrite, which can support the application even for first-time operators.",
                  "Lower equity injection requirements under SBA programs may allow buyers to preserve more personal liquidity for operational needs.",
                  "SBA guarantee reduces lender risk, potentially expanding access for buyers who might not qualify for comparable conventional financing.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 text-sm">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#0f0f0f] mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-[#737373] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">
                Potential Drawbacks
              </p>
              <div className="space-y-3">
                {[
                  "Franchise financing involves two approval processes — lender underwriting and franchisor approval — which must both complete before closing.",
                  "Brands not on the SBA Franchise Directory require additional legal review of the franchise agreement, adding time and complexity.",
                  "Personal guarantees are required from all 20%+ owners, creating personal asset exposure that does not automatically terminate with the franchise.",
                  "SBA guarantee fees, lender origination fees, and third-party costs add to total project cost and reduce net proceeds relative to the stated loan amount.",
                  "Ongoing franchise obligations — royalties, marketing fund contributions, potential remodel requirements — create fixed cost obligations that affect debt service capacity.",
                  "Resale deals require careful review of the existing location's financial history; undisclosed liabilities or declining unit trends can complicate underwriting.",
                ].map((point) => (
                  <div key={point} className="flex gap-3 text-sm">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#a3a3a3] mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 4l8 8M12 4l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
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
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Program Comparison
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              SBA 7(a) vs. conventional vs. franchisor financing
            </h2>
            <p className="text-[#737373] leading-relaxed">
              A high-level comparison across the most common franchise financing structures. All terms are subject to lender underwriting, SBA program rules, franchisor policies, and market conditions at time of application.
            </p>
          </div>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
          <p className="text-xs text-[#a3a3a3] mt-4">
            This table is for informational purposes only. Actual program terms, limits, and eligibility criteria are set by the SBA, individual participating lenders, and franchise brands. Subject to change without notice.
          </p>
        </div>
      </section>

      {/* 9 — Alternatives */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Alternatives
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Other financing paths to consider
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Franchise financing most commonly involves SBA 7(a), but other products may complement or — in some cases — replace it depending on the specific deal structure, asset mix, and borrower profile.
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
              className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-white transition-colors"
            >
              View all financing options
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — Calculator link */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1.5">
                Tools
              </p>
              <p className="text-base font-semibold text-[#0f0f0f] mb-1">
                Model potential loan payments before you apply
              </p>
              <p className="text-sm text-[#a3a3a3]">
                Use the loan payment calculator to estimate monthly obligations at different principal amounts, terms, and rate assumptions. Results are estimates only — not offers, commitments, or guarantees.
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
      <FAQ items={faqItems} title="Franchise Financing FAQs" />

      {/* 12 — CTA */}
      <CTASection
        headline="Explore whether franchise financing may be a fit"
        subtext="Submit a brief intake and ZEO will review your situation against potential financing paths for your franchise purchase or expansion. Subject to underwriting by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare All Options"
        secondaryHref="/financing"
      />

      {/* 13 — Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="sba" />
      </div>

    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Franchise Financing | ZEO.co",
  description:
    "Explore financing options for franchise buyers and existing franchisees. Learn how prospective and current franchise owners may qualify for SBA loans, equipment financing, working capital lines, and more — subject to underwriting by third-party providers.",
  path: "/industries/franchises",
  keywords: [
    "franchise financing",
    "SBA loan franchise",
    "franchise business loan",
    "buy a franchise financing",
    "franchise equipment financing",
    "franchisee working capital",
    "SBA 7a franchise",
    "franchise acquisition loan",
    "franchise startup loan",
    "multi-unit franchise financing",
  ],
});

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Industries", href: "/industries" },
  { label: "Franchise Financing" },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function SBAIcon() {
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

function EquipmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="5" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 14v2M12 14v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 9h2M9 9h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M5 11.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 5v1.5M9 11.5V13M6.5 7.5C6.5 6.67 7.17 6 8 6h2c.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5H8C7.17 9 6.5 9.67 6.5 10.5S7.17 12 8 12h2c.83 0 1.5-.67 1.5-1.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MultiUnitIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="8" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="7" y="5" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="12" y="2" width="4" height="13" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const typicalMetrics = [
  {
    label: "SBA 7(a) Max",
    value: "$5M",
    note: "Per loan for franchise acquisition, build-out, or expansion",
    highlight: true,
  },
  {
    label: "Typical Equity Injection",
    value: "10–30%",
    note: "Of total project cost from personal liquid assets",
  },
  {
    label: "Min. Credit Score",
    value: "650+",
    note: "Most SBA lenders require 650; stronger profiles see better terms",
  },
  {
    label: "Franchise Directory",
    value: "4,000+",
    note: "Brands on the SBA Franchise Directory for streamlined review",
  },
];

const financingPaths = [
  {
    icon: <SBAIcon />,
    title: "SBA 7(a) Loans",
    description:
      "The most commonly used program for franchise acquisitions and new-unit build-outs. Brands listed on the SBA Franchise Directory benefit from streamlined eligibility review, potentially reducing approval timelines. Government backing may allow longer repayment terms and lower equity injection than conventional loans. Subject to SBA eligibility and lender underwriting.",
    tags: ["Acquisition", "New unit build-out", "Up to $5M", "10–25 year terms"],
    href: "/sba-loans",
    highlight: true,
  },
  {
    icon: <EquipmentIcon />,
    title: "Equipment Financing",
    description:
      "Many franchise concepts require specialized equipment — commercial kitchen build-outs, fitness equipment, service vehicles, or branded fixtures specified by the franchisor. Equipment loans use the financed assets as collateral and may allow faster approvals than unsecured lending, often independent of a broader acquisition loan.",
    tags: ["Asset-backed", "Franchisor-spec equipment", "Faster close"],
    href: "/equipment-financing",
  },
  {
    icon: <WorkingCapitalIcon />,
    title: "Working Capital",
    description:
      "New franchisees typically experience a ramp-up period before reaching steady-state revenue. A working capital line or term loan may help bridge payroll, inventory, royalty payments, and marketing fees during that early phase. Existing franchisees also evaluate working capital for seasonal gaps and remodel requirements.",
    tags: ["Ramp-up phase", "Royalties", "Seasonal", "Revolving"],
    href: "/working-capital",
  },
  {
    icon: <MultiUnitIcon />,
    title: "Multi-Unit Expansion",
    description:
      "Franchisees with one or more performing units who hold Area Development Agreements or wish to acquire additional territories may explore expansion financing structures. Lenders often underwrite on the combined portfolio cash flow and the owner's track record operating within the system. Subject to lender underwriting and franchisor approval.",
    tags: ["ADA holders", "Portfolio lending", "Expansion"],
    href: "/sba-loans",
  },
];

const challenges = [
  {
    heading: "Franchise fees and equity injection requirements",
    body: "The total cost to open a franchise unit includes the franchise fee, build-out, equipment, initial inventory, working capital reserve, and any required deposits — often running from $150,000 to well over $1M depending on the brand. Lenders typically require 10–30% of this total as a personal equity injection from liquid sources. Prospective franchisees who underestimate total project costs or lack sufficient documented liquidity frequently encounter friction in underwriting.",
  },
  {
    heading: "Royalties and system costs reduce free cash flow",
    body: "Franchisees pay ongoing royalties, national advertising contributions, technology fees, and sometimes mandatory supply chain markups on top of standard operating costs. These system obligations reduce the net operating income available for debt service, which tightens the DSCR calculation that lenders apply. A unit that appears profitable on a topline basis may show thinner coverage once franchise obligations are fully reflected.",
  },
  {
    heading: "Brand restrictions on build-out and vendors",
    body: "Franchisors typically mandate specific equipment, fixtures, technology systems, and approved suppliers. This limits the franchisee's ability to shop for cost savings and can make project budgets less flexible. Lenders underwriting equipment or construction loans need documentation that the build-out scope is franchisor-compliant — deviations can create issues at both approval and inspection stages.",
  },
  {
    heading: "Transfer and approval requirements on resales",
    body: "When financing the acquisition of an existing franchise unit, the transaction must clear the franchisor's transfer approval process in addition to lender underwriting. Transfer fees, franchisor training requirements, and approval timelines vary significantly by brand and can add weeks or months to a closing timeline. Buyers should understand franchisor requirements before committing to a purchase agreement timeline.",
  },
];

const requirements = [
  {
    label: "Franchise Agreement",
    detail:
      "Lenders financing a new or resale franchise unit will require a current Franchise Disclosure Document (FDD) and the executed or proposed Franchise Agreement. For brands on the SBA Franchise Directory, this documentation supports streamlined SBA eligibility determination. For unlisted brands, lenders and the SBA review the FDD to assess whether the franchisee is truly an independent business operator.",
  },
  {
    label: "Equity Injection Documentation",
    detail:
      "The SBA and most conventional lenders require that the borrower's equity injection come from liquid personal assets — verified bank or investment account statements. Borrowed funds, gifts, or equity pledged from illiquid assets typically do not qualify. The injection must be documented and may need to be verified at or before closing. Injection amounts depend on loan size, brand strength, and lender policy.",
  },
  {
    label: "Personal Credit and Financial Profile",
    detail:
      "All owners with 20% or more equity interest are evaluated. Most SBA lenders look for personal FICO scores of 650 or above; scores above 700 carry more weight, particularly for startup franchises with no operating history. Outstanding judgments, recent bankruptcies, or significant derogatory history require explanation and can complicate or delay approval. Personal financial statements are a standard part of the application package.",
  },
  {
    label: "Relevant Experience",
    detail:
      "Lenders and franchisors both evaluate whether the buyer has the management, industry, or operational background to run the specific concept. A buyer with prior ownership, relevant industry experience, or a strong corporate management background is underwritten more favorably than a first-time operator with no adjacent experience. For existing franchisees seeking expansion, a track record within the system is typically the most important credentialing factor.",
  },
  {
    label: "Unit-Level Financials (Resales)",
    detail:
      "For the acquisition of an existing franchise unit, lenders will underwrite on the unit's actual historical performance — typically two to three years of business tax returns, monthly bank statements, and franchisor-provided sales reports. Buyers should request access to these records during due diligence. Units with declining sales trends, deferred maintenance, or unresolved franchisor compliance issues require explanation and may affect financing terms.",
  },
  {
    label: "Total Project Cost and Use of Funds",
    detail:
      "Lenders need a clear, itemized picture of total project costs — franchise fee, real estate or leasehold improvements, equipment, signage, initial inventory, working capital reserve, and soft costs. Vague or underestimated project budgets create underwriting friction. For new builds, contractor estimates and a signed lease or letter of intent are typically required before a loan can be fully underwritten.",
  },
];

const comparisonColumns = ["New Unit (Build-Out)", "Resale Acquisition", "Multi-Unit Expansion"];

const comparisonRows = [
  {
    feature: "Typical financing program",
    "New Unit (Build-Out)": "SBA 7(a)",
    "Resale Acquisition": "SBA 7(a) or conventional",
    "Multi-Unit Expansion": "SBA 7(a) or portfolio loan",
  },
  {
    feature: "Historical financials available",
    "New Unit (Build-Out)": "No — projections only",
    "Resale Acquisition": "Yes — unit-level history",
    "Multi-Unit Expansion": "Yes — existing units",
  },
  {
    feature: "Franchisor approval required",
    "New Unit (Build-Out)": "Yes — new franchisee",
    "Resale Acquisition": "Yes — transfer approval",
    "Multi-Unit Expansion": "Yes — ADA or new territory",
  },
  {
    feature: "Equity injection (typical)",
    "New Unit (Build-Out)": "20–30% of total project",
    "Resale Acquisition": "10–20% of purchase price",
    "Multi-Unit Expansion": "Varies by lender and portfolio",
  },
  {
    feature: "Primary underwriting basis",
    "New Unit (Build-Out)": "Owner profile + brand strength",
    "Resale Acquisition": "Unit cash flow + owner profile",
    "Multi-Unit Expansion": "Portfolio DSCR + track record",
  },
];

const faqItems = [
  {
    q: "Does my franchise brand need to be on the SBA Franchise Directory?",
    a: "Being on the SBA Franchise Directory speeds up the process but is not a strict requirement for SBA financing. Brands on the Directory have pre-reviewed their agreements for SBA eligibility, which eliminates a step in the approval process. For brands not on the Directory, the SBA and lender must independently review the Franchise Agreement to confirm the franchisee meets the independence test for SBA eligibility — this can add time and, in some cases, result in a finding that the arrangement does not qualify. If your target brand is not listed, it is worth asking the franchisor about Directory status before committing to the SBA loan path.",
  },
  {
    q: "Can I use an SBA loan to buy an existing franchise unit from another franchisee?",
    a: "Yes. SBA 7(a) loans are commonly used to finance franchise resale transactions. The lender will underwrite the purchase on the unit's historical financial performance — typically two to three years of tax returns and bank statements — in addition to evaluating the buyer's personal financial profile. The transaction must also clear the franchisor's transfer approval process, which occurs in parallel with lender underwriting. Buyers should factor the franchisor's timeline into any purchase agreement closing date.",
  },
  {
    q: "What counts as an acceptable equity injection?",
    a: "The SBA and most lenders require the equity injection to come from the borrower's own liquid assets — documented through bank statements, brokerage account statements, or retirement account statements. Borrowed funds, such as a personal loan or home equity line taken specifically to create the injection, are generally not acceptable unless disclosed and underwritten as part of the overall financing package. Gifts may be acceptable in some cases but require documentation of the donor's financial capacity and a statement that no repayment is expected. Equity from the sale of another asset — such as a home or business — can qualify if the proceeds are liquid and documented.",
  },
  {
    q: "How does a franchisee's royalty obligation affect loan qualification?",
    a: "Royalty payments, advertising fund contributions, and other ongoing franchise fees reduce the net operating income available to service debt. Lenders calculate debt service coverage ratio (DSCR) after all operating expenses, which includes system fees. A unit that appears profitable at the gross margin level may show tighter coverage once royalties are fully accounted for. For prospective franchisees evaluating a new unit with projections rather than historical financials, conservative royalty assumptions — drawn from the FDD's Item 6 — are important to build into the financial model.",
  },
  {
    q: "Are there financing options for franchisees who want to open additional locations?",
    a: "Yes. Franchisees with one or more operating units who seek to open additional locations — whether under an Area Development Agreement, through territory acquisition, or organically — may evaluate several paths. SBA 7(a) can finance individual unit acquisitions or build-outs on a per-unit basis. Some lenders offer portfolio-level underwriting for operators with multiple units, assessing aggregate cash flow rather than unit-by-unit. The strength of the operator's track record within the brand, the performance of existing units, and the overall financial profile all factor into expansion underwriting. Subject to underwriting and approval by third-party providers.",
  },
];

const strengthFactors = [
  {
    factor: "Brand listed on SBA Franchise Directory",
    note: "Streamlines the SBA eligibility review step and can reduce approval timelines for lenders familiar with the brand.",
  },
  {
    factor: "Strong track record in the franchise system",
    note: "Existing franchisees with multiple profitable units are underwritten more favorably than first-time buyers with no operating history.",
  },
  {
    factor: "Documented liquid assets well above injection minimum",
    note: "Lenders view excess liquidity as a cushion for the ramp-up period and a signal that the buyer is not overextended.",
  },
  {
    factor: "Unit-level DSCR above 1.25x",
    note: "For resale acquisitions, historical unit cash flow that clearly services proposed debt is the most important single underwriting factor.",
  },
  {
    factor: "Relevant industry or management experience",
    note: "A background in food service, retail operations, or management of multi-unit businesses reduces perceived execution risk.",
  },
  {
    factor: "Clean, well-documented due diligence package",
    note: "Buyers who provide organized financials, a clear FDD summary, itemized project costs, and a signed lease move through underwriting faster and with fewer surprises.",
  },
];

// ── Page Component ─────────────────────────────────────────────────────────────

export default function FranchiseFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industry"
        title="Franchise Financing"
        subtitle="Buying into a franchise system provides brand recognition and a proven operating model — but it also introduces a distinct set of financing requirements around equity injection, royalty obligations, and franchisor approval. Explore the paths that franchise buyers and existing franchisees most commonly evaluate, all subject to underwriting by third-party providers."
      />

      {/* 2 — Key financing challenges */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Industry Challenges
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What makes franchise financing different
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Franchise financing sits at the intersection of small business lending and commercial real estate — with the added layer of a franchisor whose approval, documentation requirements, and ongoing obligations shape how lenders evaluate every deal. Understanding these dynamics before approaching a lender puts franchisees in a stronger position.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((item) => (
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

      {/* 3 — Financing products */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Financing Paths
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Products franchise buyers and franchisees most commonly explore
            </h2>
            <p className="text-[#737373] leading-relaxed">
              The right financing structure depends on whether you are opening a new unit, acquiring an existing one, or expanding a portfolio — as well as the brand, your financial profile, and available collateral. The options below cover the most relevant paths for franchise transactions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {financingPaths.map((card) => (
              <FinancingPathCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                tags={card.tags}
                href={card.href}
                highlight={card.highlight}
              />
            ))}
          </div>

          {/* SBA 504 callout */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  <SBAIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1">
                    SBA 504 for Real Estate and Major Equipment
                  </p>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-2xl">
                    Franchisees purchasing the real estate where their unit will operate — or financing large fixed-asset purchases — may evaluate SBA 504 as an alternative to 7(a). SBA 504 is structured with a conventional first mortgage, a CDC second mortgage backed by the SBA, and a borrower equity injection. It is primarily suited for owner-occupied real estate and major long-lived equipment, not working capital or soft costs. Subject to SBA eligibility and lender underwriting.
                  </p>
                </div>
              </div>
              <Link
                href="/sba-loans"
                className="flex-shrink-0 text-sm text-[#0f0f0f] hover:text-[#0f0f0f] transition-colors flex items-center gap-1.5"
              >
                Learn more
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
        </div>
      </section>

      {/* 4 — Requirements and metrics */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Lender Requirements
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What lenders typically look for in franchise applications
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Requirements vary by lender, program, deal type, and whether the unit is a new build or an existing resale. The following reflects general patterns across franchise financing — not a guarantee of eligibility or terms. All financing is subject to underwriting and approval by third-party providers.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
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
            {requirements.map((req) => (
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

      {/* 5 — Deal type comparison + strength factors */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Underwriting Context
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              How lenders approach different franchise deal types
            </h2>
            <p className="text-[#737373] leading-relaxed">
              The financing structure and underwriting emphasis shift meaningfully depending on whether the transaction is a new-unit build-out, a resale acquisition, or a multi-unit expansion. Understanding those differences helps franchisees prepare the right documentation and set realistic expectations.
            </p>
          </div>

          <div className="mb-10">
            <ComparisonTable
              columns={comparisonColumns}
              rows={comparisonRows}
              highlightCol="New Unit (Build-Out)"
            />
          </div>

          {/* Strength factors */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">
                Factors that strengthen a franchise application
              </p>
              <div className="space-y-3">
                {strengthFactors.map((item) => (
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
            <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">
                The SBA franchise landscape
              </p>
              <p>
                The SBA Franchise Directory is maintained by the SBA and lists franchise brands whose agreements have been reviewed for eligibility. Brands on the Directory have confirmed that the franchise relationship does not create an affiliation between the franchisor and franchisee for SBA purposes — a requirement for the franchisee to qualify as an independent small business eligible for SBA programs.
              </p>
              <p>
                For brands not on the Directory, lenders submit the Franchise Agreement to the SBA for eligibility determination, which adds time to the approval process and introduces some uncertainty. Buyers targeting an unlisted brand should ask the franchisor whether they have sought Directory listing and factor any additional timeline into their planning.
              </p>
              <p>
                The Directory also functions as a practical shortlist of brands that SBA lenders have experience with. Lenders who have closed multiple transactions for a given brand are often more efficient in processing new applications for that brand — they already know the FDD structure, common issues, and the franchisor's operational requirements. Buyers working with a lender experienced in their specific brand may benefit from that institutional familiarity.
              </p>
              <p>
                For franchise resale transactions, lenders will request the unit's historical financial performance directly — typically through the seller's tax returns and franchisor-provided sales reporting. Buyers should ensure their purchase agreement provides access to these records during due diligence. A unit with strong documented performance is substantially easier to finance than one where records are incomplete, inconsistent, or unavailable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — FAQ */}
      <FAQ
        items={faqItems}
        title="Franchise Financing FAQs"
      />

      {/* 7 — CTA */}
      <CTASection
        headline="Explore financing options for your franchise"
        subtext="Submit a brief intake and ZEO will review your situation against potential financing paths. All financing is subject to underwriting and approval by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing"
        secondaryHref="/financing"
      />

      {/* 8 — Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="general" />
      </div>

    </main>
  );
}

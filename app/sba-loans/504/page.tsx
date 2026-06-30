import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "SBA 504 Loans for Fixed Assets | ZEO.co",
  description:
    "SBA 504 loans may help eligible small businesses finance commercial real estate, heavy equipment, and long-lived fixed assets. Learn how the program works, typical requirements, costs, and how it compares to 7(a) and conventional financing. Subject to SBA eligibility and lender underwriting.",
  path: "/sba-loans/504",
  keywords: [
    "SBA 504 loan",
    "504 CDC loan",
    "SBA 504 commercial real estate",
    "SBA 504 equipment financing",
    "SBA fixed asset financing",
    "certified development company loan",
    "SBA 504 requirements",
    "SBA 504 vs 7a",
    "small business real estate loan",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="6" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 6V4h8v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 2V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="7" y="10" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function EquipmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="5" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 13V8l2-4h6l2 4v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 14h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 14V8l5-5 5 5v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function RenovationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 15l10-10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 3l4 4-1.5 1.5-4-4L11 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M3 15l2.5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="4" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function TermLoanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8h3M5 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 7l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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

// ── Page Data ──────────────────────────────────────────────────────────────────

const metrics = [
  {
    label: "Maximum SBA Debenture",
    value: "$5.5M",
    note: "Up to $5.5M for qualifying manufacturing or energy projects; $5M standard",
    highlight: false,
  },
  {
    label: "Typical Total Project Size",
    value: "$500K+",
    note: "Total project cost across all funding sources; smaller projects are uncommon",
    highlight: false,
  },
  {
    label: "CDC Debenture Term",
    value: "10 / 20 / 25 yr",
    note: "25-year term available for real estate; 10-year for equipment",
    highlight: true,
  },
  {
    label: "Borrower Equity Injection",
    value: "10–20%",
    note: "10% typical for established businesses; 15–20% for startups or special-use properties",
    highlight: false,
  },
];

const comparisonColumns = ["SBA 504", "SBA 7(a)", "Conventional CRE"];

const comparisonRows = [
  {
    feature: "Primary use",
    "SBA 504": "Fixed assets, CRE",
    "SBA 7(a)": "General purpose, working capital, acquisitions",
    "Conventional CRE": "Owner-occupied or investment property",
  },
  {
    feature: "Max loan amount",
    "SBA 504": "$5M–$5.5M (CDC portion)",
    "SBA 7(a)": "$5M",
    "Conventional CRE": "Varies by lender",
  },
  {
    feature: "Typical term",
    "SBA 504": "10, 20, or 25 years",
    "SBA 7(a)": "Up to 25 years (real estate)",
    "Conventional CRE": "5–20 years (balloon common)",
  },
  {
    feature: "Down payment",
    "SBA 504": "10–20%",
    "SBA 7(a)": "10–20%",
    "Conventional CRE": "20–35%",
  },
  {
    feature: "Rate structure",
    "SBA 504": "CDC portion: fixed; bank portion: varies",
    "SBA 7(a)": "Fixed or variable, prime-based",
    "Conventional CRE": "Fixed or variable",
  },
  {
    feature: "Collateral",
    "SBA 504": "Financed asset; personal guarantee",
    "SBA 7(a)": "Business + personal assets; PG required",
    "Conventional CRE": "Property; may require additional",
  },
  {
    feature: "Working capital",
    "SBA 504": "Not permitted",
    "SBA 7(a)": "Permitted",
    "Conventional CRE": "Not permitted",
  },
  {
    feature: "Time to fund",
    "SBA 504": "60–120 days",
    "SBA 7(a)": "30–90 days",
    "Conventional CRE": "30–60 days",
  },
];

const useCases = [
  {
    icon: <BuildingIcon />,
    title: "Owner-Occupied Commercial Real Estate",
    description:
      "Businesses that occupy at least 51% of a building they intend to purchase may find the 504 program a potential fit. Offices, warehouses, retail storefronts, and mixed-use properties are common project types. Subject to lender and SBA eligibility.",
    tags: ["51% occupancy required", "Office / warehouse / retail", "Long-term fixed rate possible"],
    href: "/commercial-real-estate-loans",
    highlight: false,
  },
  {
    icon: <LandIcon />,
    title: "Land and New Construction",
    description:
      "Land acquisition for ground-up construction of an owner-occupied facility may be eligible. The borrower typically must occupy the majority of usable square footage within a set timeframe following construction completion.",
    tags: ["Land + construction", "Owner-occupancy rules apply", "Longer timelines"],
    href: "/commercial-real-estate-loans",
    highlight: false,
  },
  {
    icon: <RenovationIcon />,
    title: "Major Renovation or Expansion",
    description:
      "Substantial renovations to an existing owner-occupied facility — those that extend the useful life of the structure or significantly increase its size — may qualify. Cosmetic improvements or minor repairs generally do not.",
    tags: ["Structural / major work", "Useful-life extension", "Expansion eligible"],
    href: "/commercial-real-estate-loans",
    highlight: false,
  },
  {
    icon: <EquipmentIcon />,
    title: "Heavy Machinery and Capital Equipment",
    description:
      "Long-lived equipment with a useful life of at least 10 years — manufacturing machinery, commercial kitchen equipment, printing presses, CNC machines — is a common use case. Vehicles and short-lived assets are less frequently eligible.",
    tags: ["10+ yr useful life", "Manufacturing / industrial", "Equipment secured"],
    href: "/equipment-financing",
    highlight: false,
  },
];

const faqItems = [
  {
    q: "What is the SBA 504 loan program and how is it structured?",
    a: "The SBA 504 program is a government-backed financing structure designed for the purchase of major fixed assets such as commercial real estate and long-lived equipment. It typically involves three parties: a conventional lender (often a bank) that funds approximately 50% of the project, a Certified Development Company (CDC) that funds up to 40% through a debenture backed by the SBA, and the borrower who contributes the remaining 10–20% as an equity injection. The CDC portion carries a fixed rate set at the time of funding. Total project eligibility, borrower requirements, and final terms are subject to SBA rules and lender underwriting.",
  },
  {
    q: "Can the SBA 504 loan be used to purchase an investment property I won't occupy?",
    a: "Generally no. The SBA 504 program requires the borrower's business to be the primary occupant of the financed property. For existing buildings, the borrower typically must occupy at least 51% of the usable square footage. For new construction, occupancy requirements may be higher (often 60% or more). Pure investment properties, rental properties, and properties where the business will occupy a minority share are generally ineligible. Consult with a participating lender or CDC for project-specific eligibility guidance.",
  },
  {
    q: "How does the fixed rate on the CDC portion work?",
    a: "The Certified Development Company sells debentures to investors through the SBA's secondary market program. The rate on the debenture — which represents the CDC's portion of the financing — is set at the time of debenture sale and remains fixed for the life of the loan. This is distinct from the bank's portion of the financing, which may carry a fixed or variable rate depending on the lender's terms. ZEO does not guarantee or quote rates. Actual rates are set by market conditions and the participating lender and CDC at the time of closing.",
  },
  {
    q: "What are the SBA 504 eligibility requirements for the borrowing business?",
    a: "The business must be a for-profit entity operating in the United States, meet the SBA's small business size standards (generally less than $15M in tangible net worth and less than $5M average net income after federal taxes for the preceding two years), and intend to use the financed assets for a qualified business purpose. Certain industries are ineligible under SBA rules, including passive real estate investment, gambling, non-profit entities, and others. Personal guarantee is required from owners holding 20% or more. All eligibility is determined by the SBA and the participating lender.",
  },
  {
    q: "What are the alternatives to a 504 loan for commercial real estate?",
    a: "Businesses that do not qualify for or prefer not to use the 504 program may consider an SBA 7(a) loan, which offers more flexibility in use of proceeds (including working capital) but may have different term and cost characteristics. Conventional commercial real estate loans from banks and credit unions are another option, often requiring a higher down payment (20–35%) but with a faster and simpler process. Bridge loans and hard money financing are short-term alternatives sometimes used while longer-term financing is arranged. Each product has distinct eligibility, cost, and term characteristics — subject to third-party underwriting.",
  },
];

const prosAndCons = {
  pros: [
    "Fixed rate on the CDC debenture portion provides payment certainty over 10, 20, or 25 years",
    "Lower equity injection (typically 10%) compared to conventional commercial real estate financing (often 20–35%)",
    "Long amortization may result in lower monthly payments relative to shorter-term conventional loans",
    "The financed asset serves as primary collateral — personal real estate collateral is less commonly required than in 7(a)",
    "May allow preservation of working capital that would otherwise be absorbed by a large down payment",
  ],
  cons: [
    "Cannot be used for working capital, inventory, debt refinancing (with limited exceptions), or investment real estate",
    "Two-lender structure (bank + CDC) means two separate loan closing processes, two sets of fees, and longer timelines",
    "SBA funding fees, CDC fees, and lender fees are typically added to the project cost and may be significant",
    "Owner-occupancy requirement may disqualify businesses that lease a majority of the space or plan to sublease",
    "Process is more documentation-intensive and time-consuming than conventional financing — typically 60–120 days to fund",
    "Prepayment on the CDC debenture carries a declining penalty (typically assessed for the first 10 years on a 20-year debenture)",
  ],
};

// ── Page Component ─────────────────────────────────────────────────────────────

export default function SBA504Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Financing Options", url: "https://zeo.co/financing" },
          { name: "SBA 504 Loans", url: "https://zeo.co/sba-loans/504" },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Financing Options", href: "/financing" },
          { label: "SBA 504 Loans" },
        ]}
        eyebrow="Financing"
        title="SBA 504 Loans"
        subtitle="The SBA 504 program is a government-backed structure designed for purchasing commercial real estate and major fixed assets. Eligible businesses may access long-term, fixed-rate financing with lower equity requirements than conventional alternatives — subject to SBA rules and lender underwriting."
      />

      {/* 2. Metrics */}
      <section className="py-14 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
          <p className="text-[0.65rem] text-[#6b7e69] mt-4">
            Figures are general estimates only. Actual amounts, terms, and eligibility are subject to SBA program rules, CDC guidelines, and lender underwriting. Not offers or commitments.
          </p>
        </div>
      </section>

      {/* 3. Who It Is For */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Potential Fit
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Who may be a potential candidate
              </h2>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-8">
                The SBA 504 program is not a general-purpose loan. It is specifically designed for businesses making long-term investments in owner-occupied real estate or major fixed assets. The following profiles are commonly associated with 504 inquiries — eligibility is subject to SBA rules and participating lender underwriting in every case.
              </p>
              <ul className="space-y-5">
                {[
                  {
                    heading: "Established businesses purchasing owner-occupied property",
                    body: "For-profit businesses with 2+ years of operating history that intend to occupy the majority of a commercial building they are purchasing. The business must occupy at least 51% of the usable space at the time of purchase.",
                  },
                  {
                    heading: "Manufacturers and industrial operators buying capital equipment",
                    body: "Businesses acquiring heavy machinery, industrial equipment, or other long-lived fixed assets with a useful life of 10 years or more. The equipment must be used in the operation of the business, not held for resale.",
                  },
                  {
                    heading: "Businesses building or substantially renovating a facility",
                    body: "Companies undertaking ground-up construction or major renovation of an owner-occupied commercial facility. The borrower's business must occupy the required percentage of usable square footage within a specified period after project completion.",
                  },
                  {
                    heading: "Businesses with strong DSCR and limited liquid reserves",
                    body: "The 504's lower equity injection requirement (typically 10%) may be relevant for businesses with solid cash flow and demonstrated debt service capacity but limited upfront capital — relative to conventional financing's 20–35% requirement.",
                  },
                ].map((item) => (
                  <li key={item.heading} className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                    <div>
                      <p className="text-sm font-semibold text-[#eef2ec] mb-1">{item.heading}</p>
                      <p className="text-sm text-[#6b7e69] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Generally Not a Fit
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Where 504 financing does not typically apply
              </h2>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-8">
                The 504 program has specific use restrictions that make it inappropriate for many common financing needs. Businesses with these profiles should explore alternative structures.
              </p>
              <ul className="space-y-5">
                {[
                  {
                    heading: "Working capital and operating expenses",
                    body: "The 504 program cannot be used for working capital, payroll, inventory, or day-to-day operating expenses. Businesses with these needs should consider SBA 7(a), term loans, or lines of credit.",
                  },
                  {
                    heading: "Investment or rental real estate",
                    body: "Properties primarily held for investment or leased to third parties are ineligible. The borrower's operating business must be the primary occupant.",
                  },
                  {
                    heading: "Business acquisitions",
                    body: "Buying an existing business — as opposed to a physical asset used by the borrower's own business — is not a permitted 504 use. SBA 7(a) is the more common structure for business acquisitions.",
                  },
                  {
                    heading: "Businesses needing fast capital deployment",
                    body: "The 504 process typically takes 60–120 days to fund. Businesses requiring capital in days or weeks should evaluate faster-closing alternatives.",
                  },
                ].map((item) => (
                  <li key={item.heading} className="flex gap-3">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#6b7e69]" />
                    <div>
                      <p className="text-sm font-semibold text-[#eef2ec] mb-1">{item.heading}</p>
                      <p className="text-sm text-[#6b7e69] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Program Structure
            </p>
            <h2 className="text-2xl font-semibold text-white">How the 504 program works</h2>
            <p className="text-[#9aaa98] text-sm mt-2 max-w-2xl">
              The 504 is unusual in that it involves two separate lenders — a conventional bank and a Certified Development Company (CDC). Understanding the structure is important before pursuing this path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#1e2620] rounded-xl overflow-hidden">
            {[
              {
                step: "1",
                heading: "Identify the project",
                body: "The borrower identifies the asset to be financed — a commercial property, equipment, or construction project — and confirms it meets SBA 504 use-of-proceeds requirements. Not all projects are eligible.",
              },
              {
                step: "2",
                heading: "Bank funds ~50%",
                body: "A participating conventional lender (bank, credit union, CDFI) originates the first mortgage or senior lien, typically covering approximately 50% of the total project cost. Terms and rate on this portion are set by the lender.",
              },
              {
                step: "3",
                heading: "CDC funds ~40%",
                body: "A Certified Development Company — a nonprofit intermediary authorized by the SBA — funds up to 40% of the project through an SBA-guaranteed debenture sold on the secondary market. The rate on this portion is fixed at issuance.",
              },
              {
                step: "4",
                heading: "Borrower injects 10–20%",
                body: "The borrower contributes 10% equity for most projects. Startups, businesses under 2 years old, and special-use properties typically require 15–20%. This injection cannot be borrowed from the lender.",
              },
              {
                step: "5",
                heading: "Closing and funding",
                body: "Both the bank loan and the CDC debenture close — typically on the same day for acquisitions, or after construction completion for build-to-suit projects. The borrower makes separate payments to the bank and to the CDC loan servicer.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#111512] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                  Step {item.step}
                </p>
                <p className="text-sm font-semibold text-[#eef2ec] mb-2">{item.heading}</p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Funding Stack Visual */}
          <div className="mt-10 rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-5">
              Typical 504 Project Funding Stack
            </p>
            <div className="space-y-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[#9aaa98]">Conventional Lender (first lien)</span>
                  <span className="text-xs font-semibold tabular-nums text-[#eef2ec]">~50%</span>
                </div>
                <div className="h-7 rounded bg-[#1e2620] w-full overflow-hidden">
                  <div className="h-full bg-[#2d3b2c] rounded" style={{ width: "50%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[#9aaa98]">CDC / SBA Debenture (second lien)</span>
                  <span className="text-xs font-semibold tabular-nums text-[#eef2ec]">~40%</span>
                </div>
                <div className="h-7 rounded bg-[#1e2620] w-full overflow-hidden">
                  <div className="h-full bg-[#22c55e]/30 rounded" style={{ width: "40%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[#9aaa98]">Borrower Equity Injection</span>
                  <span className="text-xs font-semibold tabular-nums text-[#eef2ec]">10–20%</span>
                </div>
                <div className="h-7 rounded bg-[#1e2620] w-full overflow-hidden">
                  <div className="h-full bg-[#22c55e]/60 rounded" style={{ width: "15%" }} />
                </div>
              </div>
            </div>
            <p className="text-[0.65rem] text-[#6b7e69] mt-4">
              Percentages are illustrative. Actual allocation varies by project type, lender, and SBA eligibility determination.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Common Use Cases */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Use Cases
            </p>
            <h2 className="text-2xl font-semibold text-white">Common SBA 504 project types</h2>
            <p className="text-[#9aaa98] text-sm mt-2 max-w-2xl">
              These are frequently cited project types for 504 applications. Each carries its own eligibility nuances under SBA Standard Operating Procedures. Third-party underwriting applies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((uc) => (
              <FinancingPathCard key={uc.title} {...uc} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Typical Requirements */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Eligibility
            </p>
            <h2 className="text-2xl font-semibold text-white">Typical requirements</h2>
            <p className="text-[#9aaa98] text-sm mt-2 max-w-2xl">
              The following represent commonly cited thresholds for SBA 504 applications. Actual requirements are set by the SBA and the participating lender and CDC — not by ZEO. These are general reference points only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Personal Credit Score",
                value: "680+",
                detail: "Many participating lenders look for a minimum personal FICO in the 680–700 range for the primary owners. Lower scores may be considered with compensating factors, but typically result in higher scrutiny. The SBA itself does not set a universal credit score minimum.",
              },
              {
                label: "Time in Business",
                value: "2+ years",
                detail: "Most participating lenders prefer 2 or more years of operating history. Startups may apply under SBA 504 rules but typically face higher equity injection requirements (15–20%) and stricter underwriting review. Operating history is verified through tax returns.",
              },
              {
                label: "Annual Revenue",
                value: "Varies",
                detail: "There is no universal revenue floor, but lenders evaluate whether the business generates sufficient income to service the proposed debt. DSCR (debt service coverage ratio) of 1.25x or higher is a common benchmark, though lender minimums vary.",
              },
              {
                label: "Business Net Worth",
                value: "Under $15M",
                detail: "The SBA requires that the business's tangible net worth be less than $15 million at the time of application to qualify as a small business under 504 program rules.",
              },
              {
                label: "Average Net Income",
                value: "Under $5M",
                detail: "The business's average net income after federal income taxes (excluding carryover losses) must not exceed $5 million for the two full fiscal years preceding the application.",
              },
              {
                label: "Personal Guarantee",
                value: "Required",
                detail: "All owners holding 20% or more of the business must provide an unlimited personal guarantee on the SBA-guaranteed debenture. The conventional lender's portion may have its own guarantee requirements. This is a standard SBA program condition.",
              },
            ].map((req) => (
              <div key={req.label} className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-1.5">
                  {req.label}
                </p>
                <p className="text-xl font-semibold text-white tabular-nums mb-2">{req.value}</p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">{req.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <ProductDisclaimer type="sba" />
          </div>
        </div>
      </section>

      {/* 7. Cost Discussion */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Costs
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Understanding 504 costs
              </h2>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-6">
                SBA 504 financing involves two separate sets of costs: those associated with the conventional bank portion (set by the lender) and those associated with the CDC debenture portion (structured by SBA program rules). ZEO does not quote, guarantee, or imply any particular rate or cost structure. The following is general reference information only.
              </p>

              <div className="space-y-4">
                {[
                  {
                    heading: "CDC debenture rate",
                    body: "The interest rate on the CDC portion is set at the time the debenture is sold in the secondary market, and is fixed for the life of the loan. Rates are benchmarked to U.S. Treasury rates and include a small spread for SBA and CDC fees. Rates change with market conditions — there is no guaranteed or advertised rate ZEO can provide.",
                  },
                  {
                    heading: "Bank portion rate and terms",
                    body: "The conventional lender sets its own rate, term, and fee structure on the first mortgage or senior lien independently. This portion may carry a fixed or variable rate. You are negotiating two separate financing agreements.",
                  },
                  {
                    heading: "SBA funding fee (debenture fee)",
                    body: "The SBA charges a one-time debenture fee, typically a percentage of the guaranteed portion. This fee is commonly financed into the debenture rather than paid at closing, but it increases the effective cost of the CDC portion.",
                  },
                  {
                    heading: "CDC fee",
                    body: "CDCs charge processing fees for underwriting and originating the debenture. These vary by CDC and are disclosed as part of the closing documents.",
                  },
                  {
                    heading: "Third-party closing costs",
                    body: "Environmental reports, appraisals, title insurance, lender legal fees, and other third-party costs are typical in any commercial real estate transaction and apply to 504 projects as well. For construction projects, additional soft costs may apply.",
                  },
                ].map((item) => (
                  <div key={item.heading} className="border-l-2 border-[#1e2620] pl-4">
                    <p className="text-sm font-semibold text-[#eef2ec] mb-1">{item.heading}</p>
                    <p className="text-xs text-[#6b7e69] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-5">
                Prepayment Considerations
              </p>
              <p className="text-sm text-[#9aaa98] leading-relaxed mb-4">
                The CDC debenture portion of a 504 loan carries a prepayment premium during the early years of the loan. For a 20-year debenture, the premium is assessed for the first 10 years, typically starting at a percentage equal to the debenture rate and declining by that amount each year until it reaches zero.
              </p>
              <p className="text-sm text-[#9aaa98] leading-relaxed mb-4">
                Businesses anticipating an early sale or refinance should factor this into their analysis. The conventional lender's portion may also carry prepayment penalties — those terms are set by the individual lender.
              </p>
              <div className="border border-[#1e2620] rounded-lg p-4 bg-[#0a0d0b]">
                <p className="text-xs font-semibold text-[#6b7e69] uppercase tracking-[0.08em] mb-2">Note</p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">
                  Prepayment terms, premium amounts, and the structure of declining penalties vary by debenture and should be confirmed with the CDC and participating lender before closing. Nothing on this page constitutes legal, tax, or financial advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pros and Cons */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Considerations
            </p>
            <h2 className="text-2xl font-semibold text-white">Potential advantages and trade-offs</h2>
            <p className="text-[#9aaa98] text-sm mt-2 max-w-2xl">
              The following are general observations about the 504 structure. Whether these characteristics are advantages or disadvantages depends on the specific business, project, and financial situation — subject to underwriting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-5">
                Potential Advantages
              </p>
              <ul className="space-y-4">
                {prosAndCons.pros.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg className="mt-0.5 flex-shrink-0 w-4 h-4 text-[#22c55e]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm text-[#9aaa98] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-5">
                Trade-Offs to Consider
              </p>
              <ul className="space-y-4">
                {prosAndCons.cons.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg className="mt-0.5 flex-shrink-0 w-4 h-4 text-[#6b7e69]" viewBox="0 0 16 16" fill="none">
                      <path d="M8 4v4M8 10.5v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                    <p className="text-sm text-[#9aaa98] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Comparison Table */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-white">SBA 504 vs. alternatives</h2>
            <p className="text-[#9aaa98] text-sm mt-2 max-w-2xl">
              General overview only. Actual terms, amounts, and eligibility vary by applicant, lender, and product. Not offers or commitments. Subject to third-party underwriting.
            </p>
          </div>

          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA 504"
          />

          <p className="text-[0.65rem] text-[#6b7e69] mt-3">
            All figures are general estimates. ZEO.co does not guarantee rates, terms, or approval. Third-party providers set their own underwriting criteria.
          </p>
        </div>
      </section>

      {/* 10. Alternatives */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Alternatives
            </p>
            <h2 className="text-2xl font-semibold text-white">Related financing structures to evaluate</h2>
            <p className="text-[#9aaa98] text-sm mt-2 max-w-2xl">
              Depending on your use of proceeds, credit profile, and timeline, one of these alternatives may be a better potential fit. Each has distinct eligibility and cost characteristics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loans"
              description="The SBA's general-purpose program. More flexible use of proceeds — including working capital, acquisitions, and debt refinancing — but different term and structure than 504. May be a potential fit when 504's fixed-asset restriction is a limiting factor."
              tags={["General purpose", "Up to $5M", "10–25 yr terms"]}
              href="/sba-loans/7a"
              highlight={false}
            />
            <FinancingPathCard
              icon={<CREIcon />}
              title="Conventional CRE Loans"
              description="Bank and credit union commercial real estate loans without SBA involvement. Typically faster and less documentation-intensive, but often require higher down payments and may carry shorter amortization with balloon payments."
              tags={["No SBA fees", "Faster process", "20–35% down"]}
              href="/commercial-real-estate-loans"
              highlight={false}
            />
            <FinancingPathCard
              icon={<TermLoanIcon />}
              title="Equipment Financing"
              description="Stand-alone equipment financing may be available for businesses that need capital equipment but not commercial real estate. Structures include equipment loans and leases with the asset as collateral. Simpler process than a 504 for equipment-only needs."
              tags={["Equipment secured", "$10K–$5M+", "Faster close"]}
              href="/equipment-financing"
              highlight={false}
            />
          </div>
        </div>
      </section>

      {/* 11. Calculator Link */}
      <section className="py-12 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-1">
                Tools
              </p>
              <p className="text-sm font-semibold text-[#eef2ec]">Estimate SBA 504 payment ranges</p>
              <p className="text-xs text-[#6b7e69] mt-1 max-w-lg">
                Use the SBA loan calculator to explore estimated payment ranges based on project size and term. Results are estimates only and are not offers, commitments, or guarantees of any rate or approval.
              </p>
            </div>
            <Link
              href="/calculators/sba-loan"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#1e2620] text-sm text-[#9aaa98] hover:text-white hover:border-[#22c55e] transition-colors"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <FAQ
        title="SBA 504 Loan — Common Questions"
        items={faqItems}
      />

      {/* 13. CTA */}
      <CTASection
        headline="Evaluating a fixed asset purchase or commercial real estate project?"
        subtext="Submit a brief intake and ZEO will review whether SBA 504 or an alternative structure may be a potential fit for your business. Subject to underwriting by third-party providers."
        primaryLabel="Start Intake"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing"
        secondaryHref="/financing"
        variant="dark"
      />

      {/* 14. Disclaimer */}
      <section className="py-10 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="sba" />
        </div>
      </section>
    </>
  );
}

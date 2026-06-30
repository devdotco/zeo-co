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
  title: "Commercial Real Estate Loans | ZEO.co",
  description:
    "Explore commercial real estate loan options for property acquisition, refinancing, construction, and owner-occupied CRE. Understand typical requirements, costs, structures, and how to evaluate whether a CRE loan may be a fit for your business — subject to lender underwriting and approval.",
  path: "/commercial-real-estate-loans",
  keywords: [
    "commercial real estate loans",
    "CRE financing",
    "commercial mortgage",
    "owner-occupied commercial real estate",
    "commercial property loan",
    "commercial real estate refinance",
    "bridge loan commercial",
    "commercial construction loan",
    "commercial real estate requirements",
    "DSCR commercial loan",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="6" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 16v-5h6v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 8l7-6 7 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="8" r="4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.5 10.5l5 5M13 13l-1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9a6 6 0 1 1 1.2 3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 13.5V9.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HammerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 15l7-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="9" y="2" width="6" height="5" rx="1" transform="rotate(45 9 2)" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 13h6M13 10v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

function TrendingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 13l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6h2.5v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" stroke="#0f0f0f" strokeWidth="1.2" />
      <path d="M4.5 7l1.5 1.5L9.5 5" stroke="#0f0f0f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" stroke="#a3a3a3" strokeWidth="1.2" />
      <path d="M5 5l4 4M9 5l-4 4" stroke="#a3a3a3" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#0f0f0f]/40 bg-[#f5f5f5] flex items-center justify-center text-[0.65rem] font-semibold text-[#0f0f0f]">
      {n}
    </span>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Financing Options", href: "/financing" },
  { label: "Commercial Real Estate Loans" },
];

const typicalMetrics = [
  {
    label: "Typical Loan Amounts",
    value: "$500K+",
    note: "Many CRE lenders start at $500K; upper limits vary by lender",
  },
  {
    label: "Down Payment",
    value: "20–35%",
    note: "Conventional CRE often requires 20–35% equity at close",
    highlight: true,
  },
  {
    label: "Loan Terms",
    value: "5–25 yr",
    note: "Amortization may extend further than the initial loan term",
  },
  {
    label: "DSCR Benchmark",
    value: "1.20×",
    note: "Many lenders seek minimum 1.20× debt service coverage ratio",
  },
];

const comparisonColumns = ["Conventional CRE", "SBA 504 CRE", "Bridge Loan"];
const comparisonRows = [
  {
    feature: "Primary Use",
    "Conventional CRE": "Acquisition, refinance",
    "SBA 504 CRE": "Owner-occupied acquisition",
    "Bridge Loan": "Short-term gap financing",
  },
  {
    feature: "Down Payment",
    "Conventional CRE": "20–35%",
    "SBA 504 CRE": "10–15%",
    "Bridge Loan": "Varies; often equity-based",
  },
  {
    feature: "Loan Term",
    "Conventional CRE": "5–25 years",
    "SBA 504 CRE": "10–25 years (debenture)",
    "Bridge Loan": "6–36 months",
  },
  {
    feature: "Typical Close Time",
    "Conventional CRE": "30–90 days",
    "SBA 504 CRE": "60–120 days",
    "Bridge Loan": "2–4 weeks",
  },
  {
    feature: "Owner-Occupancy Req.",
    "Conventional CRE": "Not always required",
    "SBA 504 CRE": "51%+ required",
    "Bridge Loan": "Not typically required",
  },
  {
    feature: "Prepayment Penalty",
    "Conventional CRE": "Often yes (step-down)",
    "SBA 504 CRE": "Yes (debenture schedule)",
    "Bridge Loan": "Varies by lender",
  },
];

const alternativePaths = [
  {
    icon: <TrendingIcon />,
    title: "SBA 504 Loans",
    description:
      "The SBA 504 program is specifically structured for owner-occupied commercial real estate and major fixed assets. A lower down payment requirement (often 10–15%) may make it worth evaluating alongside conventional CRE options.",
    tags: ["Owner-Occupied", "Fixed Assets", "Long Term"],
    href: "/sba-loans",
  },
  {
    icon: <GearIcon />,
    title: "Equipment Financing",
    description:
      "When your capital need centers on machinery or specialized equipment rather than the building itself, standalone equipment financing may close faster with the financed asset as collateral.",
    tags: ["Equipment", "Asset-backed", "Faster"],
    href: "/equipment-financing",
  },
  {
    icon: <DollarIcon />,
    title: "Business Term Loans",
    description:
      "General-purpose term loans may cover smaller property improvements, fit-outs, or ancillary costs connected to a real estate project that fall outside a primary CRE loan structure.",
    tags: ["General Purpose", "Improvements", "Fit-out"],
    href: "/business-term-loans",
  },
  {
    icon: <TrendingIcon />,
    title: "Business Line of Credit",
    description:
      "A revolving credit line can complement a CRE loan by covering carrying costs, operating expenses during a build-out, or short-term gaps while a longer-term CRE loan closes.",
    tags: ["Revolving", "Flexible Draw", "Complement"],
    href: "/business-line-of-credit",
  },
];

const faqItems = [
  {
    q: "What is the difference between owner-occupied and investor commercial real estate lending?",
    a: "Owner-occupied CRE means the business that borrows the money operates out of the property — typically occupying at least 51% of usable space. These loans are evaluated primarily on the borrowing business's cash flow and creditworthiness. Investor or investment CRE loans are for properties where tenants (not the borrower's own business) generate income; lenders lean more heavily on the property's rent rolls, occupancy rates, and net operating income when underwriting those deals. Terms, rates, and down payment requirements often differ between the two categories.",
  },
  {
    q: "What is a debt service coverage ratio (DSCR) and why does it matter?",
    a: "DSCR measures whether a property or business generates enough income to cover its loan payments. It is calculated by dividing net operating income (or business cash flow) by the total annual debt service (principal plus interest). A ratio of 1.0× means income exactly covers payments; most CRE lenders look for a minimum of 1.20× to 1.25× to provide a cushion. A lower DSCR may require a larger down payment, a co-borrower, or additional collateral — or may result in the loan not being approved. Subject to individual lender underwriting standards.",
  },
  {
    q: "How much of a down payment is typically required for a commercial real estate loan?",
    a: "Conventional CRE lenders often require 20–35% of the purchase price as a down payment, depending on property type, borrower profile, and market conditions. The SBA 504 program may allow eligible borrowers to put down as little as 10–15% for owner-occupied properties, though the overall structure is more complex and involves two separate financing components. Bridge loans are typically structured on available equity and may vary significantly. These figures are general benchmarks — actual requirements are set by the lender at the time of underwriting.",
  },
  {
    q: "What property types are typically eligible for commercial real estate loans?",
    a: "Common eligible property types include office buildings, retail centers, industrial warehouses, mixed-use properties, self-storage facilities, multi-tenant commercial buildings, and owner-occupied professional spaces such as medical offices and law firms. Raw land, certain special-purpose properties (e.g., gas stations, car washes, churches), and properties requiring significant environmental remediation may face additional scrutiny or be ineligible under certain programs. Eligibility depends on the lender's specific guidelines and the program structure.",
  },
  {
    q: "What documentation is typically required to apply for a commercial real estate loan?",
    a: "Lenders generally require personal and business tax returns (typically two to three years), personal financial statements for all principals owning 20% or more, business financial statements (profit and loss, balance sheet), a property appraisal commissioned by the lender, a purchase agreement or refinance rationale, rent rolls for income-producing properties, and evidence of insurance. Some lenders also request an environmental report (Phase I or Phase II), a property survey, and a business plan for newer businesses. Documentation requirements vary by lender, loan type, and deal complexity.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CommercialRealEstateLoanPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Financing"
        title="Commercial Real Estate Loans"
        subtitle="CRE loans may help businesses acquire, refinance, or develop commercial property — from office and retail to industrial and mixed-use. Eligibility, terms, and structure vary significantly across lenders and are subject to underwriting."
      />

      {/* 2 — Typical benchmarks */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-5">
            Typical Benchmarks — Subject to Underwriting
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {typicalMetrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Who it is for */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white mb-2">Who May Be a Potential Fit</h2>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              Commercial real estate financing is not a single product — it spans conventional mortgages,
              government-backed programs, bridge loans, and construction facilities. The common thread is
              that the collateral is a commercial property. The following profiles may align with CRE
              lending structures, though all are subject to lender requirements and underwriting.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Businesses purchasing their operating space",
                  body: "A business buying the building it operates from — a medical practice, a manufacturer, a professional services firm — may qualify for owner-occupied CRE financing. Owner-occupancy requirements (commonly 51%+ of usable space) typically open access to programs like SBA 504 alongside conventional options.",
                },
                {
                  title: "Owners refinancing existing commercial property",
                  body: "Businesses with an existing commercial mortgage may evaluate refinancing to extend their term, adjust their rate structure, or access equity built in the property. Cash-out refinance structures exist in CRE but are subject to loan-to-value limits set by the lender.",
                },
                {
                  title: "Investors acquiring income-producing properties",
                  body: "Real estate investors purchasing retail centers, multi-tenant office buildings, industrial parks, or mixed-use properties may be evaluated by lenders on the property's rent roll and occupancy rather than a single operating business. These investment CRE structures typically require larger down payments.",
                },
                {
                  title: "Businesses financing construction or major renovation",
                  body: "A business building a new facility or undertaking a substantial renovation may explore construction-to-permanent financing, which converts from a draw-based construction loan to a term mortgage at project completion. Lenders typically require detailed project budgets, contractor agreements, and stronger equity positions.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{title}</h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — How it works */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white mb-2">How CRE Lending Generally Works</h2>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              Every lender has its own process, but the general arc of a commercial real estate loan
              follows a predictable sequence. Understanding what happens at each stage can help you
              prepare documentation and set realistic timeline expectations.
            </p>
            <div className="space-y-5">
              {[
                {
                  label: "Pre-qualification and property identification",
                  body: "Before a formal application, lenders typically assess the borrower's financial profile — credit, income, existing debt — and the intended property type. This stage helps surface obvious eligibility gaps and gives both parties a sense of likely loan parameters before investing time in a full application.",
                },
                {
                  label: "Formal application and documentation",
                  body: "A complete CRE loan application generally includes personal and business tax returns, financial statements, a personal financial statement for each principal, and details about the subject property. For investment properties, rent rolls and lease abstracts are usually required. Documentation gaps are among the most common causes of delays.",
                },
                {
                  label: "Underwriting and property appraisal",
                  body: "The lender's underwriting team evaluates the borrower's creditworthiness alongside the property's value and income potential. An independent appraisal commissioned by the lender — not the borrower — is standard and required before a commitment is issued. Underwriting timelines vary: conventional lenders may move in 30–60 days; SBA programs can take longer.",
                },
                {
                  label: "Loan commitment and due diligence",
                  body: "If underwriting clears, the lender issues a loan commitment letter outlining terms and conditions. Due diligence continues: environmental reports, title searches, surveys, and insurance verification are typically completed during this phase. The borrower reviews and negotiates loan documents prior to closing.",
                },
                {
                  label: "Closing and funding",
                  body: "At closing, the borrower signs final loan documents, pays closing costs (origination fees, title insurance, recording fees, and others), and the lender funds the loan. For purchase transactions, funds are disbursed to the seller at closing. For construction loans, funds are drawn in stages as work progresses and is verified.",
                },
              ].map(({ label, body }, i) => (
                <div key={label} className="flex gap-4">
                  <StepNumber n={i + 1} />
                  <div className="pt-0.5">
                    <p className="text-sm font-semibold text-[#0f0f0f] mb-1">{label}</p>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Common use cases */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Common Use Cases</h2>
          <p className="text-[#737373] text-sm mb-8 max-w-2xl leading-relaxed">
            The following scenarios represent common reasons businesses explore commercial real estate
            financing. Each has different structural considerations and lender preferences.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                icon: <KeyIcon />,
                title: "Property Acquisition",
                description:
                  "Purchasing an office building, warehouse, retail space, or mixed-use property for owner-occupancy or investment.",
                tags: ["Purchase", "Owner-Occ", "Investment"],
                href: "/commercial-real-estate-loans",
                highlight: false,
              },
              {
                icon: <RefreshIcon />,
                title: "Refinancing Existing CRE Debt",
                description:
                  "Replacing a maturing commercial mortgage or accessing property equity through a rate-and-term or cash-out refinance.",
                tags: ["Refinance", "Rate-Term", "Cash-Out"],
                href: "/commercial-real-estate-loans",
                highlight: false,
              },
              {
                icon: <HammerIcon />,
                title: "Construction & Development",
                description:
                  "Ground-up construction of new commercial facilities, with a draw schedule tied to verified construction milestones.",
                tags: ["Ground-Up", "Draw Schedule", "New Build"],
                href: "/commercial-real-estate-loans",
                highlight: false,
              },
              {
                icon: <BuildingIcon />,
                title: "Renovation & Repositioning",
                description:
                  "Major capital improvements to an existing property — tenant improvements, HVAC overhauls, structural upgrades, or repositioning to a higher use.",
                tags: ["CapEx", "TI", "Repositioning"],
                href: "/commercial-real-estate-loans",
                highlight: false,
              },
              {
                icon: <ExpandIcon />,
                title: "Portfolio Expansion",
                description:
                  "Acquiring additional commercial properties to grow an investment portfolio, evaluated on combined borrower financials and per-property NOI.",
                tags: ["Portfolio", "Multi-Property", "NOI"],
                href: "/commercial-real-estate-loans",
                highlight: false,
              },
              {
                icon: <TrendingIcon />,
                title: "Bridge Financing",
                description:
                  "Short-term financing used to bridge a gap — between a purchase and permanent financing, during lease-up, or while a property is being stabilized before a conventional refinance.",
                tags: ["Short-Term", "Lease-Up", "Stabilize"],
                href: "/commercial-real-estate-loans",
                highlight: false,
              },
            ].map((card) => (
              <FinancingPathCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Typical requirements */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white mb-2">Typical Requirements</h2>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              Requirements for commercial real estate loans vary considerably by lender, loan type, and
              property. The benchmarks below represent common thresholds observed across the conventional
              CRE market — they are not guarantees of eligibility or approval. Individual lenders set their
              own criteria, and a stronger profile in one area may partially offset weakness in another.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  label: "Personal Credit Score",
                  range: "680–720+",
                  note: "Many conventional CRE lenders look for scores above 680; stronger scores typically access a wider lender pool. Business credit history is also evaluated.",
                },
                {
                  label: "Time in Business",
                  range: "2–3 years",
                  note: "Established operating history is generally required, particularly for owner-occupied deals where the business's cash flow services the debt.",
                },
                {
                  label: "Annual Revenue",
                  range: "Lender-specific",
                  note: "Revenue minimums vary. Lenders focus on DSCR (typically 1.20×+) rather than raw revenue; the business must demonstrate sufficient income to cover the proposed payments.",
                },
              ].map(({ label, range, note }) => (
                <div key={label} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">{label}</p>
                  <p className="text-xl font-semibold text-white mb-2 tabular-nums">{range}</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <p className="text-sm font-semibold text-[#0f0f0f] mb-3">Additional Lender Considerations</p>
              <ul className="space-y-2 text-sm text-[#737373]">
                {[
                  "Loan-to-value (LTV) ratio — most conventional CRE lenders cap at 65–80% LTV, meaning 20–35% equity at close",
                  "Debt service coverage ratio (DSCR) — net operating income or business cash flow relative to annual debt payments, commonly 1.20× or higher",
                  "Property type and condition — stabilized properties with strong occupancy are generally more lendable than vacant or distressed assets",
                  "Environmental history — a Phase I (and sometimes Phase II) environmental site assessment is standard for most commercial transactions",
                  "Personal guarantee — most CRE lenders require personal guarantees from all principals owning 20% or more of the borrowing entity",
                  "Collateral — the subject property serves as primary collateral; additional assets may be required depending on LTV and borrower profile",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Cost discussion */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white mb-2">Understanding CRE Loan Costs</h2>
            <p className="text-[#737373] text-sm mb-6 leading-relaxed">
              Commercial real estate loans carry a range of costs beyond the interest rate itself.
              Understanding the full cost structure — not just the headline rate — is important when
              comparing options. ZEO does not quote rates or guarantee terms; all costs are set by
              third-party lenders and are subject to underwriting.
            </p>
            <div className="space-y-3">
              {[
                {
                  heading: "Interest rate structure",
                  body: "CRE loans may carry fixed rates (locked for the loan term or a fixed period), variable rates tied to an index (such as SOFR or a prime-based rate), or hybrid structures where the rate is fixed for an initial period then adjusts. Fixed rates provide payment certainty; variable rates introduce exposure to market movements. The rate a borrower receives reflects credit profile, property type, LTV, loan term, and prevailing market conditions at the time of underwriting.",
                },
                {
                  heading: "Origination fees and points",
                  body: "Most commercial lenders charge an origination fee — commonly 0.5% to 2% of the loan amount — to process and underwrite the loan. This is distinct from any broker or referral fees that may apply. Origination fees are typically paid at closing and may sometimes be rolled into the loan amount, depending on LTV headroom.",
                },
                {
                  heading: "Closing costs",
                  body: "CRE closings involve a range of third-party costs: lender-ordered appraisal, environmental report, title search and title insurance (both lender's and potentially owner's policies), survey, attorney fees, recording fees, and prepaid escrows for taxes and insurance. These can collectively run 1.5–3% or more of the loan amount depending on loan size and jurisdiction.",
                },
                {
                  heading: "Prepayment penalties",
                  body: "Many commercial real estate loans include prepayment restrictions — particularly for fixed-rate products. Common structures include step-down penalties (a percentage of the remaining balance that decreases over time), defeasance (replacing loan collateral with Treasury securities), or yield maintenance (compensating the lender for lost interest). Understanding the prepayment terms before signing is important if there is any possibility of selling the property or refinancing during the loan term.",
                },
                {
                  heading: "Ongoing costs and reserves",
                  body: "Lenders may require funded reserves for taxes, insurance, capital expenditures, or tenant improvements — particularly for investment properties. These reserves are held by the lender and drawn for approved purposes. Annual loan administration fees and required insurance minimums also contribute to the total cost of maintaining a commercial mortgage.",
                },
              ].map(({ heading, body }) => (
                <div key={heading} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{heading}</p>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Comparison table */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">CRE Loan Structures at a Glance</h2>
          <p className="text-[#737373] text-sm mb-6 max-w-2xl leading-relaxed">
            The three most common structures that come up in commercial real estate financing conversations.
            Figures are general benchmarks — all terms are set by individual lenders at underwriting.
          </p>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="Conventional CRE"
          />
        </div>
      </section>

      {/* 9 — Pros and cons */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white mb-2">Potential Advantages and Tradeoffs</h2>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              Commercial real estate loans are not the right tool for every situation. Understanding both
              the potential benefits and the real constraints can help frame whether CRE debt makes sense
              for a particular business goal at a particular time.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">
                  Potential Advantages
                </p>
                <ul className="space-y-3">
                  {[
                    "Longer amortization periods may result in lower monthly payments compared to shorter-term financing",
                    "Owning commercial property may build equity over time and hedge against rising lease costs",
                    "Fixed-rate structures provide payment predictability for budgeting and cash flow planning",
                    "Real property collateral can enable larger loan amounts than unsecured business credit",
                    "Interest payments on business real estate loans may be tax-deductible (consult a tax advisor)",
                    "Owner-occupied CRE may qualify for SBA programs with lower down payment requirements",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start text-sm text-[#737373]">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                  Tradeoffs to Consider
                </p>
                <ul className="space-y-3">
                  {[
                    "Large down payments (20–35%) require significant capital that may otherwise fund operations or growth",
                    "Closing timelines of 30–120 days may not suit time-sensitive transactions without bridge financing",
                    "Prepayment penalties can make it costly to exit the loan early if plans change",
                    "Personal guarantees expose personal assets if the business cannot service the debt",
                    "Illiquidity: real property is harder to sell quickly compared to equipment or other assets",
                    "Environmental, title, and appraisal contingencies can introduce uncertainty into transaction timelines",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start text-sm text-[#737373]">
                      <XIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — Alternatives */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Alternative Financing Paths</h2>
          <p className="text-[#737373] text-sm mb-6 max-w-2xl leading-relaxed">
            Depending on the specific situation, these structures may be worth evaluating alongside or
            instead of a conventional commercial real estate loan.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {alternativePaths.map((card) => (
              <FinancingPathCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Calculator link */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-1">
                Estimate Tool
              </p>
              <p className="text-sm font-semibold text-[#0f0f0f] mb-1">
                Commercial Loan Payment Calculator
              </p>
              <p className="text-sm text-[#a3a3a3] max-w-md">
                Estimate monthly payment ranges for different loan amounts, terms, and rate scenarios.
                Results are illustrative only and are not an offer or commitment from any lender.
              </p>
            </div>
            <Link
              href="/calculators/commercial-loan"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#e5e5e5] text-sm text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <FAQ items={faqItems} title="Commercial Real Estate Loan FAQs" />

      {/* 13 — CTA */}
      <CTASection
        headline="Explore commercial real estate financing options"
        subtext="Submit a brief intake and ZEO will review potential CRE financing paths that may align with your property and business profile — subject to lender underwriting and third-party approval."
        primaryLabel="Start Your Application"
        primaryHref="/apply"
        secondaryLabel="See All Financing Options"
        secondaryHref="/financing"
      />

      {/* 14 — Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-12">
        <ProductDisclaimer type="general" />
      </div>

    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Home Services Financing | ZEO.co",
  description:
    "Explore financing options for home services businesses — HVAC, plumbing, electrical, landscaping, pest control, and more. Learn what lenders evaluate and which paths may be a potential fit. Subject to underwriting by third-party providers.",
  path: "/industries/home-services",
  keywords: [
    "home services financing",
    "HVAC business loan",
    "plumbing company financing",
    "electrical contractor loan",
    "landscaping business financing",
    "home improvement contractor loan",
    "equipment financing home services",
    "working capital for contractors",
    "SBA loan home services",
    "service truck financing",
  ],
});

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Industries", href: "/industries" },
  { label: "Home Services Financing" },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function WrenchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M12.5 3.5a3 3 0 0 1 0 4.24l-7.5 7.5a1.5 1.5 0 0 1-2.12-2.12l7.5-7.5A3 3 0 0 1 12.5 3.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 2.5l2 2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1" y="5" width="11" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M12 8h3l2 3v3h-5V8z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="4.5" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13.5" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 12h2M10.5 12h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function EquipmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="12" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6V4.5a3 3 0 0 1 6 0V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 10.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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

function AcquisitionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="7" width="14" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 7V5.5a4 4 0 0 1 8 0V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 11v2M7.5 12h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const typicalMetrics = [
  {
    label: "Equipment financing range",
    value: "$10K – $2M",
    note: "Service vehicles, HVAC units, diagnostic tools",
    highlight: true,
  },
  {
    label: "SBA 7(a) max",
    value: "$5M",
    note: "For acquisitions, expansion, or real estate",
  },
  {
    label: "Typical credit score",
    value: "650+",
    note: "Many lenders prefer 680 or higher for service businesses",
  },
  {
    label: "Time in business",
    value: "2+ yrs",
    note: "Required by most conventional lenders",
  },
];

const challenges = [
  {
    heading: "Seasonality creates sharp cash flow swings",
    body: "Many home services businesses — HVAC, landscaping, roofing, pest control — are deeply seasonal. A company generating the majority of its revenue in four to six months of the year may carry thin cash reserves heading into the slow season. Lenders reviewing monthly bank statements often flag the off-season months as risk signals, even when annual performance is solid. Presenting the full-year picture alongside seasonal context is critical to accurate underwriting.",
  },
  {
    heading: "Vehicle and equipment fleets require continuous capital",
    body: "Service businesses run on trucks and tools. A single HVAC installation vehicle or plumbing service van can represent $40,000 to $80,000 in acquisition cost — and fleets of five, ten, or twenty vehicles multiply that quickly. Equipment also wears out, requiring ongoing replacement. Managing this capital cycle while keeping operating cash intact is one of the persistent financial challenges in the sector.",
  },
  {
    heading: "Rapid growth strains working capital before revenue catches up",
    body: "Home services companies that win new service contracts or expand into adjacent markets often scale headcount, inventory, and vehicles before the associated revenue arrives. Hiring a new technician, purchasing the tools they need, and covering their wages during ramp-up can create a months-long cash gap — even when the business is genuinely growing. Financing this growth gap is one of the most common reasons home services operators seek outside capital.",
  },
  {
    heading: "Acquisition activity is common and complex to finance",
    body: "Route-based businesses — pest control, lawn care, pool service — are frequently bought and sold as bundles of recurring customer accounts. Acquiring a competitor's customer base or an entire small operation can be a faster path to growth than organic customer acquisition. But acquisition financing requires documentation of both the buyer's and target's financials, and lenders evaluate the quality and retention risk of the acquired accounts carefully.",
  },
];

const financingPaths = [
  {
    icon: <TruckIcon />,
    title: "Equipment & Vehicle Financing",
    description:
      "Finance service trucks, vans, HVAC units, diagnostic equipment, and specialty tools with the assets serving as collateral. Often faster to underwrite than unsecured products because the collateral is tangible and well-established in value.",
    tags: ["Service vehicles", "HVAC units", "Tools", "Asset-backed"],
    href: "/equipment-financing",
    highlight: true,
  },
  {
    icon: <SBAIcon />,
    title: "SBA 7(a) Loans",
    description:
      "Government-backed term loans commonly used by home services businesses for acquisitions, expansions, real estate, and equipment. Longer repayment terms and structured underwriting — though the application requires significant documentation. ZEO is not the SBA or an SBA lender.",
    tags: ["Acquisition", "Expansion", "Real estate", "Up to $5M"],
    href: "/sba-loans",
  },
  {
    icon: <WorkingCapitalIcon />,
    title: "Working Capital Loans",
    description:
      "Short-to-medium-term financing for payroll, inventory, marketing, and operating expenses during growth phases or slow seasons. Useful when a business is cash-constrained but fundamentally healthy — not a substitute for sustainable unit economics.",
    tags: ["Payroll", "Inventory", "Seasonal gaps"],
    href: "/working-capital",
  },
  {
    icon: <LineOfCreditIcon />,
    title: "Business Line of Credit",
    description:
      "A revolving credit facility you draw from and repay as needed. Well-suited to the irregular cash flow patterns of seasonal home services businesses — draw during a slow month, repay when revenue peaks. Typically requires stronger credit and established business history.",
    tags: ["Revolving", "Flexible", "Seasonal"],
    href: "/business-line-of-credit",
  },
  {
    icon: <AcquisitionIcon />,
    title: "Business Acquisition Financing",
    description:
      "Structured financing for acquiring a competitor, purchasing a customer route book, or buying out a partner. SBA 7(a) is commonly evaluated for acquisitions in this sector. The quality and retention rate of acquired accounts is a key underwriting consideration.",
    tags: ["Acquisition", "Route purchase", "SBA"],
    href: "/business-acquisition-loans",
  },
  {
    icon: <EquipmentIcon />,
    title: "SBA 504 Loans",
    description:
      "Fixed-rate financing for major fixed assets — primarily real estate or large equipment. Home services companies acquiring shop facilities, warehouse space, or specialized equipment may evaluate the 504 program alongside 7(a). Requires coordination with a Certified Development Company.",
    tags: ["Fixed assets", "Real estate", "Long-term"],
    href: "/sba-loans",
  },
];

const requirements = [
  {
    label: "Time in Business",
    detail:
      "Most conventional lenders require a minimum of two years of operating history. Some equipment-specific lenders may work with businesses as young as one year when the financed asset is strong collateral. Startups face a significantly higher bar and typically need to rely on personal creditworthiness and liquidity rather than business history.",
  },
  {
    label: "Personal Credit Score",
    detail:
      "Most home services lenders look for personal FICO scores in the 650–680 range or above. Owner-operators with scores above 700 generally encounter fewer friction points in underwriting. All owners with 20% or more equity in the business are typically evaluated. Derogatory items — tax liens, judgments, recent collections — require documentation and explanation.",
  },
  {
    label: "Annual Revenue",
    detail:
      "Lenders typically want revenue that demonstrates the business can service the requested debt. Common minimums range from $150,000 to $300,000 annually for smaller loan requests, with higher thresholds for larger facilities. Seasonal businesses should prepare to present trailing twelve-month revenue alongside monthly seasonality context.",
  },
  {
    label: "Licensing and Insurance",
    detail:
      "Home services businesses operating in licensed trades — HVAC, plumbing, electrical, pest control — must hold current trade licenses, general liability insurance, and workers' compensation coverage. Lenders and equipment finance companies routinely verify these before funding. Licensing lapses or coverage gaps can halt a financing process.",
  },
  {
    label: "Business Financial Documentation",
    detail:
      "Expect to provide two to three years of business tax returns, current profit and loss statements, balance sheets, and three to six months of business bank statements. Organized, reconciled financials move through underwriting significantly faster than incomplete or inconsistent records.",
  },
  {
    label: "Fleet and Equipment Documentation",
    detail:
      "For vehicle and equipment financing specifically, lenders want VIN numbers, year/make/model, current mileage or hours, and vendor quotes or dealer invoices. For existing fleet refinancing, appraisals or FMV estimates may be requested. Documenting what you already own also helps lenders understand your existing collateral position.",
  },
];

const faqItems = [
  {
    q: "What financing options are most commonly used by HVAC, plumbing, and electrical contractors?",
    a: "The most frequently evaluated financing paths for trade-based home services businesses are equipment and vehicle financing, working capital loans or lines of credit, and SBA 7(a) loans for larger capital needs or acquisitions. Equipment financing tends to be accessible for established businesses because the service vehicle or specialized equipment serves as collateral — reducing the lender's exposure relative to unsecured products. SBA 7(a) programs are commonly used when the capital requirement exceeds what shorter-term products can support, particularly for acquiring a competitor, purchasing real estate for a shop facility, or funding a significant expansion. The right choice depends heavily on what the capital will actually be used for, the business's financial profile, and time horizon.",
  },
  {
    q: "Can I finance a fleet of service trucks for my growing home services business?",
    a: "Fleet financing for service vehicles is an established category within equipment finance. Lenders who specialize in commercial vehicle financing can structure transactions covering multiple vehicles simultaneously, with the vehicles themselves serving as collateral. Approval and terms depend on the age and condition of the vehicles, the business's credit profile and revenue, and the number of units being financed. Fleet financing is typically structured as individual loans per vehicle or under a blanket fleet facility, depending on size. All financing is subject to lender underwriting — fleet size and vehicle age affect what lenders are willing to advance.",
  },
  {
    q: "How do lenders evaluate a home services business with highly seasonal revenue?",
    a: "Lenders review monthly bank statements alongside annual tax returns, so seasonal fluctuations are visible in the underwriting process. An experienced lender who understands the home services sector will typically evaluate performance on a trailing twelve-month or annual basis rather than flagging individual slow months in isolation. That said, how you present the business matters: bringing a clear narrative around your seasonal pattern — when the peak months are, how you manage cash during off-season months, and what your YoY revenue trend looks like — is more persuasive than allowing a lender to form their own interpretation from raw statements. Seasonal businesses may also benefit from revolving credit facilities over term loans, since they can draw during slow periods and repay during peak revenue months.",
  },
  {
    q: "What does it mean to acquire a 'route' or customer book in home services, and how is that financed?",
    a: "In recurring-service businesses — pest control, lawn care, pool service, water treatment — customer accounts are often sold as a bundle referred to as a 'route.' The buyer acquires the service agreements and recurring revenue those customers represent, rather than physical assets. Route acquisition financing typically involves valuing the acquired revenue stream (often priced at a multiple of monthly recurring revenue), assessing the historical retention rate of those accounts, and structuring a loan that the acquired revenue can support. SBA 7(a) loans are commonly used for route acquisitions in the home services space. Lenders will evaluate both the buyer's financial strength and the quality of the accounts being acquired, including their age, pricing, and churn history.",
  },
  {
    q: "Do home services businesses need collateral to qualify for financing?",
    a: "It depends on the product. Equipment and vehicle financing is inherently asset-secured — the financed equipment or vehicle is the collateral, which can make approval more accessible than unsecured lending. SBA loans require personal guarantees from all owners with 20% or more equity and may include liens on business assets; the SBA does not require collateral to fully cover the loan amount, but lenders are required to take available collateral when it exists. Unsecured working capital loans and lines of credit do not require specific collateral, but typically require personal guarantees and are evaluated heavily on credit history and cash flow. All home services financing is subject to individual lender underwriting requirements.",
  },
];

// ── Page Component ─────────────────────────────────────────────────────────────

export default function HomeServicesFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industry"
        title="Home Services Financing"
        subtitle="HVAC companies, plumbers, electricians, landscapers, pest control operators, and other home services businesses face a distinct set of financing challenges — seasonal cash flow swings, continuous vehicle and equipment investment, and growth that outpaces working capital. Explore which financing structures are most commonly evaluated in this sector, and what lenders typically look for."
      />

      {/* 2 — Key financing challenges */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Industry Challenges
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">
              Why home services businesses seek outside financing
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Home services operators often run profitable businesses that are nonetheless capital-constrained — either because of seasonal patterns, fleet investment cycles, or the lag between winning new business and having the working capital to service it. The financing challenges below reflect structural realities of the sector, not individual business weakness.
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
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">
              Products home services businesses most commonly explore
            </h2>
            <p className="text-[#737373] leading-relaxed">
              No single financing structure fits every business. The most appropriate path depends on what the capital is being used for, how the business is structured, and the owner's financial profile. All options below are subject to underwriting by third-party providers — approval and terms are not guaranteed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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

          {/* Inline note on route acquisitions */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  <WrenchIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1">
                    Note on route and account acquisitions
                  </p>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-2xl">
                    Pest control, lawn care, pool service, and water treatment businesses often grow through acquiring competitors' customer routes. This type of acquisition — purchasing recurring revenue rather than physical assets — is a distinct financing scenario with its own underwriting criteria. SBA 7(a) programs are a commonly evaluated path, with lenders assessing both the buyer's strength and the quality of the accounts being acquired. Subject to underwriting.
                  </p>
                </div>
              </div>
              <Link
                href="/business-acquisition-loans"
                className="flex-shrink-0 text-sm text-[#0f0f0f] hover:text-[#0f0f0f] transition-colors flex items-center gap-1.5"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

      {/* 4 — Typical requirements and metrics */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Lender Requirements
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">
              What lenders typically evaluate in home services applications
            </h2>
            <p className="text-[#737373] leading-relaxed">
              The benchmarks below reflect general patterns across lenders who work with home services businesses. Actual requirements vary by lender, product type, loan size, and individual business profile. Meeting these thresholds does not guarantee approval — all financing is subject to underwriting by third-party providers.
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

      {/* 5 — Industry context: preparation and underwriting */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Underwriting Context
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4">
                How lenders think about home services risk
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Home services is generally viewed by commercial lenders as a moderately favorable sector — businesses tend to have recurring customer relationships, relatively predictable service economics, and asset collateral in the form of vehicles and equipment. This compares favorably to sectors like restaurants, where margins are thinner and customer relationships are less sticky.
                </p>
                <p>
                  That said, lenders do apply scrutiny specific to the sector. Seasonality is the most common issue: a landscaping company or roofing contractor with a three-month gap in bank deposits raises questions about how operating expenses are funded during that period. Having a clear answer — a line of credit, owner reserves, or strong receivables from a prior peak — is part of a credible application.
                </p>
                <p>
                  For trade-licensed businesses — HVAC, plumbing, electrical — lenders also verify that the business is properly licensed to operate in the states and jurisdictions where it works. A contractor performing unlicensed work, or a license in the owner's name rather than the entity's name, can complicate or stop a financing process. Resolving these issues before approaching lenders saves significant time.
                </p>
                <p>
                  Owner concentration risk is another factor lenders weigh in this sector. A one-technician shop where the owner is the primary service provider, salesperson, and administrator presents different succession and operational risk than a business with a management team and employee technicians. As a business grows and becomes less dependent on a single individual, financing options typically broaden.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">
                Factors That Strengthen a Home Services Application
              </p>
              {[
                {
                  factor: "Recurring revenue and customer retention data",
                  note: "Service agreements, maintenance contracts, and membership programs create predictable recurring revenue. Documenting your retention rate and average customer lifetime strengthens any financing request.",
                },
                {
                  factor: "Current trade licenses and insurance certificates",
                  note: "Having valid contractor licenses, liability coverage, and workers' compensation current and in the business entity's name removes a common underwriting friction point before it arises.",
                },
                {
                  factor: "Organized vehicle and equipment records",
                  note: "A clean fleet schedule — VINs, model years, mileage, condition — accelerates equipment financing underwriting and demonstrates operational discipline.",
                },
                {
                  factor: "Seasonal narrative with off-season cash management",
                  note: "Lenders reviewing monthly bank statements will see the slow months. Proactively explaining your seasonal pattern and how you manage cash in those periods is more persuasive than leaving it to interpretation.",
                },
                {
                  factor: "Demonstrated YoY revenue growth",
                  note: "Consistent revenue growth over two or more years signals a viable business with market traction. Flat or declining revenue trends require additional context and explanation.",
                },
                {
                  factor: "Specific, documented use of funds",
                  note: "A vendor quote for a service truck, a signed agreement for a route acquisition, or a contractor estimate for a shop build-out gives lenders confidence that capital will be deployed productively — not used to cover ongoing operating losses.",
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

      {/* 6 — FAQ */}
      <FAQ
        items={faqItems}
        title="Home Services Financing — Common Questions"
      />

      {/* 7 — CTA */}
      <CTASection
        headline="Explore financing options for your home services business"
        subtext="Submit a brief intake and ZEO will review your situation against potential financing paths. All financing is subject to underwriting and approval by third-party providers. Results are not guaranteed."
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

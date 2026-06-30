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
  title: "Restaurant Financing | ZEO.co",
  description:
    "Explore financing options for restaurants, bars, and food-service businesses. Learn how restaurant operators may qualify for SBA loans, equipment financing, working capital lines, and more — subject to underwriting by third-party providers.",
  path: "/industries/restaurants",
  keywords: [
    "restaurant financing",
    "restaurant business loan",
    "restaurant equipment financing",
    "SBA loan restaurant",
    "working capital for restaurants",
    "restaurant startup loan",
    "bar financing",
    "food service business loan",
    "restaurant line of credit",
    "restaurant expansion financing",
  ],
});

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const breadcrumbs = [
  { label: "Industries", href: "/industries" },
  { label: "Restaurant Financing" },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function UtensilsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M6 2v5c0 1.1.9 2 2 2v7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M4 2v3M8 2v3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M13 2c0 0 2 1.5 2 4.5S13 11 13 11v5"
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

function FactoringIcon() {
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

function MCAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 7.5h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 11h2M9 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const typicalMetrics = [
  {
    label: "SBA 7(a) Max",
    value: "$5M",
    note: "For qualified restaurant acquisitions and expansions",
    highlight: true,
  },
  {
    label: "Equipment Loan Range",
    value: "$25K–$2M",
    note: "Commercial kitchen, POS systems, HVAC, refrigeration",
  },
  {
    label: "Typical Credit Score",
    value: "650+",
    note: "Most lenders look for 650 minimum; higher is stronger",
  },
  {
    label: "Industry Failure Rate",
    value: "17%",
    note: "Year-one closures; lenders weigh concept risk carefully",
  },
];

const financingPaths = [
  {
    icon: <SBAIcon />,
    title: "SBA 7(a) Loans",
    description:
      "Among the most commonly evaluated programs for restaurant acquisitions, build-outs, and expansions. Government backing may allow longer terms and lower injection requirements than conventional lending. Subject to SBA eligibility and lender underwriting.",
    tags: ["Acquisition", "Build-out", "Expansion", "Up to $5M"],
    href: "/sba-loans",
    highlight: true,
  },
  {
    icon: <EquipmentIcon />,
    title: "Equipment Financing",
    description:
      "Commercial kitchen equipment, refrigeration units, POS systems, hood ventilation, and walk-in coolers can often be financed with the equipment itself as collateral — potentially allowing faster approvals than unsecured lending.",
    tags: ["Commercial kitchen", "Asset-backed", "Faster close"],
    href: "/equipment-financing",
  },
  {
    icon: <WorkingCapitalIcon />,
    title: "Working Capital",
    description:
      "Restaurants face perpetual cash flow gaps between food costs, labor, and revenue timing. A working capital loan or revolving line of credit may help manage payroll, supplier invoices, seasonal slowdowns, and marketing cycles.",
    tags: ["Cash flow", "Seasonal", "Payroll", "Revolving"],
    href: "/working-capital",
  },
  {
    icon: <MCAIcon />,
    title: "Merchant Cash Advance",
    description:
      "Credit-card-heavy restaurants sometimes evaluate MCAs for fast access to capital against future card receivables. Factor rates can be high — review total repayment carefully. Not structured as a loan; compliance disclosures vary by state.",
    tags: ["Fast funding", "Card-based", "High cost"],
    href: "/merchant-cash-advance",
  },
];

const challenges = [
  {
    heading: "High operating costs with thin margins",
    body: "Food and beverage costs, labor, rent, and utilities frequently consume 70–85% of restaurant revenue. This leaves limited free cash flow to service debt, which raises underwriting scrutiny on coverage ratios. Lenders typically want to see DSCR above 1.25x before extending credit — a hurdle many operators approach carefully.",
  },
  {
    heading: "Seasonal and event-driven revenue swings",
    body: "Many restaurants experience significant revenue variation across seasons, holidays, and local events. Lenders evaluating monthly cash flow may flag months with below-average receipts as risk indicators, even when annual performance is solid. Presenting trailing twelve-month data alongside seasonal context can help frame the picture accurately.",
  },
  {
    heading: "Capital-intensive equipment and build-out requirements",
    body: "Opening or refurbishing a restaurant requires substantial upfront capital — commercial kitchen infrastructure, ventilation systems, refrigeration, and build-out costs often run well into six figures before a single cover is served. Financing these assets through equipment loans or SBA programs is common, but requires clear documentation of costs and projected returns.",
  },
  {
    heading: "Short operating history for new concepts",
    body: "Lenders underwriting startups or early-stage restaurants have no historical financials to anchor projections. This creates a higher bar for approval — owners typically need to demonstrate personal financial strength, relevant industry experience, and a credible business plan with conservative projections. Many lenders require 12–24 months of operating history before considering unsecured credit.",
  },
];

const requirements = [
  {
    label: "Minimum Time in Business",
    detail:
      "Most conventional lenders require 1–2 years of operating history. SBA programs can accommodate newer businesses in some cases, particularly with strong personal financials and a comprehensive business plan. Startups face a higher bar and typically need to demonstrate significant personal liquidity and industry experience.",
  },
  {
    label: "Personal Credit Score",
    detail:
      "Most lenders look for personal FICO scores of 650 or higher. Restaurant lending is considered higher-risk by many underwriters, so scores above 700 carry more weight. All owners with 20% or greater equity interest are typically evaluated, and any significant derogatory history — bankruptcy, judgments, or collections — will require explanation.",
  },
  {
    label: "Revenue and Cash Flow Documentation",
    detail:
      "Expect to provide two to three years of business tax returns (if available), monthly bank statements, and POS or sales reports. Lenders will calculate debt-service coverage using your actual net operating income — not topline revenue. Presenting clean, reconciled books significantly improves the underwriting process.",
  },
  {
    label: "Concept and Use-of-Funds Clarity",
    detail:
      "Lenders want a clear picture of what the capital will fund and how it generates return. A vague request for 'operating capital' is harder to underwrite than a specific equipment purchase or build-out project with documented cost estimates. The more concrete the use of funds, the more straightforward lender review tends to be.",
  },
  {
    label: "Collateral and Personal Guarantee",
    detail:
      "SBA loans require personal guarantees from all 20%+ owners. Equipment loans use the financed assets as collateral. Unsecured lines of credit may require both a personal guarantee and general business liens. Owners should understand that personal assets can be at risk on personally-guaranteed debt — this is standard for small business lending, not unique to restaurants.",
  },
  {
    label: "Lease and Location Documentation",
    detail:
      "Lenders want to confirm the restaurant has stable occupancy through the loan term. A lease expiring in 18 months on a 7-year loan creates a structural mismatch that underwriters flag. Providing the current lease, remaining term, renewal options, and any landlord correspondence supports lender review. Property-owning operators may use the real estate as collateral.",
  },
];

const faqItems = [
  {
    q: "Can a brand-new restaurant qualify for financing?",
    a: "New restaurants face a higher bar because lenders have no historical financial performance to underwrite. That said, it is not impossible. SBA programs can accommodate startups when the owner brings strong personal financials, meaningful liquidity for an equity injection, relevant industry or management experience, and a credible business plan with realistic projections. Startup restaurants are often evaluated more on the owner's profile than the business's, because the business has no track record. Expect lenders to scrutinize the concept, location, lease terms, and projected ramp-up carefully.",
  },
  {
    q: "What is the typical down payment or equity injection for a restaurant SBA loan?",
    a: "Under SBA 7(a), borrowers typically inject 10–20% of total project costs from personal liquid assets. For a restaurant acquisition or build-out, this means having documented cash or near-cash savings — not equity from another property or borrowed funds. The injection percentage can vary based on loan size, business strength, and lender policy. Some lenders require more for startup deals where there is no operating history. Confirming eligible injection sources early in the process avoids surprises at closing.",
  },
  {
    q: "Does the type of restaurant concept affect financing eligibility?",
    a: "Yes, in practice. Lenders assess concept risk as part of underwriting. An established QSR franchise location with a known brand and national unit economics is underwritten differently than an independent fine-dining startup in a new market. High-concept or niche concepts with limited comparable operating data may face more lender skepticism. Franchise brands on the SBA Franchise Directory benefit from streamlined review. Independent operators should be prepared to support their concept with market analysis, comparable data, and a detailed financial model.",
  },
  {
    q: "Can I finance kitchen equipment separately from a broader restaurant loan?",
    a: "Yes. Equipment financing is a distinct product that uses the equipment itself as collateral, which can allow faster approvals and potentially different terms than a blanket SBA or term loan. It is common for restaurant operators to finance specific equipment purchases — commercial refrigeration, ovens, hood systems, POS infrastructure — through dedicated equipment loans or leases, either alongside or independently of other financing. Approval timelines and documentation requirements differ by lender and ticket size.",
  },
  {
    q: "How do lenders typically view seasonal revenue patterns in restaurants?",
    a: "Lenders evaluate cash flow on an annual basis, but they also review month-to-month bank statements to understand revenue consistency. Seasonal swings are common in food service and most experienced lenders understand this — but unexplained gaps or sharp declines without context can raise questions. Presenting a clear narrative around seasonal patterns, how the business manages cash during slower periods, and any steps taken to smooth revenue (catering, events, delivery partnerships) can help frame the data favorably. Providing trailing twelve-month data alongside year-over-year trends gives lenders the fuller picture.",
  },
];

// ── Page Component ─────────────────────────────────────────────────────────────

export default function RestaurantFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industry"
        title="Restaurant Financing"
        subtitle="Restaurants operate in one of the most capital-intensive sectors in small business. From build-out and equipment to working capital and expansion, explore the financing paths that operators in the food-service industry most commonly evaluate — all subject to underwriting by third-party providers."
      />

      {/* 2 — Key financing challenges */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Industry Challenges
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What makes restaurant financing different
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Lenders underwrite restaurant loans against a backdrop of well-documented industry risk. Understanding those pressure points — before approaching a lender — helps restaurant operators prepare a stronger, more credible financing request.
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
              Products restaurant operators most commonly explore
            </h2>
            <p className="text-[#737373] leading-relaxed">
              No single financing product fits every situation. The right structure depends on the purpose of the capital, the age of the business, available collateral, and the operator's financial profile. The options below cover the most relevant paths for food-service businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

          {/* Revenue-based and factoring callout */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  <FactoringIcon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1">
                    Revenue-Based Financing
                  </p>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-2xl">
                    Some restaurant operators with consistent card or delivery-platform revenue explore revenue-based financing structures. Repayment is tied to a percentage of future receipts rather than fixed monthly payments — which may suit businesses with variable revenue. Review total repayment amounts and factor rates carefully before accepting any offer. Subject to underwriting.
                  </p>
                </div>
              </div>
              <Link
                href="/revenue-based-financing"
                className="flex-shrink-0 text-sm text-[#0f0f0f] hover:text-white transition-colors flex items-center gap-1.5"
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

      {/* 4 — Typical requirements and metrics */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Lender Requirements
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What lenders typically look for in restaurant applications
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Requirements vary by lender, program, loan size, and whether the business is a startup or established operation. The following reflects general patterns across restaurant financing — not a guarantee of eligibility. All financing is subject to underwriting and approval by third-party providers.
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

      {/* 5 — Industry context: what lenders actually think */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Underwriting Context
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                How lenders typically approach restaurant risk
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Food service is broadly considered higher-risk by commercial lenders. Industry data on failure rates, thin margins, and sensitivity to external shocks — labor costs, supply chain, discretionary spending — inform underwriting across every product type. This does not mean restaurants cannot access financing; it means the bar for documentation, owner strength, and deal structure is generally higher than in other industries.
                </p>
                <p>
                  Lenders applying restaurant risk overlays often look closely at debt-service coverage ratio (DSCR), which measures how much net operating income is available to service debt relative to total debt payments. A DSCR of 1.25x or better is a common threshold — meaning the business generates at least 25 cents of operating income for every dollar of debt obligation. Thin-margin operators frequently encounter friction at this threshold.
                </p>
                <p>
                  The distinction between full-service dining, quick-service, catering-focused, and delivery-first models matters to lenders. Each has different capital requirements, revenue predictability, and margin structures. A ghost kitchen operator seeking working capital is underwritten differently from a full-service sit-down restaurant seeking a build-out loan. Being able to clearly articulate your model, unit economics, and how capital will be deployed strengthens any application.
                </p>
                <p>
                  Franchise restaurants often have an advantage in underwriting: the franchisor's brand, systems, and unit economics data provide lenders with external validation. Independent operators should compensate with thorough financial documentation, comparable market data, and a business plan that demonstrates an informed approach to the specific risks of their concept and location.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-4">
                Factors That Strengthen a Restaurant Application
              </p>
              {[
                {
                  factor: "Demonstrated operating history",
                  note: "Two or more years of profitable operations with clean tax returns and reconciled books gives lenders verifiable data rather than projections.",
                },
                {
                  factor: "Stable or growing revenue trend",
                  note: "Year-over-year revenue growth, even modest, signals that the business is viable and not in decline. Declining trends require explanation.",
                },
                {
                  factor: "Strong owner personal credit and liquidity",
                  note: "A 700+ FICO score and demonstrable personal savings reduce perceived risk when the business profile has gaps — particularly for newer operators.",
                },
                {
                  factor: "Secure long-term lease",
                  note: "A lease that extends well beyond the loan term with favorable renewal options removes a major lender concern about location stability.",
                },
                {
                  factor: "Specific, well-documented use of funds",
                  note: "Equipment quotes, contractor estimates, or a signed purchase agreement give lenders confidence that capital will be deployed productively.",
                },
                {
                  factor: "Industry and management experience",
                  note: "Operators who have worked in food service — as owners, managers, or in related roles — are viewed more favorably than first-time entrants to the industry.",
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
        title="Restaurant Financing FAQs"
      />

      {/* 7 — CTA */}
      <CTASection
        headline="Explore financing options for your restaurant"
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

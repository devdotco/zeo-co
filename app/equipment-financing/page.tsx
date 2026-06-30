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
  title: "Equipment Financing for Business | ZEO.co",
  description:
    "Learn how equipment financing works for businesses — typical structures, requirements, costs, and how to evaluate whether it may be a fit for your situation. Subject to underwriting by third-party providers.",
  path: "/equipment-financing",
  keywords: [
    "equipment financing",
    "equipment loans for business",
    "equipment leasing",
    "heavy equipment financing",
    "commercial equipment financing",
    "business equipment loan",
    "equipment financing requirements",
    "equipment financing rates",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 2v2M9 14v2M2 9h2M14 9h2M4.22 4.22l1.42 1.42M12.36 12.36l1.42 1.42M4.22 13.78l1.42-1.42M12.36 5.64l1.42-1.42"
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
      <path
        d="M2 4h9v7H2zM11 7h3l2 2v4h-5V7z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 14V8l4-3v3l4-3v3l4-3v8H2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <rect x="6" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v6M6 9h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M6 3v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M8 9v6M12 3v12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ConstructionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 14h14M4 14V8l2-4h6l2 4v6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="7" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LeaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 12h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Financing Options", href: "/financing" },
  { label: "Equipment Financing" },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "Does the equipment serve as collateral?",
    a: "In most equipment financing structures, the equipment itself secures the financing. This means the lender may retain a security interest in the asset until the obligation is satisfied. Some lenders may also require additional collateral or a personal guarantee depending on deal size, credit profile, and asset type.",
  },
  {
    q: "Can a startup or early-stage business qualify for equipment financing?",
    a: "Some lenders work with businesses that have been operating for as little as six months, particularly when the equipment has high resale value and the borrower has a strong personal credit history. However, most conventional equipment lenders prefer at least one to two years in business with documented revenue. Early-stage businesses may face stricter terms or higher down payment requirements, and are subject to each lender's own underwriting criteria.",
  },
  {
    q: "What is the difference between an equipment loan and an equipment lease?",
    a: "An equipment loan involves borrowing to purchase the asset outright — at the end of the term, you own the equipment free and clear. An equipment lease is structured more like a rental agreement, where you use the equipment for a defined period and return it at the end (or purchase it for a residual amount). Leases may offer lower monthly payments but you do not build equity in the asset. Each structure has different tax, accounting, and cash-flow implications; consult a qualified accountant or advisor.",
  },
  {
    q: "How long does the equipment financing process typically take?",
    a: "Timelines vary by lender and deal complexity. Some specialty equipment lenders can issue approvals within one to three business days for straightforward applications. More complex deals — larger loan sizes, older equipment, specialized industries, or borrowers with complicated financial histories — may take several weeks. Having documentation prepared in advance (financials, equipment invoices or appraisals, tax returns) can reduce processing time.",
  },
  {
    q: "Is used equipment eligible for financing?",
    a: "Many lenders finance both new and used equipment. Used equipment may be subject to additional scrutiny — lenders typically consider the asset's age, remaining useful life, depreciation, and current market value. Some lenders require a formal appraisal for older or highly specialized equipment. The loan-to-value ratio offered on used equipment may be lower than for new assets.",
  },
];

// ── Comparison data ───────────────────────────────────────────────────────────

const COMPARISON_COLUMNS = ["Equipment Loan", "Equipment Lease", "Working Capital Loan"];

const COMPARISON_ROWS = [
  {
    feature: "Ownership",
    "Equipment Loan": "You own at payoff",
    "Equipment Lease": "Typically return or buy",
    "Working Capital Loan": "N/A — cash funding",
  },
  {
    feature: "Collateral",
    "Equipment Loan": "The equipment itself",
    "Equipment Lease": "Leased asset",
    "Working Capital Loan": "Varies by lender",
  },
  {
    feature: "Down payment",
    "Equipment Loan": "Often 10–20%",
    "Equipment Lease": "Often 0–1 payment",
    "Working Capital Loan": "Not typically required",
  },
  {
    feature: "Tax treatment",
    "Equipment Loan": "Depreciation + interest",
    "Equipment Lease": "Lease payments (consult CPA)",
    "Working Capital Loan": "Interest deduction",
  },
  {
    feature: "Typical term",
    "Equipment Loan": "2–7 years",
    "Equipment Lease": "1–5 years",
    "Working Capital Loan": "3–24 months",
  },
  {
    feature: "Best for",
    "Equipment Loan": "Long-lived assets",
    "Equipment Lease": "Technology or assets with rapid obsolescence",
    "Working Capital Loan": "Flexible cash needs",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EquipmentFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Financing Options", url: "https://zeo.co/financing" },
          { name: "Equipment Financing", url: "https://zeo.co/equipment-financing" },
        ])}
      />

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Financing"
        title="Equipment Financing"
        subtitle="Structured financing that lets businesses acquire machinery, vehicles, technology, and other physical assets while spreading the cost over time. Subject to lender underwriting and third-party approval."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical loan amounts"
              value="$10K – $5M+"
              note="Subject to lender underwriting"
            />
            <MetricCard
              label="Common term range"
              value="2 – 7 yrs"
              note="Varies by asset type and lender"
            />
            <MetricCard
              label="Time to approval"
              value="1 – 15 days"
              note="Depends on deal complexity"
              highlight
            />
            <MetricCard
              label="Down payment (typical)"
              value="10 – 20%"
              note="Some programs may differ"
            />
          </div>
        </div>
      </section>

      {/* ── Who it is for ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Who it may fit
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                Businesses that rely on physical assets to operate
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm">
                Equipment financing is commonly used by businesses where physical assets are
                central to revenue generation — not just a convenience. If the equipment you
                need would materially expand capacity, replace a critical asset, or enable a
                new line of business, equipment financing may be worth evaluating as one
                potential path.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Capital-intensive operations",
                  body:
                    "Manufacturing plants, logistics operators, agricultural businesses, and construction firms often require expensive, long-lived equipment. Financing allows them to deploy assets without exhausting working capital reserves.",
                },
                {
                  heading: "Growth-stage businesses adding capacity",
                  body:
                    "Businesses scaling into new markets or fulfilling larger contracts may need equipment ahead of the cash flow that contract generates. Equipment financing can bridge that gap, subject to underwriting.",
                },
                {
                  heading: "Businesses replacing aging assets",
                  body:
                    "Aging equipment carries maintenance risk and can hurt productivity. Financing a replacement before the old asset fails may be preferable to an emergency purchase — and lenders often consider the collateral value of newer equipment favorably.",
                },
                {
                  heading: "Professional service firms upgrading technology",
                  body:
                    "Medical practices, dental offices, veterinary clinics, and labs regularly acquire diagnostic or treatment equipment with multi-year useful lives. Equipment financing aligns payment schedules with the asset's productive life.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                >
                  <h3 className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{item.heading}</h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            How it works
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-8 text-balance">
            From application to funded asset
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                step: "1",
                title: "Identify the asset",
                body:
                  "Know what you need — make, model, new or used, vendor quote or appraisal. Lenders want to understand the asset before underwriting it.",
              },
              {
                step: "2",
                title: "Submit an application",
                body:
                  "You or an advisor submits a financing application covering your business financials, time in business, credit history, and the specific equipment.",
              },
              {
                step: "3",
                title: "Underwriting review",
                body:
                  "The lender evaluates creditworthiness, business cash flow, the asset's collateral value, and your industry. Approval is not guaranteed and terms vary.",
              },
              {
                step: "4",
                title: "Term sheet and closing",
                body:
                  "If approved, you receive a term sheet outlining loan amount, rate, term, payment schedule, and any fees. Review carefully before signing.",
              },
              {
                step: "5",
                title: "Funding and delivery",
                body:
                  "Funds are typically paid to the vendor. You take possession of the equipment and begin repayment per the agreed schedule.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <span className="inline-block text-[0.65rem] font-semibold tabular-nums text-[#0f0f0f] bg-[#f5f5f5] border border-[#0f0f0f]/20 rounded-md px-2 py-0.5 mb-3">
                  Step {s.step}
                </span>
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{s.title}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common use cases ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Common use cases
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-8 text-balance">
            Industries and asset types that commonly use equipment financing
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<TruckIcon />}
              title="Transportation and Logistics"
              description="Semi-trucks, trailers, refrigerated units, and last-mile delivery vehicles. Lenders familiar with fleet financing often specialize in this category."
              tags={["Vehicles", "Fleet", "Commercial trucking"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<ConstructionIcon />}
              title="Construction and Earthmoving"
              description="Excavators, bulldozers, cranes, backhoes, and related heavy equipment. Collateral values are typically strong for well-maintained assets."
              tags={["Heavy equipment", "Construction", "Earthmoving"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<FactoryIcon />}
              title="Manufacturing"
              description="CNC machines, robotic assembly lines, industrial presses, and specialized production equipment with multi-year productive lives."
              tags={["CNC", "Industrial", "Production"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<MedicalIcon />}
              title="Medical and Dental"
              description="Imaging systems, dental chairs, surgical equipment, and diagnostic devices. Many specialty lenders focus exclusively on healthcare equipment."
              tags={["Imaging", "Diagnostic", "Healthcare"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<RestaurantIcon />}
              title="Foodservice and Hospitality"
              description="Commercial ovens, walk-in coolers, HVAC systems, and point-of-sale infrastructure for restaurants, catering operations, and hotels."
              tags={["Restaurant", "Commercial kitchen", "HVAC"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<GearIcon />}
              title="Technology and IT Infrastructure"
              description="Servers, networking equipment, specialized computing hardware, and broadcast or production gear — often via structured lease arrangements."
              tags={["Servers", "Technology", "Leasing"]}
              href="/equipment-financing"
            />
          </div>
        </div>
      </section>

      {/* ── Typical requirements ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Typical requirements
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                What lenders generally evaluate
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                These are general benchmarks drawn from common lender practices. Each provider
                sets its own criteria, and requirements vary significantly by loan size,
                industry, asset type, and credit structure. Meeting these thresholds does not
                guarantee approval.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Personal credit score",
                    value: "650+ (many conventional lenders)",
                    note: "Some specialty and hard-money equipment lenders work below this threshold with compensating factors",
                  },
                  {
                    label: "Annual business revenue",
                    value: "Often $100K – $250K minimum",
                    note: "Higher loan amounts typically require higher documented revenue",
                  },
                  {
                    label: "Time in business",
                    value: "1–2 years preferred",
                    note: "Some lenders work with businesses as young as 6 months for the right asset and credit profile",
                  },
                  {
                    label: "Down payment",
                    value: "Typically 10–20%",
                    note: "Startups or borrowers with weaker credit may be asked for more",
                  },
                  {
                    label: "Documentation",
                    value: "Tax returns, bank statements, equipment quote or invoice",
                    note: "Larger transactions may require full business financials and CPA-prepared statements",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                  >
                    <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{req.label}</p>
                      <p className="text-sm text-[#737373] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Cost discussion ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Understanding cost
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                What drives the cost of equipment financing
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                ZEO.co does not quote, set, or guarantee financing rates. Actual costs depend
                on the factors below and the specific terms offered by a third-party provider
                after underwriting your application.
              </p>
              <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Credit profile.</span>{" "}
                  Borrowers with stronger personal and business credit histories typically
                  receive more favorable pricing. Lenders price risk — a borrower with a thin
                  credit file or past delinquencies may see higher rates or be asked for
                  additional collateral.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Asset type and age.</span>{" "}
                  Equipment that holds its value well (certain vehicles, medical equipment,
                  construction assets) is generally easier to finance than highly specialized
                  or rapidly depreciating assets. Used equipment may carry different pricing
                  than new.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Loan term.</span>{" "}
                  Longer terms spread payments out but typically result in more total interest
                  paid. Shorter terms mean higher monthly payments but lower overall cost of
                  capital, all else equal.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Loan-to-value ratio.</span>{" "}
                  Financing 100% of an asset's value carries more risk for the lender than
                  financing 80%. A larger down payment may improve terms offered.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Origination and documentation fees.</span>{" "}
                  Many lenders charge upfront fees in addition to periodic interest. Always
                  evaluate the total cost — not just the stated interest rate — before
                  accepting any offer. Ask for an APR or total repayment amount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pros and cons ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Weighing your options
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-8 text-balance">
            Potential advantages and drawbacks
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Potential advantages
              </h3>
              <ul className="space-y-3">
                {[
                  "Preserves working capital — you acquire a productive asset without depleting cash reserves.",
                  "The equipment itself typically serves as collateral, which may reduce personal guarantee requirements compared to unsecured financing.",
                  "Fixed payment schedules make cash flow planning more predictable.",
                  "Potential tax benefits through depreciation (Section 179) and interest deductions — consult a qualified tax advisor.",
                  "Builds business credit history when payments are reported to commercial bureaus.",
                  "Some lenders offer same-as-cash or deferred payment structures depending on asset type.",
                ].map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg
                      className="flex-shrink-0 mt-0.5 text-[#0f0f0f]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 7.5l3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#a3a3a3] uppercase tracking-wide mb-4">
                Potential drawbacks
              </h3>
              <ul className="space-y-3">
                {[
                  "Total cost of capital may be higher than purchasing with cash, particularly for shorter-lived assets.",
                  "Default risk — the lender may repossess the equipment if payments are not made as agreed.",
                  "Approval is not guaranteed; lenders have their own credit, revenue, and industry criteria.",
                  "Personal guarantees are common, meaning your personal assets may be at risk depending on deal structure.",
                  "Technology equipment may depreciate faster than the loan term, leaving you 'underwater' on an asset.",
                  "Prepayment penalties may apply — review the full loan agreement before signing.",
                ].map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg
                      className="flex-shrink-0 mt-0.5 text-[#a3a3a3]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 3l8 8M11 3l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Structure comparison
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-6 text-balance">
            Equipment loan vs. lease vs. working capital
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            This table summarizes general structural differences between common approaches.
            Actual terms depend on the lender and your specific situation.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Equipment Loan"
          />
        </div>
      </section>

      {/* ── Alternatives ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Alternatives to consider
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Other financing paths that may be relevant
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Equipment financing is one option among many. Depending on your business profile,
            industry, and how you plan to use the capital, one of these alternatives may be a
            better potential fit — or a useful complement.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loans"
              description="SBA-backed term loans that can be used for equipment, real estate, or working capital. Longer terms and potentially lower rates for qualifying businesses."
              tags={["SBA", "Government-backed", "Term loan"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<WorkingCapitalIcon />}
              title="Working Capital Loans"
              description="Cash-based financing not tied to a specific asset. More flexible in use but typically shorter terms and may carry higher rates."
              tags={["Short-term", "Cash", "Flexible use"]}
              href="/working-capital"
            />
            <FinancingPathCard
              icon={<LeaseIcon />}
              title="Equipment Leasing"
              description="Use equipment without purchasing it. Lower upfront costs and potential flexibility at term-end, but no ownership or equity built."
              tags={["No ownership", "Lower payments", "Return or buy"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<FactoryIcon />}
              title="Asset-Based Lending"
              description="Borrowing against a broader pool of business assets including receivables, inventory, and equipment. May offer higher advance rates for asset-heavy businesses."
              tags={["ABL", "Receivables", "Inventory"]}
              href="/financing"
            />
          </div>
        </div>
      </section>

      {/* ── Calculator link ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1">
                Calculator
              </p>
              <h3 className="text-lg font-semibold text-[#0f0f0f] mb-1">
                Estimate your monthly payment
              </h3>
              <p className="text-sm text-[#a3a3a3] max-w-md">
                Use our equipment loan calculator to run a rough payment estimate based on
                loan amount, term, and rate. Results are illustrative only — not an offer or
                commitment from any lender.
              </p>
            </div>
            <Link
              href="/calculators/equipment-loan"
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-[#0f0f0f]/30 text-[#0f0f0f] text-sm font-semibold hover:bg-[#f5f5f5] hover:border-[#0f0f0f]/60 transition-colors whitespace-nowrap"
            >
              Open Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={FAQ_ITEMS}
        title="Equipment Financing — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Evaluate equipment financing options for your business"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit. Subject to underwriting by third-party providers. Results are not guaranteed."
        primaryLabel="Start Application"
        primaryHref="/apply"
        secondaryLabel="Browse All Financing Options"
        secondaryHref="/financing"
      />

      {/* ── Disclaimer ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

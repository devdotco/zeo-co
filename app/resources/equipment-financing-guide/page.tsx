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
  title: "Equipment Financing Guide | ZEO.co",
  description:
    "A complete guide to equipment financing for business owners — how it works, what lenders evaluate, loan vs. lease structures, typical costs, and how to prepare your application. Subject to underwriting by third-party providers.",
  path: "/resources/equipment-financing-guide",
  keywords: [
    "equipment financing guide",
    "how equipment financing works",
    "equipment loan vs lease",
    "equipment financing requirements",
    "business equipment loan guide",
    "equipment financing costs",
    "commercial equipment financing explained",
    "equipment financing application",
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
      <path d="M2 4h9v7H2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M11 7h3l2 2v4h-5V7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="5" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
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

function MedicalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v6M6 9h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
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

function LeaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 12h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ABLIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2l7 4v6l-7 4-7-4V6l7-4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M2 6l7 4 7-4M9 10v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Resources", href: "/resources" },
  { label: "Equipment Financing Guide" },
];

const FAQ_ITEMS = [
  {
    q: "Does the equipment serve as collateral in an equipment loan?",
    a: "In most equipment financing structures, the financed asset itself secures the loan. The lender typically holds a security interest — often via a UCC-1 filing — until the obligation is fully satisfied. Depending on loan size, asset type, and your credit profile, a lender may also require a personal guarantee or additional collateral. Review the full agreement carefully before signing.",
  },
  {
    q: "What is the difference between an equipment loan and an equipment lease?",
    a: "An equipment loan is used to purchase the asset outright — you own it free and clear at payoff. An equipment lease is more like a rental agreement: you use the equipment for a defined period and either return it or purchase it for a residual value at the end. Leases can mean lower monthly payments and more flexibility for rapidly depreciating assets, but you do not build equity. Each structure has different tax, accounting, and cash-flow implications — consult a qualified CPA.",
  },
  {
    q: "Can a new or early-stage business qualify for equipment financing?",
    a: "Some lenders work with businesses as young as six months in operation, particularly when the equipment has strong resale value and the borrower has a solid personal credit history. Most conventional equipment lenders prefer at least one to two years in business with documented revenue. Startups and early-stage businesses may face stricter terms, higher down payment requirements, or more limited loan-to-value ratios. Approval is subject to each lender's own underwriting criteria.",
  },
  {
    q: "How long does the equipment financing process typically take?",
    a: "Timelines depend on lender type, deal complexity, and documentation readiness. Some equipment lenders issue approvals within one to three business days for straightforward applications with strong credit profiles and standard asset types. Larger transactions, older or specialized equipment, or complicated financial histories can extend the process to several weeks. Preparing your documents in advance — equipment invoices or appraisals, recent tax returns, and bank statements — meaningfully reduces processing time.",
  },
  {
    q: "Is used or refurbished equipment eligible for financing?",
    a: "Many lenders finance both new and used equipment. Used assets are subject to additional scrutiny: lenders typically assess the equipment's age, remaining useful life, depreciation, current market value, and whether a formal appraisal is needed. The loan-to-value ratio offered on used equipment is generally lower than for new assets, and some lenders impose age caps (for example, equipment that is more than ten years old may not qualify under standard programs). Specialty lenders exist for specific used-equipment categories, including heavy construction, transportation, and manufacturing.",
  },
];

const COMPARISON_COLUMNS = ["Equipment Loan", "Equipment Lease", "SBA 7(a)"];

const COMPARISON_ROWS = [
  {
    feature: "Ownership",
    "Equipment Loan": "You own at payoff",
    "Equipment Lease": "Return or buy at end",
    "SBA 7(a)": "You own at payoff",
  },
  {
    feature: "Primary collateral",
    "Equipment Loan": "The equipment itself",
    "Equipment Lease": "Leased asset",
    "SBA 7(a)": "Varies — may include other assets",
  },
  {
    feature: "Typical down payment",
    "Equipment Loan": "10–20%",
    "Equipment Lease": "Often 0–1 payment",
    "SBA 7(a)": "10%+ (equity injection)",
  },
  {
    feature: "Typical term",
    "Equipment Loan": "2–7 years",
    "Equipment Lease": "1–5 years",
    "SBA 7(a)": "Up to 10 years (equipment)",
  },
  {
    feature: "Approval speed",
    "Equipment Loan": "Days to weeks",
    "Equipment Lease": "Days to weeks",
    "SBA 7(a)": "Weeks to months",
  },
  {
    feature: "Builds business credit",
    "Equipment Loan": "Often yes",
    "Equipment Lease": "Varies by lender",
    "SBA 7(a)": "Often yes",
  },
  {
    feature: "Best suited for",
    "Equipment Loan": "Long-lived assets you want to own",
    "Equipment Lease": "Technology or assets with rapid obsolescence",
    "SBA 7(a)": "Broader capital needs or longer-term assets",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EquipmentFinancingGuidePage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Resources", url: "https://zeo.co/resources" },
          { name: "Equipment Financing Guide", url: "https://zeo.co/resources/equipment-financing-guide" },
        ])}
      />

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Guide"
        title="Equipment Financing Guide"
        subtitle="A practical overview of how equipment financing works, what lenders evaluate, and how to think through loan versus lease structures. All financing is subject to third-party underwriting and approval."
      />

      {/* ── At-a-glance metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical funding range"
              value="$10K – $5M+"
              note="Subject to lender underwriting"
            />
            <MetricCard
              label="Common term length"
              value="2 – 7 yrs"
              note="Varies by asset type and lender"
            />
            <MetricCard
              label="Typical approval window"
              value="1 – 15 days"
              note="Simple deals can close faster"
              highlight
            />
            <MetricCard
              label="Typical down payment"
              value="10 – 20%"
              note="Some lenders differ; not guaranteed"
            />
          </div>
        </div>
      </section>

      {/* ── Section 1: What equipment financing is ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                What it is
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Equipment financing: the core concept
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Equipment financing refers to a category of commercial lending specifically
                structured around the acquisition of physical business assets — machinery,
                vehicles, technology hardware, medical devices, restaurant equipment, and
                similar items with productive, long-lived value.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                The defining characteristic is that the financed asset typically serves as the
                primary collateral. Because the lender holds a security interest in the
                equipment itself, this structure often makes credit available to businesses
                that might not qualify for unsecured financing of the same amount.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm">
                Equipment financing is offered by banks, credit unions, captive finance arms
                of equipment manufacturers, specialty equipment lenders, and non-bank
                commercial lenders. Terms, pricing, and qualification criteria vary
                significantly across these channels. ZEO.co does not lend directly — all
                financing is provided by third-party lenders and is subject to their
                underwriting decisions.
              </p>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-1.5">
                  Equipment loans (term financing)
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  You borrow a lump sum to purchase the asset. You repay principal and interest
                  over a fixed term, typically two to seven years. At payoff, you own the
                  equipment outright. The asset and your business cash flow both factor into
                  underwriting.
                </p>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-1.5">
                  Equipment leases (use-based financing)
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  You pay for the right to use the asset over a defined period. At the end of
                  the lease you may return the equipment, renew, or purchase it for a residual
                  amount. Monthly payments are often lower than a loan, but you do not build
                  ownership equity.
                </p>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-1.5">
                  Sale-leaseback arrangements
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  A business sells equipment it already owns to a financing company, then leases
                  it back. This unlocks capital from an existing asset while retaining use.
                  Less common than standard financing but available for certain asset categories.
                </p>
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-1.5">
                  Captive and vendor financing
                </h3>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  Many equipment manufacturers offer financing directly through their own
                  captive finance arms (e.g., Caterpillar Financial, John Deere Financial).
                  These programs can be competitive for new equipment purchases from that
                  manufacturer, but terms vary and may not cover used or third-party assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Industries and use cases ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Who uses it
          </p>
          <h2 className="text-2xl font-semibold text-white mb-3 text-balance">
            Industries and asset types commonly financed
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Equipment financing applies across a wide range of industries. The common thread
            is a physical asset with a productive life long enough to support a multi-year
            repayment structure.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<TruckIcon />}
              title="Transportation and Logistics"
              description="Semi-trucks, trailers, refrigerated units, and last-mile delivery vehicles. Specialty fleet lenders are active in this segment and often understand residual asset values well."
              tags={["Vehicles", "Fleet", "Commercial trucking"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<ConstructionIcon />}
              title="Construction and Heavy Equipment"
              description="Excavators, bulldozers, cranes, and earthmoving equipment. These assets often have strong secondary markets, which can support favorable collateral treatment."
              tags={["Heavy equipment", "Earthmoving", "Construction"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<MedicalIcon />}
              title="Medical, Dental, and Veterinary"
              description="Imaging systems, surgical equipment, dental chairs, diagnostic devices, and specialty lab equipment. Many lenders focus exclusively on the healthcare sector."
              tags={["Imaging", "Diagnostic", "Healthcare"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<GearIcon />}
              title="Manufacturing and Industrial"
              description="CNC machines, robotic assembly systems, industrial presses, and fabrication equipment. Asset useful life and residual value are key underwriting factors."
              tags={["CNC", "Industrial", "Production"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<DocIcon />}
              title="Technology and IT Infrastructure"
              description="Servers, networking hardware, broadcast equipment, and specialized computing gear. Lease structures are common here given rapid depreciation cycles."
              tags={["Servers", "Networking", "Tech leasing"]}
              href="/equipment-financing"
            />
            <FinancingPathCard
              icon={<ABLIcon />}
              title="Agriculture and Food Production"
              description="Tractors, harvesters, irrigation systems, processing equipment, and cold-chain assets. USDA programs and specialty ag lenders operate alongside conventional equipment finance."
              tags={["Agriculture", "USDA", "Food processing"]}
              href="/equipment-financing"
            />
          </div>
        </div>
      </section>

      {/* ── Section 3: How lenders evaluate applications ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Requirements */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Underwriting factors
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                What lenders typically evaluate
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                These represent general patterns across the equipment lending market.
                Individual lenders set their own criteria, and requirements vary by loan size,
                industry, asset type, and credit structure. Meeting these benchmarks does not
                guarantee approval.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Personal credit score",
                    value: "650+ common for conventional lenders",
                    note: "Some specialty lenders work below this threshold with compensating factors such as strong collateral or larger down payments",
                  },
                  {
                    label: "Annual business revenue",
                    value: "$100K – $250K minimum is common",
                    note: "Larger loan amounts typically require proportionally higher documented revenue",
                  },
                  {
                    label: "Time in business",
                    value: "1–2 years preferred",
                    note: "Some lenders work with businesses as young as 6 months for the right asset type and credit profile",
                  },
                  {
                    label: "Down payment",
                    value: "10–20% typical",
                    note: "Startups or borrowers with weaker credit profiles may be required to put more down",
                  },
                  {
                    label: "Equipment details",
                    value: "Make, model, age, vendor invoice or appraisal",
                    note: "Used or specialized equipment may require a formal third-party appraisal",
                  },
                  {
                    label: "Financial documentation",
                    value: "Tax returns, bank statements, sometimes P&L",
                    note: "Larger transactions typically require more extensive documentation, including CPA-prepared statements",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{req.label}</p>
                      <p className="text-sm text-[#737373] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost factors */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Understanding cost
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                What drives the cost of equipment financing
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                ZEO.co does not quote, set, or guarantee financing rates. Actual costs are
                determined entirely by the third-party lender after underwriting your
                application. The factors below explain what typically influences pricing.
              </p>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Borrower credit profile.</span>{" "}
                  Lenders price for risk. A borrower with strong personal and business credit
                  history, consistent revenue, and demonstrated debt repayment capacity will
                  generally see more favorable terms than a borrower with a thin or impaired
                  credit profile.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Asset type, age, and residual value.</span>{" "}
                  Equipment that holds its value well — certain vehicles, construction assets,
                  medical devices — is generally easier and less expensive to finance than
                  highly specialized or rapidly depreciating assets. Lenders factor in what
                  the equipment would be worth if they had to repossess and sell it.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Loan-to-value ratio.</span>{" "}
                  Financing 100% of an asset's value carries more risk for the lender than
                  financing 80%. A larger down payment reduces the lender's exposure and may
                  improve the terms you are offered.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Term length.</span>{" "}
                  Longer terms spread payments out but typically result in more total interest
                  paid. Shorter terms mean higher monthly payments but lower overall cost of
                  capital, all else equal. Match the term to the equipment's useful life when
                  possible.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Origination and documentation fees.</span>{" "}
                  Many lenders charge upfront fees separate from interest. Always evaluate
                  the total cost — not just the stated rate — before accepting any offer. Ask
                  for the APR and total repayment amount before signing.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Lender channel.</span>{" "}
                  Captive lenders tied to specific manufacturers, bank lenders, and specialty
                  non-bank lenders all price differently. Comparing multiple sources before
                  committing gives you context for evaluating any individual offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Loan vs. lease decision framework ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Loan vs. lease
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            Choosing between ownership and use-based financing
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            The loan versus lease decision turns on several factors — some financial, some
            operational. Neither is inherently better; the right choice depends on the
            asset, your business model, and your cash flow priorities. Consult a CPA before
            deciding, as tax treatment differs meaningfully between structures.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Lean toward a loan when...
              </h3>
              <ul className="space-y-3">
                {[
                  "The equipment has a long useful life and is unlikely to become obsolete before the loan is repaid.",
                  "You want to build equity in the asset and own it outright at the end of the term.",
                  "The equipment will be heavily customized or modified, making it difficult to return.",
                  "You plan to use Section 179 or bonus depreciation to accelerate tax deductions — consult a tax advisor.",
                  "The total cost of ownership calculation favors buying when amortized across the asset's full life.",
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
              <h3 className="text-sm font-semibold text-[#737373] uppercase tracking-wide mb-4">
                Lean toward a lease when...
              </h3>
              <ul className="space-y-3">
                {[
                  "The equipment depreciates quickly or may become technologically obsolete before a loan term ends.",
                  "Cash flow management is a priority and lower monthly payments matter more than eventual ownership.",
                  "You want flexibility to upgrade to newer equipment at the end of each lease cycle.",
                  "The asset does not need to be owned to serve its operational purpose.",
                  "Your accounting or lender covenants benefit from keeping the obligation off your balance sheet — confirm with a CPA.",
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
                      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comparison table */}
          <p className="text-sm text-[#737373] mb-4 max-w-2xl">
            The table below summarizes general structural differences. Actual terms depend
            on the lender and your specific situation.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Equipment Loan"
          />
        </div>
      </section>

      {/* ── Section 5: Preparing your application ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Application preparation
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            How to prepare a stronger equipment financing application
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Preparation does not guarantee approval — that is determined by the lender's
            underwriting. But a well-organized application reduces delays and gives
            underwriters a clear picture of your business and the asset.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {[
              {
                title: "Document the asset clearly",
                body:
                  "Gather the vendor quote or purchase invoice, model specifications, and — for used equipment — a third-party appraisal or market value estimate. Know the exact make, model, year, and condition. Lenders cannot underwrite an asset they cannot value.",
              },
              {
                title: "Organize your financials",
                body:
                  "Most lenders want two years of business tax returns and three to six months of business bank statements. For larger transactions, they may request CPA-prepared financial statements. Having these ready before you apply reduces back-and-forth.",
              },
              {
                title: "Know your credit position",
                body:
                  "Pull your personal credit report before applying. Dispute any errors. Understand where your score sits and whether any derogatory items need explanation. Business credit (D&B, Experian Business) may also be reviewed — know what is on it.",
              },
              {
                title: "Clarify your use of proceeds",
                body:
                  "Be specific about how the equipment will be used, what revenue or capacity it enables, and why this particular asset. Lenders respond better to a clear business rationale than a vague capital request.",
              },
              {
                title: "Prepare a down payment",
                body:
                  "Most conventional equipment lenders expect 10–20% down. Confirm you have the funds available and that they will not materially deplete your working capital. Some lenders may verify source of funds for larger transactions.",
              },
              {
                title: "Understand your cash flow",
                body:
                  "Be prepared to articulate how the monthly payment fits within your cash flow. A simple debt service coverage analysis — monthly net income divided by total monthly debt obligations — gives lenders (and you) confidence in repayment capacity.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.title}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Calculator promo */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1">
                Free tool
              </p>
              <h3 className="text-base font-semibold text-white mb-1">
                Estimate your monthly payment before you apply
              </h3>
              <p className="text-sm text-[#a3a3a3] max-w-md">
                Use our equipment loan calculator to run a rough payment estimate based on
                loan amount, term, and a hypothetical rate. Results are illustrative only —
                not an offer or commitment from any lender.
              </p>
            </div>
            <Link
              href="/calculators/equipment-loan"
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-[#0f0f0f]/30 text-[#0f0f0f] text-sm font-semibold hover:bg-[#0f2a14] hover:border-[#0f0f0f]/60 transition-colors whitespace-nowrap"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related financing options ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Related options
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            Other financing paths that may be relevant
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Equipment financing is one tool among many. Depending on your business profile,
            the asset involved, and how you plan to deploy the capital, one of these
            alternatives may be a better potential fit — or a complement to equipment
            financing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loans"
              description="Government-backed term loans that can fund equipment, real estate, or working capital. Longer terms and potentially more structured underwriting than pure equipment lenders."
              tags={["SBA", "Government-backed", "Term loan"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<WorkingCapitalIcon />}
              title="Working Capital Loans"
              description="Cash-based financing not tied to a specific asset. Shorter terms and more flexible use of proceeds, but typically no collateral benefit from the underlying asset."
              tags={["Short-term", "Cash", "Flexible use"]}
              href="/working-capital"
            />
            <FinancingPathCard
              icon={<LeaseIcon />}
              title="Equipment Leasing"
              description="Use equipment without purchasing it. Lower upfront cost and potential upgrade flexibility at term-end. No equity built — the lessor retains ownership."
              tags={["No ownership", "Lower payments", "Return or buy"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<ABLIcon />}
              title="Asset-Based Lending"
              description="Borrowing against a broader pool of business assets — receivables, inventory, and equipment combined. May offer higher advance rates for asset-heavy businesses."
              tags={["ABL", "Receivables", "Inventory"]}
              href="/asset-based-lending"
            />
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
        headline="Ready to explore equipment financing options?"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit for your business. All financing is subject to underwriting and approval by third-party providers."
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

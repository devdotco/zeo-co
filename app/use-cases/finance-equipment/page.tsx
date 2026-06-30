import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import JsonLd, { breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Finance Equipment | ZEO.co",
  description:
    "Explore financing structures for business equipment purchases and upgrades — from equipment loans and leases to SBA 7(a). Understand what lenders evaluate, common requirements, and how to choose the right structure.",
  path: "/use-cases/finance-equipment",
  keywords: [
    "equipment financing",
    "equipment loans for business",
    "finance business equipment",
    "equipment leasing",
    "Section 179 financing",
    "small business equipment loan",
    "SBA equipment financing",
    "heavy equipment financing",
    "commercial equipment financing",
  ],
});

// ── FAQ Data ──────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Does equipment financing require a down payment?",
    a: "Many equipment financing structures require little to no down payment because the equipment itself serves as collateral. However, lenders may require a down payment of 10–20% for newer businesses, borrowers with lower credit profiles, or specialized equipment with limited resale value. Terms vary by lender and are subject to underwriting.",
  },
  {
    q: "Can I finance used equipment?",
    a: "Yes — many lenders will finance used equipment, though they may apply tighter age limits, lower advance rates, or require an independent appraisal to establish value. Equipment that is heavily worn, obsolete, or difficult to resell may not qualify under standard programs. Eligibility is determined by the third-party lender.",
  },
  {
    q: "How does equipment financing affect taxes?",
    a: "Equipment purchases may be eligible for Section 179 expensing or bonus depreciation under current IRS rules, which can allow businesses to deduct a significant portion of the equipment cost in the year of purchase rather than depreciating it over time. Consult a qualified tax advisor regarding your specific situation — ZEO does not provide tax advice.",
  },
  {
    q: "What is the difference between an equipment loan and an equipment lease?",
    a: "With an equipment loan, you borrow funds to purchase the equipment and own it outright once the loan is repaid. With a lease, you make periodic payments to use the equipment for a defined term, with options at the end to purchase, return, or renew. Loans typically build equity; leases may offer lower monthly payments and easier upgrades but may cost more over the long term depending on structure.",
  },
];

// ── Comparison Table Data ─────────────────────────────────────────────────────

const comparisonColumns = ["Equipment Loan", "Equipment Lease", "SBA 7(a)"];

const comparisonRows = [
  {
    feature: "Ownership",
    "Equipment Loan": "Borrower owns asset",
    "Equipment Lease": "Lessor retains title",
    "SBA 7(a)": "Borrower owns asset",
  },
  {
    feature: "Typical term",
    "Equipment Loan": "2–7 years",
    "Equipment Lease": "1–5 years",
    "SBA 7(a)": "Up to 10 years",
  },
  {
    feature: "Down payment",
    "Equipment Loan": "0–20%",
    "Equipment Lease": "Often none",
    "SBA 7(a)": "10–20%+",
  },
  {
    feature: "Monthly payment",
    "Equipment Loan": "Moderate",
    "Equipment Lease": "Lower",
    "SBA 7(a)": "Lower (longer term)",
  },
  {
    feature: "Collateral",
    "Equipment Loan": "Equipment",
    "Equipment Lease": "N/A (lessor owns)",
    "SBA 7(a)": "Equipment + other",
  },
  {
    feature: "End-of-term option",
    "Equipment Loan": "Own outright",
    "Equipment Lease": "Buy, return, or renew",
    "SBA 7(a)": "Own outright",
  },
  {
    feature: "Approval timeline",
    "Equipment Loan": "Days to 2 weeks",
    "Equipment Lease": "Days",
    "SBA 7(a)": "Weeks to months",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FinanceEquipmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
          { name: "Finance Equipment", url: "https://zeo.co/use-cases/finance-equipment" },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Use Cases", href: "/use-cases" },
          { label: "Finance Equipment" },
        ]}
        eyebrow="Use Case"
        title="Finance Equipment"
        subtitle="When a capital asset purchase is what your business needs, the right financing structure preserves cash flow, matches repayment to asset life, and keeps your balance sheet intact. Here is how to think through it."
      />

      {/* 2. The Business Scenario */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-[#eef2ec] mb-5 leading-snug">
                You need a capital asset. You want to preserve operating cash.
              </h2>
              <div className="space-y-4 text-sm text-[#9aaa98] leading-relaxed">
                <p>
                  Equipment purchases are among the most common capital needs for growing businesses — a new CNC machine, a commercial vehicle, a diagnostic system, HVAC infrastructure, or a fleet upgrade. The asset creates productive capacity, but writing a large check to buy it outright drains the working capital you need to operate.
                </p>
                <p>
                  Equipment financing solves this by spreading the cost of the asset across a term that can be matched to the useful life of the equipment. The equipment itself typically serves as collateral, which can make lender requirements less restrictive than unsecured alternatives. In many cases, businesses may qualify with limited other collateral.
                </p>
                <p>
                  The right structure depends on whether you want to own the asset at the end of the term, how long the equipment will remain productive, whether you anticipate upgrading frequently, and what your tax strategy looks like. Section 179 deduction eligibility may apply to purchased equipment — a qualified tax advisor can clarify what applies to your situation.
                </p>
                <p>
                  This use case applies broadly: construction, manufacturing, food service, transportation, agriculture, healthcare, logistics, and professional services all routinely finance capital equipment. All financing is subject to third-party underwriting and approval.
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="Typical loan amounts"
                value="$5K–$5M+"
                note="Range varies by lender, equipment type, and business profile"
              />
              <MetricCard
                label="Common term length"
                value="2–10"
                unit="years"
                note="Matched to equipment useful life; SBA extends to 10 years"
                highlight
              />
              <MetricCard
                label="Collateral"
                value="Equipment"
                note="Asset typically secures the loan or lease — additional collateral may be required"
              />
              <MetricCard
                label="Down payment"
                value="0–20%"
                note="Many programs require little to no down payment; varies by lender"
              />
              <div className="col-span-2 rounded-xl border border-[#1e2620] bg-[#111512] p-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-2">
                  Common equipment types financed
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Construction & heavy",
                    "Commercial vehicles",
                    "Manufacturing / CNC",
                    "Restaurant & food service",
                    "Medical & diagnostic",
                    "IT & technology",
                    "Agricultural",
                    "HVAC & mechanical",
                    "Logistics & fleet",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#0a0d0b] border border-[#1e2620] text-[#9aaa98]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Relevant Financing Options */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Financing Options
            </p>
            <h2 className="text-2xl font-semibold text-[#eef2ec] mb-2">
              Structures commonly used for equipment
            </h2>
            <p className="text-sm text-[#9aaa98] max-w-xl">
              Each structure has a different ownership model, repayment profile, and lender requirement set. Eligibility is determined by the third-party provider.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FinancingPathCard
              href="/financing/equipment-financing"
              highlight
              icon={
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <rect x="2" y="6" width="16" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M6 6V5a2 2 0 0 1 4 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="10" cy="10.5" r="1.5" fill="currentColor" />
                </svg>
              }
              title="Equipment Financing (Term Loan)"
              description="A lender provides funds to purchase the equipment; you repay over a set term at a fixed or variable rate. Ownership transfers immediately. The equipment serves as primary collateral, which can simplify underwriting relative to unsecured products."
              tags={["Asset collateral", "Fixed term", "Ownership at close", "Section 179 eligible"]}
            />

            <FinancingPathCard
              href="/financing/equipment-leasing"
              icon={
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <path d="M4 14.5V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M2 14.5h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M8 17h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M8 9.5h4M10 8v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              }
              title="Equipment Leasing"
              description="You make periodic payments to use the equipment for a defined term. At the end, you may have the option to purchase at fair market value, return, or renew. Monthly payments are often lower than a purchase loan, and upgrading at term end is straightforward."
              tags={["Lower monthly payment", "Use without ownership", "Upgrade-friendly", "Off-balance-sheet potential"]}
            />

            <FinancingPathCard
              href="/financing/sba-7a"
              icon={
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <path d="M3 10a7 7 0 1 1 14 0A7 7 0 0 1 3 10z" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title="SBA 7(a) Loan"
              description="SBA 7(a) loans can be used to finance equipment as part of a broader capital need. Terms of up to 10 years for equipment purchases are available, and SBA guarantees reduce lender risk — which may make approval accessible for businesses that don't qualify for conventional programs."
              tags={["Up to 10-year term", "SBA guarantee", "Competitive rates potential", "Subject to SBA eligibility"]}
            />

            <FinancingPathCard
              href="/financing/term-loans"
              icon={
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                  <path d="M4 10h12M4 6h8M4 14h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              }
              title="Business Term Loan"
              description="A conventional term loan can fund an equipment purchase when the equipment itself may not satisfy lender collateral requirements, or when you need to finance installation, delivery, or associated soft costs alongside the asset. Terms and collateral requirements vary by lender."
              tags={["Flexible use of proceeds", "Fixed repayment schedule", "May cover soft costs", "Requires strong profile"]}
            />
          </div>
        </div>
      </section>

      {/* 4. How to Evaluate Which Option Fits */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Decision Framework
            </p>
            <h2 className="text-2xl font-semibold text-[#eef2ec] mb-2">
              How to evaluate which structure fits
            </h2>
            <p className="text-sm text-[#9aaa98] max-w-2xl">
              There is no single right answer for every equipment purchase. The factors below can help narrow down which structure is worth pursuing — but the final determination is made by the lender, subject to their underwriting criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: "Do you want to own the asset?",
                body: "If ownership is important — for equity on the balance sheet, Section 179 eligibility, or long-term cost efficiency — an equipment loan or SBA 7(a) puts title in your name immediately. Leasing defers or limits ownership.",
              },
              {
                label: "How long will the equipment be productive?",
                body: "Matching loan term to useful life reduces the risk of paying for equipment that is already obsolete or worn out. Leasing is often better suited to equipment with rapid technology cycles, where upgrading at term end has real value.",
              },
              {
                label: "What does your cash flow support?",
                body: "Equipment loans typically carry higher monthly payments than leases, but lower total cost if you plan to hold the asset long-term. Model both options across the full term, not just the monthly payment.",
              },
              {
                label: "Is the equipment new or used?",
                body: "New equipment is generally easier to finance and commands better advance rates. Used equipment may qualify but lenders often apply tighter age limits, lower LTV, or require appraisal. Specialty or highly customized equipment may limit lender options.",
              },
              {
                label: "Do you have an SBA-eligible profile?",
                body: "SBA 7(a) offers longer terms and may be accessible to businesses that don't qualify for conventional programs — but the process takes longer and involves more documentation. If your timeline is urgent, dedicated equipment lenders are typically faster.",
              },
              {
                label: "Are soft costs part of the budget?",
                body: "Equipment loans through dedicated equipment lenders typically finance the hard cost of the asset. If installation, freight, training, or warranty expenses are significant, a conventional term loan or SBA 7(a) may offer more flexibility in how proceeds are used.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#1e2620] bg-[#111512] p-5"
              >
                <p className="text-sm font-semibold text-[#eef2ec] mb-2 leading-snug">{item.label}</p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-4">
              Side-by-side comparison
            </p>
            <ComparisonTable
              columns={comparisonColumns}
              rows={comparisonRows}
              highlightCol="Equipment Loan"
            />
            <p className="text-[0.6875rem] text-[#6b7e69] mt-3">
              Terms are illustrative and vary by lender, borrower profile, and equipment type. Subject to underwriting by third-party providers.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Common Requirements */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Requirements
            </p>
            <h2 className="text-2xl font-semibold text-[#eef2ec] mb-2">
              What lenders commonly evaluate
            </h2>
            <p className="text-sm text-[#9aaa98] max-w-xl">
              Requirements vary by lender and product. The following represent common criteria — not a guarantee of approval or a universal standard. Eligibility is determined by the third-party lender.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Borrower Profile */}
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-4">
                Borrower profile
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Time in business", detail: "Many lenders require 1–2+ years in operation; some will consider startups with strong collateral" },
                  { label: "Credit profile", detail: "Personal and business credit scores are reviewed; thresholds vary by lender and loan size" },
                  { label: "Annual revenue", detail: "Most lenders want to see consistent revenue; minimum thresholds vary by product and amount" },
                  { label: "Profitability", detail: "Some lenders assess cash flow and DSCR; others focus primarily on collateral value" },
                ].map((req) => (
                  <li key={req.label} className="flex gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-[0.4rem]" />
                    <div>
                      <p className="text-sm font-medium text-[#eef2ec]">{req.label}</p>
                      <p className="text-xs text-[#6b7e69] mt-0.5 leading-relaxed">{req.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment & Documentation */}
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-4">
                Equipment & documentation
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Equipment invoice or quote", detail: "A vendor quote, purchase agreement, or invoice identifying the equipment, condition, and price" },
                  { label: "Equipment details", detail: "Make, model, year, serial number, and condition (new vs. used) for lender collateral evaluation" },
                  { label: "Business financials", detail: "Typically 1–2 years of business tax returns and recent bank statements; may include P&L" },
                  { label: "Personal financial statement", detail: "Owners with 20%+ stake are typically required to provide personal financial information and may need to sign a personal guarantee" },
                ].map((req) => (
                  <li key={req.label} className="flex gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-[0.4rem]" />
                    <div>
                      <p className="text-sm font-medium text-[#eef2ec]">{req.label}</p>
                      <p className="text-xs text-[#6b7e69] mt-0.5 leading-relaxed">{req.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* SBA-Specific */}
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6 sm:col-span-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-4">
                Additional requirements for SBA 7(a)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  { label: "For-profit U.S. business", detail: "The borrower must be a for-profit business operating in the United States" },
                  { label: "SBA size eligibility", detail: "Business must meet SBA's definition of a small business by revenue or employee count depending on industry" },
                  { label: "Owner equity injection", detail: "SBA 7(a) typically requires a down payment or equity injection; standard is 10–20% depending on loan purpose" },
                  { label: "Collateral", detail: "SBA requires all available collateral to be pledged when the loan amount exceeds certain thresholds, including personal real estate in some cases" },
                ].map((req) => (
                  <div key={req.label} className="flex gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#22c55e] mt-[0.35rem]" />
                    <div>
                      <p className="text-sm font-medium text-[#eef2ec]">{req.label}</p>
                      <p className="text-xs text-[#6b7e69] mt-0.5 leading-relaxed">{req.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ
        items={faqItems}
        title="Equipment Financing: Common Questions"
        includeSchema={false}
      />

      {/* 7. CTA */}
      <CTASection
        headline="Evaluating equipment financing for your business?"
        subtext="Submit a brief intake and ZEO will review potential structures that may be a fit for your equipment purchase. All financing is subject to third-party underwriting and approval."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing Products"
        secondaryHref="/financing"
        variant="dark"
      />

      {/* 8. Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="general" />
      </div>
    </>
  );
}

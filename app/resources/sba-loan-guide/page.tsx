import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "SBA Loan Guide | ZEO.co",
  description:
    "A comprehensive educational guide to SBA loan programs — 7(a), 504, and microloans. Learn eligibility requirements, use of proceeds, loan amounts, and how the application process works.",
  path: "/resources/sba-loan-guide",
  keywords: [
    "SBA loan guide",
    "SBA 7a loan",
    "SBA 504 loan",
    "small business loan",
    "SBA loan requirements",
    "SBA loan application",
    "small business financing",
  ],
});

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "SBA Loan Guide" },
];

const METRICS = [
  {
    label: "SBA 7(a) Max Loan Amount",
    value: "$5M",
    note: "Standard 7(a) program ceiling",
    highlight: false,
  },
  {
    label: "SBA 504 Max Debenture",
    value: "$5.5M",
    note: "For energy-efficient projects; standard is $5M",
    highlight: false,
  },
  {
    label: "SBA Microloan Max",
    value: "$50K",
    note: "Intermediary lenders administer funds",
    highlight: false,
  },
  {
    label: "7(a) Max Repayment Term",
    value: "25 yrs",
    unit: "",
    note: "Real estate; 10 years for working capital",
    highlight: true,
  },
];

const COMPARISON_COLUMNS = ["SBA 7(a)", "SBA 504", "SBA Microloan"];
const COMPARISON_ROWS = [
  {
    feature: "Max loan amount",
    "SBA 7(a)": "$5,000,000",
    "SBA 504": "$5,000,000+",
    "SBA Microloan": "$50,000",
  },
  {
    feature: "Typical term",
    "SBA 7(a)": "7–25 years",
    "SBA 504": "10–25 years",
    "SBA Microloan": "Up to 6 years",
  },
  {
    feature: "Primary use",
    "SBA 7(a)": "Working capital, equipment, real estate",
    "SBA 504": "Fixed assets, real estate",
    "SBA Microloan": "Startup costs, inventory, equipment",
  },
  {
    feature: "Collateral required",
    "SBA 7(a)": "Often required ≥$25K",
    "SBA 504": "Project assets serve as collateral",
    "SBA Microloan": "Varies by intermediary",
  },
  {
    feature: "Down payment",
    "SBA 7(a)": "Typically 10–30%",
    "SBA 504": "Typically 10%",
    "SBA Microloan": "None required",
  },
  {
    feature: "Credit requirement",
    "SBA 7(a)": "Usually 650+ FICO",
    "SBA 504": "Usually 680+ FICO",
    "SBA Microloan": "More flexible",
  },
];

const FAQ_ITEMS = [
  {
    q: "What credit score do I need to potentially qualify for an SBA loan?",
    a: "Most SBA lenders look for a personal credit score of at least 650–680, though requirements vary by lender and program. The SBA 7(a) program allows lenders flexibility in their credit standards. Microloan intermediaries often work with borrowers who have thinner credit histories. A strong business plan, sufficient cash flow, and clear use of proceeds may help offset a lower score, but final approval decisions rest entirely with the participating lender and are subject to their own underwriting criteria.",
  },
  {
    q: "How long does the SBA loan application process typically take?",
    a: "Timelines vary significantly by lender, loan program, and application completeness. A standard SBA 7(a) loan through a traditional bank may take 60–90 days from application to funding. Preferred Lender Program (PLP) lenders have delegated authority to approve loans without SBA review, which can shorten the process to 30–45 days. SBA Express loans — capped at $500,000 — target a 36-hour SBA turnaround on the guarantee decision, though total funding time still depends on lender processing. Being proactive about document preparation is one of the most effective ways to avoid delays.",
  },
  {
    q: "Can a startup business apply for an SBA loan?",
    a: "Startups may be eligible for certain SBA programs, though established businesses with two or more years of operating history and demonstrable cash flow generally present a stronger profile to lenders. SBA Microloans are often more accessible to startups and newer businesses because intermediary lenders — typically nonprofit organizations — factor in factors beyond credit history, such as business plan quality and management experience. For SBA 7(a) and 504 programs, lenders typically require projections and a detailed business plan when historical financials are limited. Equity injection requirements may also be higher for startups.",
  },
  {
    q: "What is the difference between an SBA guarantee and direct SBA lending?",
    a: "In most SBA programs, the SBA does not lend money directly to businesses. Instead, the SBA guarantees a portion of the loan — typically 75–85% depending on loan size — made by a participating private lender. This guarantee reduces the lender's risk, which in turn may allow lenders to extend credit to businesses that might not qualify for conventional financing. The SBA does operate a direct loan program for businesses affected by declared disasters, but the flagship 7(a), 504, and Microloan programs all flow through approved third-party lenders and intermediaries.",
  },
  {
    q: "What can SBA loan proceeds be used for?",
    a: "Permitted uses of proceeds vary by program. SBA 7(a) loans are the most flexible: eligible uses include working capital, payroll, inventory, equipment, furniture, leasehold improvements, business acquisitions, and commercial real estate. SBA 504 loans are specifically designed for major fixed assets — commercial real estate and long-term machinery — and cannot be used for working capital or inventory. SBA Microloans cover working capital, supplies, furniture, fixtures, equipment, and machinery, but cannot be used to repay existing debt or purchase real estate. Borrowers should confirm permitted uses with their specific lender and program guidelines.",
  },
];

const RELATED_PATHS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 10h14M3 6h10M3 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "SBA Loan Payment Calculator",
    description:
      "Estimate monthly payments on a potential SBA 7(a) loan based on amount, term, and interest rate.",
    tags: ["Calculator", "7(a)"],
    href: "/calculators/sba-loan-payment",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8h8M6 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Business Term Loan Guide",
    description:
      "How conventional term loans compare to SBA programs — structure, rates, and when each may be a better fit.",
    tags: ["Guide", "Term Loans"],
    href: "/resources/business-term-loan-guide",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L3 7v11h14V7L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 18v-5h6v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "SBA 504 Loan: Real Estate & Equipment",
    description:
      "A closer look at the 504 program for owner-occupied commercial real estate and large equipment purchases.",
    tags: ["Guide", "504", "Real Estate"],
    href: "/resources/sba-504-loan",
  },
];

export default function SbaLoanGuidePage() {
  return (
    <div className="bg-[#0a0d0b] min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Resources", url: "https://zeo.co/resources" },
          { name: "SBA Loan Guide", url: "https://zeo.co/resources/sba-loan-guide" },
        ])}
      />

      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Guide"
        title="SBA Loan Guide"
        subtitle="An educational overview of Small Business Administration loan programs — how they work, who may qualify, and how the process generally unfolds."
      />

      {/* At-a-Glance Metrics */}
      <section className="py-12 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-6">
            Program Snapshot
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {METRICS.map((m) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                note={m.note}
                highlight={m.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: What SBA Loans Are */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-5">
            What Are SBA Loans?
          </h2>
          <div className="space-y-4 text-[#9aaa98] leading-relaxed">
            <p>
              SBA loans are commercial financing products made by approved private lenders — banks, credit unions, and non-bank lenders — that carry a partial guarantee from the U.S. Small Business Administration. The SBA does not typically lend money directly; instead, it assumes responsibility for a portion of the outstanding balance if a borrower defaults, which may allow participating lenders to extend credit to businesses that might not qualify under conventional underwriting alone.
            </p>
            <p>
              The guarantee structure is central to how these programs work. On most 7(a) loans up to $150,000, the SBA may guarantee up to 85% of the loan amount. For loans above $150,000, the guarantee generally steps down to 75%. This backstop reduces risk for the lender and is part of why SBA loans have historically offered longer repayment terms and more flexible structures than many conventional small business products.
            </p>
            <p>
              Businesses that pursue SBA financing are typically looking for longer amortization periods to keep monthly payments manageable, financing for assets or purposes that conventional lenders may be hesitant to fund, or support for acquisitions, expansions, or startups where historical cash flow is limited or absent. The tradeoff is a more involved application process, more documentation, and longer approval timelines compared to many alternative financing products.
            </p>
          </div>

          <div className="mt-8 p-4 rounded-xl border border-[#1e2620] bg-[#111512]">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6b7e69] mb-2">
              Important Note
            </p>
            <p className="text-sm text-[#9aaa98] leading-relaxed">
              ZEO.co is not the SBA, an SBA lender, or a government agency. This page is educational. Financing eligibility, terms, and approval decisions are determined entirely by participating lenders and the SBA&apos;s own program guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Main Programs */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            The Main SBA Loan Programs
          </h2>
          <p className="text-[#6b7e69] text-sm mb-8">
            Each program serves a different financing purpose. Understanding which one aligns with your need is the starting point for any SBA inquiry.
          </p>

          <div className="space-y-8">
            {/* 7(a) */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-md bg-[#0f2a14] text-[#22c55e] border border-[#22c55e]/20">
                  Most Common
                </span>
                <h3 className="text-lg font-semibold text-white">SBA 7(a) Loan</h3>
              </div>
              <div className="space-y-3 text-[#9aaa98] text-sm leading-relaxed">
                <p>
                  The 7(a) program is the SBA&apos;s flagship product and the most widely used. It can accommodate a broad range of financing needs: working capital, equipment purchases, leasehold improvements, commercial real estate, business acquisitions, and debt refinancing in some cases. Maximum loan amounts reach $5 million under the standard program.
                </p>
                <p>
                  Repayment terms may extend up to 10 years for working capital and equipment, and up to 25 years for real estate. The longer terms reduce monthly payment obligations relative to shorter-term products, which can be meaningful for businesses managing tight cash flow cycles. Interest rates are typically variable, tied to the prime rate plus a lender spread, with SBA caps on what lenders may charge depending on loan size and term.
                </p>
                <p>
                  Within the 7(a) umbrella, the SBA also offers the Express program (up to $500,000, with a 36-hour SBA response target on the guarantee decision), CAPLines (revolving credit lines for seasonal or cyclical needs), and Export Working Capital programs. Each sub-program has its own eligibility nuances.
                </p>
              </div>
            </div>

            {/* 504 */}
            <div className="pt-6 border-t border-[#1e2620]">
              <h3 className="text-lg font-semibold text-white mb-3">SBA 504 Loan</h3>
              <div className="space-y-3 text-[#9aaa98] text-sm leading-relaxed">
                <p>
                  The 504 program is specifically designed for major fixed-asset purchases — primarily owner-occupied commercial real estate and long-term machinery or equipment with a useful life of at least 10 years. It is not suitable for working capital, inventory, or operating expenses.
                </p>
                <p>
                  504 loans are structured as a three-party arrangement. A Certified Development Company (CDC), a nonprofit intermediary certified by the SBA, funds roughly 40% of the project through a debenture backed by an SBA guarantee. A conventional lender covers approximately 50%, and the borrower contributes a minimum 10% down payment (which may increase to 15–20% for startups or special-use properties). This structure allows borrowers to finance large commercial assets with a relatively small equity contribution.
                </p>
                <p>
                  Maximum SBA debenture amounts are $5 million for most projects and $5.5 million for projects meeting certain energy efficiency or public policy goals. Terms are 10 or 20 years on the SBA portion, with fixed interest rates determined at the time of funding.
                </p>
              </div>
            </div>

            {/* Microloans */}
            <div className="pt-6 border-t border-[#1e2620]">
              <h3 className="text-lg font-semibold text-white mb-3">SBA Microloans</h3>
              <div className="space-y-3 text-[#9aaa98] text-sm leading-relaxed">
                <p>
                  The Microloan program provides small, short-term financing of up to $50,000 to small businesses and certain nonprofit childcare centers. The SBA funds nonprofit, community-based intermediary organizations, which in turn lend to eligible borrowers and often provide technical assistance alongside financing.
                </p>
                <p>
                  Microloans are often accessible to businesses that would have difficulty qualifying for conventional bank financing — startups, businesses with limited credit history, or enterprises in underserved communities. Proceeds may be used for working capital, supplies, furniture, fixtures, machinery, and equipment, but not for real estate purchases or debt repayment.
                </p>
                <p>
                  Repayment terms extend up to six years. Interest rates vary by intermediary lender but are regulated by the SBA. Because each intermediary sets its own credit and collateral requirements, eligibility criteria can differ meaningfully from one lender to the next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comparison Table */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Program Comparison
          </h2>
          <p className="text-[#6b7e69] text-sm mb-8">
            Key structural differences across the three primary SBA programs, subject to program changes and lender-specific underwriting.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="SBA 7(a)"
          />
          <p className="text-xs text-[#6b7e69] mt-3 leading-relaxed">
            All figures are general reference points based on current SBA program guidelines and are subject to change. Actual terms are set by participating lenders and may vary.
          </p>
        </div>
      </section>

      {/* Section 4: Eligibility */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-5">
            General Eligibility Considerations
          </h2>
          <div className="space-y-4 text-[#9aaa98] leading-relaxed">
            <p>
              SBA loan programs have both SBA-level eligibility requirements and lender-specific underwriting standards. Meeting SBA criteria is a prerequisite, but lenders apply their own overlays and may impose stricter requirements. A business may technically meet SBA eligibility while still being declined by a specific lender.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {[
              {
                label: "For-Profit Business",
                detail:
                  "The business must be organized for profit and operate within the United States or its territories. Passive investment businesses, lending companies, and most nonprofits are generally ineligible.",
              },
              {
                label: "Size Standards",
                detail:
                  "The SBA defines &quot;small business&quot; by industry using either employee count or average annual receipts. Size limits vary significantly by NAICS code. Businesses above the applicable threshold may not qualify.",
              },
              {
                label: "Owner Equity and Injection",
                detail:
                  "The SBA requires that business owners have reasonable equity invested. For acquisitions and some startups, lenders may require owner equity injection of 10–30% of the total project cost.",
              },
              {
                label: "Repayment Ability",
                detail:
                  "Lenders evaluate whether the business generates sufficient cash flow to service the proposed debt. Debt Service Coverage Ratios (DSCR) — typically 1.25x or higher — are commonly used benchmarks, though thresholds vary.",
              },
              {
                label: "Personal Guarantee",
                detail:
                  "The SBA generally requires personal guarantees from any owner with 20% or more ownership interest. Guarantees may be limited or unlimited depending on the lender and loan structure.",
              },
              {
                label: "Prior Government Debt",
                detail:
                  "Businesses and owners with outstanding government debt — including prior SBA loan defaults, delinquent federal taxes, or federally-backed student loans — may be ineligible.",
              },
            ].map(({ label, detail }) => (
              <div
                key={label}
                className="flex gap-3 p-4 rounded-xl border border-[#1e2620] bg-[#111512]"
              >
                <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#0f2a14] border border-[#22c55e]/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#eef2ec] mb-1">{label}</p>
                  <p
                    className="text-sm text-[#6b7e69] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Application Process */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-5">
            How the Application Process Generally Works
          </h2>
          <div className="space-y-4 text-[#9aaa98] leading-relaxed">
            <p>
              The SBA loan application process involves the borrower, the participating lender, and — depending on lender authorization level — the SBA itself. Understanding the sequence helps set realistic timeline expectations.
            </p>
          </div>

          <div className="mt-6 space-y-px">
            {[
              {
                step: "1",
                title: "Lender Selection",
                body: "Borrowers apply through SBA-approved lenders, not through the SBA directly. Lender selection matters: banks with Preferred Lender Program (PLP) status can approve the SBA guarantee in-house, which can meaningfully shorten timelines. Non-PLP lenders must submit applications to the SBA for guarantee approval, which adds processing time.",
              },
              {
                step: "2",
                title: "Document Preparation",
                body: "SBA loan applications are documentation-intensive. Common requirements include two to three years of business tax returns, two to three years of personal tax returns for each owner with 20%+ ownership, year-to-date financial statements, a current balance sheet, business debt schedule, a business plan (often required for startups or acquisitions), personal financial statements, and — for 504 or acquisition loans — additional project-specific documentation.",
              },
              {
                step: "3",
                title: "Lender Underwriting",
                body: "The lender reviews the application against their own credit criteria and SBA program guidelines. This includes analysis of cash flow and DSCR, collateral adequacy, owner credit profiles, business history and industry risk, and use-of-proceeds alignment with program rules. The lender may request additional documentation during this phase.",
              },
              {
                step: "4",
                title: "SBA Guarantee Review",
                body: "For lenders without PLP status, or for loans exceeding delegated authority thresholds, the application goes to the SBA for guarantee review. The SBA evaluates eligibility against its own standards — this is separate from the lender's credit decision. PLP lenders skip this step for eligible loans.",
              },
              {
                step: "5",
                title: "Closing and Funding",
                body: "Once both the lender credit approval and SBA guarantee authorization are in place, the loan proceeds to closing. Closing involves signing the note and guarantee agreements, satisfying any conditions of approval (such as insurance, lien filings, or equity injection verification), and then funding. Time from approval to funding varies by lender and loan complexity.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="flex gap-4 p-5 first:rounded-t-xl last:rounded-b-xl border border-[#1e2620] bg-[#111512] border-b-0 last:border-b"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0a0d0b] border border-[#1e2620] flex items-center justify-center">
                  <span className="text-[0.625rem] font-semibold tabular-nums text-[#22c55e]">
                    {step}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#eef2ec] mb-1.5">{title}</p>
                  <p className="text-sm text-[#6b7e69] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Paths */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-2">Related Resources</h2>
          <p className="text-sm text-[#6b7e69] mb-6">
            Tools and guides that may be useful alongside this overview.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {RELATED_PATHS.map((card) => (
              <FinancingPathCard
                key={card.href}
                icon={card.icon}
                title={card.title}
                description={card.description}
                tags={card.tags}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={FAQ_ITEMS}
        title="SBA Loan Questions"
      />

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-4">
        <ProductDisclaimer type="sba" />
        <ProductDisclaimer type="general" className="mt-2" />
      </div>

      {/* CTA */}
      <CTASection
        headline="Explore whether SBA financing may be a fit"
        subtext="Submit a brief intake and ZEO will review potential financing paths for your business. All financing is subject to underwriting and third-party lender approval."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare Financing Options"
        secondaryHref="/financing"
      />
    </div>
  );
}

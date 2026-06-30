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
  title: "SBA Microloans | ZEO.co",
  description:
    "Learn how SBA Microloans work, who may qualify, typical requirements, and how they compare to other small business financing options. Subject to underwriting by third-party SBA lenders.",
  path: "/sba-loans/microloans",
  keywords: [
    "SBA microloan",
    "SBA microloan program",
    "small business microloan",
    "startup financing",
    "nonprofit lender small business",
    "SBA intermediary lender",
    "microloan requirements",
    "microloan working capital",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function MicroloanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v1.5m0 3V12m-1.5-4.5h2.5a1 1 0 0 1 0 2H8a1 1 0 0 0 0 2h2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SBALoansIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function WorkingCapitalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EquipmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="5" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 13V7l3-3h6l3 3v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Comparison Table Data ─────────────────────────────────────────────────────

const comparisonColumns = ["SBA Microloan", "SBA 7(a)", "Bank Term Loan", "MCA"];

const comparisonRows = [
  {
    feature: "Max amount",
    "SBA Microloan": "Up to $50,000",
    "SBA 7(a)": "Up to $5M+",
    "Bank Term Loan": "Varies widely",
    MCA: "Varies by revenue",
  },
  {
    feature: "Typical term",
    "SBA Microloan": "Up to 6 years",
    "SBA 7(a)": "10–25 years",
    "Bank Term Loan": "1–7 years",
    MCA: "3–18 months",
  },
  {
    feature: "Lender type",
    "SBA Microloan": "SBA intermediary (nonprofit)",
    "SBA 7(a)": "SBA-approved bank or CDFI",
    "Bank Term Loan": "Bank or credit union",
    MCA: "Alternative finance provider",
  },
  {
    feature: "Collateral required",
    "SBA Microloan": "Often yes (varies by intermediary)",
    "SBA 7(a)": "Business assets + PG",
    "Bank Term Loan": "Varies by lender",
    MCA: "Future receivables",
  },
  {
    feature: "Startup eligible",
    "SBA Microloan": "Often yes",
    "SBA 7(a)": "Rarely (2+ yrs typical)",
    "Bank Term Loan": "Rarely",
    MCA: "Some, revenue-based",
  },
  {
    feature: "Technical assistance",
    "SBA Microloan": "Often included",
    "SBA 7(a)": "Not typically",
    "Bank Term Loan": "Not typically",
    MCA: "Not typically",
  },
  {
    feature: "Typical funding speed",
    "SBA Microloan": "2–8 weeks",
    "SBA 7(a)": "30–90 days",
    "Bank Term Loan": "1–4 weeks",
    MCA: "1–3 days",
  },
];

// ── FAQ Data ──────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What is the maximum amount available through the SBA Microloan program?",
    a: "The SBA Microloan program offers amounts up to $50,000. The average microloan disbursed has historically been around $13,000–$15,000, though amounts vary by intermediary lender and borrower profile. Loan amounts, terms, and rates are set by each SBA-approved intermediary lender, not by the SBA directly. ZEO.co is not the SBA or an SBA lender, and cannot guarantee availability, amounts, or approval.",
  },
  {
    q: "Can a startup qualify for an SBA Microloan?",
    a: "SBA Microloans are among the few SBA-affiliated programs that may be available to startups and newer businesses, because lending decisions are made by nonprofit intermediary lenders who often weight community impact, management capacity, and business viability alongside credit history. That said, eligibility requirements vary by intermediary. Some may require a business plan, some form of collateral, and completion of technical assistance training. Approval is subject to the intermediary's own underwriting criteria.",
  },
  {
    q: "What can SBA Microloan funds be used for?",
    a: "SBA Microloans may be used for working capital, inventory, supplies, furniture and fixtures, machinery, equipment, and leasehold improvements. Notably, SBA Microloan proceeds cannot be used to pay existing debts or to purchase real estate. If your primary need is real estate acquisition or business acquisition, other SBA programs such as the 504 or 7(a) may be more structurally appropriate.",
  },
  {
    q: "Does ZEO.co make SBA Microloans or have a relationship with SBA intermediary lenders?",
    a: "No. ZEO.co is not the U.S. Small Business Administration, an SBA lender, an SBA intermediary, or a government agency. ZEO helps business owners understand and evaluate financing options. Where relevant, ZEO may share business profiles with third-party providers, which may include networks that connect borrowers with SBA intermediary lenders. All decisions regarding eligibility, loan amounts, terms, and approval rest with the applicable lender or intermediary.",
  },
  {
    q: "What credit score is typically needed for an SBA Microloan?",
    a: "There is no single universal credit score requirement for SBA Microloans because each intermediary lender sets its own criteria. Many intermediaries work with borrowers who have limited credit history or imperfect credit, and may place greater weight on business viability, cash flow projections, collateral, and the applicant's character and capacity to repay. That said, significant derogatory credit history — such as recent bankruptcies, unresolved liens, or outstanding judgments — may affect eligibility at many intermediaries. Subject to underwriting.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SBAMicroloansPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Financing Options", href: "/financing" },
          { label: "SBA Microloans" },
        ]}
        eyebrow="Financing"
        title="SBA Microloans"
        subtitle="Small-dollar SBA-affiliated loans up to $50,000, administered through nonprofit intermediary lenders. Often available to startups and underserved businesses that may not qualify for conventional financing. Subject to underwriting by third-party providers."
      />

      {/* 2. Key Metrics */}
      <section className="py-12 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              label="Maximum Loan Amount"
              value="$50,000"
              note="Set by SBA; subject to intermediary limits"
              highlight
            />
            <MetricCard
              label="Maximum Term"
              value="6 years"
              note="72 months; terms vary by lender"
            />
            <MetricCard
              label="Average Microloan"
              value="~$13K"
              note="Historical SBA average; varies by intermediary"
            />
            <MetricCard
              label="Lender Type"
              value="Nonprofit"
              note="SBA-approved intermediary lenders only"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Figures are general estimates from SBA program data. Actual amounts, terms, and rates are set by individual intermediary lenders and subject to their underwriting criteria. Not offers or commitments.
          </p>
        </div>
      </section>

      {/* 3. Who It Is For */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Potential Fit
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Who may benefit from an SBA Microloan
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                SBA Microloans are designed for businesses that need smaller amounts of capital and may not qualify for conventional bank financing. The program is administered through nonprofit and community development intermediaries, many of which focus on underserved communities and mission-driven lending. The following profiles are illustrative — eligibility is determined by each intermediary lender.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Early-stage businesses and startups",
                    desc: "Unlike most SBA programs, Microloans are sometimes accessible to businesses that have been operating for less than two years, or even pre-revenue startups with a credible business plan. Intermediaries often weigh management capacity and viability alongside time in business.",
                  },
                  {
                    title: "Businesses with limited credit history",
                    desc: "Many intermediary lenders work with borrowers who have thin credit files or past credit challenges. The Microloan program was designed in part to serve borrowers who fall outside conventional underwriting windows.",
                  },
                  {
                    title: "Sole proprietors and micro-enterprises",
                    desc: "A one- or two-person operation that needs $5,000–$25,000 for equipment, inventory, or working capital may be a potential fit for Microloans when larger programs are structurally oversized or out of reach.",
                  },
                  {
                    title: "Women- and minority-owned businesses",
                    desc: "Many SBA Microloan intermediaries specifically serve women-owned, minority-owned, veteran-owned, or economically disadvantaged businesses. Some intermediaries operate exclusively within specific communities or geographies.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4"
                  >
                    <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{item.title}</p>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. How It Works */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Process
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                How the SBA Microloan program works
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                The SBA provides capital to intermediary lenders — typically nonprofit CDFIs and community organizations — who then administer the program locally. The SBA does not lend directly to businesses through this program. Steps below are general; each intermediary operates its own intake process.
              </p>
              <div className="space-y-3">
                {[
                  {
                    step: "A",
                    title: "Identify a local SBA Microloan intermediary",
                    desc: "The SBA publishes a directory of approved intermediary lenders by state and region. Each intermediary serves a specific geography and may have its own focus areas — manufacturing, food service, specific communities — so finding the right match matters.",
                  },
                  {
                    step: "B",
                    title: "Review intermediary-specific eligibility criteria",
                    desc: "Requirements vary. Some intermediaries require a completed business plan, financial projections, or proof of collateral. Others place heavier weight on the borrower's character and capacity. Credit score minimums, if any, are set by the intermediary.",
                  },
                  {
                    step: "C",
                    title: "Complete the application and provide documentation",
                    desc: "Common documents include business and personal tax returns, bank statements, a business plan or financial projections, a description of how funds will be used, and any existing business licenses or legal documents.",
                  },
                  {
                    step: "D",
                    title: "Attend required technical assistance (if applicable)",
                    desc: "Many intermediary lenders require — or strongly encourage — participation in business counseling or training programs as part of the Microloan process. This is a feature of the program, not a bureaucratic hurdle: it often materially improves business outcomes.",
                  },
                  {
                    step: "E",
                    title: "Underwriting and funding",
                    desc: "The intermediary performs its own underwriting review. Timelines vary from two to eight weeks depending on completeness of the application and intermediary capacity. Funds are disbursed directly by the intermediary.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center">
                      <span className="text-[0.65rem] font-semibold text-[#0f0f0f]">{item.step}</span>
                    </div>
                    <div className="pt-0.5">
                      <p className="text-sm font-semibold text-[#0f0f0f] mb-1">{item.title}</p>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Common Use Cases */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Use Cases
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Common ways SBA Microloan proceeds may be used
            </h2>
            <p className="text-[#737373] text-sm max-w-2xl">
              SBA rules specify permitted and prohibited uses. These are illustrative examples. Confirm use-of-proceeds requirements with the applicable intermediary before applying.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Working capital",
                desc: "Cover operating expenses, payroll gaps, supplier payments, or other short-term cash needs while the business builds revenue. One of the most common uses for Microloan proceeds.",
                permitted: true,
              },
              {
                title: "Inventory purchase",
                desc: "Stock product ahead of a sales cycle, seasonal demand, or a new contract. Particularly common for retail, food service, and e-commerce businesses.",
                permitted: true,
              },
              {
                title: "Equipment and machinery",
                desc: "Purchase or upgrade production equipment, kitchen equipment, vehicles, tools, or technology needed to operate or expand the business.",
                permitted: true,
              },
              {
                title: "Furniture and fixtures",
                desc: "Outfit a new retail space, office, or service location with necessary furnishings. Often paired with leasehold improvement costs.",
                permitted: true,
              },
              {
                title: "Supplies",
                desc: "Purchase the materials, inputs, and consumable supplies necessary to produce goods or deliver services to customers.",
                permitted: true,
              },
              {
                title: "Real estate or debt payoff",
                desc: "SBA Microloan proceeds cannot be used to purchase real estate or to pay down existing debt obligations. These uses are explicitly prohibited under SBA program rules.",
                permitted: false,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-xl border p-4 ${
                  item.permitted
                    ? "border-[#e5e5e5] bg-[#ffffff]"
                    : "border-[#f5f5f5] bg-[#f5f5f5]"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.permitted ? "bg-[#0f0f0f]" : "bg-[#0f0f0f]"
                    }`}
                  />
                  <p className={`text-sm font-semibold ${item.permitted ? "text-[#0f0f0f]" : "text-[#737373]"}`}>
                    {item.title}
                  </p>
                  <span
                    className={`ml-auto text-[0.6rem] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                      item.permitted
                        ? "text-[#0f0f0f] bg-[#0f0f0f]/10"
                        : "text-[#0f0f0f] bg-[#0f0f0f]/10"
                    }`}
                  >
                    {item.permitted ? "Permitted" : "Not Permitted"}
                  </span>
                </div>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#a3a3a3] mt-5">
            Permitted uses listed above reflect general SBA Microloan program guidelines. Individual intermediary lenders may impose additional restrictions. Confirm permitted uses with the specific intermediary before submitting an application.
          </p>
        </div>
      </section>

      {/* 6. Typical Requirements */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Requirements
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Typical eligibility considerations
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                There is no single universal set of requirements for SBA Microloans because each intermediary lender establishes its own criteria within the SBA program framework. The considerations below are general observations. Subject to underwriting.
              </p>

              <div className="space-y-3">
                {[
                  {
                    label: "Credit score",
                    value: "No universal minimum",
                    detail: "Many intermediaries work with borrowers who have imperfect or limited credit. Some may require a minimum score (often 575–620+) while others evaluate character and capacity more broadly.",
                  },
                  {
                    label: "Time in business",
                    value: "Startups often eligible",
                    detail: "Unlike most bank programs, SBA Microloans can sometimes be accessed by pre-revenue startups or businesses operating for less than 12 months, subject to intermediary requirements.",
                  },
                  {
                    label: "Annual revenue",
                    value: "No SBA-mandated minimum",
                    detail: "Revenue requirements vary by intermediary. Newer businesses may need to provide projections. Established businesses may need to demonstrate consistent cash flow sufficient to service the debt.",
                  },
                  {
                    label: "Collateral",
                    value: "Often required",
                    detail: "Most intermediaries require some form of collateral — which may include business equipment, inventory, or personal assets — though collateral requirements are generally less stringent than conventional bank underwriting.",
                  },
                  {
                    label: "Personal guarantee",
                    value: "Typically required",
                    detail: "Owners with 20% or more ownership stake are generally required to provide a personal guarantee. This means personal assets may be at risk if the business is unable to repay the loan.",
                  },
                  {
                    label: "Business type",
                    value: "Most for-profit businesses",
                    detail: "The SBA Microloan program is available to most types of for-profit small businesses. Certain SBA-ineligible business types — gambling, speculation, and some financial businesses — may not qualify.",
                  },
                ].map((req) => (
                  <div key={req.label} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <p className="text-sm font-semibold text-[#0f0f0f]">{req.label}</p>
                      <span className="text-xs text-[#0f0f0f] font-medium flex-shrink-0">{req.value}</span>
                    </div>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed">{req.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Cost Discussion */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Cost Structure
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Understanding SBA Microloan pricing
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                SBA Microloan interest rates are set by individual intermediary lenders — not by the SBA — and are not disclosed in advance on this site. We do not quote, guarantee, or predict rates. The following explains how pricing generally works in the program.
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-2">How rates are set</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">
                    The SBA limits the maximum interest rate intermediary lenders may charge, based on a formula tied to the prime rate plus an allowable spread. Rates are typically higher than conventional SBA 7(a) loans because intermediaries bear more credit risk per loan dollar deployed. Rates may also reflect the intermediary's cost of capital and operating model.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-2">Fees to be aware of</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">
                    Some intermediary lenders charge origination fees, application fees, or closing costs. Others do not. Review the full loan agreement — including the APR, total interest cost, any prepayment provisions, and fee schedule — before accepting a loan offer. Compare the total cost of capital, not just the stated rate.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-2">Fixed vs. variable rates</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">
                    Microloan rates may be fixed or variable depending on the intermediary. Fixed rates provide predictability for budgeting. Variable rates may start lower but can increase over the loan term. Confirm rate structure with the specific intermediary.
                  </p>
                </div>

                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-2">Comparing cost to alternatives</p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed">
                    While Microloan rates may be higher than conventional bank loans, they are typically substantially lower than merchant cash advances or revenue-based financing. For a small-dollar need — $5,000 to $35,000 — the Microloan program is often among the lower-cost government-affiliated options available to businesses that cannot qualify elsewhere. Subject to underwriting and lender terms.
                  </p>
                </div>

                <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] p-4">
                  <p className="text-xs text-[#737373] leading-relaxed">
                    ZEO.co does not quote or guarantee rates, terms, or approval for SBA Microloans or any other financing product. All pricing is determined by the applicable third-party intermediary lender based on their own underwriting criteria and SBA program guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pros and Cons */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Tradeoffs
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Potential advantages and limitations
            </h2>
            <p className="text-[#737373] text-sm mt-2 max-w-2xl">
              No financing product is universally right for every situation. The following reflects general program characteristics, not guarantees of any individual outcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0f0f0f] mb-5">
                Potential Advantages
              </p>
              <ul className="space-y-3">
                {[
                  "Available to startups and businesses that may not qualify for conventional bank financing",
                  "Smaller loan amounts may be appropriate when larger programs are structurally oversized",
                  "Many intermediaries provide business counseling and technical assistance alongside the loan",
                  "Rates are capped by SBA program rules, which may result in lower costs than non-SBA alternative lenders",
                  "Intermediary lenders often evaluate character and capacity alongside credit scores",
                  "Government-affiliated program with SBA oversight of participating intermediaries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-[#0f0f0f] flex-shrink-0 mt-0.5" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-[#737373] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#737373] mb-5">
                Limitations to Consider
              </p>
              <ul className="space-y-3">
                {[
                  "Maximum of $50,000 — insufficient for larger capital needs such as acquisitions or commercial real estate",
                  "Cannot be used for real estate purchases or debt refinancing under SBA program rules",
                  "Intermediary geographic coverage is uneven; not all areas have active local intermediaries",
                  "Application and approval timelines may be longer than alternative lenders (typically 2–8 weeks)",
                  "Some intermediaries require participation in training programs as a condition of approval",
                  "Rates may be higher than conventional bank loans, though typically lower than MCA or short-term alternatives",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-[#a3a3a3] flex-shrink-0 mt-0.5" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm text-[#737373] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Comparison Table */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              How SBA Microloans compare to other structures
            </h2>
            <p className="text-[#737373] text-sm max-w-2xl">
              General overview only. Actual eligibility, amounts, and terms vary by lender and applicant profile. Not offers or commitments.
            </p>
          </div>
          <ComparisonTable
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightCol="SBA Microloan"
          />
          <p className="text-[0.65rem] text-[#a3a3a3] mt-3">
            All figures are general estimates. ZEO.co is not the SBA or an SBA lender. Results are educational only. Subject to third-party underwriting.
          </p>
        </div>
      </section>

      {/* 10. Alternatives */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Alternatives
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Related financing options to explore
            </h2>
            <p className="text-[#737373] text-sm max-w-2xl">
              If a Microloan may not be the right fit — or if your capital need exceeds $50,000 — these structures may be worth evaluating. All subject to eligibility and third-party underwriting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FinancingPathCard
              icon={<SBALoansIcon />}
              title="SBA 7(a) Loans"
              description="For capital needs above $50,000 or use cases that include acquisitions, real estate, or large equipment purchases. SBA's most widely used loan program. Subject to SBA eligibility and lender underwriting."
              tags={["Up to $5M+", "10–25 yr terms", "Acquisition-eligible"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<WorkingCapitalIcon />}
              title="Working Capital Loans"
              description="Short- to medium-term financing for operating needs. May be more flexible on use of proceeds than Microloans and can move faster through the underwriting process. Subject to underwriting."
              tags={["$50K–$5M", "Flexible use", "6–36 mo"]}
              href="/working-capital"
            />
            <FinancingPathCard
              icon={<EquipmentIcon />}
              title="Equipment Financing"
              description="If your primary need is to purchase machinery, vehicles, or capital equipment, equipment financing uses the asset as collateral and may offer competitive terms without the Microloan cap."
              tags={["Asset-secured", "$10K–$5M+", "Section 179"]}
              href="/equipment-financing"
            />
          </div>

          <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
            <p className="text-sm font-semibold text-[#0f0f0f] mb-2">Not sure which path may fit?</p>
            <p className="text-xs text-[#a3a3a3] leading-relaxed mb-3">
              ZEO evaluates business profiles against multiple financing structures, not just one. If your situation has characteristics that cut across several products — for example, you need equipment and working capital, or your use of proceeds spans categories — a structured intake may surface options you would not have identified on your own.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f0f0f] hover:text-[#0f0f0f] transition-colors"
            >
              Start an intake
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Calculator Link */}
      <section className="py-12 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1.5">
                Tools
              </p>
              <p className="text-sm font-semibold text-[#0f0f0f] mb-1">
                Estimate potential loan payments
              </p>
              <p className="text-xs text-[#a3a3a3] leading-relaxed max-w-md">
                Use the SBA loan payment calculator to model approximate monthly payments at different loan amounts and terms. Results are estimates only — not offers or commitments. Actual payment amounts depend on the rate and terms offered by the applicable lender.
              </p>
            </div>
            <Link
              href="/calculators/sba-loan-calculator"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-medium text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors whitespace-nowrap"
            >
              SBA Payment Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <FAQ
        title="SBA Microloan Questions"
        items={faqItems}
      />

      {/* 13. Disclaimer */}
      <section className="py-8 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="sba" />
        </div>
      </section>

      {/* 14. CTA */}
      <CTASection
        headline="Explore whether an SBA Microloan may be a potential fit"
        subtext="Submit a brief intake and ZEO will evaluate potential financing paths relevant to your business profile. All financing subject to underwriting by third-party providers. ZEO is not the SBA or an SBA lender."
        primaryLabel="Start Intake"
        primaryHref="/apply"
        secondaryLabel="Compare Financing Options"
        secondaryHref="/financing"
      />
    </>
  );
}

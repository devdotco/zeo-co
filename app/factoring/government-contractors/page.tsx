import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Government Contract Factoring | ZEO.co",
  description:
    "Government contract factoring allows federal, state, and local contractors to convert slow-paying agency invoices into working capital. Learn how advance rates, assignment of claims, and invoice eligibility work before you apply.",
  path: "/factoring/government-contractors",
  keywords: [
    "government contract factoring",
    "federal contractor factoring",
    "government invoice factoring",
    "assignment of claims act",
    "GSA contractor factoring",
    "DoD contractor cash flow",
    "government receivables factoring",
    "public sector invoice factoring",
  ],
});

const faqItems = [
  {
    q: "Does government contract factoring require an Assignment of Claims Act filing?",
    a: "For federal contracts valued above $1,000, factoring typically requires compliance with the Assignment of Claims Act (31 U.S.C. § 3727) and the Assignment of Contracts Act (41 U.S.C. § 6305). This process involves a formal notice of assignment to the contracting officer, the agency's designated payment office, and the surety, if applicable. The government agency must acknowledge the assignment before the factor has a secured position on those receivables. Not all factors are familiar with this process — confirm that your factoring company has experience with federal assignment procedures before onboarding.",
  },
  {
    q: "Can a small business with an 8(a), HUBZone, or SDVOSB designation use government contract factoring?",
    a: "Set-aside designations do not by themselves prevent a contractor from factoring invoices. However, any assignment of claims under a set-aside contract must comply with SBA program rules, and some agencies may have additional requirements around assignment notification or approval. Contractors with active SBA program participation should confirm with their program office that factoring under their specific contracts is permissible. The factoring company may also require verification of the contractor's current registration in SAM.gov and active set-aside status.",
  },
  {
    q: "How long does it typically take for government agencies to pay invoices submitted through a factor?",
    a: "Federal agencies are generally subject to the Prompt Payment Act, which requires payment within 30 days of a proper invoice or acceptance of goods and services, with interest penalties accruing after that window. In practice, many agencies pay within 30 to 45 days, though certain contract types, disputed invoices, or agencies with high processing volumes can extend that timeline. State and local government payment cycles vary widely — some pay promptly, others on 45- to 90-day schedules. Slow government payment cycles are a primary driver of why contractors turn to factoring.",
  },
  {
    q: "Are cost-reimbursable and time-and-materials contracts eligible for factoring?",
    a: "Many factoring companies that specialize in government contracts can work with cost-reimbursable (CPFF, CPAF, CPIF) and time-and-materials (T&M) contract types, in addition to firm-fixed-price (FFP) contracts. The key requirements are that the invoices represent work already performed and accepted, that the contract itself permits assignment, and that the government agency's payment office can be identified for the notice of assignment. Some factors prefer FFP contracts due to their cleaner invoice structure. Confirm with individual factors which contract types they accept.",
  },
  {
    q: "What happens to factoring if a government contract is modified, terminated, or subject to a stop-work order?",
    a: "Contract modifications, partial terminations, and stop-work orders can directly affect the factoring relationship. If invoices have already been assigned and funded, the factor has a secured interest in those specific receivables — a contract modification does not automatically extinguish that claim. However, if a contract is terminated for convenience, the government may offset termination settlement amounts against outstanding invoices. Stop-work orders mean new invoices stop generating, which can affect your factoring volume and any minimum commitments in your agreement. Notify your factoring company immediately if you receive a stop-work order or contract termination notice — failure to do so may constitute a breach of your factoring agreement.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Govt. Contract Factoring": "Accepted agency invoices",
    "Bank Line of Credit": "Overall creditworthiness",
    "SBA 7(a) Loan": "Business financials / DSCR",
  },
  {
    feature: "Primary credit review",
    "Govt. Contract Factoring": "Government agency credit",
    "Bank Line of Credit": "Owner & business credit",
    "SBA 7(a) Loan": "Business revenue & credit",
  },
  {
    feature: "Typical funding speed",
    "Govt. Contract Factoring": "1–3 business days",
    "Bank Line of Credit": "Weeks to months",
    "SBA 7(a) Loan": "30–90 days",
  },
  {
    feature: "Assignment notice required",
    "Govt. Contract Factoring": "Yes — contracting officer",
    "Bank Line of Credit": "No",
    "SBA 7(a) Loan": "No",
  },
  {
    feature: "New contractor eligible",
    "Govt. Contract Factoring": "Often yes, with active contract",
    "Bank Line of Credit": "Rarely without history",
    "SBA 7(a) Loan": "Generally 2+ years in business",
  },
  {
    feature: "UCC filing",
    "Govt. Contract Factoring": "Yes — on govt. receivables",
    "Bank Line of Credit": "Often — blanket lien",
    "SBA 7(a) Loan": "Yes — collateral required",
  },
  {
    feature: "Personal guarantee typical",
    "Govt. Contract Factoring": "Varies by factor",
    "Bank Line of Credit": "Usually yes",
    "SBA 7(a) Loan": "Yes (20%+ owners)",
  },
];

export default function GovernmentContractorFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Government Contract Factoring"
        subtitle="Federal, state, and local government agencies are creditworthy customers — but their payment cycles rarely align with a contractor's payroll, subcontractor obligations, and material costs. Government contract factoring converts accepted agency invoices into working capital without waiting 30 to 60 days for the agency to remit. Subject to underwriting by third-party providers."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Government Contract Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="80–92%"
              note="Subject to contract type, agency, and invoice documentation"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1–4%"
              unit="per invoice"
              note="Varies by agency payment cycle, volume, and recourse structure"
            />
            <MetricCard
              label="Government Agency Creditworthiness"
              value="High"
              note="Federal and state agencies are among the most creditworthy debtors"
              highlight
            />
            <MetricCard
              label="Typical Agency Payment Window"
              value="30–60 days"
              note="Federal Prompt Payment Act requires 30-day payment on proper invoices"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are illustrative only. Actual advance rates and fees are subject to underwriting by third-party providers and are not guaranteed or offered by ZEO.co.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            What Is Government Contract Factoring?
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Government contract factoring is a form of accounts receivable financing in which a contractor assigns invoices issued to a government agency — federal, state, or local — to a third-party factoring company in exchange for an immediate advance on the invoice value. Rather than waiting 30, 45, or 60 days for the agency to process and remit payment, the contractor receives a large portion of the invoice amount within days of submission, with the remaining reserve released once the agency pays in full.
            </p>
            <p>
              The distinguishing characteristic of government contract factoring — compared to commercial invoice factoring — is the creditworthiness of the debtor. Government agencies do not go bankrupt, rarely dispute properly submitted invoices, and for federal contracts are subject to the Prompt Payment Act, which imposes statutory interest penalties on late payment. This makes government receivables among the lowest-risk assets a factoring company can hold, which is reflected in the structures and fees that specialized factors offer for this segment.
            </p>
            <p>
              At the federal level, factoring government invoices requires formal compliance with the Assignment of Claims Act (31 U.S.C. § 3727), which governs how receivables under federal contracts may be assigned to a third party. This process involves written notification to the contracting officer and the government's designated payment office, and in some cases requires the agency's written acknowledgment. Factors experienced in government contract factoring manage this process as part of onboarding — those without this experience may not be equipped to properly perfect their security interest in federal receivables.
            </p>
            <p>
              State and local government contracts are governed by varying state laws and individual agency procedures. Some states have their own assignment statutes; others defer to contract-specific terms. The general principle is similar — the factor must perfect its claim on the receivable through proper notification — but the mechanics differ from federal contracts. Contractors working across multiple jurisdictions should confirm that a prospective factor has experience with each relevant type of government entity.
            </p>
            <p>
              Government contract factoring is used by a wide range of contractors: IT services firms on multi-year IDIQ vehicles, construction and maintenance contractors performing work for agencies, defense subcontractors waiting on prime contractor pass-through payments, staffing companies providing personnel to government clients, and professional services firms delivering on SOW-based engagements. The common thread is a structural mismatch between when performance obligations come due — payroll, subcontractors, equipment, materials — and when the government remits.
            </p>
          </div>
        </div>
      </section>

      {/* Who uses it */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Who It May Fit
            </p>
            <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
              Types of Government Contractors That Commonly Use Factoring
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Government contract factoring is relevant wherever a contractor holds an active contract with a government entity and faces a gap between performance and payment. The common driver is not financial distress — it is the structural reality that government payment timelines don't align with operating cash needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {/* IT and professional services */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M6 16h6M9 13v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M5.5 8.5L7.5 10.5L12.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">IT and Professional Services</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Technology, consulting, and managed services firms billing on monthly or milestone-based schedules under GSA Schedule, GWAC, or agency-specific contracts often have high payroll relative to their advance billing cycle. Factoring can bridge the gap between when staff are paid and when the agency remits.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["GSA Schedule", "GWAC / IDIQ", "Cybersecurity", "Consulting"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Defense and subcontractors */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L11.5 7H16.5L12.5 10.5L14 15.5L9 12.5L4 15.5L5.5 10.5L1.5 7H6.5L9 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Defense and Government Subcontractors</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Subcontractors performing work under a prime contractor's government contract face a compounded payment delay — the prime must first receive payment from the agency before remitting to subs. Some factors work with both direct agency invoices and pass-through subcontractor arrangements, though requirements differ.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["DoD subcontracts", "Prime pass-through", "Defense supply"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Construction and facilities */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 15h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M4 15V9l5-6 5 6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="7" y="11" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Construction and Facilities</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Government construction, O&M, and facilities management contractors front significant material and labor costs weeks before progress billings are submitted and approved. Progress payment cycles on public contracts often run 45 to 90 days from submission to receipt, creating substantial working capital gaps on larger projects.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["O&M contracts", "Progress billing", "Corps of Engineers"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the advance/reserve cycle works */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            The Government Contract Factoring Cycle
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
            Government contract factoring follows the contractor's billing cycle — from contract performance through agency payment — with an assignment of claims layer that is specific to this type of receivable.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "You perform under the contract and submit a proper invoice to the agency",
                body: "After delivering services, goods, or completed work milestones, you prepare and submit a proper invoice to the government agency's designated billing office. For federal contracts, \"proper invoice\" is a defined term under the Prompt Payment Act — it must include the contractor name, contract number, invoice date, description of deliverables, and payment terms, among other required elements. An improper invoice can reset the payment clock.",
              },
              {
                step: "2",
                title: "The factoring company files an assignment of claims with the contracting officer",
                body: "For federal contracts, the factor perfects its claim on your receivables by submitting a notice of assignment to the contracting officer, the agency's designated payment office, and the surety if applicable. This is done at onboarding and covers the contract broadly, rather than invoice by invoice. Some agencies require written acknowledgment of the assignment before payments can be redirected. Your factoring company should manage this process — confirm that they have done it correctly before submitting invoices for funding.",
              },
              {
                step: "3",
                title: "You submit the invoice to the factor and receive the advance",
                body: "Once onboarding and assignment filings are complete, you submit invoice documentation to the factor — typically the invoice, proof of acceptance or delivery confirmation from the agency, and a copy of the relevant contract or task order. The factor advances a percentage of the invoice value — commonly 80% to 92% for government receivables — directly to your bank account, often within one to three business days.",
              },
              {
                step: "4",
                title: "The agency remits payment to the factor's designated account",
                body: "Following the assignment of claims, the agency's payment records are updated to direct remittance to the factor's lockbox or designated account rather than to your account. When the agency processes payment — typically within 30 days under the Prompt Payment Act for federal agencies — funds are sent directly to the factor. State and local agencies follow their own payment schedules.",
              },
              {
                step: "5",
                title: "The factor releases the reserve minus the factoring fee",
                body: "Once the agency's payment is received and reconciled, the factor releases the reserve — the portion of the invoice not advanced upfront — minus the factoring fee for the period between the advance and payment. If the agency pays promptly, the effective cost of factoring is lower. Under recourse agreements, if an invoice remains unpaid beyond the agreement's defined window, you may be responsible for repurchasing it.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-5">
                <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center text-[0.65rem] font-semibold text-[#0f0f0f] tabular-nums">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Requirements and invoice criteria */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Requirements
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              What Government Contract Factors Typically Evaluate
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Requirements vary by factor and contract type. The items below represent commonly reviewed criteria. No approval is guaranteed — all decisions are made by third-party providers subject to their own underwriting standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Active Government Contract",
                body: "You must hold an active, executed contract with the government entity. Contracts that are expired, terminated, or pending award are not eligible. Some factors require a minimum remaining contract value or base period, particularly for longer-term IDIQ or MATOC vehicles where individual task orders drive invoicing.",
              },
              {
                title: "SAM.gov Registration (Federal Contracts)",
                body: "Active federal contractors must maintain a current registration in the System for Award Management (SAM.gov). Most federal factors verify SAM.gov status as part of onboarding and may require that it remain current throughout the factoring relationship. An expired SAM registration can affect your ability to receive new task orders and may trigger issues with invoicing.",
              },
              {
                title: "Assignable Contract (No Anti-Assignment Clause)",
                body: "Most government contracts permit assignment of payment rights under the Assignment of Claims Act. However, some contracts — particularly certain classified, cost-plus, or agency-specific vehicles — may include restrictions or require additional consents. Review your contract for any assignment restrictions before pursuing factoring.",
              },
              {
                title: "Properly Issued Invoices with Acceptance Documentation",
                body: "Invoices must be proper under the applicable payment clause and supported by evidence that the government has accepted the deliverables — such as a signed acceptance report, contracting officer representative (COR) approval, or delivery receipt. Invoices in dispute, under withhold, or not yet accepted are generally not eligible for factoring until the underlying issue is resolved.",
              },
              {
                title: "No Conflicting UCC Liens on Receivables",
                body: "If another lender holds a blanket lien on your assets — common with SBA loans or bank lines of credit — that lender may have a prior claim on your government receivables. The factor will file a UCC-1 on your government receivables during onboarding. An existing conflicting lien may need to be subordinated or released before the factor can perfect its position.",
              },
              {
                title: "Business Formation and Tax Compliance",
                body: "Factoring companies typically require evidence of valid business formation (articles of incorporation or organization), a current EIN, and confirmation that there are no outstanding federal or state tax liens that would affect the receivables. Government contractors with tax issues may face additional scrutiny, as the IRS can offset government payments against delinquent tax obligations through the Treasury Offset Program.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5"
              >
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advance rates and fee ranges */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Pricing
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            Advance Rates and Fee Structures for Government Contract Factoring
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-6">
            Government receivables are among the most creditworthy assets in commercial factoring due to the near-zero default risk of government debtors. This generally supports competitive terms relative to other invoice types. The ranges below are illustrative only — they are not offers, commitments, or guarantees, and all terms are subject to third-party underwriting.
          </p>
          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Advance Rate</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">80 – 92%</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Government contract factoring advance rates tend to be competitive due to the low credit risk of agency debtors. Federal agency receivables, particularly those with Prompt Payment Act protections, may support advance rates at the higher end of this range. Advance rates on state and local government invoices vary based on the agency's payment history and whether the factor has established experience with that entity. Construction progress billings may receive lower advance rates due to their complexity and potential for withhold provisions.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Factoring Fee</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">1 – 4% per invoice</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Factoring fees for government invoices are typically structured as a flat percentage of the invoice face value, often with a tiered structure that increases if the agency takes longer than the base payment window to remit. Because federal agencies are subject to the Prompt Payment Act, invoices tend to turn within 30 days, which limits the effective duration of most fee structures. State and local invoices with longer payment cycles may incur higher effective costs due to tiered fee accrual. Always confirm the complete fee schedule — including minimum volume fees, wire/ACH fees, and termination penalties.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Recourse vs. Non-Recourse</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">Structure affects risk allocation</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Because government agencies do not default in the traditional sense, non-recourse programs for government contract factoring typically focus on insolvency-related scenarios that rarely apply to public entities. The more relevant risk in government factoring is invoice disputes — a contracting officer withholding payment pending cure of a deficiency, a scope dispute, or a contract termination. These scenarios are typically not covered under non-recourse protection. Understand exactly what your agreement covers, regardless of how it is labeled.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Prompt Payment Act Interest</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">Federal contracts only</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Under the federal Prompt Payment Act, agencies owe interest to the contractor when a proper invoice is paid late. In a factoring arrangement, the disposition of any Prompt Payment interest depends on your factoring agreement — some agreements specify that interest accruing after the factor takes assignment of the receivable belongs to the factor, while others may credit it to the contractor. Clarify this with your factor during contract review.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] px-5 py-4">
            <p className="text-sm text-[#737373] leading-relaxed">
              <span className="text-[#0f0f0f] font-medium">Estimate your factoring cost before you commit.</span>{" "}
              The{" "}
              <Link
                href="/calculators/invoice-factoring-calculator"
                className="text-[#0f0f0f] underline underline-offset-2 hover:text-[#0f0f0f] transition-colors"
              >
                Invoice Factoring Calculator
              </Link>{" "}
              lets you model advance amounts, factoring fees, and reserve releases based on your invoice values and estimated agency payment timing. All outputs are estimates only and do not represent an offer or commitment from any provider.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              Government Contract Factoring vs. Other Working Capital Options
            </h2>
            <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
              No single financing structure suits every contractor or contract situation. This table highlights structural differences between common options — not endorsements or cost rankings. All terms are subject to third-party underwriting.
            </p>
          </div>
          <ComparisonTable
            columns={["Govt. Contract Factoring", "Bank Line of Credit", "SBA 7(a) Loan"]}
            rows={comparisonRows}
            highlightCol="Govt. Contract Factoring"
          />
        </div>
      </section>

      {/* Benefits and limitations */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Potential Benefits
              </p>
              <h2 className="text-xl font-semibold text-white mb-5">What Government Contract Factoring Can Offer</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Government agencies are among the most creditworthy debtors",
                    body: "Factoring against federal, state, and local government invoices means the debtor carries effectively no insolvency risk. This low-risk receivable profile is often reflected in the terms that experienced government-focused factors can offer — factors are less exposed to the credit risk that drives conservative pricing in commercial factoring.",
                  },
                  {
                    title: "Access working capital without waiting on agency payment cycles",
                    body: "Government payment cycles — even under the Prompt Payment Act — can run 30 to 60 days from invoice submission. Factoring allows contractors to convert accepted invoices into working capital within days, without waiting on each agency's internal processing timeline.",
                  },
                  {
                    title: "May support growth without adding debt to the balance sheet",
                    body: "Because factoring is structured as the purchase of receivables rather than a loan in many cases, it may not appear on the balance sheet as debt in the same way a traditional credit facility would. This structural distinction matters for contractors with existing debt covenants or those managing to SBA loan restrictions — though tax and accounting treatment should be confirmed with qualified advisors.",
                  },
                  {
                    title: "Approval may weight agency creditworthiness over contractor financials",
                    body: "New contractors or those with limited financial history may find that factoring is accessible earlier than traditional credit — particularly when they hold contracts with creditworthy agencies and can demonstrate consistent performance. The factor is primarily evaluating whether the agency will pay, not whether the contractor has two years of audited financials.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{item.title}</p>
                      <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Limitations to Understand
              </p>
              <h2 className="text-xl font-semibold text-white mb-5">Important Considerations</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Assignment of Claims Act compliance is mandatory for federal contracts",
                    body: "The legal requirements for assigning federal contract receivables are more structured than in commercial factoring. If the assignment is not properly perfected — including proper notification to the contracting officer and payment office — the factor's security interest in those receivables may not be legally valid. Work only with factors that have demonstrated experience processing federal assignments.",
                  },
                  {
                    title: "Treasury Offset Program can intercept agency payments",
                    body: "The federal government's Treasury Offset Program (TOP) allows the IRS and other federal agencies to intercept payments — including contract payments — to satisfy delinquent federal debts such as unpaid taxes. If you have outstanding federal tax liabilities, agency payments may be redirected before the factor receives them, creating a shortfall. This is a material risk for contractors with any unresolved tax obligations.",
                  },
                  {
                    title: "Invoice disputes and withholds are the primary risk, not non-payment",
                    body: "Unlike commercial factoring where debtor insolvency is a real concern, the primary factoring risk with government clients is a contracting officer withholding payment due to a performance issue, scope dispute, or administrative deficiency. These scenarios may not be covered by non-recourse provisions and can leave you responsible for repurchasing the invoice under a recourse agreement.",
                  },
                  {
                    title: "Factoring fees apply to every invoice — including large agency billings",
                    body: "On large contract invoices — particularly monthly professional services billings or significant progress payments — factoring fees of even 1.5% to 3% represent a meaningful cost in absolute dollar terms. Contractors should model the annualized cost of factoring relative to the value of early access to cash and the cost of alternatives such as a revolving credit facility.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#a3a3a3]" viewBox="0 0 16 16" fill="none">
                      <path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{item.title}</p>
                      <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator callout */}
      <section className="py-10 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-1">
                Free Tool
              </p>
              <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1">
                Invoice Factoring Calculator
              </h3>
              <p className="text-sm text-[#737373]">
                Model advance amounts, factoring fees, and reserve releases using your government invoice values and expected agency payment timing. Outputs are estimates only and are not offers from any provider.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-medium text-[#0f0f0f] hover:border-[#0f0f0f]/50 hover:text-[#333333] transition-colors"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Government Contract Factoring — Common Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Explore Whether Government Contract Factoring May Be a Fit"
        subtext="Submit a brief intake and ZEO will review your situation against potential financing paths. No commitment required. Subject to underwriting by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Explore Factoring Options"
        secondaryHref="/factoring"
      />

      {/* Disclaimer */}
      <section className="py-8 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="factoring" />
        </div>
      </section>
    </div>
  );
}

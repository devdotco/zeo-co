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

export const metadata: Metadata = buildMetadata({
  title: "Staffing Agency Invoice Factoring | ZEO.co",
  description:
    "Staffing agencies can use invoice factoring to fund weekly payroll while waiting on client payments. Learn how advance rates, reserve accounts, and staffing-specific fee structures work before you apply.",
  path: "/factoring/staffing",
  keywords: [
    "staffing agency factoring",
    "staffing invoice factoring",
    "payroll funding for staffing agencies",
    "temporary staffing financing",
    "staffing accounts receivable",
    "staffing factoring rates",
    "workforce solutions financing",
  ],
});

const faqItems = [
  {
    q: "Why is staffing factoring different from general invoice factoring?",
    a: "Staffing agencies generate high invoice volume with relatively low margins, short billing cycles (often weekly), and a recurring payroll obligation that does not pause while clients process invoices. Factors that specialize in staffing understand this cash flow pattern and are generally more comfortable with the volume and frequency of submissions. They also tend to be familiar with staffing-specific risks like disputed hours, co-employment considerations, and the absence of a physical product to lien. General-purpose factors may apply underwriting criteria that do not translate cleanly to the staffing model.",
  },
  {
    q: "Can I factor invoices for temporary staffing and direct-hire placements?",
    a: "Temporary staffing invoices — where a worker is on your payroll and billed to a client on a time-and-materials basis — are the most commonly factored receivable in this industry. Direct-hire or permanent placement invoices may also qualify, but factors will evaluate them differently because payment is often contingent on the placement holding through a guarantee period. Invoices subject to contingencies, refund clauses, or clawback provisions may be excluded or require additional reserves. Confirm with any prospective factor how they treat each invoice type before submitting.",
  },
  {
    q: "Does the client (employer of record) need to know I am factoring?",
    a: "In most staffing factoring arrangements, the factor takes an assignment of your receivables and notifies your clients to remit payment directly to the factor. This is called notification factoring and is standard in the industry. Your clients will receive a notice of assignment along with updated payment instructions, typically referencing a lockbox or factor-controlled account. Non-notification arrangements exist but are less common for staffing due to the volume and frequency of invoices. Factor notification does not affect your contractual relationship with your client, but it is worth reviewing your staffing contracts for any anti-assignment clauses.",
  },
  {
    q: "What happens if a client disputes hours or refuses to pay an invoice?",
    a: "Most staffing factoring is recourse factoring, meaning that if your client does not pay within a specified period — often 90 days from the invoice date — you are obligated to repurchase the invoice or allow the factor to deduct the unpaid amount from future reserves or advances. Non-recourse factoring programs, which absorb credit losses if the client becomes insolvent, are less common and more expensive. Disputed invoices — where the client contests the hours, rates, or placement — are typically treated differently from credit defaults and may require you to resolve the dispute before any reserve is released. Understanding recourse terms is essential before signing any factoring agreement.",
  },
  {
    q: "How do reserve accounts work for staffing agencies that factor weekly?",
    a: "When you submit an invoice, the factor advances a percentage of the face value and holds the remainder in a reserve account. Each week as clients pay prior invoices, the factor releases the corresponding reserve — minus any accumulated fees — back to your operating account. For high-volume staffing agencies, this creates a rolling balance of reserves that are continuously funded by new submissions and released as old invoices clear. Some factors offer periodic reserve sweeps (weekly, bi-weekly); others release reserves only when a specific invoice is paid in full. The timing and mechanics of reserve releases should be clearly spelled out in your factoring agreement and reviewed with counsel.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Staffing Factoring": "Outstanding client invoices",
    "Business Line of Credit": "Overall creditworthiness",
    "Payroll Funding Loan": "Historical revenue / projections",
  },
  {
    feature: "Primary credit review",
    "Staffing Factoring": "Your clients",
    "Business Line of Credit": "Your business & owners",
    "Payroll Funding Loan": "Your business & owners",
  },
  {
    feature: "Typical funding speed",
    "Staffing Factoring": "24–48 hrs (post-onboarding)",
    "Business Line of Credit": "Weeks to months",
    "Payroll Funding Loan": "Days to weeks",
  },
  {
    feature: "Payroll timing flexibility",
    "Staffing Factoring": "Weekly cycle supported",
    "Business Line of Credit": "Depends on draw process",
    "Payroll Funding Loan": "Depends on lender",
  },
  {
    feature: "Approval tied to your credit",
    "Staffing Factoring": "Partially",
    "Business Line of Credit": "Primarily",
    "Payroll Funding Loan": "Primarily",
  },
  {
    feature: "Recourse on non-payment",
    "Staffing Factoring": "Typically recourse",
    "Business Line of Credit": "N/A",
    "Payroll Funding Loan": "N/A",
  },
  {
    feature: "Client notification required",
    "Staffing Factoring": "Typically yes",
    "Business Line of Credit": "No",
    "Payroll Funding Loan": "No",
  },
];

export default function StaffingFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Staffing Factoring"
        subtitle="Staffing agencies bill clients weekly or bi-weekly but rarely collect on that schedule. Invoice factoring may help bridge the gap between payroll obligations and client payment terms — subject to underwriting and third-party approval."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Staffing Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="85–95%"
              note="Staffing invoices often qualify for higher advances due to short billing cycles and creditworthy clients"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1–4%"
              unit="per invoice"
              note="Varies by volume, client credit quality, and invoice terms"
            />
            <MetricCard
              label="Funding Frequency"
              value="Weekly"
              note="Most staffing factors support weekly or daily submission cycles"
              highlight
            />
            <MetricCard
              label="Invoice Terms Supported"
              value="Net 15–60"
              note="Some programs accommodate Net 30–90; longer terms affect fee structure"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are illustrative only. Actual advance rates and fees are subject to underwriting by third-party providers and are not guaranteed.
          </p>
        </div>
      </section>

      {/* What is staffing factoring */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
            What Is Staffing Factoring?
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Staffing factoring is invoice factoring applied specifically to the receivables of staffing agencies, temporary workforce companies, and professional employer organizations. Instead of waiting 30 to 60 days for a corporate client to process an invoice, a staffing agency sells that invoice to a factoring company — the factor — and receives an immediate cash advance, typically within one to two business days.
            </p>
            <p>
              The factor collects payment directly from the client when the invoice comes due, then releases the remaining reserve — the portion held back at time of advance — to the staffing agency, minus the factoring fee. For agencies that run payroll weekly or bi-weekly, this structure allows payroll obligations to be met without depending on client payment timing.
            </p>
            <p>
              Staffing factoring differs from general invoice factoring in a few important ways. Factors that specialize in staffing expect high invoice frequency and relatively modest per-invoice values; they underwrite client creditworthiness at scale rather than evaluating each invoice individually. They are also familiar with the operational complexities of the staffing industry — including worker classification, co-employment arrangements, and the absence of a physical deliverable — which can affect how invoices are verified and funded.
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
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
              Types of Staffing Businesses That Commonly Use Factoring
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Staffing factoring is most relevant for agencies with recurring B2B billing relationships with commercial or government clients. It is generally less applicable to direct-hire firms that collect placement fees in lump sums, or to sole-proprietor consulting arrangements where the "agency" is also the worker.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2a3 3 0 100 6 3 3 0 000-6z" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              }
              title="Temporary Staffing Agencies"
              description="Light industrial, clerical, and commercial temp agencies bill clients for hours worked each week while carrying weekly payroll. Factoring is common in this segment due to high invoice volume and predictable billing cycles."
              tags={["Light industrial", "Clerical", "Commercial temp"]}
              href="/factoring/staffing"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  <rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  <rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  <rect x="10" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              }
              title="IT and Professional Staffing"
              description="Technology and professional services staffing firms often place contractors at larger corporations on monthly or quarterly billing. Client credit is typically strong, supporting higher advance rates and lower factoring fees."
              tags={["IT contract staffing", "Engineering", "Finance & accounting"]}
              href="/factoring/staffing"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 14V7l7-4 7 4v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="6" y="10" width="6" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              }
              title="Healthcare Staffing"
              description="Healthcare staffing agencies that place nurses, allied health, or medical support staff with hospitals and facilities face long collection cycles. Specialized healthcare staffing factors understand the nuances of government and insurance payer relationships."
              tags={["Travel nursing", "Allied health", "Per diem staffing"]}
              href="/factoring/staffing"
            />
          </div>
        </div>
      </section>

      {/* How the advance/reserve cycle works */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
            The Advance and Reserve Cycle for Staffing Agencies
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem] mb-10">
            <p>
              The mechanics of staffing factoring follow a repeating weekly or bi-weekly cycle that mirrors how agencies bill their clients. Understanding each step helps agencies evaluate whether factoring cash flow aligns with their payroll timing and operating model.
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                step: "Submit Invoices",
                detail:
                  "At the end of each billing cycle — weekly, bi-weekly, or per project — you submit verified invoices to the factor. Verification typically includes timesheets, work orders, or signed confirmation from your client. Invoices with disputes, missing documentation, or anti-assignment provisions may be excluded from a given batch.",
              },
              {
                step: "Receive the Advance",
                detail:
                  "The factor wires the advance — commonly 85% to 95% of the invoice face value for staffing receivables — to your account, often within 24 hours of invoice acceptance. This funds are typically available before your payroll processing deadline. The exact advance rate depends on your clients' credit profiles, invoice terms, and your factoring agreement.",
              },
              {
                step: "Reserve Is Held",
                detail:
                  "The remaining balance (5%–15%) is held by the factor in a reserve account. This reserve protects the factor against short payments, disputed hours, or client non-payment. For agencies factoring weekly, you may have several batches of reserves outstanding at any given time, each tied to a different set of invoices.",
              },
              {
                step: "Client Pays the Factor",
                detail:
                  "Your clients remit payment directly to the factor at the payment address specified in the notice of assignment. Most staffing factors maintain a lockbox or dedicated account for each client relationship. Payment is typically due within the invoice terms — Net 30, 45, or 60 days.",
              },
              {
                step: "Reserve Is Released",
                detail:
                  "Once a client pays an invoice, the factor calculates your net reserve: the held balance minus the factoring fee for that invoice. The net reserve is released to you, typically in a weekly sweep or within a few days of payment clearing. Unpaid invoices past a specified aging threshold — often 90 days — may trigger recourse obligations under most staffing factoring agreements.",
              },
            ].map(({ step, detail }, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5]">
                <div className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-[#0f0f0f]/30 bg-[#f5f5f5]">
                  <span className="text-[0.625rem] font-semibold text-[#0f0f0f] tabular-nums">{i + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0f0f0f] mb-1">{step}</p>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and invoice criteria */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Eligibility
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
              Requirements and Invoice Criteria
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Eligibility for staffing factoring is evaluated at both the agency level and the individual invoice level. The following criteria are commonly reviewed, though specific requirements vary by factor and program. Meeting these criteria does not constitute a guarantee of approval or specific terms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                Agency-Level Criteria
              </p>
              <ul className="space-y-3">
                {[
                  "B2B billing model with commercial or government clients",
                  "Invoices must be free of existing liens or prior assignments",
                  "No active tax liens, judgments, or UCC blanket liens that would impair assignment",
                  "Active workers' compensation and general liability insurance coverage",
                  "Minimum monthly invoice volume requirements may apply (varies by factor)",
                  "Staffing license or registration, where required by state law",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                Invoice-Level Criteria
              </p>
              <ul className="space-y-3">
                {[
                  "Invoice must be earned — services fully performed and accepted by client",
                  "Signed timesheets or work order documentation available for verification",
                  "No contingencies on payment (e.g., no pay-when-paid or refund guarantee provisions)",
                  "Client contract must not contain anti-assignment language, or written consent must be obtained",
                  "Invoice must not be subject to offset, counterclaim, or active dispute",
                  "Client must be a verifiable commercial or government entity, not a consumer",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advance rates and fee ranges */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Pricing
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
            Advance Rates and Fee Ranges for Staffing Factoring
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
            <p>
              Staffing agencies generally qualify for higher advance rates than many other industries because their receivables tend to be short-dated (Net 15 to Net 45 is common), their clients are typically well-known commercial employers, and the invoices are straightforward to verify with timesheet documentation. These structural characteristics reduce collection risk for the factor.
            </p>
            <p>
              Factoring fees are typically expressed as a percentage of the invoice face value and are charged per billing period (weekly, bi-weekly, or monthly). Some factors use a flat rate per invoice; others apply a tiered structure based on how long the invoice remains outstanding. Longer client payment terms generally result in higher fees because the factor is holding funds for a longer period.
            </p>
            <p>
              The following ranges are illustrative only. Actual rates are subject to underwriting by third-party providers, are not guaranteed, and will vary based on your client mix, invoice terms, total volume, and other factors evaluated during the underwriting process.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <MetricCard
              label="Advance Rate (Staffing)"
              value="85–95%"
              note="Higher end common for IT/professional staffing with large-enterprise clients"
              highlight
            />
            <MetricCard
              label="Weekly Factoring Fee"
              value="0.5–1.5%"
              unit="per week outstanding"
              note="Flat weekly rate structure is common in staffing; some factors use monthly rates"
            />
            <MetricCard
              label="Monthly Fee Equivalent"
              value="2–4%"
              unit="per invoice"
              note="Effective monthly cost if invoice is outstanding for 30 days"
            />
            <MetricCard
              label="Reserve Held Back"
              value="5–15%"
              note="Released after client pays; net of factoring fees"
            />
          </div>
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              <span className="text-[#737373] font-medium">How fees compound on slow-paying clients:</span>{" "}
              If a factor charges 1% per week and a client pays on day 45 (6.5 weeks), the effective fee on that invoice is approximately 6.5% of face value before any other charges. High-volume agencies with reliable Net 30 clients typically see lower effective costs than those with Net 60 or longer terms. Always model the full cost scenario before committing to a factoring agreement, and review all fee schedules carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits and limitations */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Considerations
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
              Potential Benefits and Notable Limitations
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">
                Potential Benefits
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "Payroll funding without a bank dependency",
                    body: "Factoring can fund weekly payroll even for fast-growing agencies that have not yet established a bank line of credit or that have outgrown their existing credit facility.",
                  },
                  {
                    title: "Approval weighted on your clients, not your history",
                    body: "New or early-stage staffing agencies may qualify if they have strong commercial clients, even without several years of operating history or strong personal credit.",
                  },
                  {
                    title: "Scales with revenue",
                    body: "As your agency places more workers and invoices grow, the factoring facility typically grows with it — unlike a fixed credit line that requires periodic renegotiation.",
                  },
                  {
                    title: "Collections outsourced to the factor",
                    body: "The factor manages collections from your clients, which may reduce your internal AR burden and the cost of chasing slow-paying accounts.",
                  },
                ].map(({ title, body }, i) => (
                  <li key={i} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{title}</p>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#737373] mb-4">
                Notable Limitations
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "Cost compounds on slow-paying clients",
                    body: "Weekly factoring fees applied to invoices that linger past Net 30 can accumulate quickly. Agencies with clients that pay slowly should model the effective annual cost carefully before committing.",
                  },
                  {
                    title: "Recourse risk on uncollected invoices",
                    body: "Most staffing factoring is recourse-based. If a client does not pay, you may be required to repurchase the invoice or have the amount deducted from reserves, which can create a liquidity problem if client defaults are unexpected.",
                  },
                  {
                    title: "Client notification changes your AR process",
                    body: "Clients will be directed to pay the factor instead of you, which requires updating billing communications and potentially having a conversation with clients about the arrangement.",
                  },
                  {
                    title: "Not all invoices qualify",
                    body: "Disputed hours, anti-assignment clauses in client contracts, contingent placements, and invoices tied to clients with poor credit may be excluded, which can create funding gaps in any given week.",
                  },
                ].map(({ title, body }, i) => (
                  <li key={i} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#a3a3a3]" viewBox="0 0 16 16" fill="none">
                      <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{title}</p>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3 text-balance">
              Staffing Factoring vs. Other Working Capital Options
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed">
              Comparison is illustrative only. Products vary significantly by provider, and availability is subject to underwriting and third-party approval. This table is not a recommendation of any product.
            </p>
          </div>
          <ComparisonTable
            columns={["Staffing Factoring", "Business Line of Credit", "Payroll Funding Loan"]}
            rows={comparisonRows}
            highlightCol="Staffing Factoring"
          />
        </div>
      </section>

      {/* Calculator link */}
      <section className="py-10 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M5 9h8M9 5v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">Invoice Factoring Calculator</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed max-w-lg">
                  Estimate your potential advance amount and factoring cost across different scenarios. Results are estimates only and not offers or commitments from any provider.
                </p>
              </div>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#e5e5e5] text-sm text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f]/50 transition-colors"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Staffing Factoring — Frequently Asked Questions"
      />

      {/* CTA */}
      <CTASection
        headline="Explore whether staffing factoring may fit your agency"
        subtext="Submit a brief intake and ZEO will review potential financing paths for your staffing business. All options are subject to underwriting by third-party providers."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Learn More About Factoring"
        secondaryHref="/factoring"
        variant="dark"
      />

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-14">
        <ProductDisclaimer type="factoring" />
      </div>
    </div>
  );
}

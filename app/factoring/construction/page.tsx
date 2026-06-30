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
  title: "Construction Invoice Factoring | ZEO.co",
  description:
    "Construction factoring converts outstanding progress billings, draw requests, and subcontractor invoices into working capital before the general contractor or project owner remits. Learn how advance rates, retainage, and construction-specific fee structures work.",
  path: "/factoring/construction",
  keywords: [
    "construction factoring",
    "construction invoice factoring",
    "contractor invoice factoring",
    "subcontractor factoring",
    "construction accounts receivable financing",
    "progress billing factoring",
    "retainage financing",
    "construction working capital",
  ],
});

const faqItems = [
  {
    q: "Can retainage be included in a construction factoring arrangement?",
    a: "Retainage — the portion of each progress payment withheld by the project owner or GC until substantial completion — is generally not eligible for factoring in most standard arrangements. Retainage balances are contingent, withheld by contract, and may not become unconditionally payable for months or years. Some factors that specialize in construction will advance against retainage under specific conditions — typically after project completion is certified and release is documented — but this is a separate arrangement from standard invoice factoring and carries different underwriting requirements. If retainage liquidity is a priority, raise this with the factor at the outset and review any retainage-specific terms carefully before signing.",
  },
  {
    q: "How does a factor verify a construction invoice when there is no physical product?",
    a: "In construction, invoice verification typically involves confirming that the work described has actually been completed and approved. Factors will commonly request supporting documentation such as AIA G702/G703 continuation sheets or equivalent schedule-of-values breakdowns, signed payment applications, lien waivers from lower-tier subcontractors and suppliers, and any written approval or acknowledgment from the GC or project owner. Some factors also contact the account debtor directly — the entity owing the invoice — to confirm that the work described is approved and that no setoffs, backcharges, or disputes are pending. The more complete your documentation, the faster the verification process.",
  },
  {
    q: "Will a GC's right to backcharge or set off reduce my advance?",
    a: "Backcharges, liquidated damages, and contract setoffs are a meaningful risk in construction factoring that does not exist in the same form in other industries. If a project owner or GC has the contractual right to reduce a payment by the cost of correcting deficient work, delays, or third-party claims, that right survives the assignment of the invoice to a factor. Most construction factors discount advance rates or reduce eligible amounts on invoices where backcharge risk is elevated, and some require an estoppel letter — a written confirmation from the account debtor that no setoffs are claimed against a specific invoice — before advancing. Your factoring agreement should specify how pending backcharges or disputed amounts are treated.",
  },
  {
    q: "Do I need to notify my GC or project owner that I am factoring?",
    a: "Yes, in virtually all construction factoring arrangements. The factor will notify the account debtor — the GC or project owner — and request that payment on assigned invoices be redirected to a bank account or lockbox controlled by the factor. This is standard practice and a necessary step in most states for the assignment to be enforceable. Some subcontractor and sub-subcontractor agreements include anti-assignment clauses; if yours does, the factor must either obtain consent from the account debtor or structure the arrangement differently. Review your subcontract or prime contract terms before onboarding, particularly if you are concerned about how your GC may respond to notification.",
  },
  {
    q: "Is construction factoring the same as a surety bond or bonded receivables financing?",
    a: "No. Construction factoring is the purchase of your accounts receivable — unpaid approved invoices or progress billings — by a third-party factor at a discount in exchange for immediate cash. A surety bond is a three-party guarantee arrangement in which a surety company backs your performance or payment obligations on a project. Bonded receivables financing, sometimes offered by specialty lenders, uses your bonded contract receivables as collateral for a loan rather than selling them outright. Each structure has different underwriting criteria, cost profiles, and balance sheet implications. Factoring does not replace bonding and does not satisfy bonding requirements on public or bonded private projects.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Construction Factoring": "Approved progress invoices / billings",
    "Construction Business Line of Credit": "Overall creditworthiness & collateral",
    "SBA 7(a) Loan": "Business financials, DSCR & equity",
  },
  {
    feature: "Primary underwriting focus",
    "Construction Factoring": "Account debtor credit & invoice verification",
    "Construction Business Line of Credit": "Business & owner credit history",
    "SBA 7(a) Loan": "Debt service coverage, collateral, equity",
  },
  {
    feature: "Typical funding speed",
    "Construction Factoring": "24–48 hrs (post-onboarding)",
    "Construction Business Line of Credit": "Weeks to months",
    "SBA 7(a) Loan": "Weeks to months",
  },
  {
    feature: "Retainage eligible",
    "Construction Factoring": "Generally no (specialized only)",
    "Construction Business Line of Credit": "Sometimes as collateral",
    "SBA 7(a) Loan": "No",
  },
  {
    feature: "Scales with project volume",
    "Construction Factoring": "Yes — tied to eligible invoices",
    "Construction Business Line of Credit": "Partially (fixed ceiling)",
    "SBA 7(a) Loan": "No",
  },
  {
    feature: "Account debtor notification required",
    "Construction Factoring": "Yes — standard",
    "Construction Business Line of Credit": "No",
    "SBA 7(a) Loan": "No",
  },
  {
    feature: "Personal guarantee typically required",
    "Construction Factoring": "Sometimes",
    "Construction Business Line of Credit": "Usually",
    "SBA 7(a) Loan": "Yes (for 20%+ owners)",
  },
];

export default function ConstructionFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Construction Factoring"
        subtitle="Construction contractors and subcontractors commonly wait 30 to 90 days — or longer — after submitting a progress billing before the GC or project owner remits. Construction invoice factoring may allow eligible firms to convert approved progress billings and draw invoices into working capital before payment arrives. Subject to underwriting by third-party providers."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Construction Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="70–90%"
              note="Varies by account debtor credit quality and invoice type"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1.5–5%"
              unit="per invoice"
              note="Influenced by project type, debtor, and days outstanding"
            />
            <MetricCard
              label="Funding After Onboarding"
              value="24–48"
              unit="hrs"
              note="After invoice verification and account debtor confirmation"
              highlight
            />
            <MetricCard
              label="Typical Invoice Terms"
              value="30–90"
              unit="days"
              note="Public projects and large GCs often run longer cycles"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are illustrative only and reflect general market conditions. Actual advance rates and fees are subject to underwriting by third-party providers and are not guaranteed. Construction factoring involves project-specific risks — including retainage, backcharges, and lien rights — not present in standard commercial factoring.
          </p>
        </div>
      </section>

      {/* What is construction factoring */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
            What Is Construction Factoring?
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Construction factoring — sometimes called contractor invoice factoring or progress billing factoring — is a form of accounts receivable financing in which a contractor or subcontractor sells its outstanding approved invoices or draw requests to a specialized factoring company at a discount in exchange for an immediate cash advance. Rather than waiting 30 to 90 days for a general contractor or project owner to process and pay a submitted billing, the contractor receives a large portion of the invoice value upfront.
            </p>
            <p>
              Construction factoring differs in important ways from standard commercial invoice factoring. Construction receivables are tied to project milestones rather than shipped goods, are often subject to retainage withholding, carry lien rights that affect how assignments work, and can be reduced by backcharges, liquidated damages, or performance disputes that do not arise in typical product or service invoicing. Factors that specialize in construction are structured to account for these variables — verifying invoice approval, reviewing schedule-of-values documentation, and confirming the absence of pending disputes or setoffs before advancing.
            </p>
            <p>
              Because the advance is underwritten against the approved, assignable portion of each progress billing — excluding retainage and any amounts under dispute — construction factors typically see effective advance rates in the 70% to 90% range against eligible invoice amounts. All outcomes are subject to underwriting by a third-party provider, and no approval or specific rate is guaranteed.
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
              Contractor and Subcontractor Types That Commonly Use Construction Factoring
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Construction factoring is most relevant to firms that perform work on net payment terms — billing a GC or owner after completing a measurable phase of work — and that experience cash flow gaps during the period between invoice submission and receipt. It is generally less suited to owner-operators who collect at project completion on small, short-cycle projects, or to firms whose contracts prohibit invoice assignment without prior consent.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="9" width="14" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M5 9V6a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M9 12v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              }
              title="General and Specialty Subcontractors"
              description="Electrical, mechanical, plumbing, concrete, framing, and other specialty subcontractors billing GCs on approved monthly or milestone draw schedules may qualify. Long remittance windows from large GCs — combined with weekly labor and material costs — create the cash flow gap that construction factoring is designed to address."
              tags={["Electrical", "Mechanical", "Concrete", "Framing"]}
              href="/factoring/construction"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 14h14M4 14V8l5-5 5 5v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="7" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              }
              title="General Contractors on Commercial Projects"
              description="GCs billing institutional or developer owners on large commercial, industrial, or mixed-use projects may experience extended pay cycles tied to owner draw review and lender-controlled construction loan disbursements. Factoring approved AIA-format billings may provide liquidity between disbursement cycles."
              tags={["Commercial build", "Industrial", "Mixed-use", "Tenant improvement"]}
              href="/factoring/construction"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 16l3-3 4-7 4 4 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="14" cy="4" r="2" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              }
              title="Government and Public Works Contractors"
              description="Contractors on municipal, state, or federal public works projects — roads, utilities, public buildings — often bill against certified pay applications with remittance timelines governed by prompt-payment statutes. Government account debtors are generally considered creditworthy, which can positively affect factoring terms, though public contract anti-assignment provisions must be reviewed carefully."
              tags={["Public works", "Municipal", "Federal", "Infrastructure"]}
              href="/factoring/construction"
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
            The Construction Invoice Advance and Reserve Cycle
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
            Construction factoring follows the same structural logic as commercial invoice factoring — advance, reserve, payer collection, reserve release — but with additional steps specific to progress billing documentation, lien compliance, and account debtor verification. Understanding each phase helps clarify what the arrangement costs and when funds move.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "Work is completed and a progress billing is submitted for approval",
                body: "After completing a measurable phase of work — typically tied to a schedule-of-values line item or a project milestone — you submit a payment application to the GC or project owner. Documentation commonly includes an AIA G702 Application and Certificate for Payment, a G703 Continuation Sheet showing percentage complete by cost code, and conditional lien waivers from your lower-tier subcontractors and material suppliers covering the prior period. Some GCs also require a sworn contractor's statement.",
              },
              {
                step: "2",
                title: "The factor reviews and verifies the invoice",
                body: "Before advancing, the factor verifies that the billing represents approved, unconditionally payable work. This typically involves reviewing the schedule-of-values documentation, confirming approval or acknowledgment from the account debtor (the GC or owner), and checking for any pending backcharges, disputes, or setoff rights that could reduce the payable amount. The advance rate — typically 70% to 90% of the eligible, non-retainage portion of the invoice — is applied to the verified amount. Retainage withheld under the contract is generally excluded from the advance.",
              },
              {
                step: "3",
                title: "The account debtor is notified and payment is redirected",
                body: "The factor notifies the GC or project owner of the assignment and provides payment instructions redirecting the invoice payment to a bank account or lockbox controlled by the factor. Most states permit assignment of construction receivables, but some subcontracts and prime contracts include anti-assignment clauses requiring owner or GC consent. Your contract terms should be reviewed before submitting invoices to a factor. The factor also typically requires unconditional lien waivers to be executed at the time of funding to confirm the absence of lien claims from your lower-tier parties.",
              },
              {
                step: "4",
                title: "The GC or owner pays the factor",
                body: "When the account debtor remits on the due date — or within the contractual payment window — payment is deposited into the factor's lockbox or bank account. The factor applies the payment against the outstanding advance balance. If the payment is short due to a backcharge, dispute, or retained amount, the factor reconciles against the advance and addresses the shortfall according to the terms of your factoring agreement — either drawing on the reserve, pursuing the account debtor, or triggering recourse provisions if applicable.",
              },
              {
                step: "5",
                title: "Reserve is released net of fees",
                body: "Once the invoice is fully collected, the reserve — the funded amount not advanced at origination — is released back to you less the factoring fee. Your agreement should specify how long the factor holds the reserve, how fees accrue if the account debtor pays late, and what happens to invoices that remain unpaid beyond the stated collection window. For invoices under recourse factoring arrangements, slow-paying or non-paying account debtors may ultimately result in a buyback obligation.",
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

      {/* Requirements */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Requirements
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
              What Construction Factors Typically Evaluate
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Construction factoring involves more documentation and due diligence than standard commercial factoring, given the project-specific nature of construction receivables and the additional legal rights — including lien rights, retainage, and backcharge provisions — that affect collectibility. The criteria below are commonly assessed, though requirements vary by factor and no approval is guaranteed. All decisions are subject to underwriting by third-party providers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Approved, Non-Disputed Invoices or Pay Applications",
                body: "Factors will generally only advance against invoices or pay applications that represent completed, approved work with no known pending disputes, backcharges, or claims against the billing. Submitted-but-unapproved billings — where the GC or owner has not yet certified completion — typically do not qualify. Documentation demonstrating approval, such as a signed G702 or a written acknowledgment of the pay application, strengthens eligibility.",
              },
              {
                title: "Creditworthy Account Debtor",
                body: "The credit quality of the entity owing the invoice — the GC, developer, or project owner — is the primary underwriting factor. Large, financially stable general contractors, institutional project owners, and government entities are generally considered favorable account debtors. Smaller or financially stressed GCs, speculative developers, or project owners with a history of slow payment may limit eligible advance rates or preclude the invoice from qualifying.",
              },
              {
                title: "Clear Lien Rights and Executed Lien Waivers",
                body: "Factors require that you can deliver clear lien waivers from your lower-tier subcontractors and suppliers for prior payment periods, demonstrating that no outstanding mechanic's lien claims exist on the project through the date of the invoice being factored. Some factors also require that your own lien rights are protected as a condition of advancing — meaning your preliminary notice filings and any required notices to owner must be current.",
              },
              {
                title: "Assignable Contract Without Conflicting Anti-Assignment Clause",
                body: "Your subcontract or prime contract must permit the assignment of payment rights to a third party, or the factor must obtain account debtor consent. Anti-assignment clauses in construction contracts are relatively common, particularly in subcontracts issued by large national GCs. Review your contract terms before onboarding; attempting to assign an invoice in violation of an anti-assignment clause creates legal risk.",
              },
              {
                title: "No Existing Blanket Lien on Receivables",
                body: "If your business has an existing working capital facility, equipment financing, or line of credit secured by a blanket lien on all assets — including receivables — that lender may hold a senior interest in your construction invoices. The existing lender will typically need to provide a lien subordination or release specific to the factored receivables before a factor can take a first-priority interest in those assets.",
              },
              {
                title: "Proper Licensing and Contractor Credentials",
                body: "Construction factors will verify that your business holds the appropriate contractor licenses required for the type of work being billed and that your license is in good standing. Expired or improperly classified licenses can create issues with invoice enforceability and may affect your ability to assert lien rights in some states, both of which affect factoring eligibility.",
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
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Advance Rates and Fee Structures in Construction Factoring
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-6">
            Construction factoring fees vary based on the account debtor's credit quality, typical payment terms, the size and frequency of invoices, and whether the arrangement is recourse or non-recourse. The figures below are illustrative market ranges only — not offers, commitments, or indicative of any specific transaction. All terms are subject to underwriting by a third-party provider.
          </p>
          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Advance Rate</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">70 – 90%</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Construction factors advance against the eligible, non-retainage portion of approved invoices. A $200,000 progress billing that includes $20,000 in retainage has an eligible base of $180,000 — an 80% advance against the eligible amount yields $144,000 at funding. The advance rate reflects the account debtor's credit quality, the risk of backcharges or disputes, and the overall project and contract structure. Understanding how your factor defines the eligible base — and how retainage is treated — is essential to accurately modeling your liquidity benefit.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Factoring Fee</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">1.5 – 5% per invoice</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Construction factoring fees typically range from 1.5% to 5% of the invoice face value, with the actual rate driven by the account debtor's payment speed, the volume and frequency of invoices submitted, and whether the arrangement is recourse or non-recourse. Fee structures may be flat per funding cycle or tiered by days outstanding — accruing weekly after an initial period. Invoices with government account debtors that pay promptly under prompt-payment statutes often see lower effective costs than invoices billed to privately funded projects with less predictable payment timelines.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Additional Fees to Evaluate</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">Varies</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Construction factoring agreements may include setup and onboarding fees, per-invoice document processing fees, monthly minimum volume requirements, wire or ACH transfer charges, and early termination penalties. Some factors also charge fees for account debtor verification on new project relationships or for handling lien waiver coordination on your behalf. Review the complete fee schedule — including any volume minimums that could create costs in slower billing months — before executing any agreement.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] px-5 py-4">
            <p className="text-sm text-[#737373] leading-relaxed">
              <span className="text-[#0f0f0f] font-medium">Estimate your net advance and costs.</span>{" "}
              The{" "}
              <Link
                href="/calculators/invoice-factoring-calculator"
                className="text-[#0f0f0f] underline underline-offset-2 hover:text-[#0f0f0f] transition-colors"
              >
                Invoice Factoring Calculator
              </Link>{" "}
              lets you model advance amounts, factoring fees, and reserve releases based on your invoice balances and estimated terms. All outputs are estimates only and do not constitute an offer or commitment from any provider.
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
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
              Construction Factoring vs. Other Contractor Financing Options
            </h2>
            <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
              No single financing structure suits every contractor or project type. This table highlights structural differences between commonly considered options — not cost rankings, endorsements, or guarantees of any specific outcome. Subject to underwriting; terms vary by provider.
            </p>
          </div>
          <ComparisonTable
            columns={["Construction Factoring", "Construction Business Line of Credit", "SBA 7(a) Loan"]}
            rows={comparisonRows}
            highlightCol="Construction Factoring"
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
              <h2 className="text-xl font-semibold text-[#0f0f0f] mb-5">What Construction Factoring May Offer</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Working capital scales with project billings, not a fixed credit ceiling",
                    body: "As eligible invoice volume grows across active projects, potential access to working capital may grow proportionally — without renegotiating a credit limit or pledging additional collateral. This structure may be a potential fit for contractors managing multiple simultaneous projects with varying billing cycles.",
                  },
                  {
                    title: "Addresses the structural lag between work completion and payment receipt",
                    body: "The gap between completing a phase of work, submitting the pay application, and receiving payment can span 45 to 90 days or more on commercial and public projects. Construction factoring potentially compresses this gap, allowing firms to cover labor, material, and equipment costs without waiting on the GC's or owner's payment cycle.",
                  },
                  {
                    title: "Approval weighted toward account debtor credit, not just owner credit",
                    body: "Construction factors underwrite primarily against the creditworthiness of the entity paying the invoice — the GC or project owner — rather than your business credit score alone. Subcontractors and specialty contractors working for large, financially stable GCs may qualify even with limited operating history or modest business credit profiles.",
                  },
                  {
                    title: "Faster access than traditional bank credit facilities",
                    body: "Once onboarding is complete — typically one to three weeks including contract review, account debtor verification, and lien waiver processes — subsequent funding cycles can operate on a 24- to 48-hour basis for qualifying invoices. This is typically faster than establishing or drawing on a construction-specific bank line of credit.",
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
              <h2 className="text-xl font-semibold text-[#0f0f0f] mb-5">Important Considerations</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Retainage is generally not eligible for standard factoring",
                    body: "Retainage — often 5% to 10% of each draw, withheld until project completion — represents a meaningful portion of a contractor's receivables but is typically excluded from standard factoring arrangements due to its contingent nature. If retainage liquidity is a priority, discuss retainage-specific financing separately with any prospective factor or lender.",
                  },
                  {
                    title: "Backcharges and setoffs can reduce or eliminate invoice collectibility",
                    body: "A GC's right to backcharge for deficient work, delays, or third-party claims is a construction-specific risk that can significantly reduce what an account debtor actually pays on an invoice. Factors price this risk into advance rates and may require estoppel letters on individual invoices. Understand how your factoring agreement handles disputed amounts before committing.",
                  },
                  {
                    title: "Anti-assignment clauses in subcontracts require advance review",
                    body: "Many subcontracts issued by large GCs include clauses restricting assignment of payment rights without written consent. Attempting to factor an invoice in violation of these provisions creates contractual and legal risk. A careful review of your contract terms before onboarding is strongly advisable.",
                  },
                  {
                    title: "GC or owner notification is standard and unavoidable",
                    body: "Unlike some financing arrangements that remain invisible to your customer, construction factoring requires notifying the account debtor and redirecting payment. Some contractors are concerned about how GCs will respond. This is an inherent feature of construction factoring, not an optional step, and should be considered when deciding whether the arrangement fits your business relationships.",
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
                Model net advance amounts, estimated factoring fees, and reserve releases based on your construction invoice balances, advance rate assumptions, and fee structure. All outputs are estimates only.
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
        title="Construction Factoring — Common Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Explore Whether Construction Factoring May Be a Fit"
        subtext="Submit a brief intake and ZEO will review your situation against potential financing paths. No commitment required. Subject to underwriting by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare Factoring Products"
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

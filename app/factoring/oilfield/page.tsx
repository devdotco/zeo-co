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
  title: "Oilfield and Oil and Gas Factoring | ZEO.co",
  description:
    "Oilfield factoring converts oil and gas service invoices into working capital before operators pay. Learn how advance rates, joint interest billing, and lien waiver requirements work before you apply.",
  path: "/factoring/oilfield",
  keywords: [
    "oilfield factoring",
    "oil and gas factoring",
    "oilfield services factoring",
    "energy sector factoring",
    "oil field invoice factoring",
    "oilfield services working capital",
    "oil and gas accounts receivable",
    "energy company factoring",
  ],
});

const faqItems = [
  {
    q: "Can oilfield service companies with seasonal revenue qualify for factoring?",
    a: "Many oilfield and energy-focused factoring companies work with businesses whose revenue fluctuates with rig counts, commodity prices, and regional drilling activity. Approval depends primarily on the creditworthiness of the oil and gas operators you invoice, not the consistency of your own monthly revenue. Some factors set minimum monthly volume requirements, while others offer spot factoring for occasional use. Eligibility and terms are subject to underwriting — no outcome is guaranteed.",
  },
  {
    q: "Do oilfield factors require lien waivers, and when must they be provided?",
    a: "Many oilfield-focused factors require lien waivers or lien release documentation as part of their funding process, particularly for invoices tied to services performed on producing properties. Operators frequently require a lien waiver before releasing payment, and a factoring company taking assignment of that invoice needs confirmation that the lien rights are being handled appropriately. Requirements vary by factor and by the nature of the service rendered — confirm with your specific factor what lien documentation is required at onboarding and at each submission.",
  },
  {
    q: "How does joint interest billing (JIB) affect oilfield invoice factoring?",
    a: "Joint interest billing arises when multiple working interest owners share the costs of a well. In a JIB arrangement, an invoice may be billed to an operator who then allocates costs across several interest owners, which can complicate payment timing and the identity of the ultimate payor. Factoring companies that specialize in oil and gas understand JIB structures, but they will typically require clarity on who the contractual payor is and may restrict factoring to invoices with a single, verifiable operator as the account debtor. Discuss your billing structure with any prospective factor before assuming your invoices are eligible.",
  },
  {
    q: "What happens to a factored oilfield invoice if the operator disputes services or delays payment due to price disputes?",
    a: "Under a standard recourse factoring agreement — the most common structure — you remain liable for the invoice if the operator fails to pay for any reason, including performance disputes, billing disagreements, or financial difficulty. The factor will typically require you to repurchase the invoice or substitute another eligible receivable. Non-recourse factoring programs shift credit risk of the operator's insolvency to the factor, but generally do not protect against disputes or service-related chargebacks. Review your factoring agreement carefully and understand which scenarios trigger recourse obligations before signing.",
  },
  {
    q: "Can oilfield factoring work alongside an existing equipment loan or business line of credit?",
    a: "It may be possible, but existing lenders with blanket UCC liens on your business assets may have a prior claim on your accounts receivable. A factoring company needs a first-priority security interest in the receivables it purchases. Before onboarding, your existing lender may need to subordinate their lien on receivables or consent to the arrangement in writing. This is a common complication for oilfield service companies that have equipment financing in place. A qualified commercial attorney can help you assess the lien position and any lender consent requirements.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Oilfield Factoring": "Operator invoices / AR",
    "Bank Line of Credit": "Overall creditworthiness",
    "Working Capital Loan": "Revenue / DSCR",
  },
  {
    feature: "Primary credit review",
    "Oilfield Factoring": "Operator credit",
    "Bank Line of Credit": "Owner & business credit",
    "Working Capital Loan": "Business revenue & credit",
  },
  {
    feature: "Typical funding speed",
    "Oilfield Factoring": "24–48 hrs after docs",
    "Bank Line of Credit": "Weeks to months",
    "Working Capital Loan": "2–5 business days",
  },
  {
    feature: "New / small vendor eligible",
    "Oilfield Factoring": "Often yes",
    "Bank Line of Credit": "Rarely",
    "Working Capital Loan": "Rarely",
  },
  {
    feature: "Lien waiver handling",
    "Oilfield Factoring": "Required by many factors",
    "Bank Line of Credit": "N/A",
    "Working Capital Loan": "N/A",
  },
  {
    feature: "Customer notification required",
    "Oilfield Factoring": "Yes — NOA to operator",
    "Bank Line of Credit": "No",
    "Working Capital Loan": "No",
  },
  {
    feature: "UCC filing",
    "Oilfield Factoring": "Yes — on receivables",
    "Bank Line of Credit": "Often — blanket lien",
    "Working Capital Loan": "Often — blanket lien",
  },
];

export default function OilfieldFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Oilfield Factoring"
        subtitle="Oil and gas service companies often wait 45 to 90 days for operators to pay — while rig crews, equipment costs, and fuel bills can't wait. Oilfield factoring converts service invoices into working capital before the operator remits payment, subject to underwriting by third-party providers."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Oilfield Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="80–90%"
              note="Subject to operator creditworthiness, invoice documentation, and service type"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="2–6%"
              unit="per invoice"
              note="Varies by operator credit, invoice terms, volume, and recourse structure"
            />
            <MetricCard
              label="Funding After Submission"
              value="24–48 hrs"
              note="After complete documentation is received and operator credit is approved"
              highlight
            />
            <MetricCard
              label="Operator Terms"
              value="45–90 days"
              note="Common net payment terms in the oil and gas sector"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are illustrative only. Actual advance rates and fees are subject to underwriting by third-party providers and are not guaranteed.
          </p>
        </div>
      </section>

      {/* What is oilfield factoring */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            What Is Oilfield Factoring?
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Oilfield factoring — also called oil and gas factoring or energy services factoring — is a form of accounts receivable financing for businesses that provide services or materials to oil and gas operators. After completing work and issuing an invoice, a service company sells that receivable to a factoring company, which advances a large portion of the invoice value immediately. The factor then collects from the operator when payment is due.
            </p>
            <p>
              The oil and gas industry runs on extended payment terms. Operators on net-45, net-60, or net-90 schedules are not unusual — particularly for larger E&amp;P companies managing hundreds of vendor relationships. For an oilfield service company managing payroll, fuel, consumables, and equipment maintenance on a weekly basis, that gap between invoice and payment creates a structural cash flow problem that is not a reflection of business performance. Factoring addresses that gap directly.
            </p>
            <p>
              Unlike bank credit, oilfield factoring approval turns primarily on the creditworthiness of the oil and gas operators you invoice — not on your own company's credit history, time in operation, or balance sheet. A relatively new oilfield services business with contracts from established, investment-grade operators may find factoring accessible where traditional lending is not.
            </p>
            <p>
              Oil and gas factoring involves industry-specific considerations that general-purpose factoring companies may not be equipped to handle. Lien rights under state mineral and mechanic's lien statutes, joint interest billing arrangements, operator master service agreement (MSA) terms, and the sometimes concentrated nature of operator relationships all affect how a factor will evaluate and structure an oilfield account. Factors that specialize in energy services are typically better positioned to navigate these issues than generalist commercial factors.
            </p>
            <p>
              Common service categories that may be eligible for oilfield factoring include drilling services, well completion and stimulation, fluid management and disposal, wireline and workover services, equipment rental, pipe and supply distribution, environmental services, and technical staffing. Eligibility is determined on a case-by-case basis by the factor and is subject to underwriting.
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
              Oil and Gas Service Companies That Commonly Use Factoring
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Oilfield factoring is used across the upstream and midstream energy services ecosystem wherever service invoices are issued to operators on net payment terms. The common challenge is deploying significant labor and equipment capital well before operator payments arrive.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {/* Oilfield service contractors */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2v4M9 12v4M2 9h4M12 9h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M4.5 4.5l2.5 2.5M11 11l2.5 2.5M4.5 13.5l2.5-2.5M11 7l2.5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Oilfield Service Contractors</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Drilling, completion, workover, and stimulation contractors invoice operators after job completion but face immediate costs for crew payroll, chemicals, and equipment maintenance. Factoring may allow these businesses to maintain cash flow across multi-well programs without waiting for operator payment cycles.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Drilling services", "Completion", "Wireline", "Workover"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Equipment rental and supply */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="10" width="14" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M5 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M7 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Equipment Rental and Supply</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Businesses renting tanks, pumps, generators, tubular goods, or specialty equipment to operators can build large outstanding receivable balances when multiple operators are on extended terms simultaneously. Factoring against those receivables can fund new equipment purchases or fleet maintenance without taking on term debt.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Tank rental", "Pipe supply", "Equipment rental", "Fluid management"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Environmental and technical staffing */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3L3 7v8h12V7L9 3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 15v-4h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Environmental and Technical Staffing</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Environmental remediation firms, water disposal operators, and technical staffing agencies servicing the energy sector all carry significant weekly payroll obligations that precede operator payment. Factoring invoices billed to creditworthy operators can bridge the payroll gap without compromising operations.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Environmental services", "Water disposal", "Technical staffing", "Inspection"].map((tag) => (
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
            The Oilfield Factoring Cycle: From Service Completion to Reserve Release
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
            Oilfield factoring follows a cycle tied to completion of field work and issuance of invoices. Each step maps to documents already generated in the normal course of oil and gas contracting.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "You complete field work and prepare an invoice to the operator",
                body: "After completing a service job — whether a single workover, a multi-day completion, or a monthly equipment rental period — you prepare an invoice to the operator under your master service agreement or purchase order. The invoice should specify the services rendered, the well or location, the applicable purchase order or AFE number, and the amount due. Clean, complete invoices with proper backup documentation are the foundation of a successful factoring submission.",
              },
              {
                step: "2",
                title: "You submit the invoice and supporting documentation to the factor",
                body: "You provide the invoice, any field tickets or signed service orders, purchase order or AFE authorization, and any lien waiver documentation required by your factoring agreement. The factor verifies that the invoice is properly supported, checks the operator's credit standing, and confirms the invoice does not conflict with any existing liens or assignment restrictions in your MSA with the operator.",
              },
              {
                step: "3",
                title: "The factor issues a notice of assignment to the operator",
                body: "Once the submission is approved, the factoring company sends a notice of assignment (NOA) to the oil and gas operator directing future payment on that invoice to the factor's lockbox. Some oilfield MSAs contain anti-assignment provisions that require operator consent before receivables can be assigned. This should be verified before onboarding — attempting to factor invoices in violation of a contract restriction can create significant complications.",
              },
              {
                step: "4",
                title: "The factor advances funds to your account",
                body: "Upon approval, the factor deposits the advance — commonly 80% to 90% of the invoice face value — to your business bank account via ACH or wire. The remaining balance, minus the factoring fee, is held in a reserve account. Oilfield factoring advances may be slightly lower than some other industries due to the longer payment terms and the complexity of operator payment processes, but this varies by factor and operator.",
              },
              {
                step: "5",
                title: "The operator pays the factor; reserve is released to you",
                body: "When the operator remits payment to the factor's lockbox — often 45 to 90 days from invoice date — the factor releases the reserve balance to you, minus the agreed factoring fee. If the operator pays beyond the initial fee period, tiered fee structures at some factors may result in additional charges accruing. Under a recourse agreement, if the operator fails to pay, you may be required to repurchase the invoice or provide a substitute receivable.",
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
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              What Oilfield Factors Typically Evaluate
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Oilfield factoring eligibility criteria vary significantly by factor and by the nature of the services you provide. The items below represent commonly reviewed requirements. No approval or outcome is guaranteed — all decisions are subject to underwriting by third-party providers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Creditworthy Oil and Gas Operators as Account Debtors",
                body: "The primary underwriting criterion is the credit quality of the operators you invoice. Factors typically conduct credit checks on each operator before approving their invoices. Invoices billed to operators with poor payment history, financial distress, or no credit track record may be ineligible or funded at lower advance rates. The concentration of your receivables across a small number of operators is also evaluated — heavy dependence on a single operator may affect approval.",
              },
              {
                title: "Invoices for Completed Services with Backup Documentation",
                body: "Factoring companies require evidence that the services have been performed and the invoice is legitimately owed. For oilfield invoices, this typically means field tickets, signed service orders, daily operational reports, or delivery receipts signed by an authorized operator representative. Invoices for services not yet performed, disputed work, or work performed under a contract with billing disputes are generally not eligible.",
              },
              {
                title: "Master Service Agreement Review",
                body: "Many oil and gas operators require vendors to operate under a master service agreement (MSA) that may contain anti-assignment clauses restricting the assignment of receivables without written operator consent. Factors specializing in energy services will typically review your MSA before onboarding. If your MSA prohibits assignment, you may need to obtain operator consent or the factor may decline to advance on those receivables.",
              },
              {
                title: "Lien Waiver and Lien Right Management",
                body: "Oilfield service companies may hold mineral or mechanic's lien rights under state law as security for unpaid invoices. Factoring companies need to understand how these lien rights intersect with the assignment of the invoice. Some factors require lien waivers as a condition of funding; others coordinate lien filings as part of their service. The specific requirement depends on the state, the nature of services, and the factor's program structure.",
              },
              {
                title: "No Conflicting Liens on Receivables",
                body: "An existing lender with a blanket UCC lien covering your accounts receivable may have a prior claim on the invoices you want to factor. The factoring company needs a first-priority security interest in the receivables it purchases. This is a common issue for oilfield service companies with equipment financing or existing credit facilities. Lien subordination or a payoff of the competing lien may be required before factoring can proceed.",
              },
              {
                title: "Business Entity and Tax Documentation",
                body: "Standard onboarding documentation typically includes a signed factoring agreement, a W-9, voided check for ACH deposits, articles of organization or incorporation, and any required state or industry licenses relevant to the services you provide. Factors may also request recent financial statements, accounts receivable aging reports, and a list of your current operators with outstanding balances.",
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
            Advance Rates and Fee Structures in Oilfield Factoring
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-6">
            Oilfield factoring fees tend to be somewhat higher than trucking or staffing factoring, reflecting the longer payment terms typical in the oil and gas sector and the additional complexity of energy industry invoices. The figures below are illustrative market ranges only — they are not offers, commitments, or guarantees. All terms are subject to underwriting by a third-party provider.
          </p>
          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Advance Rate</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">80 – 90%</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Oilfield factoring advance rates are somewhat lower than trucking factoring rates, reflecting longer operator payment terms and the more variable documentation requirements in the energy sector. Invoices billed to large, investment-grade E&amp;P operators under well-documented MSAs with clean field tickets may qualify for advance rates at the higher end of this range. Invoices from smaller independent operators, those with limited credit history, or those under disputed or complex billing arrangements may qualify for lower rates or may not be eligible.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Factoring Fee</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">2 – 6% per invoice</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Factoring fees in the oilfield sector are commonly structured as a flat rate for an initial period — for example, 3% for payment within 30 days — with an additional increment charged for each subsequent period until the operator pays. Because many oil and gas operators pay on 45-to-90-day cycles, the total fee paid over the life of the invoice can exceed the initial rate. Businesses with higher monthly invoice volume may qualify for lower per-invoice rates. Always confirm the full fee schedule, including any minimum monthly fees, wire fees, reserve holdback policies, and early termination penalties before signing a factoring agreement.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Reserve Account</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">10 – 20% withheld</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                The reserve is the portion of the invoice not advanced at funding — typically 10% to 20% of the invoice face value. It is held by the factor as a buffer against potential disputes, short payments, or charge-backs. Once the operator pays in full and no disputes are outstanding, the reserve is released to you minus the factoring fee. In oilfield factoring, reserve hold periods may be longer than in other industries due to the extended payment terms common with operators.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Recourse vs. Non-Recourse</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">Affects risk and fee</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Recourse factoring — the more common structure — means that if the operator fails to pay, you remain responsible for repurchasing the invoice or substituting another eligible receivable. Non-recourse factoring shifts the credit risk of the operator's insolvency to the factor, but typically applies only to insolvency events — not to invoice disputes, performance claims, or billing disagreements. Given the complexity of oil and gas billing, non-recourse protections in this sector can have significant limitations. Review the specific non-recourse provisions in any agreement carefully.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#0f2a14] px-5 py-4">
            <p className="text-sm text-[#737373] leading-relaxed">
              <span className="text-[#0f0f0f] font-medium">Estimate your factoring cost before you commit.</span>{" "}
              The{" "}
              <Link
                href="/calculators/invoice-factoring-calculator"
                className="text-[#0f0f0f] underline underline-offset-2 hover:text-white transition-colors"
              >
                Invoice Factoring Calculator
              </Link>{" "}
              lets you model advance amounts, fees, and reserve releases based on your invoice values and expected operator payment timing. Outputs are estimates only and do not represent an offer or commitment from any provider.
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
              Oilfield Factoring vs. Other Working Capital Options
            </h2>
            <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
              No single product fits every situation. The table below highlights structural differences between common working capital options for oilfield service companies — not endorsements or cost rankings. All terms are subject to underwriting; results vary by provider.
            </p>
          </div>
          <ComparisonTable
            columns={["Oilfield Factoring", "Bank Line of Credit", "Working Capital Loan"]}
            rows={comparisonRows}
            highlightCol="Oilfield Factoring"
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
              <h2 className="text-xl font-semibold text-white mb-5">What Oilfield Factoring Can Offer</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Access to capital based on operator creditworthiness",
                    body: "A newer oilfield service business with strong operator relationships but limited credit history of its own may find factoring accessible where bank credit is not. The factor is effectively extending capital against the operator's ability to pay, not the service company's balance sheet.",
                  },
                  {
                    title: "Bridges the gap on extended operator payment terms",
                    body: "Net-60 and net-90 terms are common in the oil and gas sector, particularly with large E&P companies. Factoring can convert that receivable into immediate working capital, allowing a service company to take on new jobs or cover operating costs without waiting for the operator's payment cycle.",
                  },
                  {
                    title: "Scales with invoice volume rather than a fixed credit limit",
                    body: "Unlike a revolving credit line with a fixed ceiling, factoring capacity typically scales with your outstanding eligible invoices. As you complete more jobs and issue more invoices to creditworthy operators, more capital may become available — subject to the factor's ongoing credit approval of each operator.",
                  },
                  {
                    title: "Specialized factors understand energy billing complexity",
                    body: "Factors that focus on the oilfield sector are familiar with field tickets, AFE-based billing, purchase orders, lien rights, and MSA structures. This industry knowledge can streamline onboarding and reduce friction compared to working with a general-purpose factor unfamiliar with energy services documentation.",
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
                    title: "MSA anti-assignment clauses can block factoring",
                    body: "A significant number of oil and gas operators include anti-assignment provisions in their master service agreements. If your MSA prohibits assignment of receivables without operator consent, you may be unable to factor those invoices without first obtaining written approval from the operator — which some operators are reluctant to provide.",
                  },
                  {
                    title: "Factoring fees compound on long payment cycles",
                    body: "A 3% factoring fee on a net-30 invoice is a known cost. The same fee structure on a net-90 invoice, if structured as a tiered rate, can produce a total cost significantly higher than the initial rate suggests. On thin-margin oilfield contracts, cumulative factoring costs should be modeled against the value of immediate capital access before committing to a program.",
                  },
                  {
                    title: "Concentrated operator relationships increase risk",
                    body: "Many oilfield service companies derive a large portion of revenue from one or two operators. Factoring companies are aware of this concentration risk and may limit advances against any single operator or require diversification across multiple account debtors as a condition of the program.",
                  },
                  {
                    title: "Recourse obligations if operators dispute or delay payment",
                    body: "In the energy sector, operators sometimes delay payment pending internal cost allocation, AFE reconciliation, or disputed field ticket quantities. Under a recourse factoring agreement, a payment delay that exceeds the agreement's defined window may trigger a requirement to repurchase the invoice regardless of the reason for the delay. This is a meaningful operational risk, not a hypothetical one.",
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
                Estimate advance amounts, factoring fees, and reserve releases based on your oilfield invoice values and expected operator payment timing. Outputs are estimates only and do not represent an offer or commitment.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-medium text-[#0f0f0f] hover:border-[#0f0f0f]/50 hover:text-[#0f0f0f] transition-colors"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Oilfield Factoring — Common Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Explore Whether Oilfield Factoring May Be a Fit"
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

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
  title: "Service Business Invoice Factoring | ZEO.co",
  description:
    "Service businesses with slow-paying commercial clients may qualify for invoice factoring. Learn how advance rates, reserve accounts, and service-specific underwriting criteria work before you apply.",
  path: "/factoring/service-providers",
  keywords: [
    "service provider factoring",
    "service business invoice factoring",
    "B2B service company factoring",
    "professional services factoring",
    "consulting invoice factoring",
    "service company accounts receivable financing",
    "factoring for service businesses",
  ],
});

const faqItems = [
  {
    q: "What kinds of service businesses may qualify for invoice factoring?",
    a: "Invoice factoring for service providers is most commonly available to businesses that issue commercial invoices to other businesses or government entities for completed, documented work. This includes IT and technology consulting, managed service providers, janitorial and facilities management companies, marketing and creative agencies, security services, logistics coordination firms, environmental services, and similar B2B operations. The common thread is a commercial client base with documented net-payment terms. Consumer-facing service businesses — where clients pay at the time of service — generally do not have factoring-eligible receivables because there is no open invoice to assign to a factor.",
  },
  {
    q: "How does a factor verify that a service was actually performed?",
    a: "Unlike product-based invoices backed by shipping documents or bills of lading, service invoices require different forms of verification. Factors typically ask for supporting documentation such as signed statements of work, completed work orders, client purchase orders, delivery confirmations, or time-and-materials reports. Some factors will call or email your client directly to verbally confirm that the services were delivered and accepted before advancing funds. This process — called invoice verification or debtor verification — may slow initial funding while the factor establishes its own relationship with your client base. Subsequent invoices to the same client often move faster once the verification process is in place.",
  },
  {
    q: "My services contract includes retainage or milestone-based billing. Does that affect eligibility?",
    a: "Yes, it can significantly affect which invoices qualify. Factors prefer invoices for work that has been fully delivered and accepted with no remaining contingency. Retainage — the portion of contract value withheld until project completion — is generally not factorable until it becomes unconditionally due. Similarly, milestone billing where payment is contingent on a future event or deliverable may be excluded from what a factor will advance against. Some factors with experience in project-based service businesses will work with these structures, but they may apply lower advance rates to milestone invoices or require additional documentation. Straightforward time-and-materials invoices for completed work are typically more straightforward to factor than project-milestone billings.",
  },
  {
    q: "Will my clients know I am using invoice factoring?",
    a: "In most service-provider factoring arrangements, yes. Standard notification factoring requires that your clients receive a notice of assignment directing them to remit payment to the factor's lockbox rather than to your accounts receivable. This is an industry-standard practice and does not change your contractual obligations to your client. Before signing with a factor, review your service agreements for anti-assignment clauses — some enterprise contracts prohibit assigning receivables without client consent. If your contracts contain such clauses, you may need to seek client consent or renegotiate terms before factoring becomes an option. Non-notification programs exist but are less common for service-business factoring.",
  },
  {
    q: "What happens if a client disputes an invoice after I have already received an advance?",
    a: "Invoice disputes are handled differently from outright client non-payment. If a client disputes an invoice — contesting the scope, quality, or completion of services — most factors will place the disputed amount in a hold status and pause reserve releases tied to that invoice until the dispute is resolved. You remain responsible for resolving the underlying dispute with your client. Under recourse factoring, if the dispute results in a reduced or cancelled invoice, you may be required to repurchase that invoice amount from the factor, potentially from your reserve balance or through direct repayment. This is one reason factors emphasize having complete documentation of service delivery before submitting invoices for factoring. Disputed invoices that arise from genuine delivery shortfalls are your liability, not the factor's.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Service Factoring": "Outstanding commercial invoices",
    "Business Line of Credit": "Overall business creditworthiness",
    "Revenue-Based Financing": "Monthly revenue run rate",
  },
  {
    feature: "Primary underwriting focus",
    "Service Factoring": "Your clients' credit quality",
    "Business Line of Credit": "Your business & owner credit",
    "Revenue-Based Financing": "Consistent monthly revenue",
  },
  {
    feature: "Time to first funding",
    "Service Factoring": "3–7 days (onboarding), then 24–48 hrs",
    "Business Line of Credit": "Weeks to months",
    "Revenue-Based Financing": "Days to 2 weeks",
  },
  {
    feature: "Scales with invoice volume",
    "Service Factoring": "Yes",
    "Business Line of Credit": "Requires renegotiation",
    "Revenue-Based Financing": "Partially",
  },
  {
    feature: "Client notification typically required",
    "Service Factoring": "Yes (notification factoring)",
    "Business Line of Credit": "No",
    "Revenue-Based Financing": "No",
  },
  {
    feature: "Collections managed by provider",
    "Service Factoring": "Yes",
    "Business Line of Credit": "No",
    "Revenue-Based Financing": "No",
  },
  {
    feature: "Recourse on client non-payment",
    "Service Factoring": "Typically recourse",
    "Business Line of Credit": "N/A",
    "Revenue-Based Financing": "N/A",
  },
];

export default function ServiceProviderFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Service Provider Factoring"
        subtitle="B2B service businesses often complete work weeks before they collect payment. Invoice factoring may allow service providers to access a portion of outstanding receivables before clients pay — subject to underwriting by third-party providers."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Service Provider Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="75–90%"
              note="Service invoices commonly advance at lower rates than product invoices due to intangible delivery verification"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1–5%"
              unit="per invoice"
              note="Varies widely by client creditworthiness, invoice terms, and monthly volume"
            />
            <MetricCard
              label="Reserve Withheld"
              value="10–25%"
              note="Released to you after client pays, net of accumulated fees"
            />
            <MetricCard
              label="Funding After Onboarding"
              value="24–48 hrs"
              note="Initial setup typically takes 3–7 business days; ongoing submissions fund faster"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4 leading-relaxed max-w-3xl">
            These ranges are illustrative only. Actual rates and terms are determined by third-party factoring providers through their underwriting process and are not guaranteed. Individual results will vary.
          </p>
        </div>
      </section>

      {/* What it is / who uses it */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Overview
              </p>
              <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
                What Is Service Provider Invoice Factoring?
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Invoice factoring is a financial arrangement in which a business sells its outstanding accounts receivable to a third-party company — called a factor — at a discount in exchange for immediate access to a portion of that invoice&rsquo;s value. The factor then collects payment directly from your clients when those invoices come due.
                </p>
                <p>
                  For service-based businesses, the core challenge factoring addresses is the gap between service delivery and payment. A consulting firm may complete a project in March but operate on Net 45 or Net 60 payment terms, meaning the cash for that work does not arrive until May. During that period, the business still owes payroll, software subscriptions, contractor fees, and overhead. Factoring may allow the business to access most of that invoice value immediately rather than waiting out the full payment cycle.
                </p>
                <p>
                  Unlike a loan, factoring is not debt on your balance sheet — the factor is purchasing a receivable, not lending against it. Whether this distinction matters for your accounting treatment should be confirmed with a qualified accountant or financial advisor.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Who Typically Uses It
              </p>
              <p className="text-sm text-[#737373] leading-relaxed mb-5">
                Service provider factoring is most commonly used by businesses with commercial or government clients on net payment terms. Common industries that may qualify include:
              </p>
              <div className="grid grid-cols-1 gap-2">
                {[
                  {
                    name: "IT & Technology Consulting",
                    detail: "Project-based and managed service engagements billed on completion or monthly",
                  },
                  {
                    name: "Facilities & Janitorial Services",
                    detail: "Recurring commercial contracts with invoices submitted weekly or monthly",
                  },
                  {
                    name: "Marketing & Creative Agencies",
                    detail: "Retainer or project invoices billed to business clients with net terms",
                  },
                  {
                    name: "Security Services",
                    detail: "Guard and monitoring services billed to commercial or government clients",
                  },
                  {
                    name: "Environmental & Field Services",
                    detail: "Site work, remediation, and inspection services with government or commercial buyers",
                  },
                  {
                    name: "Logistics Coordination & Brokerage",
                    detail: "Freight brokerage and coordination services with shipper invoices pending",
                  },
                ].map(({ name, detail }) => (
                  <div key={name} className="flex gap-3 rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-4 py-3 items-start">
                    <div className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] mt-2" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{name}</p>
                      <p className="text-xs text-[#a3a3a3] mt-0.5">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the advance/reserve cycle works */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              How It Works
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              The Advance and Reserve Cycle for Service Invoices
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              The factoring process for service providers follows a consistent cycle, though exact mechanics vary by factor and agreement. The steps below describe how a typical transaction may proceed — your actual experience will depend on your specific factor and contract terms.
            </p>
          </div>
          <div className="relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-8 left-8 right-8 h-px bg-[#e5e5e5]" aria-hidden="true" />
            <div className="grid md:grid-cols-5 gap-4 relative">
              {[
                {
                  step: "1",
                  label: "Service Delivered",
                  body: "You complete a service engagement and issue an invoice to your commercial client with agreed payment terms (e.g., Net 30 or Net 45).",
                },
                {
                  step: "2",
                  label: "Invoice Submitted",
                  body: "You submit the invoice to your factor along with supporting documentation — work orders, SOW sign-offs, time reports, or purchase order references.",
                },
                {
                  step: "3",
                  label: "Verification & Advance",
                  body: "The factor verifies the invoice with your client, then advances 75–90% of the face value (typical range) to your account, often within 24–48 hours.",
                },
                {
                  step: "4",
                  label: "Client Pays Factor",
                  body: "Your client pays the invoice directly to the factor's lockbox. The factor manages collections and handles any follow-up on outstanding invoices.",
                },
                {
                  step: "5",
                  label: "Reserve Released",
                  body: "Once the client pays in full, the factor releases the held reserve to you — minus the agreed factoring fee — completing the cycle for that invoice.",
                },
              ].map(({ step, label, body }) => (
                <div key={step} className="flex flex-col items-start md:items-center gap-3">
                  <div className="flex-shrink-0 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-[#e5e5e5] bg-[#ffffff] text-xs font-semibold text-[#0f0f0f] font-variant-numeric tabular-nums">
                    {step}
                  </div>
                  <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4 w-full">
                    <p className="text-xs font-semibold text-[#0f0f0f] mb-2">{label}</p>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements and invoice criteria */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Eligibility
              </p>
              <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
                Business Requirements
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Factoring eligibility is determined by individual providers through their underwriting process. The following criteria represent common requirements across many service-focused factors — meeting these does not guarantee approval, and requirements vary by provider.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    label: "Commercial or government client base",
                    detail: "Invoices must be owed by business or government entities, not individual consumers.",
                  },
                  {
                    label: "Services fully delivered",
                    detail: "Factors typically require that work be complete and accepted before an invoice is eligible for advance.",
                  },
                  {
                    label: "Minimum monthly invoice volume",
                    detail: "Many factors set a monthly minimum, often $10,000–$50,000 in eligible invoices; some niche providers work with lower volumes.",
                  },
                  {
                    label: "No liens on receivables",
                    detail: "Outstanding liens, UCC filings, or prior assignments on your receivables may need to be resolved before factoring can proceed.",
                  },
                  {
                    label: "Clean corporate standing",
                    detail: "Active business registration, no recent bankruptcy filings, and no material unresolved tax liens are common requirements.",
                  },
                  {
                    label: "Creditworthy client base",
                    detail: "The factor's primary underwriting focuses on your clients — businesses with weak or unknown credit may reduce eligible invoice volume.",
                  },
                ].map(({ label, detail }) => (
                  <li key={label} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{label}</p>
                      <p className="text-xs text-[#a3a3a3] mt-0.5 leading-relaxed">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Invoice Criteria
              </p>
              <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
                What Makes a Service Invoice Eligible
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Not every invoice a service business generates will qualify for factoring. Factors evaluate individual invoices — not just your business overall — and may exclude invoices that do not meet their criteria.
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Unconditional payment obligation",
                    status: "required",
                    detail: "Payment must not be contingent on future events, milestone approvals, or client satisfaction clauses.",
                  },
                  {
                    label: "No right of offset or contra accounts",
                    status: "required",
                    detail: "If your client can deduct amounts owed to them from what they owe you, a factor may decline or reduce the advance.",
                  },
                  {
                    label: "Not subject to an anti-assignment clause",
                    status: "required",
                    detail: "Some enterprise contracts prohibit assignment of receivables without consent; these may need client approval before factoring.",
                  },
                  {
                    label: "Documentation of service completion",
                    status: "supporting",
                    detail: "Signed work orders, completed SOW deliverables, time reports, or PO references that confirm the service was performed.",
                  },
                  {
                    label: "Invoice terms within factor's window",
                    status: "supporting",
                    detail: "Most factors prefer invoices with Net 30 to Net 90 terms; very long payment terms may reduce the advance rate or be excluded.",
                  },
                ].map(({ label, status, detail }) => (
                  <div key={label} className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] p-3.5 flex gap-3">
                    <div className={`flex-shrink-0 mt-0.5 px-2 py-0.5 rounded-full text-[0.6rem] font-semibold uppercase tracking-wide h-fit ${status === "required" ? "bg-[#f5f5f5] text-[#0f0f0f] border border-[#0f0f0f]/30" : "bg-[#f5f5f5] text-[#a3a3a3] border border-[#e5e5e5]"}`}>
                      {status === "required" ? "Required" : "Supporting"}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{label}</p>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advance rates and fee ranges */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Cost & Rates
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              Advance Rates and Fee Structures
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed mb-2">
              Service provider factoring typically involves lower advance rates and higher fees than product-based factoring, reflecting the additional verification required for intangible deliverables and the varying creditworthiness of service-sector clients.
            </p>
            <p className="text-sm text-[#737373] leading-relaxed">
              The following ranges are illustrative only. Actual rates are subject to underwriting by third-party providers, are not guaranteed, and will vary based on your client mix, invoice terms, total monthly volume, and other factors evaluated during the underwriting process.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <MetricCard
              label="Advance Rate (Service)"
              value="75–90%"
              note="Lower end common for new clients, project-based billing, or industries with frequent disputes"
              highlight
            />
            <MetricCard
              label="Flat Fee per Invoice"
              value="1–5%"
              unit="of face value"
              note="Quoted as a flat fee or as a periodic rate (e.g., 1.5% per 30 days outstanding)"
            />
            <MetricCard
              label="Monthly Cost Equivalent"
              value="2–6%"
              unit="effective monthly"
              note="For invoices outstanding 30 days; compounds if clients pay on Net 45 or Net 60 terms"
            />
            <MetricCard
              label="Reserve Released"
              value="10–25%"
              note="Held until client pays; released net of factoring fees — this is not additional cost"
            />
          </div>
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              <span className="text-[#737373] font-medium">Understanding how fee timing affects your effective cost:</span>{" "}
              If a factor charges a 2% flat fee and your client pays in 60 days, your effective cost is 2% of that invoice regardless of timing. If the fee is structured as 1% per 30 days (or fraction thereof), the same 60-day invoice costs approximately 2%. But if your client takes 75 days, a periodic-rate structure means you pay for 3 periods — roughly 3% — while a flat-fee structure keeps the cost at 2%. Always clarify how your factor calculates fees across slow-paying invoices before signing an agreement.
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
            <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
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
                    title: "Converts slow-paying invoices to near-term working capital",
                    body: "Service businesses with 45- or 60-day payment terms can receive most of an invoice&rsquo;s value within days of submission rather than weeks, improving operational cash flow.",
                  },
                  {
                    title: "Approval based substantially on your clients&rsquo; credit",
                    body: "Service businesses with strong commercial or government clients may qualify even without a long operating history, established bank relationships, or strong owner credit scores.",
                  },
                  {
                    title: "No fixed repayment schedule",
                    body: "Unlike a term loan, there is no fixed monthly payment. The factor collects from your clients; you receive the reserve when they pay. Cash flow varies with your invoice activity.",
                  },
                  {
                    title: "Collections support included",
                    body: "The factor typically manages collections from your clients, which may reduce the administrative burden of following up on overdue invoices — though client relationships remain yours to manage.",
                  },
                  {
                    title: "May scale with business growth",
                    body: "As your monthly invoice volume increases, factoring capacity may grow with it without requiring a separate credit application, subject to the factor&rsquo;s ongoing underwriting review.",
                  },
                ].map(({ title, body }, i) => (
                  <li key={i} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5" dangerouslySetInnerHTML={{ __html: title }} />
                      <p className="text-xs text-[#a3a3a3] leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
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
                    title: "Higher fees and lower advances than product factoring",
                    body: "Factors perceive service invoices as carrying more verification risk than product invoices backed by shipping documents. This typically results in higher factoring fees and lower advance rates for service businesses.",
                  },
                  {
                    title: "Not all invoices will qualify",
                    body: "Retainage, milestone billing, contingent payments, and invoices for clients with poor credit may be excluded or advanced at reduced rates, creating gaps between your total receivables and your factorable receivables.",
                  },
                  {
                    title: "Recourse factoring is the norm",
                    body: "Most service-provider factoring programs are recourse-based, meaning if a client does not pay within the factor&rsquo;s defined window, you are responsible for repurchasing or replacing that invoice.",
                  },
                  {
                    title: "Client relationships are affected by notification",
                    body: "Payment redirection notices sent to your clients change where and how they pay. Some enterprise clients may have questions or concerns about your use of factoring, requiring proactive communication.",
                  },
                  {
                    title: "Costs compound on slow-paying clients",
                    body: "For service businesses with clients that routinely pay on Net 60 or beyond, periodic factoring fees can accumulate to a meaningful percentage of invoice value. Modeling the full cost scenario before committing is essential.",
                  },
                ].map(({ title, body }, i) => (
                  <li key={i} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#a3a3a3]" viewBox="0 0 16 16" fill="none">
                      <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5" dangerouslySetInnerHTML={{ __html: title }} />
                      <p className="text-xs text-[#a3a3a3] leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
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
            <h2 className="text-2xl font-semibold text-white mb-3 text-balance">
              Service Factoring vs. Other Working Capital Options
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed">
              Comparison is illustrative only. Products vary significantly by provider, and availability is subject to underwriting and third-party approval. This table is not a recommendation of any particular product.
            </p>
          </div>
          <ComparisonTable
            columns={["Service Factoring", "Business Line of Credit", "Revenue-Based Financing"]}
            rows={comparisonRows}
            highlightCol="Service Factoring"
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
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M5 9h8M9 5v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">Invoice Factoring Calculator</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed max-w-lg">
                  Estimate your potential advance amount and factoring cost across different invoice sizes, advance rates, and fee structures. Results are estimates only and do not represent offers or commitments from any provider.
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
        title="Service Provider Factoring — Frequently Asked Questions"
      />

      {/* CTA */}
      <CTASection
        headline="Explore whether service provider factoring may fit your business"
        subtext="Submit a brief intake and ZEO will review potential financing paths for your service business. All options are subject to underwriting by third-party providers and are not guaranteed."
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

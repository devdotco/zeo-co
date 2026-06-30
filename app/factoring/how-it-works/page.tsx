import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ───────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "How Invoice Factoring Works | ZEO.co",
  description:
    "Learn how invoice factoring converts outstanding receivables into working capital. Understand advance rates, reserve accounts, the collection cycle, fee structures, and which businesses may qualify — subject to underwriting by third-party providers.",
  path: "/factoring/how-it-works",
  keywords: [
    "how invoice factoring works",
    "factoring advance rate",
    "factoring reserve account",
    "invoice factoring process",
    "accounts receivable factoring steps",
    "factoring fee structure",
    "recourse vs non-recourse factoring",
    "factoring eligibility requirements",
    "invoice factoring for small business",
    "B2B invoice financing",
  ],
});

// ── Local SVG icons ────────────────────────────────────────────────────────────

function InvoiceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3.5" y="2" width="13" height="16" rx="1.75" stroke="currentColor" strokeWidth="1.35" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7.5l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 5h2M9 5h2M5 8h2M9 8h2M5 11h2M9 11h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Cycle Step ─────────────────────────────────────────────────────────────────

function CycleStep({
  number,
  title,
  body,
  isLast = false,
}: {
  number: string;
  title: string;
  body: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full border border-[#0f0f0f]/40 bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
          <span className="text-[0.65rem] font-semibold text-[#0f0f0f] tabular-nums">{number}</span>
        </div>
        {!isLast && <div className="w-px flex-1 bg-[#e5e5e5] mt-1.5" />}
      </div>
      <div className={`pb-8 ${isLast ? "" : ""}`}>
        <p className="text-sm font-semibold text-[#0f0f0f] mb-1 leading-snug">{title}</p>
        <p className="text-sm text-[#737373] leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

// ── Who Uses It Row ────────────────────────────────────────────────────────────

function IndustryPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-[#e5e5e5] bg-[#f5f5f5] text-[#737373]">
      {label}
    </span>
  );
}

// ── Requirement Row ────────────────────────────────────────────────────────────

function RequirementRow({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex gap-3 py-3 border-b border-[#e5e5e5] last:border-0">
      <div className="mt-0.5 text-[#0f0f0f] flex-shrink-0">
        <CheckIcon />
      </div>
      <div>
        <span className="text-sm font-medium text-[#0f0f0f]">{label}: </span>
        <span className="text-sm text-[#737373]">{detail}</span>
      </div>
    </div>
  );
}

// ── Benefit / Limitation Row ───────────────────────────────────────────────────

function BenefitRow({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="mt-0.5 text-[#0f0f0f] flex-shrink-0">
        <CheckIcon />
      </div>
      <p className="text-sm text-[#737373] leading-relaxed">{text}</p>
    </div>
  );
}

function LimitRow({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="mt-0.5 text-[#a3a3a3] flex-shrink-0">
        <XIcon />
      </div>
      <p className="text-sm text-[#737373] leading-relaxed">{text}</p>
    </div>
  );
}

// ── FAQ data ───────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "Does my business credit score matter for invoice factoring?",
    a: "Factoring underwriting is primarily focused on the creditworthiness of your customers — the businesses or agencies that owe you money — rather than your own business credit. Your company's credit history and time in business may still be reviewed, but strong invoices owed by creditworthy account debtors can sometimes offset a thinner credit profile. All approvals are subject to the third-party factor's underwriting criteria.",
  },
  {
    q: "What happens if my customer doesn't pay the invoice?",
    a: "The answer depends on whether your factoring arrangement is recourse or non-recourse. Under recourse factoring — which is more common — your business retains the credit risk: if the customer fails to pay, you may be required to buy back the invoice or cover the shortfall from your reserve. Non-recourse factoring transfers certain credit risks to the factor, but typically comes with narrower eligibility, higher fees, and specific carve-outs for disputes or fraud.",
  },
  {
    q: "How quickly can funds be received after submitting invoices?",
    a: "Funding timelines vary by factor and the completeness of your submission. Initial account setup — including UCC filings, credit checks on your customers, and contract execution — typically takes several business days to a few weeks. Once the account is established, advance disbursements on approved invoices may be received within one to three business days. Same-day funding may be available with some factors for an additional fee.",
  },
  {
    q: "Can I factor invoices from only some of my customers?",
    a: "Some factors offer spot factoring, which lets you submit individual invoices without a minimum volume commitment or an obligation to factor all receivables. Other agreements are whole-ledger arrangements where you are required to factor invoices from all or a defined group of customers. Partial or selective factoring may carry different pricing and eligibility requirements than full-ledger programs.",
  },
  {
    q: "Will my customers know I am using a factoring company?",
    a: "In a notification factoring arrangement — the standard structure — your customers are notified that invoices have been assigned to the factor and are directed to remit payment directly to the factor's lockbox. This is disclosed via a notice of assignment. Some lenders offer non-notification or confidential structures, though these are less common and may have higher costs. The visibility of the arrangement to your customers is a material factor to discuss before signing.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────

export default function HowFactoringWorksPage() {
  return (
    <>
      {/* 1 ── Hero */}
      <PageHero
        eyebrow="Factoring"
        title="How Invoice Factoring Works"
        subtitle="Invoice factoring converts outstanding receivables into immediate working capital by selling unpaid invoices to a third-party factor at a discount. This guide explains the advance and reserve cycle, typical eligibility criteria, fee structures, and what to consider before pursuing a factoring arrangement."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "How It Works" },
        ]}
      />

      {/* 2 ── What it is / who uses it */}
      <section className="py-14 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                What Is Factoring
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 leading-snug" style={{ textWrap: "balance" } as React.CSSProperties}>
                Selling receivables, not taking on debt
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Invoice factoring is a form of accounts receivable financing in which a business sells its outstanding invoices — money owed by customers for goods or services already delivered — to a factoring company (the "factor") at a discount. The factor advances a portion of the invoice face value upfront, then collects payment directly from the customer when the invoice comes due.
                </p>
                <p>
                  Unlike a traditional business loan, factoring does not require taking on new debt in the conventional sense. The transaction is structured as the sale of an asset — your receivable — rather than a borrowing. However, factoring agreements may still involve UCC-1 filings, personal guarantees, recourse obligations, and contractual restrictions on your receivables. Review all terms with qualified counsel.
                </p>
                <p>
                  Factoring is most commonly used by businesses that sell on trade credit terms to other businesses or government entities — meaning they invoice customers with net-30, net-60, or longer payment windows — and need working capital before those invoices are paid. It is not typically available for consumer retail sales or cash-on-delivery transactions.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                Industries That Commonly Use Factoring
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Staffing & Temp Agencies",
                  "Freight & Trucking",
                  "Government Contractors",
                  "Manufacturing",
                  "Healthcare / Medical Billing",
                  "Construction Subcontractors",
                  "Wholesale Distribution",
                  "IT & Technology Services",
                  "Janitorial & Facilities",
                  "Oil & Gas Field Services",
                  "Apparel & Textile",
                  "Business Services",
                ].map((label) => (
                  <IndustryPill key={label} label={label} />
                ))}
              </div>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="flex items-start gap-3">
                  <div className="text-[#0f0f0f] mt-0.5">
                    <InvoiceIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f0f0f] mb-1">B2B receivables only</p>
                    <p className="text-xs text-[#737373] leading-relaxed">
                      Factoring is designed for invoices owed by businesses or government entities, not individual consumers. The factor evaluates the creditworthiness of your customers — not your business — so the quality and payment history of your account debtors is central to eligibility and pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── Advance / reserve cycle */}
      <section className="py-14 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            The Advance &amp; Reserve Cycle
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3 leading-snug max-w-2xl" style={{ textWrap: "balance" } as React.CSSProperties}>
            Step-by-step: from invoice submission to reserve release
          </h2>
          <p className="text-sm text-[#737373] mb-10 max-w-2xl leading-relaxed">
            A standard factoring transaction moves through a predictable sequence. Timelines and amounts vary by factor, agreement type, and customer creditworthiness.
          </p>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
            <div>
              <CycleStep
                number="01"
                title="Deliver goods or services and issue the invoice"
                body="Your business completes work or delivers product and issues an invoice to your customer — the account debtor — with agreed payment terms (e.g., net-30 or net-60). The invoice must reflect work already performed; factors generally do not advance against future or unfulfilled obligations."
              />
              <CycleStep
                number="02"
                title="Submit invoice to the factor for verification"
                body="You submit the invoice — and often supporting documentation such as purchase orders, delivery confirmations, or signed work orders — to the factor. The factor verifies that the invoice is valid, undisputed, and that the account debtor meets its credit criteria. Invoices with liens, offsets, or cross-aging issues may be declined."
              />
              <CycleStep
                number="03"
                title="Factor advances a percentage of face value"
                body="Once approved, the factor wires the advance — typically 70% to 95% of the invoice face value, subject to underwriting — to your business account. The advance rate depends on your industry, the credit quality of your customer, invoice size, and the factor's internal policies. This is not a guarantee; all advances are subject to approval."
              />
              <CycleStep
                number="04"
                title="Notice of assignment is sent to your customer"
                body="In a notification factoring arrangement, your customer receives a notice of assignment directing them to remit payment to the factor's designated lockbox or bank account rather than to you. This is the standard structure. Some factors offer confidential or non-notification programs at different pricing."
                isLast={false}
              />
              <CycleStep
                number="05"
                title="Customer pays the factor directly"
                body="Your customer pays the full invoice amount to the factor on or before the invoice due date. The factor's collections team may follow up on late accounts. If a customer is slow to pay, fees may accrue based on the number of days the invoice remains outstanding."
              />
              <CycleStep
                number="06"
                title="Factor releases the reserve, less fees"
                body="Once the invoice is paid in full, the factor releases the reserve — the remaining balance held back at the time of advance — minus its factoring fee and any applicable charges. If the invoice is unpaid and the arrangement is recourse, you may be required to buy back the invoice or have the shortfall deducted from future reserves."
                isLast
              />
            </div>
            <div className="hidden lg:flex flex-col justify-start pt-2">
              <div className="sticky top-8 space-y-4">
                <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
                    Example Transaction
                  </p>
                  <div className="space-y-3 text-sm font-variant-numeric">
                    {[
                      { label: "Invoice face value", value: "$50,000", muted: false },
                      { label: "Advance rate (85%)", value: "$42,500", muted: false },
                      { label: "Reserve held back", value: "$7,500", muted: true },
                      { label: "Factoring fee (2.5%)", value: "−$1,250", muted: true },
                      { label: "Reserve released", value: "$6,250", muted: false },
                    ].map(({ label, value, muted }) => (
                      <div key={label} className="flex items-center justify-between gap-4">
                        <span className={muted ? "text-[#a3a3a3]" : "text-[#737373]"}>{label}</span>
                        <span className={`tabular-nums font-medium ${muted ? "text-[#a3a3a3]" : "text-[#0f0f0f]"}`}>{value}</span>
                      </div>
                    ))}
                    <div className="border-t border-[#e5e5e5] pt-3 flex items-center justify-between gap-4">
                      <span className="text-[#0f0f0f] font-medium">Total received</span>
                      <span className="text-[#0f0f0f] font-semibold tabular-nums">$48,750</span>
                    </div>
                  </div>
                  <p className="text-[0.65rem] text-[#a3a3a3] mt-4 leading-relaxed">
                    Example only. Actual advance rates and fees are subject to underwriting by the third-party factor and will vary based on your industry, customer creditworthiness, invoice terms, and agreement structure.
                  </p>
                </div>
                <Link
                  href="/calculators/invoice-factoring-calculator"
                  className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] hover:border-[#0f0f0f]/40 hover:bg-[#f5f5f5] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-[#0f0f0f]">
                      <CalcIcon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">Invoice Factoring Calculator</p>
                      <p className="text-xs text-[#a3a3a3]">Estimate advance amounts and fees</p>
                    </div>
                  </div>
                  <ArrowRightIcon className="text-[#a3a3a3] group-hover:text-[#333333] transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 ── Requirements and invoice criteria */}
      <section className="py-14 border-t border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Eligibility
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 leading-snug" style={{ textWrap: "balance" } as React.CSSProperties}>
                Requirements and invoice criteria
              </h2>
              <p className="text-sm text-[#737373] mb-6 leading-relaxed">
                Factoring eligibility is evaluated differently than a traditional loan application. The factor's primary concern is whether your customers — the account debtors — are likely to pay. The following are common criteria that factors may review, though requirements vary by factor and program. None of these should be read as guarantees or minimum thresholds.
              </p>
              <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 divide-y divide-[#e5e5e5]">
                <RequirementRow
                  label="B2B or B2G invoices"
                  detail="Invoices must be owed by creditworthy businesses or government entities. Consumer receivables are generally not eligible."
                />
                <RequirementRow
                  label="Work already performed"
                  detail="The invoice must represent goods delivered or services already rendered — not future work or deposits."
                />
                <RequirementRow
                  label="No prior liens on receivables"
                  detail="Existing UCC-1 blanket liens from other lenders may block factoring unless a subordination agreement or lien release is obtained."
                />
                <RequirementRow
                  label="Undisputed invoices"
                  detail="Invoices subject to customer disputes, chargebacks, set-offs, or cross-aging issues may be ineligible or discounted."
                />
                <RequirementRow
                  label="Minimum monthly volume"
                  detail="Many full-ledger factoring programs require a minimum monthly factoring volume. Spot factoring programs may not have this requirement."
                />
                <RequirementRow
                  label="Creditworthy account debtors"
                  detail="The factor will run credit checks on your customers. Customers with poor payment history or financial distress may reduce eligible invoice amounts."
                />
                <RequirementRow
                  label="Business entity in good standing"
                  detail="Your business must typically be a registered legal entity. The factor may review business tax returns, bank statements, and accounts receivable aging reports."
                />
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3 lg:mt-[3.25rem]">
                Invoice Criteria
              </p>
              <p className="text-sm text-[#737373] mb-6 leading-relaxed">
                Beyond general business eligibility, factors evaluate the specific characteristics of each invoice or batch. Understanding what makes an invoice factorable helps businesses prepare clean submissions and avoid delays.
              </p>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5 space-y-3">
                  <p className="font-medium text-[#0f0f0f]">Invoice age and payment terms</p>
                  <p>Most factors prefer invoices with standard net-30 to net-90 payment terms. Invoices that are already past due or that have unusually long payment windows (net-120 or longer) may be declined or subject to different pricing.</p>
                </div>
                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5 space-y-3">
                  <p className="font-medium text-[#0f0f0f]">Minimum and maximum invoice sizes</p>
                  <p>Factors may set minimum invoice or batch sizes that make the transaction economical. Very large single invoices may be subject to concentration limits — caps on how much exposure a factor will accept to a single account debtor.</p>
                </div>
                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5 space-y-3">
                  <p className="font-medium text-[#0f0f0f]">Supporting documentation</p>
                  <p>Factors typically require supporting documents to verify the invoice is legitimate: purchase orders, signed contracts, proof of delivery, approved timesheets, or inspection reports depending on the industry. Inadequate documentation may result in declined submissions or delayed funding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 ── Advance rates and fee ranges */}
      <section className="py-14 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Pricing
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3 leading-snug max-w-2xl" style={{ textWrap: "balance" } as React.CSSProperties}>
            Advance rates and fee ranges
          </h2>
          <p className="text-sm text-[#737373] mb-10 max-w-2xl leading-relaxed">
            Factoring costs depend on a range of factors specific to your business and customers. The figures below are general market ranges based on industry data — they are not offers, commitments, or guarantees of any specific rate. All pricing is subject to underwriting by the third-party factor.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <MetricCard
              label="Typical advance rate"
              value="70–95%"
              note="Of invoice face value. Higher advance rates may apply to strong-credit debtors in established industries."
              highlight
            />
            <MetricCard
              label="Factoring fee range"
              value="1–5%"
              unit="per 30 days"
              note="Fees accrue based on how long the invoice remains outstanding. Rates vary by industry and debtor credit quality."
            />
            <MetricCard
              label="Reserve account"
              value="5–30%"
              note="Held back at the time of advance and released — less fees — once the invoice is paid."
            />
            <MetricCard
              label="Typical payment window"
              value="30–90"
              unit="days"
              note="Most factored invoices are collected within 30–90 days. Invoices outstanding longer may incur additional fees."
            />
          </div>
          <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5 mb-6">
            <p className="text-sm font-semibold text-[#0f0f0f] mb-3">What drives factoring fees higher or lower</p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1.5 text-sm">
              {[
                ["Higher-risk industries", "Fees may be higher for construction, staffing, or healthcare due to longer dispute windows or slow government payers"],
                ["Low debtor credit quality", "Customers with thin credit profiles or prior slow-pay history may increase the factor's risk pricing"],
                ["Short monthly volume commitment", "Lower factoring volumes may result in higher per-invoice pricing than high-volume programs"],
                ["Long invoice terms", "Net-60 or net-90 invoices increase the factor's outstanding exposure, which is often reflected in fee accrual rates"],
                ["Strong debtor credit", "Well-capitalized account debtors with strong payment history may support lower fees and higher advance rates"],
                ["Spot vs. full-ledger", "Spot factoring typically carries a premium over whole-ledger arrangements where the factor has broader receivables access"],
              ].map(([label, note]) => (
                <div key={label as string} className="flex gap-2 py-1.5">
                  <div className="mt-1 text-[#0f0f0f] flex-shrink-0">
                    <ArrowRightIcon />
                  </div>
                  <p className="text-[#737373]">
                    <span className="text-[#0f0f0f] font-medium">{label}: </span>
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <ComparisonTable
              highlightCol="Invoice Factoring"
              columns={["Invoice Factoring", "Bank Line of Credit", "MCA / Revenue Advance"]}
              rows={[
                {
                  feature: "Credit evaluated on",
                  "Invoice Factoring": "Your customers",
                  "Bank Line of Credit": "Your business",
                  "MCA / Revenue Advance": "Your revenue history",
                },
                {
                  feature: "Collateral",
                  "Invoice Factoring": "Receivables (UCC-1)",
                  "Bank Line of Credit": "Business assets / personal",
                  "MCA / Revenue Advance": "Future revenue / UCC-1",
                },
                {
                  feature: "Repayment structure",
                  "Invoice Factoring": "Customer pays invoice",
                  "Bank Line of Credit": "Monthly draws & payments",
                  "MCA / Revenue Advance": "Daily / weekly holdback",
                },
                {
                  feature: "Availability basis",
                  "Invoice Factoring": "Approved receivables",
                  "Bank Line of Credit": "Revolving credit limit",
                  "MCA / Revenue Advance": "% of future sales",
                },
                {
                  feature: "Typical cost driver",
                  "Invoice Factoring": "Days outstanding + rate",
                  "Bank Line of Credit": "Interest rate + fees",
                  "MCA / Revenue Advance": "Factor rate",
                },
                {
                  feature: "Requires existing revenue",
                  "Invoice Factoring": "Yes — B2B invoices",
                  "Bank Line of Credit": "Generally yes",
                  "MCA / Revenue Advance": "Yes — processing history",
                },
              ]}
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-3 leading-relaxed">
            Comparison is illustrative only. Product terms, eligibility, and costs vary by lender and program. This is not a recommendation of any financing product. All financing is subject to underwriting and approval by third-party providers.
          </p>
        </div>
      </section>

      {/* 6 ── Benefits and limitations */}
      <section className="py-14 border-t border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Considerations
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3 leading-snug max-w-2xl" style={{ textWrap: "balance" } as React.CSSProperties}>
            Benefits and limitations
          </h2>
          <p className="text-sm text-[#737373] mb-10 max-w-2xl leading-relaxed">
            Factoring can be a practical working capital tool for the right business, but it also comes with contractual obligations, costs, and tradeoffs that are worth understanding before entering an agreement.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-sm font-semibold text-[#0f0f0f] mb-5">Potential advantages</p>
              <div className="space-y-3.5">
                <BenefitRow text="Cash flow may improve without waiting on customer payment cycles — advances can be available in one to three business days after account setup on approved invoices." />
                <BenefitRow text="Approval is driven by your customers' credit quality rather than your business credit, which may make factoring accessible to early-stage companies or those with limited credit history." />
                <BenefitRow text="As your invoicing volume grows, the amount of capital potentially available through factoring can scale with it — unlike a fixed credit line." />
                <BenefitRow text="The factor handles collections from your customers, which may reduce the internal time and resources your team spends on accounts receivable follow-up." />
                <BenefitRow text="Non-recourse factoring programs transfer certain credit default risks to the factor — though these programs typically come with narrower eligibility and higher fees." />
                <BenefitRow text="Factoring does not require equity dilution, making it a non-dilutive working capital option for businesses that want to maintain ownership." />
              </div>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <p className="text-sm font-semibold text-[#0f0f0f] mb-5">Limitations to consider</p>
              <div className="space-y-3.5">
                <LimitRow text="Factoring fees, when expressed as an annualized cost, can be significantly higher than traditional bank financing. The total cost depends on how long invoices remain outstanding and the applicable rate." />
                <LimitRow text="Under recourse factoring — the most common structure — your business is responsible for buying back or covering unpaid invoices if your customer defaults, which creates contingent liability." />
                <LimitRow text="Many full-ledger agreements require you to factor all or most of your receivables from designated customers, limiting your flexibility to pick and choose invoices." />
                <LimitRow text="Customers are notified of the assignment in standard notification factoring, which changes the payment relationship and may require disclosure conversations with key accounts." />
                <LimitRow text="The factor files a UCC-1 lien against your receivables, which may affect your ability to obtain other financing while the factoring facility is active." />
                <LimitRow text="Factoring is dependent on having invoiced receivables to submit. Businesses with very long project cycles, milestone billing, or consumer-facing revenue models may find it difficult to qualify." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 ── FAQ */}
      <FAQ
        title="Factoring Questions"
        items={FAQ_ITEMS}
      />

      {/* 8 ── CTA */}
      <CTASection
        headline="Explore whether factoring may be a fit"
        subtext="ZEO works with businesses to review available receivables financing paths. Submit a brief intake to see which options may be worth pursuing — subject to underwriting and third-party approval."
        primaryLabel="Start an Intake"
        primaryHref="/apply"
        secondaryLabel="Compare Factoring Products"
        secondaryHref="/factoring"
      />

      {/* 9 ── Disclaimer */}
      <section className="pb-10 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="factoring" />
        </div>
      </section>

      {/* 10 ── Calculator link (mobile-visible inline, desktop shown in sticky sidebar above) */}
      <section className="py-8 border-t border-[#e5e5e5] bg-[#ffffff] lg:hidden">
        <div className="max-w-3xl mx-auto px-5">
          <Link
            href="/calculators/invoice-factoring-calculator"
            className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] hover:border-[#0f0f0f]/40 hover:bg-[#f5f5f5] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="text-[#0f0f0f]">
                <CalcIcon />
              </div>
              <div>
                <p className="text-sm font-medium text-[#0f0f0f]">Invoice Factoring Calculator</p>
                <p className="text-xs text-[#a3a3a3]">Estimate advance amounts and net proceeds</p>
              </div>
            </div>
            <ArrowRightIcon className="text-[#a3a3a3] group-hover:text-[#333333] transition-colors" />
          </Link>
        </div>
      </section>
    </>
  );
}

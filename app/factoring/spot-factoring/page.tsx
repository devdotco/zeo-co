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
  title: "Spot Factoring - Single Invoice Advance | ZEO.co",
  description:
    "Spot factoring lets businesses advance cash on individual invoices without a long-term contract. Learn how single-invoice factoring works, typical advance rates, fee structures, and whether it may be a fit for your business.",
  path: "/factoring/spot-factoring",
  keywords: [
    "spot factoring",
    "single invoice factoring",
    "one-off factoring",
    "no contract factoring",
    "selective invoice factoring",
    "invoice advance",
    "accounts receivable factoring",
  ],
});

const breadcrumbs = [
  { label: "Factoring", href: "/factoring" },
  { label: "Spot Factoring" },
];

const faqItems = [
  {
    q: "Can I factor just one invoice without signing a long-term agreement?",
    a: "Spot factoring is specifically designed for single-invoice or selective transactions. Unlike whole-ledger factoring programs that require you to factor all receivables from certain customers, spot factoring typically allows you to choose which invoices to advance on, with no minimum volume commitment. Terms vary by provider and are subject to underwriting review.",
  },
  {
    q: "What types of invoices are generally acceptable for spot factoring?",
    a: "Most spot factoring providers focus on B2B or B2G invoices — commercial or government customers with verifiable creditworthiness. Invoices from consumers, highly disputed receivables, heavily contra-offset accounts, or from debtors with known financial distress are typically declined. Invoice age, net terms, and debtor credit quality are the primary eligibility factors.",
  },
  {
    q: "How quickly are funds typically advanced after submitting an invoice?",
    a: "Initial onboarding and verification can take one to three business days. Once a factoring account is established and the debtor is verified, subsequent advances on approved invoices may be processed within 24 to 48 hours. Specific timing depends on the provider, debtor verification requirements, and documentation completeness.",
  },
  {
    q: "What happens if my customer doesn't pay the invoice?",
    a: "This depends on whether your agreement is recourse or non-recourse. In a recourse arrangement, you may be required to buy back unpaid invoices after a defined period — typically 60 to 90 days. In a non-recourse arrangement, the factor absorbs the credit risk of debtor insolvency, though disputes and non-payment for other reasons may still revert to you. Review the specific recourse provisions in any agreement before signing.",
  },
  {
    q: "Is spot factoring a good fit for seasonal or project-based businesses?",
    a: "Spot factoring is often evaluated by businesses that have irregular or unpredictable invoice volume — including contractors, staffing firms, seasonal distributors, and project-based service providers. Because there's typically no minimum volume requirement, it may align with businesses that have occasional large receivables rather than steady monthly invoice flow. Each situation is subject to provider underwriting and approval.",
  },
];

const comparisonRows = [
  {
    feature: "Contract required",
    "Spot Factoring": "No minimum contract",
    "Whole-Ledger Factoring": "Ongoing agreement",
    "Line of Credit": "Annual renewal",
  },
  {
    feature: "Invoice selectivity",
    "Spot Factoring": "Choose individual invoices",
    "Whole-Ledger Factoring": "Factor all from a debtor",
    "Line of Credit": "Not invoice-based",
  },
  {
    feature: "Typical advance rate",
    "Spot Factoring": "70% – 90%",
    "Whole-Ledger Factoring": "75% – 92%",
    "Line of Credit": "N/A (draw-based)",
  },
  {
    feature: "Credit based on",
    "Spot Factoring": "Debtor creditworthiness",
    "Whole-Ledger Factoring": "Debtor creditworthiness",
    "Line of Credit": "Borrower creditworthiness",
  },
  {
    feature: "Speed to first funding",
    "Spot Factoring": "1 – 3 business days",
    "Whole-Ledger Factoring": "3 – 7 business days",
    "Line of Credit": "Days to weeks",
  },
  {
    feature: "Fee per invoice",
    "Spot Factoring": "Often higher per-invoice",
    "Whole-Ledger Factoring": "Often lower per-invoice",
    "Line of Credit": "Interest accrues on draws",
  },
];

export default function SpotFactoringPage() {
  return (
    <main className="bg-[#0a0d0b] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Factoring"
        title="Spot Factoring"
        subtitle="Advance cash on individual invoices — one at a time, with no long-term contract commitment. Spot factoring may be worth evaluating when you have a specific receivable and need liquidity before your customer pays."
      />

      {/* What is spot factoring */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Overview
              </p>
              <h2 className="text-2xl font-semibold text-white mb-5 leading-snug">
                What is spot factoring?
              </h2>
              <div className="space-y-4 text-[#9aaa98] text-sm leading-relaxed">
                <p>
                  Spot factoring — sometimes called selective invoice factoring or single-invoice
                  factoring — is a transaction in which a business sells one or more individual
                  accounts receivable to a third-party factoring company in exchange for an
                  immediate cash advance. Unlike traditional whole-ledger factoring programs, spot
                  factoring does not require you to assign your entire receivables book to a factor
                  or commit to a minimum monthly volume.
                </p>
                <p>
                  The factoring company advances a percentage of the invoice face value — typically
                  expressed as an advance rate — and holds a reserve. When your customer pays the
                  invoice in full, the factor releases the reserve minus its fees. The net result is
                  that you receive most of the invoice value upfront rather than waiting 30, 60, or
                  90 days for your customer to remit payment.
                </p>
                <p>
                  Because the factor's primary credit analysis focuses on your customer's
                  (the debtor's) ability to pay rather than your business's own credit profile, spot
                  factoring may be accessible to businesses that are earlier-stage, have limited
                  credit history, or carry other characteristics that complicate traditional lending
                  — provided the underlying invoices are from creditworthy commercial customers.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Common Users
              </p>
              <h2 className="text-2xl font-semibold text-white mb-5 leading-snug">
                Who typically evaluates spot factoring?
              </h2>
              <div className="space-y-3">
                {[
                  {
                    title: "Staffing and professional services firms",
                    desc: "Companies billing corporate clients on net-30 to net-60 terms often carry significant payroll obligations before client payments arrive.",
                  },
                  {
                    title: "Transportation and freight brokers",
                    desc: "Carriers and brokers with slow-paying shipper relationships may factor individual load invoices to manage cash flow between hauls.",
                  },
                  {
                    title: "Government contractors",
                    desc: "Businesses invoicing federal, state, or municipal agencies — which can have extended payment timelines — may find single-invoice advances useful for project-by-project needs.",
                  },
                  {
                    title: "Seasonal or project-based businesses",
                    desc: "Companies with uneven invoice volume may prefer the flexibility of advancing only when needed rather than committing to a monthly minimum.",
                  },
                  {
                    title: "Wholesale and distribution",
                    desc: "Distributors with large single-purchase-order invoices from retail chains or large buyers may factor individual transactions to restock inventory or meet supplier terms.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-4 rounded-xl border border-[#1e2620] bg-[#111512]"
                  >
                    <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-[#0f2a14] border border-[#22c55e]/30 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M2.5 5L4.5 7L7.5 3"
                          stroke="#22c55e"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[0.8125rem] font-medium text-[#eef2ec] mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advance/reserve cycle */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              How it works
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">
              The advance and reserve cycle
            </h2>
            <p className="text-[#9aaa98] text-sm leading-relaxed">
              Spot factoring follows a defined transaction cycle from invoice submission to final
              settlement. Understanding how the advance, reserve, and fee interact helps you
              evaluate the actual cost and net proceeds of any transaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                step: "01",
                label: "Submit invoice",
                desc: "You submit the invoice and supporting documentation to the factor for underwriting review. The factor verifies the debtor's creditworthiness and confirms the invoice is valid, undisputed, and eligible.",
              },
              {
                step: "02",
                label: "Receive advance",
                desc: "Upon approval, the factor advances a percentage of the invoice face value — the advance rate — directly to your business account. The remaining balance is held as a reserve.",
              },
              {
                step: "03",
                label: "Debtor pays factor",
                desc: "Your customer is typically notified that the invoice has been assigned and remits payment directly to the factor's designated lockbox or account when payment comes due.",
              },
              {
                step: "04",
                label: "Reserve released minus fees",
                desc: "Once the factor receives full payment from your customer, it releases the reserve balance to you, less its factoring fee. Your net proceeds equal: advance + reserve release − fees.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[#1e2620] bg-[#111512] p-5"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[#22c55e] mb-3">
                  Step {item.step}
                </p>
                <p className="text-sm font-semibold text-white mb-2">{item.label}</p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Worked example */}
          <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-4">
              Illustrative example — not a quote or guarantee
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-[#6b7e69] mb-1">Invoice face value</p>
                <p className="text-xl font-semibold text-white tabular-nums">$50,000</p>
              </div>
              <div>
                <p className="text-xs text-[#6b7e69] mb-1">Advance (80%)</p>
                <p className="text-xl font-semibold text-[#22c55e] tabular-nums">$40,000</p>
                <p className="text-xs text-[#6b7e69] mt-1">Received at funding</p>
              </div>
              <div>
                <p className="text-xs text-[#6b7e69] mb-1">Reserve (20%)</p>
                <p className="text-xl font-semibold text-white tabular-nums">$10,000</p>
                <p className="text-xs text-[#6b7e69] mt-1">Held until customer pays</p>
              </div>
              <div>
                <p className="text-xs text-[#6b7e69] mb-1">Reserve release (after 3% fee)</p>
                <p className="text-xl font-semibold text-white tabular-nums">$8,500</p>
                <p className="text-xs text-[#6b7e69] mt-1">$10,000 − $1,500 fee</p>
              </div>
            </div>
            <p className="text-xs text-[#6b7e69] mt-5 border-t border-[#1e2620] pt-4">
              This is a simplified illustration only. Actual advance rates, reserve percentages,
              and fee structures vary by provider, invoice size, debtor credit quality, and invoice
              terms. Subject to underwriting and third-party provider approval.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Eligibility
              </p>
              <h2 className="text-2xl font-semibold text-white mb-5">
                Business and invoice requirements
              </h2>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-6">
                Spot factoring underwriting centers on the quality of the invoice and the
                creditworthiness of your customer. Requirements vary by provider; the following
                represent commonly cited criteria across the market — not a guarantee of approval.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#eef2ec] mb-3">
                    Business requirements
                  </p>
                  <div className="space-y-2">
                    {[
                      "Registered U.S. business entity (LLC, Corp, or partnership)",
                      "Active EIN and business bank account",
                      "Invoices must be to B2B or B2G customers — not consumers",
                      "No open tax liens or existing blanket UCC liens that conflict with the factoring facility",
                      "Goods or services must be fully delivered or rendered before factoring",
                    ].map((item) => (
                      <div key={item} className="flex gap-2.5 text-xs text-[#6b7e69]">
                        <svg
                          className="flex-shrink-0 mt-0.5 text-[#22c55e]"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2.5 6L5 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#eef2ec] mb-3">
                    Invoice criteria
                  </p>
                  <div className="space-y-2">
                    {[
                      "Invoice is valid, undisputed, and free of offsets or contra-deals",
                      "Net payment terms are clearly stated (net-30, net-45, net-60, etc.)",
                      "Minimum invoice size requirements vary widely — often $5,000 or more",
                      "No pre-billing: invoice must represent completed work or shipped goods",
                      "Debtor must be verifiable with a satisfactory commercial credit profile",
                      "Invoice must be assignable — some contracts with debtors prohibit assignment",
                    ].map((item) => (
                      <div key={item} className="flex gap-2.5 text-xs text-[#6b7e69]">
                        <svg
                          className="flex-shrink-0 mt-0.5 text-[#22c55e]"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2.5 6L5 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Documentation
              </p>
              <h2 className="text-2xl font-semibold text-white mb-5">
                Typical documentation checklist
              </h2>
              <p className="text-[#9aaa98] text-sm leading-relaxed mb-6">
                Most spot factoring applications require a focused set of documents. Exact
                requirements depend on the provider and invoice size — larger transactions may
                involve additional diligence.
              </p>
              <div className="space-y-2">
                {[
                  {
                    doc: "The invoice itself",
                    note: "With purchase order or contract number if applicable",
                  },
                  {
                    doc: "Proof of delivery or completion",
                    note: "Signed delivery receipt, BOL, timesheet, or equivalent",
                  },
                  {
                    doc: "Business formation documents",
                    note: "Articles of incorporation, LLC operating agreement, or partnership agreement",
                  },
                  {
                    doc: "Government-issued ID",
                    note: "For all owners with significant equity stake",
                  },
                  {
                    doc: "Voided business check",
                    note: "For advance deposit ACH",
                  },
                  {
                    doc: "Notice of assignment",
                    note: "Signed instruction to debtor directing payment to factor",
                  },
                  {
                    doc: "Recent bank statements",
                    note: "Typically 3 months; some providers may waive for small invoices",
                  },
                ].map((item) => (
                  <div
                    key={item.doc}
                    className="flex items-start gap-3 p-3 rounded-lg border border-[#1e2620] bg-[#111512]"
                  >
                    <div className="mt-0.5 flex-shrink-0 h-4 w-4 rounded bg-[#1e2620] flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path
                          d="M1.5 4L3.5 6L6.5 2"
                          stroke="#22c55e"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#eef2ec]">{item.doc}</p>
                      <p className="text-xs text-[#6b7e69]">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advance rates and fees */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Rates and fees
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Advance rates and fee ranges
            </h2>
            <p className="text-[#9aaa98] text-sm leading-relaxed">
              The ranges below reflect general market observations and are not quotes, offers, or
              guarantees. Actual terms are determined by individual providers based on debtor
              credit quality, invoice size, industry, payment history, and other underwriting
              factors. All financing is subject to third-party provider approval.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <MetricCard
              label="Advance rate range"
              value="70% – 90%"
              note="Of invoice face value at funding. Varies by debtor credit and invoice terms."
            />
            <MetricCard
              label="Factoring fee range"
              value="1.5% – 5%"
              unit="per invoice"
              note="Per invoice, often quoted per 30-day period the invoice remains outstanding."
            />
            <MetricCard
              label="Typical invoice minimum"
              value="$5K – $25K"
              note="Minimums vary significantly by provider. Some specialize in micro-invoices."
            />
            <MetricCard
              label="Time to advance"
              value="24 – 72 hrs"
              note="After initial onboarding. First-time transactions may take longer."
              highlight
            />
          </div>

          <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6">
            <p className="text-sm font-semibold text-[#eef2ec] mb-4">
              Fee structure variations to understand
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-medium text-[#eef2ec] mb-2">Flat fee per invoice</p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">
                  Some providers charge a single percentage of the invoice face value regardless of
                  how quickly the debtor pays. This is straightforward to model but may be more
                  expensive if your customers pay early.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#eef2ec] mb-2">Tiered per-period fee</p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">
                  Other providers charge a base fee for the first period (often 30 days) with an
                  additional increment for each subsequent period the invoice is outstanding. Early
                  customer payment reduces your effective cost; late payment increases it.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#eef2ec] mb-2">
                  Additional fees to review
                </p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">
                  Application fees, due diligence fees, wire transfer fees, UCC filing fees, and
                  early termination charges may apply. Request a full fee schedule before signing
                  any agreement and review it with qualified counsel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and limitations */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Fit assessment
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Potential benefits and limitations
            </h2>
            <p className="text-[#9aaa98] text-sm leading-relaxed">
              Spot factoring may be a useful tool in certain situations and a poor fit in others.
              Consider both dimensions carefully before pursuing any financing arrangement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* Benefits */}
            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#22c55e] mb-5">
                Potential benefits
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "No long-term contract obligation",
                    desc: "Spot factoring typically requires no minimum volume commitment, making it worth evaluating for businesses with irregular or unpredictable invoice flow.",
                  },
                  {
                    title: "Approval may focus on your customer's credit",
                    desc: "Since the factor's primary risk analysis centers on the debtor's ability to pay, businesses with limited credit history or early-stage financials may still qualify if their customers are creditworthy.",
                  },
                  {
                    title: "Speed relative to traditional lending",
                    desc: "Once a factoring relationship is established, individual invoice advances can often be processed more quickly than drawing on a traditional credit facility.",
                  },
                  {
                    title: "Off-balance-sheet flexibility",
                    desc: "Depending on accounting treatment, factoring may be classified differently than debt. Consult your accountant — this varies by arrangement type.",
                  },
                  {
                    title: "Collections support",
                    desc: "Some factors handle collections and payment reminders, potentially reducing administrative burden — though this also means your customer will interact with the factor.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6.5" stroke="#22c55e" strokeOpacity="0.3" />
                        <path
                          d="M4.5 7L6.5 9L9.5 5"
                          stroke="#22c55e"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#eef2ec] mb-0.5">{item.title}</p>
                      <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitations */}
            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#9aaa98] mb-5">
                Limitations and considerations
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Per-invoice cost is often higher",
                    desc: "Because spot factoring lacks the volume and contract commitment of whole-ledger programs, per-invoice fees tend to be higher. For businesses with steady, predictable invoice flow, a contract factoring program may offer lower per-invoice pricing.",
                  },
                  {
                    title: "Recourse obligations may apply",
                    desc: "In a recourse arrangement — which is common — you may be required to buy back invoices that remain unpaid after a defined period, regardless of the reason. This creates contingent liability that must be understood before entering any agreement.",
                  },
                  {
                    title: "Customer notification requirements",
                    desc: "Most factoring arrangements require that your customer be notified the invoice has been assigned and directed to pay the factor. Some customers object to this arrangement or may view it as a signal of financial instability.",
                  },
                  {
                    title: "Not all invoices qualify",
                    desc: "Invoices from consumer customers, invoices with assignment restrictions in the underlying contract, pre-bills, disputed invoices, and invoices from financially stressed debtors are typically ineligible.",
                  },
                  {
                    title: "UCC filing may be required",
                    desc: "Factors typically file a UCC-1 lien against your receivables as security. This may affect your ability to obtain other financing that requires a clean lien position.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6.5" stroke="#6b7e69" strokeOpacity="0.4" />
                        <path
                          d="M5 9L9 5M5 5L9 9"
                          stroke="#6b7e69"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#eef2ec] mb-0.5">{item.title}</p>
                      <p className="text-xs text-[#6b7e69] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div>
            <p className="text-sm font-semibold text-[#eef2ec] mb-4">
              Spot factoring vs. related financing options
            </p>
            <ComparisonTable
              columns={["Spot Factoring", "Whole-Ledger Factoring", "Line of Credit"]}
              rows={comparisonRows}
              highlightCol="Spot Factoring"
            />
            <p className="text-xs text-[#6b7e69] mt-3">
              Comparison reflects general market characteristics and is not a representation of
              any specific provider's product terms. All options are subject to underwriting and
              third-party provider approval.
            </p>
          </div>
        </div>
      </section>

      {/* Related factoring types */}
      <section className="py-16 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Related options
            </p>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Other factoring structures to evaluate
            </h2>
            <p className="text-[#9aaa98] text-sm">
              Spot factoring is one of several invoice-based financing structures. Depending on
              your invoice volume, industry, and debtor mix, another approach may be a better fit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FinancingPathCard
              href="/factoring/recourse-factoring"
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 9H15M15 9L10 4M15 9L10 14"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Recourse Factoring"
              description="Factor invoices with the understanding that unpaid receivables may be bought back. Often carries lower fees than non-recourse arrangements."
              tags={["Lower fees", "Buyback obligation", "Broad availability"]}
            />
            <FinancingPathCard
              href="/factoring/non-recourse-factoring"
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 3L9 15M9 3L5 7M9 3L13 7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Non-Recourse Factoring"
              description="The factor absorbs credit risk on debtor insolvency. Generally carries higher fees and stricter debtor credit requirements."
              tags={["Credit risk transfer", "Higher cost", "Debtor-dependent"]}
            />
            <FinancingPathCard
              href="/factoring/construction-factoring"
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect
                    x="3"
                    y="10"
                    width="12"
                    height="5"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M6 10V7M9 10V5M12 10V7"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Construction Factoring"
              description="Specialized factoring for contractors and subcontractors navigating retainage, AIA billing, and progress-based payment structures."
              tags={["Contractors", "Retainage", "Progress billing"]}
            />
          </div>
        </div>
      </section>

      {/* Calculator callout */}
      <section className="py-12 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl border border-[#1e2620] bg-[#111512]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-[#0a0d0b] border border-[#1e2620] flex items-center justify-center text-[#22c55e]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="12"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M6 9H12M9 6V12"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#eef2ec]">Invoice Factoring Calculator</p>
                <p className="text-xs text-[#6b7e69] mt-0.5">
                  Estimate advance amounts, reserve balances, and net proceeds for a factoring
                  scenario. Results are illustrative estimates only — not offers or guarantees.
                </p>
              </div>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-5 py-2.5 rounded-lg bg-[#111512] border border-[#1e2620] text-[#9aaa98] text-sm hover:text-white hover:border-[#22c55e]/50 transition-colors"
            >
              Open calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Spot factoring — common questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="See if spot factoring may be a fit for your business"
        subtext="Submit a brief intake and ZEO will review potential factoring and invoice financing paths that may align with your receivables profile. Subject to underwriting by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Explore All Factoring Options"
        secondaryHref="/factoring"
        variant="dark"
      />

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="factoring" />
      </div>
    </main>
  );
}

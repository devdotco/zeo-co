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
  title: "Trucking and Freight Factoring | ZEO.co",
  description:
    "Trucking factoring lets carriers and owner-operators convert freight bills into same-day or next-day cash. Learn how advance rates, fuel advance programs, and NOA requirements work before you apply.",
  path: "/factoring/trucking",
  keywords: [
    "trucking factoring",
    "freight factoring",
    "carrier factoring",
    "owner operator factoring",
    "freight bill factoring",
    "fuel advance factoring",
    "transportation factoring",
    "truck driver cash flow",
  ],
});

const faqItems = [
  {
    q: "Can owner-operators with a new MC number qualify for trucking factoring?",
    a: "Many trucking-focused factoring companies will work with carriers that have recently obtained their MC number, sometimes with as little as 30 to 90 days of operating authority. Approval in these cases depends heavily on the creditworthiness of the shippers and brokers you haul for, rather than your own business history. Some factors require a minimum number of completed loads or a minimum monthly volume. Requirements vary by factor and are subject to underwriting — no approval is guaranteed.",
  },
  {
    q: "What is a notice of assignment (NOA) and does it affect broker relationships?",
    a: "A notice of assignment (NOA) is a formal notification sent to the freight broker or shipper informing them that your invoices have been assigned to a factoring company and that payment should be remitted directly to the factor's lockbox. Most brokers and shippers in the industry are familiar with NOAs and process them routinely. Some carriers are concerned this will affect their relationships, but NOAs are standard practice in trucking. That said, it is worth verifying that any broker agreement you've signed does not restrict assignment — some contracts include anti-assignment clauses that require separate consent.",
  },
  {
    q: "How does a fuel advance work with a trucking factoring account?",
    a: "Many trucking factors offer fuel advances — sometimes called same-day advances or pre-funding — that allow carriers to receive a portion of a load's value before the load is delivered and invoiced. A typical fuel advance may cover 30% to 50% of the expected invoice amount and is disbursed when you submit a signed rate confirmation or bill of lading. The remaining balance, minus the factoring fee, is released once the load is delivered, the invoice is submitted, and the broker or shipper has been notified. Fuel advance programs, terms, and eligibility vary by factor.",
  },
  {
    q: "What documents do trucking factors typically require per load?",
    a: "Standard documentation for a trucking factoring submission typically includes the signed rate confirmation, the proof of delivery (POD) or bill of lading (BOL) signed by the consignee, and a completed invoice to the broker or shipper. Some factors also require a copy of your carrier agreement with the broker, your Certificate of Insurance naming the factor, and W-9 or EIN verification at onboarding. Factors may also require that the broker or shipper be verified in their system before a load can be funded. Documentation requirements differ by factor; confirm exactly what is needed before onboarding.",
  },
  {
    q: "What happens if a broker or shipper disputes the invoice or goes out of business?",
    a: "This depends on whether you have a recourse or non-recourse factoring agreement. Under recourse factoring — the more common structure — you remain liable for the invoice if the broker or shipper fails to pay, regardless of the reason. The factor will typically require you to buy back the invoice or substitute another. Under non-recourse factoring, the factor absorbs the credit risk of the debtor's insolvency, but not disputes, slow payment, or performance issues. Non-recourse programs in trucking may carry higher fees and typically cover only specific insolvency scenarios. Review your agreement carefully to understand exactly what recourse obligations apply to your account.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Trucking Factoring": "Freight invoices / BOL",
    "Bank Line of Credit": "Overall creditworthiness",
    "Working Capital Loan": "Revenue / DSCR",
  },
  {
    feature: "Primary credit review",
    "Trucking Factoring": "Broker / shipper credit",
    "Bank Line of Credit": "Owner & business credit",
    "Working Capital Loan": "Business revenue & credit",
  },
  {
    feature: "Typical funding speed",
    "Trucking Factoring": "Same day – 24 hrs",
    "Bank Line of Credit": "Weeks to months",
    "Working Capital Loan": "2–5 business days",
  },
  {
    feature: "New MC number eligible",
    "Trucking Factoring": "Often yes",
    "Bank Line of Credit": "Rarely",
    "Working Capital Loan": "Rarely",
  },
  {
    feature: "Fuel advance available",
    "Trucking Factoring": "Yes (many factors)",
    "Bank Line of Credit": "No",
    "Working Capital Loan": "No",
  },
  {
    feature: "Customer notification required",
    "Trucking Factoring": "Yes — NOA to broker",
    "Bank Line of Credit": "No",
    "Working Capital Loan": "No",
  },
  {
    feature: "UCC filing",
    "Trucking Factoring": "Yes — on receivables",
    "Bank Line of Credit": "Often — blanket lien",
    "Working Capital Loan": "Often — blanket lien",
  },
];

export default function TruckingFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Trucking Factoring"
        subtitle="Carriers and owner-operators haul loads on net-30 to net-60 payment terms while fuel, insurance, and repairs can't wait. Trucking factoring converts freight bills into same-day or next-day cash — subject to underwriting by third-party providers."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Trucking Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="85–97%"
              note="Subject to broker/shipper creditworthiness and load documentation"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1.5–5%"
              unit="per invoice"
              note="Varies by volume, payment terms, and recourse structure"
            />
            <MetricCard
              label="Funding After Onboarding"
              value="Same day"
              note="Most trucking factors fund within hours of POD submission"
              highlight
            />
            <MetricCard
              label="Fuel Advance"
              value="30–50%"
              note="Available from many trucking factors upon load acceptance"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are illustrative only. Actual advance rates, fuel advance availability, and fees are subject to underwriting by third-party providers and are not guaranteed.
          </p>
        </div>
      </section>

      {/* What is trucking factoring */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            What Is Trucking Factoring?
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Trucking factoring — also called freight factoring or freight bill factoring — is a form of accounts receivable financing designed specifically for the cash flow structure of the trucking industry. After a carrier completes a load and submits the invoice along with a signed proof of delivery, the factoring company advances a large percentage of the invoice value — often the same day — rather than waiting the 30, 45, or 60 days it takes the broker or shipper to pay.
            </p>
            <p>
              The factor then collects payment directly from the freight broker or shipper. Once the debtor pays in full, the factor releases the remaining reserve balance to the carrier, minus the factoring fee. For trucking businesses operating on thin margins with heavy fixed and variable operating costs — fuel, insurance, truck payments, permits, and driver pay — the ability to turn a delivered load into cash the same day it's invoiced can be a material operational advantage.
            </p>
            <p>
              Unlike most other forms of business financing, trucking factoring approval is driven primarily by the creditworthiness of the freight brokers and shippers you haul for, not by your own business's credit profile or time in operation. This makes it a frequently used tool for new authorities, small fleets, and owner-operators who may not yet qualify for traditional bank credit but regularly haul for established, creditworthy brokerage and shipper accounts.
            </p>
            <p>
              Trucking is one of the most established sectors for invoice factoring — many factors specialize exclusively in transportation and offer industry-specific services such as fuel advance programs, broker credit checks, load board integrations, and dedicated carrier portals. These features are generally not available through general-purpose commercial factoring programs.
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
              Carriers and Transportation Businesses That Commonly Use Trucking Factoring
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Trucking factoring is used across the transportation industry wherever invoices are issued to brokers or shippers with net payment terms. The common thread is a mismatch between when operating costs come due and when customers pay.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {/* Owner-operators */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Owner-Operators</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                A single-truck carrier operating under their own authority faces the same cash timing problem as a large fleet. Fuel, insurance premiums, and truck payments are due regardless of when brokers remit. Factoring may allow owner-operators to keep cash flowing between loads without drawing on personal savings or high-cost credit.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["New authority", "Single truck", "Lease-operator"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Small fleets */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="9" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M11 12h3l2-3V9h-5v3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="13.5" cy="15.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M3 9V6a2 2 0 012-2h4a2 2 0 012 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Small and Mid-Size Fleets</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Growing fleets often outpace their available working capital before they qualify for bank credit lines. When adding trucks means adding drivers and fuel obligations weeks before new receivables are collected, factoring can provide the bridge. Fleets with diversified broker relationships and consistent load volume are often well-positioned for factoring programs.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["2–20 trucks", "Mixed freight", "Growing authority"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Specialized carriers */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 13h14M2 13V8l4-5h6l4 5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 13V9h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Specialized Carriers</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Flatbed, refrigerated, tanker, heavy haul, and intermodal carriers often have higher per-load operating costs and can face longer invoice terms on specialized freight contracts. Some factors have specific programs for these segments. Eligibility and advance rates may differ from standard dry-van programs — confirm with individual factors.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Flatbed", "Reefer", "Tanker", "Heavy haul"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the advance/reserve cycle works — trucking specific */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            The Trucking Factoring Cycle: From Load Acceptance to Reserve Release
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
            Trucking factoring follows a load-by-load cycle that mirrors how carriers actually operate. Each step maps to a document you already produce as part of doing business.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "You accept the load and receive a signed rate confirmation",
                body: "After accepting a load from a broker or shipper, you receive a rate confirmation detailing the origin, destination, commodity, and agreed rate. Some factors will issue a fuel advance at this stage — typically 30% to 50% of the expected invoice — based on the rate confirmation alone, before the load is delivered.",
              },
              {
                step: "2",
                title: "You deliver the load and obtain a signed POD",
                body: "Upon delivery, the consignee signs the bill of lading or a separate proof of delivery document confirming that the freight was received. This signed POD is the primary document required to submit the invoice for factoring. The factor will not typically advance on an undelivered load outside of a fuel advance program.",
              },
              {
                step: "3",
                title: "You submit the invoice package to the factor",
                body: "You submit the rate confirmation, signed POD, and completed invoice to the factoring company — typically through an online portal, mobile app, or email. The factor verifies the documentation and confirms the broker's or shipper's credit status. Most trucking factors fund within a few hours of a complete submission during business hours.",
              },
              {
                step: "4",
                title: "The factor issues a notice of assignment and advances funds",
                body: "Upon approval, the factor sends a notice of assignment (NOA) to the freight broker or shipper, directing future payment to the factor's lockbox. The advance — commonly 85% to 97% of the invoice — is deposited to your bank account or a fuel card, depending on the factor's program. The remaining balance is held in reserve.",
              },
              {
                step: "5",
                title: "The broker or shipper pays the factor; reserve is released",
                body: "When the broker or shipper remits payment to the factor's lockbox — typically within 30 to 60 days of invoice date — the factor releases the reserve balance to you, minus the factoring fee. If the debtor pays slowly, tiered fee structures at some factors mean fees continue to accrue past the initial period. Under recourse agreements, if the broker fails to pay, you may be required to repurchase the invoice.",
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
              What Trucking Factors Typically Evaluate
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Qualification criteria vary significantly by factor. The items below represent commonly reviewed requirements. No approval or outcome is guaranteed — all decisions are subject to underwriting by third-party providers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Active Operating Authority (MC Number)",
                body: "You must hold active carrier authority issued by FMCSA. Most factors require the authority to be in active status, not revoked or pending reinstatement. Some factors will work with authorities as new as 30 to 90 days, while others require longer operational history. Confirm requirements with the specific factor.",
              },
              {
                title: "Commercial Auto and Cargo Insurance",
                body: "Carriers are required to maintain minimum liability and cargo insurance as a condition of their operating authority. Factoring companies typically require that they be listed as a certificate holder or additional insured on your policy, and may require certificate verification before onboarding. Insurance minimums vary by cargo type and authority classification.",
              },
              {
                title: "Creditworthy Brokers and Shippers",
                body: "The creditworthiness of your freight brokers and shippers is central to the factoring approval. Factors typically run credit checks on each broker or shipper before approving their loads. Loads from brokers with poor credit ratings or payment history may not be eligible, or may be funded at lower advance rates or excluded entirely.",
              },
              {
                title: "Clean, Signed Proof of Delivery",
                body: "Invoices must be supported by a clean, signed POD or bill of lading with no exceptions noted by the consignee. Freight with noted shortages, damage notations, or unsigned delivery receipts may not be eligible for factoring until the underlying issue is resolved.",
              },
              {
                title: "No Conflicting Liens on Receivables",
                body: "If you have an existing lender with a blanket UCC lien on your assets, that lender may have a claim on your receivables. Factoring companies file their own UCC-1 on your freight receivables during onboarding. An existing lien may need to be subordinated or released before factoring can proceed. This is a common issue for carriers transitioning from an equipment lender.",
              },
              {
                title: "Carrier Agreement and W-9",
                body: "Onboarding typically requires a signed factoring agreement, a W-9 for tax reporting purposes, a voided check for ACH deposits, and copies of your operating authority, MC number, and insurance certificate. Some factors also require a copy of your broker carrier agreement with each new broker relationship.",
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
            Advance Rates and Fee Structures in Trucking Factoring
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-6">
            Trucking factoring generally offers higher advance rates than many other industries due to the standardized, short-term nature of freight invoices. The figures below are illustrative market ranges only — they are not offers, commitments, or guarantees. All terms are subject to underwriting by a third-party provider.
          </p>
          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Advance Rate</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">85 – 97%</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Trucking factoring advance rates tend to be higher than general invoice factoring because freight invoices are short-term, standardized, and backed by verifiable delivery documentation. High-volume carriers with established broker relationships and consistent payment records may qualify for advance rates at the higher end of this range. Lower rates may apply to newer accounts, concentrated broker exposure, or carriers with limited track records.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Factoring Fee</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">1.5 – 5% per load</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Fees in trucking factoring are commonly structured as a flat rate per invoice or a tiered rate that steps up if the broker or shipper pays beyond a defined window — for example, 2% for payment within 30 days, with an additional 0.5% for each subsequent 10-day period. Because trucking brokers typically pay within 30 to 45 days, the initial rate is usually the dominant cost. Carriers with higher monthly volume often negotiate lower per-load rates. Always confirm the full fee schedule including minimum monthly fees, wire or ACH fees, and any termination penalties.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Fuel Advance Programs</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">30 – 50% of load value</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Many trucking-focused factors offer fuel advances — same-day disbursements issued when you accept a load, before delivery. A fuel advance is deducted from the final settlement when the full invoice is funded after delivery. Some factors issue fuel advances to a fuel card rather than a bank account. Fuel advance availability, amounts, and any associated fees vary by factor and program — confirm terms during onboarding.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Recourse vs. Non-Recourse</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">Affects fee and risk</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Recourse factoring — the more common structure — means you remain liable if the broker or shipper fails to pay. Non-recourse programs shift the credit risk of the debtor's insolvency to the factor, typically in exchange for higher fees or more stringent broker approval criteria. Non-recourse does not protect against disputes, short payments, or claims of defective delivery. Understand exactly what scenarios your agreement covers before choosing between structures.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] px-5 py-4">
            <p className="text-sm text-[#737373] leading-relaxed">
              <span className="text-[#0f0f0f] font-medium">Model your factoring cost before you sign.</span>{" "}
              The{" "}
              <Link
                href="/calculators/invoice-factoring-calculator"
                className="text-[#0f0f0f] underline underline-offset-2 hover:text-[#0f0f0f] transition-colors"
              >
                Invoice Factoring Calculator
              </Link>{" "}
              lets you estimate advance amounts, factoring fees, and reserve releases based on your load values and expected broker payment timing. All outputs are estimates only and do not represent an offer or commitment from any provider.
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
              Trucking Factoring vs. Other Working Capital Options
            </h2>
            <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
              No single product fits every situation. This table highlights structural differences between common working capital options for carriers — not endorsements or cost rankings. All terms are subject to underwriting; results vary by provider.
            </p>
          </div>
          <ComparisonTable
            columns={["Trucking Factoring", "Bank Line of Credit", "Working Capital Loan"]}
            rows={comparisonRows}
            highlightCol="Trucking Factoring"
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
              <h2 className="text-xl font-semibold text-white mb-5">What Trucking Factoring Can Offer</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Same-day cash on delivered loads",
                    body: "Trucking factors are set up to move quickly — most fund within hours of a clean invoice submission. For carriers that haul multiple loads per week, this can mean steady daily cash flow rather than waiting for broker payment cycles.",
                  },
                  {
                    title: "Approval based on your broker's credit, not yours",
                    body: "New authorities and carriers with limited business credit history may still qualify if they regularly haul for established, creditworthy freight brokers and shippers. The factor is effectively extending credit against the broker's ability to pay.",
                  },
                  {
                    title: "Fuel advance programs can cover upfront operating costs",
                    body: "Pre-load fuel advances allow carriers to fuel up and dispatch before delivering — removing the need to front fuel costs out of pocket or rely on personal credit cards between settlements.",
                  },
                  {
                    title: "Broker credit checks included with many programs",
                    body: "Many trucking factors provide in-house broker credit scoring as part of their service, alerting you before you haul for a broker with a poor payment record. This is a practical risk management tool beyond just financing.",
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
                    title: "Factoring fees reduce your effective rate per mile",
                    body: "On tight freight margins, a 2% to 5% factoring fee on every load can meaningfully affect net profitability. Carriers should calculate the cost per mile of their factoring program relative to the value of faster cash access and the alternatives available to them.",
                  },
                  {
                    title: "NOA requirements are standard but not universally accepted",
                    body: "While most brokers process NOAs without issue, some carriers have broker agreements that restrict assignment without prior written consent. Review your carrier agreements before onboarding with a factor to identify any anti-assignment provisions that could create complications.",
                  },
                  {
                    title: "Recourse liability if brokers don't pay",
                    body: "Under a recourse agreement — the most common structure in trucking factoring — you may be required to repurchase an invoice or substitute another if the broker fails to pay within the agreement's defined window. This is a direct financial obligation, not just a theoretical risk.",
                  },
                  {
                    title: "Minimum volume and contract term requirements",
                    body: "Many trucking factoring agreements include monthly minimum volume commitments and multi-month contract terms with early termination fees. Low-volume months or periods when freight is slow could trigger minimums. Understand the exit terms before signing a long-term factoring contract.",
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
                Estimate advance amounts, factoring fees, and reserve releases based on your load invoice values and broker payment timing assumptions. Outputs are estimates only.
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
        title="Trucking Factoring — Common Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Explore Whether Trucking Factoring May Be a Fit"
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

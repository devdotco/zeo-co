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
  title: "Invoice Factoring Requirements | ZEO.co",
  description:
    "Understand what factoring companies typically evaluate before funding: invoice criteria, customer creditworthiness, advance rates, fee structures, and common disqualifiers. Subject to underwriting by third-party providers.",
  path: "/factoring/requirements",
  keywords: [
    "invoice factoring requirements",
    "factoring eligibility",
    "factoring criteria",
    "invoice factoring qualifications",
    "factoring advance rates",
    "factoring fees",
    "invoice quality requirements",
    "factoring company criteria",
  ],
});

const faqItems = [
  {
    q: "Does my business need good credit to qualify for factoring?",
    a: "Your personal and business credit scores are less central to factoring approval than they are to a traditional bank loan. Factoring companies primarily assess the creditworthiness of the businesses you invoice — your customers — since those customers are the ones making the payments the factor relies on. That said, your business credit history, tax status, and any existing judgments or liens are typically still reviewed during onboarding. Businesses with credit challenges may still qualify if they invoice creditworthy commercial customers.",
  },
  {
    q: "What kinds of invoices will a factor typically decline to purchase?",
    a: "Factors generally decline invoices that are disputed, subject to offset or counterclaims, already pledged to another lender, or issued to customers with poor payment histories. Consumer-facing invoices (B2C) are typically ineligible. Pre-billed invoices — those issued before goods are shipped or services are fully delivered — are commonly rejected, as are invoices with unusual payment structures such as conditional acceptance clauses or milestone-based payment terms.",
  },
  {
    q: "How does the factoring fee work, and what am I actually paying?",
    a: "Factoring fees are typically calculated as a percentage of the invoice face value, often quoted on a weekly or monthly basis. For example, a fee of 1% every 30 days on a $50,000 invoice is $500 per month the invoice remains outstanding. Some factors charge a flat discount rate; others use a tiered structure where the fee increases the longer a customer takes to pay. You should also review any ancillary charges: wire fees, same-day funding fees, minimum monthly volume fees, unused line fees, and early termination fees — all of which affect the total cost of the arrangement.",
  },
  {
    q: "Will my customers know I am factoring their invoices?",
    a: "In the most common factoring structure — notification factoring — yes. Your customers receive a notice of assignment and are directed to remit payment to the factor's lockbox or designated account. For many industries (staffing, trucking, government contracting), this is standard practice and customers are accustomed to it. Non-notification programs exist but are less common and may carry different pricing or underwriting requirements. Whether notification is required under your specific arrangement depends on the factor and the contract terms.",
  },
  {
    q: "What is a UCC-1 filing and does factoring require one?",
    a: "A UCC-1 (Uniform Commercial Code financing statement) is a public lien filing that gives a factoring company a security interest in the receivables you assign to them. Most factoring arrangements require a UCC-1 filing against your business as a condition of funding. This means an existing blanket lien from a bank or prior lender can complicate or block new factoring arrangements unless the existing lienholder agrees to subordinate or terminate their lien on receivables. Reviewing your existing credit agreements and lien position before applying for factoring is advisable.",
  },
];

const comparisonRows = [
  {
    feature: "Primary approval factor",
    "Invoice Factoring": "Customer creditworthiness",
    "Business Term Loan": "Business financials & credit",
    "Line of Credit": "Overall creditworthiness",
  },
  {
    feature: "Time in business requirement",
    "Invoice Factoring": "Less critical (varies)",
    "Business Term Loan": "Typically 2+ years",
    "Line of Credit": "Typically 1–2+ years",
  },
  {
    feature: "Revenue minimum",
    "Invoice Factoring": "Varies widely by factor",
    "Business Term Loan": "Usually $100K–$250K+/yr",
    "Line of Credit": "Usually $100K+/yr",
  },
  {
    feature: "Invoice/receivable requirement",
    "Invoice Factoring": "Required — B2B invoices",
    "Business Term Loan": "Not required",
    "Line of Credit": "Not required",
  },
  {
    feature: "Personal guarantee",
    "Invoice Factoring": "Often required",
    "Business Term Loan": "Typically required",
    "Line of Credit": "Typically required",
  },
  {
    feature: "UCC lien filing",
    "Invoice Factoring": "Standard practice",
    "Business Term Loan": "Standard practice",
    "Line of Credit": "Common",
  },
  {
    feature: "Customer notification",
    "Invoice Factoring": "Typically required",
    "Business Term Loan": "Not applicable",
    "Line of Credit": "Not applicable",
  },
];

export default function FactoringRequirementsPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Factoring Requirements"
        subtitle="Invoice factoring approval depends primarily on the quality of your receivables and the creditworthiness of your customers — not just your own business history. Here is what third-party providers typically evaluate before funding."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Requirements" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="70–90%"
              note="Subject to customer credit quality and invoice type"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1–5%"
              unit="per invoice"
              note="Varies by industry, volume, and payment terms"
            />
            <MetricCard
              label="Minimum Invoice Volume"
              value="Varies"
              note="Some factors require $10K–$50K+ per month"
            />
            <MetricCard
              label="Funding After Onboarding"
              value="24–48"
              unit="hrs"
              note="For approved invoices after account is established"
              highlight
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are illustrative only. Actual advance rates, fees, and minimum volume thresholds are subject to underwriting by third-party providers and are not guaranteed.
          </p>
        </div>
      </section>

      {/* What factoring is / who uses it */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            What Invoice Factoring Is — and Who It Is Designed For
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Invoice factoring is a receivables financing arrangement in which a business sells its outstanding invoices to a third-party factoring company — the factor — at a discount in exchange for an immediate cash advance. Rather than waiting 30, 60, or 90 days for customers to pay, the business receives a portion of the invoice value upfront, typically within one to two business days after the invoice is verified and approved.
            </p>
            <p>
              Because repayment comes from your customers — not directly from your operating cash flow — factoring is structured around the creditworthiness of the businesses you bill, not solely around your own credit profile. This makes it a potential fit for companies that are growing quickly, have limited operating history, or carry thin balance sheets but invoice financially stable commercial customers.
            </p>
            <p>
              Factoring is most commonly used by B2B businesses with predictable invoicing cycles: staffing agencies, freight brokers, manufacturers, distributors, government contractors, and professional services firms. It is generally not applicable to businesses that collect at the point of sale, issue consumer invoices, or operate in industries with historically high dispute rates. Understanding whether your receivables profile may qualify is the first step in evaluating this type of financing.
            </p>
          </div>
        </div>
      </section>

      {/* Who uses it — industry cards */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Common Industries
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              Businesses That Commonly Use Invoice Factoring
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              These industries appear frequently in factoring because their revenue model — completing work and waiting on net-term payment — creates a recurring cash flow gap that factoring is structured to address.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M5 5V4a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              }
              title="Staffing and Workforce"
              description="Staffing agencies invoice clients weekly or bi-weekly while payroll obligations are due on a fixed schedule. Factoring bridges the timing gap between payroll and client payment."
              tags={["Temporary staffing", "Contract workforce", "PEO"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 14h14M4 14V9l5-5 5 5v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="7" y="11" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              }
              title="Transportation and Freight"
              description="Carriers and freight brokers often wait 30–45 days for shipper payment while fuel, driver pay, and operating costs are immediate. Factoring is well-established in this segment."
              tags={["Trucking", "Freight brokerage", "3PL"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 14L6 10l3 2 3-4 3 6H3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="13" cy="5" r="2" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              }
              title="Manufacturing and Distribution"
              description="Manufacturers shipping to large retailers or distributors on net-60 or net-90 terms may qualify to factor those receivables to fund production of the next order."
              tags={["B2B wholesale", "OEM suppliers", "Distribution"]}
              href="/factoring"
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
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            The Advance and Reserve Cycle
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
            Understanding how money moves through a factoring arrangement — from invoice submission to reserve release — helps you assess whether the structure and cost make sense for your cash flow needs.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "You complete work and issue an invoice",
                body: "After delivering goods or fully performing services for a commercial customer, you issue an invoice for the amount owed. The invoice specifies payment terms — typically net-30, net-60, or net-90. You submit the invoice and any required supporting documentation to the factoring company for review.",
              },
              {
                step: "2",
                title: "The factor verifies the invoice and advances a percentage",
                body: "The factor confirms the invoice is valid, undisputed, free of liens, and that the customer meets their credit criteria. Upon approval, the factor advances a percentage of the invoice face value — commonly 70% to 90% — directly to your business account. Funding for approved invoices typically arrives within 24 to 48 hours after account onboarding is complete.",
              },
              {
                step: "3",
                title: "The factor collects payment from your customer",
                body: "In standard notification factoring, your customer is notified of the assignment and directed to remit payment to the factor's lockbox or designated bank account. The factor manages collection and applies the payment when received. Your customer's payment behavior directly affects when the reserve is released.",
              },
              {
                step: "4",
                title: "The reserve is released minus the factoring fee",
                body: "Once your customer pays the invoice in full, the factor releases the held reserve back to your account, less the factoring fee for that invoice. Under a recourse factoring agreement, if the customer does not pay within the contractually specified period, you may be required to repurchase the receivable or replace it with a different eligible invoice.",
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
              What Factoring Companies Typically Evaluate
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Factoring requirements vary by provider, industry, and program type. The criteria below represent what is commonly reviewed during underwriting. No approval or specific outcome is guaranteed — all decisions are made by third-party providers subject to their own underwriting standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Business-to-Business Invoices",
                body: "Invoices must be issued to commercial entities or government agencies, not individual consumers. The underlying transaction must be for goods already delivered or services fully performed — not contingent on future milestones, client acceptance, or yet-to-be-earned work.",
              },
              {
                title: "Creditworthy Customers",
                body: "Factors assess the credit quality of the businesses you invoice. Customers with established payment histories, recognized credit profiles, or government-backed payment obligations tend to support stronger advance rates. Invoices to customers with poor payment records or thin credit profiles may be declined or funded at lower advance rates.",
              },
              {
                title: "Clear Title to Receivables",
                body: "You must have unencumbered ownership of the invoices being factored — free from prior liens, pledge agreements, or cross-collateralization with other lenders. A UCC search is standard during onboarding. An existing blanket lien from a bank or lender may need to be subordinated or terminated before factoring can proceed.",
              },
              {
                title: "No Active Disputes or Offsets",
                body: "Invoices subject to customer disputes, credits, returns, chargebacks, or known offset rights are typically ineligible. Factors rely on the invoice being a clean, unconditional obligation of the customer. Businesses in industries with high dispute rates may face additional scrutiny.",
              },
              {
                title: "Minimum Monthly Volume",
                body: "Many factoring programs require a minimum monthly invoice volume, often ranging from $10,000 to $50,000 or more. Spot factoring programs (single invoice) exist at lower minimums but often carry higher fees. Volume thresholds vary significantly by factor and program type.",
              },
              {
                title: "Business Verification and Documentation",
                body: "Factors typically require standard business documentation: formation documents, EIN, recent bank statements, accounts receivable aging reports, sample invoices, and identification for ownership. Government contracting programs may require assignment of claims compliance and agency-specific documentation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0f0f0f]" />
                  <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">{item.title}</h3>
                </div>
                <p className="text-sm text-[#737373] leading-relaxed pl-4">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advance rates and fee ranges */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Rates and Fees
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            Advance Rates and Fee Ranges
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
            <p>
              Factoring costs consist of two primary components: the advance rate and the factoring fee. The advance rate determines how much of the invoice value you receive upfront. The factoring fee is the cost deducted from the reserve when the invoice is paid.
            </p>
            <p>
              Advance rates typically range from 70% to 90% of the invoice face value, depending on industry, customer creditworthiness, invoice payment terms, and factoring program type. Industries with higher dispute rates or longer payment cycles may see lower advance rates. Factoring fees are commonly expressed as a percentage of the invoice face value per defined time period — for example, 1.5% per 30 days. Some factors use a flat discount structure; others use tiered rates where fees increase incrementally the longer an invoice remains outstanding.
            </p>
            <p>
              Beyond the headline fee, review all components of the cost structure before signing: wire and ACH transfer fees, same-day funding premiums, minimum volume fees, unused line charges, early termination fees, and monthly maintenance fees. The total effective cost of factoring depends on how quickly your customers pay, the volume you factor, and the complete fee schedule in your agreement.
            </p>
          </div>
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] divide-y divide-[#e5e5e5]">
            {[
              {
                label: "Advance rate (typical range)",
                value: "70–90%",
                note: "Higher for creditworthy customers in established industries",
              },
              {
                label: "Factoring fee (typical range)",
                value: "1–5% per invoice",
                note: "Varies by payment terms, industry, and volume",
              },
              {
                label: "Reserve released",
                value: "Remaining balance minus fee",
                note: "Released when customer pays the factor",
              },
              {
                label: "Effective annualized cost",
                value: "Varies widely",
                note: "Depends on payment speed, fees, and program structure",
              },
            ].map((row) => (
              <div key={row.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-5 py-4">
                <span className="text-sm text-[#a3a3a3]">{row.label}</span>
                <div className="text-right">
                  <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums">{row.value}</span>
                  <p className="text-xs text-[#a3a3a3] mt-0.5">{row.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            All rates and fees shown are illustrative ranges only. Actual terms are subject to underwriting by third-party providers and are not guaranteed or representative of any specific offer.
          </p>
        </div>
      </section>

      {/* Benefits and limitations */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Considerations
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              Potential Benefits and Limitations
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Invoice factoring may be a potential fit for some businesses and a poor match for others. The following is general information — not a recommendation. Evaluate factoring against your specific cash flow needs, customer base, and the total cost of the arrangement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4 tracking-[0.1em]">
                Potential Benefits
              </p>
              <ul className="space-y-3">
                {[
                  "Approval weighted toward customer creditworthiness, which may benefit businesses with limited operating history",
                  "Funding tied directly to revenue — as your receivables grow, your available funding may grow with them",
                  "May accelerate cash flow from net-30 to net-90 invoices into 24–48 hour advances",
                  "Does not require hard collateral (real estate, equipment) in most structures",
                  "Some factoring programs include collections services, reducing internal accounts receivable overhead",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <span className="flex-shrink-0 mt-1 text-[#0f0f0f]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4 tracking-[0.1em]">
                Limitations to Consider
              </p>
              <ul className="space-y-3">
                {[
                  "Factoring fees can be materially higher than bank financing on an annualized basis, particularly when customers pay slowly",
                  "Customer notification is typically required, which some businesses prefer to avoid",
                  "Recourse factoring obligations may require repurchase of unpaid invoices, creating contingent liability",
                  "UCC lien filing may conflict with existing lender agreements or complicate future financing",
                  "Not suitable for consumer-facing businesses, project-milestone billing, or industries with high dispute and chargeback rates",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <span className="flex-shrink-0 mt-1 text-[#a3a3a3]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                    </span>
                    {item}
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
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              How Factoring Requirements Compare to Other Financing Types
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              The table below is a general overview for orientation. Individual programs vary — not all factors or lenders use identical criteria. All financing is subject to underwriting by third-party providers.
            </p>
          </div>
          <ComparisonTable
            columns={["Invoice Factoring", "Business Term Loan", "Line of Credit"]}
            rows={comparisonRows}
            highlightCol="Invoice Factoring"
          />
        </div>
      </section>

      {/* Calculator link */}
      <section className="py-12 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f5f5f5] border border-[#0f0f0f]/20 flex items-center justify-center text-[#0f0f0f]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M6 9h6M6 12h3M6 6h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1">
                Invoice Factoring Calculator
              </h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">
                Estimate your potential advance amount and fee cost based on invoice value, advance rate, and payment terms. Results are estimates only and do not represent any offer or guarantee.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-sm font-medium text-[#0f0f0f] hover:border-[#0f0f0f]/50 hover:bg-[#f5f5f5] transition-colors"
            >
              Open Calculator
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Factoring Requirements — Frequently Asked Questions"
      />

      {/* CTA */}
      <CTASection
        headline="Explore Whether Factoring May Be a Fit"
        subtext="Submit a brief intake and ZEO will review your receivables profile and connect you with potential factoring programs. All outcomes subject to underwriting by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Learn More About Factoring"
        secondaryHref="/factoring"
      />

      {/* Disclaimer */}
      <ProductDisclaimer type="factoring" />
    </div>
  );
}

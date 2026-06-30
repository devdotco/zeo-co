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
  title: "Invoice Factoring for Business Cash Flow | ZEO.co",
  description:
    "Invoice factoring lets B2B businesses convert outstanding invoices into immediate working capital. Learn how advance rates, reserve accounts, and fee structures work before you apply.",
  path: "/factoring/invoice-factoring",
  keywords: [
    "invoice factoring",
    "accounts receivable factoring",
    "invoice financing",
    "business cash flow",
    "factoring company",
    "factoring rates",
    "working capital",
  ],
});

const faqItems = [
  {
    q: "What types of invoices are typically eligible for factoring?",
    a: "Most factoring companies focus on B2B (business-to-business) invoices issued to creditworthy commercial customers. Invoices must generally be free of liens, not pledged to another lender, and not subject to significant offset, disputes, or contingencies. Government and municipal receivables may qualify through specialized government-contract factoring programs, often subject to assignment restrictions and additional documentation requirements.",
  },
  {
    q: "Does invoice factoring affect my relationship with my customers?",
    a: "In notification factoring — the most common structure — your customers are notified of the assignment and directed to remit payment to the factor. Some businesses find this straightforward; others prefer a more discreet arrangement. Non-notification factoring programs exist but are less common and typically involve additional underwriting scrutiny. How a factoring arrangement is disclosed can depend on the factor, the contract type, and your industry.",
  },
  {
    q: "What is a reserve account and when do I get that money back?",
    a: "When a factor advances a percentage of your invoice (commonly 70–90%), the remaining balance minus fees is held in a reserve account. This reserve protects the factor against customer non-payment, short payments, or disputes. Once your customer pays the invoice in full, the reserve — less the factoring fee — is released back to you. The timing of reserve releases varies by factor and contract; it is worth understanding exactly when and how reserves are disbursed before signing any agreement.",
  },
  {
    q: "Is invoice factoring considered debt on my balance sheet?",
    a: "Factoring is the sale of receivables, not a loan, so it may not appear as debt on your balance sheet in the same way a term loan would. However, accounting treatment can depend on whether the arrangement qualifies as a true sale under your applicable standards (such as ASC 860 under US GAAP) and on recourse terms. Recourse factoring — where you remain liable if the customer does not pay — may still carry balance sheet implications. Consult your accountant before drawing accounting conclusions from marketing materials.",
  },
  {
    q: "How quickly can I receive funds after submitting invoices?",
    a: "Many invoice factoring programs fund within 24 to 48 hours of invoice verification and approval, once an account is established and the customer's creditworthiness has been confirmed. Initial onboarding — including verification of your business, review of your customer base, and UCC filing — can take several business days to two weeks. After the account is live, same-day or next-day funding is common for qualified invoices submitted before a factor's daily cutoff.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Invoice Factoring": "Outstanding receivables",
    "Bank Line of Credit": "Overall creditworthiness",
    "Merchant Cash Advance": "Future sales / revenue",
  },
  {
    feature: "Primary credit review",
    "Invoice Factoring": "Your customers",
    "Bank Line of Credit": "Your business & owners",
    "Merchant Cash Advance": "Your sales history",
  },
  {
    feature: "Typical funding speed",
    "Invoice Factoring": "24–48 hrs (after onboarding)",
    "Bank Line of Credit": "Weeks to months",
    "Merchant Cash Advance": "1–5 business days",
  },
  {
    feature: "Balance sheet treatment",
    "Invoice Factoring": "Asset sale (varies)",
    "Bank Line of Credit": "Debt / liability",
    "Merchant Cash Advance": "Varies by structure",
  },
  {
    feature: "Approval dependent on your credit",
    "Invoice Factoring": "Partially",
    "Bank Line of Credit": "Primarily",
    "Merchant Cash Advance": "Partially",
  },
  {
    feature: "Recourse on non-payment",
    "Invoice Factoring": "Recourse or non-recourse",
    "Bank Line of Credit": "N/A",
    "Merchant Cash Advance": "N/A",
  },
  {
    feature: "Customer notification required",
    "Invoice Factoring": "Typically yes",
    "Bank Line of Credit": "No",
    "Merchant Cash Advance": "No",
  },
];

export default function InvoiceFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Invoice Factoring"
        subtitle="Convert your outstanding B2B invoices into working capital without waiting 30, 60, or 90 days for customers to pay. Invoice factoring may be a potential fit for businesses with creditworthy commercial customers and consistent receivables."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Invoice Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="70–90%"
              note="Subject to customer creditworthiness and invoice quality"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1–5%"
              unit="per invoice"
              note="Varies by volume, industry, and payment terms"
            />
            <MetricCard
              label="Funding After Onboarding"
              value="24–48"
              unit="hrs"
              note="After invoice verification and approval"
              highlight
            />
            <MetricCard
              label="Typical Invoice Terms"
              value="Net 30–90"
              note="Longer terms may affect fee structure"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are illustrative only. Actual advance rates and fees are subject to underwriting by third-party providers and are not guaranteed.
          </p>
        </div>
      </section>

      {/* What is invoice factoring */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            What Is Invoice Factoring?
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Invoice factoring is a form of accounts receivable financing in which a business sells its unpaid invoices to a third-party company — the factor — at a discount in exchange for an immediate cash advance. Rather than waiting for customers to pay on their standard terms, the business receives a large portion of the invoice value upfront, typically within one to two business days after verification.
            </p>
            <p>
              The factor then takes on responsibility for collecting payment from the customer. Once the customer pays the invoice, the factor releases the remaining balance — the reserve — back to the business, minus a factoring fee. This structure separates the timing of a business's cash inflows from the payment behavior of its customers.
            </p>
            <p>
              Unlike a traditional loan, invoice factoring is structured as the purchase of an asset (the receivable) rather than a direct extension of credit. As a result, approval decisions are weighted more heavily toward the creditworthiness of your customers than toward your own business's credit profile or time in operation. This makes it a potential option for growing companies that have strong commercial clients but limited operating history.
            </p>
          </div>
        </div>
      </section>

      {/* Who uses it */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Who It May Fit
            </p>
            <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
              Industries and Businesses That Commonly Use Invoice Factoring
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
              Invoice factoring is most commonly used by B2B businesses with predictable invoicing cycles and creditworthy commercial or government customers. It is generally not applicable to consumer-facing businesses, retail operations, or service providers that collect at the point of sale.
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
              description="Staffing agencies often invoice clients weekly or bi-weekly while paying employees on a fixed schedule. Factoring can bridge the gap between payroll obligations and client payment cycles."
              tags={["Temporary staffing", "PEO", "Contract workforce"]}
              href="/factoring/invoice-factoring"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 14L8 6l3 4 2-2.5L15 14H3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Manufacturing and Distribution"
              description="Companies shipping goods to large retailers or distributors frequently wait 60 to 90 days for payment. Factoring may allow manufacturers to take on larger orders without being constrained by receivables timing."
              tags={["Wholesale", "B2B distribution", "OEM suppliers"]}
              href="/factoring/invoice-factoring"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              }
              title="Transportation and Logistics"
              description="Freight brokers and carriers typically invoice shippers and wait 30 to 45 days for payment, while fuel and operating costs are due immediately. Invoice factoring is deeply established in this segment."
              tags={["Freight brokerage", "Trucking", "Third-party logistics"]}
              href="/factoring/invoice-factoring"
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
            Understanding how money moves through an invoice factoring arrangement helps you evaluate whether the timing and cost structure makes sense for your business.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "You deliver goods or services and issue an invoice",
                body: "After completing work for a commercial customer, you issue an invoice for the amount due. The invoice specifies payment terms — commonly net-30, net-60, or net-90. You submit the invoice (and supporting documentation) to the factoring company.",
              },
              {
                step: "2",
                title: "The factor verifies the invoice and advances a percentage",
                body: "The factor confirms the invoice is valid, undisputed, and that the customer is creditworthy. Upon approval, the factor advances a percentage of the invoice face value — commonly 70% to 90% — directly to your business account. This advance is typically available within 24 to 48 hours of verification.",
              },
              {
                step: "3",
                title: "Your customer pays the factor directly",
                body: "In standard notification factoring, your customer is notified of the assignment and remits payment to a lockbox or bank account controlled by the factor. The factor applies the payment to your outstanding advance when received.",
              },
              {
                step: "4",
                title: "The factor releases the reserve minus fees",
                body: "Once payment is collected in full, the factor releases the reserve balance — the portion withheld at funding — back to you, less its factoring fee. If the invoice goes unpaid, your recourse obligations (under a recourse factoring agreement) may require you to buy back the receivable or substitute a different invoice.",
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
              What Factoring Companies Typically Evaluate
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Requirements vary by factor and industry. The following criteria are commonly reviewed, though no approval or outcome is guaranteed. All decisions are subject to underwriting by third-party providers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Business-to-Business Invoices",
                body: "Invoices must be issued to commercial or government entities, not individual consumers. The underlying transaction must be for goods delivered or services fully performed, not contingent on future milestones or acceptance.",
              },
              {
                title: "Customer Creditworthiness",
                body: "Factors assess the financial strength of the businesses you bill, not primarily your own. Customers with strong payment histories, recognized credit profiles, or government-backed payment obligations tend to support higher advance rates.",
              },
              {
                title: "Clear Title to Receivables",
                body: "You must have clear ownership of the invoices being factored — free from prior liens, pledge agreements, or cross-collateralization with other lenders. A UCC search is typically performed as part of onboarding.",
              },
              {
                title: "No Material Disputes or Offsets",
                body: "Invoices subject to dispute, right of offset, or performance contingencies may not be eligible. Factors require that the obligation to pay is fixed, unconditional, and not subject to potential reduction.",
              },
              {
                title: "Invoice Volume and Concentration",
                body: "Some factors prefer diversified customer bases; others specialize in single-debtor arrangements. High concentration in one customer (e.g., over 50% of receivables) may affect pricing or eligibility depending on the factor.",
              },
              {
                title: "Time in Business and Documentation",
                body: "While time-in-business requirements are generally less restrictive than bank products, most factoring companies require at least a few months of operating history, a valid business registration, and documentation of invoiced transactions.",
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
            Advance Rates and Fee Structures
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-6">
            Invoice factoring fees and advance rates vary significantly by factor, industry, invoice volume, customer quality, and payment terms. The figures below represent general market ranges for illustrative purposes. They are not offers, commitments, or indicative of any specific transaction — all terms are subject to underwriting by a third-party provider.
          </p>
          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Advance Rate</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">70 – 92%</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                The percentage of an invoice's face value advanced at funding. Higher advance rates are typically available for factors with strong customer concentrations, established relationships, or higher overall volume. Lower advance rates may apply to newer accounts, industries with higher dispute rates, or invoices with longer payment terms.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Discount / Factoring Fee</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">1 – 5% per invoice</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Factoring fees are often expressed as a flat percentage per invoice or as a tiered structure that increases with the number of days the invoice remains outstanding. A common structure might charge 2% for the first 30 days, then an additional 0.5–1% per 10-day period thereafter. Understanding exactly how fees accrue on slow-paying customers is important when evaluating total cost.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Additional Fees to Evaluate</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">Varies</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Beyond the core factoring fee, agreements may include origination or setup fees, monthly minimum volume fees, ACH or wire transfer fees, credit check fees per new customer, and early termination fees if the contract includes a minimum term. Read the full fee schedule before committing.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] px-5 py-4">
            <p className="text-sm text-[#737373] leading-relaxed">
              <span className="text-[#0f0f0f] font-medium">Use the calculator to estimate costs.</span>{" "}
              The{" "}
              <Link
                href="/calculators/invoice-factoring-calculator"
                className="text-[#0f0f0f] underline underline-offset-2 hover:text-[#0f0f0f] transition-colors"
              >
                Invoice Factoring Calculator
              </Link>{" "}
              lets you model advance amounts, estimated fees, and reserve releases based on your own invoice amounts and payment term assumptions. All outputs are estimates only.
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
              Invoice Factoring vs. Other Working Capital Options
            </h2>
            <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
              No single product is right for every situation. This comparison highlights structural differences — not endorsements or cost rankings. Subject to underwriting; terms vary by provider.
            </p>
          </div>
          <ComparisonTable
            columns={["Invoice Factoring", "Bank Line of Credit", "Merchant Cash Advance"]}
            rows={comparisonRows}
            highlightCol="Invoice Factoring"
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
              <h2 className="text-xl font-semibold text-white mb-5">What Invoice Factoring Can Offer</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Cash flow tied to sales, not debt capacity",
                    body: "As your receivables grow, so does your potential access to working capital — without needing to renegotiate a credit facility or pledge additional collateral.",
                  },
                  {
                    title: "Customer credit replaces owner credit as the primary factor",
                    body: "Businesses with limited operating history or owner credit challenges may still qualify if they bill established commercial customers with strong payment records.",
                  },
                  {
                    title: "Outsourced collections in non-recourse structures",
                    body: "With non-recourse factoring, the factor absorbs the risk of customer insolvency (not dilatory payment or disputes). This can reduce collections overhead for some businesses.",
                  },
                  {
                    title: "Faster onboarding than bank credit",
                    body: "Once an account is established, invoice funding can be near-immediate. Initial setup typically takes days, not the months often required for bank facilities.",
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
                    title: "Cost can exceed traditional credit over time",
                    body: "Factoring fees — particularly with slow-paying customers — can produce effective annual costs that are higher than a bank line of credit. Modeling total cost against your customer payment behavior is important.",
                  },
                  {
                    title: "Customer notification may affect relationships",
                    body: "Most standard factoring arrangements require customers to be notified and directed to pay a third party. Some customers may have questions, and some contracts may restrict invoice assignment without consent.",
                  },
                  {
                    title: "Recourse obligations if customers don't pay",
                    body: "In recourse factoring — the more common structure — you may be required to repurchase an invoice or substitute a new one if your customer fails to pay within a specified window.",
                  },
                  {
                    title: "UCC filings and potential lender conflicts",
                    body: "Factoring companies typically file a UCC-1 lien against your receivables. If you have an existing lender with a blanket lien, you may need lender consent or subordination before factoring can proceed.",
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
                Model advance amounts, factoring fees, and reserve releases based on your invoice amounts and payment assumptions.
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
        title="Invoice Factoring — Common Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Explore Whether Invoice Factoring May Be a Fit"
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

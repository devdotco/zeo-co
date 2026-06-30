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
  title: "Small Business Invoice Factoring | ZEO.co",
  description:
    "Small business invoice factoring converts outstanding B2B invoices into working capital without waiting 30–90 days for customers to pay. Learn how advance rates, reserve accounts, and fee structures work.",
  path: "/factoring/small-business",
  keywords: [
    "small business factoring",
    "invoice factoring small business",
    "small business invoice financing",
    "working capital for small business",
    "accounts receivable factoring",
    "factoring rates small business",
    "B2B invoice funding",
  ],
});

const faqItems = [
  {
    q: "Can a small business with limited credit history qualify for invoice factoring?",
    a: "Invoice factoring is primarily underwritten on the creditworthiness of your customers — not your own personal credit or your business's credit history. A small business with a short operating history may still qualify if it bills established commercial or government customers with strong payment track records. Your business generally needs to be generating invoices from verifiable B2B transactions and be free of certain legal or tax liens that could complicate receivables assignment. Factors will still review your business for basic eligibility, but the hurdle is often lower than with traditional bank products.",
  },
  {
    q: "How many invoices do I need to submit, and is there a minimum volume?",
    a: "Requirements vary by factoring company. Some factors work with small businesses on a spot or selective basis — meaning you submit individual invoices as needed, without a volume commitment. Others require a monthly minimum, such as $20,000–$50,000 in submitted invoices, to make the account economical for the factor. If your receivables are sporadic or seasonal, a spot factoring arrangement may be worth specifically asking about. Be sure to understand whether the agreement includes monthly minimums or penalties for not meeting them, as these can affect your effective cost significantly.",
  },
  {
    q: "What happens if my customer pays late or disputes the invoice?",
    a: "In most standard (recourse) factoring arrangements, you remain liable if your customer fails to pay within a specified period — often 60 to 90 days from the invoice due date. If a customer doesn't pay in time, the factor may charge the invoice back to you, require you to buy it back, or substitute another eligible invoice. In non-recourse factoring, the factor absorbs the loss if the customer becomes insolvent — but most non-recourse programs still hold you responsible for invoice disputes, returns, or dilution. Understand exactly what events trigger recourse before signing any agreement.",
  },
  {
    q: "Will my customers know I am factoring my invoices?",
    a: "In the most common form of factoring — notification factoring — your customers receive a notice that their invoice has been assigned to a third-party factor and that payment must be remitted to the factor directly. This is standard practice and many large companies receive such notices routinely. Some small businesses are concerned about perception; however, invoice factoring is widely used across services, staffing, trucking, manufacturing, and professional services. Non-notification or confidential factoring programs exist but are less common and involve stricter underwriting. Ask the factor whether a confidential structure is available if customer notification is a concern.",
  },
  {
    q: "Are there industries or invoice types that do not qualify for small business factoring?",
    a: "Yes. Factoring generally requires that invoices represent completed, undisputed work or delivered goods — progress billings, retainage, and contingent invoices (such as those in personal injury or contingency-fee legal matters) are often excluded or require specialist programs. Consumer-facing businesses (B2C) typically do not qualify for standard factoring, since the credit review focuses on commercial customers. Certain industries — construction, healthcare, and government contracting — may qualify but require industry-specific programs due to payment assignment restrictions, lien waiver requirements, or regulatory considerations. Factoring companies in those verticals understand the nuances; a general-purpose factor may decline what a specialized one can fund.",
  },
];

const comparisonRows = [
  {
    feature: "Primary approval basis",
    "Small Business Factoring": "Customer creditworthiness",
    "SBA 7(a) Loan": "Business financials & owner credit",
    "Business Line of Credit": "Overall creditworthiness",
  },
  {
    feature: "Typical funding speed",
    "Small Business Factoring": "24–72 hrs after onboarding",
    "SBA 7(a) Loan": "30–90+ days",
    "Business Line of Credit": "Days to weeks",
  },
  {
    feature: "Minimum operating history",
    "Small Business Factoring": "Often flexible",
    "SBA 7(a) Loan": "Typically 2 years",
    "Business Line of Credit": "Usually 1–2 years",
  },
  {
    feature: "Personal credit impact",
    "Small Business Factoring": "Limited / secondary",
    "SBA 7(a) Loan": "Primary consideration",
    "Business Line of Credit": "Primary consideration",
  },
  {
    feature: "Collateral required",
    "Small Business Factoring": "Receivables (UCC lien)",
    "SBA 7(a) Loan": "Business & personal assets",
    "Business Line of Credit": "Varies",
  },
  {
    feature: "Scales with revenue",
    "Small Business Factoring": "Yes — tied to invoices",
    "SBA 7(a) Loan": "Fixed at origination",
    "Business Line of Credit": "Fixed facility limit",
  },
  {
    feature: "Customer notification",
    "Small Business Factoring": "Typically required",
    "SBA 7(a) Loan": "Not applicable",
    "Business Line of Credit": "Not applicable",
  },
];

export default function SmallBusinessFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Small Business Factoring"
        subtitle="For small businesses that bill commercial customers, outstanding invoices represent money already earned — but often not yet collected. Invoice factoring converts those receivables into working capital before customers pay, without requiring the credit profile or operating history that traditional bank products demand."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Small Business Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="70–90%"
              note="Subject to customer credit quality and invoice characteristics"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1–5%"
              unit="per invoice"
              note="Varies by volume, terms, and customer payment history"
            />
            <MetricCard
              label="Time to First Funding"
              value="1–5"
              unit="business days"
              note="After account setup; ongoing funding often 24–48 hrs"
            />
            <MetricCard
              label="Minimum Invoice Size"
              value="Varies"
              note="Many factors set minimums of $500–$5,000 per invoice"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            All figures are general market ranges for illustrative purposes only. They do not constitute offers or guarantees. Terms are subject to underwriting by third-party providers.
          </p>
        </div>
      </section>

      {/* What is it / who uses it */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Overview
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                What Is Small Business Invoice Factoring?
              </h2>
              <div className="space-y-4 text-[0.9375rem] text-[#737373] leading-relaxed">
                <p>
                  Invoice factoring is a form of accounts receivable financing in which a business sells its outstanding invoices to a third-party company — a factor — at a discount in exchange for immediate cash. The factor advances a percentage of the invoice face value upfront, then collects directly from your customer. Once your customer pays, the factor releases the remaining balance minus its fee.
                </p>
                <p>
                  For small businesses, the key distinction from a bank loan is that approval rests primarily on your customers&apos; ability to pay — not on your years in business, your personal credit score, or your ability to post hard collateral. This makes factoring a potential fit for businesses that are growing faster than their cash flow, or that can&apos;t yet access traditional credit facilities.
                </p>
                <p>
                  Factoring does not eliminate the need to issue valid, undisputed invoices to creditworthy commercial customers. It accelerates collection of money already owed to you — it does not create new revenue or substitute for a healthy customer base.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Who Typically Uses It
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
                Small Businesses That May Benefit
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    label: "Service businesses with commercial clients",
                    detail:
                      "IT services, marketing agencies, consulting firms, janitorial and facilities companies that invoice businesses or institutions on net-30 to net-90 terms.",
                  },
                  {
                    label: "Product businesses with wholesale or distribution customers",
                    detail:
                      "Small manufacturers, distributors, and wholesalers that ship goods to retailers or larger companies and wait 30–60 days for payment.",
                  },
                  {
                    label: "Staffing and temp agencies",
                    detail:
                      "Businesses that front payroll weekly while waiting for client invoices to clear — a mismatch that factoring is specifically designed to bridge.",
                  },
                  {
                    label: "Subcontractors and tradespeople",
                    detail:
                      "Construction, electrical, HVAC, and similar trades that complete work and face extended payment cycles from general contractors or property owners.",
                  },
                  {
                    label: "Early-stage businesses without bank credit access",
                    detail:
                      "Startups or newly formed LLCs that are generating revenue but don't yet qualify for a bank line of credit or SBA loan.",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3 p-4 rounded-xl border border-[#e5e5e5] bg-[#ffffff]">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{item.label}</p>
                      <p className="text-xs text-[#737373] leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
              The Advance and Reserve Cycle
            </h2>
            <p className="text-[0.9375rem] text-[#737373] leading-relaxed">
              Understanding how money moves through a factoring arrangement helps you evaluate whether it fits your cash flow pattern. The cycle repeats with each invoice you submit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "You submit an invoice",
                body: "After delivering services or goods, you submit the eligible invoice to the factor along with supporting documentation. The factor verifies the invoice and confirms your customer's creditworthiness.",
              },
              {
                step: "2",
                title: "Advance is funded",
                body: "The factor advances a percentage of the invoice face value — commonly 70–90% — directly to your business account, typically within 24–48 hours of approval. The remaining balance is held in a reserve.",
              },
              {
                step: "3",
                title: "Your customer pays the factor",
                body: "Your customer is notified to remit payment to the factor (in notification factoring). The factor manages collections and applies the payment when received.",
              },
              {
                step: "4",
                title: "Reserve is released minus fees",
                body: "Once your customer pays in full, the factor releases the reserve — the remaining invoice balance — less its factoring fee. You receive the net reserve amount.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <div className="w-8 h-8 rounded-full border border-[#e5e5e5] flex items-center justify-center mb-4">
                  <span className="text-xs font-semibold text-[#0f0f0f] tabular-nums">{item.step}</span>
                </div>
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.title}</h3>
                <p className="text-xs text-[#737373] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
            <p className="text-sm text-[#737373] leading-relaxed">
              <span className="text-[#0f0f0f] font-medium">Example (illustrative only): </span>
              You submit a $10,000 invoice. The factor advances 85% ($8,500) to your account. Your customer pays 45 days later. The factor charges a 2.5% fee ($250) for the first 30 days plus an additional 0.75% ($75) for the extra 15 days, totaling $325 in fees. You receive the $1,500 reserve minus $325 in fees — a net reserve release of $1,175. Total received: $8,500 + $1,175 = $9,675 on a $10,000 invoice. This is an illustration only and does not reflect any actual offer or product.
            </p>
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
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              Requirements and Invoice Criteria
            </h2>
            <p className="text-[0.9375rem] text-[#737373] leading-relaxed">
              Factoring companies evaluate both your business and your invoices. Requirements differ across factors; the criteria below are common but not universal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Business Requirements
              </h3>
              <ul className="space-y-3">
                {[
                  "Registered business entity (LLC, corporation, or sole proprietor in many cases)",
                  "Active B2B invoicing — you must be billing other businesses, not consumers",
                  "No active bankruptcy proceedings or unresolved federal tax liens in most cases",
                  "Free and clear receivables — invoices cannot be pledged to another lender without subordination",
                  "Ability to provide basic business documents: formation docs, voided check, and accounts receivable aging report",
                  "Customers with verifiable commercial credit — the factor will run credit checks on your customers, not just you",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#737373]">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Invoice Criteria
              </h3>
              <ul className="space-y-3">
                {[
                  "Invoices must represent completed, delivered work or goods — progress billings and speculative invoices are typically ineligible",
                  "No existing disputes, offsets, or contingencies that reduce the invoice's collectible value",
                  "Not already assigned, pledged, or sold to another party",
                  "Issued to a verifiable, creditworthy commercial entity — not a related party or affiliate",
                  "Clear payment terms (net-30, net-60, net-90) — open-ended or indefinite terms are harder to factor",
                  "Meet the factor's minimum invoice size — commonly $500 to $5,000 per invoice, varying by program",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#737373]">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Pricing
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              Advance Rates and Fee Ranges
            </h2>
            <p className="text-[0.9375rem] text-[#737373] leading-relaxed">
              Factoring costs vary significantly by factor, industry, invoice volume, customer quality, and payment terms. The figures below represent general market ranges and are for illustrative purposes only. They are not offers, commitments, or indicative of any specific transaction — all terms are subject to underwriting by a third-party provider.
            </p>
          </div>
          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Advance Rate</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">70 – 90%</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                The percentage of an invoice&apos;s face value funded upfront. Higher advance rates are more common with established customers, strong payment histories, and lower dispute risk. Smaller businesses with shorter track records may receive more conservative advance rates on initial accounts, with the potential to improve as the relationship develops.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Factoring Fee Structure</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">1 – 5% per invoice</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Fees may be expressed as a flat percentage of the invoice face value, or as a tiered rate that increases the longer an invoice remains outstanding — for example, 2% for the first 30 days, then an additional 0.5–1% per 10-day period. Since slow-paying customers increase costs significantly, understanding how fees compound on extended payment cycles is important before committing to a factoring program.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Additional Fees to Review</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">Varies by factor</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Beyond the core factoring discount, agreements may include: origination or account setup fees; monthly minimum volume fees that apply whether or not you factor; ACH or wire transfer fees per funding; credit check fees for new customers; early termination or contract breakage fees; and invoice processing or admin fees. Request a complete fee schedule and model total cost against your actual invoice volume and customer payment patterns before signing.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] px-5 py-4">
            <p className="text-sm text-[#737373] leading-relaxed">
              <span className="text-[#0f0f0f] font-medium">Estimate your costs with the calculator. </span>
              The{" "}
              <Link
                href="/calculators/invoice-factoring-calculator"
                className="text-[#0f0f0f] underline underline-offset-2 hover:text-[#0f0f0f] transition-colors"
              >
                Invoice Factoring Calculator
              </Link>{" "}
              lets you model advance amounts, estimated fees, and reserve releases based on your own invoice amounts and customer payment term assumptions. All outputs are estimates only and do not constitute an offer.
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
              Small Business Factoring vs. Other Working Capital Options
            </h2>
            <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
              No single product is the right fit for every business. This comparison highlights structural differences — not cost rankings or endorsements. All options are subject to underwriting; terms vary by provider.
            </p>
          </div>
          <ComparisonTable
            columns={["Small Business Factoring", "SBA 7(a) Loan", "Business Line of Credit"]}
            rows={comparisonRows}
            highlightCol="Small Business Factoring"
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
              <h2 className="text-xl font-semibold text-white mb-5">What Factoring Can Offer Small Businesses</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Access to capital without traditional credit barriers",
                    body: "Businesses with limited operating history, thin owner credit, or no hard collateral may still qualify if they have creditworthy commercial customers. Customer quality drives approval more than your own financial profile.",
                  },
                  {
                    title: "Working capital that scales with your revenue",
                    body: "As your invoice volume grows, your potential access to working capital grows with it — without needing to renegotiate a credit facility or seek an increase from a bank.",
                  },
                  {
                    title: "Predictable cash flow to fund operations",
                    body: "Knowing when cash arrives allows you to plan payroll, pay suppliers, and accept new contracts without waiting 30–90 days for customers to pay on their schedule.",
                  },
                  {
                    title: "Faster setup than bank or SBA products",
                    body: "Initial onboarding typically takes days, not months. Once established, ongoing invoice submissions often fund within 24–48 hours — making factoring one of the more accessible fast-capital options for small businesses.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                    title: "Cost can be significant relative to other credit",
                    body: "Factoring fees — especially with slow-paying customers or tiered fee structures — can produce effective costs that exceed a bank line of credit when annualized. Modeling total cost against your actual customer payment behavior is essential before committing.",
                  },
                  {
                    title: "You remain liable in most recourse arrangements",
                    body: "Most small business factoring programs are recourse — meaning if your customer doesn't pay within the agreed window, the invoice obligation returns to you. Non-recourse programs exist but are narrower and often more expensive.",
                  },
                  {
                    title: "Customer relationships and contracts may be affected",
                    body: "Notification factoring requires informing your customers that their invoice has been assigned. Some customer contracts may restrict assignment without prior consent, and some clients may have questions about the arrangement.",
                  },
                  {
                    title: "UCC filings can complicate other financing",
                    body: "Factors file a UCC-1 lien against your receivables. If you later seek an SBA loan or bank line of credit, the existing UCC filing may need to be released or subordinated — requiring coordination between lenders that can add time and complexity.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#a3a3a3]" viewBox="0 0 16 16" fill="none">
                      <path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
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

      {/* FAQ */}
      <FAQ
        title="Small Business Factoring — Common Questions"
        items={faqItems}
      />

      {/* Calculator callout */}
      <section className="py-10 border-t border-[#e5e5e5] bg-[#f5f5f5]">
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
                Model advance amounts, factoring fees, and reserve releases based on your invoice amounts and customer payment term assumptions.
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

      {/* CTA */}
      <CTASection
        headline="Explore Whether Small Business Factoring May Be a Fit"
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

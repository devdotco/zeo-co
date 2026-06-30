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
  title: "Invoice Factoring Costs and Fees | ZEO.co",
  description:
    "Understand how invoice factoring fees, advance rates, and reserve accounts work before you sign. A plain-language breakdown of what factoring actually costs and how structures vary by provider.",
  path: "/factoring/costs",
  keywords: [
    "invoice factoring costs",
    "factoring fees",
    "factoring advance rates",
    "factoring reserve account",
    "how much does factoring cost",
    "factoring discount rate",
    "accounts receivable factoring fees",
  ],
});

const faqItems = [
  {
    q: "What is the difference between a flat fee and a tiered fee structure?",
    a: "A flat-fee structure charges one fixed percentage of the invoice face value regardless of how long the invoice remains outstanding — for example, 2.5% whether the customer pays in 20 days or 45 days. A tiered structure charges a base rate for the first period (often 30 days) and incremental fees for each additional period until payment. Flat fees are simpler to model in advance; tiered fees may favor businesses whose customers pay quickly, but can become expensive if payment is delayed. Neither structure is inherently better — the right fit depends on your average days-to-pay.",
  },
  {
    q: "Are there fees beyond the factoring rate I should plan for?",
    a: "Yes. Beyond the core discount or factoring fee, agreements may include origination or setup fees, monthly minimum volume fees, wire or ACH transfer fees, verification fees per invoice, credit check fees for new customers, and early termination fees if you exit the contract before a minimum term. Some factors charge account maintenance fees regardless of volume. Reading the full schedule of fees in any agreement — not just the headline rate — is essential before signing.",
  },
  {
    q: "How does the reserve account affect my actual cash yield?",
    a: "When a factor advances 85% of an invoice, the remaining 15% is held in reserve. After the customer pays, the factor deducts its fee from the reserve and releases the remainder to you. If the fee is 3%, you ultimately receive 85% (advance) + 12% (reserve minus fee) = 97% of the invoice. The reserve is not lost — it is a timing holdback. The practical impact is that your cash flow is improved at invoice submission, but you do not receive the full net amount until the invoice is settled.",
  },
  {
    q: "Does invoice aging affect the fees I pay?",
    a: "Typically, yes. Most factoring agreements apply fee accruals by period — often in 30-day bands. An invoice that is 31 days outstanding may incur a second period fee on top of the initial fee. Invoices that remain unpaid well beyond their due date may be subject to higher incremental fees, or may be returned to you under a recourse arrangement, at which point the advance must be repaid. Understanding the fee escalation schedule for slow-paying customers is especially important in industries where payment terms often stretch to 60 or 90 days.",
  },
  {
    q: "Can I factor invoices selectively, or do I have to factor everything?",
    a: "Spot factoring programs allow businesses to submit individual invoices on a transaction-by-transaction basis without committing to a minimum volume or a long-term contract. Whole-turnover or bulk factoring agreements require the business to submit all eligible invoices from designated customers or its entire receivable book. Spot factoring offers flexibility but often carries higher per-transaction fees. Whole-turnover programs may offer lower rates in exchange for volume commitment. Which structure makes financial sense depends on how consistently you generate invoices and whether selective submission is practical in your business.",
  },
];

const feeComparisonRows = [
  {
    feature: "Fee structure",
    "Flat Fee": "Fixed % of invoice face",
    "Tiered / Daily": "Base rate + incremental per period",
    "Prime-Based": "Benchmark rate + spread",
  },
  {
    feature: "Predictability",
    "Flat Fee": "High — known at submission",
    "Tiered / Daily": "Depends on payment speed",
    "Prime-Based": "Varies with benchmark",
  },
  {
    feature: "Best suited for",
    "Flat Fee": "Longer or variable payment cycles",
    "Tiered / Daily": "Fast-paying customers (sub-30 day)",
    "Prime-Based": "High-volume, long-term programs",
  },
  {
    feature: "Typical rate range",
    "Flat Fee": "1.5% – 5% per invoice",
    "Tiered / Daily": "0.5%–1.5% base + 0.03%–0.06%/day",
    "Prime-Based": "Prime + 1% – 5% annualized",
  },
  {
    feature: "Contract commitment",
    "Flat Fee": "Spot or contract",
    "Tiered / Daily": "Typically contract",
    "Prime-Based": "Long-term program",
  },
];

export default function FactoringCostsPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Factoring Costs"
        subtitle="Understanding what invoice factoring actually costs requires looking past the headline rate. Advance percentages, reserve timing, fee structures, and contract minimums all shape your real net yield."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Factoring Costs" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="70–95%"
              note="Subject to customer credit quality and invoice eligibility"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1–5%"
              unit="per invoice"
              note="Flat, tiered, or daily structures; varies significantly by program"
              highlight
            />
            <MetricCard
              label="Reserve Released"
              value="After payment"
              note="Remaining balance minus fees returned once customer pays"
            />
            <MetricCard
              label="Funding Speed"
              value="24–48 hrs"
              note="Once account is established and invoice is verified"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Figures above are illustrative ranges based on commonly available program types and do not represent an offer, commitment, or guarantee of terms. Actual rates and advances are subject to underwriting and third-party provider approval.
          </p>
        </div>
      </section>

      {/* What factoring costs means */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-5">What Does Factoring Cost?</h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Invoice factoring is not priced like a loan with an annual interest rate. Instead, costs are expressed as a percentage of the invoice face value — called a discount rate or factoring fee — assessed when the invoice is purchased and sometimes again at intervals if the customer takes longer to pay.
            </p>
            <p>
              The headline fee is only part of the picture. A factoring program with a low discount rate but aggressive monthly minimums, setup charges, or wire fees can cost meaningfully more in practice than a higher-rate program with transparent, simple pricing. Comparing programs requires modeling your actual invoice volume, average days-to-pay, and customer mix — not just the stated rate.
            </p>
            <p>
              Who uses invoice factoring? Businesses in staffing, trucking and freight brokerage, manufacturing, wholesale distribution, government contracting, and professional services represent common segments — largely because they invoice commercial or government customers on net-30 to net-90 terms and can face extended gaps between service delivery and cash receipt. Factoring may be a potential fit when the timing mismatch between work performed and payment received creates a real operational constraint.
            </p>
          </div>
        </div>
      </section>

      {/* Advance and reserve cycle */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">How the Advance and Reserve Cycle Works</h2>
          <p className="text-[#737373] text-sm mb-8 leading-relaxed">
            The factoring cycle has three distinct stages that together determine your net cash position.
          </p>

          <div className="space-y-px">
            {/* Step 1 */}
            <div className="rounded-t-xl border border-[#e5e5e5] bg-[#f5f5f5] px-6 py-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ffffff] border border-[#0f0f0f]/30 flex items-center justify-center">
                  <span className="text-[0.65rem] font-bold text-[#0f0f0f] tabular-nums">1</span>
                </div>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1.5">Invoice submission and advance</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    You submit an eligible invoice to the factor. The factor verifies the invoice — confirming goods or services were delivered, the invoice is undisputed, and the customer is creditworthy — then advances a percentage of the face value, typically between 70% and 95%, directly to your account. This advance arrives within one to two business days on an active account. The remaining balance, minus the factor&rsquo;s fee, is set aside in a reserve.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-x border-b border-[#e5e5e5] bg-[#f5f5f5] px-6 py-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ffffff] border border-[#0f0f0f]/30 flex items-center justify-center">
                  <span className="text-[0.65rem] font-bold text-[#0f0f0f] tabular-nums">2</span>
                </div>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1.5">Customer pays the factor</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    In most factoring arrangements — known as notification or disclosed factoring — your customer is informed of the assignment and directed to remit payment to the factor rather than to you. The factor manages collections for the assigned invoices. Non-notification arrangements exist but are less common and typically involve additional program requirements. The fee begins accruing either from the date of advance or from the invoice date, depending on your agreement.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-b-xl border-x border-b border-[#e5e5e5] bg-[#f5f5f5] px-6 py-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ffffff] border border-[#0f0f0f]/30 flex items-center justify-center">
                  <span className="text-[0.65rem] font-bold text-[#0f0f0f] tabular-nums">3</span>
                </div>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1.5">Reserve release</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    Once the customer pays in full, the factor deducts its fee from the reserve balance and releases the remainder to you. If a tiered fee structure is in place, the fee owed may be higher for invoices that remained outstanding beyond the first period. Under a recourse arrangement, if the customer does not pay within a specified window, the invoice may be returned to you — requiring repayment of the advance. The exact mechanics of reserve release and recourse triggers vary by contract and should be reviewed carefully.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Worked example */}
          <div className="mt-8 rounded-xl border border-[#e5e5e5] bg-[#ffffff] px-6 py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">Illustrative Example — Not a Quote</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-xs text-[#a3a3a3] mb-1">Invoice face value</p>
                <p className="text-lg font-semibold text-[#0f0f0f] tabular-nums">$50,000</p>
              </div>
              <div>
                <p className="text-xs text-[#a3a3a3] mb-1">Advance (85%)</p>
                <p className="text-lg font-semibold text-[#0f0f0f] tabular-nums">$42,500</p>
              </div>
              <div>
                <p className="text-xs text-[#a3a3a3] mb-1">Reserve held (15%)</p>
                <p className="text-lg font-semibold text-[#0f0f0f] tabular-nums">$7,500</p>
              </div>
            </div>
            <div className="border-t border-[#e5e5e5] pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-[#a3a3a3] mb-1">Factoring fee (2.5%)</p>
                <p className="text-lg font-semibold text-[#0f0f0f] tabular-nums">$1,250</p>
              </div>
              <div>
                <p className="text-xs text-[#a3a3a3] mb-1">Reserve released</p>
                <p className="text-lg font-semibold text-[#0f0f0f] tabular-nums">$6,250</p>
              </div>
              <div>
                <p className="text-xs text-[#a3a3a3] mb-1">Net proceeds (total)</p>
                <p className="text-lg font-semibold text-[#0f0f0f] tabular-nums">$48,750</p>
              </div>
            </div>
            <p className="text-xs text-[#a3a3a3] mt-4 leading-relaxed">
              This example uses hypothetical figures for illustration only. Actual advance rates, fees, and reserve amounts depend on your specific program, customer creditworthiness, invoice quality, and contract terms.
            </p>
          </div>
        </div>
      </section>

      {/* Invoice requirements */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Invoice Eligibility and Program Requirements</h2>
          <p className="text-[#737373] text-sm mb-8 leading-relaxed">
            Not all invoices qualify for factoring. The factor&rsquo;s primary risk is the creditworthiness of your customer, so eligibility criteria center on who owes you, not just on your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                label: "Obligor type",
                text: "Invoices must typically be owed by a business or government entity, not a consumer. B2B and B2G receivables are standard; consumer receivables are generally excluded from commercial factoring programs.",
              },
              {
                label: "Delivery and acceptance",
                text: "Goods must have been delivered or services rendered and accepted. Invoices for future work, contingent deliverables, or partially completed projects may not qualify and can create repurchase exposure.",
              },
              {
                label: "No existing liens",
                text: "Invoices assigned to a factor must be free of prior security interests or pledges. If another lender holds a blanket lien on your receivables, the factoring company will typically require a subordination or payoff before proceeding.",
              },
              {
                label: "Undisputed balance",
                text: "Invoices subject to offset rights, credits, counterclaims, or active disputes are generally ineligible. If a customer has a history of short-paying or deducting chargebacks, those receivables may be excluded.",
              },
              {
                label: "Customer creditworthiness",
                text: "The factor will evaluate each customer&rsquo;s payment history, credit profile, and financial standing. Invoices from customers with poor or unverifiable credit may be declined or offered at lower advance rates.",
              },
              {
                label: "Minimum and maximum concentrations",
                text: "Many programs set concentration limits — for instance, no more than 20–25% of your total factored volume may come from a single customer. Heavy reliance on one obligor concentrates risk and may limit how much of that customer&rsquo;s invoices are eligible.",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">{item.label}</p>
                <p className="text-sm text-[#737373] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee structures */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Advance Rates and Fee Structures</h2>
          <p className="text-[#737373] text-sm mb-8 leading-relaxed">
            Factoring fees vary by provider, industry, customer credit quality, and contract type. These ranges reflect commonly available programs and are not offers or guarantees of any specific terms.
          </p>

          <div className="overflow-x-auto mb-8">
            <ComparisonTable
              columns={["Flat Fee", "Tiered / Daily", "Prime-Based"]}
              rows={feeComparisonRows}
              highlightCol="Flat Fee"
            />
          </div>

          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Advance rates typically range from 70% to 95% of the invoice face value, with rates on the higher end generally reserved for businesses with strong, diversified customer bases, low dispute history, and invoices with short collection cycles. Industries with longer average days-to-pay or greater collections complexity — construction, healthcare, government contracting — may see lower initial advance rates.
            </p>
            <p>
              For businesses considering factoring as a regular working-capital tool, it is worth modeling the effective annualized cost at your expected volume and average days-to-pay. A 2% flat fee on invoices that turn in 30 days implies an approximate 24% annualized cost on the advanced portion — higher than a well-structured bank line, but potentially justified by speed, accessibility, and the fact that approval relies on your customers&rsquo; credit rather than your own.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits and limitations */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-8">Potential Benefits and Limitations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Benefits */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">Potential Benefits</p>
              <ul className="space-y-3">
                {[
                  "May improve cash flow without waiting on customer payment cycles",
                  "Approval centers on customer credit, which may help businesses with limited credit history",
                  "Can scale with invoice volume — access may grow as your receivables grow",
                  "Outsourced collections may reduce accounts receivable overhead",
                  "Does not require hard assets as collateral in most programs",
                  "Non-debt structure may preserve borrowing capacity for other facilities",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#737373]">
                    <svg className="flex-shrink-0 w-4 h-4 text-[#0f0f0f] mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitations */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">Limitations to Consider</p>
              <ul className="space-y-3">
                {[
                  "Cost is higher than bank financing on an annualized basis in most programs",
                  "Customer notification requirements may affect some client relationships",
                  "Recourse factoring exposes you to repayment obligations on unpaid invoices",
                  "Concentration limits may restrict how much you can factor from a single customer",
                  "Contract minimums and early exit fees can reduce flexibility",
                  "UCC filings and assignment notices become part of your business record",
                ].map((l, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#737373]">
                    <svg className="flex-shrink-0 w-4 h-4 text-[#a3a3a3] mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="leading-relaxed">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-10 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-6 py-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1.5">Calculator</p>
              <h3 className="text-[1rem] font-semibold text-white mb-1.5">Estimate Your Factoring Net Proceeds</h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                Use the invoice factoring calculator to model advance rates, fee structures, and reserve releases based on your invoice amounts and estimated days-to-pay.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-[#e5e5e5] text-[#0f0f0f] text-sm font-medium hover:border-[#0f0f0f]/60 hover:text-white transition-colors"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Factoring Costs — Common Questions"
      />

      {/* CTA */}
      <CTASection
        headline="Evaluate whether factoring may fit your receivables"
        subtext="Submit a brief intake and ZEO will review potential factoring programs that may align with your customer base and invoice volume. Subject to underwriting and third-party provider approval."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare Factoring Types"
        secondaryHref="/factoring"
      />

      {/* Disclaimer */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="factoring" />
        </div>
      </section>
    </div>
  );
}

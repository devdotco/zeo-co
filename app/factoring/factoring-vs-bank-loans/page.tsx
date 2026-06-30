import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";

export const metadata: Metadata = buildMetadata({
  title: "Invoice Factoring vs Bank Loans Comparison | ZEO.co",
  description:
    "Compare invoice factoring and traditional bank loans across speed, qualification, cost, and cash-flow impact. Understand which structure may be a better fit for your business — subject to underwriting.",
  path: "/factoring/factoring-vs-bank-loans",
  keywords: [
    "factoring vs bank loans",
    "invoice factoring vs bank loan",
    "accounts receivable factoring comparison",
    "business financing comparison",
    "factoring vs line of credit",
    "bank loan alternatives for small business",
    "factoring advance rate vs bank loan",
  ],
});

const breadcrumbs = [
  { label: "Factoring", href: "/factoring" },
  { label: "Factoring vs Bank Loans" },
];

const faqItems = [
  {
    q: "Does factoring hurt my chances of getting a bank loan later?",
    a: "Factoring does not directly affect your business credit score the way a loan inquiry might, but there are indirect considerations. A factor typically files a UCC-1 financing statement against your accounts receivable, which encumbers that asset. When you later apply for a bank loan, the bank will see this lien and may require the factoring agreement to be terminated, or that the lien is subordinated, before extending credit against those same receivables. It is worth disclosing existing factoring arrangements to any prospective lender early in that process.",
  },
  {
    q: "Can a business use both factoring and a bank loan at the same time?",
    a: "It is possible but requires coordination. Many bank credit facilities include a negative pledge or borrowing base covenant that covers receivables — meaning your bank already has a claim on the same assets a factor would want to purchase. Using both simultaneously without lender consent can trigger a default on your bank facility. Some businesses structure a factoring program only for specific customer segments or invoice pools not covered by their existing bank facility, after negotiating with their bank. Always review existing credit agreements with counsel before adding a factoring program.",
  },
  {
    q: "My business is less than two years old. Is factoring or a bank loan more accessible?",
    a: "For businesses under two years old, traditional bank loans and SBA-guaranteed programs are generally harder to access — most bank business loan products require two or more years of operating history and established revenue. Invoice factoring focuses primarily on your customers' creditworthiness rather than your own operating history, which can make it more accessible to younger businesses that already have commercial customers paying on net terms. That said, factoring providers still evaluate your business, and some have their own seasoning or revenue minimums. Neither option is guaranteed — both are subject to underwriting.",
  },
  {
    q: "How does the effective cost of factoring compare to a bank loan's annual percentage rate?",
    a: "Factoring fees are typically quoted per 30-day period (e.g., 2% per 30 days) rather than as an annual percentage rate, which can make direct comparison difficult. A 2% monthly factoring fee annualizes to roughly 24% — considerably higher than a typical bank term loan rate. However, the comparison is not always apples-to-apples: factoring converts outstanding invoices to cash immediately and often includes collections services, while a bank loan is a standalone debt instrument. The right comparison depends on how frequently you factor invoices, your actual collection cycle, and the total cost of each option relative to the working capital benefit received.",
  },
  {
    q: "What happens to my factoring program if my bank discovers the UCC lien?",
    a: "If you have an existing bank facility with a blanket lien on assets including receivables, and you subsequently add a factoring program without notifying your bank, the bank may declare a default when it discovers the encumbrance. This is a contractual issue between you and your lender, not a regulatory one, but the consequences can be serious — including acceleration of the loan balance. Before establishing any factoring relationship, review your existing bank agreements for negative pledge clauses, cross-default provisions, and any restrictions on encumbering receivables. Have your attorney review both documents together.",
  },
];

const comparisonRows = [
  {
    feature: "Qualification focus",
    "Invoice Factoring": "Your customers' credit",
    "Bank Term Loan": "Your business credit & financials",
  },
  {
    feature: "Time to first funding",
    "Invoice Factoring": "1–5 business days (typical)",
    "Bank Term Loan": "Weeks to months",
  },
  {
    feature: "Minimum time in business",
    "Invoice Factoring": "Often 6–12 months",
    "Bank Term Loan": "Typically 2+ years",
  },
  {
    feature: "Revenue / income requirements",
    "Invoice Factoring": "B2B invoices; varies by factor",
    "Bank Term Loan": "DSCR, revenue minimums, profitability",
  },
  {
    feature: "Collateral required",
    "Invoice Factoring": "Accounts receivable (UCC-1 filed)",
    "Bank Term Loan": "Varies; may include RE, equipment, blanket lien",
  },
  {
    feature: "Repayment structure",
    "Invoice Factoring": "Customers pay the factor directly",
    "Bank Term Loan": "Fixed monthly principal + interest payments",
  },
  {
    feature: "Typical cost range",
    "Invoice Factoring": "1%–5% per 30-day period (varies)",
    "Bank Term Loan": "7%–15%+ APR (varies widely)",
  },
  {
    feature: "Scales with revenue",
    "Invoice Factoring": "Yes — tied to invoice volume",
    "Bank Term Loan": "No — fixed credit line or balance",
  },
  {
    feature: "Customer notification",
    "Invoice Factoring": "Usually required (notification factoring)",
    "Bank Term Loan": "Not applicable",
  },
  {
    feature: "Personal guarantee",
    "Invoice Factoring": "Often required",
    "Bank Term Loan": "Typically required",
  },
];

const benefitItems = [
  {
    title: "Approval driven by customer credit",
    body: "Because factoring underwriting focuses on your customers' ability to pay rather than your own credit profile, businesses with newer operating histories or thin credit files may qualify when traditional bank lending is unavailable.",
  },
  {
    title: "Funding scales with your revenue",
    body: "As your invoice volume grows, your available factoring capacity typically grows with it — unlike a fixed bank credit line that requires renegotiation to increase.",
  },
  {
    title: "No fixed monthly debt service",
    body: "Factoring does not create a loan balance requiring scheduled repayment. The cost is paid through the discount on each invoice rather than monthly principal-and-interest payments, which can simplify cash-flow management.",
  },
  {
    title: "Faster access to working capital",
    body: "Factoring programs can often fund within one to five business days of invoice verification. Bank loan applications typically involve weeks of underwriting, document review, and committee approval before funds are available.",
  },
];

const limitationItems = [
  {
    title: "Higher effective cost in most cases",
    body: "Factoring fees quoted per 30-day period can annualize well above typical bank loan rates. For businesses that qualify for bank financing, a term loan or line of credit may carry a lower total cost of capital over time.",
  },
  {
    title: "Requires commercial invoice receivables",
    body: "Factoring is only available to businesses that bill other businesses or government entities under net payment terms. Retail, direct-to-consumer, and cash-based businesses generally cannot factor receivables.",
  },
  {
    title: "Customer relationship visibility",
    body: "Notification factoring requires your customers to remit payment to the factor rather than to you directly. Some businesses are sensitive about customers learning they are using invoice financing, particularly in competitive or relationship-driven industries.",
  },
  {
    title: "UCC lien may complicate future bank financing",
    body: "A factor's UCC-1 filing against your receivables can create complications if you later pursue bank credit that also encumbers the same assets. Resolving the lien priority requires coordination between your factor and any future lender.",
  },
  {
    title: "Reserve holdback reduces net proceeds",
    body: "Factors typically advance 70%–90% of invoice value upfront, holding the remainder in reserve until the customer pays. The reserve is released net of fees after collection — your net proceeds are lower than the invoice face value.",
  },
];

export default function FactoringVsBankLoansPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Factoring"
        title="Factoring vs Bank Loans"
        subtitle="Invoice factoring and traditional bank loans both provide working capital, but they function very differently. Understanding how each is structured — who qualifies, how fast funds arrive, and what it actually costs — helps businesses evaluate which path may be a better fit."
      />

      {/* What Is Each / Who Uses It */}
      <section className="py-14 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Factoring */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Invoice Factoring
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                What Is Invoice Factoring?
              </h2>
              <div className="space-y-4 text-[#737373] leading-relaxed">
                <p>
                  Invoice factoring is the sale of outstanding accounts receivable to a third party — the
                  factor — at a discount. The factor advances a percentage of each invoice's face value
                  (typically 70%–90%) within one to two business days and then collects payment directly
                  from your customers when the invoice comes due. When the customer pays, the factor
                  releases the remaining reserve balance minus its fee.
                </p>
                <p>
                  Factoring is not a loan in the traditional sense: you are selling an asset (the
                  receivable), not borrowing against it. This means qualification is driven primarily by
                  your customers' creditworthiness rather than your own balance sheet. Businesses that
                  have strong commercial customers but newer operating histories or limited credit depth
                  are often better positioned for factoring than for bank debt.
                </p>
                <p>
                  Factoring is most common in industries where B2B payment terms create structural
                  working-capital gaps: staffing, freight and trucking, manufacturing, wholesale
                  distribution, and government contracting. These businesses routinely invoice on net-30
                  to net-90 terms while payroll, fuel, or supplier obligations come due weekly.
                </p>
              </div>
            </div>

            {/* Bank Loans */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Bank Term Loans
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                What Is a Traditional Bank Loan?
              </h2>
              <div className="space-y-4 text-[#737373] leading-relaxed">
                <p>
                  A traditional bank term loan provides a lump sum of capital that the business repays
                  over a set period with interest. Unlike factoring, the business retains full ownership
                  of its receivables and manages collections independently. The lender's underwriting
                  focuses on the borrower's ability to service the debt — analyzing business credit,
                  revenues, profitability, debt service coverage ratio, collateral, and operating
                  history.
                </p>
                <p>
                  Bank loans generally carry lower nominal interest rates than factoring fees when
                  annualized — making them a lower-cost option for businesses that qualify. However,
                  they are harder to access for younger or lower-credit businesses. Most bank term
                  loan products require two or more years of operating history, positive cash flow,
                  and demonstrated ability to service new debt alongside existing obligations.
                </p>
                <p>
                  The approval process for bank loans is longer and more document-intensive than
                  factoring — typically involving tax returns, financial statements, collateral appraisals,
                  and committee review. Businesses facing an immediate working-capital need may find
                  the bank loan timeline incompatible with their urgency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advance / Reserve Cycle */}
      <section className="py-14 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            How the Factoring Advance and Reserve Cycle Works
          </h2>
          <p className="text-[#737373] max-w-2xl mb-10 leading-relaxed">
            Unlike a bank loan, which disburses a lump sum that you repay on a schedule, factoring
            operates as a revolving cycle tied to each invoice you submit. Understanding each
            stage helps clarify both the cash-flow benefit and the cost structure.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "Submit Invoice",
                description:
                  "After completing work or delivering goods, you submit the invoice to the factor for verification. The factor confirms the invoice is valid, undisputed, and that your customer meets their credit criteria. Government and large commercial customers are typically approved fastest.",
              },
              {
                step: "Advance Funded",
                description:
                  "Once approved, the factor advances a percentage of the invoice face value — commonly 70% to 90% — directly to your business account. Most programs fund within one to two business days. The remaining balance is held in a reserve account.",
              },
              {
                step: "Factor Collects Payment",
                description:
                  "In a notification factoring arrangement, your customer is directed to remit payment to the factor rather than to your business. The factor manages payment follow-up and collections during the invoice's payment term.",
              },
              {
                step: "Reserve Released Net of Fees",
                description:
                  "When your customer pays, the factor deducts its discount fee (calculated based on how long the invoice was outstanding) and releases the reserve balance to you. If the customer does not pay, your obligations depend on whether your program is recourse or non-recourse.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0f2a14] border border-[#0f0f0f]/30 flex items-center justify-center text-[0.65rem] font-semibold text-[#0f0f0f] tabular-nums">
                    {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-[#0f0f0f]">{item.step}</p>
                </div>
                <p className="text-xs text-[#737373] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#e5e5e5] bg-[#ffffff] px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a3a3a3] mb-2">
              How Bank Loans Differ Structurally
            </p>
            <p className="text-sm text-[#737373] leading-relaxed max-w-3xl">
              A bank term loan or line of credit does not tie repayment to any individual customer
              payment. You receive a lump sum (or a draw against a revolving line) and make fixed
              monthly payments on a schedule regardless of when your customers pay you. This means
              a bank loan does not automatically scale up with more invoices — but it also means
              customers are never notified of the arrangement and your collections process remains
              entirely under your control.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Requirements and Invoice Criteria
          </h2>
          <p className="text-[#737373] max-w-2xl mb-10 leading-relaxed">
            Qualification criteria differ meaningfully between factoring and bank lending. The
            comparison below reflects general market patterns — actual requirements are set by
            individual providers and are subject to their own underwriting standards.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Factoring requirements */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0f0f0f] mb-4">
                Factoring — Common Criteria
              </h3>
              <div className="space-y-2.5">
                {[
                  ["Business Type", "B2B or B2G — invoices to commercial or government customers"],
                  ["Customer Credit", "Factor underwrites your customers, not just your business"],
                  ["Invoice Status", "Work completed or goods delivered; no outstanding disputes"],
                  ["Payment Terms", "Typically net 15 – net 90; longer terms may limit eligibility"],
                  ["Time in Business", "Often 6–12 months minimum; varies by factor"],
                  ["Monthly Volume", "Many programs require $25K–$100K+ in monthly invoice volume"],
                  ["Collateral", "Accounts receivable; factor files UCC-1 on AR"],
                  ["Industries", "Staffing, freight, manufacturing, distribution, government"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3"
                  >
                    <span className="text-xs font-medium text-[#a3a3a3] w-36 flex-shrink-0 pt-0.5">
                      {label}
                    </span>
                    <span className="text-sm text-[#0f0f0f]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bank loan requirements */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#a3a3a3] mb-4">
                Bank Term Loan — Common Criteria
              </h3>
              <div className="space-y-2.5">
                {[
                  ["Business Credit", "Established business credit profile; owner credit reviewed"],
                  ["Time in Business", "Typically 2+ years of operating history"],
                  ["Revenue", "Demonstrated revenue; specific minimums vary by program"],
                  ["Profitability", "DSCR of 1.25x or higher commonly required"],
                  ["Collateral", "May include real estate, equipment, inventory, blanket lien"],
                  ["Documentation", "Tax returns, P&L, balance sheet, business plan, AR aging"],
                  ["Personal Guarantee", "Typically required from owners with 20%+ ownership"],
                  ["Approval Timeline", "Weeks to months; SBA loans often 60–90+ days"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] px-4 py-3"
                  >
                    <span className="text-xs font-medium text-[#a3a3a3] w-36 flex-shrink-0 pt-0.5">
                      {label}
                    </span>
                    <span className="text-sm text-[#0f0f0f]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advance Rates and Fee Ranges */}
      <section className="py-14 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Advance Rates and Fee Ranges
          </h2>
          <p className="text-[#737373] max-w-2xl mb-8 leading-relaxed">
            The figures below represent general ranges observed across factoring programs and bank
            lending products. They are provided for educational purposes only and are not offers,
            guarantees, or commitments. Actual rates and terms are subject to underwriting, credit
            quality, industry, volume, and individual provider pricing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard
              label="Factoring Advance Rate"
              value="70–90"
              unit="%"
              note="Of invoice face value funded upfront. Remainder held in reserve. Subject to customer credit approval."
              highlight
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1–5"
              unit="% / 30 days"
              note="Varies by industry, customer credit, and volume. Not a guaranteed rate — subject to underwriting."
            />
            <MetricCard
              label="Bank Loan APR Range"
              value="7–15"
              unit="%+"
              note="Conventional bank term loan rates vary by creditworthiness, term, collateral, and lender. Not a guarantee."
            />
            <MetricCard
              label="Factoring Funding Speed"
              value="1–5"
              unit="business days"
              note="After invoice verification. Bank loan approval typically takes weeks to months."
            />
          </div>
          <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a3a3a3] mb-2">
              A Note on Cost Comparison
            </p>
            <p className="text-sm text-[#737373] leading-relaxed max-w-3xl">
              Factoring fees quoted per 30-day period are not directly comparable to annual
              percentage rates. A 2% monthly factoring fee annualizes to roughly 24%. However,
              the cost needs to be evaluated relative to the working-capital benefit: if factoring
              allows you to fulfill contracts you could not otherwise fund, the effective cost of
              not factoring may exceed the fee. For businesses that qualify for bank credit,
              a bank facility typically carries lower nominal cost — but the comparison depends
              heavily on how frequently you use each facility and the total cost of access.
            </p>
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="py-14 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Side-by-Side Comparison
          </h2>
          <p className="text-[#737373] max-w-2xl mb-8 leading-relaxed">
            Neither structure is universally better — the right fit depends on your industry,
            operating history, customer base, urgency, and cost tolerance. Use this comparison
            as a starting framework, not a final answer.
          </p>
          <ComparisonTable
            columns={["Invoice Factoring", "Bank Term Loan"]}
            rows={comparisonRows}
            highlightCol="Invoice Factoring"
          />
        </div>
      </section>

      {/* Benefits and Limitations */}
      <section className="py-14 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Potential Benefits and Key Limitations of Factoring
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0f0f0f] mb-4">
                Potential Benefits
              </h3>
              <div className="space-y-3">
                {benefitItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-xl border border-[#e5e5e5] bg-[#ffffff] px-5 py-4"
                  >
                    <svg
                      className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8L6.5 11.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-1">{item.title}</p>
                      <p className="text-xs text-[#737373] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitations */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#a3a3a3] mb-4">
                Key Limitations
              </h3>
              <div className="space-y-3">
                {limitationItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-xl border border-[#e5e5e5] bg-[#ffffff] px-5 py-4"
                  >
                    <svg
                      className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#a3a3a3]"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                      <path
                        d="M8 5.5V8.5M8 10.5V10.6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-1">{item.title}</p>
                      <p className="text-xs text-[#737373] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Factoring vs Bank Loans: Common Questions"
      />

      {/* Calculator Link */}
      <section className="py-10 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#a3a3a3] mb-1">
                Model Your Numbers
              </p>
              <p className="text-base font-medium text-[#0f0f0f] mb-1">
                Invoice Factoring Calculator
              </p>
              <p className="text-sm text-[#737373]">
                Estimate advance amounts, reserve balances, and potential fee costs based on your
                invoice volume and payment terms. Results are estimates only — not offers or
                guaranteed terms.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-6 py-2.5 rounded-lg border border-[#e5e5e5] text-sm font-medium text-[#0f0f0f] hover:border-[#0f0f0f] hover:text-[#0f0f0f] transition-colors whitespace-nowrap"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Explore Whether Factoring May Fit Your Business"
        subtext="ZEO connects businesses with third-party factoring providers. Submit a brief intake and we'll review which programs may be a potential fit, subject to underwriting and provider approval."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare Factoring Types"
        secondaryHref="/factoring"
      />

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="factoring" />
      </div>
    </main>
  );
}

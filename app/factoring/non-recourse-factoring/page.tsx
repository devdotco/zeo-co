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
  title: "Non-Recourse Factoring | ZEO.co",
  description:
    "Learn how non-recourse invoice factoring transfers credit risk to the factor when a customer becomes insolvent. Understand advance rates, fee structures, eligibility, and how it compares to recourse factoring.",
  path: "/factoring/non-recourse-factoring",
  keywords: [
    "non-recourse factoring",
    "invoice factoring credit risk",
    "non-recourse accounts receivable",
    "factoring without recourse",
    "credit risk transfer factoring",
    "non-recourse factoring rates",
    "business invoice financing",
  ],
});

const breadcrumbs = [
  { label: "Factoring", href: "/factoring" },
  { label: "Non-Recourse Factoring" },
];

const faqItems = [
  {
    q: "What does 'non-recourse' actually protect me from?",
    a: "Non-recourse factoring typically protects your business from loss if a specific customer becomes insolvent or files for bankruptcy before paying the invoice. If the factor approves your customer's credit and the customer later cannot pay due to insolvency, the factor absorbs that loss rather than charging it back to you. Non-recourse does not protect against customer disputes, invoice errors, short payments due to product or service issues, or slow payment — those scenarios usually remain your responsibility.",
  },
  {
    q: "How does a factor decide which customers qualify for non-recourse terms?",
    a: "Factors run their own credit analysis on each of your customers before approving them for non-recourse coverage. They typically look at D&B and Experian business credit scores, payment history, years in business, industry segment, and sometimes financial statements. Customers with strong credit profiles may receive full non-recourse coverage; others may receive partial coverage, recourse-only terms, or be declined for that customer. The factor sets the credit limit per customer, not per invoice.",
  },
  {
    q: "Are the fees higher for non-recourse factoring compared to recourse?",
    a: "Generally yes. Because the factor is absorbing the credit risk of customer insolvency, they price that risk into their discount rate. Non-recourse factoring fees typically run 0.5% to 1.5% higher per 30-day period than comparable recourse arrangements, though the spread varies by industry, customer credit quality, and volume. For businesses with creditworthy, well-known commercial customers, the premium may be narrower. Subject to underwriting and the specific factor's pricing model.",
  },
  {
    q: "Does non-recourse factoring appear as debt on my balance sheet?",
    a: "In many cases, properly structured non-recourse factoring may allow the receivables to be treated as a true sale of assets rather than a secured borrowing, which can keep the advance off your balance sheet as debt. However, accounting treatment depends on how the agreement is structured, applicable accounting standards (ASC 860 under U.S. GAAP or IFRS 9), and the specific recourse provisions in the contract. You should confirm accounting treatment with your CPA or controller before entering any factoring arrangement.",
  },
  {
    q: "Which industries use non-recourse factoring most often?",
    a: "Non-recourse factoring is most commonly used in staffing and workforce solutions, trucking and freight brokerage, manufacturing, wholesale distribution, and government contracting. These sectors typically invoice well-defined commercial or government customers under net payment terms, which makes credit underwriting more predictable. Industries where invoices are frequently disputed — construction, consulting, or custom project work — tend to face more limited non-recourse availability because those disputes fall outside the insolvency-only protection.",
  },
];

const comparisonRows = [
  {
    feature: "Credit risk on customer insolvency",
    "Non-Recourse": "Factor absorbs",
    "Recourse": "Seller absorbs",
  },
  {
    feature: "Typical discount rate (per 30 days)",
    "Non-Recourse": "1.5% – 4.5%",
    "Recourse": "1.0% – 3.5%",
  },
  {
    feature: "Customer credit approval required",
    "Non-Recourse": "Yes — per customer",
    "Recourse": "Often, but less strict",
  },
  {
    feature: "Chargeback for slow pay / dispute",
    "Non-Recourse": "Yes — still applies",
    "Recourse": "Yes — applies",
  },
  {
    feature: "Potential balance-sheet treatment",
    "Non-Recourse": "True sale possible",
    "Recourse": "Usually secured borrowing",
  },
  {
    feature: "Best fit",
    "Non-Recourse": "Strong commercial customers",
    "Recourse": "Mixed or smaller customers",
  },
];

export default function NonRecourseFactoringPage() {
  return (
    <main className="bg-[#0a0d0b] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Factoring"
        title="Non-Recourse Factoring"
        subtitle="Convert outstanding invoices to working capital while transferring the risk of customer insolvency to the factor. Understand how protection works, what it covers, and what it does not — before signing."
      />

      {/* What Is It */}
      <section className="py-14 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                What Is Non-Recourse Factoring?
              </h2>
              <div className="space-y-4 text-[#9aaa98] leading-relaxed">
                <p>
                  Factoring is the sale of accounts receivable — your unpaid invoices — to a third party
                  called a factor, who advances most of the invoice value upfront and collects payment
                  directly from your customers. In a <strong className="text-[#eef2ec] font-medium">recourse</strong> arrangement,
                  if your customer fails to pay, you are required to buy that invoice back. In a{" "}
                  <strong className="text-[#eef2ec] font-medium">non-recourse</strong> arrangement, the factor
                  accepts the credit risk of your customer becoming insolvent and absorbs that loss instead
                  of charging it back to your business.
                </p>
                <p>
                  The distinction matters most in industries with long payment cycles and concentrated
                  customer exposure — where a single customer failing could create a significant cash-flow
                  crisis. Non-recourse structures shift that specific insolvency risk to the factor, who
                  prices it into the discount rate and conducts their own credit analysis on your
                  customer base before approving invoices.
                </p>
                <p>
                  It is important to understand that "non-recourse" has a narrow legal definition in most
                  factoring agreements. Protections are typically limited to customer insolvency — not
                  disputes, short-payments, quality claims, or slow pay. Businesses in industries where
                  invoice disputes are common should review the specific recourse language in any agreement
                  carefully with qualified counsel.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6b7e69] mb-5">
                Who Commonly Uses It
              </h3>
              <div className="space-y-3">
                {[
                  {
                    industry: "Staffing & Workforce",
                    detail:
                      "Weekly payroll obligations against net-30 to net-60 client terms create a persistent funding gap that non-recourse factoring can help bridge.",
                  },
                  {
                    industry: "Freight & Trucking",
                    detail:
                      "Carriers typically invoice freight brokers and shippers on net-15 to net-45 terms. Non-recourse programs are common in this sector.",
                  },
                  {
                    industry: "Manufacturing & Distribution",
                    detail:
                      "High invoice volumes with creditworthy wholesale or retail customers are well-suited to non-recourse coverage, which factors can underwrite at scale.",
                  },
                  {
                    industry: "Government Contracting",
                    detail:
                      "Federal, state, and municipal receivables carry very low insolvency risk. Factors often provide non-recourse terms readily for approved government invoices.",
                  },
                ].map((item) => (
                  <div
                    key={item.industry}
                    className="rounded-xl border border-[#1e2620] bg-[#111512] px-5 py-4"
                  >
                    <p className="text-sm font-medium text-[#eef2ec] mb-1">{item.industry}</p>
                    <p className="text-xs text-[#9aaa98] leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advance / Reserve Cycle */}
      <section className="py-14 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            How the Advance and Reserve Cycle Works
          </h2>
          <p className="text-[#9aaa98] max-w-2xl mb-10 leading-relaxed">
            Non-recourse factoring follows the same mechanical flow as recourse factoring, with a
            distinct difference in how the factor handles unpaid invoices at the end of the cycle.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "Submit & Verify",
                description:
                  "You submit invoices to the factor for verification. The factor confirms the invoice is valid, that your customer has been credit-approved for non-recourse terms, and that there are no outstanding disputes on the account.",
              },
              {
                step: "Advance Funded",
                description:
                  "The factor advances a percentage of the invoice face value — commonly 70% to 90%, depending on industry and customer credit quality — directly to your business account, typically within 24 to 48 hours of approval.",
              },
              {
                step: "Customer Pays Factor",
                description:
                  "Your customer remits payment directly to the factor under the payment instructions provided by the factor. The factor manages collections during this period under a notification factoring structure.",
              },
              {
                step: "Reserve Released (or Loss Absorbed)",
                description:
                  "When the customer pays, the factor deducts its discount fee and releases the reserve balance to you. If the customer becomes insolvent and cannot pay, the factor absorbs that specific loss — you retain the advance with no chargeback obligation.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0f2a14] border border-[#22c55e]/30 flex items-center justify-center text-[0.65rem] font-semibold text-[#22c55e] tabular-nums">
                    {i + 1}
                  </span>
                  <p className="text-sm font-semibold text-[#eef2ec]">{item.step}</p>
                </div>
                <p className="text-xs text-[#9aaa98] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Insolvency-only callout */}
          <div className="mt-8 rounded-xl border border-[#22c55e]/20 bg-[#0f2a14] px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#22c55e] mb-2">
              What "Non-Recourse" Does Not Cover
            </p>
            <p className="text-sm text-[#9aaa98] leading-relaxed max-w-3xl">
              Most non-recourse agreements limit protection to verified customer insolvency — formal
              bankruptcy filing, assignment for the benefit of creditors, or similar proceedings. If
              your customer simply refuses to pay, disputes the invoice, claims a product defect,
              pays only a portion, or goes out of business informally without a formal insolvency
              proceeding, the factor may still have recourse to charge that invoice back to your
              reserve. Read your specific agreement and have counsel review the recourse carve-outs
              before you rely on non-recourse as credit protection.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Eligibility and Invoice Criteria
              </h2>
              <div className="space-y-4 text-[#9aaa98] leading-relaxed">
                <p>
                  Non-recourse factoring is generally available to B2B and B2G businesses with
                  established commercial or government customers. The factor&apos;s underwriting focuses
                  primarily on the creditworthiness of your customers — not just your own business —
                  since they are assuming the insolvency risk on approved accounts.
                </p>
                <p>
                  Factors typically require that invoices represent completed work or fully delivered
                  goods with no outstanding disputes. Progress billings, pre-delivery invoices, and
                  invoices subject to retainage holdbacks are harder to factor on non-recourse terms.
                  Most factors also prefer invoices with payment terms of net 90 or less and minimum
                  invoice sizes, though thresholds vary by program.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6b7e69] mb-4">
                Common Criteria (Subject to Underwriting)
              </h3>
              {[
                ["Business Type", "B2B or B2G — not consumer receivables"],
                ["Customer Credit", "Factor must approve each customer's credit"],
                ["Invoice Status", "Work complete, goods delivered, no dispute"],
                ["Payment Terms", "Typically net 30 – net 90"],
                ["Minimum Volume", "Often $25K – $100K+ per month (varies)"],
                ["Industries", "Staffing, freight, manufacturing, distribution, gov. contracting"],
                ["UCC Filing", "Factor typically files a UCC-1 on receivables"],
                ["Customer Notification", "Most non-recourse programs are notification factoring"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-lg border border-[#1e2620] bg-[#111512] px-4 py-3"
                >
                  <span className="text-xs font-medium text-[#6b7e69] w-36 flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-sm text-[#eef2ec]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advance Rates and Fees */}
      <section className="py-14 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Advance Rates and Fee Ranges
          </h2>
          <p className="text-[#9aaa98] max-w-2xl mb-8 leading-relaxed">
            The figures below represent ranges observed across non-recourse factoring programs and
            are provided for educational purposes only. Actual rates and advance percentages are
            subject to underwriting, customer credit quality, industry, invoice volume, and the
            specific factor&apos;s pricing model. These are not offers or guaranteed terms.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard
              label="Typical Advance Rate"
              value="70–90"
              unit="%"
              note="Of invoice face value, funded upfront. Subject to customer credit approval."
            />
            <MetricCard
              label="Discount Fee Range"
              value="1.5–4.5"
              unit="% / 30 days"
              note="Higher than recourse due to insolvency risk absorption. Varies by program."
            />
            <MetricCard
              label="Reserve Rate"
              value="10–30"
              unit="%"
              note="Held until customer pays. Released less fees when payment clears."
            />
            <MetricCard
              label="Typical Contract Term"
              value="6–24"
              unit="months"
              note="Many programs have minimum volume commitments. Some offer spot factoring."
              highlight
            />
          </div>
          <ProductDisclaimer type="factoring" className="mt-2" />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-14 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Non-Recourse vs. Recourse Factoring
          </h2>
          <p className="text-[#9aaa98] max-w-2xl mb-8 leading-relaxed">
            The right structure depends on your customer base, risk tolerance, and cost sensitivity.
            Neither arrangement is universally better — the comparison below highlights the key
            structural differences to inform your evaluation.
          </p>
          <ComparisonTable
            columns={["Non-Recourse", "Recourse"]}
            rows={comparisonRows}
            highlightCol="Non-Recourse"
          />
        </div>
      </section>

      {/* Benefits and Limitations */}
      <section className="py-14 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Potential Benefits and Key Limitations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#22c55e] mb-4">
                Potential Benefits
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Insolvency risk transfer",
                    body: "If an approved customer enters formal bankruptcy or becomes insolvent, the factor generally absorbs that specific loss rather than charging it back — providing a degree of credit protection not available in recourse arrangements.",
                  },
                  {
                    title: "Possible off-balance-sheet treatment",
                    body: "Properly structured non-recourse factoring may qualify as a true sale of receivables under applicable accounting standards, potentially keeping the advance off your balance sheet as debt. Confirm with your accountant.",
                  },
                  {
                    title: "Predictable working capital",
                    body: "Converting net-30 to net-90 invoices to same-day or next-day cash allows for more consistent cash-flow planning, payroll funding, and supplier payment — without waiting on customer payment cycles.",
                  },
                  {
                    title: "Outsourced collections",
                    body: "Factors handle collections and payment follow-up with your customers, which can reduce administrative burden on your AR team for accounts included in the program.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-xl border border-[#1e2620] bg-[#0a0d0b] px-5 py-4"
                  >
                    <svg
                      className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#22c55e]"
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
                      <p className="text-sm font-medium text-[#eef2ec] mb-1">{item.title}</p>
                      <p className="text-xs text-[#9aaa98] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Limitations */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6b7e69] mb-4">
                Key Limitations
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Higher cost than recourse factoring",
                    body: "The factor prices the insolvency risk into their discount rate. Non-recourse programs typically carry higher fees than equivalent recourse programs, which can meaningfully reduce your effective revenue on factored invoices over time.",
                  },
                  {
                    title: "Narrow insolvency-only protection",
                    body: "Non-recourse does not protect against customer disputes, short-payments for any reason, deductions, or slow pay. These scenarios typically remain your responsibility and may result in chargebacks from the reserve.",
                  },
                  {
                    title: "Customer credit approval gates coverage",
                    body: "The factor must individually approve each customer for non-recourse terms. Smaller, newer, or lower-credit customers may receive only recourse coverage or may not be accepted at all, limiting the program's applicability.",
                  },
                  {
                    title: "Customer notification required",
                    body: "Most non-recourse programs are notification factoring — your customers will be directed to pay the factor directly. This visibility into your financing arrangement may not be suitable for every client relationship.",
                  },
                  {
                    title: "UCC-1 lien on receivables",
                    body: "Factors typically file a UCC-1 financing statement against your receivables. This may create complications if you have existing lenders, lines of credit, or other financing that also encumbers your AR.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 rounded-xl border border-[#1e2620] bg-[#0a0d0b] px-5 py-4"
                  >
                    <svg
                      className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#6b7e69]"
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
                      <p className="text-sm font-medium text-[#eef2ec] mb-1">{item.title}</p>
                      <p className="text-xs text-[#9aaa98] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Link */}
      <section className="py-10 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#1e2620] bg-[#111512] px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7e69] mb-1">
                Estimate Your Numbers
              </p>
              <p className="text-base font-medium text-[#eef2ec] mb-1">
                Invoice Factoring Calculator
              </p>
              <p className="text-sm text-[#9aaa98]">
                Model advance amounts, reserve balances, and estimated fee costs based on your
                invoice volume and terms. Results are estimates only — not offers.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-6 py-2.5 rounded-lg border border-[#1e2620] text-sm font-medium text-[#eef2ec] hover:border-[#22c55e] hover:text-[#22c55e] transition-colors whitespace-nowrap"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Non-Recourse Factoring: Common Questions"
      />

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

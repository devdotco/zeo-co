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
  title: "Healthcare Medical A/R Factoring | ZEO.co",
  description:
    "Healthcare factoring converts outstanding medical receivables — insurance claims, Medicaid, Medicare, and commercial payer invoices — into working capital before payers remit. Learn how advance rates, reserve accounts, and healthcare-specific fee structures work.",
  path: "/factoring/healthcare",
  keywords: [
    "healthcare factoring",
    "medical receivables factoring",
    "medical accounts receivable financing",
    "medical billing factoring",
    "insurance claim factoring",
    "healthcare working capital",
    "physician practice financing",
    "home health factoring",
  ],
});

const faqItems = [
  {
    q: "Can healthcare providers factor Medicare and Medicaid receivables?",
    a: "Factoring Medicare and Medicaid receivables is legally and operationally complex. The federal Anti-Assignment Act generally prohibits the direct assignment of Medicare claims to third parties, which limits how factors can structure arrangements around government payer receivables. Some factors work around this through lock-box arrangements, power-of-attorney structures, or by focusing solely on commercial payer invoices within a mixed-payer practice. Before factoring any government payer receivables, review the arrangement with healthcare legal counsel familiar with the Anti-Assignment Act and applicable state regulations. ZEO is not a law firm and this is not legal advice.",
  },
  {
    q: "How does a factor handle insurance claim adjustments and partial payments?",
    a: "Healthcare invoices are routinely subject to contractual adjustments, coordination of benefits reductions, and partial payments from insurance payers — behaviors that do not occur in standard B2B factoring. Healthcare factors account for this by applying an expected collection rate (often based on your payer mix and historical remittance data) when determining advance amounts. When a claim pays less than the invoiced amount due to contractual adjustment, the shortfall is typically covered by the reserve rather than treated as a buyback event. However, claims denied or pended for clinical reasons may be treated differently. The exact treatment of underpayments, denials, and adjustments should be spelled out clearly in the factoring agreement.",
  },
  {
    q: "Does healthcare factoring require me to notify my insurance payers?",
    a: "In most healthcare factoring arrangements, the factor does notify payers of the assignment and requests that remittances be redirected to a lockbox or bank account it controls. This is standard practice and is generally permitted with commercial payers, though some payer contracts include anti-assignment clauses. Before entering a factoring arrangement, it is worth reviewing your payer contracts for assignment restrictions, particularly with large commercial insurers, and confirming the factor has a process for handling payers that do not accept redirection.",
  },
  {
    q: "What role does my billing and coding accuracy play in factoring eligibility?",
    a: "Healthcare factors heavily weight your practice's billing and collections infrastructure when underwriting. High denial rates, slow resubmission cycles, excessive accounts aging beyond 120 days, and inconsistent coding can all reduce eligible receivable balances or affect advance rates. Some factors require access to your practice management system or billing reports as part of due diligence. Providers with clean claim submission rates and low adjustment variance tend to qualify for more favorable terms, though all outcomes are subject to underwriting by third-party providers.",
  },
  {
    q: "Is healthcare factoring the same as a healthcare business line of credit?",
    a: "No. Healthcare factoring is the sale of specific receivables to a third party; a business line of credit is a revolving debt facility backed by your overall creditworthiness. Factoring availability scales with your outstanding eligible claims rather than with an approved credit limit. This means factoring can grow with patient volume without requiring lender approval for each increase. A line of credit typically carries a fixed ceiling and is generally underwritten against your business financials, credit history, and collateral — not the value of specific invoices. Each structure has different cost profiles, balance sheet treatment, and operational implications.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Healthcare Factoring": "Eligible A/R claims",
    "Practice Line of Credit": "Overall creditworthiness",
    "SBA 7(a) Loan": "Business financials & collateral",
  },
  {
    feature: "Primary underwriting focus",
    "Healthcare Factoring": "Payer mix & claim quality",
    "Practice Line of Credit": "Business & owner credit",
    "SBA 7(a) Loan": "DSCR, equity, collateral",
  },
  {
    feature: "Typical funding speed",
    "Healthcare Factoring": "24–72 hrs (post-onboarding)",
    "Practice Line of Credit": "Weeks to months",
    "SBA 7(a) Loan": "Weeks to months",
  },
  {
    feature: "Government payer complexity",
    "Healthcare Factoring": "High — legal review needed",
    "Practice Line of Credit": "None",
    "SBA 7(a) Loan": "None",
  },
  {
    feature: "Scales with patient volume",
    "Healthcare Factoring": "Yes — tied to eligible A/R",
    "Practice Line of Credit": "Partially (fixed ceiling)",
    "SBA 7(a) Loan": "No",
  },
  {
    feature: "Personal guarantee typically required",
    "Healthcare Factoring": "Sometimes",
    "Practice Line of Credit": "Usually",
    "SBA 7(a) Loan": "Yes (for 20%+ owners)",
  },
  {
    feature: "Payer notification required",
    "Healthcare Factoring": "Typically yes",
    "Practice Line of Credit": "No",
    "SBA 7(a) Loan": "No",
  },
];

export default function HealthcareFactoringPage() {
  return (
    <div className="bg-[#0a0d0b] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Healthcare Factoring"
        subtitle="Healthcare providers routinely wait 30 to 90 days — or longer — for insurance payers and government programs to remit on submitted claims. Healthcare A/R factoring may allow eligible providers to convert those outstanding receivables into working capital before payers settle. Subject to underwriting by third-party providers."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Healthcare Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="65–85%"
              note="Varies by payer mix, claim quality, and provider type"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="2–6%"
              unit="per invoice"
              note="Higher than general factoring due to claim complexity"
            />
            <MetricCard
              label="Funding After Onboarding"
              value="24–72"
              unit="hrs"
              note="After claim verification and payer eligibility review"
              highlight
            />
            <MetricCard
              label="Typical Claim Terms"
              value="30–90"
              unit="days"
              note="Government payers often remit on longer cycles"
            />
          </div>
          <p className="text-xs text-[#6b7e69] mt-4">
            Ranges shown are illustrative only and reflect general market conditions. Actual advance rates and fees are subject to underwriting by third-party providers and are not guaranteed. Healthcare factoring involves regulatory complexity not present in standard commercial factoring.
          </p>
        </div>
      </section>

      {/* What is healthcare factoring */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            What Is Healthcare Factoring?
          </h2>
          <div className="space-y-4 text-[#9aaa98] leading-relaxed text-[0.9375rem]">
            <p>
              Healthcare factoring — sometimes called medical receivables factoring or medical A/R financing — is a form of accounts receivable financing in which a healthcare provider sells its outstanding insurance claims, patient invoices, or third-party payer receivables to a specialized factoring company at a discount in exchange for an immediate cash advance. Rather than waiting for a payer to process and remit on a submitted claim, the provider receives a large portion of the expected collectible amount upfront.
            </p>
            <p>
              Healthcare factoring differs meaningfully from standard commercial invoice factoring. Medical receivables are subject to contractual adjustments, coordination of benefits reductions, payer-specific fee schedules, coding-based denials, and — in the case of Medicare and Medicaid — federal assignment restrictions that limit how receivables can be transferred. Factors that specialize in healthcare are structured to account for these variables, using payer mix analysis, historical collection rates, and remittance data rather than raw invoice face value to determine advance amounts.
            </p>
            <p>
              Because the advance is underwritten against the expected net collectible value of claims — not the billed charge — healthcare providers typically see advance rates in the 65% to 85% range, somewhat lower than the 70% to 90% commonly seen in general commercial factoring. The difference reflects the higher operational complexity and collection uncertainty inherent in third-party payer reimbursement. All outcomes are subject to underwriting by a third-party provider, and no approval or rate is guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Who uses it */}
      <section className="py-14 border-b border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
              Who It May Fit
            </p>
            <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
              Provider Types That Commonly Use Healthcare Factoring
            </h2>
            <p className="text-[#9aaa98] leading-relaxed text-[0.9375rem]">
              Healthcare factoring is most relevant to providers that bill commercial insurance payers, managed care organizations, or self-pay patients on a net-terms basis and experience cash flow gaps during the period between claim submission and remittance. The arrangement is generally not suited to providers that collect at point of service or that operate primarily on a cash or concierge basis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C6.24 2 4 4.24 4 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              }
              title="Physician Practices and Groups"
              description="Independent practices and multi-physician groups billing commercial insurers and Medicare Advantage plans may experience 30- to 60-day remittance cycles. Factoring commercial payer receivables may bridge recurring cash flow gaps between payroll cycles and payer remittance."
              tags={["Primary care", "Specialty practices", "Multi-site groups"]}
              href="/factoring/healthcare"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M6 4V3a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M9 8v4M7 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              }
              title="Home Health and Hospice Agencies"
              description="Home health agencies billing Medicare and managed care payers often encounter lengthy remittance windows alongside weekly staffing costs. Commercial payer receivables — where assignment restrictions are less restrictive than traditional Medicare — may be eligible depending on payer contract terms."
              tags={["Home health", "Private duty nursing", "Hospice"]}
              href="/factoring/healthcare"
            />
            <FinancingPathCard
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M5 9h8M9 5v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              }
              title="Behavioral Health and Therapy Providers"
              description="Outpatient behavioral health practices, substance use treatment facilities, and therapy groups billing commercial managed care often deal with high administrative claim burdens and unpredictable denial rates. Healthcare factors experienced in this segment may account for these patterns during underwriting."
              tags={["Behavioral health", "SUD treatment", "Physical therapy"]}
              href="/factoring/healthcare"
            />
          </div>
        </div>
      </section>

      {/* How the advance/reserve cycle works */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-semibold text-white mb-5 text-balance">
            The Healthcare A/R Advance and Reserve Cycle
          </h2>
          <p className="text-[#9aaa98] leading-relaxed text-[0.9375rem] mb-8">
            Healthcare factoring follows a similar structure to commercial invoice factoring, but with additional steps to account for payer verification, expected collection rates, and remittance redirection. Understanding each phase helps clarify what the arrangement costs and when funds move.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "Services rendered and claims submitted to payers",
                body: "After delivering a covered service, your billing team submits a claim to the applicable payer — a commercial insurer, managed care organization, or self-pay patient. The claim enters adjudication. You identify eligible submitted claims to present to the factoring company.",
              },
              {
                step: "2",
                title: "The factor underwrites the claim batch and determines the net collectible estimate",
                body: "Because medical bills are subject to contractual adjustments and payer fee schedules, the factor does not simply advance against the billed charge. Instead, it applies your payer mix, historical collection rates, and expected contractual adjustment percentages to estimate net collectible value. The advance rate — typically 65% to 85% of estimated net collectibles — is applied to that figure, not to gross charges. Actual advance amounts are subject to underwriting.",
              },
              {
                step: "3",
                title: "Payers are notified and redirected to a factor-controlled lockbox",
                body: "For commercial payer claims where assignment is permitted under the payer contract, the factor notifies the payer of the assignment and provides remittance instructions. Remittances — including explanation-of-benefits (EOB) documents — are directed to a bank account or lockbox controlled by the factor. Your billing team typically retains responsibility for working denied or underpaid claims.",
              },
              {
                step: "4",
                title: "Payer remits and the factor reconciles the claim",
                body: "When the payer remits, the factor applies the payment against the funded advance. Contractual adjustments reduce the claim balance as expected; the factor reconciles against its advance. If a claim pays within the expected range, the reserve balance is released to you minus the factoring fee. Denied claims — depending on denial type and your agreement — may require resubmission or may trigger recourse provisions.",
              },
              {
                step: "5",
                title: "Reserve released net of fees; denied claims handled per agreement",
                body: "Once a claim is resolved, the reserve held against it — the funded amount not advanced at funding — is released back to you less the factoring fee. Your agreement should clearly specify how billing-related denials, administrative denials, and coordination-of-benefits reductions are treated, and whether any of these trigger a buyback obligation on your part.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-5">
                <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#1e2620] bg-[#111512] flex items-center justify-center text-[0.65rem] font-semibold text-[#22c55e] tabular-nums">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#eef2ec] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9aaa98] leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 border-b border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
              Requirements
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              What Healthcare Factors Typically Evaluate
            </h2>
            <p className="text-[#9aaa98] leading-relaxed text-[0.9375rem]">
              Healthcare factoring involves additional due diligence beyond standard commercial factoring, including billing practices, payer mix review, and compliance verification. The criteria below are commonly assessed, though requirements vary by factor and no approval is guaranteed. All decisions are subject to underwriting by third-party providers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Commercial Payer Receivables",
                body: "Most healthcare factors focus on commercial insurance receivables — claims submitted to private insurers, managed care organizations, and employer-sponsored plans. Medicare and Medicaid receivables are generally restricted from direct assignment under federal law and require specialized structuring. Government payer receivables should not be submitted without explicit confirmation from your factor and a review by qualified legal counsel.",
              },
              {
                title: "Clean Claim Rate and Billing Infrastructure",
                body: "Factors assess your practice's billing quality: first-pass claim acceptance rates, average days in accounts receivable, denial percentages, and the speed of your denial management cycle. Practices with high clean claim rates and a low proportion of accounts aged beyond 90 days tend to qualify for higher advance rates and lower fees.",
              },
              {
                title: "Payer Contract Assignment Provisions",
                body: "Your payer contracts must permit assignment of claims to a third party, or you must confirm that your factor's structure does not technically constitute a prohibited assignment. Some managed care contracts include anti-assignment clauses that restrict or require payer consent before redirecting remittances. A review of material payer contracts is advisable before onboarding.",
              },
              {
                title: "Licensure and Compliance Standing",
                body: "Healthcare providers must be properly licensed and in good standing with applicable state and federal regulatory bodies. Some factors also verify that submitted claims are tied to properly credentialed providers. Pending regulatory actions, investigations, or exclusions from federal programs may affect eligibility.",
              },
              {
                title: "Practice Management System Access",
                body: "Many healthcare factors request read-only access to your practice management or billing software — or export reports — to evaluate receivable aging, payer mix, and collection history during underwriting. Providers that use recognized billing platforms and can produce clean aging reports typically move through onboarding more quickly.",
              },
              {
                title: "No Prior Liens on Receivables",
                body: "As with all factoring, the receivables you submit must be free of existing liens or pledges. If you have an existing working capital facility, line of credit, or equipment loan with a blanket lien, that lender may need to provide a subordination or consent before healthcare receivables can be assigned to a factor.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-5"
              >
                <h3 className="text-[0.9375rem] font-semibold text-[#eef2ec] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9aaa98] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advance rates and fee ranges */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
            Pricing
          </p>
          <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
            Advance Rates and Fee Structures in Healthcare Factoring
          </h2>
          <p className="text-[#9aaa98] leading-relaxed text-[0.9375rem] mb-6">
            Healthcare factoring fees are generally higher than those for standard commercial factoring, reflecting the additional operational complexity, longer payer remittance cycles, and higher variance in collection outcomes. The figures below are illustrative market ranges only — not offers, commitments, or indicative of any specific transaction. All terms are subject to underwriting by a third-party provider.
          </p>
          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#eef2ec]">Advance Rate</h3>
                <span className="text-sm font-semibold text-[#22c55e] tabular-nums flex-shrink-0">65 – 85%</span>
              </div>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Healthcare factors advance against estimated net collectible value rather than gross billed charges. A practice billing $100,000 in gross charges with a 70% collection rate has an estimated net collectible of $70,000 — an 80% advance against net collectibles would yield approximately $56,000 at funding. Understanding the factor's methodology for estimating net collectibles is important when modeling your actual liquidity benefit.
              </p>
            </div>
            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#eef2ec]">Factoring Fee</h3>
                <span className="text-sm font-semibold text-[#22c55e] tabular-nums flex-shrink-0">2 – 6% per claim batch</span>
              </div>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Healthcare factoring fees vary more widely than standard commercial factoring, reflecting payer type, average days-to-pay, denial rates, and the volume of claims submitted. Fee structures may be flat per funding cycle, tiered by days outstanding, or blended based on payer mix. Slow payers — commercial plans with high prior authorization burdens or managed Medicaid programs — will tend to produce higher effective costs, particularly if the fee accrues daily or weekly after a threshold period.
              </p>
            </div>
            <div className="rounded-xl border border-[#1e2620] bg-[#111512] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#eef2ec]">Additional Fees to Evaluate</h3>
                <span className="text-sm font-semibold text-[#9aaa98] flex-shrink-0">Varies</span>
              </div>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Healthcare factoring agreements may include setup and onboarding fees, per-claim processing fees, monthly minimum volume requirements, payer notification fees, wire or ACH transfer charges, and early termination penalties. Some factors also charge fees for accessing practice management data or for handling unusually high denial volumes. Review the complete fee schedule before executing any agreement.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#22c55e]/20 bg-[#0f2a14] px-5 py-4">
            <p className="text-sm text-[#9aaa98] leading-relaxed">
              <span className="text-[#eef2ec] font-medium">Estimate your net advance and costs.</span>{" "}
              The{" "}
              <Link
                href="/calculators/invoice-factoring-calculator"
                className="text-[#22c55e] underline underline-offset-2 hover:text-white transition-colors"
              >
                Invoice Factoring Calculator
              </Link>{" "}
              lets you model advance amounts, factoring fees, and reserve releases based on your receivable balances and expected collection rates. All outputs are estimates only and do not constitute an offer or commitment from any provider.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-14 border-b border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4 text-balance">
              Healthcare Factoring vs. Other Practice Financing Options
            </h2>
            <p className="text-[#9aaa98] text-[0.9375rem] leading-relaxed">
              No single financing structure suits every practice. This table highlights structural differences between commonly considered options — not cost rankings, endorsements, or guarantees of any specific outcome. Subject to underwriting; terms vary by provider.
            </p>
          </div>
          <ComparisonTable
            columns={["Healthcare Factoring", "Practice Line of Credit", "SBA 7(a) Loan"]}
            rows={comparisonRows}
            highlightCol="Healthcare Factoring"
          />
        </div>
      </section>

      {/* Benefits and limitations */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
                Potential Benefits
              </p>
              <h2 className="text-xl font-semibold text-white mb-5">What Healthcare Factoring May Offer</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Working capital tied to patient volume, not credit limits",
                    body: "As eligible claim volume grows, potential access to working capital may grow with it — without renegotiating a credit ceiling or pledging additional collateral. This structure may be a potential fit for practices in rapid growth phases.",
                  },
                  {
                    title: "Reduces dependence on slow insurance remittance cycles",
                    body: "Practices billing commercial payers with 45- to 90-day remittance cycles can potentially compress their effective cash conversion cycle, addressing the structural gap between service delivery and cash receipt.",
                  },
                  {
                    title: "Approval weighted toward claim quality, not just owner credit",
                    body: "Healthcare factors underwrite primarily against your payer mix, billing quality, and receivable aging rather than your personal credit score alone. Practices with strong commercial payer relationships may qualify even with limited operating history.",
                  },
                  {
                    title: "Faster access than bank credit facilities",
                    body: "Once onboarding is complete — typically one to three weeks including payer notification — subsequent funding cycles can operate on a 24- to 72-hour basis for qualified claim batches. This is typically faster than establishing or drawing on a traditional bank line.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#22c55e]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#eef2ec] mb-0.5">{item.title}</p>
                      <p className="text-sm text-[#9aaa98] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
                Limitations to Understand
              </p>
              <h2 className="text-xl font-semibold text-white mb-5">Important Considerations</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Government payer receivables involve significant legal restrictions",
                    body: "Medicare receivables are subject to the federal Anti-Assignment Act, which restricts direct assignment to third parties. Medicaid rules vary by state. Attempting to factor government payer claims without legal review creates compliance risk. ZEO is not a law firm; consult qualified healthcare legal counsel before including government payer receivables in any factoring arrangement.",
                  },
                  {
                    title: "Fees can be meaningfully higher than standard factoring",
                    body: "Healthcare factoring fees of 2% to 6% — applied to already-adjusted net collectible values — can produce effective annual costs that exceed other working capital options. Model the total cost against your specific payer mix and average days-to-pay before committing.",
                  },
                  {
                    title: "Payer contract anti-assignment clauses",
                    body: "Some commercial managed care contracts restrict assignment of receivables without payer consent. Assigning claims in violation of your payer contract could create contractual liability. Review material payer contracts before onboarding.",
                  },
                  {
                    title: "Denied and underpaid claims may trigger recourse obligations",
                    body: "Unlike straightforward commercial invoices, medical claims can be denied for clinical, administrative, or coding reasons unrelated to the payer's financial ability to pay. Recourse obligations for denied claims — as distinct from insolvent-payer risk — should be clearly defined in your factoring agreement before signing.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#6b7e69]" viewBox="0 0 16 16" fill="none">
                      <path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#eef2ec] mb-0.5">{item.title}</p>
                      <p className="text-sm text-[#9aaa98] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator callout */}
      <section className="py-10 border-b border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-1">
                Free Tool
              </p>
              <h3 className="text-[0.9375rem] font-semibold text-[#eef2ec] mb-1">
                Invoice Factoring Calculator
              </h3>
              <p className="text-sm text-[#9aaa98]">
                Model net advance amounts, estimated factoring fees, and reserve releases based on your receivable balance, collection rate, and fee assumptions. All outputs are estimates only.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#1e2620] text-sm font-medium text-[#eef2ec] hover:border-[#22c55e]/50 hover:text-[#22c55e] transition-colors"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Healthcare Factoring — Common Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Explore Whether Healthcare Factoring May Be a Fit"
        subtext="Submit a brief intake and ZEO will review your situation against potential financing paths. No commitment required. Subject to underwriting by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare Factoring Products"
        secondaryHref="/factoring"
      />

      {/* Disclaimer */}
      <section className="py-8 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="factoring" />
        </div>
      </section>
    </div>
  );
}

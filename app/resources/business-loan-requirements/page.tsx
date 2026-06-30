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
  title: "Business Loan Requirements | ZEO.co",
  description:
    "Understand the core requirements lenders evaluate when reviewing a business loan application — credit, revenue, time in business, collateral, and documentation.",
  path: "/resources/business-loan-requirements",
  keywords: [
    "business loan requirements",
    "small business loan eligibility",
    "business loan documentation",
    "what do lenders look for",
    "business credit requirements",
    "loan underwriting criteria",
  ],
});

const faqItems = [
  {
    q: "What minimum credit score do lenders typically require for a business loan?",
    a: "Requirements vary significantly by product and lender. Traditional bank term loans and SBA programs often look for personal credit scores of 680 or higher. Online lenders and alternative financing products may work with scores in the 580–640 range, though lower scores generally result in fewer offers and potentially higher costs. Your business credit profile — separate from your personal score — also factors into many commercial lending decisions.",
  },
  {
    q: "How long does a business need to be operating before it can qualify for a loan?",
    a: "Most conventional lenders and SBA programs require at least two years of operating history. Some online lenders will consider businesses with six months to one year of revenue. Startups with no operating history typically face the narrowest set of financing options, such as equipment financing secured by the asset, or SBA-backed startup programs with strict personal financial requirements. Time in business is evaluated alongside consistency and growth of revenue, not just duration.",
  },
  {
    q: "Does applying for a business loan affect my personal credit?",
    a: "Many lenders perform a soft credit pull during initial pre-qualification, which does not affect your score. A hard inquiry — which can temporarily lower your score by a few points — typically occurs when a lender moves to formal underwriting or issues a term sheet. If you apply with multiple lenders within a short window, credit scoring models often treat clustered inquiries as a single event for rate-shopping purposes. Confirm with each lender whether their process involves a hard or soft pull.",
  },
  {
    q: "What if I don't have collateral to offer?",
    a: "Not all business financing requires specific collateral. Some working capital loans, revenue-based financing, and unsecured term loans are evaluated primarily on cash flow and creditworthiness rather than pledged assets. That said, many lenders include a blanket lien on business assets (via a UCC-1 filing) even on nominally unsecured products, and personal guarantees are common. Understanding the difference between collateral, a lien, and a personal guarantee is important before accepting any offer.",
  },
  {
    q: "Can I apply if my business has had a past bankruptcy?",
    a: "A prior bankruptcy does not automatically disqualify a business, but it meaningfully narrows the available options and may extend underwriting timelines. SBA loan programs have specific waiting periods after discharge. Some alternative lenders evaluate seasoned bankruptcies (discharged two or more years prior) alongside current financial health. The specific type — Chapter 7 versus Chapter 11 or 13 — and time since discharge both factor into lender assessments. Transparency in your application is essential; undisclosed derogatory history typically results in denial.",
  },
];

const comparisonRows = [
  {
    feature: "Personal Credit Score",
    "Bank / SBA": "680+ typical",
    "Online Lender": "580–640+ typical",
    "Equipment Finance": "620+ typical",
    "Revenue-Based": "550+ (varies)",
  },
  {
    feature: "Time in Business",
    "Bank / SBA": "2+ years",
    "Online Lender": "6–12 months",
    "Equipment Finance": "1+ year",
    "Revenue-Based": "6+ months",
  },
  {
    feature: "Annual Revenue Floor",
    "Bank / SBA": "$250K+ common",
    "Online Lender": "$100K–$150K",
    "Equipment Finance": "Asset-dependent",
    "Revenue-Based": "$10K–$20K/mo",
  },
  {
    feature: "Collateral",
    "Bank / SBA": "Often required",
    "Online Lender": "Blanket lien / PG",
    "Equipment Finance": "Equipment itself",
    "Revenue-Based": "Future revenue",
  },
  {
    feature: "Documentation Depth",
    "Bank / SBA": "Extensive",
    "Online Lender": "Moderate",
    "Equipment Finance": "Light to moderate",
    "Revenue-Based": "Light",
  },
];

export default function BusinessLoanRequirementsPage() {
  return (
    <main className="bg-[#0a0d0b] min-h-screen">
      <PageHero
        eyebrow="Guide"
        title="Business Loan Requirements"
        subtitle="A practical overview of what lenders evaluate when reviewing a business financing application — and how to position your business before you apply."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Business Loan Requirements" },
        ]}
      />

      {/* Intro metrics */}
      <section className="py-12 border-b border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              label="Typical Credit Floor (Bank)"
              value="680"
              unit="FICO"
              note="Personal score, varies by lender"
            />
            <MetricCard
              label="Min. Time in Business (SBA)"
              value="2"
              unit="years"
              note="Many online lenders require less"
            />
            <MetricCard
              label="Common Revenue Floor"
              value="$100K"
              unit="/yr"
              note="Subject to lender underwriting"
            />
            <MetricCard
              label="DSCR Benchmark"
              value="1.25x"
              unit=""
              note="Debt service coverage ratio, typical minimum"
              highlight
            />
          </div>
          <p className="text-xs text-[#6b7e69] mt-4">
            Figures are general market benchmarks and not guarantees of eligibility. Actual thresholds vary by lender, product, and underwriting criteria.
          </p>
        </div>
      </section>

      {/* Section 1: The Five Pillars */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#eef2ec] mb-4">
            The Five Pillars of Business Loan Underwriting
          </h2>
          <p className="text-[#9aaa98] leading-relaxed mb-6">
            Most commercial lenders — whether traditional banks, credit unions, or online platforms — evaluate applications through a consistent framework. Understanding these pillars helps you assess your readiness before submitting an application and identify areas where additional preparation may improve your position.
          </p>

          <div className="space-y-6">
            <div className="border border-[#1e2620] bg-[#111512] rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#eef2ec] mb-2">
                1. Creditworthiness
              </h3>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Lenders review both your personal credit history and your business credit profile. Personal FICO scores signal how you have managed debt obligations historically. Business credit — tracked by agencies such as Dun &amp; Bradstreet, Experian Business, and Equifax Business — reflects your company&apos;s payment history with vendors, creditors, and trade partners. Derogatory marks, collections, judgments, and recent late payments all factor into underwriting risk assessment. Even if your score falls within an acceptable range, the composition of that score — recent delinquencies, high utilization, thin file — shapes the offer you may qualify for.
              </p>
            </div>

            <div className="border border-[#1e2620] bg-[#111512] rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#eef2ec] mb-2">
                2. Cash Flow and Revenue
              </h3>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Lenders want to see that your business generates enough revenue to service the debt it is taking on. The debt service coverage ratio (DSCR) measures net operating income relative to annual debt obligations; most lenders look for a ratio of 1.25x or higher, meaning the business earns $1.25 for every $1.00 of debt payment. Seasonal businesses and those with lumpy revenue cycles may need to demonstrate annualized averages or provide additional context about cash flow timing. Bank statement analysis — typically 3 to 6 months — is standard across most lending products to verify actual deposit patterns against tax-reported figures.
              </p>
            </div>

            <div className="border border-[#1e2620] bg-[#111512] rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#eef2ec] mb-2">
                3. Time in Business
              </h3>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Operating history is a proxy for business viability. A longer track record reduces the lender&apos;s risk exposure and provides more data for underwriting. The two-year threshold common to SBA loan programs and most bank products reflects the statistical reality that new businesses carry higher default risk. Some online lenders and revenue-based financing providers will consider businesses with six months to one year of history, but these products typically carry different cost structures to reflect the elevated risk. Time is measured from the date of business formation or first revenue activity, not from when you hired your first employee or reached profitability.
              </p>
            </div>

            <div className="border border-[#1e2620] bg-[#111512] rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#eef2ec] mb-2">
                4. Collateral and Assets
              </h3>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Collateral provides the lender a secondary repayment source if the borrower defaults. Common forms include real estate, equipment, inventory, accounts receivable, and business vehicles. Not all financing products require collateral in the traditional sense, but most include some form of lien — a UCC-1 blanket lien on business assets is standard across many working capital products, even those marketed as &quot;unsecured.&quot; Personal guarantees, which make the business owner personally liable for the debt, are also common and should be understood before signing. For SBA loans, lenders are required to take available collateral but may not decline a loan solely due to insufficient collateral.
              </p>
            </div>

            <div className="border border-[#1e2620] bg-[#111512] rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#eef2ec] mb-2">
                5. Business Purpose and Use of Funds
              </h3>
              <p className="text-sm text-[#9aaa98] leading-relaxed">
                Lenders evaluate whether the stated use of funds makes sense for the business and whether the loan type aligns with the need. Working capital to bridge a seasonal gap, equipment purchases, commercial real estate acquisition, and inventory financing all carry different risk profiles and lend themselves to different products. A mismatch between use of funds and loan structure can result in underwriting concerns. Being specific and consistent about how proceeds will be deployed across your application and supporting documents reduces the likelihood of follow-up requests and delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Documentation */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#eef2ec] mb-4">
            Documentation You Will Likely Need
          </h2>
          <p className="text-[#9aaa98] leading-relaxed mb-8">
            Documentation requirements differ across lenders and products. Traditional bank loans and SBA programs require the most extensive packages. Online lenders and fintech platforms often use automated bank statement analysis and may require fewer documents upfront, though they may request more during underwriting. The list below reflects what a complete commercial lending package typically includes — having these ready before you apply reduces friction and may shorten time to decision.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                category: "Business Financials",
                items: [
                  "2–3 years of business tax returns",
                  "Year-to-date profit and loss statement",
                  "Balance sheet (current)",
                  "3–6 months of business bank statements",
                  "Accounts receivable and payable aging reports",
                ],
              },
              {
                category: "Personal Financials",
                items: [
                  "2 years of personal tax returns (all owners 20%+)",
                  "Personal financial statement",
                  "Authorization for personal credit pull",
                  "Government-issued photo ID",
                ],
              },
              {
                category: "Business Formation",
                items: [
                  "Articles of incorporation or organization",
                  "Operating agreement or bylaws",
                  "EIN confirmation letter",
                  "Business licenses and permits",
                ],
              },
              {
                category: "Loan-Specific",
                items: [
                  "Business plan (required for SBA, startups)",
                  "Equipment quotes or purchase agreements",
                  "Commercial lease or real estate appraisal",
                  "Franchise disclosure document (if applicable)",
                ],
              },
            ].map((group) => (
              <div
                key={group.category}
                className="border border-[#1e2620] bg-[#111512] rounded-xl p-5"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
                  {group.category}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#9aaa98]">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#22c55e] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Comparison table */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#eef2ec] mb-3">
            How Requirements Vary by Financing Type
          </h2>
          <p className="text-[#9aaa98] leading-relaxed mb-8 max-w-2xl">
            There is no single set of requirements across all business financing. The thresholds below reflect general market patterns and are subject to change based on lender appetite, economic conditions, and individual underwriting decisions.
          </p>
          <ComparisonTable
            columns={["Bank / SBA", "Online Lender", "Equipment Finance", "Revenue-Based"]}
            rows={comparisonRows}
            highlightCol="Bank / SBA"
          />
          <p className="text-xs text-[#6b7e69] mt-3">
            Ranges are representative and not guarantees. Actual requirements are set by individual lenders and are subject to underwriting. Third-party provider terms apply.
          </p>
        </div>
      </section>

      {/* Section 4: Strengthening your application */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#eef2ec] mb-4">
            Strengthening Your Application Before You Apply
          </h2>
          <p className="text-[#9aaa98] leading-relaxed mb-6">
            The period before you apply is often more valuable than the application itself. Businesses that review and address gaps in their financial profile before submitting tend to see faster decisions and a wider range of potential offers. The following steps are worth considering in the months leading up to a financing request.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Separate business and personal finances",
                body: "Commingled accounts are a common friction point in underwriting. Maintaining a dedicated business checking account with a consistent deposit history demonstrates operational maturity and simplifies bank statement analysis. Even if your business is a sole proprietorship, a separate account helps establish a clear financial record.",
              },
              {
                title: "Review your business credit reports",
                body: "Pull your business credit reports from Dun & Bradstreet, Experian Business, and Equifax Business before applying. Errors, stale trade lines, and missing payment history are common and can often be corrected. Registering for a DUNS number if you do not have one, and ensuring your business is listed accurately with major data providers, costs little but can improve your profile.",
              },
              {
                title: "Reduce existing debt obligations",
                body: "High existing debt — particularly revolving balances and merchant cash advance stacks — can compress your DSCR and signal overleveraging to underwriters. Paying down obligations before applying improves your debt service metrics and reduces the risk of declined applications due to existing payment burdens.",
              },
              {
                title: "Prepare clean, consistent financials",
                body: "Discrepancies between your tax returns, bank statements, and internally prepared financials create underwriting delays. Work with your accountant to ensure your most recent two to three years of returns are filed, your bookkeeping is current, and your P&L and balance sheet are reconciled to your bank records. Inconsistencies are not automatic disqualifiers, but they require explanation and slow the process.",
              },
              {
                title: "Understand the product before applying",
                body: "Applying for a product that does not fit your situation wastes time and can result in unnecessary hard inquiries. A six-month-old business applying for an SBA 7(a) loan is unlikely to meet eligibility criteria. Understanding the general requirements of different financing types — term loans, lines of credit, SBA programs, equipment financing, invoice factoring — before you apply lets you focus your effort on products where you may qualify.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full border border-[#22c55e]/40 bg-[#0f2a14] flex items-center justify-center">
                  <span className="text-[0.6rem] font-semibold text-[#22c55e] tabular-nums">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#eef2ec] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#9aaa98] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Common reasons for decline */}
      <section className="py-14 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#eef2ec] mb-4">
            Common Reasons Applications Are Not Approved
          </h2>
          <p className="text-[#9aaa98] leading-relaxed mb-8">
            Understanding why applications are declined helps you address gaps before they affect your outcome. The most frequent reasons lenders cite include the following. Note that a decline from one lender does not mean you will not qualify through a different product or lender — underwriting criteria vary considerably across the market.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Insufficient time in business", note: "Below lender minimums, typically under 1–2 years" },
              { label: "Low or thin credit profile", note: "Score below threshold or limited credit history" },
              { label: "Inadequate cash flow", note: "DSCR below 1.0x or inconsistent deposit history" },
              { label: "Existing debt stack", note: "Multiple active advances or high utilization" },
              { label: "Tax liens or judgments", note: "Unresolved public records on the business or principals" },
              { label: "Incomplete documentation", note: "Missing returns, unsigned documents, unreconciled financials" },
              { label: "Industry restrictions", note: "Some lenders exclude certain industries by policy" },
              { label: "Recent bankruptcy or derogatory history", note: "Within lookback windows set by lender policy" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-[#1e2620] bg-[#111512] rounded-lg px-4 py-3"
              >
                <p className="text-sm font-medium text-[#eef2ec] mb-0.5">{item.label}</p>
                <p className="text-xs text-[#6b7e69]">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-[#1e2620] bg-[#111512] rounded-xl p-5">
            <p className="text-sm text-[#9aaa98] leading-relaxed">
              If you have received a decline, lenders subject to the Equal Credit Opportunity Act (ECOA) are required to provide an adverse action notice that identifies the principal reasons. Reviewing this notice carefully — and addressing the specific factors cited — is the most targeted way to improve your position before reapplying. Each lender has different criteria, so a decline from one institution may not predict the outcome at another.
            </p>
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-12 border-b border-[#1e2620]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-[#eef2ec] mb-6">Related Guides</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "SBA Loan Guide", href: "/resources/sba-loan-guide", desc: "7(a), 504, and SBA Express programs" },
              { label: "Business Loan Guide", href: "/resources/business-loan-guide", desc: "Term loans, lines of credit, and working capital" },
              { label: "Equipment Financing", href: "/resources/equipment-financing-guide", desc: "Loans and leases for business equipment" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-[#1e2620] bg-[#111512] hover:border-[#22c55e]/30 rounded-xl p-4 transition-colors"
              >
                <p className="text-sm font-medium text-[#eef2ec] group-hover:text-[#22c55e] transition-colors mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-[#6b7e69]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Frequently Asked Questions"
      />

      {/* CTA */}
      <CTASection
        headline="See which financing options may fit your business"
        subtext="ZEO reviews your situation and surfaces potential paths across our lender network. No commitment required — subject to underwriting and third-party provider approval."
        primaryLabel="Start Your Review"
        primaryHref="/apply"
        secondaryLabel="Explore Financing Options"
        secondaryHref="/financing"
      />

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-16">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

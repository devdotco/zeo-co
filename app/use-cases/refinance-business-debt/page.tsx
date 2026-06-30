import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Refinance Business Debt | ZEO.co",
  description:
    "Explore financing structures that may help refinance or consolidate existing business debt — including SBA 7(a), term loans, and private credit. Subject to underwriting by third-party providers.",
  path: "/use-cases/refinance-business-debt",
  keywords: [
    "refinance business debt",
    "business debt consolidation",
    "refinance MCA",
    "refinance merchant cash advance",
    "SBA debt refinancing",
    "business loan refinancing",
    "consolidate business loans",
    "lower business debt payments",
    "commercial debt restructuring",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function SBAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="8" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5 8V6.5C5 4.567 6.791 3 9 3s4 1.567 4 3.5V8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TermLoanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8h3M5 11h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M11 7l2 2-2 2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrivateCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 6v3.5l2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LineOfCreditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9h12M3 13h8M3 5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="14" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

// ── Page Data ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Can I use an SBA 7(a) loan to refinance existing business debt?",
    a: "SBA 7(a) may be used to refinance qualifying existing business debt under certain conditions — including that the existing debt is on commercially unreasonable terms and the refinancing provides a demonstrable benefit. Not all debt qualifies, and SBA has specific restrictions on refinancing debt where the original lender participated in an SBA program. Eligibility is subject to lender underwriting and SBA guidelines.",
  },
  {
    q: "Is it possible to refinance a merchant cash advance (MCA)?",
    a: "Some businesses pursue term loans or other structured financing to pay off merchant cash advances. Whether a lender will refinance an existing MCA depends on the business's financial profile, outstanding balances, and the lender's policies. Note that taking on new debt to retire an MCA may still result in a net increase in obligations if not structured carefully. All options are subject to third-party underwriting.",
  },
  {
    q: "What documentation is typically needed for debt refinancing?",
    a: "Lenders evaluating a debt refinancing request typically want to see 2–3 years of business tax returns, recent bank statements (usually 3–6 months), a current list of all outstanding obligations including balances and monthly payments, and information on any collateral securing existing debt. Additional documentation may be required depending on the lender and structure.",
  },
  {
    q: "Will refinancing business debt always reduce my monthly payment?",
    a: "Not necessarily. Refinancing may extend the term, consolidate multiple payments, or change the interest structure — but the overall cost can vary depending on the new rate, fees, and term length. A longer-term loan with a lower payment may result in more total interest paid over time. Evaluate the full repayment picture, not just the monthly payment, before proceeding.",
  },
];

const comparisonColumns = ["SBA 7(a)", "Term Loan", "Private Credit"];

const comparisonRows = [
  {
    feature: "Loan amounts",
    "SBA 7(a)": "Up to $5M",
    "Term Loan": "$25K–$500K+",
    "Private Credit": "Varies widely",
  },
  {
    feature: "Typical terms",
    "SBA 7(a)": "Up to 10 yrs (debt refi)",
    "Term Loan": "1–5 years",
    "Private Credit": "6 mos–3 yrs",
  },
  {
    feature: "Rate type",
    "SBA 7(a)": "Variable (WSJ Prime + spread)",
    "Term Loan": "Fixed or variable",
    "Private Credit": "Generally higher fixed",
  },
  {
    feature: "Collateral",
    "SBA 7(a)": "Required when available",
    "Term Loan": "Varies by lender",
    "Private Credit": "Asset-secured typical",
  },
  {
    feature: "Approval timeline",
    "SBA 7(a)": "Weeks to months",
    "Term Loan": "Days to weeks",
    "Private Credit": "Days to weeks",
  },
  {
    feature: "Credit requirements",
    "SBA 7(a)": "Generally 650+ FICO",
    "Term Loan": "Varies; often 600+",
    "Private Credit": "More flexible",
  },
  {
    feature: "Prepayment penalty",
    "SBA 7(a)": "Yes (if >15 yr term)",
    "Term Loan": "Varies",
    "Private Credit": "Common",
  },
];

const evaluationCriteria = [
  {
    label: "Audit all existing obligations",
    desc: "List every outstanding balance, rate, monthly payment, remaining term, and any prepayment penalties or UCC liens. A complete picture of current debt is required before any refinancing option can be properly evaluated.",
  },
  {
    label: "Identify the primary goal",
    desc: "Is the priority reducing monthly cash outflow, simplifying multiple payments into one, reducing total interest cost, or removing a restrictive covenant? Different goals point to different structures and acceptable trade-offs.",
  },
  {
    label: "Check for prepayment restrictions",
    desc: "Some MCA agreements, equipment leases, and term loans include prepayment penalties or buyout clauses. Evaluate the total cost of exiting existing obligations before modeling whether refinancing improves your position.",
  },
  {
    label: "Assess your current credit profile",
    desc: "Business age, revenue, FICO, DSCR, and existing lien position all affect what structures you may qualify for. Lenders evaluating a refinancing request will underwrite the full credit profile, not just the stated need.",
  },
  {
    label: "Match term length to asset life",
    desc: "For debt secured by equipment or real estate, aligning the refinancing term to the remaining useful life of collateral is standard practice. Mismatched terms can create underwriting challenges or balloon risk.",
  },
  {
    label: "Model total repayment, not just the rate",
    desc: "A lower stated rate does not automatically mean a better outcome. Factor in origination fees, closing costs, required reserves, and total interest paid over the full term before comparing options.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RefinanceBusinessDebtPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
          { name: "Refinance Business Debt", url: "https://zeo.co/use-cases/refinance-business-debt" },
        ])}
      />

      {/* 1 — Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Use Cases", href: "/use-cases" },
          { label: "Refinance Business Debt" },
        ]}
        eyebrow="Use Case"
        title="Refinance Business Debt"
        subtitle="When existing obligations are creating strain — high payments, short terms, or stacked advances — refinancing may consolidate debt into a more manageable structure. Whether a business qualifies depends on its financial profile and the specific debt involved. All financing is subject to third-party underwriting."
      />

      {/* 2 — The Business Scenario */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5">
                When existing debt becomes a constraint
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Business debt that made sense at the time of origination can become a constraint
                  as conditions change. A merchant cash advance taken during a slow quarter may carry
                  a daily holdback that strains operations once revenue normalizes. Multiple short-term
                  loans stacked on top of each other can create a payment load that limits
                  reinvestment. Equipment debt near maturity may need to be restructured to preserve
                  working capital.
                </p>
                <p>
                  Debt refinancing in this context does not mean the business is in distress — it
                  means the structure of existing obligations no longer fits the business's current
                  financial position or growth plans. The goal is typically to align payment terms
                  to cash flow, reduce the number of concurrent obligations, or replace high-cost
                  short-term products with longer-duration structures.
                </p>
                <p>
                  Whether this is achievable, and through which product, depends heavily on the
                  business's credit profile, how the existing debt is structured, and whether
                  qualifying collateral is available. Not every refinancing scenario has a
                  straightforward path — lenders underwrite both the business and the debt
                  being retired.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="Common trigger"
                value="MCA stack"
                note="Multiple advances with overlapping holdbacks are a frequent driver of refinancing inquiries"
              />
              <MetricCard
                label="SBA 7(a) max"
                value="$5M"
                note="SBA 7(a) may refinance qualifying commercial debt under SBA eligibility rules"
                highlight
              />
              <MetricCard
                label="Evaluation factor"
                value="DSCR"
                unit="debt service coverage"
                note="Lenders measure whether cash flow supports the new payment structure"
              />
              <MetricCard
                label="Key variable"
                value="Prepay"
                unit="penalties"
                note="Existing loan terms may include exit costs that affect the net benefit of refinancing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Relevant Financing Options */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Financing Options
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Structures that may be relevant
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              The right structure depends on the business profile, the debt being refinanced, and
              lender eligibility. These options are commonly evaluated for debt refinancing
              scenarios — each has distinct trade-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<SBAIcon />}
              title="SBA 7(a) Loan"
              description="Government-backed loans up to $5M that may be used to refinance qualifying commercial debt on unreasonable terms. Longer repayment terms than conventional products. Subject to SBA eligibility rules and lender underwriting."
              tags={["Up to $5M", "Up to 10 yr term", "SBA-backed"]}
              href="/financing/sba-7a"
              highlight
            />
            <FinancingPathCard
              icon={<TermLoanIcon />}
              title="Conventional Term Loan"
              description="Fixed-term, fixed-payment loans from banks, credit unions, or non-bank lenders. Can be used to retire existing shorter-term debt. Terms and rates vary significantly by lender and borrower profile."
              tags={["Fixed payments", "1–5 year terms", "Bank or non-bank"]}
              href="/financing/term-loans"
            />
            <FinancingPathCard
              icon={<PrivateCreditIcon />}
              title="Private Credit"
              description="Non-bank lenders offering flexible structures for businesses that may not qualify for conventional or SBA programs. Generally faster to close but at higher cost. Appropriate when speed or credit profile limits other options."
              tags={["Flexible criteria", "Asset-secured", "Higher cost"]}
              href="/financing/private-lending"
            />
            <FinancingPathCard
              icon={<LineOfCreditIcon />}
              title="Business Line of Credit"
              description="A revolving credit facility that can retire smaller outstanding balances and provide ongoing liquidity. Best suited for refinancing smaller or short-term obligations rather than large fixed-term debt."
              tags={["Revolving", "Draw as needed", "Smaller balances"]}
              href="/financing/business-line-of-credit"
            />
          </div>
        </div>
      </section>

      {/* 4 — How to Evaluate Which Option Fits */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Evaluation
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              How to evaluate which option fits
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              Refinancing is a financial decision with multiple variables. Working through these
              factors before applying will improve the quality of any lender conversation and
              help identify whether a given structure is a realistic fit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {evaluationCriteria.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{item.label}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">
              Option Comparison
            </p>
            <ComparisonTable
              columns={comparisonColumns}
              rows={comparisonRows}
              highlightCol="SBA 7(a)"
            />
            <p className="text-xs text-[#a3a3a3] mt-3 leading-relaxed">
              All figures are illustrative ranges. Actual terms are set by third-party lenders
              and subject to underwriting. ZEO.co does not guarantee any particular rate, term,
              or approval outcome.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — Common Requirements */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Requirements
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5">
                What lenders typically look for
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Lenders evaluating a debt refinancing request assess the business's ability to
                service the proposed new obligation, the value and condition of any collateral,
                and whether refinancing the existing debt makes structural sense. Requirements
                vary significantly between lender types and programs.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                SBA 7(a) refinancing carries additional eligibility requirements: the debt being
                refinanced must generally have been used for business purposes, the existing terms
                must be demonstrably unreasonable, and the original lender cannot hold an SBA
                guarantee on the debt being retired. These rules are enforced at the SBA level
                and apply regardless of which participating lender processes the application.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: "Business financials",
                  desc: "2–3 years of business tax returns and recent P&L. Lenders want to verify revenue stability and historical cash flow sufficient to service the refinanced obligation.",
                },
                {
                  label: "Bank statements",
                  desc: "Typically 3–6 months of business bank statements. Used to validate stated revenue, assess average daily balance, and identify recurring obligations or NSF patterns.",
                },
                {
                  label: "Debt schedule",
                  desc: "A complete list of all current business debt: creditor, original balance, current balance, rate, monthly payment, maturity date, and collateral. UCC lien searches are standard.",
                },
                {
                  label: "Business and personal credit",
                  desc: "Most lenders pull both business and personal credit. Personal FICO requirements vary by lender and program. SBA programs generally require 650+ personal FICO.",
                },
                {
                  label: "Collateral documentation",
                  desc: "If real estate, equipment, or other assets will secure the refinancing, lenders require appraisals or valuations and confirmation of ownership and lien priority.",
                },
                {
                  label: "Use of proceeds statement",
                  desc: "Lenders require documentation identifying which specific obligations will be retired with proceeds. For SBA 7(a), proceeds must be traceable to the obligations identified at closing.",
                },
              ].map((req) => (
                <div
                  key={req.label}
                  className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#ffffff] px-5 py-4"
                >
                  <div className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] mt-2" />
                  <div>
                    <p className="text-sm font-semibold text-[#0f0f0f] mb-1">{req.label}</p>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 — FAQ */}
      <FAQ
        title="Common questions about refinancing business debt"
        items={faqItems}
      />

      {/* 7 — CTA */}
      <CTASection
        headline="Evaluate your refinancing options"
        subtext="Submit a brief intake and ZEO will review potential structures for your situation. All financing is subject to third-party underwriting and approval. Results are not guaranteed."
        primaryLabel="Start Intake"
        primaryHref="/apply"
        secondaryLabel="View All Financing Options"
        secondaryHref="/financing"
      />

      {/* 8 — Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="general" />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Documents Needed for Business Financing | ZEO.co",
  description:
    "A practical educational guide to the documents lenders and financing providers typically request — from tax returns and bank statements to ownership schedules and collateral records.",
  path: "/resources/documents-needed",
  keywords: [
    "documents needed for business loan",
    "business financing documents",
    "what documents do I need for a business loan",
    "SBA loan documents",
    "business loan application checklist",
    "commercial financing documentation",
    "business tax returns for loan",
  ],
});

const BREADCRUMBS = [
  { label: "Resources", href: "/resources" },
  { label: "Documents Needed for Business Financing" },
];

const METRICS = [
  {
    label: "Typical Bank Statement Lookback",
    value: "3–6 mo",
    note: "Most lenders request 3; some require 6+",
    highlight: false,
  },
  {
    label: "Tax Return Years Requested",
    value: "2–3 yrs",
    note: "Both business and personal for qualifying owners",
    highlight: false,
  },
  {
    label: "SBA Ownership Threshold",
    value: "20%",
    note: "Owners at or above this typically must provide personal docs",
    highlight: true,
  },
  {
    label: "Common DSCR Benchmark",
    value: "1.25×",
    note: "Lenders often use this as a minimum cash flow coverage target",
    highlight: false,
  },
];

const COMPARISON_COLUMNS = ["SBA 7(a)", "Revenue-Based / MCA", "Invoice Factoring"];
const COMPARISON_ROWS = [
  {
    feature: "Business tax returns",
    "SBA 7(a)": "2–3 years required",
    "Revenue-Based / MCA": "Often waived or 1 year",
    "Invoice Factoring": "Sometimes requested",
  },
  {
    feature: "Bank statements",
    "SBA 7(a)": "3–6 months",
    "Revenue-Based / MCA": "3–6 months (core doc)",
    "Invoice Factoring": "Varies by factor",
  },
  {
    feature: "Personal tax returns",
    "SBA 7(a)": "2–3 years, all 20%+ owners",
    "Revenue-Based / MCA": "Sometimes requested",
    "Invoice Factoring": "Rarely required",
  },
  {
    feature: "Personal financial statement",
    "SBA 7(a)": "Required (SBA Form 413)",
    "Revenue-Based / MCA": "Sometimes",
    "Invoice Factoring": "Rarely",
  },
  {
    feature: "Accounts receivable aging",
    "SBA 7(a)": "Situational",
    "Revenue-Based / MCA": "Not applicable",
    "Invoice Factoring": "Core requirement",
  },
  {
    feature: "Business plan / projections",
    "SBA 7(a)": "Often required for startups",
    "Revenue-Based / MCA": "Not typically required",
    "Invoice Factoring": "Not typically required",
  },
  {
    feature: "Collateral documentation",
    "SBA 7(a)": "Often required ≥$25K",
    "Revenue-Based / MCA": "Usually none",
    "Invoice Factoring": "Invoices serve as collateral",
  },
];

const FAQ_ITEMS = [
  {
    q: "Do I need to have all documents ready before I apply?",
    a: "You do not need everything in hand before starting an inquiry or pre-qualification conversation, but having core documents organized before a formal application typically speeds up the process. Most lenders will issue a preliminary term sheet or letter of interest before requiring a full documentation package. Having two to three years of tax returns, recent bank statements, and a current P&L accessible at the start of a process puts you in a stronger position to move quickly when a lender requests the full package.",
  },
  {
    q: "Why do lenders ask for both business and personal tax returns?",
    a: "Lenders use business returns to evaluate revenue trends, profitability, and cash flow over time. Personal returns for owners with 20% or more ownership are used to verify personal income, assess personal debt obligations, and review any K-1 or pass-through income from the business. Personal financial condition is relevant because most commercial financing products require personal guarantees from qualifying owners, meaning the lender has recourse to personal assets if the business defaults. The combination gives the underwriter a complete picture of total repayment capacity.",
  },
  {
    q: "What if my financials are not in good shape — should I still apply?",
    a: "Weak financials do not automatically disqualify a business from financing, but they do affect which products and providers are realistically accessible. Revenue-based financing and merchant cash advances tend to have less stringent financial history requirements than SBA or bank term loans. Invoice factoring is primarily based on the quality of receivables, not the borrower's profitability. Being prepared to explain negative trends — a one-time expense, a client loss, a Covid-era disruption — with context and forward-looking documentation can help a lender understand the full picture. Eligibility is always subject to underwriting by the specific provider.",
  },
  {
    q: "What is a personal financial statement and when is it required?",
    a: "A personal financial statement is a snapshot of an individual's assets, liabilities, and net worth at a point in time. The SBA uses Form 413 for this purpose, which is required from all owners with 20% or more ownership in a business applying for SBA financing. Non-SBA lenders may use their own forms or request this document on a case-by-case basis. The statement typically covers real estate holdings, investment accounts, retirement assets, vehicles, outstanding loans, credit card balances, and contingent liabilities such as guarantees on other debt. It is used to assess personal net worth and whether personal assets could serve as collateral or backstop a personal guarantee.",
  },
  {
    q: "Are document requirements different for acquisitions versus operating businesses?",
    a: "Yes, acquisition financing generally requires both the buyer's financial profile and the target business's historical financials. For an SBA acquisition loan, lenders typically want two to three years of the target's business tax returns, a purchase agreement or letter of intent, a business valuation or appraisal, and a business plan from the buyer covering post-acquisition operations. The buyer must also document their equity injection — the down payment contributed at closing. Operating businesses seeking growth capital or working capital typically face a simpler documentation set focused on their own history rather than a separate entity's records.",
  },
];

const RELATED_PATHS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 5h12M4 10h8M4 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "SBA Loan Guide",
    description:
      "An overview of SBA 7(a), 504, and Microloan programs — eligibility, structure, and what lenders evaluate.",
    tags: ["Guide", "SBA"],
    href: "/resources/sba-loan-guide",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10l2.5 2.5L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Business Loan Requirements",
    description:
      "What lenders typically evaluate when reviewing a commercial financing application — beyond just documents.",
    tags: ["Guide", "Requirements"],
    href: "/resources/business-loan-requirements",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Invoice Factoring Guide",
    description:
      "How invoice factoring works, what factors look for in a receivables portfolio, and how fees are structured.",
    tags: ["Guide", "Factoring"],
    href: "/resources/factoring-guide",
  },
];

export default function DocumentsNeededPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Resources", url: "https://zeo.co/resources" },
          { name: "Documents Needed for Business Financing", url: "https://zeo.co/resources/documents-needed" },
        ])}
      />

      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Guide"
        title="Documents Needed for Business Financing"
        subtitle="Lenders and financing providers require documentation to evaluate creditworthiness, cash flow, and collateral. This guide covers what is typically requested, why it matters, and how requirements differ across product types."
      />

      {/* At-a-Glance Metrics */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-6">
            Reference Points
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {METRICS.map((m) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                note={m.note}
                highlight={m.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Why Documentation Matters */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-5">
            Why Lenders Require Documentation
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed">
            <p>
              Documentation is the primary way a lender or financing provider verifies that the information in a financing application is accurate and complete. Underwriters use documents to confirm revenue history, identify trends in cash flow, assess existing debt obligations, evaluate collateral, and understand the ownership structure of the business. The depth of documentation requested generally reflects the complexity and size of the transaction and the risk profile of the product.
            </p>
            <p>
              Not all financing products require the same documentation set. A merchant cash advance or revenue-based financing arrangement may be primarily underwritten using bank statements and processing history. An SBA 7(a) loan, by contrast, involves a more thorough review that includes multiple years of tax returns, personal financial statements, a detailed debt schedule, and often a business plan. Understanding which product aligns with your business situation is part of understanding what documentation you will likely need to produce.
            </p>
            <p>
              Incomplete or inconsistent documentation is one of the most common reasons application processes stall. Numbers that do not reconcile between tax returns and financial statements, missing schedules, or owners who cannot produce required documents can slow or derail an otherwise viable application. Preparing documentation proactively — before a formal application — reduces these friction points and can shorten time to a decision.
            </p>
          </div>

          <div className="mt-8 p-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5]">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-2">
              Important Note
            </p>
            <p className="text-sm text-[#737373] leading-relaxed">
              ZEO.co is not a bank, lender, or loan broker. This page is provided for educational purposes only. Specific documentation requirements are set by each financing provider and are subject to their own underwriting standards.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Core Business Documents */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Core Business Financial Documents
          </h2>
          <p className="text-[#a3a3a3] text-sm mb-8">
            These documents form the foundation of nearly every commercial financing application. Availability and quality of these records significantly affects which financing options may be accessible.
          </p>

          <div className="space-y-3">
            {[
              {
                label: "Business Tax Returns",
                badge: "Most Requested",
                detail:
                  "Lenders typically request two to three years of filed federal business tax returns. For corporations and S-corps, this means Form 1120 or 1120-S. For partnerships, Form 1065. For sole proprietors, Schedule C from the personal return. Tax returns are preferred over internal financials because they represent figures reported to the IRS, which lenders treat as a more reliable baseline than company-prepared statements. Lenders examine revenue trends, net income, depreciation add-backs, and whether the business has generated enough consistent profit to support proposed debt service.",
              },
              {
                label: "Business Bank Statements",
                badge: null,
                detail:
                  "Most lenders request three to six months of complete business checking account statements, including all pages. Statements are used to verify average daily balances, monthly revenue deposits, NSF or overdraft activity, and existing automatic payments or loan drafts. For revenue-based financing and merchant cash advances, bank statements are often the primary underwriting document — revenue verified through deposits is the basis for offer sizing. Lenders look for consistent, recurring deposit activity and adequate cash reserves relative to the proposed obligation.",
              },
              {
                label: "Profit & Loss Statement (P&L)",
                badge: null,
                detail:
                  "A year-to-date P&L prepared by the business or its accountant gives lenders a current view of revenue and expenses that tax returns — often 6 to 18 months stale — cannot provide. Most lenders request a P&L current to within 60 to 90 days of the application date. A P&L prepared by a CPA or bookkeeper carries more weight than one generated from accounting software without professional review. Consistency between the P&L and corresponding bank statement deposits is something underwriters check closely.",
              },
              {
                label: "Balance Sheet",
                badge: null,
                detail:
                  "A balance sheet reflects the business's assets, liabilities, and owner equity at a specific point in time. Lenders use it to evaluate total debt exposure, tangible net worth, working capital position, and the availability of assets that could serve as collateral. For SBA and bank term loans, a current balance sheet — typically dated within 90 days of application — is a standard requirement. Balance sheets that reflect significant undisclosed liabilities or heavily encumbered assets can affect both eligibility and loan structure.",
              },
              {
                label: "Business Debt Schedule",
                badge: null,
                detail:
                  "A debt schedule lists all current outstanding business loans, lines of credit, equipment leases, and other financial obligations — including the lender name, original balance, current balance, monthly payment, maturity date, and collateral. This document allows the underwriter to calculate total existing debt service and determine whether the business's cash flow can support both existing obligations and the proposed new financing. Omitting or understating existing debt is a common application error that can delay or disqualify an application.",
              },
            ].map(({ label, badge, detail }) => (
              <div
                key={label}
                className="p-5 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5]"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <p className="text-sm font-semibold text-[#0f0f0f]">{label}</p>
                  {badge && (
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded-md bg-[#0f2a14] text-[#0f0f0f] border border-[#0f0f0f]/20">
                      {badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Owner and Personal Documents */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Owner and Personal Documentation
          </h2>
          <p className="text-[#a3a3a3] text-sm mb-8">
            Most commercial financing products — particularly SBA loans and bank term loans — require personal documentation from owners who hold meaningful ownership stakes. The standard threshold is 20% or greater ownership.
          </p>

          <div className="space-y-3">
            {[
              {
                label: "Personal Tax Returns",
                detail:
                  "Two to three years of personal federal tax returns (Form 1040, all schedules) are standard for SBA applications and many conventional bank products. Personal returns allow lenders to verify personal income independent of business distributions, review K-1 income from the business and any other pass-through entities, and assess personal tax obligations and deductions. For business owners who pay themselves primarily through distributions rather than salary, personal returns are particularly important for demonstrating personal financial stability.",
              },
              {
                label: "Personal Financial Statement",
                detail:
                  "A personal financial statement documents all personal assets — primary and investment real estate, securities, retirement accounts, vehicles, and other property — and all personal liabilities, including mortgages, car loans, student loans, credit card balances, and guarantees on other obligations. The SBA uses Form 413 for this purpose, which is required from all owners with 20% or greater ownership. The statement is used to evaluate personal net worth and assess whether personal assets are available to support a personal guarantee. Some lenders use their own forms; others accept a CPA-prepared statement.",
              },
              {
                label: "Government-Issued Identification",
                detail:
                  "A current, government-issued photo ID — driver's license or passport — is required for all qualifying owners as part of identity verification and Know Your Customer (KYC) compliance. This is standard across virtually all financing products regardless of loan size or product type.",
              },
              {
                label: "Resume or Professional Background",
                detail:
                  "For acquisition financing, startups, or industries with licensing requirements, lenders may request a resume or biography for the primary owner or management team. This is used to assess whether management has relevant experience to operate or grow the business being financed. Lenders evaluating a business acquisition, for instance, often want to confirm that the buyer has industry experience that supports the pro forma projections in the business plan.",
              },
            ].map(({ label, detail }) => (
              <div
                key={label}
                className="flex gap-3 p-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5]"
              >
                <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#0f2a14] border border-[#0f0f0f]/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0f0f0f]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1">{label}</p>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Business Legal and Entity Documents */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Business Legal and Entity Documents
          </h2>
          <p className="text-[#a3a3a3] text-sm mb-8">
            Lenders need to confirm that a business is legally organized, properly registered, and that the individuals signing loan documents have authority to do so. These documents establish the legal basis of the transaction.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                label: "Articles of Incorporation or Organization",
                detail:
                  "Filed with the state at formation. Establishes the legal existence of the entity.",
              },
              {
                label: "Operating Agreement or Bylaws",
                detail:
                  "Governs internal management structure, ownership percentages, and authority to enter into contracts and financing agreements.",
              },
              {
                label: "EIN Confirmation (IRS SS-4)",
                detail:
                  "The IRS-issued Employer Identification Number confirmation letter. Used for identity verification and tax record matching.",
              },
              {
                label: "Business Licenses and Permits",
                detail:
                  "State and local business licenses, professional licenses, or industry-specific permits required to operate legally. Lenders may verify that required licenses are current.",
              },
              {
                label: "Ownership / Equity Schedule",
                detail:
                  "A complete list of all owners, their ownership percentages, and — for entities with many shareholders — a capitalization table. Required to identify all parties who must provide personal guarantees.",
              },
              {
                label: "Fictitious Business Name (DBA)",
                detail:
                  "If the business operates under a name other than its registered legal name, a DBA filing or assumed name certificate may be required.",
              },
            ].map(({ label, detail }) => (
              <div
                key={label}
                className="p-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5]"
              >
                <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{label}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Document Requirements by Product Type */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            How Requirements Differ by Product Type
          </h2>
          <p className="text-[#a3a3a3] text-sm mb-8">
            Documentation requirements vary significantly depending on the financing product. The comparison below reflects general patterns — actual requirements are set by individual providers and are subject to underwriting.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="SBA 7(a)"
          />
          <p className="text-xs text-[#a3a3a3] mt-3 leading-relaxed">
            This table reflects general patterns based on common market practice and is not a guarantee of what any specific lender will require. Documentation requests vary by provider, transaction size, and individual underwriting judgment.
          </p>
        </div>
      </section>

      {/* Section 6: Preparing Your Documentation */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-5">
            Preparing Your Documentation Package
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed">
            <p>
              Lenders review documentation under time pressure and across many active applications simultaneously. A well-organized document package — where files are clearly named, complete, and consistent — makes a practical difference in how quickly a review can proceed and how favorably an underwriter views a business's operational sophistication.
            </p>
            <p>
              Several practices help keep documentation in good shape between financing needs. Maintaining current bookkeeping through an accountant or accounting software ensures that P&L statements and balance sheets can be produced quickly. Keeping a running folder of tax returns, corporate filings, and ownership records avoids the scramble to locate documents from prior years when an application opens. Ensuring that business accounts and personal accounts are fully separated simplifies the review process and avoids questions about commingled funds.
            </p>
          </div>

          <div className="mt-8 space-y-px">
            {[
              {
                title: "Reconcile figures across documents",
                body: "Revenue on the tax return, bank statement deposits, and the P&L should be broadly consistent. Significant unexplained gaps between these numbers raise underwriting questions and can slow a review. Having a brief written explanation ready for any material discrepancy — a year with deferred revenue, a distribution that reduced taxable income, a one-time event — is useful preparation.",
              },
              {
                title: "Include all pages of every document",
                body: "Bank statements, tax returns, and financial statements that appear to be missing pages — even blank pages — create gaps that underwriters must follow up on. Submit complete documents, including all schedules, attachments, and continuation pages. Lenders frequently cite incomplete documents as a primary cause of application delays.",
              },
              {
                title: "Use a CPA or bookkeeper for financial statements",
                body: "Financial statements prepared or reviewed by a licensed CPA carry more credibility with lenders than internally generated reports from accounting software alone. For larger loan requests or SBA applications, reviewed or compiled financial statements may be expected. For smaller working capital products, an internally prepared P&L may be sufficient, but CPA involvement still strengthens the package.",
              },
              {
                title: "Confirm your entity documents are current",
                body: "Operating agreements, bylaws, and ownership schedules should reflect the current state of the business — not the structure as it existed at formation. If ownership has changed, members have been added or removed, or officer roles have shifted, ensure the documents on file with the state and in your records reflect those changes before submitting them to a lender.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex gap-4 p-5 first:rounded-t-xl last:rounded-b-xl border border-[#e5e5e5] bg-[#f5f5f5] border-b-0 last:border-b"
              >
                <div className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-[#0f0f0f]" />
                <div>
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{title}</p>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Paths */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-2">Related Resources</h2>
          <p className="text-sm text-[#a3a3a3] mb-6">
            Guides and overviews that may be useful alongside this documentation reference.
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {RELATED_PATHS.map((card) => (
              <FinancingPathCard
                key={card.href}
                icon={card.icon}
                title={card.title}
                description={card.description}
                tags={card.tags}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={FAQ_ITEMS}
        title="Documentation Questions"
      />

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-4">
        <ProductDisclaimer type="general" />
      </div>

      {/* CTA */}
      <CTASection
        headline="Ready to explore your financing options?"
        subtext="Submit a brief intake and ZEO will review potential financing paths that may fit your business. All financing is subject to underwriting and approval by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Compare Financing Options"
        secondaryHref="/financing"
      />
    </div>
  );
}

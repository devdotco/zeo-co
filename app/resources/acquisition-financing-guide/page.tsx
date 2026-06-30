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

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Business Acquisition Financing Guide | ZEO.co",
  description:
    "A practical guide to financing the purchase of an existing business. Learn how acquisition loans work, what lenders evaluate, common deal structures, and which financing paths may be a potential fit — subject to underwriting.",
  path: "/resources/acquisition-financing-guide",
  keywords: [
    "business acquisition financing guide",
    "how to finance buying a business",
    "acquisition loan requirements",
    "SBA 7a acquisition loan",
    "seller note financing",
    "business purchase loan",
    "acquisition deal structure",
    "DSCR acquisition financing",
    "private credit acquisition",
    "buying an existing business financing",
  ],
});

// ── Icons ─────────────────────────────────────────────────────────────────────

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="7" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1 7l8-5 8 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="11" width="4" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 14l4-5 3 3 5-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="3" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L3 5v5c0 3.3 2.5 5.8 6 6.8 3.5-1 6-3.5 6-6.8V5L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="4" y="2" width="10" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 6h4M7 9h4M7 12h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="7" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9.5 10.5l6 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13 13.5l1.5 1.5M15 12l1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const comparisonRows = [
  {
    feature: "Typical down payment",
    "SBA 7(a)": "10–20%",
    "Conventional Bank": "20–35%",
    "Private Credit": "30–50%",
    "Seller Note Only": "0–10% (varies)",
  },
  {
    feature: "Loan amounts",
    "SBA 7(a)": "Up to $5M",
    "Conventional Bank": "$500K–$10M+",
    "Private Credit": "$1M–$50M+",
    "Seller Note Only": "Negotiated",
  },
  {
    feature: "Typical term",
    "SBA 7(a)": "7–25 years",
    "Conventional Bank": "5–10 years",
    "Private Credit": "1–5 years",
    "Seller Note Only": "3–7 years",
  },
  {
    feature: "Rate type",
    "SBA 7(a)": "Variable (Prime + spread)",
    "Conventional Bank": "Fixed or variable",
    "Private Credit": "Fixed (higher rates typical)",
    "Seller Note Only": "Negotiated",
  },
  {
    feature: "Collateral required",
    "SBA 7(a)": "Yes, if available",
    "Conventional Bank": "Yes, typically",
    "Private Credit": "Varies by structure",
    "Seller Note Only": "Negotiated",
  },
  {
    feature: "Personal guarantee",
    "SBA 7(a)": "Required (20%+ owners)",
    "Conventional Bank": "Often required",
    "Private Credit": "Often required",
    "Seller Note Only": "Negotiated",
  },
  {
    feature: "Typical closing timeline",
    "SBA 7(a)": "60–120 days",
    "Conventional Bank": "45–90 days",
    "Private Credit": "15–45 days",
    "Seller Note Only": "Flexible",
  },
  {
    feature: "Best suited for",
    "SBA 7(a)": "Main street / lower middle market",
    "Conventional Bank": "Established buyers, strong cash flow",
    "Private Credit": "Speed, complexity, or larger deals",
    "Seller Note Only": "Seller confidence in buyer",
  },
];

const faqItems = [
  {
    q: "How much of my own money do I need to buy a business?",
    a: "Equity injection requirements vary by lender and deal structure. SBA 7(a) lenders generally require a minimum of 10% buyer equity on acquisition deals, though many require 15–20% depending on business type, cash flow, and deal risk. Conventional lenders and private credit sources often require 25–35% or more. Some deals also incorporate a seller note — where the seller agrees to defer a portion of the purchase price — which may reduce the cash required at closing, subject to lender approval.",
  },
  {
    q: "What does a lender mean by DSCR, and why does it matter for acquisition loans?",
    a: "DSCR stands for Debt Service Coverage Ratio — it measures whether the acquired business generates enough cash flow to cover the proposed loan payments. Lenders calculate it as the business's net operating income (or adjusted EBITDA) divided by the total annual debt obligations, including the new acquisition loan. Most conventional and SBA lenders look for a DSCR of at least 1.25x, meaning the business earns 25 cents of cash flow for every dollar of debt payment. Lower ratios may result in a decline or require additional equity. This is one of the most important metrics in acquisition underwriting.",
  },
  {
    q: "Can I use an SBA loan to buy a business even if I have no industry experience?",
    a: "SBA-affiliated lenders evaluate industry experience as part of buyer qualification, but requirements vary. Some lenders will accept adjacent industry experience, relevant management experience, or a plan to retain existing management during a transition. Others require demonstrated expertise. Subject to individual lender standards and SBA guidelines, relevant work history or a well-documented transition plan may strengthen an otherwise thin experience profile. No approval is guaranteed, and requirements differ by lender.",
  },
  {
    q: "What is a seller note, and how does it affect the deal structure?",
    a: "A seller note — also called seller financing or a carry-back — is an arrangement where the business seller agrees to receive part of the purchase price over time, rather than entirely at closing. The buyer makes payments directly to the seller under agreed terms. Seller notes are common in acquisition deals because they bridge gaps between what a buyer can finance and what the seller expects. SBA lenders may allow a seller note to count toward the buyer's equity injection in certain circumstances, subject to SBA guidelines and lender approval. The note terms, subordination requirements, and standby provisions vary by deal and lender.",
  },
  {
    q: "Is ZEO a lender, and will working with ZEO guarantee I get financed?",
    a: "ZEO.co is not a bank, lender, or loan broker. We do not make lending decisions or guarantee financing outcomes. ZEO helps business buyers understand their financing options and connects them with third-party lenders and capital providers who may be a potential fit for their situation. All financing decisions are made by those third-party providers, subject to their own underwriting standards, eligibility requirements, and approval processes. There is no guarantee that any particular applicant will qualify.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AcquisitionFinancingGuidePage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* Hero */}
      <PageHero
        eyebrow="Guide"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Acquisition Financing Guide" },
        ]}
        title="Business Acquisition Financing Guide"
        subtitle="An educational overview of how business acquisition financing works, what lenders evaluate, and which structures may be a potential fit — subject to underwriting by third-party providers."
      />

      {/* Key metrics */}
      <section className="bg-[#ffffff] border-b border-[#e5e5e5] py-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="SBA 7(a) max loan"
              value="$5M"
              note="For eligible acquisition transactions"
            />
            <MetricCard
              label="Typical equity injection"
              value="10–20%"
              note="Varies by lender and deal structure"
            />
            <MetricCard
              label="Min DSCR (common)"
              value="1.25x"
              note="Cash flow coverage most lenders require"
              highlight
            />
            <MetricCard
              label="Typical close timeline"
              value="60–120"
              unit="days"
              note="SBA; faster for private credit"
            />
          </div>
        </div>
      </section>

      {/* ── Section 1: What Is Acquisition Financing ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What is business acquisition financing?
          </h2>
          <p className="text-[#737373] leading-relaxed mb-4">
            Business acquisition financing refers to the capital structures used to fund the purchase of an
            existing operating business. Unlike startup financing — where capital backs an unproven concept —
            acquisition financing underwrites a company that already has revenue, customers, employees, and
            operating history. That history is both an asset and a primary underwriting input.
          </p>
          <p className="text-[#737373] leading-relaxed mb-4">
            Deals are typically structured as a combination of sources: senior debt (from a bank or SBA-affiliated
            lender), mezzanine or subordinated debt (sometimes from a private credit source), seller financing
            (deferred purchase price), and buyer equity (cash invested by the purchaser). The blend of these
            depends on deal size, business cash flow, collateral available, and lender requirements.
          </p>
          <p className="text-[#737373] leading-relaxed">
            Most small business acquisitions in the $500K–$5M range are financed through SBA 7(a) loans, which
            offer longer amortization periods and lower equity requirements than conventional bank loans. Larger
            or more complex deals may involve conventional lenders, private credit, or blended structures — each
            subject to their own underwriting standards and approval criteria.
          </p>
        </div>
      </section>

      {/* ── Section 2: What Lenders Evaluate ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              What lenders evaluate in an acquisition deal
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Acquisition loan underwriting examines both the business being acquired and the buyer pursuing it.
              Lenders assess risk across several dimensions before making any credit decision. Understanding what
              drives those decisions helps buyers structure deals that may qualify.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {/* Business cash flow */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  <ChartIcon />
                </div>
                <h3 className="font-semibold text-[#0f0f0f] text-sm">Business cash flow (DSCR)</h3>
              </div>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">
                The acquired business must demonstrate sufficient historical cash flow to service the proposed
                debt. Lenders calculate DSCR using the business's net operating income against all projected
                debt payments, including the acquisition loan. Most lenders require a minimum of 1.20x–1.35x
                coverage. Weak cash flow relative to the purchase price is the most common reason acquisition
                loans are declined.
              </p>
            </div>

            {/* Buyer qualifications */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  <KeyIcon />
                </div>
                <h3 className="font-semibold text-[#0f0f0f] text-sm">Buyer qualifications</h3>
              </div>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">
                Personal credit history, industry or management experience, and the buyer's own financial
                strength all factor into lender decisions. SBA lenders typically require personal credit scores
                above 650–680, and many conventional lenders set that bar higher. Buyers with prior business
                ownership experience or relevant management history may find the qualification process smoother
                than first-time buyers entering an unfamiliar industry.
              </p>
            </div>

            {/* Collateral */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  <ShieldIcon />
                </div>
                <h3 className="font-semibold text-[#0f0f0f] text-sm">Collateral &amp; guarantees</h3>
              </div>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">
                SBA and conventional lenders typically require a security interest in business assets and, where
                available, personal assets of the borrower. SBA guidelines require lenders to take all available
                collateral, though a deal will not necessarily be declined solely because collateral is
                insufficient. Personal guarantees from all owners with 20% or greater equity interest are
                standard under SBA rules and common in conventional acquisition lending.
              </p>
            </div>

            {/* Documentation */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffffff] border border-[#e5e5e5] text-[#0f0f0f]">
                  <DocumentIcon />
                </div>
                <h3 className="font-semibold text-[#0f0f0f] text-sm">Documentation requirements</h3>
              </div>
              <p className="text-sm text-[#a3a3a3] leading-relaxed">
                Acquisition loans are documentation-intensive. Lenders typically require 3 years of business tax
                returns, interim financial statements, a business valuation (or purchase price justification),
                purchase agreement, buyer personal financial statements, personal tax returns, and a transition
                plan. Some lenders require environmental reports, real estate appraisals, or industry-specific
                licenses. Incomplete documentation is a leading cause of delayed closings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Common Deal Structures ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common acquisition deal structures
            </h2>
            <p className="text-[#737373] leading-relaxed">
              Most acquisitions are not financed by a single source. Understanding how different capital layers
              fit together — and which combinations lenders may accept — is foundational to building a fundable
              deal structure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<BuildingIcon />}
              title="SBA 7(a) Acquisition Loan"
              description="The most common financing vehicle for small business acquisitions under $5M. Offers long amortization (up to 25 years for real estate, 10 years for goodwill), competitive rate spreads, and lower equity requirements than conventional loans — subject to SBA eligibility and lender approval."
              tags={["Up to $5M", "10–20% equity typical", "60–120 day close"]}
              href="/sba-loans"
            />
            <FinancingPathCard
              icon={<ChartIcon />}
              title="Conventional Bank Loan"
              description="Traditional commercial loans for acquisitions with strong collateral, buyer financial strength, and well-documented business cash flow. Typically requires higher equity injection and shorter terms than SBA programs, but may offer greater flexibility for larger or more complex deals."
              tags={["$500K–$10M+", "20–35% equity typical", "45–90 day close"]}
              href="/business-term-loans"
            />
            <FinancingPathCard
              icon={<KeyIcon />}
              title="Private Credit / Direct Lending"
              description="For acquisitions that don't fit conventional bank or SBA profiles — due to deal complexity, timing, or borrower circumstances — private credit sources may be a potential fit. Rates are typically higher; speed and structuring flexibility are the trade-offs."
              tags={["$1M–$50M+", "Faster close", "Higher rate typical"]}
              href="/private-lending"
            />
          </div>

          {/* Seller note callout */}
          <div className="mt-5 rounded-xl border border-[#0f0f0f]/20 bg-[#0f2a14] p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-0.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffffff] border border-[#0f0f0f]/30 text-[#0f0f0f]">
                  <DocumentIcon />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0f0f0f] text-sm mb-2">
                  Seller notes: a common deal component
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  A seller note — where the seller agrees to defer part of the purchase price and receive
                  payments over time — is a frequent element in small business acquisitions. Seller notes can
                  bridge valuation gaps, reduce the cash required from the buyer at closing, and in some SBA
                  deals, may count toward equity injection requirements under specific conditions. However,
                  SBA and conventional lenders have rules about seller note subordination and standby
                  provisions that must be satisfied. The terms, interest rate, and repayment structure are
                  negotiated between buyer and seller and subject to lender review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Comparison Table ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Acquisition financing structures at a glance
            </h2>
            <p className="text-[#737373] leading-relaxed">
              The table below summarizes indicative characteristics of common acquisition financing structures.
              Actual terms vary by lender, deal, and borrower profile. All financing is subject to underwriting,
              eligibility, and approval by the applicable third-party provider.
            </p>
          </div>
          <ComparisonTable
            columns={["SBA 7(a)", "Conventional Bank", "Private Credit", "Seller Note Only"]}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />
          <p className="text-xs text-[#a3a3a3] mt-4">
            Figures are general reference ranges only. Lender requirements vary. Not an offer or commitment.
            Subject to underwriting and approval by third-party providers.
          </p>
        </div>
      </section>

      {/* ── Section 5: How to Approach the Process ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            How to approach the acquisition financing process
          </h2>
          <p className="text-[#737373] leading-relaxed mb-6">
            Acquisition financing is not a quick-turnaround process. The deals that close efficiently tend to
            share a common pattern: the buyer enters the lender conversation prepared, with organized
            documentation and a realistic view of what the business can support in debt service.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-px bg-[#e5e5e5] ml-3 mt-1.5" />
              <div>
                <div className="flex items-center gap-3 mb-2 -ml-3.5">
                  <div className="w-6 h-6 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center text-[#0f0f0f] text-[0.6rem] font-semibold">1</div>
                  <h3 className="font-semibold text-[#0f0f0f] text-sm">Understand the business's financials before the LOI</h3>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed pl-9">
                  Before submitting a letter of intent, buyers should review at least 3 years of business tax
                  returns and financial statements. The difference between seller-represented earnings and
                  what a lender will underwrite — after adjusting for add-backs and owner expenses — can
                  significantly affect how much debt the business can support and, therefore, what purchase
                  price is financeable.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-px bg-[#e5e5e5] ml-3 mt-1.5" />
              <div>
                <div className="flex items-center gap-3 mb-2 -ml-3.5">
                  <div className="w-6 h-6 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center text-[#0f0f0f] text-[0.6rem] font-semibold">2</div>
                  <h3 className="font-semibold text-[#0f0f0f] text-sm">Know your equity position going in</h3>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed pl-9">
                  Lenders will ask for documented evidence of the buyer's equity injection — bank statements,
                  investment accounts, retirement funds (subject to ROBS rules if applicable), or gift letters.
                  Equity cannot come from borrowed funds in most acquisition loan structures. Knowing your
                  liquid capital position before engaging lenders shapes what deal size may be accessible.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-px bg-[#e5e5e5] ml-3 mt-1.5" />
              <div>
                <div className="flex items-center gap-3 mb-2 -ml-3.5">
                  <div className="w-6 h-6 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center text-[#0f0f0f] text-[0.6rem] font-semibold">3</div>
                  <h3 className="font-semibold text-[#0f0f0f] text-sm">Engage the right lender type for the deal</h3>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed pl-9">
                  SBA lenders vary significantly in appetite, experience with acquisitions, processing capacity,
                  and turnaround time. For deals under $5M with favorable DSCR and buyer profile, SBA 7(a) is
                  typically the starting point. For deals with complexity — partial real estate, rollover equity,
                  management buyouts, or tight timelines — a private credit or conventional bank structure may
                  be a more practical fit, subject to underwriting.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center text-[#0f0f0f] text-[0.6rem] font-semibold">4</div>
                  <h3 className="font-semibold text-[#0f0f0f] text-sm">Build the documentation package early</h3>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed pl-9">
                  Most acquisition loan delays stem from documentation gaps discovered mid-process. Buyers who
                  compile personal financial statements, 3 years of personal tax returns, a resume demonstrating
                  relevant experience, and a basic business plan before lender submission tend to move faster
                  and encounter fewer surprises. Working with an attorney and accountant experienced in
                  acquisitions is advisable; ZEO does not provide legal, tax, or accounting advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Acquisition financing questions"
      />

      {/* Disclaimer */}
      <section className="py-8 border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-3">
          <ProductDisclaimer type="acquisition" />
          <ProductDisclaimer type="general" />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Explore acquisition financing options"
        subtext="Submit a brief intake and ZEO will review which third-party financing paths may be a potential fit for your acquisition — subject to underwriting and provider approval."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="View Financing Options"
        secondaryHref="/financing"
        variant="dark"
      />

    </main>
  );
}

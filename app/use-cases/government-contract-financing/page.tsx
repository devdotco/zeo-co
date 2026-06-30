import type { Metadata } from "next";
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
  title: "Government Contract Financing | ZEO.co",
  description:
    "Explore financing structures that may help businesses bridge the gap between contract award and payment — including contract financing, invoice factoring, SBA 7(a), and lines of credit. Subject to third-party underwriting.",
  path: "/use-cases/government-contract-financing",
  keywords: [
    "government contract financing",
    "federal contract financing",
    "contract receivables factoring",
    "government invoice factoring",
    "SBA government contractor loan",
    "contract mobilization financing",
    "defense contractor financing",
    "small business government contract loan",
    "PO financing government",
    "contract working capital",
  ],
});

// ── Data ──────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Can a government contract be used as collateral for financing?",
    a: "In many cases, yes — a confirmed government contract or purchase order can support financing structures designed for contract execution. Lenders and factoring companies that specialize in government receivables understand the Assignment of Claims Act, which governs the assignment of federal receivables. Some structures are based on the contract itself; others advance against invoices once work has been performed and billed. Eligibility, structure, and terms vary by lender and contract type. All financing is subject to underwriting by third-party providers.",
  },
  {
    q: "What is government contract factoring and how does it differ from regular invoice factoring?",
    a: "Government contract factoring is a specialized form of accounts receivable factoring where the obligor — the entity responsible for payment — is a federal, state, or local government agency. Because government agencies are considered low credit-risk obligors, factoring companies may offer more favorable advance rates or terms compared to factoring commercial receivables. However, the Assignment of Claims Act (31 U.S.C. § 3727) requires proper notice and assignment procedures for federal receivables. Not all factoring companies handle government receivables; those that do have specific documentation and compliance requirements.",
  },
  {
    q: "Is SBA financing available for government contractors?",
    a: "SBA 7(a) loans, including the CAPLines program — specifically the Contract CAPLine and Builders CAPLine — are designed in part to help small businesses finance the cost of performing specific contracts. The Contract CAPLine provides advances against the costs of performing eligible contracts. Approval, eligibility, and terms are determined by SBA-approved lenders, not ZEO. ZEO is not the SBA or an SBA lender. All SBA products are subject to SBA rules, participating lender underwriting, and applicable eligibility criteria.",
  },
  {
    q: "What documents do I typically need to apply for government contract financing?",
    a: "Documentation requirements vary by product and lender, but commonly requested items include the executed government contract or purchase order, recent business bank statements (3–6 months), business tax returns (1–2 years), a profit and loss statement, business entity documents, and a personal financial statement for principals. For factoring, lenders will also review the invoices being factored, the contracting agency's payment history, and any existing UCC filings. Government contracts should clearly identify the contracting agency, contract number, scope, and payment terms.",
  },
];

const comparisonRows = [
  {
    feature: "Best suited for",
    "Contract Financing": "Pre-performance mobilization costs",
    "Invoice Factoring": "Submitted invoices awaiting payment",
    "SBA CAPLine": "Recurring contract performance",
    "Line of Credit": "Ongoing working capital needs",
  },
  {
    feature: "Typical funding trigger",
    "Contract Financing": "Contract award or PO",
    "Invoice Factoring": "Invoice submission to agency",
    "SBA CAPLine": "Contract execution period",
    "Line of Credit": "Draw on demand",
  },
  {
    feature: "Advance rate (typical)",
    "Contract Financing": "Varies by lender",
    "Invoice Factoring": "80–90% of invoice face",
    "SBA CAPLine": "Per SBA guidelines",
    "Line of Credit": "Up to approved limit",
  },
  {
    feature: "Speed to funding",
    "Contract Financing": "Days to weeks",
    "Invoice Factoring": "24–72 hours",
    "SBA CAPLine": "Weeks (SBA process)",
    "Line of Credit": "Days (if pre-approved)",
  },
  {
    feature: "Assignment of Claims required",
    "Contract Financing": "Often yes (federal contracts)",
    "Invoice Factoring": "Yes (federal receivables)",
    "SBA CAPLine": "Varies",
    "Line of Credit": "Not typically",
  },
  {
    feature: "Effective cost range",
    "Contract Financing": "Varies by lender",
    "Invoice Factoring": "Factoring fee + advance rate",
    "SBA CAPLine": "Prime + SBA spread",
    "Line of Credit": "Varies by lender",
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconContract() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="4" y="2" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 7h6M7 10h6M7 13h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12.5 13.5l1.5 1.5 2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFactoring() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5h10M5 8.5h7M5 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="15" cy="13" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 13h1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconSBA() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="9" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 9V7.5C6 5.567 7.791 4 10 4s4 1.567 4 3.5V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 12v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconCreditLine() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 8h16" stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="11" width="4" height="1.5" rx="0.75" fill="currentColor" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GovernmentContractFinancingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
          {
            name: "Government Contract Financing",
            url: "https://zeo.co/use-cases/government-contract-financing",
          },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Use Cases", href: "/use-cases" },
          { label: "Government Contract Financing" },
        ]}
        eyebrow="Use Case"
        title="Government Contract Financing"
        subtitle="You've been awarded the contract. The agency will pay — but not for 30, 60, or 90 days. In the meantime, your business needs capital to mobilize, hire, procure, and perform. Several financing structures exist specifically for this gap."
      />

      {/* 2. The Business Scenario */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                Winning the contract is not the same as being funded
              </h2>
              <div className="space-y-4 text-sm text-[#9aaa98] leading-relaxed">
                <p>
                  Government contracts — federal, state, or local — are often among the most creditworthy receivables a business can hold. The obligor is the government. Default risk is low. Yet the payment terms can stretch well beyond what most small businesses can absorb without external capital. Net-30 is common. Net-60 and net-90 exist. And the work — labor, materials, equipment, subcontractors — must begin before the first invoice is ever submitted.
                </p>
                <p>
                  This creates a classic cash flow timing problem. You may have a confirmed contract worth hundreds of thousands of dollars and not a single dollar of working capital to mobilize on day one. For businesses that win their first significant government contract, this gap can be the difference between executing and defaulting on a contract they legitimately earned.
                </p>
                <p>
                  Financing structures designed for government contractors address this in several ways: advancing capital against the contract itself before work is performed, purchasing the resulting receivables once invoices are submitted, or providing a revolving credit facility sized to the contract value. Each approach has different requirements, costs, and timing. The right structure depends on where you are in the contract lifecycle and how your costs are distributed over the performance period.
                </p>
                <p>
                  Industries where this scenario is common include federal defense subcontractors, IT and professional services firms with GSA schedules, construction contractors on government projects, staffing companies providing workers to government agencies, and small manufacturers with DoD or civilian agency purchase orders.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="Federal payment terms (typical)"
                value="30–90"
                unit="days net"
                note="Prompt Payment Act sets 30-day standard; many agencies run longer"
              />
              <MetricCard
                label="Invoice factoring advance rate"
                value="80–90%"
                unit="of face value"
                note="Government obligors often support higher advance rates"
              />
              <MetricCard
                label="Funding speed — factoring"
                value="24–72"
                unit="hours"
                note="Once invoice is submitted and verified"
              />
              <MetricCard
                label="SBA CAPLine ceiling"
                value="$5M"
                unit="per SBA guidelines"
                note="Subject to lender, underwriting, and SBA eligibility"
                highlight
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Relevant Financing Options */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Financing Options
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Structures that may be relevant
            </h2>
            <p className="text-sm text-[#9aaa98] max-w-2xl">
              The following financing structures are commonly used by government contractors at different stages of the contract lifecycle. Availability, terms, and eligibility vary by lender, contract type, and business profile. All financing is subject to third-party underwriting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<IconContract />}
              title="Contract Financing"
              description="An advance against a confirmed contract or purchase order, allowing mobilization before invoices are submitted. Typically used when upfront costs — labor, materials, subcontractors — must be incurred well before payment."
              tags={["Pre-performance", "Contract-backed", "Mobilization"]}
              href="/financing"
              highlight
            />
            <FinancingPathCard
              icon={<IconFactoring />}
              title="Government Invoice Factoring"
              description="Sell submitted government invoices to a factoring company for an immediate advance. The factoring company collects directly from the agency. Specialized government factoring companies understand the Assignment of Claims Act."
              tags={["Post-billing", "Assignment of Claims", "Fast funding"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<IconSBA />}
              title="SBA CAPLine — Contract"
              description="The SBA Contract CAPLine is a revolving credit facility designed to help small businesses finance the costs of performing specific contracts. Subject to SBA eligibility, participating lender approval, and SBA program rules."
              tags={["SBA-backed", "Revolving", "Small business"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<IconCreditLine />}
              title="Business Line of Credit"
              description="A revolving facility that can bridge cash flow gaps during contract performance. Best suited for established businesses with a track record. Interest accrues only on the drawn balance."
              tags={["Revolving", "Flexible draw", "Bank or alternative"]}
              href="/financing"
            />
          </div>
        </div>
      </section>

      {/* 4. How to Evaluate Which Option Fits */}
      <section className="py-16 border-t border-[#1e2620]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
              Evaluation
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Comparing government contract financing structures
            </h2>
            <p className="text-sm text-[#9aaa98] max-w-2xl mb-8">
              The table below is a general reference. Actual terms, costs, and eligibility vary by lender, contract type, and business profile. This is not an offer or commitment.
            </p>
          </div>
          <ComparisonTable
            columns={["Contract Financing", "Invoice Factoring", "SBA CAPLine", "Line of Credit"]}
            rows={comparisonRows}
            highlightCol="Invoice Factoring"
          />

          {/* Decision guidance */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                question: "Where are you in the contract lifecycle?",
                guidance:
                  "If you need capital before work begins — to hire staff, procure materials, or mobilize equipment — contract financing or a line of credit addresses pre-performance costs. If you have already submitted invoices and are waiting on agency payment, factoring converts those receivables to cash quickly.",
              },
              {
                question: "Is your contract federal, state, or local?",
                guidance:
                  "Federal contracts have specific legal requirements under the Assignment of Claims Act for assigning receivables. Factoring companies that handle government receivables must follow proper notice and assignment procedures. State and local contracts vary by jurisdiction and agency. Confirm your contract's assignability before selecting a factoring structure.",
              },
              {
                question: "How are your costs distributed over the performance period?",
                guidance:
                  "If your costs are heavily front-loaded — large upfront material purchases, initial staffing ramp — you may need a larger initial advance than factoring alone can provide. A contract financing structure or line of credit may be more appropriate. If costs are spread evenly, factoring each invoice as it is submitted may be sufficient.",
              },
              {
                question: "How established is your business?",
                guidance:
                  "SBA CAPLines and conventional lines of credit typically require a more established credit and operating history. Factoring and contract financing structures often weight the contract itself and the creditworthiness of the government obligor more heavily than the contractor's own credit profile, which may be a better path for newer businesses.",
              },
              {
                question: "Is this a prime contract or a subcontract?",
                guidance:
                  "Prime contractors have a direct relationship with the government agency, which supports cleaner assignment and factoring arrangements. Subcontractors are paid by the prime, not the agency, which introduces a different credit and timing profile. Some lenders work with subcontractors; others focus exclusively on prime contract receivables.",
              },
              {
                question: "What is the total contract value and duration?",
                guidance:
                  "For larger, multi-year contracts, a revolving SBA CAPLine or asset-based credit facility may be more efficient than factoring each invoice individually. For a single contract of defined duration, contract-specific factoring or a short-term line may be adequate. Match the structure's tenure to the contract's performance period.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-[#1e2620] bg-[#111512] p-5"
              >
                <p className="text-sm font-semibold text-[#eef2ec] mb-2 leading-snug">
                  {item.question}
                </p>
                <p className="text-xs text-[#6b7e69] leading-relaxed">{item.guidance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Common Requirements */}
      <section className="py-16 border-t border-[#1e2620] bg-[#111512]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-3">
                Common Requirements
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                What lenders and factors typically evaluate
              </h2>
              <p className="text-sm text-[#9aaa98] leading-relaxed mb-6">
                Requirements vary by product type and individual lender. The following are general factors commonly reviewed during underwriting for government contract financing. Meeting these thresholds does not guarantee approval — all financing is subject to underwriting by third-party providers.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    label: "Confirmed contract or purchase order",
                    detail:
                      "The executed contract document, including scope, contract number, contracting agency, performance period, and payment terms, is central to any contract-based financing structure.",
                  },
                  {
                    label: "Assignability of contract receivables",
                    detail:
                      "Federal contracts fall under the Assignment of Claims Act. Lenders and factors will verify that the contract allows for assignment of receivables and that proper notice procedures can be followed.",
                  },
                  {
                    label: "Business operating history",
                    detail:
                      "Most lenders require at least 6–12 months of operating history. SBA CAPLines and bank lines typically require 2+ years. Contract financing and factoring may accommodate newer businesses with a strong contract.",
                  },
                  {
                    label: "Personal credit score",
                    detail:
                      "Score thresholds vary from approximately 550+ for alternative contract financing to 680+ for SBA and conventional products. Government factoring often weights obligor quality more heavily than owner credit.",
                  },
                  {
                    label: "Business bank statements",
                    detail:
                      "3–6 months of business bank statements are typically required to assess cash flow, average daily balance, NSFs, and existing debt service obligations.",
                  },
                  {
                    label: "Existing UCC liens and debt positions",
                    detail:
                      "Outstanding liens or stacked financing positions may affect eligibility for additional contract financing. Factors will require a clear or subordinated lien position on the factored receivables.",
                  },
                  {
                    label: "Tax returns and financial statements",
                    detail:
                      "Business tax returns (1–2 years) and current-year profit and loss are commonly required for SBA and bank products. Alternative lenders may rely more on bank statements and contract documentation.",
                  },
                ].map((req) => (
                  <li key={req.label} className="flex gap-3 list-none">
                    <span
                      className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#22c55e]"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="text-sm font-medium text-[#eef2ec]">{req.label}: </span>
                      <span className="text-sm text-[#6b7e69]">{req.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Document checklist */}
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#22c55e] mb-4">
                Typical Document Checklist
              </p>
              <div className="space-y-5">
                {[
                  {
                    category: "Contract documents",
                    items: [
                      "Executed contract or purchase order",
                      "Contract modification(s) if applicable",
                      "Contracting officer contact information",
                      "Performance work statement or scope of work",
                    ],
                  },
                  {
                    category: "Business and financial documents",
                    items: [
                      "3–6 months business bank statements",
                      "Business tax returns — 1 to 2 years",
                      "Current-year profit and loss statement",
                      "Business entity documents (EIN, formation docs)",
                      "Government ID for all principals",
                    ],
                  },
                  {
                    category: "For SBA CAPLine applications",
                    items: [
                      "Personal tax returns (owner)",
                      "Personal financial statement",
                      "Business plan and use of proceeds narrative",
                      "SBA Form 413 (personal financial statement)",
                      "Collateral schedule if applicable",
                    ],
                  },
                  {
                    category: "For invoice factoring",
                    items: [
                      "Copy of submitted invoice(s) to contracting agency",
                      "Aging report of outstanding government receivables",
                      "Evidence of invoice delivery or acceptance",
                    ],
                  },
                ].map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold text-[#9aaa98] mb-2">{group.category}</p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#6b7e69]">
                          <svg
                            className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 text-[#22c55e]/60"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2.5 7l3.5 3.5 5.5-6"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-[#1e2620]">
                <p className="text-xs text-[#6b7e69] leading-relaxed">
                  Document requirements vary by lender and financing structure. ZEO's intake process is designed to surface the most relevant requirements for your specific contract and business profile before you engage with a provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ
        title="Government Contract Financing — Common Questions"
        items={faqItems}
        includeSchema
      />

      {/* 7. CTA */}
      <CTASection
        headline="Working on a government contract and need capital?"
        subtext="Submit a brief intake and ZEO will review financing structures that may fit your contract type, performance timeline, and business profile. All options are subject to third-party underwriting and approval."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Explore All Financing"
        secondaryHref="/financing"
        variant="dark"
      />

      {/* 8. Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="general" />
      </div>
    </>
  );
}

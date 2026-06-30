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
  title: "Finance a Franchise | ZEO.co",
  description:
    "Explore financing structures that may help fund a franchise purchase, buildout, or expansion. Franchise financing is subject to third-party underwriting and lender eligibility requirements.",
  path: "/use-cases/franchise-financing",
  keywords: [
    "franchise financing",
    "SBA franchise loan",
    "franchise business loan",
    "how to finance a franchise",
    "franchise funding options",
    "SBA 7a franchise",
    "franchise startup financing",
    "buy a franchise with financing",
    "franchise equipment financing",
    "ROBS franchise funding",
  ],
});

// ── Data ──────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "Does the franchise brand matter for financing eligibility?",
    a: "Yes — franchise brand matters significantly for certain lenders, particularly those using the SBA Franchise Directory. Brands listed on the SBA Franchise Registry are eligible for SBA 7(a) and SBA 504 financing and typically receive faster processing. Brands not on the registry may still be eligible after a separate review of the franchise agreement by the lender. Some conventional and alternative lenders do not use the registry and evaluate the business on its own merits. The franchisor's existing financing relationships, failure rate data, and FDD disclosure history can also influence lender appetite.",
  },
  {
    q: "Can I use an SBA loan to buy a franchise if I have no prior business ownership experience?",
    a: "SBA-backed loans do not require prior business ownership, but lenders will evaluate your relevant industry experience, management background, and personal financial strength. Many franchisors provide training programs that lenders weigh positively when assessing an applicant without direct operating experience. A strong personal credit score, adequate liquidity for the required equity injection (typically 10–30%), and a clean credit history tend to carry significant weight when business experience is limited. All approvals are subject to the individual lender's underwriting criteria.",
  },
  {
    q: "What is the SBA equity injection requirement for franchise financing?",
    a: "SBA guidelines generally require borrowers to contribute meaningful equity — often cited as 10–30% of total project costs — to demonstrate financial commitment. The exact equity injection requirement varies by lender, loan size, collateral available, and the specific program (7(a) vs. 504). Equity can come from personal savings, retirement funds via a ROBS arrangement, seller financing in certain structures, or other sources acceptable to the lender. ZEO is not an SBA lender and cannot guarantee any specific equity injection threshold. Always confirm directly with the participating lender.",
  },
  {
    q: "What are the main risks to understand before taking on franchise financing?",
    a: "Franchise financing typically involves personal guarantees, meaning your personal assets may be at risk if the business fails to service debt. SBA loans include a lien on business assets and often require a personal guarantee from owners with 20% or more equity. Revenue projections in a Franchise Disclosure Document are estimates — actual performance may vary significantly. Some franchise brands carry higher failure rates than others, which experienced lenders will factor into their underwriting. Understanding the total cost of ownership — including royalties, marketing fund contributions, and buildout requirements — is critical before committing to a financing structure. All financing discussed on this page is provided by third-party lenders and is subject to their underwriting and approval.",
  },
];

const comparisonRows = [
  {
    feature: "Primary use in franchise context",
    "SBA 7(a)": "Full acquisition, working capital, buildout",
    "SBA 504": "Real estate, large equipment",
    "Equipment Financing": "Kitchen, equipment, FF&E",
    "Conventional Term Loan": "Established franchisees, expansion",
  },
  {
    feature: "Typical loan amount",
    "SBA 7(a)": "Up to $5M",
    "SBA 504": "Up to $5.5M (CDC portion)",
    "Equipment Financing": "Per asset value",
    "Conventional Term Loan": "Varies by lender",
  },
  {
    feature: "Equity injection",
    "SBA 7(a)": "Typically 10–30%",
    "SBA 504": "Typically 10–20%",
    "Equipment Financing": "Varies; often lower",
    "Conventional Term Loan": "Varies; often 20–30%",
  },
  {
    feature: "Typical term",
    "SBA 7(a)": "10–25 years",
    "SBA 504": "10–25 years",
    "Equipment Financing": "2–7 years",
    "Conventional Term Loan": "3–10 years",
  },
  {
    feature: "Funding speed",
    "SBA 7(a)": "30–90 days",
    "SBA 504": "45–90 days",
    "Equipment Financing": "Days to weeks",
    "Conventional Term Loan": "2–6 weeks",
  },
  {
    feature: "Collateral requirement",
    "SBA 7(a)": "Business + personal assets",
    "SBA 504": "Asset being financed",
    "Equipment Financing": "Equipment itself",
    "Conventional Term Loan": "Varies",
  },
  {
    feature: "Franchise Directory required",
    "SBA 7(a)": "Preferred; unlisted reviewed",
    "SBA 504": "Preferred; unlisted reviewed",
    "Equipment Financing": "No",
    "Conventional Term Loan": "No",
  },
];

// ── Inline SVG Icons ──────────────────────────────────────────────────────────

function IconSBA() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="9" width="14" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 9V7a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10" cy="13" r="1.25" fill="currentColor" />
    </svg>
  );
}

function IconSBA504() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 16V8l7-5 7 5v8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="7" y="11" width="6" height="5" rx="0.75" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 11v5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function IconEquipment() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="6" width="16" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 14v2M14 14v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8 10h4M10 8v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconConventional() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 7h14M3 10h10M3 13h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="15.5" cy="13.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14.75 13.5h1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 text-[#0f0f0f]/60"
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
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FranchiseFinancingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
          { name: "Finance a Franchise", url: "https://zeo.co/use-cases/franchise-financing" },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Use Cases", href: "/use-cases" },
          { label: "Finance a Franchise" },
        ]}
        eyebrow="Use Case"
        title="Finance a Franchise"
        subtitle="Franchise acquisitions involve a layered set of costs — franchise fees, buildout, equipment, working capital, and ongoing royalties. Several financing structures may be relevant depending on the brand, the location, and the buyer's financial profile."
      />

      {/* 2. The Business Scenario */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
                What makes franchise financing distinct
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  Buying a franchise is different from starting an independent business. The brand is established, the operating system is defined, and the Franchise Disclosure Document (FDD) provides detailed cost and performance data. These factors — when favorable — give lenders a degree of predictability that can work in an applicant's favor during underwriting.
                </p>
                <p>
                  Total startup costs for a new franchise unit typically include an initial franchise fee (commonly $20,000–$75,000+), buildout and leasehold improvements, equipment and fixtures, initial inventory, and working capital reserves. Depending on the brand and location, total project costs can range from under $100,000 for a home-based or low-overhead concept to well over $1 million for a full-service restaurant or fitness center.
                </p>
                <p>
                  The most common financing path for first-time franchisees involves an SBA-backed loan, which can cover a significant portion of startup costs. Equipment financing is often layered in to address specific asset purchases. Established multi-unit franchisees may qualify for conventional bank financing based on their operating history. The franchisor itself may offer financing programs or referrals to preferred lenders familiar with the brand.
                </p>
                <p>
                  Not every financing structure is appropriate for every situation. The right combination depends on the total project cost, your available equity, the franchise brand's status on the SBA Franchise Directory, your personal credit and financial history, and the lender's specific underwriting criteria. All financing discussed on ZEO is provided by third-party lenders and is subject to underwriting and approval.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="Typical project cost range"
                value="$80K"
                unit="to $2M+"
                note="Varies widely by brand and format"
              />
              <MetricCard
                label="SBA 7(a) max loan amount"
                value="$5M"
                note="Subject to lender approval and eligibility"
              />
              <MetricCard
                label="Common equity injection"
                value="10–30%"
                unit="of project cost"
                note="SBA guidelines; lender requirements vary"
              />
              <MetricCard
                label="SBA loan term"
                value="Up to 25 yrs"
                note="Real estate; 10 yr for working capital"
                highlight
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Relevant Financing Options */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Financing Options
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Structures commonly used in franchise transactions
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              The products below represent the most frequently used financing paths for franchise acquisitions and buildouts. Eligibility, terms, and availability vary by lender, brand, and business profile. ZEO is not an SBA lender. All financing is provided by third-party lenders and is subject to underwriting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<IconSBA />}
              title="SBA 7(a) Loan"
              description="The most widely used structure for franchise acquisitions. May cover franchise fees, buildout, equipment, and working capital in a single loan. SBA-backed loans typically require a personal guarantee and equity injection."
              tags={["Up to $5M", "10–25 yr term", "SBA-backed"]}
              href="/financing/sba-loans"
              highlight
            />
            <FinancingPathCard
              icon={<IconSBA504 />}
              title="SBA 504 Loan"
              description="Designed for major fixed assets — commercial real estate and large equipment. Structured as two loans: a conventional lender portion and a Certified Development Company (CDC) portion. Often used by franchisees acquiring their own real estate."
              tags={["Real estate", "Large equipment", "Fixed assets"]}
              href="/financing/sba-504"
            />
            <FinancingPathCard
              icon={<IconEquipment />}
              title="Equipment Financing"
              description="Finance the specific equipment required for your franchise unit — kitchen equipment, point-of-sale systems, fitness equipment, vehicles, or build-out fixtures. The equipment typically serves as collateral, which can reduce overall underwriting friction."
              tags={["Asset-backed", "Fast funding", "Preserves cash"]}
              href="/financing/equipment-financing"
            />
            <FinancingPathCard
              icon={<IconConventional />}
              title="Conventional Term Loan"
              description="Bank or credit union term loans for franchisees with operating history, strong cash flow, and established credit. May offer competitive pricing for qualified multi-unit operators or experienced franchisees expanding existing units."
              tags={["Existing franchisees", "Strong credit", "Expansion"]}
              href="/financing/term-loans"
            />
          </div>
        </div>
      </section>

      {/* 4. How to Evaluate Which Option Fits */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Evaluation
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Comparing common franchise financing structures
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl mb-8">
              The table below provides a general reference. Actual terms, costs, and eligibility depend on the specific lender, the franchise brand, your financial profile, and current market conditions. This is not an offer or commitment to lend.
            </p>
          </div>
          <ComparisonTable
            columns={["SBA 7(a)", "SBA 504", "Equipment Financing", "Conventional Term Loan"]}
            rows={comparisonRows}
            highlightCol="SBA 7(a)"
          />

          {/* Decision guidance */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                question: "Is your franchise brand on the SBA Franchise Directory?",
                guidance:
                  "Brands listed on the SBA Franchise Registry are eligible for SBA 7(a) financing and often receive faster lender processing. If your brand is not listed, some lenders will still underwrite the deal after reviewing the franchise agreement — but the process is typically longer and less predictable.",
              },
              {
                question: "Are you buying real estate with the franchise?",
                guidance:
                  "If the franchise concept involves owning the physical location — a fast-casual restaurant on a pad site, for example — an SBA 504 loan may be a strong fit alongside an SBA 7(a) for working capital and fees. The 504 is specifically structured for long-term fixed-asset financing.",
              },
              {
                question: "How much equity can you inject?",
                guidance:
                  "SBA lenders typically require 10–30% equity injection from the borrower. If your available cash is below that threshold, some buyers explore ROBS (Rollover for Business Startups) arrangements using retirement funds, or seller financing for a portion of the franchise fee. Both carry their own risks and tax implications.",
              },
              {
                question: "Is this your first unit or are you expanding?",
                guidance:
                  "First-time franchisees with no operating history rely primarily on the brand's track record, the FDD, and personal credit. Multi-unit operators with audited financials and proven cash flow have a broader set of options including conventional bank loans, which may carry lower effective costs for strong credit profiles.",
              },
              {
                question: "What is the equipment-intensity of the franchise?",
                guidance:
                  "High-equipment concepts — full-service restaurants, auto service centers, fitness studios — often benefit from layering equipment financing alongside an SBA loan. Equipment financing may fund faster and require less equity than including all equipment costs in the SBA note.",
              },
              {
                question: "Does the franchisor have a preferred lender program?",
                guidance:
                  "Many major franchise brands have negotiated relationships with lenders who understand the brand's FDD, cost structure, and operating profile. These lenders may offer faster processing or more favorable underwriting for the specific brand. Ask the franchisor's development team directly before approaching general lenders.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2 leading-snug">
                  {item.question}
                </p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.guidance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Common Requirements */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Common Requirements
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
                What lenders typically evaluate
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Requirements for franchise financing vary by lender, loan product, and the specific franchise brand. The following factors are commonly reviewed during underwriting for SBA and conventional franchise loans. Meeting these thresholds does not guarantee approval — all financing is subject to underwriting by third-party providers. ZEO is not a lender and makes no representations about approval likelihood.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    label: "Personal credit score",
                    detail:
                      "Most SBA lenders look for a personal credit score of 650 or higher. Some conventional lenders require 680+. Scores below 640 significantly narrow available options, though some lenders will still underwrite based on compensating factors.",
                  },
                  {
                    label: "Equity injection / liquidity",
                    detail:
                      "Borrowers are typically expected to contribute 10–30% of total project costs from personal funds. Lenders will verify liquidity through bank statements and asset schedules. Borrowed equity is generally not acceptable for SBA loans.",
                  },
                  {
                    label: "Franchise brand eligibility",
                    detail:
                      "SBA lenders check the SBA Franchise Directory. Brands listed receive streamlined review. Unlisted brands require the lender to review and confirm the franchise agreement does not conflict with SBA affiliation rules.",
                  },
                  {
                    label: "Franchise Disclosure Document (FDD)",
                    detail:
                      "Lenders review the FDD — particularly Item 19 (financial performance representations), Item 20 (franchise system size and growth), and Item 21 (audited financials) — to assess the brand's stability and the viability of projections.",
                  },
                  {
                    label: "Business plan and projections",
                    detail:
                      "A credible business plan with revenue projections, startup cost breakdown, and market analysis is typically required for SBA loans. Projections should be grounded in FDD data and comparable unit performance where available.",
                  },
                  {
                    label: "Relevant industry or management experience",
                    detail:
                      "Lenders weigh the borrower's ability to operate the business. Prior franchise ownership, management experience in the relevant industry, or strong operational background can strengthen an application with limited business ownership history.",
                  },
                  {
                    label: "Collateral",
                    detail:
                      "SBA 7(a) loans require lenders to take available collateral when the loan exceeds $50,000. This may include business assets, real estate, and personal assets. Insufficient collateral alone does not automatically disqualify an applicant.",
                  },
                ].map((req) => (
                  <li key={req.label} className="flex gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0f0f0f]"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="text-sm font-medium text-[#0f0f0f]">{req.label}: </span>
                      <span className="text-sm text-[#a3a3a3]">{req.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Document checklist */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-4">
                Typical Document Checklist
              </p>
              <div className="space-y-5">
                {[
                  {
                    category: "Always requested",
                    items: [
                      "Signed franchise agreement or letter of intent from franchisor",
                      "Franchise Disclosure Document (FDD) — current year",
                      "Government-issued ID and Social Security Number",
                      "Personal financial statement (SBA Form 413 or equivalent)",
                    ],
                  },
                  {
                    category: "Commonly requested",
                    items: [
                      "Personal tax returns — 2 to 3 years",
                      "Business tax returns if purchasing an existing unit",
                      "Personal and business bank statements — 3 to 6 months",
                      "Resume or biography demonstrating relevant experience",
                    ],
                  },
                  {
                    category: "For SBA loans",
                    items: [
                      "Business plan with 3-year financial projections",
                      "Startup cost schedule (buildout, FF&E, working capital, fees)",
                      "Evidence of equity injection (bank statement, gift letter if applicable)",
                      "Real estate lease or letter of intent from landlord",
                      "SBA borrower information form (SBA Form 1919)",
                    ],
                  },
                ].map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold text-[#737373] mb-2">{group.category}</p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#a3a3a3]">
                          <IconCheck />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-[#e5e5e5]">
                <p className="text-xs text-[#a3a3a3] leading-relaxed">
                  Document requirements vary by lender and product. ZEO's intake process is designed to surface the most relevant requirements for your specific franchise and financing scenario before you engage with a provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ
        title="Franchise Financing — Common Questions"
        items={faqItems}
        includeSchema
      />

      {/* 7. CTA */}
      <CTASection
        headline="Ready to explore financing for your franchise?"
        subtext="Submit a brief intake and ZEO will identify financing structures that may be relevant to your franchise acquisition or buildout. All options are subject to third-party underwriting and approval. ZEO is not an SBA lender."
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

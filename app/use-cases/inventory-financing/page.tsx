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
  title: "Fund Inventory | ZEO.co",
  description:
    "Explore financing structures that may help your business purchase, build out, or replenish inventory ahead of demand. Subject to third-party underwriting and approval.",
  path: "/use-cases/inventory-financing",
  keywords: [
    "inventory financing",
    "inventory purchase financing",
    "purchase order financing",
    "asset-based lending inventory",
    "inventory line of credit",
    "business inventory loan",
    "inventory funding",
    "supply chain financing",
    "stock financing for business",
  ],
});

// ── Data ──────────────────────────────────────────────────────────────────────

const faqItems = [
  {
    q: "What is inventory financing and how does it work?",
    a: "Inventory financing is a category of asset-based lending in which a business uses its existing or to-be-purchased inventory as collateral to secure a loan or revolving line of credit. The lender advances a percentage of the eligible inventory's appraised value — commonly 50–80% depending on product type, turnover, and marketability. As inventory is sold and replenished, the borrowing base adjusts accordingly. This structure is most common in distribution, wholesale, retail, and manufacturing. Terms, advance rates, and eligibility are set by third-party lenders and are subject to underwriting.",
  },
  {
    q: "How is inventory financing different from purchase order financing?",
    a: "Inventory financing is typically secured by inventory your business already holds or is acquiring for general stock. Purchase order (PO) financing is structured specifically to fund the fulfillment of a confirmed purchase order — the lender advances funds to pay your supplier directly, and repayment occurs when your customer pays the invoice. PO financing is transactional and tied to a specific order; inventory financing is more of an ongoing revolving facility. The two are sometimes used together for high-volume or seasonal businesses. Both are subject to lender approval and may carry restrictions on eligible inventory or customer types.",
  },
  {
    q: "What types of inventory qualify for inventory financing?",
    a: "Eligibility depends heavily on the nature of the inventory. Lenders typically prefer finished goods with demonstrated resale value, stable shelf life, and broad market demand. Raw materials and work-in-process (WIP) inventory are generally less desirable as collateral and may receive lower advance rates or be excluded entirely. Perishables, highly specialized items, and slow-moving or obsolete stock are often ineligible. A lender will typically conduct an appraisal or field exam to assess inventory quality, turnover rates, and net orderly liquidation value (NOLV) before establishing an advance rate.",
  },
  {
    q: "What documents are typically required to apply for inventory financing?",
    a: "Most lenders require recent business bank statements (3–6 months), business tax returns (1–2 years), a current profit and loss statement, and an accounts receivable aging report. Specific to inventory financing, lenders commonly request a current inventory report or perpetual inventory schedule, a list of key suppliers, existing supplier agreements, and information about your customer base. Asset-based lenders may also conduct an on-site field examination. Requirements vary significantly by product type and lender — alternative lenders generally require lighter documentation than bank-based or SBA-backed facilities.",
  },
];

const comparisonRows = [
  {
    feature: "Collateral basis",
    "Inventory Financing": "Existing or purchased inventory",
    "PO Financing": "Confirmed purchase order",
    "Asset-Based Line": "Receivables + inventory",
    "Business Line of Credit": "Varies; often unsecured or UCC",
  },
  {
    feature: "Typical use",
    "Inventory Financing": "Build or replenish stock",
    "PO Financing": "Fund a specific supplier order",
    "Asset-Based Line": "Ongoing working capital",
    "Business Line of Credit": "Recurring operational gaps",
  },
  {
    feature: "Funding speed",
    "Inventory Financing": "Days to weeks",
    "PO Financing": "Days to weeks",
    "Asset-Based Line": "Weeks (initial setup)",
    "Business Line of Credit": "Days to weeks",
  },
  {
    feature: "Repayment structure",
    "Inventory Financing": "As inventory sells / revolving",
    "PO Financing": "When customer pays invoice",
    "Asset-Based Line": "Revolving borrowing base",
    "Business Line of Credit": "Draw and repay as needed",
  },
  {
    feature: "Advance rate (typical)",
    "Inventory Financing": "50–80% of eligible inventory",
    "PO Financing": "Up to 100% of supplier cost",
    "Asset-Based Line": "75–90% AR + 50% inventory",
    "Business Line of Credit": "Varies",
  },
  {
    feature: "Inventory appraisal required",
    "Inventory Financing": "Often yes",
    "PO Financing": "Not typically",
    "Asset-Based Line": "Often yes",
    "Business Line of Credit": "Not typically",
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconInventory() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconPO() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconABL() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLine() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 8h16" stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="11" width="4" height="1.5" rx="0.75" fill="currentColor" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function InventoryFinancingUseCasePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Use Cases", url: "https://zeo.co/use-cases" },
          { name: "Fund Inventory", url: "https://zeo.co/use-cases/inventory-financing" },
        ])}
      />

      {/* 1. Hero */}
      <PageHero
        breadcrumbs={[
          { label: "Use Cases", href: "/use-cases" },
          { label: "Fund Inventory" },
        ]}
        eyebrow="Use Case"
        title="Fund Inventory"
        subtitle="Your business needs stock before it can generate revenue. Whether you are building ahead of a seasonal peak, fulfilling a large purchase order, or replenishing fast-moving SKUs, several financing structures exist to help bridge the gap between supplier payment and customer receipt."
      />

      {/* 2. The Business Scenario */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                The Scenario
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                Capital is tied up in what you need to buy, not what you have sold
              </h2>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <p>
                  For product-based businesses — distributors, wholesalers, retailers, importers, and manufacturers — inventory is both an asset and a cash flow constraint. Suppliers typically require payment upfront or on short terms, while your customers may take 30, 60, or 90 days to pay. That gap is the inventory financing problem.
                </p>
                <p>
                  The challenge intensifies when demand is uneven. A holiday season, a large wholesale order, a contract with a major retailer, or a promotional campaign can all require a sudden inventory build that exceeds what operating cash flow can support. Underfunding inventory means missed revenue. Overfunding it without a financing facility means cash tied up that cannot serve other operational needs.
                </p>
                <p>
                  Several financing structures are specifically designed for inventory-heavy businesses. The most appropriate structure depends on whether the need is tied to a specific order or is an ongoing revolving requirement, the type and liquidity of your inventory, the credit profile of your business and its customers, and the timeline for inventory conversion to revenue.
                </p>
                <p>
                  Inventory financing is typically offered by asset-based lenders, specialty finance companies, and occasionally banks for well-established businesses. Advance rates, eligible inventory definitions, and reporting requirements vary significantly. All financing is subject to third-party underwriting and approval.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MetricCard
                label="Typical advance rate"
                value="50–80%"
                unit="of eligible inventory"
                note="Based on appraised net liquidation value"
              />
              <MetricCard
                label="PO financing advance"
                value="Up to 100%"
                unit="of supplier cost"
                note="For confirmed purchase orders"
              />
              <MetricCard
                label="Revolving or term"
                value="Both"
                note="Revolving lines and term-structured facilities available"
              />
              <MetricCard
                label="Common time in business"
                value="1–2+ yrs"
                note="Some products available at 6 months"
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
            <h2 className="text-2xl font-semibold text-white mb-2">
              Structures that may be relevant
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl">
              The following financing structures are commonly used by businesses that need to fund inventory purchases or build-outs. Availability, terms, advance rates, and eligibility vary by lender and business profile. All financing is subject to third-party underwriting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FinancingPathCard
              icon={<IconInventory />}
              title="Inventory Financing"
              description="A loan or revolving line secured by your existing or to-be-purchased inventory. The lender advances a percentage of the eligible inventory value based on appraisal. Advance rates and eligible inventory definitions vary by lender."
              tags={["Asset-based", "Revolving or term", "Inventory collateral"]}
              href="/inventory-financing"
              highlight
            />
            <FinancingPathCard
              icon={<IconPO />}
              title="Purchase Order Financing"
              description="Funds the cost of goods needed to fulfill a confirmed purchase order. The lender pays your supplier directly; repayment typically occurs when your customer pays the resulting invoice. Subject to customer creditworthiness."
              tags={["Order-specific", "Supplier direct pay", "B2B customers"]}
              href="/purchase-order-financing"
            />
            <FinancingPathCard
              icon={<IconABL />}
              title="Asset-Based Lending"
              description="A revolving credit facility secured by a combined borrowing base of accounts receivable and inventory. Borrowing capacity adjusts as assets change. Commonly used by distributors and manufacturers with both AR and inventory on the balance sheet."
              tags={["Revolving", "AR + inventory", "Borrowing base"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<IconLine />}
              title="Business Line of Credit"
              description="A revolving facility that can be used for inventory purchases among other operating needs. Less restrictive than dedicated inventory facilities, but advance availability is not tied to inventory value. May be secured or unsecured."
              tags={["Flexible use", "Revolving", "Unsecured options"]}
              href="/business-line-of-credit"
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
            <h2 className="text-2xl font-semibold text-white mb-2">
              Comparing common inventory financing structures
            </h2>
            <p className="text-sm text-[#737373] max-w-2xl mb-8">
              The table below is a general reference for comparing structures commonly used for inventory purposes. Actual terms, advance rates, and eligibility are determined by individual lenders based on your specific business profile. This is not an offer or commitment.
            </p>
          </div>
          <ComparisonTable
            columns={["Inventory Financing", "PO Financing", "Asset-Based Line", "Business Line of Credit"]}
            rows={comparisonRows}
            highlightCol="Inventory Financing"
          />

          {/* Decision guidance */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                question: "Is the need tied to a specific confirmed order?",
                guidance:
                  "If you have a confirmed purchase order from a creditworthy customer and need capital to pay the supplier, purchase order financing may be the most direct structure. If the need is to build general stock without a specific order, inventory financing or an asset-based line is typically more appropriate.",
              },
              {
                question: "How liquid is your inventory?",
                guidance:
                  "Lenders assess inventory based on how quickly and at what price it can be liquidated. Finished goods with broad market demand and consistent turnover receive better advance rates than raw materials, WIP, or specialized products with limited resale value. Perishables and highly seasonal goods are often treated with caution.",
              },
              {
                question: "Is this an ongoing need or a one-time build?",
                guidance:
                  "A revolving inventory line or asset-based facility makes sense if you regularly buy and turn inventory. For a one-time seasonal build or a specific purchase, a term-structured inventory loan or PO facility may be more efficient and avoid unnecessary ongoing facility costs.",
              },
              {
                question: "Do you also carry significant accounts receivable?",
                guidance:
                  "If your balance sheet includes both inventory and outstanding B2B receivables, an asset-based revolving line may allow you to borrow against both asset pools, potentially increasing total availability versus a single-asset facility.",
              },
              {
                question: "What is the creditworthiness of your end customers?",
                guidance:
                  "For purchase order financing, the credit quality of the customer who issued the PO matters substantially — lenders are advancing against their eventual payment. If your customers are large, creditworthy companies (retailers, government agencies, distributors), PO financing eligibility improves considerably.",
              },
              {
                question: "Are you prepared for inventory reporting requirements?",
                guidance:
                  "Asset-based and inventory-specific facilities often require ongoing borrowing base certificates, periodic inventory reports, and occasional field examinations. Businesses without robust inventory management systems may find these requirements operationally burdensome. Simpler products like a business line of credit have lighter reporting obligations.",
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
              <h2 className="text-2xl font-semibold text-white mb-4 leading-snug">
                What lenders typically evaluate
              </h2>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Requirements vary by product type and individual lender. The following are general factors commonly reviewed during underwriting for inventory and asset-based financing. Meeting these thresholds does not guarantee approval — all financing is subject to underwriting by third-party providers.
              </p>
              <ul className="space-y-3">
                {[
                  {
                    label: "Time in business",
                    detail:
                      "Most inventory lenders require 1–2 years of operating history. Some alternative products may qualify at 6 months, but established track records improve advance rates and terms.",
                  },
                  {
                    label: "Inventory type and turnover",
                    detail:
                      "Finished goods with documented turnover and clear market demand are most eligible. Lenders typically require inventory aging reports and will assess whether stock moves consistently.",
                  },
                  {
                    label: "Revenue and gross margin",
                    detail:
                      "Lenders assess whether the business generates sufficient margin to service the financing cost after inventory is sold. Thin-margin businesses face higher scrutiny on effective cost of capital.",
                  },
                  {
                    label: "Supplier relationships",
                    detail:
                      "Established supplier agreements, credit terms, and history of on-time payments support underwriting. For PO financing, supplier confirmation and willingness to accept lender payment is often required.",
                  },
                  {
                    label: "Customer base quality",
                    detail:
                      "For PO financing, the creditworthiness of end customers matters. For inventory lines, concentration risk (heavy reliance on a single customer) is assessed as it affects repayment certainty.",
                  },
                  {
                    label: "Existing liens and UCC filings",
                    detail:
                      "Lenders will search for existing UCC filings on your inventory. Prior blanket liens from other lenders may block new inventory-secured facilities unless subordinated or released.",
                  },
                  {
                    label: "Inventory management systems",
                    detail:
                      "Asset-based lenders may require access to your inventory management system or periodic physical counts. Businesses with accurate perpetual inventory records are better positioned for asset-based facilities.",
                  },
                ].map((req) => (
                  <li key={req.label} className="flex gap-3 list-none">
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
                      "3–6 months business bank statements",
                      "Driver's license or government-issued ID",
                      "Business entity documents (EIN, formation docs)",
                    ],
                  },
                  {
                    category: "Inventory-specific",
                    items: [
                      "Current inventory report or perpetual inventory schedule",
                      "Inventory aging report",
                      "Key supplier list and representative agreements",
                      "Existing purchase orders (for PO financing)",
                    ],
                  },
                  {
                    category: "Financial documentation",
                    items: [
                      "Business tax returns — 1 to 2 years",
                      "Profit and loss statement (current year)",
                      "Accounts receivable aging report",
                      "Balance sheet (current)",
                    ],
                  },
                  {
                    category: "For bank and ABL facilities",
                    items: [
                      "Personal tax returns (owner)",
                      "Personal financial statement",
                      "Collateral schedule",
                      "Field examination (may be required on-site)",
                    ],
                  },
                ].map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold text-[#737373] mb-2">{group.category}</p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#a3a3a3]">
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-[#e5e5e5]">
                <p className="text-xs text-[#a3a3a3] leading-relaxed">
                  Document requirements vary by lender and product type. ZEO's intake process is designed to identify the most relevant documentation requirements for your specific inventory financing scenario before you engage with a provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related use cases and products cross-nav */}
      <section className="py-14 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-2">
              Related
            </p>
            <h2 className="text-xl font-semibold text-white">
              Other use cases that may apply
            </h2>
            <p className="text-sm text-[#737373] mt-1 max-w-xl">
              Inventory financing often overlaps with contract fulfillment, working capital, and expansion needs. Explore related scenarios.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Contract Fulfillment", href: "/use-cases/contract-fulfillment" },
              { label: "Working Capital", href: "/use-cases/working-capital" },
              { label: "Business Growth & Expansion", href: "/use-cases/growth-expansion" },
              { label: "All Use Cases", href: "/use-cases" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-xl border border-[#e5e5e5] text-sm text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f]/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ
        title="Inventory Financing — Common Questions"
        items={faqItems}
        includeSchema
      />

      {/* 7. CTA */}
      <CTASection
        headline="Ready to explore inventory financing options?"
        subtext="Submit a brief intake and ZEO will review financing structures that may be relevant to your inventory need. All options are subject to third-party underwriting and approval."
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

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
  title: "Inventory Financing for Business | ZEO.co",
  description:
    "Learn how inventory financing works for businesses — typical structures, requirements, costs, and whether it may be a potential fit for your situation. Subject to underwriting by third-party providers.",
  path: "/inventory-financing",
  keywords: [
    "inventory financing",
    "inventory loans for business",
    "inventory line of credit",
    "purchase order financing",
    "inventory funding",
    "business inventory loan",
    "seasonal inventory financing",
    "inventory financing requirements",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function BoxesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function RetailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 3h12l-1.5 7H4.5L3 3z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M6 10v2a2 2 0 0 0 4 0v-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2 3h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function WholesaleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 11v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SeasonalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 3v6l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EcommerceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13.5" cy="14.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M2 2h2l2 8h7l1.5-5H5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ManufacturerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 14V8l4-3v3l4-3v3l4-3v8H2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <rect x="6" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="10" width="2" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ABLIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 12h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LOCIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FactoringIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 5h12M3 9h8M3 13h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M14 11l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function POFinancingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Breadcrumbs ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Financing Options", href: "/financing" },
  { label: "Inventory Financing" },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What types of inventory are typically accepted as collateral?",
    a: "Most lenders prefer finished goods inventory that can be liquidated relatively quickly — consumer products, retail merchandise, packaged wholesale goods, and raw materials with active spot markets. Highly specialized, perishable, or custom-made inventory is generally harder to finance because its liquidation value is uncertain. Lenders often require an independent appraisal or conduct their own advance rate analysis to determine how much they will lend against a given inventory pool.",
  },
  {
    q: "How is the advance rate on inventory determined?",
    a: "Advance rates — the percentage of inventory value a lender is willing to extend — vary widely based on the type of inventory, how quickly it turns, its market demand, perishability, and storage conditions. Consumer electronics, apparel in current styles, and fast-moving consumer goods may see advance rates of 40–70% of their appraised value. Slow-moving, seasonal, or highly specialized inventory typically carries lower rates. Actual advance rates are set by each lender during underwriting and are not guaranteed.",
  },
  {
    q: "Is inventory financing a revolving facility or a term loan?",
    a: "Inventory financing can be structured either way, depending on the lender and your business profile. A revolving inventory line of credit lets you borrow, repay, and re-borrow as inventory turns — useful for businesses with ongoing purchasing cycles. A term loan provides a fixed lump sum for a one-time purchase with scheduled repayments. Some lenders offer hybrid structures that combine an inventory revolver with a term component. Your specific options will depend on what third-party providers are willing to offer after underwriting.",
  },
  {
    q: "Can a business with seasonal inventory cycles use inventory financing?",
    a: "Yes — seasonal businesses are a common use case. A retailer that stocks heavily before the holiday season, or an outdoor goods distributor that builds inventory ahead of spring, may use a short-term inventory line to fund that pre-season buildup and repay it as goods sell through. Lenders familiar with seasonal business models will look at your historical sales cycles, prior year revenues, and inventory turn rates when evaluating an application. Approval is not guaranteed and terms depend on underwriting.",
  },
  {
    q: "What documentation is typically required for inventory financing?",
    a: "Common documentation includes recent business financial statements or tax returns, current and historical inventory records (often 12+ months), a description of your inventory management system, an accounts receivable aging report if applicable, business bank statements for the prior three to six months, and information about your key suppliers and customers. Lenders may also require a field examination or independent appraisal of your inventory before extending credit. Requirements vary by lender and deal size.",
  },
];

// ── Comparison data ───────────────────────────────────────────────────────────

const COMPARISON_COLUMNS = ["Inventory Financing", "Business Line of Credit", "Purchase Order Financing"];

const COMPARISON_ROWS = [
  {
    feature: "Primary collateral",
    "Inventory Financing": "Inventory on hand",
    "Business Line of Credit": "General business assets or unsecured",
    "Purchase Order Financing": "Confirmed customer purchase orders",
  },
  {
    feature: "Typical use",
    "Inventory Financing": "Fund inventory purchases or stock buildup",
    "Business Line of Credit": "Flexible working capital",
    "Purchase Order Financing": "Fund fulfillment of confirmed orders",
  },
  {
    feature: "Advance basis",
    "Inventory Financing": "% of inventory appraised value",
    "Business Line of Credit": "Credit limit set at origination",
    "Purchase Order Financing": "% of PO value (supplier payment)",
  },
  {
    feature: "Repayment trigger",
    "Inventory Financing": "Inventory turns / schedule",
    "Business Line of Credit": "Draws and repayments as needed",
    "Purchase Order Financing": "Customer pays invoice",
  },
  {
    feature: "Typical term",
    "Inventory Financing": "90 days – 2 years",
    "Business Line of Credit": "Revolving, renewed annually",
    "Purchase Order Financing": "30–120 days per transaction",
  },
  {
    feature: "Best for",
    "Inventory Financing": "Inventory-heavy businesses with predictable turns",
    "Business Line of Credit": "General liquidity needs",
    "Purchase Order Financing": "Businesses with large confirmed orders",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function InventoryFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Financing Options", url: "https://zeo.co/financing" },
          { name: "Inventory Financing", url: "https://zeo.co/inventory-financing" },
        ])}
      />

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Financing"
        title="Inventory Financing"
        subtitle="Short-term financing that uses your inventory as collateral to fund stock purchases, seasonal buildup, or supply chain gaps — without exhausting working capital. Subject to lender underwriting and third-party approval."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical loan amounts"
              value="$50K – $5M+"
              note="Subject to lender underwriting"
            />
            <MetricCard
              label="Common advance rate"
              value="40 – 70%"
              note="Of appraised inventory value"
            />
            <MetricCard
              label="Typical term"
              value="90 days – 2 yrs"
              note="Revolving or term structures"
              highlight
            />
            <MetricCard
              label="Common time to funding"
              value="1 – 4 weeks"
              note="Varies by lender and deal size"
            />
          </div>
        </div>
      </section>

      {/* ── Who it is for ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Who it may fit
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                Businesses where inventory is both the product and the bottleneck
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm">
                Inventory financing is most relevant for businesses where a significant portion
                of capital is tied up in physical goods — retailers, wholesalers, distributors,
                and manufacturers who need to stock product before they can generate revenue.
                If cash timing mismatches between purchasing and selling are limiting your
                growth, inventory financing may be worth evaluating as a potential path.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "Retailers and e-commerce sellers with seasonal demand",
                  body:
                    "A retailer stocking up before the holiday season or a direct-to-consumer brand preparing for a product launch may need inventory capital weeks before sales arrive. Inventory financing can bridge that gap, allowing you to build adequate stock without drawing down operating reserves.",
                },
                {
                  heading: "Distributors and wholesalers managing large purchase orders",
                  body:
                    "Distributors often face supplier payment terms that precede customer collection by 30–90 days. An inventory line can fund the product side of that cycle, keeping shelves stocked while accounts receivable catches up.",
                },
                {
                  heading: "Manufacturers holding raw materials or work-in-progress",
                  body:
                    "Some inventory lenders will finance raw materials and work-in-progress alongside finished goods, particularly where the manufacturing process is predictable and the end products have reliable market demand. Terms for unfinished inventory are typically more conservative.",
                },
                {
                  heading: "Growing businesses taking on larger orders than cash allows",
                  body:
                    "A business that wins a large wholesale or retail account may not have enough on-hand capital to fund the inventory required to fulfill it. Inventory financing — or related structures like purchase order financing — may allow you to fulfill those orders without turning down the business.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                >
                  <h3 className="text-sm font-semibold text-[#0f0f0f] mb-1.5">{item.heading}</h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            How it works
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-8 text-balance">
            From application to funded inventory
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                step: "1",
                title: "Prepare your inventory records",
                body:
                  "Lenders will want current and historical inventory data — SKUs, quantities, cost basis, turn rates, and storage location. The more organized your records, the faster underwriting can move.",
              },
              {
                step: "2",
                title: "Submit an application",
                body:
                  "Provide business financials, bank statements, tax returns, and your inventory documentation. Some lenders specialize in inventory-based lending; a general business lender may assess this differently.",
              },
              {
                step: "3",
                title: "Inventory appraisal and underwriting",
                body:
                  "The lender evaluates the quality, liquidity, and value of your inventory to set an advance rate. They may conduct a field examination or require a third-party appraisal. Approval is not guaranteed.",
              },
              {
                step: "4",
                title: "Credit facility established",
                body:
                  "If approved, a credit facility is established based on an agreed advance rate against your eligible inventory. You draw funds as needed up to that limit, or receive a lump sum for a term loan.",
              },
              {
                step: "5",
                title: "Repayment as inventory turns",
                body:
                  "Revolving facilities are repaid as goods sell, freeing availability to fund new purchases. Term loans follow a fixed schedule. The lender may monitor inventory levels periodically.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                <span className="inline-block text-[0.65rem] font-semibold tabular-nums text-[#0f0f0f] bg-[#f5f5f5] border border-[#0f0f0f]/20 rounded-md px-2 py-0.5 mb-3">
                  Step {s.step}
                </span>
                <h3 className="text-sm font-semibold text-[#0f0f0f] mb-2">{s.title}</h3>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common use cases ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Common use cases
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-8 text-balance">
            Industries and scenarios that commonly use inventory financing
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<RetailIcon />}
              title="Retail and Specialty Stores"
              description="Brick-and-mortar retailers use inventory lines to fund seasonal stock buildups — holiday merchandise, back-to-school inventory, or new product lines — before sales revenue arrives."
              tags={["Seasonal", "Retail", "Merchandise"]}
              href="/inventory-financing"
            />
            <FinancingPathCard
              icon={<EcommerceIcon />}
              title="E-Commerce and Direct-to-Consumer"
              description="Online sellers often need to fund large supplier purchase orders weeks or months before customer orders come in. Inventory financing can fund that stock without tying up all available cash."
              tags={["Amazon", "Shopify", "DTC", "E-commerce"]}
              href="/inventory-financing"
            />
            <FinancingPathCard
              icon={<WholesaleIcon />}
              title="Wholesale and Distribution"
              description="Distributors managing high-volume, fast-turning inventory may use revolving inventory facilities to fund continuous purchasing cycles across multiple product lines or customer accounts."
              tags={["Distribution", "Wholesale", "High-volume"]}
              href="/inventory-financing"
            />
            <FinancingPathCard
              icon={<ManufacturerIcon />}
              title="Consumer Goods Manufacturing"
              description="Manufacturers with finished goods warehouses or predictable raw material requirements may qualify for inventory-backed facilities, particularly for goods with established secondary markets."
              tags={["Finished goods", "Raw materials", "Manufacturing"]}
              href="/inventory-financing"
            />
            <FinancingPathCard
              icon={<SeasonalIcon />}
              title="Seasonal Businesses"
              description="Outdoor goods, sporting equipment, holiday merchandise, and agricultural supply businesses often carry little inventory year-round but need large capital injections ahead of peak seasons."
              tags={["Seasonal", "Peak inventory", "Short-term"]}
              href="/inventory-financing"
            />
            <FinancingPathCard
              icon={<BoxesIcon />}
              title="Auto Parts and Industrial Supply"
              description="Parts distributors, industrial supply companies, and MRO businesses carry deep SKU catalogs. Lenders familiar with these sectors may advance against eligible SKUs with documented turn rates."
              tags={["Auto parts", "Industrial", "MRO", "Parts"]}
              href="/inventory-financing"
            />
          </div>
        </div>
      </section>

      {/* ── Typical requirements ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Typical requirements
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                What lenders generally evaluate
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-6">
                These are general benchmarks drawn from common lender practices. Each provider
                sets its own criteria, and requirements vary significantly by industry, inventory
                type, deal size, and your business credit profile. Meeting these thresholds does
                not guarantee approval.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Time in business",
                    value: "Typically 2+ years preferred",
                    note: "Lenders want to see a demonstrated sales history for the inventory categories you carry",
                  },
                  {
                    label: "Annual revenue",
                    value: "Often $500K – $1M+ minimum",
                    note: "Inventory lending facilities are generally sized for businesses with meaningful revenue; smaller lines may be available through specialty lenders",
                  },
                  {
                    label: "Personal credit score",
                    value: "650+ for most conventional lenders",
                    note: "Asset-based inventory lenders may place less weight on personal credit if the inventory collateral is strong",
                  },
                  {
                    label: "Inventory quality and liquidity",
                    value: "Finished goods or fast-moving raw materials preferred",
                    note: "Perishable, custom, or slow-moving inventory typically receives lower advance rates or may be ineligible",
                  },
                  {
                    label: "Documentation",
                    value: "Inventory records, financials, bank statements, tax returns",
                    note: "Lenders will want 12+ months of inventory data including turn rates, aging, and cost basis",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                  >
                    <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#0f0f0f] flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{req.label}</p>
                      <p className="text-sm text-[#737373] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Cost discussion ── */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Understanding cost
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                What drives the cost of inventory financing
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                ZEO.co does not quote, set, or guarantee financing rates. Actual costs depend on
                the factors below and the specific terms offered by a third-party provider after
                underwriting your application.
              </p>
              <div className="space-y-3 text-sm text-[#737373] leading-relaxed">
                <p>
                  <span className="text-[#0f0f0f] font-medium">Inventory quality and turn rate.</span>{" "}
                  Lenders price the risk of the collateral. Inventory that sells quickly and has
                  a clear resale market represents lower risk than slow-moving or specialized
                  goods. Higher-quality collateral may result in better advance rates and
                  potentially more favorable pricing, subject to underwriting.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Business credit and revenue history.</span>{" "}
                  A business with a strong track record of consistent revenue, clean financials,
                  and a solid credit profile is generally viewed more favorably by lenders. Thin
                  credit history or recent financial stress typically results in more conservative
                  terms.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Facility type and structure.</span>{" "}
                  Revolving lines may carry different pricing than term loans. Some lenders charge
                  a commitment fee on the total credit line in addition to interest on drawn
                  balances. Others charge collateral monitoring or field examination fees.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Advance rate and LTV.</span>{" "}
                  The gap between the inventory's appraised value and the amount advanced
                  represents the lender's cushion. Requesting a higher advance rate than the
                  lender's standard may result in pricing adjustments or require additional
                  collateral.
                </p>
                <p>
                  <span className="text-[#0f0f0f] font-medium">Short-term vs. revolving.</span>{" "}
                  Very short-term inventory bridge financing (under 90 days) may carry higher
                  annualized costs than a revolving facility with annual renewal, even if the
                  absolute dollar cost is lower. Always evaluate the total cost of the facility —
                  not just the stated rate — before accepting any offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pros and cons ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Weighing your options
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-8 text-balance">
            Potential advantages and drawbacks
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Potential advantages
              </h3>
              <ul className="space-y-3">
                {[
                  "Converts illiquid inventory into working capital without diluting ownership or drawing on personal savings.",
                  "Revolving structures flex with your purchasing cycles — you borrow when you need stock and repay as goods sell.",
                  "May allow you to take advantage of bulk supplier discounts or favorable pricing that requires upfront payment.",
                  "Seasonal businesses can use inventory financing to fund peak stock buildups and repay the facility during peak sales.",
                  "The inventory itself serves as the primary collateral, which may reduce reliance on real estate or personal guarantees for the right borrower.",
                  "Can support growth by enabling you to fulfill larger orders or expand into new product categories.",
                ].map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg
                      className="flex-shrink-0 mt-0.5 text-[#0f0f0f]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 7.5l3 3 6-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#a3a3a3] uppercase tracking-wide mb-4">
                Potential drawbacks
              </h3>
              <ul className="space-y-3">
                {[
                  "Not all inventory qualifies — perishable, highly custom, or slow-turning stock may receive low or zero advance rates.",
                  "Ongoing monitoring requirements: lenders may conduct periodic field examinations and require regular inventory reporting.",
                  "If inventory does not sell as planned, you may still owe on the facility while holding unsold stock, creating a double cash pressure.",
                  "Approval is not guaranteed; lenders have specific criteria for inventory quality, business revenue, and creditworthiness.",
                  "Costs can be higher than traditional term financing when accounting for commitment fees, monitoring fees, and interest on revolving balances.",
                  "Default risk: the lender holds a security interest in your inventory and may liquidate it if obligations are not met.",
                ].map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-[#737373] leading-relaxed">
                    <svg
                      className="flex-shrink-0 mt-0.5 text-[#a3a3a3]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 3l8 8M11 3l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Structure comparison
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-6 text-balance">
            Inventory financing vs. line of credit vs. purchase order financing
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            This table summarizes general structural differences between common approaches.
            Actual terms depend on the lender and your specific situation.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Inventory Financing"
          />
        </div>
      </section>

      {/* ── Alternatives ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Alternatives to consider
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Other financing paths that may be relevant
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Inventory financing is one option. Depending on your business model, revenue profile,
            and how you plan to use the capital, one of these alternatives may be a better
            potential fit — or a useful complement.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <FinancingPathCard
              icon={<ABLIcon />}
              title="Asset-Based Lending"
              description="Borrowing against a broader pool of business assets — receivables, inventory, and equipment together. May offer higher total availability for asset-heavy businesses."
              tags={["ABL", "Receivables", "Inventory"]}
              href="/asset-based-lending"
            />
            <FinancingPathCard
              icon={<LOCIcon />}
              title="Business Line of Credit"
              description="A flexible revolving credit facility not tied to a specific asset. May carry different qualification standards and be usable for purposes beyond inventory."
              tags={["Revolving", "Flexible", "Working capital"]}
              href="/business-line-of-credit"
            />
            <FinancingPathCard
              icon={<POFinancingIcon />}
              title="Purchase Order Financing"
              description="Funds supplier payments on confirmed customer purchase orders. Distinct from inventory financing — most useful when you have orders in hand but not yet the inventory to fulfill them."
              tags={["PO financing", "Confirmed orders", "Supplier payment"]}
              href="/financing"
            />
            <FinancingPathCard
              icon={<FactoringIcon />}
              title="Invoice Factoring"
              description="Sell outstanding receivables at a discount to unlock cash tied up in unpaid invoices. Complements inventory financing if your customers pay on net terms."
              tags={["Factoring", "Receivables", "Invoices"]}
              href="/financing"
            />
          </div>
        </div>
      </section>

      {/* ── Calculator link ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-1">
                Calculator
              </p>
              <h3 className="text-lg font-semibold text-[#0f0f0f] mb-1">
                Estimate your inventory line availability
              </h3>
              <p className="text-sm text-[#a3a3a3] max-w-md">
                Use our working capital calculator to run a rough estimate based on your
                inventory value and a hypothetical advance rate. Results are illustrative
                only — not an offer or commitment from any lender.
              </p>
            </div>
            <Link
              href="/calculators/working-capital"
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-[#0f0f0f]/30 text-[#0f0f0f] text-sm font-semibold hover:bg-[#f5f5f5] hover:border-[#0f0f0f]/60 transition-colors whitespace-nowrap"
            >
              Open Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        items={FAQ_ITEMS}
        title="Inventory Financing — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Evaluate inventory financing options for your business"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit. Subject to underwriting by third-party providers. Results are not guaranteed."
        primaryLabel="Start Application"
        primaryHref="/apply"
        secondaryLabel="Browse All Financing Options"
        secondaryHref="/financing"
      />

      {/* ── Disclaimer ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

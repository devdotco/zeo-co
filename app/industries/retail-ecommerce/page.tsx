import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import FinancingPathCard from "@/components/ui/FinancingPathCard";
import ComparisonTable from "@/components/ui/ComparisonTable";

export const metadata: Metadata = buildMetadata({
  title: "Retail and Ecommerce Financing | ZEO.co",
  description:
    "Explore financing paths that may be a fit for retail stores, ecommerce brands, and omnichannel sellers — from inventory financing to working capital lines and SBA loans.",
  path: "/industries/retail-ecommerce",
  keywords: [
    "retail business financing",
    "ecommerce business loans",
    "inventory financing",
    "working capital for retail",
    "SBA loans for retail",
    "purchase order financing",
    "merchant cash advance retail",
    "ecommerce seller financing",
  ],
});

const breadcrumbs = [
  { label: "Industries", href: "/industries" },
  { label: "Retail and Ecommerce Financing" },
];

const challenges = [
  {
    heading: "Inventory capital tied up before revenue arrives",
    body: "Retail and ecommerce businesses must purchase inventory weeks or months before it sells. That gap — between cash out for stock and cash in from customers — is one of the primary reasons retail operators seek external financing. Seasonal businesses face an amplified version of this challenge, front-loading costs in Q3 to fund Q4 demand.",
  },
  {
    heading: "Supplier payment terms versus customer payment cycles",
    body: "Wholesale suppliers often require payment on net-30 or net-60 terms, while marketplace settlements from Amazon, Shopify Payments, or Stripe may take 2 to 14 days to hit a bank account. When a business is growing quickly, this mismatch compounds: each new purchase order requires cash before the last sale has settled.",
  },
  {
    heading: "Demand volatility and markdown risk",
    body: "Consumer trends shift fast, seasonal demand peaks and troughs are difficult to predict precisely, and holding the wrong inventory means either stockouts or markdowns. Both outcomes affect cash flow. Lenders evaluate how well an operator manages inventory turnover and whether the business has demonstrated the ability to move product across multiple seasons.",
  },
  {
    heading: "Platform and marketplace concentration risk",
    body: "Many ecommerce businesses generate the majority of revenue through one or two platforms. Lenders assess this dependency because a policy change, account suspension, or algorithm shift can materially impact revenue overnight. Operators who rely heavily on Amazon, Etsy, or TikTok Shop may face tighter underwriting scrutiny than those with diversified channels.",
  },
  {
    heading: "Thin margins and high cost of customer acquisition",
    body: "Retail margins — particularly in competitive online categories — leave limited buffer for debt service. Digital advertising costs have risen steadily, meaning each new customer often costs more to acquire than the prior year. Lenders weigh gross margin alongside revenue, and an operator with strong revenue but margins under 20% may face different product options than one with higher margin products.",
  },
  {
    heading: "Physical store overhead and lease obligations",
    body: "Brick-and-mortar retailers carry fixed lease obligations that persist through slow seasons and demand downturns. Lenders evaluate lease terms, rent-to-revenue ratios, and remaining lease duration when assessing a physical retailer's ability to service new debt.",
  },
];

const products = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 5V4a2 2 0 014 0v1M10 5V4a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6 11h8M6 14h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Inventory Financing",
    description:
      "Inventory financing uses the stock itself as collateral to fund purchases before the goods are sold. It may be a fit for seasonal builds, large wholesale orders, or businesses scaling into new product lines. Terms, advance rates, and eligible inventory types vary by lender and are subject to underwriting.",
    tags: ["Seasonal stock", "Wholesale orders", "SKU expansion"],
    href: "/financing/inventory",
    highlight: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Working Capital Lines",
    description:
      "Revolving credit facilities may help bridge the gap between inventory purchases and settlement receipts, fund marketing spend ahead of peak season, or cover payroll and overhead through slow months. Availability, draw limits, and terms are set by third-party lenders subject to underwriting.",
    tags: ["Cash flow gaps", "Seasonal peaks", "Marketing spend"],
    href: "/financing/working-capital",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 8h14M8 8v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "SBA 7(a) Loans",
    description:
      "For retailers and ecommerce operators who may qualify, SBA 7(a) financing can support store build-outs, warehouse acquisition, equipment, or business acquisitions. Longer repayment terms can reduce monthly debt service relative to shorter-term products. Subject to SBA eligibility, lender underwriting, and approval.",
    tags: ["Store build-out", "Acquisition", "Warehouse"],
    href: "/financing/sba-loans",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h12M4 6h8M4 14h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Purchase Order Financing",
    description:
      "PO financing pays your supplier directly when you receive a confirmed customer order but lack the capital to fulfill it. This can be a fit for wholesale, private-label, or contract-based retailers. Not all order types or supplier arrangements qualify; review eligibility and fees with the lender.",
    tags: ["Wholesale fulfillment", "Private label", "Confirmed orders"],
    href: "/financing/purchase-order",
  },
];

const comparisonRows = [
  {
    feature: "Typical loan amount",
    "Inventory Financing": "Based on inventory value",
    "Working Capital Line": "$25K – $500K",
    "SBA 7(a)": "Up to $5M",
    "PO Financing": "Based on order value",
  },
  {
    feature: "Collateral",
    "Inventory Financing": "Inventory itself",
    "Working Capital Line": "Varies by lender",
    "SBA 7(a)": "Business assets / PG",
    "PO Financing": "Purchase order / A/R",
  },
  {
    feature: "Best use",
    "Inventory Financing": "Buying stock ahead of sales",
    "Working Capital Line": "Ongoing operational gaps",
    "SBA 7(a)": "Expansion, acquisition",
    "PO Financing": "Fulfilling confirmed orders",
  },
  {
    feature: "Time to funding",
    "Inventory Financing": "5 – 15 days",
    "Working Capital Line": "5 – 21 days",
    "SBA 7(a)": "30 – 90 days",
    "PO Financing": "2 – 7 days",
  },
  {
    feature: "Credit sensitivity",
    "Inventory Financing": "Moderate",
    "Working Capital Line": "Moderate–High",
    "SBA 7(a)": "Higher",
    "PO Financing": "Lower (order-driven)",
  },
];

const requirements = [
  {
    label: "Time in business",
    detail:
      "Most lenders prefer at least 1 to 2 years of operating history for retail and ecommerce businesses. Start-ups may face limited options; those with strong personal credit, significant owner equity, or confirmed purchase orders may find more paths available.",
  },
  {
    label: "Revenue and sales history",
    detail:
      "Lenders typically review 2 to 3 years of tax returns, year-to-date P&L statements, and bank statements. Ecommerce operators may also be asked for platform-level sales reports from Amazon Seller Central, Shopify, or equivalent dashboards.",
  },
  {
    label: "Inventory management and turnover",
    detail:
      "Lenders evaluating inventory financing will examine inventory turnover ratios, aging reports, SKU concentration, and whether product is held in a bonded warehouse or under a verifiable custodian arrangement. Slow-moving or highly perishable inventory may not qualify.",
  },
  {
    label: "Gross margin and profitability",
    detail:
      "Thin margins common in retail make debt service coverage a central underwriting concern. Lenders generally look for gross margins sufficient to support operating costs plus proposed debt obligations. A DSCR of 1.25x or higher is commonly referenced for term products.",
  },
  {
    label: "Channel diversification",
    detail:
      "Heavy revenue concentration in a single marketplace increases perceived risk. Operators who sell across multiple channels — direct-to-consumer, wholesale, and marketplace — may be viewed more favorably than those with single-platform dependency, though this varies by lender.",
  },
  {
    label: "Personal credit and guarantees",
    detail:
      "Owners holding 20% or more of the business are commonly required to provide a personal guarantee for SBA loans and many working capital products. Personal FICO scores factor into underwriting for most unsecured or partially secured facilities.",
  },
];

const faqItems = [
  {
    q: "Can an ecommerce business with no physical location qualify for financing?",
    a: "Yes, many lenders work with ecommerce businesses that operate without a physical retail location. Underwriting for these businesses typically relies more heavily on sales history from platforms like Shopify, Amazon, or WooCommerce, bank statement cash flow, and profitability rather than real estate collateral. Some products — particularly inventory financing and working capital lines — are structured specifically for asset-light ecommerce models. Eligibility and terms are subject to individual lender underwriting.",
  },
  {
    q: "How does seasonal inventory financing work for holiday-focused retailers?",
    a: "For businesses that build significant inventory in advance of peak seasons like Q4, some lenders offer facilities that draw in late summer or early fall and are structured to be repaid as holiday revenue is received. The facility amount is typically based on appraised or cost-value inventory, advance rates vary, and lenders will often require visibility into inventory value and location. Not all lenders offer seasonal structures; ask about seasonal borrowing base adjustments when evaluating options.",
  },
  {
    q: "Does my Amazon or Shopify sales history count as revenue documentation?",
    a: "Platform-level sales reports are commonly accepted as supplemental documentation but most lenders will also require business bank statements that show actual deposits. The gap between gross platform sales and net deposits to your bank account — after platform fees, refunds, and reserves — is what lenders scrutinize most. Businesses whose bank statements show materially lower deposits than platform revenue should be prepared to reconcile that difference during underwriting.",
  },
  {
    q: "What is purchase order financing and when is it a fit for retail?",
    a: "Purchase order financing is a structure where a third-party funder pays your supplier directly based on a confirmed order from a creditworthy buyer — typically a wholesale retailer, distributor, or large brand. The funder is repaid when your customer pays the resulting invoice. It is generally a fit for businesses that have won confirmed orders they cannot fulfill with existing capital. It is not typically used for consumer direct-to-consumer ecommerce. Fees are often higher than traditional credit, and not all order types or supplier relationships qualify.",
  },
  {
    q: "Is a merchant cash advance a good option for retail businesses?",
    a: "Merchant cash advances and revenue-based products are available to many retail businesses and can fund quickly, but they may carry high effective costs expressed as a factor rate rather than an APR. Total repayment amounts can be significantly higher than the funded amount. For businesses with consistent card or platform revenue, a working capital line or inventory facility may offer more favorable economics. Review the full repayment amount, daily or weekly payment obligation, and any prepayment provisions carefully before accepting any offer.",
  },
];

export default function RetailEcommerceFinancingPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Industry"
        title="Retail and Ecommerce Financing"
        subtitle="From seasonal inventory builds to working capital gaps between purchases and settlements, retail and ecommerce businesses face a distinct set of cash flow challenges. Explore financing structures third-party lenders may offer to qualified operators — all subject to underwriting, eligibility, and approval."
      />

      {/* Key financing challenges */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Financing Challenges
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2 max-w-2xl">
            Why retail and ecommerce financing is distinct
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-10 leading-relaxed">
            The inventory-driven operating cycle of retail — combined with the platform dependencies and margin pressures unique to ecommerce — creates cash flow dynamics that general lenders may not be structured to address.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {challenges.map((item) => (
              <div
                key={item.heading}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0f0f0f] mt-2"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-[#0f0f0f] text-[0.9375rem] leading-snug">
                    {item.heading}
                  </h3>
                </div>
                <p className="text-sm text-[#a3a3a3] leading-relaxed pl-4">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing products */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Financing Paths
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2 max-w-2xl">
            Products that may be a fit for retail and ecommerce
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-10 leading-relaxed">
            Different retail models call for different capital structures. The paths below represent options third-party lenders may offer — subject to individual underwriting, eligibility, and approval.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <FinancingPathCard
                key={product.title}
                icon={product.icon}
                title={product.title}
                description={product.description}
                tags={product.tags}
                href={product.href}
                highlight={product.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Product Comparison
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Financing structures at a glance
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-8 leading-relaxed">
            General ranges only. Actual terms are set by third-party lenders and subject to underwriting.
          </p>
          <ComparisonTable
            columns={[
              "Inventory Financing",
              "Working Capital Line",
              "SBA 7(a)",
              "PO Financing",
            ]}
            rows={comparisonRows}
            highlightCol="Inventory Financing"
          />
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Industry Context
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Scale of retail and ecommerce financing demand
          </h2>
          <p className="text-[#737373] text-sm max-w-2xl mb-8 leading-relaxed">
            Reference figures illustrating the capital dynamics that shape retail and ecommerce financing. Individual business performance and eligibility vary.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard
              label="Avg inventory turnover target"
              value="4–8x"
              note="Annualized. Faster turnover generally supports stronger underwriting for inventory-secured facilities."
            />
            <MetricCard
              label="Typical PO financing advance"
              value="80–100"
              unit="%"
              note="Of supplier cost on confirmed purchase orders. Repaid from customer invoice proceeds, less fees."
              highlight
            />
            <MetricCard
              label="Platform settlement delay"
              value="2–14"
              unit="days"
              note="Amazon, Shopify, and payment processors typically settle net of fees on varying schedules."
            />
            <MetricCard
              label="SBA 7(a) max"
              value="$5M"
              note="For eligible retail businesses. Subject to SBA program rules, lender underwriting, and approval."
            />
          </div>
        </div>
      </section>

      {/* Lender requirements */}
      <section className="py-16 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Lender Requirements
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              What lenders typically look for in retail and ecommerce
            </h2>
            <p className="text-[#737373] text-sm mb-8 leading-relaxed">
              These are representative criteria drawn from common lender practices across retail and ecommerce financing. Specific requirements vary by product, lender, loan size, and individual business profile. Preparing documentation in advance can streamline underwriting.
            </p>
            <dl className="divide-y divide-[#e5e5e5] border border-[#e5e5e5] rounded-xl overflow-hidden">
              {requirements.map((req) => (
                <div
                  key={req.label}
                  className="flex flex-col sm:flex-row sm:gap-6 px-5 py-4 bg-[#f5f5f5]"
                >
                  <dt className="text-sm font-semibold text-[#0f0f0f] sm:w-52 shrink-0 mb-1 sm:mb-0">
                    {req.label}
                  </dt>
                  <dd className="text-sm text-[#a3a3a3] leading-relaxed">
                    {req.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqItems}
        title="Retail and Ecommerce Financing — Common Questions"
      />

      {/* CTA */}
      <CTASection
        headline="Explore financing options for your retail or ecommerce business"
        subtext="Submit a brief intake and ZEO will identify financing paths that may be a potential fit for your business — subject to underwriting and third-party approval."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Browse All Financing"
        secondaryHref="/financing"
      />

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

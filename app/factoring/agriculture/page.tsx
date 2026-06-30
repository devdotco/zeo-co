import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Agriculture Invoice Factoring | ZEO.co",
  description:
    "Agriculture factoring converts unpaid invoices from grain elevators, co-ops, food processors, and distributors into working capital before harvest receivables clear. Learn how advance rates, seasonal structures, and perishable invoice criteria work before you apply.",
  path: "/factoring/agriculture",
  keywords: [
    "agriculture factoring",
    "farm invoice factoring",
    "agricultural receivables financing",
    "grain elevator factoring",
    "food producer factoring",
    "crop input financing",
    "agribusiness factoring",
    "perishable goods factoring",
    "farm cash flow financing",
    "produce invoice factoring",
  ],
});

const faqItems = [
  {
    q: "Can a farm operation qualify for invoice factoring, or is it only for agribusiness companies?",
    a: "Invoice factoring is structured around business-to-business receivables — invoices you issue to another commercial entity such as a grain elevator, food processor, co-op, or distributor. A farming operation that sells commodity grain directly to an elevator and invoices that sale may potentially qualify, depending on how the transaction is documented and whether the buyer is creditworthy in the factor's review. Farms that sell primarily at retail or spot cash markets without formal invoicing are typically not a fit for factoring programs. Whether a specific farming structure may qualify is subject to underwriting by third-party providers and is not guaranteed.",
  },
  {
    q: "How does seasonality affect agriculture factoring programs?",
    a: "Agriculture cash flow is heavily seasonal, and many agricultural factoring programs are designed with that cycle in mind. Some factors offer higher facility limits during harvest season when invoice volume peaks, with lower or dormant periods during planting. Others structure programs with seasonal ramp provisions. Because the advance cycle is tied directly to invoices rather than projected revenue, you typically only draw on the facility when you are actively invoicing — which aligns naturally with harvest and sales periods. That said, minimum monthly volume requirements in some agreements can be problematic during off-season months. Confirm how any minimum thresholds apply year-round before committing to a program.",
  },
  {
    q: "What types of agriculture invoices are typically eligible for factoring?",
    a: "Invoices eligible for agriculture factoring are generally those issued to creditworthy commercial buyers for goods delivered — commonly grain sales to licensed elevators, produce sales to distributors or food processors, livestock sales to packing plants, and agricultural input or service invoices issued by suppliers and custom operators. Invoices subject to production disputes, quality claims, grade adjustments, or weight discrepancies are often held pending resolution. Invoices to retail consumers or cash transactions not supported by a formal invoice typically do not qualify. Specific eligibility criteria vary by factor.",
  },
  {
    q: "Are there special considerations for perishable goods invoices?",
    a: "Perishable goods — fresh produce, dairy, livestock, and similar commodities — present a distinct risk profile compared to non-perishable invoices. Because the underlying collateral deteriorates quickly, factors evaluating perishable invoice programs place significant emphasis on the buyer's creditworthiness, the speed of payment, and the documentation confirming delivery and acceptance. Some factors specifically serve perishable agriculture under PACA (the Perishable Agricultural Commodities Act), which provides certain trust protections on receivables from licensed produce dealers. If your invoices are subject to PACA, work with a factor that understands PACA trust claims and their implications for lien priority. Not all factoring programs accommodate perishable goods — confirm eligibility with individual providers.",
  },
  {
    q: "How does agriculture factoring compare to an USDA farm operating loan or FSA program?",
    a: "USDA Farm Service Agency (FSA) operating loans and guaranteed loan programs are government-backed credit products designed for farm businesses that cannot obtain conventional financing. They typically require a formal application process, credit review, collateral analysis, and approval timelines that may run several weeks to months. Agriculture factoring is structured differently — it advances against specific invoices you have already issued to commercial buyers, with approval based primarily on the buyer's creditworthiness rather than your farm's overall financial picture. Factoring does not replace FSA programs and is not a government-backed product. For operations that have both invoices to commercial buyers and access to FSA programs, the two may potentially be used alongside each other depending on lien and subordination considerations. Neither product guarantees approval or specific terms.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Agriculture Factoring": "Invoices to grain elevators, processors, co-ops",
    "Farm Operating Loan": "Overall farm financial profile",
    "Line of Credit": "Business credit & collateral",
  },
  {
    feature: "Primary credit review",
    "Agriculture Factoring": "Buyer (elevator, processor) creditworthiness",
    "Farm Operating Loan": "Farm balance sheet & credit",
    "Line of Credit": "Owner & business credit",
  },
  {
    feature: "Typical funding speed",
    "Agriculture Factoring": "1–3 business days after onboarding",
    "Farm Operating Loan": "Weeks to months",
    "Line of Credit": "Weeks to months",
  },
  {
    feature: "Seasonal structure",
    "Agriculture Factoring": "Draws tied to invoice activity",
    "Farm Operating Loan": "Fixed advance schedule",
    "Line of Credit": "Draw as needed",
  },
  {
    feature: "New business eligible",
    "Agriculture Factoring": "Sometimes — buyer credit is key",
    "Farm Operating Loan": "Possible with FSA guarantee",
    "Line of Credit": "Rarely without track record",
  },
  {
    feature: "Customer notified",
    "Agriculture Factoring": "Yes — NOA sent to buyer",
    "Farm Operating Loan": "No",
    "Line of Credit": "No",
  },
  {
    feature: "UCC filing on receivables",
    "Agriculture Factoring": "Yes",
    "Farm Operating Loan": "Often — crop & equipment lien",
    "Line of Credit": "Often — blanket lien",
  },
];

export default function AgricultureFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Agriculture Factoring"
        subtitle="Grain elevators, food processors, and co-ops often pay on net-30 to net-90 terms — long after seed, fuel, labor, and equipment costs have come due. Agriculture factoring converts outstanding invoices to commercial buyers into working capital before those receivables clear, subject to underwriting by third-party providers."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Agriculture Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="80–92%"
              note="Subject to buyer creditworthiness and invoice documentation"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1.5–4%"
              unit="per invoice"
              note="Varies by buyer, invoice size, payment terms, and recourse structure"
            />
            <MetricCard
              label="Funding After Onboarding"
              value="1–3 days"
              note="Most agriculture factors fund within 1 to 3 business days of a clean submission"
              highlight
            />
            <MetricCard
              label="Invoice Term Coverage"
              value="Net 30–90"
              note="Typical buyer payment windows seen in grain, produce, and processing"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are illustrative only. Actual advance rates and fees are subject to underwriting by third-party providers and are not guaranteed.
          </p>
        </div>
      </section>

      {/* What is agriculture factoring */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
            What Is Agriculture Factoring?
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Agriculture factoring is a form of accounts receivable financing in which an agribusiness, farm operation, or agricultural service company sells unpaid invoices to a factoring company in exchange for an advance — typically a large percentage of the invoice face value — paid out shortly after submission rather than when the buyer remits. The factoring company then collects payment directly from the debtor: the grain elevator, food processor, produce distributor, co-op, or other commercial buyer named on the invoice.
            </p>
            <p>
              The fundamental cash flow problem factoring addresses in agriculture is structural: the cost of producing, harvesting, and delivering commodity grain, produce, livestock, or agricultural services occurs immediately, but payment from commercial buyers often follows on net-30 to net-90 day terms. In a sector where margins are thin, input costs are substantial, and cash timing is dictated by weather and commodity cycles rather than business preference, a 60- or 90-day gap between delivery and payment can create meaningful working capital pressure — even for operations that are fundamentally profitable.
            </p>
            <p>
              Unlike traditional farm credit products that evaluate the borrower's land, equipment, and overall financial position, agriculture factoring approval is driven primarily by the creditworthiness of the commercial buyer. A farm or agribusiness that sells regularly to an established grain elevator, a large food processor, or a national produce distributor may potentially qualify for factoring even if the seller's own credit history is limited, provided the buyer's payment record is sound. This makes factoring a potentially relevant tool for newer operations, highly leveraged farms, or agricultural businesses that have strong customer relationships but have not yet built the credit profile required for conventional bank products.
            </p>
            <p>
              Agriculture factoring spans several subsectors: commodity grain sales, fresh produce and perishables, livestock and poultry, crop inputs and agronomy services, custom farming operations, and food manufacturing intermediaries. Each subsector has distinct invoice documentation requirements, payment timing norms, and risk considerations — particularly around commodity price adjustments, weight and grade disputes, and perishability. Factors that specialize in agriculture understand these dynamics; general commercial factoring programs may not.
            </p>
          </div>
        </div>
      </section>

      {/* Who uses it */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Who It May Fit
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
              Agricultural Operations and Agribusinesses That Commonly Explore Factoring
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Agriculture factoring is relevant wherever a business invoices a creditworthy commercial buyer for goods delivered or services rendered, and where the gap between delivery and payment creates a working capital constraint.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 15c2-4 4-6 7-6s5 2 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M9 9V4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M6 6l3-3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 11c0-1 1-3 4-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 1.5"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Grain and Commodity Producers</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Operations that sell corn, soybeans, wheat, or other commodity grain to licensed grain elevators and merchandisers may issue invoices on extended terms, particularly on deferred pricing contracts. Factoring can potentially convert those outstanding receivables into cash before the settlement window closes, subject to the elevator's creditworthiness.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Row crop", "Grain elevator buyers", "Deferred pricing"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="10" width="14" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M5 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M9 13v-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Fresh Produce and Perishable Growers</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Produce growers and packers selling to distributors, food service companies, or grocery chains often face rapid delivery cycles with 10- to 30-day payment terms. While payment windows are shorter than grain, the speed of spoilage means cash must arrive quickly. PACA-licensed buyers add a layer of receivable protection that some agriculture-focused factors specifically accommodate.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Produce", "PACA", "Food service", "Distributors"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 14V9l3-3h6l3 3v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14v-4h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 14h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M9 6V4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Agricultural Service and Input Suppliers</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Custom applicators, agronomy services, crop consultants, seed and input dealers, and custom harvest operators who invoice commercial farm accounts or co-ops on net-30 or longer terms may find factoring relevant. The key is that their invoices are issued to commercial entities, are not subject to production or quality disputes, and the buyer is independently creditworthy.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Custom operators", "Input dealers", "Agronomy", "Co-op buyers"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the advance/reserve cycle works — agriculture specific */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
            The Agriculture Factoring Cycle: From Delivery to Reserve Release
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
            Agriculture factoring follows the same core advance-and-reserve structure as other invoice factoring programs, but with invoice documentation requirements and buyer verification steps specific to agricultural transactions.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "You deliver the commodity or service and issue an invoice",
                body: "After delivering grain to an elevator, fresh produce to a distributor, or completing a custom service for a commercial account, you issue a formal invoice to the buyer. The invoice must clearly identify the buyer, the goods or services delivered, the quantity, the agreed price, and the payment terms. Weight tickets, grade certificates, delivery confirmations, or signed receiving documents are often required as supporting documentation — the specific requirements depend on the commodity and the factor's program.",
              },
              {
                step: "2",
                title: "The factor evaluates the buyer's credit and approves the invoice",
                body: "You submit the invoice and supporting documentation to the factoring company. The factor evaluates the creditworthiness of the buyer — the elevator, processor, distributor, or co-op — rather than your own credit profile. If the buyer passes the factor's credit review, the invoice is approved for funding. Invoices with open price disputes, grade adjustments, or incomplete delivery documentation are typically held until the issue is resolved.",
              },
              {
                step: "3",
                title: "The factor advances a percentage of the invoice face value",
                body: "Upon approval, the factor advances a percentage of the invoice — commonly 80% to 92% in agriculture programs, depending on the buyer, commodity type, and invoice terms. This advance is deposited to your business bank account, typically within one to three business days of a complete submission. The remaining balance is held in reserve pending buyer payment.",
              },
              {
                step: "4",
                title: "The factor sends a notice of assignment to your buyer",
                body: "The factoring company sends a notice of assignment (NOA) to your buyer — the elevator, processor, or distributor — directing them to remit payment to the factor's designated lockbox account rather than to you directly. Established commercial buyers in agriculture are accustomed to receiving NOAs. The factor manages the collection process from this point forward.",
              },
              {
                step: "5",
                title: "The buyer pays the factor; reserve is released to you",
                body: "When the buyer remits payment to the factor's lockbox — within their contracted payment terms — the factor releases the reserve balance to you, minus the factoring fee. If payment is delayed beyond the agreed window, some factor agreements include tiered fees that increase the longer payment is outstanding. Under recourse agreements, if the buyer ultimately fails to pay, you may be required to repurchase the invoice or substitute another in its place.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-5">
                <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center text-[0.65rem] font-semibold text-[#0f0f0f] tabular-nums">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Requirements
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
              What Agriculture Factors Typically Evaluate
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Qualification criteria vary significantly by factor and by the type of agricultural invoice being submitted. The items below represent commonly reviewed requirements and are not an exhaustive list. All approvals are subject to underwriting by third-party providers — no outcome is guaranteed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Creditworthy Commercial Buyer",
                body: "The single most important qualification criterion in agriculture factoring is the creditworthiness of the buyer — the grain elevator, food processor, produce distributor, co-op, or other commercial entity named on your invoice. Factors run credit checks on each buyer relationship before approving invoices against that buyer. Buyers with poor payment histories, financial instability, or low credit scores may not be approved regardless of how strong the seller's profile is.",
              },
              {
                title: "Clear, Deliverable Invoice with Supporting Documentation",
                body: "The invoice must be for goods delivered or services fully rendered — factoring companies generally do not advance on future, contingent, or progress-billed invoices in agriculture. For grain, this typically means a scale ticket and grade certificate confirming delivery and acceptance. For produce, a signed receiving document or bill of lading. For services, a completed work order or confirmation of service acceptance. Invoices subject to pending price adjustments, grade disputes, or weight discrepancies are usually ineligible until resolved.",
              },
              {
                title: "No Pre-Existing Liens on Agricultural Receivables",
                body: "Many farms and agribusinesses carry farm operating loans from banks, the FSA, or agricultural lenders, which often include a blanket UCC-1 lien covering all business assets including receivables. A factoring company files its own UCC-1 on your receivables as part of onboarding. If an existing lender already holds a blanket lien, that lien may need to be subordinated or released before factoring can proceed. This is one of the most common obstacles for agricultural operations seeking to add a factoring facility.",
              },
              {
                title: "Business Entity with a Federal Tax ID",
                body: "Factoring companies require that invoices be issued by a registered business entity — sole proprietor, LLC, corporation, or partnership — with a valid federal Employer Identification Number (EIN) or Social Security number. Individual cash-basis farm sales without a formal business structure or invoicing process typically do not fit standard factoring programs. A W-9, voided check for ACH deposits, and copies of formation documents are commonly required at onboarding.",
              },
              {
                title: "Invoice Assignment Permitted by Buyer Agreement",
                body: "Some purchase agreements between agricultural buyers and sellers include anti-assignment clauses that restrict the seller from assigning the right to collect payment to a third party without the buyer's prior written consent. Before onboarding with a factor, review any existing marketing contracts, grain purchase agreements, or produce buying agreements to confirm assignment is not restricted. Factoring without proper authority to assign may create legal complications with the buyer relationship.",
              },
              {
                title: "Minimum Invoice Volume",
                body: "Most factoring programs have minimum monthly invoice volume thresholds — commonly in the range of $10,000 to $50,000 per month depending on the factor. For highly seasonal agricultural operations, minimum monthly commitments can be problematic during off-season months when invoicing activity is low. Confirm whether minimum volume requirements apply year-round or are structured seasonally, and understand any fees triggered by falling below minimums before signing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5"
              >
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advance rates and fee ranges */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Pricing
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Advance Rates and Fee Structures in Agriculture Factoring
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-6">
            Agriculture factoring advance rates and fees vary more widely than in some other industries due to the range of commodity types, buyer credit profiles, and seasonal payment dynamics. The figures below are illustrative market ranges only — they are not offers, commitments, or guarantees. All terms are subject to underwriting by a third-party provider.
          </p>
          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Advance Rate</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">80 – 92%</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Agriculture factoring advance rates typically run somewhat lower than trucking factoring because agricultural invoices carry greater risk of price adjustments, grade disputes, and commodity-specific complications. Invoices to highly rated national buyers — large grain merchants, publicly traded food processors, or national grocery chains — may support advance rates toward the higher end. Invoices to smaller regional buyers, co-ops with limited financial disclosure, or invoices subject to commodity price variability may receive lower advances. Perishable goods programs may carry additional structure given the speed with which underlying collateral value can deteriorate.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Factoring Fee</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">1.5 – 4% per invoice</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Fees in agriculture factoring are commonly structured as a flat percentage of the invoice face value, sometimes with tiered rates that increase if the buyer pays beyond an initial window — for example, a base rate for payment within 30 days and a step-up for each additional 10- or 15-day period. Because agricultural payment terms can stretch to 60 or 90 days in some commodity segments, the total effective cost under a tiered structure can be meaningfully higher than the advertised base rate. Always confirm the full fee schedule, including the step-up tiers, any minimum monthly fees, and wire or ACH disbursement costs, before signing.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Reserve Structure</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">8 – 20% withheld</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                The reserve — the portion of the invoice face value not advanced upfront — is held by the factor until the buyer remits payment and is released to you minus the factoring fee. In agriculture, reserve percentages may be higher than in other sectors to buffer against commodity price adjustments or grade disputes that reduce the final payment amount. For example, a grain elevator may issue a final settlement that differs from your original invoice if scale weights or grades were adjusted at receiving. Factors familiar with agriculture account for this in their reserve and documentation requirements.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Recourse vs. Non-Recourse</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">Affects fee and risk allocation</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Most agriculture factoring programs are structured on a recourse basis, meaning you remain liable if the buyer fails to pay the invoice — even under non-recourse programs, protection is typically limited to buyer insolvency and does not cover disputes, price adjustments, or delivery rejections. Understanding your recourse obligations is particularly important in agriculture, where invoice disputes over quality, grade, or weight are more common than in service industries. Review your agreement carefully to understand exactly which non-payment scenarios trigger a recourse buyback obligation.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] px-5 py-4">
            <p className="text-sm text-[#737373] leading-relaxed">
              <span className="text-[#0f0f0f] font-medium">Estimate your factoring cost before you commit.</span>{" "}
              The{" "}
              <Link
                href="/calculators/invoice-factoring-calculator"
                className="text-[#0f0f0f] underline underline-offset-2 hover:text-[#0f0f0f] transition-colors"
              >
                Invoice Factoring Calculator
              </Link>{" "}
              lets you model advance amounts, reserve balances, and total factoring fees across different invoice sizes and buyer payment timing scenarios. All outputs are estimates only and do not represent an offer or commitment from any provider.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
              Agriculture Factoring vs. Other Working Capital Options
            </h2>
            <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
              No single product fits every agricultural operation. This table highlights structural differences between common working capital options — not endorsements or cost comparisons. All terms are subject to underwriting; results vary by provider.
            </p>
          </div>
          <ComparisonTable
            columns={["Agriculture Factoring", "Farm Operating Loan", "Line of Credit"]}
            rows={comparisonRows}
            highlightCol="Agriculture Factoring"
          />
        </div>
      </section>

      {/* Benefits and limitations */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Potential Benefits
              </p>
              <h2 className="text-xl font-semibold text-[#0f0f0f] mb-5">
                What Agriculture Factoring Can Offer
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Converts harvest receivables into working capital quickly",
                    body: "Rather than waiting 30, 60, or 90 days for an elevator or processor to remit, factoring can potentially convert a delivered invoice into a working capital advance within days. For operations where post-harvest cash is needed to repay operating credit lines, fund fall tillage, or cover storage costs, faster receipt of receivables may provide meaningful flexibility.",
                  },
                  {
                    title: "Approval based on buyer credit, not farm balance sheet",
                    body: "Farming operations with high leverage, limited operating history, or complex ownership structures that may not qualify for traditional bank credit lines may still potentially qualify for factoring if they sell to creditworthy commercial buyers. The factor is primarily underwriting the buyer's ability to pay, not the seller's overall financial position.",
                  },
                  {
                    title: "Scales with invoice activity — no fixed monthly commitment to service",
                    body: "Unlike a term loan or revolving credit facility with a fixed repayment schedule, factoring advances are tied to actual invoice submissions. During high-volume harvest periods, the facility can provide substantial working capital. During slow months, there are no advances to repay — only fees on invoices that were factored.",
                  },
                  {
                    title: "Collection management handled by the factor",
                    body: "Once invoices are assigned to the factor, the factor manages the collection process — tracking payments, following up on past-due accounts, and reconciling buyer remittances. For agricultural operations managing dozens of load tickets and multiple buyer relationships, outsourcing collections can reduce administrative burden during high-activity periods.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{item.title}</p>
                      <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Limitations to Understand
              </p>
              <h2 className="text-xl font-semibold text-[#0f0f0f] mb-5">
                Important Considerations
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Commodity price adjustments can complicate invoice settlement",
                    body: "In grain and some other commodity segments, the final settled invoice amount may differ from the face value at time of submission — because of basis adjustments, grade or moisture discounts, or deferred pricing arrangements. Factors advance against the face value of the submitted invoice, but collect what the buyer ultimately remits. If the buyer pays less than the invoiced amount due to a legitimate price adjustment, this can affect the reserve and may trigger recourse obligations depending on the agreement.",
                  },
                  {
                    title: "Existing farm operating liens must be addressed before onboarding",
                    body: "Most farm operating loans from banks or the FSA include a blanket UCC lien covering all farm assets — including receivables. Factoring requires a first-priority lien on the receivables being factored. If an existing lender's lien is in place, it must typically be subordinated or terminated before the factoring facility can be activated. This process takes time and requires cooperation from the existing lender, which is not guaranteed.",
                  },
                  {
                    title: "Seasonal minimums may create cost during off-season",
                    body: "If your factoring agreement includes monthly minimum volume commitments, months with low invoice activity — winter, pre-planting, off-crop periods — may trigger minimum fees regardless of usage. Over a 12-month period, minimum fees during inactive months can meaningfully increase the total cost of the factoring program. Understand how minimums are calculated and what fees apply before signing.",
                  },
                  {
                    title: "Buyers are notified — NOAs are standard but not universally welcomed",
                    body: "A notice of assignment informs your buyer that payment should be remitted to the factor's lockbox rather than to you directly. While this is routine for many commercial agricultural buyers, some smaller co-ops or regional buyers may be unfamiliar with the process, and some purchase agreements may restrict assignment without consent. Confirm that your buyer relationships can accommodate an NOA before committing to a factoring arrangement.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#a3a3a3]" viewBox="0 0 16 16" fill="none">
                      <path d="M8 5v4M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{item.title}</p>
                      <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator callout */}
      <section className="py-10 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-1">
                Free Tool
              </p>
              <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1">
                Invoice Factoring Calculator
              </h3>
              <p className="text-sm text-[#737373]">
                Model advance amounts, reserve balances, and total factoring costs based on your invoice values, advance rate, fee structure, and expected buyer payment timing. Outputs are estimates only and do not represent an offer from any provider.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#e5e5e5] text-sm font-medium text-[#0f0f0f] hover:border-[#0f0f0f]/50 hover:text-[#333333] transition-colors"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Agriculture Factoring — Common Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Explore Whether Agriculture Factoring May Be a Fit"
        subtext="Submit a brief intake and ZEO will review your situation against potential financing paths. No commitment required. Subject to underwriting by third-party providers."
        primaryLabel="Get Started"
        primaryHref="/apply"
        secondaryLabel="Explore Factoring Options"
        secondaryHref="/factoring"
      />

      {/* Disclaimer */}
      <section className="py-8 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="factoring" />
        </div>
      </section>
    </div>
  );
}

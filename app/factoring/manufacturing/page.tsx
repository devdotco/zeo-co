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
  title: "Manufacturing Invoice Factoring | ZEO.co",
  description:
    "Manufacturing factoring converts outstanding invoices from distributors, retailers, and OEM buyers into working capital without waiting 30 to 90 days for payment. Learn how advance rates, reserve cycles, and invoice eligibility work before applying.",
  path: "/factoring/manufacturing",
  keywords: [
    "manufacturing factoring",
    "manufacturing invoice factoring",
    "factory invoice financing",
    "manufacturer accounts receivable factoring",
    "B2B manufacturer cash flow",
    "production financing",
    "supplier invoice factoring",
    "manufacturing working capital",
  ],
});

const faqItems = [
  {
    q: "Can a manufacturer with long production lead times use invoice factoring?",
    a: "Yes — factoring is based on completed, delivered invoices, not on production timelines. The relevant question is whether your invoices are payable by creditworthy business customers (distributors, retailers, OEM buyers) once goods are shipped and accepted. Long production cycles can mean fewer invoices per month, which may affect volume minimums at some factors, but the structure of factoring is compatible with manufacturers that invoice infrequently on large orders. Confirm volume requirements with each factor before onboarding.",
  },
  {
    q: "What happens if a customer rejects goods or issues a chargeback after the invoice is factored?",
    a: "A dispute, rejection, or chargeback typically does not fall within non-recourse protections, even if your agreement is labeled non-recourse. Non-recourse clauses in most factoring agreements cover only the specific event of the debtor's verified commercial insolvency — not disputes about delivery, quality, short shipments, or warranty claims. If a customer refuses to pay due to a dispute, the factor will generally treat that as a chargeback back to you. It is critical to ensure goods are shipped in compliance with purchase order terms, inspection requirements, and any routing instructions before factoring invoices against large orders. Review your agreement's dispute and chargeback provisions carefully.",
  },
  {
    q: "How do purchase orders fit into manufacturing factoring — can PO financing and factoring be combined?",
    a: "Purchase order (PO) financing and invoice factoring serve different points in the manufacturing cycle. PO financing is designed to fund the production or procurement costs before goods are shipped, when you have a confirmed PO but haven't yet invoiced the customer. Once goods are shipped and the invoice is issued, the PO finance facility is typically paid off and the residual value — if any — flows to you. Some specialty finance providers offer both products in a combined facility, allowing a manufacturer to receive production funding up front and then refinance the receivable once goods are delivered. These structures are more complex and are subject to underwriting by specialized providers; not all factoring companies offer combined PO and invoice programs.",
  },
  {
    q: "Do manufacturers with a single large customer face any issues with factoring?",
    a: "Concentration risk is a real consideration in manufacturing factoring. If a large percentage of your invoices come from a single buyer — often called debtor concentration — many factoring companies will cap how much of their exposure can be tied to that one customer, typically at 20% to 35% of the total funded portfolio. For manufacturers that sell primarily or exclusively to one retail chain, distributor, or OEM, this can limit available funding. Some factors that specialize in large-account manufacturing programs have higher concentration tolerances, but these programs often come with stricter underwriting criteria and may require more documentation about the buyer relationship. Discuss concentration thresholds directly with any factor you're evaluating.",
  },
  {
    q: "Is there a minimum invoice size or monthly volume requirement for manufacturing factoring?",
    a: "Most factoring companies do have minimums, though they vary widely. General-purpose factors may require a minimum monthly funded volume of $50,000 to $100,000 or more, while factors focused on smaller manufacturers or spot factoring programs may work at lower volumes. Invoice minimums — the smallest single invoice they'll fund — can also apply. Large invoices from a few customers are common in manufacturing, which can actually be an advantage for per-invoice advance amounts but may create the concentration concerns described above. Always confirm minimum requirements, monthly fees for falling short of minimums, and any setup or due diligence fees before completing an application.",
  },
];

const comparisonRows = [
  {
    feature: "Funding basis",
    "Manufacturing Factoring": "Accepted, unpaid invoices",
    "Business Line of Credit": "Overall creditworthiness",
    "Asset-Based Lending": "Inventory + receivables collateral",
  },
  {
    feature: "Primary credit review",
    "Manufacturing Factoring": "Buyer / customer credit",
    "Business Line of Credit": "Owner & business credit",
    "Asset-Based Lending": "Asset quality + business credit",
  },
  {
    feature: "Typical funding speed",
    "Manufacturing Factoring": "1–3 business days",
    "Business Line of Credit": "Weeks to months",
    "Asset-Based Lending": "Weeks to months",
  },
  {
    feature: "Startup or thin-credit eligible",
    "Manufacturing Factoring": "Often, if buyers are creditworthy",
    "Business Line of Credit": "Rarely",
    "Asset-Based Lending": "Rarely",
  },
  {
    feature: "Scales with revenue",
    "Manufacturing Factoring": "Yes — tied to invoices",
    "Business Line of Credit": "Fixed limit",
    "Asset-Based Lending": "Tied to borrowing base",
  },
  {
    feature: "Customer notification required",
    "Manufacturing Factoring": "Yes — NOA to buyer",
    "Business Line of Credit": "No",
    "Asset-Based Lending": "Sometimes",
  },
  {
    feature: "UCC filing",
    "Manufacturing Factoring": "Yes — on receivables",
    "Business Line of Credit": "Often — blanket lien",
    "Asset-Based Lending": "Yes — on all pledged assets",
  },
];

export default function ManufacturingFactoringPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Factoring"
        title="Manufacturing Factoring"
        subtitle="Manufacturers shipping on net-30 to net-90 terms to distributors, retailers, and OEM buyers often wait months for payment while raw material costs, payroll, and equipment obligations can't. Manufacturing invoice factoring converts accepted invoices into working capital without waiting — subject to underwriting by third-party providers."
        breadcrumbs={[
          { label: "Factoring", href: "/factoring" },
          { label: "Manufacturing Factoring" },
        ]}
      />

      {/* Metrics overview */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical Advance Rate"
              value="75–90%"
              note="Depends on buyer creditworthiness, invoice terms, and industry concentration"
            />
            <MetricCard
              label="Factoring Fee Range"
              value="1–4%"
              unit="per invoice"
              note="Varies by volume, payment terms, buyer credit quality, and recourse structure"
            />
            <MetricCard
              label="Funding After Submission"
              value="1–3 days"
              note="After invoice verification and buyer credit approval by the factor"
              highlight
            />
            <MetricCard
              label="Typical Net Terms Covered"
              value="Net-30–90"
              note="Factoring is commonly used where buyers hold long payment terms"
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-4">
            Ranges shown are illustrative only. Actual advance rates, fees, and funding timelines are subject to underwriting by third-party providers and are not guaranteed.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Overview
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
            What Is Manufacturing Invoice Factoring?
          </h2>
          <div className="space-y-4 text-[#737373] leading-relaxed text-[0.9375rem]">
            <p>
              Manufacturing invoice factoring is a form of accounts receivable financing in which a manufacturer sells its outstanding invoices — issued to creditworthy business buyers — to a third-party factoring company in exchange for an immediate advance, typically 75% to 90% of the invoice face value. The factor then collects payment directly from the buyer. Once the buyer pays in full, the factor releases the remaining reserve balance to the manufacturer, minus the factoring fee.
            </p>
            <p>
              The core problem manufacturing factoring addresses is timing. A manufacturer may spend weeks or months sourcing raw materials, running production, and coordinating logistics before a single invoice is issued. Once the invoice goes out, the buyer — a national distributor, a retail chain, or an OEM — may hold net-60 or net-90 payment terms as a standard contractual condition. The result is that a manufacturer can have millions of dollars in outstanding receivables while still facing a payroll run, a raw material purchase, or an equipment payment this week.
            </p>
            <p>
              Unlike conventional business loans, manufacturing factoring is not primarily underwritten on the manufacturer's own credit profile or time in business. The factor's primary credit analysis focuses on the creditworthiness of the buyers named on the invoices. This makes factoring accessible to manufacturers in growth phases, those that have recently shifted their customer mix, or those that simply can't yet meet the financial history requirements of a bank line of credit.
            </p>
            <p>
              Manufacturing is a well-established factoring sector. Factors that specialize in the space are familiar with the documentation requirements, inspection processes, and common invoice structures of commercial manufacturing — including purchase order references, packing slips, delivery confirmations, and buyer acceptance procedures. Understanding how your invoices are generated and accepted is an important part of evaluating whether a factoring program is workable for your operations.
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
              Manufacturers That Commonly Use Invoice Factoring
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Manufacturing factoring can be a potential fit for a range of production businesses. The common thread is creditworthy B2B buyers, accepted invoices, and a cash flow gap between shipment and payment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {/* Contract manufacturers */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="6" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M6 6V4a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M5 10h8M5 13h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Contract Manufacturers</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Manufacturers producing to spec for OEM buyers or retail chains frequently operate on long payment terms dictated by the buyer. Factoring lets contract manufacturers accelerate cash tied up in large, infrequent invoices without renegotiating buyer terms.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["OEM supply", "Private label", "Retail supply chain"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Small and mid-size manufacturers */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 14V8l4-5h6l4 5v6H2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14v-4h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Growing Manufacturers</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Fast-growing manufacturers often win new accounts before their balance sheet qualifies for a bank credit line. When a new purchase order requires ramping materials and labor weeks before the invoice is paid, factoring can provide working capital that scales with revenue rather than trailing it.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["New accounts", "Scaling production", "Limited credit history"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Specialty producers */}
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] text-[#0f0f0f]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.22 4.22l1.42 1.42M12.36 12.36l1.42 1.42M4.22 13.78l1.42-1.42M12.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[#0f0f0f] mb-2 text-[0.9375rem]">Specialty & Industrial Producers</h3>
              <p className="text-sm text-[#a3a3a3] leading-relaxed mb-3">
                Specialty chemical, industrial component, food processing, and electronics assembly manufacturers often carry substantial raw material costs and sell on extended terms to industrial distributors. Factoring can help bridge the gap between production cost and collection.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Industrial", "Food processing", "Electronics", "Chemicals"].map((tag) => (
                  <span key={tag} className="text-[0.6875rem] px-2 py-0.5 rounded-md bg-[#e5e5e5] text-[#a3a3a3]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the advance/reserve cycle works */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            How It Works
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-5 text-balance">
            The Manufacturing Factoring Cycle: Shipment to Reserve Release
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-8">
            Manufacturing factoring follows a defined cycle tied to your shipment and invoicing process. Each step corresponds to documentation you already generate in the ordinary course of fulfilling purchase orders.
          </p>
          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "Goods are shipped and accepted — invoice is issued",
                body: "Factoring is available only on invoices for goods that have been shipped and accepted by the buyer. The invoice must represent a completed, undisputed sale. Invoices tied to partial shipments, pending acceptance, or unresolved PO disputes are generally not eligible until those issues are resolved. Maintaining clean delivery records and signed acceptance documents at shipment is important for smooth factoring submissions.",
              },
              {
                step: "2",
                title: "Invoice package is submitted to the factoring company",
                body: "You submit the invoice along with supporting documentation — typically a copy of the purchase order, packing slip or bill of lading, proof of delivery, and any acceptance confirmation the buyer provides. The factor reviews the documents, verifies the invoice details, and runs or confirms a credit check on the buyer. Factors that specialize in manufacturing will be familiar with standard B2B documentation packages.",
              },
              {
                step: "3",
                title: "Factor verifies buyer credit and approves the invoice",
                body: "The factor assesses the creditworthiness of the buyer named on the invoice. This is distinct from your own credit review — the factor wants to confirm that the buyer can and will pay. If the buyer is a major national account — a large retailer, distributor, or OEM with strong payment history — this step is typically straightforward. Smaller or less established buyers may be subject to lower advance rates or may not be approved for factoring.",
              },
              {
                step: "4",
                title: "Notice of assignment is sent; advance is funded",
                body: "Upon approval, the factor sends a notice of assignment (NOA) to the buyer, redirecting payment to the factor's remittance address or lockbox. The advance — typically 75% to 90% of the invoice face value — is deposited to your bank account, usually within one to three business days of a complete submission. The remaining balance is held in a reserve account.",
              },
              {
                step: "5",
                title: "Buyer pays the factor; reserve is released",
                body: "When the buyer remits payment to the factor — whether on day 30, 60, or 90 — the factor releases the reserve balance to you, minus the factoring fee. If the buyer pays late, tiered fee structures may mean additional fees accrue past the initial period. Under a recourse agreement, if the buyer does not pay for reasons other than insolvency, you may be required to repurchase the invoice. Review the specific terms of any agreement before signing.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-5">
                <div className="flex-shrink-0 w-7 h-7 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center text-[0.65rem] font-semibold text-[#0f0f0f] tabular-nums">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-1.5">{item.title}</h3>
                  <p className="text-sm text-[#737373] leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Requirements and invoice criteria */}
      <section className="py-14 border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Requirements
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
              What Manufacturing Factors Typically Evaluate
            </h2>
            <p className="text-[#737373] leading-relaxed text-[0.9375rem]">
              Qualification criteria vary significantly by factor. The items below represent commonly reviewed requirements across the manufacturing factoring market. No outcome is guaranteed — all decisions are subject to underwriting by third-party providers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "B2B Invoice Structure",
                body: "Manufacturing factoring is available only for invoices issued to other businesses — not to individual consumers. The buyer must be a commercially identifiable entity: a distributor, retailer, industrial buyer, or OEM. Consumer-facing sales, government-only invoices, or invoices in dispute are generally not eligible.",
              },
              {
                title: "Creditworthy Buyers",
                body: "The factor will evaluate the payment history and creditworthiness of each buyer whose invoices you want to factor. Invoices owed by buyers with poor credit, payment disputes on file, or no verifiable commercial presence may be declined or funded at a lower advance rate. Concentration in one buyer can also affect how much of your portfolio a factor will fund.",
              },
              {
                title: "Complete and Undisputed Invoices",
                body: "Invoices must represent completed, accepted sales with no open disputes, pending credits, or return authorizations. If a buyer has raised a quality issue, short-shipment claim, or invoice dispute, the factor will typically not fund that invoice until the matter is resolved. Maintaining clean documentation — signed delivery receipts, acceptance emails, or EDI acknowledgments — reduces friction.",
              },
              {
                title: "No Conflicting Liens on Receivables",
                body: "If an existing lender holds a blanket UCC lien on your assets, your receivables may already be pledged as collateral. Factoring companies file a UCC-1 on your receivables at onboarding. An existing lien may need to be subordinated or terminated before factoring can proceed. This is common for manufacturers that also carry equipment financing or an existing line of credit.",
              },
              {
                title: "Business Formation and Tax Documentation",
                body: "Factors typically require a signed factoring agreement, W-9, voided check for ACH, and basic business documentation such as articles of incorporation or organization, EIN verification, and identification for principals. Some factors also request recent accounts receivable aging reports to assess your existing customer payment patterns.",
              },
              {
                title: "Invoice Terms Within Factor's Accepted Range",
                body: "Most factoring programs have a maximum invoice term they will fund — commonly net-90 or net-120. Invoices with terms beyond this window may require special approval or may not be eligible. Invoices that have aged significantly from their issue date may also face eligibility restrictions. Confirm term limits during the evaluation process.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f] mb-2">{item.title}</h3>
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
            Advance Rates and Fee Structures in Manufacturing Factoring
          </h2>
          <p className="text-[#737373] leading-relaxed text-[0.9375rem] mb-6">
            Manufacturing factoring advance rates and fees vary based on buyer credit quality, invoice payment terms, monthly volume, industry segment, and recourse structure. The figures below are illustrative market ranges only — they are not offers, commitments, or guarantees. All terms are subject to underwriting by a third-party provider.
          </p>
          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Advance Rate</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">75 – 90%</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Manufacturing invoices typically carry longer payment terms than trucking or staffing, which can result in slightly lower advance rates than those industries. Factors holding more capital in reserve for longer periods need additional buffer. Manufacturers invoicing major national retail chains or large industrial distributors with well-established payment histories may qualify for higher advance rates than those invoicing smaller or less-established buyers. Volume, concentration, and industry segment also influence where within the range a specific account lands.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Factoring Fee</h3>
                <span className="text-sm font-semibold text-[#0f0f0f] tabular-nums flex-shrink-0">1 – 4% per invoice</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Fees are typically structured as a flat percentage of the invoice face value or as a tiered rate that accrues in increments — for example, 1.5% for payment within 30 days and an additional 0.5% for each subsequent 15-day period. Because manufacturing buyers often pay on net-60 or net-90 schedules, understanding the full tiered schedule is especially important. Manufacturers with large monthly funded volumes often negotiate lower per-invoice rates. Additional fees for wire transfers, ACH, monthly minimums, early termination, and due diligence are common — always request a complete fee schedule before signing.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Reserve Account</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">10 – 25% held back</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                The reserve is the portion of each invoice not included in the initial advance. It is held by the factor until the buyer pays and is released — minus the factoring fee — at that time. In manufacturing, where invoices can remain outstanding for 60 to 90 days, the reserve may be held for extended periods. Some factors apply reserve holds on an account-wide basis; others manage them per invoice. Understanding how and when reserves are released is particularly relevant for manufacturers that need predictable cash timing.
              </p>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[0.9375rem] font-semibold text-[#0f0f0f]">Recourse vs. Non-Recourse</h3>
                <span className="text-sm font-semibold text-[#737373] flex-shrink-0">Affects fee and risk allocation</span>
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Recourse factoring — in which you remain liable if the buyer fails to pay — is the more common structure and generally carries lower fees. Non-recourse programs shift the credit risk of a buyer's insolvency to the factor, typically in exchange for higher fees or stricter buyer approval criteria. Critically, non-recourse does not cover buyer disputes, returns, short payments, or claims of defective goods — only genuine commercial insolvency scenarios as defined in the agreement. Manufacturing operations with any meaningful return rate or dispute history should understand exactly how chargebacks and credits are handled before choosing a structure.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] px-5 py-4">
            <p className="text-sm text-[#737373] leading-relaxed">
              <span className="text-[#0f0f0f] font-medium">Model your factoring cost before you commit.</span>{" "}
              The{" "}
              <Link
                href="/calculators/invoice-factoring-calculator"
                className="text-[#0f0f0f] underline underline-offset-2 hover:text-[#0f0f0f] transition-colors"
              >
                Invoice Factoring Calculator
              </Link>{" "}
              lets you estimate advance amounts, factoring fees, and reserve releases based on your invoice values and expected buyer payment timing. All outputs are estimates only and do not represent an offer or commitment from any provider.
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
              Manufacturing Factoring vs. Other Working Capital Options
            </h2>
            <p className="text-[#737373] text-[0.9375rem] leading-relaxed">
              No single product is right for every manufacturer. This table highlights structural differences — not cost rankings or endorsements. All terms are subject to underwriting; results vary by provider and applicant.
            </p>
          </div>
          <ComparisonTable
            columns={["Manufacturing Factoring", "Business Line of Credit", "Asset-Based Lending"]}
            rows={comparisonRows}
            highlightCol="Manufacturing Factoring"
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
              <h2 className="text-xl font-semibold text-[#0f0f0f] mb-5">What Manufacturing Factoring Can Offer</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Working capital that scales with your invoice volume",
                    body: "Unlike a fixed credit line, factoring capacity grows in proportion to your funded invoices. Winning a large new account or fulfilling a significant purchase order can generate additional factoring capacity rather than bumping against a lending limit.",
                  },
                  {
                    title: "Approval weighted on buyer credit, not yours",
                    body: "Manufacturers that sell to well-established buyers — large distributors, national retailers, or recognized OEMs — may qualify even without deep business credit history of their own. The factor is effectively extending credit against the buyer's ability to pay.",
                  },
                  {
                    title: "Access to capital during rapid growth",
                    body: "Manufacturers scaling production to meet new customer demand often outpace their available bank credit. Factoring can provide a bridge while financial statements mature — allowing growth that would otherwise be constrained by the lag in traditional credit approval.",
                  },
                  {
                    title: "Buyer credit visibility as a business tool",
                    body: "Many factors monitor the credit quality of your buyers as an ongoing service. For manufacturers managing large accounts, early warning on a buyer's credit deterioration — before it becomes an unpaid invoice — is a practical benefit that extends beyond cash flow timing.",
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
              <h2 className="text-xl font-semibold text-[#0f0f0f] mb-5">Important Considerations</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Factoring fees reduce gross margin on each sale",
                    body: "A 2% to 4% factoring fee applied to every invoice is a direct reduction in net margin per shipment. For manufacturers operating on thin margins — as is common in contract manufacturing or commodity-adjacent production — this cost should be modeled carefully against the alternatives before committing.",
                  },
                  {
                    title: "Buyer notification is required",
                    body: "Factoring requires that a notice of assignment be sent to your buyers, directing them to remit payment to the factor's lockbox. Some manufacturers are concerned this will affect buyer relationships. In practice, NOAs are standard in commercial trade finance, but it is worth considering how specific buyer contracts or relationship dynamics may be affected before onboarding.",
                  },
                  {
                    title: "Disputes and returns are not factored away",
                    body: "Factoring does not eliminate dispute risk. If a buyer refuses to pay due to a product defect, short shipment, or quality claim, the factor will typically chargeback the invoice to you under recourse terms — and this applies even in many non-recourse agreements unless the buyer is insolvent. Strong quality control and clean documentation practices are the best mitigation.",
                  },
                  {
                    title: "Concentration limits can constrain funding",
                    body: "Manufacturers that sell the majority of their output to one or two buyers may hit debtor concentration caps enforced by the factor. If a single customer represents 60% of your receivables, many factors will only fund a capped portion of that buyer's invoices. Diversifying your customer base over time is a natural way to expand factoring capacity.",
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
                Estimate advance amounts, factoring fees, and reserve releases based on your manufacturing invoice values and buyer payment timing. Outputs are estimates only and are not offers or commitments.
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
        title="Manufacturing Factoring — Common Questions"
        items={faqItems}
      />

      {/* CTA */}
      <CTASection
        headline="Explore Whether Manufacturing Factoring May Be a Fit"
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

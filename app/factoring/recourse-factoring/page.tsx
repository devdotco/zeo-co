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
  title: "Recourse Factoring | ZEO.co",
  description:
    "Learn how recourse factoring works — advance rates, reserve cycles, who bears credit risk, and what invoice criteria factors typically require. Subject to third-party provider terms and underwriting.",
  path: "/factoring/recourse-factoring",
  keywords: [
    "recourse factoring",
    "recourse invoice factoring",
    "recourse vs non-recourse factoring",
    "invoice factoring with recourse",
    "factoring agreement recourse",
    "accounts receivable factoring",
    "business factoring",
    "invoice advance",
    "factoring fees",
  ],
});

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function InvoiceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h6M6 9h6M6 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 4h9v8H2zM11 7h3l2 2v4h-5V7z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function StaffingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ConstructionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 14h14M4 14V8l5-5 5 5v6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
      <rect x="7" y="10" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function WholesaleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="14" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 8V5.5a4 4 0 0 1 8 0V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 11v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function GovernmentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 7h14M9 2l7 5H2l7-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M4 7v7M9 7v7M14 7v7M2 14h14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function NonRecourseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.5 9h5M9 6.5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ABLIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 8h14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 12h2M9 12h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function SpotIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 3v2M9 13v2M3 9h2M13 9h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

// ── Static data ───────────────────────────────────────────────────────────────

const BREADCRUMBS = [
  { label: "Factoring", href: "/factoring" },
  { label: "Recourse Factoring" },
];

const FAQ_ITEMS = [
  {
    q: "What happens if my customer doesn't pay an invoice I factored with recourse?",
    a: "Under a recourse factoring agreement, you are ultimately responsible for unpaid invoices. If your customer fails to pay within the agreed collection window — typically 90 days from the invoice date — the factor can require you to repurchase the invoice at the original face value or offset the amount against your reserve. You bear the credit risk on your customer, not the factor. This is different from non-recourse factoring, where the factor absorbs certain types of non-payment, though non-recourse products are less common and typically more expensive.",
  },
  {
    q: "What does the reserve account do and when do I receive it?",
    a: "When you submit an invoice to a recourse factor, they advance a percentage of the face value immediately — commonly 80 to 92 percent. The remaining amount, minus the factor's fee, is held in a reserve account. The reserve is released to you once your customer pays in full. It acts as a buffer for the factor: if a dispute arises or a payment comes in short, the shortfall can be covered from the reserve before triggering a recourse claim. The reserve is not a fee — it is your money, held temporarily.",
  },
  {
    q: "What types of invoices are typically ineligible for recourse factoring?",
    a: "Factors apply eligibility criteria that vary by provider, but common exclusions include invoices that are past due beyond a defined age (often 90 days), invoices billed to consumers rather than businesses, invoices subject to unresolved disputes or offset rights, invoices from affiliated or related parties, retainage in construction (funds held until project completion), and invoices from debtors the factor deems too risky or concentrated. Government and healthcare invoices are accepted by some factors and excluded by others, depending on their program. Always confirm eligibility criteria with a specific provider.",
  },
  {
    q: "Is recourse factoring the right choice if my customers are creditworthy large companies?",
    a: "Recourse factoring is frequently used with invoices billed to creditworthy commercial debtors — large retailers, distributors, government agencies, or Fortune 500 companies — precisely because the credit risk you are retaining is often low in practice. If your customer base is stable and pays reliably, recourse factoring typically delivers lower fees than non-recourse alternatives, since the factor's risk is reduced. The tradeoff is that you remain on the hook if something unexpected happens, such as a customer bankruptcy. For businesses with highly concentrated customer bases or customers in volatile industries, that retained risk is worth thinking through carefully.",
  },
  {
    q: "How does recourse factoring affect my customer relationships?",
    a: "Most recourse factoring is structured as notification factoring — your customers are notified to remit payment directly to the factor, often via a notice-of-assignment on the invoice. This is standard and most commercial customers are familiar with it. Some factors offer non-notification programs where collections continue through your own lockbox, but these are less common and subject to program eligibility. The factor's direct contact with your customers during collections can be a consideration, particularly for businesses where relationship continuity matters. Discuss the factor's communication approach and collection practices before signing.",
  },
];

const COMPARISON_COLUMNS = ["Recourse Factoring", "Non-Recourse Factoring", "Asset-Based Lending"];

const COMPARISON_ROWS = [
  {
    feature: "Who bears credit risk",
    "Recourse Factoring": "You (the seller)",
    "Non-Recourse Factoring": "Factor (for covered events)",
    "Asset-Based Lending": "You (borrower)",
  },
  {
    feature: "Typical advance rate",
    "Recourse Factoring": "80 – 92% of invoice",
    "Non-Recourse Factoring": "75 – 85% of invoice",
    "Asset-Based Lending": "70 – 85% of eligible AR",
  },
  {
    feature: "Typical factor fee",
    "Recourse Factoring": "Lower (risk stays with you)",
    "Non-Recourse Factoring": "Higher (factor absorbs risk)",
    "Asset-Based Lending": "Interest + fees on draws",
  },
  {
    feature: "Customer notification",
    "Recourse Factoring": "Usually yes",
    "Non-Recourse Factoring": "Usually yes",
    "Asset-Based Lending": "Typically not required",
  },
  {
    feature: "Minimum facility size",
    "Recourse Factoring": "$25K – $100K+/mo",
    "Non-Recourse Factoring": "Varies; often higher",
    "Asset-Based Lending": "Often $1M+",
  },
  {
    feature: "Setup complexity",
    "Recourse Factoring": "Moderate",
    "Non-Recourse Factoring": "Moderate to high",
    "Asset-Based Lending": "High (field exams, audits)",
  },
  {
    feature: "Invoices stay on your books",
    "Recourse Factoring": "No — invoices are sold",
    "Non-Recourse Factoring": "No — invoices are sold",
    "Asset-Based Lending": "Yes — pledged as collateral",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RecourseFactoringPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "Factoring", url: "https://zeo.co/factoring" },
          { name: "Recourse Factoring", url: "https://zeo.co/factoring/recourse-factoring" },
        ])}
      />

      {/* ── Hero ── */}
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Factoring"
        title="Recourse Factoring"
        subtitle="The most widely used form of invoice factoring — you sell your receivables for immediate cash while retaining responsibility if a customer fails to pay. Typically carries lower fees than non-recourse structures. Subject to third-party provider terms and underwriting."
      />

      {/* ── Snapshot metrics ── */}
      <section className="py-12 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard
              label="Typical advance rate"
              value="80 – 92%"
              note="Of eligible invoice face value; varies by factor and debtor quality"
            />
            <MetricCard
              label="Factoring fee range"
              value="1 – 5%"
              unit="per 30 days"
              note="Subject to invoice volume, debtor quality, and program terms"
            />
            <MetricCard
              label="Reserve release"
              value="On payment"
              note="Remaining balance (less fees) released when customer pays in full"
              highlight
            />
            <MetricCard
              label="Typical setup time"
              value="3 – 10 days"
              note="After application, documentation, and debtor verification"
            />
          </div>
        </div>
      </section>

      {/* ── What it is and who uses it ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                What it is
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                Sell your invoices now — you keep the credit risk
              </h2>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                Recourse factoring is a financing arrangement in which you sell your outstanding
                business-to-business invoices to a third-party factor in exchange for an immediate
                cash advance — typically 80 to 92 percent of the invoice face value. The factor
                collects payment directly from your customer. Once collected, the factor releases
                your reserve: the remaining invoice balance minus their fee.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm mb-4">
                The defining feature of recourse factoring is who bears the credit risk. If your
                customer does not pay — due to insolvency, dispute, or prolonged non-payment — the
                factor can require you to buy the invoice back or deduct the shortfall from your
                reserve account. You are recourse to the factor for unpaid amounts. This contrasts
                with non-recourse factoring, where the factor assumes certain types of credit risk,
                but non-recourse programs are less common and typically carry higher fees.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm">
                Because the factor&#39;s risk is lower under a recourse structure, fees tend to be
                more competitive. For businesses whose customers are generally creditworthy and pay
                predictably, the retained credit risk is often manageable in practice — and the
                lower cost can make recourse factoring the more efficient choice.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  heading: "B2B businesses with reliable commercial customers",
                  body: "Recourse factoring works best when your customers have a demonstrated payment history. If you invoice large retailers, distributors, manufacturers, or commercial buyers who pay on predictable terms, the recourse obligation carries relatively low practical risk — and the lower fees reflect that.",
                },
                {
                  heading: "Businesses with fast-growing receivables and slow cash cycles",
                  body: "Companies landing new contracts faster than they can collect — staffing firms, freight carriers, subcontractors — often need capital between invoice date and payment date. Recourse factoring converts that outstanding AR into working capital without waiting for 30, 60, or 90-day payment terms to run.",
                },
                {
                  heading: "Businesses that cannot qualify for traditional bank lines",
                  body: "Factoring underwriting focuses primarily on your customers&#39; creditworthiness rather than your own credit profile or profitability. Newer businesses, companies with thin margins, or those with prior credit issues may find factoring accessible where conventional lenders decline — subject to the factor&#39;s own eligibility criteria.",
                },
                {
                  heading: "Companies seeking faster setup than ABL",
                  body: "Asset-based lending facilities can take weeks to set up and require field exams, audits, and extensive documentation. Recourse factoring programs can often be established in days. For businesses that need liquidity quickly or want to test a factoring relationship before committing to a larger ABL structure, recourse factoring is a faster on-ramp.",
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

      {/* ── Advance and reserve cycle ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            How it works
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2 text-balance">
            The advance and reserve cycle
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Each invoice you factor follows the same cycle. Understanding the mechanics helps you
            evaluate the real cost and cash flow impact before signing a factoring agreement.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                step: "1",
                title: "Invoice submission",
                body: "After delivering goods or completing services, you submit the invoice to your factor along with any required proof of delivery, purchase order, or signed acceptance. The factor verifies the invoice is valid and the debtor is eligible under your program.",
              },
              {
                step: "2",
                title: "Advance payment",
                body: "The factor wires the advance — typically 80 to 92 percent of the invoice face value — to your bank account, often within one business day of approval. This is your immediate cash. The remainder is held in a reserve account pending customer payment.",
              },
              {
                step: "3",
                title: "Factor collects from your customer",
                body: "Your customer is notified to remit payment directly to the factor (in most notification programs). The factor handles collections during the agreed payment window, which tracks your customer&#39;s normal payment terms.",
              },
              {
                step: "4",
                title: "Reserve released",
                body: "When your customer pays in full, the factor deducts their fee and releases the reserve balance to you. If the customer pays in 30 days and your fee is 2% of face value, you receive the advance plus the reserve minus that 2% fee.",
              },
              {
                step: "5",
                title: "Recourse event (if applicable)",
                body: "If your customer has not paid within the agreed collection window — commonly 90 days from invoice date — the factor may trigger a recourse claim. You may need to repurchase the invoice at face value or have the amount offset against future advances or your reserve.",
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

          {/* Recourse obligation callout */}
          <div className="mt-6 rounded-xl border border-[#0f0f0f]/20 bg-[#f5f5f5] p-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-2">
              Understanding the recourse obligation
            </p>
            <p className="text-sm text-[#737373] leading-relaxed max-w-3xl">
              Recourse does not mean you will always be required to buy invoices back — it means
              the obligation exists if a customer fails to pay. Many businesses factor for years
              without ever triggering a recourse event because their customers pay reliably. The
              risk is real, however, and should be part of how you evaluate which invoices to
              factor and at what volume. Review the specific recourse trigger window, any cure
              periods, and how the factor handles disputed invoices in any factoring agreement
              before signing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Requirements and invoice criteria ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Requirements
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                What factors typically evaluate
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                Recourse factoring underwriting is primarily driven by the quality of your
                invoices and your customers — not your own credit score or years in business.
                That said, factors set their own eligibility standards and the criteria below
                reflect general patterns, not guarantees of approval.
              </p>
              <div className="space-y-2">
                {[
                  {
                    label: "Business-to-business invoices only",
                    value: "Commercial debtors, not consumers",
                    note: "Factors work with invoices billed to businesses, government agencies, or healthcare payors — not to individual consumers. B2C receivables are generally ineligible.",
                  },
                  {
                    label: "Work or delivery completed",
                    value: "Invoices must be earned",
                    note: "Factored invoices must represent goods already delivered or services already performed. Pre-billing, progress billings, and retainage may be excluded or treated differently depending on the factor.",
                  },
                  {
                    label: "Customer (debtor) creditworthiness",
                    value: "Primary underwriting focus",
                    note: "The factor&#39;s exposure is to your customer, not you. Factors evaluate debtor payment history, credit risk, and concentration. Weak or unverifiable debtors may be ineligible or assigned lower advance rates.",
                  },
                  {
                    label: "Invoice age",
                    value: "Typically under 90 days",
                    note: "Invoices that are already past due or approaching age limits may not be eligible. Factors generally want invoices that have a normal payment cycle ahead of them.",
                  },
                  {
                    label: "No existing liens on receivables",
                    value: "First-priority security interest required",
                    note: "Factors typically require a first-lien UCC filing on your accounts receivable. If a bank or other lender already holds a blanket lien, the factor may require a lien subordination or payoff before proceeding.",
                  },
                  {
                    label: "Volume minimums",
                    value: "Often $25K – $100K+ per month",
                    note: "Many factoring programs have monthly minimums. Very small invoice volumes may be served by spot factoring programs, which factor individual invoices without a long-term contract, typically at higher per-invoice fees.",
                  },
                ].map((req) => (
                  <div
                    key={req.label}
                    className="flex gap-4 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                  >
                    <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0f0f0f]" />
                    <div>
                      <p className="text-sm font-medium text-[#0f0f0f]">{req.label}</p>
                      <p className="text-sm text-[#737373] mt-0.5">{req.value}</p>
                      <p className="text-xs text-[#a3a3a3] mt-1 leading-relaxed">{req.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advance rates and fee ranges */}
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                Advance rates and fees
              </p>
              <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
                Understanding how factoring costs work
              </h2>
              <p className="text-[#737373] text-sm leading-relaxed mb-5">
                ZEO.co does not quote, set, or guarantee factoring rates. The ranges below reflect
                general market patterns — actual terms depend on your invoice profile, debtor
                quality, volume, and the specific factor. Evaluate the full cost structure, not
                just the stated rate.
              </p>
              <div className="space-y-4 text-sm text-[#737373] leading-relaxed">
                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-2">Advance rate</p>
                  <p className="text-[#737373] leading-relaxed text-sm mb-2">
                    The advance is the immediate cash you receive, expressed as a percentage of the
                    invoice face value. Recourse factoring advances commonly range from 80 to 92
                    percent, with higher advances available for strong debtor profiles and
                    established factoring relationships. The remainder is held in reserve.
                  </p>
                  <p className="text-xs text-[#a3a3a3]">
                    A higher advance rate means less cash retained in reserve — but the reserve
                    is your money, returned after payment less fees. A lower advance is not
                    necessarily worse if the fee structure is favorable.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-2">Factoring fee</p>
                  <p className="text-[#737373] leading-relaxed text-sm mb-2">
                    Fees are typically expressed as a percentage of invoice face value per period —
                    for example, 1.5% per 30 days. Some factors use a flat fee structure; others
                    charge incrementally as the invoice ages unpaid. Recourse programs generally
                    offer lower fees than non-recourse alternatives because the credit risk remains
                    with you.
                  </p>
                  <p className="text-xs text-[#a3a3a3]">
                    A factor quoting 1.5% per 30 days on a $100,000 invoice held for 45 days
                    would charge approximately $2,250. Understand whether fees are calculated on
                    face value or the advance amount, and whether they compound or accrue daily.
                  </p>
                </div>
                <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-2">Other costs to review</p>
                  <ul className="space-y-1.5 text-xs text-[#a3a3a3]">
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 mt-1 h-1 w-1 rounded-full bg-[#a3a3a3]" />
                      <span><span className="text-[#737373] font-medium">Due diligence or setup fees</span> — charged at program inception to cover underwriting and documentation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 mt-1 h-1 w-1 rounded-full bg-[#a3a3a3]" />
                      <span><span className="text-[#737373] font-medium">Monthly minimums</span> — if you factor less than a contractual minimum volume, you may owe a fee for the shortfall</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 mt-1 h-1 w-1 rounded-full bg-[#a3a3a3]" />
                      <span><span className="text-[#737373] font-medium">Wire and ACH fees</span> — some factors charge per-transfer fees for disbursements</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="flex-shrink-0 mt-1 h-1 w-1 rounded-full bg-[#a3a3a3]" />
                      <span><span className="text-[#737373] font-medium">Early termination fees</span> — long-term contracts may carry penalties for exiting before the term ends</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Common industries
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Industries where recourse factoring is frequently used
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Recourse factoring is common in sectors with regular B2B invoicing, commercial
            customers, and a gap between service delivery and payment collection.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<TruckIcon />}
              title="Freight and Transportation"
              description="Carriers and brokers often wait 30 to 60 days for freight bills to be paid. Recourse factoring converts those freight invoices to cash quickly, funding fuel, payroll, and dispatch before customers pay."
              tags={["Freight bills", "Quick pay", "Owner-operators"]}
              href="/factoring/recourse-factoring"
            />
            <FinancingPathCard
              icon={<StaffingIcon />}
              title="Staffing and Workforce"
              description="Staffing agencies face weekly payroll obligations while collecting on net-30 or net-60 invoices. Factoring the staffing invoices bridges that gap and funds growth without relying on a bank line."
              tags={["Payroll funding", "Temp staffing", "Professional services"]}
              href="/factoring/recourse-factoring"
            />
            <FinancingPathCard
              icon={<ConstructionIcon />}
              title="Construction and Subcontractors"
              description="Subcontractors invoice GCs and owners who pay slowly. Recourse factoring can work for earned progress billings — though retainage is typically excluded until project completion."
              tags={["Progress billings", "Subcontractors", "Earned invoices"]}
              href="/factoring/recourse-factoring"
            />
            <FinancingPathCard
              icon={<WholesaleIcon />}
              title="Wholesale and Distribution"
              description="Distributors carrying inventory and extending credit to retail or commercial buyers can convert those outstanding invoices to working capital while waiting for customers to pay on trade terms."
              tags={["Trade credit", "B2B receivables", "Inventory"]}
              href="/factoring/recourse-factoring"
            />
            <FinancingPathCard
              icon={<InvoiceIcon />}
              title="Manufacturing"
              description="Manufacturers shipping to commercial customers on net terms can factor those invoices to fund material purchases, payroll, and production costs ahead of customer payment."
              tags={["Commercial buyers", "Trade receivables", "Production funding"]}
              href="/factoring/recourse-factoring"
            />
            <FinancingPathCard
              icon={<GovernmentIcon />}
              title="Government Contractors"
              description="Companies invoicing federal, state, or municipal agencies often wait 60 to 90 days or more. Government receivables can be strong factoring collateral given the creditworthiness of the payor, though eligibility varies by factor."
              tags={["Government AR", "Slow payers", "Federal/state"]}
              href="/factoring/recourse-factoring"
            />
          </div>
        </div>
      </section>

      {/* ── Benefits and limitations ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Weighing your options
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-8 text-balance">
            Potential advantages and limitations
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide mb-4">
                Potential advantages
              </h3>
              <ul className="space-y-3">
                {[
                  "Lower fees than non-recourse factoring — because you retain the credit risk, the factor charges less for the service.",
                  "Accessible to newer or smaller businesses that may not qualify for traditional bank credit lines or ABL facilities.",
                  "Underwriting focuses on your customers&#39; creditworthiness rather than your own credit profile or financial history.",
                  "Converts outstanding invoices to cash in 24 to 48 hours, improving cash flow without taking on traditional debt.",
                  "Faster setup than asset-based lending — programs can often be established in days rather than weeks.",
                  "Scales with revenue — as you invoice more, your potential factoring capacity grows without renegotiating a fixed credit limit.",
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
                    <span dangerouslySetInnerHTML={{ __html: pt }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
              <h3 className="text-sm font-semibold text-[#a3a3a3] uppercase tracking-wide mb-4">
                Potential limitations
              </h3>
              <ul className="space-y-3">
                {[
                  "You remain responsible for unpaid invoices — a customer bankruptcy or prolonged non-payment triggers a recourse obligation you must satisfy.",
                  "Customer notification is typically required, meaning your customers know you are using a factor, which may affect some relationships.",
                  "Factoring fees compound over the invoice lifecycle — a slow-paying customer makes factoring progressively more expensive the longer they take to pay.",
                  "UCC filings on your receivables can complicate other financing — some lenders view an AR lien as conflicting with their own security requirements.",
                  "Long-term contracts may include volume minimums and early termination fees that reduce flexibility if your business needs change.",
                  "Only usable for earned, eligible, commercial invoices — it does not help with payroll, rent, inventory purchases, or other cash needs unrelated to outstanding AR.",
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
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Recourse factoring vs. non-recourse vs. asset-based lending
          </h2>
          <p className="text-sm text-[#737373] mb-6 max-w-2xl">
            This table summarizes general structural differences. Actual terms depend on your
            specific factoring agreement or credit facility. Always review the full contract.
          </p>
          <ComparisonTable
            columns={COMPARISON_COLUMNS}
            rows={COMPARISON_ROWS}
            highlightCol="Recourse Factoring"
          />
        </div>
      </section>

      {/* ── Alternatives ── */}
      <section className="py-14 border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Related financing paths
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4 text-balance">
            Other options that may be worth comparing
          </h2>
          <p className="text-sm text-[#737373] mb-8 max-w-2xl">
            Recourse factoring is one approach to turning receivables into working capital — but
            depending on your situation, volume, and customer profile, one of these may be a
            better potential fit or a useful complement.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FinancingPathCard
              icon={<NonRecourseIcon />}
              title="Non-Recourse Factoring"
              description="The factor absorbs credit risk on qualifying non-payment events such as customer insolvency. Fees are typically higher than recourse, but your exposure to bad debt is reduced — subject to the factor's specific coverage terms."
              tags={["Credit protection", "Higher fees", "Insolvency coverage"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={<SpotIcon />}
              title="Spot Factoring"
              description="Factor individual invoices on demand without a long-term contract or volume commitment. Fees tend to be higher per invoice, but the flexibility suits businesses with occasional rather than ongoing factoring needs."
              tags={["No contract", "Single invoices", "Flexible"]}
              href="/factoring"
            />
            <FinancingPathCard
              icon={<ABLIcon />}
              title="Asset-Based Lending"
              description="A revolving credit facility secured by receivables, inventory, and other assets. Better suited to larger businesses with $1M+ in monthly invoicing that need a more permanent working capital structure with lower ongoing fees."
              tags={["Revolving line", "Multi-asset", "$1M+ volumes"]}
              href="/asset-based-lending"
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
                Estimate your factoring advance and fees
              </h3>
              <p className="text-sm text-[#a3a3a3] max-w-md">
                Use our invoice factoring calculator to model how advance rates and fee structures
                affect your net proceeds on a given invoice. Results are illustrative only — not an
                offer or commitment from any factor or third-party provider.
              </p>
            </div>
            <Link
              href="/calculators/invoice-factoring-calculator"
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
        title="Recourse Factoring — Common Questions"
      />

      {/* ── CTA ── */}
      <CTASection
        headline="Explore factoring options for your business"
        subtext="Submit a brief intake and ZEO will review which financing paths may be a potential fit based on your invoice profile and business. Subject to underwriting by third-party providers. Results are not guaranteed."
        primaryLabel="Start Application"
        primaryHref="/apply"
        secondaryLabel="Browse All Financing Options"
        secondaryHref="/financing"
      />

      {/* ── Disclaimer ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
        <ProductDisclaimer type="factoring" />
      </div>
    </main>
  );
}

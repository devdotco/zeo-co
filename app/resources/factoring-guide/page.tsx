import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MetricCard from "@/components/ui/MetricCard";
import ComparisonTable from "@/components/ui/ComparisonTable";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Invoice Factoring Guide | ZEO.co",
  description:
    "Learn how invoice factoring works, how it compares to traditional lending, and whether it may be a fit for your business cash flow needs.",
  path: "/resources/factoring-guide",
  keywords: [
    "invoice factoring",
    "accounts receivable financing",
    "factoring guide",
    "business cash flow",
    "factoring vs bank loan",
    "recourse factoring",
    "non-recourse factoring",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Invoice Factoring Guide",
  description:
    "A comprehensive guide to invoice factoring: how it works, costs, recourse vs. non-recourse, and how to evaluate whether factoring may fit your business.",
  author: { "@type": "Organization", name: "ZEO.co" },
  publisher: { "@type": "Organization", name: "ZEO.co" },
};

const faqItems = [
  {
    q: "Does invoice factoring hurt my business credit?",
    a: "Factoring itself is not a loan and typically does not appear on your business credit report the same way a term loan would. However, UCC filings associated with a factoring agreement may be visible to other lenders and could affect your ability to obtain other secured financing. Review the agreement terms carefully with your advisors.",
  },
  {
    q: "Can I factor invoices if I have tax liens or poor credit?",
    a: "Some factoring providers place more emphasis on your customers' creditworthiness than your own. Businesses with tax liens, thin credit history, or prior financial difficulties may still find factoring options available, subject to the specific provider's underwriting criteria and the quality of your receivables.",
  },
  {
    q: "What industries commonly use invoice factoring?",
    a: "Factoring is frequently used in trucking and freight, staffing and temp agencies, manufacturing, wholesale distribution, government contracting, and professional services — any industry where B2B or B2G invoices are common and payment terms extend 30 to 90 days or longer.",
  },
  {
    q: "How quickly can I access funds after submitting an invoice?",
    a: "Advance timing varies by provider. Once an account is established, many factoring companies fund within 24 to 48 hours of invoice verification. Initial setup — which includes customer credit checks, UCC filings, and document review — typically takes several days to two weeks depending on complexity.",
  },
  {
    q: "What is the difference between recourse and non-recourse factoring?",
    a: "With recourse factoring, your business remains responsible if your customer does not pay. Under non-recourse factoring, the factor assumes the credit risk of customer non-payment in defined circumstances — typically insolvency — though many contracts include exceptions. Non-recourse arrangements generally carry higher fees to offset that risk transfer.",
  },
];

const comparisonRows = [
  {
    feature: "Approval basis",
    "Invoice Factoring": "Customer creditworthiness",
    "Bank Line of Credit": "Business credit & financials",
    "Merchant Cash Advance": "Revenue & card volume",
  },
  {
    feature: "Collateral",
    "Invoice Factoring": "Accounts receivable",
    "Bank Line of Credit": "Varies; may require assets",
    "Merchant Cash Advance": "Future receivables",
  },
  {
    feature: "Typical speed to fund",
    "Invoice Factoring": "24–72 hrs after setup",
    "Bank Line of Credit": "Weeks to months",
    "Merchant Cash Advance": "1–3 business days",
  },
  {
    feature: "Ongoing availability",
    "Invoice Factoring": "Grows with invoice volume",
    "Bank Line of Credit": "Fixed limit",
    "Merchant Cash Advance": "One-time advance",
  },
  {
    feature: "Cost structure",
    "Invoice Factoring": "Discount fee per invoice",
    "Bank Line of Credit": "Interest on drawn balance",
    "Merchant Cash Advance": "Fixed factor rate",
  },
  {
    feature: "Customer notification",
    "Invoice Factoring": "Often required",
    "Bank Line of Credit": "Not applicable",
    "Merchant Cash Advance": "Not applicable",
  },
];

export default function FactoringGuidePage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <JsonLd data={articleSchema} />

      <PageHero
        eyebrow="Guide"
        title="Invoice Factoring Guide"
        subtitle="Understand how accounts receivable financing works, what it costs, and how to evaluate whether it may be a potential fit for your business cash flow."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Invoice Factoring Guide" },
        ]}
      />

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14 space-y-16">

        {/* Section 1: What Is Invoice Factoring */}
        <section>
          <h2 className="text-xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
            What Is Invoice Factoring?
          </h2>
          <div className="space-y-4 text-[#737373] text-[0.9375rem] leading-[1.75]">
            <p>
              Invoice factoring is a form of accounts receivable financing in which a business sells its
              outstanding invoices to a third-party company — called a factor — at a discount in exchange
              for immediate working capital. Rather than waiting 30, 60, or 90 days for customers to pay,
              the business receives a cash advance against the face value of those invoices, typically
              ranging from 70% to 95% of the invoice amount depending on the industry, customer credit
              quality, and factoring provider.
            </p>
            <p>
              When the customer pays the invoice in full, the factor releases the remaining balance — called
              the reserve — minus its fees. This structure means factoring is not technically structured as
              a loan in all cases; instead, it is the purchase of a financial asset. That distinction has
              implications for how it appears on a balance sheet and how it interacts with existing debt
              covenants, though businesses should review those details with qualified legal and accounting counsel.
            </p>
            <p>
              Factoring is commonly used by businesses with strong receivables but constrained cash flow —
              companies that need to meet payroll, purchase inventory, or fund operations before customers
              pay. It can be particularly relevant for businesses that do not qualify for traditional bank
              credit or that need faster access to capital than conventional underwriting timelines allow.
            </p>
          </div>
        </section>

        {/* Key metrics */}
        <section>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
            Typical Factoring Parameters
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <MetricCard
              label="Advance Rate"
              value="70–95%"
              note="Of invoice face value"
            />
            <MetricCard
              label="Factoring Fee"
              value="1–5%"
              note="Per invoice, varies by term"
            />
            <MetricCard
              label="Reserve Release"
              value="On payment"
              note="Minus fees upon customer payment"
            />
            <MetricCard
              label="Funding Speed"
              value="24–72 hrs"
              note="After account setup"
              highlight
            />
          </div>
          <p className="text-xs text-[#a3a3a3] mt-3 leading-relaxed">
            Parameters are illustrative ranges only. Actual terms are subject to underwriting and third-party
            provider policies. Not an offer or commitment.
          </p>
        </section>

        {/* Section 2: How the Process Works */}
        <section>
          <h2 className="text-xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
            How the Factoring Process Works
          </h2>
          <div className="space-y-4 text-[#737373] text-[0.9375rem] leading-[1.75]">
            <p>
              The mechanics of factoring follow a consistent pattern, though the specifics vary by provider
              and agreement structure. Understanding each step helps businesses evaluate what they are
              agreeing to before signing a factoring contract.
            </p>
          </div>

          {/* Process steps */}
          <div className="mt-6 space-y-0 border border-[#e5e5e5] rounded-xl overflow-hidden divide-y divide-[#e5e5e5]">
            {[
              {
                step: "01",
                label: "Invoice your customer",
                detail:
                  "You complete work or deliver goods and issue an invoice to your commercial or government customer with standard net payment terms.",
              },
              {
                step: "02",
                label: "Submit the invoice to the factor",
                detail:
                  "You sell or assign the invoice to the factoring company. The factor verifies the invoice and checks the creditworthiness of your customer — not necessarily your own credit.",
              },
              {
                step: "03",
                label: "Receive the advance",
                detail:
                  "Once approved, the factor deposits the advance — typically 70% to 95% of the invoice value — into your account. Most established accounts fund within 24 to 48 hours of verification.",
              },
              {
                step: "04",
                label: "Customer pays the factor",
                detail:
                  "In most factoring arrangements, your customer is notified and instructed to remit payment directly to the factor. This is called a notice of assignment and is a standard component of most factoring agreements.",
              },
              {
                step: "05",
                label: "Reserve released, fees deducted",
                detail:
                  "When the customer pays in full, the factor releases the remaining reserve balance to you, minus the factoring fee. If payment is delayed, additional fees may accrue depending on your agreement terms.",
              },
            ].map(({ step, label, detail }) => (
              <div key={step} className="flex gap-4 px-5 py-4 bg-[#f5f5f5]">
                <span className="text-[0.65rem] font-semibold tabular-nums text-[#0f0f0f] tracking-widest pt-0.5 w-6 shrink-0">
                  {step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0f0f0f] mb-1">{label}</p>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Recourse vs Non-Recourse */}
        <section>
          <h2 className="text-xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
            Recourse vs. Non-Recourse Factoring
          </h2>
          <div className="space-y-4 text-[#737373] text-[0.9375rem] leading-[1.75]">
            <p>
              One of the most consequential decisions in a factoring agreement is whether it is structured
              as recourse or non-recourse. This distinction determines who bears the credit risk if a
              customer fails to pay the invoice.
            </p>
            <p>
              Under <span className="text-[#0f0f0f] font-medium">recourse factoring</span>, the business
              retains liability for unpaid invoices. If a customer does not pay within the agreed window,
              the factor may require the business to repurchase the invoice or substitute it with another
              eligible receivable. Recourse factoring typically carries lower fees because the factor's
              risk is reduced.
            </p>
            <p>
              Under <span className="text-[#0f0f0f] font-medium">non-recourse factoring</span>, the factor
              assumes the credit risk of customer non-payment in specified circumstances — most commonly
              customer insolvency. However, non-recourse agreements often contain narrow definitions and
              carve-outs: disputed invoices, customer chargebacks, or payment delays due to performance
              issues may still revert to the business. Fees are generally higher to reflect the transferred
              risk.
            </p>
            <p>
              Businesses considering factoring should read the recourse provisions, dispute resolution
              language, and default definitions in any proposed agreement carefully — and involve qualified
              legal counsel before signing. The label "non-recourse" does not automatically mean all
              non-payment scenarios are covered.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
                Recourse Factoring
              </p>
              <ul className="space-y-2 text-sm text-[#737373]">
                <li className="flex gap-2">
                  <span className="text-[#0f0f0f] shrink-0 mt-0.5">+</span>
                  Lower factoring fees
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0f0f0f] shrink-0 mt-0.5">+</span>
                  More widely available
                </li>
                <li className="flex gap-2">
                  <span className="text-[#a3a3a3] shrink-0 mt-0.5">–</span>
                  Business retains non-payment risk
                </li>
                <li className="flex gap-2">
                  <span className="text-[#a3a3a3] shrink-0 mt-0.5">–</span>
                  May require buyback of unpaid invoices
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#0f0f0f]/20 bg-[#0f2a14] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f]/60 mb-3">
                Non-Recourse Factoring
              </p>
              <ul className="space-y-2 text-sm text-[#737373]">
                <li className="flex gap-2">
                  <span className="text-[#0f0f0f] shrink-0 mt-0.5">+</span>
                  Factor bears defined credit risk
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0f0f0f] shrink-0 mt-0.5">+</span>
                  Protection against customer insolvency (in scope)
                </li>
                <li className="flex gap-2">
                  <span className="text-[#a3a3a3] shrink-0 mt-0.5">–</span>
                  Higher fees
                </li>
                <li className="flex gap-2">
                  <span className="text-[#a3a3a3] shrink-0 mt-0.5">–</span>
                  Coverage carve-outs are common
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Costs and What to Review */}
        <section>
          <h2 className="text-xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
            Understanding Factoring Costs and Contract Terms
          </h2>
          <div className="space-y-4 text-[#737373] text-[0.9375rem] leading-[1.75]">
            <p>
              Factoring fees are expressed as a discount rate — a percentage of the invoice face value
              charged for each funding period, typically structured per 30-day increment. A common structure
              might be 2% for the first 30 days and an additional 0.5% for each subsequent 10-day period
              until the customer pays. The effective cost rises meaningfully if customers pay slowly, so
              evaluating your typical collection cycle matters when modeling the cost of factoring.
            </p>
            <p>
              Beyond the discount rate, factoring agreements may include additional fees that affect total
              cost: application or setup fees, due diligence fees, wire transfer fees, monthly minimum
              volume requirements, termination fees for early contract exit, and reserves held back beyond
              the stated reserve percentage. Reviewing the full schedule of fees — not just the headline
              rate — is essential before committing.
            </p>
            <p>
              Contracts also vary significantly on exclusivity and volume requirements. Some factoring
              agreements require that you factor all eligible receivables; others allow spot factoring of
              selected invoices. Long-term contracts may lock a business into a relationship even if a
              better option becomes available. Minimum monthly volume clauses can result in fees being
              charged even in months where you do not factor any invoices.
            </p>
          </div>

          {/* Key contract terms callout */}
          <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-4">
              Key Contract Terms to Review
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                ["Discount rate structure", "Per invoice, per period, or tiered"],
                ["Reserve percentage", "Held until customer payment"],
                ["Recourse provisions", "Your liability if customers don't pay"],
                ["Exclusivity clause", "Whether you must factor all receivables"],
                ["Minimum volume", "Fees charged even in low-activity months"],
                ["Termination terms", "Notice period and early-exit penalties"],
                ["Notice of assignment", "Customer notification requirements"],
                ["UCC filing scope", "What assets are encumbered"],
              ].map(([term, desc]) => (
                <div key={term} className="flex gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#0f0f0f] mt-[0.45rem] shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0f0f0f] leading-snug">{term}</p>
                    <p className="text-xs text-[#a3a3a3] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Factoring vs. Alternatives */}
        <section>
          <h2 className="text-xl font-semibold text-[#0f0f0f] mb-4 leading-snug">
            How Factoring Compares to Other Financing Options
          </h2>
          <div className="space-y-4 text-[#737373] text-[0.9375rem] leading-[1.75] mb-6">
            <p>
              Invoice factoring occupies a specific position in the business financing landscape. It is
              not a substitute for every type of capital need, and its suitability depends on a business's
              revenue model, customer base, and cash flow patterns. The table below outlines how factoring
              compares to two common alternatives — a bank line of credit and a merchant cash advance —
              across several practical dimensions.
            </p>
            <p>
              Businesses with strong B2B or government invoice volume and creditworthy customers may find
              factoring a potential fit, subject to underwriting. Businesses with primarily consumer revenue,
              very small invoice sizes, or customer relationships that would be disrupted by a notice of
              assignment should weigh those factors carefully. All options below are subject to lender
              or provider approval, underwriting criteria, and third-party terms.
            </p>
          </div>

          <ComparisonTable
            columns={["Invoice Factoring", "Bank Line of Credit", "Merchant Cash Advance"]}
            rows={comparisonRows}
            highlightCol="Invoice Factoring"
          />

          <p className="text-xs text-[#a3a3a3] mt-3 leading-relaxed">
            Comparison is for general educational purposes only. Terms vary widely by provider and are
            subject to underwriting, approval, and individual business circumstances.
          </p>
        </section>

        {/* Section divider before FAQ */}
        <div className="border-t border-[#e5e5e5]" />

        {/* Disclaimer before FAQ */}
        <ProductDisclaimer type="factoring" />
      </div>

      <FAQ
        title="Invoice Factoring: Common Questions"
        items={faqItems}
      />

      <CTASection
        headline="Explore whether factoring may be a fit for your business"
        subtext="Submit a brief intake and ZEO will review potential financing paths for your situation. All options are subject to underwriting and third-party provider approval."
        primaryLabel="Start Your Review"
        primaryHref="/apply"
        secondaryLabel="Compare Financing Options"
        secondaryHref="/financing"
        variant="dark"
      />

      {/* Footer disclaimer */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-14">
        <ProductDisclaimer type="general" className="mt-8" />
      </div>
    </main>
  );
}

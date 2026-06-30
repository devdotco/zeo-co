import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "How ZEO Works — Business Financing Education & Comparison",
  description:
    "Learn how ZEO helps business owners understand, compare, and connect with financing options — from initial need through potential funding. No loans made, no approvals guaranteed.",
  path: "/how-it-works",
  keywords: [
    "how business financing works",
    "small business loan process",
    "SBA loan steps",
    "financing comparison marketplace",
    "ZEO how it works",
  ],
});

const steps = [
  {
    number: "01",
    label: "Identify Your Need",
    heading: "Define what the capital is for",
    body: "Every financing journey starts with clarity about the purpose: working capital, equipment, real estate, acquisition, invoice cycles, or growth. The type of need often determines which financing structures may be worth exploring. ZEO helps you frame the question before you start collecting documents or talking to lenders.",
    detail:
      "Common triggers: seasonal cash gaps, contract wins requiring upfront costs, equipment replacement, hiring ahead of revenue, or a business purchase opportunity.",
  },
  {
    number: "02",
    label: "Match to Financing Structures",
    heading: "See which products may be relevant",
    body: "Not every business fits every product. SBA 7(a) loans, term loans, lines of credit, invoice factoring, equipment financing, merchant cash advances, and acquisition loans each have distinct structures, eligibility considerations, timelines, and cost profiles. ZEO's educational tools help you understand the landscape before you commit to an application.",
    detail:
      "ZEO does not make recommendations that constitute financial advice. The comparison tools and content are for informational purposes only, subject to underwriting and third-party provider terms.",
  },
  {
    number: "03",
    label: "Prequalify and Assess Fit",
    heading: "Get a realistic picture of where you may stand",
    body: "Before packaging a full application, it's worth understanding how lenders typically evaluate businesses like yours — time in business, revenue, credit profile, collateral, industry, and use of proceeds all factor in. ZEO's intake process surfaces which paths you may qualify to explore, without a hard credit pull or commitment.",
    detail:
      "Prequalification is not an approval, a commitment, or a guarantee. All financing is subject to full underwriting by third-party providers.",
  },
  {
    number: "04",
    label: "Package Your Information",
    heading: "Gather documents lenders typically require",
    body: "Most commercial lenders require a consistent set of materials: business bank statements, tax returns, financial statements, legal documents, and sometimes a business plan or acquisition documents. ZEO provides clear checklists organized by financing type so you enter conversations prepared, not scrambling.",
    detail:
      "Requirements vary significantly by lender, financing product, loan size, and business profile. ZEO's checklists are guides, not guarantees of what any specific lender will require.",
  },
  {
    number: "05",
    label: "Connect with Providers",
    heading: "Get introduced to third-party financing sources",
    body: "ZEO operates as a referral and comparison marketplace, not as a lender. When you're ready to pursue a specific financing path, ZEO can connect you with third-party providers — banks, credit unions, non-bank lenders, and alternative capital sources — whose stated criteria may match your situation.",
    detail:
      "ZEO does not control lender decisions, set terms, or guarantee introductions will result in offers. All terms, rates, and approvals are determined solely by the third-party provider.",
  },
  {
    number: "06",
    label: "Application and Funding",
    heading: "Work directly with the provider through closing",
    body: "Once connected, the application, underwriting, approval, and funding process happens directly between you and the financing provider. Timelines vary widely: SBA loans may take 30–90 days; some working capital products may move faster. ZEO may remain available as a resource during this stage but is not a party to the financing agreement.",
    detail:
      "ZEO is not involved in negotiations, closing, or the terms of any financing. Review all agreements carefully with qualified legal and financial advisors before signing.",
  },
];

const faqItems = [
  {
    q: "Does ZEO charge fees to business owners?",
    a: "ZEO's educational tools and comparison features are generally available at no cost to business owners. If a referral or connection service involves a fee, it will be disclosed before you proceed. ZEO may receive compensation from third-party providers in some cases — this does not affect underwriting or lender decisions.",
  },
  {
    q: "Does ZEO guarantee I will be approved for financing?",
    a: "No. ZEO never guarantees approval. All financing is subject to underwriting, eligibility review, and approval by the third-party provider. ZEO's tools help you understand which options may be worth exploring, but final decisions rest entirely with lenders.",
  },
  {
    q: "Is ZEO a bank or licensed lender?",
    a: "No. ZEO is not a bank, credit union, SBA lender, mortgage company, or licensed lender. ZEO operates as an educational resource and referral marketplace. ZEO does not originate, underwrite, fund, or service any loans.",
  },
  {
    q: "How is my business information used?",
    a: "Information you provide through ZEO's intake and tools is used to help match you with potentially relevant financing paths and providers. ZEO handles your data in accordance with its privacy policy. Information shared with third-party providers is governed by those providers' own policies.",
  },
  {
    q: "What types of businesses does ZEO work with?",
    a: "ZEO's tools are designed for U.S.-based small and mid-sized businesses across a range of industries. Specific financing options have their own eligibility criteria — including time in business, revenue minimums, credit thresholds, and industry restrictions — that are set by third-party lenders, not by ZEO.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://zeo.co" },
          { name: "How It Works", url: "https://zeo.co/how-it-works" },
        ])}
      />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How It Works" },
        ]}
        eyebrow="The ZEO Process"
        title="How ZEO Works"
        subtitle="ZEO is a financing education and referral platform — not a lender. Here is what the process actually looks like, from identifying a need to connecting with third-party providers."
      />

      {/* 6-Step Process */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-2">
              The Process
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] max-w-xl" style={{ textWrap: "balance" } as React.CSSProperties}>
              Six stages, from need to potential funding
            </h2>
            <p className="text-[#737373] mt-3 max-w-2xl text-sm leading-relaxed">
              Not every business moves through all six stages, and the sequence may vary by financing type. This is a general framework, not a guarantee of outcome.
            </p>
          </div>

          <div className="space-y-px border border-[#e5e5e5] rounded-2xl overflow-hidden">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="grid grid-cols-1 md:grid-cols-[6rem_1fr] bg-[#f5f5f5] border-b border-[#e5e5e5] last:border-b-0 group"
              >
                {/* Step number column */}
                <div className="flex items-start md:items-center justify-start md:justify-center px-6 pt-6 pb-0 md:py-8 md:border-r border-[#e5e5e5]">
                  <span
                    className="text-2xl font-bold tracking-tight tabular-nums"
                    style={{ color: "#0f0f0f", fontVariantNumeric: "tabular-nums" }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content column */}
                <div className="px-6 py-6 md:py-8">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] mb-1">
                    {step.label}
                  </p>
                  <h3 className="text-base font-semibold text-[#0f0f0f] mb-2">
                    {step.heading}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed mb-3">
                    {step.body}
                  </p>
                  <p className="text-xs text-[#a3a3a3] leading-relaxed border-l-2 border-[#e5e5e5] pl-3">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What ZEO Is / Is Not */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-2">
              Clarity
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f]" style={{ textWrap: "balance" } as React.CSSProperties}>
              Understanding exactly what ZEO is — and is not
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ZEO IS NOT */}
            <div className="rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#e5e5e5] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a3a3a3] inline-block" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-[#737373] uppercase tracking-wider text-[0.7rem]">
                  ZEO Is Not
                </h3>
              </div>
              <ul className="divide-y divide-[#e5e5e5]">
                {[
                  { label: "A bank or lender", desc: "ZEO does not originate, fund, or service any loans." },
                  { label: "An SBA lender or agency", desc: "ZEO has no affiliation with the U.S. Small Business Administration." },
                  { label: "A loan broker", desc: "ZEO does not submit applications to lenders on your behalf or negotiate terms." },
                  { label: "A financial advisor", desc: "Nothing on ZEO constitutes financial, legal, tax, or investment advice." },
                  { label: "A guarantor of rates or approval", desc: "All terms and decisions are set solely by third-party providers." },
                ].map((item) => (
                  <li key={item.label} className="px-6 py-4">
                    <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{item.label}</p>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ZEO IS */}
            <div className="rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#e5e5e5] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0f0f0f] inline-block" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wider text-[0.7rem]">
                  ZEO Is
                </h3>
              </div>
              <ul className="divide-y divide-[#e5e5e5]">
                {[
                  { label: "A financing education platform", desc: "Plain-language explainers on SBA programs, working capital, factoring, acquisition loans, and more." },
                  { label: "A comparison resource", desc: "Side-by-side breakdowns of how different financing structures work, their tradeoffs, and typical use cases." },
                  { label: "A referral marketplace", desc: "Connections to third-party providers whose stated criteria may be relevant to your situation." },
                  { label: "A preparation tool", desc: "Document checklists, calculators, and intake tools that help you enter lender conversations ready." },
                  { label: "An independent resource", desc: "ZEO is not affiliated with any single lender, bank, or government program." },
                ].map((item) => (
                  <li key={item.label} className="px-6 py-4">
                    <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{item.label}</p>
                    <p className="text-xs text-[#737373] leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Usage */}
      <section className="py-16 border-t border-[#e5e5e5] bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-2">
              Your Information
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>
              How ZEO uses the data you provide
            </h2>
            <p className="text-[#737373] text-sm leading-relaxed mb-6">
              When you use ZEO's intake forms, calculators, or comparison tools, you may provide information about your business — revenue, time in business, purpose of financing, and similar data. Here is how that information is used.
            </p>

            <div className="space-y-4">
              {[
                {
                  heading: "To surface relevant financing paths",
                  body: "Your intake information helps ZEO's tools identify which financing structures may be worth exploring based on your situation. This is informational, not a credit decision or approval.",
                },
                {
                  heading: "To connect you with third-party providers",
                  body: "If you choose to be referred to a financing provider, relevant information is shared with that provider for their intake and underwriting processes. Each provider's use of your data is governed by their own privacy policy.",
                },
                {
                  heading: "To improve ZEO's tools and content",
                  body: "Aggregate, de-identified data may be used to improve ZEO's educational resources, comparison tools, and matching logic. Individual data is not sold to third parties for marketing purposes.",
                },
                {
                  heading: "No hard credit pulls by ZEO",
                  body: "ZEO does not pull your credit report. If a third-party provider performs a credit inquiry as part of their application process, that is governed by their policies and disclosures.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-4"
                >
                  <h3 className="text-sm font-semibold text-[#0f0f0f] mb-1">{item.heading}</h3>
                  <p className="text-xs text-[#737373] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#a3a3a3] mt-6 leading-relaxed">
              For full details, review ZEO's{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-[#737373] transition-colors">
                Privacy Policy
              </Link>
              . If you have questions about data handling, contact{" "}
              <a href="mailto:privacy@zeo.co" className="underline underline-offset-2 hover:text-[#737373] transition-colors">
                privacy@zeo.co
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Common Questions About How ZEO Works"
        items={faqItems}
      />

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-10">
        <ProductDisclaimer type="general" />
      </div>

      <CTASection
        headline="Ready to understand your financing options?"
        subtext="Use ZEO's tools to explore which financing paths may be worth pursuing — with no hard credit pull and no commitment required."
        primaryLabel="Start Your Intake"
        primaryHref="/apply"
        secondaryLabel="Browse Financing Types"
        secondaryHref="/financing"
      />
    </>
  );
}

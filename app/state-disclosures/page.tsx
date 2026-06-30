import PageHero from "@/components/ui/PageHero";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import CTASection from "@/components/ui/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "State Disclosures | ZEO.co",
  description:
    "State-specific availability notices, licensing posture, and regulatory disclosures for ZEO.co's commercial financing referral marketplace.",
  path: "/state-disclosures",
  noIndex: false,
});

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "State Disclosures | ZEO.co",
  description:
    "State-specific availability notices, licensing posture, and regulatory disclosures for ZEO.co's commercial financing referral marketplace.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co"}/state-disclosures`,
};

// ── Section label ──────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#0f0f0f] font-mono mb-4">
      {children}
    </p>
  );
}

// ── Section divider ────────────────────────────────────────────────────────────
function Divider() {
  return <hr className="border-t border-[#e5e5e5] my-10" />;
}

// ── Inline info block ──────────────────────────────────────────────────────────
function InfoBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] p-5 text-sm text-[#737373] leading-relaxed">
      {children}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function StateDisclosuresPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <JsonLd data={pageSchema} />

      <PageHero
        breadcrumbs={[{ label: "State Disclosures" }]}
        eyebrow="Legal &amp; Compliance"
        title="State Disclosures"
        subtitle="Important notices regarding the availability of ZEO.co's services by jurisdiction, our licensing posture, and the responsibilities of third-party financing providers."
        compact
      />

      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">

        {/* ── General Availability ─────────────────────────────────────────── */}
        <section aria-labelledby="availability-heading">
          <SectionLabel>General Availability</SectionLabel>
          <h2
            id="availability-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            Not available in all states
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            ZEO.co operates a commercial financing referral marketplace. The
            products, services, and referral connections available through this
            platform may not be offered in every U.S. state or territory.
            Availability of specific financing products is subject to applicable
            state law, the licensing status of the financing providers in
            ZEO.co&apos;s network, and the eligibility criteria of each
            individual provider.
          </p>
          <p className="text-sm text-[#737373] leading-relaxed">
            Submitting an inquiry through ZEO.co does not guarantee the
            availability of any particular financing product in your
            jurisdiction. If your business is located in a state where a
            requested product is unavailable or where applicable law limits our
            ability to make referrals, you will be notified and no further
            action will be taken on your behalf without your consent.
          </p>
        </section>

        <Divider />

        {/* ── No Lending License ───────────────────────────────────────────── */}
        <section aria-labelledby="licensing-heading">
          <SectionLabel>Licensing Posture</SectionLabel>
          <h2
            id="licensing-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            ZEO.co does not hold a lending license
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            ZEO.co is not a lender, bank, credit union, or licensed finance
            lender under any state or federal law unless expressly stated in
            writing for a specific product or jurisdiction. ZEO.co does not
            originate, underwrite, fund, or service commercial loans or other
            credit products. ZEO.co does not make credit decisions.
          </p>
          <InfoBlock>
            Any statement on this site referencing a financing amount, rate,
            term, or product description is for illustrative purposes only and
            does not constitute a loan offer, commitment to lend, or guarantee
            of credit approval. All such decisions rest solely with the
            individual financing providers in ZEO.co&apos;s network.
          </InfoBlock>
          <p className="mt-5 text-sm text-[#737373] leading-relaxed">
            Where state law requires a lender&apos;s license or other
            authorization in order to solicit, arrange, or broker commercial
            financing transactions, ZEO.co will only operate within the scope
            permitted by applicable law. In some jurisdictions this may mean
            ZEO.co declines to accept inquiries from businesses located there
            until appropriate authorization is obtained.
          </p>
        </section>

        <Divider />

        {/* ── Referral Marketplace ─────────────────────────────────────────── */}
        <section aria-labelledby="marketplace-heading">
          <SectionLabel>Referral Marketplace</SectionLabel>
          <h2
            id="marketplace-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            ZEO.co operates as a referral marketplace
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            ZEO.co connects business owners seeking commercial financing with a
            network of independent third-party financing providers, which may
            include licensed lenders, merchant cash advance companies, factors,
            equipment lessors, SBA-preferred lenders, private credit funds, and
            other financing sources. ZEO.co acts as an intermediary only.
          </p>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            When you submit an inquiry through ZEO.co and are matched with a
            provider, the transaction you ultimately enter into is between you
            and that provider — not between you and ZEO.co. The terms, rates,
            fees, and conditions of any financing are set exclusively by the
            provider.
          </p>
          <p className="text-sm text-[#737373] leading-relaxed">
            ZEO.co may receive compensation from financing providers when a
            connection results in a completed transaction. This compensation
            does not affect the financing terms you receive directly and does
            not create a fiduciary relationship between ZEO.co and the
            business owner.
          </p>
        </section>

        <Divider />

        {/* ── State-Law Limitations ────────────────────────────────────────── */}
        <section aria-labelledby="state-law-heading">
          <SectionLabel>State-Law Limitations</SectionLabel>
          <h2
            id="state-law-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            Impact of state law on available products
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            State laws vary significantly in how they treat commercial financing
            products, broker activity, and disclosure requirements. Some states
            have enacted commercial financing disclosure laws, broker
            registration requirements, usury caps applicable to commercial
            transactions, or other regulations that affect which products can be
            offered and on what terms.
          </p>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            These regulatory differences may result in the following depending
            on your state of business:
          </p>
          <ul className="space-y-3 mb-5">
            {[
              "Certain product types may be unavailable to businesses in your jurisdiction.",
              "Additional disclosures may be required before a provider can extend an offer.",
              "Rate caps or fee limitations may restrict the products providers in our network can offer in your state.",
              "ZEO.co may decline to accept or forward inquiries from businesses in states where doing so would require a license or authorization ZEO.co does not currently hold.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#737373] leading-relaxed">
                <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#0f0f0f] opacity-70" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#737373] leading-relaxed">
            State-specific regulatory requirements evolve. ZEO.co makes
            reasonable efforts to stay current with applicable law but does not
            warrant that the information on this page reflects the most recent
            legislative or regulatory changes in every jurisdiction. Businesses
            with questions about whether ZEO.co can assist them should contact{" "}
            <Link
              href="mailto:compliance@zeo.co"
              className="text-[#0f0f0f] hover:text-[#333333] transition-colors font-mono"
            >
              compliance@zeo.co
            </Link>
            .
          </p>
        </section>

        <Divider />

        {/* ── Provider Responsibility ──────────────────────────────────────── */}
        <section aria-labelledby="provider-responsibility-heading">
          <SectionLabel>Provider Responsibility</SectionLabel>
          <h2
            id="provider-responsibility-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            State disclosures are the responsibility of the financing provider
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            Where state law requires that specific disclosures be provided to a
            commercial financing applicant — including cost-of-capital
            disclosures, annual percentage rate disclosures, prepayment
            disclosures, or any other mandated disclosure — those disclosures
            are the legal responsibility of the financing provider that is
            extending the offer, not ZEO.co.
          </p>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            Each financing provider in ZEO.co&apos;s network is independently
            responsible for determining its own licensing obligations, disclosure
            obligations, and compliance requirements in the states where it
            operates. ZEO.co does not verify, guarantee, or warrant the
            regulatory compliance of third-party providers.
          </p>
          <InfoBlock>
            If you believe a financing provider connected to you through
            ZEO.co has failed to provide a disclosure required by applicable
            state law, please contact{" "}
            <Link
              href="mailto:compliance@zeo.co"
              className="text-[#0f0f0f] hover:text-[#333333] transition-colors font-mono"
            >
              compliance@zeo.co
            </Link>{" "}
            and ZEO.co will direct your concern to the appropriate provider.
          </InfoBlock>
        </section>

        <Divider />

        {/* ── State-Specific Pages ─────────────────────────────────────────── */}
        <section aria-labelledby="state-pages-heading">
          <SectionLabel>State-Specific Notices</SectionLabel>
          <h2
            id="state-pages-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            Additional disclosures by state
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-6">
            Certain states have specific statutory or regulatory requirements
            that necessitate additional disclosures beyond those provided on
            this page. The following state-specific disclosure pages are
            available:
          </p>

          <div className="rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] divide-y divide-[#e5e5e5]">
            <Link
              href="/state-disclosures/california"
              className="flex items-center justify-between px-5 py-4 group hover:bg-[#ffffff] transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-[#0f0f0f] group-hover:text-[#333333] transition-colors">
                  California
                </p>
                <p className="text-xs text-[#a3a3a3] mt-0.5">
                  CCFPL / SB 1235 commercial financing disclosure framework
                </p>
              </div>
              <svg
                className="flex-shrink-0 w-4 h-4 text-[#a3a3a3] group-hover:text-[#333333] transition-colors"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 3L11 8L5 13"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <p className="mt-5 text-xs text-[#a3a3a3] leading-relaxed">
            Additional state-specific pages will be added as regulatory
            requirements expand. If you have a question about a state not listed
            above, contact{" "}
            <Link
              href="mailto:compliance@zeo.co"
              className="text-[#0f0f0f] hover:text-[#333333] transition-colors font-mono"
            >
              compliance@zeo.co
            </Link>
            .
          </p>
        </section>

        <Divider />

        {/* ── Contact ──────────────────────────────────────────────────────── */}
        <section aria-labelledby="compliance-contact-heading">
          <SectionLabel>Compliance Contact</SectionLabel>
          <h2
            id="compliance-contact-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            Questions about state availability or compliance
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            For questions about whether ZEO.co can assist businesses in a
            specific state, licensing inquiries, regulatory concerns, or to
            report a compliance issue with a provider in our network, contact
            our compliance team directly.
          </p>
          <div className="rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] font-mono mb-1">
                Compliance
              </p>
              <Link
                href="mailto:compliance@zeo.co"
                className="text-sm font-medium text-[#0f0f0f] hover:text-[#333333] transition-colors font-mono"
              >
                compliance@zeo.co
              </Link>
            </div>
            <p className="text-xs text-[#a3a3a3] leading-relaxed max-w-xs">
              Please include the state at issue, a description of your question
              or concern, and any relevant details about the product or provider
              involved.
            </p>
          </div>
        </section>

        <Divider />

        <p className="text-xs text-[#a3a3a3] leading-relaxed">
          Last reviewed: June 2025. ZEO.co reserves the right to update these
          disclosures at any time. Changes are effective upon posting. Continued
          use of ZEO.co&apos;s services following any update constitutes
          acceptance of the revised disclosures.
        </p>

        <div className="mt-8">
          <ProductDisclaimer type="general" />
        </div>
      </div>

      <CTASection
        headline="Questions about financing options in your state?"
        subtext="Our team can help clarify what products are available for your business and what to expect in the process."
        primaryLabel="Talk to a Specialist"
        primaryHref="/contact"
        secondaryLabel="How It Works"
        secondaryHref="/how-it-works"
        variant="dark"
      />
    </div>
  );
}

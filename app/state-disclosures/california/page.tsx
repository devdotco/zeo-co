import PageHero from "@/components/ui/PageHero";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import CTASection from "@/components/ui/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "California Commercial Financing Disclosures | ZEO.co",
  description:
    "California-specific commercial financing disclosures for ZEO.co, including the company's posture under the California Financing Law, the CCFPL, and SB 1235 disclosure requirements.",
  path: "/state-disclosures/california",
  noIndex: false,
});

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "California Commercial Financing Disclosures | ZEO.co",
  description:
    "California-specific commercial financing disclosures for ZEO.co under the CCFPL and SB 1235.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co"}/state-disclosures/california`,
};

// ── Section label ──────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#22c55e] font-mono mb-4">
      {children}
    </p>
  );
}

// ── Section divider ────────────────────────────────────────────────────────────
function Divider() {
  return <hr className="border-t border-[#1e2620] my-10" />;
}

// ── Inline info block ──────────────────────────────────────────────────────────
function InfoBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#1e2620] bg-[#111512] p-5 text-sm text-[#9aaa98] leading-relaxed">
      {children}
    </div>
  );
}

// ── Stat row for CCFPL disclosure items ───────────────────────────────────────
function DisclosureItem({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-x-5 gap-y-1 border-t border-[#1e2620] pt-4">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#6b7e69] font-mono pt-0.5">
        {label}
      </p>
      <p className="text-sm text-[#9aaa98] leading-relaxed">{description}</p>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function CaliforniaDisclosuresPage() {
  return (
    <div className="bg-[#0a0d0b] min-h-screen">
      <JsonLd data={pageSchema} />

      <PageHero
        breadcrumbs={[
          { label: "State Disclosures", href: "/state-disclosures" },
          { label: "California" },
        ]}
        eyebrow="Legal &amp; Compliance — California"
        title="California Commercial Financing Disclosures"
        subtitle="Disclosures specific to California law, including ZEO.co's posture under the California Financing Law (CFL) and the California Consumer Financial Protection Law (CCFPL), and a plain-language explanation of SB 1235 requirements."
        compact
      />

      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">

        {/* ── COUNSEL WARNING BOX ─────────────────────────────────────────── */}
        <div
          className="rounded-lg border border-amber-500/40 bg-amber-500/[0.07] p-5 mb-10"
          role="alert"
          aria-label="Legal review notice"
        >
          <div className="flex items-start gap-3">
            <svg
              className="flex-shrink-0 mt-0.5 w-5 h-5 text-amber-400"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3.5L17 16.5H3L10 3.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M10 9V12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="10" cy="14" r="0.75" fill="currentColor" />
            </svg>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-amber-400 font-mono mb-1.5">
                Counsel Review Recommended Before Publication
              </p>
              <p className="text-sm text-amber-200/80 leading-relaxed">
                The content on this page is intended as a general framework and
                has not been reviewed by legal counsel. California commercial
                financing law is complex, evolving, and subject to regulatory
                interpretation by the Department of Financial Protection and
                Innovation (DFPI). Before publishing or relying on any
                disclosure language contained here, ZEO.co should obtain a
                review by qualified California financial services counsel
                familiar with the CCFPL, the California Financing Law, and SB
                1235 implementing regulations. This notice applies to the entire
                contents of this page.
              </p>
            </div>
          </div>
        </div>

        {/* ── CFL Licensing Position ───────────────────────────────────────── */}
        <section aria-labelledby="cfl-heading">
          <SectionLabel>California Financing Law</SectionLabel>
          <h2
            id="cfl-heading"
            className="text-lg font-semibold text-[#eef2ec] mb-3"
          >
            ZEO.co is not licensed under the California Financing Law
          </h2>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-5">
            ZEO.co does not hold a license issued by the California Department
            of Financial Protection and Innovation (DFPI) under the California
            Financing Law (Cal. Fin. Code § 22000 et seq.) unless expressly
            stated in a separate written notice applicable to a specific product
            or service. The California Financing Law generally requires licenses
            for persons who engage in the business of making or brokering
            consumer loans or, in certain circumstances, commercial loans to
            California residents.
          </p>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-5">
            ZEO.co does not make commercial loans. ZEO.co does not accept loan
            applications, underwrite credit, set interest rates or fees, fund
            transactions, or service loan accounts. ZEO.co operates as a
            referral marketplace that connects business owners seeking
            commercial financing with independent third-party financing
            providers that are themselves licensed, exempt, or otherwise
            authorized to operate under applicable California law.
          </p>
          <InfoBlock>
            Whether ZEO.co&apos;s referral activity in California constitutes
            brokering under the CFL is a legal question that depends on the
            specific nature of the activity, applicable exemptions, and current
            DFPI interpretation. This determination should be made with
            qualified legal counsel before ZEO.co solicits California commercial
            financing inquiries at scale.
          </InfoBlock>
        </section>

        <Divider />

        {/* ── Referral to Licensed/Exempt Providers ────────────────────────── */}
        <section aria-labelledby="referral-heading">
          <SectionLabel>Referral Activity</SectionLabel>
          <h2
            id="referral-heading"
            className="text-lg font-semibold text-[#eef2ec] mb-3"
          >
            Referrals to licensed or exempt providers only
          </h2>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-5">
            Where ZEO.co connects California businesses with financing
            providers, ZEO.co endeavors to refer only to providers that are
            either (a) licensed under the California Financing Law or another
            applicable California or federal regulatory framework, or (b)
            operating under a recognized exemption from California licensing
            requirements.
          </p>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-5">
            Examples of provider types that may qualify for an exemption from
            the California Financing Law include, without limitation:
          </p>
          <ul className="space-y-3 mb-5">
            {[
              "Banks, credit unions, and thrift institutions chartered under federal or state law.",
              "Companies operating under the federal Bank Holding Company Act or similar federal oversight.",
              "SBA-licensed Small Business Investment Companies (SBICs) and SBA-preferred lenders making SBA-guaranteed loans.",
              "Providers whose commercial financing activity falls within an express statutory exemption under Cal. Fin. Code § 22050.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-[#9aaa98] leading-relaxed"
              >
                <span
                  className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[#22c55e] opacity-70"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#9aaa98] leading-relaxed">
            ZEO.co does not independently verify the current licensure or exempt
            status of every provider in its network at the time of each
            referral. Each provider is independently responsible for maintaining
            any required authorizations. If you have concerns about a specific
            provider&apos;s authorization to operate in California, contact{" "}
            <Link
              href="mailto:compliance@zeo.co"
              className="text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono"
            >
              compliance@zeo.co
            </Link>
            .
          </p>
        </section>

        <Divider />

        {/* ── Provider Disclosure Responsibility ───────────────────────────── */}
        <section aria-labelledby="provider-disclosure-heading">
          <SectionLabel>Disclosure Responsibility</SectionLabel>
          <h2
            id="provider-disclosure-heading"
            className="text-lg font-semibold text-[#eef2ec] mb-3"
          >
            Required California disclosures are the provider&apos;s responsibility
          </h2>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-5">
            California law — specifically the California Consumer Financial
            Protection Law (CCFPL) as amended by SB 1235 and its implementing
            regulations — requires that covered providers of commercial
            financing deliver specific written disclosures to commercial
            financing recipients before consummating certain covered
            transactions. These requirements are described in detail in the
            section below.
          </p>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-5">
            Because ZEO.co does not extend, offer, or consummate commercial
            financing transactions, ZEO.co is not the &quot;provider&quot; required to
            deliver these disclosures under the CCFPL. The disclosure obligation
            falls on the financing provider that makes the specific offer to
            your business.
          </p>
          <InfoBlock>
            If you receive a commercial financing offer as a result of a
            referral from ZEO.co and the provider has not delivered the
            disclosures required by California law before asking you to sign,
            you should request those disclosures before proceeding. You may
            also contact the DFPI at{" "}
            <Link
              href="https://dfpi.ca.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono"
            >
              dfpi.ca.gov
            </Link>{" "}
            or notify ZEO.co at{" "}
            <Link
              href="mailto:compliance@zeo.co"
              className="text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono"
            >
              compliance@zeo.co
            </Link>
            .
          </InfoBlock>
        </section>

        <Divider />

        {/* ── CA Inquiry Limitations ───────────────────────────────────────── */}
        <section aria-labelledby="ca-limitations-heading">
          <SectionLabel>Limitations on California Inquiries</SectionLabel>
          <h2
            id="ca-limitations-heading"
            className="text-lg font-semibold text-[#eef2ec] mb-3"
          >
            ZEO.co may decline inquiries from California businesses
          </h2>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-5">
            Where applicable California law requires a license, registration, or
            other authorization that ZEO.co does not currently hold in order to
            accept or forward a commercial financing inquiry, ZEO.co reserves
            the right to decline that inquiry and take no further action. In
            such cases, ZEO.co will notify the inquiring business that it is
            unable to assist.
          </p>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-5">
            This posture may apply to specific product types, transaction
            structures, or categories of activity that, based on ZEO.co&apos;s
            current legal assessment, would require authorization ZEO.co does
            not hold. ZEO.co&apos;s ability to assist California businesses may
            change over time as the company obtains applicable licenses or as
            regulatory guidance evolves.
          </p>
          <p className="text-sm text-[#9aaa98] leading-relaxed">
            California business owners with questions about whether ZEO.co can
            assist them should contact{" "}
            <Link
              href="mailto:compliance@zeo.co"
              className="text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono"
            >
              compliance@zeo.co
            </Link>{" "}
            before submitting an inquiry.
          </p>
        </section>

        <Divider />

        {/* ── CCFPL / SB 1235 Plain-Language Explanation ───────────────────── */}
        <section aria-labelledby="ccfpl-heading">
          <SectionLabel>CCFPL / SB 1235 — Plain-Language Summary</SectionLabel>
          <h2
            id="ccfpl-heading"
            className="text-lg font-semibold text-[#eef2ec] mb-3"
          >
            Understanding California&apos;s commercial financing disclosure law
          </h2>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-6">
            California Senate Bill 1235 (2018), codified in the CCFPL and
            implemented through DFPI regulations, requires that covered
            commercial financing providers give California businesses specific
            written disclosures before completing certain transactions. The
            following is a plain-language explanation of what those disclosures
            are and why they matter.
          </p>

          {/* What transactions are covered */}
          <div className="rounded-lg border border-[#1e2620] bg-[#111512] p-5 mb-6">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#6b7e69] font-mono mb-3">
              Which transactions are covered?
            </p>
            <p className="text-sm text-[#9aaa98] leading-relaxed">
              The CCFPL disclosure rules apply to commercial financing offers of
              $500,000 or less (as of current regulations) extended to a person
              primarily for business, investment, or commercial purposes.
              Covered products include business loans, merchant cash advances
              (MCAs), factoring (accounts receivable purchases), equipment
              leases, and other commercial financing arrangements. Certain
              depository institution providers and some other categories may be
              exempt. The transaction threshold and exemptions are subject to
              change by regulation.
            </p>
          </div>

          {/* The five required disclosures */}
          <h3 className="text-base font-semibold text-[#eef2ec] mb-5">
            The five disclosures a provider must give you
          </h3>
          <div className="space-y-4">
            <DisclosureItem
              label="Total Cost"
              description="The total amount you will pay over the life of the financing, expressed in dollars. This is the total of all payments you are required to make — principal, interest, fees, and any other charges — so you can compare the true cost of different offers side by side."
            />
            <DisclosureItem
              label="Disbursed Amount"
              description="The total amount of funds that will actually be disbursed to your business. In some products (such as MCAs or certain factored advances), fees may be deducted from the advance before you receive it, meaning the amount you receive is less than the face amount of the financing. This disclosure makes that difference explicit."
            />
            <DisclosureItem
              label="Finance Charge"
              description="The total dollar cost of the financing — meaning the difference between what you receive and what you pay back. This is expressed as a single dollar figure and allows you to understand the absolute cost of the capital, not just the rate."
            />
            <DisclosureItem
              label="Annual Percentage Rate (APR)"
              description="For products where an APR can be calculated (loans with fixed terms and fixed payment schedules), the provider must disclose the APR. The APR annualizes the finance charge relative to the amount financed and the term, giving a standardized metric for comparison. For open-ended products or certain revenue-based products where a fixed term cannot be determined, different metrics may apply."
            />
            <DisclosureItem
              label="Prepayment"
              description="Whether you can pay off the financing early, and if so, whether early repayment results in a reduced total cost or whether the full finance charge is owed regardless. Some products — particularly MCAs and certain fixed-fee structures — do not reduce the total amount owed upon early payoff. This disclosure tells you exactly what happens if you pay early."
            />
          </div>

          <div className="mt-8 rounded-lg border border-[#1e2620] bg-[#111512] p-5">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#6b7e69] font-mono mb-3">
              Payment Amount and Frequency
            </p>
            <p className="text-sm text-[#9aaa98] leading-relaxed">
              In addition to the five core disclosures above, providers are also
              required to disclose the payment amount (or estimated payment
              amount for variable-payment products) and the payment frequency.
              For products with variable or estimated payments — such as
              revenue-based repayment or factoring arrangements — the provider
              must use a methodology specified in the regulations to present an
              estimated payment figure.
            </p>
          </div>

          <div className="mt-6 rounded-lg border border-[#1e2620] bg-[#111512] p-5">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#6b7e69] font-mono mb-3">
              What these disclosures do not guarantee
            </p>
            <p className="text-sm text-[#9aaa98] leading-relaxed">
              SB 1235 disclosures are informational. They do not cap rates or
              fees, prohibit any particular product, or create a right to a
              specific financing term. Their purpose is transparency: to ensure
              that California business owners receive standardized information
              that makes it possible to compare commercial financing offers on
              an apples-to-apples basis before signing.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── DFPI Contact ─────────────────────────────────────────────────── */}
        <section aria-labelledby="dfpi-heading">
          <SectionLabel>California Regulator</SectionLabel>
          <h2
            id="dfpi-heading"
            className="text-lg font-semibold text-[#eef2ec] mb-3"
          >
            California Department of Financial Protection and Innovation
          </h2>
          <p className="text-sm text-[#9aaa98] leading-relaxed mb-5">
            The DFPI is the California state agency responsible for licensing,
            regulating, and enforcing the California Financing Law, the CCFPL,
            and related financial services statutes. If you have a complaint
            against a commercial financing provider operating in California, or
            if you believe a provider has violated your disclosure rights under
            SB 1235, you may contact the DFPI directly.
          </p>
          <div className="rounded-lg border border-[#1e2620] bg-[#111512] p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-2">
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#6b7e69] font-mono mb-1">
                  DFPI Website
                </p>
                <Link
                  href="https://dfpi.ca.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono"
                >
                  dfpi.ca.gov
                </Link>
              </div>
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#6b7e69] font-mono mb-1">
                  File a Complaint
                </p>
                <Link
                  href="https://dfpi.ca.gov/file-a-complaint/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono"
                >
                  dfpi.ca.gov/file-a-complaint
                </Link>
              </div>
            </div>
            <p className="text-xs text-[#6b7e69] leading-relaxed max-w-xs">
              ZEO.co is not affiliated with the DFPI. The links above are
              provided as a resource for California business owners.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Compliance Contact ───────────────────────────────────────────── */}
        <section aria-labelledby="ca-compliance-contact-heading">
          <SectionLabel>Compliance Contact</SectionLabel>
          <h2
            id="ca-compliance-contact-heading"
            className="text-lg font-semibold text-[#eef2ec] mb-3"
          >
            Questions about California disclosures or provider conduct
          </h2>
          <div className="rounded-lg border border-[#1e2620] bg-[#111512] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#6b7e69] font-mono mb-1">
                Compliance
              </p>
              <Link
                href="mailto:compliance@zeo.co"
                className="text-sm font-medium text-[#22c55e] hover:text-[#16a34a] transition-colors font-mono"
              >
                compliance@zeo.co
              </Link>
            </div>
            <p className="text-xs text-[#6b7e69] leading-relaxed max-w-xs">
              Include the provider name, a description of the issue, and any
              documentation you have received. ZEO.co will forward your concern
              to the provider and, where appropriate, review the provider&apos;s
              continued participation in the marketplace.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── Back link ────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-2 mb-10">
          <svg
            className="w-3.5 h-3.5 text-[#6b7e69]"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 2L4 7L9 12"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link
            href="/state-disclosures"
            className="text-xs text-[#6b7e69] hover:text-[#9aaa98] transition-colors"
          >
            All State Disclosures
          </Link>
        </div>

        <p className="text-xs text-[#6b7e69] leading-relaxed mb-8">
          Last reviewed: June 2025. This page is provided for informational
          purposes only and does not constitute legal advice. ZEO.co reserves
          the right to update these disclosures at any time. California
          commercial financing law and DFPI regulations are subject to ongoing
          change; businesses should consult qualified California legal counsel
          for advice specific to their situation.
        </p>

        <ProductDisclaimer type="general" />
      </div>

      <CTASection
        headline="Operating a business in California and need financing?"
        subtext="Let our specialists help clarify what&apos;s available and connect you with providers authorized to operate in California."
        primaryLabel="Talk to a Specialist"
        primaryHref="/contact"
        secondaryLabel="State Disclosures"
        secondaryHref="/state-disclosures"
        variant="dark"
      />
    </div>
  );
}

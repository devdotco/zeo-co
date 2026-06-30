import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import ComparisonTable from "@/components/ui/ComparisonTable";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Lender & Financing Provider Network — ZEO.co",
  description:
    "SBA lenders, factoring companies, equipment finance providers, private credit funds, and MCA originators. Join the ZEO financing provider network, subject to review and agreement.",
  path: "/lenders",
  keywords: [
    "SBA lender partner",
    "factoring company network",
    "equipment finance provider",
    "private credit fund",
    "MCA lender network",
    "commercial lender referral",
  ],
});

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co";

function lenderPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lender & Financing Provider Network — ZEO.co",
    url: `${siteUrl}/lenders`,
    description:
      "ZEO.co financing provider network for SBA lenders, factoring companies, equipment lenders, private credit funds, and MCA originators.",
    isPartOf: { "@type": "WebSite", url: siteUrl, name: "ZEO.co" },
  };
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function SBAIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2" y="9" width="16" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 9V7c0-2.761 2.239-5 5-5s5 2.239 5 5v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M10 12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FactoringIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2" y="3" width="11" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 7h5M5 10h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M15 11l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 14h-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function EquipmentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="5.5" cy="15" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="14.5" cy="15" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 15V8l3.5-4h7l3.5 4v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 4v5h6V4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function PrivateCreditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 2L17 5.5v6c0 4-2.8 6.7-7 7.5-4.2-.8-7-3.5-7-7.5v-6L10 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MCAIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2" y="5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 9h16" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 13h3M13 13h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden>
      <path d="M2 6.5L5 9.5L11 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden>
      <path d="M6.5 2L12 11H1L6.5 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6.5 6v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="6.5" cy="10" r="0.5" fill="currentColor" />
    </svg>
  );
}

// ── Provider Types ────────────────────────────────────────────────────────────

const providerTypes = [
  {
    icon: <SBAIcon />,
    type: "SBA Lenders",
    description:
      "Banks, credit unions, and non-bank lenders participating in SBA 7(a) and 504 programs. ZEO may refer qualified business inquiries for SBA loan consideration to participating SBA-approved lenders.",
    requirements: [
      "SBA-approved lender status required",
      "Participating lender agreement with SBA in effect",
      "Ability to originate in relevant states",
      "Defined minimum deal size and credit profile",
      "CRA or portfolio appetite for small business",
    ],
    commonUses: ["7(a) term loans", "504 CRE / equipment", "SBA Express", "Acquisition financing"],
    note: "SBA program rules govern lender eligibility and conduct. ZEO does not represent lenders in transactions or provide legal or underwriting assistance.",
  },
  {
    icon: <FactoringIcon />,
    type: "Factoring Companies",
    description:
      "Invoice factoring companies, accounts receivable financing providers, and asset-based lenders who purchase or advance against B2B receivables. ZEO may refer factoring inquiries by industry, invoice volume, and receivable profile.",
    requirements: [
      "Commercial factoring capability (not consumer)",
      "Industry specializations preferred (trucking, staffing, healthcare, etc.)",
      "UCC filing authority and process in place",
      "Defined advance rate and fee structure",
      "Recourse and non-recourse programs available",
    ],
    commonUses: ["Invoice factoring", "Spot factoring", "Asset-based lines", "PO financing"],
    note: "Factoring agreements may require commercial financing disclosures in applicable states. Review state-specific requirements with qualified counsel.",
  },
  {
    icon: <EquipmentIcon />,
    type: "Equipment Finance Companies",
    description:
      "Equipment finance companies, leasing companies, and vehicle finance providers. ZEO may refer equipment financing inquiries where a business has a specific equipment acquisition or financing need.",
    requirements: [
      "Commercial equipment focus (not consumer)",
      "Direct origination or broker / dealer network",
      "Defined eligible collateral categories",
      "Credit decisioning in defined timeframes",
      "Section 179 / MACRS planning capability",
    ],
    commonUses: ["Equipment loans", "Finance leases", "Operating leases", "Fleet financing"],
    note: "Equipment financing is asset-secured. ZEO does not provide equipment valuations or title services.",
  },
  {
    icon: <PrivateCreditIcon />,
    type: "Private Credit Funds",
    description:
      "Private credit funds, family offices, specialty finance companies, and non-bank lenders providing direct lending, mezzanine, bridge, or structured credit to middle-market and lower-middle-market businesses.",
    requirements: [
      "Minimum deal size typically $1M+",
      "Direct origination or co-lending capability",
      "Defined credit criteria and sector focus",
      "Internal compliance and accreditation process",
      "Execution certainty with defined timeline",
    ],
    commonUses: ["Senior secured", "Mezzanine debt", "Bridge lending", "Acquisition financing"],
    note: "Private credit products may involve higher rates, complex covenants, and personal guarantees. ZEO does not provide legal, valuation, or investment advisory services.",
  },
  {
    icon: <MCAIcon />,
    type: "MCA & Revenue-Based Providers",
    description:
      "Merchant cash advance companies, revenue-based financing providers, and sales-based financing originators. ZEO applies heightened disclosure standards for high-cost, short-term commercial financing products.",
    requirements: [
      "SBFAA / CDFI compliance in applicable states",
      "APR or equivalent-rate disclosure capability",
      "Reconciliation and prepayment provisions",
      "Clear factor rate to total payback disclosure",
      "No default terms that violate state law",
    ],
    commonUses: ["MCA advances", "Revenue-based financing", "Daily / weekly remittance products"],
    note: "MCA and sales-based financing products may carry very high effective costs. ZEO requires enhanced disclosure for any high-cost commercial financing. ZEO does not refer MCA products to businesses where the implied cost exceeds thresholds set by ZEO's compliance review.",
  },
];

// ── Compliance Requirements ───────────────────────────────────────────────────

const complianceItems = [
  {
    area: "Licensing",
    req: "Providers must confirm applicable state licensing status and maintain required registrations. ZEO may decline to refer inquiries from states where a provider is not licensed or exempt.",
  },
  {
    area: "Disclosure",
    req: "Providers must be capable of delivering applicable commercial financing disclosures (SBFAA, California CFL, Utah DOCA, Virginia, Georgia, and New York) where required by law.",
  },
  {
    area: "Underwriting standards",
    req: "Providers must have documented credit criteria. ZEO does not refer to providers with no defined underwriting process or credit standards.",
  },
  {
    area: "Rate transparency",
    req: "ZEO requires providers to disclose rate or cost information in a manner sufficient for applicants to understand the effective cost of financing. All-in APR or APRC disclosure preferred.",
  },
  {
    area: "No guaranteed approval representations",
    req: "Providers participating in the ZEO network may not represent or imply guaranteed approvals, guaranteed rates, or guaranteed terms in connection with ZEO-referred inquiries.",
  },
  {
    area: "Data use",
    req: "Providers may only use ZEO-referred data for underwriting and financing purposes. Use for marketing unrelated to the referred transaction requires separate written consent.",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────

const lenderFAQ = [
  {
    q: "How does ZEO qualify and route inquiries to lenders?",
    a: "ZEO collects a business financing intake, evaluates the profile against applicable financing types, and may route the inquiry to participating providers based on match criteria including loan type, deal size, industry, geography, and credit profile. ZEO does not guarantee volume or exclusivity to any provider.",
  },
  {
    q: "Is ZEO licensed as a loan broker?",
    a: "ZEO is not a licensed loan broker in most states. ZEO operates as a financing information platform and may route inquiries to third-party providers under applicable exemptions or through licensed intermediaries. Providers should conduct their own legal review of the arrangement under applicable state law.",
  },
  {
    q: "What deal sizes does ZEO primarily see?",
    a: "ZEO receives inquiries across a broad range of deal sizes, from small working capital requests ($25K–$250K) to acquisition financing ($1M+) and private credit ($2.5M+). Providers can specify minimum deal sizes and credit profiles as part of the intake matching criteria.",
  },
  {
    q: "Does ZEO charge lenders a fee per referral?",
    a: "Fee arrangements, if any, are established by separate written agreement. ZEO does not discuss fee terms prior to completing the provider review process.",
  },
  {
    q: "What states does ZEO operate in?",
    a: "ZEO receives inquiries from businesses across the United States. State-specific routing may be limited based on provider licensing, state law requirements, and ZEO's compliance review.",
  },
  {
    q: "How does ZEO handle MCA and high-cost financing referrals?",
    a: "ZEO applies heightened standards to high-cost commercial financing products including MCA and revenue-based financing. This includes disclosure requirements, implied cost thresholds, and compliance review. Providers must demonstrate compliance with applicable state commercial financing disclosure laws before referrals are made.",
  },
];

// ── Lender Inquiry Form ───────────────────────────────────────────────────────

function LenderInquiryForm() {
  return (
    <section className="py-20 border-t border-[#e5e5e5] bg-[#ffffff]" id="lender-inquiry">
      <div className="max-w-2xl mx-auto px-5 lg:px-8">
        <div className="mb-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Provider Inquiry
          </p>
          <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
            Inquire about joining the provider network
          </h2>
          <p className="text-[#737373] text-sm leading-relaxed">
            Submit your company information below. ZEO's partnerships team will review your inquiry and follow up. This is not an agreement or guarantee of a provider relationship.
          </p>
        </div>

        <form
          className="rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 space-y-5"
          action="/api/contact"
          method="post"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lender-name" className="text-xs font-medium text-[#737373]">
                Contact name <span className="text-[#0f0f0f]" aria-hidden>*</span>
              </label>
              <input
                id="lender-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Jane Smith"
                className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lender-company" className="text-xs font-medium text-[#737373]">
                Company / institution name <span className="text-[#0f0f0f]" aria-hidden>*</span>
              </label>
              <input
                id="lender-company"
                type="text"
                name="company"
                autoComplete="organization"
                required
                placeholder="First National Commercial Bank"
                className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="lender-email" className="text-xs font-medium text-[#737373]">
              Business email <span className="text-[#0f0f0f]" aria-hidden>*</span>
            </label>
            <input
              id="lender-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="jane@yourcompany.com"
              className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="lender-type" className="text-xs font-medium text-[#737373]">
              Provider type <span className="text-[#0f0f0f]" aria-hidden>*</span>
            </label>
            <select
              id="lender-type"
              name="providerType"
              required
              defaultValue=""
              className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors appearance-none"
            >
              <option value="" disabled>Select provider type</option>
              <option value="sba">SBA Lender (bank, CU, CDFI, or non-bank)</option>
              <option value="factoring">Invoice Factoring / A/R Finance Company</option>
              <option value="equipment">Equipment Finance or Leasing Company</option>
              <option value="private">Private Credit Fund or Direct Lender</option>
              <option value="mca">MCA / Revenue-Based Financing Provider</option>
              <option value="other">Other commercial financing provider</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lender-min" className="text-xs font-medium text-[#737373]">
                Minimum deal size
              </label>
              <input
                id="lender-min"
                type="text"
                name="minDeal"
                placeholder="e.g. $100,000"
                className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lender-states" className="text-xs font-medium text-[#737373]">
                States you originate in
              </label>
              <input
                id="lender-states"
                type="text"
                name="states"
                placeholder="e.g. Nationwide, or TX, CA, FL"
                className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="lender-message" className="text-xs font-medium text-[#737373]">
              Describe your lending program and target borrower profile
            </label>
            <textarea
              id="lender-message"
              name="message"
              rows={4}
              placeholder="Include product types, typical deal sizes, industries you focus on, credit profile requirements, and any relevant licensing information..."
              className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors resize-none leading-relaxed"
            />
          </div>

          <div className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] p-4 space-y-3">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3]">
              Compliance acknowledgment
            </p>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="complianceAck"
                required
                className="mt-0.5 flex-shrink-0 accent-[#0f0f0f]"
              />
              <span className="text-xs text-[#a3a3a3] leading-relaxed">
                I confirm that our organization holds applicable state licenses or qualifies for applicable exemptions in the states where we originate commercial financing, and that we are capable of delivering required commercial financing disclosures under applicable state law.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#0f0f0f] text-white font-semibold py-3 text-sm hover:bg-[#333333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f0f0f]/40"
          >
            Submit Provider Inquiry
          </button>

          <p className="text-[0.65rem] text-[#a3a3a3] leading-relaxed">
            Submitting this form does not create a provider agreement, guarantee referral volume, or establish any legal relationship between your organization and ZEO.co. All provider relationships are subject to review and written agreement.
          </p>
        </form>
      </div>
    </section>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function LendersPage() {
  return (
    <>
      <JsonLd data={lenderPageSchema()} />

      <PageHero
        breadcrumbs={[{ label: "Lenders" }]}
        eyebrow="Financing Providers"
        title="Join the ZEO Financing Provider Network"
        subtitle="ZEO.co works with SBA lenders, factoring companies, equipment finance providers, private credit funds, and revenue-based financing originators. Provider relationships are subject to compliance review, licensing verification, and separate written agreement."
      />

      {/* Provider Types */}
      <section className="py-20 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Provider Types
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Types of financing providers ZEO works with
            </h2>
            <p className="text-[#737373] text-sm max-w-xl leading-relaxed">
              Each provider type has distinct eligibility, underwriting, and compliance requirements. ZEO evaluates each provider relationship individually.
            </p>
          </div>

          <div className="space-y-4">
            {providerTypes.map((p) => (
              <div key={p.type} className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg border border-[#e5e5e5] bg-[#ffffff] flex items-center justify-center text-[#0f0f0f] flex-shrink-0">
                        {p.icon}
                      </div>
                      <p className="text-sm font-semibold text-[#0f0f0f]">{p.type}</p>
                    </div>
                    <p className="text-xs text-[#737373] leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {p.commonUses.map((u) => (
                        <span
                          key={u}
                          className="text-[0.6rem] font-medium px-2 py-0.5 rounded-full border border-[#e5e5e5] bg-[#ffffff] text-[#a3a3a3]"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-3">
                      Requirements
                    </p>
                    <ul className="space-y-2">
                      {p.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs text-[#a3a3a3]">
                          <span className="text-[#0f0f0f]"><CheckIcon /></span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-1">
                    <div className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] p-4 h-full flex flex-col gap-2">
                      <div className="flex items-start gap-2 text-[#737373]">
                        <WarningIcon />
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.08em]">
                          Compliance note
                        </p>
                      </div>
                      <p className="text-xs text-[#a3a3a3] leading-relaxed">{p.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-20 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Compliance
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Provider compliance requirements
            </h2>
            <p className="text-[#737373] text-sm max-w-xl leading-relaxed">
              All providers in the ZEO network are subject to compliance review. The following requirements apply to all provider types unless otherwise specified in a written agreement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceItems.map((item) => (
              <div key={item.area} className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
                <p className="text-xs font-semibold text-[#0f0f0f] mb-2">{item.area}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.req}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#f5f5f5] bg-[#f5f5f5] p-5 flex items-start gap-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5 text-[#0f0f0f]" aria-hidden>
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="text-xs font-semibold text-[#0f0f0f] mb-1">Ongoing compliance responsibility</p>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Providers are solely responsible for maintaining compliance with applicable federal and state law, including but not limited to TILA, Equal Credit Opportunity Act, state commercial financing disclosure laws, and applicable usury statutes. ZEO does not provide legal compliance services and assumes no responsibility for a provider&apos;s regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Comparison
            </p>
            <h2 className="text-2xl font-semibold text-[#0f0f0f] mb-2">
              Provider types at a glance
            </h2>
            <p className="text-[#737373] text-sm">
              General overview. Actual program parameters and requirements are established per provider agreement.
            </p>
          </div>
          <div className="overflow-x-auto">
            <ComparisonTable
              highlightCol="SBA Lenders"
              columns={["SBA Lenders", "Factoring", "Equipment", "Private Credit", "MCA"]}
              rows={[
                {
                  feature: "Typical deal size",
                  "SBA Lenders": "$50K–$5M+",
                  Factoring: "$10K–$5M+",
                  Equipment: "$10K–$5M+",
                  "Private Credit": "$1M–$50M+",
                  MCA: "$5K–$500K",
                },
                {
                  feature: "Underwriting basis",
                  "SBA Lenders": "SBA SOP + bank credit",
                  Factoring: "Customer creditworthiness",
                  Equipment: "Asset + borrower credit",
                  "Private Credit": "DSCR + asset coverage",
                  MCA: "Revenue / daily receipts",
                },
                {
                  feature: "Licensing required",
                  "SBA Lenders": "SBA-approved",
                  Factoring: "State-specific",
                  Equipment: "State-specific",
                  "Private Credit": "Varies by structure",
                  MCA: "Disclosure laws apply",
                },
                {
                  feature: "Typical close time",
                  "SBA Lenders": "30–90 days",
                  Factoring: "1–5 days",
                  Equipment: "2–10 days",
                  "Private Credit": "7–45 days",
                  MCA: "1–3 days",
                },
                {
                  feature: "Disclosure requirement",
                  "SBA Lenders": "TILA / Reg B",
                  Factoring: "SBFAA / state",
                  Equipment: "SBFAA / state",
                  "Private Credit": "Varies",
                  MCA: "SBFAA required",
                },
              ]}
            />
          </div>
          <p className="text-[0.65rem] text-[#a3a3a3] mt-3">
            General estimates only. Actual program parameters, underwriting, licensing requirements, and disclosure obligations vary significantly. Providers are solely responsible for their own legal compliance.
          </p>
        </div>
      </section>

      <LenderInquiryForm />

      <section className="py-12 border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-4">
          <ProductDisclaimer type="general" />
          <ProductDisclaimer
            custom="ZEO.co does not make credit decisions, does not act as a lender or loan broker in any transaction, and does not guarantee deal flow, referral volume, or financing outcomes to any provider. All provider relationships are governed by separate written agreement. Providers are solely responsible for compliance with applicable federal and state law."
          />
        </div>
      </section>

      <FAQ title="Lender & Provider FAQ" items={lenderFAQ} />

      <CTASection
        headline="Looking for financing, not a provider relationship?"
        subtext="ZEO helps business owners evaluate commercial financing options across SBA, factoring, equipment, and private credit. Not a loan application. Not a lender."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Explore Financing Types"
        secondaryHref="/financing"
      />
    </>
  );
}

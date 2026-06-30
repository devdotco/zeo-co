import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Partner With ZEO.co — Referral Partners, Financing Providers & Brokers",
  description:
    "Join the ZEO.co partner network as a referral partner, financing provider, business broker, or technology vendor. Subject to review and agreement.",
  path: "/partners",
  keywords: [
    "ZEO partner program",
    "business financing referral partner",
    "lender partner",
    "broker network",
    "commercial financing partner",
  ],
});

// ── JSON-LD ───────────────────────────────────────────────────────────────────

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co";

function partnerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Partner With ZEO.co",
    url: `${siteUrl}/partners`,
    description:
      "ZEO.co partner program for referral partners, financing providers, business brokers, and technology vendors.",
    isPartOf: { "@type": "WebSite", url: siteUrl, name: "ZEO.co" },
  };
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function ReferralIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 7h2.5M10 8.5L12 5M10 8.5L12 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4 14c0-2 1.5-3 3-3s3 1 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ProviderIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2" y="5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 5V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 9h16" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 13h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function BrokerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M3 17V7l7-4 7 4v10" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <rect x="7" y="11" width="3" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="10" y="8" width="7" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 11h3M12 14h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="2" y="3" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 17h6M10 15v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M6 9l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 13h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden>
      <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Partner Types ─────────────────────────────────────────────────────────────

const partnerTypes = [
  {
    icon: <ReferralIcon />,
    type: "Referral Partner",
    tag: "Most common",
    tagColor: "text-[#0f0f0f] bg-[#0f2a14] border-[#1a4020]",
    description:
      "Accountants, attorneys, business coaches, and other advisors who regularly work with business owners who may need financing. Refer clients through a tracked link or direct intake.",
    fits: [
      "CPAs and bookkeepers",
      "Business attorneys",
      "Financial advisors",
      "Business coaches",
      "Commercial real estate agents",
    ],
    note: "Referral arrangements are subject to applicable state and federal law. Compensation structures, if any, vary and are established by separate agreement.",
  },
  {
    icon: <ProviderIcon />,
    type: "Financing Provider",
    tag: "Lenders & factors",
    tagColor: "text-[#737373] bg-[#f5f5f5] border-[#e5e5e5]",
    description:
      "Banks, credit unions, non-bank lenders, factoring companies, equipment finance companies, and private credit funds. ZEO may refer qualified inquiries to participating providers subject to underwriting criteria and provider agreements.",
    fits: [
      "SBA-approved lenders",
      "Invoice factoring companies",
      "Equipment finance companies",
      "Private credit funds",
      "Non-bank commercial lenders",
    ],
    note: "Provider relationships require a separate agreement. ZEO does not guarantee volume, exclusivity, or deal flow. All referrals are subject to ZEO's compliance review.",
  },
  {
    icon: <BrokerIcon />,
    type: "Business Broker / Advisor",
    tag: "M&A & advisory",
    tagColor: "text-[#737373] bg-[#f5f5f5] border-[#e5e5e5]",
    description:
      "Business brokers facilitating acquisitions, M&A advisors, and franchise consultants whose clients require acquisition financing, seller note structuring, or working capital in connection with a transaction.",
    fits: [
      "Certified business brokers (CBB/CBI)",
      "M&A advisors",
      "Franchise consultants",
      "Business transition advisors",
      "Intermediaries and deal facilitators",
    ],
    note: "Broker relationships are governed by separate agreement. ZEO does not provide valuation, legal, or M&A advisory services.",
  },
  {
    icon: <TechIcon />,
    type: "Technology Vendor",
    tag: "Integrations & tools",
    tagColor: "text-[#737373] bg-[#f5f5f5] border-[#e5e5e5]",
    description:
      "Software companies, fintech platforms, accounting software providers, and data vendors who serve small and mid-sized businesses and want to explore embedded financing referral flows or data partnerships.",
    fits: [
      "Accounting software providers",
      "ERP and operational platforms",
      "Payroll and HR software",
      "E-commerce platforms",
      "Data and analytics providers",
    ],
    note: "Technology partnerships are reviewed individually. Integration scope, data sharing, and compensation are established by separate agreement.",
  },
];

// ── How It Works ──────────────────────────────────────────────────────────────

const referralSteps = [
  {
    label: "Submit inquiry",
    desc: "Fill out the partner inquiry form below. Include your company, partner type, and how you typically work with business owners.",
  },
  {
    label: "ZEO review",
    desc: "Our partnerships team reviews your inquiry. We evaluate fit, compliance posture, and applicable licensing requirements.",
  },
  {
    label: "Agreement",
    desc: "If there's a fit, we establish the relationship via a formal agreement covering scope, compensation if applicable, and compliance obligations.",
  },
  {
    label: "Activate",
    desc: "Receive your referral link, intake process documentation, and any co-branded or white-label materials as applicable under your agreement.",
  },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────

const partnerFAQ = [
  {
    q: "Does ZEO pay referral fees?",
    a: "Referral compensation, if any, is governed by a separate written agreement and is subject to applicable state and federal law. Not all partner types involve monetary compensation. ZEO does not discuss compensation terms prior to completing the partner review process.",
  },
  {
    q: "Is there a cost to join the partner network?",
    a: "There is no application fee to inquire about a partner relationship. Specific program terms depend on partner type and are established by agreement.",
  },
  {
    q: "Can I white-label ZEO's intake process?",
    a: "White-label and co-branded arrangements are available for select technology and referral partners. These are established by separate agreement and subject to ZEO's compliance review.",
  },
  {
    q: "What types of businesses does ZEO work with?",
    a: "ZEO focuses on commercial business financing. We do not assist with consumer loans, residential mortgages, personal loans, or student loans. Referred businesses should have a commercial financing need.",
  },
  {
    q: "Does ZEO guarantee that referred businesses will receive financing?",
    a: "No. ZEO is not a lender and does not guarantee approval, specific terms, or funding for any business. All financing is subject to underwriting and approval by the applicable third-party provider.",
  },
  {
    q: "How do I track referrals I send to ZEO?",
    a: "Referral tracking is established as part of the partner agreement and onboarding process. Specifics depend on partner type and technical integration.",
  },
];

// ── Partner Inquiry Form ──────────────────────────────────────────────────────

function PartnerInquiryForm() {
  return (
    <section className="py-20 border-t border-[#e5e5e5] bg-[#ffffff]" id="partner-inquiry">
      <div className="max-w-2xl mx-auto px-5 lg:px-8">
        <div className="mb-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
            Partner Inquiry
          </p>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Start a partner conversation
          </h2>
          <p className="text-[#737373] text-sm leading-relaxed">
            Submit your information and a member of the ZEO partnerships team will follow up. This is an inquiry, not a binding agreement.
          </p>
        </div>

        <form
          className="rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 space-y-5"
          action="/api/contact"
          method="post"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="partner-name" className="text-xs font-medium text-[#737373]">
                Full name <span className="text-[#0f0f0f]" aria-hidden>*</span>
              </label>
              <input
                id="partner-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Jane Smith"
                className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#3a4a38] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="partner-company" className="text-xs font-medium text-[#737373]">
                Company name <span className="text-[#0f0f0f]" aria-hidden>*</span>
              </label>
              <input
                id="partner-company"
                type="text"
                name="company"
                autoComplete="organization"
                required
                placeholder="Acme Advisors LLC"
                className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#3a4a38] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="partner-email" className="text-xs font-medium text-[#737373]">
              Business email <span className="text-[#0f0f0f]" aria-hidden>*</span>
            </label>
            <input
              id="partner-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="jane@yourcompany.com"
              className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#3a4a38] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="partner-type" className="text-xs font-medium text-[#737373]">
              Partner type <span className="text-[#0f0f0f]" aria-hidden>*</span>
            </label>
            <select
              id="partner-type"
              name="partnerType"
              required
              defaultValue=""
              className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors appearance-none"
            >
              <option value="" disabled>Select partner type</option>
              <option value="referral">Referral Partner (CPA, attorney, advisor)</option>
              <option value="provider">Financing Provider (lender, factor, fund)</option>
              <option value="broker">Business Broker / M&A Advisor</option>
              <option value="tech">Technology Vendor / Platform</option>
              <option value="other">Other — explain below</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="partner-message" className="text-xs font-medium text-[#737373]">
              How do you typically work with business owners?
            </label>
            <textarea
              id="partner-message"
              name="message"
              rows={4}
              placeholder="Briefly describe your business, the clients you serve, and what you are hoping to accomplish through a ZEO partnership..."
              className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-3 py-2.5 text-sm text-[#0f0f0f] placeholder:text-[#3a4a38] focus:outline-none focus:border-[#0f0f0f]/50 focus:ring-1 focus:ring-[#0f0f0f]/20 transition-colors resize-none leading-relaxed"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#0f0f0f] text-black font-semibold py-3 text-sm hover:bg-[#333333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f0f0f]/40"
          >
            Submit Partner Inquiry
          </button>

          <p className="text-[0.65rem] text-[#3a4a38] leading-relaxed">
            Submitting this form does not create a partnership agreement, referral arrangement, or compensation obligation. All partnership terms are established by separate written agreement after review.
          </p>
        </form>
      </div>
    </section>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function PartnersPage() {
  return (
    <>
      <JsonLd data={partnerSchema()} />

      <PageHero
        breadcrumbs={[{ label: "Partners" }]}
        eyebrow="Partner Network"
        title="Partner With ZEO.co"
        subtitle="ZEO works with referral partners, financing providers, business brokers, and technology vendors to expand access to commercial financing information. All partner relationships are subject to review, applicable law, and separate agreement."
      />

      {/* Partner Types */}
      <section className="py-20 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Partner Types
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Who ZEO partners with
            </h2>
            <p className="text-[#737373] text-sm max-w-xl leading-relaxed">
              Each partner type has different expectations, compliance considerations, and program terms. Select the type that best describes your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {partnerTypes.map((p) => (
              <div
                key={p.type}
                className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg border border-[#e5e5e5] bg-[#ffffff] flex items-center justify-center text-[#0f0f0f] flex-shrink-0">
                      {p.icon}
                    </div>
                    <p className="text-sm font-semibold text-[#0f0f0f]">{p.type}</p>
                  </div>
                  <span className={`text-[0.6rem] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full border ${p.tagColor} flex-shrink-0`}>
                    {p.tag}
                  </span>
                </div>

                <p className="text-sm text-[#737373] leading-relaxed">{p.description}</p>

                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-2">
                    Common fits
                  </p>
                  <ul className="space-y-1.5">
                    {p.fits.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#a3a3a3]">
                        <span className="text-[#0f0f0f]"><CheckIcon /></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-[0.65rem] text-[#3a4a38] leading-relaxed border-t border-[#e5e5e5] pt-3 mt-auto">
                  {p.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Referral Program Works */}
      <section className="py-20 border-t border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
              Process
            </p>
            <h2 className="text-2xl font-semibold text-white mb-2">
              How the referral program works
            </h2>
            <p className="text-[#737373] text-sm max-w-xl leading-relaxed">
              Partner relationships are established through a structured review and agreement process — not automatically on inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {referralSteps.map((step, i) => (
              <div key={step.label} className="relative rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5">
                <div className="w-6 h-6 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center mb-4">
                  <span className="text-[0.6rem] font-semibold tabular-nums text-[#0f0f0f]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-2">{step.label}</p>
                <p className="text-xs text-[#a3a3a3] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-[#0f0f0f] mb-1">Ready to inquire about a partner relationship?</p>
              <p className="text-xs text-[#a3a3a3]">
                Submit the form below and the ZEO partnerships team will follow up. Not a commitment or guarantee of a partnership.
              </p>
            </div>
            <a
              href="#partner-inquiry"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-[#0f0f0f] text-black text-sm font-semibold hover:bg-[#333333] transition-colors"
            >
              Submit Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* What Partners Get */}
      <section className="py-20 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#0f0f0f] mb-3">
                What partners access
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Supporting your clients through their financing process
              </h2>
              <p className="text-[#737373] leading-relaxed mb-5 text-sm">
                ZEO partners gain access to resources and infrastructure to help clients navigate commercial financing options — without needing to become a financing expert themselves.
              </p>
              <p className="text-[#737373] leading-relaxed text-sm">
                Partner benefits vary by type and agreement. The items below represent potential program components, not guaranteed features of every partnership. ZEO does not guarantee referral volume, client outcomes, or revenue to partners.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "Referral tracking",
                  desc: "Unique referral links and tracking for referred inquiries, subject to partner agreement terms.",
                },
                {
                  title: "Educational materials",
                  desc: "Financing guides, comparison resources, and product explainers you can share with clients.",
                },
                {
                  title: "Partner intake workflow",
                  desc: "Streamlined intake process for referred clients, pre-identified by partner type and client profile.",
                },
                {
                  title: "Partnerships team contact",
                  desc: "Direct contact with ZEO's partnership team for complex or high-priority referrals, subject to availability.",
                },
                {
                  title: "Co-branded materials",
                  desc: "Available for select partners under written agreement. Subject to ZEO brand and compliance review.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0f2a14] border border-[#1a4020] flex items-center justify-center text-[#0f0f0f] flex-shrink-0 mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0f0f0f] mb-0.5">{item.title}</p>
                    <p className="text-xs text-[#a3a3a3] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnerInquiryForm />

      <section className="py-12 border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>

      <FAQ
        title="Partner Program FAQ"
        items={partnerFAQ}
      />

      <CTASection
        headline="Not a partner? Find financing for your business."
        subtext="ZEO helps business owners evaluate commercial financing options. Submit an intake to review potential paths. Not a loan application."
        primaryLabel="Find Financing"
        primaryHref="/apply"
        secondaryLabel="Explore Financing Options"
        secondaryHref="/financing"
      />
    </>
  );
}

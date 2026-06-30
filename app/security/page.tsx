import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/ui/FAQ";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Security | ZEO.co",
  description:
    "How ZEO.co protects your business and personal data. Learn about our encryption standards, what information we collect, third-party vendor practices, and how to report a security concern.",
  path: "/security",
});

// ── Inline schema for this page ──────────────────────────────────────────────
const securityPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Security at ZEO.co",
  description:
    "ZEO.co data security practices: encryption, data minimization, third-party vendors, and responsible disclosure.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co"}/security`,
};

// ── Section label component ───────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#0f0f0f] font-mono mb-4">
      {children}
    </p>
  );
}

// ── Divider ───────────────────────────────────────────────────────────────────
function Divider() {
  return <hr className="border-t border-[#e5e5e5] my-10" />;
}

// ── Inline check list item ────────────────────────────────────────────────────
function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-[#737373] leading-relaxed">
      <svg
        className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#0f0f0f]"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8.5L6.5 12L13 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}

// ── Warning list item ─────────────────────────────────────────────────────────
function WarnItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-[#737373] leading-relaxed">
      <svg
        className="flex-shrink-0 mt-0.5 w-4 h-4 text-amber-500"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 3L14 13H2L8 3Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8 7V9.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="8" cy="11.5" r="0.6" fill="currentColor" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

// ── Data row for the collection table ────────────────────────────────────────
function DataRow({
  label,
  stored,
  purpose,
}: {
  label: string;
  stored: string;
  purpose: string;
}) {
  return (
    <tr className="border-t border-[#e5e5e5] group">
      <td className="py-3 pr-6 text-sm text-[#0f0f0f] font-medium align-top w-40">
        {label}
      </td>
      <td className="py-3 pr-6 text-xs font-mono text-[#0f0f0f] align-top w-32">
        {stored}
      </td>
      <td className="py-3 text-sm text-[#737373] align-top">{purpose}</td>
    </tr>
  );
}

// ── FAQ items ─────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Does ZEO.co sell my personal or business information?",
    a: "No. ZEO.co does not sell, rent, or trade your personal or business information to third parties for marketing purposes. Information shared during an intake may be passed to financing providers you explicitly choose to connect with as part of the matching process.",
  },
  {
    q: "Will applying through ZEO.co affect my credit score?",
    a: "Initial pre-qualification typically uses a soft credit inquiry that does not affect your score. A hard inquiry may occur when a lender formally underwrites your application. ZEO.co will inform you before any hard pull is initiated.",
  },
  {
    q: "How long is my data retained?",
    a: "Application and intake data is retained for as long as is reasonably necessary to facilitate the financing process and comply with applicable recordkeeping requirements. You may contact us at security@zeo.co to request deletion of your data, subject to legal and contractual obligations.",
  },
  {
    q: "Are documents I upload stored securely?",
    a: "Uploaded documents are stored using encrypted cloud storage with access controls limiting visibility to authorized personnel and the financing providers you've been connected with. Documents are not shared with unrelated third parties.",
  },
  {
    q: "What should I do if I receive a suspicious message claiming to be from ZEO.co?",
    a: "ZEO.co will never ask you to provide passwords, full SSNs, or banking credentials via email, SMS, or chat. If you receive a suspicious communication, do not click any links or share any information. Forward the message to security@zeo.co.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SecurityPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <JsonLd data={securityPageSchema} />

      <PageHero
        breadcrumbs={[{ label: "Security" }]}
        eyebrow="Trust & Safety"
        title="Security at ZEO.co"
        subtitle="How we protect your business and personal data when you use our platform."
        compact
      />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">

        {/* ── Encryption & Transport ─────────────────────────────────────── */}
        <section aria-labelledby="transport-heading">
          <SectionLabel>Transport &amp; Storage</SectionLabel>
          <h2
            id="transport-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            Encryption in transit and at rest
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            All data exchanged with ZEO.co is encrypted using TLS 1.2 or higher.
            Stored data — including application details, documents, and contact
            information — is encrypted at rest using AES-256. Connections that
            do not meet minimum TLS standards are rejected.
          </p>
          <ul className="space-y-2.5">
            <CheckItem>
              HTTPS enforced across all pages, forms, and API endpoints — no
              plain-HTTP fallback
            </CheckItem>
            <CheckItem>
              TLS certificates renewed automatically; HSTS headers applied
              site-wide
            </CheckItem>
            <CheckItem>
              Stored data encrypted at rest; encryption keys managed through a
              dedicated key management service
            </CheckItem>
            <CheckItem>
              Internal access to production systems requires multi-factor
              authentication
            </CheckItem>
          </ul>
        </section>

        <Divider />

        {/* ── What we collect ────────────────────────────────────────────── */}
        <section aria-labelledby="collection-heading">
          <SectionLabel>Data Collected</SectionLabel>
          <h2
            id="collection-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            What we collect and how it is protected
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-6">
            ZEO.co collects only the information necessary to match your
            business with relevant financing options. The table below summarizes
            the data categories, how they are stored, and why.
          </p>
          <div className="overflow-x-auto rounded-lg border border-[#e5e5e5]">
            <table className="w-full min-w-[560px] bg-[#f5f5f5]">
              <thead>
                <tr className="bg-[#ffffff]">
                  <th className="py-2.5 px-4 text-left text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] font-mono w-40">
                    Data type
                  </th>
                  <th className="py-2.5 px-4 text-left text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] font-mono w-32">
                    Stored as
                  </th>
                  <th className="py-2.5 px-4 text-left text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] font-mono">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="px-4">
                <tr>
                  <td colSpan={3} className="px-4">
                    <DataRow
                      label="Business name"
                      stored="Plaintext"
                      purpose="Identify the business entity for financing evaluation"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="px-4">
                    <DataRow
                      label="Contact info"
                      stored="Encrypted"
                      purpose="Communicate status updates and connect with providers"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="px-4">
                    <DataRow
                      label="Revenue / financials"
                      stored="Encrypted"
                      purpose="Assess financing eligibility and match to products"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="px-4">
                    <DataRow
                      label="SSN / EIN"
                      stored="Last 4 only"
                      purpose="Identity verification — full SSN is never stored on our systems"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="px-4">
                    <DataRow
                      label="Bank statements"
                      stored="Encrypted file"
                      purpose="Underwriting support; shared only with connected providers"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="px-4">
                    <DataRow
                      label="Credit inquiry"
                      stored="Soft pull only"
                      purpose="Pre-qualification — no hard pull without explicit consent"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SSN / bank credentials callout */}
          <div className="mt-5 rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] p-4">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] font-mono mb-2">
              Important
            </p>
            <p className="text-sm text-[#737373] leading-relaxed">
              ZEO.co does not store full Social Security Numbers on its servers.
              We also do not collect or store your online banking login
              credentials. If a bank connection is required for a specific
              product, it is handled entirely by a tokenized, read-only
              integration through a regulated financial data provider — your
              username and password never pass through ZEO.co systems.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── What NOT to submit ─────────────────────────────────────────── */}
        <section aria-labelledby="do-not-submit-heading">
          <SectionLabel>Form Safety</SectionLabel>
          <h2
            id="do-not-submit-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            What not to submit through web forms
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            General contact forms and inquiry forms on this site are not
            designed to receive sensitive personal or financial data. Please do
            not submit the following through any general contact or message
            form:
          </p>
          <ul className="space-y-2.5">
            <WarnItem>Full Social Security Numbers or full EINs</WarnItem>
            <WarnItem>
              Online banking usernames, passwords, or PINs
            </WarnItem>
            <WarnItem>
              Full credit card or debit card numbers, CVV codes, or expiration
              dates
            </WarnItem>
            <WarnItem>
              Copies of government-issued IDs (driver&apos;s license, passport)
              — upload these only through the secured application portal
            </WarnItem>
            <WarnItem>
              Medical information, personal health records, or insurance
              policy numbers
            </WarnItem>
          </ul>
          <p className="mt-4 text-sm text-[#a3a3a3] leading-relaxed">
            Sensitive documents required for underwriting should be submitted
            exclusively through the secured application portal, which enforces
            encryption and access controls. If you are unsure which channel to
            use, contact us before sending.
          </p>
        </section>

        <Divider />

        {/* ── Third-party vendors ────────────────────────────────────────── */}
        <section aria-labelledby="vendors-heading">
          <SectionLabel>Third-Party Vendors</SectionLabel>
          <h2
            id="vendors-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            Third-party vendor security
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            ZEO.co uses a limited set of vetted third-party services to operate
            the platform. Vendors that handle personal or financial data are
            required to maintain security standards consistent with our own and
            are subject to contractual data processing obligations.
          </p>
          <ul className="space-y-2.5">
            <CheckItem>
              Cloud infrastructure hosted on SOC 2 Type II certified providers
              with physical and logical access controls
            </CheckItem>
            <CheckItem>
              Payment processing handled entirely by PCI-DSS compliant
              processors — card data never touches ZEO.co servers
            </CheckItem>
            <CheckItem>
              Bank connectivity, where applicable, provided by regulated open
              banking integrations under read-only, tokenized access
            </CheckItem>
            <CheckItem>
              Analytics and monitoring tools are configured to exclude
              personally identifiable information from event payloads
            </CheckItem>
            <CheckItem>
              Vendor agreements include data processing addenda (DPAs) and
              breach notification obligations
            </CheckItem>
          </ul>
          <p className="mt-4 text-sm text-[#a3a3a3] leading-relaxed">
            ZEO.co reviews third-party vendor security posture on a periodic
            basis. Vendors with access to personal data are not permitted to
            use that data for their own purposes beyond providing the contracted
            service.
          </p>
        </section>

        <Divider />

        {/* ── Responsible disclosure ─────────────────────────────────────── */}
        <section aria-labelledby="disclosure-heading">
          <SectionLabel>Responsible Disclosure</SectionLabel>
          <h2
            id="disclosure-heading"
            className="text-lg font-semibold text-[#0f0f0f] mb-3"
          >
            Reporting a security concern
          </h2>
          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            If you believe you have discovered a vulnerability, data exposure,
            or security issue affecting ZEO.co or its users, please report it
            to us promptly and responsibly. We review all reports and will
            respond within a reasonable timeframe.
          </p>

          {/* Contact block */}
          <div className="rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] font-mono mb-1">
                Security contact
              </p>
              <Link
                href="mailto:security@zeo.co"
                className="text-sm font-medium text-[#0f0f0f] hover:text-[#333333] transition-colors font-mono"
              >
                security@zeo.co
              </Link>
            </div>
            <p className="text-xs text-[#a3a3a3] leading-relaxed max-w-xs">
              Please include a clear description of the issue, steps to
              reproduce, and any supporting evidence. Do not share vulnerability
              details publicly before we have had a reasonable opportunity to
              respond.
            </p>
          </div>

          <p className="mt-4 text-sm text-[#a3a3a3] leading-relaxed">
            We ask that researchers act in good faith: do not access, modify,
            or delete data beyond what is necessary to demonstrate the
            vulnerability; do not disrupt ZEO.co services or perform
            denial-of-service testing; and do not use discovered vulnerabilities
            to access accounts that are not your own.
          </p>
        </section>

        <Divider />

        {/* ── Disclaimer ─────────────────────────────────────────────────── */}
        <ProductDisclaimer type="general" className="mb-0" />
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ
        title="Security questions"
        items={faqItems}
        includeSchema={true}
      />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Have questions about how we handle your data?"
        subtext="Reach out to our team or review our privacy policy for complete details on data handling practices."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Privacy Policy"
        secondaryHref="/privacy"
        variant="dark"
      />
    </div>
  );
}

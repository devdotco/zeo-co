import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Privacy Policy | ZEO.co",
  description:
    "ZEO.co Privacy Policy — how we collect, use, and share information when you use our commercial financing referral marketplace.",
  path: "/privacy-policy",
  noIndex: false,
});

// ── Inline schema ─────────────────────────────────────────────────────────────
const privacyPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | ZEO.co",
  description:
    "ZEO.co privacy practices: data collection, sharing with financing providers and referral partners, cookies, CCPA rights, and contact information.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co"}/privacy-policy`,
};

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#0f0f0f] font-mono mb-4">
      {children}
    </p>
  );
}

function Divider() {
  return <hr className="border-t border-[#e5e5e5] my-10" />;
}

function H2({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="text-lg font-semibold text-[#0f0f0f] mb-3 scroll-mt-8"
    >
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-[#737373] leading-relaxed mb-4">{children}</p>
  );
}

function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 pl-0 mb-4">{children}</ul>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-[#737373] leading-relaxed">
      <span
        className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-[#a3a3a3]"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] p-4 mb-4">
      {children}
    </div>
  );
}

function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-amber-900/40 bg-amber-950/20 p-4 mb-4">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-amber-500/80 font-mono mb-2">
        Important
      </p>
      <div className="text-sm text-[#737373] leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

// ── Table of contents data ────────────────────────────────────────────────────
const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "how-we-share-information", label: "How We Share Information" },
  { id: "cookies-and-analytics", label: "Cookies and Analytics" },
  { id: "communications-and-opt-outs", label: "Communications & Opt-Outs" },
  { id: "california-privacy-rights", label: "California Privacy Rights" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "changes-to-policy", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <JsonLd data={privacyPageSchema} />

      <PageHero
        breadcrumbs={[{ label: "Privacy Policy" }]}
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How ZEO.co collects, uses, and shares information when you use our commercial financing referral marketplace."
        compact
      />

      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">

        {/* ── Table of contents ──────────────────────────────────────────── */}
        <nav
          aria-label="Privacy policy sections"
          className="rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] p-5 mb-12"
        >
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#a3a3a3] font-mono mb-3">
            Contents
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 list-none">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-baseline gap-2 text-sm text-[#737373] hover:text-[#0f0f0f] transition-colors group"
                >
                  <span className="text-[0.6rem] font-mono text-[#a3a3a3] group-hover:text-[#0f0f0f] transition-colors tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── 1. Introduction ────────────────────────────────────────────── */}
        <section aria-labelledby="introduction">
          <SectionLabel>01 — Introduction</SectionLabel>
          <H2 id="introduction">Who we are and when this policy applies</H2>
          <Body>
            This Privacy Policy is effective as of January 1, 2025 and describes
            how ZEO.co (&ldquo;ZEO,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;) collects, uses, shares, and protects information
            about you when you visit our website, submit an inquiry, or otherwise
            interact with our commercial financing referral marketplace.
          </Body>
          <Body>
            ZEO.co is a commercial financing referral marketplace — we connect
            business owners and operators with third-party lenders, funders,
            brokers, and financing providers. We are not a bank, lender, credit
            union, or financial advisor. Financing products and decisions are
            made by the third-party providers you are connected with, not by ZEO.
          </Body>
          <Body>
            By using this website or submitting an inquiry, you acknowledge this
            Privacy Policy. If you do not agree with these practices, please do
            not use our services.
          </Body>
        </section>

        <Divider />

        {/* ── 2. Information We Collect ──────────────────────────────────── */}
        <section aria-labelledby="information-we-collect">
          <SectionLabel>02 — Information We Collect</SectionLabel>
          <H2 id="information-we-collect">Information we collect about you</H2>

          <p className="text-sm font-medium text-[#0f0f0f] mb-2">
            Business and contact information
          </p>
          <Body>
            When you submit an inquiry or application, we collect information
            such as your name, business name, business address, email address,
            phone number, and your role at the business.
          </Body>

          <p className="text-sm font-medium text-[#0f0f0f] mb-2">
            Financing inquiry information
          </p>
          <Body>
            To match you with relevant financing options, we collect information
            about your financing request including loan amount sought, intended
            use of funds, time in business, estimated annual revenue, industry,
            and general credit profile. We may also collect information about
            existing debt obligations, ownership structure, and business entity
            type.
          </Body>

          <p className="text-sm font-medium text-[#0f0f0f] mb-2">
            Uploaded documents
          </p>
          <Body>
            For certain financing products, we may collect documents such as
            bank statements, tax returns, profit and loss statements, business
            licenses, or articles of organization. These documents are handled
            through secured upload channels and shared only with providers you
            are connected with.
          </Body>

          <WarnBox>
            <p>
              <strong className="text-[#0f0f0f]">Do not submit through ordinary web forms:</strong>{" "}
              full Social Security Numbers, online banking usernames or passwords,
              full consumer credit card numbers, or complete consumer credit
              report data. These items should only be provided through the
              secured application portal if specifically requested by a financing
              provider, or directly to that provider through their own secured
              systems. General contact and inquiry forms on this site are not
              designed or secured to receive this class of sensitive data.
            </p>
          </WarnBox>

          <p className="text-sm font-medium text-[#0f0f0f] mb-2">
            Device and analytics information
          </p>
          <Body>
            We automatically collect certain technical information when you
            visit our site, including your IP address, browser type and version,
            operating system, referring URL, pages visited, time spent on pages,
            and general geographic region. This information is collected through
            cookies, web beacons, and analytics tools.
          </Body>
        </section>

        <Divider />

        {/* ── 3. How We Use Information ──────────────────────────────────── */}
        <section aria-labelledby="how-we-use-information">
          <SectionLabel>03 — How We Use Information</SectionLabel>
          <H2 id="how-we-use-information">How we use the information we collect</H2>
          <Body>
            We use the information we collect for the following purposes:
          </Body>
          <BulletList>
            <Bullet>
              To evaluate your financing inquiry and match you with third-party
              financing providers, brokers, lenders, and funders whose products
              may fit your business profile and request.
            </Bullet>
            <Bullet>
              To communicate with you about your inquiry, application status,
              financing options, and related updates via email, phone, or SMS.
            </Bullet>
            <Bullet>
              To operate, maintain, and improve the ZEO.co platform, including
              troubleshooting, analytics, and product development.
            </Bullet>
            <Bullet>
              To comply with applicable laws, regulations, and legal obligations,
              including anti-fraud and anti-money-laundering requirements.
            </Bullet>
            <Bullet>
              To detect, investigate, and prevent fraudulent, unauthorized, or
              illegal activity on our platform.
            </Bullet>
            <Bullet>
              To send you marketing communications about financing options,
              resources, or ZEO.co services, subject to your right to opt out.
            </Bullet>
            <Bullet>
              To enforce our Terms of Service and protect the rights, property,
              and safety of ZEO.co, our users, and others.
            </Bullet>
          </BulletList>
          <Body>
            We process your information on the basis of your consent (where
            required), performance of a contract or pre-contractual relationship,
            our legitimate business interests, and compliance with legal
            obligations.
          </Body>
        </section>

        <Divider />

        {/* ── 4. How We Share Information ────────────────────────────────── */}
        <section aria-labelledby="how-we-share-information">
          <SectionLabel>04 — How We Share Information</SectionLabel>
          <H2 id="how-we-share-information">How we share information</H2>
          <Body>
            ZEO.co does not sell your personal information to third parties for
            their own marketing purposes. We share your information only in the
            circumstances described below.
          </Body>

          <p className="text-sm font-medium text-[#0f0f0f] mb-2">
            Third-party financing providers, brokers, lenders, and funders
          </p>
          <Body>
            The core service ZEO.co provides is connecting businesses with
            financing providers. When you submit an inquiry, your information
            may be shared with one or more third-party lenders, alternative
            funders, commercial brokers, and referral partners who may be
            relevant to your financing request. Each of these providers operates
            under their own privacy practices. You should review the privacy
            policy of any provider you engage with directly.
          </Body>

          <p className="text-sm font-medium text-[#0f0f0f] mb-2">
            Service providers and vendors
          </p>
          <Body>
            We share information with vetted third-party vendors who assist us
            in operating the platform. These include:
          </Body>
          <BulletList>
            <Bullet>
              <strong className="text-[#0f0f0f]">CRM and data management vendors</strong>{" "}
              — to manage contact records, inquiry workflows, and follow-up
              communications.
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Analytics providers</strong>{" "}
              — to understand site usage and improve the platform experience.
              These vendors are configured to minimize collection of personally
              identifiable information where feasible.
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Email and SMS vendors</strong>{" "}
              — to deliver transactional messages and, where you have consented,
              marketing communications.
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Legal and compliance vendors</strong>{" "}
              — to assist with identity verification, fraud prevention, regulatory
              compliance, and legal recordkeeping obligations.
            </Bullet>
          </BulletList>
          <Body>
            Vendors that process personal data on our behalf are required to
            maintain appropriate security standards and are prohibited from using
            your data for their own purposes beyond providing the contracted
            service.
          </Body>

          <p className="text-sm font-medium text-[#0f0f0f] mb-2">
            Legal requirements and protection of rights
          </p>
          <Body>
            We may disclose information where required by law, court order,
            regulatory process, or governmental request, or to protect the
            rights, property, or safety of ZEO.co, our users, or others.
          </Body>

          <p className="text-sm font-medium text-[#0f0f0f] mb-2">
            Business transfers
          </p>
          <Body>
            If ZEO.co is involved in a merger, acquisition, asset sale, or
            similar transaction, your information may be transferred as part of
            that transaction. We will notify you of any such change by updating
            this policy.
          </Body>
        </section>

        <Divider />

        {/* ── 5. Cookies and Analytics ───────────────────────────────────── */}
        <section aria-labelledby="cookies-and-analytics">
          <SectionLabel>05 — Cookies and Analytics</SectionLabel>
          <H2 id="cookies-and-analytics">Cookies and analytics</H2>
          <Body>
            We use cookies, pixel tags, and similar tracking technologies to
            operate the site, remember your preferences, analyze traffic patterns,
            and support marketing attribution.
          </Body>
          <BulletList>
            <Bullet>
              <strong className="text-[#0f0f0f]">Essential cookies</strong>{" "}
              — required for basic site functionality, security, and session
              management. These cannot be disabled without impairing your use
              of the site.
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Analytics cookies</strong>{" "}
              — used to measure page views, traffic sources, and user behavior
              in aggregate form. We use tools such as Google Analytics or similar
              providers, configured to respect applicable privacy settings.
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Marketing and attribution cookies</strong>{" "}
              — used to attribute traffic sources, measure the effectiveness of
              advertising campaigns, and, where applicable, serve relevant
              content.
            </Bullet>
          </BulletList>
          <Body>
            Most browsers allow you to control cookies through browser settings.
            You can also opt out of Google Analytics tracking by using the{" "}
            <Link
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0f0f0f] hover:text-[#333333] transition-colors underline underline-offset-2"
            >
              Google Analytics Opt-out Browser Add-on
            </Link>
            . Note that disabling certain cookies may affect site functionality.
          </Body>
        </section>

        <Divider />

        {/* ── 6. Communications and Opt-Outs ────────────────────────────── */}
        <section aria-labelledby="communications-and-opt-outs">
          <SectionLabel>06 — Communications</SectionLabel>
          <H2 id="communications-and-opt-outs">Communications and opt-outs</H2>
          <Body>
            By submitting an inquiry through ZEO.co, you consent to being
            contacted by ZEO.co and, where relevant, by third-party financing
            providers regarding your request. Contact may occur by email, phone,
            or SMS.
          </Body>
          <BulletList>
            <Bullet>
              <strong className="text-[#0f0f0f]">Transactional communications</strong>{" "}
              — messages relating to your inquiry, application status, or account
              activity. These are required for service delivery and cannot be
              fully opted out of while your inquiry is active.
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Marketing emails</strong>{" "}
              — you may opt out of marketing emails at any time by clicking the
              unsubscribe link in any marketing email or by contacting us at{" "}
              <Link
                href="mailto:privacy@zeo.co"
                className="text-[#0f0f0f] hover:text-[#333333] transition-colors"
              >
                privacy@zeo.co
              </Link>
              .
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">SMS communications</strong>{" "}
              — if you have opted into SMS, you may opt out at any time by
              replying STOP to any message. Standard message and data rates may
              apply.
            </Bullet>
          </BulletList>
          <Body>
            Opt-out requests for third-party provider communications must be
            submitted directly to those providers, as ZEO.co does not control
            their communication practices.
          </Body>
        </section>

        <Divider />

        {/* ── 7. California Privacy Rights ──────────────────────────────── */}
        <section aria-labelledby="california-privacy-rights">
          <SectionLabel>07 — CCPA</SectionLabel>
          <H2 id="california-privacy-rights">California privacy rights (CCPA)</H2>
          <Body>
            If you are a California resident, the California Consumer Privacy
            Act (CCPA), as amended by the California Privacy Rights Act (CPRA),
            provides you with specific rights regarding your personal information.
          </Body>
          <BulletList>
            <Bullet>
              <strong className="text-[#0f0f0f]">Right to know.</strong>{" "}
              You have the right to request that we disclose the categories and
              specific pieces of personal information we have collected about
              you, the categories of sources, the business or commercial purposes
              for collecting or sharing that information, and the categories of
              third parties with whom we share it.
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Right to delete.</strong>{" "}
              You have the right to request deletion of personal information we
              have collected from you, subject to certain exceptions (such as
              legal obligations or completion of a transaction you requested).
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Right to correct.</strong>{" "}
              You have the right to request correction of inaccurate personal
              information we maintain about you.
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Right to opt out of sale or sharing.</strong>{" "}
              ZEO.co does not sell personal information in the traditional sense.
              However, certain sharing of information with financing providers
              and referral partners as part of our referral marketplace function
              may be considered &ldquo;sharing&rdquo; under California law. You
              may contact us to exercise opt-out rights.
            </Bullet>
            <Bullet>
              <strong className="text-[#0f0f0f]">Right to non-discrimination.</strong>{" "}
              We will not discriminate against you for exercising any of your
              CCPA rights.
            </Bullet>
          </BulletList>
          <Body>
            To exercise your California privacy rights, please contact us at{" "}
            <Link
              href="mailto:privacy@zeo.co"
              className="text-[#0f0f0f] hover:text-[#333333] transition-colors"
            >
              privacy@zeo.co
            </Link>
            . We will verify your identity before processing your request and
            respond within 45 days as required by law.
          </Body>
          <InfoBox>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] font-mono mb-2">
              Note on B2B data
            </p>
            <p className="text-sm text-[#737373] leading-relaxed">
              ZEO.co operates primarily as a commercial marketplace serving
              businesses. Much of the information collected relates to business
              entities and their authorized representatives acting in a commercial
              capacity. Certain CCPA provisions apply differently to information
              collected in a business-to-business context.
            </p>
          </InfoBox>
        </section>

        <Divider />

        {/* ── 8. Data Security ───────────────────────────────────────────── */}
        <section aria-labelledby="data-security">
          <SectionLabel>08 — Security</SectionLabel>
          <H2 id="data-security">Data security</H2>
          <Body>
            ZEO.co implements administrative, technical, and physical safeguards
            designed to protect your information from unauthorized access,
            alteration, disclosure, or destruction. These include encrypted
            data transmission (TLS), encrypted storage, access controls, and
            periodic security reviews.
          </Body>
          <Body>
            No method of data transmission or storage is completely secure.
            While we take reasonable measures to protect your information, we
            cannot guarantee absolute security. If you have reason to believe
            your information has been compromised, please contact us immediately
            at{" "}
            <Link
              href="mailto:privacy@zeo.co"
              className="text-[#0f0f0f] hover:text-[#333333] transition-colors"
            >
              privacy@zeo.co
            </Link>
            .
          </Body>
          <Body>
            For detailed information about our security practices, see our{" "}
            <Link
              href="/security"
              className="text-[#0f0f0f] hover:text-[#333333] transition-colors"
            >
              Security page
            </Link>
            .
          </Body>
        </section>

        <Divider />

        {/* ── 9. Data Retention ─────────────────────────────────────────── */}
        <section aria-labelledby="data-retention">
          <SectionLabel>09 — Retention</SectionLabel>
          <H2 id="data-retention">Data retention</H2>
          <Body>
            We retain personal and business information for as long as is
            reasonably necessary to fulfill the purposes described in this
            policy, including to provide our services, comply with legal and
            regulatory recordkeeping obligations, resolve disputes, and enforce
            our agreements.
          </Body>
          <Body>
            The specific retention period for any category of information depends
            on the nature of the data, the purpose for which it was collected,
            and applicable legal requirements. Financing-related records may be
            retained for a period consistent with applicable commercial and
            financial recordkeeping requirements, which may extend several years.
          </Body>
          <Body>
            You may request deletion of your information by contacting{" "}
            <Link
              href="mailto:privacy@zeo.co"
              className="text-[#0f0f0f] hover:text-[#333333] transition-colors"
            >
              privacy@zeo.co
            </Link>
            . Deletion requests are subject to applicable legal obligations and
            exceptions, including any active contractual relationships or
            regulatory requirements that require us to maintain the information.
          </Body>
        </section>

        <Divider />

        {/* ── 10. Children's Privacy ─────────────────────────────────────── */}
        <section aria-labelledby="childrens-privacy">
          <SectionLabel>10 — Children</SectionLabel>
          <H2 id="childrens-privacy">Children&apos;s privacy</H2>
          <Body>
            ZEO.co is a commercial financing marketplace intended solely for use
            by businesses and their authorized adult representatives. Our services
            are not directed to individuals under the age of 18, and we do not
            knowingly collect personal information from anyone under 18.
          </Body>
          <Body>
            If you are under 18, do not use or submit any information through
            this site. If we learn that we have collected personal information
            from a person under 18, we will delete that information promptly.
            If you believe we may have information from or about a person under
            18, please contact us at{" "}
            <Link
              href="mailto:privacy@zeo.co"
              className="text-[#0f0f0f] hover:text-[#333333] transition-colors"
            >
              privacy@zeo.co
            </Link>
            .
          </Body>
        </section>

        <Divider />

        {/* ── 11. Changes to Policy ─────────────────────────────────────── */}
        <section aria-labelledby="changes-to-policy">
          <SectionLabel>11 — Updates</SectionLabel>
          <H2 id="changes-to-policy">Changes to this policy</H2>
          <Body>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, applicable law, or our services. When we
            make material changes, we will update the effective date at the top
            of this page and, where appropriate, provide additional notice such
            as a prominent notice on our website or an email to the address
            associated with your inquiry.
          </Body>
          <Body>
            Your continued use of ZEO.co after any changes to this policy
            constitutes your acceptance of the revised terms. We encourage you
            to review this page periodically.
          </Body>
        </section>

        <Divider />

        {/* ── 12. Contact ────────────────────────────────────────────────── */}
        <section aria-labelledby="contact">
          <SectionLabel>12 — Contact</SectionLabel>
          <H2 id="contact">Contact us about privacy</H2>
          <Body>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or our data practices, please reach out to us directly.
          </Body>

          <div className="rounded-lg border border-[#e5e5e5] bg-[#f5f5f5] p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] font-mono mb-1">
                Privacy contact
              </p>
              <Link
                href="mailto:privacy@zeo.co"
                className="text-sm font-medium text-[#0f0f0f] hover:text-[#333333] transition-colors font-mono"
              >
                privacy@zeo.co
              </Link>
            </div>
            <p className="text-xs text-[#a3a3a3] leading-relaxed sm:max-w-xs">
              For CCPA requests, deletion requests, corrections, or any other
              privacy concern. We aim to respond to all requests within 45
              calendar days.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── General disclaimer ─────────────────────────────────────────── */}
        <ProductDisclaimer type="general" className="mb-0" />
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Questions about how your data is used?"
        subtext="Contact our privacy team directly or review our security practices for full details on how we protect your business information."
        primaryLabel="Contact Privacy Team"
        primaryHref="mailto:privacy@zeo.co"
        secondaryLabel="Security Practices"
        secondaryHref="/security"
        variant="dark"
      />
    </div>
  );
}

import PageHero from "@/components/ui/PageHero";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Terms of Service | ZEO.co",
  description:
    "Terms of Service for ZEO.co — a commercial financing referral and navigation platform. Governs business and commercial use only. Not a lender, broker, or financial advisor.",
  path: "/terms-of-service",
  noIndex: false,
});

// ── Inline schema ─────────────────────────────────────────────────────────────
const tosPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service — ZEO.co",
  description:
    "Terms governing use of ZEO.co, a commercial financing referral marketplace. Business and commercial use only.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeo.co"}/terms-of-service`,
};

// ── Reusable primitives ───────────────────────────────────────────────────────

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 mb-3">
      <span className="text-[0.6rem] font-mono font-semibold text-[#0f0f0f] tracking-[0.12em] tabular-nums flex-shrink-0">
        {number}
      </span>
      <h2 className="text-base font-semibold text-[#0f0f0f] leading-snug" style={{ textWrap: "balance" } as React.CSSProperties}>
        {children}
      </h2>
    </div>
  );
}

function Divider() {
  return <hr className="border-t border-[#e5e5e5] my-8" />;
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-3 text-sm text-[#737373] leading-relaxed pl-[calc(1rem+0.75rem+0.75rem)]">
      {children}
    </div>
  );
}

function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 ml-[calc(1rem+0.75rem+0.75rem)] flex gap-3 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-4">
      <svg
        className="flex-shrink-0 mt-0.5 w-4 h-4 text-amber-400"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 2.5L14.5 13.5H1.5L8 2.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M8 6.5V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="8" cy="11.5" r="0.65" fill="currentColor" />
      </svg>
      <p className="text-xs text-amber-400/80 leading-relaxed">{children}</p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-[#737373] leading-relaxed">
          <span className="flex-shrink-0 mt-[0.4em] w-1 h-1 rounded-full bg-[#0f0f0f]/50" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TermsPage() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      <JsonLd data={tosPageSchema} />

      <PageHero
        breadcrumbs={[{ label: "Terms of Service", href: "/terms-of-service" }]}
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Please read these terms carefully before using ZEO.co. By accessing or using this platform, you agree to be bound by these Terms of Service."
      />

      {/* Effective date bar */}
      <div className="border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1">
          <span className="text-xs text-[#a3a3a3]">
            <span className="text-[#737373] font-medium">Effective Date:</span> June 30, 2026
          </span>
          <span className="text-xs text-[#a3a3a3]">
            <span className="text-[#737373] font-medium">Jurisdiction:</span> Arkansas, USA
          </span>
          <span className="text-xs text-[#a3a3a3]">
            <span className="text-[#737373] font-medium">Operator:</span> ZEO.co
          </span>
        </div>
      </div>

      {/* Body */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-0">

          {/* 01 — Acceptance */}
          <div>
            <SectionLabel number="01">Acceptance of Terms</SectionLabel>
            <Prose>
              <p>
                By accessing, browsing, or using ZEO.co (the &ldquo;Platform&rdquo;), you
                (&ldquo;User&rdquo;) agree to these Terms of Service (&ldquo;Terms&rdquo;) and
                our Privacy Policy, which are incorporated herein by reference. These Terms
                constitute a legally binding agreement between you and ZEO.co
                (&ldquo;ZEO,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p>
                If you are accessing the Platform on behalf of a business entity, you represent
                and warrant that you have authority to bind that entity to these Terms. If you do
                not agree to these Terms, you must discontinue use of the Platform immediately.
              </p>
              <p>
                ZEO reserves the right to modify these Terms at any time. Continued use of the
                Platform after any modification constitutes acceptance of the updated Terms. We
                will post the most current version at{" "}
                <Link
                  href="/terms-of-service"
                  className="text-[#0f0f0f] hover:text-[#333333] transition-colors underline underline-offset-2 decoration-[#0f0f0f]/30"
                >
                  zeo.co/terms-of-service
                </Link>{" "}
                with an updated effective date.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 02 — Business Use Only */}
          <div>
            <SectionLabel number="02">Business and Commercial Use Only</SectionLabel>
            <Prose>
              <p>
                ZEO.co is intended for business and commercial financing inquiries only. ZEO.co
                does not offer residential mortgage loans, consumer loans, personal loans,
                student loans, credit repair services, debt settlement services, or residential
                real estate loan brokerage services.
              </p>
              <p>
                The Platform is designed exclusively for business owners, operators, and
                authorized representatives of commercial entities seeking business financing. Use
                of this Platform for personal, family, or household purposes is strictly
                prohibited and outside the scope of ZEO&rsquo;s services.
              </p>
              <p>
                By using the Platform, you represent and warrant that:
              </p>
              <BulletList
                items={[
                  "You are accessing the Platform for legitimate business or commercial financing purposes.",
                  "Any business entity on whose behalf you submit information is a validly organized legal entity.",
                  "You are not seeking personal, consumer, or household financing of any kind.",
                  "You are at least 18 years of age and have the legal capacity to enter into binding agreements.",
                ]}
              />
            </Prose>
          </div>

          <Divider />

          {/* 03 — No Consumer Loans */}
          <div>
            <SectionLabel number="03">No Consumer Loans</SectionLabel>
            <Prose>
              <p>
                ZEO.co does not facilitate, broker, originate, or refer consumer loans of any
                type. The Platform is not subject to, and does not comply with, consumer lending
                laws including but not limited to the Truth in Lending Act (TILA), the Equal
                Credit Opportunity Act (ECOA) as applied to consumer transactions, or applicable
                state consumer lending statutes.
              </p>
              <p>
                All financing products referenced on this Platform are commercial in nature and
                are extended to business entities, not to individual consumers for personal use.
                If you require personal or consumer financing, ZEO.co is not the appropriate
                platform and you should seek a licensed consumer lender or credit counselor.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 04 — No Lender/Broker/Underwriter Relationship */}
          <div>
            <SectionLabel number="04">No Lender, Broker, or Underwriter Relationship</SectionLabel>
            <Prose>
              <p>
                ZEO.co is not a bank, credit union, commercial lender, mortgage broker, insurance
                company, investment advisor, financial planner, or underwriter. ZEO does not
                originate loans, extend credit, hold deposits, issue securities, or make credit
                decisions of any kind.
              </p>
              <p>
                No use of the Platform creates a lender-borrower, broker-client, advisor-client,
                fiduciary, agency, or employment relationship between ZEO and any User. ZEO
                functions solely as a referral and navigation platform that helps business owners
                identify and connect with third-party financing providers. Any financing
                relationship is exclusively between you and the applicable third-party provider.
              </p>
              <p>
                ZEO is not licensed as a commercial loan broker in any jurisdiction. Nothing
                contained on this Platform should be construed as the provision of brokerage
                services requiring licensure under applicable state or federal law.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 05 — No Guarantee */}
          <div>
            <SectionLabel number="05">No Guarantee of Financing or Approval</SectionLabel>
            <Prose>
              <p>
                ZEO does not guarantee, warrant, or represent that any User will receive
                financing, qualify for any particular product, obtain any specific interest rate
                or term, or receive any offer from any third-party provider. All statements about
                potential financing on this Platform are illustrative and informational only.
              </p>
              <p>
                Approval, terms, rates, and funding are determined entirely by the applicable
                third-party provider based on their own proprietary underwriting criteria, credit
                policies, and risk assessments. ZEO has no influence over, and assumes no
                responsibility for, any provider&rsquo;s credit decisions.
              </p>
              <p>
                Pre-qualification estimates, range indicators, and product eligibility
                descriptions displayed on this Platform are not commitments to lend and do not
                constitute a credit decision or a loan offer.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 06 — Third-Party Provider Responsibility */}
          <div>
            <SectionLabel number="06">Third-Party Provider Responsibility</SectionLabel>
            <Prose>
              <p>
                ZEO connects Users with independent third-party financing providers
                (&ldquo;Providers&rdquo;). ZEO does not control, endorse, supervise, audit, or
                guarantee the conduct, products, services, representations, or compliance of any
                Provider.
              </p>
              <p>
                Once a referral is made and you engage directly with a Provider, your relationship
                is governed exclusively by the terms, agreements, and disclosures of that
                Provider. You are responsible for independently reviewing all Provider agreements,
                loan documents, fee schedules, and disclosures before entering into any financing
                arrangement.
              </p>
              <p>
                ZEO is not responsible for:
              </p>
              <BulletList
                items={[
                  "The availability, accuracy, or completeness of any Provider's products or representations.",
                  "Any funding delays, denials, errors, or disputes arising from a Provider relationship.",
                  "Changes to Provider terms, rates, fees, or underwriting criteria after a referral is made.",
                  "Any Provider's compliance with applicable licensing, disclosure, or consumer protection laws.",
                  "Any damages or losses arising from your reliance on a Provider's products or services.",
                ]}
              />
            </Prose>
          </div>

          <Divider />

          {/* 07 — Referral Compensation Disclosure */}
          <div>
            <SectionLabel number="07">Referral Compensation Disclosure</SectionLabel>
            <Prose>
              <p>
                ZEO may receive referral fees, commissions, or other compensation from Providers
                when a User is referred and subsequently proceeds with a financing product. This
                compensation is paid by the Provider to ZEO and does not create any additional
                cost to you as the User.
              </p>
              <p>
                The existence of referral compensation does not mean ZEO endorses any particular
                Provider or product, nor does it mean ZEO has verified the accuracy, suitability,
                or quality of any Provider&rsquo;s offerings. ZEO endeavors to surface financing
                options based on profile fit; however, ZEO&rsquo;s network is limited to Providers
                with whom ZEO has established relationships, and options outside that network will
                not be reflected in Platform results.
              </p>
              <p>
                Referral compensation arrangements do not obligate ZEO to favor any Provider in
                its presentation of options. Users should independently evaluate all options and
                seek professional advice where appropriate.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 08 — User Responsibility */}
          <div>
            <SectionLabel number="08">User Responsibility and Accuracy</SectionLabel>
            <Prose>
              <p>
                You are solely responsible for the accuracy, completeness, and truthfulness of
                all information you submit through the Platform. Submitting false, misleading, or
                fraudulent information may constitute fraud under applicable federal and state law
                and may result in civil or criminal liability.
              </p>
              <p>
                You agree to:
              </p>
              <BulletList
                items={[
                  "Provide accurate and complete information about yourself and your business.",
                  "Notify ZEO promptly of any material changes to information previously submitted.",
                  "Use the Platform only for lawful purposes and in compliance with these Terms.",
                  "Maintain the confidentiality of any account credentials and notify ZEO immediately of any unauthorized access.",
                  "Comply with all applicable federal, state, and local laws in connection with your use of the Platform.",
                ]}
              />
              <p>
                ZEO reserves the right to suspend or terminate access for any User who submits
                inaccurate information, misuses the Platform, or violates these Terms.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 09 — No Advice */}
          <div>
            <SectionLabel number="09">No Financial, Legal, or Tax Advice</SectionLabel>
            <Prose>
              <p>
                Nothing on this Platform constitutes financial advice, legal advice, tax advice,
                investment advice, accounting advice, or any other form of professional advice.
                All content, tools, calculators, guides, comparisons, and educational materials
                are provided for general informational purposes only.
              </p>
              <p>
                ZEO is not a registered investment advisor, broker-dealer, financial planner, tax
                advisor, or attorney. No communication from ZEO — whether through the Platform,
                email, chat, or any other channel — constitutes professional advice or creates a
                professional relationship of any kind.
              </p>
              <p>
                You should consult with qualified independent professionals — including licensed
                attorneys, certified public accountants, and registered financial advisors — before
                making any financing, legal, or tax decisions. Reliance on Platform content
                without independent professional consultation is at your sole risk.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 10 — State Availability */}
          <div>
            <SectionLabel number="10">State Availability and Geographic Limitations</SectionLabel>
            <Prose>
              <p>
                ZEO operates as a referral platform in the United States. Not all financing
                products are available in all states. The availability of particular products
                or Provider connections may be limited by:
              </p>
              <BulletList
                items={[
                  "State licensing requirements applicable to the Provider or the product type.",
                  "Provider-specific geographic underwriting restrictions.",
                  "Applicable state usury laws or interest rate caps.",
                  "State-specific disclosure or registration requirements.",
                  "Federal or state law restrictions on certain financing structures.",
                ]}
              />
              <p>
                ZEO makes no representation that the products or Providers referenced on this
                Platform are available, licensed, or compliant in any particular state. Users are
                responsible for understanding the regulatory requirements applicable to their
                jurisdiction before pursuing any financing product.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 11 — California Financing Law */}
          <div>
            <SectionLabel number="11">California Financing Law Notice</SectionLabel>
            <Prose>
              <p>
                California businesses should be aware that commercial financing products in
                California may be subject to the California Commercial Financing Disclosure Law
                (Senate Bill 1235) and related regulations administered by the California
                Department of Financial Protection and Innovation (&ldquo;DFPI&rdquo;). These
                regulations require certain commercial financing providers and brokers to provide
                standardized disclosures to business borrowers at the time of an offer.
              </p>
              <p>
                ZEO.co is not licensed as a commercial financing broker under the California
                Financing Law (CFL). ZEO does not arrange or negotiate the terms of any
                commercial financing on behalf of California businesses. Any required California
                disclosures are the responsibility of the applicable Provider, not ZEO.
              </p>
              <p>
                California Users are encouraged to review all Provider disclosures carefully and
                to contact the DFPI at dfpi.ca.gov if they have questions or complaints
                regarding a Provider&rsquo;s compliance with California law.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 12 — IP */}
          <div>
            <SectionLabel number="12">Intellectual Property</SectionLabel>
            <Prose>
              <p>
                All content on this Platform — including but not limited to text, graphics, logos,
                icons, images, data compilations, software, code, tools, calculators, guides,
                and the overall design and arrangement of the Platform — is owned by or licensed
                to ZEO and is protected by U.S. and international copyright, trademark, trade
                secret, and other intellectual property laws.
              </p>
              <p>
                Subject to your compliance with these Terms, ZEO grants you a limited,
                non-exclusive, non-transferable, revocable license to access and use the Platform
                for its intended purposes. This license does not include the right to:
              </p>
              <BulletList
                items={[
                  "Reproduce, distribute, publicly display, or create derivative works of any Platform content.",
                  "Scrape, crawl, or extract data from the Platform using automated means without written authorization.",
                  "Use any ZEO trademarks, service marks, or trade names without prior written consent.",
                  "Frame or mirror any portion of the Platform on any other website or application.",
                  "Reverse engineer, decompile, or disassemble any software underlying the Platform.",
                ]}
              />
              <p>
                All rights not expressly granted herein are reserved by ZEO.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 13 — Acceptable Use */}
          <div>
            <SectionLabel number="13">Acceptable Use Policy</SectionLabel>
            <Prose>
              <p>
                You agree not to use the Platform to:
              </p>
              <BulletList
                items={[
                  "Submit false, fraudulent, or misleading information about yourself or your business.",
                  "Impersonate any person or entity or misrepresent your affiliation with any person or entity.",
                  "Engage in any activity that violates applicable federal, state, or local law or regulation.",
                  "Transmit any unsolicited commercial communications, spam, or malware.",
                  "Attempt to gain unauthorized access to any part of the Platform or its underlying infrastructure.",
                  "Interfere with or disrupt the integrity or performance of the Platform or its servers.",
                  "Harvest or collect personal information about other Users without their consent.",
                  "Use the Platform for any purpose that competes with ZEO's business without written authorization.",
                  "Post or transmit any content that is defamatory, obscene, harassing, threatening, or invasive of another's privacy.",
                ]}
              />
              <p>
                ZEO reserves the right to investigate and take appropriate action against Users
                who violate this policy, including suspending or terminating access, removing
                content, and cooperating with law enforcement authorities.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 14 — Disclaimers */}
          <div>
            <SectionLabel number="14">Disclaimers of Warranties</SectionLabel>
            <Prose>
              <p>
                THE PLATFORM AND ALL CONTENT, TOOLS, AND SERVICES PROVIDED THEREON ARE OFFERED
                ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT ANY
                WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.
              </p>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ZEO EXPRESSLY DISCLAIMS ALL
                WARRANTIES, INCLUDING BUT NOT LIMITED TO: (A) ANY IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT;
                (B) ANY WARRANTIES ARISING FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE;
                AND (C) ANY WARRANTIES THAT THE PLATFORM WILL OPERATE UNINTERRUPTED, ERROR-FREE,
                OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
              <p>
                ZEO does not warrant the accuracy, completeness, timeliness, or reliability of
                any content on the Platform. Financing availability, product eligibility
                information, and illustrative rate ranges may change without notice and may not
                reflect current market conditions or Provider offerings.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 15 — Limitation of Liability */}
          <div>
            <SectionLabel number="15">Limitation of Liability</SectionLabel>
            <Prose>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ZEO AND ITS OFFICERS,
                DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, AND SERVICE PROVIDERS SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR
                EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST REVENUE, LOSS
                OF DATA, LOSS OF BUSINESS OPPORTUNITY, GOODWILL, OR ANTICIPATED SAVINGS, ARISING
                OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE PLATFORM, EVEN
                IF ZEO HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                IN NO EVENT SHALL ZEO&rsquo;S TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS
                ARISING OUT OF OR RELATED TO THESE TERMS OR THE PLATFORM EXCEED THE GREATER OF:
                (A) THE TOTAL AMOUNT PAID BY YOU TO ZEO IN THE TWELVE (12) MONTHS PRECEDING THE
                CLAIM, OR (B) ONE HUNDRED DOLLARS ($100.00).
              </p>
              <p>
                Some jurisdictions do not allow the exclusion of certain warranties or limitation
                of liability for certain types of damages. In those jurisdictions, ZEO&rsquo;s
                liability is limited to the fullest extent permitted by law.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 16 — Indemnification */}
          <div>
            <SectionLabel number="16">Indemnification</SectionLabel>
            <Prose>
              <p>
                You agree to defend, indemnify, and hold harmless ZEO and its officers, directors,
                employees, agents, affiliates, licensors, and service providers from and against
                any and all claims, liabilities, damages, judgments, awards, losses, costs,
                expenses, and fees (including reasonable attorneys&rsquo; fees) arising out of or
                relating to:
              </p>
              <BulletList
                items={[
                  "Your use of or access to the Platform.",
                  "Your violation of these Terms.",
                  "Your violation of any applicable law or regulation.",
                  "Your submission of false, inaccurate, or misleading information.",
                  "Your infringement of any intellectual property or other rights of any third party.",
                  "Any dispute between you and a third-party Provider.",
                ]}
              />
              <p>
                ZEO reserves the right to assume the exclusive defense and control of any matter
                subject to indemnification by you, in which case you agree to cooperate fully with
                ZEO in asserting any available defenses.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 17 — Dispute Resolution */}
          <div>
            <SectionLabel number="17">Dispute Resolution</SectionLabel>
            <Prose>
              <p>
                <strong className="text-[#0f0f0f] font-medium">Informal Resolution.</strong> Before
                initiating any formal proceeding, you agree to contact ZEO at{" "}
                <a
                  href="mailto:legal@zeo.co"
                  className="text-[#0f0f0f] hover:text-[#333333] transition-colors underline underline-offset-2 decoration-[#0f0f0f]/30"
                >
                  legal@zeo.co
                </a>{" "}
                and provide a written description of the dispute, the relief sought, and your
                contact information. The parties agree to attempt good-faith negotiation for at
                least thirty (30) days before initiating formal proceedings.
              </p>
              <p>
                <strong className="text-[#0f0f0f] font-medium">Governing Law.</strong> These Terms
                and any dispute arising from them shall be governed by and construed in accordance
                with the laws of the State of Arkansas, without regard to its conflict of law
                provisions. The United Nations Convention on Contracts for the International Sale
                of Goods shall not apply.
              </p>
              <p>
                <strong className="text-[#0f0f0f] font-medium">Binding Arbitration.</strong> Except
                as provided below, any dispute, claim, or controversy arising out of or relating to
                these Terms or the Platform that is not resolved through informal negotiation shall
                be submitted to and resolved by binding individual arbitration administered by the
                American Arbitration Association (&ldquo;AAA&rdquo;) under its Commercial
                Arbitration Rules then in effect. The arbitration shall be conducted by a single
                neutral arbitrator. The seat and location of arbitration shall be Benton County,
                Arkansas. The arbitrator shall apply Arkansas substantive law. The arbitrator&rsquo;s
                award shall be final and binding on the parties, and judgment on the award may be
                entered in any court of competent jurisdiction. The costs of arbitration, including
                AAA administrative fees, shall be allocated in accordance with the AAA&rsquo;s
                fee schedule unless the arbitrator determines that applicable law requires a
                different allocation.
              </p>
              <p>
                <strong className="text-[#0f0f0f] font-medium">Carve-Outs.</strong> Notwithstanding
                the foregoing, either party may: (a) bring an individual action in small claims
                court for disputes within that court&rsquo;s jurisdiction; and (b) seek emergency
                injunctive or other equitable relief in a court of competent jurisdiction to
                prevent actual or threatened infringement, misappropriation, or violation of a
                party&rsquo;s intellectual property rights or confidential information. The filing
                of an action for injunctive relief shall not be deemed a waiver of the right to
                arbitrate any other claims.
              </p>
              <p>
                <strong className="text-[#0f0f0f] font-medium">Opt-Out Right.</strong> You may
                opt out of this arbitration agreement by sending written notice to{" "}
                <a
                  href="mailto:legal@zeo.co"
                  className="text-[#0f0f0f] hover:text-[#333333] transition-colors underline underline-offset-2 decoration-[#0f0f0f]/30"
                >
                  legal@zeo.co
                </a>{" "}
                within thirty (30) days of first accessing the Platform. Your opt-out notice must
                include your full name, the email address associated with your use, and a clear
                statement that you are opting out of this arbitration agreement. An opt-out does
                not affect any other provision of these Terms.
              </p>
              <p>
                <strong className="text-[#0f0f0f] font-medium">Class Action Waiver.</strong> TO
                THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AND ZEO EACH WAIVE ANY RIGHT
                TO PURSUE ANY DISPUTE AS A CLASS, COLLECTIVE, CONSOLIDATED, COORDINATED, OR
                REPRESENTATIVE ACTION, OR AS A PRIVATE ATTORNEY GENERAL ACTION. THE ARBITRATOR
                MAY NOT CONSOLIDATE MORE THAN ONE PERSON&rsquo;S CLAIMS, AND MAY NOT PRESIDE OVER
                ANY CLASS OR REPRESENTATIVE PROCEEDING. IF THIS CLASS ACTION WAIVER IS FOUND
                UNENFORCEABLE AS TO ANY CLAIM, THAT CLAIM SHALL BE SEVERED FROM ARBITRATION AND
                LITIGATED IN COURT IN ACCORDANCE WITH SECTION 17, WITH ALL REMAINING CLAIMS
                PROCEEDING IN ARBITRATION.
              </p>
              <p>
                <strong className="text-[#0f0f0f] font-medium">Venue for Non-Arbitrated Claims.</strong>{" "}
                For any claims not subject to arbitration, the parties irrevocably consent to
                exclusive jurisdiction and venue in the state and federal courts located in Benton
                County, Arkansas, and waive any objection to such jurisdiction or venue.
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 18 — Changes */}
          <div>
            <SectionLabel number="18">Changes to These Terms</SectionLabel>
            <Prose>
              <p>
                ZEO reserves the right to modify, update, or replace these Terms at any time in
                its sole discretion. When we make material changes, we will update the effective
                date at the top of this page and, where appropriate, provide additional notice
                such as a banner notification on the Platform or an email to registered Users.
              </p>
              <p>
                Your continued use of the Platform after any modification to these Terms
                constitutes your acceptance of the updated Terms. If you do not agree to the
                modified Terms, your sole remedy is to discontinue use of the Platform.
              </p>
              <p>
                We recommend that you review these Terms periodically to stay informed of any
                changes. The current version of these Terms will always be available at{" "}
                <Link
                  href="/terms-of-service"
                  className="text-[#0f0f0f] hover:text-[#333333] transition-colors underline underline-offset-2 decoration-[#0f0f0f]/30"
                >
                  zeo.co/terms-of-service
                </Link>
                .
              </p>
            </Prose>
          </div>

          <Divider />

          {/* 19 — Contact */}
          <div>
            <SectionLabel number="19">Contact and Legal Inquiries</SectionLabel>
            <Prose>
              <p>
                For questions, concerns, or formal legal notices regarding these Terms of Service,
                please contact us at:
              </p>
            </Prose>
            <div className="mt-4 ml-[calc(1rem+0.75rem+0.75rem)] rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-5 py-5 inline-block">
              <p className="text-[0.6rem] font-mono font-semibold uppercase tracking-[0.12em] text-[#a3a3a3] mb-3">
                Legal Contact
              </p>
              <div className="space-y-1.5 text-sm">
                <p className="text-[#0f0f0f] font-medium">ZEO.co</p>
                <p className="text-[#737373]">Legal and Compliance</p>
                <a
                  href="mailto:legal@zeo.co"
                  className="inline-flex items-center gap-2 text-[#0f0f0f] hover:text-[#333333] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <rect x="1.5" y="3" width="11" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M1.5 4.5L7 8L12.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                  legal@zeo.co
                </a>
              </div>
            </div>
            <Prose>
              <p className="mt-4">
                For general inquiries, visit our{" "}
                <Link
                  href="/contact"
                  className="text-[#0f0f0f] hover:text-[#333333] transition-colors underline underline-offset-2 decoration-[#0f0f0f]/30"
                >
                  Contact page
                </Link>
                .
              </p>
            </Prose>
          </div>

        </div>
      </section>

      {/* Disclaimer footer */}
      <section className="py-10 border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <ProductDisclaimer type="general" />
        </div>
      </section>
    </main>
  );
}

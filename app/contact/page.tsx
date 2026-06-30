import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import FAQ from "@/components/ui/FAQ";
import ContactForm from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact ZEO.co | Business Financing Questions & Support",
  description:
    "Reach ZEO.co with questions about business financing, partnerships, or how our platform works. We respond within one business day.",
  path: "/contact",
  keywords: [
    "contact ZEO",
    "business financing support",
    "ZEO.co contact",
    "financing questions",
    "commercial lending contact",
  ],
});

const faqs = [
  {
    q: "How do I get started with financing?",
    a: "Submit a brief intake form at our /apply page. ZEO will review your business profile and identify the financing paths that best fit your situation.",
  },
  {
    q: "What if I'm interested in a partnership or referral arrangement?",
    a: "Lenders, brokers, advisors, and other intermediaries can learn more at our /partners page. We work with a range of professionals across the capital stack.",
  },
  {
    q: "How quickly will I hear back?",
    a: "We aim to respond to all inquiries within one business day. Complex financing questions may require additional review time.",
  },
  {
    q: "What types of financing does ZEO.co work with?",
    a: "We cover a broad range of business financing including SBA loans, factoring, merchant cash advances, acquisition financing, and private credit. Visit our financing page for more detail.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#0a0d0b] min-h-screen">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in Touch"
        title="Contact ZEO.co"
        subtitle="Questions about financing, partnerships, or how ZEO works? We're here to help."
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-[#eef2ec] mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#22c55e]">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
                      <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7e69] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@zeo.co"
                      className="text-[#eef2ec] hover:text-[#22c55e] transition-colors duration-150"
                    >
                      info@zeo.co
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1e2620] pt-8">
              <h3 className="text-sm font-semibold text-[#eef2ec] mb-3">Looking for Financing?</h3>
              <p className="text-sm text-[#9aaa98] mb-4">
                To explore your financing options, submit a brief intake through our apply page.
                We'll identify the best paths for your business.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#22c55e] hover:text-[#4ade80] transition-colors duration-150"
              >
                Start an Application
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="border-t border-[#1e2620] pt-8">
              <h3 className="text-sm font-semibold text-[#eef2ec] mb-3">
                Lenders &amp; Partners
              </h3>
              <p className="text-sm text-[#9aaa98] mb-4">
                Interested in a referral arrangement or strategic partnership? Visit our partners
                page to learn how we work with lenders, brokers, and advisors.
              </p>
              <Link
                href="/partners"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#22c55e] hover:text-[#4ade80] transition-colors duration-150"
              >
                Partner with ZEO
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#111512] border border-[#1e2620] rounded-2xl p-8">
              <h2 className="text-lg font-semibold text-[#eef2ec] mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <FAQ items={faqs} title="Common Questions" />

      <CTASection
        headline="Ready to explore your financing options?"
        subtext="Submit a brief intake and ZEO will identify the best paths for your business."
        primaryLabel="Start an Application"
        primaryHref="/apply"
        secondaryLabel="View Financing Options"
        secondaryHref="/financing"
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pb-16">
        <ProductDisclaimer type="general" />
      </div>
    </main>
  );
}

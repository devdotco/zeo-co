import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import PageHero from "@/components/ui/PageHero";
import ProductDisclaimer from "@/components/ui/ProductDisclaimer";
import MultiStepFinancingForm from "@/components/forms/MultiStepFinancingForm";

export const metadata: Metadata = buildMetadata({
  title: "Apply for Business Financing | ZEO.co",
  description:
    "Complete our guided intake to explore financing options that may fit your business. Subject to underwriting and third-party provider approval.",
  path: "/apply",
  keywords: [
    "apply for business financing",
    "business loan application",
    "working capital intake",
    "SBA loan intake",
    "commercial financing application",
  ],
});

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        breadcrumbs={[{ label: "Apply", href: "/apply" }]}
        eyebrow="Financing Intake"
        title="Start Your Financing Intake"
        subtitle="Answer a few questions about your business and goals. We'll use your responses to identify financing paths that may be a potential fit — no commitment required."
        compact
      />

      {/* Primary content */}
      <div className="bg-[#ffffff] min-h-screen">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 py-12">

          {/* Form card */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] overflow-hidden">
            {/* Card header bar */}
            <div className="border-b border-[#e5e5e5] px-6 py-4 flex items-center justify-between">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] font-mono">
                Intake Form
              </span>
              <span className="text-[0.65rem] font-mono text-[#a3a3a3]">
                Secure · Confidential
              </span>
            </div>

            {/* Form body */}
            <div className="px-6 py-8 md:px-8">
              <MultiStepFinancingForm />
            </div>
          </div>

          {/* Transparency section */}
          <section
            aria-label="How ZEO.co works"
            className="mt-10 rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] px-6 py-7 md:px-8"
          >
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] font-mono mb-5">
              How This Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">
                  ZEO is not a lender
                </p>
                <p className="text-sm text-[#737373] leading-relaxed">
                  ZEO.co is an independent platform. We do not originate, fund, or service loans or advances. All financing products are offered by third-party providers.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">
                  Where your data goes
                </p>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Information you submit may be shared with one or more financing providers to determine whether you may qualify. Review our Privacy Policy for full details.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0f0f0f] mb-1.5">
                  No guarantee of approval
                </p>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Completing this intake does not constitute an application, offer, or commitment. All financing is subject to underwriting and provider approval.
                </p>
              </div>
            </div>
          </section>

          {/* Compliance disclaimer */}
          <div className="mt-6">
            <ProductDisclaimer type="general" />
          </div>

        </div>
      </div>
    </>
  );
}

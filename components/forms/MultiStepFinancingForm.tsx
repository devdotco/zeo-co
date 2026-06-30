"use client";

import { useState, useCallback } from "react";
import { FORM_CONSENT } from "@/data/navigation";

// ── Types ─────────────────────────────────────────────────────────────────────

type LeadCategory =
  | "sba"
  | "factoring"
  | "equipment"
  | "acquisition"
  | "working_capital"
  | "private_credit"
  | "mca_high_risk"
  | "insufficient_info";

interface FormData {
  fundingPurpose: string;
  capitalAmount: string;
  businessType: string;
  monthlyRevenue: string;
  annualRevenue: string;
  ebitda: string;
  avgMonthlyInvoices: string;
  state: string;
  urgency: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  contactState: string;
  files: File[];
  consent: boolean;
}

const INITIAL: FormData = {
  fundingPurpose: "",
  capitalAmount: "",
  businessType: "",
  monthlyRevenue: "",
  annualRevenue: "",
  ebitda: "",
  avgMonthlyInvoices: "",
  state: "",
  urgency: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  contactState: "",
  files: [],
  consent: false,
};

// ── Lead routing logic ────────────────────────────────────────────────────────

function categorize(data: FormData): LeadCategory {
  const purpose = data.fundingPurpose.toLowerCase();
  const type = data.businessType.toLowerCase();

  if (purpose.includes("invoice") || purpose.includes("a/r") || type.includes("b2b invoice")) {
    return "factoring";
  }
  if (purpose.includes("acquisition") || purpose.includes("buying") || type.includes("buying")) {
    return "acquisition";
  }
  if (purpose.includes("equipment")) return "equipment";
  if (purpose.includes("sba") || data.capitalAmount === "$1M–$5M" || data.capitalAmount === "$5M+") {
    return "sba";
  }
  if (type.includes("asset-heavy") || type.includes("real estate")) return "private_credit";
  if (purpose.includes("working capital") || purpose.includes("payroll") || purpose.includes("inventory")) {
    return "working_capital";
  }
  if (!data.monthlyRevenue || data.businessType === "Startup") return "mca_high_risk";
  return "insufficient_info";
}

function matchMessage(cat: LeadCategory): string {
  switch (cat) {
    case "sba":
      return "Based on your profile, you may be a fit for SBA financing. SBA 7(a) or 504 loans may support your goals, subject to lender underwriting and SBA eligibility.";
    case "factoring":
      return "Your profile suggests invoice factoring or accounts receivable financing may be a fit. ZEO will review the best factoring path for your receivables cycle.";
    case "equipment":
      return "Equipment financing or equipment leasing may align with your stated need. ZEO will match your profile against relevant equipment lenders.";
    case "acquisition":
      return "Business acquisition financing — including SBA 7(a) acquisition loans and seller note structures — may be relevant for your situation.";
    case "working_capital":
      return "Working capital loans, business lines of credit, or revenue-based financing may be a fit. ZEO will evaluate the right structure based on your revenue and cash cycle.";
    case "private_credit":
      return "Private credit, asset-based lending, or hard money business loans may be relevant depending on your collateral and business profile.";
    case "mca_high_risk":
      return "Based on your current profile, some options may be limited. ZEO will review your submission and identify the most realistic paths forward.";
    default:
      return "ZEO will review your submission and identify the best potential financing paths based on your business profile.";
  }
}

// ── Step Option Button ────────────────────────────────────────────────────────

function OptionBtn({
  value,
  selected,
  onSelect,
  children,
}: {
  value: string;
  selected: boolean;
  onSelect: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
        selected
          ? "border-[#0f0f0f] bg-[#0f2a14] text-[#0f0f0f]"
          : "border-[#e5e5e5] bg-[#f5f5f5] text-[#737373] hover:border-[#2e3a2c] hover:text-white"
      }`}
      aria-pressed={selected}
    >
      {selected && (
        <svg className="flex-shrink-0 w-4 h-4" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="#0f0f0f" strokeWidth="1.5"/>
          <path d="M5 8L7 10L11 6" stroke="#0f0f0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {children}
    </button>
  );
}

// ── Input ─────────────────────────────────────────────────────────────────────

function Input({
  label,
  id,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#737373] mb-1.5">
        {label} {required && <span className="text-[#0f0f0f]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-[#f5f5f5] border border-[#e5e5e5] rounded-lg px-3 py-2.5 text-sm text-[#0f0f0f] placeholder-[#3a4a38] focus:outline-none focus:border-[#0f0f0f] transition-colors"
      />
    </div>
  );
}

// ── Progress Bar ──────────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex-1 h-1 bg-[#e5e5e5] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#0f0f0f] rounded-full transition-all duration-300"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>
      <span className="text-xs text-[#a3a3a3] tabular-nums">
        {step}/{total}
      </span>
    </div>
  );
}

// ── Main Form ─────────────────────────────────────────────────────────────────

const TOTAL_STEPS = 6;

export default function MultiStepFinancingForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [matchCategory, setMatchCategory] = useState<LeadCategory>("insufficient_info");

  const set = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const isFactoringPath =
    data.fundingPurpose === "Invoice / A/R financing" ||
    data.businessType === "B2B invoice-based business";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.consent) {
      setError("You must consent to submit this form.");
      return;
    }
    setSubmitting(true);
    setError(null);

    const category = categorize(data);
    setMatchCategory(category);

    const payload = {
      ...data,
      files: data.files.map((f) => f.name),
      leadCategory: category,
      timestamp: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      consentVersion: process.env.NEXT_PUBLIC_CONSENT_VERSION ?? "v1",
      consentText: FORM_CONSENT,
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("There was a problem submitting your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── Success State ──────────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div className="animate-fade-in text-center py-8">
        <div className="w-14 h-14 rounded-full bg-[#0f2a14] border border-[#0f0f0f]/30 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-[#0f0f0f]" viewBox="0 0 24 24" fill="none">
            <path d="M5 12L9 16L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">Submission Received</h3>
        <p className="text-sm text-[#737373] leading-relaxed max-w-sm mx-auto">
          {matchMessage(matchCategory)}
        </p>
        <p className="text-xs text-[#a3a3a3] mt-4 max-w-xs mx-auto">
          ZEO.co does not guarantee approval, funding, rates, terms, or loan amounts. Any offer will come from a third-party provider.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ProgressBar step={step} total={TOTAL_STEPS} />

      {/* ── Step 1: Purpose ─────────────────────────────────────────────── */}
      {step === 1 && (
        <div className="animate-fade-in">
          <h3 className="text-base font-semibold text-white mb-1">What do you need funding for?</h3>
          <p className="text-xs text-[#a3a3a3] mb-5">Select all that apply</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Working capital",
              "Business acquisition",
              "Equipment",
              "Commercial real estate",
              "Payroll / operating cash flow",
              "Inventory",
              "Invoice / A/R financing",
              "Purchase order fulfillment",
              "Debt refinance",
              "Franchise financing",
              "Expansion / new location",
              "Not sure",
            ].map((opt) => (
              <OptionBtn
                key={opt}
                value={opt}
                selected={data.fundingPurpose === opt}
                onSelect={(v) => set("fundingPurpose", v)}
              >
                {opt}
              </OptionBtn>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 2: Amount ──────────────────────────────────────────────── */}
      {step === 2 && (
        <div className="animate-fade-in">
          <h3 className="text-base font-semibold text-white mb-1">How much capital do you need?</h3>
          <p className="text-xs text-[#a3a3a3] mb-5">Approximate range is fine</p>
          <div className="grid grid-cols-2 gap-2">
            {["Under $50K", "$50K–$150K", "$150K–$500K", "$500K–$1M", "$1M–$5M", "$5M+"].map((opt) => (
              <OptionBtn
                key={opt}
                value={opt}
                selected={data.capitalAmount === opt}
                onSelect={(v) => set("capitalAmount", v)}
              >
                {opt}
              </OptionBtn>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 3: Business Type ────────────────────────────────────────── */}
      {step === 3 && (
        <div className="animate-fade-in">
          <h3 className="text-base font-semibold text-white mb-1">What best describes your business?</h3>
          <p className="text-xs text-[#a3a3a3] mb-5">Choose the closest match</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Startup",
              "1–2 years operating",
              "2+ years operating",
              "Buying an existing business",
              "Franchise owner / buyer",
              "Contractor / project-based",
              "B2B invoice-based business",
              "Asset-heavy business",
              "Real estate owner/operator",
            ].map((opt) => (
              <OptionBtn
                key={opt}
                value={opt}
                selected={data.businessType === opt}
                onSelect={(v) => set("businessType", v)}
              >
                {opt}
              </OptionBtn>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 4: Financial Profile ────────────────────────────────────── */}
      {step === 4 && (
        <div className="animate-fade-in space-y-4">
          <h3 className="text-base font-semibold text-white mb-1">Business financial profile</h3>
          <p className="text-xs text-[#a3a3a3] mb-3">Approximate figures are fine. Fields marked * are required.</p>
          <Input
            label="Monthly Revenue"
            id="monthlyRevenue"
            value={data.monthlyRevenue}
            onChange={(v) => set("monthlyRevenue", v)}
            placeholder="e.g. $75,000"
            required
          />
          <Input
            label="Annual Revenue"
            id="annualRevenue"
            value={data.annualRevenue}
            onChange={(v) => set("annualRevenue", v)}
            placeholder="e.g. $900,000"
          />
          <Input
            label="EBITDA or Seller Discretionary Earnings (optional)"
            id="ebitda"
            value={data.ebitda}
            onChange={(v) => set("ebitda", v)}
            placeholder="e.g. $150,000"
          />
          {isFactoringPath && (
            <Input
              label="Average Monthly Invoices"
              id="avgMonthlyInvoices"
              value={data.avgMonthlyInvoices}
              onChange={(v) => set("avgMonthlyInvoices", v)}
              placeholder="e.g. $200,000"
            />
          )}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-[#737373] mb-1.5">
              State of Business Registration <span className="text-[#0f0f0f]">*</span>
            </label>
            <input
              id="state"
              value={data.state}
              onChange={(e) => set("state", e.target.value)}
              placeholder="e.g. Texas"
              required
              className="w-full bg-[#f5f5f5] border border-[#e5e5e5] rounded-lg px-3 py-2.5 text-sm text-[#0f0f0f] placeholder-[#3a4a38] focus:outline-none focus:border-[#0f0f0f] transition-colors"
            />
          </div>
        </div>
      )}

      {/* ── Step 5: Urgency ───────────────────────────────────────────────── */}
      {step === 5 && (
        <div className="animate-fade-in">
          <h3 className="text-base font-semibold text-white mb-1">When do you need funding?</h3>
          <p className="text-xs text-[#a3a3a3] mb-5">Timeline helps us prioritize your review</p>
          <div className="grid grid-cols-2 gap-2">
            {["This week", "2–4 weeks", "30–60 days", "Exploring options"].map((opt) => (
              <OptionBtn
                key={opt}
                value={opt}
                selected={data.urgency === opt}
                onSelect={(v) => set("urgency", v)}
              >
                {opt}
              </OptionBtn>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 6: Contact ───────────────────────────────────────────────── */}
      {step === 6 && (
        <div className="animate-fade-in space-y-4">
          <h3 className="text-base font-semibold text-white mb-1">Where should we send your results?</h3>
          <div className="grid grid-cols-2 gap-3">
            <Input label="First & Last Name" id="name" value={data.name} onChange={(v) => set("name", v)} required placeholder="Jane Smith" />
            <Input label="Company Name" id="company" value={data.company} onChange={(v) => set("company", v)} placeholder="Acme LLC" />
            <Input label="Email" id="email" value={data.email} onChange={(v) => set("email", v)} type="email" required placeholder="jane@acme.com" />
            <Input label="Phone" id="phone" value={data.phone} onChange={(v) => set("phone", v)} type="tel" placeholder="(555) 000-0000" />
          </div>

          {/* File upload */}
          <div>
            <label htmlFor="files" className="block text-sm font-medium text-[#737373] mb-1.5">
              Upload documents (optional)
            </label>
            <input
              id="files"
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt"
              onChange={(e) => set("files", Array.from(e.target.files ?? []))}
              className="w-full bg-[#f5f5f5] border border-[#e5e5e5] rounded-lg px-3 py-2.5 text-sm text-[#a3a3a3] file:mr-3 file:rounded-md file:border-0 file:bg-[#e5e5e5] file:text-xs file:text-[#737373] file:px-3 file:py-1.5 cursor-pointer"
            />
            <p className="text-xs text-[#3a4a38] mt-1">P&L, tax returns, invoices, CIM, debt schedule, bank statements. Do not upload SSNs or login credentials.</p>
          </div>

          {/* Consent */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#f5f5f5] p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => set("consent", e.target.checked)}
                required
                className="mt-0.5 accent-[#0f0f0f] flex-shrink-0"
                aria-required="true"
              />
              <span className="text-xs text-[#a3a3a3] leading-relaxed">{FORM_CONSENT}</span>
            </label>
          </div>

          {error && (
            <p role="alert" className="text-xs text-red-400">{error}</p>
          )}
        </div>
      )}

      {/* ── Navigation ────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#e5e5e5]">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="text-sm text-[#a3a3a3] hover:text-white transition-colors"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            disabled={
              (step === 1 && !data.fundingPurpose) ||
              (step === 2 && !data.capitalAmount) ||
              (step === 3 && !data.businessType) ||
              (step === 4 && !data.monthlyRevenue) ||
              (step === 5 && !data.urgency)
            }
            className="px-5 py-2.5 rounded-xl bg-[#0f0f0f] text-white text-sm font-semibold hover:bg-[#333333] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting || !data.consent}
            className="px-6 py-2.5 rounded-xl bg-[#0f0f0f] text-white text-sm font-semibold hover:bg-[#333333] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {submitting ? "Submitting…" : "Submit"}
          </button>
        )}
      </div>
    </form>
  );
}

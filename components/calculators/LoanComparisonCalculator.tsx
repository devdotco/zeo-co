"use client";

import { useState } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

interface LoanOption {
  label: string;
  loanAmount: number;
  ratePct: number;
  termMonths: number;
  fees: number;
}

interface ComputedOption {
  monthlyPayment: number;
  totalRepayment: number;
  costOfCapital: number;
}

const DEFAULT_OPTIONS: LoanOption[] = [
  { label: "Option A", loanAmount: 250000, ratePct: 7.5, termMonths: 60, fees: 0 },
  { label: "Option B", loanAmount: 250000, ratePct: 9.0, termMonths: 48, fees: 2500 },
];

const OPTION_COLORS = [
  { accent: "#0f0f0f", bg: "#0f2a14", border: "#0f0f0f" },
  { accent: "#60a5fa", bg: "#0c1e35", border: "#60a5fa" },
  { accent: "#f59e0b", bg: "#221a06", border: "#f59e0b" },
  { accent: "#a78bfa", bg: "#1a1030", border: "#a78bfa" },
];

const RANK_LABELS = ["Lowest Cost", "2nd", "3rd", "4th"];

function computeOption(opt: LoanOption): ComputedOption {
  const { loanAmount, ratePct, termMonths, fees } = opt;
  const monthlyRate = ratePct / 100 / 12;
  let monthlyPayment: number;
  if (monthlyRate === 0 || termMonths === 0) {
    monthlyPayment = termMonths > 0 ? loanAmount / termMonths : 0;
  } else {
    const factor = Math.pow(1 + monthlyRate, termMonths);
    monthlyPayment = (loanAmount * monthlyRate * factor) / (factor - 1);
  }
  const totalRepayment = isFinite(monthlyPayment) ? monthlyPayment * termMonths + fees : 0;
  const costOfCapital = totalRepayment - loanAmount;
  return { monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0, totalRepayment, costOfCapital };
}

export default function LoanComparisonCalculator() {
  const [options, setOptions] = useState<LoanOption[]>(DEFAULT_OPTIONS);

  const computed = options.map(computeOption);

  // Rank by total repayment ascending
  const ranked = computed
    .map((c, i) => ({ ...c, index: i }))
    .sort((a, b) => a.totalRepayment - b.totalRepayment);

  const rankOf = (i: number) => ranked.findIndex((r) => r.index === i);

  function updateOption(index: number, field: keyof LoanOption, value: string | number) {
    setOptions((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  function addOption() {
    if (options.length >= 4) return;
    const labels = ["Option A", "Option B", "Option C", "Option D"];
    setOptions((prev) => [
      ...prev,
      { label: labels[prev.length], loanAmount: 250000, ratePct: 8.0, termMonths: 60, fees: 0 },
    ]);
  }

  function removeOption(index: number) {
    if (options.length <= 2) return;
    setOptions((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <CalculatorShell
      title="Loan Comparison Calculator"
      description="Compare 2 to 4 financing options side-by-side by total cost. Results ranked from lowest to highest."
      disclaimerType="general"
      relatedCalcs={[
        { label: "Business Loan Calculator", href: "/calculators/business-loan-calculator" },
        { label: "SBA 7(a) Calculator", href: "/calculators/sba-7a-loan-calculator" },
        { label: "Debt Refinance Calculator", href: "/calculators/business-debt-refinance-calculator" },
      ]}
    >
      {/* Option tabs / add-remove controls */}
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {options.map((opt, i) => {
          const color = OPTION_COLORS[i];
          return (
            <div
              key={i}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border"
              style={{
                backgroundColor: color.bg,
                borderColor: color.border + "66",
                color: color.accent,
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: color.accent }}
              />
              <span className="font-medium">{opt.label}</span>
              {options.length > 2 && (
                <button
                  onClick={() => removeOption(i)}
                  aria-label={`Remove ${opt.label}`}
                  className="ml-1 opacity-60 hover:opacity-100 transition-opacity leading-none text-base"
                  style={{ color: color.accent }}
                >
                  ×
                </button>
              )}
            </div>
          );
        })}
        {options.length < 4 && (
          <button
            onClick={addOption}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-[#e5e5e5] text-[#737373] hover:text-[#0f0f0f] hover:border-[#0f0f0f] transition-colors"
          >
            <span className="text-base leading-none">+</span>
            Add Option
          </button>
        )}
        <span className="text-[0.625rem] text-[#3a4a38] ml-auto hidden sm:block">
          {options.length}/4 options
        </span>
      </div>

      {/* Main two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Inputs */}
        <div className="flex flex-col gap-6">
          {options.map((opt, i) => {
            const color = OPTION_COLORS[i];
            return (
              <div
                key={i}
                className="rounded-xl border p-4"
                style={{ borderColor: color.border + "44", backgroundColor: "#0c0f0d" }}
              >
                {/* Option header */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color.accent }}
                  />
                  <input
                    type="text"
                    value={opt.label}
                    maxLength={20}
                    onChange={(e) => updateOption(i, "label", e.target.value)}
                    className="text-xs font-semibold bg-transparent border-none outline-none text-[#0f0f0f] w-28 cursor-text"
                    aria-label="Option label"
                  />
                  <span
                    className="ml-auto text-[0.625rem] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: color.bg,
                      color: color.accent,
                    }}
                  >
                    {RANK_LABELS[rankOf(i)] ?? ""}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <CalcInput
                    label="Loan Amount"
                    id={`loanAmount-${i}`}
                    value={opt.loanAmount}
                    onChange={(v) => updateOption(i, "loanAmount", v)}
                    min={1000}
                    max={10000000}
                    step={1000}
                    prefix="$"
                  />
                  <CalcInput
                    label="Interest Rate"
                    id={`rate-${i}`}
                    value={opt.ratePct}
                    onChange={(v) => updateOption(i, "ratePct", v)}
                    min={0}
                    max={99}
                    step={0.1}
                    suffix="%"
                  />
                  <CalcInput
                    label="Term"
                    id={`term-${i}`}
                    value={opt.termMonths}
                    onChange={(v) => updateOption(i, "termMonths", v)}
                    min={1}
                    max={360}
                    step={1}
                    suffix="mo"
                  />
                  <CalcInput
                    label="Upfront Fees"
                    id={`fees-${i}`}
                    value={opt.fees}
                    onChange={(v) => updateOption(i, "fees", v)}
                    min={0}
                    max={500000}
                    step={100}
                    prefix="$"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Results ranked by total cost */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">
            Ranked by Total Cost
          </p>

          {ranked.map((result, rankIdx) => {
            const opt = options[result.index];
            const color = OPTION_COLORS[result.index];
            const isLowest = rankIdx === 0;
            return (
              <div
                key={result.index}
                className="rounded-xl border p-4 transition-all duration-200"
                style={{
                  borderColor: isLowest ? color.border + "55" : "#e5e5e5",
                  backgroundColor: isLowest ? color.bg : "#ffffff",
                }}
              >
                {/* Result header */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color.accent }}
                  />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: isLowest ? color.accent : "#0f0f0f" }}
                  >
                    {opt.label}
                  </span>
                  <span
                    className="ml-auto text-[0.625rem] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: isLowest ? color.accent + "22" : "#e5e5e5",
                      color: isLowest ? color.accent : "#a3a3a3",
                    }}
                  >
                    #{rankIdx + 1} {isLowest ? "· Lowest Cost" : ""}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] p-3">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-1.5">
                      Monthly
                    </p>
                    <p
                      className="text-sm font-semibold tabular-nums"
                      style={{ color: isLowest ? color.accent : "#0f0f0f" }}
                    >
                      {fmt(result.monthlyPayment)}
                    </p>
                  </div>

                  <div className="rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] p-3">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-1.5">
                      Total Repaid
                    </p>
                    <p className="text-sm font-semibold tabular-nums text-[#0f0f0f]">
                      {fmt(result.totalRepayment)}
                    </p>
                  </div>

                  <div className="rounded-lg bg-[#f5f5f5] border border-[#e5e5e5] p-3">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-[#a3a3a3] mb-1.5">
                      Cost of Capital
                    </p>
                    <p className="text-sm font-semibold tabular-nums text-[#737373]">
                      {fmt(result.costOfCapital)}
                    </p>
                  </div>
                </div>

                {/* Cost vs lowest bar (only show when not the lowest) */}
                {rankIdx > 0 && ranked[0].totalRepayment > 0 && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[0.6rem] text-[#a3a3a3]">Extra cost vs lowest</span>
                      <span className="text-[0.6rem] font-semibold tabular-nums text-[#737373]">
                        +{fmt(result.totalRepayment - ranked[0].totalRepayment)}
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-[#e5e5e5] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.min(100, ((result.totalRepayment - ranked[0].totalRepayment) / ranked[0].totalRepayment) * 100 * 4)}%`,
                          backgroundColor: color.accent + "88",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Disclaimer note */}
          <p className="text-[0.625rem] text-[#3a4a38] leading-relaxed mt-1">
            Lowest total cost is one factor among many. Also consider collateral requirements,
            approval speed, prepayment penalties, covenants, and your lender relationship before
            selecting a financing option.
          </p>
        </div>
      </div>

      {/* Summary comparison bar */}
      {ranked.length >= 2 && ranked[0].totalRepayment > 0 && (
        <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Total Repayment Comparison
          </p>
          <div className="flex flex-col gap-2.5">
            {ranked.map((result, rankIdx) => {
              const opt = options[result.index];
              const color = OPTION_COLORS[result.index];
              const pct =
                ranked[ranked.length - 1].totalRepayment > 0
                  ? (result.totalRepayment / ranked[ranked.length - 1].totalRepayment) * 100
                  : 0;
              return (
                <div key={result.index} className="flex items-center gap-3">
                  <span className="text-[0.625rem] w-16 flex-shrink-0 font-medium text-[#737373] truncate">
                    {opt.label}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-[#e5e5e5] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: rankIdx === 0 ? color.accent : color.accent + "88",
                      }}
                    />
                  </div>
                  <span className="text-[0.625rem] tabular-nums text-[#737373] w-20 text-right flex-shrink-0">
                    {fmt(result.totalRepayment)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </CalculatorShell>
  );
}

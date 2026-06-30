"use client";

import { useState } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

// SBA guarantee fee: 3.5% on the guaranteed portion above $150,000.
// SBA generally guarantees 75% of loans over $150k (85% for loans ≤$150k).
// Fee applies to the guaranteed portion only.
function calcGuaranteeFee(loanAmount: number): number {
  if (loanAmount <= 0) return 0;
  const THRESHOLD = 150_000;
  const GUARANTEE_PCT = loanAmount <= THRESHOLD ? 0.85 : 0.75;
  const FEE_RATE = 0.035; // 3.5%
  if (loanAmount <= THRESHOLD) return 0; // fee waived on loans ≤$150k (simplified)
  const guaranteedPortion = loanAmount * GUARANTEE_PCT;
  const portionAboveThreshold = guaranteedPortion - THRESHOLD * GUARANTEE_PCT;
  return Math.max(0, portionAboveThreshold * FEE_RATE);
}

export default function SBALoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(500_000);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRatePct, setInterestRatePct] = useState(7.5);
  const [termYears, setTermYears] = useState(10);
  const [includeGuaranteeFee, setIncludeGuaranteeFee] = useState(true);
  const [closingCosts, setClosingCosts] = useState(0);

  // Derived calculations
  const financedAmount = Math.max(0, loanAmount - downPayment);
  const guaranteeFee = includeGuaranteeFee ? calcGuaranteeFee(loanAmount) : 0;
  const cashRequired = downPayment + closingCosts + guaranteeFee;

  const months = termYears * 12;
  const monthlyRate = interestRatePct / 100 / 12;

  let monthlyPayment: number;
  if (monthlyRate === 0 || months === 0) {
    monthlyPayment = months > 0 ? financedAmount / months : 0;
  } else {
    const factor = Math.pow(1 + monthlyRate, months);
    monthlyPayment = (financedAmount * monthlyRate * factor) / (factor - 1);
  }

  const totalRepayment = monthlyPayment * months;
  const totalInterest = totalRepayment - financedAmount;
  const annualDebtService = monthlyPayment * 12;

  const principalPct = totalRepayment > 0 ? (financedAmount / totalRepayment) * 100 : 0;
  const interestPct = totalRepayment > 0 ? (totalInterest / totalRepayment) * 100 : 0;

  return (
    <CalculatorShell
      title="SBA Loan Calculator"
      description="Estimate monthly payments, guarantee fee, and total cost for an SBA 7(a) loan."
      disclaimerType="sba"
      relatedCalcs={[
        { label: "SBA 7(a) Full Calculator", href: "/calculators/sba-7a-loan-calculator" },
        { label: "Business Loan Calculator", href: "/calculators/business-loan-calculator" },
        { label: "DSCR Calculator", href: "/calculators/dscr-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ── Inputs ── */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">Loan Parameters</p>

          <CalcInput
            label="Loan Amount"
            id="loanAmount"
            value={loanAmount}
            onChange={setLoanAmount}
            min={10_000}
            max={5_000_000}
            step={5_000}
            prefix="$"
            note="Maximum SBA 7(a) loan is $5,000,000"
          />

          <CalcInput
            label="Down Payment / Equity Injection"
            id="downPayment"
            value={downPayment}
            onChange={setDownPayment}
            min={0}
            max={loanAmount}
            step={5_000}
            prefix="$"
            note="Your cash contribution — reduces financed amount"
          />

          <CalcInput
            label="Annual Interest Rate"
            id="interestRate"
            value={interestRatePct}
            onChange={setInterestRatePct}
            min={0.01}
            max={30}
            step={0.25}
            suffix="%"
            note="SBA 7(a) rates are typically Prime + 2.25–4.75%"
          />

          <CalcInput
            label="Loan Term"
            id="termYears"
            value={termYears}
            onChange={setTermYears}
            min={1}
            max={25}
            step={1}
            suffix="yrs"
            note="Up to 10 yrs (working capital), 25 yrs (real estate)"
          />

          <CalcInput
            label="Closing Costs"
            id="closingCosts"
            value={closingCosts}
            onChange={setClosingCosts}
            min={0}
            max={100_000}
            step={500}
            prefix="$"
            note="Lender fees, appraisals, title — varies by lender"
          />

          {/* Guarantee Fee Toggle */}
          <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] px-4 py-3">
            <label className="flex items-center justify-between gap-3 cursor-pointer">
              <div>
                <p className="text-xs font-medium text-[#737373]">SBA Guarantee Fee</p>
                <p className="text-[0.625rem] text-[#a3a3a3] mt-0.5">
                  3.5% on guaranteed portion above $150k
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={includeGuaranteeFee}
                onClick={() => setIncludeGuaranteeFee((v) => !v)}
                className={`relative inline-flex h-5 w-9 shrink-0 rounded-full border transition-colors focus:outline-none focus:ring-1 focus:ring-[#0f0f0f] focus:ring-offset-1 focus:ring-offset-[#ffffff] ${
                  includeGuaranteeFee
                    ? "bg-[#0f0f0f] border-[#0f0f0f]"
                    : "bg-[#e5e5e5] border-[#e5e5e5]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transition-transform mt-[1px] ${
                    includeGuaranteeFee ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </button>
            </label>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">Payment Summary</p>

          <CalcResult
            label="Monthly Payment"
            value={fmt(monthlyPayment)}
            highlight
            note={`${months} equal principal + interest payments`}
          />

          <CalcResult
            label="Annual Debt Service"
            value={fmt(annualDebtService)}
            note="Total payments due per year"
          />

          <CalcResult
            label="Total Repayment"
            value={fmt(totalRepayment)}
            note={`Principal ${fmt(financedAmount)} + Interest ${fmt(totalInterest)}`}
          />

          <CalcResult
            label="Total Interest"
            value={fmt(totalInterest)}
            note={`Over ${termYears} year${termYears !== 1 ? "s" : ""}`}
          />

          <div className="mt-1">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
              Cash Required at Closing
            </p>
            <div className="rounded-xl border border-[#e5e5e5] bg-[#ffffff] divide-y divide-[#e5e5e5] overflow-hidden">
              <div className="flex justify-between items-center px-4 py-2.5">
                <span className="text-xs text-[#737373]">Down Payment</span>
                <span className="text-xs tabular-nums text-[#0f0f0f]">{fmt(downPayment)}</span>
              </div>
              {includeGuaranteeFee && (
                <div className="flex justify-between items-center px-4 py-2.5">
                  <span className="text-xs text-[#737373]">SBA Guarantee Fee</span>
                  <span className="text-xs tabular-nums text-[#0f0f0f]">{fmt(guaranteeFee)}</span>
                </div>
              )}
              {closingCosts > 0 && (
                <div className="flex justify-between items-center px-4 py-2.5">
                  <span className="text-xs text-[#737373]">Closing Costs</span>
                  <span className="text-xs tabular-nums text-[#0f0f0f]">{fmt(closingCosts)}</span>
                </div>
              )}
              <div className="flex justify-between items-center px-4 py-2.5 bg-[#f5f5f5]">
                <span className="text-xs font-semibold text-[#0f0f0f]">Total Cash Required</span>
                <span className="text-sm font-semibold tabular-nums text-[#0f0f0f]">{fmt(cashRequired)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown Bar */}
      {isFinite(totalRepayment) && totalRepayment > 0 && (
        <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Cost Breakdown
          </p>
          <div className="flex rounded-full overflow-hidden h-2 mb-3">
            <div
              className="bg-[#0f0f0f] transition-all duration-300"
              style={{ width: `${principalPct}%` }}
            />
            <div
              className="bg-[#a3a3a3] transition-all duration-300"
              style={{ width: `${interestPct}%` }}
            />
          </div>
          <div className="flex gap-4 text-xs text-[#737373]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0f0f0f]" />
              Principal {principalPct.toFixed(1)}%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#a3a3a3]" />
              Interest {interestPct.toFixed(1)}%
            </span>
          </div>
        </div>
      )}
    </CalculatorShell>
  );
}

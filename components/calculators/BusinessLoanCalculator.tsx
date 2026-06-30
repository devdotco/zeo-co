"use client";

import { useState } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

export default function BusinessLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [interestRatePct, setInterestRatePct] = useState(7.5);
  const [termYears, setTermYears] = useState(5);
  const [originationFeePct, setOriginationFeePct] = useState(0);

  // Derived values
  const months = termYears * 12;
  const monthlyRate = interestRatePct / 100 / 12;
  const originationFee = loanAmount * (originationFeePct / 100);
  const effectiveAmount = loanAmount - originationFee;

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / months;
  } else {
    const factor = Math.pow(1 + monthlyRate, months);
    monthlyPayment = (loanAmount * monthlyRate * factor) / (factor - 1);
  }

  const totalRepayment = monthlyPayment * months;
  const totalInterest = totalRepayment - loanAmount;
  const annualDebtService = monthlyPayment * 12;

  return (
    <CalculatorShell
      title="Business Loan Calculator"
      description="Estimate monthly payments, total interest, and amortization for a business term loan."
      disclaimerType="general"
      relatedCalcs={[
        { label: "SBA 7(a) Calculator", href: "/calculators/sba-loan-calculator" },
        { label: "MCA Cost Calculator", href: "/calculators/mca-calculator" },
        { label: "Revenue-Based Financing", href: "/calculators/revenue-based-financing-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs — left column */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69]">Loan Parameters</p>

          <CalcInput
            label="Loan Amount"
            id="loanAmount"
            value={loanAmount}
            onChange={setLoanAmount}
            min={1000}
            max={10000000}
            step={1000}
            prefix="$"
            note="Principal amount you intend to borrow"
          />

          <CalcInput
            label="Annual Interest Rate"
            id="interestRate"
            value={interestRatePct}
            onChange={setInterestRatePct}
            min={0.01}
            max={99}
            step={0.1}
            suffix="%"
            note="Fixed annual interest rate (APR)"
          />

          <CalcInput
            label="Loan Term"
            id="termYears"
            value={termYears}
            onChange={setTermYears}
            min={1}
            max={30}
            step={1}
            suffix="yrs"
            note="Repayment period in years"
          />

          <CalcInput
            label="Origination Fee"
            id="originationFee"
            value={originationFeePct}
            onChange={setOriginationFeePct}
            min={0}
            max={10}
            step={0.25}
            suffix="%"
            note="One-time fee deducted from proceeds (optional)"
          />
        </div>

        {/* Results — right column */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69]">Payment Summary</p>

          <CalcResult
            label="Monthly Payment"
            value={fmt(monthlyPayment)}
            highlight
            note="Fixed principal + interest payment each month"
          />

          <CalcResult
            label="Annual Debt Service"
            value={fmt(annualDebtService)}
            note="Total payments due per year"
          />

          <CalcResult
            label="Total Repayment"
            value={fmt(totalRepayment)}
            note={`Over ${months} months`}
          />

          <CalcResult
            label="Total Interest"
            value={fmt(totalInterest)}
            note="Interest paid over the full term"
          />

          {originationFeePct > 0 && (
            <CalcResult
              label="Net Proceeds"
              value={fmt(effectiveAmount)}
              note={`After ${fmt(originationFee)} origination fee`}
            />
          )}
        </div>
      </div>

      {/* Amortization breakdown bar */}
      {isFinite(totalRepayment) && totalRepayment > 0 && (
        <div className="mt-6 rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-4">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
            Cost Breakdown
          </p>
          <div className="flex rounded-full overflow-hidden h-2 mb-3">
            <div
              className="bg-[#22c55e] transition-all duration-300"
              style={{ width: `${(loanAmount / totalRepayment) * 100}%` }}
            />
            <div
              className="bg-[#6b7e69] transition-all duration-300"
              style={{ width: `${(totalInterest / totalRepayment) * 100}%` }}
            />
          </div>
          <div className="flex gap-4 text-xs text-[#9aaa98]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#22c55e]" />
              Principal {((loanAmount / totalRepayment) * 100).toFixed(1)}%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#6b7e69]" />
              Interest {((totalInterest / totalRepayment) * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      )}
    </CalculatorShell>
  );
}

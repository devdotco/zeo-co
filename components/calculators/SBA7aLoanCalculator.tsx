"use client";

import { useState } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

const PRIME_RATE = 8.5; // update periodically

function calcMonthlyPayment(principal: number, annualRatePct: number, termYears: number): number {
  if (principal <= 0 || termYears <= 0) return 0;
  const months = termYears * 12;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / months;
  const factor = Math.pow(1 + r, months);
  return (principal * r * factor) / (factor - 1);
}

function calcGuaranteeFee(loanAmount: number): number {
  if (loanAmount <= 150_000) return 0;
  const guaranteedPortion = loanAmount * 0.75;
  return (guaranteedPortion - 150_000 * 0.75) * 0.035;
}

export default function SBA7aLoanCalculator() {
  // Loan inputs
  const [purchasePrice, setPurchasePrice] = useState(1_500_000);
  const [equityInjection, setEquityInjection] = useState(150_000);
  const [spreadPct, setSpreadPct] = useState(2.75);
  const [termYears, setTermYears] = useState(10);
  const [closingCosts, setClosingCosts] = useState(20_000);

  // DSCR inputs
  const [annualNOI, setAnnualNOI] = useState(250_000);

  const loanAmount = Math.max(0, purchasePrice - equityInjection);
  const interestRate = PRIME_RATE + spreadPct;
  const monthlyPayment = calcMonthlyPayment(loanAmount, interestRate, termYears);
  const annualDebtService = monthlyPayment * 12;
  const totalRepayment = monthlyPayment * termYears * 12;
  const totalInterest = totalRepayment - loanAmount;
  const guaranteeFee = calcGuaranteeFee(loanAmount);
  const totalCashRequired = equityInjection + closingCosts + guaranteeFee;

  const dscr = annualDebtService > 0 ? annualNOI / annualDebtService : 0;
  const dscrOk = dscr >= 1.25;

  const principalPct = totalRepayment > 0 ? (loanAmount / totalRepayment) * 100 : 0;
  const interestPct = 100 - principalPct;

  return (
    <CalculatorShell
      title="SBA 7(a) Loan Calculator"
      description="Estimate payments, DSCR, and total acquisition cost for an SBA 7(a) loan. ZEO.co is not an SBA lender. Actual terms depend on lender underwriting and SBA program rules."
      disclaimerType="sba"
      relatedCalcs={[
        { label: "SBA Loan Calculator", href: "/calculators/sba-loan-calculator" },
        { label: "DSCR Calculator", href: "/calculators/dscr-calculator" },
        { label: "Business Acquisition Calculator", href: "/calculators/business-acquisition-loan-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69]">Deal Structure</p>

          <CalcInput
            label="Purchase / Project Price"
            id="purchasePrice"
            value={purchasePrice}
            onChange={setPurchasePrice}
            min={50_000}
            max={5_000_000}
            step={10_000}
            prefix="$"
            note="Total acquisition or project cost"
          />

          <CalcInput
            label="Equity Injection (Down Payment)"
            id="equityInjection"
            value={equityInjection}
            onChange={setEquityInjection}
            min={0}
            max={purchasePrice}
            step={5_000}
            prefix="$"
            note="SBA typically requires 10%+ equity injection"
          />

          <CalcInput
            label="Interest Rate Spread Above Prime"
            id="spreadPct"
            value={spreadPct}
            onChange={setSpreadPct}
            min={0}
            max={5}
            step={0.25}
            suffix="%"
            note={`Prime ${PRIME_RATE}% + spread = ${(PRIME_RATE + spreadPct).toFixed(2)}% current rate`}
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
            max={200_000}
            step={500}
            prefix="$"
            note="Lender fees, appraisals, title, packaging fees"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mt-2">DSCR Check</p>

          <CalcInput
            label="Annual Net Operating Income (NOI)"
            id="annualNOI"
            value={annualNOI}
            onChange={setAnnualNOI}
            min={0}
            max={10_000_000}
            step={5_000}
            prefix="$"
            note="Business cash flow available to service debt"
          />
        </div>

        {/* Results */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69]">Payment Summary</p>

          <CalcResult
            label="Monthly Payment"
            value={fmt(monthlyPayment)}
            highlight
            note={`${termYears * 12} payments at ${(PRIME_RATE + spreadPct).toFixed(2)}%`}
          />

          <CalcResult
            label="Annual Debt Service"
            value={fmt(annualDebtService)}
            note="Total P&I due each year"
          />

          <CalcResult
            label="Total Interest"
            value={fmt(totalInterest)}
            note={`Over ${termYears} year${termYears !== 1 ? "s" : ""}`}
          />

          {/* DSCR Result */}
          <div
            className={`rounded-xl border p-4 ${
              dscrOk ? "border-[#22c55e]/30 bg-[#0f1a10]" : "border-amber-700/40 bg-amber-950/20"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-[#9aaa98]">Debt Service Coverage Ratio</p>
                <p className={`text-2xl font-bold tabular-nums mt-0.5 ${dscrOk ? "text-[#22c55e]" : "text-amber-400"}`}>
                  {isFinite(dscr) && dscr > 0 ? dscr.toFixed(2) : "—"}x
                </p>
              </div>
              <span
                className={`text-[0.6rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  dscrOk
                    ? "bg-[#22c55e]/10 text-[#22c55e]"
                    : "bg-amber-400/10 text-amber-400"
                }`}
              >
                {dscrOk ? "Passes 1.25x" : "Below 1.25x"}
              </span>
            </div>
            <p className="text-[0.625rem] text-[#6b7e69] mt-2">
              {dscrOk
                ? "DSCR meets typical SBA minimum threshold. Lenders set their own standards."
                : "DSCR is below the common 1.25x SBA threshold. Actual lender requirements vary."}
            </p>
          </div>

          {/* Sources & Uses */}
          <div className="mt-1">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
              Sources &amp; Uses
            </p>
            <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] divide-y divide-[#1e2620] overflow-hidden">
              <div className="flex justify-between items-center px-4 py-2.5">
                <span className="text-xs text-[#9aaa98]">SBA Loan Proceeds</span>
                <span className="text-xs tabular-nums text-[#eef2ec]">{fmt(loanAmount)}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-2.5">
                <span className="text-xs text-[#9aaa98]">Equity Injection</span>
                <span className="text-xs tabular-nums text-[#eef2ec]">{fmt(equityInjection)}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-2.5 bg-[#0f1a10]">
                <span className="text-xs font-semibold text-[#eef2ec]">Total Project Cost</span>
                <span className="text-sm font-semibold tabular-nums text-[#22c55e]">{fmt(purchasePrice)}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-2.5 mt-1">
                <span className="text-xs text-[#9aaa98]">SBA Guarantee Fee</span>
                <span className="text-xs tabular-nums text-[#eef2ec]">{fmt(guaranteeFee)}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-2.5">
                <span className="text-xs text-[#9aaa98]">Closing Costs</span>
                <span className="text-xs tabular-nums text-[#eef2ec]">{fmt(closingCosts)}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-2.5 bg-[#0f1a10]">
                <span className="text-xs font-semibold text-[#eef2ec]">Total Cash Required</span>
                <span className="text-sm font-semibold tabular-nums text-[#22c55e]">{fmt(totalCashRequired)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Breakdown Bar */}
      {isFinite(totalRepayment) && totalRepayment > 0 && (
        <div className="mt-6 rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-4">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">
            Total Repayment Breakdown
          </p>
          <div className="flex rounded-full overflow-hidden h-2 mb-3">
            <div className="bg-[#22c55e] transition-all duration-300" style={{ width: `${principalPct}%` }} />
            <div className="bg-[#6b7e69] transition-all duration-300" style={{ width: `${interestPct}%` }} />
          </div>
          <div className="flex gap-4 text-xs text-[#9aaa98]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#22c55e]" />
              Principal {principalPct.toFixed(1)}%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#6b7e69]" />
              Interest {interestPct.toFixed(1)}%
            </span>
          </div>
        </div>
      )}
    </CalculatorShell>
  );
}

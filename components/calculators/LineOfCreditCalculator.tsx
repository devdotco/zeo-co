"use client";

import { useState } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

export default function LineOfCreditCalculator() {
  const [creditLimit, setCreditLimit] = useState(250000);
  const [drawAmount, setDrawAmount] = useState(100000);
  const [interestRatePct, setInterestRatePct] = useState(9.5);
  const [drawMonths, setDrawMonths] = useState(12);
  const [repayMonths, setRepayMonths] = useState(12);
  const [annualFee, setAnnualFee] = useState(500);

  // Derived calculations
  // Simple interest on drawAmount over the draw period
  const dailyRate = interestRatePct / 100 / 365;
  const drawDays = drawMonths * 30.4375; // avg days per month
  const interestCost = drawAmount * dailyRate * drawDays;

  // Pro-rate annual fee over months drawn
  const feeForPeriod = annualFee * (drawMonths / 12);

  const totalRepayment = drawAmount + interestCost + feeForPeriod;

  // Estimated monthly payment over repayment period (principal + interest amortized simply)
  const estMonthlyPayment = repayMonths > 0 ? totalRepayment / repayMonths : 0;

  const availableCredit = Math.max(0, creditLimit - drawAmount);

  // Effective annual cost percentage
  const effectiveAnnualRate =
    drawAmount > 0
      ? ((interestCost + feeForPeriod) / drawAmount) * (12 / drawMonths) * 100
      : 0;

  // Utilization
  const utilization = creditLimit > 0 ? (drawAmount / creditLimit) * 100 : 0;

  return (
    <CalculatorShell
      title="Line of Credit Calculator"
      description="Estimate interest cost, monthly payments, and total repayment on a business line of credit draw."
      disclaimerType="general"
      relatedCalcs={[
        { label: "Business Loan Calculator", href: "/calculators/business-loan-calculator" },
        { label: "SBA 7(a) Loan Calculator", href: "/calculators/sba-7a-loan-calculator" },
        { label: "MCA Cost Calculator", href: "/calculators/mca-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs — left column */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">Line of Credit Terms</p>

          <CalcInput
            label="Credit Limit"
            id="creditLimit"
            value={creditLimit}
            onChange={setCreditLimit}
            min={1000}
            max={10000000}
            step={5000}
            prefix="$"
            note="Total approved credit line amount"
          />

          <CalcInput
            label="Draw Amount"
            id="drawAmount"
            value={drawAmount}
            onChange={setDrawAmount}
            min={0}
            max={creditLimit}
            step={1000}
            prefix="$"
            note="Amount you plan to draw from the line"
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
            note="Annual rate charged on drawn balance"
          />

          <CalcInput
            label="Draw Period"
            id="drawMonths"
            value={drawMonths}
            onChange={setDrawMonths}
            min={1}
            max={120}
            step={1}
            suffix="mos"
            note="Months the balance remains outstanding"
          />

          <CalcInput
            label="Repayment Period"
            id="repayMonths"
            value={repayMonths}
            onChange={setRepayMonths}
            min={1}
            max={120}
            step={1}
            suffix="mos"
            note="Months to repay principal + interest"
          />

          <CalcInput
            label="Annual Fee"
            id="annualFee"
            value={annualFee}
            onChange={setAnnualFee}
            min={0}
            max={25000}
            step={50}
            prefix="$"
            note="Yearly maintenance fee (pro-rated if draw period under 12 months)"
          />
        </div>

        {/* Results — right column */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">Cost Summary</p>

          <CalcResult
            label="Est. Monthly Payment"
            value={fmt(estMonthlyPayment)}
            highlight
            note={`Over ${repayMonths} month${repayMonths !== 1 ? "s" : ""} of repayment`}
          />

          <CalcResult
            label="Interest Cost"
            value={fmt(interestCost)}
            note={`Simple interest over ${drawMonths} month${drawMonths !== 1 ? "s" : ""} drawn`}
          />

          <CalcResult
            label="Total Repayment"
            value={fmt(totalRepayment)}
            note="Draw amount + interest + pro-rated fee"
          />

          <CalcResult
            label="Available Credit"
            value={fmt(availableCredit)}
            note={`${utilization.toFixed(1)}% of limit utilized`}
          />

          {drawAmount > 0 && (
            <CalcResult
              label="Effective Annual Rate"
              value={`${effectiveAnnualRate.toFixed(2)}%`}
              note="Annualized cost including fees on drawn balance"
            />
          )}
        </div>
      </div>

      {/* Utilization + cost breakdown bar */}
      {drawAmount > 0 && isFinite(totalRepayment) && totalRepayment > 0 && (
        <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Cost Breakdown
          </p>
          <div className="flex rounded-full overflow-hidden h-2 mb-3">
            <div
              className="bg-[#0f0f0f] transition-all duration-300"
              style={{ width: `${(drawAmount / totalRepayment) * 100}%` }}
            />
            <div
              className="bg-[#a3a3a3] transition-all duration-300"
              style={{ width: `${(interestCost / totalRepayment) * 100}%` }}
            />
            {feeForPeriod > 0 && (
              <div
                className="bg-[#a3a3a3] transition-all duration-300"
                style={{ width: `${(feeForPeriod / totalRepayment) * 100}%` }}
              />
            )}
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-[#737373]">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0f0f0f]" />
              Principal {((drawAmount / totalRepayment) * 100).toFixed(1)}%
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#a3a3a3]" />
              Interest {((interestCost / totalRepayment) * 100).toFixed(1)}%
            </span>
            {feeForPeriod > 0 && (
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#a3a3a3]" />
                Fees {((feeForPeriod / totalRepayment) * 100).toFixed(1)}%
              </span>
            )}
          </div>
        </div>
      )}

      {/* Credit utilization bar */}
      {creditLimit > 0 && (
        <div className="mt-3 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">
              Credit Utilization
            </p>
            <p className="text-[0.625rem] tabular-nums text-[#737373]">
              {fmt(drawAmount)} of {fmt(creditLimit)}
            </p>
          </div>
          <div className="rounded-full overflow-hidden h-1.5 bg-[#e5e5e5]">
            <div
              className="h-full bg-[#0f0f0f] transition-all duration-300 rounded-full"
              style={{ width: `${Math.min(utilization, 100)}%` }}
            />
          </div>
        </div>
      )}
    </CalculatorShell>
  );
}

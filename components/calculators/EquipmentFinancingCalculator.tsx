"use client";

import { useState, useMemo } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

export default function EquipmentFinancingCalculator() {
  const [equipmentCost, setEquipmentCost] = useState(150000);
  const [downPayment, setDownPayment] = useState(15000);
  const [interestRatePct, setInterestRatePct] = useState(6.5);
  const [termMonths, setTermMonths] = useState(60);
  const [residualPct, setResidualPct] = useState(0);

  const results = useMemo(() => {
    const principal = Math.max(0, equipmentCost - downPayment);
    const residualValue = (residualPct / 100) * equipmentCost;
    const amortizedPrincipal = Math.max(0, principal - residualValue);
    const monthlyRate = interestRatePct / 100 / 12;
    const n = Math.max(1, termMonths);

    let monthlyPayment: number;
    if (monthlyRate === 0) {
      monthlyPayment = amortizedPrincipal / n;
    } else {
      // Standard amortization on (cost - down - residual), balloon residual at end
      monthlyPayment =
        (amortizedPrincipal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);
    }

    const totalRepayment = monthlyPayment * n + residualValue;
    const totalInterest = totalRepayment - principal;
    const totalCash = downPayment + totalRepayment;

    return {
      monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0,
      totalCash: isFinite(totalCash) ? totalCash : 0,
      totalRepayment: isFinite(totalRepayment) ? totalRepayment : 0,
    };
  }, [equipmentCost, downPayment, interestRatePct, termMonths, residualPct]);

  return (
    <CalculatorShell
      title="Equipment Financing Calculator"
      description="Estimate monthly payments, total interest, and cash required for equipment loans."
      disclaimerType="general"
      relatedCalcs={[
        { label: "Business Loan", href: "/calculators/business-loan-calculator" },
        { label: "Line of Credit", href: "/calculators/line-of-credit-calculator" },
        { label: "Invoice Factoring", href: "/calculators/invoice-factoring-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-1">Loan Parameters</p>

          <CalcInput
            label="Equipment Cost"
            id="equipment-cost"
            value={equipmentCost}
            onChange={setEquipmentCost}
            min={1000}
            max={10000000}
            step={1000}
            prefix="$"
            note="Total purchase price of the equipment"
          />

          <CalcInput
            label="Down Payment"
            id="down-payment"
            value={downPayment}
            onChange={setDownPayment}
            min={0}
            max={equipmentCost}
            step={500}
            prefix="$"
            note="Upfront cash paid at signing"
          />

          <CalcInput
            label="Annual Interest Rate"
            id="interest-rate"
            value={interestRatePct}
            onChange={setInterestRatePct}
            min={0}
            max={50}
            step={0.1}
            suffix="%"
            note="Annualized rate quoted by lender"
          />

          <CalcInput
            label="Loan Term"
            id="term-months"
            value={termMonths}
            onChange={setTermMonths}
            min={6}
            max={120}
            step={6}
            suffix="mo"
            note="Repayment period in months"
          />

          <CalcInput
            label="Residual / Balloon"
            id="residual-pct"
            value={residualPct}
            onChange={setResidualPct}
            min={0}
            max={80}
            step={1}
            suffix="% of cost"
            note="End-of-term balloon as % of equipment cost (0 = none)"
          />
        </div>

        {/* Results */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-1">Estimated Payments</p>

          <CalcResult
            label="Monthly Payment"
            value={fmt(results.monthlyPayment)}
            highlight
            note="Regular monthly installment (excl. balloon)"
          />

          <CalcResult
            label="Total Interest Paid"
            value={fmt(results.totalInterest)}
            note="Interest over the full loan term"
          />

          <CalcResult
            label="Total Repayment"
            value={fmt(results.totalRepayment)}
            note="Principal + interest + residual balloon"
          />

          <CalcResult
            label="Total Cash Required"
            value={fmt(results.totalCash)}
            note="Down payment + total repayment"
          />

          {/* Summary bar */}
          <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-4 mt-2">
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-3">Financing Summary</p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#9aaa98]">Equipment Cost</span>
                <span className="text-[#eef2ec] tabular-nums">{fmt(equipmentCost)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#9aaa98]">Amount Financed</span>
                <span className="text-[#eef2ec] tabular-nums">{fmt(Math.max(0, equipmentCost - downPayment))}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[#9aaa98]">Down Payment</span>
                <span className="text-[#eef2ec] tabular-nums">{fmt(downPayment)}</span>
              </div>
              {residualPct > 0 && (
                <div className="flex justify-between text-xs">
                  <span className="text-[#9aaa98]">Balloon Payment</span>
                  <span className="text-[#eef2ec] tabular-nums">{fmt((residualPct / 100) * equipmentCost)}</span>
                </div>
              )}
              <div className="border-t border-[#1e2620] pt-2 flex justify-between text-xs">
                <span className="text-[#9aaa98]">Effective Cost of Capital</span>
                <span className="text-[#22c55e] tabular-nums font-semibold">
                  {equipmentCost > 0
                    ? `${((results.totalInterest / equipmentCost) * 100).toFixed(1)}% of cost`
                    : "—"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}

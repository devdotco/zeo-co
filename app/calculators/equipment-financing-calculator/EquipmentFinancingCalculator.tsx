"use client";

import { useState, useMemo } from "react";
import CalculatorShell, {
  CalcInput,
  CalcResult,
  fmt,
} from "@/components/calculators/CalculatorShell";

function computeLoan(
  principal: number,
  annualRatePct: number,
  termMonths: number,
  residualValue: number
): {
  monthlyPayment: number;
  totalRepayment: number;
  totalInterest: number;
} {
  if (principal <= 0 || termMonths <= 0) {
    return { monthlyPayment: 0, totalRepayment: 0, totalInterest: 0 };
  }

  const r = annualRatePct / 100 / 12;

  let monthlyPayment: number;

  if (r === 0) {
    // Zero-interest edge case
    monthlyPayment = (principal - residualValue) / termMonths;
  } else {
    // Standard balloon amortization:
    // PV = principal, FV = residualValue (balloon at end)
    // PMT = (PV - FV / (1+r)^n) * r / (1 - (1+r)^-n)
    const factor = Math.pow(1 + r, termMonths);
    const pvResidual = residualValue / factor;
    monthlyPayment =
      ((principal - pvResidual) * r) / (1 - Math.pow(1 + r, -termMonths));
  }

  const totalRepayment = monthlyPayment * termMonths + residualValue;
  const totalInterest = totalRepayment - principal;

  return { monthlyPayment, totalRepayment, totalInterest };
}

export default function EquipmentFinancingCalculator() {
  const [equipmentCost, setEquipmentCost] = useState(150000);
  const [downPayment, setDownPayment] = useState(15000);
  const [interestRatePct, setInterestRatePct] = useState(6.5);
  const [termMonths, setTermMonths] = useState(60);
  const [residualPct, setResidualPct] = useState(0);

  const results = useMemo(() => {
    const financed = Math.max(0, equipmentCost - downPayment);
    const residualValue = equipmentCost * (residualPct / 100);
    const { monthlyPayment, totalRepayment, totalInterest } = computeLoan(
      financed,
      interestRatePct,
      termMonths,
      residualValue
    );
    const totalCash = downPayment + totalRepayment;
    return { financed, residualValue, monthlyPayment, totalRepayment, totalInterest, totalCash };
  }, [equipmentCost, downPayment, interestRatePct, termMonths, residualPct]);

  return (
    <CalculatorShell
      title="Equipment Financing Calculator"
      description="Estimate monthly payments, total interest, and cash required for equipment loans with optional balloon/residual."
      disclaimerType="general"
      relatedCalcs={[
        { label: "Business Loan", href: "/calculators/business-loan-calculator" },
        { label: "SBA 7(a) Loan", href: "/calculators/sba-7a-loan-calculator" },
        { label: "Working Capital", href: "/calculators/working-capital-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* ── Inputs ── */}
        <div className="space-y-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3]">
            Loan Parameters
          </p>

          <CalcInput
            label="Equipment Cost"
            id="equipmentCost"
            value={equipmentCost}
            onChange={setEquipmentCost}
            prefix="$"
            min={0}
            step={1000}
            note="Total purchase price of the equipment"
          />

          <CalcInput
            label="Down Payment"
            id="downPayment"
            value={downPayment}
            onChange={setDownPayment}
            prefix="$"
            min={0}
            step={1000}
            note="Amount paid upfront (typically 10–20%)"
          />

          <CalcInput
            label="Annual Interest Rate"
            id="interestRate"
            value={interestRatePct}
            onChange={setInterestRatePct}
            suffix="%"
            min={0}
            max={40}
            step={0.1}
          />

          <CalcInput
            label="Loan Term"
            id="termMonths"
            value={termMonths}
            onChange={setTermMonths}
            suffix="mo"
            min={1}
            max={120}
            step={1}
            note="Typical equipment loans: 24–84 months"
          />

          <CalcInput
            label="Residual / Balloon Value"
            id="residualPct"
            value={residualPct}
            onChange={setResidualPct}
            suffix="% of cost"
            min={0}
            max={60}
            step={0.5}
            note="Balloon payment due at end of term (0 = fully amortizing)"
          />

          {/* Summary row */}
          <div className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-4 py-3 flex items-center justify-between">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">
              Amount Financed
            </span>
            <span className="text-sm font-semibold tabular-nums text-[#0f0f0f]">
              {fmt(results.financed)}
            </span>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="space-y-3 lg:sticky lg:top-6 lg:self-start">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#a3a3a3]">
            Estimated Results
          </p>

          <CalcResult
            label="Monthly Payment"
            value={fmt(results.monthlyPayment)}
            highlight
            note="Principal + interest per month"
          />

          <CalcResult
            label="Total Interest"
            value={fmt(results.totalInterest)}
            note="Finance charges over the life of the loan"
          />

          {results.residualValue > 0 && (
            <CalcResult
              label="Balloon / Residual Payment"
              value={fmt(results.residualValue)}
              note="Lump sum due at end of term"
            />
          )}

          <CalcResult
            label="Total Repayment"
            value={fmt(results.totalRepayment)}
            note={
              results.residualValue > 0
                ? "All monthly payments plus balloon"
                : "All monthly payments combined"
            }
          />

          <CalcResult
            label="Total Cash Required"
            value={fmt(results.totalCash)}
            note="Down payment + total repayment"
          />

          {/* Rate context bar */}
          <div className="rounded-lg border border-[#e5e5e5] bg-[#ffffff] px-4 py-3 space-y-2">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">
              Cost of Financing
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#737373]">Interest as % of cost</span>
              <span className="text-xs font-semibold tabular-nums text-[#0f0f0f]">
                {equipmentCost > 0
                  ? ((results.totalInterest / equipmentCost) * 100).toFixed(1) + "%"
                  : "—"}
              </span>
            </div>
            <div className="w-full h-1 rounded-full bg-[#e5e5e5] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#0f0f0f] transition-all duration-300"
                style={{
                  width:
                    equipmentCost > 0
                      ? `${Math.min(100, (results.totalInterest / equipmentCost) * 100 * 5)}%`
                      : "0%",
                }}
              />
            </div>
            <p className="text-[0.6rem] text-[#a3a3a3]">
              Bar scaled to 20% max for context
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}

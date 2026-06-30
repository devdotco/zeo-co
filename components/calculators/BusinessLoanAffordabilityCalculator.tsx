"use client";

import { useState, useMemo } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

function calcMaxLoan(maxAnnualPayment: number, annualRatePct: number, termYears: number): number {
  if (maxAnnualPayment <= 0) return 0;
  const months = termYears * 12;
  const monthlyRate = annualRatePct / 100 / 12;
  const monthlyPayment = maxAnnualPayment / 12;
  if (monthlyRate === 0) {
    return monthlyPayment * months;
  }
  const factor = Math.pow(1 + monthlyRate, months);
  // PV = PMT * (1 - (1+r)^-n) / r
  return monthlyPayment * (1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate;
}

export default function BusinessLoanAffordabilityCalculator() {
  const [ebitda, setEbitda] = useState(300000);
  const [targetDscr, setTargetDscr] = useState(1.25);
  const [existingDS, setExistingDS] = useState(0);
  const [interestRatePct, setInterestRatePct] = useState(7.5);
  const [termYears, setTermYears] = useState(10);

  // Core outputs
  const maxAnnualPayment = useMemo(() => {
    const result = (ebitda / targetDscr) - existingDS;
    return Math.max(0, result);
  }, [ebitda, targetDscr, existingDS]);

  const maxLoanAmount = useMemo(
    () => calcMaxLoan(maxAnnualPayment, interestRatePct, termYears),
    [maxAnnualPayment, interestRatePct, termYears]
  );

  const actualDscr = useMemo(() => {
    if (maxAnnualPayment <= 0 || maxLoanAmount <= 0) return 0;
    const months = termYears * 12;
    const monthlyRate = interestRatePct / 100 / 12;
    let annualDS: number;
    if (monthlyRate === 0) {
      annualDS = (maxLoanAmount / months) * 12;
    } else {
      const factor = Math.pow(1 + monthlyRate, months);
      const mp = (maxLoanAmount * monthlyRate * factor) / (factor - 1);
      annualDS = mp * 12;
    }
    return ebitda / (annualDS + existingDS);
  }, [ebitda, maxLoanAmount, existingDS, interestRatePct, termYears]);

  // Sensitivity table: rate vs term
  const rates = [5.5, 6.5, 7.5, 8.5, 9.5];
  const terms = [5, 7, 10, 15, 20];

  const sensitivityTable = useMemo(() => {
    return rates.map((r) =>
      terms.map((t) => calcMaxLoan(maxAnnualPayment, r, t))
    );
  }, [maxAnnualPayment]);

  const dscrHealthy = actualDscr >= targetDscr;

  return (
    <CalculatorShell
      title="Business Loan Affordability Calculator"
      description="Find the maximum loan your EBITDA can support given a target DSCR, rate, and term."
      disclaimerType="general"
      relatedCalcs={[
        { label: "Business Loan Calculator", href: "/calculators/business-loan-calculator" },
        { label: "DSCR Calculator", href: "/calculators/dscr-calculator" },
        { label: "SBA 7(a) Calculator", href: "/calculators/sba-7a-loan-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ── Inputs ── */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69]">Business Cash Flow</p>

          <CalcInput
            label="Annual EBITDA"
            id="ebitda"
            value={ebitda}
            onChange={setEbitda}
            min={0}
            max={50000000}
            step={10000}
            prefix="$"
            note="Earnings before interest, taxes, depreciation, and amortization"
          />

          <CalcInput
            label="Target DSCR"
            id="targetDscr"
            value={targetDscr}
            onChange={setTargetDscr}
            min={1.0}
            max={5.0}
            step={0.05}
            note="Minimum debt service coverage ratio lenders typically require (1.25 is common)"
          />

          <CalcInput
            label="Existing Annual Debt Service"
            id="existingDS"
            value={existingDS}
            onChange={setExistingDS}
            min={0}
            max={10000000}
            step={1000}
            prefix="$"
            note="Annual payments on existing loans, leases, and obligations"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69] pt-2">New Loan Terms</p>

          <CalcInput
            label="Annual Interest Rate"
            id="interestRate"
            value={interestRatePct}
            onChange={setInterestRatePct}
            min={0.1}
            max={40}
            step={0.1}
            suffix="%"
            note="Fixed annual rate on the proposed new loan"
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
        </div>

        {/* ── Results ── */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b7e69]">Affordability Summary</p>

          <CalcResult
            label="Maximum Supportable Loan"
            value={fmt(maxLoanAmount)}
            highlight
            note={`At ${interestRatePct}% over ${termYears} years with DSCR ${targetDscr}`}
          />

          <CalcResult
            label="Max Annual Debt Payment"
            value={fmt(maxAnnualPayment)}
            note="EBITDA ÷ Target DSCR − Existing Obligations"
          />

          <CalcResult
            label="Max Monthly Payment"
            value={fmt(maxAnnualPayment / 12)}
            note="Max annual payment divided by 12"
          />

          {/* DSCR health indicator */}
          <div
            className={`rounded-xl border p-4 ${
              dscrHealthy
                ? "border-[#22c55e]/30 bg-[#0f2a14]"
                : "border-[#a16207]/30 bg-[#1a1400]"
            }`}
          >
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-2">
              Implied DSCR
            </p>
            <div className="flex items-baseline gap-2">
              <p
                className={`text-xl font-semibold tabular-nums ${
                  dscrHealthy ? "text-[#22c55e]" : "text-[#eab308]"
                }`}
              >
                {isFinite(actualDscr) && actualDscr > 0 ? actualDscr.toFixed(2) : "—"}x
              </p>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  dscrHealthy
                    ? "bg-[#22c55e]/15 text-[#22c55e]"
                    : "bg-[#eab308]/15 text-[#eab308]"
                }`}
              >
                {dscrHealthy ? "Qualifying" : "Below Target"}
              </span>
            </div>
            <p className="text-[0.625rem] text-[#3a4a38] mt-1.5">
              Target: {targetDscr}x — EBITDA ÷ Total Annual Debt Service
            </p>
          </div>

          {existingDS > 0 && (
            <CalcResult
              label="Remaining EBITDA After All DS"
              value={fmt(ebitda - maxAnnualPayment - existingDS)}
              note="Cushion remaining after all debt obligations"
            />
          )}
        </div>
      </div>

      {/* ── Sensitivity Table ── */}
      {maxAnnualPayment > 0 && (
        <div className="mt-6">
          <div className="rounded-xl border border-[#1e2620] bg-[#0a0d0b] p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69]">
                  Max Loan · Rate vs. Term Sensitivity
                </p>
                <p className="text-[0.625rem] text-[#3a4a38] mt-0.5">
                  Based on {fmt(maxAnnualPayment)} annual payment capacity
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs tabular-nums" style={{ minWidth: "380px" }}>
                <thead>
                  <tr>
                    <th className="text-left text-[#6b7e69] font-semibold pb-2 pr-3 whitespace-nowrap">
                      Rate ↓ / Term →
                    </th>
                    {terms.map((t) => (
                      <th
                        key={t}
                        className={`text-right pb-2 px-2 font-semibold whitespace-nowrap ${
                          t === termYears ? "text-[#22c55e]" : "text-[#9aaa98]"
                        }`}
                      >
                        {t} yr
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rates.map((r, ri) => (
                    <tr
                      key={r}
                      className="border-t border-[#1e2620]"
                    >
                      <td
                        className={`py-2 pr-3 font-medium whitespace-nowrap ${
                          r === interestRatePct ? "text-[#22c55e]" : "text-[#9aaa98]"
                        }`}
                      >
                        {r.toFixed(1)}%
                      </td>
                      {terms.map((t, ti) => {
                        const val = sensitivityTable[ri][ti];
                        const isActive =
                          r === interestRatePct && t === termYears;
                        return (
                          <td
                            key={t}
                            className={`text-right py-2 px-2 ${
                              isActive
                                ? "text-[#22c55e] font-semibold"
                                : "text-[#eef2ec]"
                            }`}
                          >
                            {fmt(val)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[0.625rem] text-[#3a4a38] mt-3">
              Highlighted column and row match your selected rate and term. All values assume fully amortizing payments.
            </p>
          </div>
        </div>
      )}
    </CalculatorShell>
  );
}

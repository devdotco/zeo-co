"use client";

import { useState } from "react";
import CalculatorShell, { CalcInput, CalcResult, fmt } from "@/components/calculators/CalculatorShell";

function amortizedPayment(principal: number, annualRatePct: number, termYears: number): number {
  const months = termYears * 12;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / months;
  const factor = Math.pow(1 + r, months);
  return (principal * r * factor) / (factor - 1);
}

function totalInterest(payment: number, termYears: number, principal: number): number {
  return payment * termYears * 12 - principal;
}

export default function BusinessDebtRefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState(500000);
  const [currentPayment, setCurrentPayment] = useState(7500);
  const [currentRatePct, setCurrentRatePct] = useState(11);
  const [newRatePct, setNewRatePct] = useState(7.5);
  const [newTermYears, setNewTermYears] = useState(7);
  const [refinanceFees, setRefinanceFees] = useState(8000);

  // Derived
  const newPayment = amortizedPayment(currentBalance, newRatePct, newTermYears);
  const monthlySavings = currentPayment - newPayment;

  const currentRemainingMonths = currentBalance > 0 && currentPayment > 0
    ? Math.ceil(
        -Math.log(1 - (currentBalance * (currentRatePct / 100 / 12)) / currentPayment) /
          Math.log(1 + currentRatePct / 100 / 12)
      )
    : 0;

  const currentTotalInterest =
    currentRemainingMonths > 0
      ? currentPayment * currentRemainingMonths - currentBalance
      : 0;

  const newTotalInterest = totalInterest(newPayment, newTermYears, currentBalance);
  const totalInterestDiff = currentTotalInterest - newTotalInterest;

  const breakEvenMonths =
    monthlySavings > 0 ? Math.ceil(refinanceFees / monthlySavings) : Infinity;

  const breakEvenDisplay =
    !isFinite(breakEvenMonths) || monthlySavings <= 0
      ? "N/A"
      : breakEvenMonths < 120
      ? `${breakEvenMonths} mo`
      : "10+ yrs";

  const netBenefit = totalInterestDiff - refinanceFees;
  const savingsValid = monthlySavings > 0;

  return (
    <CalculatorShell
      title="Business Debt Refinance Calculator"
      description="Estimate your new monthly payment, monthly savings, and how long until you break even on refinancing costs."
      disclaimerType="general"
      relatedCalcs={[
        { label: "Business Loan Calculator", href: "/calculators/business-loan-calculator" },
        { label: "SBA 7(a) Loan Calculator", href: "/calculators/sba-7a-loan-calculator" },
        { label: "DSCR Calculator", href: "/calculators/dscr-calculator" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs — left column */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">Current Loan</p>

          <CalcInput
            label="Outstanding Balance"
            id="currentBalance"
            value={currentBalance}
            onChange={setCurrentBalance}
            min={1000}
            max={50000000}
            step={1000}
            prefix="$"
            note="Remaining principal on existing debt"
          />

          <CalcInput
            label="Current Monthly Payment"
            id="currentPayment"
            value={currentPayment}
            onChange={setCurrentPayment}
            min={1}
            max={1000000}
            step={100}
            prefix="$"
            note="Your existing P&I payment each month"
          />

          <CalcInput
            label="Current Interest Rate"
            id="currentRate"
            value={currentRatePct}
            onChange={setCurrentRatePct}
            min={0.01}
            max={99}
            step={0.1}
            suffix="%"
            note="Annual rate on the existing loan"
          />

          <div className="h-px bg-[#e5e5e5]" />

          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">New Loan Terms</p>

          <CalcInput
            label="New Interest Rate"
            id="newRate"
            value={newRatePct}
            onChange={setNewRatePct}
            min={0.01}
            max={99}
            step={0.1}
            suffix="%"
            note="Proposed annual rate on refinanced loan"
          />

          <CalcInput
            label="New Loan Term"
            id="newTerm"
            value={newTermYears}
            onChange={setNewTermYears}
            min={1}
            max={30}
            step={1}
            suffix="yrs"
            note="Repayment period for the new loan"
          />

          <CalcInput
            label="Refinance Fees"
            id="refinanceFees"
            value={refinanceFees}
            onChange={setRefinanceFees}
            min={0}
            max={500000}
            step={500}
            prefix="$"
            note="Origination, closing, and prepayment costs"
          />
        </div>

        {/* Results — right column */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a3a3a3]">Refinance Summary</p>

          <CalcResult
            label="New Monthly Payment"
            value={fmt(newPayment)}
            highlight
            note={`vs. current ${fmt(currentPayment)}/mo`}
          />

          <CalcResult
            label="Monthly Savings"
            value={savingsValid ? fmt(monthlySavings) : "—"}
            note={
              savingsValid
                ? "Reduction in monthly debt service"
                : "New payment exceeds current — review terms"
            }
          />

          <CalcResult
            label="Break-Even Period"
            value={breakEvenDisplay}
            note={
              savingsValid && isFinite(breakEvenMonths)
                ? `Recoup ${fmt(refinanceFees)} in fees by month ${breakEvenMonths}`
                : "Months until savings offset refinance costs"
            }
          />

          <CalcResult
            label="Total Interest Difference"
            value={isFinite(totalInterestDiff) && currentRemainingMonths > 0 ? fmt(Math.abs(totalInterestDiff)) : "—"}
            note={
              isFinite(totalInterestDiff) && currentRemainingMonths > 0
                ? totalInterestDiff >= 0
                  ? "Less interest over life of new loan"
                  : "More total interest — longer term adds cost"
                : "Enter current payment to calculate remaining term"
            }
          />

          {isFinite(netBenefit) && currentRemainingMonths > 0 && (
            <CalcResult
              label="Net Benefit After Fees"
              value={fmt(Math.abs(netBenefit))}
              note={
                netBenefit >= 0
                  ? "Interest savings minus refinance costs"
                  : "Fees exceed interest savings — reconsider timeline"
              }
            />
          )}
        </div>
      </div>

      {/* Rate comparison bar */}
      {currentRatePct > 0 && newRatePct > 0 && (
        <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#ffffff] p-4">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-3">
            Rate Comparison
          </p>
          <div className="flex flex-col gap-2.5">
            <div>
              <div className="flex justify-between text-xs text-[#737373] mb-1">
                <span>Current rate</span>
                <span className="tabular-nums text-[#0f0f0f]">{currentRatePct.toFixed(2)}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#e5e5e5] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#a3a3a3] transition-all duration-300"
                  style={{ width: `${Math.min((currentRatePct / 25) * 100, 100)}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-[#737373] mb-1">
                <span>New rate</span>
                <span className="tabular-nums text-[#0f0f0f]">{newRatePct.toFixed(2)}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#e5e5e5] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#0f0f0f] transition-all duration-300"
                  style={{ width: `${Math.min((newRatePct / 25) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
          {currentRatePct > newRatePct && (
            <p className="text-[0.625rem] text-[#a3a3a3] mt-3">
              Rate reduction of {(currentRatePct - newRatePct).toFixed(2)} percentage points
            </p>
          )}
        </div>
      )}
    </CalculatorShell>
  );
}

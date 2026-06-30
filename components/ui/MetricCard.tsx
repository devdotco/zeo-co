interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  note?: string;
  highlight?: boolean;
}

export default function MetricCard({ label, value, unit, note, highlight }: MetricCardProps) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "border-[#0f0f0f]/30 bg-[#f5f5f5]" : "border-[#e5e5e5] bg-[#f5f5f5]"}`}>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#a3a3a3] mb-2">{label}</p>
      <p className={`text-2xl font-semibold tabular-nums tracking-tight ${highlight ? "text-[#0f0f0f]" : "text-white"}`}>
        {value}
        {unit && <span className="text-sm font-normal text-[#a3a3a3] ml-1">{unit}</span>}
      </p>
      {note && <p className="text-xs text-[#a3a3a3] mt-1.5">{note}</p>}
    </div>
  );
}

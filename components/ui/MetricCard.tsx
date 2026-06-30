interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  note?: string;
  highlight?: boolean;
}

export default function MetricCard({ label, value, unit, note, highlight }: MetricCardProps) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "border-[#22c55e]/30 bg-[#0f2a14]" : "border-[#1e2620] bg-[#111512]"}`}>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#6b7e69] mb-2">{label}</p>
      <p className={`text-2xl font-semibold tabular-nums tracking-tight ${highlight ? "text-[#22c55e]" : "text-white"}`}>
        {value}
        {unit && <span className="text-sm font-normal text-[#6b7e69] ml-1">{unit}</span>}
      </p>
      {note && <p className="text-xs text-[#6b7e69] mt-1.5">{note}</p>}
    </div>
  );
}

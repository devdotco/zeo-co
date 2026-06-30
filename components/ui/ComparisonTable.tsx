interface ComparisonRow {
  feature: string;
  [key: string]: string;
}

interface ComparisonTableProps {
  columns: string[];
  rows: ComparisonRow[];
  highlightCol?: string;
}

export default function ComparisonTable({ columns, rows, highlightCol }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#e5e5e5]">
      <table className="table-zeo min-w-full">
        <thead>
          <tr>
            <th>Feature</th>
            {columns.map((col) => (
              <th
                key={col}
                className={col === highlightCol ? "text-[#0f0f0f]" : ""}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="font-medium text-[#0f0f0f]">{row.feature}</td>
              {columns.map((col) => (
                <td
                  key={col}
                  className={col === highlightCol ? "text-[#0f0f0f]" : ""}
                >
                  {row[col] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Home({ expenses }) {
  const total = expenses.reduce((s, e) => s + e.amount, 0);

  const now = new Date();
  const currentMonth = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}`;

  const monthlyTotal = expenses
    .filter((e) => e.date.startsWith(currentMonth))
    .reduce((s, e) => s + e.amount, 0);

  const latest = expenses.slice(0, 5);

  return (
    <div className="p-4 space-y-4">
      {/* Summary */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-sm text-slate-500">Total Spent</h2>
        <p className="text-2xl font-semibold">₹ {total.toFixed(2)}</p>

        <h2 className="text-sm text-slate-500 mt-3">This Month</h2>
        <p className="text-lg font-medium">₹ {monthlyTotal.toFixed(2)}</p>
      </div>

      {/* Latest */}
      <div>
        <h2 className="text-sm font-medium mb-2">Latest</h2>

        {latest.map((e) => (
          <div
            key={e.id}
            className="p-3 bg-white rounded shadow flex justify-between mb-2"
          >
            <div>
              <div className="font-medium">
                ₹{e.amount} • {e.category}
              </div>
              <div className="text-xs text-slate-400">{e.date}</div>
            </div>
          </div>
        ))}

        {latest.length === 0 && (
          <div className="text-sm text-slate-500">No records yet.</div>
        )}
      </div>
    </div>
  );
}

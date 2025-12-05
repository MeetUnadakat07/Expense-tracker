export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0)
    return (
      <div className="text-center text-slate-500 text-sm bg-white p-4 rounded">
        No expenses yet.
      </div>
    );

  return (
    <ul className="space-y-2">
      {expenses.map((e) => (
        <li
          key={e.id}
          className="bg-white p-3 rounded shadow flex justify-between items-start"
        >
          <div>
            <div className="font-medium">
              ₹{e.amount} • {e.category}
            </div>
            <div className="text-sm text-slate-500">{e.note || "—"}</div>
            <div className="text-xs text-slate-400">{e.date}</div>
          </div>

          <button
            onClick={() => onDelete(e.id)}
            className="text-red-600 border px-2 py-1 rounded text-sm"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

import { useState } from "react";

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export default function ExpenseForm({ categories, onAdd }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [note, setNote] = useState("");
  const [date, setDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount) return alert("Enter amount");

    onAdd({
      id: uid(),
      amount: Number(amount),
      category,
      note,
      date,
    });

    setAmount("");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-3"
    >
      {/* Amount */}
      <div>
        <label className="text-sm">Amount (₹)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Category */}
      <div>
        <label className="text-sm">Category</label>
        <select
          className="w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Note */}
      <div>
        <label className="text-sm">Note</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Date */}
      <div>
        <label className="text-sm">Date</label>
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Add */}
      <button className="bg-teal-500 text-white w-full py-2 rounded hover:bg-teal-600">
        Add Expense
      </button>
    </form>
  );
}

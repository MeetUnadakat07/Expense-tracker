import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Reports({ categories, expenses }) {
  const totals = {};
  categories.forEach((c) => (totals[c] = 0));

  expenses.forEach((e) => {
    totals[e.category] += e.amount;
  });

  const labels = Object.keys(totals).filter((c) => totals[c] > 0);
  const values = labels.map((c) => totals[c]);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#10b981",
          "#f97316",
          "#6366f1",
          "#ef4444",
          "#f59e0b",
          "#0ea5e9",
          "#14b8a6",
        ],
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-sm font-medium mb-3">Expenses by Category</h2>

      {labels.length === 0 ? (
        <p className="text-sm text-slate-500">No data to display.</p>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          <Pie data={data} />
        </div>
      )}
    </div>
  );
}

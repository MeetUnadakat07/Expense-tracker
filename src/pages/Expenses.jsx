import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function Expenses({
  categories,
  expenses,
  addExpense,
  deleteExpense,
}) {
  return (
    <div className="p-4 space-y-4">
      <ExpenseForm categories={categories} onAdd={addExpense} />

      <h2 className="text-sm font-medium">All Expenses</h2>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

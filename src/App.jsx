import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Reports from "./pages/Reports";
import useLocalStorage from "./hooks/useLocalStorage";
import { DEFAULT_CATEGORIES } from "./data";
import useDarkMode from "./hooks/useDarkMode";

// rebuild test

export default function App() {
  const { theme, toggleTheme } = useDarkMode();   // 🌙 Dark mode hook
  const [tab, setTab] = useState("home");
  const [categories] = useState(DEFAULT_CATEGORIES);

  const [expenses, setExpenses, clearExpenses] = useLocalStorage(
    "expenses",
    []
  );

  const addExpense = (e) => {
    setExpenses((prev) => [e, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const clearAll = () => {
    if (confirm("Clear ALL expenses?")) {
      clearExpenses();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar 
        onClear={clearAll}
        onToggleTheme={toggleTheme}    // 🌙 Pass toggle function
        theme={theme}                  // 🌙 Pass current theme for icon
      />

      {/* Tabs */}
      <nav className="max-w-xl mx-auto mt-4 bg-white dark:bg-gray-800 rounded shadow flex justify-around p-2 text-sm transition-colors">
        <button
          onClick={() => setTab("home")}
          className={tab === "home" ? "text-teal-600 dark:text-teal-400 font-medium" : "dark:text-gray-300"}
        >
          Home
        </button>
        <button
          onClick={() => setTab("expenses")}
          className={tab === "expenses" ? "text-teal-600 dark:text-teal-400 font-medium" : "dark:text-gray-300"}
        >
          Expenses
        </button>
        <button
          onClick={() => setTab("reports")}
          className={tab === "reports" ? "text-teal-600 dark:text-teal-400 font-medium" : "dark:text-gray-300"}
        >
          Reports
        </button>
      </nav>

      <main className="max-w-xl mx-auto mt-4">
        {tab === "home" && <Home expenses={expenses} />}
        {tab === "expenses" && (
          <Expenses
            categories={categories}
            expenses={expenses}
            addExpense={addExpense}
            deleteExpense={deleteExpense}
          />
        )}
        {tab === "reports" && (
          <Reports categories={categories} expenses={expenses} />
        )}
      </main>
    </div>
  );
}

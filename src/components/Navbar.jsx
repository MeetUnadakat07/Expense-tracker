export default function Navbar({ onClear }) {
  return (
    <header className="bg-teal-500 text-white p-4 sticky top-0 shadow">
      <div className="max-w-xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Expense Tracker</h1>

        <button
          onClick={onClear}
          className="text-sm bg-teal-700 px-3 py-1 rounded hover:bg-teal-800"
        >
          Clear All
        </button>
      </div>
    </header>
  );
}

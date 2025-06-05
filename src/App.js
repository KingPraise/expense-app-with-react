import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 394.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e4",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 28),
  },
];

/**
 * Main application component for managing and displaying expenses.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 *
 * @example
 * // Renders the App component with expense tracking functionality
 * <App />
 *
 * @description
 * - Maintains a list of expenses in state.
 * - Handles addition of new expenses via the `addExpenseHandler`.
 * - Renders the `NewExpense` component for adding expenses and the `Expenses` component for displaying them.
 */
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Function to handle new expense data
  // This function receives an 'expense' object as a parameter, which should have the following structure:
  // {
  //   id: string,
  //   title: string,
  //   amount: number,
  //   date: Date
  // }
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;

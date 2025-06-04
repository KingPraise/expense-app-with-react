import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  // Function to handle new expense data
  // This function receives an 'expense' object as a parameter, which should have the following structure:
  // {
  //   id: string,
  //   title: string,
  //   amount: number,
  //   date: Date
  // }
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense); // This will log the expense data from the NewExpense component
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;

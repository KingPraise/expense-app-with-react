import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  // This function handles the submission of the expense form.
  // It receives the entered expense data from the ExpenseForm component,
  // generates a unique ID for the expense, and then passes the data to the parent component via the onAddExpense prop.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); // Pass the expense data to the parent component
    setIsEditing(false); // Reset the editing state to false after saving
    // This will hide the form after the expense is added
  };
  // This function toggles the editing state, allowing the form to be shown or hidden.
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  // This function toggles the editing state to false, effectively hiding the form.
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
// This component is responsible for rendering the form to add a new expense.
// It uses the ExpenseForm component to handle the form submission and passes the entered data back to the parent component through the onAddExpense prop.

import React, { useState } from "react";
import "./ExpenseForm.css";

/**
 * ExpenseForm is a React functional component that renders a form for adding a new expense.
 * It manages local state for the expense title, amount, and date, and handles form submission.
 * On submission, it constructs an expense data object and passes it to the parent component
 * via the onSaveExpenseData prop, then resets the form fields.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {function} props.onSaveExpenseData - Callback function to handle the submitted expense data.
 * @returns {JSX.Element} The rendered expense form component.
 */
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  /**
   * Handles the form submission event for creating a new expense.
   * Prevents the default form submission, constructs an expense data object,
   * passes it to the parent component via the onSaveExpenseData prop,
   * and resets the input fields.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // Clear the input fields after submission
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

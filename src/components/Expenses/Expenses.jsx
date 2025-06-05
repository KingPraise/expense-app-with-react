import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
/**
 * Expenses component displays a list of expense items filtered by year.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array<Object>} props.items - Array of expense objects to display.
 * @returns {JSX.Element} Rendered Expenses component.
 */
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // This will log the selected year from the ExpenseFilter component
    console.log("Expenses.js", selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

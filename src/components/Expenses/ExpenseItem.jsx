import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <li>
      {/* Wrapping the Card component inside a list item to maintain semantic HTML structure */}
      
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h2>{props.title}</h2>
          <div className="expense-item_price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

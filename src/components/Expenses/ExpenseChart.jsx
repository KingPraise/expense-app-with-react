import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  // This function iterates over the expenses and updates the chart data points
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // January is 0!
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  // This component is responsible for rendering the chart for expenses.
  return (
    <div>
      <Chart dataPoints={chartDataPoints} />;
    </div>
  );
};

export default ExpenseChart;

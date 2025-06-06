import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = `${(props.value / props.maxValue) * 100}%`;
  }
  // This component is responsible for rendering a single bar in the chart.
  // It takes the value, maximum value, and label as props.
  // The height of the bar is calculated as a percentage of the maximum value,
  // and the label is displayed below the bar.
  return (
    <div>
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;

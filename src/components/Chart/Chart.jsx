import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
// This component is responsible for rendering the chart.
// It takes an array of data points and a maximum value as props,
// and maps each data point to a ChartBar component, passing the necessary props to each bar.

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
  // This calculates the maximum value from the data points to set the height of the bars.
    // The Chart component receives dataPoints and maxValue as props.

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

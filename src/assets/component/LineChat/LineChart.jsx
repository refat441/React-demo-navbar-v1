import React from "react";
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const mathmarks = [
    { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 91 },
    { id: 2, name: "Bob", math: 78, physics: 84, chemistry: 80 },
    { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 85 },
    { id: 4, name: "David", math: 88, physics: 90, chemistry: 87 },
    { id: 5, name: "Eve", math: 95, physics: 89, chemistry: 94 },
    { id: 6, name: "Frank", math: 76, physics: 81, chemistry: 79 },
    { id: 7, name: "Grace", math: 81, physics: 85, chemistry: 88 },
    { id: 8, name: "Henry", math: 89, physics: 87, chemistry: 90 },
    { id: 9, name: "Isabel", math: 90, physics: 92, chemistry: 93 },
    { id: 10, name: "Jack", math: 83, physics: 79, chemistry: 84 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={mathmarks}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red" />
        <Line dataKey="physics" stroke="green" />
      </LChart>
    </div>
  );
};

export default LineChart;

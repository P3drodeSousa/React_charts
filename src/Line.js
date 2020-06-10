import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", rating: 4.0, average: 4.2 },
  { month: "Feb", rating: 3.5, average: 3.5 },
  { month: "Mar", rating: 2.0, average: 4.6 },
  { month: "Apr", rating: 2.5, average: 4.7 },
  { month: "May", rating: 2.7, average: 4.0 },
  { month: "Jun", rating: 4.5, average: 3.9 },
  { month: "Jul", rating: 4.2, average: 4.4 },
  { month: "Aug", rating: 2.0, average: 3.8 },
  { month: "Sep", rating: 3.7, average: 4.2 },
  { month: "Oct", rating: 3.8, average: 4.1 },
  { month: "Nov", rating: 4.6, average: 3.6 },
  { month: "Dec", rating: 3.9, average: 4 },
];

const Lines = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" />
        <YAxis domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          strokeWidth="7"
          name="your rating"
          type="monotone"
          dataKey="rating"
          stroke="#52ACFF"
          activeDot={{ r: 10 }}
          dot={{ stroke: "green", strokeWidth: 2 }}
        />
        />
        <Line
          strokeWidth="5"
          name="users average rating"
          type="monotone"
          dataKey="average"
          stroke="#ccc"
          strokeDasharray="3 4 5 2"
        />
      </LineChart>
    </div>
  );
};

export default Lines;

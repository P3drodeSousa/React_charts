import React from "react";
import moment from "moment";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3500 },
  { month: "Mar", revenue: 2000 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2750 },
  { month: "Jun", revenue: 4500 },
  { month: "Jul", revenue: 4200 },
  { month: "Aug", revenue: 2050 },
  { month: "Sep", revenue: 3750 },
  { month: "Oct", revenue: 3800.2 },
  { month: "Nov", revenue: 4650 },
  { month: "Dec", revenue: 3900 },
];
const COLORS = ["#9A80FD", "#FF8042"];
const months = () => {
  data.map((m) => m.month.slice(0, 3));
};

function App() {
  let date = moment().format("MMM");
  console.log(date);
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
      {months()}
      <BarChart
        width={650}
        height={300}
        data={data}
        margin={{ top: 5, right: 0, left: 50, bottom: 5 }}
      >
        <XAxis dataKey="month" />
        <YAxis ticks={[1000, 2000, 3000, 4000, 5000]} />
        <Tooltip wrapperStyle={{ width: 300, backgroundColor: "#000" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: -20,
            right: 20,
            backgroundColor: "#fff",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        />
        <Bar dataKey="revenue" barSize={10}>
          {data.map((entry, i) => {
            const color = entry.month === date ? COLORS[0] : COLORS[1];
            return <Cell key={i} fill={color} />;
          })}
        </Bar>
      </BarChart>
    </div>
  );
}

export default App;

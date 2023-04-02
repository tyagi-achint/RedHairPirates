import "../CSS/PieChart.css";
import { PieChart, Pie, Legend } from "recharts";

export default function Piechart() {
  var present = 69;
  var absent = 100 - present;

  const data02 = [
    {
      name: "Present",
      value: present,
      fill: "#0088FE",
    },
    {
      name: "Absent",
      value: absent,
      fill: "#FF8042",
    },
  ];

  return (
    <div className="row ">
      <h4 className="attendance">My Attendance</h4>

      <PieChart width={430} height={150}>
        <Legend layout="vertical" verticalAlign="middle" align="right" />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          s
          cx="50%"
          cy="50%"
          outerRadius={50}
          innerRadius={20}
          fill="#0088FE"
          legendType="line"
          label
        />
      </PieChart>
    </div>
  );
}

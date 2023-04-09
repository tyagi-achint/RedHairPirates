import "../CSS/Attendance.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Linechart from "./Linechart";
import "../CSS/PieChart.css";
import { PieChart, Pie, Legend } from "recharts";
export default function Attendance() {
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
  const attendancePieChart = () => {
    return (
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
    );
  };

  return (
    <div className="attendancepage">
      <Navbar />
      <Sidebar />
      <div className="main ">
        <div className="row">
          <div className="col">
            <div className="row ">
              <h4 className="attendance">Maths</h4>
              {attendancePieChart()}
            </div>
          </div>

          <div className="col">
            <div className="row ">
              <h4 className="attendance">Hindi</h4>

              {attendancePieChart()}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row ">
              <h4 className="attendance">Science</h4>

              {attendancePieChart()}
            </div>
          </div>

          <div className="col">
            <div className="row ">
              <h4 className="attendance">Social</h4>

              {attendancePieChart()}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row ">
              <h4 className="attendance">English</h4>

              {attendancePieChart()}
            </div>
          </div>

          <div className="col">
            <Linechart></Linechart>
          </div>
        </div>
      </div>
    </div>
  );
}

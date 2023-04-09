// import "../CSS/LineChart.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function Linechart() {
  const data = [
    {
      subject: "Math",
      uv: 40,
      pv: 60,
    },
    {
      subject: "Hindi",
      uv: 60,
      pv: 40,
    },
    {
      subject: "Science",
      uv: 89,
      pv: 11,
    },
    {
      subject: "English",
      uv: 67,
      pv: 33,
    },
    {
      subject: "Social",
      uv: 77,
      pv: 23,
    },
    // {
    //   name: "Page A",
    //   uv: 4000,
    //   pv: 2400,
    //   amt: 2400,
    // },
    // {
    //   name: "Page B",
    //   uv: 3000,
    //   pv: 1398,
    //   amt: 2210,
    // },
    // {
    //   name: "Page C",
    //   uv: 2000,
    //   pv: 9800,
    //   amt: 2290,
    // },
    // {
    //   name: "Page D",
    //   uv: 2780,
    //   pv: 3908,
    //   amt: 2000,
    // },
    // {
    //   name: "Page E",
    //   uv: 1890,
    //   pv: 4800,
    //   amt: 2181,
    // },
    // {
    //   name: "Page F",
    //   uv: 2390,
    //   pv: 3800,
    //   amt: 2500,
    // },
    // {
    //   name: "Page G",
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100,
    // },
  ];

  return (
    <div className="row ">
      <h4 className="attendance">My Attendance</h4>
      <AreaChart width={430} height={250} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="subject" />
        <YAxis type="number" domain={[0, 100]} interval={0} />
        <CartesianGrid strokeDasharray="3 3 " />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Legend />
      </AreaChart>
    </div>
  );
}

import "../CSS/BarChart.css";
import { BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

export default function Barchart() {
  const data = [
    {
      subject: "Math",
      covered: [0, 100],
    },
    {
      subject: "Hindi",
      covered: [0, 40],
    },
    {
      subject: "Science",
      covered: [0, 67],
    },
    {
      subject: "English",
      covered: [0, 87],
    },
    {
      subject: "Social",
      covered: [0, 99],
    },
  ];

  return (
    <div className="row">
      <h4 className="syllabus">My Syllabus</h4>

      <BarChart width={380} height={150} data={data}>
        <XAxis dataKey="subject" />
        <YAxis type="number" domain={[0, 100]} interval={0} />
        <Legend />
        <Bar
          barSize={25}
          legendType="line"
          dataKey="covered"
          fill="#0088FE"
          label={{ fill: "#FF8042" }}
        />
      </BarChart>
    </div>
  );
}

import "../CSS/Attendance.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Attendance() {
  return (
    <div className="attendancepage">
      <Navbar />
      <Sidebar />
      <div className="main "></div>
    </div>
  );
}

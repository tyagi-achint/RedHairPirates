import "../CSS/Sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div class="sidenav">
      <p>OVERVIEW</p>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/timetable">Time Table</Link>
      <Link to="/syllabus">Syllabus</Link>
      <Link to="/attendance">Attendance</Link>
      <Link to="/result">Result</Link>
    </div>
  );
}

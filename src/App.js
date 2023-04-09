import Login from "./Components/JS/Login";
import Reset from "./Components/JS/Reset";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/JS/Homepage";
import Timetable from "./Components/JS/Timetable";
import Profile from "./Components/JS/Profile";
import Syllabus from "./Components/JS/Syllabus";
import Attendance from "./Components/JS/Attendance";
import Result from "./Components/JS/Result";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="dashboard" element={<Homepage />} />
        <Route exact path="forgot-password" element={<Reset />} />
        <Route exact path="timetable" element={<Timetable />} />
        <Route exact path="profile" element={<Profile />} />
        <Route exact path="syllabus" element={<Syllabus />} />

        <Route exact path="attendance" element={<Attendance />} />
        <Route exact path="result" element={<Result />} />
        {/* <Route exact path="" element={< />} /> */}
      </Routes>
    </Router>
  );
}

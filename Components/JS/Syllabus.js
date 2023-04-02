import "../CSS/Syllabus.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Syllabus() {
  return (
    <div className="syllabuspage">
      <Navbar />
      <Sidebar />
      <div className="main "></div>
    </div>
  );
}

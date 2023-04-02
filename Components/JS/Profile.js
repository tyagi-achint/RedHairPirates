import "../CSS/Profile.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Profile() {
  return (
    <div className="profilepage">
      <Navbar />
      <Sidebar />
      <div className="main "></div>
    </div>
  );
}

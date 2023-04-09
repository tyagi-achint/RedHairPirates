import "../CSS/Result.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Result() {
  return (
    <div className="resultpage">
      <Navbar />
      <Sidebar />
      <div className="main ">
        <div className="row">
          <div className="col">
            <div className="row">
              <h3 className="result">Result</h3>
              <span>To Be Declared...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import HometimeTable from "./HometimeTable";
import Piechart from "./Piechart";
import BarChart from "./BarChart";
import "../CSS/Homepage.css";
export default function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Sidebar />
      <div className="main ">
        <div className="row">
          <div className="col">
            <BarChart></BarChart>
          </div>

          <div className="col">
            <Piechart></Piechart>
          </div>
        </div>
        <div className="row">
          <div className="col hometimeTable">
            <HometimeTable></HometimeTable>
          </div>
        </div>
      </div>
    </div>
  );
}

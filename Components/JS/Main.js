import "../CSS/Main.css";
import Timetable from "./Timetable";
import Piechart from "./Piechart";
import BarChart from "./BarChart";
export default function Main() {
  return (
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
        <div className="col">
          <Timetable></Timetable>
        </div>
      </div>
    </div>
  );
}

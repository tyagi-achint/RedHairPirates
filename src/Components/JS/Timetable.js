import "../CSS/Timetable.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Timetable() {
  return (
    <div className="timetablepage">
      <Navbar />
      <Sidebar />
      <div className="main ">
        <div className="row">
          <table align="center">
            <tr bgcolor="CCF3EE">
              <th>Time/Day</th>
              <th>9:00-10:00</th>
              <th>10:00-11:00</th>
              <th>11:00-12:00</th>
              <th>12:00-01:00</th>
              <th>01:00-02:00</th>
            </tr>
            <tr align="center">
              <th bgcolor="CCF3EE">Monday</th>
              <td rowspan="5">
                <b>Math</b>
              </td>
              <td rowspan="5">
                <b>Hindi</b>
              </td>
              <td rowspan="5">
                <b>Science</b>
              </td>
              <td rowspan="5">
                <b>Lunch Break</b>
              </td>
              <td>
                <b>Social</b>
              </td>
            </tr>
            <tr align="center">
              <th bgcolor="CCF3EE">Tuesday</th>

              <td>
                <b>English</b>
              </td>
            </tr>
            <tr align="center">
              <th bgcolor="CCF3EE">Wednesday</th>

              <td>
                <b>Social</b>
              </td>
            </tr>
            <tr align="center">
              <th bgcolor="CCF3EE">Thursday</th>

              <td>
                <b>English</b>
              </td>
            </tr>
            <tr align="center">
              <th bgcolor="CCF3EE">Friday</th>

              <td>
                <b>Social</b>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

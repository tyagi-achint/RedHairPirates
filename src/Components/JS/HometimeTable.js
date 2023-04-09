import "../CSS/HometimeTable.css";

export default function Timetable() {
  return (
    <div className="row">
      <h4 className="timeTable">My Timetable</h4>
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
          <th bgcolor="CCF3EE">Tuesday</th>
          <td>
            <b>Math</b>
          </td>
          <td>
            <b>Hindi</b>
          </td>
          <td>
            <b>Science</b>
          </td>
          <td>
            <b>Lunch Break</b>
          </td>
          <td>
            <b>English</b>
          </td>
        </tr>
      </table>
    </div>
  );
}

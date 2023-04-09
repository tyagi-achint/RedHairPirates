import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  // date
  var currentDate = new Date();
  var options = { month: "long", day: "numeric", year: "numeric" };
  var date = currentDate.toLocaleDateString("en-US", options);
  date = date.replace(",", "");
  // page
  var page = "page";
  // user_descripton

  // user
  var user = "user";

  return (
    <nav className="navbar navbar-expand-lg ">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item mr-5">{user}</li>

        <li className="nav-item pagename">{page}</li>
      </ul>
      <ul className="navbar-nav mr-auto ">
        <li className="nav-item">
          <button className="btn">{date}</button>
        </li>
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link to="/" className="nav-link">
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

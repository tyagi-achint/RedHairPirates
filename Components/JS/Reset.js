import "../CSS/Reset.css";
import { Link } from "react-router-dom";
export default function Reset() {
  return (
    <div className="reset-page">
      <div className="form">
        <form className="reset-form">
          <input type="text" placeholder="StudentID" />
          <input
            type="text"
            placeholder="DOB (dd-mm-yyyy)"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          <input type="email" placeholder="Email Address" />

          <input type="password" placeholder="Password" />
          <button type="submit">Change</button>
          <button type="reset">Reset</button>
          <p className="message">
            Already changed? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

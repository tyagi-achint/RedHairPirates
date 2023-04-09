import "../CSS/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  var login_success = true;
  let navigate = useNavigate();
  const handelLogin = () => {
    if (login_success) {
      navigate("/dashboard");
    } else {
      console.log("Not Success");
    }
  };
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="StudentID" />
          <input type="password" placeholder="Password" />
          <button type="submit" onClick={handelLogin}>
            Login
          </button>
          <button type="reset">Reset</button>
          <p className="message">
            Forgot Password? <Link to="/forgot-password">Reset It</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

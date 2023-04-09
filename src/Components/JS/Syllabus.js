import "../CSS/Syllabus.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Syllabus() {
  const topicsData = () => {
    return (
      <p>
        <h6>Topics</h6>
        <ul>
          <li>
            Topic 1 (Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
            explic.)
          </li>
          <li>
            Topic 2 (Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
            explic.)
          </li>
          <li>
            Topic 3 (Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
            explic.)
          </li>
          <li>
            Topic 4 (Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
            explic.)
          </li>
        </ul>
      </p>
    );
  };
  const tempData = () => {
    return (
      <div>
        <h5>
          <input type="checkbox" checked /> Unit 1
        </h5>
        {topicsData()}
        <h5>
          <input type="checkbox" checked /> Unit 2
        </h5>
        {topicsData()}
        <h5>
          <input type="checkbox" checked /> Unit 3
        </h5>
        {topicsData()}
        <h5>
          <input type="checkbox" checked /> Unit 4
        </h5>
        {topicsData()}
        <h5>
          <input type="checkbox" checked /> Unit 5
        </h5>
        {topicsData()}
      </div>
    );
  };
  return (
    <div className="syllabuspage">
      <Navbar />
      <Sidebar />
      <div className="main ">
        <div className="row">
          <div className="col">
            <div className="row ">
              <h3 className="subject">Maths</h3>
              {tempData()}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row ">
              <h3 className="subject">Science</h3>
              {tempData()}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row ">
              <h3 className="subject">Hindi</h3>
              {tempData()}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row ">
              <h3 className="subject">Social</h3>

              {tempData()}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row ">
              <h3 className="subject">English</h3>
              {tempData()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

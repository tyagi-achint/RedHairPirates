import "../CSS/Profile.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Profile() {
  return (
    <div className="profilepage">
      <Navbar />
      <Sidebar />
      <div className="main ">
        <div className="profile ">
          <div className="student-profile ">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent text-center">
                      <img className="profile_img" src="" alt="" />
                      <h3>Some Random Name</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="">Student ID:</strong>321000001
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">className:</strong>4
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Section:</strong>A
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                      <h3 className="mb-0">
                        <i class="fa fa-clone pr-1"></i>General Information
                      </h3>
                    </div>
                    <div className="card-body ">
                      <table className="table table-bordered">
                        <tr>
                          <th width="45%">Roll</th>
                          <td width="2%">:</td>
                          <td>125</td>
                        </tr>
                        <tr>
                          <th width="45%">Academic Year </th>
                          <td width="2%">:</td>
                          <td>2020</td>
                        </tr>
                        <tr>
                          <th width="45%">Gender</th>
                          <td width="2%">:</td>
                          <td>Male</td>
                        </tr>
                        <tr>
                          <th width="45%">Religion</th>
                          <td width="2%">:</td>
                          <td>Hindu</td>
                        </tr>
                        <tr>
                          <th width="45%">blood</th>
                          <td width="2%">:</td>
                          <td>B+</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

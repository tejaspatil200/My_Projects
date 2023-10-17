import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { url } from "../common/constants";
import "./../components/Signin.css";

const Emplogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = () => {
    if (email.length === 0) {
      alert("enter email");
    } else if (password.length === 0) {
      alert("enter password");
    } else {
      const data = new FormData();
      data.append("employeeEmail", email);
      data.append("employeePassword", password);

      console.log(data.getAll("employeeEmail"));
      console.log(data.getAll("employeePassword"));

      axios.post(url + "/employee/employeelogin", data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          localStorage.setItem("Employee", JSON.stringify(result.data));

          history.push("/customer");
        } else {
          console.log(result.error);
          alert("error while authentication");
        }
      });
    }
  };

  return (
    <div className="row  ">
      <div className="col-md-4 ">
        <div>
          <img
            className="empimage "
            src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="col-md-5 ">
        <div>
          <br />
          <br />
          <img
            className="emplogo"
            src="	https://candlewoodpayroll.com/images/employer-login.jpg"
            alt=""
          />
        </div>
        <br />
        <div className="emplogin">
          <table className="table table-bordered ">
            <table className="table-light">
              <tr>
                <td>Email</td>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </tr>
              <br />
              <br />
              <tr>
                <td>Password</td>
                <input
                  type="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  class="form-control"
                  id="floatingInput"
                />
              </tr>
            </table>
            <br />
          </table>

          <div className="mb-3">
            <button onClick={login} className="btn btn-success">
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emplogin;

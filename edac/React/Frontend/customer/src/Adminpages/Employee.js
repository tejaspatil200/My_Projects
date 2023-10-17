
import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react"

import { useHistory } from "react-router-dom";
import Navbar from './../components/Adminnavbar';
import { url } from './../common/constants';


const Employee = () => {

  const [employees, setEmployees] = useState([])
  //const url = 'http://localhost:8080'

  const history = useHistory()

  useEffect(() => {

    getEmployees()
  }, [])


  const getEmployees = () => {

    if ((!JSON.parse(localStorage.getItem("Admin")))) {


      history.push("/adminlogin");
    } else {
      axios.get(url + '/employee').then((response) => {
        const result = response.data
        if (result.status === 'success') {
          console.log(result)
          setEmployees(result.data)
        } else {
          alert('error while loading All DeliveryBoys')
        }
      })
    }
  }

    const onSelectForDelete = (id) => {


      axios.delete(url + '/employee/' + id).then(() => {
        // const result = response.data
        // if (result.status === 'null') {
        // setBoys(result.data)
        alert('Employee successfully deleted')
        getEmployees()
        // } else {
        //   alert('error while deleting delivery boy')
        // }
      })
    }


    const onSelectForEdit = (b) => {
      history.push('/edit-employee', {
        id: b.employeeId,
        name: b.employeeName,
        email: b.employeeEmail,
        password: b.employeePassword,
        mobile: b.employeeMobile,
        gender: b.employeeGender,
        dob: b.employeeDob,

        joiningDate: b.employeeJoindate,
      })


    }
  




  return (

    <div>

      <Navbar />

      <div>


        <h1 className="page-title">All Employees</h1>

        <br />
        <Link to="/add-employee">
          <a className="btn btn-success">Add Employee</a>
        </Link>
        <br />
        <br />
        <table className="table table-bordered">
          <thead>
            <tr className="table-dark">
              <th>Emp-id</th>
              <th>Name</th>

              <th>Phone</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Password</th>

              <th>Joining Date</th>
              <th>Dob</th>

              <th>Edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((b) => {
              return (
                <tr className="table-primary">
                  <td> {b.employeeId}</td>
                  <td> {b.employeeName}</td>

                  <td> {b.employeeMobile}</td>
                  <td> {b.employeeGender}</td>
                  <td>{b.employeeEmail} </td>
                  <td> {b.employeePassword}</td>

                  <td> {b.employeeJoindate}</td>
                  <td> {b.employeeDob}</td>



                  <td><button onClick={() => {
                    onSelectForEdit(b)
                  }} className="btn btn-danger">
                    update
                  </button></td>


                  <td><button onClick={() => {
                    onSelectForDelete(b.employeeId)
                  }} className="btn btn-danger">
                    delete
                  </button></td>
                </tr>)
            })}


          </tbody>
        </table>
      </div>


    </div>



  )
}

export default Employee;
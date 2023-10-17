import {Link} from "react-router-dom"
import axios from "axios"
import { useEffect,useState } from "react"
import Navbar from "../components/Employeenavbar"
import { url } from './../common/constants';
import { useHistory } from 'react-router-dom';

const Customer = () => {
  const [Customer, setCustomer ] = useState([])
  const history=useHistory()
  //const url = 'http://localhost:8080'

  useEffect(() => {
    
    getCustomer()
  }, [])

  const getCustomer = () => {

    if ((!JSON.parse(localStorage.getItem("Employee")))){


      history.push("/employeelogin");
    } else {
    axios.get(url + '/employee/customer').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        console.log(result)
        setCustomer(result.data)
      } else {
        //alert('error while loading All Customer')
      }
    })
  }}
  return (
    <div>
      <Navbar/>
      <br />
      <h2>Customers In System</h2>
      <br />
      <table  className="table table-bordered" >
        <thead>
          <tr className="table-dark">
            <th>Customer id</th>
            <th>Customer Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            {/* <th>Option</th> */}
          </tr>
        </thead>
        <tbody>
        {Customer.map((Customer) => {
            return (
               <tr className="table-primary">
            <td> {Customer.customerId}</td>
          <td> {Customer.customerName}</td>
          <td>{Customer.customerGender} </td>
          <td> {Customer.customerEmail}</td>
          <td> {Customer.customerMobile}</td>
          <td> {Customer.customerAge}</td>
          {/* <td><Link to={`Order/${Customer.customerId}`}>
          <button  
         className="btn btn-dark">
              Order
            </button>
        </Link></td> */}
            </tr>)
          })}
                </tbody>
      </table>
    </div>

  )
}
  export default Customer
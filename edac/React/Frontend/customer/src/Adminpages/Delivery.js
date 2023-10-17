import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react"

import { useHistory } from "react-router-dom";
import Navbar from './../components/Adminnavbar';
import { url } from './../common/constants';

const Delivery = () => {


  const [boys, setBoys] = useState([])
  //const url = 'http://localhost:8080'

  const history = useHistory()

  useEffect(() => {

    getBoys()
  }, [])

  const getBoys = () => {

    if ((!JSON.parse(localStorage.getItem("Admin")))) {


      history.push("/adminlogin");
    } else {
    axios.get(url + '/delivery').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        console.log(result)
        setBoys(result.data)
      } else {
        alert('error while loading All DeliveryBoys')
      }
    })
  }
}

  const onSelectForDelete = (id) => {


    axios.delete(url + '/delivery/' + id).then(() => {
      // const result = response.data
      // if (result.status === 'null') {
      // setBoys(result.data)
      alert('delivery boy successfully deleted')
      getBoys()
      // } else {
      //   alert('error while deleting delivery boy')
      // }
    })
  }


  const onSelectForEdit = (b) => {
    history.push('/edit-delivery', {
      
      id: b.deliveryBoyId,
      name: b.deliveryBoyName,
      email: b.deliveryBoyEmail,
      password: b.deliveryBoyPassword,
      mobile: b.deliveryBoyMobile,
      gender: b.deliveryBoyGender,
      vehicleType: b.vehicleType,
      dob: b.dob,
      vehicleNo: b.vehicleNo,
      joiningDate: b.joiningDate,
    })


  }






  return (

    <div>
       <Navbar/>

      <h1 className="page-title">All Delivery Boys</h1>
      <br />
      <Link to="/add-delivery">
        <a className="btn btn-success">Add Delivery Boy</a>
      </Link>
      <br />
      <br />
      <table className="table table-bordered" >
        <thead>
          <tr className="table-dark">
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th>password</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Vehical Type</th>
            <th>Vehical No</th>
            <th>Joining Date</th>
            <th>Edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {boys.map((b) => {
            return (
              <tr className="table-primary">
                <td> {b.deliveryBoyId}</td>
                <td> {b.deliveryBoyName}</td>
                <td>{b.deliveryBoyEmail} </td>
                <td> {b.deliveryBoyPassword}</td>
                <td> {b.deliveryBoyMobile}</td>
                <td> {b.deliveryBoyGender}</td>
                <td> {b.vehicleType}</td>
                <td> {b.vehicleNo}</td>
                <td> {b.joiningDate}</td>


                <td><button onClick={() => {
                  onSelectForEdit(b)
                }} className="btn btn-danger">
                  update
                </button></td>


                <td><button onClick={() => {
                  onSelectForDelete(b.deliveryBoyId)
                }} className="btn btn-danger">
                  delete
                </button></td>
              </tr>)
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Delivery;
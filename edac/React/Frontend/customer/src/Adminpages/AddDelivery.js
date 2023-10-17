
import axios from 'axios'
import { useState } from 'react'


import { useHistory } from 'react-router-dom';
import Navbar from '../components/Adminnavbar';
import { url } from './../common/constants';

const AddDelivery = () => {
  //const [id, setId] = useState( )
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobileno, setMobileNo] = useState('')
  const [gender, setGender] = useState('')
  const [vehicalType, setVehicalType] = useState('')
  const [vehicalNo, setVehicalNo] = useState('')
  const [dob, setDob] = useState('')
  const [joiningDate, setjoiningDate] = useState('')


  //const url = 'http://localhost:8080'

  const history = useHistory()

  const addBoys = () => {
    if (email.length === 0) {
      alert('enter email')
    } else if (password.length === 0) {
      alert('enter password')
    } else {
      const data = new FormData()

      //data.append('deliveryBoyId', id)
      data.append('deliveryBoyName', name)
      data.append('deliveryBoyEmail', email)
      data.append('deliveryBoyPassword', password)
      data.append('deliveryBoyMobile', mobileno)
      data.append('deliveryBoyGender', gender)
      data.append('vehicleType', vehicalType)
      data.append('vehicleNo', vehicalNo)
      data.append('joiningDate', joiningDate)
      data.append('dob', dob)
      console.log(data.getAll("deliveryBoyName"))



      axios.post(url + '/add-delivery', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('new DeliveryBoy is Added into System')
          history.push('/delivery')
        } else {
          //console.log(result.error)
          alert('error while adding new deliveryBoy')
        }
      })
    }
  }


  return (

    <div>
      <Navbar />


      <div className="container">
        <br />


        <div >
          <label htmlFor="">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>


        <div >
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"

            className="form-control"
          />
        </div>
        <div >
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>


        <div >
          <label htmlFor="">Mobile No</label>
          <input
            onChange={(e) => {
              setMobileNo(e.target.value)
            }}
            type="number"
            className="form-control"
          />
        </div>

        <div >
          <label htmlFor="">Gender</label>
          <select class="form-select " aria-label="Default select example"  type="text"
            className="form-control"  onChange={(e) => {
              setGender(e.target.value)
            }}>
  <option selected>Open this select menu</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
 
</select>
          {/* <input
            onChange={(e) => {
              setGender(e.target.value)
            }}
            type="text"
            className="form-control"
          /> */}
        </div>


        <div >
          <label htmlFor="">Vehical Type</label>
          <input
            onChange={(e) => {
              setVehicalType(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div >
          <label htmlFor="">Vehical no</label>
          <input
            onChange={(e) => {
              setVehicalNo(e.target.value)
            }}
            type="text"
            className="form-control"
          />
        </div>


        <div >
          <label htmlFor="">BirthDate</label>
          <input
            onChange={(e) => {
              setDob(e.target.value)
            }}
            type="Date"
            className="form-control"
          />
        </div>

        <div >
          <label htmlFor="">Joining Date</label>
          <input
            onChange={(e) => {
              setjoiningDate(e.target.value)
            }}
            type="date"
            className="form-control"
          />
        </div>


        <br />


        <div className="mb-3">
          <button onClick={addBoys} className="btn btn-success">
            Add
          </button>

        </div>
      </div>





    </div>






  )
}
export default AddDelivery;
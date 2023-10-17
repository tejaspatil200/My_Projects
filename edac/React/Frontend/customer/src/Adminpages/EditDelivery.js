import { useLocation } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Adminnavbar';
import { url } from './../common/constants';

const EditDelivery = () => {
   const location= useLocation()
   //const url = 'http://localhost:8080'
   const history = useHistory()




    const[id, setId] = useState(location.state.id)
   const [name, setName] = useState(location.state.name)
   const [email, setEmail] = useState(location.state.email)
   const [password, setPassword] = useState(location.state.password)
   const [mobileno, setMobileNo] = useState(location.state.mobile)
   const [gender, setGender] = useState(location.state.gender)
   const [vehicleType, setVehicleType] = useState(location.state.vehicleType)
   const [vehicleNo, setVehicleNo] = useState(location.state.vehicleNo)
  const [dob, setDob] = useState(location.state.dob)
   const [joiningDate, setjoiningDate] = useState(location.state.joiningDate)


 
 

   const updateDelivery = () => {
    // if (email.length === 0) {
    //   alert('enter email')
    // } else if (password.length === 0) {
    //   alert('enter password')
    // } else {
      const data = new FormData()

      data.append('deliveryBoyId', id)
      data.append('deliveryBoyName', name)
      data.append('deliveryBoyEmail', email)
      data.append('deliveryBoyPassword', password)
      data.append('deliveryBoyMobile', mobileno)
      data.append('deliveryBoyGender', gender)
      data.append('dob', dob)
      data.append('vehicleType', vehicleType)
      data.append('vehicleNo', vehicleNo)
      data.append('joiningDate', joiningDate)


      console.log(data.getAll("deliveryBoyId"))

      
     

      axios.post(url + '/add-delivery', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert(' DeliveryBoy is Updated into System')
          history.push('/delivery')
        } else {
          //console.log(result.error)
          alert('error while adding new deliveryBoy')
        }
      })
    
  }


return(
<div >
  <Navbar/>
    
<div class="form-group">
    <label for="exampleInputPassword1">Id</label>
    <input type="number" value={location.state.id} onChange={(e) => {
    setId(  e.target.value)
  }} class="form-control" id="exampleInputPassword1" placeholder="Password" />
</div>

<div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text"  value={name}  onChange={(e) => {
    setName( e.target.value)
  }}    name="name" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
</div>

<div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="email"  onChange={(e) => {
    setEmail(e.target.value)
  }} class="form-control" id="exampleInputPassword1" placeholder="Password" value={email}/>
</div>


<div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" onChange={(e) => {
    setPassword(e.target.value)
  }}  class="form-control" id="exampleInputPassword1" placeholder="Password" value={password}/>
</div>

<div class="form-group">
    <label for="exampleInputPassword1">Mobile No</label>
    <input type="text" onChange={(e) => {
    setMobileNo(e.target.value)
  }}  class="form-control" id="exampleInputPassword1" placeholder="Password" value={mobileno}/>
</div>

<div class="form-group">
    <label for="exampleInputPassword1">Gender</label>
    <input type="text" onChange={(e) => {
    setGender(e.target.value)
  }}  class="form-control" id="exampleInputPassword1" placeholder="Password" value={gender}/>
</div>

<div class="form-group">
    <label for="exampleInputPassword1">Vehical Type</label>
    <input type="text"  value={vehicleType} onChange={(e) => {
    setVehicleType(e.target.value)
  }}  class="form-control" id="exampleInputPassword1" placeholder="Password" />
</div>

<div class="form-group">
    <label for="exampleInputPassword1">Vehical No </label>
    <input type="number" onChange={(e) => {
    setVehicleNo(e.target.value)
  }}  class="form-control" id="exampleInputPassword1" placeholder="Password" value={vehicleNo}/>
</div>

<div class="form-group">
    <label for="exampleInputPassword1">Joining date</label>
    <input type="date" onChange={(e) => {
    setjoiningDate(e.target.value)
  }}  class="form-control" id="exampleInputPassword1" placeholder="Date" value={joiningDate}/>
</div>

<br />

<div className="mb-3">
<button onClick={updateDelivery} className="btn btn-success">
  Update
</button>

</div>

</div>
)    
}
export default EditDelivery;
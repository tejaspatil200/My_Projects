import { useLocation } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Adminnavbar';
import { url } from './../common/constants';

const EditEmployee = () => {
    const location= useLocation()
    //const url = 'http://localhost:8080'
    const history = useHistory()
 
 
 
 
     const[id, setId] = useState(location.state.id)
    const [name, setName] = useState(location.state.name)
    const [email, setEmail] = useState(location.state.email)
    const [password, setPassword] = useState(location.state.password)
    const [mobileno, setMobileNo] = useState(location.state.mobile)
    const [gender, setGender] = useState(location.state.gender)
    const [dob, setDob] = useState(location.state.dob)
   // const [joiningDate, setVehicalNo] = useState(location.state.vehicalNo)
   // const [dob, setDob] = useState('')
    const [joiningDate, setjoiningDate] = useState(location.state.joiningDate)
 
 
  
  
 
    const updateEmployee = () => {
     // if (email.length === 0) {
     //   alert('enter email')
     // } else if (password.length === 0) {
     //   alert('enter password')
     // } else {
       const data = new FormData()
 
       data.append('employeeId', id)
       data.append('employeeName', name)
       data.append('employeeEmail', email)
       data.append('employeePassword', password)
       data.append('employeeMobile', mobileno)
       data.append('employeeGender', gender)
       data.append('employeeDob', dob)
       //data.append('vehicalNo', vehicalNo)
       data.append('employeeJoindate', joiningDate)
  //     data.append('dob', dob)
       
      
 
       axios.post(url + '/add-employee', data).then((response) => {
         const result = response.data
         if (result.status === 'success') {
           alert(' Employee is Updated into System')
           history.push('/employee')
         } else {
           //console.log(result.error)
           alert('error while adding new employeeBoy')
         }
       })
     
   }
 
 
 return(
 <div >
   <Navbar/>
     
 <div class="form-group">
     <label for="exampleInputPassword1">Id</label>
     <input type="number" onChange={(e) => {
     setId(  e.target.value)
   }} class="form-control" id="exampleInputPassword1" placeholder="id" value={id}/>
 </div>
 
 <div class="form-group">
     <label for="exampleInputPassword1">Name</label>
     <input type="text"  value={name}  onChange={(e) => {
     setName( e.target.value)
   }}    name="name" class="form-control" id="exampleInputPassword1" placeholder="name"/>
 </div>
 
 <div class="form-group">
     <label for="exampleInputPassword1">Email</label>
     <input type="email"  onChange={(e) => {
     setEmail(e.target.value)
   }} class="form-control" id="exampleInputPassword1" placeholder="email" value={email}/>
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
   }}  class="form-control" id="exampleInputPassword1" placeholder="mobile no" value={mobileno}/>
 </div>
 
 <div class="form-group">
     <label for="exampleInputPassword1">Gender</label>
     <input type="text" onChange={(e) => {
     setGender(e.target.value)
   }}  class="form-control" id="exampleInputPassword1" placeholder="gender" value={gender}/>
 </div>
 
 <div class="form-group">
     <label for="exampleInputPassword1">BirthDate</label>
     <input type="date"  value={dob} onChange={(e) => {
  setDob(e.target.value)
   }}  value={dob}  class="form-control" id="exampleInputPassword1" placeholder="" />
 </div>
 
 
 
 <div class="form-group">
     <label for="exampleInputPassword1">Joining date</label>
     <input type="date" onChange={(e) => {
     setjoiningDate(e.target.value)
   }}  class="form-control" id="exampleInputPassword1" placeholder="Password" value={joiningDate}/>
 </div>
 
 <br />
 
 <div className="mb-3">
 <button onClick={updateEmployee} className="btn btn-success">
   Update
 </button>
 
 </div>
 
 </div>
 )    
 }
 export default EditEmployee;
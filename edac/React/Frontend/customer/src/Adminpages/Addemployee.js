



import axios from 'axios'
import { useState } from 'react'


import { useHistory } from 'react-router-dom';
import Navbar from '../components/Adminnavbar';
import { url } from './../common/constants';


const Addemployee = () => {

  const history = useHistory()
 // const url = 'http://localhost:8080'




  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobileno, setMobileNo] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')

  const [joiningDate, setjoiningDate] = useState('')


  const addEmployee = () => {
    // if (email.length === 0) {
    //   alert('enter email')
    // } else if (password.length === 0) {
    //   alert('enter password')
    // } else {
    const data = new FormData()

    // data.append('employeeId', id)
    data.append('employeeName', name)
    data.append('employeeEmail', email)
    data.append('employeePassword', password)
    data.append('employeeMobile', mobileno)
    data.append('employeeGender', gender)
    data.append('employeeDob', dob)

    data.append('employeeJoindate', joiningDate)




    axios.post(url + '/add-employee', data).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        alert(' Employee is Added into System')
        history.push('/employee')
      } else {
        //console.log(result.error)
        alert('error while adding new employeeBoy')
      }
    })

  }




  return (

    <div>

      <Navbar />

      <div>



        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input type="text" onChange={(e) => {
            setName(e.target.value)
          }} name="name" class="form-control" id="exampleInputPassword1" placeholder="name" />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input type="email" onChange={(e) => {
            setEmail(e.target.value)
          }} class="form-control" id="exampleInputPassword1" placeholder="email" />
        </div>


        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="text" onChange={(e) => {
            setPassword(e.target.value)
          }} class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Mobile No</label>
          <input type="text" onChange={(e) => {
            setMobileNo(e.target.value)
          }} class="form-control" id="exampleInputPassword1" placeholder="mobile no" />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Gender</label>
          <input type="text" onChange={(e) => {
            setGender(e.target.value)
          }} class="form-control" id="exampleInputPassword1" placeholder="gender" />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">BirthDate</label>
          <input type="date" onChange={(e) => {
            setDob(e.target.value)
          }} class="form-control" id="exampleInputPassword1" placeholder="" />
        </div>



        <div class="form-group">
          <label for="exampleInputPassword1">Joining date</label>
          <input type="date" onChange={(e) => {
            setjoiningDate(e.target.value)
          }} class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <br />

        <div className="mb-3">
          <button onClick={addEmployee} className="btn btn-success">
            ADD
          </button>

        </div>
      </div>



    </div>





  )
}
export default Addemployee;
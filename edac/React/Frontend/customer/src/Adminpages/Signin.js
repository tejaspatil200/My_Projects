import axios from 'axios'
import { useState } from 'react'

import { useHistory } from 'react-router-dom';
import './../components/Signin.css'
import { url } from './../common/constants';



const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // const url = 'http://localhost:8080'


  const history = useHistory()



  const login = () => {
    if (email.length === 0) {
      alert('enter email')
    } else if (password.length === 0) {
      alert('enter password')
    } else {
      const data = new FormData()
      data.append('email', email)
      data.append('password', password)


      axios.post(url + '/adminlogin', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {

          localStorage.setItem("Admin", JSON.stringify(result.data));

          alert('welcome to admin')
          history.push('/order')

        } else {
          console.log(result.error)
          alert('error while authentication')
        }
      })
    }

  }

  return (


    <div className="row  ">

      <div className="col-md-5  " >
        <div className=" card p-2 m-2">
        <img className="admin" src="https://www.uwcne.org/sites/default/files/users/9/Admin-portal.png" alt="" />
        </div>

        
      </div>
      <div className="col-md-7">
        <div   >
          <img className="image" src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="" />
        </div>

      
      <table className="table table-bordered " >
        <table className="table-light">
          <tr>
            <td>Email</td>
            <input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }} class="form-control" id="floatingInput" placeholder="name@example.com" />
          </tr>
          <br /><br />
          <tr>
            <td>Password</td>
            <input type="Password"
              onChange={(e) => {
                setPassword(e.target.value)
              }} class="form-control" id="floatingInput" />
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

  )

}

export default Signin;
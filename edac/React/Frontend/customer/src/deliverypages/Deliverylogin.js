import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"
import './../components/Signin.css'
import { url } from './../common/constants';

const Deliverylogin = () => {
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
            data.append('deliveryBoyEmail', email)
            data.append('deliveryBoyPassword', password)

            console.log(data);

            axios.post(url + '/deliverylogin', data).then((response) => {
                const result = response.data
                if (result.status === 'success') {


                    localStorage.setItem("deliveryBoy", JSON.stringify(result.data));

                    //console.log(result.data)
                    history.push('/orderlist')




                } else {
                    console.log(result.error)
                    alert('error while authentication')
                }
            })
        }
    }



    return (

        <div className="row  ">
            <div className="col-md-5 ">
                <div  >
                    <br /><br />
                    <img className="image" src="https://t3.ftcdn.net/jpg/02/45/84/16/360_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="" />
                </div>
                <br />
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
            <div className="col-md-7 ">
                <br /><br />
                   <img  src="https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148497067.jpg?size=626&ext=jpg" alt="" />
             
            </div>



        </div>
    )
}
export default Deliverylogin;

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { registerNewUser } from './../actions/userActions';
import { registerNewUserReducer } from './../reducers/userReducer';

const Registerscreen = () => {


    const registerstate = useSelector(state => state.registerNewUserReducer)

    const { loading, error, success } = registerstate
    

    const dispatch = useDispatch();

    const [name, setFirstName] = useState('')
   

    const [age, setAge] = useState('')
    const [gender, setGender] = useState('Male')
    const [phone, setPhone] = useState('')
    const [dob, setDOB] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, csetPassword] = useState('')


    function register(e) {

        e.preventDefault()


        if (password == cpassword) {

            const customer = {
                customerName: name,
           
                customerEmail: email,
                customerPassword: password,
                customerAge: age,
                customerMobile: phone,
                customerGender: gender,
                customerDob:dob
            }


            dispatch(registerNewUser(customer))

        }
        else {

            alert("password is wrong")
        }
    }


    return (
        <div className="row justify-content-center">

            <h1 className="text-center">Registration page</h1>

            <div className="col-md-5 card p-3" >

                {/* if condition if success show this msg */}
                {error && ("Email Already Registered")}

                {success && ("your registration is successfull")}

                <form onSubmit={register}>

                    <div>

                        {/* <label>Name</label> */}
                        <input onChange={(event) => {

                            setFirstName(event.target.value)
                        }}
                            className="form-control"
                            required
                            type="text"
                            placeholder="Enter your First name"
                        />

                    
                        <input
                            onChange={(event) => {

                                setEmail(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="text"
                            placeholder="Email"
                        />


                        {/* <label>confirm Password</label> */}
                        <input
                            onChange={(event) => {

                                setPassword(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="password"
                            placeholder="password"
                        />

                        {/* 
                        <label>Password</label> */}
                        <input
                            onChange={(event) => {

                                csetPassword(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="password"
                            placeholder="confirm password"
                        />
                        <input
                            onChange={(event) => {

                                setAge(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="Number"
                            placeholder="Age"
                        />

                        <input
                            onChange={(event) => {

                                setPhone(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="text"
                            placeholder="phone number"
                        />
                         <select
                            onChange={(event) => {

                                setGender(null)
                                setGender(event.target.value)
                                
                            }}
                            className="form-control"
                            required
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>

                        </select>
                        
                           <input
                            onChange={(event) => {

                                setDOB(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="date"
                            placeholder="Date of Birth"
                        />



                       



                        <div>

                            <button type="submit" className="btn btn-dark mt-3">
                                Register
                            </button>
                        </div>
                    </div>

                </form>

                <a href="/login">Click here to login</a>

            </div>
        </div>
    )
}

export default Registerscreen

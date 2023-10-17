
import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions/userActions';
import Navbar from './../components/navbar';



export default function ProfileScreen() {
    const dispatch = useDispatch();


    const loginstate = useSelector(state => state.loginReducer)

    const currentUser = loginstate.currentUser

    // console.log(currentUser)

    const updatestate = useSelector(state => state.updateReducer)

    const {success, error } = updatestate


    const [name, setName] = useState(currentUser.customerName)

    const [email, setEmail] = useState(currentUser.customerEmail)
    const [phone, setPhone] = useState(currentUser.customerMobile)
    const [dob, setDob] = useState(currentUser.customerDob.substring(0,10))
    const [age, setAge] = useState(currentUser.customerAge)
    const [password, setPassword] = useState('')
    const [cpassword, setcPassword] = useState('')


    function update(e) {

        e.preventDefault()

        // if(password.length==0){
        //    return alert("Please confirm your password");
        // }

        if (password == cpassword) {

            const updatedcustomer = {

                customerName: name,
             
                customerMobile:phone,
                customerEmail: email,
                customerPassword: password,
                customerDob:dob,
                customerAge:age
            };

            dispatch(updateUser(currentUser.customerId, updatedcustomer))


        }
        else {
            alert("password not matched")
        }


    }

    return (

        <div className="cul2">
             <Navbar />
            <h1 className="text-center">Profile page</h1>

            <div className="col-md-5 card p-2" >

                {/* if condition if success show this msg */}
                {error && ("Something went wrong")}

                {success && ("your profile update is successfull")}
                {success && (alert("please logout to see changes"))}

                <form onSubmit={update}>

                    <div>

                        <label>First Name</label>
                        <input 
                          value={name}
                        onChange={(event) => {

                            setName(event.target.value)
                        }}
                            className="form-control"
                            
                            type="text"
                            placeholder="First name"
                         

                        />

                    
                        <label>Email</label>
                        <input
                              value={email}
                            onChange={(event) => {

                                setEmail(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="text"
                            placeholder="Email"
                           // value={currentUser.email}
                        />

                        <label>Phone Number </label>
                        <input
                          value={phone}
                            onChange={(event) => {

                                setPhone(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="text"
                            placeholder="Phone"
                            //value={currentUser.phone}
                        />
                           <label>Date Of Birth </label>
                        <input
                              value={dob}
                            onChange={(event) => {

                                setDob(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="text"
                            placeholder="DOB"
                          
                        />
                             <label>Age </label>
                        <input
                              value={age}
                            onChange={(event) => {

                                setAge(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="number"
                            placeholder="Age"
                          
                        />



                        <label>Password</label>
                        <input
                            onChange={(event) => {

                                setPassword(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="password"
                            placeholder="password"
                        />



                        <label>confirm Password</label>
                        <input
                            onChange={(event) => {

                                setcPassword(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="password"
                            placeholder="confirm password"
                        />





                        <div>

                            <button type="submit" className="btn btn-dark mt-3">
                                UPDATE
                            </button>
                        </div>
                    </div>

                </form>


            </div>

        </div>
    )
}
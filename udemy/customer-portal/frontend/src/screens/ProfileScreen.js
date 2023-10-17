
import React from 'react'
import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions/userActions';



export default function ProfileScreen() {
    const dispatch = useDispatch();


    const loginstate = useSelector(state => state.loginReducer)

    const currentUser = loginstate.currentUser

    const updatestate = useSelector(state => state.updateReducer)

    const {loading,success,error}=updatestate


    const [name, setname] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState('')
    const [cpassword, setcPassword] = useState('')


    function update(e) {

        e.preventDefault()

        if(password==cpassword){

            const updateduser={

                name:name,
                email:email,
                pssword:password
            };

dispatch(updateUser(currentUser._id,updateduser))


        }
        else{
            alert("password not matched")
        }


    }

    return (

        <div>
            <h1 className="text-center">Profile page</h1>

            <div className="col-md-5 card p-3" >

                {/* if condition if success show this msg */}
                {error && ("Something went wrong")}

                {success && ("your profile update is successfull")}

                <form onSubmit={update}>

                    <div>

                        <label>Name</label>
                        <input onChange={(event) => {

                            setname(event.target.value)
                        }}
                            className="form-control"
                            required
                            type="text"
                            placeholder="name"
                        />



                        <label>Email</label>
                        <input
                            onChange={(event) => {

                                setEmail(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="text"
                            placeholder="email"
                        />


                        <label>confirm Password</label>
                        <input
                            onChange={(event) => {

                                setcPassword(event.target.value)
                            }}
                            className="form-control"
                            required
                            type="password"
                            placeholder="password"
                        />


                        <label>Password</label>
                        <input
                            onChange={(event) => {

                                setPassword(event.target.value)
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
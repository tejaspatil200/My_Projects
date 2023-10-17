
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { registerNewUser } from './../actions/userActions';
import { registerNewUserReducer } from './../reducers/userReducer';

const Registerscreen = () => {


    const registerstate = useSelector(state=>state.registerNewUserReducer)

    const {loading,error,success} = registerstate

    const dispatch = useDispatch();

    const [name, setname] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, csetPassword] = useState('')


    function register(e) {

        e.preventDefault()
     

        if (password == cpassword) {

            const user = {
                name: name,
                email: email,
                password: password
            }
    

            dispatch(registerNewUser(user))

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

                                csetPassword(event.target.value)
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

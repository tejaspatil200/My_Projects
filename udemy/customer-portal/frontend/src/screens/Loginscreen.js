
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/userActions';



const Loginscreen = () => {

    const dispatch = useDispatch();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    function login(e) {

        e.preventDefault()
        const user = {

            email: email,
            password: password
        }

        dispatch(loginUser(user))


    }

    useEffect(() => {


        if (localStorage.getItem('currentUser')) {
            window.location.href = "/"
        }
    }, [])


    return (
        <div className="row justify-content-center">

            <h1 className="text-center">Login page</h1>

            <div className="col-md-4 card p-3" >

                <form onSubmit={login}>


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
                            Login
                        </button>
                    </div>


                </form>

                <div>

                    <Link to="/register" className="nav-link">
                        <button >
                           click here to register
                        </button>

                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Loginscreen


import axios from 'axios';
import { Link } from 'react-router-dom';


export const registerNewUser = (user) => dispatch => {

    console.log(user)

    dispatch({ type: "USER_REGISTER_REQUEST" })

    axios.post('/api/users/register/', user).then(res => {

        dispatch({ type: "USER_REGISTER_SUCCESS" })
        console.log(res);

    }).catch(err => {


        dispatch({ type: "USER_REGISTER_FAILED", payload: err })
        console.log(err);
    })

}


export const loginUser = (user) => dispatch => {

    console.log(user)


    dispatch({ type: "USER_LOGIN_REQUEST" })

    axios.post('/api/users/login', user).then(res => {

        dispatch({ type: "USER_LOGIN_SUCCESS",payload :res.data })
        console.log.apply(res.data)


        localStorage.setItem('currentUser', JSON.stringify(res.data))  //JSON object to string

        
        window.location.href = "/"
        // console.log(res);



    }).catch(err => {
        console.log(err);
        dispatch({ type: "USER_LOGIN_FAILED", payload: err })
    })

}

export const logoutUser = () => dispatch => {


    localStorage.removeItem('currentUser')
    localStorage.removeItem('cartItems')

    dispatch({ type: 'USER_LOGOUT' })

    window.location.href = "/login"

}



export const updateUser = (userid,updateduser) => dispatch => {



    dispatch({ type: "USER_UPDATE_REQUEST" })

    axios.post('/api/users/update/', {updateduser,userid}).then(res => {

        dispatch({ type: "USER_UPDATE_SUCCESS" })
        console.log(res);

    }).catch(err => {


        dispatch({ type: "USER_UPDATE_FAILED", payload: err })
        console.log(err);
    })

}

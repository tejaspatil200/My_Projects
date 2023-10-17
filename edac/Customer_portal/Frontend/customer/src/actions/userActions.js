
import axios from 'axios';
import { url } from './../common/constants';



export const registerNewUser = (customer) => dispatch => {

    console.log(customer)

    dispatch({ type: "USER_REGISTER_REQUEST" })

    axios.post(url + '/api/users/register', customer).then(res => {

        dispatch({ type: "USER_REGISTER_SUCCESS" })
        console.log(res);

    }).catch(err => {


        dispatch({ type: "USER_REGISTER_FAILED", payload: err })
        console.log(err);
    })

}


export const loginUser = (customer) => dispatch => {

    console.log(customer)


    dispatch({ type: "USER_LOGIN_REQUEST" })

    axios.post(url +'/api/users/login', customer).then(res => {

        dispatch({ type: "USER_LOGIN_SUCCESS",payload :res.data })

        //console.log.apply(res.data)

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

    //dispatch({ type: 'USER_LOGOUT' })
    window.location.href = "/"

}



export const updateUser = (customerId,updatedcustomer) => dispatch => {



    dispatch({ type: "USER_UPDATE_REQUEST" })

    //console.log(updatedcustomer)
    console.log(customerId)

    axios.post(url +'/api/users/update', {customerId,updatedcustomer}).then(res => {

        dispatch({ type: "USER_UPDATE_SUCCESS" })
        console.log(res);

    }).catch(err => {

        dispatch({ type: "USER_UPDATE_FAILED", payload: err })
        console.log(err);
    })

}

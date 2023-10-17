import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import { placeOrderReducer } from '../reducers/orderReducer';


export default function Onlinecheckout({amount}) {

    const dispatch = useDispatch()

    const orderState =useSelector(state=>state.placeOrderReducer)

    const {loading ,success,error} = orderState

    function tokenHandler(token){

        dispatch(placeOrder(token,amount))
        console.log(token);
    }

    function Validate(){

        if(!localStorage.getItem('currentUser')){

            window.location.href="/login"
        }
    }


    return (


        <div >

            {loading && ("loading...")}
            {success && ("Your order place successfully")}
            {error && ("Something went wrong")}
            
            <StripeCheckout
            token={tokenHandler}
            amount ={amount*100}
            shippingAddress
            currency="INR"
            stripeKey='pk_test_51JMFkkSHobfatWODm8qXDcv7ydbDsILEeXvtAj7K41XYuB6Kic9X6JnhicVVmC3qERmrOvWeWnSWFPdMcVoKebXd00UMXYzwkF'

            >
                <button  className="btn btn-dark" onClick={Validate}>PAY NOW</button>


            </StripeCheckout>

        </div>
    )
}
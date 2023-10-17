import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import { placeOrderReducer } from '../reducers/orderReducer';
import { useState } from 'react';

export default function Offlinecheckout({ amount }) {

    const dispatch = useDispatch()

    const orderState = useSelector(state => state.placeOrderReducer)

    const { loading, success, error } = orderState

    const [customerAddress, setAddress] = useState('')
    const [customerCity, setCity] = useState('')
    const [customerPincode, setPincode] = useState('')
    const [customerCountry, setCountry] = useState('')

    function Validate() {

        if (!localStorage.getItem('currentUser')) {

            window.location.href = "/login"
        } else {
            if (customerAddress.length == 0)
                alert("Address Should not be empty");
            else if (customerCity.length == 0)
                alert("Address Should not be empty");
            else if (customerPincode.length == 0)
                alert("Address Should not be empty");
            else if (customerCountry.length == 0)
                alert("Address Should not be empty");
            else {


                const token = {
                    customerAddress: customerAddress,
                    customerCity: customerCity,
                    customerPincode: customerPincode,
                    customerCountry: customerCountry
                }

                dispatch(placeOrder(token, amount))
            }
        }
    }


    return (


        <div className="cul">

            {loading && ("loading...")}
            {success && ("Your order place successfully")}
            {error && ("Something went wrong")}

            <div className="row justify-content-center">

                <h4 className="text-center">Enter Shipping Address </h4>

                <div className="col-md-5 card p-3" >


                    <form>

                        <div>

                            {/* <label>Name</label> */}
                            <input onChange={(event) => {

                                setAddress(event.target.value)
                            }}
                                className="form-control"
                                required
                                type="text"
                                placeholder="Enter your Address"
                            />


                            <input
                                onChange={(event) => {

                                    setCity(event.target.value)
                                }}
                                className="form-control"
                                required
                                type="text"
                                placeholder="City"
                            />


                            {/* <label>confirm Password</label> */}
                            <input
                                onChange={(event) => {

                                    setPincode(event.target.value)
                                }}
                                className="form-control"
                                required
                                type="number"
                                placeholder="Pincode"
                            />


                            <input
                                onChange={(event) => {

                                    setCountry(event.target.value)
                                }}
                                className="form-control"
                                required
                                type="text"
                                placeholder="Country"
                            />

                        </div>

                    </form>

                    <button className="btn btn-dark mt-3" onClick={Validate}>
                        PLACE ORDER
                    </button>


                </div>
            </div>


        </div>
    )
}
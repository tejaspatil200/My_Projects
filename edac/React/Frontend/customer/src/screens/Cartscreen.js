import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from './../actions/cartActions';

import { placeOrder } from './../actions/orderActions';
import Onlinecheckout from '../components/onlinecheckout';
import Offlinecheckout from './../components/offlinecheckout';
import Navbar from './../components/navbar';





export default function Cartscreen() {


    const [card, setCard] = useState(null)
    const [cash, setCash] = useState(null)


    const cartreducerstate = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()

    const { cartItems } = cartreducerstate



    var subtotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
        subtotal = subtotal + (cartItems[i].price * cartItems[i].quantity);
    }



    // var subtotal = cartItems.reduce((count, item) => count + (item.price * item.quantity), 0)


    return (
        <div className="cul2">
             <Navbar />

            <div className="row mt-3 justify-content-center">
                <div className="col-md-8">
                    <h1 className="text-center m-5">My Cart</h1>
                    <table className="table table-bordered">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Delete</th>
                            </tr>

                        </thead>
                        <tbody>

                            {cartItems.map(item => {

                                return <tr>
                                    <td>{item.mobileName}{item.laptopName}{item.earphoneName}{item.tvName} </td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.quantity * item.price}</td>

                                    <td><i class="far fa-trash-alt" onClick={() => dispatch(deleteFromCart(item))}></i></td>
                                </tr>
                            })}

                        </tbody>

                    </table>
                    <hr />
                    <h2 className="text-center  fw-bold" >Total Amount : {subtotal} RS/- </h2>


                    <hr />
                    {/* <button className="btn btn-dark">PAY NOW</button> */}
                    {/* <Checkout amount={subtotal} /> */}

                    <h5>Select Payment Option :</h5>

                    <table className="m-2" >
                        <tr>
                            <td className="payopt_table"><input type="radio" name="gender"
                                onChange={(event) => {
                                    setCash(event.target.value)
                                    setCard(null)
                                }}
                                checked={cash} />Cash on delivery</td>
                        </tr>
                        <tr>
                            <td className="payopt_table"><input type="radio" name="gender"

                                onChange={(event) => {

                                    setCard(event.target.value)
                                    setCash(null)
                                }}
                                checked={card} />Pay with Card</td>
                        </tr>
                        <br />

                    </table>


                    <div>
                        {card && (<Onlinecheckout amount={subtotal} />)}

                        {cash && (<Offlinecheckout amount={subtotal} />)}

                    </div>




                </div>



            </div>

        </div>

    )
}
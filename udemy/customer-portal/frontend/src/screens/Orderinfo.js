import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../actions/orderActions';



export default function Orderinfo({ match }) {

    const dispatch = useDispatch()

    const orderstate = useSelector(state => state.getOrderByIdReducer)
    const { order, loading, error } = orderstate

    useEffect(() => {
        dispatch(getOrderById(match.params.orderid))

    }, [])

    return (

        <div>

            {error && ("something is wrong")}

            {order && (

                <div className="row ">
                    <div className="col-md-5 card justify-content-center m-0">


                        <h5 className="m-1">Items in your order</h5>
                        <hr />
                        {order.orderItems.map(item => {

                            return <div>

                                <h1>{item.name}</h1>
                                <h1>Quantity  :<b>{item.quantity}</b></h1>
                                <h1>Price  :{item.quantity}*{item.price}={item.quantity * item.price} </h1>
                                <hr />
                            </div>

                        })}


                    </div>

                    <div className="col-md-5 card">

                        <h1 className="text-center">Order Details</h1>

                        <hr />
                        <h1>Order Id :{order._id}</h1>
                        <h1>Total Amount :{order.orderAmount}</h1>
                        <h1>Date Of order :{order.createdAt.substring(0, 10)}</h1>
                        <h1>Transaction ID :{order.transactionId}</h1>

                        <h1>Status :{order.isDelivered ? (<h1>Order Delivered</h1>) : (<h1>order Placed</h1>)}</h1>



                        <hr />


                        <div>

                            <h5 >Shipping Details</h5>

                            <h1>Address  :<b> {order.shippingAddress.address} </b></h1>
                            <h1>City :<b> {order.shippingAddress.city} </b></h1>
                            <h1>Country  :<b> {order.shippingAddress.country} </b></h1>
                        </div>

                    </div>

                </div>
            )}


            <hr/>


        </div>
    )
}
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getOrderById } from '../actions/orderActions';



export default function Orderinfo({ match }) {

    const dispatch = useDispatch()

    const orderstate = useSelector(state => state.getOrderByIdReducer)
    const { order, loading, error } = orderstate

    const location = useLocation()
    const orderdetail  = location.state.orderdetail 
    console.log(orderdetail)



    useEffect(() => {
        dispatch(getOrderById(match.params.orderId))

    }, [])

    return (

        <div className="cul2">

            {error && ("something is wrong")}

            {order && (

                <div className="row ">
                    <div className="col-md-5 card justify-content-center m-0">


                        <h4 className="m-1">Items in your order</h4>
                        <hr />
                        {order.map(item => {

                            return <div>

                                <h4>{item.itemName}</h4>
                                <h4>Quantity  :<b>{item.quantity}</b></h4>
                                <h4>Price  : {item.quantity}* {item.price}= RS {item.quantity * item.price} /-</h4>
                                <hr />
                            </div>

                        })}


                    </div>

                    <div className="col-md-5 card">

                        <h4 className="text-center">Order Details</h4>

                        <hr />
                        <h5>Order Id :{orderdetail.orderId}</h5>
                        <h5>Total Amount :{orderdetail.orderAmount}</h5>
                        <h5>Date Of order :{orderdetail.orderDate.substring(0, 10)}</h5>
                        <h5>Transaction ID :{orderdetail.transactionId}</h5>
                        <h5>Payment Status :{orderdetail.paymentStatus}</h5>

                        <h5>Status :{orderdetail.deliveryStatus=="True" ? (<h4>Order Delivered</h4>) : (<h4>order Placed</h4>)}</h5>
                         <h5>{orderdetail.deliveryStatus=="True" &&(<h5>Delivery Date : {orderdetail.deliveryDate.substring(0,10)}</h5>)  } </h5>  
                        <hr />
                        {/* <div>
                            <h5 >Shipping Details</h5>
                            <h1>Address  :<b> {order.shippingAddress.address} </b></h1>
                            <h1>City :<b> {order.shippingAddress.city} </b></h1>
                            <h1>Country  :<b> {order.shippingAddress.country} </b></h1>
                        </div> */}

                    </div>

                </div>
            )}


            <hr />


        </div>
    )
}
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getOrdersByCustomerId } from '../actions/orderActions';
import { useHistory } from 'react-router';
import Navbar from './../components/navbar';


export default function OrderListscreen() {

    const ordersstate = useSelector(state => state.getOrdersByCustomerIdReducer)

    const { orders, error, loading } = ordersstate

    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {

        if (localStorage.getItem('currentUser')) {

            dispatch(getOrdersByCustomerId())

        } else {

            window.location.href = '/login'
        }


    }, [dispatch])  //to execute useeffect wherenever change in order hence [dispatch]

    return (

        <div className="cul2">
             <Navbar/>

            <div className="row justify-content-center">

                <div className="col-md-8">
                    <h4>My ORDERS</h4>

                    <table className="table table-striped">

                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Amount</th>
                                <th>Date</th>

                                <th>Transaction Id</th>
                                <th>Status</th>

                            </tr>
                        </thead>


                        <tbody>
                            {loading && ("Loading...")}
                            {orders && (orders.map(order => {

                                return (


                                    <tr onClick={() => { history.push( `/itemdetails/orderinfo/${order.orderId}`,{orderdetail :order})}}>
                                        <td>{order.orderId}</td>
                                        <td>{order.orderAmount}</td>
                                        <td>{order.orderDate.substring(0, 10)}</td>
                                        <td>{order.transactionId}</td>
                                        <td>{order.deliveryStatus=="True" ? (<li>Delivered </li>) : (<li>Order Placed</li>)}</td>
                                    </tr>


                                )

                            }))}


                        </tbody>
                    </table>

                </div>
            </div>

        </div>


    )

}
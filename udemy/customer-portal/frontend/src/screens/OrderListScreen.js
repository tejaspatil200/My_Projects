import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getOrdersByUserId } from '../actions/orderActions';


export default function OrderListscreen() {

    const ordersstate = useSelector(state => state.getOrdersByUserIdReducer)

    const { orders, error, loading } = ordersstate

    const dispatch = useDispatch()

    useEffect(() => {

        if (localStorage.getItem('currentUser')) {

            dispatch(getOrdersByUserId())

        } else {

            window.location.href = '/login'
        }


    }, [dispatch])  //to execute useeffect wherenever change in order hence [dispatch]

    return (

        <div>

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


                                    <tr onClick={() => { window.location = `/orderinfo/${order._id}` }}>
                                        <td>{order._id}</td>
                                        <td>{order.orderAmount}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>{order.transactionId}</td>
                                        <td>{order.isDelivered ? (<li>Delivered </li>) : (<li>Order Placed</li>)}</td>
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
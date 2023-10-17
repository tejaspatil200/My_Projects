import axios from "axios"
import { useEffect, useState } from "react"

import { useHistory } from "react-router-dom";
import Navbar from "../components/deliverynavbar";
import { url } from './../common/constants';

const Deliveryorders = () => {

  const [Orders, setOrders] = useState([])
  //const url = 'http://localhost:8080'
  const history = useHistory()


  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = () => {

    if ((!JSON.parse(localStorage.getItem("deliveryBoy")))) {


      history.push("/deliverylogin");
    }

    else {
      axios.get(url + '/orderlist').then((response) => {
        const result = response.data
        console.log(result)
        if (result.status === 'success') {
          setOrders(result.data)
        } else {
          alert('error while loading All Orders')
        }
      })
    }
  }

  const pickOrder = (order) => {
    history.push("/orderupdate/update", {
      orderId: order.orderId,
      customerId: order.customerId,


      paymentStatus: order.paymentStatus,
    })
  }





  const newOrders = new Array();
  for (var i = 0; i < Orders.length; i++) {

    if (Orders[i].deliveryStatus == "False") {
      var values = {
        customerAddress: Orders[i].customerAddress,
        customerCity: Orders[i].customerCity,
        customerCountry: Orders[i].customerCountry,
        customerId: Orders[i].customerId,
        customerMobile: Orders[i].customerMobile,
        customerName: Orders[i].customerName,
        customerPincode: Orders[i].customerPincode,
        deliveryStatus: Orders[i].deliveryStatus,
        orderAmount: Orders[i].orderAmount,
        orderDate: Orders[i].orderDate,
        orderId: Orders[i].orderId,
        paymentStatus: Orders[i].paymentStatus


      }
      newOrders.push(values)

    }
  }

  return (

    <div className="cul2">
      <Navbar />
      <div>

        <br />
        <div className="col-md-12 ">
          <h1 className="delorder">All Orders</h1>
        </div>


        <br />


        <table className="table table-bordered" >
          <thead>
            <tr className="table-dark">

              <th> Order Id</th>
              <th> Customer Name</th>
              <th>customer MobileNo</th>
              <th>Address</th>
              <th>city</th>
              <th>pin</th>

              <th>country</th>
              <th>Order date</th>
              <th>Order Amount</th>

              <th>Patyment Status</th>

              <th>Update</th>


            </tr>
          </thead>
          <tbody>





            {newOrders.map((order) => {
              { order.deliveryStatus == "false" && (<h2>hghg</h2>) }
              return (

                <tr className="table-primary">

                  <td> {order.orderId}</td>
                  <td> {order.customerName}</td>
                  <td> {order.customerMobile}</td>
                  <td> {order.customerAddress}</td>
                  <td> {order.customerCity}</td>
                  <td> {order.customerPincode}</td>
                  <td> {order.customerCountry}</td>
                  <td>{order.orderDate} </td>
                  <td> {order.orderAmount}</td>

                  <td> {order.paymentStatus}</td>

                  <td><button onClick={() => {
                    pickOrder(order)
                  }} className="btn btn-danger">
                    Pick Order
                  </button></td>


                </tr>)







            })}


          </tbody>
        </table>
      </div>



    </div>





  )
}
export default Deliveryorders;
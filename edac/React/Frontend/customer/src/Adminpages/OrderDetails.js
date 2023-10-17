import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from './../components/Adminnavbar';
import { useHistory, useLocation } from 'react-router-dom';
import Delivery from './Delivery';
import { url } from './../common/constants';




const OrderDetails = () => {

  const location = useLocation()
  const [ordersdetails, setOrdersdetails] = useState([])
 // const url = 'http://localhost:8080'

  const order = location.state.orderdetails
  // console.log(order)



  useEffect(() => {

    getOrderDetails()
  }, [])

  const getOrderDetails = () => {
    console.log(order.orderId)

    axios.get(url + '/orderdetails/' + order.orderId).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setOrdersdetails(result.data)

        console.log(result.data)
      } else {
        alert('error while loading  Order Details')
      }
    })
  }





  return (

    <div>
            <Navbar />



      <div className="row">
        <div className="col-md-5">
          <div className="card p-2 m-2">

            
          <table className=" tbl m-3">
              <h5 className="text-center">  Delivery Details <br/>{!ordersdetails.deliveryBoyName &&( <h6>(Order Not Yet Delivered) </h6>)} </h5>


              <tr className="border">
                <th>DeliveryBoy Name  :</th>
                <td className="border">{ordersdetails.deliveryBoyName}</td>
              </tr>
              <tr className="border">
                <th>Delivery Date :</th>
                <td className="border">{ordersdetails.deliveryDate}</td>
              </tr>
              <tr className="border">
                <th>Delivery Status  :</th>
                <td className="border">{ordersdetails.deliveryStatus=="True"  && (" Order Delivered")}</td>
              </tr>

              <tr className="border">
                <th>DeliveryBoy Mobile no :</th>
                <td className="border">{ordersdetails.deliveryBoyMobile}</td>
              </tr>

              <tr className="border">
                <th>DeliveryBoy vehicle no :</th>
                <td className="border">{ordersdetails.vehicleNo}</td>
              </tr>
              </table>

    

          </div>

        </div>
        <div className="col-md-7 card text-start">

          <div className="p-2 m-2">

            <table className=" tbl m-3">
              <h5 className="text-center">Customer Details</h5>


              <tr className="border">
                <th>Customer Name  :</th>
                <td className="border">{order.customerName}</td>
              </tr>
              <tr className="border">
                <th>Customer Address :</th>
                <td className="border">{order.customerAddress}</td>
              </tr>
              <tr className="border">
                <th>Customer city  :</th>
                <td className="border">{order.customerCity}</td>
              </tr>

              <tr className="border">
                <th>Customer pincode :</th>
                <td className="border">{order.customerPincode}</td>
              </tr>

              <tr className="border">
                <th>Customer Mobile no:</th>
                <td className="border">{order.customerMobile}</td>
              </tr>

            </table>
              

          </div>
        </div>


      </div>


     <br />
      <h4 >Orders Details</h4>

      <br />


      <table className="table table-bordered" >
        <thead>
          <tr className="table-dark">
            <th> Order Id</th>
            <th>Order Amount</th>
            <th>Order Date</th>
            <th>Payment Status</th>
            <th>Transaction Id</th>
         
          </tr>
        </thead>
        <tbody>
        <tr className="table-success">
            <td> {order.orderId}</td>
            <td>{order.orderAmount}</td>
            <td>{order.orderDate}</td>
            <td>{order.paymentStatus=="Done" ?  ("PAID") :("Unpaid" )  }</td>
            <td>{order.transactionId }</td>
         
          </tr>

        </tbody>
      </table>
    </div>

  )
}

export default OrderDetails;
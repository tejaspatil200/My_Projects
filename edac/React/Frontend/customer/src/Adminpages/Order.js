import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from './../components/Adminnavbar';
import { useHistory } from 'react-router-dom';
import { url } from './../common/constants';




const Order = () => {
  const [Orders, setOrders] = useState([])
  //const url = 'http://localhost:8080'

  const history = useHistory()

  useEffect(() => {


    getOrders()
  }, [])

  const getOrders = () => {

    if ((!JSON.parse(localStorage.getItem("Admin")))){


      history.push("/adminlogin");
    } else {

      axios.get(url + '/order').then((response) => {
        const result = response.data
        if (result.status === 'success') {
          setOrders(result.data)
          console.log(result)
        } else {
          alert('error while loading All Orders')
        }
      })



    }


  }

  const deliveryDetails = (order) => {


    history.push('/orderdetails', {

      orderdetails: order

    })
  }



  return (

    <div>
      <Navbar />
      <br />
      <h1 >All Orders</h1>

      <br />


      <table className="table table-bordered" >
        <thead>
          <tr className="table-dark">
            <th> Order Id</th>
            <th>Customer Name</th>
            <th>Order Date</th>

            <th>Payment Status</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((order) => {
            return (
              <tr className="table-primary">
                <td> {order.orderId}</td>
                <td> {order.customerName}</td>
                <td>{order.orderDate} </td>

                <td> {order.paymentStatus}</td>
                <td><button onClick={() => {
                  deliveryDetails(order)
                }} className="btn btn-success">Details</button> </td>


              </tr>)
          })}


        </tbody>
      </table>
    </div>

  )
}

export default Order;
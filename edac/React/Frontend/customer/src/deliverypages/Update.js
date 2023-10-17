import { useLocation } from 'react-router'
import { useEffect, useState } from "react"
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Navbar from './../components/deliverynavbar';
import { url } from './../common/constants';

const Update = () => {
  const location = useLocation()
  // const url = 'http://localhost:8080'
  const history = useHistory()
  const delivery = JSON.parse(localStorage.getItem("deliveryBoy"));

  const [orderId, setOrderId] = useState(location.state.orderId)
  const [deliveryBoyId, SetdeliveryBoyId] = useState(delivery.deliveryBoyId)

  const [deliveryboyname, setDeliveryBoyname] = useState(delivery.deliveryBoyName)
  const [deliveryboymobile, setDeliveryBoymobile] = useState(delivery.deliveryBoyMobile)
  const [deliveryboygender, setDeliveryboygender] = useState(delivery.deliveryBoyGender)

  const [deliveryboyemail, setDeliveryboyemail] = useState(delivery.deliveryBoyEmail)
  const [deliveryboypassword, setDeliveryboypassword] = useState(delivery.deliveryBoyPassword)
  const [vehicletype, Setvehicaltype] = useState(delivery.vehicleType)
  const [vehicleno, Setvehicleno] = useState(delivery.vehicleNo)

  const [dob, Setdob] = useState(delivery.dob)

  const [joiningdate, setjoiningdate] = useState(delivery.joiningDate)


  const [customerid, setcustomerId] = useState(location.state.customerId)

  const [deliverydate, setDeliverydate] = useState('')

  const [paymentstatus, setPaymentstatus] = useState("Done")
  const [deliverystatus, setDeliverystatus] = useState("True")



  const fillDetails = () => {

      if (deliverydate.length == 0) {
        alert('Please Enter Delivery Date')
      }
      else {
        const data = new FormData()
        data.append('orderId', orderId)
        data.append('deliveryBoyId', deliveryBoyId)
        data.append('customerId', customerid)

        data.append('deliveryDate', deliverydate)
        data.append('paymentStatus', paymentstatus)
        data.append('deliveryStatus', deliverystatus)


        data.append('deliveryBoyName', deliveryboyname)
        data.append('deliveryBoyMobile', deliveryboymobile)
        data.append('deliveryBoyGender', deliveryboygender)
        data.append('deliveryBoyEmail', deliveryboyemail)
        data.append('deliveryBoyPassword', deliveryboypassword)
        data.append('vehicleType', vehicletype)
        data.append('vehicleNo', vehicleno)
        data.append('dob', dob)
        data.append('joiningDate', joiningdate)
        //data.append('vehicleType', vehicletype)



        console.log(data.getAll('orderId'))
        console.log(data.getAll('deliveryBoyId'))
        console.log(data.getAll('deliveryDate'))
        console.log(data.getAll('paymentStatus'))
        console.log(data.getAll('deliveryStatus'))
        console.log(data.getAll('customerId'))


        axios.post(url + '/orderupdate/update', data).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            alert(' order is successfully updated into system')
            history.push('/orderlist')
          } else {

            alert('error while updating orders in system')
          }
        })

      }
    }
  


  return (
    <div className="cul2">
      <div >
        <Navbar />

        <div class="form-group">
          <label for="exampleInputPassword1">Order Id</label>
          <input type="number" onChange={(e) => {
            setOrderId(e.target.value)
          }} class="form-control" id="exampleInputPassword1" placeholder="id" value={location.state.orderId} />
        </div>




        <div class="form-group">
          <label for="exampleInputPassword1">DeliveryBoy Id</label>
          <input type="number" onChange={(e) => {
            SetdeliveryBoyId(e.target.value)
          }} class="form-control" id="exampleInputPassword1" placeholder="id" value={delivery.deliveryBoyId} />
        </div>



        <div class="form-group">
          <label for="exampleInputPassword1">Date</label>
          <input type="date" onChange={(e) => {
            setDeliverydate(e.target.value)
          }} class="form-control" id="exampleInputPassword1" value={deliverydate} />
        </div>
        <br />


        <div class="form-group">
          <select onChange={(e) => {

            const status = e.target.value;
            setPaymentstatus(status)
          }}>
            <option value="Done">Paid</option>
            <option value="Unpaid">Unpaid</option>

          </select>
          {/* {paymentstatus} */}



        </div>
        <br />
        <div>

          <select onChange={(e) => {

            const status = e.target.value;
            setDeliverystatus(status)
          }}>
            <option value="True">Delivered</option>
            <option value="False">Not Delivered</option>

          </select>
          {/* {deliverystatus} */}


        </div>
        <br />



        <div className="mb-3">
          <button onClick={fillDetails} className="btn btn-success">
            Update
          </button>

        </div>
      </div>



    </div>
  )
}
export default Update;
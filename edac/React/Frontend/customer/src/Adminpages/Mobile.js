import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Navbar from "../components/Adminnavbar"
import { url } from './../common/constants';

const Mobile = () => {
  const [Mobiles, setMobile] = useState([])
 // const url = 'http://localhost:8080'


  const getMobiles = (brand) => {
    axios.get(url + '/mobile/' + brand).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setMobile(result.data)
      } else {
        alert('error while loading All laptop')
      }
    })
  }

  return (

    <div>
      <Navbar />

      <div className="container ">
        <h3>Mobiles</h3>
        <br />
        <hr />
      <h3>BRANDS  :
      <a class="btn btn-primary ms-5" onClick={() => {
          const name = "OPPO"
          getMobiles(name)
        }} role="button">OPPO</a>

        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "ONEPLUS"
          getMobiles(name)
        }} type="submit">ONEPLUS</button>

        <input class="btn btn-primary ms-5" onClick={() => {
          const name = "IPHONE"
          getMobiles(name)
        }} type="button" value="IPHONE" />

        <input class="btn btn-primary ms-5" onClick={() => {
          const name = "REALME"
          getMobiles(name)
        }} type="submit" value="REALME" />

        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "SAMSUNG"
          getMobiles(name)
        }} type="submit">SAMSUNG</button>

        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "REDMI"
          getMobiles(name)
        }} type="submit">REDMI</button>

      </h3>

        {/* <hr /> */}
        


      

        <hr />

        <table className="table table-bordered" >
          <thead>
            <tr className="table-dark">
              <th>Company Name</th>
              <th>Mobile Name</th>
              <th>Items in stock</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>



            {Mobiles.map((m) => {
              return (
                <tr className="table-primary">
                  <td> {m.brand}</td>
                  <td> {m.mobileName}</td>
                  <td> {m.countInStock}</td>
                  <td> {m.price}</td>



                  <td>{m.countInStock >= "20" ? (<li>At maximum stock level</li>) : m.countInStock < "20" || m.countInStock > "10" ?
                    (<li>At Re-order level </li>) : (<li>Buffer level</li>)}  </td>


                </tr>)
            })}

          </tbody>

        </table>

      </div>




    </div>



  )
}

export default Mobile;
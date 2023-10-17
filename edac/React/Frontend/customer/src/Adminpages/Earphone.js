import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Navbar from "../components/Adminnavbar"
import { url } from './../common/constants';

const Earphone = () => {
  const [earphones, setEarphone] = useState([])
  //const url = 'http://localhost:8080'

  const getEarphones = (brand) => {
    axios.get(url + '/earphone/' + brand).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setEarphone(result.data)
      } else {
        alert('error while loading All laptop')
      }
    })
  }




  return (


    <div>
      <Navbar />

      <div className="container ">
        <h3>Earphones</h3>
        <br />
        <hr />
        <h4>BRANDS  :
        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "JBL"
          getEarphones(name)
        }} type="submit">JBL</button>

        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "BOAT"
          getEarphones(name)
        }} type="submit">BOAT</button>

        <input class="btn btn-primary ms-5" onClick={() => {
          const name = "SONY"
          getEarphones(name)
        }} type="button" value="SONY" />

        <input class="btn btn-primary ms-5" onClick={() => {
          const name = "BOUT"
          getEarphones(name)
        }} type="submit" value="BOUT" />

        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "SKULLCANDY"
          getEarphones(name)
        }} type="submit">SKULL_CANDY</button>


        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "PTRON"
          getEarphones(name)
        }} type="submit">PTRON</button>


        </h4>


  


        

        <hr />

        <table className="table table-bordered" >
          <thead>
            <tr className="table-dark">
              <th>Company Name</th>
              <th>Earphone Name</th>
              <th>Items in stock</th>
              <th>Price</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            {earphones.map((b) => {
              return (
                <tr className="table-primary">
                  <td> {b.brand}</td>
                  <td> {b.earphoneName}</td>
                  <td> {b.countInStock}</td>
                  <td> {b.price}</td>



                  <td>{b.countInStock >= "20" ? (<li>At maximum stock level</li>) : b.countInStock < "20" || b.countInStock > "10" ?
                    (<li>At Re-order level </li>) : (<li>Buffer level</li>)}  </td>


                </tr>)
            })}

          </tbody>
        </table>

      </div>




    </div>

  )

}

export default Earphone;
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Navbar from "../components/Adminnavbar"
import { url } from './../common/constants';

const Tv = () => {

  const [tvs, setTv] = useState([])
 // const url = 'http://localhost:8080'

  useEffect(() => {

    getTv()
  }, [])

  const getTv = (brand) => {
    axios.get(url + '/tv/' + brand).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setTv(result.data)
      } else {
        alert('error while loading All laptop')
      }
    })
  }

  return (


    <div>

 
 <Navbar />


     

      <div className="container ">
       <h3 >Tvs</h3>
       
        <br />
        <hr />

<h4> BRANDS  :

<button class="btn btn-primary ms-5" onClick={() => {
          const name = "SONY"
          getTv(name)
        }} type="submit">SONY</button>


        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "SAMSUNG"
          getTv(name)
        }} type="submit">SAMSUNG</button>


        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "PANASONIC"
          getTv(name)
        }} type="submit">PANASONIC</button>

        <button class="btn btn-primary ms-5" onClick={() => {
          const name = "LG"
          getTv(name)
        }} type="submit">LG</button>


         <button class="btn btn-primary ms-5" onClick={() => {
          const name = "TCL"
          getTv(name)
        }} type="submit">TCL</button>

        
<button class="btn btn-primary ms-5" onClick={() => {
          const name = "NOKIA"
          getTv(name)
        }} type="submit">NOKIA</button>
</h4>


      







        <hr />

        <table className="table table-bordered" >
          <thead>
            <tr className="table-dark">
              <th>Company Name</th>
              <th>Tv Name</th>
              <th>Items in stock</th>
              <th>Price</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>

            {tvs.map((m) => {
              return (
                <tr className="table-primary">
                  <td> {m.brand}</td>
                  <td> {m.tvName}</td>
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

export default Tv;
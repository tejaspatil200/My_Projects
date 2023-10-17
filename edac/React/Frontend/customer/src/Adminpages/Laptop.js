import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Navbar from './../components/Adminnavbar';
import { url } from './../common/constants';

const Laptop = () => {
  const [laptops, setlaptop] = useState([])
  //const url = 'http://localhost:8080'

  const getLaptops = (brand) => {
    axios.get(url + '/laptop/' + brand).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        console.log(result)
        setlaptop(result.data)
      } else {
        alert('error while loading All laptop')
      }
    })
  }



  return (

    <div>
      <Navbar />

      <div className="container  ">
        <h3>Laptops</h3>
        <br />

        <hr />

        <h4>BRANDS  :
          
        <a class="btn btn-primary ms-5" onClick={() => {
            const name = "apple"
            getLaptops(name)
          }} role="button">Apple</a>

          <button class="btn btn-primary ms-5" onClick={() => {
            const name = "ASUS"
            getLaptops(name)
          }} type="submit">ASUS</button>

          <button class="btn btn-primary ms-5" onClick={() => {
            const name = "LENOVO"
            getLaptops(name)
          }} type="submit">LENOVO</button>


          <input class="btn btn-primary ms-5" onClick={() => {
            const name = "acer"
            getLaptops(name)
          }} type="button" value="Acer" />

          <input class="btn btn-primary ms-5" onClick={() => {
            const name = "HP"
            getLaptops(name)
          }} type="submit" value="HP" />

          <input class="btn btn-primary ms-5" onClick={() => {
            const name = "DELL"
            getLaptops(name)
          }} type="reset" value="Dell"></input>

        </h4>
        
        


        




        <hr />

        <table className="table table-bordered" >
          <thead>
            <tr className="table-dark">
              <th>Company Name</th>
              <th>Laptop Name</th>
              <th>Items in stock</th>
              <th>Price</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>


            {laptops.map((b) => {
              return (
                <tr className="table-primary">
                  <td> {b.brand}</td>
                  <td> {b.laptopName}</td>
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

export default Laptop;
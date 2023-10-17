import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Employeenavbar';
import { url } from "../../common/constants";


const Addearphone = () => {
 
  const [earphoneName, setearphoneName] = useState('')
  const [brand, setBrand] = useState('')
  const [connectivity, setConnectivity] = useState('')
  const [batteryLife, setbatterylife] = useState('')
  const [mic, setMic] = useState('')
  const [charging, setCharging] = useState('')
  const [price, setPrice] = useState('')
  const [descrption, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState(undefined)
  const [countInStock, setcountInStock] = useState('')

  const history=useHistory()

  const onFileSelect = (event) => {
    setThumbnail(event.target.files[0])
  }

  const addEarphone = () => {
  const data = new FormData()

  
  data.append('earphoneName' , earphoneName)
  data.append('brand' , brand)
  data.append('connectivity' , connectivity)
  data.append('batteryLife' , batteryLife)
  data.append('mic' , mic)
  data.append('charging' , charging)
  data.append('price' , price)
  data.append('description' , descrption)
  data.append('thumbnail' , thumbnail)
data.append('countInStock', countInStock)
  axios.post(url + '/add-earphone', data).then((response) => {
    const result = response.data
    if (result.status === 'success') {
      alert('new Earphone is Added into System')
      history.push('/emp-earphone')
    } else {
      alert('error while adding new Earphone')
    }
  })
}
  return (
    <div className="container">
    <Navbar/>
    <h1 className="page-title">Add Earphone</h1>
    <br />
    <br />
    
 
    <div class="form-floating mb-3">
      <input
       onChange={(e) => {
        setearphoneName(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="Audio Technica sonic fuel ath ax1is"/>
      <label for="floatingInput">Name</label>
      </div>
      
      <div class="form-floating mb-3">
      <input
       onChange={(e) => {
        setBrand(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="Audio Technica"/>
      <label for="floatingInput">Brand</label>
      </div>

      <div class="form-floating mb-3">
      <input
       onChange={(e) => {
        setConnectivity(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="Headphone"/>
      <label for="floatingInput">Connectivity</label>
      </div>
  
  
      <div class="form-floating mb-3">
      <input
       onChange={(e) => {
        setbatterylife(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="Wired"/>
      <label for="floatingInput">Battery Life</label>
      </div>

      <div class="form-floating mb-3">
      <input
       onChange={(e) => {
        setMic(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="Wired"/>
      <label for="floatingInput">Mic</label>
      </div>

      <div class="form-floating mb-3">
      <input
       onChange={(e) => {
        setCharging(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="Wired"/>
      <label for="floatingInput">Charging</label>
      </div>

      <div class="form-floating mb-3">
      <input
       onChange={(e) => {
        setPrice(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="38mm"/>
      <label for="floatingInput">Price</label>
      </div>
  
      <div class="form-floating mb-3">
      <input
       onChange={(e) => {
        setDescription(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="Gray-Green"/>
      <label for="floatingInput">Description</label>
      </div>
      <div class="form-floating mb-3">
    <input 
    onChange={onFileSelect}
    accept="image/*"
          type="file"
          className="form-control"
    placeholder="Image"/>
    <label for="floatingInput">Image</label>
    </div>
      <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setcountInStock(e.target.value)
      }}
      type = "Number" class="form-control" id="floatingInput" placeholder="1 TB"/>
      <label for="floatingInput">Count In Stock</label>
      </div>


      <div>
      <button className="btn btn-dark" onClick={ addEarphone}>
                Add  </button>
  </div>
      </div>
  )
  }
  
  export default Addearphone
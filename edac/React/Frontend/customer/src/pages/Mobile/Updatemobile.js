import axios from 'axios'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../components/Employeenavbar';
import { url } from "../../common/constants";

const Updatemobile = () =>{
 const location=useLocation()

  const [mobileId, setmobileId] = useState(location.state.id)
  const [mobileName, setmobileName] = useState(location.state.name)
  const [ram, setRAM] = useState(location.state.ram)
  const [brand, setBrand] = useState(location.state.brand)
  const [battery, setBattery] = useState(location.state.battery)
  const [primaryCamera, setprimaryCamera] = useState(location.state.primaryCamera)
  const [screenResolution, setscreenResolution] = useState(location.state.screenResolution)
  const [price, setPrice] = useState(location.state.price)
  const [description, setDescription] = useState(location.state.description)
  const [CountInStock, setCountInStock] = useState(location.state.countInStock)
  const [thumbnail, setThumbnail] = useState(undefined)

  const onFileSelect = (event) => {
    setThumbnail(event.target.files[0])
  }
  const history=useHistory()
const editMobile = () => {
  const data = new FormData()

  data.append('mobileId' , mobileId)
  data.append('mobileName' , mobileName)
  data.append('ram' , ram)
  data.append('brand' , brand)
  data.append('battery' , battery)
  data.append('primaryCamera' , primaryCamera)
  data.append('screenResolution' , screenResolution)
  data.append('price' , price)
  data.append('description' , description)
  data.append('thumbnail' , thumbnail)
  data.append('countInStock' , CountInStock)

  axios.post(url + '/add-mobile', data).then((response) => {
    const result = response.data
    if (result.status === 'success') {
      alert('Mobile is successfully updated')
      history.push('/emp-mobile')
    } else {
      alert('error while adding new Mobile')
    }
  })
}
return (
  <div className="container">
    <Navbar/>
  <h1 className="page-title">Update Mobile</h1>
  <br />
  <br />
 
  <div class="form-floating mb-3">
    <input
     onChange={(e) => {
      setmobileName(e.target.value)
    }}
    type = "text" value={mobileName} class="form-control" id="floatingInput" placeholder="One Plus 7t"/>
    <label for="floatingInput">Name</label>
    </div>
    
    <div class="form-floating mb-3">
    <input
    onChange={(e) => {
      setRAM(e.target.value)
    }}
    type = "text" value={ram} class="form-control" id="floatingInput" placeholder="8 GB"/>
    <label for="floatingInput">RAM</label>
    </div>

    <div class="form-floating mb-3">
    <input 
    onChange={(e) => {
      setBrand(e.target.value)
    }}
    type = "text" value={brand} class="form-control" id="floatingInput" placeholder="One Plus"/>
    <label for="floatingInput">Brand</label>
    </div>

    <div class="form-floating mb-3">
    <input 
     onChange={(e) => {
      setBattery(e.target.value)
    }}
    type = "text" value={battery} class="form-control" id="floatingInput" placeholder="3600 mah"/>
    <label for="floatingInput">Battery</label>
    </div>

    <div class="form-floating mb-3">
    <input
     onChange={(e) => {
      setprimaryCamera(e.target.value)
    }}
    type = "text" value={primaryCamera} class="form-control" id="floatingInput" placeholder="48 mp"/>
    <label for="floatingInput">Primary Camera</label>
    </div>

    <div class="form-floating mb-3">
    <input
     onChange={(e) => {
      setscreenResolution(e.target.value)
    }}
    type = "text" value={screenResolution} class="form-control" id="floatingInput" placeholder="1080p"/>
    <label for="floatingInput">Screen Resolution</label>
    </div>

    <div class="form-floating mb-3">
    <input
     onChange={(e) => {
      setPrice(e.target.value)
    }}
    type = "Number" value={price} class="form-control" id="floatingInput" placeholder="38000"/>
    <label for="floatingInput">Price</label>
    </div>

    <div class="form-floating mb-3">
    <input
     onChange={(e) => {
      setDescription(e.target.value)
    }}
    type = "text" value={description} class="form-control" id="floatingInput" placeholder="38000"/>
    <label for="floatingInput">descrption</label>
    </div>

    <div class="form-floating mb-3">
    <input 
    onChange={onFileSelect}
    accept="image/*"
          type="file"
          // value={thumbnail}
          className="form-control"
    placeholder="Image"/>
    <label for="floatingInput">Image</label>
    </div>

    <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setCountInStock(e.target.value)
      }}
      type = "Number" value={CountInStock}  class="form-control" id="floatingInput" placeholder="1 TB"/>
      <label for="floatingInput">Count In Stock</label>
      </div>
<div>
    <button className="btn btn-dark" onClick={ editMobile}>
              Update  </button>
</div>
    </div>
)
}
  
  export default Updatemobile
import axios from 'axios'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../components/Employeenavbar';
import { url } from "../../common/constants";

const Updatelaptop = () => {
  const location=useLocation()

  const [laptopId, setlaptopId] = useState(location.state.id)
  const [laptopName, setLaptopName] = useState(location.state.name)
  const [brand, setBrand] = useState(location.state.brand)
  const [ram, setRAM] = useState(location.state.ram)
  const [operatingSystem, setoperatingSystem] = useState(location.state.operatingSystem)
  const [processor, setProcessor] = useState(location.state.processor)
  const [screenSize, setscreenSize] = useState(location.state.screenSize)
  const [price, setPrice] = useState(location.state.price)
  const [description, setDescription] = useState(location.state.description)
  const [thumbnail, setThumbnail] = useState(undefined)
const [ countInStock, setcountInStock] = useState(location.state.countInStock)
  const onFileSelect = (event) => {
    setThumbnail(event.target.files[0])
  }
  const history=useHistory()
  const editLaptop = () => {


  const data = new FormData()

  data.append('laptopId' , laptopId)
  data.append('laptopName' , laptopName)
  data.append('brand' , brand)
  data.append('ram' , ram)
  data.append('operatingSystem' , operatingSystem)
  data.append('processor' , processor)
  data.append('screenSize' , screenSize)
  data.append('price' , price)
  data.append('description' , description)
  data.append('thumbnail' , thumbnail)
data.append('countInStock', countInStock)
  axios.post(url + '/add-laptop', data).then((response) => {
    const result = response.data
    if (result.status === 'success') {
      alert('Laptop successfully updated into System')
      history.push('/emp-laptop')
    } else {
      alert('error while adding new Laptop')
    }
  })
  }
  return (
    <div className="container">
      <Navbar/>
    <h1 className="page-title">Update Laptop</h1>
    <br />
    <br />
    <div class="form-floating mb-3">
    <input
     onChange={(e) => {
      setlaptopId(e.target.value)
    }}
    type = "Number" value={laptopId} class="form-control" id="floatingInput" placeholder="One Plus 7t"/>
    <label for="floatingInput">Id</label>
    </div>
    <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setLaptopName(e.target.value)
      }}
      type = "text" value={laptopName} class="form-control" id="floatingInput" placeholder="Lenovo Ideapad 330"/>
      <label for="floatingInput">Name</label>
      </div>
      
      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setBrand(e.target.value)
      }}
      type = "text" value={brand} class="form-control" id="floatingInput" placeholder="Lenovo"/>
      <label for="floatingInput">Brand</label>
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
        setoperatingSystem(e.target.value)
      }}
      type = "text" value={operatingSystem} class="form-control" id="floatingInput" placeholder="1 TB"/>
      <label for="floatingInput">operating system</label>
      </div>

      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setProcessor(e.target.value)
      }}
      type = "text" value={processor} class="form-control" id="floatingInput" placeholder="1 TB"/>
      <label for="floatingInput">Processor</label>
      </div>
  
      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setscreenSize(e.target.value)
      }}
      type = "text" value={screenSize} class="form-control" id="floatingInput" placeholder="1080p"/>
      <label for="floatingInput">Screen Size</label>
      </div>
  
      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setPrice(e.target.value)
      }}
      type = "Number" value={price} class="form-control" id="floatingInput" placeholder="58000"/>
      <label for="floatingInput">Price</label>
      </div>

      <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setDescription(e.target.value)
      }}
      type = "text" value={description}  class="form-control" id="floatingInput" placeholder="58000"/>
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
<div>
  
<div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setcountInStock(e.target.value)
      }}
      type = "Number" value={countInStock} class="form-control" id="floatingInput" placeholder="1 TB"/>
      <label for="floatingInput">Count In Stock</label>
      </div>
    <button className="btn btn-dark" onClick={ editLaptop}>
             Update </button>
</div>
    </div>
  )
  }
  
  export default Updatelaptop
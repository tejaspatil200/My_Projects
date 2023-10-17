import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Employeenavbar';
import { url } from "../../common/constants";

const Addlaptop = () => {
 
  const [laptopName, setlaptopName] = useState('')
  const [brand, setBrand] = useState('')
  const [RAM, setRAM] = useState('')
  const [operatingSystem, setoperatingSystem] = useState('')
  const [processor, setProcessor] = useState('')
  const [screenSize, setscreenSize] = useState('')
  const [price, setPrice] = useState('')
  const [descrption, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState(undefined)
  const [countInStock, setcountInStock] = useState('')

  const onFileSelect = (event) => {
    setThumbnail(event.target.files[0])
  }
  const history=useHistory()
const addLaptop = () => {
  const data = new FormData()


  data.append('laptopName' , laptopName)
  data.append('brand' , brand)
  data.append('RAM' , RAM)
  data.append('operatingSystem' , operatingSystem)
  data.append('processor' , processor)
  data.append('screenSize' , screenSize)
  data.append('price' , price)
  data.append('description' , descrption)
  data.append('thumbnail' , thumbnail)
data.append('countInStock', countInStock)

  axios.post(url + '/add-laptop', data).then((response) => {
    const result = response.data
    if (result.status === 'success') {
      alert('New Laptop is Added into System')
      history.push('/emp-laptop')
    } else {
      alert('error while adding new Laptop')
    }
  })
}
  return (
    <div className="container">
      <Navbar/>
    <h1 className="page-title">Add Laptop</h1>
    <br />
    <br />
   
    <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setlaptopName(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="Lenovo Ideapad 330"/>
      <label for="floatingInput">Name</label>
      </div>
      
      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setBrand(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="Lenovo"/>
      <label for="floatingInput">Brand</label>
      </div>

      <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setRAM(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="8 GB"/>
      <label for="floatingInput">RAM</label>
      </div>

      <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setoperatingSystem(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="1 TB"/>
      <label for="floatingInput">operating system</label>
      </div>

      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setProcessor(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="1 TB"/>
      <label for="floatingInput">Processor</label>
      </div>
  
      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setscreenSize(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="1080p"/>
      <label for="floatingInput">Screen Size</label>
      </div>
  
      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setPrice(e.target.value)
      }}
      type = "Number" class="form-control" id="floatingInput" placeholder="58000"/>
      <label for="floatingInput">Price</label>
      </div>

      <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setDescription(e.target.value)
      }}
      type = "text" class="form-control" id="floatingInput" placeholder="58000"/>
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
    <button className="btn btn-dark" onClick={ addLaptop}>
              Add  </button>
</div>
    </div>
  )
  }
  
  export default Addlaptop
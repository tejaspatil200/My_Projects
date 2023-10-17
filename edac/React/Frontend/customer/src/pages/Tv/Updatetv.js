import axios from 'axios'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../components/Employeenavbar';
import { url } from "../../common/constants";


const Updatetv = () => {
  const location=useLocation()

  const [tvId, settvId] = useState(location.state.id)
  const [tvName, settvName] = useState(location.state.name)
  const [brand, setBrand] = useState(location.state.brand)
  const [screenSize, setscreenSize] = useState(location.state.screenSize)
  const [resolution, setResolution] = useState(location.state.resolution)
  const [screenType, setscreenType] = useState(location.state.screenType)
  const [operatingSystem, setoperatingSystem] = useState(location.state.operatingSystem)
  const [price, setPrice] = useState(location.state.price)
  const [description, setDescription] = useState(location.state.description)
  const [thumbnail, setThumbnail] = useState(undefined)
  const [countInStock, setcountInStock] = useState(location.state.countInStock)

  const onFileSelect = (event) => {
    setThumbnail(event.target.files[0])
  }

  const history=useHistory()
const editTv = () => {
  const data = new FormData()

  data.append('tvId' , tvId)
  data.append('tvName' , tvName)
  data.append('brand' , brand)
  data.append('screenSize' , screenSize)
  data.append('resolution' , resolution)
  data.append('screenType' , screenType)
  data.append('operatingSystem' , operatingSystem)
  data.append('price' , price)
  data.append('description' , description)
  data.append('thumbnail' , thumbnail)
  data.append('countInStock', countInStock)

  axios.post(url + '/add-tv', data).then((response) => {
    const result = response.data
    if (result.status === 'success') {
      alert('Tv is updated into System')
      history.push('/emp-tv')
    } else {
      alert('error while adding new Tv')
    }
  })
}
  return (
    <div className="container">
      <Navbar/>
    <h1 className="page-title">Add Tv</h1>
    <br />
    <br />
    <div class="form-floating mb-3">
    <input
     onChange={(e) => {
      settvId(e.target.value)
    }}
    type = "Number" value={tvId} class="form-control" id="floatingInput" placeholder="One Plus 7t"/>
    <label for="floatingInput">Id</label>
    </div>
    <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        settvName(e.target.value)
      }}
      type = "text" value={tvName} class="form-control" id="floatingInput" placeholder="LG TV"/>
      <label for="floatingInput">Name</label>
      </div>
      
      <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setBrand(e.target.value)
      }}
      type = "text" value={brand} class="form-control" id="floatingInput" placeholder="LG"/>
      <label for="floatingInput">Brand</label>
      </div>

      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setscreenSize(e.target.value)
      }}
      type = "text" value={screenSize} class="form-control" id="floatingInput" placeholder="43 inches"/>
      <label for="floatingInput">Screen Size</label>
      </div>
  
  
      <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setResolution(e.target.value)
      }}
      type = "text" value={resolution} class="form-control" id="floatingInput" placeholder="4k"/>
      <label for="floatingInput">Screen Resolution</label>
      </div>

      <div class="form-floating mb-3">
      <input 
      onChange={(e) => {
        setscreenType(e.target.value)
      }}
      type = "text" value={screenType} class="form-control" id="floatingInput" placeholder="LED"/>
      <label for="floatingInput">Screen Type</label>
      </div>
  
      <div class="form-floating mb-3">
      <input
      onChange={(e) => {
        setoperatingSystem(e.target.value)
      }}
      type = "text" value={operatingSystem} class="form-control" id="floatingInput" placeholder="Android"/>
      <label for="floatingInput">Operating System</label>
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
      type = "text" value={description} class="form-control" id="floatingInput" placeholder="Gray-Green"/>
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
      type = "Number" value={countInStock} class="form-control" id="floatingInput" placeholder="1 TB"/>
      <label for="floatingInput">Count In Stock</label>
      </div>

      <div>
    <button className="btn btn-dark" onClick={ editTv}>
              Update  </button>
</div>
    </div>
  )
  }
  
  export default Updatetv
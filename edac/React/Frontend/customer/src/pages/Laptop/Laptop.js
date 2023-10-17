import { Link , useHistory} from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react"
import Navbar from "../../components/Employeenavbar";
import { url } from "../../common/constants";

const Emplaptop = () => {

  const [Laptops, setLaptops] = useState([])

  const history = useHistory()

  useEffect(() => {
    
    getLaptop()
  }, [])

  const getLaptop = () => {
    if ((!JSON.parse(localStorage.getItem("Employee")))){


      history.push("/employeelogin");
    } else {
    axios.get(url + '/laptop').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setLaptops(result.data)
        console.log(result.data)
      } else {
        alert('error while loading All Laptop')
      }
    })
  }
  }
  const onSelect = (id) => {


    axios.delete(url + '/laptop/' + id).then(() => {
       alert('Laptop successfully deleted')
       getLaptop()
    })
  }

  const updateLaptop = (laptop) => {

    history.push("/updatelaptop",{
      id:laptop.laptopId,
      name:laptop.laptopName,
      ram:laptop.ram,
      brand:laptop.brand,
      operatingSystem:laptop.operatingSystem,
      processor:laptop.processor,
      screenSize:laptop.screenSizen,
      price:laptop.price,
      countInStock:laptop.countInStock,
      description:laptop.description
     // Image:laptop.thumbnail,
    })
  
  }

  return (
    <div>
      <Navbar/>
       <h1 className="page-title">Laptop</h1>
       <br />
    <br />
      <Link to="/addlaptop"><button className ="btn btn-dark"> Add Laptop </button></Link>
    <br />
    <br />
    <table className="table table-bordered">
              <thead>
                <tr className="table-dark">
                <th>Id</th>
                  <th>Name</th>
                  <th>RAM</th>
                  <th>brand</th>
                  <th>Operating System</th>
                  <th>Processor</th>
                  <th>Screen Size</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Count In Stock</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {Laptops.map((laptop) => {
            return (
               <tr className="table-primary">
            <td> {laptop.laptopId}</td>
          <td> {laptop.laptopName}</td>
          <td>{laptop.ram} </td>
          <td> {laptop.brand}</td>
          <td> {laptop.operatingSystem}</td>
          <td> {laptop.processor}</td>
          <td> {laptop.screenSize}</td>
          <td> {laptop.price}</td>
          <td> <img className="Image" src={url+"/"+laptop.thumbnail }/></td>
          <td> {laptop.countInStock}</td>
          <td><button  onClick={() => {
              updateLaptop(laptop)
            }} className="btn btn-dark">
              Edit
            </button></td>
        <td><button  onClick={() => {
              onSelect(laptop.laptopId)
            }} className="btn btn-danger">
              delete
            </button></td>
            </tr>)
          })}
           
            </tbody>
            </table>
    </div>
  )
}
  
  export default Emplaptop
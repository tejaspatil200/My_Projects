import { Link , useHistory} from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react"
import Navbar from "../../components/Employeenavbar";
import { url } from "../../common/constants";

const Emptv = () => {

  const [Tvs, setTvs] = useState([])

  
  const history = useHistory()

  useEffect(() => {
    
    getTv()
  }, [])

  const getTv = () => {
    if ((!JSON.parse(localStorage.getItem("Employee")))){


      history.push("/employeelogin");
    } else {
    axios.get(url + '/tv').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        console.log(result)
        setTvs(result.data)
      } else {
        alert('error while loading All Tv')
      }
    })
  }}

  const onSelect = (id) => {


    axios.delete(url + '/tv/' + id).then(() => {
       alert('tv successfully deleted')
       getTv()
    })
  }

  const updateTv = (tv) => {

    history.push("/updatetv",{
      id:tv.tvId,
      name:tv.tvName,
      brand:tv.brand,
      screenSize:tv.screenSize,
      resolution:tv.resolution,
      screenType:tv.screenType,
      operatingSystem:tv.operatingSystem,
      price:tv.price,
      description:tv.description,
      countInStock:tv.countInStock,
     // Image:tv.thumbnail,
    })
  
  }

  return (
    <div>
      <Navbar/>
       <h1 className="page-title">Tv</h1>
       <br />
    <br />
      <Link to="/addtv"><button className ="btn btn-dark"> Add Tv </button></Link>
    <br />
    <br />
    <table className="table table-bTved">
              <thead>
                <tr className="table-dark">
                <th>Id</th>
                  <th>Name</th>
                  <th>brand</th>
                  <th>Scrren Size</th>
                  <th>Screen Resolution</th>
                  <th>Screen Type</th>
                  <th>Operating System</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Count In Stock</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {Tvs.map((tv) => {
            return (
               <tr className="table-primary">
            <td> {tv.tvId}</td>
          <td> {tv.tvName}</td>
          <td>{tv.brand} </td>
          <td> {tv.screenSize}</td>
          <td> {tv.resolution}</td>
          <td> {tv.screenType}</td>
          <td> {tv.operatingSystem}</td>
          <td> {tv.price}</td>
          <td> <img className="Image" src={url+"/"+tv.thumbnail }/></td>
          <td> {tv.countInStock}</td>
          <td><button  onClick={() => {
              updateTv(tv)
            }} className="btn btn-dark">
              Edit
            </button></td>
        <td><button  onClick={() => {
              onSelect(tv.tvId)
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
  
  
  export default Emptv
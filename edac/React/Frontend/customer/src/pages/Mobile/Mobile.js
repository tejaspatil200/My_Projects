import { Link, useHistory } from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react"
import Navbar from "../../components/Employeenavbar";
import { url } from "../../common/constants";
import './mobile.css'

const Empmobile = () => {

  const [Mobiles, setMobiles] = useState([])

  const history = useHistory()


  useEffect(() => {
    
    getMobile()
  }, [])

  const getMobile = () => {
    if ((!JSON.parse(localStorage.getItem("Employee")))){


      history.push("/employeelogin");
    } else {
    axios.get(url + '/mobile').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        console.log(result.data)
        setMobiles(result.data)
      } else {
        alert('error while loading All Mobile')
      }
    })
  }}

  const onSelect = (id) => {

    axios.delete(url + '/mobile/' + id).then(() => {
       alert('Mobile successfully deleted')
       getMobile()
    })
  }



  const updateMobile = (mobile) => {

    history.push("/updatemobile",{
      id:mobile.mobileId,
      name:mobile.mobileName,
      ram:mobile.ram,
      brand:mobile.brand,
      battery:mobile.battery,
      primaryCamera:mobile.primaryCamera,
      screenResolution:mobile.screenResolution,
      price:mobile.price,
      countInStock :mobile.countInStock,
      description:mobile.description
     // Image:mobile.thumbnail,
    })
  
  }


    return (
      <div>
        <Navbar/>
         <h1 className="page-title">Mobile</h1>
         <br />
      <br />
        <Link to="/addmobile"><button className ="btn btn-dark"> Add Mobile </button></Link>
      <br />
      <br />
      <table className="table table-bordered">
                <thead>
                  <tr className="table-dark">
                  <th>Id</th>
                    <th>Name</th>
                    <th>RAM</th>
                    <th>brand</th>
                    <th>Battery</th>
                    <th>Primary Camera</th>
                    <th>In Stock</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                {Mobiles.map((mobile) => {
            return (
               <tr className="table-primary">
            <td> {mobile.mobileId}</td>
          <td> {mobile.mobileName}</td>
          <td>{mobile.ram} </td>
          <td> {mobile.brand}</td>
          <td> {mobile.battery}</td>
          <td> {mobile.primaryCamera}</td>
          <td> {mobile.countInStock}</td>
          <td> {mobile.price}</td>
          
          <td> <img className="Image" src={url+"/"+mobile.thumbnail }/></td>
          
          <td><button  onClick={() => {
              updateMobile(mobile)
            }} className="btn btn-dark">
              Edit
            </button></td>


        <td><button  onClick={() => {
              onSelect(mobile.mobileId)
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
  
  export default Empmobile
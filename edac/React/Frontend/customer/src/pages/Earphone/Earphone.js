import { Link, useHistory } from "react-router-dom";
import axios from "axios"
import { useEffect,useState } from "react"
import Navbar from "../../components/Employeenavbar";
import { url } from "../../common/constants";


const Empearphone = () => {

  const [Earphones, setEarphones] = useState([])

  const history = useHistory()

  useEffect(() => {
    
    getEarphone()
  }, [])

  const getEarphone = () => {
    if ((!JSON.parse(localStorage.getItem("Employee")))){


      history.push("/employeelogin");
    } else {
    axios.get(url + '/earphone').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        console.log(result)
        setEarphones(result.data)
      } else {
        alert('error while loading All Earphone')
      }
    })
  }}

  const onSelect = (id) => {


    axios.delete(url + '/earphone/' + id).then(() => {
       alert('Earphone successfully deleted')
       getEarphone()
    })
  }

  const updateEarphone = (earphone) => {

    history.push("/updateearphone",{
      id:earphone.earphoneId,
      name:earphone.earphoneName,
      brand:earphone.brand,
      connectivity:earphone.connectivity,
      batterylife:earphone.batterylife,
      mic:earphone.mic,
      charging:earphone.charging,
      price:earphone.price,
      description:earphone.description,
      countInStock:earphone.countInStock
     // Image:earphone.thumbnail,
    })
  
  }

  return (
    <div>
      <Navbar/>
       <h1 className="page-title">Earphone</h1>
       <br />
    <br />
      <Link to="/addearphone"><button className ="btn btn-dark"> Add Earphone </button></Link>
    <br />
    <br />
    <table className="table table-bordered">
              <thead>
                <tr className="table-dark">
                <th>Id</th> 
                  <th>Name</th>
                  <th>brand</th>
                  <th>Connectivity</th>
                  <th>batterylife</th>
                  <th>mic</th>
                  <th>charging</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Count In Stock</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {Earphones.map((earphone) => {
            return (
               <tr className="table-primary">
            <td> {earphone.earphoneId}</td>
          <td> {earphone.earphoneName}</td>
          <td>{earphone.brand} </td>
          <td> {earphone.connectivity}</td>
          <td> {earphone.batteryLife}</td>
          <td> {earphone.mic}</td>
          <td> {earphone.charging}</td>
          <td> {earphone.price}</td>
          <td> <img className="Image" src={url+"/"+earphone.thumbnail }/></td>
          <td> {earphone.countInStock}</td>
          <td><button  onClick={() => {
              updateEarphone(earphone)
            }} className="btn btn-dark">
              Edit
            </button></td>

        <td><button  onClick={() => {
              onSelect(earphone.earphoneId)
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
  
  
  export default Empearphone
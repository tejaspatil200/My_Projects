
import Navbar from './../components/deliverynavbar';

const Profile = () => {




    const delivery=JSON.parse(localStorage.getItem("deliveryBoy"));
    return(
        <div >
             <Navbar/>
        <br/>
     
      <div>
          <h2>Hello , {delivery.deliveryBoyName}</h2>
        <br/><br/>
          <table className="border-5">
            <tr className="border" >
              <td > <h4>Delivery Id :</h4></td>
              <td className="border text-center"> <h4>{delivery.deliveryBoyId}</h4></td>
            </tr>
            <br/>
            <tr className="border">
              <td><h4>Name :</h4></td>
              <td className="border text-center"> <h4>{delivery.deliveryBoyName}</h4></td>
            </tr>
            <br/>
            <tr className="border">
              <td><h4>Email :</h4></td>
              <td className="border text-center"><h4>{delivery.deliveryBoyEmail}</h4> </td>
            </tr>
            <br/>
            <tr className="border">
              <td><h4>Phone :</h4></td>
              <td className="border text-center"><h4>{delivery.deliveryBoyMobile}</h4> </td>
            </tr>
            <br/>
            <tr className="border">
              <td><h4>Vehicle Type :</h4></td>
              <td className="border text-center"><h4>{delivery.vehicleType}</h4> </td>
            </tr> <br/>
            <tr className="border">
              <td><h4>Vehicle No :</h4></td>
              <td className="border text-center"><h4>{delivery.vehicleNo}</h4> </td>
            </tr>
            <br/>
            <tr className="border">
              <td><h4>Joining Date :</h4></td>
              <td className="border text-center">  <h4>{delivery.joiningDate}</h4> </td>
            </tr>
  
          </table>
        {/* </table> */}
  
        <br />
        
      </div>
  
  
  </div>
  
  


    )
}
export default Profile;
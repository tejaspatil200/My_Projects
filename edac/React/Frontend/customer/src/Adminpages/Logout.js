
import { useHistory } from 'react-router-dom';
const Logout = () => {

    localStorage.removeItem("Admin")
const history=useHistory()
    
    
    return(
<div>

        <div color>
            <br/><br/>
        <h2>Logout</h2>
        <p>You have successfully logged out of application</p>
        <br/>
        <br/>
        <div className="centre">
        
        <button  onClick={() => {
              history.push('/adminlogin')
            }} className="btn btn-success">
              Login again
            </button>
            </div>
        </div>
        </div>

    )
}

export default Logout;
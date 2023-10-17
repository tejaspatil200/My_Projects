
import { useHistory } from 'react-router-dom';

const Emplogout = () => {
    localStorage.removeItem("Employee")
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
              history.push('/employeelogin')
            }} className="btn btn-success">
              Login again
            </button>
            </div>
        </div>
        </div>
    )
}

export default Emplogout
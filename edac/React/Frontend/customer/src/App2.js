
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Order from './Adminpages/Order';
import Delivery from './Adminpages/Delivery';
import Employee from './Adminpages/Employee';

import Earphone from './Adminpages/Earphone';
import Signin from './Adminpages/Signin';
import Tv from './Adminpages/Tv';
import Laptop from './Adminpages/Laptop';
import Mobile from './Adminpages/Mobile';
import Addemployee from './Adminpages/Addemployee';
import AddDelivery from './Adminpages/AddDelivery';
import EditDelivery from './Adminpages/EditDelivery';
import EditEmployee from './Adminpages/EditEmployee';
import Logout from './Adminpages/Logout';



import Deliveryorders from './deliverypages/Deliveryorders';
import Profile from './deliverypages/Profile';
import Deliverylogout from './deliverypages/Deliverylogout';
import Update from './deliverypages/Update';
import Deliverylogin from './deliverypages/Deliverylogin';



import Customer from './pages/Customer'
import Empmobile from './pages/Mobile/Mobile'
import Addmobile from './pages/Mobile/Addmobile'
import Updatemobile from './pages/Mobile/Updatemobile'
import Emplaptop from './pages/Laptop/Laptop'
import Addlaptop from './pages/Laptop/Addlaptop'
import Updatelaptop from './pages/Laptop/Updatelaptop'
import Emptv from './pages/Tv/Tv'
import Addtv from './pages/Tv/Addtv'
import Updatetv from './pages/Tv/Updatetv'
import Empearphone from './pages/Earphone/Earphone'
import Addearphone from './pages/Earphone/Addearphone'
import Updateearphone from './pages/Earphone/Updateearphone'

import Emplogin from './pages/Signin'
import Emplogout from './pages/Logout'
import OrderDetails from './Adminpages/OrderDetails';


function App2() {
  return (


    <div>

      <BrowserRouter>



        <div className="container">
          <Switch>


            {/* Admin */}
            <Route path="/order" component={Order} />
            <Route path="/orderdetails" component={OrderDetails} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/laptop" component={Laptop} />
            <Route path="/employee" component={Employee} />
            <Route exact path="/adminlogin" component={Signin} />
            <Route path="/tv" component={Tv} />
            <Route path="/mobile" component={Mobile} />
            <Route path="/earphone" component={Earphone} />
            <Route path="/add-employee" component={Addemployee} />
            <Route path="/add-delivery" component={AddDelivery} />
            <Route path="/edit-delivery" component={EditDelivery} />
            <Route path="/edit-employee" component={EditEmployee} />
            <Route path="/logout" component={Logout} />




            {/* delivery */}
            <Route path="/orderlist" component={Deliveryorders} />
            <Route path="/delprofile" component={Profile} />
            <Route path="/deliverylogout" component={Deliverylogout} />
            <Route path="/orderupdate/update" component={Update} />
            <Route path="/deliverylogin" component={Deliverylogin} />




            {/*Employee */}

            <Route path="/customer" component={Customer} />
            <Route path="/emp-mobile" component={Empmobile} />
            <Route path="/addmobile" component={Addmobile} />
            <Route path="/updatemobile" component={Updatemobile} />
            <Route path="/emp-laptop" component={Emplaptop} />
            <Route path="/addlaptop" component={Addlaptop} />
            <Route path="/updatelaptop" component={Updatelaptop} />
            <Route path="/emp-tv" component={Emptv} />
            <Route path="/addtv" component={Addtv} />
            <Route path="/updatetv" component={Updatetv} />
            <Route path="/emp-earphone" component={Empearphone} />
            <Route path="/addearphone" component={Addearphone} />
            <Route path="/updateearphone" component={Updateearphone} />

            <Route exact path="/employeelogin" component={Emplogin} />
            <Route path="/employeelogout" component={Emplogout} />






          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App2;





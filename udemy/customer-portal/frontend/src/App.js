import './App.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar';

import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Register';
import Loginscreen from './screens/Loginscreen';
import OrderListscreen from './screens/OrderListScreen';
import Orderinfo from './screens/Orderinfo';
import ProfileScreen from './screens/ProfileScreen';





function App() {
  return (
  
      <div className="App">
    
      <BrowserRouter>
      <Navbar/>
                    
          <Switch>

        <Route exact path="/" exact component={Homescreen}/>  
        <Route exact path="/product/:id" exact component={Productdescscreen}/>  
        <Route exact path="/cart"  exact component={Cartscreen}/>  
        <Route exact path="/register"  exact component={Registerscreen}/>  
        <Route exact path="/login"  exact component={Loginscreen}/>  
        <Route exact path="/orders"  exact component={OrderListscreen}/>  
        <Route exact path="/orderinfo/:orderid"  exact component={Orderinfo}/>  
        <Route exact path="/profile"  exact component={ProfileScreen}/>  
         
          </Switch>
                   
      </BrowserRouter>
      </div>
     
         
  )
}

export default App

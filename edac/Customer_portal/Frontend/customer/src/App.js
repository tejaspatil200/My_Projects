import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Register';
import ProfileScreen from './screens/ProfileScreen';
import Home from './screens/Home';
import Allproduct from './screens/Allproducts';
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import OrderListscreen from './screens/OrderListScreen';
import Orderinfo from './screens/Orderinfo';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/register" exact component={Registerscreen} />
          <Route exact path="/login" exact component={Loginscreen} />
          <Route exact path="/profile"  exact component={ProfileScreen}/> 
          <Route exact path="/"  exact component={Home}/> 
          <Route exact path="/product/:productId"  exact component={Allproduct}/> 
         
          <Route exact path="/:productId/:itemId" exact component={Productdescscreen}/> 
          
          <Route exact path="/cart"  exact component={Cartscreen}/> 



          <Route exact path="/orders"  exact component={OrderListscreen}/> 

          <Route exact path="/itemdetails/orderinfo/:orderId"  exact component={Orderinfo}/>  
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

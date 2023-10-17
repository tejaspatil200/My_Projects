import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Register";
import ProfileScreen from "./screens/ProfileScreen";
import Home from "./screens/Home";
import Allproduct from "./screens/Allproducts";
import Productdescscreen from "./screens/Productdescscreen";
import Cartscreen from "./screens/Cartscreen";
import OrderListscreen from "./screens/OrderListScreen";
import Orderinfo from "./screens/Orderinfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Navbar /> */}
          <Route exact path="/register" component={Registerscreen} />
          <Route exact path="/login" component={Loginscreen} />
          <Route exact path="/profile" component={ProfileScreen} />
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:productId" component={Allproduct} />
          <Route
            exact
            path="/:productId/:itemId"
            component={Productdescscreen}
          />
          <Route exact path="/cart" component={Cartscreen} />
          <Route exact path="/orders" component={OrderListscreen} />
          <Route
            exact
            path="/itemdetails/orderinfo/:orderId"
            component={Orderinfo}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

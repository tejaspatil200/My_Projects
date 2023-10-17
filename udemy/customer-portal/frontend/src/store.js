import { getAllProdutsReducer, getProductByIdReducer } from './reducers/productReducer';

import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CartReducer } from './reducers/cartReducer';
import { registerNewUserReducer, loginReducer, updateReducer } from './reducers/userReducer';
import { getOrdersByUserIdReducer, placeOrderReducer, getOrderByIdReducer } from './reducers/orderReducer';



const finalReducer = combineReducers({

  getAllProdutsReducer: getAllProdutsReducer,

  getProductByIdReducer: getProductByIdReducer,

  CartReducer: CartReducer,

  registerNewUserReducer: registerNewUserReducer,

  loginReducer: loginReducer,

  placeOrderReducer: placeOrderReducer,

  getOrdersByUserIdReducer: getOrdersByUserIdReducer,

  getOrderByIdReducer: getOrderByIdReducer,

  updateReducer:updateReducer



})

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')) : []


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null




const initialState = {

  CartReducer: { cartItems: cartItems },

  loginReducer: { currentUser: currentUser }


}






const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// initialState
const store = createStore(finalReducer, initialState, composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
))

export default store
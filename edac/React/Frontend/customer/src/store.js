

import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { registerNewUserReducer, loginReducer,updateReducer  } from './reducers/userReducer';
import { getAllProductsByPidReducer, getProductByIdReducer, getLatestMobilesReducer,getLatestEarphonesReducer } from './reducers/productReducer';
import { CartReducer } from './reducers/cartReducer';
import { placeOrderReducer, getOrdersByCustomerIdReducer, getOrderByIdReducer } from './reducers/orderReducer';


const finalReducer = combineReducers({

    
    registerNewUserReducer: registerNewUserReducer,
  
    loginReducer: loginReducer,

    updateReducer:updateReducer,

    getAllProductsByPidReducer: getAllProductsByPidReducer,

    getProductByIdReducer:getProductByIdReducer,

    CartReducer: CartReducer,


    placeOrderReducer : placeOrderReducer,

    getOrdersByCustomerIdReducer:getOrdersByCustomerIdReducer,
    
    getOrderByIdReducer:getOrderByIdReducer,


    getLatestMobilesReducer:getLatestMobilesReducer,

    getLatestEarphonesReducer:getLatestEarphonesReducer
  
      
  })


 

  const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  
 
  const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')) : []
  
  
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
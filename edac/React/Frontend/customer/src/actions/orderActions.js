import axios from "axios";
import { loginReducer } from "../reducers/userReducer";

import { url } from "./../common/common";

export const placeOrder = (token, subtotal) => (dispatch, getState) => {
  // const currentUserState = useSelector(state => state.loginReducer)

  // const {  currentUser } = currentUserState
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // const currentUser=getState().loginReducer.CurrentUser
  console.log(currentUser);

  const cartItems = getState().CartReducer.cartItems;

  console.log(cartItems);

  const itemDetails = new Array();

  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].mobileId) {
      console.log("inside mobile");

      var item1 = {
        mobileId: cartItems[i].mobileId,
        itemName: cartItems[i].mobileName,
        quantity: cartItems[i].quantity,
        price: cartItems[i].price,
      };
      itemDetails.push(item1);
    } else if (cartItems[i].laptopId) {
      console.log("inside laptop");

      var item2 = {
        laptopId: cartItems[i].laptopId,
        itemName: cartItems[i].laptopName,
        quantity: cartItems[i].quantity,
        price: cartItems[i].price,
      };
      itemDetails.push(item2);
    } else if (cartItems[i].earphoneId) {
      console.log("inside earphone");

      var item3 = {
        earphoneId: cartItems[i].earphoneId,
        itemName: cartItems[i].earphoneName,
        quantity: cartItems[i].quantity,
        price: cartItems[i].price,
      };
      itemDetails.push(item3);
    } else {
      var item4 = {
        tvId: cartItems[i].tvId,
        itemName: cartItems[i].tvName,
        quantity: cartItems[i].quantity,
        price: cartItems[i].price,
      };
      itemDetails.push(item4);
    }
  }

  console.log(itemDetails);

  dispatch({ type: "PLACE_ORDER_REQUEST" });

  axios
    .post(url + "/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      itemDetails,
    })
    .then((res) => {
      dispatch({ type: "PLACE_ORDER_SUCCESS" });

      localStorage.removeItem("cartItems");

      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "PLACE_OREDR_FAILED" });
    });
};

export const getOrdersByCustomerId = () => (dispatch, getState) => {
  const customerId = getState().loginReducer.currentUser.customerId;

  dispatch({ type: "GET_ORDERSBYCUSTOMERID_REQUEST" });

  axios
    .post(url + "/api/orders/getordersbycustomerid", { customerId: customerId })
    .then((res) => {
      dispatch({ type: "GET_ORDERSBYCUSTOMERID_SUCCESS", payload: res.data });

      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: "GET_ORDERSBYCUSTOMERID_FAILED", payload: err });
    });
};

export const getOrderById = (orderId) => (dispatch) => {
  dispatch({ type: "GET_ORDERBYID_REQUEST" });

  axios
    .post(url + "/api/orders/getorderbyid", { orderId: orderId })
    .then((res) => {
      dispatch({ type: "GET_ORDERBYID_SUCCESS", payload: res.data });

      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: "GET_ORDERBYID_FAILED", payload: err });
    });
};

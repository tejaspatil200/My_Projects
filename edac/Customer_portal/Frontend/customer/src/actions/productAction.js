import axios from "axios";
import { url } from "./../common/constants";

export const getAllProductsByPid = (productId) => (dispatch) => {
  dispatch({ type: "GET_ALLPRODUCTSBYPID_REQUEST" });

  axios
    .post(url + "/api/products/getallproductsbyid", { productId })
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_ALLPRODUCTSBYPID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_ALLPRODUCTSBYPID_FAILED", payload: err });
    });
};

export const getProductById = (product_ids) => (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID_REQUEST" });

  console.log(product_ids);

  axios
    .post(url + "/api/products/getproductbyid", product_ids)
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: err });
    });
};

export const getLatestMobiles = () => (dispatch) => {
  axios
    .get(url + "/api/products/getlatestmobiles")
    .then((res) => {
      dispatch({ type: "GET_LATESTMOBILES_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_LATESTMOBILES_FAILED", payload: err });
    });
};

export const getLatestEarphones = () => (dispatch) => {
  axios
    .get(url + "/api/products/getlatestearphones")
    .then((res) => {
      dispatch({ type: "GET_LATESTEARPHONES_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "GET_LATESTEARPHONES_FAILED", payload: err });
    });
};

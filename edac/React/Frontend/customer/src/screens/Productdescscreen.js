import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProductById } from "../actions/productAction";
import { useParams } from "react-router";
import { addToCart } from "../actions/cartActions";
import { url } from "./../common/common";
import Navbar from "./../components/navbar";

const Productdescscreen = () => {
  const [quantity, setquantity] = useState(1);

  const { productId, itemId } = useParams();

  const product_ids = {
    productId: productId,
    itemId: itemId,
  };

  // const url = 'http://localhost:4000'

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );

  const { product, error, loading } = getproductbyidstate;

  const dispatch = useDispatch();

  function Addtocart() {
    dispatch(addToCart(product, quantity));
  }

  useEffect(() => {
    console.log(product_ids);

    dispatch(getProductById(product_ids));
  }, []);

  return (
    <div className="cul2">
      <Navbar />
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <h1>someting went wrong</h1>
      ) : (
        [
          // (product.mobile_id ?
          //     (<h1>Loading....</h1> ) :(<h1>someting went wrong</h1>) ),

          product.mobileId ? (
            <div className="row">
              <div className="col-md-5">
                <div className="card p-2 m-2">
                  <h3>{product.mobileName}</h3>
                  <img
                    src={url + "/" + product.thumbnail}
                    className="img-fluid m-3 mbbigimg"
                  />
                  <h5>Description :</h5>

                  <p>{product.description}</p>
                </div>
              </div>
              <div className="col-md-6 text-start">
                <div className="m-2">
                  <table className=" tbl">
                    <h5 className="text-center">Specifications</h5>

                    <tr className="border">
                      <th>RAM :</th>
                      <td className="border">{product.ram}</td>
                    </tr>
                    <tr className="border">
                      <th>Brand :</th>
                      <td className="border">{product.brand}</td>
                    </tr>
                    <tr className="border">
                      <th>Battery :</th>
                      <td className="border">{product.battery}</td>
                    </tr>

                    <tr>
                      <th>Primary camera :</th>
                      <td className="border">{product.primaryCamera}</td>
                    </tr>
                    <tr className="border">
                      <th>Screen Resolution :</th>
                      <td className="border">{product.screenResolution}</td>
                    </tr>
                  </table>
                  <hr />

                  <h5>price : {product.price} Rs/-</h5>
                  <hr />
                  <h5>Select Quantity</h5>
                  <select
                    value={quantity}
                    onChange={(e) => {
                      setquantity(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x, i) => {
                      return <option value={i + 1}>{i + 1}</option>;
                    })}
                  </select>

                  <hr />
                  <button className="btn btn-dark" onClick={Addtocart}>
                    Add To cart
                  </button>
                </div>
              </div>
            </div>
          ) : product.earphoneId ? (
            <div className="row">
              <div className="col-md-5">
                <div className="card p-2 m-2">
                  <h3>{product.earphoneName}</h3>
                  <img
                    src={url + "/" + product.thumbnail}
                    className="img-fluid m-3 tvbigimg"
                  />
                  <h5>Description :</h5>

                  <p>{product.description}</p>
                </div>
              </div>
              <div className="col-md-6 text-start">
                <div className="m-2">
                  <table className=" tbl">
                    <h5 className="text-center">Specifications</h5>

                    <tr className="border">
                      <th>Brand :</th>
                      <td className="border">{product.brand}</td>
                    </tr>
                    <tr className="border">
                      <th>Connectivity :</th>
                      <td className="border">{product.connectivity}</td>
                    </tr>
                    <tr className="border">
                      <th>battery Life :</th>
                      <td className="border">{product.batteryLife}</td>
                    </tr>

                    <tr className="border">
                      <th>Charging :</th>
                      <td className="border">{product.charging}</td>
                    </tr>

                    <tr className="border">
                      <th>Mic :</th>
                      <td className="border">{product.mic}</td>
                    </tr>
                  </table>
                  <hr />
                  <h5>price : {product.price} Rs/-</h5>
                  <hr />
                  <h5>Select Quantity</h5>
                  <select
                    value={quantity}
                    onChange={(e) => {
                      setquantity(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x, i) => {
                      return <option value={i + 1}>{i + 1}</option>;
                    })}
                  </select>
                  <hr />
                  <button className="btn btn-dark" onClick={Addtocart}>
                    Add To cart
                  </button>
                </div>
              </div>
            </div>
          ) : product.laptopId ? (
            <div className="row">
              <div className="col-md-5">
                <div className="card p-2 m-2">
                  <h3>{product.laptopName}</h3>
                  <img
                    src={url + "/" + product.thumbnail}
                    className="img-fluid m-3 tvbigimg"
                  />
                  <h5>Description :</h5>

                  <p>{product.description}</p>
                </div>
              </div>
              <div className="col-md-6 text-start">
                <div className="m-2">
                  <table className=" tbl">
                    <h5 className="text-center">Specifications</h5>

                    <tr className="border">
                      <th>RAM :</th>
                      <td className="border">{product.ram}</td>
                    </tr>
                    <tr className="border">
                      <th>Brand :</th>
                      <td className="border">{product.brand}</td>
                    </tr>
                    <tr className="border">
                      <th>Operating System :</th>
                      <td className="border">{product.operatingSystem}</td>
                    </tr>

                    <tr>
                      <th>Screen Size :</th>
                      <td className="border">{product.ScreenSize}</td>
                    </tr>
                    <tr className="border">
                      <th>Processor :</th>
                      <td className="border">{product.processor}</td>
                    </tr>
                  </table>
                  <hr />

                  <h5>price : {product.price} Rs/-</h5>
                  <hr />
                  <h5>Select Quantity</h5>
                  <select
                    value={quantity}
                    onChange={(e) => {
                      setquantity(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x, i) => {
                      return <option value={i + 1}>{i + 1}</option>;
                    })}
                  </select>

                  <hr />
                  <button className="btn btn-dark" onClick={Addtocart}>
                    Add To cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-5">
                <div className="card p-2 m-2">
                  <h3>{product.tvName}</h3>
                  <img
                    src={url + "/" + product.thumbnail}
                    className="img-fluid m-3 tvbigimg"
                  />
                  <h5>Description :</h5>

                  <p>{product.description}</p>
                </div>
              </div>
              <div className="col-md-6 text-start">
                <div className="m-2">
                  <table className=" tbl">
                    <h5 className="text-center">Specifications</h5>

                    <tr className="border">
                      <th>Brand :</th>
                      <td className="border">{product.brand}</td>
                    </tr>
                    <tr className="border">
                      <th>Operating System :</th>
                      <td className="border">{product.operatingSystem}</td>
                    </tr>

                    <tr>
                      <th>Screen Size :</th>
                      <td className="border">{product.screenSize}</td>
                    </tr>
                    <tr className="border">
                      <th>Resolution :</th>
                      <td className="border">{product.resolution}</td>
                    </tr>

                    <tr>
                      <th>Screen Type :</th>
                      <td className="border">{product.screenType}</td>
                    </tr>
                  </table>
                  <hr />

                  <h5>price : {product.price} Rs/-</h5>
                  <hr />
                  <h5>Select Quantity</h5>
                  <select
                    value={quantity}
                    onChange={(e) => {
                      setquantity(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x, i) => {
                      return <option value={i + 1}>{i + 1}</option>;
                    })}
                  </select>

                  <hr />
                  <button className="btn btn-dark" onClick={Addtocart}>
                    Add To cart
                  </button>
                </div>
              </div>
            </div>
          ),
        ]
      )}
    </div>
  );
};

export default Productdescscreen;

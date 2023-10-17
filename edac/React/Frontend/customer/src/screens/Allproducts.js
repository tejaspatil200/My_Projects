import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByPid } from "./../actions/productAction";
import Product from "./../components/Product";
import Navbar from "./../components/navbar";

export default function Allproduct({ match }) {
  const productId = match.params.productId;

  const getallproductsbypidstate = useSelector(
    (state) => state.getAllProductsByPidReducer
  );

  const { products, error, loading } = getallproductsbypidstate;
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsByPid(productId));
  }, []);

  return (
    <div className="cul">
      <Navbar />
      <div className="row justify-content-center">
        {/* {loading ? (<h1>Loading....</h1>) : error ? (<h1>someting went wrong</h1>) : (<h1>{products.length}</h1>)} */}

        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>someting went wrong</h1>
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-3 m-2 card p-2">
                <Product product={product} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

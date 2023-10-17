import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getProductById } from '../actions/productActions'
import { addToCart } from './../actions/cartActions';

export default function Productdescscreen({ match }) {

    const productid = match.params.id

    const [quantity, setquantity] = useState(1)

    const getproductbyidstate = useSelector(state => state.getProductByIdReducer)
    
    const { product, error, loading } = getproductbyidstate

    const dispatch = useDispatch()


    function Addtocart() {
       
       // alert(quantity)
    dispatch(addToCart(product,quantity))
    
    }

  
    useEffect(() => {

        dispatch(getProductById(productid))


    }, [])


    return (
        <div>

            {loading ? (
                <h1>Loading....</h1>) : error ? (

                    <h1>someting went wrong</h1>) : (



                <div className="row">
                    <div className="col-md-6">
                        <div className="card p-2 m-2">

                            <h1>{product.name}</h1>
                            <img src={product.image} className="img-fluid m-3 bigimg" />
                            <p>{product.description}</p>

                        </div>


                    </div>

                    <div className="col-md-6 text-start">

                        <div className="m-2">

                            <h1 >price: {product.price}</h1>
                            <hr />
                            <h1>Select Quantity</h1>

                            <select value={quantity} onChange={(e) =>{setquantity(e.target.value)}}>

                                {[...Array(product.countInStock).keys()].map((x, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}


                            </select>
                            <hr />
                            <button className="btn btn-dark" onClick={Addtocart}>Add To cart</button>

                        </div>
                    </div>


                </div>


            )}



        </div>
    );
}
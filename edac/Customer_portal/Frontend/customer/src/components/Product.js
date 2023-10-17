import React from 'react'
import { Link } from 'react-router-dom'
import { url } from './../common/constants';




export default function Product({ product }) {  //product as a prop

    //const url ='http://localhost:4000'

    return (
        <div>

            {/* {product.mid ? ("") :product.eid ?("") :product.lid?(""):()} */}

            {product.mobileId ? (

                <div>

                    <Link to={`/${product.productId}/${product.mobileId}`}>

                        <img src={url +'/' +product.thumbnail} className="img-fluid" alt=" abc" />
                        <h5>{product.mobileName}</h5>
                        <h5> price: {product.price} Rs/-</h5>

                    </Link>
                </div>
            ) :
                product.earphoneId ? (

                    <div>

                        <Link to={`/${product.productId}/${product.earphoneId}`}>

                            <img src={url +'/' +product.thumbnail} className="img-fluid" />
                            <h5>{product.earphoneName}</h5>
                        <h5> price: {product.price} Rs/-</h5>

                        </Link>
                    </div>




                ) : product.laptopId ?
                    (
                        <div>

                            <Link to={`/${product.productId}/${product.laptopId}`}>

                                <img src={url+'/'+product.thumbnail} className="img-fluid" />
                                <h5>{product.laptopName}</h5>
                        <h5> price: {product.price} Rs/-</h5>

                            </Link>
                        </div>


                    ) : (  //else




                        <div>

                <Link to={`/${product.productId}/${product.tvId}`}>

                    <img src={url +'/' +product.thumbnail} className="img-fluid" />
                    <h5>{product.tvName}</h5>
                        <h5> price: {product.price} Rs/-</h5>

                </Link>
            </div>
                    )}





        </div>

    )

}
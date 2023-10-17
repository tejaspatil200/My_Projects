import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from './../components/Product';
import { getAllProducts } from './../actions/productActions';





export default function Homescreen() {

    const getallproductsstate = useSelector(state => state.getAllProdutsReducer)
                    //success
    const { loading, products, error } = getallproductsstate

    // const [products, setproducts] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {

        //     axios.get('/api/products/getallproducts').then(res => {

        //         console.log(res);
        //         setproducts(res.data)

        //     }).catch(err => {
        //         console.log(err);
        //     })


        dispatch(getAllProducts())

    }, [])


    return (
        <div>
            <div className="row justify-content-center">




                {/* {loading ? (<h1>Loading....</h1>) : error ? (<h1>someting went wrong</h1>) : (<h1>{products.length}</h1>)} */}

                {loading ? (
                <h1>Loading....</h1>) :
                 error ? (
                <h1>someting went wrong</h1>) : 
                
                (
                
                products.map(product=>{

                    return (
                    <div className ="col-md-3 m-2 card p-2">
                    <Product product={product}/>
                    </div>
                    )
                })
                
                
                )}


                {/* {products.length && (products.map(product => {

                    return <div className="col-md-3 m-2 card p-2" key={product.id}>
                        <Product product={product} />
                    </div>
                }))} */}

            </div>
        </div>
    )
}
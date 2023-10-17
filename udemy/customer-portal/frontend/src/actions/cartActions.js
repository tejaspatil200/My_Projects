export const addToCart=(product,quantity)=>(dispatch,getState)=>{

    const cartItem ={

        name :product.name,
        _id :product._id,
        price :product.price,
        countInStock :product.countInStock,
        quantity :quantity
    }

    dispatch({type:"ADD_TO_Cart" ,payload :cartItem})

    localStorage.setItem("cartItems",JSON.stringify(getState().CartReducer.cartItems))


}

export const deleteFromCart=(Item)=>(dispatch,getState)=>{

    dispatch({type :"DELETE_FROM_CART",payload :Item})

    localStorage.setItem("cartItems",JSON.stringify(getState().CartReducer.cartItems))

}
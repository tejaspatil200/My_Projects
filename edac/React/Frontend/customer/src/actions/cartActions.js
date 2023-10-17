export const addToCart = (product, quantity) => (dispatch, getState) => {

    if (product.mobileId) {

        const cartItem1 = {

            mobileName: product.mobileName,
            mobileId: product.mobileId,
            price: product.price,
            countInStock: product.countInStock,

            quantity: quantity

        }

        dispatch({ type: "ADD_MOBILE_TO_CART", payload: cartItem1 })





    }
    else if (product.laptopId) {

        const cartItem2 = {

            laptopName: product.laptopName,
            laptopId: product.laptopId,
            price: product.price,
            countInStock: product.countInStock,
            quantity: quantity


        }

        dispatch({ type: "Add_LAPTOP_TO_CART", payload: cartItem2 })



    }
    else if (product.earphoneId) {


        const cartItem3 = {

            earphoneName: product.earphoneName,
            earphoneId: product.earphoneId,
            price: product.price,
            countInStock: product.countInStock,
            quantity: quantity


        }


        dispatch({ type: "ADD_EARPHONE_TO_CART", payload: cartItem3 })





    } else {

        const cartItem4 = {

            tvName: product.tvName,
            tvId: product.tvId,
            price: product.price,
            countInStock: product.countInStock,
            quantity: quantity

        }

        dispatch({ type: "ADD_TV_TO_CART", payload: cartItem4 })



    }

    localStorage.setItem("cartItems", JSON.stringify(getState().CartReducer.cartItems))


}

export const deleteFromCart = (Item) => (dispatch, getState) => {


    dispatch({ type: "DELETE_FROM_CART", payload: Item })

    localStorage.setItem("cartItems", JSON.stringify(getState().CartReducer.cartItems))

}
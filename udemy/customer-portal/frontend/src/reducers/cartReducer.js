export const CartReducer = (state = { cartItems: [] }, action) => {

    switch (action.type)
     {

        case "ADD_TO_Cart":

            const alreadyexist = state.cartItems.find(item => item._id == action.payload._id)

            if (alreadyexist) {

                console.log("alreadyexist")
                return {
                    
                    ...state,
                    cartitems: state.cartItems.map(item => item._id == action.payload._id ? action.payload : item) //upadte the old item with new item
                }
            } else {


                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload] //already having products hence ...state.cartItems
                }
            }
            case "DELETE_FROM_CART" :
                return {

                    ...state,
                    cartItems :state.cartItems.filter(item =>{return item._id !== action.payload._id}) //delete logic filter and return item._id !== action.payload._id 
                }

        default: return state


    }

}
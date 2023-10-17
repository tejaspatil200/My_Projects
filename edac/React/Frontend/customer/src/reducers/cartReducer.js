export const CartReducer = (state = { cartItems: [] }, action) => {

    switch (action.type) {

        case "ADD_MOBILE_TO_CART":



            const alreadyexist = state.cartItems.find(item => item.mobileId == action.payload.mobileId)

            if (alreadyexist) {

                console.log(alreadyexist)
                return {

                    ...state,
                    cartitems: [state.cartItems.map(item =>
                        item.mobileId == action.payload.mobileId ? action.payload : item)] //loop through array and update the old item with new item
                }
            } else {

                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload] //already having products hence ...state.cartItems
                }
            }


        case "Add_LAPTOP_TO_CART":


            const Alreadyexist = state.cartItems.find(item => item.laptopId == action.payload.laptopId)

            if (Alreadyexist) {


                return {

                    ...state,
                    cartitems: [state.cartItems.map(item =>
                        item.laptopId == action.payload.laptopId ? action.payload : item)] //loop through array and update the old item with new item
                }
            } else {

                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload] //already having products hence ...state.cartItems
                }
            }

        case "ADD_EARPHONE_TO_CART":


            const exist = state.cartItems.find(item => item.earphoneId == action.payload.earphoneId)

            if (exist) {


                return {

                    ...state,
                    cartitems: [state.cartItems.map(item =>
                        item.earphoneId == action.payload.earphoneId ? action.payload : item)] //loop through array and update the old item with new item
                }
            } else {

                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload] //already having products hence ...state.cartItems
                }
            }


        case "ADD_TV_TO_CART":


            const Alreadypresent = state.cartItems.find(item => item.tvId == action.payload.tvId)

            if (Alreadypresent) {


                return {

                    ...state,
                    cartitems: [state.cartItems.map(item =>
                        item.tvId == action.payload.tvId ? action.payload : item)] //loop through array and update the old item with new item
                }
            } else {

                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload] //already having products hence ...state.cartItems
                }
            }



        case "DELETE_FROM_CART":
            return {

                ...state,
                cartItems: state.cartItems.filter(item => {

                    if (item.mobileId) {
                        return item.mobileId !== action.payload.mobileId   //delete logic using filter array and return item._id !== action.payload._id 
                    }
                    else if (item.laptopId) {
                        return item.laptopId !== action.payload.laptopId
                    }

                    else if (item.earphoneId) {
                        return item.earphoneId !== action.payload.earphoneId
                    }
                    else {
                        return item.tvId != action.payload.tvId
                    }
                })
            }
       
            default: return state


    }

}
export const placeOrderReducer = (state = {}, action) => {


    switch (action.type) {


        case 'PLACE_ORDER_REQUEST': return {
            ...state,
            loading: true
        }

        case 'PLACE_ORDER_SUCCESS': return {
            ...state,
            loading: false,
            success: true
        }

        case 'PLACE_ORDER_FAILED': return {
            ...state,
            loading: false,
            error: true
        }
        default: return { state }

    }
}



export const getOrdersByCustomerIdReducer = (state = {}, action) => {


    switch (action.type) {

        case 'GET_ORDERSBYCUSTOMERID_REQUEST': return {
            ...state,
            loading: true
        }

        case 'GET_ORDERSBYCUSTOMERID_SUCCESS': return {
            ...state,
            loading: false,
            success: true,
            orders:action.payload
        }

        case 'GET_ORDERSBYCUSTOMERID_FAILED': return {
            ...state,
            loading: false,
            error: true
        }
        default: return { state }

    }
}




export const getOrderByIdReducer = (state = {}, action) => {


    switch (action.type) {


        case 'GET_ORDERBYID_REQUEST': return {
            ...state,
            loading: true
        }

        case 'GET_ORDERBYID_SUCCESS': return {
            ...state,
            loading: false,
            success: true,
            order:action.payload
        }

        case 'GET_ORDERBYID_FAILED': return {
            ...state,
            loading: false,
            error: true
        }
        default: return { state }

    }
}
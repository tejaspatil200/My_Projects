export const registerNewUserReducer = (state = {}, action) => {

    switch (action.type) {

        case "USER_REGISTER_REQUEST": return {
            ...state,
            loading: true
        }
        case "USER_REGISTER_SUCCESS": return {
            ...state,  //  make a copy of the previous state and update the copy of it. 
            loading: false,
            success :true,
            error :false
        }
        case "USER_REGISTER_FAILED": return {
            ...state,
            loading: true,
            error :true
        }
        
        default: return state

    }

}



export const loginReducer = (state = {currentUser : []}, action) => {

    switch (action.type) {

        case "USER_LOGIN_REQUEST": return {
            loading: true
        }
        case "USER_LOGIN_SUCCESS": return {
            ...state,
            loading: false,
            success:true,
          //  currentUser :action.payload
            currentUser:action.payload

        }
        case "USER_LOGIN_FAILED": return {
            ...state,
            loading: false,
            error :"Invalid Credentials"
        }


        // case "USER_LOGOUT" :return{

        //     ...state
        // }

        default: return state

    }

}








export const updateReducer = (state = {}, action) => {

    switch (action.type) {

        case "USER_UPDATE_REQUEST": return {
            ...state,
            loading: true
        }
        case "USER_UPDATE_SUCCESS": return {
            ...state,//  make a copy of the previous state and update the copy of it. 
            loading: false,
            success :true,
            error :false
        }
        case "USER_UPDATE_FAILED": return {
            ...state,
            loading: false,
            error :true
        }
        
        default: return state

    }

}

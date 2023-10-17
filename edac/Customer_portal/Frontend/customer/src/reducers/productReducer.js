
export const getAllProductsByPidReducer=(state={products : []},action)=>{
    
    //state set keli product madhe product :action.payload, use it anywhere now

    //if there is no data it will not show the error hence initialize state with empty array of products

    switch(action.type)
    {

        case "GET_ALLPRODUCTSBYPID_REQUEST" :return {
            loading :true
        }
        case "GET_ALLPRODUCTSBYPID_SUCCESS" : return{
            products :action.payload,
            loading :false
        }
        case "GET_ALLPRODUCTSBYPID_FAILED" : return{
            error :action.payload,
            loading :false
        }
        default : return state
        
    }

}



export const getProductByIdReducer=(state={product : []},action)=>{
    
   
    switch(action.type)
    {

        case "GET_PRODUCTBYID_REQUEST" :return {
            loading :true
        }
        case "GET_PRODUCTBYID_SUCCESS" : return{
            product :action.payload,
            loading :false
        }
        case "GET_PRODUCTBYID_FAILED" : return{
            error :action.payload,
            loading :false
        }
        default : return state
        
    }

}




export const getLatestMobilesReducer=(state={latestmobiles : []},action)=>{
    
   
    switch(action.type)
    {

        case "GET_LATESTMOBILES_SUCCESS" : return{
            latestmobiles :action.payload,
            loading :false
        }
        case "GET_LATESTMOBILES_FAILED" : return{
            error :action.payload,
            loading :false
        }
        default : return state
        
    }

}




export const getLatestEarphonesReducer = (state={latestearphones: []},action)=>{
    
   
    switch(action.type)
    {

       
        case "GET_LATESTEARPHONES_SUCCESS" : return{
            latestearphones :action.payload,
           
        }
        case "GET_LATESTEARPHONES_FAILED" : return{
            err :action.payload,
            
        }
        default : return state
        
    }

}
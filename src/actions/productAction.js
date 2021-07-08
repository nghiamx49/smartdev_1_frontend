import { productContants } from "../constants"

export const getProductsRequest = () =>{
    console.log("action")
    return {
        type:productContants.GET_ALL_PRODUCTS
    }
}
export const getProductsSuccess = (data) =>{
    return {
        type:productContants.GET_ALL_PRODUCTS_SUCCESS,
        payload:data
    }
}

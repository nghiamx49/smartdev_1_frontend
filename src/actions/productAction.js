import { productContants } from "../constants"

export const getProductsRequest = () =>{
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

export const getProductDetailRequest = (id) =>{
    return {
        type:productContants.GET_PRODUCT_DETAIL,
        payload:id
    }
}
export const getProductDetailSuccess = (product) =>{
    return {
        type:productContants.GET_PRODUCT_DETAIL_SUCCESS,
        payload:product
    }
}
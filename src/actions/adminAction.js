import {adminContants} from '../constants/index'

export const getUser = ( status , token , page) => {
    return {
        type : adminContants.GET_ALL_USERS,
        payload : token,
        page : page, 
        status : status
    }
}

export const getProvider = (status ,token, page) => {
    return {
        type : adminContants.GET_ALL_PROVIDERS,
        payload : token,
        page : page,
        status: status
    }
}

export const getProviderSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_PROVIDERS_SUCCESS, 
        payload : data,
    }
}

export const getUserSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_USERS_SUCCESS, 
        payload : data,
    }
}

export const getAllProduct = (status ,token,page) => {
    return {
        type : adminContants.GET_ALL_PRODUCTS,
        payload : token,
        page : page,
        status
    }
}

export const getAllProductSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_PRODUCTS_SUCCESS, 
        payload : data,
    }
}

export const searchProduct = (status ,token, num) => {
    return {
        type : adminContants.SEARCH,
        payload : token,
        search : num.searchStr,
        status
    }
}

export const  searchProductSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_PRODUCTS_SUCCESS, 
        payload : data,
    }
}


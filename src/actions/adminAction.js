import {adminContants} from '../constants/index'

export const getUserAlowed = (token) => {
    return {
        type : adminContants.GET_ALL_USERS,
        payload : token,
    }
}


export const getProviderAllowed = (token) => {
    return {
        type : adminContants.GET_ALL_PROVIDERS,
        payload : token,
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

export const getProviderPending = (token) => {
    return {
        type : adminContants.GET_ALL_PROVIDERS_PENDING,
        payload : token,
    }
}

export const getProviderPendingSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_PROVIDERS_SUCCESS_PENDING, 
        payload : data,
    }
}

export const getAllProduct = (token) => {
    return {
        type : adminContants.GET_ALL_PRODUCTS,
        payload : token,
    }
}

export const getAllProductSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_PRODUCTS_SUCCESS, 
        payload : data,
    }
}

export const getAllProductPending = (token) => {
    return {
        type : adminContants.GET_ALL_PRODUCTS_PENDING,
        payload : token,
    }
}

export const getAllProductPendingSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_PRODUCTS_SUCCESS_PENDING, 
        payload : data,
    }
}

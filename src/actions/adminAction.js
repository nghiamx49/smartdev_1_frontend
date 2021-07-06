import {adminContants} from '../constants/index'

export const getUserAlowed = () => {
    return {
        type : adminContants.GET_ALL_USERS,
    }
}
export const getUserSuccess = (data) => {
    return {
        type :adminContants.GET_ALL_USERS_SUCCESS, 
        payload : data,
    }
}

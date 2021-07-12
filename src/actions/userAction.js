import { authenticateContants } from '../constants'

export const sendEmailRequest = (email)=>{
    return {
        type: authenticateContants.FORGOT_PASSWORD,
        payload: email
    }
}

export const sendEmailSuccess = (respone) =>{
    return {
        type: authenticateContants.FORGOT_PASSWORD_PROCESS_SUCCESS,
        payload: respone
    }
}

export const resetPasswordRequest = (data)=>{
    return {
        type: authenticateContants.RESET_PASSWORD,
        payload: data
    }
}


import * as contants from "../constants"

export const listRequest = (token) => {
    return {
      type: contants.providerContants.GET_ALL_OWN_PRODUCT,
      token:token
    };
  };

  export const listSuccess = (list) => {
    return {
      type:  contants.providerContants.GET_ALL_OWN_PRODUCT_SUCCESS,
      payload:list
    };
  };

  export const listRequestProductPending = (token) => {
    return {
      type: contants.providerContants.GET_ALL_OWN_PRODUCT_PENDING,
      token:token
    };
  };
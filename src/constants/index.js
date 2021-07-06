const adminPrefix = "ADMIN/";
const productPrefix = "PRODUCT/";
const cartPrefix = "CART/";
const authenticatePrefix = "AUTHENTICATE/";
const userPrefix = "USER/";
const providerPrefix = "PROVIDER/";

export const adminContants = {
  GET_ALL_PROVIDERS: `${adminPrefix}GET_ALL_PROVIDERS`,
  GET_ALL_PROVIDERS_SUCCESS: `${adminPrefix}GET_ALL_PROVIDERS_SUCCESS`,
  GET_ALL_PROVIDERS_FAILED: `${adminPrefix}GET_ALL_PROVIDERS_FAILED`,
  GET_ALL_USERS: `${adminPrefix}GET_ALL_USERS`,
  GET_ALL_USERS_SUCCESS: `${adminPrefix}GET_ALL_USERS_SUCCESS`,
  GET_ALL_USERS_FAILED: `${adminPrefix}GET_ALL_USERS_FAILED`,
};

export const productContants = {
  GET_ALL_PRODUCTS: `${productPrefix}GET_ALL_PRODUCTS`,
  GET_ALL_PRODUCTS_SUCCESS: `${productPrefix}GET_ALL_PRODUCTS_SUCCESS`,
  GET_PRODUCTS_BY_CATEGORY: `${productPrefix}GET_PRODUCTS_BY_CATEGORY`,
  GET_PRODUCTS_BY_CATEGORY_SUCCESS: `${productPrefix}GET_PRODUCTS_BY_CATEGORY_SUCCESS`,
  GET_PRODUCT_DETAIL: `${productPrefix}GET_PRODUCT_DETAIL`,
  GET_PRODUCT_DETAIL_SUCCESS: `${productPrefix}GET_PRODUCT_DETAIL_SUCCESS`,
  ADD_PRODUCT_TO_CART: `${productPrefix} ADD_PRODUCT_TO_CART`,
  ADD_PRODUCT_TO_CART_SUCCESS: `${productPrefix} ADD_PRODUCT_TO_CART_SUCCESS`,
};

export const cartContants = {
  GET_ALL_PRODUCTS_IN_CART: `${cartPrefix}GET_ALL_PRODUCTS_IN_CART`,
  GET_ALL_PRODUCTS_IN_CART_SUCCESS: `${cartPrefix}GET_ALL_PRODUCTS_IN_CART_SUCCESS`,
  REMOVE_PRODUCT_FROM_CART: `${cartPrefix}REMOVE_PRODUCT_FROM_CART`,
  REMOVE_PRODUCT_FROM_CART_SUCCESS: `${cartPrefix}REMOVE_PRODUCT_FROM_CART_SUCCESS`,
};

export const authenticateContants = {
  LOGIN: `${authenticatePrefix}LOGIN`,
  LOGIN_SUCCESS: `${authenticatePrefix}LOGIN_SUCCESS`,
  LOGIN_FAILED: `${authenticatePrefix}LOGIN_FAILED`,
  GET_USER_DETAIL: `${authenticatePrefix}GET_USER_DETAIL`,
  GET_USER_DETAIL_SUCCESS: `${authenticatePrefix}GET_USER_DETAIL_SUCCESS`,
  FORGOT_PASSWORD: `${authenticatePrefix}FORGOT_PASSWORD`,
  FORGOT_PASSWORD_PROCESS_SUCCESS: `${authenticatePrefix}FORGOT_PASSWORD_PROCESS_SUCCESS`,
  REGISTER_AS_USER: `${authenticatePrefix}REGISTER_AS_USER`,
  REGISTER_AS_USER_SUCCESS: `${authenticatePrefix}REGISTER_AS_USER_SUCCESS`,
  REGISTER_AS_PROVIDER: `${authenticatePrefix}REGISTER_AS_PROVIDER`,
  REGISTER_AS_PROVIDER_SUCCESS: `${authenticatePrefix}REGISTER_AS_PROVIDER_SUCCESS`,
};

export const userContants = {
  UPDATE_INFORMATION: `${userPrefix}UPDATE_INFORMATION`,
  UPDATE_INFORMATION_SUCCESS: `${userPrefix}UPDATE_INFORMATION_SUCCESS`,
  GET_ORDERS_HISTORY: `${userPrefix}GET_ORDERS_HISTORY`,
  GET_ORDERS_HISTORY_SUCCESS: `${userPrefix}GET_ORDERS_HISTORY_SUCCESS`,
  CHANGE_PASSWORD: `${userPrefix}CHANGE_PASSWORD`,
  CHANGE_PASSWORD_SUCCESS: `${userPrefix}CHANGE_PASSWORD_SUCCESS`,
  GET_ORDER_DETAIL: `${authenticatePrefix}GET_ORDER_DETAIL`,
  GET_ORDER_DETAIL_SUCCESS: `${authenticatePrefix}GET_ORDER_DETAIL_SUCCESS`,
};

export const providerContants = {
  GET_ALL_OWN_PRODUCT: `${providerPrefix}GET_ALL_OWN_PRODUCT`,
  GET_ALL_OWN_PRODUCT_SUCCESS: `${providerPrefix}GET_ALL_OWN_PRODUCT_SUCCESS`,
  ADD_NEW_PRODUCT: `${providerPrefix}ADD_NEW_PRODUCT`,
  ADD_NEW_PRODUCT_SUCCESS: `${providerPrefix}ADD_NEW_PRODUCT_SUCCESS`,
};

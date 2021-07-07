import { cartContants } from "../constants/";

const {
  GET_ALL_PRODUCTS_IN_CART,
  GET_ALL_PRODUCTS_IN_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART_SUCCESS,
} = cartContants;

export const getAllProductInCart = (token) => {
  return { type: GET_ALL_PRODUCTS_IN_CART, payload: token };
};

export const getCartSuccess = (data) => {
  return { type: GET_ALL_PRODUCTS_IN_CART_SUCCESS, payload: data };
};

export const removeCartItem = (id, token) => {
  return { type: REMOVE_PRODUCT_FROM_CART, payload: { id, token } };
};

export const removeItemSuccess = (id) => {
  return { type: REMOVE_PRODUCT_FROM_CART_SUCCESS, payload: id };
};

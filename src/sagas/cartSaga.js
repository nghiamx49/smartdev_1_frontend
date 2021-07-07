import { put, call, takeLatest } from "redux-saga/effects";

import cartService from "../apiServices/cartService";

import { cartContants } from "../constants/index";

import { getCartSuccess, removeItemSuccess } from "../actions/cartAction";

import { setLoading } from "../actions/loadingAction";
import { toast } from "react-toastify";

const { GET_ALL_PRODUCTS_IN_CART, REMOVE_PRODUCT_FROM_CART } = cartContants;

const { getAllProductInCart, removeProductFromCart } = cartService;

function* getCartItems(action) {
  try {
    const { payload } = action;
    let result;
    yield put(setLoading(true));
    result = yield call(getAllProductInCart, payload);
    yield put(getCartSuccess(result.data));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

function* removeCartItem({ payload }) {
  try {
    const { id, token } = payload;
    console.log(id + " " + token);
    let result = yield call(removeProductFromCart, { id, token });
    if (result.status === 200) {
      yield put(removeItemSuccess(id));
      return toast.success(result.message);
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* carSaga() {
  yield takeLatest(GET_ALL_PRODUCTS_IN_CART, getCartItems);
  yield takeLatest(REMOVE_PRODUCT_FROM_CART, removeCartItem);
}

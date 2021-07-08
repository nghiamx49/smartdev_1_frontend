import { takeLatest, put, call } from "redux-saga/effects";
import { getProductsSuccess } from "../actions/productAction";
import productService from "../apiServices/productService";
import { productContants } from "../constants";


function* getProducts() {
    console.log("saga")
    try {
        let data = yield call(productService.getAllProduct);
        console.log(data.data)
        if (data.status === 200) {
            yield put(getProductsSuccess(data.data.data));
        }
    } catch (e) {
        console.log(e);
    }
}

export default function* getProductsSaga() {
    yield takeLatest(productContants.GET_ALL_PRODUCTS, getProducts)
}
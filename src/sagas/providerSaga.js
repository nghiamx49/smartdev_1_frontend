import { takeLatest, put, call } from "redux-saga/effects";
import { listSuccess } from "../actions/providerAction";
import apiClient from "../apiServices/axiosClient";

import { providerContants } from "../constants";


function * getListProducts(action) {
    console.log(action)
    try {
        let data = yield call(apiClient.apiClientGet,'/provider/all_products/Allowed',action.token);
        console.log(data);
        if (data.status === 200) {
            yield put(listSuccess(data.data));
        }
    } catch (e) {
        console.log(e)
    }
}


function * getListProductsPending(action) {
    try {
        let data = yield call(apiClient.apiClientGet,'/provider/all_products/Pending',action.token);
        console.log(data);
        if (data.status === 200) {
            yield put(listSuccess(data.data));
        }
    } catch (e) {
        console.log(e)
    }
}

export default function* getListProductSaga() {
    yield takeLatest(providerContants.GET_ALL_OWN_PRODUCT, getListProducts)
    yield takeLatest(providerContants.GET_ALL_OWN_PRODUCT_PENDING, getListProductsPending)
}

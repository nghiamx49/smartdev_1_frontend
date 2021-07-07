import {call , put, takeLatest } from 'redux-saga/effects'
import AdminService from '../apiServices/adminService'
import {getUserSuccess , getProviderSuccess, getProviderPendingSuccess, getAllProductSuccess, getAllProductPendingSuccess} from '../actions/adminAction'
import {adminContants} from '../constants/index'


function* handleGetUser (action) {
    try {
        const response = yield call( AdminService.getAllUser,"not_ban" ,action.payload);
        if (response === undefined){
            response = [];
        }
        yield put(getUserSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

function* handleGetProvider (action) {
    try {
        const response = yield call( AdminService.getAllProvider,"Allowed" ,action.payload);
        if (response === undefined){
            response = [];
        }
        yield put(getProviderSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

function* handleGetProviderPending (action) {
    try {
        const response = yield call( AdminService.getAllProvider,"Pending" ,action.payload);
        if (response === undefined){
            response = [];
        }
        yield put(getProviderPendingSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

function* handleGetProduct (action) {
    try {
        const response = yield call( AdminService.getAllProduct,"Allowed" ,action.payload);
        if (response === undefined){
            response = [];
        }
        yield put(getAllProductSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

function* handleGetProductPending (action) {
    try {
        const response = yield call( AdminService.getAllProduct,"Pending" ,action.payload);
        if (response === undefined){
            response = [];
        }
        yield put(getAllProductPendingSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

export default function* watcherSaga () {
    yield takeLatest(adminContants.GET_ALL_USERS, handleGetUser)
    yield takeLatest(adminContants.GET_ALL_PROVIDERS, handleGetProvider)
    yield takeLatest(adminContants.GET_ALL_PROVIDERS_PENDING, handleGetProviderPending)
    yield takeLatest(adminContants.GET_ALL_PRODUCTS, handleGetProduct)
    yield takeLatest(adminContants.GET_ALL_PRODUCTS_PENDING, handleGetProductPending)
}


import {call , put, takeLatest } from 'redux-saga/effects'
import AdminService from '../apiServices/adminService'
import {getUserSuccess , getProviderSuccess, getAllProductSuccess} from '../actions/adminAction'
import {adminContants} from '../constants/index'


function* handleGetUser (action) {
    try {
        let response = yield call( AdminService.getAllUser,action.status ,action.payload , action.page , );
        if (response.data === undefined){
           
            response.data = [];
            response.pages = 1;
        }
        yield put(getUserSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

function* handleGetProvider (action) {
    try {
        let response = yield call( AdminService.getAllProvider,action.status ,action.payload ,  action.page);
        console.log(response);
        if (response.data === undefined){
            response = {
                data: [],
                pages : 1 ,
            };
        }
        yield put(getProviderSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

function* handleGetProduct (action) {
    try {
        let response = yield call( AdminService.getAllProduct,action.status ,action.payload ,  action.page);
        if (response.data === undefined){
            response = {
                data: [],
                pages : 1 ,
            };
        }
        yield put(getAllProductSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

function* handleSearchProduct (action) {
    try {
        let response = yield call( AdminService.searchProduct,action.status ,action.payload ,  action.search);
        if (response.data === undefined){
            response = {
                data: [],
                pages : 1 ,
            };
        }
        yield put(getAllProductSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

export default function* watcherSaga () {
    yield takeLatest(adminContants.GET_ALL_USERS, handleGetUser)
    yield takeLatest(adminContants.GET_ALL_PROVIDERS, handleGetProvider)
    yield takeLatest(adminContants.GET_ALL_PRODUCTS, handleGetProduct)
    yield takeLatest(adminContants.SEARCH, handleSearchProduct)
}


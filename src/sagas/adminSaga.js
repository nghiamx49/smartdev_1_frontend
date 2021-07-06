import {call , put, takeLatest } from 'redux-saga/effects'
import AdminService from '../apiServices/adminService'
import {getUserSuccess} from '../actions/adminAction'
import {adminContants} from '../constants/index'


function* handleGetUser (action) {
    try {
        const response = yield call( AdminService.getAllUser,"not_ban");
        yield put(getUserSuccess(response));
    } catch (error) {
        console.log(error)
    }
}

export default function* watcherSaga () {
    yield takeLatest(adminContants.GET_ALL_USERS, handleGetUser)
}


import { put, call, takeLatest } from "redux-saga/effects";

import authenticateService from "../apiServices/authenticateService";

import { authenticateContants } from "../constants/index";

import { loginSuccess } from "../actions/authenticateAction";

const { LOGIN } = authenticateContants;

const { login } = authenticateService;

function* doLogin(action) {
  try {
    const { payload } = action;
    let data;
    data = yield call(login, payload);
    console.log(data);
    yield put(loginSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* authenticateSaga() {
  yield takeLatest(LOGIN, doLogin);
}

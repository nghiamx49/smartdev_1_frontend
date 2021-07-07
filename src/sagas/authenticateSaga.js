import { put, call, takeLatest } from "redux-saga/effects";

import authenticateService from "../apiServices/authenticateService";

import { authenticateContants } from "../constants/index";

import { loginSuccess } from "../actions/authenticateAction";

import { setLoading } from "../actions/loadingAction";

import { toast } from "react-toastify";

const { LOGIN } = authenticateContants;

const { login } = authenticateService;

function* doLogin(action) {
  try {
    const { payload } = action;
    yield put(setLoading(true));
    let result;
    result = yield call(login, payload);
    yield put(setLoading(false));
    if (result.status === 200) {
      yield put(loginSuccess(result));
      return toast.success(result.message);
    }
    return toast.error(result.message);
  } catch (error) {
    console.log(error);
  }
}

export default function* authenticateSaga() {
  yield takeLatest(LOGIN, doLogin);
}

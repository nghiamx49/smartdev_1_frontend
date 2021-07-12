import { put, call, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from './history';
import { authenticateContants } from "../constants/index";
import { sendEmailSuccess } from '../actions/userAction'
import userService from '../apiServices/userService'

// function forwardTo(location) {
//   history.push(location);
// }

function* sendEmail(action) {
  try {
    let result = yield call(userService.changePassword, action.payload);
    if (result.status === 200) {
      // yield call(forwardTo, '/verify_otp');
      history.push('/verify_otp'); //  Redirect to Post Page
      yield put(sendEmailSuccess(result.data.data));
      return;
    }
    return toast(<h3 color="black">{result.data.message}</h3>);
  } catch (error) {
    console.log('error' + error);
  }
}

function* resetPassword(action) {
  try {
    let result = yield call(userService.resetPassword, action.payload);
    console.log(result);
    if (result.status === 200) {
      toast(<h3 color="black">{result.data.message}</h3>);
      return window.location.href = 'home';

    }
    return toast(<h3 color="black">{result.data.message}</h3>);
  } catch (error) {
    console.log(error);
  }
}

export default function* authenticateSaga() {
  yield takeLatest(authenticateContants.FORGOT_PASSWORD, sendEmail);
  yield takeLatest(authenticateContants.RESET_PASSWORD, resetPassword);
}

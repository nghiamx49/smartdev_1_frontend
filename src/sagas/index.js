import authenticateSaga from "./authenticateSaga";
import cartSaga from "./cartSaga";
import { all } from "redux-saga/effects";
import userSaga from './userSaga'

export default function* rootSaga() {
  /*all: khá tương đồng với Promise.all. 
    Nó sẽ cho phép tất cả các tasks chạy song song và đợi tất cả chúng trả về kết quả mới kết thúc
    */
  yield all([authenticateSaga(), cartSaga(), userSaga()]);
}

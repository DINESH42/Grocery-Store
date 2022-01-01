import { all } from "redux-saga/effects";
import LoginUserTokenSaga from "./LoginUserSaga";

export default function* rootSaga(params) {
  yield all([LoginUserTokenSaga()]);
}

import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN_USER } from "../../constants";

// const API_LINK = HomeEndpoint + "/login";

function loginUserTokenSaga(action) {
  //   const { Name, Password } = action.request;
  //   return fetch(API_LINK, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: Name,
  //       password: Password,
  //     }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  console.log("API Calling function!");
}

function* UserLoginInfo(action) {
  try {
    const userLoginInformation = yield call(loginUserTokenSaga, action);
    if (userLoginInformation.errorCode === undefined) {
      yield put({
        type: LOGIN_USER.LOGIN_USER_SUCCESS,
        payload: userLoginInformation,
      });
    } else {
      yield put({
        type: LOGIN_USER.LOGIN_USER_FAILED,
        message: userLoginInformation.errorMessage,
      });
    }
  } catch (error) {
    yield put({ type: LOGIN_USER.LOGIN_USER_FAILED, message: error });
  }
}

function* LoginUserTokenSaga() {
  yield takeEvery(LOGIN_USER.LOGIN_USER_REQUESTED, UserLoginInfo);
}

export default LoginUserTokenSaga;

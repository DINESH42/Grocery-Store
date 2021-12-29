import { LOGIN_USER } from "../../constants";

export const UserResponse = {
  userInfo: undefined,
  loading: false,
  UserLoggedIn: false,
  error: null,
};

export const LoginUserReducer = (state = UserResponse, actions) => {
  switch (actions.type) {
    case LOGIN_USER.LOGIN_USER_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USER.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        UserLoggedIn: true,
        userInfo: actions.payload,
      };
    case LOGIN_USER.LOGIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: actions.message,
      };
    default:
      return state;
  }
};

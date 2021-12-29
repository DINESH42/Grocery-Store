import { SIGN_UP_USER } from "../../constants";

export const UserResponse = {
  userInfo: undefined,
  loading: false,
  UserSignUp: false,
  error: null,
};

export const SignUpUserReducer = (state = UserResponse, actions) => {
  switch (actions.type) {
    case SIGN_UP_USER.SIGN_UP_USER_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGN_UP_USER.SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        UserSignUp: true,
        userInfo: actions.payload,
      };
    case SIGN_UP_USER.SIGN_UP_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: actions.message,
      };
    default:
      return state;
  }
};

import { LOGIN_USER } from "../../constants";

export const LoginUserAction = (loginrequest) => {
  return {
    type: LOGIN_USER.LOGIN_USER_REQUESTED,
    request: loginrequest,
  };
};

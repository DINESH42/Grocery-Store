import { SIGN_UP_USER } from "../../constants";

export const SignUpUserAction = (signuprequest) => {
  return {
    type: SIGN_UP_USER.SIGN_UP_USER_REQUESTED,
    request: signuprequest,
  };
};

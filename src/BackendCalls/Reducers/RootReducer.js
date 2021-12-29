import { combineReducers } from "redux";
import { LoginUserReducer } from "./LoginUserReducer";
import { SignUpUserReducer } from "./SignUpUserReducer";

const rootReducers = combineReducers({
  SignUpUser: SignUpUserReducer,
  LoginUser: LoginUserReducer,
});

export default rootReducers;

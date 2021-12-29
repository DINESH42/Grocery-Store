import { createStore } from "redux";
import reducers from "./Reducers/RootReducer";

export const store = createStore(reducers, {});

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { productReducer } from "../ProductRedux/prodReducer";
import thunk from "redux-thunk";
import { authReducer } from "../AuthRedux/authReducer";

export const combine = combineReducers({
  app: productReducer,
  auth: authReducer
});
export const store = createStore(combine, applyMiddleware(thunk));

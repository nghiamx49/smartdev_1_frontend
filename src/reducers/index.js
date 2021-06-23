import { combineReducers } from "redux";

import adminReducer from "./admin";
import authenticateReducer from "./authenticate";
import cartReducer from "./cart";
import productReducer from "./product";
import providerReducer from "./provider";
import userReducer from "./users";

const rootReducer = combineReducers({
  adminReducer,
  authenticateReducer,
  cartReducer,
  productReducer,
  providerReducer,
  userReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistsConfg = {
  key: "root",
  storage,
};

export default rootReducer;

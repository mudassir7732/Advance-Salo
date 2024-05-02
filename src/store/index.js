import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/loginSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import loanRequests from "./reducers/loanRequests";
import toggleSidebar from "./reducers/toggleSidebar";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login: loginSlice,
  loanRequests: loanRequests,
  toggle: toggleSidebar,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
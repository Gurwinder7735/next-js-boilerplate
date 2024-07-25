import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/index";
import alertsReducer from "./features/auth/index";

const appReducer = combineReducers({
  auth: authReducer,
  alerts: alertsReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
